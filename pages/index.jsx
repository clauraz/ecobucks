import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <h1 className="text-3xl font-bold mb-2">This is our homepage!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec sagittis ipsum, nec vestibulum sem.</p>
      </div>
    </div>
  )
}
