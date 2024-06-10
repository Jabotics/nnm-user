import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { Button } from './custom/button'
import { DotButton, useDotButton } from './embla-dot-button'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './embla-arraow-button'

type Slide = {
  [key: string]: string
}

type PropType = {
  slides: Slide[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((slide, index) => {
            return (
              <div className='embla__slide relative' key={index}>
                <div className='absolute left-20 top-32'>
                  <div className='text-5xl text-stone-900'>{slide.title}</div>
                  <div className='text-lg tracking-wide text-stone-300'>
                    {slide.headline}
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
                  src={slide.image}
                  alt={slide.imageAltText}
                />
              </div>
            )
          })}
        </div>
      </div>

      <div className='embla__controls'>
        <div className='embla__buttons'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? 'embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
