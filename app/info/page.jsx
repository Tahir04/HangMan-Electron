// app/info/page.js
"use client";

import { useRouter } from "next/navigation";

export default function InfosPage() {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex flex-col bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: "url('/bg-info.jpg')" }}>

        <div className="flex items-center mx-6 mt-12 gap-[20px]">
            <button
                className="p-3 border-2 border-gray-900 rounded-[50%] cursor-pointer  bg-yellow-500 hover:bg-yellow-600  transition-colors duration-300 ease-in-out flex items-center justify-center"
                onClick={() => router.push("/")}
                ><img src="/bck.png" className="w-[34px] h-[34px]"></img></button>
            <h1 className="text-5xl font-bold eyrixett text-gray-900 cursor-default">Information</h1>
        </div>

        <div className="w-[90%] mx-auto mt-6 
        bg-gradient-to-r from-[rgba(96,165,250)] to-[rgba(37,99,235)]
        border-2 border-black
        rounded-xl 
        p-6 flex flex-col gap-2 italic text-white font-medium cursor-default">

            <h1>
            Salam! Mən erehh. Bu tətbiq, “Hangman” adlı məşhur söz tapma oyunun sadə versiyasıdır. 
            </h1>

            <h1>
            Bu oyun, Next.js və Electron texnologiyalarından istifadə edilərək hazırlanmışdır. 
            İstifadəçi interfeysinin dizaynında Tailwind CSS tətbiq olunmuş, məntiqi isə JavaScript vasitəsilə hazırlanmışdır. 
            </h1>

            <h1>
            Oyuna başladıqda, sizə mövcud kateqoriyalardan birini seçmək imkanı verilir. Seçiminizə uyğun olaraq, 
            növbəti pəncərədə həmin kateqoriyadan seçilmiş təsadüfi sözün hərf sayı qədər xətt göstərilir. Oyunun məqsədi – bu xətlərin arxasında gizlənmiş 
            sözü düzgün hərfləri təxmin etməklə tapmaqdır. Sizin ümumilikdə 7 yanlış təxmin haqqınız var. 
            Əgər bütün şanslarınız tükənməzdən əvvəl sözü tamamlaya bilsəniz, qalib olursunuz. 
            </h1>

            <h1>Təkliflərinizi və rəyinizi mənimlə bölüşə bilərsiniz :) Xoş Oyunlar!</h1>
        </div>

    
    </div>
  );
}
