import { FaStar } from "react-icons/fa";
import { CgLoadbarDoc } from "react-icons/cg";
import { CgFileDocument } from "react-icons/cg";
import { IoReaderOutline } from "react-icons/io5";
import { IoIosOptions } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";
import { FaRegWindowMinimize } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import free from "../../assets/Group 8.png";
import { Link, NavLink } from "react-router-dom";
import { BsFill1CircleFill } from "react-icons/bs";
import { BsFill2CircleFill } from "react-icons/bs";
import { BsFill3CircleFill } from "react-icons/bs";
import { BsFill4CircleFill } from "react-icons/bs";
import bgImage from "../../assets/success-bg.png";
import demoimgone from "../../assets/BITHI-1.jpg";
import demoimgtwo from "../../assets/bg-3.jpg";
import { RiDownload2Line } from "react-icons/ri";
const Home = () => {
  return (
    <div className="pb-5">
      <header className=" bg-custom-color pt-8 text-white p-5">
        {/* Offers countdown */}
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
        {/* Offers countdown end*/}
        <div className="flex justify-center  bg-custom-dark">
          <iframe
            className="sm:w-[560px] sm:h-[315px] w-[388px] h-[218.25px] rounded-lg"
            src="https://www.youtube.com/embed/9exMTrN5Xd4?si=WWABYWKmdtQjJ7zV"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <h1 className="text-xl font-semibold mt-5">
          পরিশ্রমের টাকায় সপ্নের বাড়ির ডিজাইন এখন আপনার হাতের নাগালে
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex gap-1 text-orange-500 ">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="my-[19px] font-semibold">
            5.00 <span className="text-orange-500">(1,230)</span>
          </p>
        </div>
        <p className="text-customDark">
          বাড়ি করার ক্ষেত্রে বিল্ডিং ডিজাইনের গুরুত্ব অপরিসীম, এজন্য আপনাকে
          কিনতে হবে ই-কো ফ্লোর প্ল্যান! দক্ষ ইঞ্জিনিয়ার দিয়ে তৈরি ই-কো ফ্লোর
          প্ল্যানের ২ডি ৩ডি ডিজাইন প্রত্যেকটি ডিজাইন পরিবেশ বান্ধব, আধুনিক,
          পরিকল্পিত বাজেট ফ্রেন্ডলি যা আপনার বাড়িকে করবে অন্যের বাড়ি থেকে আলাদা
        </p>
      </header>
      <main className="p-5">
        <div className="flex sm:justify-center gap-1 font-normal text-xl sm:mt-8 mt-6 mb-3">
          <h1>৳1690</h1>
          <p className="line-through text-[16px]">1990</p>
          {/* <img src={discount} alt="" /> */}
          <div className="  relative rounded-sm h-[25px] w-[80px] dis text-[10px] text-center text-white bg-[#FFA500]">
            <h1 className="ml-5 "> ২০০৳ ছাড়</h1>
            <div className="absolute w-1 h-1 rounded-full left-5 top-[11px] bg-white"></div>
          </div>
        </div>
        <NavLink  className="sm: flex justify-center">
        <Link to={`/tiptab`} className=" flex justify-center items-center w-full sm:w-[388px] h-[54px] rounded-[10px] bg-btn-green font-semibold text-white shadow-2xl btnborders">
            Tiptab
          </Link>
        </NavLink>
        <div className="sm:pl-5">
          <h1 className="font-semibold mt-5 text-[18px]">
            এই প্ল্যানটি যা থাকছে
          </h1>
          <div className="flex gap-4 mt-2">
            <BsFill1CircleFill className="text-green-500 text-2xl" />
            <p>
              বাড়ি করার ক্ষেত্রে বিল্ডিং ডিজাইনের গুরুত্ব অপরিসীম, এজন্য আপনাকে
              কিনতে হবে ই-কো ফ্লোর প্ল্যান!
            </p>
          </div>
          <div className="flex gap-4 py-1">
            <BsFill2CircleFill className="text-green-500 text-2xl" />
            <p>
              বাড়ি করার ক্ষেত্রে বিল্ডিং ডিজাইনের গুরুত্ব অপরিসীম, এজন্য আপনাকে
              কিনতে হবে ই-কো ফ্লোর প্ল্যান!
            </p>
          </div>
          <div className="flex gap-4">
            <BsFill3CircleFill className="text-green-500 text-2xl" />
            <p>
              বাড়ি করার ক্ষেত্রে বিল্ডিং ডিজাইনের গুরুত্ব অপরিসীম, এজন্য আপনাকে
              কিনতে হবে ই-কো ফ্লোর প্ল্যান!
            </p>
          </div>
          <div className="flex gap-4 pt-1">
            <BsFill4CircleFill className="text-green-500 text-2xl" />
            <p>
              বাড়ি করার ক্ষেত্রে বিল্ডিং ডিজাইনের গুরুত্ব অপরিসীম, এজন্য আপনাকে
              কিনতে হবে ই-কো ফ্লোর প্ল্যান!
            </p>
          </div>
        </div>
        <h1 className="font-semibold sm:text-center text-[18px] mt-6 mb-2">
          ই-কো ফ্লোর প্ল্যান কি?
        </h1>
        <div className="cardtwo px-5 py-10 rounded-md">
          <div className="flex items-center gap-3 text-white">
            <div className="p-2 bg-[#306BF4] rounded-full flex justify-center items-center">
              <CgFileDocument className="text-2xl" />
            </div>
            ই-কো ফ্লোর প্ল্যান একটি ডিজাইন বুক! এর মধ্যে পাবেন৷ সুন্দর সুন্দর
            যুগোপযোগী 2D & 3D বিল্ডিং ডিজাইন।
          </div>
          <div className="flex items-center gap-3 text-white my-4">
            <div className="p-2 bg-[#7F43FD] rounded-full flex justify-center items-center">
              <IoIosOptions className="text-2xl" />
            </div>
            একটি বিল্ডিং করতে কত টুকুন জায়গা লাগে কয়টা রুম হয় সকল কিছু দেখতে
            পারবেন ই-কো ফ্লোর প্ল্যানের মধ্যে।
          </div>
          <div className="flex items-center gap-3 text-white my-4">
            <div className="p-2 bg-[#FFA500] rounded-full flex justify-center items-center">
              <IoReaderOutline className="text-2xl" />
            </div>
            ই-কো ফ্লোর প্ল্যানে যতগুলো বিল্ডিং আছে সকল বিল্ডিংয়ের খরচ হিসাব করা
            আছে।
          </div>
          <div className="flex items-center gap-3 text-white">
            <div className="p-2 bg-[#1CAB55] rounded-full flex justify-center items-center">
              <CgLoadbarDoc className="text-2xl" />
            </div>
            ই-কো ফ্লোর প্ল্যানে থাকছে বাড়ি নির্মাণ গাইড। এটি পড়লে আপনি জানতে
            পারবেন কিভাবে একটি বাড়ির খরচ কমানো যায়, নির্মাণ কাজের মাননিয়ন্ত্রণ
            আরও অনেক কিছু
          </div>
        </div>
        <NavLink  className="sm: flex justify-center mt-[11px]">
          <Link to={`/tiptab`} className=" flex justify-center items-center w-full sm:w-[388px] h-[54px] rounded-[10px] bg-btn-green font-semibold text-white shadow-2xl btnborders">
            Tiptab
          </Link>
        </NavLink>
        <div className="cardfour relative h-[400px] flex flex-col items-center justify-center px-5 mt-7 rounded-md">
          <h1 className="text-white font-semibold text-xl  absolute top-[39px] text-center p-2">
            সেরা শিক্ষকের তৈরি ক্লাস নোট এবং লেকচার শিট প্রয়োজন?
          </h1>
          <div
            style={{ backgroundImage: `url(${demoimgtwo})` }}
            className="  bg-center  rounded-[8px] w-[117.88px] h-[160.98px] absolute top-[130px] left-[45%] sm:left-1/2 rotate-4 bg-gray-400 z-30"
          >
            <div className="relative w-full h-full">
              <img
                className="absolute top-[-15%] right-[-25%] object-cover"
                src={free}
                alt=""
              />
              <div className="w-9 h-9 rounded-full absolute z-30 bg-[#306BF4] bottom-[-10%] right-[-15%]"></div>
              <div className="w-[26px] h-[26px] rounded-full absolute top-[35%] right-[-28%] bg-green-500"></div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${demoimgone})` }}
            className=" object-fill bg-center bg-no-repeat rounded-[8px] w-[117.88px] h-[160.98px] absolute top-[130px] rotate-[-10deg] sm:left-[45%] left-[35%] "
          >
            <div className="w-11 h-11 rounded-full absolute top-[-10%] left-[-15%] bg-red-500"></div>
            <div className="w-7 h-7 rounded-full absolute bottom-[20%] left-[-30%] bg-orange-500"></div>
          </div>
          <NavLink className=" flex justify-center mt-[11px] mx-6 absolute top-[315px] w-11/12  sm:w-[388px] h-[54px] rounded-[10px] bg-btn-green font-semibold text-white shadow-2xl btnborders">
            <button className="flex justify-center items-center gap-3 ">
              <RiDownload2Line className="text-xl font-bold" /> ফ্রি ডাউনলোড
              করুন
            </button>
          </NavLink>
        </div>
        <h1 className="font-semibold mt-7 sm:text-center">
          ইতিমধ্যে যারাই আমাদের ই-কো ফ্লোর প্ল্যান নিয়েছেন শতভাগ পজিটিভ রিভিউ
          পেয়েছি 😍
        </h1>
        <div className="border-[#EEEEEE] border px-[28px] py-7 mt-10 rounded-md relative">
          <h1 className="text-[#939BA6] text-[14px]">
            আপনাদের সার্ভিস সত্যিই প্রশংসনীয়। আলহামদুলিল্লাহ যেমন চেয়েছিলাম তেমন
            ভাবেই বাড়িটা নির্মান করতে পেরেছি আপনাদের মাধ্যমে। অসংখ্য ধন্যবাদ।
          </h1>
          <p className="text-[18px] mt-6">Mehidi Hasan</p>
          <p className="text-[#939BA6]">Businessman</p>
          <div className="w-10 h-10 flex justify-center items-center rounded-full left-20 bg-blue-100 absolute top-[-10%]">
            <FaQuoteLeft className="text-blue-600 text-xl" />
          </div>
        </div>
      </main>
      {/* Offers countdown--Two */}
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="pt-6 mt-10 flex justify-center flex-col  gap-[6px] text-center pb-5  text-white institute-success-content"
      >
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
        <h1 className="font-semibold text-xl mt-8 px-2">
          তাছাড়া ই-কো ফ্লোর প্ল্যান ডিজাইন বুক লিমিটেড!!
        </h1>
        <div className="flex justify-between gap-2 mt-6">
          <div className="p-4 bg-[#00000032]  rounded-[20px] px-10 py-3">
            <h1 className="text-[25px] font-semibold">৬০০ টি</h1>
            <h1>স্টক আছে</h1>
          </div>
          <div className="p-4 bg-[#00000032] rounded-[20px] px-10 py-3 ">
            <h1 className="text-[25px] font-semibold">200+</h1>
            <h1>মানুষ কিনেছে</h1>
          </div>
        </div>
        <NavLink
          to="/bikash"
          className=" w-full flex justify-center mt-[27px] mx-6"
        >
          <button className="  top-[333px] w-11/12 sm:w-[388px] h-[54px] rounded-[10px] bg-[#09090924] font-semibold text-white   border-b-4  border-[#09090980] ">
            প্ল্যানটি নিতে চাই
          </button>
        </NavLink>
      </div>
      <div className="p-5 mt-5">
        <div>
          <div className="flex justify-between font-semibold">
            <h1>ই-কো ফ্লোর প্ল্যান দিয়ে কি কি করতে পারবেন?</h1>
            <p>
              <FaRegWindowMinimize />
            </p>
          </div>
          <p className="text-gray-400 mt-1 text-xs">
            ই-কো ফ্লোর প্ল্যানে যত গুলো ডিজাইন আছে সকল ডিজাইন দিয়ে বাড়ি করতে
            পারবেন। জায়গার সঠিক ব্যবহার করতে পারবেন। একটি বাড়ি করতে কত টাকা
            প্রয়োজন হয় সেটি দেখতে পারবে।এর মধ্যে নয় লক্ষ থেকে শুরু করে চুয়ান্ন
            লক্ষ টাকা পর্যন্ত বাড়ির ডিজাইন আছে যা আপনাকে বিশাল একটি ধারণা
            দিবে।বাড়ির কাজ কিভাবে দেওয়া হয় এবং শেষ করতে হয় তার সুন্দর ধারনা পেয়ে
            যাবে। তারপরে আপনি বাড়ি করার সময় বা মনে কোন প্রশ্ন থাকলে আমাদের
            সাপোর্টে কথা বলে সমাধান নিতে পারবেন।এই সাপোর্ট সারা জীবন পাবেন একবার
            ই-কো ফ্লোর প্ল্যান কিনলে।
          </p>
        </div>
        <div className="flex justify-between font-semibold mt-5">
          <h1>মূল্য কতো?</h1>
          <p>
            <FaPlus />
          </p>
        </div>
      </div>
      <div className="flex sm:justify-center gap-1 font-normal text-xl sm:mt-8 mt-6 mb-3 px-5">
        <h1>৳1690</h1>
        <p className="line-through">1990</p>
        <div className=" relative rounded-sm h-[25px] w-[80px] dis text-[10px] text-center text-white bg-[#FFA500]">
          <h1 className="ml-5 "> ২০০৳ ছাড়</h1>
          <div className="absolute w-1 h-1 rounded-full left-5 top-[11px] bg-white"></div>
        </div>
      </div>
      <NavLink to="/bikash" className="sm: flex justify-center px-5">
        <button className=" w-full sm:w-[388px] h-[54px] rounded-[10px] bg-btn-green font-semibold text-white shadow-2xl btnborders">
          প্ল্যানটি নিতে চাই
        </button>
      </NavLink>
    </div>
  );
};

export default Home;
