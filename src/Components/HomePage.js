import React, { useEffect, useState } from "react";
import { Alert } from "@mui/material";
import NavBar from "./NavBar";
import Empty from "./Images/empty.png";

function Home() {
  const [values, setValues] = useState([]);
  const [CartArray, SetCartArray] = useState([]);
  const [CartShow, SetCartShow] = useState();
  const [totPrice, setTotPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [Button, SetButton] = useState(false);
  const [addedItems, setAddedItems] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setValues(json);
      });
  }, []);

  useEffect(() => {
    const totalPrice = CartArray.reduce((accumulator, item) => {
      return accumulator + item.price;
    }, 0);

    setTotPrice(totalPrice);
  }, [CartArray]);

  const ADD = (li) => {
    const itemExists = CartArray.map((item) => item.id).includes(li.id);

    if (!itemExists) {
      SetCartArray((prevCart) => [...prevCart, li]);
      setCount(count + 1);
      setAddedItems((prevAddedItems) => ({
        ...prevAddedItems,
        [li.id]: true,
      }));
    } else {
      return;
    }
  };

  const Del = (value, index) => {
    CartArray.splice(index, 1);
    setCount(() => count - 1);
    setTotPrice((count) => count - value.price);
  };

  return (
    <>
      <div
        className="bg-white w-screen h-screen relative "
        style={CartShow ? { display: "none" } : {}}
      >
        <NavBar />
        <div className="columns-4 m-12 space-y-16">
          {values.map((li) => (
            <div className="flex justify-evenly" key={li.id}>
              <div className="border-2 border-gray-300 rounded-xl w-[320px] p-7 ml-5 min-h-[400px] shadow-xl  hover:shadow-pink-400">
                <div className="">
                  <img
                    src={li.image}
                    alt="icon"
                    className="w-40 h-40 flex mix-blend-multiply cursor-pointer"
                  />
                  <h1 className="font-bold text-lg leading-6 text-left mt-3 h-[100px] ">
                    {li.title}
                  </h1>
                  <div className="flex justify-evenly">
                    <p className=" mt-9 font-semibold shadow-sm p-3 shadow-purple-500 text-left bg-pink-500 rounded-xl w-fit text-white">
                      Rs.{li.price}
                    </p>

                    {addedItems[li.id] ? (
                      <p className="ml-12 mt-8   p-3 rounded-md bg-red-500 hover:shadow-sm shadow-cyan-500  font-semibold text-slate-200 cursor-not-allowed">
                        ADDED
                      </p>
                    ) : (
                      <button
                        className="ml-12 mt-8 hover:bg-blue-500 p-2 rounded-md bg-pink-500 hover:shadow-sm shadow-cyan-500 hover:text-white font-semibold"
                        onClick={() => ADD(li)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="fixed right-5 bottom-5 bg-green-400 border-2  border-fuchsia-500 p-4 rounded-2xl z-50  "
        onClick={() => SetCartShow(!CartShow)}
        style={CartShow ? { backgroundColor: "#E25E3E" } : {}}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          viewBox="0 -960 960 960"
          width="32"
        >
          <path d="M460-620v-120H340v-40h120v-120h40v120h120v40H500v120h-40ZM292.308-115.384q-25.308 0-42.654-17.347-17.347-17.346-17.347-42.654 0-25.307 17.347-42.653 17.346-17.347 42.654-17.347 25.307 0 42.654 17.347 17.346 17.346 17.346 42.653 0 25.308-17.346 42.654-17.347 17.347-42.654 17.347Zm375.384 0q-25.307 0-42.654-17.347-17.346-17.346-17.346-42.654 0-25.307 17.346-42.653 17.347-17.347 42.654-17.347 25.308 0 42.654 17.347 17.347 17.346 17.347 42.653 0 25.308-17.347 42.654-17.346 17.347-42.654 17.347Zm-375.384-200q-35 0-52.462-29.5-17.462-29.501-.615-59.27l60.153-107.231L152.307-820H80v-40h97.923l163.846 344.615H622L768.539-780l35.384 18.769-141.154 254.616q-8.692 15.384-22.461 23.308-13.769 7.923-30.616 7.923H324l-48.615 89.23q-6.154 9.231-.385 20t17.308 10.769h435.385v40.001H292.308Z" />
        </svg>
        <span className="absolute top-0 right-2 text-black">{count}</span>
      </button>
      <div
        className=" absolute top-0 w-screen min-h-full bg-[#0C356A] overflow-hidden "
        style={CartShow ? { display: "" } : { display: "none" }}
      >
        <div className="flex justify-end space-x-4 m-2 items-center">
          <p
            style={
              CartShow
                ? { display: "", backgroundColor: "" }
                : { display: "none" }
            }
            className="text-slate-100 border-2 p-2 rounded-xl bg-rose-700 font-semibold text-lg tracking-wider"
          >
            <span>Total Price:</span>
            {totPrice.toFixed(2)}
          </p>
          <button
            onClick={() => {
              CartArray.splice(0, CartArray.length);
              setTotPrice(0);
              setCount(0);
            }}
            className="border bg-red-600 p-2 rounded-xl text-slate-200 font-bold tracking-wider hover:shadow-lg hover:shadow-red-400 "
          >
            REMOVE ALL
          </button>
        </div>
        {/* //Cart Page */}
        <div className="columns-2 mt-4">
          {CartArray.length > 0 ? (
            CartArray.map((value, index) => (
              <div
                key={index}
                className="flex bg-[#213555] p-5 items-center   justify-around overflow-scroll border  rounded-lg shadow-xl gap-y-7"
              >
                <div className="max-w-[200px] rounded-xl  ">
                  <img
                    src={value.image}
                    alt="Cart"
                    className="w-[80px] h-[80px] object-fill"
                  />
                </div>
                <div className="">
                  <h1 className="text-slate-50 text-left w-[300px]">
                    {value.title}
                  </h1>
                  <h1 className="text-slate-50 mt-2">Rs.{value.price}</h1>
                </div>
                <button
                  onClick={() => Del(value, index)}
                  className="border border-cyan-300 w-fit p-2 h-fit text-slate-200 rounded-l-2xl hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-400"
                >
                  REMOVE
                </button>
              </div>
            ))
          ) : (
            <div className="w-screen flex  flex-col">
              <p className="text-center font-bold text-4xl text-slate-200">
                Cart is Empty
              </p>
              <img src={Empty} alt="Empty" className="w-[40%] h-[50%]" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
