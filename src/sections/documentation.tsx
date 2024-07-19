const Documentation = () => {
  return (
    <main className="models-mainpage mt-16 flex flex-col items-center">
      <section className=" flex flex-col items-start w-full max-w-4xl mt-20 sm:mt-20 lg:mt-2">
        <div className="flex flex-col gap-2">
          <span className="raleway text-2xl font-bold tracking-wide">
            Getting started with CNLTK
          </span>
          <span className="raleway opacity-50 tracking-wide">
            Explore each modules on how to get started with the CNLTK library
          </span>
          <div className="image-container mt-10">
            <img
              src="/public/assets/cnltk-beta2.png"
              alt="sample"
              className="w-full rounded-lg"
            />
          </div>
          <span className="raleway text-gray-400 leading-6 mt-10">
            The developer has kept CNLTK in beta to refine features, fix bugs,
            and gather user feedback. This phase ensures robustness and
            usability before a stable release. User input is crucial for
            improving the toolkit. as for now it is{" "}
            <span className="font-bold text-black">unsupported</span>.
          </span>

          <hr className="mt-10 mb-10" />
          <div className="installation-container flex gap-10">
            <div className="w-full flex flex-col gap-2">
              <span className="raleway text-xl font-bold tracking-wide">
                Installation
              </span>
              <span className="raleway text-gray-400 text-sm">
                This section will guide you on how to install CNLTK on your
                local machine.
              </span>
              <div className="mt-5 border-b pb-5 w-80 grid grid-cols-3">
                <span className="col-span-1 text-sm raleway">01</span>
                <span className="col-span-2 text-sm raleway leading-6">
                  input pip install cnltk-beta==1.0.1 <br />
                  <span className="text-gray-400">
                    this will install cnltk to your local machine
                  </span>
                </span>
              </div>
              <div className="mt-5 border-b pb-5 w-80 grid grid-cols-3">
                <span className="col-span-1 text-sm raleway">02</span>
                <span className="col-span-2 text-sm raleway">
                  after installation import corpus <br />
                  <span className="text-gray-400 leading-6">
                    this will make sure that the corpus is available for use and
                    is imported to your local machine
                  </span>
                </span>
              </div>
            </div>
            <div className="image-container w-full">
              <img
                src="/public/assets/samp2.png"
                alt="sample"
                className="w-full rounded-lg"
              />
            </div>
          </div>
          <hr className="mt-10 mb-10" />
          <div className="modules-container flex flex-col gap-5">
            <div className="flex flex-col gap-2 mb-5">
              <span className="raleway text-xl font-bold tracking-wide">
                Modules Overview
              </span>
              <span className="raleway text-gray-400 text-sm">
                This section will guide you on{" "}
                <span className="text-black font-semibold italic">some</span> of
                the modules available in the CNLTK library. Here is the
                preprocessing module.
              </span>
            </div>
            <div className="image-container w-full">
              <img
                src="/public/assets/prepro2.png"
                alt="sample"
                className="w-full rounded-lg"
              />
            </div>
            <div className="flex gap-16 mt-5">
              <div className="flex flex-col gap-2">
                <span className="raleway text-xl font-bold tracking-wide">
                  Preprocessing
                </span>
                <span className="raleway text-gray-400 text-sm">
                  This module is responsible for cleaning sample data and making
                  it ready for the model.
                </span>
              </div>
              <div className="flex flex-col gap-2 w-[35rem]">
                <div className="w-full border-b mt-5 pb-5 grid grid-cols-3">
                  <span className="col-span-1 text-sm raleway">01</span>
                  <span className="col-span-2 text-sm raleway leading-6">
                    import CNLTK preprocessing <br />
                    <span className="text-gray-400">
                      this will import the cnltk preprocessing functions to your
                      local machine.
                    </span>
                  </span>
                </div>
                <div className="w-full mt-5 pb-5 grid grid-cols-3 leading-6">
                  <span className="col-span-1 text-sm raleway">02</span>
                  <span className="col-span-2 text-sm raleway">
                    make use of preprocessing functions <br />
                    <span className="text-gray-400">
                      there are two functions available in the preprocessing
                      module that you can use to clean your data. The POS
                      tagging and NER tagging.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-10 mb-10" />
          <div className="modules-container flex flex-col gap-5">
            <div className="flex flex-col gap-2 mb-5">
              <span className="raleway text-xl font-bold tracking-wide">
                Part of Speech Module
              </span>
              <span className="raleway text-gray-400 text-sm">
                This section showcases the POS Tagger module in the CNLTK
                library.
              </span>
            </div>
            <div className="image-container w-full">
              <img
                src="/public/assets/pos2.png"
                alt="sample"
                className="w-full rounded-lg"
              />
            </div>
            <div className="flex gap-16 mt-5">
              <div className="flex flex-col gap-2">
                <span className="raleway text-xl font-bold tracking-wide">
                  POS Tagging
                </span>
                <span className="raleway text-gray-400 text-sm">
                  This module is responsible for tagging part of speech in the
                  CNLTK library. such as Verbs, Nouns, Adjectives, and etc.
                </span>
              </div>
              <div className="flex flex-col gap-2 w-[35rem]">
                <div className="w-full border-b mt-5 pb-5 grid grid-cols-3">
                  <span className="col-span-1 text-sm raleway">01</span>
                  <span className="col-span-2 text-sm raleway leading-6">
                    import CNLTK pos_tagger <br />
                    <span className="text-gray-400">
                      this will import the cnltk pos_tagger functions to your
                      local machine.
                    </span>
                  </span>
                </div>
                <div className="w-full mt-5 pb-5 grid grid-cols-3 leading-6">
                  <span className="col-span-1 text-sm raleway">02</span>
                  <span className="col-span-2 text-sm raleway">
                    make use of pos_tagger functions <br />
                    <span className="text-gray-400">
                      this will allow you to tag the part of speech in your
                      sample data. simply call the pos_tagger function and pass
                      the data as an argument.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-10 mb-10" />
          <div className="modules-container flex flex-col gap-5">
            <div className="flex flex-col gap-2 mb-5">
              <span className="raleway text-xl font-bold tracking-wide">
                Named Entity Recognition Module
              </span>
              <span className="raleway text-gray-400 text-sm">
                This section showcases the NER Tagger module in the CNLTK
                library.
              </span>
            </div>
            <div className="image-container w-full">
              <img
                src="/public/assets/ner2.png"
                alt="sample"
                className="w-full rounded-lg"
              />
            </div>
            <div className="flex gap-16 mt-5">
              <div className="flex flex-col gap-2">
                <span className="raleway text-xl font-bold tracking-wide">
                  NER Tagging
                </span>
                <span className="raleway text-gray-400 text-sm">
                  This module is responsible for tagging entities in the CNLTK
                  library. such as Time, Person, Illness, and etc.
                </span>
              </div>
              <div className="flex flex-col gap-2 w-[35rem]">
                <div className="w-full border-b mt-5 pb-5 grid grid-cols-3">
                  <span className="col-span-1 text-sm raleway">01</span>
                  <span className="col-span-2 text-sm raleway leading-6">
                    import CNLTK ner_tagger <br />
                    <span className="text-gray-400">
                      this will import the cnltk ner_tagger functions to your
                      local machine.
                    </span>
                  </span>
                </div>
                <div className="w-full mt-5 pb-5 grid grid-cols-3 leading-6">
                  <span className="col-span-1 text-sm raleway">02</span>
                  <span className="col-span-2 text-sm raleway">
                    make use of ner_tagger functions <br />
                    <span className="text-gray-400">
                      this will allow you to tag the part of speech in your
                      sample data. simply call the ner_tagger function and pass
                      the data as an argument.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Documentation;
