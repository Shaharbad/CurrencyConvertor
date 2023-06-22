import React from 'react';

function Navbar() {
  const coinImageUrl = 'https://www.svgrepo.com/show/30451/coin.svg';

  return (
    <div>
      <nav className="bg-gray-100 font-body">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex space-x-4">
              <div>
                <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <span className="font-bold text-xl">ממיר המטבעות</span>
                  <img src={coinImageUrl} alt="Logo" className="h-6 w-6  ml-1 text-blue-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav> 
    </div>
  );
}

export default Navbar;
