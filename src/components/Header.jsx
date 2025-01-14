import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header({ likes }) {
  const items = ["Home", "Contact", "About", "Sign Up"];
  return (
    <div>
      <Stander />
      <div className="flex px-28 justify-between py-4 border-b-[1px] border-[#a99b9b] ">
        <h1 className="font-bold text-2xl">Exclusive</h1>
        <ul className="flex gap-9">
          {items.map((item) => (
            <li className="text-sm  hover:underline active:underline mt-2 ">
              <a href="">{item} </a>
            </li>
          ))}
        </ul>
        <NavBar likes={likes} />
      </div>
    </div>
  );
}

export default Header;

function Stander() {
  return (
    <div className="bg-black text-white px-28 flex justify-between py-3 mb-4">
      <div className="text-right flex-1 flex justify-center">
        <p className="flex text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          &nbsp;
          <span className="font-bold">
            <ul className=" border-b border-white">ShopNow</ul>
          </span>
        </p>
      </div>
      <select
        name="Language"
        id="languageId"
        className="bg-black border-none outline-none selection:bg-red-500"
      >
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="Kinyarwanda">Kinyarwanda</option>
      </select>
    </div>
  );
}

function NavBar({ likes }) {
 
  return (
    <div className="flex gap-7">
      <div className="bg-whiteWhite px-6 py-2 rounded-md">
        <input
          type="text"
          name="searchName"
          id="searchId"
          placeholder="What are you looking for?"
          className="bg-whiteWhite outline-none text-xs w-40 "
        />
        <i
          class="fa-solid fa-magnifying-glass"
          style={{ color: "#191515" }}
        ></i>
      </div>

      <div className="relative  mt-1.5 w-9 pt-1.5">
        {likes == 0 ? null : (
          <p className="absolute text-center py-1 px-2 top-0 right-0.5  bg-red-500 rounded-[50%] text-[8px] text-white z-10 ">
            {likes}{" "}
          </p>
        )}
        <i
          className="fa-regular fa-heart fa-lg "
          style={{ color: "#191515" }}
        ></i>
      </div>
      <div className="relative  mt-1.5 w-9 pt-1.5">
        <p className="absolute text-center py-1 px-2 top-0 right-0.5  bg-red-500 rounded-[50%] text-[8px] text-white z-10 ">
          1
        </p>
        <i
          className="fa-solid fa-cart-shopping fa-lg"
          style={{ color: "#191515" }}
        ></i>
      </div>
    </div>
  );
}
