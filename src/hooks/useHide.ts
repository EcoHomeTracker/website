import { useState, useEffect } from 'react'

export const useHide = (showMenu: boolean, timeout = 500) => {
  const [completelyHidden, setCompletelyHidden] = useState(true)

  useEffect(() => {
    if (showMenu) {
      setCompletelyHidden(false)
    } else {
      const timer = setTimeout(() => {
        setCompletelyHidden(true)
      }, timeout)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [showMenu, timeout])

  return completelyHidden
}
