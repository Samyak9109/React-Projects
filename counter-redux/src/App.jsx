import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  increaseByAmount,
} from "./redux/features/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [number, setNum] = useState(5);

  return (
    <div className="min-h-screen bg-[#0f1117] flex items-center justify-center font-mono">
      <div className="bg-[#1a1d27] border border-[#2e3148] rounded-xl px-12 py-10 flex flex-col items-center gap-6 min-w-[320px]">
        {/* Label */}
        <p className="text-xs text-gray-500 uppercase tracking-widest">
          counter
        </p>

        {/* Count display */}
        <h1 className="text-7xl font-semibold text-slate-200 tracking-tight">
          {count}
        </h1>

        {/* Inc / Dec buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => dispatch(decrement())}
            className="bg-[#1e2235] border border-[#3b4166] text-indigo-300 hover:bg-[#252840] hover:text-indigo-200 px-7 py-2.5 rounded-lg text-sm transition-colors"
          >
            − Dec
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="bg-[#1e2235] border border-[#3b4166] text-indigo-300 hover:bg-[#252840] hover:text-indigo-200 px-7 py-2.5 rounded-lg text-sm transition-colors"
          >
            + Inc
          </button>
        </div>

        {/* Amount input + button */}
        <div className="flex gap-2 w-full">
          <input
            type="number"
            value={number}
            onChange={(e) => setNum(e.target.value)}
            className="flex-1 min-w-0 bg-[#111420] border border-[#2e3148] text-slate-200 placeholder-gray-600 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-indigo-500 transition-colors"
          />
          <button
            onClick={() => dispatch(increaseByAmount(Number(number)))}
            className="bg-indigo-800 border border-indigo-700 text-indigo-200 hover:bg-indigo-700 px-4 py-2.5 rounded-lg text-sm whitespace-nowrap transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
