import { Suspense } from 'react'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  return (
    <nav className='relative w-full'>
      <Suspense>
        <MobileMenu />
      </Suspense>
    </nav>
  )
}
