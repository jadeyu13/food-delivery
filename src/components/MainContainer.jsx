import React from 'react';
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import RowContainer from './RowContainer';

function MainContainer() {
  return (
    <div className="w-full h-auto flex-col items-center justify-center ">
      <HomeContainer />
      
      <section className="w-full mt-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-amber-400 to-amber-600 transition-all ease-in-out duration-100">Our Fresh & healthy food</p>

          <div className="hidden md:flex gap-3 items-center ">
            <motion.div 
            whileTap={{scale: 0.8}}
            className="w-8 h-8 rounded-lg bg-amber-400 hover:bg-amber-600 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"> <MdChevronLeft className="text-2xl text-white" />
            </motion.div>

            <motion.div
            whileTap={{scale: 0.8}}
            className="w-8 h-8 rounded-lg bg-amber-400 hover:bg-amber-600 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center">
              <MdChevronRight className="text-2xl text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer flag={true} />
      </section>
    </div>
  );
}

export default MainContainer;
