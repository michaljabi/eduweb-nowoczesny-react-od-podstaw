import { Header } from "./components/Header.jsx";
import { PeoplePage } from "./pages/PeoplePage.jsx";

function App() {

  const appTitle = 'Secret Gift Giver';

  const showAlert = (message) => {
      alert(message)
  }

  return (
    <>
      <Header title={appTitle} subTitle="Exchange gifts with your colleagues" onAlert={showAlert}/>

        <main className="container mt-4 p-4">
            <div className="notification">
                Explain how app works...
            </div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a role="button" className="navbar-burger is-active" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu is-active">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/" >
                            People
                        </a>
                        <a className="navbar-item" href="/exchange">
                            Exchange
                        </a>
                    </div>
                </div>
            </nav>
            <PeoplePage/>
        </main>
    </>
  )
}

export default App
