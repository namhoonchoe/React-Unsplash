import { Topic } from "@/Types";
import { scrollToTop } from "@/utils/utilFunctions";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const scrollToR = (element: HTMLDivElement | null) => {
  if (element) {
    const step = element.offsetWidth / 5;
    element.scrollLeft += step;
    console.log(element.scrollWidth);
    console.log(element.offsetLeft);
    console.log(element.offsetWidth);
    console.log(element.scrollLeft);
  }
};

const scrollTol = (element: HTMLDivElement | null) => {
  if (element) {
    const step = element.offsetWidth / 5;
    element.scrollLeft -= step;
    
  }
};

type TnProps = {
  topics?: Array<Topic>;
};

const ThemeNavigator: React.FC<TnProps> = ({ topics }) => {
  const sliderRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [isLeftEnd, setIsLeftEnd] = useState<boolean>(true);
  const [isRightEnd, setIsRightEnd] = useState<boolean>(false);
  const { current } = sliderRef;
  useEffect(() => {
    function positionChecker() {
      if (current) {
        const { scrollWidth, scrollLeft, offsetWidth } = current;
        switch(scrollLeft) {
          case 0:
            setIsLeftEnd(true);
            break;
          case scrollWidth - offsetWidth:
            setIsRightEnd(true);
            break;
          default:
            setIsRightEnd(false);
            setIsLeftEnd(false);
          }       
      }
    }

    if (current) {
      current.addEventListener("scroll", positionChecker);
    }

    return () => {
      if (current) {
        current.removeEventListener("scroll", positionChecker);
      }
    };
  }, [current,setIsLeftEnd,setIsRightEnd]);
  if (topics)
    return (
      <div className="sticky top-14 z-[30] flex h-14  w-full items-center justify-start bg-white shadow-sm  ">
        <Link to="/" onClick={() => scrollToTop()}>
          <div className="flex h-full w-40 items-center justify-center border-r-2">
            <p className=" text-nowrap capitalize">editorial</p>
          </div>
        </Link>
        <div className="relative w-[calc(100%-10rem)]">
          <div
            className="nav-slider z-20 w-full gap-2 pl-2  "
            ref={sliderRef}
          >
            {topics.map((topic: Topic) => {
              return (
                <Link
                  key={topic.id}
                  to={`discover/${topic.id}`}
                  onClick={() => scrollToTop()}
                >
                  <div className="flex items-center justify-center rounded-full border px-3 py-2">
                    <p className=" text-nowrap">{topic.title}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <button
            onClick={() => {
              scrollTol(sliderRef.current);
            }}
            className="slider-button left-0"
            style={{ opacity: isLeftEnd ? 0 : 1 }}
          >
            ❮
          </button>

          <button
            onClick={() => {
              scrollToR(sliderRef.current);
            }}
            className="slider-button right-0 border-none"
            style={{ opacity: isRightEnd ? 0 : 1 }}
          >
            ❯
          </button>
        </div>
      </div>
    );
};

export default ThemeNavigator;
