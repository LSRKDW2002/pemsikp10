import React from 'react';

function Table({ mahasiswaList = [], onEdit = () => {}, onDelete = () => {} }) {
  return (
    <table className="table-auto w-full bg-white shadow-md rounded-md">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">No</th>
          <th className="border px-4 py-2">NIM</th>
          <th className="border px-4 py-2">Nama</th>
          <th className="border px-4 py-2">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {mahasiswaList.length === 0 ? (
          <tr>
            <td colSpan="4" className="text-center py-4">Tidak ada data mahasiswa</td>
          </tr>
        ) : (
          mahasiswaList.map((mahasiswa, index) => (
            <tr key={mahasiswa.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{mahasiswa.nim}</td>
              <td className="border px-4 py-2">{mahasiswa.nama}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2"
                  onClick={() => onEdit(mahasiswa.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-md"
                  onClick={() => onDelete(mahasiswa.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default Table;
