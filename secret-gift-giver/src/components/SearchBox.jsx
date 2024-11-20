import PropTypes from "prop-types";


SearchBox.propTypes = {onSearch: PropTypes.func.isRequired};

export function SearchBox({onSearch}) {
    return <p className="control has-icons-left">
        <input className="input is-info" type="text" placeholder="Search"
               onChange={ (e) => onSearch(e.target.value)}
        />
        <span className="icon is-left">🔎</span>
    </p>;
}
