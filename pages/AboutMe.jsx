import TrueFocus from "../src/components/TrueFocus";
import SplitText from "../src/components/SplitText";

function AboutMe() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="min-h-screen ">
      <div className="px-6 mt-10 gap-7 text-white ">
        <ul className="flex flex-col md:flex-row justify-center items-center gap-8">
          <li>
            <img
              src="./Npotrait.png"
              alt="Foto Najah"
              className="w-[60vw] md:w-[30vw] shadow-md mt-20"
            />
          </li>

          <li className="max-w-lg text-center md:text-left ">
            <div className="mb-10 md:text-left">
              <TrueFocus
                sentence="Who Am I?"
                manualMode={false}
                blurAmount={5}
                borderColor="white "
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            </div>
            <SplitText
              text="Hi! Assalamu'alaikum"
              className="text-2xl font-semibold"
              delay={170}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <p className="text-xl text-justify mt-4">
              {" "}
              {}
              Perkenalkan, nama saya{" "}
              <a className="text-orange-100">Najah Karimah Muklis</a>. Lahir dan
              tinggal di Pekanbaru, Riau. Saat ini menempuh pendidikan dengan program studi Teknik Informatika, di
              Universitas Islam Negeri Sultan Syarif Kasim Riau.
            </p>
          </li>
        </ul>
      </div>

      <div className="min-h-screen flex flex-col mt-30 items-center justify-center p-6">
        <article className="flex flex-col sm:flex-row bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden w-full max-w-5xl">
          <div className="sm:rotate-180 p-2 sm:[writing-mode:_vertical-lr] flex justify-center sm:justify-start">
            <span>2025</span>
          </div>

          <div className="sm:w-1/3 w-full">
            <img
              alt="Resume"
              src="./Nfoto.jpg"
              className="w-full h-64 sm:h-full object-cover"
            />
          </div>

          <div className="flex flex-col text-center flex-1 justify-center p-7">
            <h3 className="font-bold uppercase text-xl text-white">
              Cerita singkat tentang seorang Najah.
            </h3>
            <p className="sm:mt-3  text-sm text-gray-300 text-justify ">
              Lahir pada 07 November 2004, hadir sebagai anak kedua. Tumbuh
              besar di Bumi Lancang Kuning. Bisa dipanggil Najah, tetapi sudah
              terbiasa dipanggil Jah. Sukanya eksplorasi hal baru, tetapi juga
              gampang jenuh. Sedang menjalani kehidupan semester empat saat{" "}
              <i>website</i> ini dibuat. Hobinya bermain badminton dan{" "}
              <i>baking cake</i>. Tidak terlalu suka bermain game. Suka alam
              lebih dari pada perkotaan.
            </p>
          </div>
        </article>

        <div className="w-full max-w-5xl mt-10 overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-500 bg-gray-900 text-sm text-white shadow-lg rounded-lg">
            <thead className="text-left">
              <tr>
                <th className="px-4 py-2 font-medium text-gray-300">Jenjang</th>
                <th className="px-4 py-2 font-medium text-gray-300">
                  Nama Sekolah
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-500">
              <tr>
                <td className="px-4 py-2 font-medium text-gray-100">TK</td>

                <td className="px-4 py-2 text-gray-400">TK Bunayya</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-gray-100">
                  SD/Sederajat
                </td>

                <td className="px-4 py-2 text-gray-400">
                  MI Negeri 3 Pekanbaru
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-gray-100">
                  SMP/Sederajat
                </td>

                <td className="px-4 py-2 text-gray-400">
                  MTs Negeri 03 Kota Pekanbaru
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-gray-100">
                  SMA/Sederajat
                </td>

                <td className="px-4 py-2 text-gray-400">
                  MA Negeri 2 Kota Pekanbaru
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium text-gray-100">
                  S1/Sederajat
                </td>

                <td className="px-4 py-2 text-gray-400">
                  Universitas Islam Negeri Sultan Syarif Kasim Riau
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
