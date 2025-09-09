"use client";

import { useRouter } from "next/navigation";

export default function HangmanModal({ message, onNewWord }) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-80 text-center">
        <p className="text-xl font-bold mb-4 italic whitespace-pre-line">{message}</p>

        <div className="flex flex-col gap-3">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300 cursor-pointer"
            onClick={() => router.push("/")}
          >
            Ana səhifəyə qayıt
          </button>

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
            onClick={onNewWord}
          >
            Fərqli söz seç
          </button>
        </div>
      </div>
    </div>
  );
}
