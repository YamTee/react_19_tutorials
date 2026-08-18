import { useState, useRef } from "react";

export const Stopwatch = () => {
  const [time, setTime] = useState(0);

  const intervalRef = useRef(null);

  const start = () => {
    console.log(intervalRef.current);

    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = null;
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    intervalRef.current = null;
  };

  return (
    <div className="flex items-center justify-center p-6">
      {/* Stopwatch Card */}
      <div className="w-full max-w-sm rounded-xl border border-gray-700 bg-gray-900 p-6 text-center shadow-lg">
        <h2 className="text-2xl font-bold text-white">Stopwatch</h2>

        {/* Seconds */}
        <div className="my-8 text-6xl font-bold text-white">
          {time}
          <span className="ml-2 text-lg font-normal text-gray-400">sec</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={start}
            className="cursor-pointer rounded-lg bg-green-600 px-6 py-2 font-medium text-white transition hover:bg-green-700"
          >
            {time === 0 ? "Start" : "Continue"}
          </button>

          <button
            onClick={stop}
            className="cursor-pointer rounded-lg bg-red-600 px-6 py-2 font-medium text-white transition hover:bg-red-700"
          >
            Stop
          </button>

          <button
            onClick={reset}
            className="cursor-pointer rounded-lg bg-gray-700 px-6 py-2 font-medium text-white transition hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
