const Footer = () => {
  return (
    <main className="models-mainpage mt-10 flex flex-col items-center">
      <section className="flex flex-col items-start w-full max-w-6xl mt-2 sm:mt-2 lg:mt-2">
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-20 p-2">
          <div className="flex flex-col gap-2 w-full">
            <span className="raleway font-bold text-4xl ">CNLTK</span>
            <span className="raleway font-semibold text-sm ">
              Supports for this library is highly appreciated.
            </span>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <span className="raleway text-xs font-semibold  tracking-wider">
              Natural Language Processing
            </span>
            <span className="raleway text-xs font-semibold  tracking-wider">
              Computer Methodologies
            </span>
            <span className="raleway text-xs font-semibold  tracking-wider">
              Artificial Intelligence
            </span>
            <span className="raleway text-xs font-semibold  tracking-wider">
              Language Resources
            </span>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <span className="raleway text-xs font-semibold  tracking-wider">
              Cebuano Language
            </span>
            <span className="raleway text-xs font-semibold  tracking-wider">
              Davao City, Philippines
            </span>
            <span className="raleway text-xs font-semibold  tracking-wider">
              ZIP 8000
            </span>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <span className="raleway text-xs font-semibold  tracking-wider">
              University of the Immaculate Conception
            </span>
            <span className="raleway text-xs font-semibold  tracking-wider">
              Father Selga Campus
            </span>
          </div>
        </div>

        <div className="w-full">
          <hr className="border-t border-gray-400 mt-10 mb-10 w-full" />
          <div className="flex justify-center items-center">
            <span className="raleway text-xs font-normal">
              © Josh Gnzls 2023
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Footer;
