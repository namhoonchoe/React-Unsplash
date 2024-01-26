import { Outlet } from "react-router-dom";

export default function SearchReseultsPage() {
  return (
    <>
      <header className="w-full   h-12 flex justify-between items-center shadow-[-1px_0px_0_1px_rgba(0,0,0,0.3)]">
        <section className="flex items-center justify-between w-1/4 h-full  max-w-[360px] pb-[0.5px] ">
          <div className=" h-full flex items-center gap-2 pl-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              version="1.1"
              aria-hidden="false"
            >
              <desc lang="en-US">A photo</desc>
              <path d="M20 3H4c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1ZM5 18l3.5-4.5 2.5 3 3.5-4.5 4.5 6H5Z"></path>
            </svg>
            <p>Photo</p>
          </div>
          <div className=" h-full flex items-center gap-2 pl-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              version="1.1"
              aria-hidden="false"
            >
              <desc lang="en-US">A stack of photos</desc>
              <path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6Zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2ZM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7Z"></path>
            </svg>
            <p>Collections</p>
          </div>
          <div className=" h-full flex items-center gap-2 pl-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              version="1.1"
              aria-hidden="false"
            >
              <desc lang="en-US">A group of people</desc>
              <path d="M23 17v3h-4v-3c0-1.7-1-2.9-2.3-3.9 2.7.4 6.3 1.7 6.3 3.9ZM9 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4Zm6 0c2.2 0 4-1.8 4-4s-1.8-4-4-4c-.5 0-.9.1-1.3.2C14.5 5.3 15 6.6 15 8s-.5 2.7-1.3 3.8c.4.1.8.2 1.3.2Zm-6 1c-2.7 0-8 1.3-8 4v3h16v-3c0-2.7-5.3-4-8-4Z"></path>
            </svg>
            <p>User</p>
          </div>
        </section>
        <div className="flex justify-start items-center gap-4 pr-2">
          <details className="dropdown w-20 aspect-[3] ronded-full  ">
            <summary className="btn btn-ghost w-full  p-0">Orientation</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box ">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>

          <details className="dropdown  dropdown-end w-20 aspect-[3] ronded-full ">
            <summary className=" btn btn-ghost w-full  p-0">Order by</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box ">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>
        </div>
      </header>

      <Outlet />
    </>
  );
}
