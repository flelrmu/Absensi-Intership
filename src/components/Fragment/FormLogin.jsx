import React from "react";
import Input from "../Elements/Items/Input";
import { HiOutlineMail } from "react-icons/hi";
import { LuLockKeyhole } from "react-icons/lu";
import WhiteButton from "../Elements/Button/WhiteButton";
import Button from "../Elements/Button/Button";
import { Link } from "react-router-dom";

function FormLogin() {
  return (
    <form className="space-y-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center">
          <HiOutlineMail className="h-5 w-5 text-gray-400" />
        </div>
        <Input type="email" placeholder="Email" name="email" required />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center">
          <LuLockKeyhole className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
      </div>

      <div className="flex-1 justify-between text-center">
        <Link to="/dashboard">
          <Button variant="w-full bg-black mb-4 hover:bg-gray-800">Masuk</Button>
        </Link>
        <Link to="/scan">
          <WhiteButton variant="w-full">Scan QR Code</WhiteButton>
        </Link>
      </div>
    </form>
  );
}

export default FormLogin;
