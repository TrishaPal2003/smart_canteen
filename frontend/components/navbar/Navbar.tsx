"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Order", path: "/order" },
    { name: "Staff", path: "/staff" },
    { name: "Dashboard", path: "/dashboard" },
  ]

  const getClassName = (path: string) => {
    const isActive =
      path === "/"
        ? pathname === "/"
        : pathname.startsWith(path)

    return isActive
      ? "text-[#006944] border-b-2 border-[#006944] pb-1 font-bold"
      : "text-[#306554] font-bold hover:text-[#006944]"
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#d9ffee]/80 backdrop-blur-xl shadow-[0_12px_32px_rgba(0,54,41,0.06)] flex justify-between items-center px-6 h-16">

        {/* Logo */}
        <div className="text-xl font-black bg-gradient-to-br from-[#006944] to-[#7efdbe] bg-clip-text text-transparent">
          CCN Canteen
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={getClassName(item.path)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <FontAwesomeIcon icon={faBell} className="w-6 h-6 text-[#006944]" />

          {/* Avatar */}
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu3yjt0NBQPKBA1BF5Cq8RbUtB1nnTZOBvSpXAATafHEUH5HX8XWbOJMkeJOm6_H5JRQr33KvfJ43eiKa8eq6Ybd9kA5pX_8RgsIWD09dz9atJzkDxokdka1YWIyY05hG58yDSpk2yHxII0ZuaeqKSTjVnRTr4cCo4hTTEoJL_hJTILvO_VvZlTucsP_cwdWADvRR1Pa1mCO3HX7xwHbcQcYuel59f-50qbyeUYBOurZMYFwz7VwNen8mNTB6KaaUXiBpyC0DEbvEJ"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-[#006944]" />
          </button>
        </div>
      </nav>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* RIGHT SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
        bg-gradient-to-b from-[#0f2e24] via-[#145c45] to-[#0b1f19] text-white shadow-2xl`}
      >

        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 px-6 mt-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className={
                pathname === item.path
                  ? "text-[#7efdbe] font-bold"
                  : "text-white hover:text-[#7efdbe]"
              }
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}