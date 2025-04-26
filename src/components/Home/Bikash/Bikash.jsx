import { Link } from "react-router-dom";
import biashimg from "./../../../assets/BKash-png.png";
const Bikash = () => {
  return (
    <div>
      <div className="  flex justify-center flex-col items-center gap-[6px] text-center pb-5 mt-[22px]">
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
      {/* Bikash Section */}
      <section className="mx-[21px] md:mx-20 border border-[#EEEEEE] rounded-[10px]   pt-5">
        <h1 className="font-semibold text-xl sm:text-center px-5">
          ই-কো ফ্লোর প্ল্যান ওর্ডার করতে আপনার নাম,ফোন এবং ইমেইল এড্রেসটি দিন ⤵️
        </h1>
        <div className="flex flex-col p-5 sm:p-20 gap-[5px] mt-[15px] sm:mt-0">
          <input
            className="border border-[#EEEEEE] rounded-[6px] h-[57px] px-4 pb-4 pt-[17px] placeholder:text-[#939BA6]"
            type="text"
            placeholder="আপনার নাম"
          />
          <input
            className="border border-[#EEEEEE] rounded-[6px] h-[57px] px-4 pb-4 pt-[17px] placeholder:text-[#939BA6]"
            type="text"
            placeholder="ফোন নাম্বার"
          />
          <input
            className="border border-[#EEEEEE] rounded-[6px] h-[57px] px-4 pb-4 pt-[17px] placeholder:text-[#939BA6]"
            type="text"
            placeholder="ইমেইল"
          />
          <button className="flex items-center justify-center gap-[10px] border-b-[3px] border-[#A90F53] bg-[#E20F6C] h-[58px] rounded-[10px] font-semibold text-white">
            <img
              className="object-cover w-[30px] h-full"
              src={biashimg}
              alt="Biakh Logo"
            />
            Pay with bkash
          </button>
          <div className="mt-[10px]">
            <div className="flex justify-between border-b border-dashed border-[#EEEEEE] pb-[10px]">
              <h1 className="font-semibold">Product</h1>
              <p className="font-semibold">Subtotal</p>
            </div>
            <div className="flex justify-between mt-[10px]">
              <h1 className="text-[14px] font-medium text-[#939BA6]">
                Eco Floor Plan (197 pages)
              </h1>
              <p className="font-semibold text-[#939BA6]">1640.00৳</p>
            </div>
            <div className="flex justify-between border-b border-dashed border-[#EEEEEE] pb-[10px] mt-[10px]">
              <h1 className="font-semibold">Discount</h1>
              <p className="text-[#FF5B5B] font-semibold">-1150.00৳</p>
            </div>
            <div className="flex justify-between mt-[10px]">
              <h1 className="font-semibold">Total</h1>
              <p className="text-[#1CAB55] font-semibold ">490.00৳</p>
            </div>
          </div>
        </div>
      </section>
      {/* Hidden Button */}
      <div className="mx-[21px] md:mx-20 hidden ">
        <div className="flex   gap-1 font-normal text-xl sm:mt-8 mt-6 mb-3 ">
          <h1>৳1690</h1>
          <p className="line-through">1990</p>
          <div className=" relative rounded-sm h-[25px] w-[80px] dis text-[10px] text-center text-white bg-[#FFA500]">
            <h1 className="ml-5 "> ২০০৳ ছাড়</h1>
            <div className="absolute w-1 h-1 rounded-full left-5 top-[11px] bg-white"></div>
          </div>
        </div>
        <Link className="block  mt-[6px]">
          <button className="flex w-full items-center justify-center gap-[10px] border-b-[3px] border-[#A90F53] bg-[#E20F6C] h-[58px] rounded-[10px] font-semibold text-white">
            <img
              className="object-cover w-[30px] h-full"
              src={biashimg}
              alt="Biakh Logo"
            />
            Pay with bkash
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Bikash;
