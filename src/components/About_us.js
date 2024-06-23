import React from 'react'

const About_us = () => {
  return (
    <div>
      <section class="bg-seashell flex flex-col justify-center pt-[50px]">
        <div class="flex px-40 my-10">
          <div class="w-[80%] flex flex-col justify-center items-start mr-[150px]">
            <h2 class="text-xl font-cursive font-bold text-[#ee7560] ">BUCK MASON MAKES UPDATED, MODERN AMERICAN CLASSICS WITH A COMMITMENT TO TIMELESSNESS, QUALITY, AND OUR CALIFORNIA ROOTS.</h2>
            <p>
              Founded in 2013 in Venice, California, by Sasha Koehn and Erik Allen Ford, we started out of a 350-square-foot garage with locally-made jeans and tees and a simple goal to make clothing that will stand the test of time.
            </p>
            <p>
              From the start, we’ve remained committed to quality craftsmanship, combining old-school manufacturing techniques and modern technology to create wardrobe essentials that make it easy to be the best dressed in the room.
            </p>
            <p>
              Each piece in our collection has a little bit of us infused in it; a laidback, effortless style that looks as good as it feels. We call it the spirit of California.
            </p>
          </div>
          <div className='w-[40%]'>
            <img src="https://cdn.shopify.com/s/files/1/0123/5065/2473/files/Img2_BrandPillars_860x.jpg?v=1682447357" alt="Baker" class="w-full object-cover" />
          </div>
        </div>
        <hr className='w-[80%] mx-auto' />
        <div class="flex px-40 my-10 gap-40">
          <div className='w-[50%]'>
            <img src="https://cdn.shopify.com/s/files/1/0123/5065/2473/files/Design_860x.jpg?v=1685482216" alt="Baker" class="w-full object-cover" />
          </div>
          <div class="w-[80%] flex flex-col justify-center items-start mr-[150px]">
            <h2 class="text-xl font-cursive font-bold text-[#ee7560] ">DESIGN</h2>
            <p>
            Our aim is for our clothing to outlive us. Not just in that it lasts a lifetime but that it will stand the test of time. We’ve dedicated ourselves to crafting garments that are not only impeccably constructed but also timeless in their design. By deconstructing and refining the clothing Americans have worn for generations, we’ve created modern, elevated classics that we believe you’ll reach for time and again. 
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default About_us
