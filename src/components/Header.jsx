import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo1.jpg';
import Avatar from '../img/avatar2.png';
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvide';
import { actionType } from '../context/reducer';

function Header() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            className="w-12 object-cover rounded-full"
            alt="logo"
          />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="flex items-center gap-8 ml-auto"
        >
          <li
            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            onClick={() => setIsMenu(false)}
          >
            Home
          </li>
          <li
            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            onClick={() => setIsMenu(false)}
          >
            Menu
          </li>
          <li
            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            onClick={() => setIsMenu(false)}
          >
            About Us
          </li>
          <li
            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            onClick={() => setIsMenu(false)}
          >
            Service
          </li>
        </motion.ul>

        <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <MdShoppingBasket className="text-2xl ml-8 cursor-pointer" />

          {cartItems && cartItems.length > 0 && (
            <div className="absolute -top-0.5 -right-3 w-6 h-6 rounded-full bg-cartNumBg flex items-center justify-content">
              <p className="text-xs text-white font-semibold text-align-center p-2">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 rounded-full min-w-[40px] min-h-[40px] drop-shadow-2xl ml-6 cursor-pointer"
            alt="User Profile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-30 shadow-xl rounded-lg flex flex-col absolute top-12 py-2 right-0"
            >
              {user && user.email === 'kokocat5068@gmail.com' && (
                <Link to={'/createItem'}>
                  <p
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base onClick=(() => setIsMenu(false)) 
                  
                  "
                  >
                    New Item <MdAdd />
                  </p>
                </Link>
              )}
              <p
                className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base
              
            "
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* mobile */}

      <div className="flex items-center justify-between md:hidden h-full">
        <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <MdShoppingBasket className="text-2xl ml-8 cursor-pointer" />
         {cartItems && cartItems.length > 0 && (
           <div className="absolute -top-1 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-content">
           <p className="text-xs text-white font-semibold text-align-center p-2">
             {cartItems.length}
           </p>
         </div>
         )}
        </div>

        <Link to={'/'} className="flex items-center gap-2">
          <img src={Logo} className="w-7 rounded-full object-cover" alt="logo" />
          <p className="text-headingColor text-l font-bold">City</p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 rounded-full min-w-[40px] min-h-[40px] drop-shadow-2xl ml-6 cursor-pointer"
            alt="User Profile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-30 shadow-xl rounded-lg flex flex-col absolute top-12 py-2 right-0"
            >
              {user && user.email === 'kokocat5068@gmail.com' && (
                <Link to={'/createItem'}>
                  <p
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                    onClick={() => setIsMenu(false)}
                  >
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className="flex flex-col px-4 py-2">
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-200"
                  onClick={() => setIsMenu(false)}
                >
                  Home
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-200"
                  onClick={() => setIsMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-200"
                  onClick={() => setIsMenu(false)}
                >
                  About Us
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 hover:bg-slate-200"
                  onClick={() => setIsMenu(false)}
                >
                  Service
                </li>
              </ul>

              <p
                className="px-4 py-2 rounded-md shadow-md flex items-center gap-3 bg-gray-100 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base text
              
              "
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
