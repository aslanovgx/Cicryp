import React from "react";
import styled from "./../Navbar/Navbar.module.css";
import "./../Navbar/Navbar.css";
import { FiSearch } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { BsMoon } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav id={styled.nav}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className={styled.nav_left}>
              <img
                src="https://chisnghiax.com/ciscryp/static/media/logo-light.efd6c8c15ce9ff0f90cc7add4d464ab1.svg"
                alt=""
              />
              <form action="#">
                <input type="text" name="" id="" placeholder="Search items" />
                <span>
                  <FiSearch />
                </span>
              </form>
            </div>
          </div>
          <div className="col-6">
            <ul className={styled.nav_right}>
              <li>
                <a href="#">
                  Discover
                  <BiChevronDown />
                </a>
              </li>
              <li>
                <a href="#">Help center</a>
              </li>
              <li>
                <a href="#">
                  <BsMoon className="moon" />
                </a>
              </li>
              <li>
                <a href="#">Create</a>
              </li>
              <li>
                <a href="#">Connect Wallet</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
