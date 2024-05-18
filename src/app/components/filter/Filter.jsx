"use client";
import React, { useState } from "react";
import "./filter.css";

const Filter = (props) => {

  const [minValue, setMinValue] = useState(24);
  const [maxValue, setMaxValue] = useState(100);

  const handleMinChange = (event) => {
    const value = Math.min(Number(event.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (event) => {
    const value = Math.max(Number(event.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <section
      className="filter_catigory_btns mb-10 mt-8"
      style={{ width: "22%", minWidth: "180px", maxWidth: "300px"}}
    >
      <div className="catigory_status">
        <span>Home</span>
        <span> {">"} </span>
        <span> Categories </span>
        <span> {">"} </span>
        <span style={{ color: "var(--main_color)" }}>
          {props.cureentLink}
        </span>
      </div>
      <div className="filter">
        <div className="statusFilter">Filter by</div>
        <div className="linka_cat flex">
          <h4 className="title">Category</h4>
          <div>
            <input
              type="checkbox"
              id="category"
              name="category"
              value="category"
            />
            <label htmlFor="category">All</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="category"
              name="category"
              value="category"
            />
            <label htmlFor="category">Rings</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="category"
              name="category"
              value="category"
            />
            <label htmlFor="category">Earings</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="category"
              name="category"
              value="category"
            />
            <label htmlFor="category">Earings</label>
          </div>
        </div>
        <div className="linka_cat mt-7 flex">
          <h4 className="title">Category</h4>
          <div>
            <input
              type="checkbox"
              id="category"
              name="category"
              value="category"
            />
            <label htmlFor="category">All</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="category"
              name="category"
              value="category"
            />
            <label htmlFor="category">Rings</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="category"
              name="category"
              value="category"
            />
            <label htmlFor="category">Earings</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="category"
              name="category"
              value="category"
            />
            <label htmlFor="category">Earings</label>
          </div>
        </div>
        <div className="linka_cat mt-7 flex">
          <h4 className="title">Show Products</h4>
          <div>
            <input
              type="checkbox"
              id="category"
              name="category"
              value="category"
            />
            <label htmlFor="category">Newest</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="category"
              name="category"
              value="category"
            />
            <label htmlFor="category">All Products</label>
          </div>
        </div>
        <div className="linka_cat mt-7 flex">
          <h4 className="title">Price</h4>
          <div className="rangePrice">
            <input
              type="range"
              min="0"
              max="150"
              value={minValue}
              onChange={handleMinChange}
              className="range-min"
            />
            <input
              type="range"
              min="0"
              max="150"
              value={maxValue}
              onChange={handleMaxChange}
              className="range-max"
            />
            <div className="slider-track"></div>
            <div
              className="range-highlight"
              style={{
                left: `${(minValue / 150) * 100}%`,
                width: `${((maxValue - minValue) / 150) * 100}%`,
              }}
            ></div>
          </div>
          <div className="price-range-slider-values flex justify-between">
            <span>0</span>
            <span>{minValue}</span>
            <span>{maxValue}</span>
            <span>150</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
