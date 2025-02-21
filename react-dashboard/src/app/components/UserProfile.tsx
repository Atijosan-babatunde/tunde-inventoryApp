const UserProfile = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <img
          src="https://via.placeholder.com/100"
          alt="User"
          className="mx-auto rounded-full mb-2"
        />
        <h3 className="text-lg font-semibold">John Doe</h3>
        <p className="text-gray-600">Administrator</p>
      </div>
    );
  };
  
  export default UserProfile;
  