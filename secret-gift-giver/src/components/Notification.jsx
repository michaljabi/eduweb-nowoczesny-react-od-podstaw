import PropTypes from "prop-types";

Notification.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

export function Notification({children = ''}) {
    return <div className="notification">
        {children}
    </div>;
}
