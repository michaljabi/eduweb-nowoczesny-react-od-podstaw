import {NavbarItem} from "./NavbarItem.jsx";

export function Navbar() {

    const menuItems = [
        { name: 'People', href: '/' },
        { name: 'Exchange', href: '/exchange' },
        { name: 'Add person', href: '/add-person' },
    ]

     return (
         <nav className="navbar mb-2" role="navigation" aria-label="main navigation">
             <div className="navbar-brand">
                 <a role="button" className="navbar-burger is-active" aria-label="menu" aria-expanded="false">
                     <span aria-hidden="true"></span>
                     <span aria-hidden="true"></span>
                     <span aria-hidden="true"></span>
                     <span aria-hidden="true"></span>
                 </a>
             </div>
             <div className="navbar-menu is-active">
                 <div className="navbar-start">
                     {
                         menuItems.map((item) => <NavbarItem key={item.href} {...item} />)
                     }
                 </div>
             </div>
         </nav>
     )
}
