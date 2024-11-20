import {people} from "../people.js";
import {PageLayout} from "../components/PageLayout.jsx";
import {PanelBlock} from "../components/PanelBlock.jsx";

export function PeoplePage() {

    const selectedNames = ["Krysia"]

    return (
        <PageLayout title="List of People">
            <article className="panel is-info">
                {
                    people.map(name =>
                        (
                            <PanelBlock key={name} name={name} isSelected={selectedNames.includes(name)}/>
                        )
                    )
                }
            </article>
        </PageLayout>
    )
}
