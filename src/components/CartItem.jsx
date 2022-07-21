import React from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useStateValue } from '../context/StateProvide';
import { useEffect } from 'react';
import { actionType } from '../context/reducer';
// import { fetchCart } from '../utils/fetchLocalStorageData'
let items = []

const CartItem = ({ item, flag, setFlag }) => {
  const [{ cartItems }, dispatch] = useStateValue();
  const [qty, setQty] = useState(item.qty);

  const cartDispatch = () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
  };

  const updateQty = (action, id) => {
    if (action === 'add') {
      setQty(qty + 1);
      cartItems.map((item) => {
        if (item.id === id) {
          item.qty += 1;
          setFlag(flag + 1)
        }
      });
      cartDispatch();
    } else {

      // initial state value is one so it needs to be moved if it's one 
      if (qty == 1) {
        items = cartItems.filter((item) => item.id !== id);
        setFlag(flag +1);
        cartDispatch();
      } else {
        setQty(qty - 1);

        cartItems.map((item) => {
          if (item.id === id) {
            item.qty -= 1;
            setFlag(flag + 1)
          }
        });
        cartDispatch();
      }
    }
  };

  useEffect(() => {
    items = cartItems;
  }, [qty, items]);

  return (
    <div
      key={item.id}
      className="w-full p-1 px-2 rounded bg-cartItem flex items-center gap-2"
    >
      <img src={item?.imageURL} alt="" className="w-20 h-20 max-w-[60px] " />

      <div className="flex flex-col gap-2">
        <p className="text-base text-white">{item?.title}</p>
        <p className="text-sm block text-gray-50 font-semibold">
          $ {parseFloat(item?.price) * qty}
        </p>
      </div>

      {/* button section */}

      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div whileTap={{ scale: 0.8 }}>
          <BiMinus
            className="text-white"
            onClick={() => updateQty('remove', item?.id)}
          />
        </motion.div>

        <p className="w-5 h-5 rounded-sm bg-cartBg text-white flex items-center justify-center">
          {qty}
        </p>

        <motion.div whileTap={{ scale: 0.8 }}>
          <BiPlus
            className="text-white"
            onClick={() => updateQty('add', item?.id)}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
