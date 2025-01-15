import React from "react";
import { Calendar, Info, X, FolderDown } from "lucide-react";

function ManagementAbsen() {
  const stats = [
    { title: "Total Mahasiswa", value: "24" },
    { title: "Hadir", value: "20" },
    { title: "Izin", value: "3" },
    { title: "Alpha", value: "5" },
  ];

  const attendanceData = [
    {
      name: "Rehan Ramadhan",
      date: "13 Jan 2024",
      checkIn: "08:00:23",
      checkOut: "17:00:23",
      status: "Hadir",
    },
  ];

  const getColorClass = (title) => {
    switch (title) {
      case "Total Mahasiswa":
        return "text-black";
      case "Hadir":
        return "text-green-500";
      case "Izin":
        return "text-yellow-500";
      case "Alpha":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="h-auto relative pt-[70px]">
      <div className="mx-auto px-8 py-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Manajemen Absensi</h1>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <FolderDown size={20} />
            <span>Export Data</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-600 mb-2">{stat.title}</h3>
              <p className={`text-3xl font-bold ${getColorClass(stat.title)}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

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
              <label className="block text-gray-600 mb-2">
                Status Kehadiran
              </label>
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

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4">Mahasiswa</th>
                <th className="text-left p-4">Tanggal</th>
                <th className="text-left p-4">Waktu Masuk</th>
                <th className="text-left p-4">Waktu Keluar</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((record, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <div>
                        <div className="font-medium">{record.name}</div>
                        <div className="text-gray-500 text-sm">
                          {record.date}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">{record.date}</td>
                  <td className="p-4">{record.checkIn}</td>
                  <td className="p-4">{record.checkOut}</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {record.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <Info size={20} />
                      </button>
                      <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                        <X size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 border-t">
            <div className="flex items-center justify-between">
              <div className="text-gray-600">Showing 1 to 10 of 20 entries</div>
              <div className="flex gap-2">
                <button className="px-4 py-2 border rounded hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 py-2 border rounded bg-gray-50">
                  1
                </button>
                <button className="px-4 py-2 border rounded hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 border rounded hover:bg-gray-50">
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

export default ManagementAbsen;
