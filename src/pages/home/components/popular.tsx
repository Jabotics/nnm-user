import SimpleSlider from "@/components/custom/simpler-slider"

const Popular = () => {
  return (
    <div className='mt-20 w-screen'>
      <div className='flex w-[96vw] items-center justify-between'>
        <h1 className='text-[1.75rem] font-medium'>Popular Products</h1>
        <div className='mr-7 mt-2 flex items-center gap-8 text-sm'>
          {[
            { title: 'Baby & Mom Care' },
            { title: 'Personal Care' },
            { title: 'Beverages' },
            { title: 'Household Items' },
          ].map((item, index) => {
            return <div key={index}>{item.title}</div>
          })}
        </div>
      </div>

      <div className="mb-20">
      <SimpleSlider />
      </div>
    </div>
  )
}

export default Popular
