import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <header className="w-full h-16 px-6 py-2 bg-white  justify-between items-center inline-flex sticky top-0 z-[999] grid-header  ">
        <Link to="/">
          <svg
            width="32"
            height="32"
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

        <section className="w-[calc(100%-64px)] h-12 px-2 justify-center items-center flex">
          <SearchInput />
         </section>
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 17h18a1 1 0 0 1 .117 1.993L21 19H3a1 1 0 0 1-.117-1.993L3 17h18H3Zm0-6 18-.002a1 1 0 0 1 .117 1.993l-.117.007L3 13a1 1 0 0 1-.117-1.993L3 11l18-.002L3 11Zm0-6h18a1 1 0 0 1 .117 1.993L21 7H3a1 1 0 0 1-.117-1.993L3 5h18H3Z"
            fill="#000"
          />
        </svg>
      </header>
    </div>
  );
}
