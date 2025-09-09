// app/categories/page.js
"use client";

import { useRouter } from "next/navigation";

export default function CategoriesPage() {
  const router = useRouter();

  const categories = [
    { name: "Ad", img: "/ad.png" },
    { name: "Heyvan", img: "/heyvan2.png" },
    { name: "Bölgə", img: "/bolge.png" },
    { name: "Meyvə", img: "/bitki.png" },
  ];

  return (
    <div
      className="w-full h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg-info.jpg')" }}
    >

      <div className="flex items-center mx-6 mt-12 gap-[20px]">
        <button
          className="p-3 border-2 border-gray-900 rounded-full cursor-pointer bg-green-400 hover:bg-green-500 transition-colors duration-300 ease-in-out flex items-center justify-center"
          onClick={() => router.push("/")}
        >
          <img src="/bck.png" className="w-[34px] h-[34px]" />
        </button>
        <h1 className="text-5xl font-bold eyrixett text-gray-900 cursor-default">
          Categories
        </h1>
      </div>

      <div className="w-[92%] mx-auto mt-6">
        <h1 className="text-xl font-bold italic text-gray-900 cursor-default">Oyuna başlamadan öncə aşağıdakı kategoriyalardan birini seçin:</h1>
        
      <div className="grid grid-cols-2 gap-6 p-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="bg-white/80 border-2 border-gray-800 rounded-2xl p-2 flex flex-col items-center justify-center gap-3 cursor-pointer hover:scale-102 hover:bg-white/90 transition-all duration-300 shadow-lg"
            onClick={() => router.push(`/play?category=${cat.name}`)}
          >
            <img src={cat.img} alt={cat.name} className="w-24 h-24 object-contain" />
            <span className="text-xl font-bold text-gray-900">{cat.name}</span>
          </div>
        ))}
      </div>
      </div>

    </div>
  );
}
