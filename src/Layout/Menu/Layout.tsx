import { Link, Outlet } from "react-router-dom";
import styles from './Layout.module.css';
import Button from "../../components/Button/Button";

export function Layout() {
    return <div className={styles['layout']}>
        <div className={styles['sidebar']}>
            <div className={styles['user']}>
                <img className={styles['avatar']} src="../public/avatar.svg" alt="Аватар" />
                <div className={styles['name']}>Антон Ларичев</div>
                <div className={styles['email']}>example@mail.ru</div>
            </div>
            <div className={styles['menu']}>
                <Link to="/" className={styles['link']}>
                    <img src="../public/menu-icon.svg" alt="Иконка меню"/>
                Меню</Link>
                <Link to="/cart" className={styles['link']}>
                    <img src="../public/cart-icon.svg" alt="Иконка корзины"/>
                Корзина</Link>
            </div>
            <Button className={styles['exit']}>
                    <img src="../public/close.svg" alt="Иконка закрыть"/>
                    Выход
            </Button>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
}