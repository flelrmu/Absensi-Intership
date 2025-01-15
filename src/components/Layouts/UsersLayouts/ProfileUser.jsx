import React from "react";
import FormUser from "../../Fragment/UserFragment/FormUser";

const ProfileUser = () => {
  return (
    <div className="h-auto relative px-8 pt-[70px]">
      <div className="max-w-7xl mx-auto py-6">
        <h1 className="text-2xl font-bold mb-8">Profile Settings</h1>
        <FormUser />
      </div>
    </div>
  );
};

export default ProfileUser;
