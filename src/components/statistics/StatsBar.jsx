import React from 'react'

const StatsBar = () => {
  return (
    <div className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-5">
      <div className="container mx-auto flex justify-around items-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold text-4xl">50K+</h2>
          <p>Active Users</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold text-4xl">200+</h2>
          <p>Premium Tools</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold text-4xl">4.9</h2>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
}

export default StatsBar