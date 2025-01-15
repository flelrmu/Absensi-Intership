import React from "react";
import { Calendar} from "lucide-react";

function FilterIntership() {
  return (
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
  );
}

export default FilterIntership;
