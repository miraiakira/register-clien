import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
  createBrowserRouter,
  Link,
  Outlet,
} from 'react-router-dom';
import { Register } from './register/Register';
import { Login } from './login/Login';
import { UpdatePassword } from './update_password/UpdatePassword';
import { ErrorPage } from './error/ErrorPage';

const routes = [
  {
    path: '/',
    element: <div>index</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'update_password',
    element: <UpdatePassword />,
  },
];
const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<RouterProvider router={router} />);
