import { useState } from "react";
import CloseIcon from "../svgIcons/CloseIcon";
import SearchIcon from "../svgIcons/SearchIcon";

export default function SearchInput() {
  const [keyword, setKeyword] = useState<string>("");
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (keyword !== "") {
    } else {
      alert("enter search keyword");
    }
  };

  return (
    <div className="relative inline-block w-full max-w-[60rem] h-12">
      <form className="w-full h-full relative bg-zinc-300 rounded-3xl flex items-center">
        {isOpened ? (
          <>
            <input
              type="text"
              placeholder="Search"
              className="input w-full w-full h-full bg-transparent rounded-3xl input-info px-[19px] "
            />

            <button
              className="btn btn-ghost btn-circle z-1 absolute right-[0]"
              onClick={() => setIsOpened(!isOpened)}
            >
              <CloseIcon />
            </button>
          </>
        ) : (
          <div
            className="w-full h-full px-[19px] absolute flex gap-1 items-center "
            onClick={() => setIsOpened(!isOpened)}
          >
            <SearchIcon />
            <p>Search</p>
          </div>
        )}
      </form>
      {isOpened && (
        <ul className="absoulte z-[1] menu p-2 shadow bg-base-100 border rounded-box mt-2 w-full max-w-[60rem] ">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      )}
    </div>
  );
}
