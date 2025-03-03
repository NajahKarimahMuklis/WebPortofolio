import CircularText from "../src/components/CircularText";


function SocMed() {
  return (
    <div className="mt-30">
      <div className="m-10 mx-auto ">
        <CircularText
          text="MY * SOCIAL * MEDIA *"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      </div>

      <div className="mx-auto flex flex-wrap justify-center gap-3 mb-20">
        <a
          href="https://www.instagram.com/najahkarimah"
          className="group block"
        >
          <img
            src="src\image\instagram.png"
            alt=""
            className="h-[250px] object-cover sm:h-[250px]"
          />

          <div className="mt-1.5">
            <p className="text-xs text-gray-500">Instagram</p>

            <div className="mt-1.5 flex gap-1">
              <form>
                <fieldset>
                  <legend className="sr-only">Color</legend>
                </fieldset>

                <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                  <div>
                    <input type="checkbox" id="ColorSg" className="sr-only" />

                    <label
                      htmlFor="ColorSg"
                      className="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                    >
                      <span className="sr-only"> Space Gray </span>
                    </label>
                  </div>

                  <div>
                    <input type="checkbox" id="ColorG" className="sr-only" />

                    <label
                      htmlFor="ColorG"
                      className="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                    >
                      <span className="sr-only">Avocado </span>
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="ColorS" className="sr-only" />

                    <label
                      htmlFor="ColorS"
                      className="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                    >
                      <span className="sr-only"> White </span>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </a>

        <a href="https://t.me/najahkarimahm" className="group block">
          <img
            src="src\image\telegram.png"
            alt=""
            className="h-[250px] object-cover sm:h-[250px]"
          />

          <div className="mt-1.5">
            <p className="text-xs text-gray-500">Telegram</p>

            <div className="mt-1.5 flex gap-1">
              <form>
                <fieldset>
                  <legend className="sr-only">Color</legend>
                </fieldset>

                <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                  <div>
                    <input type="checkbox" id="ColorSg" className="sr-only" />

                    <label
                      htmlFor="ColorSg"
                      className="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                    >
                      <span className="sr-only"> Space Gray </span>
                    </label>
                  </div>

                  <div>
                    <input type="checkbox" id="ColorG" className="sr-only" />

                    <label
                      htmlFor="ColorG"
                      className="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                    >
                      <span className="sr-only">Avocado </span>
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="ColorS" className="sr-only" />

                    <label
                      htmlFor="ColorS"
                      className="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                    >
                      <span className="sr-only"> White </span>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </a>
        <a
          href="https://wa.me/6285363242318"
          className="group block"
        >
          <img
            src="src\image\whatsapp.png"
            alt=""
            className="h-[250px] object-cover sm:h-[250px]"
          />

          <div className="mt-1.5">
            <p className="text-xs text-gray-500">WhatsApp</p>

            <div className="mt-1.5 flex gap-1">
              <form>
                <fieldset>
                  <legend className="sr-only">Color</legend>
                </fieldset>

                <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                  <div>
                    <input type="checkbox" id="ColorSg" className="sr-only" />

                    <label
                      htmlFor="ColorSg"
                      className="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                    >
                      <span className="sr-only"> Space Gray </span>
                    </label>
                  </div>

                  <div>
                    <input type="checkbox" id="ColorG" className="sr-only" />

                    <label
                      htmlFor="ColorG"
                      className="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                    >
                      <span className="sr-only">Avocado </span>
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="ColorS" className="sr-only" />

                    <label
                      htmlFor="ColorS"
                      className="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                    >
                      <span className="sr-only"> White </span>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SocMed;
