import React, { useState } from "react";
import game from "../assets/game.png";

function Product({ setLiked }) {
  const [percentage, setPercentage] = useState(10);
  const onClickPercentage = () => {
    setPercentage((p) => p + 10);
  };
  return (
    <div className="mb-8 flex gap-8 ">
      <div>
        <Products
          imageName={game}
          percentage={percentage}
          setLiked={setLiked}
        />
        <Description
          name="HAVIT HV-G92 Gamepad"
          discount="120"
          amount="160"
          stars="66"
        />
      </div>
      <div>
        <Products
          imageName={game}
          percentage={percentage}
          setLiked={setLiked}
        />
        <Description
          name="HAVIT HV-G92 Gamepad"
          discount="120"
          amount="160"
          stars="66"
        />
      </div>
      <div>
        <Products
          imageName={game}
          percentage={percentage}
          setLiked={setLiked}
        />
        <Description
          name="HAVIT HV-G92 Gamepad"
          discount="120"
          amount="160"
          stars="66"
        />
      </div>
      <div>
        <Products
          imageName={game}
          percentage={percentage}
          setLiked={setLiked}
        />
        <Description
          name="HAVIT HV-G92 Gamepad"
          discount="120"
          amount="160"
          stars="66"
        />
      </div>
    </div>
  );
}

export default Product;

function AddToCart() {
  return (
    <div className="bg-black text-white text-center p-2 mt-[10px] ">
      <button>Add to Cart</button>
    </div>
  );
}

function Products(props) {
  const [isHovered, setIsHovered] = useState("false");
  const [isLiked, setIsLiked] = useState(false);
  function handleLike() {
    if (isLiked) {
      props.setLiked((like) => like - 1);
      setIsLiked(false);
      return;
    }
    props.setLiked((likes) => likes + 1);
    setIsLiked(true);
    return;
  }
  return (
    <div
      className="bg-[#F5F5F5] w-60 h-64  py-3 rounded-[4px] "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between px-3  ">
        {props.percentage == 0 ? (
          <div> </div>
        ) : (
          <p className="bg-red-500 py-0 h-6 px-4 text-white rounded-[5px]">
            {props.percentage} %{" "}
          </p>
        )}
        <div className="flex flex-col gap-2 ">
          <i
            class="fa-regular fa-heart p-[6px] bg-white rounded-[50%] "
            style={{ color: " #000000;" }}
            onClick={handleLike}
          ></i>
          <i
            class="fa-regular fa-eye p-[6px] bg-white rounded-[50%]"
            style={{ color: " #000000;" }}
          ></i>
        </div>
      </div>
      <img src={props.imageName} alt="" className="w-40 h-32 ml-10" />
      {isHovered && <AddToCart />}
    </div>
  );
}

function Description(props) {
  return (
    <div className="my-5 flex flex-col gap-1">
      <h3 className="font-semibold text-[14px]">{props.name}</h3>
      <p className="flex gap-3 font-semibold">
        <span className="text-red-500">${props.discount} </span>{" "}
        <span className="text-[#b8b4b4] line-through">${props.amount} </span>{" "}
      </p>
      <div className="flex gap-2.5">
        <Stars number="4" />
        <span className="text-[#b8b4b4] font-bold ">({props.stars} )</span>
      </div>
    </div>
  );
}

const Stars = ({ number }) => {
  const stars = [];

  for (let i = 0; i < number; i++) {
    stars.push(
      <i
        className="fa-solid fa-star fa-sm "
        style={{ color: "#FFAD33" }}
        key={`star-filled-${i}`}
      ></i>
    );
  }

  for (let i = 0; i < 5 - number; i++) {
    stars.push(
      <i
        className="fa-solid fa-star fa-sm "
        style={{ color: "#cdd0d5" }}
        key={`star-empty-${i}`}
      ></i>
    );
  }

  return <div className="flex gap-2.5 mt-3">{stars}</div>;
};

export function BestProducts({ setLiked, percentages }) {
  const [percentage] = useState(percentages);
  return (
    <div className="mb-8 flex gap-8 ">
      <div>
        <Products
          imageName={game}
          percentage={percentage}
          setLiked={setLiked}
        />
        <Description
          name="HAVIT HV-G92 Gamepad"
          discount="120"
          amount="160"
          stars="66"
        />
      </div>
      <div>
        <Products
          imageName={game}
          percentage={percentage}
          setLiked={setLiked}
        />
        <Description
          name="HAVIT HV-G92 Gamepad"
          discount="120"
          amount="160"
          stars="66"
        />
      </div>
      <div>
        <Products
          imageName={game}
          percentage={percentage}
          setLiked={setLiked}
        />
        <Description
          name="HAVIT HV-G92 Gamepad"
          discount="120"
          amount="160"
          stars="66"
        />
      </div>
      <div>
        <Products
          imageName={game}
          percentage={percentage}
          setLiked={setLiked}
        />
        <Description
          name="HAVIT HV-G92 Gamepad"
          discount="120"
          amount="160"
          stars="66"
        />
      </div>
    </div>
  );
}
