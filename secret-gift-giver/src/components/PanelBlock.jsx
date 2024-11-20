import classNames from "classnames";
import PropTypes from 'prop-types';

PanelBlock.propTypes = {
    name: PropTypes.string,
    isSelected: PropTypes.bool,
}

export function PanelBlock({name = '', isSelected = false}) {
    return <a className={classNames("panel-block", {"is-active is-flex is-justify-content-space-between": isSelected})}>
        { name }
        { isSelected && <span>✅</span> }
    </a>;
}
