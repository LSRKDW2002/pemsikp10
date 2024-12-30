import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Table from '../../components/Table';
import Swal from 'sweetalert2';
import axios from 'axios';

function Mahasiswa() {
  const [mahasiswaList, setMahasiswaList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNim, setNewNim] = useState('');
  const [newNama, setNewNama] = useState('');
  const [editId, setEditId] = useState(null);

  // Fetch data from JSONPlaceholder
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const fetchedData = response.data.map((user) => ({
          id: user.id,
          nim: user.username, // Simulating NIM with username
          nama: user.name,
          umur: Math.floor(Math.random() * (25 - 18 + 1)) + 18 // Random age between 18-25
        }));
        setMahasiswaList(fetchedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        Swal.fire('Error', 'Gagal mengambil data dari server', 'error');
      });
  }, []);

  const openModal = (id = null) => {
    if (id !== null) {
      const mahasiswa = mahasiswaList.find((m) => m.id === id);
      setNewNim(mahasiswa.nim);
      setNewNama(mahasiswa.nama);
      setEditId(id);
    } else {
      setNewNim('');
      setNewNama('');
      setEditId(null);
    }
    setModalVisible(true);
  };

  const closeModal = () => {
    setNewNim('');
    setNewNama('');
    setEditId(null);
    setModalVisible(false);
  };

  const handleSave = () => {
    if (editId !== null) {
      setMahasiswaList(
        mahasiswaList.map((m) => (m.id === editId ? { ...m, nim: newNim, nama: newNama } : m))
      );
    } else {
      const newMahasiswa = {
        id: mahasiswaList.length + 1,
        nim: newNim,
        nama: newNama,
        umur: 20
      };
      setMahasiswaList([...mahasiswaList, newMahasiswa]);
    }
    closeModal();
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Data ini akan dihapus!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Hapus'
    }).then((result) => {
      if (result.isConfirmed) {
        setMahasiswaList(mahasiswaList.filter((mahasiswa) => mahasiswa.id !== id));
        Swal.fire('Dihapus!', 'Data mahasiswa berhasil dihapus.', 'success');
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="font-bold text-2xl">DAFTAR MAHASISWA</h2>
      <Button
        style="bg-green-500 text-white rounded-md px-2 py-1 mb-2"
        text="Tambah Mahasiswa"
        onClick={() => openModal()}
      />
      <Table mahasiswaList={mahasiswaList} onEdit={openModal} onDelete={confirmDelete} />

      {/* Modal for Add/Edit Mahasiswa */}
      {modalVisible && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md w-1/3">
            <h2 className="text-xl font-bold mb-4">{editId ? 'Edit Mahasiswa' : 'Tambah Mahasiswa'}</h2>

            <label className="block mb-2">NIM:</label>
            <input
              type="text"
              value={newNim}
              onChange={(e) => setNewNim(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 mb-4"
            />

            <label className="block mb-2">Nama:</label>
            <input
              type="text"
              value={newNama}
              onChange={(e) => setNewNama(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 mb-4"
            />

            <div className="flex justify-end space-x-2">
              <Button style="bg-gray-500 text-white rounded-md px-2 py-1" text="Batal" onClick={closeModal} />
              <Button style="bg-blue-500 text-white rounded-md px-2 py-1" text="Simpan" onClick={handleSave} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mahasiswa;