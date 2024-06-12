import SimpleSlider from "@/components/custom/simpler-slider"

const BestDeal = () => {
  return (
    <div className='mt-20 w-screen'>
      <div className='flex w-[93vw] items-center justify-between'>
        <h1 className='text-[1.75rem] font-medium'>Best Deals</h1>
      </div>

      <SimpleSlider />
    </div>
  )
}

export default BestDeal
