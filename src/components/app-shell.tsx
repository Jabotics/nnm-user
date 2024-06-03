import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function AppShell() {
  return (
    <div className='relative h-full overflow-hidden bg-background'>
      <main
        id='content'
        className={`h-full overflow-x-hidden pt-16 transition-[margin] md:ml-14 md:overflow-y-hidden md:pt-0`}
      >
        <Navbar />
        <div className='p-8'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
