import React from "react";

function Blob() {
  return (
    <div class=" flex items-center justify-center px-16">
      <div class=" w-full">
        <div class="absolute top-0 -left-4 w-72 h-72 bg-[#73BA9B] rounded-full mix-blend-multiply  blur-xl opacity-70 animate-blob animation-delay-3000"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-[#73BA9B] rounded-full mix-blend-multiply  blur-xl opacity-70 animate-blob animation-delay-1500"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute center-0 w-72 h-72 bg-[#73BA9B] rounded-full mix-blend-multiply  blur-xl opacity-70 animate-blob animation-delay-1500"></div>
      </div>
    </div>
  );
}

export default Blob;
