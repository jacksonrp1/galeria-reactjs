import { useState, useEffect } from 'react'

const GetWidthDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return { width, height }
}

export default function UseWidthDimensions() {
  const [WindowDimensions, setWindowDimensions] = useState(GetWidthDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(GetWidthDimensions())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return WindowDimensions
}
