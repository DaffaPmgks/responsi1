// backend/data.js
const educationHistory =[
  {
    "id": 1,
    "period": "2024 - Sekarang",
    "institution": "Universitas Amikom Yogyakarta",
    "major": "S1 - Teknik Informatika"
  },
  {
    "id": 2,
    "period": "2019 - 2022",
    "institution": "SMA Negeri 3 Temanggung",
    "major": "MIPA"
  }
];

const skills =   [
  { id: 1, name: 'Vue.js',        level: 'Mahir' },
  { id: 2, name: 'JavaScript',    level: 'Mahir' },
  { id: 3, name: 'Tailwind CSS',  level: 'Mahir' },
  { id: 4, name: 'Node.js',       level: 'Menengah' },
  { id: 5, name: 'Express.js',    level: 'Menengah' },
  { id: 6, name: 'PostgreSQL',    level: 'Menengah' },
  { id: 7, name: 'Git & GitHub',  level: 'Mahir' },
  { id: 8, name: 'HTML5 & CSS3',  level: 'Mahir' }
];
const projects =  [
  { id: 1,
    title: 'Website Toko Online',
    image: 'https://via.placeholder.com/500x300?text=Proyek+1',
    description: 'Platform e‑commerce dengan fitur keranjang belanja.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: '#'
  },
  { id: 2,
    title: 'Aplikasi Manajemen Tugas',
    image: 'https://via.placeholder.com/500x300?text=Proyek+2',
    description: 'Aplikasi untuk melacak progres tugas harian.',
    tech: ['React', 'Firebase'],
    link: '#'
  }
];
module.exports = { educationHistory, skills, projects };
