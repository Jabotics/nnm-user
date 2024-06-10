// import { useTranslation } from 'react-i18next'
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '@/components/embla-carousel'
import Featured from './components/featured'
import Popular from './components/popular'
import { BANNER_DATA } from '@/___mock___/data'

const OPTIONS: EmblaOptionsType = { loop: true }

const HomePage = () => {
  return (
    <div>
      <EmblaCarousel slides={BANNER_DATA} options={OPTIONS} />
      <div className='h-10'></div>

      <Featured />
      <div className='h-10'></div>

      <Popular />
    </div>
  )
}

export default HomePage
