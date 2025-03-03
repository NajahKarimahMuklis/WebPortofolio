import { useState } from "react";

function Feedback() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  };

  return (
    <div className="h-screen mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div className="lg:col-span-2 lg:py-12 flex justify-end">
          <p className="max-w-xl text-lg text-white">
            Untuk menyempurnakan desain dari <i>website</i> ini, silakan beri masukan dan kritik yang membangun.
            Semua identitas akan dirahasiakan. 
            <i> Your opinion really matters.</i>

          </p>
        </div>

        <div className=" bg-sky-100 rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">
                Nama
              </label>
              <input
                className="w-full rounded-lg border border-slate-900  p-3 text-sm"
                placeholder="Nama"
                type="text"
                id="name"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-lg border border-slate-900 p-3 text-sm"
                  placeholder="Alamat Email"
                  type="email"
                  id="email"
                  required
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Nomor Telepon
                </label>
                <input
                  className="w-full rounded-lg border border-slate-900 p-3 text-sm"
                  placeholder="Nomor Telepon"
                  type="tel"
                  id="phone"
                  required
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full rounded-lg border border-slate-900  p-3 text-sm"
                placeholder="Pesan"
                rows="6"
                id="message"
                required
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Kirim Masukan
              </button>
            </div>

            {submitted && (
              <p className="mt-4 text-green-600 font-medium">
                Masukan telah dikirim!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
