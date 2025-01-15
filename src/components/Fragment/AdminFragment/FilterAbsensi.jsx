import React from "react";
import { Calendar } from "lucide-react";

function FilterAbsensi() {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-600 mb-2">Tanggal</label>
          <div className="relative">
            <input
              type="text"
              placeholder="mm/dd/yyyy"
              className="w-full p-2 border rounded-lg pr-10"
            />
            <Calendar
              className="absolute right-3 top-2.5 text-gray-400"
              size={20}
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-600 mb-2">Status Kehadiran</label>
          <select className="w-full p-2 border rounded-lg">
            <option>Semua Status</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-600 mb-2">Mahasiswa</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Cari nama atau NIM"
              className="flex-1 p-2 border rounded-lg"
            />
            <button className="bg-gray-400 text-white px-8 py-2 rounded-lg">
              Cari
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterAbsensi;
