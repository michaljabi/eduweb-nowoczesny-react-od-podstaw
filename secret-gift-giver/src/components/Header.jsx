
function WhatWillBeRendered() {
    return <>
        { true }
        { false && <p>!</p> }
        { undefined } { null } { '' } { [] }
        <hr />
        { [1, 2, 3] } { <p>para</p> }
    </>
}

export function Header() {
    return (
        <>
            <section className="hero is-info">
                <div className="hero-body">
                    <p className="title">Secret Gift Giver</p>
                    <p className="subtitle p-1" style={ { backgroundColor: 'white', borderRadius: '5px' } }>Exchange gifts with your colleagues</p>
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
