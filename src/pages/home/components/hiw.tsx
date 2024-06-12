import { Button } from '@/components/custom/button'
import { MdCall } from "react-icons/md"

const Hiw = () => {
  return (
    <div className='my-4 flex h-[20vh] w-[96vw] items-center justify-between gap-5'>
      {[
        {
          title: 'Quick order with prescription',
          description: 'Just upload prescription and place order',
          image: '/AddPrescription.svg',
          button: true,
          buttonTitle: 'UPLOAD',
        },
        {
          title: 'Call to place an order',
          description: 'Call us to tell what you require',
          image: '/callrequest.svg',
          button: false,
          buttonTitle: null,
          mobile: '9089085252',
        },
        {
          title: 'Chat to place an order',
          description: 'Chat with us and tell what you require',
          image: '/chatrequest.svg',
          button: true,
          buttonTitle: 'CHAT',
        },
      ].map((item, index) => {
        return (
          <div
            key={index}
            className='flex h-[80%] w-1/3 items-center justify-center rounded-2xl bg-[#8ca9ad4d]'
          >
            <div className='relative flex h-[90%] w-[95%] items-center justify-start rounded-2xl bg-stone-50/35'>
              <img src={item.image} alt='' className='ml-4 h-16' />
              <div className='absolute left-0 top-1/2 h-24 w-36 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-[#0b4a9210] to-[#0b4a922c]' />
              <div className='ml-10 flex flex-col items-start justify-center'>
                <div className='text-sm font-bold'>{item.title}</div>
                <div className='text-xs font-normal'>{item.description}</div>
                {item.button && (
                  <Button variant={'default'} className='mt-3 h-7 text-xs'>
                    {item.buttonTitle?.toUpperCase()}
                  </Button>
                )}
                {item.mobile && (
                  <div className='mt-3 flex items-center gap-1'>
                    <MdCall size={30} className='text-blue-800' />
                    <span className='text-[12px] font-bold text-blue-800'>{item.mobile}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Hiw
