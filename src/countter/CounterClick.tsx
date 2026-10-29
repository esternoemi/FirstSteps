import { useState } from "react";

export function CounterClick() {
  const [clicks, setClicks] = useState(0);

  return (
    <button onClick={() => setClicks(clicks + 1)}>
      Clics: {clicks}
    </button>
  );
}