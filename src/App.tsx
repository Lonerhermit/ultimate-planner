import React, { useState, useMemo } from 'react';
import { allCourses, DepartmentRegistry } from './data';
import './index.css';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const TIME_SLOTS = [
  '08:00 AM',
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
];

export default function App() {
  const [university, setUniversity] = useState('AIUB');
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourses, setSelectedCourses] = useState<any[]>([]);

  const filteredCourses = useMemo(() => {
    let list = (allCourses || []).filter((c) => c.uni === university);

    if (selectedDept !== 'All') {
      const registryKey = `${university}_${selectedDept.toUpperCase()}`;
      const curriculum = DepartmentRegistry?.[registryKey] || [];

      list = list.filter((course) => {
        const name = course.name.toUpperCase();
        const dept = selectedDept.toUpperCase();

        // Standard check
        if (name.startsWith(dept)) return true;

        // NSU Specific mapping for BBA and Pharmacy
        if (university === 'NSU') {
          if (dept === 'PHARMACY' && name.startsWith('PHRM')) return true;
          if (
            dept === 'BBA' &&
            (name.startsWith('BUS') ||
              name.startsWith('ACT') ||
              name.startsWith('MKT') ||
              name.startsWith('MGT') ||
              name.startsWith('FIN') ||
              name.startsWith('ECO'))
          )
            return true;
        }

        // Registry check
        return curriculum.some((curr) =>
          name.includes(curr.name.toUpperCase())
        );
      });
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toUpperCase();
      list = list.filter(
        (c) => c.name.toUpperCase().includes(q) || c.id.toString().includes(q)
      );
    }
    return list;
  }, [university, selectedDept, searchQuery]);

  const getBaseName = (name: string) =>
    name.split('[')[0].split(':')[0].trim().toUpperCase();

  const addCourse = (course: any) => {
    const isAlreadySelected = selectedCourses.some(
      (c) => getBaseName(c.name) === getBaseName(course.name)
    );
    if (isAlreadySelected) return;
    const color = `hsla(${Math.random() * 360}, 65%, 40%, 1)`;
    setSelectedCourses([...selectedCourses, { ...course, color }]);
  };

  const removeCourse = (id: string) => {
    setSelectedCourses(selectedCourses.filter((c) => c.id !== id));
  };

  return (
    <div className="ultimate-planner">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>
            Ultimate <span>Planner</span>
          </h1>
          <div className="uni-toggle">
            <button
              className={university === 'AIUB' ? 'active' : ''}
              onClick={() => setUniversity('AIUB')}
            >
              AIUB
            </button>
            <button
              className={university === 'NSU' ? 'active' : ''}
              onClick={() => setUniversity('NSU')}
            >
              NSU
            </button>
          </div>
        </div>

        <div className="controls">
          <label>Department</label>
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
          >
            <option value="All">All Courses</option>
            <option value="CSE">CSE</option>
            <option value="EEE">EEE</option>
            <option value="BBA">BBA</option>
            <option value="PHARMACY">PHARMACY</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="course-list">
          {filteredCourses.slice(0, 50).map((course) => {
            const isSelected = selectedCourses.some(
              (c) => getBaseName(c.name) === getBaseName(course.name)
            );
            return (
              <div
                key={course.id}
                className={`course-card ${isSelected ? 'disabled' : ''}`}
                onClick={() => !isSelected && addCourse(course)}
              >
                <div className="info">
                  <strong>{course.name}</strong>
                  <span>
                    Sec: {course.sec} | ID: {course.id}
                  </span>
                </div>
                <button className="add-btn" disabled={isSelected}>
                  {isSelected ? '✓' : '+'}
                </button>
              </div>
            );
          })}
        </div>
      </aside>

      <main className="routine-container">
        <div className="routine-header">
          <h2>{university} Routine</h2>
          <button className="clear-btn" onClick={() => setSelectedCourses([])}>
            Reset
          </button>
        </div>

        <div className="grid-wrapper">
          <div className="routine-grid">
            <div className="time-col">
              <div className="grid-cell header">Time</div>
              {TIME_SLOTS.map((t) => (
                <div key={t} className="grid-cell time">
                  {t}
                </div>
              ))}
            </div>
            {DAYS.map((day) => (
              <div key={day} className="day-col">
                <div className="grid-cell header">{day}</div>
                {TIME_SLOTS.map((time) => {
                  const [hStr, mStr] = time.split(/[:\s]/);
                  let h = parseInt(hStr);
                  if (time.includes('PM') && h !== 12) h += 12;
                  if (time.includes('AM') && h === 12) h = 0;
                  const slotStart = h * 60 + parseInt(mStr);
                  const slotEnd = slotStart + 60;

                  const sessions = selectedCourses
                    .flatMap((c) =>
                      (c.schedule || []).map((s: any) => ({ ...s, parent: c }))
                    )
                    .filter((s) => {
                      const sStart = s.start < 24 ? s.start * 60 : s.start;
                      return (
                        s.day === day && sStart >= slotStart && sStart < slotEnd
                      );
                    });

                  return (
                    <div key={day + time} className="grid-cell">
                      {sessions.map((session, idx) => (
                        <div
                          key={idx}
                          className="solid-course-block"
                          style={{ backgroundColor: session.parent.color }}
                        >
                          <button
                            className="block-remove-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeCourse(session.parent.id);
                            }}
                          >
                            ×
                          </button>
                          <div className="block-content">
                            <span className="block-title">
                              {session.parent.name.split(':')[0].trim()}
                            </span>
                            <span className="block-sec">
                              Sec: {session.parent.sec}
                            </span>
                            <span className="block-time">
                              {session.start_str} - {session.end_str}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
