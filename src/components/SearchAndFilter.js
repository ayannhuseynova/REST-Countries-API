import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchAndFilter = () => {
  return (
    <div className="search-filter pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5 left">
            <form className="d-flex">
              <input
                className="form-control me-2 search"
                type="search"
                placeholder="Search for a country..."
                aria-label="Search"
              />
            </form>
          </div>
          <div className="col-md-7 right">
            <div className="dropdown d-flex justify-content-end">
              <a
                className="btn dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter by Region
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">
                    Africa
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    America
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Asia
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Europe
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Oceania
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
