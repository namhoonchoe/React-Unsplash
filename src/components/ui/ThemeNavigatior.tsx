import { useRef } from "react";
import { Link } from "react-router-dom";

const scrollToR = (element: any) => {
  const step = element.offsetWidth / 3;
  element.scrollLeft += step;
};

const scrollTol = (element: any) => {
  const step = element.offsetWidth / 3;

  element.scrollLeft -= step;
};

type TnProps = {
  topics?:Array<Topic>
}

const ThemeNavigatior: React.FC<TnProps> = ({topics}) => {
  const sliderRef = useRef(null);

  return (
    <div className="w-full h-16 flex justify-start items-center shadow-[-1px_0px_0_1px_rgba(0,0,0,0.3)]  ">
      <Link to="/" state={{ refetchData: false }}>
        <div className="w-40 h-full flex items-center justify-center">
          <p className=" text-nowrap">보도/편집 전용</p>
        </div>
      </Link>
      <div className="w-[calc(100%-10rem)] relative">
        <div className="w-full gap-2 nav-slider z-20" ref={sliderRef}>
          {topics?.map((topic: Topic) => {
            return (
              <Link
                key={topic.id}
                to={`discover/${topic.id}`}
               >
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
          className="btn btn-circle z-10  absolute  transform -translate-y-1/2 left-0  top-1/2 "
        >
          ❮
        </button>
        <button
          onClick={() => {
            scrollToR(sliderRef.current);
          }}
          className="btn btn-circle z-10  absolute  transform -translate-y-1/2  right-0 top-1/2 "
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default ThemeNavigatior;
