// import { useTranslation } from 'react-i18next'
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '@/components/embla-carousel'
import Featured from './components/featured'
import Popular from './components/popular'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const HomePage = () => {
  // const { t } = useTranslation()

  return (
    <div>
      {/* <div className='h-screen rounded-md object-contain'>
        <img src="https://tablt.com/assets/first-banner.jpg" alt="banner" className='h-[80%] rounded-md' />
      </div> */}
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div className='h-10'></div>

      <Featured />
      <div className='h-10'></div>

      <Popular />
    </div>
  )
}

export default HomePage
