const Navbar = () => {
  return (
    <div className="navbar-container fixed top-0 left-1/2 transform -translate-x-1/2 max-w-5xl w-full bg-transparent backdrop-blur-sm z-50">
      <div className="flex items-center gap-5 justify-between p-4">
        <span className="p-2 bg-gray-100 rounded-lg shadow-lg font-semibold border">
          CNLTK
        </span>
        <div className="flex items-center gap-8 py-1">
          <span className="text-lg font-semibold raleway">Documentation</span>
          <span className="text-lg font-semibold raleway">Models</span>
          <span className="text-lg font-semibold raleway">Explore</span>
          <span className="text-lg font-semibold raleway">Articles</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
