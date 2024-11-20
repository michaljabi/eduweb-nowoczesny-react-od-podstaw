import {PageLayout} from "../components/PageLayout.jsx";
import {useState} from "react";
import {addPerson} from "../people.js";

export function AddPersonPage() {

    const [personName, setPersonName] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        if(!personName) {
            return;
        }
        addPerson(personName)
        setPersonName("")
    }

    return <PageLayout title="Add new person">
        <form onSubmit={handleSubmit}>
            <div className="field">
                <p className="control">
                    <input className="input" placeholder="Name" value={personName} onChange={(e) => setPersonName(e.target.value)} />
                </p>
            </div>
            <div className="field">
                <p className="control is-flex is-justify-content-end" style={{ opacity: personName ? 1 : 0.6}}>
                    <button className="button is-info" type="submit">
                        Add
                    </button>
                </p>
            </div>
        </form>
    </PageLayout>
}
