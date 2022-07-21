import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { RiRefreshFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { useStateValue } from '../context/StateProvide';
import { actionType } from '../context/reducer';
import EmptyCart from '../img/emptyCart.svg';
import CartItem from './CartItem';
import { useEffect } from 'react';
import { useState } from 'react';

const CartContainer = () => {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
  const [tot, setTot] = useState('');
  const [flag, setFlag] = useState('');

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
    console.log(tot);
  }, [tot, flag]);

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [],
    });
    localStorage.setItem('cartItems', JSON.stringify([]));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-375 h-[100vh] bg-white drop-shadow-md flex flex-col z-[120]"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer ">
        <motion.div whileTap={{ scale: 0.8 }} onClick={showCart}>
          <MdOutlineKeyboardBackspace className="text-3xl text-textColor" />
        </motion.div>
        <p className="text-lg font-semibold">Cart</p>
        <motion.p
          whileTap={{ scale: 0.8 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md text-base"
        >
          Clear Cart
          <RiRefreshFill />
        </motion.p>
      </div>

      {/* Bottom Section */}
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
          {/* Cart Items Section */}
          <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* cart item */}
            {cartItems &&
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  flag={flag}
                  setFlag={setFlag}
                />
              ))}
          </div>

          {/* Total */}
          <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-center px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-white text-lg">Sub Total</p>
              <p className="text-white text-lg">$ {tot}</p>
            </div>

            <div className="w-full flex items-center justify-between">
              <p className="text-white text-lg">Delivery</p>
              <p className="text-white text-lg">$ 4.5</p>
            </div>

            <div className="w-full border-b border-lime-600 my-2"></div>

            <div className="w-full flex items-center justify-between">
              <p className="text-white text-xl font-semibold">Total</p>
              <p className="text-white text-xl font-semibold">$ {tot + 2.5}</p>
            </div>
            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full  bg-amber-600 text-white text-lg mt-8 hover:shadow-lg"
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full  bg-amber-600 text-white text-lg mt-8 hover:shadow-lg"
              >
                Log In to Check Out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="empty cart" />
          <p className="text-xl font-semibold">Your Shopping Cart Is Empty</p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;
