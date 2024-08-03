import Heading from "../../components/Heading/Heading";
import Search from "../../components/Search/Search";
import styles from './Menu.module.css'
import { Product } from "../../Interfaces/product.interface";
import { PREFIX } from "../../helpers/API";
import { useEffect, useState } from "react";
import axios, { AxiosError } from 'axios';
import { MenuList } from "./MenuList/MenuList";

export function Menu() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined> ();

    const getMenu = async () => {
        try {
            setIsLoading(true);
            const {data} = await axios.get<Product[]>(`${PREFIX}/products`);
            setProducts(data);
            setIsLoading(false);
        } catch(e) {
            console.error(e);
            if (e instanceof AxiosError){
                setError(e.message);
            }
            setIsLoading(false);
            return;
        }
    }

    useEffect(() => {
        getMenu();
    }, [])

    return <>
        <div className={styles['head']}>
           <Heading>Menu</Heading>
            <Search placeholder="Введите блюдо или состав"/>     
        </div>
        <div>
            {error && <>{error}</>}
            {!isLoading && <MenuList products={products}/>}
            {isLoading && <>Загрузка...</>}
 
        </div>    
    </>
}

export default Menu
