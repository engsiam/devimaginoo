"use client";

import AnimatedText from "@/components/common/AnimatedText";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const divSections = [
  {
    className: "home-section bg-scroll bg-light-alpha-60",
    bgVideo:
      "https://www.youtube.com/embed/n3AAQM-thos?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1", // Embed YouTube URL
    darkclassName: "home-section bg-scroll bg-dark-alpha-70",
  },
];

export default function Videosection3({ dark }) {
  return (
    <>
      <div className="fullwidth-gallery-wrapper">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 10000, // 10 seconds delay for each slide
            disableOnInteraction: false,
          }}
          loop={true}
          effect="fade"
          watchSlidesProgress
          resizeObserver
          className="fullwidth-gallery owl-carousel owl-theme overflow-hidden position-static"
          style={{
            opacity: 1,
            display: "block",
          }}
        >
          {/* Slide items */}
          {divSections.map((elm, index) => (
            <SwiperSlide className="owl-item" key={index}>
              {elm.bgVideo ? (
                <div
                  className={dark ? elm.darkclassName : elm.className}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    height: "100vh", // Full height for full screen
                  }}
                >
                  {/* Background Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
                      zIndex: 1, // Above video
                    }}
                  ></div>

                  {/* Aspect ratio container for the iframe */}
                  <div
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%", // 16:9 aspect ratio
                      height: 0,
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      src={`${elm.bgVideo}&autoplay=1&loop=1&playlist=n3AAQM-thos`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 0, // Below overlay
                      }}
                    ></iframe>
                  </div>
                </div>
              ) : (
                <div
                  className={dark ? elm.darkclassName : elm.className}
                  style={{
                    backgroundImage: `url(${elm.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              )}
            </SwiperSlide>
          ))}
          {/* End Slide items */}
        </Swiper>
      </div>

      <div className="fullwidth-galley-content">
        <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
          <div className="home-content">
            <div className="row">
              <div className="col-md-10 offset-md-1 mb-20 mb-sm-0">
                <h1 className="hs-title-12 mb-50 mb-sm-30">
                  <span className="wow charsAnimIn" data-splitting="chars">
                    <AnimatedText
                      text="Redefining Possibilities In Advertising, Social Media & Film
"
                    />
                  </span>
                </h1>
                <div
                  className="local-scroll wch-unset wow fadeInUp animated"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.2s"
                  style={{
                    visibility: "visible",
                    animationDuration: "1.2s",
                    animationDelay: "0.6s",
                    animationName: "fadeInUp",
                  }}
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScunCbnWdkDUnwgKoqO4EXRCMXEX7zM8eAyD3X-XQtWl8ma_g/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-mod btn-large ${
                      dark ? " btn-w " : ""
                    } btn-round ms-1 me-1 mt-2 align-middle`}
                    data-btn-animate="y"
                    style={{ backgroundColor: "#fd924a" }}
                  >
                    <span className="btn-animate-y">
                      <span
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                        className="btn-animate-y-1"
                      >
                        Ready To Elevate Your Campaign?
                      </span>
                      <span
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                        className="btn-animate-y-2"
                        aria-hidden="true"
                      >
                        Ready To Elevate Your Campaign?
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
