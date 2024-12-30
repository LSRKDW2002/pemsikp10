// Layouts/Header.jsx
import React from 'react';
import Button from '../Components/Button';

function Header() {
  return (
    <div className="bg-white shadow p-4">
      <div className="flex justify-end">
        <Button style="bg-red-500 text-white rounded-md px-2 py-1" text="Log Out" />
      </div>
    </div>
  );
}

export default Header;
