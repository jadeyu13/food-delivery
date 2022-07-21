import React, { useEffect, useState } from 'react';
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvide';
import MenuContainer from './MenuContainer';
import CartContainer from './CartContainer';

function MainContainer() {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="w-full h-auto flex-col items-center justify-center ">
      <HomeContainer />

      <section className="w-full mt-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-amber-400 to-amber-600 transition-all ease-in-out duration-100">
            Our Fresh & healthy food
          </p>

          <div className="hidden md:flex gap-3 items-center ">
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="w-8 h-8 rounded-lg bg-amber-400 hover:bg-amber-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-2xl text-white" />
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.8 }}
              className="w-8 h-8 rounded-lg bg-amber-400 hover:bg-amber-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
            >
              <MdChevronRight className="text-2xl text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === 'fruits')}
        />
      </section>

      <section className="w-full my-6">
        <MenuContainer />
      </section>

      <section>
       {cartShow && (<CartContainer />)} 
      </section>
    </div>
  );
}

export default MainContainer;
