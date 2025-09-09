"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { words } from "../../data/words";
import HangmanModal from "./HangmanModal";

export default function PlayPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const azerbaijanLetters = "A B C Ç D E Ə F G Ğ H X I İ J K Q L M N O Ö P R S Ş T U Ü V Y Z".split(" ");

  const [word, setWord] = useState("");
  const [displayWord, setDisplayWord] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongCount, setWrongCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  
  const chooseRandomWord = () => {
    const validCategories = Object.keys(words);
    const selectedCategory = validCategories.find(
      (cat) => cat.toLowerCase() === (category || "").toLowerCase()
    );

    if (!selectedCategory) {
      console.warn(`Kategoriya "${category}" tapılmadı!`);
      return;
    }

    const sozler = words[selectedCategory];
    const randomSoz = sozler[Math.floor(Math.random() * sozler.length)];
    setWord(randomSoz.toLocaleUpperCase('az'));
    setDisplayWord(randomSoz.split("").map((char) => (char === " " ? " " : "_")));
    setGuessedLetters([]);
    setWrongCount(0);
    setShowModal(false);

  };

  useEffect(() => {
    if (category) chooseRandomWord();
  }, [category]);

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter) || showModal) return;

    setGuessedLetters([...guessedLetters, letter]);

    if (word.includes(letter)) {
      const newDisplay = word.split("").map((char, idx) =>
        char === letter ? letter : displayWord[idx]
      );
      setDisplayWord(newDisplay);

      if (!newDisplay.includes("_")) {
        setModalMessage("Təbriklər brat!\nQazandın 🎉");
        setShowModal(true);
      }
    } else {
      const newWrong = wrongCount + 1;
      setWrongCount(newWrong);
      if (newWrong >= 7) {
        setModalMessage(`Təəssüf brat!\nUduzdun 😢\n\nSöz: ${word}`);
        setShowModal(true);
      }
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat "
         style={{ backgroundImage: "url('/bg-home.png')" }}>
      <img
        src={`/hangman/${wrongCount}.png`}
        alt={`Hangman ${wrongCount}`}
        className="w-40 h-40 mb-10 scale-125 border-2 border-black rounded-2xl"
      />

      {category ? (
        <>
          <p className="text-xl mb-4 cursor-default italic">Seçilmiş kategoriya: <b>{category}</b></p>

          <div className="flex gap-3 text-3xl font-mono tracking-wider mb-6 cursor-default">
            {displayWord.map((char, idx) => (
              <span key={idx} className="border-b-2 border-black min-w-[30px] text-center">
                {char}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-16 gap-2 mb-6">
            {azerbaijanLetters.map((letter) => {
              const guessed = guessedLetters.includes(letter);
              const isCorrect = guessed && word.includes(letter);
              const isWrong = guessed && !word.includes(letter);

              return (
                <button
                  key={letter}
                  className={`p-2 rounded font-bold cursor-pointer ${
                    guessed
                      ? isCorrect
                        ? "bg-green-500 text-white cursor-not-allowed"
                        : "bg-gray-500 text-white cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                  onClick={() => handleGuess(letter)}
                  disabled={guessed}
                >
                  {letter}
                </button>
              );
            })}
          </div>

          <p className="mb-6 text-lg italic">Səhvlərin sayı : {wrongCount} / 7</p>
        </>
      ) : (
        <p className="text-xl text-red-600 mb-6">Kategoriya seçilmədi!</p>
      )}

      <button
        className="px-6 py-3 cursor-pointer bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors duration-300"
        onClick={() => router.push("/")}
      >
        Ana səhifəyə qayıt
      </button>

      {/* Modal */}
      {showModal && (
        <HangmanModal
          message={modalMessage}
          onNewWord={chooseRandomWord}
        />
      )}
    </div>
  );
}
