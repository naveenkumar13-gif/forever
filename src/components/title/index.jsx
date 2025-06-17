import React from "react";

function Title({ text1, text2 }) {
  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <p className="text-gray-500">
        {text1} <span className="text-[#414141]">{text2}</span>
      </p>
      <p className="w-12 bg-[#414141] h-[3px] max-sm:w-8"></p>
    </div>
  );
}

export default Title;
