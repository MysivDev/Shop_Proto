import React from "react";
import "./header.css";
import TopHeaderImg from "../assets/img/TopHeaderImg.webp";
import LeftHeaderImg from "../assets/img//LeftHeaderImg.webp";
import RightHeaderFrontImg from "../assets/img/RightHeaderFrontImg.webp";

function Header() {
  return (
    <>
      <section className="HeaderImgContainer">
        <img
          id="TopHeaderImg"
          src={TopHeaderImg}
        />
        <div id="gradient-overlay"></div>
      </section>
      <section id="LowerHeaderWrapper">
        <section id="LowerHeaderHeadingWrapper">
          <h3>AKATSUKI WINDBREAKER</h3>
          <h2>NEW ARRIVAL</h2>
        </section>

        <section id="LowerHeaderPictureWrapper">
          <div>
            <img
              id="LeftHeaderImg"
              src={LeftHeaderImg}
            />
          </div>
          <div id="RightImageContainer">
            <div id="RightImageWrapper">
              <img
                id="RightHeaderFrontImg"
                src={RightHeaderFrontImg}
              />
              <div class="RightHeaderImgDesc">
                <a href="URL einfügen">AKATSUKI WINDBREAKER</a>
              </div>
              <div class="RightHeaderImgDesc">
                <span>84,95€</span>
              </div>
              <div id="ButtonWrapper">
                <a
                  class="Button"
                  href="url"
                >
                  VIEW THIS PRODUCT
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Header;
