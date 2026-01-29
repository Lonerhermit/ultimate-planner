import React, { useState, useMemo, useRef } from 'react';
import { allCourses } from './data';
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
  const gridRef = useRef<HTMLDivElement>(null);

  const downloadRoutine = async () => {
    if (gridRef.current === null) return;
    try {
      const htmlToImage = await import('https://cdn.skypack.dev/html-to-image');
      const dataUrl = await htmlToImage.toPng(gridRef.current, {
        cacheBust: true,
        backgroundColor: '#0f172a',
      });
      const link = document.createElement('a');
      link.download = `${university}-routine.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Download failed', err);
      alert('Download failed. Please take a screenshot.');
    }
  };

  const filteredCourses = useMemo(() => {
    let list = (allCourses || []).filter((c) => c.uni === university);

    // Shared subjects keywords to prevent them from going missing
    const sharedKeys = [
      'MAT',
      'PHY',
      'ENG',
      'BAS',
      'BANGLA',
      'CHEM',
      'BIO',
      'STAT',
      'ECO',
      'SOC',
      'PHIL',
      'ART',
    ];

    if (selectedDept !== 'All') {
      list = list.filter((course) => {
        const name = course.name.toUpperCase();

        // Show shared courses regardless of department selection
        const isShared = sharedKeys.some((k) => name.includes(k));
        if (isShared) return true;

        if (university === 'AIUB') {
          const cseKeys = [
            'CSC',
            'COE',
            'BSE',
            'DS',
            'CNCS',
            'COMP',
            'DATA',
            'CYBER',
          ];
          const eeeKeys = ['EEE', 'COE', 'ELECT', 'POWER'];
          const bbaKeys = [
            'BBA',
            'MGT',
            'MKT',
            'MIS',
            'FIN',
            'ACT',
            'BUS',
            'HRM',
            'SCM',
          ];
          const pharmaKeys = ['PHA', 'PHR'];

          if (selectedDept === 'CSE')
            return cseKeys.some((k) => name.includes(k));
          if (selectedDept === 'EEE')
            return eeeKeys.some((k) => name.includes(k));
          if (selectedDept === 'BBA')
            return bbaKeys.some((k) => name.includes(k));
          if (selectedDept === 'PHARMACY')
            return pharmaKeys.some((k) => name.includes(k));
        }
        return name.startsWith(selectedDept.toUpperCase());
      });
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toUpperCase();
      list = list.filter(
        (c) =>
          c.name.toUpperCase().includes(q) ||
          c.id.toString().includes(q) ||
          c.sec.toUpperCase().includes(q)
      );
    }
    return list;
  }, [university, selectedDept, searchQuery]);

  const getBaseName = (name: string) =>
    name.split('[')[0].split(':')[0].trim().toUpperCase();

  const addCourse = (course: any) => {
    // Check if course already exists
    if (
      selectedCourses.some(
        (c) => getBaseName(c.name) === getBaseName(course.name)
      )
    )
      return;

    // Conflict detection
    for (const selected of selectedCourses) {
      for (const newS of course.schedule) {
        for (const oldS of selected.schedule) {
          if (
            newS.day === oldS.day &&
            newS.start < oldS.end &&
            newS.end > oldS.start
          ) {
            alert(
              `⚠️ TIME CONFLICT!\n"${course.name}" overlaps with "${selected.name}"`
            );
            return;
          }
        }
      }
    }
    const color = `hsla(${Math.random() * 360}, 65%, 45%, 1)`;
    setSelectedCourses([...selectedCourses, { ...course, color }]);
  };

  const removeCourse = (id: string) =>
    setSelectedCourses(selectedCourses.filter((c) => c.id !== id));

  return (
    <div
      className="ultimate-planner"
      style={{ display: 'flex', minHeight: '100vh', width: '100%' }}
    >
      {/* SIDEBAR */}
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
            <option value="CSE">FST (CSE/CS/DS)</option>
            <option value="EEE">FE (EEE/COE)</option>
            <option value="BBA">FBA (BBA/ECO)</option>
            <option value="PHARMACY">Pharmacy / FASS</option>
          </select>
          <input
            type="text"
            placeholder="Search by name or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="course-list">
          {filteredCourses.slice(0, 100).map((course) => (
            <div
              key={course.id}
              className="course-card"
              onClick={() => addCourse(course)}
            >
              <div className="info">
                <strong>{course.name}</strong>
                <span>
                  Sec: {course.sec} | ID: {course.id}
                </span>
              </div>
              <button className="add-btn">+</button>
            </div>
          ))}
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main
        className="routine-container"
        style={{
          flex: 1,
          overflowY: 'auto',
          backgroundColor: '#0f172a',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ flex: '1 0 auto', padding: '20px' }}>
          <div className="routine-header">
            <h2>{university} Routine Builder</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={downloadRoutine}
                style={{
                  background: '#38bdf8',
                  color: '#0f172a',
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Download PNG
              </button>
              <button
                onClick={() => setSelectedCourses([])}
                style={{
                  background: '#334155',
                  color: '#fff',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Reset
              </button>
            </div>
          </div>

          <div className="grid-wrapper" ref={gridRef}>
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
                    const slotStart = h * 60 + parseInt(mStr);
                    const sessions = selectedCourses
                      .flatMap((c) =>
                        (c.schedule || []).map((s: any) => ({
                          ...s,
                          parent: c,
                        }))
                      )
                      .filter((s) => {
                        const sStart = s.start < 24 ? s.start * 60 : s.start;
                        return (
                          s.day === day &&
                          sStart >= slotStart &&
                          sStart < slotStart + 60
                        );
                      });
                    return (
                      <div key={day + time} className="grid-cell">
                        {sessions.map((s, i) => (
                          <div
                            key={i}
                            className="solid-course-block"
                            style={{ backgroundColor: s.parent.color }}
                          >
                            <button
                              className="block-remove-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeCourse(s.parent.id);
                              }}
                            >
                              ×
                            </button>
                            <div className="block-content">
                              <span className="block-title">
                                {s.parent.name.split(':')[0]}
                              </span>
                              <span className="block-sec">
                                Sec: {s.parent.sec}
                              </span>
                              <span className="block-time">
                                {s.start_str}-{s.end_str}
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
        </div>

        {/* FOOTER: ABOUT, HOW TO USE & CONTACT */}
        <footer
          style={{
            flexShrink: 0,
            padding: '60px 20px',
            backgroundColor: '#020617',
            borderTop: '1px solid #1e293b',
            color: '#94a3b8',
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '50px',
            }}
          >
            <div>
              <h3
                style={{
                  color: '#f8fafc',
                  fontSize: '1.5rem',
                  marginBottom: '20px',
                }}
              >
                About Ultimate Planner AIUB
              </h3>
              <p style={{ lineHeight: '1.7', marginBottom: '15px' }}>
                Ultimate Planner AIUB is a specialized routine builder for
                students at AIUB and NSU. Our tool makes it easy to visualize
                your semester and avoid time conflicts.
              </p>
              <div
                style={{
                  marginTop: '20px',
                  padding: '10px 0',
                  borderTop: '1px solid #1e293b',
                }}
              >
                <p style={{ fontSize: '0.9rem' }}>
                  <strong>Contact:</strong>{' '}
                  <a
                    href="mailto:arefinalmahi@gmail.com"
                    style={{ color: '#38bdf8', textDecoration: 'none' }}
                  >
                    arefinalmahi@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3
                style={{
                  color: '#f8fafc',
                  fontSize: '1.5rem',
                  marginBottom: '20px',
                }}
              >
                How to Use
              </h3>
              <ul style={{ paddingLeft: '20px', lineHeight: '2' }}>
                <li>Filter by Department or Search by Course Name/ID.</li>
                <li>Add sections to the grid using the '+' button.</li>
                <li>Clashes are automatically detected and blocked.</li>
                <li>Download your routine as a PNG image when finished.</li>
              </ul>
            </div>
          </div>
          <p
            style={{
              textAlign: 'center',
              marginTop: '40px',
              fontSize: '0.8rem',
              opacity: 0.5,
            }}
          >
            © 2026 Ultimate Planner AIUB - All Rights Reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
