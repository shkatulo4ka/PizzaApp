import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Cart } from "./pages/Cart/Cart"
import { Error } from "./pages/Error/Error"
import { Layout } from './Layout/Menu/Layout.tsx'
import { Product } from './pages/Product/Product.tsx';
import { PREFIX } from './helpers/API.ts';
import axios from 'axios';
import { defer } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<>Загрузка...</>}><Menu /></Suspense>
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/product/:id',
        element: <Product />,
        errorElement: <>Ошибка</>,
        loader: async ({params}) => {
            return defer({
              data: axios.get(`${PREFIX}/products/${params.id}`).then(data => data)
            });

            // const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
            // return data;
        }
      }
    ]
  },
  {
    path: '*',
    element: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
