import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './components/Home.jsx';
import Vm from './components/vms/Vm.jsx';
import Node from './components/nodes/Node.jsx';
import Storage from './components/storages/Storage.jsx';
import Network from './components/networks/Network.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App title="Home" subtitle="Dashboard"><Home /></App>,
  }, {
    path: "/nodes",
    element: <App title="Nodes" subtitle="Node Detail"><Node /></App>,
  }, {
    path: "/vms",
    element: <App title="Virtual Machines" subtitle="VM Detail"><Vm /></App>,
  }, {
    path: "/storages",
    element: <App title="Storage" subtitle="Storage Detail"><Storage /></App>,
  }, {
    path: "/networks",
    element: <App title="Network" subtitle="Network Detail"><Network /></App>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
