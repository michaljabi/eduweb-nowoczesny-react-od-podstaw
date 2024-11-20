import { Header } from "./components/Header.jsx";
import { PeoplePage } from "./pages/PeoplePage.jsx";
import { Notification } from "./components/Notification.jsx";
import { Navbar } from "./components/Navbar.jsx";
import {useState} from "react";

function App() {

  const appTitle = 'Secret Gift Giver';

  const showAlert = (message) => {
      alert(message)
  }

  return (
    <>
      <Header title={appTitle} subTitle="Exchange gifts with your colleagues" onAlert={showAlert}/>

        <main className="container mt-4 p-4">
            <Notification>
                Select people, shuffle, make the exchange party
            </Notification>
            <Navbar />
            <PeoplePage/>
        </main>
        {/*<SampleButton />*/}
    </>
  )
}

// eslint-disable-next-line no-unused-vars
function SampleButton() {
    const [count, setCount] = useState(0)

    return <button className="button" onClick={() => {
        setCount((c) => c + 1)
    }}>{count}</button>
}

export default App
