import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`text-white w-full h-screen bg-[#03a9f4]`}>Hello</main>
  );
}
