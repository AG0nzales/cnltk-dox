const Navbar = () => {
  return (
    <div className="navbar-container fixed top-0 left-1/2 transform -translate-x-1/2 max-w-5xl w-full bg-transparent backdrop-blur-sm z-50 scroll-smooth">
      <div className="flex items-center gap-5 justify-between p-4">
        <a href="#home">
          <span className="p-2 bg-gray-100 rounded-lg shadow-lg font-semibold border text-xs sm:text-xs lg:text-lg">
            CNLTK
          </span>
        </a>

        <div className="container-nav">
          <ul className="list-nav flex items-center gap-8 py-1">
            <a href="#documentation">
              <li className="text-xs font-semibold raleway sm:text-xs lg:text-lg">
                Documentation
              </li>
            </a>

            <a href="#models">
              <span className="text-xs font-semibold raleway sm:text-xs lg:text-lg">
                Models
              </span>
            </a>

            <a href="#explore">
              {" "}
              <span className="text-xs font-semibold raleway sm:text-xs lg:text-lg">
                Explore
              </span>
            </a>

            <a href="#articles">
              <span className="font-semibold raleway hidden sm:hidden lg:block">
                Articles
              </span>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
