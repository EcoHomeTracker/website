import Image from 'next/image'

import MobileMenu from './MobileMenu'

export default function Navbar() {
  return (
    <nav className='relative w-full'>
      <MobileMenu />
    </nav>
  )
}
