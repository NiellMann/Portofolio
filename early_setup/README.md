# Portfolio Daniel Imanuel Manafe - Setup Guide

## Persyaratan Sistem

- **Node.js** versi 18 atau lebih tinggi
- **npm** (sudah termasuk dengan Node.js)
- **Git** untuk version control
- **Code Editor** (VS Code disarankan)

## Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/NiellMann/Portofolio.git
cd Portofolio
```

### 2. Install Dependencies

```bash
npm install
```

Command ini akan menginstall library berikut:

#### Dependencies (Produksi)
| Library | Versi | Deskripsi |
|---------|-------|-----------|
| react | ^18.2.0 | Framework UI utama |
| react-dom | ^18.2.0 | DOM renderer untuk React |

#### DevDependencies (Development)
| Library | Versi | Deskripsi |
|---------|-------|-----------|
| vite | ^5.0.0 | Build tool dan dev server |
| @vitejs/plugin-react | ^4.2.1 | Plugin Vite untuk React |

### 3. Struktur Project

```
Portofolio/
├── src/
│   ├── App.jsx          # Komponen utama portfolio
│   ├── index.css        # Semua styling
│   └── main.jsx         # Entry point
├── public/              # Assets publik
│   ├── assets_foto/     # Foto untuk portfolio
│   └── referensi/      # File PDF (CV, publikasi, dll)
├── early_setup/         # Dokumentasi setup
├── dist/               # Build production
├── node_modules/       # Dependencies (generated)
├── package.json        # Konfigurasi project
└── vite.config.js      # Konfigurasi Vite
```

## Menjalankan Project

### Mode Development

```bash
npm run dev
```

Akses di: http://localhost:5173/Portofolio/

### Build Production

```bash
npm run build
```

Output akan ada di folder `dist/`

### Preview Production Build

```bash
npm run preview
```

## Deployment ke GitHub Pages

Project ini sudah dikonfigurasi untuk auto-deploy ke GitHub Pages via GitHub Actions.

1. Push perubahan ke branch `main`
2. GitHub Actions akan otomatis build dan deploy
3. Website dapat diakses di: https://niellmann.github.io/Portofolio/

## Menambahkan Konten

### Menambah Milestone

Edit file `src/App.jsx`, cari array `milestones`:

```javascript
const milestones = [
  { year: '2024', month: 1, title: 'Judul Event', type: 'education' },
  // type: education | experience | project | award | organization | publication
]
```

### Menambah Proyek

Edit array `projects` di `src/App.jsx`:

```javascript
const projects = [
  {
    title: 'Nama Proyek',
    desc: 'Deskripsi proyek',
    tech: ['Tech1', 'Tech2'],
    link: 'https://link-proyek.com'
  }
]
```

### Mengubah Skills

Edit object `skills` di `src/App.jsx`:

```javascript
const skills = {
  hard: ['Skill1', 'Skill2', ...],
  software: ['Software1', ...],
  soft: ['SoftSkill1', ...]
}
```

## Styling

Semua styling ada di `src/index.css`. Beberapa fitur:

- **CSS Variables** - Untuk theming (warna, spacing, dll)
- **Animations** - Float, pulse, gradient, 3D transforms
- **Glassmorphism** - Efek glass blur pada cards
- **Responsive** - Media queries untuk berbagai layar

## Troubleshooting

### Port sudah digunakan
```bash
# Kill process di port 5173
npx kill-port 5173
# atau
npm run dev -- --port 3000
```

### Build error
```bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install
```

## Kontak

- Email: danielimanuelmanafe@mail.ugm.ac.id
- WhatsApp: 0881-1552-351
- LinkedIn: bit.ly/Niell_LinkedIn
- GitHub: github.com/NiellMann

## Lisensi

Copyright © 2024 Daniel Imanuel Manafe
