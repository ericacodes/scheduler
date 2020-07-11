import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace) {
    if (replace === true) {
      // transition(THIRD, true) means history=[ONE, THREE] instead of history=[ONE, TWO, THREE]
      setHistory([...history.slice(0, history.length - 1), mode]);
    } else {
      setMode(mode);
      setHistory([...history, mode]);
    }
  }

  function back() {
    if (history.length > 1) {
      setMode(history[history.length - 2])
      setHistory(history.slice(0, -1));
    }
  }

  return { mode, transition, back }
}