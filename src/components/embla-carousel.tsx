import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import { IoPaperPlaneOutline } from 'react-icons/io5'
import { Button } from './custom/button'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((index) => (
            <div className='embla__slide relative' key={index}>
              {/* <div className="embla__slide__number">{index + 1}</div> */}
              <div className='absolute left-20 top-32'>
                <div className='text-5xl text-stone-900'>Personal Care</div>
                <div className='text-lg tracking-wide text-stone-300'>
                  20% discount on the medicines
                </div>

                <div className='mt-32 flex h-12 w-[30rem] items-center gap-2 rounded-full bg-stone-50 pl-5'>
                  <IoPaperPlaneOutline size={20} color={'#33333385'} />
                  <input
                    type='text'
                    className='flex-1 border-none bg-transparent pl-3 focus:outline-none focus:ring-0 active:border-none'
                    placeholder='subscribe to the newsletter'
                  />

                  <Button className='h-12 w-32 rounded-3xl'>Subscribe</Button>
                </div>
              </div>
              <img
                className='embla__slide__img'
                src={`/banner.png`}
                alt='Your alt text'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
