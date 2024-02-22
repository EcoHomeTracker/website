'use client'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useHide } from '@/hooks/useHide'
import classNames from 'classnames'

export default function ScreenBlur() {
  const showMenu = useSearchParams().get('showMenu') === 'true'
  const completelyHide = useHide(showMenu)

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <>
      <motion.div
        animate={showMenu ? 'visible' : 'hidden'}
        variants={variants}
        className={classNames(
          'absolute inset-0 z-10 bg-white/40 backdrop-blur-sm',
          completelyHide && 'hidden',
        )}
      />
    </>
  )
}
