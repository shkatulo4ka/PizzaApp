import styles from "./Search.module.css";
import cn from "classnames";
import { forwardRef } from "react";
import { SearchProps } from "./Search.props";

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input(
  { className, ...props },
  ref,
) {
  return (
    <div className={styles['input-wrapper']}>
      <input
        ref={ref}
        className={cn(className, cn(styles["input"]))} {...props}
      />
      <img className={styles['icon']} src='/search1.svg' alt='Иконка поиск' />
    </div>

  );
});

export default Search;