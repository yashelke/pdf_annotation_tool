// "use client"
// import Link from 'next/link'

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
       
//         <Link href="/" className="flex items-center gap-2 text-black hover:text-blue-700 transition-colors duration-300">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-7 h-7 text-blue-600"
//             fill="currentColor"
//             viewBox="0 0 16 16"
//           >
//             <path fillRule="evenodd" d="M14 4.5V14..." />
//           </svg>
//           <span className="text-2xl font-bold tracking-tight">PDF Annotator</span>
//         </Link>

  
//         <div className="flex gap-6 items-center">
//           {[
//             { href: "#hero", label: "Hero" },
//             { href: "#features", label: "Features" },
//             { href: "#cta", label: "CTA" },
//           ].map(({ href, label }) => (
//             <a
//               key={label}
//               href={href}
//               className="relative  text-black text-lg font-medium transition-all duration-300 hover:text-blue-600 group"
//             >
//               {label}
//               <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           ))}

//           <Link
//             href="/editor"
//             className="relative text-black text-lg font-medium transition-all duration-300 hover:text-blue-600 group"
//           >
//             Editor
//             <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }



// "use client"
// import Link from 'next/link'

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">

//         {/* Logo + Title */}
//         <Link
//           href="/"
//           className="flex items-center gap-2 text-black hover:text-blue-700 transition-colors duration-300 active:scale-95"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-7 h-7 text-blue-600"
//             fill="currentColor"
//             viewBox="0 0 16 16"
//           >
//             <path fillRule="evenodd" d="M14 4.5V14..." />
//           </svg>
//           <span className="text-2xl font-bold tracking-tight">PDF Annotator</span>
//         </Link>

//         {/* Navigation Links */}
//         <div className="flex gap-6 items-center">
//           {[
//             { href: "#hero", label: "Hero" },
//             { href: "#features", label: "Features" },
//             { href: "#cta", label: "CTA" },
//           ].map(({ href, label }) => (
//             <a
//               key={label}
//               href={href}
//               className="relative text-black text-lg font-semibold transition-all duration-300 hover:text-blue-600 active:scale-95 focus:outline-none"
//             >
//               {label}
//               <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           ))}

//           <Link
//             href="/editor"
//             className="relative text-black text-lg font-semibold transition-all duration-300 hover:text-blue-600 active:scale-95 focus:outline-none"
//           >
//             Editor
//             <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }


// Hamburger Menu Version

"use client"
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react' // Lucide icon library

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: "#hero", label: "Hero" },
    { href: "#features", label: "Features" },
    { href: "#cta", label: "CTA" },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-black hover:text-blue-700 transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-blue-600"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path fillRule="evenodd" d="M14 4.5V14..." />
          </svg>
          <span className="text-2xl font-bold tracking-tight">PDF Annotator</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="relative text-black text-lg font-semibold transition-all duration-300 hover:text-blue-600 active:scale-95"
            >
              {label}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <Link
            href="/editor"
            className="relative text-black text-lg font-semibold transition-all duration-300 hover:text-blue-600 active:scale-95"
          >
            Editor
          </Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button onClick={toggleMenu} className="md:hidden text-black">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-3 text-left">
            {navLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="text-black text-base font-medium hover:text-blue-600 active:scale-95 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
            <Link
              href="/editor"
              className="text-black text-base font-medium hover:text-blue-600 active:scale-95 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Editor
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
