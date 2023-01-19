import React from "react";
import styled from "./../Discover/Discover.module.css";
import { FiSearch } from "react-icons/fi";
import { BsPen } from "react-icons/bs";

const Discover = () => {
  return (
    <section id={styled.discover}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={styled.discover_left}>
              <h1>
                Discover 🖼
                <br />
                collect, and sell
                <br />
                extraordinary{" "}
                <span>
                  NFTs
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAAAfCAYAAABkphawAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQLSURBVHgB7ZsNUtNAFMffhlFhdMbewNwAPAHxBPQG1hMYuIBwASbeAE5AOYHhBMYTGE5gnVGRGcn6f5ukLKFtkjYNTft+M7Bpkn7/8j42qSKgfb93QzTgZUU03AmCmAShRdSN77tKqS9YdrN1sdb6ncgotImjifp0LyHjOkp9vfX9PglCSziTVkLOnlbq4vbo6BMJQguoH6gPdxAB6WFUvN9BqbPnSXKogmBEgrAkFP+bUCcWkbpRWComNbNgN1q/Ja2HU/ZjUb9LqhaWhSquQHQ8hnSzhJPoKDTOo2YFgh1DtA9YnFYTSnQUGkdN21ChbmQ4Op5A3jMShBrwSRQe8yZYld2hQqo2nXWSJCeSroVZsHx/iLwtpT7ipmdWKhVsn54elorIVIyOIqQwEfjjbTnOQaL1ADd7xe3cc1QS0XrA0ujIYJ9jCHkuQm4uLJ/jOPuQzKcJ8tlweVdLxOwJODpeYHGvZNcYpwqHd0nyWYTcDCz5BlSSPW1qR8TCkw6y6OiW7Sspe32ZV76MESw82Q6CYG4RrRfC6fo9VReSU3ZIQifhhuMvsuGsmq8Elu9cp5cbhvnKhUVkOF1jyIWsgpn2wRhKlFx9Mvn6CvJBIo/qy8eE+M7PtyHgpOsWGhExZw4hTZSkJLl8EQRDElYGK+V6lE+11CdE1LzcIToru2imURFzLCH3qXrdEGP/UFL30/DL9/dwms1Dg3lAaSM6T9RjKstnsxQRczIhvapNjYWRUiLl8hiLh6i3QLplWLZoHvlsliqijemyid4jF3tUH3OUJRhfBUFEQi3yBsNKtYtEPGaktB7i+7iaVvPVpTURc+ZM2zYxZI40ouUdjkQR8yG5dJo7W6JdnR74Li1OhMh5Vex2m6J1EW24IMbA85FclyyUGnCkX2EMcYRGm3I1OR/USK97OCDdhqVjTNTDY39bJOVW5UlFzBlPDxAdINo18aMtIycK7+hfklzjcaOuCsqyQYbeVppOWbw3+Iw44rm0WHotMq71+PNqu2FcCRGL/Pb9vsNizp++p2E+bHyRIzx+zJLiC46TdH3c5pxmdvD1WLJneI9JKpURTTtOD2kwr+OalM3mScUrspIi2oy7uzRaetQOMT6Ykc4uDkaKivMNEOa67M446/AaNexYIKRMN1ssjm0S432EnGpXselbeRGLZHWlhxe+zymKlhcxusxYuq6UJZ0TsQhHzKx+4vnKXSq/KmidSEsNrTnKcYkRvmQJO1gLd17ESbCcKq23eNylNDV2VVBTvyLCRSgVfuIv4mmrrgo3jbUUcRrZHKZpDDJJOa3vmo2prC61S0zp1SimJs3qT9M8Qbh43WSbxUaJWBVryiSvP11rs1t2f25y1MNfQcb2KFccPeY/fecD/SyCeGwAAAAASUVORK5CYII="
                    alt=""
                  />
                </span>
              </h1>
              <p>
                Discover the most outstanding NTFs in all topics of life.
                Creative your NTFs and sell them
              </p>
              <ul className={styled.explore_li}>
                <li>
                  <a href="#">
                    Explore
                    <FiSearch />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Create
                    <BsPen />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styled.discover_right}>
              <img
                src="https://chisnghiax.com/ciscryp/static/media/about-hero-right.527e5abf19aca9c2985a.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
