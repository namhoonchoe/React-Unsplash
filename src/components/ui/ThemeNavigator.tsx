import { Topic } from "@/Types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { scrollToTop } from "@/utils/utilFunctions";
import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";

const scrollToR = (element: HTMLDivElement | null) => {
  if (element) {
    const step = element.scrollWidth / 5;
    element.scrollLeft += step;
  }
};

const scrollTol = (element: HTMLDivElement | null) => {
  if (element) {
    const step = element.scrollWidth / 5;
    element.scrollLeft -= step;
  }
};

type TnProps = {
  topics?: Array<Topic>;
};

const ThemeNavigator: React.FC<TnProps> = ({ topics }) => {
  const sliderRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [position, setPosition] = useState<number>(0);
  const [maxPosition, setMaxPosition] = useState<number>(1);
  const largerThanMd = useMediaQuery("(min-width: 900px)");

  const scrollDetector = useCallback(() => {
    const position = sliderRef.current.scrollLeft;
    const scrollWidth = sliderRef.current.scrollWidth;
    const clientWidth = sliderRef.current.clientWidth;
    // Update state or perform other actions based on position
    setMaxPosition(scrollWidth - clientWidth);
    setPosition(position);
   }, [ ]);

  if (topics)
    return (
      <div className="sticky top-14 z-[30] flex h-14  w-full items-center justify-start bg-white shadow-sm  ">
        <Link to="/" onClick={() => scrollToTop()}>
          <div className="flex h-full w-24 items-center  justify-center border-r-2 sm:w-32 md:w-40">
            <p className=" text-nowrap text-sm capitalize lg:text-base">
              editorial
            </p>
          </div>
        </Link>
        <div className="relative w-[calc(100%-6rem)] p-2 sm:w-[calc(100%-8rem)] md:w-[calc(100%-10rem)]">
          <div
            className="nav-slider z-20 w-full gap-2 "
            ref={sliderRef}
            onScroll={() => scrollDetector()}
          >
            {topics.map((topic: Topic) => {
              return (
                <Link
                  key={topic.id}
                  to={`discover/${topic.id}`}
                  onClick={() => scrollToTop()}
                >
                  <div className="fade-animation group flex items-center justify-center rounded-full border px-3 py-1 hover:bg-black">
                    <p className="fade-animation text-nowrap text-sm group-hover:text-white lg:text-base">
                      {topic.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          {largerThanMd && (
            <div className="group flex h-full w-full items-center justify-start">
              <button
                onClick={() => {
                  scrollTol(sliderRef?.current);
                }}
                className="slider-button left-0  "
                style={{ opacity: position === 0 ? 0 : 1 }}
              >
                ❮
              </button>

              <button
                onClick={() => {
                  scrollToR(sliderRef?.current);
                }}
                className="slider-button right-0  "
                style={{ opacity: maxPosition - position <= 0.9 ? 0 : 1 }}
              >
                ❯
              </button>
            </div>
          )}
        </div>
      </div>
    );
};

export default ThemeNavigator;
