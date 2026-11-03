import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { logout } from 'wasp/client/auth'
import { Link } from 'wasp/client/router'

const NavMenu = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if(menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setOpen(false)
        }
    }

    if(open) {
        document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
        document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <div ref={menuRef}>
        {open ? <X size={24} onClick={() => setOpen(!open)} color="#ffffff"/> : <Menu size={24} onClick={() => setOpen(!open)} color="#ffffff"/>}
        <div className={`absolute top-10 bg-white z-20 ${open ? "right-0" : "hidden"} shadow-lg border-2 w-40 h-auto m-4`}>
            {open && (
                <div className="flex flex-col p-3">
                    <Link to="/" onClick={() => setOpen(!open)} className='p-2 hover:border-2 border-[#F6CF3F] rounded'>Home</Link>
                    <Link to="/garden" onClick={() => setOpen(!open)} className='p-2 hover:border-2 border-[#F6CF3F] rounded'>My Plants</Link>
                    <Link to="/search" onClick={() => setOpen(!open)} className='p-2 hover:border-2 border-[#F6CF3F] rounded'>Plant Look-up</Link>
                    <button
                        className="text-left p-2 hover:border-2 border-[#F6CF3F] rounded"
                        onClick={() => {
                            logout()
                            setOpen(!open)
                        }}
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    </div>
  )
}

export default NavMenu