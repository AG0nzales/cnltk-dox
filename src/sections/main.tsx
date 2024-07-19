const Main = () => {
  return (
    <main className="cnltk-mainpage mt-10 flex flex-col items-center">
      <section className="main-section flex flex-col items-start w-full max-w-4xl mt-20 sm:mt-20 lg:mt-2">
        <div className="w-full max-w-4xl mt-16">
          <div className="flex flex-col text-center items-center gap-4">
            <span className="raleway text-5xl font-bold tracking-wide">
              Effortlessly enhance Cebuano <br />
              text processing and analysis
            </span>
            <div className="max-w-2xl">
              <span className="raleway text-lg opacity-50 tracking-wide">
                Streamlined Cebuano NLP toolkit with Named Entity Recognition,
                Part of Speech tagging, and a rich corpus for efficient text
                analysis
              </span>
            </div>
          </div>
          <div className="mt-16 flex gap-3 items-center justify-center">
            <button
              type="button"
              className="px-5 py-3 rounded-lg bg-blue-100 raleway font-semibold text-sm shadow-lg border border-blue-200 hover:opacity-80"
            >
              Get started
            </button>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                type="text"
                placeholder="Quick search..."
                className="pl-10 p-2.5 rounded-lg border shadow-lg w-full"
              />
            </div>
          </div>
          <div className="mt-16 w-full flex gap-10">
            <div className="w-full h-full flex flex-col gap-4 mt-10">
              <span className="raleway text-2xl font-bold tracking-wide">
                Begin Your Journey with the CNLTK Library
              </span>
              <span className="raleway text-sm opacity-50 tracking-wide">
                CNLTK: Cebuano language processing with Named Entity Recognition
                and Part of Speech tagging. Try examples.
              </span>
              <button
                type="button"
                className="px-5 py-3 mt-6 rounded-lg raleway font-semibold text-sm shadow-lg border border-blue-200 hover:opacity-80 w-fit"
              >
                View repository
              </button>
            </div>

            <div className="image-container">
              <img
                src="/public/assets/prepro.png"
                alt="sample"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
