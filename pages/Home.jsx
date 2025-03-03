import Threads from "../src/components/Threads";

function Home() {
  return (
    <>
      <div className="min-h-screen">
        <div className="absolute pt-40 h-screen px-6 sm:px-12 flex flex-col text-center sm:text-left">
          <p className=" sm:text-xl  md:text-2xl mt-15 mb-5 ml-3 sm:ml-1 text-white ">
            <i>"The best way out is always through."</i>
          </p>
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif ml-6 sm:ml-1 text-white">
            <b>
              Welcome to <a className="text-orange-100">my portofolio!</a>
            </b>
          </p>
          
          
        </div>

        <div className="relative">
          <div style={{ width: "100%", height: "650px", position: "relative" }}>
            <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
