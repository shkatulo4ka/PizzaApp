import Heading from "../../components/Heading/Heading";
import Search from "../../components/Search/Search";
import styles from './Menu.module.css'
import { Product } from "../../Interfaces/product.interface";
import { PREFIX } from "../../helpers/API";
import { ChangeEvent, useEffect, useState } from "react";
import axios, { AxiosError } from 'axios';
import { MenuList } from "./MenuList/MenuList";

export function Menu() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined> ();
    const [filter, setFilter] = useState<string>();

    useEffect(() => {
        getMenu(filter);
    }, [filter]);

    const getMenu = async (name?: string) => {
        try {
            setIsLoading(true);
            const {data} = await axios.get<Product[]>(`${PREFIX}/products`, {
                params: {
                    name
                }
            });
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

    const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    }

    return <>
        <div className={styles['head']}>
           <Heading>Menu</Heading>
            <Search placeholder="Введите блюдо или состав" onChange={updateFilter}/>     
        </div>
        <div>
            {error && <>{error}</>}
            {!isLoading && products.length > 0 && <MenuList products={products}/>}
            {isLoading && <>Загрузка...</>}
            {!isLoading && products.length === 0 && <>Не найдено блюд по запросу</>}
        </div>    
    </>
}

export default Menu
