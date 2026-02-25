import React from 'react'

function App() {
  const experience = [
    {
      title: 'Head of Khageswara Division',
      company: 'GAMAFORCE - Gadjah Mada Flying Object Research Center',
      date: 'Desember 2024 - Sekarang',
      duties: [
        'Memimpin pengembangan sistem elektronik dan kontrol pesawat VTOL Tailsitter',
        'Mengatur integrasi mekatronika dan jadwal teknis tim divisi',
        'Bertanggung jawab atas arah teknis dan pencapaian performa UAV dalam kompetisi',
      ]
    },
    {
      title: 'Automation Engineer',
      company: 'Pusat Kajian LKFT UGM',
      date: 'September 2024 - Sekarang',
      duties: [
        'Membuat HMI OTS untuk proses produksi Asam Phosfat (PT. Petrokimia Gresik Production 3B)',
        'Membuat HMI OTS untuk proses produksi Ammonia (PT. Pupuk Kujang Production 3A)',
        'Berperan sebagai pemimpin proyek digitalisasi sistem pelatihan operator',
      ]
    },
    {
      title: 'Electronic Engineer',
      company: 'GAMAFORCE - Gadjah Mada Flying Object Research Center',
      date: 'Desember 2023 - Desember 2024',
      duties: [
        'Wiring komponen elektronik untuk Fly-wing dan Fixed-wing',
        'Merancang konsep mekatronika untuk mekanisme sayap lipat',
        'Mendukung pengembangan teknologi pesawat melalui desain dan integrasi elektronik',
      ]
    },
    {
      title: 'Student Trainee dan Desainer Sosial Media',
      company: 'Robotik Academy',
      date: 'Agustus 2023 - Januari 2024',
      duties: [
        'Mengelola Instagram resmi dan mengajar Scratch dan Tinkercad',
        'Menggabungkan kreativitas digital dengan pengajaran dasar pemrograman anak',
      ]
    },
    {
      title: 'Electronic Engineer',
      company: 'PKM KC - Monitoring Watch Cardiovascular',
      date: 'Februari 2023 - Desember 2023',
      duties: [
        'Desain PCB dengan KiCAD 8.0 dan pengujian sensor detak jantung',
        'Merancang prototipe wearable kesehatan untuk penderita kardiovaskular',
      ]
    },
    {
      title: 'Researcher',
      company: 'PKM VGK - Edgytech Flathouse',
      date: 'Februari 2023 - Desember 2023',
      duties: [
        'Merancang sistem monitoring energi terbarukan untuk rumah susun',
        'Meneliti pemanfaatan energi alternatif pada hunian vertikal ramah lingkungan',
      ]
    },
    {
      title: 'Network Engineer',
      company: 'PT Asatama Teknologi Terpadu',
      date: 'Oktober 2021 - Desember 2021',
      duties: [
        'Troubleshooting perangkat, topologi jaringan, instalasi dan konfigurasi Mikrotik',
        'Mendukung operasional jaringan dan perangkat di bidang layanan IT dan komunikasi',
      ]
    },
  ]

  const projects = [
    {
      title: 'Urban Portable Agriculture (UPA) Berbasis IoT',
      desc: 'Sistem pertanian hidroponik vertikal berbasis IoT dengan sensor pH dan kekeruhan, kontrol LED otomatis, dan dashboard real-time. Validasi teknis menunjukkan akurasi sensor pH ±0.1 dan turbidity ±2 NTU.',
      tech: ['ESP32', 'IoT', 'Sensor pH', 'DBSCAN'],
      link: 'https://jurnal.unismuhpalu.ac.id/index.php/JKS/article/view/8560'
    },
    {
      title: 'My Heavy Equipment - Aplikasi IoT',
      desc: 'Layanan informasi riwayat perbaikan pada alat berat berbasis Internet of Things. Telah terdaftar di Direktorat Hak Cipta dengan nomor pencatatan: 000535480.',
      tech: ['IoT', 'Heavy Equipment', 'Monitoring'],
      link: '#',
      hki: 'EC002023102525'
    },
    {
      title: 'VTOL Tailsitter UAV',
      desc: 'Pengembangan sistem elektronik dan kontrol pesawat VTOL Tailsitter untuk kompetisi KRTI (Kontes Robot Terbang Indonesia).',
      tech: ['VTOL', 'UAV', 'Flight Control'],
      link: '#'
    },
    {
      title: 'HMI Industrial Process',
      desc: 'Human Machine Interface untuk proses produksi Asam Phosfat dan Ammonia di PT Petrokimia Gresik dan PT Pupuk Kujang.',
      tech: ['HMI', 'Industrial Automation', 'SCADA'],
      link: '#'
    },
    {
      title: 'Monitoring Watch Cardiovascular',
      desc: 'Desain PCB dan prototipe wearable device untuk monitoring detak jantung pasien kardiovaskular.',
      tech: ['KiCAD', 'Sensor ECG', 'Embedded System'],
      link: '#'
    },
    {
      title: 'Sistem Monitoring Energi Terbarukan',
      desc: 'Sistem monitoring energi terbarukan untuk rumah susun dengan penelitian pemanfaatan energi alternatif pada hunian vertikal.',
      tech: ['Renewable Energy', 'Smart Grid', 'Monitoring'],
      link: '#'
    },
  ]

  const publications = [
    {
      title: 'My Heavy Equipment: Layanan Informasi Riwayat Perbaikan Pada Alat Berat Berbasis Internet Of Things',
      journal: 'Hak Kekayaan Intelektual (HKI) - Kementerian Hukum dan HAM',
      date: 'Oktober 2023',
      pages: 'Nomor Pencatatan: 000535480',
      pdf: '/referensi/HKI Aplikasi.pdf',
      role: 'Pencipta (Co-Author)'
    },
    {
      title: 'Sistem Urban Portable Agriculture Berbasis IoT: Validasi Teknis dan Analisis Kinerja Platform Monitoring Hidroponik Berbiaya Rendah',
      journal: 'Jurnal Kolaboratif Sains, Volume 8 No. 11',
      date: 'November 2025',
      pages: '6640-6653',
      link: 'https://jurnal.unismuhpalu.ac.id/index.php/JKS/article/view/8560',
      role: 'Co-Author'
    },
    {
      title: 'Pengaruh Kenaikan PPN dan Inflasi Terhadap Volume Penjualan (Studi Kasus pada PT Astra International Tbk)',
      journal: 'Dharma Ekonomi, Volume 33 Nomor 1',
      date: 'Mei 2026',
      pages: '24-36',
      link: 'https://ejournals.stiedharmaputra-smg.ac.id/index.php/DE/article/view/364',
      role: 'Co-Author'
    },
  ]

  const news = [
    {
      title: 'Belajar Robotika Menggunakan Simulator Webots',
      category: 'Buku / Publikasi Akademik',
      links: [
        { text: 'Katalog Buku (RStats Bookstore)', url: 'https://www.rstatsbookstore.com/katalog/katalog-2025' },
        { text: 'Profil Buku (SINTA)', url: 'https://sinta.kemdiktisaintek.go.id/authors/profile/44568/?view=books' },
      ]
    },
    {
      title: 'Mine-Eye Gama - Astranauts 2024',
      category: 'Prestasi Lomba',
      links: [
        { text: 'UGM News', url: 'https://ugm.ac.id/en/news/mine-eye-gama-team-wins-2nd-place-in-astranauts-2024/' },
        { text: 'Biologi UGM', url: 'https://biologi.ugm.ac.id/en/2024/12/02/ugms-mine-eye-gama-team-wins-second-place-at-astranauts-2024-with-mining-monitoring-technology-innovation/' },
      ]
    },
    {
      title: 'My Heavy Equipment - IoT Application',
      category: 'Inovasi Mahasiswa',
      links: [
        { text: 'UGM News', url: 'https://ugm.ac.id/en/news/ugm-students-develop-iot-integrated-heavy-equipment-service-history-recording-application/' },
      ]
    },
    {
      title: 'KRTI - Kontes Robot Terbang Indonesia',
      category: 'Prestasi Lomba Nasional',
      links: [
        { text: 'DTEDI SV UGM', url: 'https://tedi.sv.ugm.ac.id/id/2025/10/27/mahasiswa-dtedi-sekolah-vokasi-ugm-berprestasi-di-ajang-kontes-robot-terbang-indonesia-krti-2025/' },
      ]
    },
    {
      title: 'SoTech / Pertamina Sumatera Selatan',
      category: 'Prestasi Kompetisi',
      links: [
        { text: 'TRIK UGM', url: 'https://trik.sv.ugm.ac.id/2024/04/26/mahasiswa-trik-ugm-lolos-12-besar-kompetisi-pertamina-sumatera-selatan/' },
      ]
    },
    {
      title: 'Edgytech Flathouse',
      category: 'Inovasi Mahasiswa',
      links: [
        { text: 'UGM News', url: 'https://ugm.ac.id/id/berita/edgytech-flathouse-inovasi-untuk-optimalisasi-potensi-energi-rumah-susun/' },
      ]
    },
    {
      title: 'Profil Akademik & Publikasi',
      category: 'Profil Ilmiah',
      links: [
        { text: 'LLDIKTI Author', url: 'https://diajeng.lldikti6.id/authors/discover/Daniel+Imanuel+Manafe' },
        { text: 'ResearchGate Lab', url: 'https://www.researchgate.net/lab/Daniel-Imanuel-Manafe-Lab' },
      ]
    },
  ]

  const skills = {
    hard: [
      'C/C++', 'Python', 'MATLAB', 
      'Arduino', 'ESP32', 'STM32',
      'SolidWorks', 'Inventor', 'Fusion 360',
      'KiCAD', 'Proteus', 'Eagle',
      'CX Programmer', 'CX Designer',
      'Cisco Packet Tracer', 'Mikrotik'
    ],
    software: [
      'Aveva Intouch', 'RDWorks Lasercut', 
      'LabVIEW', 'OriginLab',
      'Capcut', 'Figma', 'Illustrator',
      'Microsoft Office Suite'
    ],
    soft: [
      'Kepemimpinan', 'Manajemen Waktu', 
      'Problem Solving', 'Adaptasi Cepat',
      'Komunikasi Efektif', 'Kolaborasi Tim',
      'Pemikiran Kritis', 'Kreativitas'
    ]
  }

  const awards = [
    { title: 'Juara 1 Divisi Technology Development', event: 'KRTI (Kontes Robot Terbang Indonesia)' },
    { title: 'Juara 2 Astranauts 2024', event: 'PT Astra Digital Internasional' },
    { title: 'Juara 1 SoTech', event: 'PT Pertamina Patra Niaga' },
    { title: 'Finalis PIMNAS (PKM-KC & PKM-VGK)', event: 'KEMENDIKBUDRISTEK' },
    { title: 'Awardee Astra InnovLab Batch 3', event: 'Astra' },
  ]

  const education = [
    {
      school: 'Universitas Gadjah Mada',
      degree: 'Teknologi Rekayasa Instrumentasi dan Kontrol',
      year: '2022 - Sekarang',
      gpa: 'GPA: 3.75 / 4.00'
    },
    {
      school: 'SMKN 1 Tambelang, Bekasi',
      degree: 'Teknik Komputer dan Jaringan',
      year: '2018 - 2021',
      gpa: 'GPA: 82.6 / 100.0'
    },
  ]

  const contacts = [
    { label: 'Email', value: 'danielimanuelmanafe@mail.ugm.ac.id', link: 'mailto:danielimanuelmanafe@mail.ugm.ac.id' },
    { label: 'WhatsApp', value: '0881-1552-351', link: 'https://wa.me/628811552351' },
    { label: 'LinkedIn', value: 'bit.ly/Niell_LinkedIn', link: 'https://bit.ly/Niell_LinkedIn' },
    { label: 'GrabCAD', value: '3D Models Portfolio', link: 'https://bit.ly/Niell_3DModels' },
    { label: 'GitHub', value: 'github.com/NiellMann', link: 'https://github.com/NiellMann' },
  ]

  return (
    <>
      {/* Header */}
      <header>
        <div className="logo">DANIEL IMANUEL MANAFE</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#publications">Publications</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Automation &<br /><span>Instrumentation Engineer</span></h1>
          <p>
            Industrial Instrumentation & UAV Control Enthusiast | Project Leader | Astra Innovlab Awardee
            Mahasiswa Instrumentation & Control Engineering di Universitas Gadjah Mada dengan pengalaman 
            di berbagai sektor industri. Spesialis dalam desain elektronik, sistem kendali, IoT, dan otomasi industri.
          </p>
          <a href="#contact" className="btn">Get In Touch</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="section-title">
          <h2>Tentang Saya</h2>
          <div className="line"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Daniel Imanuel Manafe</h3>
            <p>
              Saya adalah mahasiswa Teknik Instrumentasi dan Kontrol di Universitas Gadjah Mada
              dengan GPA 3.75/4.00. Memiliki pengalaman di berbagai sektor industri termasuk
              otomasi industri, UAV, dan sistem kendali.
            </p>
            <p>
              Saya memiliki kepribadian ceria dan berbagai hobi. Aktif berpartisipasi dalam berbagai 
              kegiatan akademis dan organisasi. Rajin, bertanggung jawab, termotivasi diri, 
              dan tidak takut menghadapi tantangan sulit.
            </p>
            <div className="awards-preview">
              <h4>Penghargaan</h4>
              <ul>
                {awards.slice(0, 3).map((award, i) => (
                  <li key={i}><strong>{award.title}</strong> - {award.event}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-box">
              <h4>3.7+</h4>
              <p>Years Experience</p>
            </div>
            <div className="stat-box">
              <h4>10+</h4>
              <p>Projects</p>
            </div>
            <div className="stat-box">
              <h4>5+</h4>
              <p>Publications & Awards</p>
            </div>
            <div className="stat-box">
              <h4>500+</h4>
              <p>LinkedIn Connections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="education">
        <div className="section-title">
          <h2>Pendidikan</h2>
          <div className="line"></div>
        </div>
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <h3>{edu.school}</h3>
              <p className="degree">{edu.degree}</p>
              <p className="date">{edu.year}</p>
              <p className="gpa">{edu.gpa}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <div className="section-title">
          <h2>Skills</h2>
          <div className="line"></div>
        </div>
        <div className="skills-container">
          <div className="skills-section">
            <h3>Hard Skills</h3>
            <div className="skill-tags">
              {skills.hard.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skills-section">
            <h3>Software</h3>
            <div className="skill-tags">
              {skills.software.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skills-section">
            <h3>Soft Skills</h3>
            <div className="skill-tags">
              {skills.soft.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="experience">
        <div className="section-title">
          <h2>Pengalaman Kerja</h2>
          <div className="line"></div>
        </div>
        <div className="experience-list">
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <p className="date">{exp.date}</p>
              <ul>
                {exp.duties.map((duty, i) => (
                  <li key={i}>{duty}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <div className="section-title">
          <h2>Proyek</h2>
          <div className="line"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                {project.hki && <p className="hki-badge">HKI: {project.hki}</p>}
                <div className="tech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="publications">
        <div className="section-title">
          <h2>Publikasi & Penelitian</h2>
          <div className="line"></div>
        </div>
        <div className="publications-list">
          {publications.map((pub, index) => (
            <div key={index} className="publication-item">
              <h3>{pub.title}</h3>
              <p className="journal">{pub.journal}</p>
              <p className="meta">{pub.date} | {pub.role}</p>
              <div className="pub-links">
                {pub.pdf && (
                  <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="pub-link">View PDF</a>
                )}
                {pub.link && (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pub-link">Journal Link</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* News */}
      <section id="news" className="news">
        <div className="section-title">
          <h2>News & Publications</h2>
          <div className="line"></div>
        </div>
        <div className="news-list">
          {news.map((item, index) => (
            <div key={index} className="news-item">
              <h3>{item.title}</h3>
              <p className="news-category">{item.category}</p>
              <div className="news-links">
                {item.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="news-link">
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="awards">
        <div className="section-title">
          <h2>Penghargaan</h2>
          <div className="line"></div>
        </div>
        <div className="awards-grid">
          {awards.map((award, index) => (
            <div key={index} className="award-card">
              <h3>{award.title}</h3>
              <p>{award.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="section-title">
          <h2>Kontak</h2>
          <div className="line"></div>
        </div>
        <div className="contact-content">
          <div className="contact-list">
            {contacts.map((contact, index) => (
              <div key={index} className="contact-item">
                <strong>{contact.label}:</strong>
                <a href={contact.link} target="_blank" rel="noopener noreferrer">{contact.value}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Daniel Imanuel Manafe. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
