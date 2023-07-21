/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react";
import Homecard from "../component/Homecard";
import { useSelector } from "react-redux";
import CaedFeature from "../component/CaedFeature";
import { GrPrevious, GrNext } from "react-icons/gr";
// import FilerProduct from "../component/FilerProduct";
import AllProduct from "../component/AllProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCardList = productData.slice(1, 5);
  const homeProductCardListVegetables = productData.filter(
    (el) => el.category === "meatmenu",
    []
  );

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className=" p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className=" flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className=" text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-7"
            />
          </div>
          <h2 className=" text-4xl md:text-7xl font-bold py-4">
            The Fasted Delivery in{" "}
            <span className=" text-red-600">Your Home</span>
          </h2>
          <p className="py-3 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
          <button className=" font-bold bg-red-500 text-slate-300 px-4 py-2 rounded-md">
            Order Now
          </button>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCardList[0]
            ? homeProductCardList.map((el) => {
                return (
                  <Homecard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return (
                  <Homecard key={index + "Loading"} loading={"Loading..."} />
                );
              })}
        </div>
      </div>
      <div className="">
        <div className="flex w-full items-center">
          <h2 className=" font-bold text-2xl text-slate-800 mb-4">Promotion</h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className=" bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className=" bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className=" flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-none"
          ref={slideProductRef}
        >
          {homeProductCardListVegetables[0]
            ? homeProductCardListVegetables.map((el) => {
                return (
                  <CaedFeature
                    key={el._id + "meatmenu"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el, index) => (
                <CaedFeature loading="loading..." key={index + "cartLoading"} />
              ))}
        </div>
      </div>
      <AllProduct heading={"Your Product"} />
    </div>
  );
};

export default Home;
