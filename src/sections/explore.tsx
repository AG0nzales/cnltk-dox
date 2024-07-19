const Explore = () => {
  return (
    <main className="models-mainpage mt-16 flex flex-col items-center">
      <section className="flex flex-col items-start w-full max-w-6xl mt-20 sm:mt-20 lg:mt-2">
        <div className="w-full">
          <div className="flex flex-col text-center items-center gap-4">
            <span className="raleway text-3xl font-bold tracking-wide">
              Developers that made the Cebuano Natural Language Toolkit possible
            </span>
            <div className="max-w-2xl">
              <span className="raleway opacity-50 tracking-wide">
                These are the developers that made the CNLTK possible
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-12">
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
      </section>
    </main>
  );
};

export default Explore;
