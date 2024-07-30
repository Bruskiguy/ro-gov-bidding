"use client";

export function FilterSidebar() {
  return (
    <div className="sticky mx-4 my-3 h-screen w-64 bg-primary  rounded-lg p-10 overflow-y-auto">
      <h3 className="text-textDark font-semibold mb-4">Filters</h3>
      <div className="mb-4 text-textDark">
        <h4 className="text-md text-textDark font-medium mb-2">Category</h4>
        <ul>
          <li>
            <input type="checkbox" id="category1" />
            <label htmlFor="category1" className="ml-2">
              Category 1
            </label>
          </li>
          <li>
            <input type="checkbox" id="category2" />
            <label htmlFor="category2" className="ml-2">
              Category 2
            </label>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-md text-textDark font-medium mb-2">Price Range</h3>

        <input type="range" min="0" max="1000" className="w-full" />
      </div>
    </div>
  );
}
