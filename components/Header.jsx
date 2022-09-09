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
    <div className="w-screen h-[380px] absolute flex flex-col items-center z-100 top-0 mt-0 pt-0">
      <Image src={`/assets/logo/Group${active}.svg`} width={240} height={240} alt="logo" />
      <div className="flex absolute top-5 right-5 gap-[18px]">
        <Image src="/assets/Icon ionic-ios-notifications.svg" width={32} height={32} alt="notifications" />
        <Image src="/assets/Icon ionic-md-heart.svg" width={32} height={32} alt="heart" />
        <Image
          className="border-red-400 border"
          src="/assets/Screenshot 2022-09-09 at 11.24.18.png"
          width={32}
          height={32}
          alt="profile-picture"
        />
      </div>
      <h2 className="text-[24px] mt-[-60px] text-[#1d1d1d]">EcoBux</h2>
    </div>
  )
}

export default Header
