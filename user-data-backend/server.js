// server.js (Backend Express)
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json()); // Agar bisa membaca data JSON dari request body

// Endpoint untuk menyimpan data user
app.post("/register", (req, res) => {
    const newUser = req.body;
  
    // Baca file JSON
    fs.readFile(DATA_FILE, "utf8", (err, data) => {
      if (err) {
        console.error("Gagal membaca file:", err);
        return res.status(500).json({ error: "Gagal membaca data" });
      }
  
      const users = data ? JSON.parse(data) : [];
      users.push(newUser);
  
      // Simpan kembali ke file JSON
      fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2), (err) => {
        if (err) {
          console.error("Gagal menyimpan file:", err);
          return res.status(500).json({ error: "Gagal menyimpan data" });
        }
        res.status(201).json({ message: "User berhasil disimpan" });
      });
    });
  });
  
// Endpoint untuk login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Membaca data pengguna dari file JSON
  const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json')));

  // Menemukan user yang cocok dengan email dan password
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Jika user ditemukan, login berhasil
    res.status(200).json({ message: 'Login berhasil', user });
  } else {
    // Jika user tidak ditemukan
    res.status(401).json({ message: 'Email atau password salah' });
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
