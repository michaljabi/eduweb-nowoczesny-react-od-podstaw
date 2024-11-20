import {PageLayout} from "../components/PageLayout.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export function PersonInfoPage() {

    const [isLoading, setLoading] = useState(true)
    const {personName} = useParams()

    useEffect(() => {
        // loading data from back-end
        setTimeout(()=> {
            setLoading(false)
        }, 3000)
    }, [personName]);

     return <PageLayout title="Person info">
         { isLoading && <div className="notification is-info is-light">
             Loading data about {personName}...
         </div>}
     </PageLayout>
}
