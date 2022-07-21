import React, { useEffect, useRef } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import NotFound from '../img/NotFound.svg';
import { useStateValue } from '../context/StateProvide';
import { actionType } from '../context/reducer';
import { useState } from 'react';

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();
  const [items, setItems] = useState([]);
  const [{ cartItems, }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({ type: actionType.SET_CARTITEMS, cartItems: items });
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addToCart()
  }, [items])

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3 my-12 scroll-smooth bg-rowBg ${
        flag
          ? 'overflow-x-scroll scrollbar-none'
          : 'overflow-x-hidden flex-wrap justify-center'
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-275 h-[195px] min-w-[375px] md:w-300 md:min-w=[30px] my-12 bg-cardOverlay rounded-lg p-2 m-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="w-full h-40 flex items-center justify-between">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
              >
                <img
                  className="w-full h-full object-contain"
                  src={item?.imageURL}
                  alt=""
                />
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.8 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center  cursor-pointer hover:shadow-md"
                onClick={() =>setItems([...cartItems, item])}
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-base md:text-lg">{item?.title}</p>
              <p className="mt-1 text-sm"> {item?.calories} Calories</p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} alt="Not found" className="h-300" />
          <p className="text-xl text-headingColor font-semibold my-3">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
