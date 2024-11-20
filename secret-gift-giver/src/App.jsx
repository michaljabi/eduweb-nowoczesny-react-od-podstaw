import {Header} from "./components/Header.jsx";

function App() {

  const appTitle = 'Secret Gift Giver';

  const showAlert = (message) => {
        alert(message)
  }

  return (
    <>
        <Header title={appTitle} subTitle="Exchange gifts with your colleagues" onAlert={showAlert} />
    </>
  )
}

export default App
