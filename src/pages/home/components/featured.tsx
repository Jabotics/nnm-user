import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Featured = () => {
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
  }));

  return (
    <div className='mt-20 w-screen'>
      <div className='flex w-[93vw] items-center justify-between'>
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
        <div className='mr-2 flex items-center gap-2'>
          <CiCircleChevLeft
            size={32}
            className='cursor-pointer text-stone-400'
          />
          <CiCircleChevRight
            size={32}
            className='cursor-pointer text-stone-400'
          />
        </div>
      </div>

      <AnimatePresence>
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={containerVariants}
          className='flex items-center gap-8 w-[90vw] mt-12 overflow-y-hidden overflow-x-auto featured-container'
        >
          {items.map((item, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className='mt-12 h-40 w-28 rounded-xl bg-stone-300 flex flex-col items-center justify-evenly flex-shrink-0 mb-7'
              >
                <img
                  className='h-16 w-12 rounded-md'
                  src={item.href}
                  alt={item.title}
                />
                <div className='text-sm text-center'>
                  <div className='font-semibold text-stone-700'>{item.title}</div>
                  <div className='text-stone-500'>{item.qty} items</div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={containerVariants}
          className='flex items-center gap-8 w-[90vw] mt-12 overflow-y-hidden overflow-x-auto featured-container'
        >
          <motion.div variants={itemVariants} className='w-1/3 h-72 rounded-md bg-stone-200'>Save upto 8% on healthy drinks</motion.div>
          <motion.div variants={itemVariants} className='w-1/3 h-72 rounded-md bg-stone-200'>20% off on medicines</motion.div>
          <motion.div variants={itemVariants} className='w-1/3 h-72 rounded-md bg-stone-200'>20% off on medicines</motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Featured
