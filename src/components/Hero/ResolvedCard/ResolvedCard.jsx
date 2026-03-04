import React from "react";

const ResolvedCard = () => {
  return (
    <div
      className="relative w-full h-[250px] rounded-xl overflow-hidden 
                bg-gradient-to-br from-[#6D28D9] via-[#7C3AED] to-[#2563EB] 
                flex flex-col items-center justify-center text-white"
    >
      {/* Top Right Vector */}
      <img
        src="/vector1.png"
        alt=""
        className="absolute top-0 right-0 w-[320px] opacity-20 pointer-events-none"
      />

      {/* Bottom Left Vector */}
      <img
        src="/vector2.png"
        alt=""
        className="absolute bottom-0 left-0 w-[320px] opacity-20 pointer-events-none rotate-180"
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-2xl font-medium opacity-90 mb-3">Resolved</h2>
        <div className="text-7xl font-semibold">0</div>
      </div>
    </div>
  );
};

export default ResolvedCard;
