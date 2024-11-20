import {PageLayout} from "../components/PageLayout.jsx";
import {PanelBlock} from "../components/PanelBlock.jsx";
import {useState, useEffect} from "react";
import {SearchBox} from "../components/SearchBox.jsx";
import {Outlet, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import {peopleService} from "../services/peopleService.js";
import classNames from "classnames";

PeoplePage.propTypes = {
    noOutlet: PropTypes.bool,
}

const makeEmptyPerson = () => ({ name: ''})
const SKELETON_VALUES = [makeEmptyPerson(), makeEmptyPerson(), makeEmptyPerson(), makeEmptyPerson()]

export function PeoplePage({noOutlet = false}) {

    const [people, setPeople] = useState(SKELETON_VALUES);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    const [selectedNames, setSelectedNames] = useState([])

    function handleNavigation() {
        navigate("/exchange", {state: selectedNames})
    }

    function handleSelect(name) {
        if(selectedNames.includes(name)) {
            return setSelectedNames(selectedNames.filter(n => n !== name))
        }
        setSelectedNames([...selectedNames, name])
    }

    // After 2 seconds select "John" by code.
    useEffect(() => {
        const timerId = setTimeout(() => {
            // setSelectedNames((sN) => {
            //     return sN.length > 0 ? [...sN, "John"] : sN
            // })
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

    useEffect(() => {

        (async() => {
            setErrorMessage("");
            setIsLoading(true)
            try {
                const { data } = await peopleService.getPeople();
                setPeople(data)
            } catch (e) {
                console.error(e);
                setErrorMessage(e.message)
                setPeople([])
            } finally {
                setIsLoading(false)
            }
        })()

    }, [])

    const filteredPeople = people.filter(({name}) => name.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <PageLayout title="List of People">
            <div className="columns is-desktop">
                <div className="column">
                    {
                        isLoading && <div className="notification is-info is-light">Loading people...</div>
                    }
                    {
                        errorMessage && <div className="notification is-danger is-light">{errorMessage}</div>
                    }
                    {
                        !isLoading && !errorMessage && <SearchBox onSearch={(value) => setSearchText(value)} />
                    }
                    <article className={classNames("panel is-info", {"is-skeleton": isLoading})}>
                        {
                            filteredPeople.map(({id, name}) =>
                                (
                                    <PanelBlock key={id} name={name} isSelected={selectedNames.includes(name)}
                                                onSelect={() => handleSelect(name)}/>
                                )
                            )
                        }
                    </article>
                    {
                        selectedNames.length > 1
                        &&
                        <div className="is-flex is-justify-content-end">
                            <button className="button is-info" onClick={handleNavigation}> Start party ({selectedNames.length})</button>
                        </div>
                    }
                </div>
                {!noOutlet && <div className="column">
                    <Outlet/>
                </div>
                }
            </div>
        </PageLayout>
    )
}
