import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/70 backdrop-blur-md mt-16 border-t border-gray-800">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Base64 Image Converter. All Rights Reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-blue-400">Terms of Service</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};