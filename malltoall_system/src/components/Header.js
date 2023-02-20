import React, { useState } from 'react'
import moon from '../images/moon.png';
import sun from '../images/constellation.png'
import flag from '../images/flag.png'
import bell from '../images/bell.png'
import logo from '../images/logo.jpg'
import { useSelector } from 'react-redux';
import MenuComp from './headerAccountMenue/Menu';
import { Link } from 'react-router-dom';
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'



const Header = () => {
    const [selected, setSelected] = useState('sun');
    const [showMenu, setShowMenu] = useState(false);
     // authData
     const {authData} = useSelector((state) => state.userReducer);
  return (
    <div>
        <div className='flex items-center justify-between px-[1.6rem]  '>
            <div className='flex items-center gap-2'>
                <div className='flex items-center bg-black rounded-[20px] '>
                    <img className={`w-[1.3rem] m-[.2rem]  cursor-pointer p-[.1rem] rounded-[20px] ${selected == 'moon' ? 'bg-[] bg-gradient-to-r from-[#00C2FF]  to-[#205464] ' : ''}`} src={moon} onClick={() => setSelected('moon')} />
                    <img className={`w-[1.3rem] m-[.2rem]  cursor-pointer p-[.1rem] rounded-[20px] ${selected == 'sun' ? 'bg-[] bg-gradient-to-r from-[#00C2FF]  to-[#205464] ' : ''}`} src={sun} onClick={() => setSelected('sun')} />
                </div>
                <div>
                    <img src={flag} className='rounded-[.2rem] w-[2.3rem] ' />
                </div>
                <div className='relative '>
                    <img src={bell} className=' w-[1.3rem] ' />
                    <p className='absolute -top-[.7rem]  -right-[.2rem] text-red-500 bg-white rounded-full w-[1rem] h-[1rem] flex items-center justify-center p-[.5rem]  shadow-sm shadow-black	'>5</p>
                </div>
            </div>
            
            

            <div className=''>
                <div onClick={() => setShowMenu(!showMenu)} className='flex flex-row-reverse gap-2 cursor-pointer items-center' ><img src={authData?.profile_photo_url}  className='w-[2.2rem] h-[2.2rem] rounded-full object-cover text-xl block'  /> <p className='select-none block'>{authData?.name}</p></div>   
                {showMenu && <MenuComp showMenu={showMenu} setShowMenu={setShowMenu} />}
            </div>
        </div>
        <hr  />
        <div dir='rtl' className='flex items-center justify-between px-[1.6rem] py-[.3rem] '>
            <div className='flex items-center ml-[3rem] w-[15%]'>
                <p className='flex items-center mx-[2rem] flex-row-reverse'>
                    <AiOutlineHeart className='text-gray-400 text-[1.7rem] ' />
                    <div className='flex flex-col items-start text-[#504f4f] '>
                    <Link to='/dashboard/wishlist'>
                        <div className='w-[100%] flex justify-end '>
                        <p className=' text-red-500 bg-white rounded-full w-[1rem] h-[1rem] flex items-center justify-center p-[.6rem]  shadow-sm shadow-black	'>5</p>
                        </div>
                        <p>
                            المفضلة
                        </p>
                    </Link> 
                </div>
                </p>
                <p className='flex items-center mx-[2rem] flex-row-reverse'>
                    <AiOutlineShoppingCart className='text-gray-400 text-[1.7rem] ' />
                    <div className='flex flex-col items-start text-[#504f4f] '>
                    <Link to='/dashboard/wishlist'>
                        <div className='w-[100%] flex justify-end '>
                        <p className=' text-red-500 bg-white rounded-full w-[1rem] h-[1rem] flex items-center justify-center p-[.6rem]  shadow-sm shadow-black	'>5</p>
                        </div>
                        <p>
                            السلة
                        </p>
                    </Link> 
                </div>
                </p>
            </div>

            <div className='w-[50%] relativeborder border border-gray-300 relative rounded-lg'>
                <input  type={'text'} className='border-none outline-none rounded-[.9rem] w-[100%] p-[.6rem] ' placeholder='ابحث عن المنتج أو المتجر'  />
                <FiSearch  className='absolute top-[34%] left-2  '/>
            </div>
            <img src={logo} className='w-[8rem] ' />
        </div>
        <hr />
        <div className='flex justify-start items-center  gap-3 pr-[2rem] flex-row-reverse py-[1rem]'>
            <p className='font-bold cursor-pointer '>الرئيسية</p>
            <p className='font-bold cursor-pointer '>كيف أشتري</p>
            <p className='font-bold cursor-pointer '>مركز المساعدة</p>
            <p className='font-bold cursor-pointer '>أخر العروض</p>
            <p className='font-bold cursor-pointer '>المدونة</p>
        </div>
        <hr />
    </div>
  )
}

export default Header;
