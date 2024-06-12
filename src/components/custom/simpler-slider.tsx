import React, { useState } from 'react'
import { POPULAR_MEDICINES_DATA } from '@/___mock___/data'
import { Button } from './button'

import Carousel from 'react-multi-carousel'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import 'react-multi-carousel/lib/styles.css'

import '../../assets/styles/arrow.css'

interface Medicine {
  title: string
  qty: number
  href: string
  description: string
}

interface ArrowProps {
  onClick: () => void
}

const CustomLeftArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='custom-arrow left-arrow'
      aria-label='Previous slide'
    >
      <IoIosArrowBack />
    </button>
  )
}

const CustomRightArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='custom-arrow right-arrow'
      aria-label='Next slide'
    >
      <IoIosArrowForward />
    </button>
  )
}

export default function SimpleSlider() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  }

  const [cart, setCart] = useState<Medicine[]>([])

  const addToCart = (item: Medicine) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.title === item.title
    )

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[existingItemIndex].qty++
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...item, qty: 1 }])
    }
  }

  const removeFromCart = (item: Medicine) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.title === item.title
    )

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart]
      if (updatedCart[existingItemIndex].qty > 1) {
        updatedCart[existingItemIndex].qty--
      } else {
        updatedCart.splice(existingItemIndex, 1)
      }
      setCart(updatedCart)
    }
  }

  return (
    <div className='py-14'>
      <div className='w-[96vw] px-0'>
        <div className='categori-slider'>
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            autoPlay={false}
            containerClass='carousel-container'
            itemClass='mr-6'
            customLeftArrow={<CustomLeftArrow onClick={() => {}} />}
            customRightArrow={<CustomRightArrow onClick={() => {}} />}
          >
            {POPULAR_MEDICINES_DATA.map((item: Medicine, index: number) => (
              <div key={index} className='px-1'>
                <div className='flex flex-col items-center justify-between rounded-lg bg-stone-300 px-1 py-4'>
                  <img
                    className='mb-1 h-20 w-16 rounded-md'
                    src={item.href}
                    alt={item.title}
                  />
                  <div className='text-center'>
                    <div className='text-lg font-semibold text-stone-700'>
                      {item.title}
                    </div>
                    <div className='-mt-2 text-xs tracking-wide text-stone-500'>
                      {item.qty} items
                    </div>
                    <div className='font-medium'>{item.description}</div>
                  </div>
                  <div className='mt-1 flex w-full items-center justify-around'>
                    <div>$70</div>
                    <div className='flex items-center'>
                      <Button
                        onClick={() => removeFromCart(item)}
                        className='rounded-l bg-red-500 px-2 py-1 text-xs font-bold text-white hover:bg-red-600'
                      >
                        -
                      </Button>
                      <div className='bg-gray-100 px-1 py-1 text-xs font-semibold text-gray-900'>
                        {cart.find((cartItem) => cartItem.title === item.title)
                          ?.qty || 0}
                      </div>
                      <Button
                        onClick={() => addToCart(item)}
                        className='rounded-r bg-green-500 px-2 py-1 text-xs font-bold text-white hover:bg-green-600'
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
