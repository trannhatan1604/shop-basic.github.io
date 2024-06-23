import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Nếu cần import CSS cho Skeleton

const HomePage = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(!loading)
            const respone = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setData(await respone.json())
                setLoading(!loading)
            }
            return () => {
                componentMounted = !componentMounted
            }
        }
        getProducts()
    }, [])

    const display = data.filter(item => item.rating.rate > 4.5).slice(0,4)

    const Loading = () => {
        return (
            <div class="grid grid-cols-2 gap-6 product-grid p-10">
                <div class="h-50 bg-white p-6 rounded-lg shadow-lg product-item text-center">
                    <Skeleton height={100} width='30%' />
                    <div className=''>
                        <Skeleton height={20} width='70%' />
                        <Skeleton height={20} width='70%' />
                        <Skeleton height={20} width='70%' />
                        <Skeleton height={20} width='30%' />
                    </div>
                    
                </div>
                <div class="h-50 bg-white p-6 rounded-lg shadow-lg product-item text-center">
                    <Skeleton height={100} width='30%' />
                    <div className=' '>
                    <Skeleton height={20} width='70%' />
                    <Skeleton height={20} width='70%' />
                    <Skeleton height={20} width='70%' />
                    <Skeleton height={20} width='30%' />
                    </div>
                    
                </div>
            </div>
        )
    }

    const ShowProduct = () => {
        return (
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                {display.map((item, index)=>(
                    <div key={index} class="flex items-start space-x-4 p-5">
                        <img src={item.image} alt="Chocolate cupcake" class="w-36 h-36 object-cover rounded" />
                        <div>
                            <h3 class="text-xl font-bold text-red-500">Chocolate cupcake</h3>
                            <p class="text-gray-700 mb-2">A chocolate cupcake is a rich, single-serving chocolate cake topped with
                                creamy chocolate frosting.</p>
                            <p class="text-gray-500 line-through">25.000 VND</p>
                            <p class="text-gray-800 text-xl font-bold">20.000 VND</p>
                            <button class="order_btn bg-red-500 text-white py-2 px-4 rounded mt-2">ORDER NOW </button>
                        </div>
                    </div>
                ))}
                
            </div>
        )
    }

    return (
        <div class="bg-melon py-4">
            <div class="text-center text-red-600 font-bold">Limited</div>
            <div class="text-center text-3xl font-bold"> --- Offer for TODAY ---</div>
            <div class="content mx-auto grid md:grid-cols-2 sm:grid-cols-1 gap-8 mt-4">
                <div class="bg-gray-200 w-[95%] h-[90%] flex items-center justify-center shadow-xl">
                    <img src="/img/limited-1.png" width='70%' alt="Buy 1 get 1" />
                </div>
                <div class="bg-gray-200 w-[100%] h-[90%] flex items-center justify-center shadow-xl">
                    <img src="/img/limited-2.png" width='80%' alt="Buy 1 get 1" />
                </div>
                <div class="bg-gray-200 w-[95%] h-[90%] flex items-center justify-center shadow-xl">
                    <img src="/img/limited-3.png" width='70%' alt="Buy 1 get 1" />
                </div>
                <div class="bg-gray-200 w-[100%] h-[90%] flex items-center justify-center shadow-xl">
                    <img src="/img/limited-4.png" width='80%' alt="Buy 1 get 1" />
                </div>
            </div>
            <section class="bg-seashell py-16">
                <div class="content mx-auto px-4 text-center">
                    <p className='font-bold font-serif text-[40px]'>TOP RATE</p>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </section>
            <div className="w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4549.710722722102!2d107.55100908614116!3d16.483868331980364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a6df41343deb%3A0xefbc5f3dfeacc55c!2zTWFpIEzDo28gQuG6oW5nLCBIxrDGoW5nIFPGoSwgVHAuIEh14bq_LCBUaOG7q2EgVGhpw6puIEh14bq_LCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1718675795567!5m2!1svi!2s" className="w-full" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div >
    )
}

export default HomePage
