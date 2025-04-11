"use client";
import { useEffect, useState } from "react";

function Timer() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date(new Date().getFullYear(), 5, 11); // June is 5 (0-indexed)

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("It's June 11! 🎉");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="mb-4">Countdown to June 11</h1>
      <p>{timeLeft}</p>
    </>
  );
}

export default Timer;
