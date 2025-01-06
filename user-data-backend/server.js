const express = require('express');
const cors = require('cors');
const axios = require('axios'); // Menggunakan Axios untuk koneksi ke API eksternal

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json()); // Agar dapat membaca request body dalam format JSON

// Endpoint untuk registrasi (Proxy ke API eksternal)
app.post('/register', async (req, res) => {
    try {
        // Validasi input dari frontend
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Semua field harus diisi' });
        }

        // Kirim data ke API eksternal
        const response = await axios.post('http://demo-api.syaifur.io/api/register', {
            name,
            email,
            password,
        });

        // Kirimkan respon dari API eksternal kembali ke frontend
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error saat register:', error);

        // Tangani error dari API eksternal
        if (error.response) {
            return res.status(error.response.status).json({
                message: error.response.data.message || 'Terjadi kesalahan pada API eksternal',
            });
        }

        // Tangani error lain (misal: koneksi)
        res.status(500).json({ message: 'Terjadi kesalahan internal' });
    }
});

// Endpoint untuk login (Proxy ke API eksternal)
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email dan password harus diisi' });
        }

        // Kirim data ke API eksternal
        const response = await axios.post('http://demo-api.syaifur.io/api/login', {
            email,
            password,
        });

        // Kirimkan respon dari API eksternal kembali ke frontend
        res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error saat login:', error);

        // Tangani error dari API eksternal
        if (error.response) {
            return res.status(error.response.status).json({
                message: error.response.data.message || 'Terjadi kesalahan pada API eksternal',
            });
        }

        // Tangani error lain (misal: koneksi)
        res.status(500).json({ message: 'Terjadi kesalahan internal' });
    }
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});