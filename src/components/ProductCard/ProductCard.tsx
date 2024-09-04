import { useDispatch } from 'react-redux';
import styles from './ProductCard.module.css'
import { ProductCardProps } from './ProductCard.props';
import { Link } from 'react-router-dom';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

function ProductCard(props: ProductCardProps) {
    const dispatch = useDispatch<AppDispatch>();

    const add = (e: MouseEvent) => {
        e.preventDefault();
        dispatch(cartActions.add(props.id))
    };

    return (
        <Link to={`/product/${props.id}`} className={styles['link']}>
        <div className={styles['card']}>
            <div className={styles['head']} style={{backgroundImage: `url('${props.image}')`}}>
                <div className={styles['price']}>
                    {props.price}&nbsp;
                    <span className={styles['currency']}>₽</span>
                </div>
                <button className={styles['add-to-cart']} onClick={add}>
                    <img src='/addToCart.svg' alt='Добавить в корзину'/>
                </button>
                <div className={styles['rating']}>
                    {props.rating}&nbsp;
                    <img src='/star.svg' alt='Звездочка'/>
                </div>
            </div>
            <div className={styles['footer']}>
                <div className={styles['title']}>{props.title}</div>
                <div className={styles['description']}>{props.description}</div>
            </div>
        </div>
        </Link>
      

    );
  }
  
  export default ProductCard;