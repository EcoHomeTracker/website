'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { Bars3Icon, ChevronUpIcon } from '@heroicons/react/24/outline'

import Button from './Button'
import { useSearchParams } from 'next/navigation'

export default function MobileMenu() {
  const showMenu = useSearchParams().get('showMenu') === 'true'

  return (
    <div
      className='absolute top-0 z-20 block w-full pt-12 lg:hidden'
      style={{ backgroundColor: 'rgb(30, 30, 30)' }}
    >
      <div className='flex w-full justify-between px-6'>
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src='/vercel.svg'
          alt='Next.js Logo'
          width={120}
          height={24}
          priority
        />
        <Link
          className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-md duration-300 hover:bg-gray-800'
          href={`?showMenu=${!showMenu}`}
        >
          {!showMenu && <Bars3Icon className='h-6 w-6' />}
          {showMenu && <ChevronUpIcon className='h-6 w-6' />}
        </Link>
      </div>
      {showMenu && (
        <motion.div
          className='overflow-hidden rounded-b-xl px-6 py-4 shadow'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
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
            <Button
              className='btn-secondary'
              content='Subscribe to newsletter'
            />
            <Button className='btn-primary' content='Download the app' />
          </div>
        </motion.div>
      )}
    </div>
  )
}
