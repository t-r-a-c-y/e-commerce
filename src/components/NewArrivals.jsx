import React from "react";
import ps5 from "../assets/ps5.png";
import woman from "../assets/woman.png";
import speaker from "../assets/speaker.png";
import gucci from "../assets/gucci.png";

function NewArrivals() {
  return (
    <div className="my-10 flex justify-between">
      <DisplayArrivals
        width1="500px"
        images={ps5}
        header="PlayStation 5"
        description="Black and white version of the pS5 coming out on sale"
        height1="440px"
      />
      <div className="flex flex-col justify-between">
        <BiggerSize />
        <div className="flex justify-between w-[510px] p-0 m-0">
          <SmallSize images={speaker} header="Speaker"
        description="Amazon wireless" />
          <SmallSize images={gucci} header="Perfume" description="GUCCI INTENSE OUT EDP" />
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;

function DisplayArrivals({ width1, images, header, description, height1 }) {
  return (
    <div
      className="bg-black text-white text-wrap relative pt-20 pl-8 rounded-[4px]"
      style={{ width: width1 }}
    >
      <img src={images} alt="" style={{ height: height1 }} />
      <div className="w-64 absolute bottom-7 flex flex-col gap-2">
        <h1 className="font-semibold text-2xl">{header}</h1>
        <p className="text-white text-sm ">{description}</p>
        <p className="font-semibold ">
          <ul className="border-b-[1px] border-[#e2dbdb] w-20 ">Shop Now</ul>{" "}
        </p>
      </div>
    </div>
  );
}

function SmallSize({images,header,description}){
  return(
    <div className="bg-[#232222] text-white p-6 w-[240px] relative rounded-[4px]">
            <img src={images} alt="" className="ml-3" />
            <div className="w-64 absolute bottom-7 flex flex-col gap-2 text-white ">
            <h1 className="font-semibold text-2xl">{header} </h1>
            <p className="text-white text-sm  ">
              {description}
            </p>
            <p className="font-semibold ">
              <ul className="border-b-[1px] border-[#e2dbdb] w-20 ">
                Shop Now
              </ul>{" "}
            </p>
          </div>
          </div>
  )
}

function BiggerSize(){
  return(
    <div className="bg-[#0D0D0D] w-[510px] relative pl-6 rounded-[4px]">
          <img src={woman} alt="" className="w-[300px] h-[220px] ml-40" />
          <div className="w-64 absolute bottom-7 flex flex-col gap-2 text-white ">
            <h1 className="font-semibold text-2xl">Women's Collection</h1>
            <p className="text-white text-sm  ">
              Featured woman collection that give you another vibe
            </p>
            <p className="font-semibold ">
              <ul className="border-b-[1px] border-[#e2dbdb] w-20 ">
                Shop Now
              </ul>{" "}
            </p>
          </div>
        </div>
  )
}