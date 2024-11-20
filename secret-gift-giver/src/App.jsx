import {Header} from "./components/Header.jsx";
import {people} from "./people.js";

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
                            <a key={name} className="panel-block is-active">
                                {name}
                            </a>
                        )
                    )
                }
            </article>
        </main>
    </>
  )
}

export default App
