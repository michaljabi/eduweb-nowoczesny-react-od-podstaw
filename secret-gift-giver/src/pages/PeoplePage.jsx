import {people} from "../people.js";
import {PageLayout} from "../components/PageLayout.jsx";
import {PanelBlock} from "../components/PanelBlock.jsx";
import {useState, useEffect} from "react";

export function PeoplePage() {


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


    return (
        <PageLayout title="List of People">
            <article className="panel is-info">
                {
                    people.map(name =>
                        (
                            <PanelBlock key={name} name={name} isSelected={selectedNames.includes(name)} onSelect={() => handleSelect(name)}/>
                        )
                    )
                }
            </article>
        </PageLayout>
    )
}
