import React, { useState } from "react";
import { Camera } from "lucide-react";

function FormProfile() {
  const [profileData, setProfileData] = useState({
    fullName: "Ahmad Fauzi",
    email: "ahmadfauzi@gmail.com",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log("Profile updated:", profileData);
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    // Handle password update logic here
    console.log("Password updated");
  };

  return (
    <div className="bg-white rounded-lg shadow p-8">
      <div className="max-w-3xl">
        {/* Personal Information Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Informasi Pribadi</h2>

          <div className="flex items-start mb-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-pink-200 overflow-hidden">
                <img
                  src="/images/avatar.svg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-gray-800 rounded-full text-white">
                <Camera size={20} />
              </button>
            </div>

            {/* Form */}
            <form className="flex-1 ml-8" onSubmit={handleProfileUpdate}>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  value={profileData.fullName}
                  onChange={(e) =>
                    setProfileData({ ...profileData, fullName: e.target.value })
                  }
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) =>
                    setProfileData({ ...profileData, email: e.target.value })
                  }
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Password Section */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Ubah Password</h2>
          <form onSubmit={handlePasswordUpdate}>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Password Lama</label>
              <input
                type="password"
                value={profileData.oldPassword}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    oldPassword: e.target.value,
                  })
                }
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Password Baru</label>
              <input
                type="password"
                value={profileData.newPassword}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    newPassword: e.target.value,
                  })
                }
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 mb-2">
                Konfirmasi Password
              </label>
              <input
                type="password"
                value={profileData.confirmPassword}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    confirmPassword: e.target.value,
                  })
                }
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormProfile;
