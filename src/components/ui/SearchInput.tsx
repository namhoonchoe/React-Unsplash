import { scrollToTop } from "@/utils/utilFunctions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../svgIcons/CloseIcon";
import SearchIcon from "../svgIcons/SearchIcon";

export default function SearchInput() {
  const [keyword, setKeyword] = useState<string>("");
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const navigate = useNavigate();

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.target.value);
  };

  const handleReset: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsOpened(!isOpened);
    setKeyword("");
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
     setIsOpened(!isOpened);
    scrollToTop();
    navigate(`/s/photo/${keyword}`);
    setKeyword("");
  };

  return (
    <div className="relative inline-block h-full w-full max-w-[60rem]">
      <form
        className="form-control relative flex h-full w-full items-center   rounded-3xl bg-zinc-300"
        id="search-form"
        onSubmit={submitHandler}
      >
        {isOpened ? (
          <>
            <input
              type="text"
              placeholder="Search"
              onChange={changeHandler}
              className="input input-info h-full w-full rounded-3xl bg-transparent px-[19px] "
            />

            <button
              className="z-1 btn btn-circle btn-ghost btn-xs   absolute right-2 top-2"
              type="reset"
              onClick={handleReset}
            >
              <CloseIcon />
            </button>
          </>
        ) : (
          <div
            className="absolute flex h-full w-full items-center gap-1 px-[19px] "
            onClick={() => setIsOpened(!isOpened)}
          >
            <SearchIcon />
            <p>Search</p>
          </div>
        )}
      </form>
    </div>
  );
}
