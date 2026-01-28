import { nsuCourses } from './nsuData';
import { nsuCseCurriculum } from './nsuCseCurriculum';
import { nsuBbaCurriculum } from './nsuBbaCurriculum';
import { nsuPharCurriculum } from './nsuPharCurriculum';
import { nsuEeeCurriculum } from './nsuEeeCurriculum';

import { cseCurriculum } from './cseData';
import { ipeCurriculum } from './ipeData';
import { eeeCurriculum } from './eeeData';
import { bbaCurriculum } from './bbaData';
import { pharmacyCurriculum } from './pharmacyData';

const aiubCourses = [
  {
    id: '00001',
    name: 'INTRODUCTION TO PHARMACY [L1]',
    sec: 'L1',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 760 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 760 },
    ],
  },
  {
    id: '00002',
    name: 'PHARMACOGNOSY & NUTRACEUTICALS [L1]',
    sec: 'L1',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 960 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 960 },
    ],
  },
  {
    id: '00003',
    name: 'PHARMACOGNOSY & NUTRACEUTICALS LAB [L1-A]',
    sec: 'L1-A',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 660 }],
  },
  {
    id: '00004',
    name: 'PHARMACOGNOSY & NUTRACEUTICALS LAB [L1-B]',
    sec: 'L1-B',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 660 }],
  },
  {
    id: '00005',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00006',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00007',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [B1]',
    sec: 'B1',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00008',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [B2]',
    sec: 'B2',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00009',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [B3]',
    sec: 'B3',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00010',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [B4]',
    sec: 'B4',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00011',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [B5]',
    sec: 'B5',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00012',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [B6]',
    sec: 'B6',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00013',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [B7]',
    sec: 'B7',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00014',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [B8]',
    sec: 'B8',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00015',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [C1]',
    sec: 'C1',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00016',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [C2]',
    sec: 'C2',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00017',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [C3]',
    sec: 'C3',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00018',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [C4]',
    sec: 'C4',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00019',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [C5]',
    sec: 'C5',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00020',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [C6]',
    sec: 'C6',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00021',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [C7]',
    sec: 'C7',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00022',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [C8]',
    sec: 'C8',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00023',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [C9]',
    sec: 'C9',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00024',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [C10]',
    sec: 'C10',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00025',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [D1]',
    sec: 'D1',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00026',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [L1]',
    sec: 'L1',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00027',
    name: 'COMPUTER FUNDAMENTALS (BA) [E1]',
    sec: 'E1',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00028',
    name: 'COMPUTER FUNDAMENTALS (BA) [E2]',
    sec: 'E2',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00029',
    name: 'COMPUTER FUNDAMENTALS (BA) [E3]',
    sec: 'E3',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00030',
    name: 'COMPUTER FUNDAMENTALS (BSSE) [H1]',
    sec: 'H1',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00031',
    name: 'COMPUTER FUNDAMENTALS (BSSE) [H2]',
    sec: 'H2',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00032',
    name: 'COMPUTER FUNDAMENTALS [L1]',
    sec: 'L1',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00033',
    name: 'COMPUTER FUNDAMENTALS LAB [L1]',
    sec: 'L1',
    schedule: [{ day: 'Thu', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00034',
    name: 'JURISPRUDENCE [F1]',
    sec: 'F1',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 660 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 660 },
    ],
  },
  {
    id: '00035',
    name: 'JURISPRUDENCE [F2]',
    sec: 'F2',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 660 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 660 },
    ],
  },
  {
    id: '00036',
    name: 'LEGAL SYSTEM OF BANGLADESH [F1]',
    sec: 'F1',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 760 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 760 },
    ],
  },
  {
    id: '00037',
    name: 'LEGAL SYSTEM OF BANGLADESH [F2]',
    sec: 'F2',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 860 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 860 },
    ],
  },
  {
    id: '00038',
    name: 'LEGAL HISTORY [F1]',
    sec: 'F1',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 960 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 960 },
    ],
  },
  {
    id: '00039',
    name: 'LEGAL HISTORY [F2]',
    sec: 'F2',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 560 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 560 },
    ],
  },
  {
    id: '00040',
    name: 'FRESHMAN ORIENTATION [F1]',
    sec: 'F1',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00041',
    name: 'FRESHMAN ORIENTATION [F2]',
    sec: 'F2',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00042',
    name: 'INTERMEDIATE ENGLISH [F1]',
    sec: 'F1',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00043',
    name: 'INTERMEDIATE ENGLISH [F2]',
    sec: 'F2',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00044',
    name: 'LAW OF CONTRACT [F1]',
    sec: 'F1',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 760 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 760 },
    ],
  },
  {
    id: '00045',
    name: 'LAW OF CONTRACT [F2]',
    sec: 'F2',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 860 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 860 },
    ],
  },
  {
    id: '00046',
    name: 'HUMAN ANATOMY & PHYSIOLOGY-I [S2-A]',
    sec: 'S2-A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 560 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 560 },
    ],
  },
  {
    id: '00047',
    name: 'INORGANIC PHARMACY I [S2-A]',
    sec: 'S2-A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 660 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 660 },
    ],
  },
  {
    id: '00048',
    name: 'INORGANIC PHARMACY I LAB [S2-A]',
    sec: 'S2-A',
    schedule: [{ day: 'Mon', time: '11:00 AM', start: 660, end: 840 }],
  },
  {
    id: '00049',
    name: 'INORGANIC PHARMACY I LAB [S2-B]',
    sec: 'S2-B',
    schedule: [{ day: 'Wed', time: '11:00 AM', start: 660, end: 840 }],
  },
  {
    id: '00050',
    name: 'ORGANIC PHARMACY-I [S2-A]',
    sec: 'S2-A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 760 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 760 },
    ],
  },
  {
    id: '00051',
    name: 'ORGANIC PHARMACY-I LAB [S2-A]',
    sec: 'S2-A',
    schedule: [{ day: 'Wed', time: '11:00 AM', start: 660, end: 840 }],
  },
  {
    id: '00052',
    name: 'ORGANIC PHARMACY-I LAB [S2-B]',
    sec: 'S2-B',
    schedule: [{ day: 'Mon', time: '11:00 AM', start: 660, end: 840 }],
  },
  {
    id: '00053',
    name: 'PHYSICAL PHARMACY [S2-A]',
    sec: 'S2-A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 560 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 560 },
    ],
  },
  {
    id: '00054',
    name: 'PHYSICAL PHARMACY LAB [S2-A]',
    sec: 'S2-A',
    schedule: [{ day: 'Sun', time: '2:00 PM', start: 840, end: 1020 }],
  },
  {
    id: '00055',
    name: 'PHYSICAL PHARMACY LAB [S2-B]',
    sec: 'S2-B',
    schedule: [{ day: 'Tue', time: '2:00 PM', start: 840, end: 1020 }],
  },
  {
    id: '00056',
    name: 'PHARMACEUTICAL STATISTICS [S2-A]',
    sec: 'S2-A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 660 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 660 },
    ],
  },
  {
    id: '00057',
    name: 'INORGANIC PHARMACY II [S3-A]',
    sec: 'S3-A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 560 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 560 },
    ],
  },
  {
    id: '00058',
    name: 'INORGANIC PHARMACY II LAB [S3-A]',
    sec: 'S3-A',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 660 }],
  },
  {
    id: '00059',
    name: 'ORGANIC PHARMACY-II [S3-A]',
    sec: 'S3-A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 660 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 660 },
    ],
  },
  {
    id: '00060',
    name: 'ORGANIC PHARMACY-II LAB [S3-A]',
    sec: 'S3-A',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 660 }],
  },
  {
    id: '00061',
    name: 'HUMAN ANATOMY & PHYSIOLOGY-II [S3-A]',
    sec: 'S3-A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 960 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 960 },
    ],
  },
  {
    id: '00062',
    name: 'HUMAN ANATOMY & PHYSIOLOGY-II LAB [S3-A]',
    sec: 'S3-A',
    schedule: [{ day: 'Sun', time: '11:00 AM', start: 660, end: 840 }],
  },
  {
    id: '00063',
    name: 'PHARMACEUTICAL MICROBIOLOGY-I [S3-A]',
    sec: 'S3-A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 860 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 860 },
    ],
  },
  {
    id: '00064',
    name: 'PHARMACEUTICAL MICROBIOLOGY-I LAB [S3-A]',
    sec: 'S3-A',
    schedule: [{ day: 'Tue', time: '2:00 PM', start: 840, end: 1020 }],
  },
  {
    id: '00065',
    name: 'PHARMACOLOGY-I [S3-A]',
    sec: 'S3-A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 960 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 960 },
    ],
  },
  {
    id: '00066',
    name: 'PDR, REGISTRATION AND COURT FEES ACT [S2-A]',
    sec: 'S2-A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 560 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 560 },
    ],
  },
  {
    id: '00067',
    name: 'PDR, REGISTRATION AND COURT FEES ACT [S2-B]',
    sec: 'S2-B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 560 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 560 },
    ],
  },
  {
    id: '00068',
    name: 'LAW OF AGENCY, BAILMENT & PARTNERSHIP [S2-A]',
    sec: 'S2-A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 760 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 760 },
    ],
  },
  {
    id: '00069',
    name: 'LAW OF AGENCY, BAILMENT & PARTNERSHIP [S2-B]',
    sec: 'S2-B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 960 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 960 },
    ],
  },
  {
    id: '00070',
    name: 'INTRODUCTION TO COMPUTER [S2-A]',
    sec: 'S2-A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00071',
    name: 'INTRODUCTION TO COMPUTER [S2-B]',
    sec: 'S2-B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00072',
    name: 'CONSTITUTIONAL LAW OF BANGLADESH [S2-A]',
    sec: 'S2-A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 760 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 760 },
    ],
  },
  {
    id: '00073',
    name: 'CONSTITUTIONAL LAW OF BANGLADESH [S2-B]',
    sec: 'S2-B',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 960 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 960 },
    ],
  },
  {
    id: '00074',
    name: 'PUBLIC SPEAKING [S2-A]',
    sec: 'S2-A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00075',
    name: 'PUBLIC SPEAKING [S2-B]',
    sec: 'S2-B',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00076',
    name: 'MUSLIM LAW [S2-A]',
    sec: 'S2-A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 960 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 960 },
    ],
  },
  {
    id: '00077',
    name: 'MUSLIM LAW [S2-B]',
    sec: 'S2-B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 660 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 660 },
    ],
  },
  {
    id: '00078',
    name: 'CONSTITUTIONAL LAW OF U.K & U.S.A [S3-A]',
    sec: 'S3-A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 760 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 760 },
    ],
  },
  {
    id: '00079',
    name: 'CONSTITUTIONAL LAW OF U.K & U.S.A [S3-B]',
    sec: 'S3-B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 760 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 760 },
    ],
  },
  {
    id: '00080',
    name: 'LAW OF TORTS [S3-A]',
    sec: 'S3-A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 760 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 760 },
    ],
  },
  {
    id: '00081',
    name: 'LAW OF TORTS [S3-B]',
    sec: 'S3-B',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 660 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 660 },
    ],
  },
  {
    id: '00082',
    name: 'LAW OF TORTS [S4-A]',
    sec: 'S4-A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 860 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 860 },
    ],
  },
  {
    id: '00083',
    name: 'LAW OF TORTS [S4-B]',
    sec: 'S4-B',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 560 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 560 },
    ],
  },
  {
    id: '00084',
    name: 'LAW OF EQUITY AND TRUST [S3-A]',
    sec: 'S3-A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 860 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 860 },
    ],
  },
  {
    id: '00085',
    name: 'LAW OF EQUITY AND TRUST [S3-B]',
    sec: 'S3-B',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 760 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 760 },
    ],
  },
  {
    id: '00086',
    name: 'LAW OF EQUITY AND TRUST [S4-A]',
    sec: 'S4-A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 960 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 960 },
    ],
  },
  {
    id: '00087',
    name: 'LAW OF EQUITY AND TRUST [S4-B]',
    sec: 'S4-B',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 660 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 660 },
    ],
  },
  {
    id: '00088',
    name: 'HINDU LAW [S3-A]',
    sec: 'S3-A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 960 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 960 },
    ],
  },
  {
    id: '00089',
    name: 'HINDU LAW [S3-B]',
    sec: 'S3-B',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 560 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 560 },
    ],
  },
  {
    id: '00090',
    name: 'GOVERNMENT AND POLITICS [S4-A]',
    sec: 'S4-A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 760 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 760 },
    ],
  },
  {
    id: '00091',
    name: 'GOVERNMENT AND POLITICS [S4-B]',
    sec: 'S4-B',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 860 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 860 },
    ],
  },
  {
    id: '00092',
    name: 'LAW OF TAXATION [S4-A]',
    sec: 'S4-A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 660 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 660 },
    ],
  },
  {
    id: '00093',
    name: 'LAW OF TAXATION [S4-B]',
    sec: 'S4-B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 560 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 560 },
    ],
  },
  {
    id: '00094',
    name: 'LABOUR AND INDUSTRIAL LAW [S4-A]',
    sec: 'S4-A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 860 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 860 },
    ],
  },
  {
    id: '00095',
    name: 'LABOUR AND INDUSTRIAL LAW [S4-B]',
    sec: 'S4-B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 660 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 660 },
    ],
  },
  {
    id: '00096',
    name: 'MERCANTILE LAW [S4-A]',
    sec: 'S4-A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 960 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 960 },
    ],
  },
  {
    id: '00097',
    name: 'MERCANTILE LAW [S4-B]',
    sec: 'S4-B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 760 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 760 },
    ],
  },
  {
    id: '00098',
    name: 'LAW OF TRANSFER OF PROPERTY [S5-A]',
    sec: 'S5-A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 560 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 560 },
    ],
  },
  {
    id: '00099',
    name: 'COMPANY LAW [S5-A]',
    sec: 'S5-A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 660 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 660 },
    ],
  },
  {
    id: '00100',
    name: 'COMPANY LAW [S6-A]',
    sec: 'S6-A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 860 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 860 },
    ],
  },
  {
    id: '00101',
    name: 'COMPANY LAW [S6-B]',
    sec: 'S6-B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 560 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 560 },
    ],
  },
  {
    id: '00102',
    name: 'GENERAL CLAUSES ACT & INTERPRETATION OF STATUTES [S5-A]',
    sec: 'S5-A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 760 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 760 },
    ],
  },
  {
    id: '00103',
    name: 'GENERAL CLAUSES ACT & INTERPRETATION OF STATUTES [S6-A]',
    sec: 'S6-A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 760 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 760 },
    ],
  },
  {
    id: '00104',
    name: 'GENERAL CLAUSES ACT & INTERPRETATION OF STATUTES [S6-B]',
    sec: 'S6-B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 660 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 660 },
    ],
  },
  {
    id: '00105',
    name: 'CRIMINOLOGY AND LAW OF CYBER CRIMES [S5-A]',
    sec: 'S5-A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 860 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 860 },
    ],
  },
  {
    id: '00106',
    name: 'INTERNATIONAL TRADE LAW [S5-A]',
    sec: 'S5-A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 560 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 560 },
    ],
  },
  {
    id: '00107',
    name: 'INTERNATIONAL TRADE LAW [S8-A]',
    sec: 'S8-A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 660 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 660 },
    ],
  },
  {
    id: '00108',
    name: 'SPECIFIC RELIEF ACT AND LAW OF LIMITATION [S5-A]',
    sec: 'S5-A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 660 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 660 },
    ],
  },
  {
    id: '00109',
    name: 'PUBLIC INTERNATIONAL LAW [S5-A]',
    sec: 'S5-A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 860 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 860 },
    ],
  },
  {
    id: '00110',
    name: 'ADMINISTRATIVE LAW [S6-A]',
    sec: 'S6-A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 560 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 560 },
    ],
  },
  {
    id: '00111',
    name: 'ADMINISTRATIVE LAW [S6-B]',
    sec: 'S6-B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 860 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 860 },
    ],
  },
  {
    id: '00112',
    name: 'LAW OF EVIDENCE [S6-A]',
    sec: 'S6-A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 660 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 660 },
    ],
  },
  {
    id: '00113',
    name: 'LAW OF EVIDENCE [S6-B]',
    sec: 'S6-B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 960 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 960 },
    ],
  },
  {
    id: '00114',
    name: 'LAW OF CRIMES [S6-A]',
    sec: 'S6-A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 860 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 860 },
    ],
  },
  {
    id: '00115',
    name: 'LAW OF CRIMES [S6-B]',
    sec: 'S6-B',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 760 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 760 },
    ],
  },
  {
    id: '00116',
    name: 'CODE OF CIVIL PROCEDURE I [S6-A]',
    sec: 'S6-A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 960 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 960 },
    ],
  },
  {
    id: '00117',
    name: 'CODE OF CIVIL PROCEDURE I [S6-B]',
    sec: 'S6-B',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 860 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 860 },
    ],
  },
  {
    id: '00118',
    name: 'CODE OF CRIMINAL PROCEDURE I [S6-A]',
    sec: 'S6-A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 760 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 760 },
    ],
  },
  {
    id: '00119',
    name: 'CODE OF CRIMINAL PROCEDURE I [S6-B]',
    sec: 'S6-B',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 960 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 960 },
    ],
  },
  {
    id: '00120',
    name: 'SPECIFIC RELIEF ACT AND LAW OF LIMITATION [S7-A]',
    sec: 'S7-A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 760 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 760 },
    ],
  },
  {
    id: '00121',
    name: 'CODE OF CIVIL PROCEDURE II [S7-A]',
    sec: 'S7-A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 860 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 860 },
    ],
  },
  {
    id: '00122',
    name: 'DRAFTING AND CONVEYANCE AND PLEADING [S7-A]',
    sec: 'S7-A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 960 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 960 },
    ],
  },
  {
    id: '00123',
    name: 'CODE OF CRIMINAL PROCEDURE II [S7-A]',
    sec: 'S7-A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 760 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 760 },
    ],
  },
  {
    id: '00124',
    name: 'MOOT COURT, MOCK TRIAL & PRACTICE [S7-A]',
    sec: 'S7-A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 860 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 860 },
    ],
  },
  {
    id: '00125',
    name: 'ALTERNATIVE DISPUTE RESOLUTION AND TRIAL ADVOCACY [S7-A]',
    sec: 'S7-A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 960 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 960 },
    ],
  },
  {
    id: '00126',
    name: 'ALTERNATIVE DISPUTE RESOLUTION AND TRIAL ADVOCACY [S8-A]',
    sec: 'S8-A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 560 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 560 },
    ],
  },
  {
    id: '00127',
    name: 'PROFESSIONAL PRACTICE AND MOCK TRIAL [S8-A]',
    sec: 'S8-A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 560 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 560 },
    ],
  },
  {
    id: '00128',
    name: 'PROFESSIONAL ORIENTATION [S8-A]',
    sec: 'S8-A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 660 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 660 },
    ],
  },
  {
    id: '00129',
    name: 'INTRODUCTION TO BUSINESS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00130',
    name: 'INTRODUCTION TO BUSINESS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00131',
    name: 'INTRODUCTION TO BUSINESS [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00132',
    name: 'INTRODUCTION TO BUSINESS [D]',
    sec: 'D',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00133',
    name: 'INTRODUCTION TO BUSINESS (LLB) [S3-A]',
    sec: 'S3-A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00134',
    name: 'INTRODUCTION TO BUSINESS (LLB) [S3-B]',
    sec: 'S3-B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00135',
    name: 'INTRODUCTION TO BUSINESS [A1]',
    sec: 'A1',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00136',
    name: 'INTRODUCTION TO BUSINESS [A2]',
    sec: 'A2',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00137',
    name: 'INTRODUCTION TO BUSINESS [A3]',
    sec: 'A3',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00138',
    name: 'INTRODUCTION TO BUSINESS [A4]',
    sec: 'A4',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00139',
    name: 'INTRODUCTION TO BUSINESS [A5]',
    sec: 'A5',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00140',
    name: 'INTRODUCTION TO BUSINESS [A6]',
    sec: 'A6',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00141',
    name: 'INTRODUCTION TO BUSINESS [A7]',
    sec: 'A7',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00142',
    name: 'INTRODUCTION TO BUSINESS [A8]',
    sec: 'A8',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00143',
    name: 'INTRODUCTION TO BUSINESS [A9]',
    sec: 'A9',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00144',
    name: 'INTRODUCTION TO BUSINESS [A10]',
    sec: 'A10',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00145',
    name: 'E-COMMERCE AND E-GOVERNANCE [S4-A]',
    sec: 'S4-A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00146',
    name: 'E-COMMERCE AND E-GOVERNANCE [S4-B]',
    sec: 'S4-B',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00147',
    name: 'FINANCIAL ACCOUNTING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00148',
    name: 'FINANCIAL ACCOUNTING [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00149',
    name: 'FINANCIAL ACCOUNTING [C]',
    sec: 'C',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00150',
    name: 'FINANCIAL ACCOUNTING [A1]',
    sec: 'A1',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00151',
    name: 'FINANCIAL ACCOUNTING [A2]',
    sec: 'A2',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00152',
    name: 'FINANCIAL ACCOUNTING [A3]',
    sec: 'A3',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00153',
    name: 'FINANCIAL ACCOUNTING [A4]',
    sec: 'A4',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00154',
    name: 'FINANCIAL ACCOUNTING [A5]',
    sec: 'A5',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00155',
    name: 'FINANCIAL ACCOUNTING [A6]',
    sec: 'A6',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00156',
    name: 'FINANCIAL ACCOUNTING [A7]',
    sec: 'A7',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00157',
    name: 'FINANCIAL ACCOUNTING [A8]',
    sec: 'A8',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00158',
    name: 'FINANCIAL ACCOUNTING [A9]',
    sec: 'A9',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00159',
    name: 'FINANCIAL ACCOUNTING [A10]',
    sec: 'A10',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00160',
    name: 'BUSINESS MATHEMATICS-1 [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00161',
    name: 'BUSINESS MATHEMATICS-1 [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00162',
    name: 'BUSINESS MATHEMATICS-1 [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00163',
    name: 'BUSINESS MATHEMATICS-1 [A1]',
    sec: 'A1',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00164',
    name: 'BUSINESS MATHEMATICS-1 [A2]',
    sec: 'A2',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00165',
    name: 'BUSINESS MATHEMATICS-1 [A3]',
    sec: 'A3',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00166',
    name: 'BUSINESS MATHEMATICS-1 [A4]',
    sec: 'A4',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00167',
    name: 'BUSINESS MATHEMATICS-1 [A5]',
    sec: 'A5',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00168',
    name: 'BUSINESS MATHEMATICS-1 [A6]',
    sec: 'A6',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00169',
    name: 'BUSINESS MATHEMATICS-1 [A7]',
    sec: 'A7',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00170',
    name: 'BUSINESS MATHEMATICS-1 [A8]',
    sec: 'A8',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00171',
    name: 'BUSINESS MATHEMATICS-1 [A9]',
    sec: 'A9',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00172',
    name: 'BUSINESS MATHEMATICS-1 [A10]',
    sec: 'A10',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00173',
    name: 'ENGLISH READING [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00174',
    name: 'ENGLISH READING [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00175',
    name: 'ENGLISH READING [C]',
    sec: 'C',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00176',
    name: 'ENGLISH READING [A1]',
    sec: 'A1',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00177',
    name: 'ENGLISH READING [A2]',
    sec: 'A2',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00178',
    name: 'ENGLISH READING [A3]',
    sec: 'A3',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00179',
    name: 'ENGLISH READING [A4]',
    sec: 'A4',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00180',
    name: 'ENGLISH READING [A5]',
    sec: 'A5',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00181',
    name: 'ENGLISH READING [A6]',
    sec: 'A6',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00182',
    name: 'ENGLISH READING [A7]',
    sec: 'A7',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00183',
    name: 'ENGLISH READING [A8]',
    sec: 'A8',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00184',
    name: 'ENGLISH READING [A9]',
    sec: 'A9',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00185',
    name: 'ENGLISH READING [A10]',
    sec: 'A10',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00186',
    name: 'INTRODUCTION TO PROGRAMMING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00187',
    name: 'INTRODUCTION TO PROGRAMMING [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00188',
    name: 'INTRODUCTION TO PROGRAMMING [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00189',
    name: 'INTRODUCTION TO PROGRAMMING [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00190',
    name: 'INTRODUCTION TO PROGRAMMING [B1]',
    sec: 'B1',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00191',
    name: 'INTRODUCTION TO PROGRAMMING [B2]',
    sec: 'B2',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00192',
    name: 'INTRODUCTION TO PROGRAMMING [B3]',
    sec: 'B3',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00193',
    name: 'INTRODUCTION TO PROGRAMMING [B4]',
    sec: 'B4',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00194',
    name: 'INTRODUCTION TO PROGRAMMING [B5]',
    sec: 'B5',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00195',
    name: 'INTRODUCTION TO PROGRAMMING [B6]',
    sec: 'B6',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00196',
    name: 'INTRODUCTION TO PROGRAMMING [B7]',
    sec: 'B7',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00197',
    name: 'INTRODUCTION TO PROGRAMMING [B8]',
    sec: 'B8',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00198',
    name: 'INTRODUCTION TO PROGRAMMING LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Thu', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00199',
    name: 'INTRODUCTION TO PROGRAMMING LAB [B]',
    sec: 'B',
    schedule: [{ day: 'Thu', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00200',
    name: 'INTRODUCTION TO PROGRAMMING LAB [C]',
    sec: 'C',
    schedule: [{ day: 'Thu', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00201',
    name: 'INTRODUCTION TO PROGRAMMING LAB [D]',
    sec: 'D',
    schedule: [{ day: 'Thu', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00202',
    name: 'INTRODUCTION TO PROGRAMMING LAB [B1]',
    sec: 'B1',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00203',
    name: 'INTRODUCTION TO PROGRAMMING LAB [B2]',
    sec: 'B2',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00204',
    name: 'INTRODUCTION TO PROGRAMMING LAB [B3]',
    sec: 'B3',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00205',
    name: 'INTRODUCTION TO PROGRAMMING LAB [B4]',
    sec: 'B4',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00206',
    name: 'INTRODUCTION TO PROGRAMMING LAB [B5]',
    sec: 'B5',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00207',
    name: 'INTRODUCTION TO PROGRAMMING LAB [B6]',
    sec: 'B6',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00208',
    name: 'INTRODUCTION TO PROGRAMMING LAB [B7]',
    sec: 'B7',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00209',
    name: 'INTRODUCTION TO PROGRAMMING LAB [B8]',
    sec: 'B8',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00210',
    name: 'INTRODUCTION TO COMPUTER STUDIES [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00211',
    name: 'INTRODUCTION TO COMPUTER STUDIES [B1]',
    sec: 'B1',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00212',
    name: 'INTRODUCTION TO COMPUTER STUDIES [B2]',
    sec: 'B2',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00213',
    name: 'INTRODUCTION TO COMPUTER STUDIES [B3]',
    sec: 'B3',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00214',
    name: 'INTRODUCTION TO COMPUTER STUDIES [B4]',
    sec: 'B4',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00215',
    name: 'INTRODUCTION TO COMPUTER STUDIES [B5]',
    sec: 'B5',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00216',
    name: 'INTRODUCTION TO COMPUTER STUDIES [B6]',
    sec: 'B6',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00217',
    name: 'INTRODUCTION TO COMPUTER STUDIES [B7]',
    sec: 'B7',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00218',
    name: 'INTRODUCTION TO COMPUTER STUDIES [B8]',
    sec: 'B8',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00219',
    name: 'PHYSICS 1 [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00220',
    name: 'PHYSICS 1 [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00221',
    name: 'PHYSICS 1 [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00222',
    name: 'PHYSICS 1 [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00223',
    name: 'PHYSICS 1 [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00224',
    name: 'PHYSICS 1 [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00225',
    name: 'PHYSICS 1 [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00226',
    name: 'PHYSICS 1 [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00227',
    name: 'PHYSICS 1 [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00228',
    name: 'PHYSICS 1 [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00229',
    name: 'PHYSICS 1 [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00230',
    name: 'PHYSICS 1 [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00231',
    name: 'PHYSICS 1 [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00232',
    name: 'PHYSICS 1 [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00233',
    name: 'PHYSICS 1 [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00234',
    name: 'PHYSICS 1 [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00235',
    name: 'PHYSICS 1 [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00236',
    name: 'PHYSICS 1 [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00237',
    name: 'PHYSICS 1 [S]',
    sec: 'S',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00238',
    name: 'PHYSICS 1 [T]',
    sec: 'T',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00239',
    name: 'PHYSICS 1 [B1]',
    sec: 'B1',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00240',
    name: 'PHYSICS 1 [B2]',
    sec: 'B2',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00241',
    name: 'PHYSICS 1 [B3]',
    sec: 'B3',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00242',
    name: 'PHYSICS 1 [B4]',
    sec: 'B4',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00243',
    name: 'PHYSICS 1 [B5]',
    sec: 'B5',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00244',
    name: 'PHYSICS 1 [B6]',
    sec: 'B6',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00245',
    name: 'PHYSICS 1 [B7]',
    sec: 'B7',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00246',
    name: 'PHYSICS 1 [B8]',
    sec: 'B8',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00247',
    name: 'PHYSICS 1 [C1]',
    sec: 'C1',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00248',
    name: 'PHYSICS 1 [C2]',
    sec: 'C2',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00249',
    name: 'PHYSICS 1 [C3]',
    sec: 'C3',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00250',
    name: 'PHYSICS 1 [C4]',
    sec: 'C4',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00251',
    name: 'PHYSICS 1 [C5]',
    sec: 'C5',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00252',
    name: 'PHYSICS 1 [C6]',
    sec: 'C6',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00253',
    name: 'PHYSICS 1 [C7]',
    sec: 'C7',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00254',
    name: 'PHYSICS 1 [C8]',
    sec: 'C8',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00255',
    name: 'PHYSICS 1 [C9]',
    sec: 'C9',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00256',
    name: 'PHYSICS 1 [C10]',
    sec: 'C10',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00257',
    name: 'PHYSICS 1 LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00258',
    name: 'PHYSICS 1 LAB [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00259',
    name: 'PHYSICS 1 LAB [C]',
    sec: 'C',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00260',
    name: 'PHYSICS 1 LAB [D]',
    sec: 'D',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00261',
    name: 'PHYSICS 1 LAB [E]',
    sec: 'E',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00262',
    name: 'PHYSICS 1 LAB [F]',
    sec: 'F',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00263',
    name: 'PHYSICS 1 LAB [G]',
    sec: 'G',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00264',
    name: 'PHYSICS 1 LAB [H]',
    sec: 'H',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00265',
    name: 'PHYSICS 1 LAB [I]',
    sec: 'I',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00266',
    name: 'PHYSICS 1 LAB [J]',
    sec: 'J',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00267',
    name: 'PHYSICS 1 LAB [K]',
    sec: 'K',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00268',
    name: 'PHYSICS 1 LAB [L]',
    sec: 'L',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00269',
    name: 'PHYSICS 1 LAB [M]',
    sec: 'M',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00270',
    name: 'PHYSICS 1 LAB [N]',
    sec: 'N',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00271',
    name: 'PHYSICS 1 LAB [O]',
    sec: 'O',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00272',
    name: 'PHYSICS 1 LAB [P]',
    sec: 'P',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00273',
    name: 'PHYSICS 1 LAB [Q]',
    sec: 'Q',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00274',
    name: 'PHYSICS 1 LAB [R]',
    sec: 'R',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00275',
    name: 'PHYSICS 1 LAB [S]',
    sec: 'S',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00276',
    name: 'PHYSICS 1 LAB [T]',
    sec: 'T',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00277',
    name: 'PHYSICS 1 LAB [B1]',
    sec: 'B1',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00278',
    name: 'PHYSICS 1 LAB [B2]',
    sec: 'B2',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00279',
    name: 'PHYSICS 1 LAB [B3]',
    sec: 'B3',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00280',
    name: 'PHYSICS 1 LAB [B4]',
    sec: 'B4',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00281',
    name: 'PHYSICS 1 LAB [B5]',
    sec: 'B5',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00282',
    name: 'PHYSICS 1 LAB [B6]',
    sec: 'B6',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00283',
    name: 'PHYSICS 1 LAB [B7]',
    sec: 'B7',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00284',
    name: 'PHYSICS 1 LAB [B8]',
    sec: 'B8',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00285',
    name: 'PHYSICS 1 LAB [C1]',
    sec: 'C1',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00286',
    name: 'PHYSICS 1 LAB [C2]',
    sec: 'C2',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00287',
    name: 'PHYSICS 1 LAB [C3]',
    sec: 'C3',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00288',
    name: 'PHYSICS 1 LAB [C4]',
    sec: 'C4',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00289',
    name: 'PHYSICS 1 LAB [C5]',
    sec: 'C5',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00290',
    name: 'PHYSICS 1 LAB [C6]',
    sec: 'C6',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00291',
    name: 'PHYSICS 1 LAB [C7]',
    sec: 'C7',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00292',
    name: 'PHYSICS 1 LAB [C8]',
    sec: 'C8',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00293',
    name: 'PHYSICS 1 LAB [C9]',
    sec: 'C9',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00294',
    name: 'PHYSICS 1 LAB [C10]',
    sec: 'C10',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00295',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00296',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00297',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00298',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00299',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00300',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00301',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00302',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00303',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [B1]',
    sec: 'B1',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00304',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [B2]',
    sec: 'B2',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00305',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [B3]',
    sec: 'B3',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00306',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [B4]',
    sec: 'B4',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00307',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [B5]',
    sec: 'B5',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00308',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [B6]',
    sec: 'B6',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00309',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [B7]',
    sec: 'B7',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00310',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [B8]',
    sec: 'B8',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00311',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [C1]',
    sec: 'C1',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00312',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [C2]',
    sec: 'C2',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00313',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [C3]',
    sec: 'C3',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00314',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [C4]',
    sec: 'C4',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00315',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [C5]',
    sec: 'C5',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00316',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [C6]',
    sec: 'C6',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00317',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [C7]',
    sec: 'C7',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00318',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [C8]',
    sec: 'C8',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00319',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [C9]',
    sec: 'C9',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00320',
    name: 'DIFF CALCULUS AND COORDINATE GEOMETRY [C10]',
    sec: 'C10',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00321',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [E1]',
    sec: 'E1',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00322',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [E2]',
    sec: 'E2',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00323',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [E3]',
    sec: 'E3',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00324',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [H1]',
    sec: 'H1',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00325',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [H2]',
    sec: 'H2',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00326',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [J1]',
    sec: 'J1',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00327',
    name: 'ENGLISH READING SKILLS & PUBLIC SPEAKING [P1]',
    sec: 'P1',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00328',
    name: 'CHEMISTRY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00329',
    name: 'CHEMISTRY [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00330',
    name: 'CHEMISTRY [C]',
    sec: 'C',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00331',
    name: 'CHEMISTRY [D]',
    sec: 'D',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00332',
    name: 'CHEMISTRY [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00333',
    name: 'CHEMISTRY [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00334',
    name: 'CHEMISTRY [G]',
    sec: 'G',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00335',
    name: 'CHEMISTRY [H]',
    sec: 'H',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00336',
    name: 'CHEMISTRY [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00337',
    name: 'CHEMISTRY [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00338',
    name: 'CHEMISTRY [K]',
    sec: 'K',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00339',
    name: 'CHEMISTRY [L]',
    sec: 'L',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00340',
    name: 'CHEMISTRY [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00341',
    name: 'CHEMISTRY [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00342',
    name: 'CHEMISTRY [O]',
    sec: 'O',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00343',
    name: 'CHEMISTRY [C1]',
    sec: 'C1',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00344',
    name: 'CHEMISTRY [C2]',
    sec: 'C2',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00345',
    name: 'CHEMISTRY [C3]',
    sec: 'C3',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00346',
    name: 'CHEMISTRY [C4]',
    sec: 'C4',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00347',
    name: 'CHEMISTRY [C5]',
    sec: 'C5',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00348',
    name: 'CHEMISTRY [C6]',
    sec: 'C6',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00349',
    name: 'CHEMISTRY [C7]',
    sec: 'C7',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
    ],
  },
  {
    id: '00350',
    name: 'CHEMISTRY [C8]',
    sec: 'C8',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00351',
    name: 'CHEMISTRY [C9]',
    sec: 'C9',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00352',
    name: 'CHEMISTRY [C10]',
    sec: 'C10',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
    ],
  },
  {
    id: '00353',
    name: 'INTRODUCTION TO ENGINEERING STUDIES [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 820 }],
  },
  {
    id: '00354',
    name: 'INTRODUCTION TO ENGINEERING STUDIES [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 540 }],
  },
  {
    id: '00355',
    name: 'INTRODUCTION TO ENGINEERING STUDIES [C1]',
    sec: 'C1',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 680 }],
  },
  {
    id: '00356',
    name: 'INTRODUCTION TO ENGINEERING STUDIES [C2]',
    sec: 'C2',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 540 }],
  },
  {
    id: '00357',
    name: 'INTRODUCTION TO ENGINEERING STUDIES [C3]',
    sec: 'C3',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 680 }],
  },
  {
    id: '00358',
    name: 'INTRODUCTION TO ENGINEERING STUDIES [C4]',
    sec: 'C4',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 680 }],
  },
  {
    id: '00359',
    name: 'INTRODUCTION TO ENGINEERING STUDIES [C5]',
    sec: 'C5',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 540 }],
  },
  {
    id: '00360',
    name: 'INTRODUCTION TO ENGINEERING STUDIES [C6]',
    sec: 'C6',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 680 }],
  },
  {
    id: '00361',
    name: 'INTRODUCTION TO ENGINEERING STUDIES [C7]',
    sec: 'C7',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 680 }],
  },
  {
    id: '00362',
    name: 'INTRODUCTION TO ENGINEERING STUDIES [C8]',
    sec: 'C8',
    schedule: [{ day: 'Wed', time: '11:20 AM', start: 680, end: 740 }],
  },
  {
    id: '00363',
    name: 'INTRODUCTION TO ENGINEERING STUDIES [C9]',
    sec: 'C9',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 820 }],
  },
  {
    id: '00364',
    name: 'INTRODUCTION TO ENGINEERING STUDIES [C10]',
    sec: 'C10',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 820 }],
  },
  {
    id: '00365',
    name: 'ADVANCE DATABASE MANAGEMENT SYSTEM [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00366',
    name: 'ADVANCE DATABASE MANAGEMENT SYSTEM [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00367',
    name: 'ADVANCE DATABASE MANAGEMENT SYSTEM [C]',
    sec: 'C',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00368',
    name: 'PRINCIPLES OF ECONOMICS (FST) [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '00369',
    name: 'PRINCIPLES OF ECONOMICS (FST) [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 740 }],
  },
  {
    id: '00370',
    name: 'PRINCIPLES OF ECONOMICS (FST) [C]',
    sec: 'C',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '00371',
    name: 'PRINCIPLES OF ECONOMICS (FST) [D]',
    sec: 'D',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '00372',
    name: 'PRINCIPLES OF ECONOMICS (FST) [E]',
    sec: 'E',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 740 }],
  },
  {
    id: '00373',
    name: 'PRINCIPLES OF ECONOMICS (FST) [F]',
    sec: 'F',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '00374',
    name: 'PRINCIPLES OF ECONOMICS (FST) [G]',
    sec: 'G',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '00375',
    name: 'PRINCIPLES OF ECONOMICS (FST) [H]',
    sec: 'H',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '00376',
    name: 'PRINCIPLES OF ECONOMICS (FST) [I]',
    sec: 'I',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '00377',
    name: 'PRINCIPLES OF ECONOMICS (FST) [J]',
    sec: 'J',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '00378',
    name: 'PRINCIPLES OF ECONOMICS (FST) [K]',
    sec: 'K',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '00379',
    name: 'PRINCIPLES OF ECONOMICS (FST) [L]',
    sec: 'L',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '00380',
    name: 'PRINCIPLES OF ECONOMICS (FST) [M]',
    sec: 'M',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '00381',
    name: 'PRINCIPLES OF ECONOMICS (FST) [N]',
    sec: 'N',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 740 }],
  },
  {
    id: '00382',
    name: 'PRINCIPLES OF ECONOMICS (FST) [O]',
    sec: 'O',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '00383',
    name: 'PRINCIPLES OF ECONOMICS (FE) [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '00384',
    name: 'PRINCIPLES OF ECONOMICS (FE) [B]',
    sec: 'B',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '00385',
    name: 'PRINCIPLES OF ECONOMICS (FE) [C]',
    sec: 'C',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 740 }],
  },
  {
    id: '00386',
    name: 'PRINCIPLES OF ECONOMICS (FE) [D]',
    sec: 'D',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '00387',
    name: 'PRINCIPLES OF ECONOMICS (FE) [E]',
    sec: 'E',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 740 }],
  },
  {
    id: '00388',
    name: 'PRINCIPLES OF ECONOMICS (FE) [F]',
    sec: 'F',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 740 }],
  },
  {
    id: '00389',
    name: 'PRINCIPLES OF ECONOMICS (FE) [G]',
    sec: 'G',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 740 }],
  },
  {
    id: '00390',
    name: 'PRINCIPLES OF ECONOMICS (FE) [H]',
    sec: 'H',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 740 }],
  },
  {
    id: '00391',
    name: 'PRINCIPLES OF ECONOMICS (ARCH) [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '00392',
    name: 'PRINCIPLES OF ECONOMICS [C1]',
    sec: 'C1',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '00393',
    name: 'PRINCIPLES OF ECONOMICS [C2]',
    sec: 'C2',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '00394',
    name: 'PRINCIPLES OF ECONOMICS [C3]',
    sec: 'C3',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '00395',
    name: 'PRINCIPLES OF ECONOMICS [C4]',
    sec: 'C4',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '00396',
    name: 'PRINCIPLES OF ECONOMICS [C5]',
    sec: 'C5',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '00397',
    name: 'PRINCIPLES OF ECONOMICS [C6]',
    sec: 'C6',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 740 }],
  },
  {
    id: '00398',
    name: 'PRINCIPLES OF ECONOMICS [C7]',
    sec: 'C7',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 740 }],
  },
  {
    id: '00399',
    name: 'PRINCIPLES OF ECONOMICS [C8]',
    sec: 'C8',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '00400',
    name: 'PRINCIPLES OF ECONOMICS [C9]',
    sec: 'C9',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '00401',
    name: 'PRINCIPLES OF ECONOMICS [C10]',
    sec: 'C10',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '00402',
    name: 'ADVANCED COMPUTER NETWORKS [A]',
    sec: 'A',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00403',
    name: 'ADVANCED PROGRAMMING IN WEB TECHNOLOGY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00404',
    name: 'ADVANCED PROGRAMMING IN WEB TECHNOLOGY [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00405',
    name: 'ADVANCED PROGRAMMING IN WEB TECHNOLOGY [C]',
    sec: 'C',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00406',
    name: 'ADVANCED PROGRAMMING IN WEB TECHNOLOGY [D]',
    sec: 'D',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00407',
    name: 'ADVANCED PROGRAMMING WITH .NET [A]',
    sec: 'A',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00408',
    name: 'ADVANCED PROGRAMMING WITH .NET [B]',
    sec: 'B',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00409',
    name: 'ADVANCED PROGRAMMING WITH .NET [C]',
    sec: 'C',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00410',
    name: 'ADVANCED PROGRAMMING WITH .NET [D]',
    sec: 'D',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00411',
    name: 'ADVANCED PROGRAMMING WITH JAVA [A]',
    sec: 'A',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00412',
    name: 'ALGORITHMS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00413',
    name: 'ALGORITHMS [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00414',
    name: 'ALGORITHMS [C]',
    sec: 'C',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00415',
    name: 'ALGORITHMS [D]',
    sec: 'D',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00416',
    name: 'ALGORITHMS [E]',
    sec: 'E',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00417',
    name: 'ALGORITHMS [F]',
    sec: 'F',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00418',
    name: 'ALGORITHMS [G]',
    sec: 'G',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00419',
    name: 'ALGORITHMS [H]',
    sec: 'H',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00420',
    name: 'ALGORITHMS [I]',
    sec: 'I',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00421',
    name: 'ALGORITHMS [J]',
    sec: 'J',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00422',
    name: 'ALGORITHMS [K]',
    sec: 'K',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00423',
    name: 'ALGORITHMS [L]',
    sec: 'L',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00424',
    name: 'ALGORITHMS [M]',
    sec: 'M',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00425',
    name: 'ALGORITHMS [N]',
    sec: 'N',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00426',
    name: 'ALGORITHMS [O]',
    sec: 'O',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00427',
    name: 'ALGORITHMS [P]',
    sec: 'P',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00428',
    name: 'ALGORITHMS [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00429',
    name: 'ALGORITHMS [R]',
    sec: 'R',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00430',
    name: 'ALGORITHMS [S]',
    sec: 'S',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00431',
    name: 'ALGORITHMS [T]',
    sec: 'T',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00432',
    name: 'ALGORITHMS [U]',
    sec: 'U',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00433',
    name: 'ALGORITHMS [V]',
    sec: 'V',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00434',
    name: 'ALGORITHMS [W]',
    sec: 'W',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00435',
    name: 'ALGORITHMS [X]',
    sec: 'X',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00436',
    name: 'ALGORITHMS [Y]',
    sec: 'Y',
    schedule: [
      { day: 'Thu', time: '3:00 PM', start: 900, end: 1040 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
    ],
  },
  {
    id: '00437',
    name: 'ALGORITHMS [Z]',
    sec: 'Z',
    schedule: [
      { day: 'Thu', time: '12:40 PM', start: 760, end: 900 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
    ],
  },
  {
    id: '00438',
    name: 'ALGORITHMS [AA]',
    sec: 'AA',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Thu', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00439',
    name: 'ALGORITHMS [BB]',
    sec: 'BB',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Thu', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00440',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00441',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [B]',
    sec: 'B',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00442',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [C]',
    sec: 'C',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00443',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [D]',
    sec: 'D',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00444',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [E]',
    sec: 'E',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00445',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [F]',
    sec: 'F',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00446',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [G]',
    sec: 'G',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00447',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [H]',
    sec: 'H',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00448',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [I]',
    sec: 'I',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00449',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [J]',
    sec: 'J',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00450',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [K]',
    sec: 'K',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00451',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [L]',
    sec: 'L',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00452',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [M]',
    sec: 'M',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00453',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [N]',
    sec: 'N',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00454',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [O]',
    sec: 'O',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00455',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [P]',
    sec: 'P',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00456',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00457',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [R]',
    sec: 'R',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00458',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [S]',
    sec: 'S',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00459',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [T]',
    sec: 'T',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00460',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [U]',
    sec: 'U',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00461',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [V]',
    sec: 'V',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00462',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [W]',
    sec: 'W',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00463',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [X]',
    sec: 'X',
    schedule: [
      { day: 'Thu', time: '8:00 AM', start: 480, end: 620 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
    ],
  },
  {
    id: '00464',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [Y]',
    sec: 'Y',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Thu', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00465',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [Z]',
    sec: 'Z',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Thu', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00466',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [AA]',
    sec: 'AA',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Thu', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00467',
    name: 'ARTIFICIAL INTELLIGENCE AND EXPERT SYSTEM [BB]',
    sec: 'BB',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Thu', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00468',
    name: 'BASIC GRAPH THEORY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00469',
    name: 'COMPILER DESIGN [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00470',
    name: 'COMPILER DESIGN [B]',
    sec: 'B',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00471',
    name: 'COMPILER DESIGN [C]',
    sec: 'C',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00472',
    name: 'COMPILER DESIGN [D]',
    sec: 'D',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
    ],
  },
  {
    id: '00473',
    name: 'COMPILER DESIGN [E]',
    sec: 'E',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00474',
    name: 'COMPILER DESIGN [F]',
    sec: 'F',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00475',
    name: 'COMPILER DESIGN [G]',
    sec: 'G',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00476',
    name: 'COMPILER DESIGN [H]',
    sec: 'H',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00477',
    name: 'COMPILER DESIGN [I]',
    sec: 'I',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00478',
    name: 'COMPILER DESIGN [J]',
    sec: 'J',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00479',
    name: 'COMPILER DESIGN [K]',
    sec: 'K',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00480',
    name: 'COMPILER DESIGN [L]',
    sec: 'L',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00481',
    name: 'COMPILER DESIGN [M]',
    sec: 'M',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00482',
    name: 'COMPILER DESIGN [N]',
    sec: 'N',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00483',
    name: 'COMPILER DESIGN [O]',
    sec: 'O',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00484',
    name: 'COMPILER DESIGN [P]',
    sec: 'P',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00485',
    name: 'COMPILER DESIGN [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00486',
    name: 'COMPILER DESIGN [R]',
    sec: 'R',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00487',
    name: 'COMPILER DESIGN [S]',
    sec: 'S',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00488',
    name: 'COMPILER DESIGN [T]',
    sec: 'T',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00489',
    name: 'COMPILER DESIGN [U]',
    sec: 'U',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Thu', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00490',
    name: 'COMPILER DESIGN [V]',
    sec: 'V',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Thu', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00491',
    name: 'COMPILER DESIGN [W]',
    sec: 'W',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Thu', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00492',
    name: 'COMPILER DESIGN [X]',
    sec: 'X',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Thu', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00493',
    name: 'COMPUTER GRAPHICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00494',
    name: 'COMPUTER GRAPHICS [B]',
    sec: 'B',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00495',
    name: 'COMPUTER GRAPHICS [C]',
    sec: 'C',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00496',
    name: 'COMPUTER GRAPHICS [D]',
    sec: 'D',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00497',
    name: 'COMPUTER GRAPHICS [E]',
    sec: 'E',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00498',
    name: 'COMPUTER GRAPHICS [F]',
    sec: 'F',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00499',
    name: 'COMPUTER GRAPHICS [G]',
    sec: 'G',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00500',
    name: 'COMPUTER GRAPHICS [H]',
    sec: 'H',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00501',
    name: 'COMPUTER GRAPHICS [I]',
    sec: 'I',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00502',
    name: 'COMPUTER GRAPHICS [J]',
    sec: 'J',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00503',
    name: 'COMPUTER GRAPHICS [K]',
    sec: 'K',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00504',
    name: 'COMPUTER GRAPHICS [L]',
    sec: 'L',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00505',
    name: 'COMPUTER GRAPHICS [M]',
    sec: 'M',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00506',
    name: 'COMPUTER GRAPHICS [N]',
    sec: 'N',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00507',
    name: 'COMPUTER GRAPHICS [O]',
    sec: 'O',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00508',
    name: 'COMPUTER GRAPHICS [P]',
    sec: 'P',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00509',
    name: 'COMPUTER GRAPHICS [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Thu', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00510',
    name: 'COMPUTER GRAPHICS [R]',
    sec: 'R',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Thu', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00511',
    name: 'COMPUTER GRAPHICS [S]',
    sec: 'S',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Thu', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00512',
    name: 'COMPUTER GRAPHICS [T]',
    sec: 'T',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Thu', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00513',
    name: 'COMPUTER NETWORKS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00514',
    name: 'COMPUTER NETWORKS [B]',
    sec: 'B',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00515',
    name: 'COMPUTER NETWORKS [C]',
    sec: 'C',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00516',
    name: 'COMPUTER NETWORKS [D]',
    sec: 'D',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00517',
    name: 'COMPUTER NETWORKS [E]',
    sec: 'E',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00518',
    name: 'COMPUTER NETWORKS [F]',
    sec: 'F',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00519',
    name: 'COMPUTER NETWORKS [G]',
    sec: 'G',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00520',
    name: 'COMPUTER NETWORKS [H]',
    sec: 'H',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00521',
    name: 'COMPUTER NETWORKS [I]',
    sec: 'I',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00522',
    name: 'COMPUTER NETWORKS [J]',
    sec: 'J',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00523',
    name: 'COMPUTER NETWORKS [K]',
    sec: 'K',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00524',
    name: 'COMPUTER NETWORKS [L]',
    sec: 'L',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00525',
    name: 'COMPUTER NETWORKS [M]',
    sec: 'M',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00526',
    name: 'COMPUTER NETWORKS [N]',
    sec: 'N',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00527',
    name: 'COMPUTER NETWORKS [O]',
    sec: 'O',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00528',
    name: 'COMPUTER NETWORKS [P]',
    sec: 'P',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Thu', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00529',
    name: 'COMPUTER NETWORKS [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Thu', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00530',
    name: 'COMPUTER NETWORKS [R]',
    sec: 'R',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Thu', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00531',
    name: 'COMPUTER NETWORKS [S]',
    sec: 'S',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Thu', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00532',
    name: 'COMPUTER NETWORKS [T]',
    sec: 'T',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Thu', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00533',
    name: 'COMPUTER NETWORKS [U]',
    sec: 'U',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '00534',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00535',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [B]',
    sec: 'B',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00536',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [C]',
    sec: 'C',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00537',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [D]',
    sec: 'D',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00538',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [E]',
    sec: 'E',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00539',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [F]',
    sec: 'F',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00540',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [G]',
    sec: 'G',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00541',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [H]',
    sec: 'H',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00542',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [I]',
    sec: 'I',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00543',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [J]',
    sec: 'J',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00544',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [K]',
    sec: 'K',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00545',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [L]',
    sec: 'L',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00546',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [M]',
    sec: 'M',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00547',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [N]',
    sec: 'N',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00548',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [O]',
    sec: 'O',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00549',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [P]',
    sec: 'P',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00550',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Thu', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00551',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Thu', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00552',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [S]',
    sec: 'S',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Thu', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00553',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [T]',
    sec: 'T',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Thu', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00554',
    name: 'COMPUTER VISION AND PATTERN RECOGNITION [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00555',
    name: 'COMPUTER VISION AND PATTERN RECOGNITION [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00556',
    name: 'COMPUTER VISION AND PATTERN RECOGNITION [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00557',
    name: 'COMPUTER VISION AND PATTERN RECOGNITION [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00558',
    name: 'COMPUTER VISION AND PATTERN RECOGNITION [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00559',
    name: 'COMPUTER VISION AND PATTERN RECOGNITION [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00560',
    name: 'DATA STRUCTURE [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00561',
    name: 'DATA STRUCTURE [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00562',
    name: 'DATA STRUCTURE [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00563',
    name: 'DATA STRUCTURE [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00564',
    name: 'DATA STRUCTURE [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00565',
    name: 'DATA STRUCTURE [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00566',
    name: 'DATA STRUCTURE [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00567',
    name: 'DATA STRUCTURE [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00568',
    name: 'DATA STRUCTURE [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00569',
    name: 'DATA STRUCTURE [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00570',
    name: 'DATA STRUCTURE [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00571',
    name: 'DATA STRUCTURE [L]',
    sec: 'L',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00572',
    name: 'DATA STRUCTURE [M]',
    sec: 'M',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00573',
    name: 'DATA STRUCTURE [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00574',
    name: 'DATA STRUCTURE [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00575',
    name: 'DATA STRUCTURE [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00576',
    name: 'DATA STRUCTURE [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00577',
    name: 'DATA STRUCTURE [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00578',
    name: 'DATA STRUCTURE [S]',
    sec: 'S',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00579',
    name: 'DATA STRUCTURE [T]',
    sec: 'T',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00580',
    name: 'DATA STRUCTURE [U]',
    sec: 'U',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00581',
    name: 'DATA STRUCTURE [V]',
    sec: 'V',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00582',
    name: 'DATA STRUCTURE [W]',
    sec: 'W',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00583',
    name: 'DATA STRUCTURE [X]',
    sec: 'X',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00584',
    name: 'DATA STRUCTURE [Y]',
    sec: 'Y',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00585',
    name: 'DATA STRUCTURE [Z]',
    sec: 'Z',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00586',
    name: 'DATA STRUCTURE [AA]',
    sec: 'AA',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00587',
    name: 'DATA STRUCTURE [BB]',
    sec: 'BB',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00588',
    name: 'DESIGN THEORY I [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '00589',
    name: 'DESIGN THEORY I [D1]',
    sec: 'D1',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '00590',
    name: 'DATA STRUCTURE LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00591',
    name: 'DATA STRUCTURE LAB [B]',
    sec: 'B',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00592',
    name: 'DATA STRUCTURE LAB [C]',
    sec: 'C',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00593',
    name: 'DATA STRUCTURE LAB [D]',
    sec: 'D',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00594',
    name: 'DATA STRUCTURE LAB [E]',
    sec: 'E',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00595',
    name: 'DATA STRUCTURE LAB [F]',
    sec: 'F',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00596',
    name: 'DATA STRUCTURE LAB [G]',
    sec: 'G',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00597',
    name: 'DATA STRUCTURE LAB [H]',
    sec: 'H',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00598',
    name: 'DATA STRUCTURE LAB [I]',
    sec: 'I',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00599',
    name: 'DATA STRUCTURE LAB [J]',
    sec: 'J',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00600',
    name: 'DATA STRUCTURE LAB [K]',
    sec: 'K',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00601',
    name: 'DATA STRUCTURE LAB [L]',
    sec: 'L',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00602',
    name: 'DATA STRUCTURE LAB [M]',
    sec: 'M',
    schedule: [{ day: 'Thu', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00603',
    name: 'DATA STRUCTURE LAB [N]',
    sec: 'N',
    schedule: [{ day: 'Thu', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00604',
    name: 'DATA STRUCTURE LAB [O]',
    sec: 'O',
    schedule: [{ day: 'Thu', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00605',
    name: 'DATA STRUCTURE LAB [P]',
    sec: 'P',
    schedule: [{ day: 'Thu', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00606',
    name: 'DATA STRUCTURE LAB [Q]',
    sec: 'Q',
    schedule: [{ day: 'Thu', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00607',
    name: 'DATA STRUCTURE LAB [R]',
    sec: 'R',
    schedule: [{ day: 'Thu', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00608',
    name: 'DATA STRUCTURE LAB [S]',
    sec: 'S',
    schedule: [{ day: 'Thu', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00609',
    name: 'DATA STRUCTURE LAB [T]',
    sec: 'T',
    schedule: [{ day: 'Thu', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00610',
    name: 'DATA STRUCTURE LAB [U]',
    sec: 'U',
    schedule: [{ day: 'Thu', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00611',
    name: 'DATA STRUCTURE LAB [V]',
    sec: 'V',
    schedule: [{ day: 'Thu', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00612',
    name: 'DATA STRUCTURE LAB [W]',
    sec: 'W',
    schedule: [{ day: 'Thu', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00613',
    name: 'DATA STRUCTURE LAB [X]',
    sec: 'X',
    schedule: [{ day: 'Thu', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00614',
    name: 'DATA STRUCTURE LAB [Y]',
    sec: 'Y',
    schedule: [{ day: 'Thu', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '00615',
    name: 'DATA STRUCTURE LAB [Z]',
    sec: 'Z',
    schedule: [{ day: 'Thu', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '00616',
    name: 'DATA STRUCTURE LAB [AA]',
    sec: 'AA',
    schedule: [{ day: 'Thu', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '00617',
    name: 'DATA STRUCTURE LAB [BB]',
    sec: 'BB',
    schedule: [{ day: 'Thu', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00618',
    name: 'MATHEMATICS FOR ARCHITECTS [D1]',
    sec: 'D1',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '00619',
    name: 'PHYSICS 1 FOR ARCHITECTS [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '00620',
    name: 'PHYSICS 1 FOR ARCHITECTS [D1]',
    sec: 'D1',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '00621',
    name: 'DESIGN STUDIO I [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:30 AM', start: 510, end: 690 },
      { day: 'Tue', time: '8:30 AM', start: 510, end: 690 },
      { day: 'Thu', time: '8:30 AM', start: 510, end: 690 },
    ],
  },
  {
    id: '00622',
    name: 'DESIGN STUDIO I [D1]',
    sec: 'D1',
    schedule: [
      { day: 'Sun', time: '8:30 AM', start: 510, end: 690 },
      { day: 'Tue', time: '8:30 AM', start: 510, end: 690 },
      { day: 'Thu', time: '8:30 AM', start: 510, end: 690 },
    ],
  },
  {
    id: '00623',
    name: 'ARCHITECTURAL GRAPHICS I [D1]',
    sec: 'D1',
    schedule: [
      { day: 'Mon', time: '8:30 AM', start: 510, end: 690 },
      { day: 'Wed', time: '8:30 AM', start: 510, end: 690 },
    ],
  },
  {
    id: '00624',
    name: 'INTRODUCTION TO ENGLISH LITERATURE [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00625',
    name: 'INTRODUCTION TO ENGLISH LITERATURE [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00626',
    name: 'INTRODUCTION TO ENGLISH LITERATURE [E1]',
    sec: 'E1',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00627',
    name: 'INTRODUCTION TO ENGLISH LITERATURE [E2]',
    sec: 'E2',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00628',
    name: 'INTRODUCTION TO ENGLISH LITERATURE [E3]',
    sec: 'E3',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00629',
    name: 'BANGLA LANGUAGE & LITERATURE [E1]',
    sec: 'E1',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00630',
    name: 'BANGLA LANGUAGE & LITERATURE [E2]',
    sec: 'E2',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00631',
    name: 'BANGLA LANGUAGE & LITERATURE [E3]',
    sec: 'E3',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00632',
    name: 'FOUNDATIONS OF SOCIOLOGY [E1]',
    sec: 'E1',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00633',
    name: 'FOUNDATIONS OF SOCIOLOGY [E2]',
    sec: 'E2',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00634',
    name: 'FOUNDATIONS OF SOCIOLOGY [E3]',
    sec: 'E3',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00635',
    name: 'MATHEMATICS 1 (ECO) [H1]',
    sec: 'H1',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00636',
    name: 'MATHEMATICS 1 (ECO) [H2]',
    sec: 'H2',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00637',
    name: 'DATA WAREHOUSING AND DATA MINING [CS] [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00638',
    name: 'DATA WAREHOUSING AND DATA MINING [CS] [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00639',
    name: 'DATA WAREHOUSING AND DATA MINING [CS] [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00640',
    name: 'DATA WAREHOUSING AND DATA MINING [CS] [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00641',
    name: 'DATA WAREHOUSING AND DATA MINING [CS] [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00642',
    name: 'DATA WAREHOUSING AND DATA MINING [CS] [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00643',
    name: 'DISCRETE MATHEMATICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00644',
    name: 'DISCRETE MATHEMATICS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00645',
    name: 'DISCRETE MATHEMATICS [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00646',
    name: 'DISCRETE MATHEMATICS [D]',
    sec: 'D',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00647',
    name: 'DISCRETE MATHEMATICS [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00648',
    name: 'DISCRETE MATHEMATICS [F]',
    sec: 'F',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00649',
    name: 'DISCRETE MATHEMATICS [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00650',
    name: 'DISCRETE MATHEMATICS [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00651',
    name: 'DISCRETE MATHEMATICS [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00652',
    name: 'DISCRETE MATHEMATICS [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00653',
    name: 'DISCRETE MATHEMATICS [K]',
    sec: 'K',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00654',
    name: 'DISCRETE MATHEMATICS [L]',
    sec: 'L',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00655',
    name: 'DISCRETE MATHEMATICS [M]',
    sec: 'M',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00656',
    name: 'DISCRETE MATHEMATICS [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00657',
    name: 'DISCRETE MATHEMATICS [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00658',
    name: 'DISCRETE MATHEMATICS [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00659',
    name: 'DISCRETE MATHEMATICS [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00660',
    name: 'DISCRETE MATHEMATICS [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00661',
    name: 'HUMAN COMPUTER INTERACTION [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00662',
    name: 'HUMAN COMPUTER INTERACTION [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00663',
    name: 'HUMAN COMPUTER INTERACTION [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00664',
    name: 'HUMAN COMPUTER INTERACTION [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00665',
    name: 'HUMAN COMPUTER INTERACTION [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00666',
    name: 'INTRODUCTION TO DATA SCIENCE [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00667',
    name: 'INTRODUCTION TO DATA SCIENCE [B]',
    sec: 'B',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00668',
    name: 'INTRODUCTION TO DATA SCIENCE [C]',
    sec: 'C',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00669',
    name: 'INTRODUCTION TO DATA SCIENCE [D]',
    sec: 'D',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00670',
    name: 'INTRODUCTION TO DATA SCIENCE [E]',
    sec: 'E',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00671',
    name: 'INTRODUCTION TO DATA SCIENCE [F]',
    sec: 'F',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00672',
    name: 'INTRODUCTION TO DATA SCIENCE [G]',
    sec: 'G',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00673',
    name: 'INTRODUCTION TO DATA SCIENCE [H]',
    sec: 'H',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00674',
    name: 'INTRODUCTION TO DATA SCIENCE [I]',
    sec: 'I',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00675',
    name: 'INTRODUCTION TO DATA SCIENCE [J]',
    sec: 'J',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00676',
    name: 'INTRODUCTION TO DATA SCIENCE [K]',
    sec: 'K',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Thu', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00677',
    name: 'INTRODUCTION TO DATA SCIENCE [L]',
    sec: 'L',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Thu', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00678',
    name: 'INTRODUCTION TO DATA SCIENCE [M]',
    sec: 'M',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Thu', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00679',
    name: 'INTRODUCTION TO DATABASE [A]',
    sec: 'A',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00680',
    name: 'INTRODUCTION TO DATABASE [B]',
    sec: 'B',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00681',
    name: 'INTRODUCTION TO DATABASE [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00682',
    name: 'INTRODUCTION TO DATABASE [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00683',
    name: 'INTRODUCTION TO DATABASE [E]',
    sec: 'E',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00684',
    name: 'INTRODUCTION TO DATABASE [F]',
    sec: 'F',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00685',
    name: 'INTRODUCTION TO DATABASE [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00686',
    name: 'INTRODUCTION TO DATABASE [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00687',
    name: 'INTRODUCTION TO DATABASE [I]',
    sec: 'I',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00688',
    name: 'INTRODUCTION TO DATABASE [J]',
    sec: 'J',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00689',
    name: 'INTRODUCTION TO DATABASE [K]',
    sec: 'K',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00690',
    name: 'INTRODUCTION TO DATABASE [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00691',
    name: 'INTRODUCTION TO DATABASE [M]',
    sec: 'M',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00692',
    name: 'INTRODUCTION TO DATABASE [N]',
    sec: 'N',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00693',
    name: 'INTRODUCTION TO DATABASE [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00694',
    name: 'INTRODUCTION TO DATABASE [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00695',
    name: 'INTRODUCTION TO DATABASE [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00696',
    name: 'INTRODUCTION TO DATABASE [R]',
    sec: 'R',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00697',
    name: 'INTRODUCTION TO DATABASE [S]',
    sec: 'S',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00698',
    name: 'INTRODUCTION TO DATABASE [T]',
    sec: 'T',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Thu', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00699',
    name: 'INTRODUCTION TO DATABASE [U]',
    sec: 'U',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Thu', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00700',
    name: 'INTRODUCTION TO DATABASE [V]',
    sec: 'V',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Thu', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00701',
    name: 'INTRODUCTION TO DATABASE [W]',
    sec: 'W',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Thu', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00702',
    name: 'INTRODUCTION TO DATABASE [X]',
    sec: 'X',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Thu', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00703',
    name: 'INTRODUCTION TO DATABASE [Y]',
    sec: 'Y',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Thu', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00704',
    name: 'BASICS IN SOCIAL SCIENCE [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00705',
    name: 'BASICS IN SOCIAL SCIENCE [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00706',
    name: 'BASICS IN SOCIAL SCIENCE [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00707',
    name: 'BASICS IN SOCIAL SCIENCE [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00708',
    name: 'BASICS IN SOCIAL SCIENCE [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00709',
    name: 'BASICS IN SOCIAL SCIENCE [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00710',
    name: 'BASICS IN SOCIAL SCIENCE [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00711',
    name: 'BASICS IN SOCIAL SCIENCE [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00712',
    name: 'BASICS IN SOCIAL SCIENCE [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00713',
    name: 'BASICS IN SOCIAL SCIENCE [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00714',
    name: 'BASICS IN SOCIAL SCIENCE [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00715',
    name: 'BASICS IN SOCIAL SCIENCE [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00716',
    name: 'BASICS IN SOCIAL SCIENCE [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00717',
    name: 'BASICS IN SOCIAL SCIENCE [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00718',
    name: 'BASICS IN SOCIAL SCIENCE (ARCH) [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00719',
    name: 'BASICS IN SOCIAL SCIENCE [H1]',
    sec: 'H1',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00720',
    name: 'BASICS IN SOCIAL SCIENCE [H2]',
    sec: 'H2',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00721',
    name: 'MACHINE LEARNING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00722',
    name: 'MACHINE LEARNING [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00723',
    name: 'MACHINE LEARNING [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00724',
    name: 'MACHINE LEARNING [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00725',
    name: 'MACHINE LEARNING [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00726',
    name: 'MACHINE LEARNING [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00727',
    name: 'MACHINE LEARNING [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00728',
    name: 'MACHINE LEARNING [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00729',
    name: 'MACHINE LEARNING [I]',
    sec: 'I',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00730',
    name: 'MACHINE LEARNING [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00731',
    name: 'MACHINE LEARNING [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00732',
    name: 'MACHINE LEARNING [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00733',
    name: 'MOBILE APPLICATION DEVELOPMEN [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00734',
    name: 'NATURAL LANGUAGE PROCESSING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00735',
    name: 'NATURAL LANGUAGE PROCESSING [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00736',
    name: 'NATURAL LANGUAGE PROCESSING [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00737',
    name: 'NETWORK SECURITY [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00738',
    name: 'NETWORK SECURITY [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00739',
    name: 'NETWORK SECURITY [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00740',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00741',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00742',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00743',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00744',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00745',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [F]',
    sec: 'F',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00746',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00747',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00748',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00749',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00750',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00751',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00752',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00753',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00754',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00755',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00756',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00757',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00758',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [S]',
    sec: 'S',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00759',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [T]',
    sec: 'T',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00760',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [U]',
    sec: 'U',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00761',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [V]',
    sec: 'V',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00762',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [W]',
    sec: 'W',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00763',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [X]',
    sec: 'X',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00764',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [Y]',
    sec: 'Y',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00765',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [Z]',
    sec: 'Z',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00766',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [AA]',
    sec: 'AA',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00767',
    name: 'OBJECT ORIENTED ANALYSIS AND DESIGN [BB]',
    sec: 'BB',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00768',
    name: 'INTRODUCTION TO MICROECONOMICS [H1]',
    sec: 'H1',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00769',
    name: 'INTRODUCTION TO MICROECONOMICS [H2]',
    sec: 'H2',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00770',
    name: 'OBJECT ORIENTED PROGRAMMING 1 (JAVA) [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00771',
    name: 'OBJECT ORIENTED PROGRAMMING 1 (JAVA) [B]',
    sec: 'B',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00772',
    name: 'OBJECT ORIENTED PROGRAMMING 1 (JAVA) [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00773',
    name: 'OBJECT ORIENTED PROGRAMMING 1 (JAVA) [D]',
    sec: 'D',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
    ],
  },
  {
    id: '00774',
    name: 'OBJECT ORIENTED PROGRAMMING 1 (JAVA) [E]',
    sec: 'E',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00775',
    name: 'OBJECT ORIENTED PROGRAMMING 1 (JAVA) [F]',
    sec: 'F',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00776',
    name: 'OBJECT ORIENTED PROGRAMMING 1 (JAVA) [G]',
    sec: 'G',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00777',
    name: 'OBJECT ORIENTED PROGRAMMING 1 (JAVA) [H]',
    sec: 'H',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00778',
    name: 'OBJECT ORIENTED PROGRAMMING 1 (JAVA) [I]',
    sec: 'I',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00779',
    name: 'OBJECT ORIENTED PROGRAMMING 1 (JAVA) [J]',
    sec: 'J',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00780',
    name: 'OBJECT ORIENTED PROGRAMMING 1 (JAVA) [K]',
    sec: 'K',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00781',
    name: 'OBJECT ORIENTED PROGRAMMING 1 (JAVA) [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00782',
    name: 'OBJECT ORIENTED PROGRAMMING 1 (JAVA) [M]',
    sec: 'M',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00783',
    name: 'OBJECT ORIENTED PROGRAMMING 1 (JAVA) [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
    ],
  },
  {
    id: '00784',
    name: 'OBJECT ORIENTED PROGRAMMING 1 (JAVA) [O]',
    sec: 'O',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Thu', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00785',
    name: 'OBJECT ORIENTED PROGRAMMING 1 (JAVA) [P]',
    sec: 'P',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Thu', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00786',
    name: 'OBJECT ORIENTED PROGRAMMING 1 (JAVA) [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Thu', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00787',
    name: 'BANGLA LANGUAGE AND LITERATURE [J1]',
    sec: 'J1',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00788',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00789',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [B]',
    sec: 'B',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00790',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [C]',
    sec: 'C',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00791',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [D]',
    sec: 'D',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00792',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [E]',
    sec: 'E',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00793',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [F]',
    sec: 'F',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00794',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00795',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [H]',
    sec: 'H',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00796',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [I]',
    sec: 'I',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00797',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [J]',
    sec: 'J',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00798',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00799',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [L]',
    sec: 'L',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00800',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [M]',
    sec: 'M',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00801',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [N]',
    sec: 'N',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00802',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [O]',
    sec: 'O',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00803',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [P]',
    sec: 'P',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00804',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00805',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [R]',
    sec: 'R',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00806',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [S]',
    sec: 'S',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00807',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [T]',
    sec: 'T',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00808',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [U]',
    sec: 'U',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00809',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [V]',
    sec: 'V',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00810',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [W]',
    sec: 'W',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00811',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [X]',
    sec: 'X',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00812',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [Y]',
    sec: 'Y',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00813',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [Z]',
    sec: 'Z',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00814',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [AA]',
    sec: 'AA',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Thu', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00815',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [BB]',
    sec: 'BB',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Thu', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00816',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [CC]',
    sec: 'CC',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Thu', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00817',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [DD]',
    sec: 'DD',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Thu', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00818',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [EE]',
    sec: 'EE',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Thu', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00819',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [FF]',
    sec: 'FF',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Thu', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00820',
    name: 'OPERATING SYSTEM [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00821',
    name: 'OPERATING SYSTEM [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00822',
    name: 'OPERATING SYSTEM [C]',
    sec: 'C',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00823',
    name: 'OPERATING SYSTEM [D]',
    sec: 'D',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00824',
    name: 'OPERATING SYSTEM [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00825',
    name: 'OPERATING SYSTEM [F]',
    sec: 'F',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00826',
    name: 'OPERATING SYSTEM [G]',
    sec: 'G',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '00827',
    name: 'OPERATING SYSTEM [H]',
    sec: 'H',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00828',
    name: 'OPERATING SYSTEM [I]',
    sec: 'I',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00829',
    name: 'OPERATING SYSTEM [J]',
    sec: 'J',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00830',
    name: 'OPERATING SYSTEM [K]',
    sec: 'K',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00831',
    name: 'OPERATING SYSTEM [L]',
    sec: 'L',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00832',
    name: 'OPERATING SYSTEM [M]',
    sec: 'M',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00833',
    name: 'OPERATING SYSTEM [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00834',
    name: 'OPERATING SYSTEM [O]',
    sec: 'O',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00835',
    name: 'OPERATING SYSTEM [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '00836',
    name: 'OPERATING SYSTEM [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Thu', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '00837',
    name: 'OPERATING SYSTEM [R]',
    sec: 'R',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Thu', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00838',
    name: 'INTRODUCTION TO JOURNALISM [J1]',
    sec: 'J1',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00839',
    name: 'INTRODUCTION TO DIGITAL TOOLS OF COMMUNICATION [J1]',
    sec: 'J1',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00840',
    name: 'ARTS AND AESTHETICS [J1]',
    sec: 'J1',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00841',
    name: 'BIOPHYSICAL CHEMISTRY [P1]',
    sec: 'P1',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00842',
    name: 'BIO-ORGANIC CHEMISTRY [P1]',
    sec: 'P1',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00843',
    name: 'CELLS AND BIOMOLECULES [P1]',
    sec: 'P1',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00844',
    name: 'COMPUTER FUNDAMENTALS [P1]',
    sec: 'P1',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Thu', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '00845',
    name: 'INTRODUCTION TO EPIDEMIOLOGY [M1]',
    sec: 'M1',
    schedule: [{ day: 'Fri', time: '11:00 AM', start: 660, end: 840 }],
  },
  {
    id: '00846',
    name: 'INTRODUCTION TO PUBLIC HEALTH AND POPULATION DYNAMICS [M1]',
    sec: 'M1',
    schedule: [{ day: 'Fri', time: '8:00 AM', start: 480, end: 660 }],
  },
  {
    id: '00847',
    name: 'REPRODUCTIVE AND SEXUAL HEALTH [M1]',
    sec: 'M1',
    schedule: [{ day: 'Fri', time: '5:00 PM', start: 1020, end: 1200 }],
  },
  {
    id: '00848',
    name: 'ENVIRONMENTAL AND OCCUPATIONAL HEALTH AND SAFETY [M1]',
    sec: 'M1',
    schedule: [{ day: 'Fri', time: '2:00 PM', start: 840, end: 1020 }],
  },
  {
    id: '00849',
    name: 'DEVELOPMENT PERSPECTIVE [MDS] [N1]',
    sec: 'N',
    schedule: [{ day: 'Fri', time: '10:00 AM', start: 600, end: 780 }],
  },
  {
    id: '00850',
    name: 'MICROFINANCE FOR DEVELOPMENT [N1]',
    sec: 'N1',
    schedule: [{ day: 'Fri', time: '2:00 PM', start: 840, end: 1020 }],
  },
  {
    id: '00851',
    name: 'PROJECT PLANNING, MONITORING AND EVALUATION [MDS] [N1]',
    sec: 'N1',
    schedule: [{ day: 'Fri', time: '6:00 PM', start: 1080, end: 1260 }],
  },
  {
    id: '00852',
    name: 'HEALTH ECONOMICS [MDS] [N1]',
    sec: 'N1',
    schedule: [{ day: 'Thu', time: '6:00 PM', start: 1080, end: 1260 }],
  },
  {
    id: '00853',
    name: 'RESEARCH METHODS IN ENGLISH STUDIES [MAE] [O1]',
    sec: 'O1',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00854',
    name: 'TEACHING ENGLISH FOR ACADEMIC AND SPECIFIC PURPOSES [MAE] [O1]',
    sec: 'O1',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00855',
    name: 'PRINCIPLES OF ACCOUNTING [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00856',
    name: 'PRINCIPLES OF ACCOUNTING [MBA] [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00857',
    name: 'PRINCIPLES OF ACCOUNTING [MBA] [G1]',
    sec: 'G1',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00858',
    name: 'PRINCIPLES OF ACCOUNTING [MBA] [G2]',
    sec: 'G2',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00859',
    name: 'PRINCIPLES OF ACCOUNTING [MBA] [G3]',
    sec: 'G3',
    schedule: [{ day: 'Wed', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00860',
    name: 'MATHEMATICS FOR BUSINESS [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00861',
    name: 'MATHEMATICS FOR BUSINESS [MBA] [B]',
    sec: 'B',
    schedule: [{ day: 'Wed', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00862',
    name: 'MATHEMATICS FOR BUSINESS [MBA] [G1]',
    sec: 'G1',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00863',
    name: 'MATHEMATICS FOR BUSINESS [MBA] [G2]',
    sec: 'G2',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00864',
    name: 'MATHEMATICS FOR BUSINESS [MBA] [G3]',
    sec: 'G3',
    schedule: [{ day: 'Tue', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00865',
    name: 'BUSINESS LAW & CORPORATE SOCIAL RESPONSIBILITY [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00866',
    name: 'BUSINESS LAW & CORPORATE SOCIAL RESPONSIBILITY [MBA] [B]',
    sec: 'B',
    schedule: [{ day: 'Wed', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00867',
    name: 'BUSINESS LAW & CORPORATE SOCIAL RESPONSIBILITY [MBA] [G1]',
    sec: 'G1',
    schedule: [{ day: 'Tue', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00868',
    name: 'BUSINESS LAW & CORPORATE SOCIAL RESPONSIBILITY [MBA] [G2]',
    sec: 'G2',
    schedule: [{ day: 'Wed', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00869',
    name: 'BUSINESS LAW & CORPORATE SOCIAL RESPONSIBILITY [MBA] [G3]',
    sec: 'G3',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00870',
    name: 'COMPUTING & BUSINESS APPLICATIONS [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00871',
    name: 'COMPUTING & BUSINESS APPLICATIONS [MBA] [G1]',
    sec: 'G1',
    schedule: [{ day: 'Wed', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00872',
    name: 'COMPUTING & BUSINESS APPLICATIONS [MBA] [G2]',
    sec: 'G2',
    schedule: [{ day: 'Tue', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '00873',
    name: 'ACCOUNTING FOR MANAGERS [EMBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '10:00 AM', start: 600, end: 780 }],
  },
  {
    id: '00874',
    name: 'CORPORATE COMMUNICATION [EMBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '2:30 PM', start: 870, end: 1050 }],
  },
  {
    id: '00875',
    name: 'LEADERSHIP AND MANAGEMENT SKILLS [EMBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '5:30 PM', start: 1050, end: 1230 }],
  },
  {
    id: '00876',
    name: 'PEPTIDES AND PROTEINS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00877',
    name: 'MOLECULAR BIOLOGY 1 [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00878',
    name: 'MICROBIOLOGY I [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00879',
    name: 'BIOCHEMISTRY LABORATORY WORK I [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '00880',
    name: 'MATHEMATICS FOR BIOCHEMISTRY [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00881',
    name: 'COGNITIVE AND SOCIAL PSYCHOLOGY [BMB] [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00882',
    name: 'INTRODUCTION TO PUBLIC HEALTH & NUTRITION [BMB] [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00883',
    name: 'INTRODUCTION TO BIOSTATISTICS [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '8:00 AM', start: 480, end: 660 }],
  },
  {
    id: '00884',
    name: 'RESEARCH METHODOLOGY FOR PUBLIC HEALTH [MPH] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '11:00 AM', start: 660, end: 840 }],
  },
  {
    id: '00885',
    name: 'HEALTH PROMOTION AND COMMUNITY OUTREACH [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '2:00 PM', start: 840, end: 1020 }],
  },
  {
    id: '00886',
    name: 'HEALTH ECONOMICS [MPH] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '5:00 PM', start: 1020, end: 480 }],
  },
  {
    id: '00887',
    name: 'APPLIED EPIDEMIOLOGY [MPH] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '5:00 PM', start: 1020, end: 1200 }],
  },
  {
    id: '00888',
    name: 'BIOSTATISTICS 2 [MPH] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '8:00 AM', start: 480, end: 660 }],
  },
  {
    id: '00889',
    name: 'CONCEPTS OF ONE HEALTH: HUMAN, ENVIRONMENT AND ANIMAL HEALTH [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '11:00 AM', start: 660, end: 840 }],
  },
  {
    id: '00890',
    name: 'EPIDEMIOLOGY OF NON COMMUNICABLE DISEASES[MPH] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '2:00 PM', start: 840, end: 1020 }],
  },
  {
    id: '00891',
    name: 'CLIMATE CHANGE AND HEALTH RISK [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '8:00 AM', start: 480, end: 660 }],
  },
  {
    id: '00892',
    name: 'ENVIRONMENTAL TOXICOLOGY [MPH] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '11:00 AM', start: 660, end: 840 }],
  },
  {
    id: '00893',
    name: 'INDUSTRIAL HAZARDS MANAGEMENT [MPH] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '5:00 PM', start: 1020, end: 1200 }],
  },
  {
    id: '00894',
    name: 'ENVIRONMENTAL HEALTH RESEARCH [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '2:00 PM', start: 840, end: 1020 }],
  },
  {
    id: '00895',
    name: 'MANAGING HEALTH SERVICE ORGANIZATIONS [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '8:00 AM', start: 480, end: 660 }],
  },
  {
    id: '00896',
    name: 'GLOBAL HEALTH AND EMERGING DISEASES PATTERN [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '11:00 AM', start: 660, end: 840 }],
  },
  {
    id: '00897',
    name: 'DISSERTATION / INTERNSHIP [MPH] [A]',
    sec: 'A',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '00898',
    name: 'BUSINESS COMMUNICATION [FBA/FASS] [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00899',
    name: 'BUSINESS COMMUNICATION [FBA/FASS] [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00900',
    name: 'BUSINESS COMMUNICATION [FBA/FASS] [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00901',
    name: 'BUSINESS COMMUNICATION [FBA/FASS] [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00902',
    name: 'BUSINESS COMMUNICATION [FBA/FASS] [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00903',
    name: 'BUSINESS COMMUNICATION [FST/FE] [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00904',
    name: 'BUSINESS COMMUNICATION [FST/FE] [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00905',
    name: 'BUSINESS COMMUNICATION [FST/FE] [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00906',
    name: 'BUSINESS COMMUNICATION [FST/FE] [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00907',
    name: 'BUSINESS COMMUNICATION [FST/FE] [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00908',
    name: 'BUSINESS COMMUNICATION [FST/FE] [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00909',
    name: 'BUSINESS COMMUNICATION [FST/FE] [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00910',
    name: 'BUSINESS COMMUNICATION [FST/FE] [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00911',
    name: 'BUSINESS COMMUNICATION [FST/FE] [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00912',
    name: 'BUSINESS COMMUNICATION [FST/FE] [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00913',
    name: 'BUSINESS COMMUNICATION [FST/FE] [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00914',
    name: 'BUSINESS COMMUNICATION [FST/FE] [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00915',
    name: 'BUSINESS COMMUNICATION [FST/FE] [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00916',
    name: 'BUSINESS COMMUNICATION [FST/FE] [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00917',
    name: 'BUSINESS COMMUNICATION [FST/FE] [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00918',
    name: 'BUSINESS COMMUNICATION [FST/FE] [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00919',
    name: 'BUSINESS COMMUNICATION [FST/FE] [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00920',
    name: 'BUSINESS COMMUNICATION [FST/FE] [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00921',
    name: 'BUSINESS COMMUNICATION [FST/FE] [S]',
    sec: 'S',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00922',
    name: 'BUSINESS COMMUNICATION [FST/FE] [T]',
    sec: 'T',
    schedule: [
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00923',
    name: 'BUSINESS COMMUNICATION [FST/FE] [U]',
    sec: 'U',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00924',
    name: 'BUSINESS COMMUNICATION [FST/FE] [V]',
    sec: 'V',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00925',
    name: 'BUSINESS COMMUNICATION [FST/FE] [W]',
    sec: 'W',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00926',
    name: 'BUSINESS COMMUNICATION [FST/FE] [X]',
    sec: 'X',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00927',
    name: 'BUSINESS COMMUNICATION [FST/FE] [Y]',
    sec: 'Y',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00928',
    name: 'BUSINESS COMMUNICATION [FST/FE] [Z]',
    sec: 'Z',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00929',
    name: 'BUSINESS COMMUNICATION [FST/FE] [AA]',
    sec: 'AA',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00930',
    name: 'BUSINESS COMMUNICATION [FST/FE] [BB]',
    sec: 'BB',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00931',
    name: 'BUSINESS COMMUNICATION [FST/FE] [CC]',
    sec: 'CC',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00932',
    name: 'BUSINESS COMMUNICATION [FST/FE] [DD]',
    sec: 'DD',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00933',
    name: 'BUSINESS COMMUNICATION [FST/FE] [EE]',
    sec: 'EE',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00934',
    name: 'BUSINESS COMMUNICATION [FST/FE] [FF]',
    sec: 'FF',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00935',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00936',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00937',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00938',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00939',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00940',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00941',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00942',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00943',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00944',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00945',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00946',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00947',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00948',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00949',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00950',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00951',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00952',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00953',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [S]',
    sec: 'S',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00954',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [T]',
    sec: 'T',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00955',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [U]',
    sec: 'U',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00956',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [V]',
    sec: 'V',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00957',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [W]',
    sec: 'W',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00958',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [X]',
    sec: 'X',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00959',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [Y]',
    sec: 'Y',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00960',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [Z]',
    sec: 'Z',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00961',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [AA]',
    sec: 'AA',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00962',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [BB]',
    sec: 'BB',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00963',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [CC]',
    sec: 'CC',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00964',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [DD]',
    sec: 'DD',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00965',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [EE]',
    sec: 'EE',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00966',
    name: 'ENGLISH WRITING SKILLS & COMMUNICATIONS [FST/FE] [FF]',
    sec: 'FF',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00967',
    name: 'ENGLISH WRITING [FBA/FASS] [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00968',
    name: 'ENGLISH WRITING [FBA/FASS] [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00969',
    name: 'ENGLISH WRITING [FBA/FASS] [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00970',
    name: 'ENGLISH WRITING [FBA/FASS] [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00971',
    name: 'ENGLISH WRITING [FBA/FASS] [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00972',
    name: 'ENGLISH WRITING [FBA/FASS] [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00973',
    name: 'ENGLISH WRITING [FBA/FASS] [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00974',
    name: 'ENGLISH WRITING [FBA/FASS] [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00975',
    name: 'ENGLISH WRITING [FBA/FASS] [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00976',
    name: 'ENGLISH WRITING [FBA/FASS] [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00977',
    name: 'ENGLISH WRITING [FBA/FASS] [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00978',
    name: 'ENGLISH WRITING [FBA/FASS] [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00979',
    name: 'ENGLISH WRITING [FBA/FASS] [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00980',
    name: 'ENGLISH WRITING [FBA/FASS] [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00981',
    name: 'ENGLISH WRITING [FBA/FASS] [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00982',
    name: 'ENGLISH WRITING [FBA/FASS] [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00983',
    name: 'COMMUNICATIONS FOR ARCHITECTS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00984',
    name: 'MACRO ECONOMICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00985',
    name: 'MACRO ECONOMICS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00986',
    name: 'MACRO ECONOMICS [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00987',
    name: 'MACRO ECONOMICS [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00988',
    name: 'MACRO ECONOMICS [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00989',
    name: 'MACRO ECONOMICS [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '00990',
    name: 'MICRO ECONOMICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00991',
    name: 'MICRO ECONOMICS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00992',
    name: 'MICRO ECONOMICS [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00993',
    name: 'MICRO ECONOMICS [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00994',
    name: 'MICRO ECONOMICS [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00995',
    name: 'MICRO ECONOMICS [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '00996',
    name: 'FUNDAMENTALS OF ECONOMICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '00997',
    name: 'FUNDAMENTALS OF ECONOMICS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '00998',
    name: 'FUNDAMENTALS OF ECONOMICS [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '00999',
    name: 'PRINCIPLES OF ECONOMICS (ARCHI) [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01000',
    name: 'BILINGUALISM [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01001',
    name: 'MODERN FICTION AND NON-FICTION [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01002',
    name: '19TH CENTURY NOVEL [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01003',
    name: 'CLASSROOM MANAGEMENT TECHNIQUES IN ELT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01004',
    name: 'CLASSROOM MANAGEMENT TECHNIQUES IN ELT [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01005',
    name: 'APPRECIATION OF POETRY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01006',
    name: 'APPRECIATION OF POETRY [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01007',
    name: 'APPRECIATION OF PROSE [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01008',
    name: 'APPRECIATION OF PROSE [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01009',
    name: 'MORPHOLOGY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01010',
    name: 'MORPHOLOGY [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01011',
    name: 'SOCIAL SCIENCE RESEARCH METHODOLOGY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01012',
    name: 'SOCIAL SCIENCE RESEARCH METHODOLOGY [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01013',
    name: 'WRITING FOR ARTS AND SOCIAL SCIENCES [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01014',
    name: 'WRITING FOR ARTS AND SOCIAL SCIENCES [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01015',
    name: 'TEACHING GRAMMAR AND VOCABULARY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01016',
    name: 'TEACHING GRAMMAR AND VOCABULARY [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01017',
    name: 'CLASSICAL LITERATURE [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01018',
    name: 'INTRODUCTION TO LINGUISTICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01019',
    name: 'INTRODUCTION TO LINGUISTICS [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01020',
    name: 'ELT APPROACHES AND METHODS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01021',
    name: 'PHONETICS & PHONOLOGY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01022',
    name: 'PHONETICS & PHONOLOGY [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01023',
    name: 'HISTORY OF EMERGENCE OF BANGLADESH [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01024',
    name: 'HISTORY OF EMERGENCE OF BANGLADESH [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01025',
    name: 'HISTORY OF EMERGENCE OF BANGLADESH [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01026',
    name: 'HISTORY OF ENGLISH LANGUAGE [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01027',
    name: 'HISTORY OF ENGLISH LANGUAGE [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01028',
    name: 'PROFESSIONAL ENGLISH [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01029',
    name: 'PROFESSIONAL ENGLISH [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01030',
    name: 'SOCIOLINGUISTICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01031',
    name: 'COGNITIVE AND SOCIAL PSYCHOLOGY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01032',
    name: 'COGNITIVE AND SOCIAL PSYCHOLOGY [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01033',
    name: 'ELT APPROACHES AND METHODS [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01034',
    name: 'TEACHING LISTENING AND SPEAKING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01035',
    name: 'TEACHING LISTENING AND SPEAKING [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01036',
    name: 'APPRECIATION OF DRAMA [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01037',
    name: 'APPRECIATION OF DRAMA [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01038',
    name: 'GLOBAL ENGLISHES [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01039',
    name: 'FIRST LANGUAGE DEVELOPMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01040',
    name: 'FIRST LANGUAGE DEVELOPMENT [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01041',
    name: 'LITERARY THEORY AND CRITICISM [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01042',
    name: 'PHILOSOPHY AND ETHICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01043',
    name: 'PHILOSOPHY AND ETHICS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01044',
    name: 'ARTS AND AESTHETICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01045',
    name: 'ARTS AND AESTHETICS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01046',
    name: 'SHAKESPEARE [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01047',
    name: 'SHAKESPEARE [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01048',
    name: 'ELEMENTARY ACCOUNTING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01049',
    name: 'ELEMENTARY ACCOUNTING [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01050',
    name: 'CONTEMPORARY SOUTH ASIAN LITERATURE IN ENGLISH [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01051',
    name: 'SOUTH ASIAN HISTORY AND DEVELOPMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01052',
    name: 'SOUTH ASIAN HISTORY AND DEVELOPMENT [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01053',
    name: 'NATURAL SCIENCE [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01054',
    name: 'NATURAL SCIENCE [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01055',
    name: 'STATISTICS FOR SOCIAL SCIENCE [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01056',
    name: 'STATISTICS FOR SOCIAL SCIENCE [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01057',
    name: 'TEACHING PRACTICUM [A]',
    sec: 'A',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '01058',
    name: 'QUANTITATIVE RESEARCH METHODS FOR COMMUNICATION [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01059',
    name: 'MEDIA ADVOCACY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01060',
    name: 'MEDIA LAWS AND ETHICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01061',
    name: 'GRADUATE PRODUCTION: ANIMATION [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01062',
    name: 'GENDER, MEDIA AND IDENTITY [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01063',
    name: 'POLITICAL ECONOMY OF COMMUNICATION [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01064',
    name: 'MULTIMEDIA JOURNALISM [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01065',
    name: 'ENVIRONMENTAL JOURNALISM [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01066',
    name: 'CRIME AND COURT REPORTING [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01067',
    name: 'INTRODUCTION TO ANIMATION [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01068',
    name: 'INTRODUCTION TO DRAWING AND DESIGN [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01069',
    name: 'ADVANCED 3D CHARACTER MODELING AND LIGHTING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01070',
    name: 'MASS MEDIA AND SOCIETY [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01071',
    name: 'INTERNSHIP [BAMMC] [A]',
    sec: 'A',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '01072',
    name: 'RESEARCH METHODOLOGY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01073',
    name: 'POLITICAL ECONOMY OF GLOBALIZATION [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01074',
    name: 'ADVANCED MACROECONOMICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01075',
    name: 'INTRODUCTION TO MACROECONOMICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01076',
    name: 'HISTORY OF ECONOMIC THOUGHT [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01077',
    name: 'HISTORY OF ECONOMIC THOUGHT [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01078',
    name: 'ADVANCED MICROECONOMICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01079',
    name: 'MATHEMATICS 2 (ECO) [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01080',
    name: 'BEHAVIORAL ECONOMICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01081',
    name: 'BUSINESS ECONOMICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01082',
    name: 'LABOR ECONOMICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01083',
    name: 'DEVELOPMENT ECONOMICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01084',
    name: 'ENVIRONMENTAL ECONOMICS AND SUSTAINABILITY [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01085',
    name: 'INTERMEDIATE MACROECONOMICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01086',
    name: 'MONETARY ECONOMICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01087',
    name: 'ENERGY ECONOMICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01088',
    name: 'ECONOMICS OF MONEY, BANKING AND FINANCE [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01089',
    name: 'AGRICULTURAL ECONOMICS (ECO) [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01090',
    name: 'COMPARATIVE ECONOMIC ANALYSIS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01091',
    name: 'STATISTICS FOR ECONOMICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01092',
    name: 'INTERMEDIATE MICROECONOMICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01093',
    name: 'ECONOMICS OF EDUCATION [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01094',
    name: 'ECONOMICS OF MICRO-CREDIT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01095',
    name: 'CONTEMPORARY ISSUES IN GLOBAL ECONOMY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01096',
    name: 'HEALTH ECONOMICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01097',
    name: 'PUBLIC ECONOMICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01098',
    name: 'INTERNATIONAL TRADE [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01099',
    name: 'INTRODUCTION TO PROGRAMMING [ECO] [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01100',
    name: 'BIG DATA AND BUSINESS DECISION [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01101',
    name: 'ECONOMETRICS (ECO) [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01102',
    name: 'BANGLADESH ECONOMIC STUDIES AND CONTEMPORARY ISSUES [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01103',
    name: 'URBAN AND REGIONAL ECONOMICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01104',
    name: 'THEORIES OF SECOND LANGUAGE ACQUISITION [MAE] [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01105',
    name: 'ECOCRITICISM AND ENVIRONMENTAL LITERATURE [MAE] [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01106',
    name: 'INTERNATIONAL REFUGEE LAW [LL.M] [A]',
    sec: 'A',
    schedule: [{ day: 'Thu', time: '6:00 PM', start: 1080, end: 1260 }],
  },
  {
    id: '01107',
    name: 'INTERNATIONAL HUMANITARIAN LAW [LL.M] [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '6:00 PM', start: 1080, end: 1260 }],
  },
  {
    id: '01108',
    name: 'INTERNATIONAL CRIMINAL LAW [LL.M] [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '6:00 PM', start: 1080, end: 1260 }],
  },
  {
    id: '01109',
    name: 'INTERNATIONAL INVESTMENT LAW [LL.M] [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '6:00 PM', start: 1080, end: 1260 }],
  },
  {
    id: '01110',
    name: 'ADVANCED LEGAL RESEARCH/THESIS [LL.M] [A]',
    sec: 'A',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '01111',
    name: 'OFFICE MANAGEMENT TECHNOLOGY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '01112',
    name: 'OFFICE MANAGEMENT TECHNOLOGY [B]',
    sec: 'B',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '01113',
    name: 'OFFICE MANAGEMENT TECHNOLOGY [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '01114',
    name: 'OFFICE MANAGEMENT TECHNOLOGY [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '01115',
    name: 'OFFICE MANAGEMENT TECHNOLOGY [E]',
    sec: 'E',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01116',
    name: 'OFFICE MANAGEMENT TECHNOLOGY [F]',
    sec: 'F',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '01117',
    name: 'OFFICE MANAGEMENT TECHNOLOGY [G]',
    sec: 'G',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01118',
    name: 'OFFICE MANAGEMENT TECHNOLOGY [H]',
    sec: 'H',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01119',
    name: 'REMEDIAL MATHEMATICS (N0N-CREDIT) [A]',
    sec: 'A',
    schedule: [{ day: 'Thu', time: '1:00 PM', start: 780, end: 960 }],
  },
  {
    id: '01120',
    name: 'REMEDIAL ENGLISH (NON-CREDIT) [A]',
    sec: 'A',
    schedule: [{ day: 'Thu', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '01121',
    name: 'ENGINEERING MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01122',
    name: 'ENGINEERING MANAGEMENT [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01123',
    name: 'ENGINEERING MANAGEMENT [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01124',
    name: 'ENGINEERING MANAGEMENT [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01125',
    name: 'ENGINEERING MANAGEMENT [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01126',
    name: 'ENGINEERING MANAGEMENT [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01127',
    name: 'ENGINEERING MANAGEMENT [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01128',
    name: 'ENGINEERING MANAGEMENT [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01129',
    name: 'ENGINEERING MANAGEMENT [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01130',
    name: 'ENGINEERING MANAGEMENT [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01131',
    name: 'ENGINEERING MANAGEMENT [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01132',
    name: 'ENGINEERING MANAGEMENT [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01133',
    name: 'ENGINEERING MANAGEMENT [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01134',
    name: 'ENGINEERING MANAGEMENT [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01135',
    name: 'ENGINEERING MANAGEMENT [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01136',
    name: 'PRINCIPLES OF ACCOUNTING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01137',
    name: 'PRINCIPLES OF ACCOUNTING [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01138',
    name: 'PRINCIPLES OF ACCOUNTING [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01139',
    name: 'PRINCIPLES OF ACCOUNTING [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01140',
    name: 'PRINCIPLES OF ACCOUNTING [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01141',
    name: 'PRINCIPLES OF ACCOUNTING [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01142',
    name: 'PRINCIPLES OF ACCOUNTING [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01143',
    name: 'PRINCIPLES OF ACCOUNTING [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01144',
    name: 'PRINCIPLES OF ACCOUNTING [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01145',
    name: 'PRINCIPLES OF ACCOUNTING [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01146',
    name: 'PRINCIPLES OF ACCOUNTING [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01147',
    name: 'PRINCIPLES OF ACCOUNTING [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01148',
    name: 'PRINCIPLES OF ACCOUNTING [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01149',
    name: 'PRINCIPLES OF ACCOUNTING [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01150',
    name: 'PRINCIPLES OF ACCOUNTING [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01151',
    name: 'PRINCIPLES OF ACCOUNTING [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01152',
    name: 'PRINCIPLES OF ACCOUNTING [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01153',
    name: 'PRINCIPLES OF ACCOUNTING [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01154',
    name: 'PRINCIPLES OF ACCOUNTING [S]',
    sec: 'S',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01155',
    name: 'PRINCIPLES OF ACCOUNTING [T]',
    sec: 'T',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01156',
    name: 'PRINCIPLES OF ACCOUNTING [U]',
    sec: 'U',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01157',
    name: 'PRINCIPLES OF ACCOUNTING [V]',
    sec: 'V',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01158',
    name: 'PRINCIPLES OF ACCOUNTING [W]',
    sec: 'W',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01159',
    name: 'PRINCIPLES OF ACCOUNTING [X]',
    sec: 'X',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01160',
    name: 'PRINCIPLES OF ACCOUNTING [Y]',
    sec: 'Y',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01161',
    name: 'PRINCIPLES OF ACCOUNTING [Z]',
    sec: 'Z',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01162',
    name: 'PRINCIPLES OF ACCOUNTING [AA]',
    sec: 'AA',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01163',
    name: 'PRINCIPLES OF ACCOUNTING [BB]',
    sec: 'BB',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01164',
    name: 'PRINCIPLES OF ACCOUNTING [CC]',
    sec: 'CC',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01165',
    name: 'PRINCIPLES OF ACCOUNTING [DD]',
    sec: 'DD',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01166',
    name: 'PRINCIPLES OF ACCOUNTING [EE]',
    sec: 'EE',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01167',
    name: 'PRINCIPLES OF ACCOUNTING [FF]',
    sec: 'FF',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01168',
    name: 'PRINCIPLES OF ACCOUNTING [GG]',
    sec: 'GG',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01169',
    name: 'PRINCIPLES OF ACCOUNTING [HH]',
    sec: 'HH',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01170',
    name: 'PRINCIPLES OF ACCOUNTING [II]',
    sec: 'II',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01171',
    name: 'PRINCIPLES OF ACCOUNTING [JJ]',
    sec: 'JJ',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01172',
    name: 'PRINCIPLES OF ACCOUNTING [KK]',
    sec: 'KK',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01173',
    name: 'PRINCIPLES OF ACCOUNTING (ARCH) [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01174',
    name: 'PRINCIPLES OF ACCOUNTING [IPE] [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01175',
    name: 'BUSINESS MATHEMATICS-2 [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01176',
    name: 'BUSINESS MATHEMATICS-2 [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01177',
    name: 'BUSINESS MATHEMATICS-2 [C]',
    sec: 'C',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01178',
    name: 'BUSINESS MATHEMATICS-2 [D]',
    sec: 'D',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01179',
    name: 'BUSINESS MATHEMATICS-2 [E]',
    sec: 'E',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01180',
    name: 'BUSINESS MATHEMATICS-2 [F]',
    sec: 'F',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01181',
    name: 'BUSINESS MATHEMATICS-2 [G]',
    sec: 'G',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01182',
    name: 'BUSINESS MATHEMATICS-2 [H]',
    sec: 'H',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01183',
    name: 'ADVANCED BUSINESS STATISTICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01184',
    name: 'ADVANCED BUSINESS STATISTICS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01185',
    name: 'ADVANCED BUSINESS STATISTICS [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01186',
    name: 'ADVANCED BUSINESS STATISTICS [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01187',
    name: 'ADVANCED BUSINESS STATISTICS [E]',
    sec: 'E',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01188',
    name: 'BUSINESS STATISTICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01189',
    name: 'BUSINESS STATISTICS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01190',
    name: 'BUSINESS STATISTICS [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01191',
    name: 'BUSINESS STATISTICS [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01192',
    name: 'BUSINESS STATISTICS [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01193',
    name: 'BUSINESS STATISTICS [F]',
    sec: 'F',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01194',
    name: 'BUSINESS STATISTICS [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01195',
    name: 'BUSINESS STATISTICS [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01196',
    name: 'ENTREPRENEURSHIP DEVELOPMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01197',
    name: 'ENTREPRENEURSHIP DEVELOPMENT [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01198',
    name: 'ENTREPRENEURSHIP DEVELOPMENT [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01199',
    name: 'ENTREPRENEURSHIP DEVELOPMENT [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01200',
    name: 'INNOVATION AND ENTREPRENEURSHIP DEVELOPMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01201',
    name: 'INNOVATION AND ENTREPRENEURSHIP DEVELOPMENT [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01202',
    name: 'INNOVATION AND ENTREPRENEURSHIP DEVELOPMENT [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01203',
    name: 'INNOVATION AND ENTREPRENEURSHIP DEVELOPMENT [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01204',
    name: 'INNOVATION AND ENTREPRENEURSHIP DEVELOPMENT [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01205',
    name: 'INNOVATION AND ENTREPRENEURSHIP DEVELOPMENT [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01206',
    name: 'GLOBAL LANGUAGES [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01207',
    name: 'GLOBAL LANGUAGES [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01208',
    name: 'GLOBAL LANGUAGES [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01209',
    name: 'GLOBAL LANGUAGES [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01210',
    name: 'GLOBAL LANGUAGES [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01211',
    name: 'GLOBAL LANGUAGES [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01212',
    name: 'POLITICS, PHILOSOPHY AND PUBLIC AFFAIRS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01213',
    name: 'POLITICS, PHILOSOPHY AND PUBLIC AFFAIRS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01214',
    name: 'POLITICS, PHILOSOPHY AND PUBLIC AFFAIRS [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01215',
    name: 'POLITICS, PHILOSOPHY AND PUBLIC AFFAIRS [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01216',
    name: 'POLITICS, PHILOSOPHY AND PUBLIC AFFAIRS [E]',
    sec: 'E',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01217',
    name: 'PRINCIPLES OF FINANCE [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01218',
    name: 'PRINCIPLES OF FINANCE [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01219',
    name: 'PRINCIPLES OF FINANCE [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01220',
    name: 'PRINCIPLES OF FINANCE [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01221',
    name: 'PRINCIPLES OF FINANCE [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01222',
    name: 'PRINCIPLES OF FINANCE [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01223',
    name: 'PRINCIPLES OF FINANCE [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01224',
    name: 'PRINCIPLES OF FINANCE [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01225',
    name: 'FINANCIAL MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01226',
    name: 'FINANCIAL MANAGEMENT [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01227',
    name: 'FINANCIAL MANAGEMENT [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01228',
    name: 'FINANCIAL MANAGEMENT [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01229',
    name: 'FINANCIAL MANAGEMENT [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01230',
    name: 'FINANCIAL MANAGEMENT [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01231',
    name: 'FINANCIAL MANAGEMENT [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01232',
    name: 'FOUNDATION COURSE [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 540 }],
  },
  {
    id: '01233',
    name: 'FOUNDATION COURSE [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '9:10 AM', start: 550, end: 610 }],
  },
  {
    id: '01234',
    name: 'FOUNDATION COURSE [C]',
    sec: 'C',
    schedule: [{ day: 'Tue', time: '11:20 AM', start: 680, end: 740 }],
  },
  {
    id: '01235',
    name: 'FOUNDATION COURSE [D]',
    sec: 'D',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 680 }],
  },
  {
    id: '01236',
    name: 'FOUNDATION COURSE [E]',
    sec: 'E',
    schedule: [{ day: 'Wed', time: '1:40 PM', start: 820, end: 880 }],
  },
  {
    id: '01237',
    name: 'FOUNDATION COURSE [F]',
    sec: 'F',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 820 }],
  },
  {
    id: '01238',
    name: 'FOUNDATION COURSE [G]',
    sec: 'G',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 960 }],
  },
  {
    id: '01239',
    name: 'PROFESSIONAL DEVELOPMENT COURSE [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 540 }],
  },
  {
    id: '01240',
    name: 'PROFESSIONAL DEVELOPMENT COURSE [B]',
    sec: 'B',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 680 }],
  },
  {
    id: '01241',
    name: 'PROFESSIONAL DEVELOPMENT COURSE [C]',
    sec: 'C',
    schedule: [{ day: 'Mon', time: '11:20 AM', start: 680, end: 740 }],
  },
  {
    id: '01242',
    name: 'PROFESSIONAL DEVELOPMENT COURSE [D]',
    sec: 'D',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 820 }],
  },
  {
    id: '01243',
    name: 'PROFESSIONAL DEVELOPMENT COURSE [E]',
    sec: 'E',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 960 }],
  },
  {
    id: '01244',
    name: 'PROFESSIONAL DEVELOPMENT COURSE [F]',
    sec: 'F',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 960 }],
  },
  {
    id: '01245',
    name: 'PROFESSIONAL DEVELOPMENT COURSE [G]',
    sec: 'G',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 540 }],
  },
  {
    id: '01246',
    name: 'CORPORATE GOVERNANCE AND SOCIAL RESPONSIBILITY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01247',
    name: 'CORPORATE GOVERNANCE AND SOCIAL RESPONSIBILITY [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01248',
    name: 'CORPORATE GOVERNANCE AND SOCIAL RESPONSIBILITY [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01249',
    name: 'CORPORATE GOVERNANCE AND SOCIAL RESPONSIBILITY [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01250',
    name: 'CORPORATE GOVERNANCE AND SOCIAL RESPONSIBILITY [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01251',
    name: 'INTERNATIONAL BUSINESS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01252',
    name: 'INTERNATIONAL BUSINESS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01253',
    name: 'INTERNATIONAL BUSINESS [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01254',
    name: 'INTERNATIONAL BUSINESS [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01255',
    name: 'INTERNATIONAL BUSINESS [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01256',
    name: 'INTERNATIONAL BUSINESS [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01257',
    name: 'INTERNATIONAL BUSINESS [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01258',
    name: 'HUMAN RESOURCE MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01259',
    name: 'HUMAN RESOURCE MANAGEMENT [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01260',
    name: 'HUMAN RESOURCE MANAGEMENT [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01261',
    name: 'HUMAN RESOURCE MANAGEMENT [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01262',
    name: 'HUMAN RESOURCE MANAGEMENT [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01263',
    name: 'HUMAN RESOURCE MANAGEMENT [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01264',
    name: 'HUMAN RESOURCE MANAGEMENT [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01265',
    name: 'BUSINESS MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01266',
    name: 'BUSINESS MANAGEMENT [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01267',
    name: 'BUSINESS MANAGEMENT [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01268',
    name: 'BUSINESS MANAGEMENT [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01269',
    name: 'BUSINESS MANAGEMENT [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01270',
    name: 'BUSINESS MANAGEMENT [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01271',
    name: 'BUSINESS MANAGEMENT [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01272',
    name: 'BUSINESS MANAGEMENT [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01273',
    name: 'ORGANIZATIONAL BEHAVIOUR [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01274',
    name: 'ORGANIZATIONAL BEHAVIOUR [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01275',
    name: 'ORGANIZATIONAL BEHAVIOUR [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01276',
    name: 'ORGANIZATIONAL BEHAVIOUR [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01277',
    name: 'ORGANIZATIONAL BEHAVIOUR [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01278',
    name: 'ORGANIZATIONAL BEHAVIOUR [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01279',
    name: 'ORGANIZATIONAL BEHAVIOUR [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01280',
    name: 'ORGANIZATIONAL BEHAVIOUR [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01281',
    name: 'LEGAL ENVIRONMENT IN BUSINESS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01282',
    name: 'BUSINESS LAW [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01283',
    name: 'BUSINESS LAW [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01284',
    name: 'BUSINESS LAW [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01285',
    name: 'BUSINESS LAW [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01286',
    name: 'BUSINESS LAW [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01287',
    name: 'BUSINESS LAW [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01288',
    name: 'MANAGEMENT INFORMATION SYSTEMS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01289',
    name: 'MANAGEMENT INFORMATION SYSTEMS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01290',
    name: 'MANAGEMENT INFORMATION SYSTEMS [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01291',
    name: 'MANAGEMENT INFORMATION SYSTEMS [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01292',
    name: 'MANAGEMENT INFORMATION SYSTEMS [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01293',
    name: 'MANAGEMENT INFORMATION SYSTEMS [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01294',
    name: 'MANAGEMENT INFORMATION SYSTEMS [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01295',
    name: 'MANAGEMENT INFORMATION SYSTEMS [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01296',
    name: 'MANAGEMENT INFORMATION SYSTEMS [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01297',
    name: 'INTRODUCTION TO INFORMATION TECHNOLOGY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01298',
    name: 'INTRODUCTION TO INFORMATION TECHNOLOGY [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01299',
    name: 'INTRODUCTION TO INFORMATION TECHNOLOGY [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01300',
    name: 'INTRODUCTION TO INFORMATION TECHNOLOGY [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01301',
    name: 'INTRODUCTION TO INFORMATION TECHNOLOGY [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01302',
    name: 'INTRODUCTION TO INFORMATION TECHNOLOGY [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01303',
    name: 'INTRODUCTION TO INFORMATION TECHNOLOGY [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01304',
    name: 'INTRODUCTION TO INFORMATION TECHNOLOGY [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01305',
    name: 'INTRODUCTION TO INFORMATION TECHNOLOGY [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01306',
    name: 'MANAGERIAL ACCOUNTING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01307',
    name: 'MANAGERIAL ACCOUNTING [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01308',
    name: 'MANAGERIAL ACCOUNTING [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01309',
    name: 'MANAGERIAL ACCOUNTING [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01310',
    name: 'MANAGERIAL ACCOUNTING [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01311',
    name: 'MANAGERIAL ACCOUNTING [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01312',
    name: 'MANAGERIAL ACCOUNTING [G]',
    sec: 'G',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 660 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 660 },
    ],
  },
  {
    id: '01313',
    name: 'MANAGERIAL ACCOUNTING [H]',
    sec: 'H',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01314',
    name: 'PRINCIPLES AND PRACTICES OF TAXATION [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01315',
    name: 'PRINCIPLES AND PRACTICES OF TAXATION [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01316',
    name: 'PRINCIPLES AND PRACTICES OF TAXATION [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01317',
    name: 'PRINCIPLES AND PRACTICES OF TAXATION [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01318',
    name: 'MARKETING MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01319',
    name: 'MARKETING MANAGEMENT [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01320',
    name: 'MARKETING MANAGEMENT [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01321',
    name: 'MARKETING MANAGEMENT [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01322',
    name: 'MARKETING MANAGEMENT [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01323',
    name: 'MARKETING MANAGEMENT [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01324',
    name: 'MARKETING MANAGEMENT [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01325',
    name: 'MARKETING MANAGEMENT [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01326',
    name: 'OPERATIONS AND SUPPLY CHAIN MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01327',
    name: 'OPERATIONS AND SUPPLY CHAIN MANAGEMENT [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01328',
    name: 'OPERATIONS AND SUPPLY CHAIN MANAGEMENT [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01329',
    name: 'OPERATIONS AND SUPPLY CHAIN MANAGEMENT [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01330',
    name: 'OPERATIONS AND SUPPLY CHAIN MANAGEMENT [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01331',
    name: 'OPERATIONS AND SUPPLY CHAIN MANAGEMENT [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01332',
    name: 'BUSINESS RESEARCH [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01333',
    name: 'BUSINESS RESEARCH [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01334',
    name: 'BUSINESS RESEARCH [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01335',
    name: 'BUSINESS RESEARCH [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01336',
    name: 'BUSINESS RESEARCH [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01337',
    name: 'STRATEGIC MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01338',
    name: 'STRATEGIC MANAGEMENT [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01339',
    name: 'STRATEGIC MANAGEMENT [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01340',
    name: 'STRATEGIC MANAGEMENT [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01341',
    name: 'STRATEGIC MANAGEMENT [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01342',
    name: 'STRATEGIC MANAGEMENT [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01343',
    name: 'PROJECT MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01344',
    name: 'PROJECT MANAGEMENT [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01345',
    name: 'PROJECT MANAGEMENT [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01346',
    name: 'PROJECT MANAGEMENT [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01347',
    name: 'TOTAL QUALITY MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01348',
    name: 'PRINCIPLES OF MARKETING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01349',
    name: 'PRINCIPLES OF MARKETING [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01350',
    name: 'PRINCIPLES OF MARKETING [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01351',
    name: 'PRINCIPLES OF MARKETING [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01352',
    name: 'PRINCIPLES OF MARKETING [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01353',
    name: 'PRINCIPLES OF MARKETING [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01354',
    name: 'PRINCIPLES OF MARKETING [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01355',
    name: 'PRINCIPLES OF MARKETING [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01356',
    name: 'PRINCIPLES OF MARKETING [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01357',
    name: 'PRINCIPLES OF MARKETING [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01358',
    name: 'BASICS IN NATURAL SCIENCE [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01359',
    name: 'BASICS IN NATURAL SCIENCE [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01360',
    name: 'BASICS IN NATURAL SCIENCE [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01361',
    name: 'BASICS IN NATURAL SCIENCE [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01362',
    name: 'BASICS IN NATURAL SCIENCE [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01363',
    name: 'ETHICS, SUSTAINABILITY, AND COMMUNICATION FOR DEVELOPMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01364',
    name: 'ETHICS, SUSTAINABILITY, AND COMMUNICATION FOR DEVELOPMENT [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01365',
    name: 'ETHICS, SUSTAINABILITY, AND COMMUNICATION FOR DEVELOPMENT [C]',
    sec: 'C',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01366',
    name: 'ETHICS, SUSTAINABILITY, AND COMMUNICATION FOR DEVELOPMENT [D]',
    sec: 'D',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01367',
    name: 'ETHICS, SUSTAINABILITY, AND COMMUNICATION FOR DEVELOPMENT [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01368',
    name: 'DESTINATION PLANNING & DEVELOPMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01369',
    name: 'EVENT & MICE MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01370',
    name: 'TOURISM AND HOSPITALITY MARKETING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01371',
    name: 'COST ACCOUNTING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01372',
    name: 'COST ACCOUNTING [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01373',
    name: 'ACCOUNTING INFORMATION SYSTEM [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01374',
    name: 'INTERMEDIATE ACCOUNTING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01375',
    name: 'INTERMEDIATE ACCOUNTING [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01376',
    name: 'STRATEGIC MANAGEMENT ACCOUNTING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01377',
    name: 'ADVANCE FINANCIAL ACCOUNTING [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01378',
    name: 'AUDITING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01379',
    name: 'ADVANCED COST ACCOUNTING [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01380',
    name: 'FINANCIAL AND CORPORATE REPORTING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01381',
    name: 'FINANCIAL STATEMENT ANALYSIS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01382',
    name: 'FINANCIAL INSTITUTIONS AND MARKETS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01383',
    name: 'CORPORATE FINANCE [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01384',
    name: 'CORPORATE FINANCE [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01385',
    name: 'ISLAMIC FINANCE AND BANKING [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01386',
    name: 'GLOBAL FINANCE [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01387',
    name: 'INVESTMENT & PORTFOLIO MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01388',
    name: 'BANK FUND MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01389',
    name: 'FINANCIAL DERIVATIVES [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01390',
    name: 'CAPITAL BUDGETING [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01391',
    name: 'PERFORMANCE APPRAISAL MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01392',
    name: 'INDUSTRIAL RELATIONS MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01393',
    name: 'HR IN GLOBAL BUSINESS ENVIRONMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01394',
    name: 'LABOR LAW OF BANGLADESH [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01395',
    name: 'HUMAN RESOURCE INFORMATION SYSTEM (HRIS) [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01396',
    name: 'STRATEGIC HUMAN RESOURCE MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01397',
    name: 'SELECTION AND STAFFING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01398',
    name: 'ORGANIZATIONAL THEORY & DEVELOPMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01399',
    name: 'ENTERPRISE RESOURCE PLANNING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01400',
    name: 'ARTIFICIAL INTELLIGENCE IN BUSINESS [BBA] [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01401',
    name: 'PRINCIPLES OF ECONOMICS (FST) [P]',
    sec: 'P',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '01402',
    name: 'FINANCIAL ANALYTICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01403',
    name: 'BLOCKCHAIN TECHNOLOGIES IN BUSINESS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01404',
    name: 'DATABASE ANALYSIS AND DESIGN [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01405',
    name: 'CYBER SECURITY [MIS] [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01406',
    name: 'ANALYZING EXPLORATORY DATA IN BUSINESS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01407',
    name: 'ANALYTICS FOR HEALTHCARE AND MEDICAL INDUSTRIES [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01408',
    name: 'MARKETING RESEARCH [BBA] [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01409',
    name: 'PROGRAMMING IN PYTHON [A]',
    sec: 'A',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '01410',
    name: 'PROGRAMMING IN PYTHON [B]',
    sec: 'B',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '01411',
    name: 'PROGRAMMING IN PYTHON [C]',
    sec: 'C',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '01412',
    name: 'PROGRAMMING IN PYTHON [D]',
    sec: 'D',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01413',
    name: 'PROGRAMMING LANGUAGE 1 [EEE] [A]',
    sec: 'A',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
    ],
  },
  {
    id: '01414',
    name: 'PROGRAMMING LANGUAGE 1 [EEE] [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01415',
    name: 'PROGRAMMING LANGUAGE 2 [EEE] [A]',
    sec: 'A',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
    ],
  },
  {
    id: '01416',
    name: 'PROGRAMMING LANGUAGE 2 [EEE] [B]',
    sec: 'B',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '01417',
    name: 'RESEARCH METHODOLOGY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01418',
    name: 'RESEARCH METHODOLOGY [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01419',
    name: 'RESEARCH METHODOLOGY [C]',
    sec: 'C',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01420',
    name: 'RESEARCH METHODOLOGY [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01421',
    name: 'RESEARCH METHODOLOGY [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01422',
    name: 'RESEARCH METHODOLOGY [F]',
    sec: 'F',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01423',
    name: 'RESEARCH METHODOLOGY [G]',
    sec: 'G',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01424',
    name: 'RESEARCH METHODOLOGY [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01425',
    name: 'RESEARCH METHODOLOGY [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01426',
    name: 'RESEARCH METHODOLOGY [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01427',
    name: 'RESEARCH METHODOLOGY [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01428',
    name: 'RESEARCH METHODOLOGY [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01429',
    name: 'RESEARCH METHODOLOGY [M]',
    sec: 'M',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01430',
    name: 'RESEARCH METHODOLOGY [N]',
    sec: 'N',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01431',
    name: 'RESEARCH METHODOLOGY [O]',
    sec: 'O',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01432',
    name: 'RESEARCH METHODOLOGY [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01433',
    name: 'RESEARCH METHODOLOGY [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01434',
    name: 'RESEARCH METHODOLOGY [R]',
    sec: 'R',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01435',
    name: 'SOFTWARE DEVELOPMENT PROJECT MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01436',
    name: 'SOFTWARE DEVELOPMENT PROJECT MANAGEMENT [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01437',
    name: 'SOFTWARE DEVELOPMENT PROJECT MANAGEMENT [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01438',
    name: 'SOFTWARE ENGINEERING [A]',
    sec: 'A',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01439',
    name: 'SOFTWARE ENGINEERING [B]',
    sec: 'B',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '01440',
    name: 'SOFTWARE ENGINEERING [C]',
    sec: 'C',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
    ],
  },
  {
    id: '01441',
    name: 'SOFTWARE ENGINEERING [D]',
    sec: 'D',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '01442',
    name: 'SOFTWARE ENGINEERING [E]',
    sec: 'E',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01443',
    name: 'SOFTWARE ENGINEERING [F]',
    sec: 'F',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
    ],
  },
  {
    id: '01444',
    name: 'SOFTWARE ENGINEERING [G]',
    sec: 'G',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '01445',
    name: 'SOFTWARE ENGINEERING [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01446',
    name: 'SOFTWARE ENGINEERING [I]',
    sec: 'I',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '01447',
    name: 'SOFTWARE ENGINEERING [J]',
    sec: 'J',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '01448',
    name: 'SOFTWARE ENGINEERING [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01449',
    name: 'SOFTWARE ENGINEERING [L]',
    sec: 'L',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
    ],
  },
  {
    id: '01450',
    name: 'SOFTWARE ENGINEERING [M]',
    sec: 'M',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '01451',
    name: 'SOFTWARE ENGINEERING [N]',
    sec: 'N',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01452',
    name: 'SOFTWARE ENGINEERING [O]',
    sec: 'O',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '01453',
    name: 'SOFTWARE ENGINEERING [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01454',
    name: 'SOFTWARE ENGINEERING [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '01455',
    name: 'SOFTWARE ENGINEERING [R]',
    sec: 'R',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '01456',
    name: 'SOFTWARE ENGINEERING [S]',
    sec: 'S',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '01457',
    name: 'SOFTWARE ENGINEERING [T]',
    sec: 'T',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '01458',
    name: 'SOFTWARE ENGINEERING [U]',
    sec: 'U',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01459',
    name: 'SOFTWARE ENGINEERING [V]',
    sec: 'V',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '01460',
    name: 'SOFTWARE ENGINEERING [W]',
    sec: 'W',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '01461',
    name: 'SOFTWARE ENGINEERING [X]',
    sec: 'X',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
    ],
  },
  {
    id: '01462',
    name: 'SOFTWARE ENGINEERING [Y]',
    sec: 'Y',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '01463',
    name: 'SOFTWARE ENGINEERING [Z]',
    sec: 'Z',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '01464',
    name: 'SOFTWARE ENGINEERING [AA]',
    sec: 'AA',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Thu', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01465',
    name: 'SOFTWARE ENGINEERING [BB]',
    sec: 'BB',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Thu', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '01466',
    name: 'SOFTWARE ENGINEERING [CC]',
    sec: 'CC',
    schedule: [
      { day: 'Thu', time: '8:00 AM', start: 480, end: 620 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
    ],
  },
  {
    id: '01467',
    name: 'SOFTWARE ENGINEERING [DD]',
    sec: 'DD',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Thu', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01468',
    name: 'SOFTWARE QUALITY AND TESTING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01469',
    name: 'SOFTWARE QUALITY AND TESTING [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01470',
    name: 'SOFTWARE QUALITY AND TESTING [C]',
    sec: 'C',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01471',
    name: 'SOFTWARE QUALITY AND TESTING [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01472',
    name: 'SOFTWARE REQUIREMENT ENGINEERING [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01473',
    name: 'SOFTWARE REQUIREMENT ENGINEERING [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01474',
    name: 'SOFTWARE REQUIREMENT ENGINEERING [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01475',
    name: 'SOFTWARE REQUIREMENT ENGINEERING [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01476',
    name: 'SOFTWARE REQUIREMENT ENGINEERING [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01477',
    name: 'THEORY OF COMPUTATION [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01478',
    name: 'THEORY OF COMPUTATION [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01479',
    name: 'THEORY OF COMPUTATION [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01480',
    name: 'THEORY OF COMPUTATION [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01481',
    name: 'THEORY OF COMPUTATION [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01482',
    name: 'THEORY OF COMPUTATION [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01483',
    name: 'THEORY OF COMPUTATION [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01484',
    name: 'THEORY OF COMPUTATION [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01485',
    name: 'THEORY OF COMPUTATION [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01486',
    name: 'THEORY OF COMPUTATION [J]',
    sec: 'J',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01487',
    name: 'THEORY OF COMPUTATION [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01488',
    name: 'THEORY OF COMPUTATION [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01489',
    name: 'THEORY OF COMPUTATION [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01490',
    name: 'THEORY OF COMPUTATION [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01491',
    name: 'THEORY OF COMPUTATION [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01492',
    name: 'THEORY OF COMPUTATION [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01493',
    name: 'THEORY OF COMPUTATION [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01494',
    name: 'THEORY OF COMPUTATION [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01495',
    name: 'THEORY OF COMPUTATION [S]',
    sec: 'S',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01496',
    name: 'THEORY OF COMPUTATION [T]',
    sec: 'T',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01497',
    name: 'THEORY OF COMPUTATION [U]',
    sec: 'U',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01498',
    name: 'THEORY OF COMPUTATION [V]',
    sec: 'V',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01499',
    name: 'THEORY OF COMPUTATION [W]',
    sec: 'W',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01500',
    name: 'THEORY OF COMPUTATION [X]',
    sec: 'X',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01501',
    name: 'THEORY OF COMPUTATION [Y]',
    sec: 'Y',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01502',
    name: 'THEORY OF COMPUTATION [Z]',
    sec: 'Z',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01503',
    name: 'THEORY OF COMPUTATION [AA]',
    sec: 'AA',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01504',
    name: 'THEORY OF COMPUTATION [BB]',
    sec: 'BB',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01505',
    name: 'THEORY OF COMPUTATION [CC]',
    sec: 'CC',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01506',
    name: 'WEB TECHNOLOGIES [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '01507',
    name: 'WEB TECHNOLOGIES [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
    ],
  },
  {
    id: '01508',
    name: 'WEB TECHNOLOGIES [C]',
    sec: 'C',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
    ],
  },
  {
    id: '01509',
    name: 'WEB TECHNOLOGIES [D]',
    sec: 'D',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '01510',
    name: 'WEB TECHNOLOGIES [E]',
    sec: 'E',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '01511',
    name: 'WEB TECHNOLOGIES [F]',
    sec: 'F',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
    ],
  },
  {
    id: '01512',
    name: 'WEB TECHNOLOGIES [G]',
    sec: 'G',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
    ],
  },
  {
    id: '01513',
    name: 'WEB TECHNOLOGIES [H]',
    sec: 'H',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
    ],
  },
  {
    id: '01514',
    name: 'WEB TECHNOLOGIES [I]',
    sec: 'I',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
    ],
  },
  {
    id: '01515',
    name: 'WEB TECHNOLOGIES [J]',
    sec: 'J',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01516',
    name: 'WEB TECHNOLOGIES [K]',
    sec: 'K',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '01517',
    name: 'WEB TECHNOLOGIES [L]',
    sec: 'L',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
    ],
  },
  {
    id: '01518',
    name: 'WEB TECHNOLOGIES [M]',
    sec: 'M',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '01519',
    name: 'WEB TECHNOLOGIES [N]',
    sec: 'N',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '01520',
    name: 'WEB TECHNOLOGIES [O]',
    sec: 'O',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '01521',
    name: 'WEB TECHNOLOGIES [P]',
    sec: 'P',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
    ],
  },
  {
    id: '01522',
    name: 'WEB TECHNOLOGIES [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01523',
    name: 'WEB TECHNOLOGIES [R]',
    sec: 'R',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01524',
    name: 'WEB TECHNOLOGIES [S]',
    sec: 'S',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '01525',
    name: 'WEB TECHNOLOGIES [T]',
    sec: 'T',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '01526',
    name: 'WEB TECHNOLOGIES [U]',
    sec: 'U',
    schedule: [
      { day: 'Thu', time: '10:20 AM', start: 620, end: 760 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
    ],
  },
  {
    id: '01527',
    name: 'WEB TECHNOLOGIES [V]',
    sec: 'V',
    schedule: [
      { day: 'Thu', time: '12:40 PM', start: 760, end: 900 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
    ],
  },
  {
    id: '01528',
    name: 'WEB TECHNOLOGIES [W]',
    sec: 'W',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Thu', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '01529',
    name: 'WEB TECHNOLOGIES [X]',
    sec: 'X',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Thu', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '01530',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01531',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01532',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01533',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01534',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01535',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01536',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01537',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01538',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01539',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01540',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01541',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01542',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01543',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01544',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 660 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 660 },
    ],
  },
  {
    id: '01545',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01546',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01547',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01548',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [S]',
    sec: 'S',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01549',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [T]',
    sec: 'T',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01550',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [U]',
    sec: 'U',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01551',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [V]',
    sec: 'V',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01552',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [W]',
    sec: 'W',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01553',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [X]',
    sec: 'X',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01554',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [Y]',
    sec: 'Y',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01555',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [Z]',
    sec: 'Z',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01556',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [AA]',
    sec: 'AA',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01557',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [BB]',
    sec: 'BB',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01558',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [CC]',
    sec: 'CC',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01559',
    name: 'COMPLEX VARIABLE,LAPLACE & Z-TRANSFORMATION [DD]',
    sec: 'DD',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01560',
    name: 'MARKETING STRATEGY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01561',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01562',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01563',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01564',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01565',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01566',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01567',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01568',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01569',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01570',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01571',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01572',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01573',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01574',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01575',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01576',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01577',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01578',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01579',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [S]',
    sec: 'S',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01580',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [T]',
    sec: 'T',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01581',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [U]',
    sec: 'U',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01582',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [V]',
    sec: 'V',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01583',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [W]',
    sec: 'W',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01584',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [X]',
    sec: 'X',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01585',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [Y]',
    sec: 'Y',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01586',
    name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [Z]',
    sec: 'Z',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01587',
    name: 'SERVICE MARKETING [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01588',
    name: 'SOCIAL MEDIA AND DIGITAL MARKETING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01589',
    name: 'CONSUMER BEHAVIOR [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01590',
    name: 'BRAND AND PRODUCT MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01591',
    name: 'DISTRIBUTION AND CHANNEL MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01592',
    name: 'INTERNATIONAL MARKETING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01593',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01594',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01595',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01596',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01597',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01598',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01599',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01600',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01601',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01602',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01603',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01604',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01605',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01606',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01607',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01608',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01609',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01610',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01611',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [S]',
    sec: 'S',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01612',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [T]',
    sec: 'T',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01613',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [U]',
    sec: 'U',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01614',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [V]',
    sec: 'V',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01615',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [W]',
    sec: 'W',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01616',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [X]',
    sec: 'X',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01617',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [Y]',
    sec: 'Y',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01618',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [Z]',
    sec: 'Z',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01619',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [AA]',
    sec: 'AA',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01620',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [BB]',
    sec: 'BB',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01621',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [CC]',
    sec: 'CC',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01622',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [DD]',
    sec: 'DD',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01623',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [EE]',
    sec: 'EE',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01624',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [FF]',
    sec: 'FF',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01625',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [GG]',
    sec: 'GG',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01626',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [HH]',
    sec: 'HH',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01627',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [II]',
    sec: 'II',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01628',
    name: 'NUMERICAL METHODS FOR SCIENCE AND ENGINEERING [JJ]',
    sec: 'JJ',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01629',
    name: 'AGRO-BASED PRODUCT MARKETING [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01630',
    name: 'SALES MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01631',
    name: 'PRODUCT INNOVATION AND MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01632',
    name: 'INTEGRATED MARKETING COMMUNICATION [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01633',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01634',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01635',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01636',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01637',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01638',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01639',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01640',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01641',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01642',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01643',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01644',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01645',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01646',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01647',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01648',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01649',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01650',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01651',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [S]',
    sec: 'S',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01652',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [T]',
    sec: 'T',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01653',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [U]',
    sec: 'U',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01654',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [V]',
    sec: 'V',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01655',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [W]',
    sec: 'W',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01656',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [X]',
    sec: 'X',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01657',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [Y]',
    sec: 'Y',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01658',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [Z]',
    sec: 'Z',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01659',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [AA]',
    sec: 'AA',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01660',
    name: 'MATRICES, VECTORS, FOURIER ANALYSIS [BB]',
    sec: 'BB',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01661',
    name: 'SOURCING AND NEGOTIATION [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01662',
    name: 'PURCHASING AND PROCUREMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01663',
    name: 'SERVICE OPERATIONS MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01664',
    name: 'ADVANCED SUPPLY CHAIN MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01665',
    name: 'MICROECONOMIC THEORY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01666',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01667',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01668',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01669',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01670',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01671',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01672',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01673',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01674',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01675',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01676',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01677',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01678',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01679',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01680',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01681',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01682',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01683',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01684',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [S]',
    sec: 'S',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01685',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [T]',
    sec: 'T',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01686',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [U]',
    sec: 'U',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01687',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [V]',
    sec: 'V',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01688',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [W]',
    sec: 'W',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01689',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [X]',
    sec: 'X',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01690',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [Y]',
    sec: 'Y',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01691',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [Z]',
    sec: 'Z',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01692',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [AA]',
    sec: 'AA',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01693',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [BB]',
    sec: 'BB',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01694',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [CC]',
    sec: 'CC',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01695',
    name: 'COMPUTATIONAL STATISTICS AND PROBABILITY [DD]',
    sec: 'DD',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01696',
    name: 'ACCOUNTING FOR MANAGERS [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01697',
    name: 'ACCOUNTING FOR MANAGERS [MBA] [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01698',
    name: 'PHYSICS 2 [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01699',
    name: 'PHYSICS 2 [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01700',
    name: 'PHYSICS 2 [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01701',
    name: 'PHYSICS 2 [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01702',
    name: 'PHYSICS 2 [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01703',
    name: 'PHYSICS 2 [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01704',
    name: 'PHYSICS 2 [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01705',
    name: 'PHYSICS 2 [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01706',
    name: 'PHYSICS 2 [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01707',
    name: 'PHYSICS 2 [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01708',
    name: 'PHYSICS 2 [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01709',
    name: 'PHYSICS 2 [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01710',
    name: 'PHYSICS 2 [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01711',
    name: 'PHYSICS 2 [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01712',
    name: 'PHYSICS 2 [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01713',
    name: 'PHYSICS 2 [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01714',
    name: 'PHYSICS 2 [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01715',
    name: 'PHYSICS 2 [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01716',
    name: 'PHYSICS 2 [S]',
    sec: 'S',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01717',
    name: 'PHYSICS 2 [T]',
    sec: 'T',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01718',
    name: 'PHYSICS 2 [U]',
    sec: 'U',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01719',
    name: 'PHYSICS 2 [V]',
    sec: 'V',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01720',
    name: 'PHYSICS 2 [W]',
    sec: 'W',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01721',
    name: 'PHYSICS 2 [X]',
    sec: 'X',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01722',
    name: 'PHYSICS 2 [Y]',
    sec: 'Y',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01723',
    name: 'PHYSICS 2 [Z]',
    sec: 'Z',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01724',
    name: 'PHYSICS 2 [AA]',
    sec: 'AA',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01725',
    name: 'PHYSICS 2 [BB]',
    sec: 'BB',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01726',
    name: 'PHYSICS 2 [CC]',
    sec: 'CC',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01727',
    name: 'PHYSICS 2 [DD]',
    sec: 'DD',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01728',
    name: 'PHYSICS 2 [EE]',
    sec: 'EE',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01729',
    name: 'PHYSICS 2 [FF]',
    sec: 'FF',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01730',
    name: 'PHYSICS 2 [GG]',
    sec: 'GG',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01731',
    name: 'PHYSICS 2 [HH]',
    sec: 'HH',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01732',
    name: 'PHYSICS 2 [II]',
    sec: 'II',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01733',
    name: 'PHYSICS 2 [JJ]',
    sec: 'JJ',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01734',
    name: 'PHYSICS 2 [KK]',
    sec: 'KK',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01735',
    name: 'PHYSICS 2 [LL]',
    sec: 'LL',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01736',
    name: 'PHYSICS 2 [MM]',
    sec: 'MM',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01737',
    name: 'PHYSICS 2 [NN]',
    sec: 'NN',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01738',
    name: 'PHYSICS 2 [OO]',
    sec: 'OO',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01739',
    name: 'PHYSICS 2 [PP]',
    sec: 'PP',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01740',
    name: 'BUSINESS COMMUNICATION [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01741',
    name: 'BUSINESS COMMUNICATION [MBA] [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01742',
    name: 'BUSINESS STATISTICS & DECISION ANALYSIS [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01743',
    name: 'BUSINESS STATISTICS & DECISION ANALYSIS [MBA] [B]',
    sec: 'B',
    schedule: [{ day: 'Wed', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01744',
    name: 'ENTREPRENEURSHIP DEVELOPMENT [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01745',
    name: 'ENTREPRENEURSHIP DEVELOPMENT [MBA] [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01746',
    name: 'ENTREPRENEURSHIP DEVELOPMENT [MBA] [C]',
    sec: 'C',
    schedule: [{ day: 'Tue', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01747',
    name: 'ECONOMICS FOR MANAGERS [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01748',
    name: 'ECONOMICS FOR MANAGERS [MBA] [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01749',
    name: 'PHYSICS 2 LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '01750',
    name: 'PHYSICS 2 LAB [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '01751',
    name: 'PHYSICS 2 LAB [C]',
    sec: 'C',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '01752',
    name: 'PHYSICS 2 LAB [D]',
    sec: 'D',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '01753',
    name: 'PHYSICS 2 LAB [E]',
    sec: 'E',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '01754',
    name: 'PHYSICS 2 LAB [F]',
    sec: 'F',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '01755',
    name: 'PHYSICS 2 LAB [G]',
    sec: 'G',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '01756',
    name: 'PHYSICS 2 LAB [H]',
    sec: 'H',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '01757',
    name: 'PHYSICS 2 LAB [I]',
    sec: 'I',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '01758',
    name: 'PHYSICS 2 LAB [J]',
    sec: 'J',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '01759',
    name: 'PHYSICS 2 LAB [K]',
    sec: 'K',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '01760',
    name: 'PHYSICS 2 LAB [L]',
    sec: 'L',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '01761',
    name: 'PHYSICS 2 LAB [M]',
    sec: 'M',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '01762',
    name: 'PHYSICS 2 LAB [N]',
    sec: 'N',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '01763',
    name: 'PHYSICS 2 LAB [O]',
    sec: 'O',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '01764',
    name: 'PHYSICS 2 LAB [P]',
    sec: 'P',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '01765',
    name: 'PHYSICS 2 LAB [Q]',
    sec: 'Q',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '01766',
    name: 'PHYSICS 2 LAB [R]',
    sec: 'R',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '01767',
    name: 'PHYSICS 2 LAB [S]',
    sec: 'S',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '01768',
    name: 'PHYSICS 2 LAB [T]',
    sec: 'T',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '01769',
    name: 'PHYSICS 2 LAB [U]',
    sec: 'U',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '01770',
    name: 'PHYSICS 2 LAB [V]',
    sec: 'V',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '01771',
    name: 'PHYSICS 2 LAB [W]',
    sec: 'W',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '01772',
    name: 'PHYSICS 2 LAB [X]',
    sec: 'X',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '01773',
    name: 'PHYSICS 2 LAB [Y]',
    sec: 'Y',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '01774',
    name: 'PHYSICS 2 LAB [Z]',
    sec: 'Z',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '01775',
    name: 'PHYSICS 2 LAB [AA]',
    sec: 'AA',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '01776',
    name: 'PHYSICS 2 LAB [BB]',
    sec: 'BB',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '01777',
    name: 'FINANCIAL MANAGEMENT [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01778',
    name: 'FINANCIAL MANAGEMENT [MBA] [B]',
    sec: 'B',
    schedule: [{ day: 'Wed', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01779',
    name: 'HUMAN RESOURCE MANAGEMENT [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01780',
    name: 'HUMAN RESOURCE MANAGEMENT [MBA] [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01781',
    name: 'HUMAN RESOURCE MANAGEMENT [MBA] [C]',
    sec: 'C',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01782',
    name: 'MANAGING OPERATIONS & QUALITY [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01783',
    name: 'MANAGING OPERATIONS & QUALITY [MBA] [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01784',
    name: 'MARKETING MANAGEMENT [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01785',
    name: 'MARKETING MANAGEMENT [MBA] [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01786',
    name: 'MARKETING MANAGEMENT [MBA] [C]',
    sec: 'C',
    schedule: [{ day: 'Tue', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01787',
    name: 'MARKETING MANAGEMENT [MBA] [D]',
    sec: 'D',
    schedule: [{ day: 'Wed', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01788',
    name: 'MODERN PHYSICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01789',
    name: 'MODERN PHYSICS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01790',
    name: 'MODERN PHYSICS [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01791',
    name: 'MODERN PHYSICS [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01792',
    name: 'MODERN PHYSICS [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01793',
    name: 'MODERN PHYSICS [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01794',
    name: 'RESEARCH METHODOLOGY [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01795',
    name: 'RESEARCH METHODOLOGY [MBA] [B]',
    sec: 'B',
    schedule: [{ day: 'Wed', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01796',
    name: 'STRATEGIC MANAGEMENT [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01797',
    name: 'STRATEGIC MANAGEMENT [MBA] [B]',
    sec: 'B',
    schedule: [{ day: 'Tue', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01798',
    name: 'CORPORATE TAX MANAGEMENT [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01799',
    name: 'AUDITING AND ASSURANCE [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01800',
    name: 'FINANCIAL REPORTING [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01801',
    name: 'INTERNATIONAL FINANCIAL MANAGEMENT [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01802',
    name: 'PERFORMANCE MANAGEMENT [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01803',
    name: 'RESEARCH DESIGN AND APPLICATIONS FOR DATA SCIENCE [MScCS] [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01804',
    name: 'SOFTWARE EVOLUTION AND MAINTENANCE [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01805',
    name: 'LABOR LAW OF BANGLADESH [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01806',
    name: 'HUMAN RESOURCE PLANNING & DEVELOPMENT [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01807',
    name: 'DATA VISUALIZATION AND COMMUNICATION [MScCS] [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01808',
    name: 'SUPPLY CHAIN MANAGEMENT [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01809',
    name: 'SOFTWARE PROJECT MANAGEMENT [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01810',
    name: 'QUALITY MANAGEMENT SYSTEMS [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01811',
    name: 'COMPUTER SCIENCE APPLICATIONS AND ADVANCEMENTS [MScCS] [A]',
    sec: 'A',
    schedule: [{ day: 'Thu', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01812',
    name: 'SERVICE MARKETING [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01813',
    name: 'BUYER BEHAVIOUR [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01814',
    name: 'COMPUTER VISION & PATTERN RECOGNITION [MScCS] [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01815',
    name: 'STRATEGIC MARKETING [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01816',
    name: 'BIOINFORMATICS [MScCS] [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01817',
    name: 'DISTRIBUTION MANAGEMENT & RETAIL MARKETING [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01818',
    name: 'COMPUTER ETHICS AND GOVERNANCE [MScCS] [A]',
    sec: 'A',
    schedule: [{ day: 'Thu', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01819',
    name: 'STRATEGIC BRAND AND MANAGEMENT [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01820',
    name: 'DATABASE TECHNOLOGY, MANAGEMENT, AND SECURITY [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '10:00 AM', start: 600, end: 780 }],
  },
  {
    id: '01821',
    name: 'METHODS IN SOFTWARE ENGINEERING [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '10:00 AM', start: 600, end: 780 }],
  },
  {
    id: '01822',
    name: 'CONTEMPORARY DEVELOPMENT IN MIS [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01823',
    name: 'INTELLIGENT WEB SYSTEMS [MScCS] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '10:00 AM', start: 600, end: 780 }],
  },
  {
    id: '01824',
    name: 'NETWORK RESOURCE MANAGEMENT [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01825',
    name: 'DIGITAL FORENSIC INVESTIGATION [MScCS] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '10:00 AM', start: 600, end: 780 }],
  },
  {
    id: '01826',
    name: 'INTERNATIONAL TOURISM AND TOURISTS [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01827',
    name: 'CYBER SECURITY AND MANAGEMENT [MScCS] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '3:00 PM', start: 900, end: 1080 }],
  },
  {
    id: '01828',
    name: 'TOURIST CONSUMER BEHAVIOR & MARKETING [MBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '01829',
    name: 'FOUNDATION IN COMPUTER PROGRAMMING [MScCS] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '5:00 PM', start: 1020, end: 1140 }],
  },
  {
    id: '01830',
    name: 'BUSINESS LAW & ETHICS [EMBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '01831',
    name: 'ANALYTICAL TECHNIQUES FOR DECISION MAKING [EMBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '10:00 AM', start: 600, end: 780 }],
  },
  {
    id: '01832',
    name: 'ECONOMIC ANALYSIS FOR MANAGERS [EMBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '01833',
    name: 'LOGISTICS & OPERATIONS MANAGEMENT [EMBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '2:30 PM', start: 870, end: 1050 }],
  },
  {
    id: '01834',
    name: 'CORPORATE FINANCIAL STRATEGY [EMBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '10:00 AM', start: 600, end: 780 }],
  },
  {
    id: '01835',
    name: 'STRATEGIC HUMAN RESOURCE MANAGEMENT [EMBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '5:30 PM', start: 1050, end: 1230 }],
  },
  {
    id: '01836',
    name: 'CORPORATE ENTREPRENEURSHIP [EMBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '2:30 PM', start: 870, end: 1050 }],
  },
  {
    id: '01837',
    name: 'MARKETING STRATEGY & POLICY [EMBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '5:30 PM', start: 1050, end: 1230 }],
  },
  {
    id: '01838',
    name: 'MIS & DECISION MAKING TECHNIQUE [EMBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '5:30 PM', start: 1050, end: 1230 }],
  },
  {
    id: '01839',
    name: 'BUSINESS PROJECT [EMBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '5:30 PM', start: 1050, end: 1230 }],
  },
  {
    id: '01840',
    name: 'GLOBAL BUSINESS STRATEGY [EMBA] [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '10:00 AM', start: 600, end: 780 }],
  },
  {
    id: '01841',
    name: 'DESIGN STUDIO X (PROJECT) [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:30 AM', start: 510, end: 780 },
      { day: 'Mon', time: '8:30 AM', start: 510, end: 780 },
      { day: 'Tue', time: '8:30 AM', start: 510, end: 780 },
      { day: 'Thu', time: '8:30 AM', start: 510, end: 840 },
    ],
  },
  {
    id: '01842',
    name: 'DESIGN STUDIO VIII [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:30 AM', start: 510, end: 750 },
      { day: 'Tue', time: '8:30 AM', start: 510, end: 750 },
      { day: 'Thu', time: '8:30 AM', start: 510, end: 750 },
      { day: 'Mon', time: '8:30 AM', start: 510, end: 690 },
    ],
  },
  {
    id: '01843',
    name: 'DESIGN STUDIO VII [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:30 AM', start: 510, end: 750 },
      { day: 'Tue', time: '8:30 AM', start: 510, end: 750 },
      { day: 'Thu', time: '8:30 AM', start: 510, end: 750 },
      { day: 'Mon', time: '8:30 AM', start: 510, end: 690 },
    ],
  },
  {
    id: '01844',
    name: 'DESIGN STUDIO - VI [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:30 AM', start: 510, end: 750 },
      { day: 'Tue', time: '8:30 AM', start: 510, end: 750 },
      { day: 'Thu', time: '8:30 AM', start: 510, end: 750 },
    ],
  },
  {
    id: '01845',
    name: 'DESIGN STUDIO - VI [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '8:30 AM', start: 510, end: 750 },
      { day: 'Tue', time: '8:30 AM', start: 510, end: 750 },
      { day: 'Thu', time: '8:30 AM', start: 510, end: 750 },
    ],
  },
  {
    id: '01846',
    name: 'DESIGN STUDIO V [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:30 AM', start: 510, end: 750 },
      { day: 'Tue', time: '8:30 AM', start: 510, end: 750 },
      { day: 'Thu', time: '8:30 AM', start: 510, end: 750 },
    ],
  },
  {
    id: '01847',
    name: 'DESIGN STUDIO IV [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:30 AM', start: 510, end: 690 },
      { day: 'Tue', time: '8:30 AM', start: 510, end: 690 },
      { day: 'Thu', time: '8:30 AM', start: 510, end: 690 },
    ],
  },
  {
    id: '01848',
    name: 'DESIGN STUDIO IV [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '8:30 AM', start: 510, end: 690 },
      { day: 'Tue', time: '8:30 AM', start: 510, end: 690 },
      { day: 'Thu', time: '8:30 AM', start: 510, end: 690 },
    ],
  },
  {
    id: '01849',
    name: 'DESIGN STUDIO III [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:30 AM', start: 510, end: 690 },
      { day: 'Tue', time: '8:30 AM', start: 510, end: 690 },
      { day: 'Thu', time: '8:30 AM', start: 510, end: 690 },
    ],
  },
  {
    id: '01850',
    name: 'DESIGN STUDIO II [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:30 AM', start: 510, end: 690 },
      { day: 'Tue', time: '8:30 AM', start: 510, end: 690 },
      { day: 'Thu', time: '8:30 AM', start: 510, end: 690 },
    ],
  },
  {
    id: '01851',
    name: 'DESIGN STUDIO II [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '8:30 AM', start: 510, end: 690 },
      { day: 'Tue', time: '8:30 AM', start: 510, end: 690 },
      { day: 'Thu', time: '8:30 AM', start: 510, end: 690 },
    ],
  },
  {
    id: '01852',
    name: 'ARCHITECTURAL GRAPHICS I [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:30 AM', start: 510, end: 690 },
      { day: 'Wed', time: '8:30 AM', start: 510, end: 690 },
    ],
  },
  {
    id: '01853',
    name: 'ARCHITECTURAL GRAPHICS II [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '8:30 AM', start: 510, end: 690 }],
  },
  {
    id: '01854',
    name: 'ARCHITECTURAL GRAPHICS II [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '8:30 AM', start: 510, end: 690 }],
  },
  {
    id: '01855',
    name: 'ARCHITECTURAL GRAPHICS III [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 660 }],
  },
  {
    id: '01856',
    name: 'ARCHITECTURAL GRAPHICS III [B]',
    sec: 'B',
    schedule: [{ day: 'Wed', time: '2:00 PM', start: 840, end: 1020 }],
  },
  {
    id: '01857',
    name: 'COMPUTER GRAPHICS [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 660 }],
  },
  {
    id: '01858',
    name: 'COMPUTER GRAPHICS [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '2:00 PM', start: 840, end: 1020 }],
  },
  {
    id: '01859',
    name: 'GRAPHIC ART [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '8:30 AM', start: 510, end: 690 }],
  },
  {
    id: '01860',
    name: 'PHOTOGRAPHY [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '8:30 AM', start: 510, end: 690 }],
  },
  {
    id: '01861',
    name: 'SCULPTURE [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '8:30 AM', start: 510, end: 690 }],
  },
  {
    id: '01862',
    name: 'WORKING DRAWING I : CONST. DRAWING [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '11:00 AM', start: 660, end: 840 }],
  },
  {
    id: '01863',
    name: 'WORKING DRAWING II: PRODUCTION DRAWING [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '11:00 AM', start: 660, end: 840 }],
  },
  {
    id: '01864',
    name: 'SEMINAR [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '8:30 AM', start: 510, end: 690 }],
  },
  {
    id: '01865',
    name: 'COST ESTIMATION [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '8:30 AM', start: 510, end: 690 }],
  },
  {
    id: '01866',
    name: 'LANDSCAPE DESIGN STUDIO [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '8:30 AM', start: 510, end: 690 }],
  },
  {
    id: '01867',
    name: 'INTERIOR DESIGN STUDIO [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '8:30 AM', start: 510, end: 690 }],
  },
  {
    id: '01868',
    name: 'CONSTRUCTION DOCUMENT [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '8:30 AM', start: 510, end: 690 }],
  },
  {
    id: '01869',
    name: 'PROFESSIONAL TRAINING [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 950 }],
  },
  {
    id: '01870',
    name: 'STRUCTURE I: BASIC MECHANICS OF SOLIDS [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01871',
    name: 'STRUCTURE - II : Reinforced Concrete Design [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01872',
    name: 'STRUCTURE III : STEEL AND TIMBER STRUCTURES [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01873',
    name: 'STRUCTURE IV: LONG SPAN STRUCTURES [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01874',
    name: 'BUILDING SERVICES 1:Plumbing and fire fighting system [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01875',
    name: 'BUILDING SERVICES II: MECHANICAL EQUIPMENT FOR BUILDINGS [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01876',
    name: 'BUILDING SERVICES - III : ELECTRICAL INSTALLATIONS IN BUILDINGS [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01877',
    name: 'SURVEY TECHNIQUES AND ANALYTICAL METHODS TRANSFORMS [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01878',
    name: 'LOGIC AND PHILOSOPHY [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01879',
    name: 'DESIGN THEORY II [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01880',
    name: 'BUILDING AND FINISH MATERIALS [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01881',
    name: 'BUILDING AND FINISH MATERIALS [B]',
    sec: 'B',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01882',
    name: 'CONSTRUCTION METHODS AND DETAILS [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01883',
    name: 'CONSTRUCTION METHODS AND DETAILS [B]',
    sec: 'B',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01884',
    name: 'ENVIRONMENT AND DESIGN I:CLIMATE AND DESIGN [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01885',
    name: 'ENVIRONMENT AND DESIGN I:CLIMATE AND DESIGN [B]',
    sec: 'B',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01886',
    name: 'ENVIRONMENT AND DESIGN - II : DESIGN IN THE TROPICS [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01887',
    name: 'ENVIRONMENT AND DESIGN III: LANDSCAPE DESIGN [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01888',
    name: 'ENVIRONMENT AND DESIGN III: LANDSCAPE DESIGN [B]',
    sec: 'B',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01889',
    name: 'SOCIETY AND ARCHITECTURE OF BENGAL [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01890',
    name: 'ART AND ARCHITECTURE [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01891',
    name: 'ART AND ARCHITECTURE II [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01892',
    name: 'ART AND ARCHITECTURE III [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01893',
    name: 'ART AND ARCHITECTURE - IV [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01894',
    name: 'ART AND ARCHITECTURE - V [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01895',
    name: 'ART AND ARCHITECTURE VI; MODERN ART AND ARCHITECTURE [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01896',
    name: 'CONTEMPRORAY ARCHITECTURAL THEORY [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01897',
    name: 'BASIC PLANNING [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01898',
    name: 'URBAN DESIGN I [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01899',
    name: 'URBAN DESIGN II [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01900',
    name: 'HOUSING [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01901',
    name: 'VISUAL ENVIRONMENT [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01902',
    name: 'ARCHITECTURAL ACOUSTICS [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01903',
    name: 'MUSIC APPRECIATION [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01904',
    name: 'ARCHITECTURAL SPECIFICATIONS [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01905',
    name: 'ART APPRECIATION [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01906',
    name: 'INTERIOR DESIGN [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01907',
    name: 'PROFESSIONAL PRACTICE AND ETHICS [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01908',
    name: 'HEALTH FACILITIES PLANNING AND DESIGN [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '01909',
    name: 'ARCHITECTURAL CONSERVATION [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01910',
    name: 'RURAL PLANNING [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '01911',
    name: 'COMMUNICATIONS FOR ARCHITECTS [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01912',
    name: 'PRINCIPLES OF MANAGEMENT (ARCH) [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01913',
    name: 'PHYSICS 1 FOR ARCHITECTS [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '01914',
    name: 'ANALOG ELECTRONICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01915',
    name: 'ANALOG ELECTRONICS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01916',
    name: 'ANALOG ELECTRONICS [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01917',
    name: 'ANALOG ELECTRONICS [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01918',
    name: 'ANALOG ELECTRONICS [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01919',
    name: 'ANALOG ELECTRONICS [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01920',
    name: 'ANALOG ELECTRONICS [G]',
    sec: 'G',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01921',
    name: 'ANALOG ELECTRONICS [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01922',
    name: 'ANALOG ELECTRONICS 2 [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01923',
    name: 'ANALOG ELECTRONICS 2 [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01924',
    name: 'ANALOG ELECTRONICS 2 [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01925',
    name: 'BASIC MECHANICAL ENGG. [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01926',
    name: 'BASIC MECHANICAL ENGG. [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01927',
    name: 'BASIC MECHANICAL ENGG. [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01928',
    name: 'BASIC MECHANICAL ENGG. [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01929',
    name: 'BASIC MECHANICAL ENGG. [E]',
    sec: 'E',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01930',
    name: 'BASIC MECHANICAL ENGG. [F]',
    sec: 'F',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01931',
    name: 'BASIC MECHANICAL ENGG. [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01932',
    name: 'BASIC MECHANICAL ENGG. [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01933',
    name: 'DATA COMMUNICATION [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '01934',
    name: 'DATA COMMUNICATION [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '01935',
    name: 'DATA COMMUNICATION [C]',
    sec: 'C',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01936',
    name: 'DATA COMMUNICATION [D]',
    sec: 'D',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '01937',
    name: 'DATA COMMUNICATION [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '01938',
    name: 'DATA COMMUNICATION [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01939',
    name: 'DATA COMMUNICATION [G]',
    sec: 'G',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '01940',
    name: 'DATA COMMUNICATION [H]',
    sec: 'H',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '01941',
    name: 'DATA COMMUNICATION [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '01942',
    name: 'DATA COMMUNICATION [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '01943',
    name: 'DATA COMMUNICATION [K]',
    sec: 'K',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '01944',
    name: 'DATA COMMUNICATION [L]',
    sec: 'L',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '01945',
    name: 'DATA COMMUNICATION [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '01946',
    name: 'DATA COMMUNICATION [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '01947',
    name: 'DATA COMMUNICATION [O]',
    sec: 'O',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '01948',
    name: 'DATA COMMUNICATION [P]',
    sec: 'P',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01949',
    name: 'DATA COMMUNICATION [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '01950',
    name: 'DATA COMMUNICATION [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '01951',
    name: 'DIGITAL DESIGN WITH SYSTEM [ VERILOG,VHDL & FPGAS ] [A]',
    sec: 'A',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01952',
    name: 'DIGITAL LOGIC AND CIRCUITS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01953',
    name: 'DIGITAL LOGIC AND CIRCUITS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01954',
    name: 'DIGITAL LOGIC AND CIRCUITS [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01955',
    name: 'DIGITAL LOGIC AND CIRCUITS [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01956',
    name: 'DIGITAL LOGIC AND CIRCUITS [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01957',
    name: 'DIGITAL LOGIC AND CIRCUITS [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01958',
    name: 'DIGITAL LOGIC AND CIRCUITS [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01959',
    name: 'DIGITAL LOGIC AND CIRCUITS [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01960',
    name: 'DIGITAL LOGIC AND CIRCUITS [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01961',
    name: 'DIGITAL LOGIC AND CIRCUITS [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01962',
    name: 'DIGITAL LOGIC AND CIRCUITS [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01963',
    name: 'DIGITAL LOGIC AND CIRCUITS [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01964',
    name: 'DIGITAL LOGIC AND CIRCUITS [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01965',
    name: 'DIGITAL LOGIC AND CIRCUITS [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01966',
    name: 'DIGITAL LOGIC AND CIRCUITS [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01967',
    name: 'DIGITAL LOGIC AND CIRCUITS [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01968',
    name: 'DIGITAL LOGIC AND CIRCUITS [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01969',
    name: 'DIGITAL LOGIC AND CIRCUITS [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01970',
    name: 'DIGITAL LOGIC AND CIRCUITS [S]',
    sec: 'S',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01971',
    name: 'DIGITAL LOGIC AND CIRCUITS [T]',
    sec: 'T',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01972',
    name: 'DIGITAL LOGIC AND CIRCUITS [U]',
    sec: 'U',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01973',
    name: 'DIGITAL LOGIC AND CIRCUITS [V]',
    sec: 'V',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01974',
    name: 'DIGITAL LOGIC AND CIRCUITS [W]',
    sec: 'W',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01975',
    name: 'DIGITAL LOGIC AND CIRCUITS [X]',
    sec: 'X',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01976',
    name: 'DIGITAL LOGIC AND CIRCUITS [Y]',
    sec: 'Y',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01977',
    name: 'DIGITAL SIGNAL PROCESSING [A]',
    sec: 'A',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '01978',
    name: 'DIGITAL SIGNAL PROCESSING [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '01979',
    name: 'DIGITAL SIGNAL PROCESSING [C]',
    sec: 'C',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01980',
    name: 'DIGITAL SIGNAL PROCESSING [D]',
    sec: 'D',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '01981',
    name: 'DIGITAL SIGNAL PROCESSING [E]',
    sec: 'E',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '01982',
    name: 'DIGITAL SIGNAL PROCESSING [F]',
    sec: 'F',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '01983',
    name: 'ELECTRICAL CIRCUITS -1 (DC) [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01984',
    name: 'ELECTRICAL CIRCUITS -1 (DC) [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01985',
    name: 'ELECTRICAL CIRCUITS -1 (DC) [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01986',
    name: 'ELECTRICAL CIRCUITS -1 (DC) [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01987',
    name: 'ELECTRICAL CIRCUITS -1 (DC) [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01988',
    name: 'ELECTRICAL CIRCUITS 2 (AC) [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01989',
    name: 'ELECTRICAL CIRCUITS 2 (AC) [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01990',
    name: 'ELECTRICAL CIRCUITS 2 (AC) [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01991',
    name: 'ELECTRICAL CIRCUITS 2 (AC) [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01992',
    name: 'ELECTRICAL CIRCUITS 2 (AC) [E]',
    sec: 'E',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01993',
    name: 'ELECTRICAL CIRCUITS 2 (AC) [F]',
    sec: 'F',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01994',
    name: 'ELECTRICAL CIRCUITS 2 (AC) [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '01995',
    name: 'ELECTRICAL CIRCUITS 2 (AC) [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '01996',
    name: 'DIGITAL LOGIC DESIGN [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '01997',
    name: 'DIGITAL ELECTRONICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '01998',
    name: 'ELECTRICAL MACHINES 1 [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '01999',
    name: 'ELECTRICAL MACHINES 1 [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02000',
    name: 'ELECTRICAL MACHINES 1 [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02001',
    name: 'ELECTRICAL MACHINES 1 [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02002',
    name: 'ELECTRICAL MACHINES 1 [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02003',
    name: 'ELECTRICAL MACHINES 2 [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02004',
    name: 'ELECTRICAL MACHINES 2 [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02005',
    name: 'ELECTRICAL MACHINES 2 [C]',
    sec: 'C',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02006',
    name: 'ELECTRICAL MACHINES 2 [D]',
    sec: 'D',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02007',
    name: 'ELECTRICAL MACHINES 2 [E]',
    sec: 'E',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02008',
    name: 'ELECTRICAL MACHINES 2 [F]',
    sec: 'F',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02009',
    name: 'ELECTRICAL MACHINES 2 [G]',
    sec: 'G',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02010',
    name: 'ELECTRICAL POWER TRANSMISSION & DIST. [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02011',
    name: 'ELECTRICAL POWER TRANSMISSION & DIST. [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02012',
    name: 'ELECTRICAL POWER TRANSMISSION & DIST. [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02013',
    name: 'ELECTRICAL POWER TRANSMISSION & DIST. [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02014',
    name: 'ELECTRICAL POWER TRANSMISSION & DIST. [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02015',
    name: 'ELECTRICAL POWER TRANSMISSION & DIST. [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02016',
    name: 'ELECTRICAL POWER TRANSMISSION & DIST. [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02017',
    name: 'ELECTRICAL PROPERTIES OF MATERIALS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02018',
    name: 'ELECTRICAL PROPERTIES OF MATERIALS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02019',
    name: 'ELECTRICAL PROPERTIES OF MATERIALS [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02020',
    name: 'ELECTRICAL PROPERTIES OF MATERIALS [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02021',
    name: 'ELECTRICAL PROPERTIES OF MATERIALS [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02022',
    name: 'ELECTRICAL PROPERTIES OF MATERIALS [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02023',
    name: 'ELECTRICAL PROPERTIES OF MATERIALS [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02024',
    name: 'ELECTROMAGNETICS FIELDS AND WAVES [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02025',
    name: 'ELECTROMAGNETICS FIELDS AND WAVES [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02026',
    name: 'ELECTROMAGNETICS FIELDS AND WAVES [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02027',
    name: 'ELECTROMAGNETICS FIELDS AND WAVES [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02028',
    name: 'ELECTROMAGNETICS FIELDS AND WAVES [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02029',
    name: 'ELECTROMAGNETICS FIELDS AND WAVES [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02030',
    name: 'ELECTROMAGNETICS FIELDS AND WAVES [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02031',
    name: 'ELECTRONIC DEVICES [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02032',
    name: 'ELECTRONIC DEVICES [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02033',
    name: 'ELECTRONIC DEVICES [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02034',
    name: 'ELECTRONIC DEVICES [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02035',
    name: 'ELECTRONIC DEVICES [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02036',
    name: 'ELECTRONIC DEVICES [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02037',
    name: 'ELECTRONIC DEVICES [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02038',
    name: 'ELECTRONIC DEVICES [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02039',
    name: 'ELECTRONIC DEVICES [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02040',
    name: 'ELECTRONIC DEVICES [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02041',
    name: 'ELECTRONIC DEVICES [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02042',
    name: 'ELECTRONIC DEVICES [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02043',
    name: 'ELECTRONIC DEVICES [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02044',
    name: 'ELECTRONIC DEVICES [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02045',
    name: 'ELECTRONIC DEVICES [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02046',
    name: 'ELECTRONIC DEVICES [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02047',
    name: 'ELECTRONIC DEVICES [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02048',
    name: 'ELECTRONIC DEVICES [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02049',
    name: 'ELECTRONIC DEVICES [S]',
    sec: 'S',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02050',
    name: 'ELECTRONIC DEVICES [T]',
    sec: 'T',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02051',
    name: 'ELECTRONIC DEVICES [U]',
    sec: 'U',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02052',
    name: 'ELECTRONIC DEVICES [V]',
    sec: 'V',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02053',
    name: 'ELECTRONIC DEVICES [W]',
    sec: 'W',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02054',
    name: 'ELECTRONIC DEVICES [X]',
    sec: 'X',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02055',
    name: 'ELECTRONIC DEVICES [Y]',
    sec: 'Y',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02056',
    name: 'ENGINEERING ETHICS & ENVIRONMENTAL PROTECTION [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '02057',
    name: 'ENGINEERING ETHICS & ENVIRONMENTAL PROTECTION [B]',
    sec: 'B',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '02058',
    name: 'ENGINEERING ETHICS & ENVIRONMENTAL PROTECTION [C]',
    sec: 'C',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 740 }],
  },
  {
    id: '02059',
    name: 'ENGINEERING ETHICS & ENVIRONMENTAL PROTECTION [D]',
    sec: 'D',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '02060',
    name: 'ENGINEERING ETHICS & ENVIRONMENTAL PROTECTION [E]',
    sec: 'E',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '02061',
    name: 'ENGINEERING ETHICS & ENVIRONMENTAL PROTECTION [F]',
    sec: 'F',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 740 }],
  },
  {
    id: '02062',
    name: 'ENGINEERING ETHICS & ENVIRONMENTAL PROTECTION [G]',
    sec: 'G',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '02063',
    name: 'ENGINEERING ETHICS [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '02064',
    name: 'ENGINEERING ETHICS [B]',
    sec: 'B',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '02065',
    name: 'ENGINEERING ETHICS [C]',
    sec: 'C',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '02066',
    name: 'ENGINEERING ETHICS [D]',
    sec: 'D',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '02067',
    name: 'ENGINEERING ETHICS [E]',
    sec: 'E',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 740 }],
  },
  {
    id: '02068',
    name: 'ENGINEERING ETHICS [F]',
    sec: 'F',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '02069',
    name: 'ENGINEERING ETHICS [G]',
    sec: 'G',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '02070',
    name: 'ENGINEERING ETHICS [H]',
    sec: 'H',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 600 }],
  },
  {
    id: '02071',
    name: 'ENGINEERING ETHICS [I]',
    sec: 'I',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '02072',
    name: 'ENGINEERING ETHICS [J]',
    sec: 'J',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '02073',
    name: 'ENGINEERING ETHICS [K]',
    sec: 'K',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '02074',
    name: 'ENGINEERING ETHICS [L]',
    sec: 'L',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 740 }],
  },
  {
    id: '02075',
    name: 'ENGINEERING ETHICS [M]',
    sec: 'M',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 880 }],
  },
  {
    id: '02076',
    name: 'ENGINEERING ETHICS [N]',
    sec: 'N',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1020 }],
  },
  {
    id: '02077',
    name: 'ENGINEERING ETHICS [O]',
    sec: 'O',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 740 }],
  },
  {
    id: '02078',
    name: 'INDUSTRIAL ELECTRONICS AND DRIVES [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02079',
    name: 'INDUSTRIAL ELECTRONICS AND DRIVES [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02080',
    name: 'INDUSTRIAL ELECTRONICS AND DRIVES [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02081',
    name: 'INDUSTRIAL ELECTRONICS AND DRIVES [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02082',
    name: 'INDUSTRIAL ELECTRONICS AND DRIVES [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02083',
    name: 'INDUSTRIAL ELECTRONICS AND DRIVES [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02084',
    name: 'INDUSTRIAL ELECTRONICS AND DRIVES [G]',
    sec: 'G',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02085',
    name: 'INTELLIGENT ROBOTICS AND AUTOMATION [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '02086',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02087',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02088',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02089',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02090',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02091',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02092',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02093',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02094',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02095',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02096',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS [K]',
    sec: 'K',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02097',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS [L]',
    sec: 'L',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02098',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02099',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02100',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS [O]',
    sec: 'O',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02101',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS [P]',
    sec: 'P',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02102',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02103',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02104',
    name: 'MEASUREMENT AND INSTRUMENTATION [A]',
    sec: 'A',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '02105',
    name: 'MEASUREMENT AND INSTRUMENTATION [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '02106',
    name: 'MEASUREMENT AND INSTRUMENTATION [C]',
    sec: 'C',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '02107',
    name: 'MEASUREMENT AND INSTRUMENTATION [D]',
    sec: 'D',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '02108',
    name: 'MEASUREMENT AND INSTRUMENTATION [E]',
    sec: 'E',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02109',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '02110',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '02111',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [C]',
    sec: 'C',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02112',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [D]',
    sec: 'D',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '02113',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '02114',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02115',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [G]',
    sec: 'G',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '02116',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [H]',
    sec: 'H',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '02117',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02118',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [J]',
    sec: 'J',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '02119',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [K]',
    sec: 'K',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '02120',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [L]',
    sec: 'L',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '02121',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [M]',
    sec: 'M',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '02122',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [N]',
    sec: 'N',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '02123',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [O]',
    sec: 'O',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '02124',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [P]',
    sec: 'P',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02125',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [Q]',
    sec: 'Q',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '02126',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [R]',
    sec: 'R',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '02127',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [S]',
    sec: 'S',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02128',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [T]',
    sec: 'T',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '02129',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [U]',
    sec: 'U',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '02130',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [V]',
    sec: 'V',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02131',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [W]',
    sec: 'W',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '02132',
    name: 'MICROPROCESSOR AND EMBEDDED SYSTEMS [X]',
    sec: 'X',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '02133',
    name: 'MODERN CONTROL SYSTEMS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02134',
    name: 'MODERN CONTROL SYSTEMS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02135',
    name: 'MODERN CONTROL SYSTEMS [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02136',
    name: 'MODERN CONTROL SYSTEMS [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02137',
    name: 'MODERN CONTROL SYSTEMS [E]',
    sec: 'E',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02138',
    name: 'MODERN CONTROL SYSTEMS [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02139',
    name: 'NUCLEAR POWER ENGINEERING [EEE] [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '02140',
    name: 'POWER STATIONS AND SUBSTATIONS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02141',
    name: 'POWER STATIONS AND SUBSTATIONS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02142',
    name: 'POWER STATIONS AND SUBSTATIONS [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02143',
    name: 'POWER STATIONS AND SUBSTATIONS [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02144',
    name: 'POWER STATIONS AND SUBSTATIONS [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02145',
    name: 'POWER SYSTEM PROTECTION [A]',
    sec: 'A',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '02146',
    name: 'POWER SYSTEM PROTECTION [B]',
    sec: 'B',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '02147',
    name: 'POWER SYSTEMS ANALYSIS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '02148',
    name: 'POWER SYSTEMS ANALYSIS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '02149',
    name: 'POWER SYSTEMS ANALYSIS [C]',
    sec: 'C',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02150',
    name: 'POWER SYSTEMS ANALYSIS [D]',
    sec: 'D',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '02151',
    name: 'POWER SYSTEMS ANALYSIS [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '02152',
    name: 'POWER SYSTEMS ANALYSIS [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02153',
    name: 'PRINCIPLES OF COMMUNICATIONS [A]',
    sec: 'A',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '02154',
    name: 'PRINCIPLES OF COMMUNICATIONS [B]',
    sec: 'B',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '02155',
    name: 'PRINCIPLES OF COMMUNICATIONS [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Tue', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '02156',
    name: 'PRINCIPLES OF COMMUNICATIONS [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02157',
    name: 'PRINCIPLES OF COMMUNICATIONS [E]',
    sec: 'E',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '02158',
    name: 'PRINCIPLES OF COMMUNICATIONS [F]',
    sec: 'F',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '02159',
    name: 'RENEWABLE ENERGY TECHNOLOGY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02160',
    name: 'RENEWABLE ENERGY TECHNOLOGY [B]',
    sec: 'B',
    schedule: [
      { day: 'Wed', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Mon', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '02161',
    name: 'SIGNAL & LINEAR SYSTEM [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02162',
    name: 'SIGNAL & LINEAR SYSTEM [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02163',
    name: 'SIGNAL & LINEAR SYSTEM [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02164',
    name: 'SIGNAL & LINEAR SYSTEM [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02165',
    name: 'SIGNAL & LINEAR SYSTEM [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02166',
    name: 'SIGNAL & LINEAR SYSTEM [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02167',
    name: 'SIGNAL & LINEAR SYSTEM [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02168',
    name: 'TELECOMMUNICATIONS ENGINEERING [EEE] [A]',
    sec: 'A',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '02169',
    name: 'TELECOMMUNICATIONS ENGINEERING [EEE] [B]',
    sec: 'B',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02170',
    name: 'TELECOMMUNICATIONS ENGINEERING [EEE] [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02171',
    name: 'TELECOMMUNICATIONS ENGINEERING [EEE] [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '02172',
    name: 'TELECOMMUNICATIONS ENGINEERING [EEE] [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02173',
    name: 'VLSI CIRCUIT DESIGN [A]',
    sec: 'A',
    schedule: [
      { day: 'Wed', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Mon', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '02174',
    name: 'VLSI CIRCUIT DESIGN [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Tue', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '02175',
    name: 'VLSI CIRCUIT DESIGN [C]',
    sec: 'C',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '02176',
    name: 'VLSI CIRCUIT DESIGN [D]',
    sec: 'D',
    schedule: [
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02177',
    name: 'VLSI CIRCUIT DESIGN [E]',
    sec: 'E',
    schedule: [
      { day: 'Wed', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Mon', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '02178',
    name: 'VLSI CIRCUIT DESIGN [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '02179',
    name: 'VLSI CIRCUIT DESIGN [G]',
    sec: 'G',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '02180',
    name: 'NANOTECHNOLOGY FOR ENGINEERS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02181',
    name: 'BIOMEDICAL INSTRUMENTATION MEASUREMENT AND DESIGN [A]',
    sec: 'A',
    schedule: [
      { day: 'Tue', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Sun', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '02182',
    name: 'CELLULAR MOBILE COMMUNICATION [A]',
    sec: 'A',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Sun', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '02183',
    name: 'COMPUTER SYSTEM ARCHITECTURE [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02184',
    name: 'MICROWAVE ENGINEERING [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '02185',
    name: 'MIXED-SIGNAL ANALOG CIRCUITS [A]',
    sec: 'A',
    schedule: [
      { day: 'Tue', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Sun', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '02186',
    name: 'OPTOELECTRONIC DEVICES [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '02187',
    name: 'DIGITAL ASIC DESIGN [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02188',
    name: 'FLUID MECHANICS AND MACHINERY [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02189',
    name: 'MAINTENANCE MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02190',
    name: 'VALUE CHAIN MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02191',
    name: 'ENGINEERING MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02192',
    name: 'FACILITY DESIGN AND MATERIAL HANDLING [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02193',
    name: 'COMPUTER INTEGRATED MANUFACTURING [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02194',
    name: 'OPERATIONS RESEARCH [IPE] [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02195',
    name: 'MANAGERIAL COMMUNICATION FOR ENGINEERS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02196',
    name: 'MANAGERIAL COMMUNICATION FOR ENGINEERS [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02197',
    name: 'SUPPLY CHAIN MANAGEMENT [IPE] [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02198',
    name: 'MANUFACTURING AND PRODUCTION PROCESS II [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02199',
    name: 'PRODUCT DESIGN AND DEVELOPMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02200',
    name: 'PRODUCT DESIGN AND DEVELOPMENT [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02201',
    name: 'OPERATIONS MANAGEMENT [IPE] [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02202',
    name: 'LOGISTICS AND DISTRIBUTION MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02203',
    name: 'LOGISTICS AND DISTRIBUTION MANAGEMENT [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02204',
    name: 'ENGINEERING ECONOMY [IPE] [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02205',
    name: 'MACHINE TOOLS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02206',
    name: 'MACHINE TOOLS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02207',
    name: 'STATISTICAL DECISION MAKING FOR ENGINEERS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02208',
    name: 'MECHANICS OF SOLIDS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02209',
    name: 'MECHANICS OF SOLIDS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02210',
    name: 'ENGINEERING MECHANICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02211',
    name: 'ENGINEERING MECHANICS [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02212',
    name: 'ENGINEERING MATERIALS [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02213',
    name: 'ENGINEERING MATERIALS [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02214',
    name: 'METAL CUTTING PROCESS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02215',
    name: 'MEASUREMENT AND QUALITY CONTROL [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02216',
    name: 'PRODUCTION & INVENTORY CONTROL [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02217',
    name: 'WORK DESIGN [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02218',
    name: 'COMPUTER APPLICATION IN IE [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02219',
    name: 'ANALOG ELECTRONICS LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02220',
    name: 'ANALOG ELECTRONICS LAB [B]',
    sec: 'B',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02221',
    name: 'ANALOG ELECTRONICS LAB [C]',
    sec: 'C',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02222',
    name: 'ANALOG ELECTRONICS LAB [D]',
    sec: 'D',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02223',
    name: 'ANALOG ELECTRONICS LAB [E]',
    sec: 'E',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02224',
    name: 'ANALOG ELECTRONICS LAB [F]',
    sec: 'F',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02225',
    name: 'ANALOG ELECTRONICS LAB [G]',
    sec: 'G',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02226',
    name: 'ANALOG ELECTRONICS LAB [H]',
    sec: 'H',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02227',
    name: 'ANALOG ELECTRONICS 2 LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02228',
    name: 'ANALOG ELECTRONICS 2 LAB [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02229',
    name: 'ANALOG ELECTRONICS 2 LAB [C]',
    sec: 'C',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02230',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02231',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [B]',
    sec: 'B',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02232',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [C]',
    sec: 'C',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02233',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [D]',
    sec: 'D',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02234',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [E]',
    sec: 'E',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02235',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [F]',
    sec: 'F',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02236',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [G]',
    sec: 'G',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02237',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [H]',
    sec: 'H',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02238',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [I]',
    sec: 'I',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02239',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [J]',
    sec: 'J',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02240',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [K]',
    sec: 'K',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02241',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [L]',
    sec: 'L',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02242',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [M]',
    sec: 'M',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02243',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [N]',
    sec: 'N',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02244',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [O]',
    sec: 'O',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02245',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [P]',
    sec: 'P',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02246',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [Q]',
    sec: 'Q',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02247',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [R]',
    sec: 'R',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02248',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [S]',
    sec: 'S',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02249',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [T]',
    sec: 'T',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02250',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [U]',
    sec: 'U',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02251',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [V]',
    sec: 'V',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02252',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [W]',
    sec: 'W',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02253',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [X]',
    sec: 'X',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02254',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [Y]',
    sec: 'Y',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02255',
    name: 'COMPUTER AIDED DESIGN & DRAFTING [Z]',
    sec: 'Z',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02256',
    name: 'DIGITAL COMMUNICATIONS [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '02257',
    name: 'MOBILE COMMUNICATIONS [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '02258',
    name: 'DIGITAL ELECTRONICS LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02259',
    name: 'DIRECT ENERGY CONVERSION [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '02260',
    name: 'SELECTED TOPICS IN ELECTRICAL AND ELECTRONIC ENGINEERING [MEEE] [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '02261',
    name: 'SEMICONDUCTOR MATERIALS AND HETERO STRUCTURES [MEEE] [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '02262',
    name: 'COMPUTER METHODS IN POWER SYSTEM ANALYSIS [A]',
    sec: 'A',
    schedule: [{ day: 'Thu', time: '6:30 PM', start: 1110, end: 1290 }],
  },
  {
    id: '02263',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02264',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [B]',
    sec: 'B',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02265',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [C]',
    sec: 'C',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02266',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [D]',
    sec: 'D',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02267',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [E]',
    sec: 'E',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02268',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [F]',
    sec: 'F',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02269',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [G]',
    sec: 'G',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02270',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [H]',
    sec: 'H',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02271',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [I]',
    sec: 'I',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02272',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [J]',
    sec: 'J',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02273',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [K]',
    sec: 'K',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02274',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [L]',
    sec: 'L',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02275',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [M]',
    sec: 'M',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02276',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [N]',
    sec: 'N',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02277',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [O]',
    sec: 'O',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02278',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [P]',
    sec: 'P',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02279',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [Q]',
    sec: 'Q',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02280',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [R]',
    sec: 'R',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02281',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [S]',
    sec: 'S',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02282',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [T]',
    sec: 'T',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02283',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [U]',
    sec: 'U',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02284',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [V]',
    sec: 'V',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02285',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [W]',
    sec: 'W',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02286',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [X]',
    sec: 'X',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02287',
    name: 'DIGITAL LOGIC AND CIRCUITS LAB [Y]',
    sec: 'Y',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02288',
    name: 'FLUID MECHANICS AND MACHINERY LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02289',
    name: 'DIGITAL LOGIC DESIGN LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02290',
    name: 'MACHINE TOOLS LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02291',
    name: 'MACHINE TOOLS LAB [B]',
    sec: 'B',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02292',
    name: 'ELECTRICAL CIRCUITS -1 LAB (DC) [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02293',
    name: 'ELECTRICAL CIRCUITS -1 LAB (DC) [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02294',
    name: 'ELECTRICAL CIRCUITS -1 LAB (DC) [C]',
    sec: 'C',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02295',
    name: 'ELECTRICAL CIRCUITS -1 LAB (DC) [D]',
    sec: 'D',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02296',
    name: 'ELECTRICAL CIRCUITS -1 LAB (DC) [E]',
    sec: 'E',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02297',
    name: 'MECHANICS OF SOLIDS LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02298',
    name: 'MECHANICS OF SOLIDS LAB [B]',
    sec: 'B',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02299',
    name: 'ELECTRICAL CIRCUITS-2 (AC) LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02300',
    name: 'ELECTRICAL CIRCUITS-2 (AC) LAB [B]',
    sec: 'B',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02301',
    name: 'ELECTRICAL CIRCUITS-2 (AC) LAB [C]',
    sec: 'C',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02302',
    name: 'ELECTRICAL CIRCUITS-2 (AC) LAB [D]',
    sec: 'D',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02303',
    name: 'ELECTRICAL CIRCUITS-2 (AC) LAB [E]',
    sec: 'E',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02304',
    name: 'ELECTRICAL CIRCUITS-2 (AC) LAB [F]',
    sec: 'F',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02305',
    name: 'ELECTRICAL CIRCUITS-2 (AC) LAB [G]',
    sec: 'G',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02306',
    name: 'ELECTRICAL CIRCUITS-2 (AC) LAB [H]',
    sec: 'H',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02307',
    name: 'MACHINE JOB SHOP- I (DRILLING, WELDING, MILLING AND TURNING) [A]',
    sec: 'A',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02308',
    name: 'MACHINE JOB SHOP- II (SHEET METAL FORMING AND CASTING) [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02309',
    name: 'MACHINE JOB SHOP- II (SHEET METAL FORMING AND CASTING) [B]',
    sec: 'B',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02310',
    name: 'ENGINEERING MATERIALS LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02311',
    name: 'ENGINEERING MATERIALS LAB [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02312',
    name: 'ENGINEERING MECHANICS LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02313',
    name: 'ENGINEERING MECHANICS LAB [B]',
    sec: 'B',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02314',
    name: 'ENGINEERING DRAWING [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02315',
    name: 'ENGINEERING DRAWING [B]',
    sec: 'B',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02316',
    name: 'INDUSTRIAL ELECTRONICS AND DRIVES LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02317',
    name: 'INDUSTRIAL ELECTRONICS AND DRIVES LAB [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02318',
    name: 'INDUSTRIAL ELECTRONICS AND DRIVES LAB [C]',
    sec: 'C',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02319',
    name: 'INDUSTRIAL ELECTRONICS AND DRIVES LAB [D]',
    sec: 'D',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02320',
    name: 'INDUSTRIAL ELECTRONICS AND DRIVES LAB [E]',
    sec: 'E',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02321',
    name: 'INDUSTRIAL ELECTRONICS AND DRIVES LAB [F]',
    sec: 'F',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02322',
    name: 'INDUSTRIAL ELECTRONICS AND DRIVES LAB [G]',
    sec: 'G',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02323',
    name: 'ELECTRICAL MACHINES 2 LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02324',
    name: 'ELECTRICAL MACHINES 2 LAB [B]',
    sec: 'B',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02325',
    name: 'ELECTRICAL MACHINES 2 LAB [C]',
    sec: 'C',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02326',
    name: 'ELECTRICAL MACHINES 2 LAB [D]',
    sec: 'D',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02327',
    name: 'ELECTRICAL MACHINES 2 LAB [E]',
    sec: 'E',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02328',
    name: 'ELECTRICAL MACHINES 2 LAB [F]',
    sec: 'F',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02329',
    name: 'ELECTRICAL MACHINES 2 LAB [G]',
    sec: 'G',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02330',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02331',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS LAB [B]',
    sec: 'B',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02332',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS LAB [C]',
    sec: 'C',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02333',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS LAB [D]',
    sec: 'D',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02334',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS LAB [E]',
    sec: 'E',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02335',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS LAB [F]',
    sec: 'F',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02336',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS LAB [G]',
    sec: 'G',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02337',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS LAB [H]',
    sec: 'H',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02338',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS LAB [I]',
    sec: 'I',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02339',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS LAB [J]',
    sec: 'J',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02340',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS LAB [K]',
    sec: 'K',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02341',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS LAB [L]',
    sec: 'L',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02342',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS LAB [M]',
    sec: 'M',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02343',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS LAB [N]',
    sec: 'N',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02344',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS LAB [O]',
    sec: 'O',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02345',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS LAB [P]',
    sec: 'P',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02346',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS LAB [Q]',
    sec: 'Q',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02347',
    name: 'INTRODUCTION TO ELECTRICAL CIRCUITS LAB [R]',
    sec: 'R',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02348',
    name: 'MODERN CONTROL SYSTEMS LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02349',
    name: 'MODERN CONTROL SYSTEMS LAB [B]',
    sec: 'B',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02350',
    name: 'MODERN CONTROL SYSTEMS LAB [C]',
    sec: 'C',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02351',
    name: 'MODERN CONTROL SYSTEMS LAB [D]',
    sec: 'D',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02352',
    name: 'MODERN CONTROL SYSTEMS LAB [E]',
    sec: 'E',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02353',
    name: 'MODERN CONTROL SYSTEMS LAB [F]',
    sec: 'F',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02354',
    name: 'ELECTRICAL SERVICES DESIGN LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02355',
    name: 'ELECTRICAL SERVICES DESIGN LAB [B]',
    sec: 'B',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02356',
    name: 'ELECTRICAL SERVICES DESIGN LAB [C]',
    sec: 'C',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02357',
    name: 'ELECTRICAL SERVICES DESIGN LAB [D]',
    sec: 'D',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02358',
    name: 'ELECTRICAL SERVICES DESIGN LAB [E]',
    sec: 'E',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02359',
    name: 'TELECOMMUNICATIONS ENGINEERING LAB [EEE] [A]',
    sec: 'A',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02360',
    name: 'ELECTRONIC DEVICES LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02361',
    name: 'ELECTRONIC DEVICES LAB [B]',
    sec: 'B',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02362',
    name: 'ELECTRONIC DEVICES LAB [C]',
    sec: 'C',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02363',
    name: 'ELECTRONIC DEVICES LAB [D]',
    sec: 'D',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02364',
    name: 'ELECTRONIC DEVICES LAB [E]',
    sec: 'E',
    schedule: [{ day: 'Mon', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02365',
    name: 'ELECTRONIC DEVICES LAB [F]',
    sec: 'F',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02366',
    name: 'ELECTRONIC DEVICES LAB [G]',
    sec: 'G',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02367',
    name: 'ELECTRONIC DEVICES LAB [H]',
    sec: 'H',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02368',
    name: 'ELECTRONIC DEVICES LAB [I]',
    sec: 'I',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02369',
    name: 'ELECTRONIC DEVICES LAB [J]',
    sec: 'J',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02370',
    name: 'ELECTRONIC DEVICES LAB [K]',
    sec: 'K',
    schedule: [{ day: 'Tue', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02371',
    name: 'ELECTRONIC DEVICES LAB [L]',
    sec: 'L',
    schedule: [{ day: 'Tue', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02372',
    name: 'ELECTRONIC DEVICES LAB [M]',
    sec: 'M',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02373',
    name: 'ELECTRONIC DEVICES LAB [N]',
    sec: 'N',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02374',
    name: 'ELECTRONIC DEVICES LAB [O]',
    sec: 'O',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02375',
    name: 'ELECTRONIC DEVICES LAB [P]',
    sec: 'P',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02376',
    name: 'ELECTRONIC DEVICES LAB [Q]',
    sec: 'Q',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02377',
    name: 'ELECTRONIC DEVICES LAB [R]',
    sec: 'R',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02378',
    name: 'ELECTRONIC DEVICES LAB [S]',
    sec: 'S',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02379',
    name: 'ELECTRONIC DEVICES LAB [T]',
    sec: 'T',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02380',
    name: 'ELECTRONIC DEVICES LAB [U]',
    sec: 'U',
    schedule: [{ day: 'Mon', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02381',
    name: 'ELECTRONIC DEVICES LAB [V]',
    sec: 'V',
    schedule: [{ day: 'Tue', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02382',
    name: 'ELECTRONIC DEVICES LAB [W]',
    sec: 'W',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02383',
    name: 'ELECTRONIC DEVICES LAB [X]',
    sec: 'X',
    schedule: [{ day: 'Wed', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02384',
    name: 'ELECTRONIC DEVICES LAB [Y]',
    sec: 'Y',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02385',
    name: 'ENGINEERING SHOP [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02386',
    name: 'ENGINEERING SHOP [B]',
    sec: 'B',
    schedule: [{ day: 'Wed', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02387',
    name: 'ENGINEERING SHOP [C]',
    sec: 'C',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02388',
    name: 'ENGINEERING SHOP [D]',
    sec: 'D',
    schedule: [{ day: 'Mon', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02389',
    name: 'ENGINEERING SHOP [E]',
    sec: 'E',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02390',
    name: 'BANGLADESH STUDIES [LLB] [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02391',
    name: 'BANGLADESH STUDIES [LLB] [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02392',
    name: 'BANGLADESH STUDIES [FST] [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02393',
    name: 'BANGLADESH STUDIES [FST] [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02394',
    name: 'BANGLADESH STUDIES [FST] [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02395',
    name: 'BANGLADESH STUDIES [FST] [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02396',
    name: 'BANGLADESH STUDIES [FST] [E]',
    sec: 'E',
    schedule: [
      { day: 'Sun', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Tue', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02397',
    name: 'BANGLADESH STUDIES [FST] [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02398',
    name: 'BANGLADESH STUDIES [FST] [G]',
    sec: 'G',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02399',
    name: 'BANGLADESH STUDIES [FST] [H]',
    sec: 'H',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02400',
    name: 'BANGLADESH STUDIES [FST] [I]',
    sec: 'I',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02401',
    name: 'BANGLADESH STUDIES [FASS] [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02402',
    name: 'BANGLADESH STUDIES [FASS] [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02403',
    name: 'BANGLADESH STUDIES [B.PHARMA] [L1]',
    sec: 'L1',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02404',
    name: 'BANGLADESH STUDIES [BMB] [P1]',
    sec: 'P1',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02405',
    name: 'BANGLADESH STUDIES [BBA] [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02406',
    name: 'BANGLADESH STUDIES [BBA] [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Wed', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02407',
    name: 'BANGLADESH STUDIES [BBA] [C]',
    sec: 'C',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02408',
    name: 'BANGLADESH STUDIES [BBA] [A1]',
    sec: 'A1',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02409',
    name: 'BANGLADESH STUDIES [BBA] [A2]',
    sec: 'A2',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02410',
    name: 'BANGLADESH STUDIES [BBA] [A3]',
    sec: 'A3',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02411',
    name: 'BANGLADESH STUDIES [BBA] [A4]',
    sec: 'A4',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02412',
    name: 'BANGLADESH STUDIES [BBA] [A5]',
    sec: 'A5',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02413',
    name: 'BANGLADESH STUDIES [BBA] [A6]',
    sec: 'A6',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02414',
    name: 'BANGLADESH STUDIES [BBA] [A7]',
    sec: 'A7',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02415',
    name: 'BANGLADESH STUDIES [BBA] [A8]',
    sec: 'A8',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02416',
    name: 'BANGLADESH STUDIES [BBA] [A9]',
    sec: 'A9',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02417',
    name: 'BANGLADESH STUDIES [BBA] [A10]',
    sec: 'A10',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02418',
    name: 'ELECTRICAL MACHINES 1 LAB [A]',
    sec: 'A',
    schedule: [{ day: 'Sun', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02419',
    name: 'ELECTRICAL MACHINES 1 LAB [B]',
    sec: 'B',
    schedule: [{ day: 'Sun', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02420',
    name: 'ELECTRICAL MACHINES 1 LAB [C]',
    sec: 'C',
    schedule: [{ day: 'Mon', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02421',
    name: 'ELECTRICAL MACHINES 1 LAB [D]',
    sec: 'D',
    schedule: [{ day: 'Tue', time: '10:20 AM', start: 620, end: 760 }],
  },
  {
    id: '02422',
    name: 'ELECTRICAL MACHINES 1 LAB [E]',
    sec: 'E',
    schedule: [{ day: 'Wed', time: '12:40 PM', start: 760, end: 900 }],
  },
  {
    id: '02423',
    name: 'ELECTRICAL MACHINES 1 LAB [F]',
    sec: 'F',
    schedule: [{ day: 'Wed', time: '3:00 PM', start: 900, end: 1040 }],
  },
  {
    id: '02424',
    name: 'BANGLADESH STUDIES [ARCHI] [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02425',
    name: 'BANGLADESH STUDIES [ARCHI] [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02426',
    name: 'ELECTRICAL MACHINES 1 [F]',
    sec: 'F',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02427',
    name: 'CAPSTONE PROJECT [Group 1]',
    sec: 'Group 1',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02428',
    name: 'CAPSTONE PROJECT [Group 2]',
    sec: 'Group 2',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02429',
    name: 'CAPSTONE PROJECT [Group 3]',
    sec: 'Group 3',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02430',
    name: 'CAPSTONE PROJECT [Group 4]',
    sec: 'Group 4',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02431',
    name: 'CAPSTONE PROJECT [Group 5]',
    sec: 'Group 5',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02432',
    name: 'CAPSTONE PROJECT [Group 6]',
    sec: 'Group 6',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02433',
    name: 'CAPSTONE PROJECT [Group 7]',
    sec: 'Group 7',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02434',
    name: 'CAPSTONE PROJECT [Group 8]',
    sec: 'Group 8',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02435',
    name: 'CAPSTONE PROJECT [Group 9]',
    sec: 'Group 9',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02436',
    name: 'CAPSTONE PROJECT [Group 10]',
    sec: 'Group 10',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02437',
    name: 'CAPSTONE PROJECT [Group 11]',
    sec: 'Group 11',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02438',
    name: 'CAPSTONE PROJECT [Group 12]',
    sec: 'Group 12',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02439',
    name: 'CAPSTONE PROJECT [Group 13]',
    sec: 'Group 13',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02440',
    name: 'CAPSTONE PROJECT [Group 14]',
    sec: 'Group 14',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02441',
    name: 'CAPSTONE PROJECT [Group 15]',
    sec: 'Group 15',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02442',
    name: 'CAPSTONE PROJECT [Group 16]',
    sec: 'Group 16',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02443',
    name: 'CAPSTONE PROJECT [Group 17]',
    sec: 'Group 17',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02444',
    name: 'CAPSTONE PROJECT [Group 18]',
    sec: 'Group 18',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02445',
    name: 'CAPSTONE PROJECT [Group 19]',
    sec: 'Group 19',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02446',
    name: 'CAPSTONE PROJECT [IPE] [Group 1]',
    sec: 'Group 1',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02447',
    name: 'CAPSTONE PROJECT [IPE] [Group 2]',
    sec: 'Group 2',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02448',
    name: 'CAPSTONE PROJECT [IPE] [Group 3]',
    sec: 'Group 3',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02449',
    name: 'INTERNSHIP/ SEMINAR/ WORKSHOP [EEE] [A1]',
    sec: 'A1',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02450',
    name: 'INTERNSHIP/ SEMINAR/ WORKSHOP [EEE] [A2]',
    sec: 'A2',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02451',
    name: 'INTERNSHIP/ SEMINAR/ WORKSHOP [EEE] [A3]',
    sec: 'A3',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02452',
    name: 'INTERNSHIP/ SEMINAR/ WORKSHOP [COE] [A1]',
    sec: 'A1',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02453',
    name: 'INTERNSHIP [IPE] [A1]',
    sec: 'A1',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02454',
    name: 'INDUSTRIAL ELECTRONICS [COE] [A]',
    sec: 'A',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02455',
    name: 'INDUSTRIAL TRAINING / SEMINAR / WORKSHOPS [A1]',
    sec: 'A1',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02456',
    name: 'INDUSTRIAL TRAINING / SEMINAR / WORKSHOPS [A2]',
    sec: 'A2',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02457',
    name: 'ENTERPRISE RESOURCE PLANNING [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Tue', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02458',
    name: 'WORKING CAPITAL MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02459',
    name: 'INVENTORY MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02460',
    name: 'THESIS [BSCS] [G01]',
    sec: 'G01',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02461',
    name: 'THESIS [BSCS] [G02]',
    sec: 'G02',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02462',
    name: 'THESIS [BSCS] [G03]',
    sec: 'G03',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02463',
    name: 'THESIS [BSCS] [G04]',
    sec: 'G04',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02464',
    name: 'THESIS [BSCS] [G05]',
    sec: 'G05',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02465',
    name: 'THESIS [BSCS] [G06]',
    sec: 'G06',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02466',
    name: 'THESIS [BSCS] [G07]',
    sec: 'G07',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02467',
    name: 'THESIS [BSCS] [G08]',
    sec: 'G08',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02468',
    name: 'THESIS [BSCS] [G09]',
    sec: 'G09',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02469',
    name: 'THESIS [BSCS] [G10]',
    sec: 'G10',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02470',
    name: 'THESIS [BSCS] [G11]',
    sec: 'G11',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02471',
    name: 'THESIS [BSCS] [G12]',
    sec: 'G12',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02472',
    name: 'THESIS [BSCS] [G13]',
    sec: 'G13',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02473',
    name: 'THESIS [BSCS] [G14]',
    sec: 'G14',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02474',
    name: 'THESIS [BSCS] [G15]',
    sec: 'G15',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02475',
    name: 'THESIS [BSCS] [G16]',
    sec: 'G16',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02476',
    name: 'THESIS [BSCS] [G17]',
    sec: 'G17',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02477',
    name: 'THESIS [BSCS] [G18]',
    sec: 'G18',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02478',
    name: 'THESIS [BSCS] [G19]',
    sec: 'G19',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02479',
    name: 'THESIS [BSCS] [G20]',
    sec: 'G20',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02480',
    name: 'THESIS [BSCS] [G21]',
    sec: 'G21',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02481',
    name: 'THESIS [BSCS] [G22]',
    sec: 'G22',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02482',
    name: 'THESIS [BSCS] [G23]',
    sec: 'G23',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02483',
    name: 'THESIS [BSCS] [G24]',
    sec: 'G24',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02484',
    name: 'THESIS [BSCS] [G25]',
    sec: 'G25',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02485',
    name: 'THESIS [BSCS] [G26]',
    sec: 'G26',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02486',
    name: 'THESIS [BSCS] [G27]',
    sec: 'G27',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02487',
    name: 'THESIS [BSCS] [G28]',
    sec: 'G28',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02488',
    name: 'THESIS [BSCS] [G29]',
    sec: 'G29',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02489',
    name: 'THESIS [BSCS] [G30]',
    sec: 'G30',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02490',
    name: 'THESIS [BSCS] [G31]',
    sec: 'G31',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02491',
    name: 'THESIS [BSCS] [G32]',
    sec: 'G32',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02492',
    name: 'THESIS [BSCS] [G33]',
    sec: 'G33',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02493',
    name: 'THESIS [BSCS] [G34]',
    sec: 'G34',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02494',
    name: 'THESIS [BSCS] [G35]',
    sec: 'G35',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02495',
    name: 'THESIS [BSCS] [G36]',
    sec: 'G36',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02496',
    name: 'THESIS [BSCS] [G37]',
    sec: 'G37',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02497',
    name: 'THESIS [BSCS] [G38]',
    sec: 'G38',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02498',
    name: 'THESIS [BSCS] [G39]',
    sec: 'G39',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02499',
    name: 'THESIS [BSCS] [G40]',
    sec: 'G40',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02500',
    name: 'THESIS [BSCS] [G41]',
    sec: 'G41',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02501',
    name: 'THESIS [BSCS] [G42]',
    sec: 'G42',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02502',
    name: 'THESIS [BSCS] [G43]',
    sec: 'G43',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02503',
    name: 'THESIS [BSCS] [G44]',
    sec: 'G44',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02504',
    name: 'THESIS [BSCS] [G45]',
    sec: 'G45',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02505',
    name: 'THESIS [BSCS] [G46]',
    sec: 'G46',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02506',
    name: 'THESIS [BSCS] [G47]',
    sec: 'G47',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02507',
    name: 'THESIS [BSCS] [G48]',
    sec: 'G48',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02508',
    name: 'THESIS [BSCS] [G49]',
    sec: 'G49',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02509',
    name: 'THESIS [BSCS] [G50]',
    sec: 'G50',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02510',
    name: 'THESIS [BSCS] [G51]',
    sec: 'G51',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02511',
    name: 'THESIS [BSCS] [G52]',
    sec: 'G52',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02512',
    name: 'THESIS [BSCS] [G53]',
    sec: 'G53',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02513',
    name: 'THESIS [BSCS] [G54]',
    sec: 'G54',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02514',
    name: 'THESIS [BSCS] [G55]',
    sec: 'G55',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02515',
    name: 'THESIS [BSCS] [G56]',
    sec: 'G56',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02516',
    name: 'THESIS [BSCS] [G57]',
    sec: 'G57',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02517',
    name: 'THESIS [BSCS] [G58]',
    sec: 'G58',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02518',
    name: 'THESIS [BSCS] [G59]',
    sec: 'G59',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02519',
    name: 'THESIS [BSCS] [G60]',
    sec: 'G60',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02520',
    name: 'THESIS [BSCS] [G61]',
    sec: 'G61',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02521',
    name: 'THESIS [BSCS] [G62]',
    sec: 'G62',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02522',
    name: 'THESIS [BSCS] [G63]',
    sec: 'G63',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02523',
    name: 'THESIS [BSCS] [G64]',
    sec: 'G64',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02524',
    name: 'THESIS [BSCS] [G65]',
    sec: 'G65',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02525',
    name: 'THESIS [BSCS] [G66]',
    sec: 'G66',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02526',
    name: 'THESIS [BSCS] [G67]',
    sec: 'G67',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02527',
    name: 'THESIS [BSCS] [G68]',
    sec: 'G68',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02528',
    name: 'THESIS [BSCS] [G69]',
    sec: 'G69',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02529',
    name: 'THESIS [BSCS] [G70]',
    sec: 'G70',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02530',
    name: 'THESIS [BSCS] [G71]',
    sec: 'G71',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02531',
    name: 'THESIS [BSCS] [G72]',
    sec: 'G72',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02532',
    name: 'THESIS [BSCS] [G73]',
    sec: 'G73',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02533',
    name: 'THESIS [BSCS] [G74]',
    sec: 'G74',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02534',
    name: 'THESIS [BSCS] [G75]',
    sec: 'G75',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02535',
    name: 'THESIS [BSCS] [G76]',
    sec: 'G76',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02536',
    name: 'THESIS [BSCS] [G77]',
    sec: 'G77',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02537',
    name: 'THESIS [BSCS] [G78]',
    sec: 'G78',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02538',
    name: 'THESIS [BSCS] [G79]',
    sec: 'G79',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02539',
    name: 'THESIS [BSCS] [G80]',
    sec: 'G80',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02540',
    name: 'THESIS [BSCS] [G81]',
    sec: 'G81',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02541',
    name: 'THESIS [BSCS] [G82]',
    sec: 'G82',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02542',
    name: 'THESIS [BSCS] [G83]',
    sec: 'G83',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02543',
    name: 'THESIS [BSCS] [G84]',
    sec: 'G84',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02544',
    name: 'THESIS [BSCS] [G85]',
    sec: 'G85',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02545',
    name: 'INTERNSHIP [BSCS] [A]',
    sec: 'A',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02546',
    name: 'SOFTWARE PROJECT I [G01]',
    sec: 'G01',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02547',
    name: 'SOFTWARE PROJECT I [G02]',
    sec: 'G02',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02548',
    name: 'SOFTWARE PROJECT II [G01]',
    sec: 'G01',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02549',
    name: 'SOFTWARE PROJECT II [G02]',
    sec: 'G02',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02550',
    name: 'THESIS [MScCS] [G01]',
    sec: 'G01',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02551',
    name: 'THESIS [MScCS] [G02]',
    sec: 'G02',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02552',
    name: 'THESIS [MScCS] [G03]',
    sec: 'G03',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02553',
    name: 'THESIS [MScCS] [G04]',
    sec: 'G04',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02554',
    name: 'THESIS [MScCS] [G05]',
    sec: 'G05',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02555',
    name: 'THESIS [MScCS] [G06]',
    sec: 'G06',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02556',
    name: 'THESIS [MScCS] [G07]',
    sec: 'G07',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02557',
    name: 'THESIS [MScCS] [G08]',
    sec: 'G08',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02558',
    name: 'THESIS [MScCS] [G09]',
    sec: 'G09',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02559',
    name: 'THESIS [MScCS] [G10]',
    sec: 'G10',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02560',
    name: 'THESIS [MScCS] [G11]',
    sec: 'G11',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02561',
    name: 'THESIS [MScCS] [G12]',
    sec: 'G12',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02562',
    name: 'THESIS [MScCS] [G13]',
    sec: 'G13',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02563',
    name: 'THESIS [MScCS] [G14]',
    sec: 'G14',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02564',
    name: 'THESIS [MScCS] [G15]',
    sec: 'G15',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02565',
    name: 'THESIS CONTINUED [MScCS] [G01]',
    sec: 'G01',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02566',
    name: 'THESIS CONTINUED [MScCS] [G02]',
    sec: 'G02',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02567',
    name: 'THESIS CONTINUED [MScCS] [G03]',
    sec: 'G03',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02568',
    name: 'THESIS CONTINUED [MScCS] [G04]',
    sec: 'G04',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02569',
    name: 'THESIS CONTINUED [MScCS] [G05]',
    sec: 'G05',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02570',
    name: 'THESIS CONTINUED [MScCS] [G06]',
    sec: 'G06',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02571',
    name: 'THESIS CONTINUED [MScCS] [G07]',
    sec: 'G07',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02572',
    name: 'THESIS CONTINUED [MScCS] [G08]',
    sec: 'G08',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02573',
    name: 'THESIS CONTINUED [MScCS] [G09]',
    sec: 'G09',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02574',
    name: 'THESIS CONTINUED [MScCS] [G10]',
    sec: 'G10',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02575',
    name: 'THESIS CONTINUED [MScCS] [G11]',
    sec: 'G11',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02576',
    name: 'THESIS CONTINUED [MScCS] [G12]',
    sec: 'G12',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02577',
    name: 'THESIS CONTINUED [MScCS] [G13]',
    sec: 'G13',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02578',
    name: 'THESIS CONTINUED [MScCS] [G14]',
    sec: 'G14',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02579',
    name: 'THESIS CONTINUED [MScCS] [G15]',
    sec: 'G15',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02580',
    name: 'GENDER, MEDIA AND IDENTITY [B]',
    sec: 'B',
    schedule: [
      { day: 'Sun', time: '1:00 PM', start: 780, end: 870 },
      { day: 'Tue', time: '1:00 PM', start: 780, end: 870 },
    ],
  },
  {
    id: '02581',
    name: 'MASS MEDIA AND SOCIETY [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Wed', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02582',
    name: 'REMEDIAL MATHEMATICS (N0N-CREDIT) [BMB]',
    sec: 'B',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02583',
    name: 'BILINGUALISM [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02584',
    name: 'GLOBAL ENGLISHES [B]',
    sec: 'B',
    schedule: [
      { day: 'Mon', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Wed', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02585',
    name: 'OBJECT ORIENTED PROGRAMMING [MIS] [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '9:40 AM', start: 580, end: 670 },
      { day: 'Tue', time: '9:40 AM', start: 580, end: 670 },
    ],
  },
  {
    id: '02586',
    name: 'THESIS CONTINUED [MScCS] [G16]',
    sec: 'G16',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02587',
    name: 'PHYSICAL FACILITIES AND INFRASTRUCTURE MANAGEMENT [A]',
    sec: 'A',
    schedule: [{ day: 'Fri', time: '2:00 PM', start: 840, end: 1020 }],
  },
  {
    id: '02588',
    name: 'NETWORK RESOURCE MANAGEMENT [A]',
    sec: 'A',
    schedule: [
      { day: 'Sun', time: '2:40 PM', start: 880, end: 970 },
      { day: 'Tue', time: '2:40 PM', start: 880, end: 970 },
    ],
  },
  {
    id: '02589',
    name: 'INTERNSHIP [BBA] [A]',
    sec: 'A',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02590',
    name: 'INTERNSHIP [MBA] [A]',
    sec: 'A',
    schedule: [{ day: '', time: '', start: 0, end: 0 }],
  },
  {
    id: '02591',
    name: 'ELECTRONIC DEVICES [Z]',
    sec: 'Z',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 570 },
      { day: 'Wed', time: '8:00 AM', start: 480, end: 570 },
    ],
  },
  {
    id: '02592',
    name: 'ELECTRONIC DEVICES LAB [Z]',
    sec: 'Z',
    schedule: [{ day: 'Sun', time: '8:00 AM', start: 480, end: 620 }],
  },
  {
    id: '02593',
    name: 'DIGITAL LOGIC & ELECTRONICS [A]',
    sec: 'A',
    schedule: [
      { day: 'Mon', time: '11:20 AM', start: 680, end: 770 },
      { day: 'Wed', time: '11:20 AM', start: 680, end: 770 },
    ],
  },
  {
    id: '02594',
    name: 'COMPUTER GRAPHICS [U]',
    sec: 'U',
    schedule: [
      { day: 'Mon', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Thu', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '02595',
    name: 'COMPUTER NETWORKS [V]',
    sec: 'V',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Thu', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '02596',
    name: 'COMPUTER ORGANIZATION AND ARCHITECTURE [U]',
    sec: 'U',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Thu', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02597',
    name: 'OBJECT ORIENTED PROGRAMMING 2 [GG]',
    sec: 'GG',
    schedule: [
      { day: 'Tue', time: '8:00 AM', start: 480, end: 600 },
      { day: 'Thu', time: '8:00 AM', start: 480, end: 620 },
    ],
  },
  {
    id: '02598',
    name: 'OPERATING SYSTEM [S]',
    sec: 'S',
    schedule: [
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02599',
    name: 'PROGRAMMING LANGUAGE 2 [EEE] [C]',
    sec: 'C',
    schedule: [
      { day: 'Mon', time: '12:40 PM', start: 760, end: 880 },
      { day: 'Wed', time: '12:40 PM', start: 760, end: 900 },
    ],
  },
  {
    id: '02600',
    name: 'PROGRAMMING LANGUAGE 2 [EEE] [D]',
    sec: 'D',
    schedule: [
      { day: 'Mon', time: '10:20 AM', start: 620, end: 740 },
      { day: 'Wed', time: '10:20 AM', start: 620, end: 760 },
    ],
  },
  {
    id: '02601',
    name: 'PROGRAMMING LANGUAGE 1 [EEE] [C]',
    sec: 'C',
    schedule: [
      { day: 'Mon', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Wed', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
  {
    id: '02602',
    name: 'PROGRAMMING LANGUAGE 1 [EEE] [D]',
    sec: 'D',
    schedule: [
      { day: 'Sun', time: '3:00 PM', start: 900, end: 1020 },
      { day: 'Tue', time: '3:00 PM', start: 900, end: 1040 },
    ],
  },
];
// src/data.ts (at the very bottom)

export const allCourses = [
  ...aiubCourses.map((c) => ({ ...c, uni: 'AIUB' })),
  ...(typeof nsuCourses !== 'undefined'
    ? nsuCourses.map((c) => ({ ...c, uni: 'NSU' }))
    : []),
];

export const DepartmentRegistry: Record<string, any[]> = {
  // AIUB Keys
  AIUB_CSE: typeof cseCurriculum !== 'undefined' ? cseCurriculum : [],
  AIUB_EEE: typeof eeeCurriculum !== 'undefined' ? eeeCurriculum : [],
  AIUB_BBA: typeof bbaCurriculum !== 'undefined' ? bbaCurriculum : [],
  AIUB_PHARMACY:
    typeof pharmacyCurriculum !== 'undefined' ? pharmacyCurriculum : [],

  // NSU Keys
  NSU_CSE: nsuCseCurriculum || [],
  NSU_BBA: nsuBbaCurriculum || [],
  NSU_PHARMACY: nsuPharCurriculum || [],
  NSU_EEE: nsuEeeCurriculum || [],
};
