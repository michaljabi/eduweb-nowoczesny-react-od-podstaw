import {PageLayout} from "../components/PageLayout.jsx";
import {Link, useLocation} from "react-router-dom";
import {makeExchange} from "../make-exchange.js";

export function ExchangePage() {

    const { state = [] } = useLocation();
    const pairs = makeExchange(state || [])
    const isPartyStarted = pairs.length > 1;

    return <PageLayout title="Exchange of gifts">
        {
            !isPartyStarted &&
            <div className="notification is-warning is-light">
                Please select <Link to="/people"> people </Link> first
            </div>
        }
        {
            pairs.map(([person, forPerson]) =>
                <p className="box is-flex is-justify-content-space-between" key={person}>
                    <span className="tag is-info">{person}</span>
                    buys gift for
                    <span className="tag is-success">{forPerson}</span>
                </p>
            )
        }
    </PageLayout>
}
