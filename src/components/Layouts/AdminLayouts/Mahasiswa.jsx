import React from "react";
import { Calendar, Edit2, Trash2 } from "lucide-react";

function Mahasiswa() {
  return (
    <div className="h-auto relative pt-[70px] w-full">
      <div className="max-w-7xl px-8 mx-auto py-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Manajemen Data Mahasiswa</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <span>+</span>
              <span>Tambah Aktivitas</span>
            </button>
          </div>

          <div className="bg-white shadow rounded-lg p-6 mb-8 grid grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-600 mb-2">Status</label>
              <select className="w-full border rounded-md p-2">
                <option>Semua Status</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Institusi</label>
              <select className="w-full border rounded-md p-2">
                <option>Semua Institusi</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Periode Magang</label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="------ ----"
                  className="w-full border rounded-l-md p-2"
                />
                <button className="bg-gray-100 px-3 border-y border-r rounded-r-md">
                  <Calendar size={20} className="text-gray-500" />
                </button>
              </div>
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Pencarian</label>
              <input
                type="text"
                placeholder="Cari nama atau NIM"
                className="w-full border rounded-md p-2"
              />
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left">Mahasiswa</th>
                  <th className="p-4 text-left">NIM</th>
                  <th className="p-4 text-left">Institusi</th>
                  <th className="p-4 text-left">Periode Magang</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src="/api/placeholder/40/40"
                        alt="Student"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <div className="font-medium">Rehan Ramadhan</div>
                        <div className="text-gray-500 text-sm">
                          rehanramadhan@gmail.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">13 Jan 2024</td>
                  <td className="p-4">08:00:23</td>
                  <td className="p-4">17:00:23</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Aktif
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-500">
                        <Edit2 size={20} />
                      </button>
                      <button className="text-red-500">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="p-4 border-t flex items-center justify-between">
              <div className="text-gray-600">Showing 1 to 10 of 20 entries</div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border rounded text-gray-600">
                  Previous
                </button>
                <button className="px-3 py-1 border rounded bg-gray-100">
                  1
                </button>
                <button className="px-3 py-1 border rounded text-gray-600">
                  2
                </button>
                <button className="px-3 py-1 border rounded text-gray-600">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mahasiswa;
