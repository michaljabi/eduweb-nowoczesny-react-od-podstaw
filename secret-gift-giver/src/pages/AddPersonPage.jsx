import {PageLayout} from "../components/PageLayout.jsx";
import {addPerson} from "../people.js";
import {Formik} from "formik";
import classNames from "classnames";

export function AddPersonPage() {

    function handleSubmit(values, actions) {
        addPerson(values.personName)
        actions.resetForm();
    }

    const validate = (values) => {
        const errors = {};
        if(!values.personName) {
            errors.personName = 'Name is required';
        }
        if(values.personName && values.personName.length < 2) {
            errors.personName = 'Name need to be at least 2 characters long';
        }
        if (!values.email) {
            errors.email = 'email address is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    }

    return <PageLayout title="Add new person">
        <Formik
            validate={validate}
            initialValues={{personName: '', email: ''}}
            onSubmit={handleSubmit}>
            {
                formProps => (
                    <form onSubmit={formProps.handleSubmit}>
                        <div className="field">
                            <p className="control">
                                <input className={classNames("input", {"is-danger": formProps.errors.personName})}
                                       name="personName"
                                       placeholder="Name"
                                       onChange={formProps.handleChange}
                                       onBlur={formProps.handleBlur}
                                       value={formProps.values.personName}
                                />
                            </p>
                            {
                                formProps.errors.personName &&
                                <p className="help is-danger">{formProps.errors.personName}</p>
                            }
                        </div>
                        <div className="field">
                            <p className="control">
                                <input className={classNames("input", {"is-danger": formProps.errors.email})}
                                       name="email"
                                       type="email"
                                       placeholder="e-mail address"
                                       onChange={formProps.handleChange}
                                       onBlur={formProps.handleBlur}
                                       value={formProps.values.email}
                                />
                            </p>
                            {
                                formProps.errors.email &&
                                <p className="help is-danger">{formProps.errors.email}</p>
                            }
                        </div>
                        <div className="field">
                            <p className="control is-flex is-justify-content-end"
                               style={{opacity: (formProps.isValid && formProps.dirty) ? 1 : 0.6}}>
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
