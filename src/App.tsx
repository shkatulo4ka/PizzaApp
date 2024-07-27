import { Link, RouterProvider, createBrowserRouter } from "react-router-dom"
import Button from "./components/Button/Button"
import Input from "./components/Input/Input"

function App() {


  return (
    <>
      <Button >Button</Button>
      <Button appearence="big">Кнопка</Button>
      <Input isValid={true} placeholder="Email"/>

    </>
  )
}

export default App
