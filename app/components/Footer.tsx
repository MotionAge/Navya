import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 py-4 border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Navya ENT and Health Care Center. All rights reserved.
        </p>
        <p className="mt-1">
          Developed by{" "}
          <a
            href="https://motionage.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Motion Age
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
