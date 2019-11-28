import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const matches = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkMode(matches)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return darkMode
}
