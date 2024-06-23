import React from 'react'
import { NavLink } from 'react-router-dom';
import path from '../utils/path';
import {icons} from '../utils/icons'
import { useSelector } from 'react-redux';

const {PiShoppingCartFill } = icons
const Navbar = () => {
    const state = useSelector((state) => state.handleCart)

    const isNotClick = "text-lg font-semibold hover:text-blue-700"
    const isClick = "text-lg text-blue-700 font-semibold hover:text-blue-700"
    let autoSlideInterval;
    let slideIndex = 0;

    const showSlides = () => {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (slideIndex >= slides.length) { slideIndex = 0; }
        if (slideIndex < 0) { slideIndex = slides.length - 1; }

        for (i = 0; i < slides.length; i++) {
            slides[i].classList.add("hidden");
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove("bg-gray-700");
            dots[i].classList.add("bg-gray-400");
        }

        slides[slideIndex].classList.remove("hidden");
        dots[slideIndex].classList.remove("bg-gray-400");
        dots[slideIndex].classList.add("bg-gray-700");
    }
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            slideIndex++;
            showSlides();
        }, 3000);
    }
    const plusSlides = (n) => {
        clearInterval(autoSlideInterval);
        slideIndex += n;
        showSlides();
        startAutoSlide();
    }

    const currentSlide = (n) => {
        clearInterval(autoSlideInterval);
        slideIndex = n - 1;
        showSlides();
        startAutoSlide();
    }

    return (
        <div>
            <div class="content header_top py-2">
                <div class="flex gap-4 items-center justify-between">
                    <div class="address-hotline flex-1">
                        <p><b>Address:</b> Mai Lao Bang, Hue city - <b>Hotline</b>:
                            84-363-954-120</p>
                    </div>
                </div>
            </div>

            <div class="Banner relative">
                <nav class="sm:mb-5 md:mb-9 bg-seashell border border-dashed border-5 border-black relative z-10">
                    <div class="content px-2 flex items-center justify-between">
                        <div class="flex text-center gap-5 lg:space-x-40 flex-1 ml-10 font-bold">
                            <NavLink to={path.HOME} className={({ isActive }) => //bắt sự kiện để thêm style
                                isActive ? isClick : isNotClick
                            }>Home</NavLink>
                            <NavLink to={path.ABOUT_US} className={({ isActive }) => //bắt sự kiện để thêm style
                                isActive ? isClick : isNotClick
                            }>About us</NavLink>
                            <NavLink to={path.MENU} className={({ isActive }) => //bắt sự kiện để thêm style
                                isActive ? isClick : isNotClick
                            }>Menu</NavLink>
                        </div>
                        <div class="flex text-center items-center space-x-20 py-3 flex-1 justify-end">
                            <div class="relative" id="cartContainer">
                                <NavLink to={path.CART} className={({ isActive }) => //bắt sự kiện để thêm style
                                    isActive ? isClick : isNotClick
                                }>
                                    <div className='flex mr-7 gap-3'>
                                        <PiShoppingCartFill size={30}/>
                                        <div className='relative'>
                                            <span className='absolute top-0 right-0 h-5 w-5 bg-yellow-600 text-gray-950 text-xs rounded-full flex items-center justify-center'>
                                                {state.length}
                                            </span>
                                        </div>
                                    </div>
                                </NavLink>
                                <div class="absolute top-8 right-0 w-72 bg-pink-100 border border-gray-300 shadow-lg hidden" id="cartPopup">
                                    <div id="popup-content">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-7 z-50">
                    <img src="/img/Logo.png" alt="Logo" class="w-28 h-28 lg:w-40 lg:h-40 rounded-full" />
                </div> */}

                <div class="slideshow-container relative mx-auto">
                    <div class="mySlides fade flex justify-center">
                        <img src="/img/Banner-1.png" class="w-[80%] object-contain" alt="Banner 1" />
                    </div>
                    <div class="mySlides fade flex justify-center hidden">
                        <img src="/img/Banner-2.png" class="w-[80%] object-cover" alt="Banner 2" />
                    </div>
                    <div class="mySlides fade flex justify-center hidden">
                        <img src="/img/Banner-3.png" class="w-[80%] object-cover" alt="Banner 2" />
                    </div>
                    <button
                        class="prev absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer text-white font-bold text-lg p-4 bg-black bg-opacity-50 rounded-r"
                        onClick={() => plusSlides(-1)}>❮</button>
                    <button
                        class="next absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer text-white font-bold text-lg p-4 bg-black bg-opacity-50 rounded-l"
                        onClick={() => plusSlides(1)}>❯</button>
                    <div class="dots absolute bottom-2 w-full flex justify-center space-x-2">
                        <span class="dot h-2 w-2 bg-gray-400 rounded-full inline-block cursor-pointer transition-colors duration-500"
                            onClick={() => currentSlide(1)}></span>
                        <span class="dot h-2 w-2 bg-gray-400 rounded-full inline-block cursor-pointer transition-colors duration-500"
                            onClick={() => currentSlide(2)}></span>
                        <span class="dot h-2 w-2 bg-gray-400 rounded-full inline-block cursor-pointer transition-colors duration-500"
                            onClick={() => currentSlide(3)}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
