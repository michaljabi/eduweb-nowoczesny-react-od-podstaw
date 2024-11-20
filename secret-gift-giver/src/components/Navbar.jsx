import {NavbarItem} from "./NavbarItem.jsx";
import {useState} from "react";
import classNames from "classnames";

export function Navbar() {

    const menuItems = [
        { name: 'People', href: '/' },
        { name: 'Exchange', href: '/exchange' },
        { name: 'Add person', href: '/add-person' },
    ]

    const [isOpen, setIsOpen] = useState(false)

     return (
         <nav className="navbar mb-2" role="navigation" aria-label="main navigation">
             <div className="navbar-brand">
                 <a role="button" className={ classNames("navbar-burger", {"is-active": isOpen})} aria-label="menu" aria-expanded="false"  onClick={() => setIsOpen(!isOpen)}>
                     <span aria-hidden="true"></span>
                     <span aria-hidden="true"></span>
                     <span aria-hidden="true"></span>
                     <span aria-hidden="true"></span>
                 </a>
             </div>
             <div className={ classNames("navbar-menu", {"is-active": isOpen})}>
                 <div className="navbar-start">
                     {
                         menuItems.map((item) => <NavbarItem key={item.href} {...item} />)
                     }
                 </div>
             </div>
         </nav>
     )
}
