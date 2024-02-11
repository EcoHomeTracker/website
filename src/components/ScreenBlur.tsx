'use client'

import { useSearchParams } from 'next/navigation'

export default function ScreenBlur() {
  const showMenu = useSearchParams().get('showMenu') === 'true'

  return (
    <>
      {showMenu && <div className='absolute inset-0 z-10 backdrop-blur-sm' />}
    </>
  )
}
