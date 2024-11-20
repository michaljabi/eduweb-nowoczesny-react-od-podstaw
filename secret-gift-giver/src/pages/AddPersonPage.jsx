import {PageLayout} from "../components/PageLayout.jsx";

export function AddPersonPage() {
    return <PageLayout title="Add new person">
        <form onSubmit={e => e.preventDefault()}>
            <div className="field">
                <p className="control">
                    <input className="input" placeholder="Name"/>
                </p>
            </div>
            <div className="field">
                <p className="control is-flex is-justify-content-end">
                    <button className="button is-info" type="submit">
                        Add
                    </button>
                </p>
            </div>
        </form>
    </PageLayout>
}
