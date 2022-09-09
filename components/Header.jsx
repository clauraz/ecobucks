import { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import Image from 'next/image'

const Header = () => {
  const [active, setActive] = useState(1)

  useEffect(() => {
    if (active <= 4) {
      setTimeout(() => setActive(active + 1), 250)
    } else {
      setActive(1)
    }
  }, [active])

  return (
    <div className="w-screen h-[180px] absolute flex justify-center items-center z-100">
      <Image src={`/assets/logo/Group${active}.svg`} width={240} height={240} alt="logo" />
    </div>
  )
}

export default Header
