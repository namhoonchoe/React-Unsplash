import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/utilFunctions";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <div className="w-full flex flex-col justify-start items-start sticky top-0 z-[999] ">
      <header className="w-full h-14 px-6 py-1 bg-white  justify-between items-center inline-flex  ">
        <Link to="/" onClick={() => scrollToTop()}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 32 32"
            version="1.1"
            aria-labelledby="unsplash-홈"
            aria-hidden="false"
          >
            <desc lang="en-US">Unsplash logo</desc>
            <title id="unsplash-홈">Unsplash 홈</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
          </svg>
        </Link>

        <section className="w-[calc(100%-64px)] h-10 px-2 justify-center items-center flex">
          <SearchInput />
        </section>
        <div></div>
      </header>
    </div>
  );
}
