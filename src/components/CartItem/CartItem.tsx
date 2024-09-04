import { useDispatch } from 'react-redux';
import styles from './CartItem.module.css'
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import { CartItemProps } from './CartItem.props';

function CartItem(props: CartItemProps) {
    const dispatch = useDispatch<AppDispatch>();

    const increase = () => {
        dispatch(cartActions.add(props.id))
    };

    const decrease = () => {
    };

    const remove = () => {
    };

    return (
        <div className={styles['item']}>
                <div className={styles['image']} style={{backgroundImage: `url('${props.image}')`}}></div>
                <div className={styles['description']}>
                    <div className={styles['name']}>{props.name}</div>
                    <div className={styles['currency']}>{props.price}&nbsp;₽</div>
                </div>
                <div className={styles['actions']}>
                    <button className={styles['button']} onClick={decrease}>
                        <img src='/.svg' alt='Удалить из корзины'/>
                    </button>
                    <div>{props.count}</div>
                    <button className={styles['button']} onClick={increase}>
                        <img src='/addToCart.svg' alt='Добавить в корзину'/>
                    </button>
                    <button className={styles['remove']} onClick={remove}>
                        <img src='/addToCart.svg' alt='Удалить все'/>
                    </button>

                </div>
                
                <div className={styles['rating']}>
                    {props.rating}&nbsp;
                    <img src='/star.svg' alt='Звездочка'/>
                </div>
        </div>      

    );
  }
  
  export default CartItem;