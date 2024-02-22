import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import MobileMenu from './MobileMenu'
import Button from './Button'

export default function Navbar() {
  return (
    <nav className='relative w-full'>
      <div className='absolute left-0 right-0 top-0 mx-auto hidden w-full max-w-7xl items-center px-12 py-12 lg:flex'>
        <div className='pr-12'>
          <div className='relative h-6 w-32'>
            <Image
              className='dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
              src='/vercel.svg'
              alt='Next.js Logo'
              fill
              priority
            />
          </div>
        </div>
        <ul className='flex w-full flex-1 justify-start gap-8 py-8 text-gray-200'>
          <Link
            href='#home'
            className='rounded-md px-4 py-2 text-sm duration-300 hover:bg-gray-700 hover:text-white'
          >
            <li>Home</li>
          </Link>
          <Link
            href='#features'
            className='rounded-md px-4 py-2 text-sm duration-300 hover:bg-gray-700 hover:text-white'
          >
            <li>Features</li>
          </Link>
          <Link
            href='#pricing'
            className='rounded-md px-4 py-2 text-sm duration-300 hover:bg-gray-700 hover:text-white'
          >
            <li>Pricing</li>
          </Link>
          <Link
            href='#reviews'
            className='rounded-md px-4 py-2 text-sm duration-300 hover:bg-gray-700 hover:text-white'
          >
            <li>Reviews</li>
          </Link>
        </ul>
        <div className='flex flex-1 justify-end gap-4'>
          <Button className='btn-secondary w-fit' content='Subscribe' />
          <Button className='btn-primary w-fit' content='Download' />
        </div>
      </div>
      <Suspense>
        <MobileMenu />
      </Suspense>
    </nav>
  )
}
