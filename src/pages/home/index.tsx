// import { useTranslation } from 'react-i18next'
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '@/components/embla-carousel'
import Featured from './components/featured'
import Popular from './components/popular'
import BestDeal from './components/best-deal'
import NNMApp from './components/nnm-app'
import { BANNER_DATA } from '@/___mock___/data'
import { Separator } from '@/components/ui/separator'
import Hiw from './components/hiw'

const OPTIONS: EmblaOptionsType = { loop: true }

const HomePage = () => {
  return (
    <div className='relative'>
      <EmblaCarousel slides={BANNER_DATA} options={OPTIONS} />
      <div className='h-10'></div>

      <Featured />
      <div className='h-10'></div>

      <Popular />

      <Separator className='w-[96vw]' />
      <Hiw />
      <Separator className='w-[96vw]' />

      <BestDeal />
      <div className='h-20'></div>

      <Separator className='w-[96vw]' />

      <NNMApp />

      <div className='bg-[#8ca9ad4d] w-[96vw] h-[45vh] rounded-3xl mt-20'></div>
    </div>
  )
}

export default HomePage
