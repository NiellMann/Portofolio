import React, { useState, useEffect, useRef } from 'react'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const sectionRefs = useRef([])
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    
    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })
    
    return () => observer.disconnect()
  }, [])
  
  const experience = [
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
      title: 'Head of Khageswara Technology Development',
      company: 'GAMAFORCE - Gadjah Mada Flying Object Research Center',
      date: 'Desember 2024 - Desember 2025',
      duties: [
        'Memimpin pengembangan sistem elektronik dan kontrol pesawat VTOL Plane Quadcopter',
        'Mengatur integrasi mekatronika dan jadwal teknis tim divisi Technology Development',
        'Bertanggung jawab atas arah teknis dan pencapaian performa UAV dalam kompetisi KRTI',
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
      title: 'Student Trainee & Media Social Designer',
      company: 'Robotik Academy',
      date: 'Agustus 2023 - Januari 2024',
      duties: [
        'Mengelola Instagram resmi dan mengajar Scratch dan Tinkercad',
        'Menggabungkan kreativitas digital dengan pengajaran dasar pemrograman anak',
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
    {
      title: 'Production Helper',
      company: 'PT Prakarsa Alam Segar (Mie Sedaap)',
      date: 'Juli 2021 - Oktober 2021',
      duties: [
        'Menyiapkan instalasi, konfigurasi dan penyesuaian ke produksi mesin di line conditioning 2 produk mie kering',
        'Setup dan pengecekan wiring panel dan mesin produksi',
      ]
    },
  ]

  const projects = [
    {
      title: 'OTS Petrokimia Gresik - PKG',
      desc: 'Operator Training Simulator (OTS) adalah sistem simulasi untuk melatih operator dalam mengoperasikan proses produksi Asam Phosfat. Dibuat menggunakan HMI dengan antarmuka yang realistis.',
      tech: ['OTS', 'HMI', 'Asam Phosfat', 'Industrial Automation'],
      link: ''
    },
    {
      title: 'OTS Pupuk Kujang - PKC',
      desc: 'Operator Training Simulator (OTS) adalah sistem simulasi untuk melatih operator dalam mengoperasikan proses produksi Ammonia. Dibuat menggunakan HMI dengan antarmuka yang realistis.',
      tech: ['OTS', 'HMI', 'Ammonia', 'Industrial Automation'],
      link: ''
    },
    {
      title: 'VTOL Plane Quadcopter',
      desc: 'Pengembangan sistem elektronik dan kontrol pesawat VTOL Plane Quadcopter untuk kompetisi KRTI.',
      tech: ['VTOL', 'UAV', 'Flight Control']
    },
    {
      title: 'Urban Portable Agriculture (UPA) Berbasis IoT',
      desc: 'Sistem pertanian hidroponik vertikal berbasis IoT dengan sensor pH dan kekeruhan, kontrol LED otomatis, dan dashboard real-time. Validasi teknis menunjukkan akurasi sensor pH ±0.1.',
      tech: ['ESP32', 'IoT', 'Sensor pH', 'DBSCAN'],
      link: 'https://jurnal.unismuhpalu.ac.id/index.php/JKS/article/view/8560'
    },
    {
      title: 'My Heavy Equipment - Aplikasi IoT',
      desc: 'Layanan informasi riwayat perbaikan pada alat berat berbasis Internet of Things. Terdaftar di HKI dengan nomor pencatatan 000535480.',
      tech: ['IoT', 'Heavy Equipment', 'Monitoring'],
      hki: 'EC002023102525'
    },
    {
      title: 'Monitoring Watch Cardiovascular - PKM KC',
      desc: 'Desain PCB dengan KiCAD 8.0 dan pengujian sensor detak jantung. Merancang prototipe wearable kesehatan untuk penderita kardiovaskular.',
      tech: ['KiCAD', 'Sensor ECG', 'Embedded System']
    },
    {
      title: 'Edgytech Flathouse - PKM VGK',
      desc: 'Sistem monitoring energi terbarukan untuk rumah susun dengan penelitian pemanfaatan energi alternatif pada hunian vertikal ramah lingkungan.',
      tech: ['Renewable Energy', 'Smart Grid', 'Monitoring']
    },
  ]

  const publications = [
    {
      title: 'My Heavy Equipment: Layanan Informasi Riwayat Perbaikan Pada Alat Berat Berbasis IoT',
      journal: 'Hak Kekayaan Intelektual (HKI)',
      date: 'Oktober 2023',
      pdf: '/Portofolio/referensi/HKI Aplikasi.pdf',
      role: 'Pencipta'
    },
    {
      title: 'Buku Belajar Robotika Menggunakan Simulator Webots',
      journal: 'ISBN : 9786340117189',
      date: '2025',
      link: 'https://sinta.kemdiktisaintek.go.id/departments/profile/384/8ED1D0CE-F122-4B37-A849-25F81B335395/0D263481-33FB-4FFE-BE55-52E20DF4924F/?view=books',
      purchase: 'https://id.shp.ee/o9iLLET1',
      role: 'Co-Author'
    },
    {
      title: 'Sistem Urban Portable Agriculture Berbasis IoT',
      journal: 'Jurnal Kolaboratif Sains',
      date: 'November 2025',
      link: 'https://jurnal.unismuhpalu.ac.id/index.php/JKS/article/view/8560',
      role: 'Co-Author'
    },
    {
      title: 'Pengaruh Kenaikan PPN dan Inflasi Terhadap Volume Penjualan',
      journal: 'Dharma Ekonomi',
      date: 'Mei 2026',
      link: 'https://ejournals.stiedharmaputra-smg.ac.id/index.php/DE/article/view/386',
      role: 'Co-Author'
    },
  ]

  const news = [
    {
      title: 'Mine-Eye Gama - Astranauts 2024',
      category: 'Prestasi Lomba',
      links: [
        { text: 'UGM News', url: 'https://ugm.ac.id/en/news/mine-eye-gama-team-wins-2nd-place-in-astranauts-2024/' },
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
      title: 'Edgytech Flathouse',
      category: 'Inovasi Mahasiswa',
      links: [
        { text: 'UGM News', url: 'https://ugm.ac.id/id/berita/edgytech-flathouse-inovasi-untuk-optimalisasi-potensi-energi-rumah-susun/' },
      ]
    },
    {
      title: 'KRTI - Kontes Robot Terbang Indonesia',
      category: 'Prestasi Lomba',
      links: [
        { text: 'DTEDI SV UGM', url: 'https://tedi.sv.ugm.ac.id/id/2025/10/27/mahasiswa-dtedi-sekolah-vokasi-ugm-berprestasi-di-ajang-kontes-robot-terbang-indonesia-krti-2025/' },
      ]
    },
  ]

  const skills = {
    hard: ['AVEVA Intouch', 'KiCAD', 'Fusion360', 'Arduino', 'ESP32', 'MATLAB', 'Python', 'C/C++', 'Figma'],
    software: ['Labview', 'Microsoft Office'],
    soft: ['Kepemimpinan', 'Problem Solving', 'Adaptasi Cepat', 'Komunikasi Efektif', 'Kolaborasi Tim']
  }

  const awards = [
    { title: 'Juara 1 Divisi Technology Development', event: 'KRTI (Kontes Robot Terbang Indonesia)' },
    { title: 'Juara Harapan 1 SoTech', event: 'PT Pertamina Patra Niaga' },
    { title: 'Juara 2 Astranauts 2024', event: 'PT Astra Digital Internasional' },
    { title: 'Finalis PIMNAS 36', event: 'KEMENDIKBUDRISTEK' },
  ]

  const education = [
    {
      school: 'Universitas Gadjah Mada',
      degree: 'Teknologi Rekayasa Instrumentasi dan Kontrol',
      year: '2022 - Sekarang',
      gpa: 'GPA: 3.77 / 4.00'
    },
    {
      school: 'SMKN 1 Tambelang, Bekasi',
      degree: 'Teknik Komputer dan Jaringan',
      year: '2018 - 2021',
      gpa: 'GPA: 82.6 / 100.0'
    },
  ]

  const milestones = [
    { year: '2018', month: 7, title: 'SMKN 1 Tambelang - Mulai Pendidikan', type: 'education' },
    { year: '2019', month: 6, title: 'Magang PT Dharma ControlCable - Quality Control', type: 'experience' },
    { year: '2021', month: 5, title: 'Lulus SMKN 1 Tambelang', type: 'education' },
    { year: '2021', month: 7, title: 'PT Prakarsa Alam Segar - Production Helper', type: 'experience' },
    { year: '2021', month: 10, title: 'PT Asatama Teknologi Terpadu - Network Engineer', type: 'experience' },
    { year: '2022', month: 8, title: 'Masuk UGM - Teknologi Rekayasa Instrumentasi dan Kontrol', type: 'education' },
    { year: '2022', month: 9, title: 'UKK CUP - Humasi & IT', type: 'organization' },
    { year: '2023', month: 2, title: 'PMK Sekolah Vokasi - Koordinator Media', type: 'organization' },
    { year: '2023', month: 3, title: 'ExcellencIA Learning Center - Video Editor', type: 'experience' },
    { year: '2023', month: 4, title: 'PKM VGK - Edgytech Flathouse', type: 'project' },
    { year: '2023', month: 5, title: 'Gelanggang Expo & UKK CUP - IT Staff', type: 'organization' },
    { year: '2023', month: 8, title: 'Robotik Academy - Student Trainee', type: 'experience' },
    { year: '2023', month: 8, title: 'Dialog Lintas Agama UGM - Koordinator Media', type: 'organization' },
    { year: '2023', month: 2, title: 'PKM KC - Monitoring Watch Cardiovascular', type: 'project' },
    { year: '2023', month: 12, title: 'GAMAFORCE - Electronic Engineer', type: 'experience' },
    { year: '2024', month: 1, title: 'OTS Petrokimia Gresik - HMI Engineer', type: 'project' },
    { year: '2024', month: 3, title: 'OTS Pupuk Kujang - HMI Engineer', type: 'project' },
    { year: '2024', month: 8, title: 'Juara Harapan 1 SoTech 2024', type: 'award' },
    { year: '2024', month: 8, title: 'Finalis PIMNAS 36', type: 'award' },
    { year: '2024', month: 9, title: 'Pusat Kajian LKFT UGM - Automation Engineer', type: 'experience' },
    { year: '2024', month: 10, title: 'My Heavy Equipment - HKI', type: 'project' },
    { year: '2024', month: 10, title: 'Juara 2 Astranauts 2024', type: 'award' },
    { year: '2024', month: 10, title: 'Juara 1 Divisi Technology Development - KRTI', type: 'award' },
    { year: '2024', month: 12, title: 'GAMAFORCE - Head of Khageswara Division', type: 'experience' },
    { year: '2025', month: 1, title: 'Urban Portable Agriculture - Publikasi Jurnal', type: 'publication' },
    { year: '2026', month: 7, title: 'Lulus Universitas Gadjah Mada (Prediksi)', type: 'education' },
  ]

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  const getMonthName = (month) => monthNames[month - 1]

  const sortedMilestones = [...milestones].sort((a, b) => {
    if (a.year !== b.year) return parseInt(a.year) - parseInt(b.year)
    return a.month - b.month
  })

  const contacts = [
    { label: 'Email', value: 'danielimanuelmanafe@mail.ugm.ac.id', link: 'mailto:danielimanuelmanafe@mail.ugm.ac.id' },
    { label: 'WhatsApp', value: '0881-1552-351', link: 'https://wa.me/628811552351' },
    { label: 'LinkedIn', value: 'bit.ly/Niell_LinkedIn', link: 'https://bit.ly/Niell_LinkedIn' },
    { label: 'GitHub', value: 'github.com/NiellMann', link: 'https://github.com/NiellMann' },
  ]

  const organizations = [
    {
      title: 'Koordinator Media',
      organization: 'PMK Sekolah Vokasi',
      date: 'Februari 2023 - Februari 2024',
    },
    {
      title: 'Media Staff',
      organization: 'UKK (Unit Kerohanian Kristen)',
      date: 'Februari 2023 - Februari 2024',
    },
    {
      title: 'Koordinator Media',
      organization: 'Dialog Lintas Agama UGM',
      date: 'Agustus 2023 - Oktober 2023',
    },
    {
      title: 'IT Staff',
      organization: 'Gelanggang Expo & UKK CUP',
      date: 'Mei 2023 - Agustus 2023',
    },
    {
      title: 'Humas & IT',
      organization: 'UKK CUP',
      date: 'September 2022 - November 2023',
    },
  ]

  const colors = ['#58a6ff', '#3fb950', '#f85149', '#d29922', '#a371f7', '#f778ba', '#79c0ff', '#7ee787']
  
  const getColor = (index) => colors[index % colors.length]

  return (
    <>
      {/* Particle Background */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <div className="header-left">
            <img src="/Portofolio/assets_foto/logo/profile_photo.jpg" alt="Profile" className="header-avatar" />
            <nav className="header-nav">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#publications">Publications</a>
              <a href="#milestone">My Timeline</a>
              <a href="#news">News</a>
            </nav>
          </div>
          <div className="header-left">
        </div>
      </header>

      <main>
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar-container">
            <img src="/Portofolio/assets_foto/logo/profile_photo.jpg" alt="Profile" className="profile-avatar" />
          </div>
          <div className="profile-info">
            <h1>Daniel Imanuel Manafe</h1>
            <p className="username">Instrumentation & Control Engineering</p>
            <p>
              Automation, Instrumentation & UAV Control Enthusiast 
            </p>
            <div className="profile-stats">
              <a href="#">
                <svg height="16" viewBox="0 0 16 16" width="16"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path></svg>
              3.7+ Years Experience
              </a>
              <a href="#">
                <svg height="16" viewBox="0 0 16 16" width="16"><path d="M5.5 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-2 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path></svg>
              10+ Projects
              </a>
              <a href="#">
                <svg height="16" viewBox="0 0 16 16" width="16"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"></path></svg>
                Yogyakarta, Indonesia
              </a>
              <a href="/Portofolio/referensi/CV_Daniel Imanuel Manafe.pdf" download>
                <svg height="16" viewBox="0 0 16 16" width="16"><path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M11.78 4.72a.749.749 0 0 1-.02 1.06L8.53 8.97a.75.75 0 0 1-1.06 0L4.24 5.78a.749.749 0 0 1 .02-1.06.749.749 0 0 1 1.06.02L7.25 6.69V1.75a.75.75 0 0 1 1.5 0v4.94l1.93-1.95a.749.749 0 0 1 1.06-.02h.04Z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <a href="#about" className="tab">
            <svg height="16" viewBox="0 0 16 16" width="16"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"></path></svg>
            About
          </a>
          <a href="#experience" className="tab">
            <svg height="16" viewBox="0 0 16 16" width="16"><path d="M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Zm8 0a.75.75 0 0 1 .75.75v2.75h2.75a.75.75 0 0 1 0 1.5h-2.75v2.75a.75.75 0 0 1-1.5 0v-2.75h-2.75a.75.75 0 0 1 0-1.5h2.75v-2.75A.75.75 0 0 1 9.5 8Z"></path></svg>
            Experience
          </a>
          <a href="#projects" className="tab">
            <svg height="16" viewBox="0 0 16 16" width="16"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324l.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5V9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path></svg>
            Projects
          </a>
          <a href="#publications" className="tab">
            <svg height="16" viewBox="0 0 16 16" width="16"><path d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25H14.25a.25.25 0 0 0 .25-.25Zm4.5.25a.25.25 0 0 0-.25.25v8.5a.25.25 0 0 0 .25.25h5.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25Z"></path></svg>
            Publications
          </a>
        </div>

        {/* About */}
        <section id="about" className="about-section">
            <h2>
              <svg height="20" viewBox="0 0 16 16" width="20"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"></path></svg>
              About Me
            </h2>
          <p>
            Saya adalah mahasiswa tingkat akhir di Universitas Gadjah Mada Program Studi 
            Teknologi Rekayasa Instrumentasi dan Kontrol dengan GPA 3.77/4.00. 
            Saya memiliki minat besar di bidang otomasi industri, sistem kontrol, 
            dan teknologi UAV (Unmanned Aerial Vehicle).
          </p>
          <p>
            Dengan pengalaman berbagai proyek industri dan kompetisi tingkat nasional, 
            saya telah mengembangkan keahlian dalam perancangan sistem elektronik, 
            pemrograman mikrokontroller, serta desain HMI untuk simulasi pelatihan operator. 
            Saya aktif berpartisipasi dalam organisasi kemahasiswaan dan telah 
            memperoleh prestasi di berbagai event.
          </p>
          
          <div style={{ marginTop: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Technical Skills</h3>
            <div className="skill-tags" style={{ marginBottom: '16px' }}>
              {skills.hard.map((s, i) => <span key={i} className="skill-tag">{s}</span>)}
            </div>
          </div>
        </section>

        {/* Education */}
        <section style={{ marginTop: '32px' }}>
          <div className="section-header">
            <h2 className="section-title">Education</h2>
          </div>
          <div className="education-grid">
            {education.map((edu, i) => (
              <div key={i} className="education-card">
                <h3>{edu.school}</h3>
                <p className="degree">{edu.degree}</p>
                <p className="date">{edu.year}</p>
                <p className="gpa">{edu.gpa}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" style={{ marginTop: '32px' }}>
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
          </div>
          <div className="experience-list">
            {experience.map((exp, i) => (
              <div key={i} className="experience-card">
                <h3>{exp.title}</h3>
                <p className="company">{exp.company}</p>
                <p className="date">{exp.date}</p>
                <ul>
                  {exp.duties.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>
            ))}
            )}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" style={{ marginTop: '32px' }}>
          <div className="section-header">
            <h2 className="section-title">Projects</h2>
          </div>
          <div className="repo-grid">
            {projects.map((proj, i) => (
              <div key={i} className="repo-card">
                <div className="repo-top">
                  <span className="repo-name">
                    <a href="#">{proj.title}</a>
                  </span>
                  <span className="repo-visibility">{proj.title.includes('OTS') ? 'Private' : 'Public'}</span>
                </div>
                <p className="repo-description">{proj.desc}</p>
                <div className="repo-stats">
                  {proj.tech.map((t, j) => (
                    <span key={j}><span className="language-color" style={{ background: getColor(j) }}></span> {t}</span>
                  ))}
                </div>
              </div>
            ))}
            )}
          </div>
        </section>

        {/* Publications */}
        <section id="publications" style={{ marginTop: '32px' }}>
          <div className="section-header">
            <h2 className="section-title">Publications</h2>
          </div>
          <div className="publications-grid">
            {publications.map((pub, i) => (
              <div key={i} className="publication-card">
                <h3>{pub.title}</h3>
                <p className="category">{pub.journal}</p>
                <p className="meta">{pub.date} | {pub.role}</p>
                <div className="item-links">
                  {pub.pdf && <a href={pub.pdf} target="_blank">View PDF</a>}
                  {pub.link && <a href={pub.link} target="_blank">{pub.journal.includes('ISBN') ? 'Book Link' : 'Journal Link'}</a>}
                  {pub.purchase && <a href={pub.purchase} target="_blank">Beli Buku</a>}
                </div>
              </div>
            ))}
            )}
          </div>
        </section>

        {/* News */}
        <section id="news" style={{ marginTop: '32px' }}>
          <div className="section-header">
            <h2 className="section-title">News</h2>
          </div>
          <div className="news-grid">
            {news.map((item, i) => (
              <div key={i} className="news-card">
                <h3>{item.title}</h3>
                <p className="category">{item.category}</p>
                <div className="item-links">
                  {item.links.map((link, j) => (
                    <a key={j} href={link.url} target="_blank">{link.text}</a>
                  ))}
                </div>
              </div>
            ))}
            )}
          </div>
        </section>

        {/* Awards */}
        <section style={{ marginTop: '32px' }}>
          <div className="section-header">
            <h2 className="section-title">Awards</h2>
          </div>
          <div className="awards-grid">
            {awards.map((award, i) => (
              <div key={i} className="award-card">
                <h3>{award.title}</h3>
                <p>{award.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Organizations */}
        <section style={{ marginTop: '32px' }}>
          <div className="section-header">
            <h2 className="section-title">Organizations</h2>
          </div>
          <div className="organizations-grid">
            {organizations.map((org, i) => (
              <div key={i} className="organization-card">
                <h3>{org.title}</h3>
                <p className="category">{org.organization}</p>
                <p className="meta">{org.date}</p>
              </div>
            ))}
            )}
          </div>
        </section>

        {/* Milestone - Horizontal Timeline */}
        <section id="milestone" className="milestone-section" style={{ marginTop: '32px' }}>
          <div className="section-header">
            <h2 className="section-title">My Timeline</h2>
          </div>
          
          <div className="timeline-container">
            <div className="timeline-line"></div>
            {[...sortedMilestones, ...sortedMilestones].map((m, i) => (
              <div 
                key={i} 
                className={`milestone-node milestone-${m.type} ${i % 2 === 0 ? 'above' : 'below'}`}
                style={{ animationDelay: `${(i % sortedMilestones.length) * 0.1}s` }}
              >
                <div className="milestone-card">
                  <div className="milestone-date">
                    <span className="month">{getMonthName(m.month)}</span>
                    <span className="year">{m.year}</span>
                  </div>
                  <div className="milestone-content">
                    <p>{m.title}</p>
                  </div>
                </div>
                <div className="node-point"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section style={{ marginTop: '32px' }}>
          <div className="contact-section">
            <h2>
              <svg height="20" viewBox="0 0 16 16" width="20"><path d="M0 4.75C0 3.784.784 3 1.75 3h12.5c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 14.25 13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-6.5a.25.25 0 0 0-.25-.25ZM3.5 6.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"></path></svg>
              Contact
            </h2>
            <div className="contact-icons">
              <a href="mailto:danielimanuelmanafe@mail.ugm.ac.id" target="_blank" className="contact-icon-btn" title="Email">
                <svg height="24" viewBox="0 0 24 24" width="24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
              <a href="https://wa.me/628811552351" target="_blank" className="contact-icon-btn" title="WhatsApp">
                <svg height="24" viewBox="0 0 24 24" width="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="https://bit.ly/Niell_LinkedIn" target="_blank" className="contact-icon-btn" title="LinkedIn">
                <svg height="24" viewBox="0 0 24 24" width="24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://github.com/NiellMann" target="_blank" className="contact-icon-btn" title="GitHub">
                <svg height="24" viewBox="0 0 16 16" width="24" fill="currentColor"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.87-1.34-.84-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2024 Daniel Imanuel Manafe. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
