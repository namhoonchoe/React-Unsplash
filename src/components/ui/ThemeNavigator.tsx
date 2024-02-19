import { Topic } from "@/Types";
import { scrollToTop } from "@/utils/utilFunctions";
import { useRef } from "react";
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
   if (topics)
    return (
      <div className="sticky top-14 z-[30] flex h-14  w-full items-center justify-start bg-white shadow-sm  ">
        <Link to="/" onClick={() => scrollToTop()}>
          <div className="flex h-full w-40 items-center justify-center border-r-2">
            <p className=" text-nowrap capitalize">editorial</p>
          </div>
        </Link>
        <div className="relative w-[calc(100%-10rem)] p-2">
          <div className="nav-slider z-20 w-full gap-2 " ref={sliderRef}>
            {topics.map((topic: Topic) => {
              return (
                <Link
                  key={topic.id}
                  to={`discover/${topic.id}`}
                  onClick={() => scrollToTop()}
                >
                  <div className="flex items-center justify-center rounded-full border px-3 py-2">
                    <p className="text-nowrap">{topic.title}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="group flex h-full w-full items-center justify-start">
            <button
              onClick={() => {
                scrollTol(sliderRef?.current);
              }}
              className="slider-button left-0 opacity-0	group-hover:opacity-100"
            >
              ❮
            </button>

            <button
              onClick={() => {
                scrollToR(sliderRef?.current);
              }}
              className="slider-button right-0  opacity-0	group-hover:opacity-100"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    );
};

export default ThemeNavigator;
