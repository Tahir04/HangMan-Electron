// app/page.js
"use client"; // Bu satır eklenirse sayfa Client Component olur

import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  const handleExit = () => {
    window.close();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 gap-4 bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: "url('/bg-home.png')" }}>
     <div className="flex flex-col mb-8 cursor-default">
      <div className="flex items-center gap-2.5 z-10">
        <h1 className="text-7xl font-bold eyrixett">Hangman</h1>
       <img src="/pen.png" alt="Pen" className="w-30 h-30" />
      </div>
      
      <h1 className="pl-[220px] text-2xl eyrixett"> <mark className="bg-yellow-300 px-9">by erehh</mark></h1>
     </div>

      <button
        className="w-[180px] py-2.5 border-2 border-gray-900 rounded-lg cursor-pointer  bg-green-500 hover:bg-green-600  transition-colors duration-300 ease-in-out text-xl text-[#fff] font-medium italic "
        onClick={() => router.push("/categories")}>
        Play
      </button>

      <button
        className="w-[180px] py-2.5 border-2 border-gray-900 rounded-lg cursor-pointer bg-yellow-500 hover:bg-yellow-600  transition-colors duration-300 ease-in-out text-xl text-[#fff] font-medium italic"
        onClick={() => router.push("/info")}>
        Info
      </button>

      <button
       className="w-[180px] py-2.5 border-2 border-gray-900 rounded-lg cursor-pointer bg-red-500 hover:bg-red-700  transition-colors duration-300 ease-in-out text-xl text-[#fff] font-medium italic"
        onClick={handleExit}>
        Exit
      </button>
    </div>
  );
}
