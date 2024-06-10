import { useState } from 'react'
import { POPULAR_MEDICINES_DATA } from '@/___mock___/data'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Button } from './button'

interface Medicine {
  title: string
  qty: number
  href: string
  description: string
}

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],

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
    <Slider {...settings} className='mt-20'>
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
            <div className='mt-1 w-full flex items-center justify-around'>
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
    </Slider>
  )
}
