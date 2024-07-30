const Models = () => {
  return (
    <main className="models-mainpage mt-1 sm:mt-1 lg:mt-16 flex flex-col items-center">
      <section className="flex flex-col items-start w-full max-w-6xl mt-10 sm:mt-10 lg:mt-2">
        <div className="section-container w-full">
          <div className="w-80 lg:w-full m-auto sm:m-auto lg:m-0 flex flex-col text-center items-center gap-4">
            <span className="raleway text-lg sm:text-lg lg:text-3xl font-bold tracking-wide">
              CNLTK Model trained using Hybrid Neural Network
            </span>
            <div className="max-w-2xl">
              <span className="raleway opacity-50 tracking-wide text-xs sm:text-xs lg:text-sm">
                Explore each models used to train the CNLTK model corpus
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-2 sm:mt-2 lg:mt-12 p-10 sm:p-10 lg:0">
            <div className="border shadow-lg rounded-lg p-5 flex flex-col">
              <div className="aspect-square mb-2 border">
                <img
                  src="/public/assets/bilstm.png"
                  alt="sample"
                  className="w-full h-full object-fit rounded-lg"
                />
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <span className="raleway text-sm bg-blue-100 rounded-lg p-2 w-fit">
                  Bidirectional LSTM
                </span>
                <span className="raleway text-lg font-bold tracking-wide">
                  Better sequence prediction with bidirectional context
                </span>
              </div>
            </div>

            <div className="border shadow-lg rounded-lg p-5 flex flex-col">
              <div className="aspect-square mb-2 border">
                <img
                  src="/public/assets/crf.png"
                  alt="sample"
                  className="w-full h-full object-fit rounded-lg"
                />
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <span className="raleway text-sm bg-blue-100 rounded-lg p-2 w-fit">
                  Conditional Random Field
                </span>
                <span className="raleway text-lg font-bold tracking-wide">
                  Refined sequence labeling with conditional probability
                </span>
              </div>
            </div>

            <div className="border shadow-lg rounded-lg p-5 flex flex-col">
              <div className="aspect-square mb-2 border">
                <img
                  src="/public/assets/attention.png"
                  alt="sample"
                  className="w-full h-full object-fit rounded-lg"
                />
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <span className="raleway text-sm bg-blue-100 rounded-lg p-2 w-fit">
                  Self-Attention Mechanism
                </span>
                <span className="raleway text-lg font-bold tracking-wide">
                  Focus on key elements in sequences
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Models;
