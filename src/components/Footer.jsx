import React, { useState } from "react";
import QrCode from "../assets/Qrcode 1.png";
import Download from '../assets/download-appstore.png'
import Pngs from '../assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png'
function Footer() {
  const support = [
    "111 Bijoy sarani, Dhaka,",
    " DH 1515, Bangladesh.",
    "exclusive@gmail.com",
    "+88015-88888-9999",
  ];
  const account = [
    "My Account",
    "Login / Register",
    "Cart",
    "Wishlist",
    "Shop",
  ];
  const [year,setYear] = useState(new Date().getFullYear())
  const link = ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"];
  return (
    <div className="bg-black text-white">
    <div className="flex px-28 justify-between  py-9">
      <Exclusive />
      <FooterList name="Support" items={support} />
      <FooterList name="Account" items={account} />
      <FooterList name="Quick Link" items={link} />
      <Apps />
    </div>
    <div className="text-center py-5 text-whiteWhite border-t-white border-t-[1px]">
      <p className="text-xs text-[#ccc6c6]">&copy; Copyright Rimel {year}. All right reserved </p>
    </div>
    </div>
  );
}

export default Footer;

const Exclusive = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Exclusive</h1>
      <h2 className="font-semibold text-sm">Subscribe</h2>
      <p className="text-xs">Get 10% off your first order</p>
      <div className="bg-black text-white border-[1px] p-2 rounded-md " >
        <input
          type="email"
          name="emailName"
          id="emailId"
          placeholder="Enter your email"
          className="bg-black text-white outline-none w-32"
        />
        <i class="fa-regular fa-paper-plane" style={{ color: " #f1f2f3;" }}></i>
      </div>
    </div>
  );
};

export function FooterList(props) {
    return (
      <div>
        <h2 className="font-semibold text-sm mb-4">{props.name} </h2>
        <ul className="flex flex-col gap-4">
          {props.items.map((item, index) => (
            <li key={index} className="text-xs">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const Apps = ()=>{
    return <div className="flex flex-col gap-4">
    <h2 className="font-semibold text-sm">Download App</h2>
    <p className="text-xs">Save $3 with App New User Only</p>
    <div className="flex gap-4">
      <img src={QrCode} alt=""  className="h-14"/>
      <div className=" flex flex-col justify-between"> 
        <img src={Pngs} alt="" className="h-6"/>
        <img src={Download} alt="" className="h-6" />
      </div>
    </div>
    <div className="flex justify-between w-36">
      <i class="fa-brands fa-facebook-f w-1" style={{ color: "#ffffff;" }}></i>
      <i class="fa-brands fa-x-twitter" style={{ color: "#ffffff;" }}></i>
      <i class="fa-brands fa-instagram" style={{ color: "#ffffff;" }}></i>
      <i class="fa-brands fa-linkedin-in" style={{ color: "#ffffff;" }}></i>
    </div>
  </div>
  }

 