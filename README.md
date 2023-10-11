# Assignment 2

Buatlah server Rest API menggunakan express.js dengan implementasi JWT

**Sumber data:**
1. teachers.json
```json
[
    {
        "id": 1, 
        "first_name": "Bambang",
        "last_name": "Suprapto",
        "email": "bambangsuprapto@kode.id",
        "gender": "male"
    },
    {
        "id": 2, 
        "first_name": "Rukmana",
        "last_name": "Fatmawati",
        "email": "rukmanafatmawati@kode.id",
        "gender": "female"
    },
    {
        "id": 3, 
        "first_name": "Butet",
        "last_name": "Naiborhu",
        "email": "butetnaiborhu@kode.id",
        "gender": "female"
    },
    {
        "id": 4, 
        "first_name": "Yulius",
        "last_name": "Prawiranegara",
        "email": "yuliusprawiranegara@kode.id",
        "gender": "male"
    }
]
```
2. users.json
```json
[
  {
    "id": 1,
    "username": "john_doe",
    "password": "rahasia"
  }
]
```
#
## Cara Menggunakan

### 1. Instalasi

1. Clone repositori ini: git clone https://github.com/restuoktafiandi/assignment2_restuoktafiandi.git 
2. Beralih ke direktori proyek: cd nama-repositori
3. Instal dependensi: 
```
npm install
```

### 2. Konfigurasi

Sebelum mulai, pastikan mengatur konfigurasinya.

### 3. Menjalankan Proyek

1. Jalankan proyek: 
```
npm start
```
atau development
```
npm run start-dev
```
2. Akses aplikasi melalui: http://localhost:3000/login

### 4. Generate Token JWT

1. Gunakan Postman atau alat sejenis.
2. Buat permintaan POST ke http://localhost:3000/login
3. Kirimkan informasi login dalam badan permintaan (username, password).
4. Salin token JWT dari respons.

### 5. Menggunakan Token JWT

1. Untuk permintaan yang memerlukan token, atur header dengan Authorization: Bearer [token].
2. Kirim permintaan sesuai yang dibutuhkan  GET ke http://localhost:3000/teachers