import { useContext } from "react";
import { NavLink, Link } from "react-router-dom"; // react-router-dom থেকে নেওয়া
import { AuthContext } from "../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  // active হলে bg-amber-500 যোগ হবে, না হলে কিছু না (empty string)
  const activeClassName = "bg-amber-500";

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeClassName : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-coffees"
                className={({ isActive }) => (isActive ? activeClassName : "")}
              >
                All Coffee's
              </NavLink>
            </li>

            {user && (
              <>
                <li>
                  <NavLink
                    to="/addCoffee"
                    className={({ isActive }) =>
                      isActive ? activeClassName : ""
                    }
                  >
                    Add Coffee
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/my-added-coffees"
                    className={({ isActive }) =>
                      isActive ? activeClassName : ""
                    }
                  >
                    My Added Coffee's
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-orders"
                    className={({ isActive }) =>
                      isActive ? activeClassName : ""
                    }
                  >
                    My Orders
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Coffee Store</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClassName : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-coffees"
              className={({ isActive }) => (isActive ? activeClassName : "")}
            >
              All Coffee's
            </NavLink>
          </li>

          {user ? (
            <>
              <li>
                <NavLink
                  to="/addCoffee"
                  className={({ isActive }) =>
                    isActive ? activeClassName : ""
                  }
                >
                  Add Coffee
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-added-coffees"
                  className={({ isActive }) =>
                    isActive ? activeClassName : ""
                  }
                >
                  My Added Coffee's
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-orders"
                  className={({ isActive }) =>
                    isActive ? activeClassName : ""
                  }
                >
                  My Orders
                </NavLink>
              </li>
              <div className="flex justify-around items-center gap-2">
                {user?.photoURL && (
                  <img
                    src={user.photoURL}
                    referrerPolicy="no-referrer"
                    alt="avatar"
                    className="w-8 h-8 rounded-full hidden md:flex"
                  />
                )}
                <button className="btn btn-warning" onClick={logOut}>
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <li>
                <Link to="/signin" className="">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
