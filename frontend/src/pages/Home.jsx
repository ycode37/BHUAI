import React from "react";
import GLogin from "../Components/Buttons/GLogin";

// Optional: add this to index.html <head> for the serif look


const Home = () => {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-[#F3F1EC] px-6 text-[#2A2D32]"
      style={{ fontFamily: "'Shippori Mincho', 'Noto Serif', Georgia, serif" }}
    >
      <section className="flex flex-col items-center text-center max-w-sm w-full">
        {/* Ensō: a single open brush circle */}
        <svg
          viewBox="0 0 100 100"
          className="w-20 h-20 mb-14 text-[#2F3E5C]"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="228 24"
            transform="rotate(-70 50 50)"
          />
        </svg>

        <h1 className="text-3xl font-normal tracking-[0.18em]">Bhua AI</h1>

        <p className="mt-5 text-sm leading-relaxed tracking-wide text-[#7A7D78]">
          Please log in to continue.
        </p>

        <div className="mt-12 h-px w-10 bg-[#C9C5BA]" />

        <div className="mt-12">
          <GLogin />
        </div>
      </section>
    </main>
  );
};

export default Home;