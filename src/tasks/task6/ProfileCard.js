// Child Component: Displays individual user profile card
const ProfileCard = ({}) => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
      {/* Profile Header with Name */}
      <div className="flex items-center mb-4">
        <div className="bg-white p-2 h-[40px] w-[40px] flex justify-center items-center rounded-full shadow-lg text-blue-600 text-xl font-bold uppercase">
          N
        </div>
        <h2 className="ml-4 text-2xl font-semibold">Name</h2>
      </div>

      {/* Username */}
      <p className="text-lg mb-2">
        <span className="font-semibold">Username:</span> username
      </p>

      {/* Email */}
      <p className="text-lg mb-2">
        <span className="font-semibold">Email:</span> user email
      </p>

      {/* Phone */}
      <p className="text-lg mb-2">
        <span className="font-semibold">Phone:</span> phone no
      </p>

      {/* Website with Icon */}
      <p className="text-lg mb-4">
        <span className="font-semibold">Website:</span>{" "}
        <a
          href={`https://www.google.com`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 underline"
        >
          www.google.com
        </a>
      </p>

      {/* Address Section */}
      <div className="mt-4 bg-white text-blue-900 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Address:</h3>
        <p className="text-sm">Street, City</p>
        <p className="text-sm">ZipCode</p>
      </div>

      {/* Company Section */}
      <div className="mt-4 bg-white text-blue-900 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Company:</h3>
        <p className="text-sm">Company Name</p>
        <p className="text-sm italic">"Catch Phrase"</p>
      </div>
    </div>
  );
};

export default ProfileCard;
