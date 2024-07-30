"use client";

export function Nav() {
  return (
    <nav className="bg-background border-b-2 border-primary flex items-center justify-between text-white p-4">
      <div className="logo">Logo</div>
      <div className="flex items-center space-x-7">
        <div className="relative flex items-center">
          <input
            type="search"
            className="block flex-auto rounded border border-solid border-neutral-200 bg-transparent px-3 py-1 text-base font-normal leading-6 text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:border-primary focus:shadow-inset"
            placeholder="Search"
            aria-label="Search"
            id="exampleFormControlInput2"
            aria-describedby="button-addon2"
          />
          <span
            className="flex items-center whitespace-nowrap px-3 py-1 text-surface dark:border-neutral-400 dark:text-white"
            id="button-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
        </div>
        <div className="account-icon">Account</div>
      </div>
    </nav>
  );
}
