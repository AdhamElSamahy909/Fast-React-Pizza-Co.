// React-Router v6.4 allows us to use some powerful mechanisms inside it for fetching data into pages and for
// submitting data using forms

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import { action as updateLoaderAction } from './features/order/UpdateOrder';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

// The other way of defining routes is more traditional
// This is necessary in React-Router6.4 in order to enable data fetching or data loading
// The errors that will happen in the nested routes will bubbel up in the parent route
const router = createBrowserRouter([
  {
    // Since it doesn't have a path, it is called in React-Router a layout route unless it is handled
    // in the route itself
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        // It would work just fine even though the form that we want to connect with this action is not really
        // on this page but on a child component of this page
        path: '/order/:id',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateLoaderAction,
      },
    ],
  },
]);

// The idea behind a loader is that in our code, we create a fn that fetches some data from an API. We then
// provide that loader fn to one of our routes , and that route will then fetch that data as soon as the
// application goes to that route. In the end, once the data has arrived, it will be provided to the page
// component itself using a custom hook

function App() {
  return <RouterProvider router={router} />;
}

export default App;
