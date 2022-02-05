import React from "react";
import API from "../api";
import { useState, useEffect } from "react";
import axios from "axios";

const Flags = () => {
  const [flags, setFlags] = useState([]);

  const fetchFlags = async () => {
    const { data } = await axios.get("https://restcountries.com/v2/all");
    setFlags(data);
  };

  useEffect(() => {
    fetchFlags();
  }, []);

  return (
    <div className="flags pt-1 pb-5">
      <div className="container">
        <div className="row">
          {flags?.map((item) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-12 cards mb-3">
                <div className="card">
                  <img
                    src={item.flags.png}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title" key={item.id}>
                      {item.name}
                    </h5>
                    <p className="card-text">
                      <p className="infos" key={item.id}>
                        Population: {item.population}
                      </p>
                      <p className="infos" key={item.id}>
                        Region: {item.region}
                      </p>
                      <p className="infos" key={item.id}>
                        Capital: {item.capital}
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Flags;
