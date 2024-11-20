import {PageLayout} from "../components/PageLayout.jsx";
import {addPerson} from "../people.js";
import {Formik} from "formik";

export function AddPersonPage() {

    function handleSubmit(values, actions) {
        addPerson(values.personName)
        actions.resetForm();
    }

    return <PageLayout title="Add new person">
        <Formik
            initialValues={{personName: ''}}
            onSubmit={handleSubmit}>
            {
                formProps => (
                    <form onSubmit={formProps.handleSubmit}>
                        <div className="field">
                            <p className="control">
                                <input className="input"
                                       name="personName"
                                       placeholder="Name"
                                       onChange={formProps.handleChange}
                                       onBlur={formProps.handleBlur}
                                       value={formProps.values.personName}
                                />
                            </p>
                        </div>
                        <div className="field">
                            <p className="control is-flex is-justify-content-end" style={{ opacity: formProps.isValid ? 1 : 0.6}}>
                                <button className="button is-info" type="submit">
                                    Add
                                </button>
                            </p>
                        </div>
                    </form>
                )
            }
        </Formik>

    </PageLayout>
}
