import { useEffect, useState } from 'react'
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
    <div className="w-screen h-[240px] absolute flex flex-col items-center z-100 top-0 m-0 p-0">
      <Image src={`/assets/logo/Group${active}.svg`} width={240} height={240} alt="logo" />
      <h2 className="text-[24px] mt-[-60px] text-[#1d1d1d]">EcoBux</h2>
    </div>
  )
}

export default Header
