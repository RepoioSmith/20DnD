"use client"

import Link from "next/link"
import Image from "next/image"
import d20Logo from '@/assets/d20Logo.png'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="flex items-center">
        <Image src={d20Logo} alt="Logo" width={40} height={40} />
        <span className="ml-3 text-xl font-bold">DnD</span>
      </div>
      <ul className="flex space-x-6 text-lg">
        <li><Link href="/home">Inicio</Link></li>
        <li><Link href="/characterCreator">Creador</Link></li>
        <li><Link href="/myCharacters">Mis Personajes</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
