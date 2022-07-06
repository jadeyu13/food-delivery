import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';

const RowContainer = ({ flag }) => {
  return (
    <div
      className={`w-full my-12 bg-rowBg ${
        flag ? 'overflow-x-scroll' : 'overflow-x-hidden'
      }`}
    >
      <div className="w-300 md:w-340 h-auto my-12 bg-cardOverlay rounded-lg p-2 m-12 backdrop-blur-lg hover:drop-shadow-lg">
        <div className="w-full flex items-center justify-between">
          <motion.img whileHover={{scale: 1.2}}
            src=
            "https://firebasestorage.googleapis.com/v0/b/my-project-0722-5e3d4.appspot.com/o/Images%2F1657042076347-r4.png?alt=media&token=4e43e873-6c91-427d-9172-cbd4e18b7206"
            alt="drink pix"
            className="w-40 -mt-8 drop-shadow-2xl"
          />
          <motion.div 
          whileTap={{ scale: 0.8}}
          className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center  cursor-pointer hover:shadow-md">
            <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>

        <div className="w-full flex flex-col items-end justify-end">
            <p className="text-base md:text-lg">Fried Rice</p>
            <p className="mt-1 text-sm">50 Calories</p>
            <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold"><span className="text-sm text-red-500">$</span> 10.99</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RowContainer;
