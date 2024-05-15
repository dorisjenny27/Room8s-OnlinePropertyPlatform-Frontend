import React from 'react';

function FooterNav() {
  return (
    <div className="w-full py-12 bg-gray-900 flex flex-col justify-start items-center">
      <div className="px-8 flex flex-col justify-start items-start gap-16 w-full">
        <div className="flex justify-between items-center w-full">
          <div className="text-white text-base font-normal font-['Inter'] leading-normal">
            © 2077 Untitled UI. All rights reserved.
          </div>
          <div className="flex justify-start items-center gap-6">
            <div className="w-6 h-6 relative bg-white" />
            <div className="w-6 h-6 relative bg-white" />
            <div className="w-6 h-6 relative bg-white" />
            <div className="w-6 h-6 relative bg-white" />
            <div className="w-6 h-6 relative bg-white" />
            <div className="w-6 h-6 relative bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterNav;
