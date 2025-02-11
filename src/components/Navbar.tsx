"use client"

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const searchParams=useSearchParams();
    const todosFilter=searchParams.get("todos");
  return (
    <nav className='flex gap-12 '>
        <Link  href="/" className={todosFilter === null ? "active text-sm" :"text-sm"}>All</Link>
        <Link  href="/?todos=active" className={todosFilter === "active" ? "active text-sm" :"text-sm"}>Active</Link>
        <Link  href="/?todos=completed" className={todosFilter === "completed" ? "active text-sm" :"text-sm"}>Completed</Link>
    </nav>
  )
}

export default Navbar