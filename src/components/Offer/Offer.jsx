const Offer = () => {
  return (
    <div className=" flex justify-center flex-col items-center gap-[6px] text-center pb-5  text-white">
      <h1 className=" font-bold text-[16px]">70% Offer Ends Soon!</h1>
      <div className="flex items-center justify-center gap-[5px]">
        <div>
          <div className="w-[29px] h-[33px] bg-gray-400 rounded-[4px] flex items-center justify-center">
            2
          </div>
          <h1 className="text-[8px] font-semibold mt-1">Days</h1>
        </div>
        <div>
          <div className="w-[29px] h-[33px] bg-gray-400 rounded-[4px] flex items-center justify-center">
            1
          </div>
          <h1 className="text-[8px] font-semibold mt-1">Hours</h1>
        </div>
        <div>
          <div className="w-[29px] h-[33px] bg-gray-400 rounded-[4px] flex items-center justify-center">
            13
          </div>
          <h1 className="text-[8px] font-semibold mt-1">Minuts</h1>
        </div>
        <div>
          <div className="w-[29px] h-[33px] bg-gray-400 rounded-[4px] flex items-center justify-center">
            1
          </div>
          <h1 className="text-[8px] font-semibold mt-1">Seconds</h1>
        </div>
      </div>
    </div>
  );
};

export default Offer;
