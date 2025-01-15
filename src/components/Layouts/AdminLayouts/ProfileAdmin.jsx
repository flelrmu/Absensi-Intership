import React from 'react';
import FormProfile from '../../Fragment/AdminFragment/FormProfile';

const ProfileAdmin = () => {
  return (
    <div className="h-auto relative px-8 pt-[70px]">
      <div className="max-w-7xl x-auto py-6">
        <h1 className="text-2xl font-bold mb-8">Profile Settings</h1>
        <FormProfile/>
      </div>
    </div>
  );
};

export default ProfileAdmin;