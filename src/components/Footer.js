import React from 'react'

const Footer = () => {
  return (
    <div>
      <div class="footer bg-black text-seashell py-16">
            <div class="footer-content flex justify-around items-start py-5 sm:items-center">
                <div class="content about w-1/3 mx-4 text-white">
                    <h2 class="subscribe-title text-2xl font-bold underline mb-2">About us</h2>
                    <p class="text-justify">Two worms Bakery offers a delightful experience with its warm, inviting
                        atmosphere and
                        cute decor. The bakery excels in food quality, offering a variety of high-quality, delicious
                        baked goods,
                        including must-try items like their signature cupcakes and buttery cookies. Though slightly
                        pricier, the
                        taste and portion sizes justify the cost. It can be said that, Two worms bakery is a great
                        destination if
                        you are in need of delicious, freshly baked cakes.</p>
                </div>
                <img src="/img/Logo.png" alt="Logo" class="w-40 h-40 lg:w-52 lg:h-52 my-2"/>
                <div class="content subscribe w-1/3 mx-4 text-white sm:hidden">
                    <h2 class="subscribe-title text-2xl font-bold underline mb-2">Subscribe email</h2>
                    <p>Give us your email, and we shall send regular updates for new stuff and events.</p>
                </div>
            </div>
        </div>
        <div class="footer-links flex md:flex-row sm:flex-col sm:items-center justify-around bg-seashell text-black py-5">
            <div class="footer-column w-1/5 text-center">
                <h3 class="footer-links-title text-lg font-bold mb-2">Payment methods</h3>
                <ul class="flex md:space-x-5 sm:justify-center">
                    <img src="https://static.vecteezy.com/system/resources/previews/006/829/672/original/cash-logo-icon-design-illustration-vector.jpg"
                        alt="Cash" class="w-20 h-20"/>
                    <img src="https://developers.momo.vn/v3/assets/images/icon-52bd5808cecdb1970e1aeec3c31a3ee1.png"
                        alt="MoMo" class="w-20 h-20"/>
                    <img src="https://st4.depositphotos.com/2498595/30586/v/450/depositphotos_305864302-stock-illustration-online-banking-icon-simple-element.jpg"
                        alt="Internet Banking" class="w-20 h-20"/>
                </ul>
                
            </div>
            <div class="footer-column w-100 text-left">
                <h3 class="text center footer-links-title text-lg font-bold mb-2">Working time</h3>
                <p class="font-bold">Monday - Friday</p>
                <p class="text-gray-500"> 8:00 am - 8:30 pm</p>
                <p class="font-bold">Saturday - Sunday</p>
                <p class="text-gray-500">10:00 am - 4:30 pm</p>
            </div>
            <div class="footer-column w-200 text-left sm:hidden">
                <h3 class="text-center footer-links-title text-lg font-bold mb-2">Orders and Returns</h3>
                <ul class="list-none p-0">
                    <li class="text-l"><a href="#" class="text-black no-underline hover:underline">Order</a></li>
                    <li class="mb-1"><a href="#" class="text-black no-underline hover:underline">Shipping</a></li>
                    <li class="mb-1"><a href="#" class="text-black no-underline hover:underline">Policy Return
                            Policy</a></li>
                    <li class="mb-1"><a href="#" class="text-black no-underline hover:underline">Payments</a></li>
                </ul>
            </div>
            <div class="footer-column w-1/5 text-center">
                <h3 class="footer-links-title text-lg font-bold mb-2">Connect us</h3>
                <footer class="py-2 flex justify-center items-center">
                    <ul class="flex space-x-4">
                        <li class="cursor-pointer transform hover:scale-110">
                            <a href="https://zalo.me/0363954120/" target="_blank">
                                <img class="w-12 grayscale hover:grayscale-0" src="/img/zalo_logo.png" alt="Zalo"/>
                            </a>
                        </li>
                        <li class="cursor-pointer transform hover:scale-110">
                            <a href="https://www.instagram.com/2ws_bakery/" target="_blank">
                                <img class="w-12 grayscale hover:grayscale-0" src="/img/ins_logo.png" alt="Instagram"/>
                            </a>
                        </li>
                        <li class="cursor-pointer transform hover:scale-110">
                            <a href="tel:+0363954120">
                                <img class="w-12 grayscale hover:grayscale-0" src="/img/phone_logo.png" alt="Phone"/>
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
    </div>
  )
}

export default Footer
