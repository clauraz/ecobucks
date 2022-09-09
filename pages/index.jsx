import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Dashboard } from '../pages/Dashboard'

export default function Home() {
  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <Dashboard />
    </div>
  )
}
