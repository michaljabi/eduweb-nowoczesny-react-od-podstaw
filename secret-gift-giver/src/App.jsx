import { Header } from "./components/Header.jsx";
import { people } from "./people.js";


// eslint-disable-next-line react/prop-types
function PanelBlock({name = '', isSelected = false}) {
    if(isSelected) {
        return <a className="panel-block is-active is-flex is-justify-content-space-between">
            {name} <span>✅</span>
        </a>;
    }
    return <a className="panel-block">{name} </a>;
}


function App() {

  const appTitle = 'Secret Gift Giver';

  const showAlert = (message) => {
      alert(message)
  }

  const selectedNames = ["Krysia"]

  return (
    <>
      <Header title={appTitle} subTitle="Exchange gifts with your colleagues" onAlert={showAlert}/>

        <main className="container mt-4 p-4">
            <h3 className="title is-3">List of People</h3>
            <article className="panel is-info">
                {
                    people.map(name =>
                        (
                            <PanelBlock key={name} name={name} isSelected={selectedNames.includes(name)} />
                        )
                    )
                }
            </article>
        </main>
    </>
  )
}

export default App
