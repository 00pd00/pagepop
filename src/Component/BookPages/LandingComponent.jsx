import React from "react";

const LandingComponent = () => {
  return (
    <div className="relative w-full">
      <img
        src="https://sc0.blr1.cdn.digitaloceanspaces.com/article/194339-enldoqbzzm-1695462492.jpg"
        className="w-full h-[300px] object-cover"
        alt="landing"
      />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <p className="text-white text-lg md:text-2xl text-center font-semibold bg-black bg-opacity-50 p-4 rounded">
          Welcome to PagePop – where stories come alive<br />
          Browse. Discover. Manage your favorite eBooks effortlessly
        </p>
      </div>
    </div>
  );
};

export default LandingComponent;
