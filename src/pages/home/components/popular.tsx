const Popular = () => {
  return (
    <div className='mt-20 w-screen'>
      <div className='flex w-[93vw] items-center justify-between'>
        <h1 className='text-[1.75rem] font-medium'>Featured Categories</h1>
        <div className='mt-2 mr-7 flex items-center gap-8 text-sm'>
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
    </div>
  )
}

export default Popular
