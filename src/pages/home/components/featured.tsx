// import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'

const Featured = () => {
  const navigate = useNavigate();

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const items = Array.from({ length: 20 }, () => ({
    title: 'Crocin 150mg',
    qty: 25,
    href: 'https://5.imimg.com/data5/SELLER/Default/2021/5/YM/XU/ZX/33567294/dolo-650mg-paracetamol-tablet-250x250.jpg',
  }))

  return (
    <div className='mt-20 w-screen z-10'>
      <div className='flex w-[96vw] items-center justify-between'>
        <div className='flex items-center gap-24'>
          <h1 className='text-[1.75rem] font-medium'>Featured Categories</h1>
          <div className='mt-2 flex items-center gap-8 text-sm'>
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
        <div className='mr-2 flex items-center font-semibold tracking-wider underline text-xs cursor-pointer' onClick={() => navigate('/products')}>
          {/* <CiCircleChevLeft
            size={32}
            className='text-stone-400 cursor-pointer'
          />
          <CiCircleChevRight
            size={32}
            className='text-stone-400 cursor-pointer'
          /> */}
          VIEW ALL
        </div>
      </div>

      <AnimatePresence>
        <motion.div
          ref={ref1}
          initial='hidden'
          animate={inView1 ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='featured-container mt-12 flex w-[96vw] items-center gap-8 overflow-x-auto overflow-y-hidden'
        >
          {items.map((item, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className='bg-stone-300 mb-7 mt-12 flex h-40 w-28 flex-shrink-0 flex-col items-center justify-evenly rounded-xl cursor-pointer'
                onClick={() => navigate('/details')}
              >
                <img
                  className='h-16 w-12 rounded-md'
                  src={item.href}
                  alt={item.title}
                />
                <div className='text-center text-sm'>
                  <div className='text-stone-700 font-semibold'>
                    {item.title}
                  </div>
                  <div className='text-stone-500'>{item.qty} items</div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          ref={ref2}
          initial='hidden'
          animate={inView2 ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='featured-container mt-12 flex w-[96vw] items-center gap-8 overflow-x-auto overflow-y-hidden'
        >
          <motion.div
            variants={itemVariants}
            className='bg-stone-200 h-72 w-1/3 rounded-md'
          >
            Save upto 8% on healthy drinks
          </motion.div>
          <motion.div
            variants={itemVariants}
            className='bg-stone-200 h-72 w-1/3 rounded-md'
          >
            20% off on medicines
          </motion.div>
          <motion.div
            variants={itemVariants}
            className='bg-stone-200 h-72 w-1/3 rounded-md'
          >
            20% off on medicines
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Featured
