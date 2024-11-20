import PropTypes from "prop-types";

PageLayout.propTypes = {
   title: PropTypes.string,
   children: PropTypes.element.isRequired
}


export function PageLayout({title = 'Empty page', children}) {
   return <>
      <h3 className="title is-3">{title}</h3>
      { children }
   </>
}
