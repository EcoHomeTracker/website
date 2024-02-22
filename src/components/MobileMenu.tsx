'use client'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { Bars3Icon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { useHide } from '@/hooks/useHide'

import Button from '@components/Button'
import classNames from 'classnames'

export default function MobileMenu() {
  const showMenu = useSearchParams().get('showMenu') === 'true'
  const completelyHidden = useHide(showMenu)

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className='absolute top-0 z-20 block w-full lg:hidden'>
      <div
        className='flex w-full justify-between px-6 py-12'
        style={{ backgroundColor: 'rgba(30, 30, 30)' }}
      >
        <div className='relative h-6 w-32'>
          <Image
            className='dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
            src='/vercel.svg'
            alt='Next.js Logo'
            fill
            priority
          />
        </div>
        <Link
          className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-md duration-300 hover:bg-gray-700'
          href={{ search: 'showMenu=' + !showMenu }}
        >
          {!showMenu && <Bars3Icon className='h-6 w-6' />}
          {showMenu && <ChevronUpIcon className='h-6 w-6' />}
        </Link>
      </div>
      <motion.div
        className={classNames(
          'overflow-hidden rounded-b-xl px-6 py-4',
          completelyHidden && 'hidden',
        )}
        variants={variants}
        animate={showMenu ? 'visible' : 'hidden'}
        transition={{ bounce: 0 }}
        style={{ backgroundColor: 'rgba(30, 30, 30)' }}
      >
        <ul className='flex w-full flex-col gap-4 py-8'>
          <Link href='#home' className='w-full cursor-pointer'>
            <li>Home</li>
          </Link>
          <Link href='#features' className='w-full cursor-pointer'>
            <li>Features</li>
          </Link>
          <Link href='#pricing' className='w-full cursor-pointer'>
            <li>Pricing</li>
          </Link>
          <Link href='#reviews' className='w-full cursor-pointer'>
            <li>Reviews</li>
          </Link>
        </ul>
        <div className='flex flex-col gap-4'>
          <Button className='btn-secondary' content='Subscribe to newsletter' />
          <Button className='btn-primary' content='Download the app' />
        </div>
      </motion.div>
    </div>
  )
}
