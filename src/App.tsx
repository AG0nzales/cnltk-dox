import Navbar from "./components/navbar";
import Documentation from "./sections/documentation";
import Explore from "./sections/explore";
import Footer from "./sections/footer";
import Main from "./sections/main";
import Models from "./sections/models";

function App() {
  return (
    <main className="">
      <Navbar />
      <section id="home" className="content-sections border-b pb-16">
        <Main />
      </section>
      <section id="models" className="content-sections border-b pb-16">
        <Models />
      </section>
      <section id="documentation" className="content-sections border-b pb-16">
        <Documentation />
      </section>
      <section id="explore" className="content-sections border-b pb-20">
        <Explore />
      </section>
      <section id="footer" className="content-sections border bg-gray-200 pb-5">
        <Footer />
      </section>
    </main>
  );
}

export default App;
