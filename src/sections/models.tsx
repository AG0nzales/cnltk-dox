const Models = () => {
  return (
    <main className="models-mainpage mt-16 flex flex-col items-center">
      <section className="flex flex-col items-start w-full max-w-6xl mt-20 sm:mt-20 lg:mt-2">
        <div className="w-full">
          <div className="flex flex-col text-center items-center gap-4">
            <span className="raleway text-3xl font-bold tracking-wide">
              CNLTK Model trained using Hybrid Neural Network
            </span>
            <div className="max-w-2xl">
              <span className="raleway opacity-50 tracking-wide">
                Explore each models used to train the CNLTK model corpus
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-12">
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
