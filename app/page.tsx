"use client";

import Image from "next/image";
import { useState } from "react";

const riddles = [
  { question: "朝は4本足、昼は2本足、夜は3本足。これは何？", answer: "人間" },
  { question: "世界で一番高い山は？", answer: "エベレスト" },
  { question: "火の中にあるのに燃えないものは？", answer: "灰" },
  { question: "黒くて白くて赤いものは？", answer: "新聞" },
  { question: "冷たいのに暑いものは？", answer: "アイス" },
  {
    question: "上がったり下がったりするけど、動かないものは？",
    answer: "温度",
  },
  {
    question: "走っても走っても同じ場所にいるものは？",
    answer: "ランニングマシン",
  },
  { question: "みんなが持っているけど、使わないものは？", answer: "名字" },
  { question: "切っても切っても血が出ないものは？", answer: "トランプ" },
  { question: "いつも走っているけど、疲れないものは？", answer: "時計" },
  { question: "夜になると出てくる数字は？", answer: "七" },
  { question: "食べられないパンは？", answer: "フライパン" },
  { question: "持っていると重いけど、投げると軽くなるものは？", answer: "罪" },
  { question: "雨が降っても濡れない場所は？", answer: "海" },
  { question: "首はあるけど頭がないものは？", answer: "瓶" },
  { question: "足があるけど歩けないものは？", answer: "机" },
  { question: "穴があるけど水が溜まらないものは？", answer: "ざる" },
  { question: "針があるけど縫えないものは？", answer: "時計" },
  { question: "口があるけど話せないものは？", answer: "コップ" },
  { question: "歯があるけど噛めないものは？", answer: "櫛" },
  { question: "一年で一番暑い日は？", answer: "夏至" },
  { question: "逆立ちすると軽くなるものは？", answer: "体重" },
  { question: "叩けば叩くほど喜ぶものは？", answer: "太鼓" },
  { question: "親はいるけど子はいないものは？", answer: "親指" },
  { question: "糸があるけど縫えないものは？", answer: "電話" },
  { question: "毎日増えるけど減らないものは？", answer: "年齢" },
  { question: "声はするけど姿が見えないものは？", answer: "風" },
  { question: "水の中にいるけど濡れないものは？", answer: "潜水艦" },
  { question: "夏は寒くて冬は暖かい場所は？", answer: "冷蔵庫" },
  {
    question: "たくさん穴が開いているのに水が入るものは？",
    answer: "スポンジ",
  },
];

export default function Home() {
  const [currentRiddleIndex, setCurrentRiddleIndex] = useState<number | null>(
    null
  );
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState("");

  const showRandomRiddle = () => {
    const randomIndex = Math.floor(Math.random() * riddles.length);
    setCurrentRiddleIndex(randomIndex);
    setUserAnswer("");
    setResult("");
  };

  const checkAnswer = () => {
    if (currentRiddleIndex === null) return;

    if (
      userAnswer.toLowerCase().trim() ===
      riddles[currentRiddleIndex].answer.toLowerCase().trim()
    ) {
      setResult(
        `🎉 正解です！答えは「${riddles[currentRiddleIndex].answer}」でした。`
      );
    } else {
      setResult(
        `❌ 不正解です。正解は「${riddles[currentRiddleIndex].answer}」でした。`
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black gap-8">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center w-full">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            なぞなぞアプリ
          </h1>

          <button
            onClick={showRandomRiddle}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            なぞなぞを表示
          </button>

          {currentRiddleIndex !== null && (
            <div className="w-full max-w-md flex flex-col gap-4 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <p className="text-lg text-zinc-800 dark:text-zinc-200">
                {riddles[currentRiddleIndex].question}
              </p>

              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="答えを入力してください"
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-white"
                onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
              />

              <button
                onClick={checkAnswer}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                回答を送信
              </button>

              {result && (
                <p className="text-lg font-medium text-center text-zinc-800 dark:text-zinc-200">
                  {result}
                </p>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
