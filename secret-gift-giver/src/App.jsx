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
            <PeoplePage />
        </main>
    </>
  )
}

export default App
