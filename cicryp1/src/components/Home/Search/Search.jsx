import React from "react";
import styled from "./../Search/Search.module.css";
import "./../Search/Search.css";
import { FiFilter } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiTime } from "react-icons/bi";

import { data } from "./../../../Mock/Cards.js";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  // console.log(search);
  return (
    <section id={styled.search}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={styled.search_header}>
              <h1>Featured NFTs</h1>
              <p>Discover the most outstanding NFTs in all topics of life.</p>
            </div>
          </div>
        </div>
        <div className="row row_search_2">
          <div className="col-lg-7">
            <ul className={styled.isotop_details_left}>
              <li>
                <a href="#">All NFTs</a>
              </li>
              <li>
                <a href="#">Arts</a>
              </li>
              <li>
                <a href="#">Musics</a>
              </li>
              <li>
                <a href="#">Sports</a>
              </li>
              <li>
                <a href="#">Photography</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <ul className={styled.isotop_details_right}>
              <form action="#">
                <input
                  onChange={(el) => setSearch(el.target.value)}
                  type="text"
                  name=""
                  id=""
                  placeholder="Search items"
                />
                <span>
                  <FiSearch />
                </span>
              </form>
              <li>
                <a href="#">
                  <FiFilter />
                  Filter
                  <BiChevronDown />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          {data &&
            data
              .filter((e) => {
                return search.toLowerCase() === ""
                  ? e
                  : e.desc.toLowerCase().includes(search);
              })
              .map((e) => (
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className={styled.card}>
                    <div className={styled.card_img}>
                      <img src={e.img} alt="" />
                      <span id={styled.span_video}>
                        <AiOutlineVideoCamera />
                      </span>
                      <span id={styled.span_heart}>
                        <AiOutlineHeart />
                        22
                      </span>
                    </div>
                    <div className={styled.card_details}>
                      <div className={styled.portret_icons}>
                        <div className={styled.img}>
                          <img
                            src="https://chisnghiax.com/ciscryp/static/media/Image-9.d879028d45de09c9ca3b.png"
                            alt=""
                          />
                          <img
                            src="https://chisnghiax.com/ciscryp/static/media/Image-5.b1088376a574bcedc983.png"
                            alt=""
                          />
                          <img
                            src="https://chisnghiax.com/ciscryp/static/media/Image-1.90baa8cc883db8970fda.png"
                            alt=""
                          />
                          <img
                            src="https://chisnghiax.com/ciscryp/static/media/Image-9.d879028d45de09c9ca3b.png"
                            alt=""
                          />
                        </div>
                        <span>97 in stock</span>
                      </div>
                      <h2>{e.desc}</h2>
                      <div className={styled.card_eth}>
                        <div className={styled.card_eth_left}>
                          <a href="#">1.000 ETH</a>
                        </div>
                        <div className={styled.card_eth_right}>
                          <span>
                            <BiTime />3 hours left
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Search;
