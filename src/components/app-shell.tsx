import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function AppShell() {
  const pathName = useLocation()

  return (
    <div className='relative h-full overflow-hidden bg-background'>
      <main
        id='content'
        className={`h-full overflow-x-hidden pt-16 transition-[margin]  md:overflow-y-hidden md:pt-0`}
      >
        <Navbar />
        <div className='p-8'>
          <Outlet />
        </div>
        {pathName.pathname !== '/products' && <Footer />}
      </main>
    </div>
  )
}
