import Ballpit from "../src/components/Ballpit";

function Footer() {
  return (
    <div className="bg-slate-950 text-white relative">
      
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "600px", 
          overflow: "hidden",
          zIndex: 0, 
        }}
      >
        <Ballpit
          count={70} 
          gravity={0.7}
          friction={0.8}
          wallBounce={0.95}
          followCursor={true}
          colors={[0x0000ff, 0x000080, 0x191970]} 
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-extrabold text-gray-200 sm:text-5xl">
          <i>"Once you stop learning, you start dying"</i>
        </h2>

        <p className="mt-4 max-w-lg text-gray-400">
          Kutipan <i>Once you stop learning, you start dying</i> berasal dari
          Albert Einstein. Artinya, ketika seseorang berhenti belajar,
          berkembang, atau mencari pengetahuan baru, mereka secara perlahan
          kehilangan semangat hidup dan kreativitasnya.
        </p>
      </div>
    </div>
  );
}

export default Footer;
