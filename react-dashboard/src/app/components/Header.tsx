const Header = () => {
    return (
      <header className="flex justify-between items-center bg-gray-100 p-4 shadow-md">
        <h1 className="text-xl font-semibold">Welcome Babatunde </h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 border rounded-md"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Logout
          </button>
        </div>
      </header>
    );
  };
  
  export default Header;
  