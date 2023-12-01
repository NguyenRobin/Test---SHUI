import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './views/AppLayout';
import MessageBoard from './views/MessageBoard';
import NewMessage from './views/NewMessage';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <MessageBoard /> },
      { path: '/new-message', element: <NewMessage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
