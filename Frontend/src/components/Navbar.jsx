// import React from "react";
// import { useAuth } from "../context/AuthContext";

// const Navbar = () => {
//   const { currentUser, logOut } = useAuth();

//   return (
//     <nav className="p-4 bg-blue-500 text-white flex justify-between">
//       <h1>Voice Quest Galaxy</h1>
//       {currentUser && (
//         <button onClick={logOut} className="bg-red-500 px-4 py-2 rounded">
//           Logout
//         </button>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { currentUser, logOut } = useAuth();

  return (
    <nav className="p-4 bg-blue-800 text-white flex justify-between">
      <Link to="/">Home</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      {currentUser && (
        <button onClick={logOut} className="bg-red-500 px-4 py-2 rounded">
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
