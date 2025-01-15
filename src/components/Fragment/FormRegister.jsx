import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import Button from "../Elements/Button/Button";

function FormRegister() {
  const [formData, setFormData] = useState({
    nama: "",
    nim: "",
    email: "",
    telepon: "",
    tanggalMasuk: "",
    tanggalKeluar: "",
    institusi: "",
    jenisKelamin: "",
    alamat: "",
    kataSandi: "",
    konfirmasiKataSandi: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Nama</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md shadow-sm"
            value={formData.nama}
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">NIM</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md shadow-sm"
            value={formData.nim}
            onChange={(e) => setFormData({ ...formData, nim: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded-md shadow-sm"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Nomor Telepon</label>
          <input
            type="tel"
            className="w-full p-2 border rounded-md shadow-sm"
            value={formData.telepon}
            onChange={(e) =>
              setFormData({ ...formData, telepon: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Tanggal Masuk</label>
          <div className="relative">
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              className="w-full p-2 border rounded-md shadow-sm"
              value={formData.tanggalMasuk}
              onChange={(e) =>
                setFormData({ ...formData, tanggalMasuk: e.target.value })
              }
            />
            <Calendar className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Tanggal Keluar</label>
          <div className="relative">
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              className="w-full p-2 border rounded-md shadow-sm"
              value={formData.tanggalKeluar}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  tanggalKeluar: e.target.value,
                })
              }
            />
            <Calendar className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Institusi</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md shadow-sm"
            value={formData.institusi}
            onChange={(e) =>
              setFormData({ ...formData, institusi: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Jenis Kelamin</label>
          <select
            className="w-full p-2 border rounded-md shadow-sm bg-white"
            value={formData.jenisKelamin}
            onChange={(e) =>
              setFormData({ ...formData, jenisKelamin: e.target.value })
            }
          >
            <option value="">Pilih Jenis Kelamin</option>
            <option value="L">Laki-laki</option>
            <option value="P">Perempuan</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Alamat</label>
          <textarea
            className="w-full p-2 border rounded-md shadow-sm h-24"
            value={formData.alamat}
            onChange={(e) =>
              setFormData({ ...formData, alamat: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Kata Sandi</label>
          <input
            type="password"
            className="w-full p-2 border rounded-md shadow-sm"
            value={formData.kataSandi}
            onChange={(e) =>
              setFormData({ ...formData, kataSandi: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            Konfirmasi Kata Sandi
          </label>
          <input
            type="password"
            className="w-full p-2 border rounded-md shadow-sm"
            value={formData.konfirmasiKataSandi}
            onChange={(e) =>
              setFormData({
                ...formData,
                konfirmasiKataSandi: e.target.value,
              })
            }
          />
        </div>
      </div>

      <div className="col-span-full flex justify-between items-center mt-6">
        <Link to="/login" className="text-sm text-gray-600 hover:underline">
          Sudah ada akun?
        </Link>
        <Button variant="bg-black hover:bg-gray-800">Daftar</Button>
      </div>
    </form>
  );
}

export default FormRegister;
