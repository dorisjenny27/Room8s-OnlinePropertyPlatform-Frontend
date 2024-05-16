import React from 'react'

const ConfirmPassword = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-top bg-no-repeat 
    bg-[url('../../background_img.png')]"
    >
      <div
        className="bg-white p-[35px] pt-[35px] pb-[58px] shadow-lg
       max-w-[500px] w-full box-border text-center"
      >
        <h1 className="font-Oxygen font-bold text-[24px] leading-[74.5px] h-[75px] text-customTeal">
          Room8s
        </h1>
        <h2
          className="font-nunito font-semibold text-[24px] leading-[33.6px] h-[34px]
         text-customgray900 mb-6"
        >
          Reset your password
        </h2>
        <form>
          <div className="mb-4 text-left">
            <label
              className="block mb-2 leading-[20px] text-[14px] h-[20px] font-heebo
              font-semibold text-customgray800"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 h-[48px] border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4 text-left">
            <label
              className="block mb-2 leading-[20px] text-[14px] h-[20px] font-heebo 
              font-semibold text-customgray800"
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full p-3 h-[48px] border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="font-inter w-full p-[12px_10px] h-[44px] bg-customTeal text-white rounded font-semibold"
          >
            {" "}
            Send reset instructions
          </button>
        </form>
        <p className="font-inter mt-4 leading-[20px] h-[20px] text-[14px] font-normal text-customGray">
          Go back to{" "}
          <a
            href="/signin"
            className="font-inter text-customTeal underline leading-[20px] h-[20px] text-[14px] font-semibold"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default ConfirmPassword;
