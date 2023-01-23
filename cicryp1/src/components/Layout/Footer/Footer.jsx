import React from "react";
import "./../Footer/Footer.scss";
import { BsFacebook } from "react-icons/bs";
import { FaVimeoSquare } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row_foot">
          <div className="col-lg-2 col-md-12 col-sm-12">
            <ul>
              <li id="img_li">
                <img
                  src="https://chisnghiax.com/ciscryp/static/media/logo-light.efd6c8c15ce9ff0f90cc7add4d464ab1.svg"
                  alt=""
                />
              </li>
              <li>
                <BsFacebook />
                Facebook
              </li>
              <li>
                <FaVimeoSquare />
                Vimeo
              </li>
              <li>
                <AiFillYoutube />
                Youtube
              </li>
              <li>
                <BsTelegram />
                Telegram
              </li>
              <li>
                <AiFillTwitterCircle />
                Twitter
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 cl2">
            <ul className="ul_writing">
              <li>Getting started</li>
              <li>Installation</li>
              <li>Release Notes</li>
              <li>Upgrade Guide</li>
              <li>Browser Support</li>
              <li>Editor Support</li>
              <li>Dark Mode</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 cl2">
            <ul className="ul_writing">
              <li>Explore</li>
              <li>Design features</li>
              <li>Prototyping</li>
              <li>Design systems</li>
              <li>Pricing</li>
              <li>Customers</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 cl2">
            <ul className="ul_writing">
              <li>Getting started</li>
              <li>Installation</li>
              <li>Release Notes</li>
              <li>Upgrade Guide</li>
              <li>Browser Support</li>
              <li>Editor Support</li>
              <li>Dark Mode</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 cl2">
            <ul className="ul_writing">
              <li>Community</li>
              <li>Design features</li>
              <li>Prototyping</li>
              <li>Design systems</li>
              <li>Pricing</li>
              <li>Customers</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
