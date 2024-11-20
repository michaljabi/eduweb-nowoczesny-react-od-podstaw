import classNames from "classnames";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

PanelBlock.propTypes = {
    name: PropTypes.string,
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func,
}

export function PanelBlock({name = '', isSelected = false, onSelect = () => {}}) {
    return <div className={classNames("panel-block", {"is-active is-flex is-justify-content-space-between": isSelected})} onClick={onSelect}>
        <Link to={`/people/${name}`}> { name } </Link>
        { isSelected && <span>✅</span> }
    </div>;
}
