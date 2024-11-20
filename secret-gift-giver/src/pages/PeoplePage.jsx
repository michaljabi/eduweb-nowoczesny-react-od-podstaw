import {people} from "../people.js";
import {PageLayout} from "../components/PageLayout.jsx";
import {PanelBlock} from "../components/PanelBlock.jsx";
import {useState, useEffect} from "react";
import {SearchBox} from "../components/SearchBox.jsx";
import {Outlet} from "react-router-dom";
import PropTypes from "prop-types";

PeoplePage.propTypes = {
    noOutlet: PropTypes.bool,
}

export function PeoplePage({noOutlet = false}) {

    const [searchText, setSearchText] = useState('');
    const [selectedNames, setSelectedNames] = useState([])

    function handleSelect(name) {
        if(selectedNames.includes(name)) {
            return setSelectedNames(selectedNames.filter(n => n !== name))
        }
        setSelectedNames([...selectedNames, name])
    }

    // After 2 seconds select "John" by code.
    useEffect(() => {
        const timerId = setTimeout(() => {
            setSelectedNames((sN) => {
                return sN.length > 0 ? [...sN, "John"] : sN
            })
        }, 2000)
        return () => {
            clearTimeout(timerId);
        }
    }, [])
    /*useEffect(() => {
        setTimeout(() => {
            setSelectedNames((sN) => [...sN, "Mark"])
        }, 3000)
    }, [])*/

    const filteredPeople = people.filter(name=> name.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <PageLayout title="List of People">
            <div className="columns is-desktop">
                <div className="column">
                    <SearchBox onSearch={(value) => setSearchText(value)}/>
                    <article className="panel is-info">
                        {
                            filteredPeople.map(name =>
                                (
                                    <PanelBlock key={name} name={name} isSelected={selectedNames.includes(name)}
                                                onSelect={() => handleSelect(name)}/>
                                )
                            )
                        }
                    </article>
                </div>
                {!noOutlet && <div className="column">
                    <Outlet/>
                </div>
                }
            </div>
        </PageLayout>
    )
}
