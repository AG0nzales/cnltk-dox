const Explore = () => {
  return (
    <main className="models-mainpage mt-16 flex flex-col items-center">
      <section className="flex flex-col items-start w-full max-w-6xl mt-2 sm:mt-2 lg:mt-2">
        <div className="w-full p-2">
          <div className="flex flex-col text-center items-center gap-4">
            <span className="raleway text-xl sm:text-xl lg:text-3xl font-bold tracking-wide">
              Developers that made the Cebuano Natural Language Toolkit possible
            </span>
            <div className="max-w-2xl">
              <span className="raleway opacity-50 tracking-wide text-sm sm:text-sm lg:text-lg">
                These are the developers that made the CNLTK possible
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-12 p-2">
            <div className="border shadow-lg rounded-l-full p-5 flex flex-col">
              <div className="flex justify-between">
                <img
                  src="/public/assets/glenn.png"
                  alt="sample"
                  className="border rounded-full"
                  width={150}
                  height={150}
                />
                <div className="flex flex-col gap-1 text-right">
                  <span className="raleway text-lg font-semibold">
                    Glenn Nituda
                  </span>
                  <span className="raleway text-sm text-gray-400 font-semibold">
                    Software Engineer
                  </span>
                  <hr className="mt-5 mb-5" />
                  <div>
                    <span className="raleway text-xs font-semibold">
                      Bachelor of Science in <br />{" "}
                      <span className="text-gray-400">Computer Science</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border shadow-lg rounded-l-full p-5 flex flex-col">
              <div className="flex justify-between">
                <img
                  src="/public/assets/andre.png"
                  alt="sample"
                  className="border rounded-full "
                  width={150}
                  height={150}
                />
                <div className="flex flex-col gap-1 text-right">
                  <span className="raleway text-lg font-semibold">
                    Joshua Gonzales
                  </span>
                  <span className="raleway text-sm text-gray-400 font-semibold">
                    Software Engineer
                  </span>
                  <hr className="mt-5 mb-5" />
                  <div>
                    <span className="raleway text-xs font-semibold">
                      Bachelor of Science in <br />{" "}
                      <span className="text-gray-400">Computer Science</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border shadow-lg rounded-l-full p-5 flex flex-col">
              <div className="flex justify-between">
                <img
                  src="/public/assets/occi.png"
                  alt="sample"
                  className="border rounded-full "
                  width={150}
                  height={150}
                />
                <div className="flex flex-col gap-1 text-right">
                  <span className="raleway text-lg font-semibold">
                    J-Adrielle Gustilo
                  </span>
                  <span className="raleway text-sm text-gray-400 font-semibold">
                    Researcher
                  </span>
                  <hr className="mt-5 mb-5" />
                  <div>
                    <span className="raleway text-xs font-semibold">
                      Bachelor of Science in <br />{" "}
                      <span className="text-gray-400">Computer Science</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-auto mt-14">
          <a
            href="https://dl.acm.org/doi/10.1145/3582099.3582101"
            target="_blank"
          >
            <button
              type="button"
              className="px-4 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-3 text-xs sm:text-xs lg:text-sm rounded-lg raleway font-semibold shadow-lg border border-blue-200 hover:opacity-80 w-fit"
            >
              Published Paper
            </button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Explore;
