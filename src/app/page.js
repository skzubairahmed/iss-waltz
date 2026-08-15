import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex p-5 gap-10 flex-col items-center justify-center">
        <div className="slide_down_animation">
          <Image
          src="/iss.png"
          alt="International Space Station"
          height={800}
          width={800}
          priority
          className="drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]"
          />
        </div>
        <button className="px-8 py-3 bg-[#06B6D4] border-2 border-[#06B6D4] text-[#030712] font-mono tracking-widest rounded shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:bg-[#06B6D4] hover:text-[#030712] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:cursor-pointer transition-all duration-300 animate-fade-in">
          [ START_TRACKING ]
        </button>
      </div>
    </>
  );
}
