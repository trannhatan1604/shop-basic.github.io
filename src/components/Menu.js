import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'; // Nếu cần import CSS cho Skeleton
import { dataProduct, categories } from '../utils/data'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { toast } from 'react-toastify';

const Menu = () => {
  const [data, setData] = useState([])
  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState(data)
  const dispatch = useDispatch()

  //phân trang 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of items per page
  const totalPages = Math.ceil(filter.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = filter.slice(indexOfFirstItem, indexOfLastItem);
  useEffect(() => {
    currentItems = filter.slice(indexOfFirstItem, indexOfLastItem);
  }, [currentPage])

  const handleNextPage = () => {
    window.scrollTo(0,10)
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    window.scrollTo(0,10)
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  let componentMounted = true;

  useEffect(() => {
    const getProducts = () => {
      setLoading(!loading)
      // const respone = await fetch("https://fakestoreapi.com/products")
      // const responeCate = await fetch("https://fakestoreapi.com/products/categories")
      if (componentMounted) {
        setData(dataProduct)
        setCategory(categories)
        setFilter(dataProduct)
        setLoading(!loading)
        console.log(filter, category)
      }
      return () => {
        componentMounted = !componentMounted
      }
    }
    getProducts()
  }, [])

  const Loading = () => {
    return (
      <div class="grid grid-cols-3 gap-6 product-grid p-10">
        <div class="h-100 bg-white p-6 rounded-lg shadow-lg relative product-item text-center">
          <Skeleton height={144} width='100%' />
          <div className='p-5'>
            <Skeleton height={20} width='100%' />
          </div>
          <Skeleton height={40} width='100%' />
          <Skeleton height={30} width='100%' />
          <Skeleton height={30} width='30%' />
        </div>
        <div class="h-100 bg-white p-6 rounded-lg shadow-lg relative product-item text-center">
          <Skeleton height={144} width='100%' />
          <div className='p-5'>
            <Skeleton height={20} width='100%' />
          </div>
          <Skeleton height={40} width='100%' />
          <Skeleton height={30} width='100%' />
          <Skeleton height={30} width='30%' />
        </div>
        <div class="h-100 bg-white p-6 rounded-lg shadow-lg relative product-item text-center">
          <Skeleton height={144} width='100%' />
          <div className='p-5'>
            <Skeleton height={20} width='100%' />
          </div>
          <Skeleton height={40} width='100%' />
          <Skeleton height={30} width='100%' />
          <Skeleton height={30} width='30%' />
        </div>
      </div>
    )
  }

  const filterProduct = (item) => {
    setCurrentPage(1)
    const updateList = data.filter(x => x.category === item)
    setFilter(updateList)
  }
 
  const handleAdd = (item) => {
    dispatch(addCart(item))
    toast.success("Done add to cart!")
  }

  const ShowProduct = () => {
    return (
      <>
        <div className='buttons flex justify-center mt-5 gap-4'>
          <button
            onClick={() => setFilter(data)}
            className='rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300'>
            All
          </button>
          {category.map((item, index) => (
            <button
              onClick={() => filterProduct(item)}
              key={index} className='rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300'>
              {item.toUpperCase()}
            </button>
          )
          )}
        </div>
        <div class="grid grid-cols-3 gap-6 product-grid p-10">
          {currentItems.map((item, index) => (
            <div key={index} class="h-100 bg-white p-6 rounded-lg shadow-lg relative product-item text-center">
              <div class="absolute top-0 left-0 bg-red-500 text-white text-xs p-1 rounded-br-lg">New</div>
              <NavLink to={`/product/${item.id}`}>
                <img src={item.image} alt={item.title} class="w-36 h-36 object-contain mx-auto" />
              </NavLink>
              <p class="text-xl font-bold text-red-500 py-5">{item.title.length < 20 ? item.title : `${item.title.slice(0, 20)}...`}</p>
              <p class="text-gray-700 mb-2 h-50px">{item.description.length < 100 ? item.description : `${item.description.slice(0, 100)}...`}</p>
              <p class="text-gray-800 text-xl font-bold">{item.price} $</p>
              <div class="flex justify-center mt-2">
                <button onClick={() => handleAdd(item)} class="cart_icon py-2 px-4 w-40 h-10 border rounded-sm bg-orange-200">
                  <p>BUY</p>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 mb-5">
          <button
            onClick={() => setCurrentPage(1) }
            disabled={currentPage === 1}
            className="mx-2 py-2 px-4 border rounded-sm bg-gray-200"
          >
            Begin
          </button>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="mx-2 py-2 px-4 border rounded-sm bg-gray-200"
          >
            Previous
          </button>
          <span className="py-2 px-4">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="mx-2 py-2 px-4 border rounded-sm bg-gray-200"
          >
            Next 
          </button>
          <button
            onClick={() => {setCurrentPage(totalPages); window.scrollTo(0,10)}}
            disabled={currentPage === totalPages}
            className="mx-2 py-2 px-4 border rounded-sm bg-gray-200"
          >
            End
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      {loading ? <Loading /> : <ShowProduct />}
    </>



  )
}

export default Menu