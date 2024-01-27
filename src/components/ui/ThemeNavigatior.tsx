import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const scrollToR = (element: HTMLDivElement | null) => {
  if (element) {
    const step = element.offsetWidth / 5;
    element.scrollLeft += step;
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

const ThemeNavigatior: React.FC<TnProps> = ({ topics }) => {
  const sliderRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [isLeftEnd, setIsLeftEnd] = useState<boolean>(true);
  const [isRightEnd, setIsRightEnd] = useState<boolean>(false);

  const { current } = sliderRef;

  useEffect(() => {
    function positionChecker() {
      if (current) {
        const gap = current.offsetWidth - current.scrollLeft;
              

        if (gap === current.offsetWidth) {
          setIsLeftEnd(true);
        } else {
          setIsLeftEnd(false);
          setIsRightEnd(false);
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
  }, [current]);

  return (
    <div className="w-full h-16 flex justify-start items-center shadow-[-1px_0px_0_1px_rgba(0,0,0,0.3)]  ">
      <Link to="/" state={{ refetchData: false }}>
        <div className="w-40 h-full flex items-center justify-center border-r-2">
          <p className=" text-nowrap capitalize">editorial</p>
        </div>
      </Link>
      <div className="w-[calc(100%-10rem)] relative">
        <div className="w-full gap-2 nav-slider z-20 pl-1 pr-10"  ref={sliderRef}>
          {topics?.map((topic: Topic) => {
            return (
              <Link key={topic.id} to={`discover/${topic.id}`}>
                <div className="px-3 py-2 flex items-center justify-center border rounded-full ">
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
          className="slider-button left-0 "
          style={{ opacity: isLeftEnd ? 0 : 1 }}
        >
          ❮
        </button>

        <button
          onClick={() => {
            scrollToR(sliderRef.current);
          }}
          className="slider-button right-0"
          style={{ opacity: isRightEnd ? 0 : 1 }}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default ThemeNavigatior;
