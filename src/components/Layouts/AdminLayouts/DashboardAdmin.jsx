import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const weeklyData = [
  { day: "Senin", hadir: 21, izin: 2, absen: 1 },
  { day: "Selasa", hadir: 20, izin: 3, absen: 1 },
  { day: "Rabu", hadir: 22, izin: 2, absen: 0 },
  { day: "Kamis", hadir: 23, izin: 1, absen: 0 },
  { day: "Jumat", hadir: 20, izin: 3, absen: 1 },
];

const stats = [
  { title: "Total Mahasiswa Aktif", value: "24" },
  { title: "Kehadiran Hari Ini", value: "20" },
  { title: "Pengajuan Izin", value: "3" },
  { title: "Logbook Pending", value: "5" },
];

const getColorClass = (title) => {
  switch (title) {
    case "Total Mahasiswa Aktif":
      return "text-black";
    case "Kehadiran Hari Ini":
      return "text-green-500";
    case "Pengajuan Izin":
      return "text-yellow-500";
    case "Logbook Pending":
      return "text-yellow-500";
    default:
      return "text-gray-500";
  }
};

const DashboardAdmin = () => {
  return (
    <div className="h-auto relative pt-[70px]">
      <div className="mx-auto px-8 py-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium mb-4">
              Grafik Kehadiran Mingguan
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="hadir" stroke="#10B981" />
                  <Line type="monotone" dataKey="izin" stroke="#F59E0B" />
                  <Line type="monotone" dataKey="absen" stroke="#EF4444" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center mt-4 space-x-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Hadir</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Izin</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Absen</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium mb-4">Status Logbook</h3>
            <div className="flex justify-center items-center h-64">
              <div className="relative w-48 h-48">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeDasharray="75, 100"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="3"
                    strokeDasharray="15, 100"
                    strokeDashoffset="-75"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="3"
                    strokeDasharray="10, 100"
                    strokeDashoffset="-90"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-center space-x-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Approved</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Pending</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Rejected</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium mb-4">Aktifitas Terbaru</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full"></div>
              <div>
                <h4 className="text-sm font-medium">Logbook Baru</h4>
                <p className="text-sm text-gray-500">
                  Ahmad Rifqi mengajukan logbook baru
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-100 rounded-full"></div>
              <div>
                <h4 className="text-sm font-medium">Absensi Masuk</h4>
                <p className="text-sm text-gray-500">
                  Ahmad Rifqi melakukan absensi masuk
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-full"></div>
              <div>
                <h4 className="text-sm font-medium">Pengajuan Izin</h4>
                <p className="text-sm text-gray-500">
                  Ahmad Rifqi mengajukan logbook baru
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
