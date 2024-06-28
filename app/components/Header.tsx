import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  const { userId } = auth();
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-blue-700">
      <div className="flex items-center">
        <Link href="/">
          <div className="text-lg uppercase font-bold text-white"></div>
        </Link>
      </div>
      <div className="text-white">
        {!userId && (
          <>
            <Link
              href="sign-in"
              className="text-gray-300 hover:text-white mr-4"
            >
              Sign In
            </Link>
            <Link
              href="sign-up"
              className="text-gray-300 hover:text-white mr-4"
            >
              Sign Up
            </Link>
          </>
        )}
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default Header;
