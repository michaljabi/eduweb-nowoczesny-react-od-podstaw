
import classNames from 'classnames'
import classes from './Header.module.css'

/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
function WhatWillBeRendered() {
    return <>
        { true }
        { false && <p>!</p> }
        { undefined } { null } { '' } { [] }
        <hr />
        { [1, 2, 3] } { <p>para</p> }
    </>
}

export function Header({title = 'Header', subTitle = 'subtitle', onAlert = () => {}}) {
    // console.log(props);
    // const {title = 'Header', subTitle = 'subtitle'} = props;
    return (
        <>
            <section className="hero is-info">
                <div className="hero-body">
                    <p className="title" onClick={() => onAlert('hello from header')}>{title}</p>
                    <h3 className={classNames("subtitle p-1", classes.bgWhite)} style={{borderRadius: '5px'}}>
                        {subTitle}
                    </h3>
                </div>
            </section>
            {/*<WhatWillBeRendered />*/}
        </>
    )
}

// JSX rules:
// 1. use className instead of class !
// 2. always one root element in JSX !
// 3. style is always an object !
// 4. always use PascalCase for component names !
// 5. some values are not rendered in JSX computation !
