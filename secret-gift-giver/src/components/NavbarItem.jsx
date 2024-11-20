import PropTypes from "prop-types";


NavbarItem.propTypes = {
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export function NavbarItem({href, name}) {
    return (
        <a className="navbar-item" href={href}>
            {name}
        </a>
    )
}
