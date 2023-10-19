import "../styles/HomeCarousel.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function HomeCarousel({}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("left");
  const images = [
    {
      pic: "/rooster.jpeg",
      text: "testing captions 1",
      subText: "testing subcaption",
    },
    {
      pic: "/nursery.jpeg",
      text: "testing captions 2",
      subText: "testing subcaption2",
    },
    {
      pic: "/castle.jpeg",
      text: "testing captions 3",
      subText: "testing subcaption3",
    },
    {
      pic: "/nursery1.jpeg",
      text: "testing captions 4",
      subText: "testing subcaption4",
    },
    {
      pic: "/mario.jpeg",
      text: "testing captions 5",
      subText: "testing subcaption5",
    }
  ];
  const [displayText, setDisplayText] = useState(true);
  const handleNext = () => {
    setDisplayText(false);
    setTimeout(() => {
      setDisplayText(true);
    }, 500);
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index: any) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };
  const slideVariants = {
    hiddenRight: {
      // x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      // x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      // scale: 0.8,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      <div className="home-carousel-box">
        <div className="carousel-images">
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={images[currentIndex].pic}
              variants={slideVariants}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
            />
            {displayText &&(<div id="testBox">
              <p id="slideText">{images[currentIndex].text}</p>
              <p id="slideSubText">{images[currentIndex].subText}</p>
              {/* <motion.div
                className='testframer'
                initial={{ marginTop: 300, opacity: 0 }}
                variants={slideVariants}
                animate={{ marginTop: 0, opacity: 100 }}
                transition={{ duration: 3, delay: 2 }}
              >
                {images[currentIndex].subText}
              </motion.div> */}
            </div>)}
          </AnimatePresence>
          <div className="slide_direction">
            <div className="left" onClick={handlePrevious}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                viewBox="0 96 960 960"
                width="17"
              >
                <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
              </svg>
            </div>
            <div className="right" onClick={handleNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                viewBox="0 96 960 960"
                width="17"
              >
                <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
              </svg>
            </div>
          </div>
          <div className="carousel-indicator">
            {images.map((_: any, index: any) => (
              <div
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
