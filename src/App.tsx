import { Route, Routes } from "react-router-dom"
import Button from "./components/Button/Button"
import Input from "./components/Input/Input"
import { Menu } from "./pages/Menu/Menu"
import { Cart } from "./pages/Cart/Cart"
import { Error } from "./pages/Error/Error"

function App() {


  return (
    <>
      <Button >Button</Button>
      <Button appearence="big">Кнопка</Button>
      <Input isValid={true} placeholder="Email"/>
      <div>
        <a href="/">Меню</a>
        <a href="/cart">Корзина</a>
      </div>
      <Routes >
        <Route path="/" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />}
      </Routes>
    </>
  )
}

export default App
