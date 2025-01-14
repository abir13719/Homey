import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("log out"))
      .catch((error) => console.error(error));
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/update-profile">Update Profile</NavLink>
        </li>
      )}
      {user ? (
        <></>
      ) : (
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="container mx-auto navbar bg-green-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Homey</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <div className="relative h-11 w-20">
                <div className="absolute top-0 right-0 bottom-0 opacity-100 hover:opacity-0">
                  <img className="h-10 w-10 rounded-lg" src={user.photoURL} />
                </div>
                <div className=" absolute h-full top-0 right-0 text-white bg-black hover:bg-black left-0 bottom-0 rounded-lg opacity-0 hover:opacity-100 transition-all ease-in">
                  <p className="text-nowrap mt-1 text-center">{user.displayName}</p>
                </div>
              </div>
              <button onClick={handleLogOut} className="btn text-white bg-black hover:bg-black">
                Log Out
              </button>
            </>
          ) : (
            <NavLink to="/login" className="btn text-white bg-black hover:bg-black">
              Log In
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
