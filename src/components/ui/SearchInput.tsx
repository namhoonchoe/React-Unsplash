import SearchIcon from "../svgIcons/SearchIcon";

export default function SearchInput() {
  return (
    <div className="dropdown w-full max-w-[60rem] h-12">
      <div
        tabIndex={0}
        role="button"
        className="w-full h-full relative bg-zinc-300 rounded-3xl "
      >
        <div className="w-6 h-6 left-[19px] top-[12px] absolute">
          <SearchIcon />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border rounded-box mt-2 w-full max-w-[60rem] "
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
}
