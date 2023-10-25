import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import PropTypes from "prop-types";

const Navbar = () => {
  const links = (
    <>
      <li className="flex items-center justify-start"></li>

      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-[#FF3811] font-semibold text-[18px] underline"
              : "text-[var(--body_color)] font-semibold text-[18px]"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-[#FF3811] font-semibold text-[18px] underline"
              : "text-[var(--body_color)] font-semibold text-[18px]"
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-[#FF3811] font-semibold text-[18px] underline"
              : "text-[var(--body_color)] font-semibold text-[18px]"
          }
          to="/services"
        >
          <p className="flex items-center justify-center">Services</p>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-[#FF3811] font-semibold text-[18px] underline"
              : "text-[var(--body_color)] font-semibold text-[18px]"
          }
          to="/blog"
        >
          <p className="flex items-center justify-center">Blog</p>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-[#FF3811] font-semibold text-[18px] underline"
              : "text-[var(--body_color)] font-semibold text-[18px]"
          }
          to="/contact"
        >
          <p className="flex items-center justify-center">Contact</p>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="container flex items-center justify-between px-2 py-4 mx-auto">
      <div className="flex items-center justify-center">
        <img className="w-[100px]" src="/assets/logo.svg" alt="logo" />
      </div>
      <ul className="lg:flex hidden items-center uppercase justify-between gap-[60px]">
        {links}
      </ul>
      <div>
        <button className="btn btn-outline btn-warning">Appointment</button>
      </div>
      <div className="dropdown dropdown-left lg:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <AiOutlineMenu className="text-[36px] text-[var(--body_color)]" />
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase"
        >
          {links}
        </ul>
      </div>
    </div>
  );
};
Navbar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  selectedTheme: PropTypes.string.isRequired,
};

export default Navbar;
