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
    console.log(keyword);
    setIsOpened(!isOpened);
    navigate(`/s/photo/${keyword}`);
    setKeyword("");
  };

  return (
    <div className="relative inline-block w-full max-w-[60rem] h-12">
      <form
        className="w-full h-full relative bg-zinc-300 rounded-3xl flex items-center form-control"
        id="search-form"
        onSubmit={submitHandler}
      >
        {isOpened ? (
          <>
            <input
              type="text"
              placeholder="Search"
              onChange={changeHandler}
              className="input w-full h-full bg-transparent rounded-3xl input-info px-[19px] "
            />

            <button
              className="btn btn-ghost btn-circle z-1 absolute right-[0]"
              type="reset"
              onClick={handleReset}
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
      
    </div>
  );
}
