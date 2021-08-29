import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "./MainChampPre.css";
import { ChampPre } from "./MainChampPreStyled.jsx";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const server = process.env.REACT_APP_SERVER_URL;

const MainChampPre = ({ history }) => {
  const [rotaChamp, setRotaChamp] = useState([
    {
      id: "Amumu",
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg",
    },
    {
      id: "Alistar",
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg",
    },
    {
      id: "Sylas",
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sylas_0.jpg",
    },
    {
      id: "Chogath",
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg",
    },
  ]);

  const [imageIndex, setImageIndex] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <IoIosArrowForward />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <IoIosArrowBack />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyload: true,
    speed: 800,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1220,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 960,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480,
        settings: { autoplay: false, slidesToShow: 1 },
      },
    ],
  };

  useEffect(() => {
    axios
      .get(`${server}/champions/rotation`)
      .then((res) => {
        setRotaChamp(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <ChampPre id="champPre">
      <div className="container">
        <section className="champPreDesc">
          <div className="champPre-title-wrapper">
            <div className="champPre-title">- Rotation champion</div>
          </div>
          <div>
            <div className="champPreDesc-title">로테이션 챔피언</div>
            <div className="champPreDesc-text">
              플레이어 여러분의 게임에 대한 이해와 숙련도 향상을 돕기 위해 특정
              챔피언들이 무료로 제공됩니다.{" "}
            </div>
            <div className="champPreDesc-details">
              <div className="tip">Tip!</div> 챔피언 정보를 더 알아보려면
              이미지를 클릭하세요!
            </div>
          </div>
        </section>

        <div className="slideWrapper">
          <Slider {...settings}>
            {rotaChamp.map((ele, idx) => (
              <div
                className={idx === imageIndex ? "slide activeSlide" : "slide"}
                onClick={() => {
                  history.push({
                    pathname: "/champions/detail",
                    state: { id: ele.id },
                  });
                }}
                key={idx}
              >
                <img src={ele.img} alt={ele.img} key={ele.id} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </ChampPre>
  );
};

export default MainChampPre;
