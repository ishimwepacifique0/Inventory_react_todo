import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import Customer from './Page/Customer';
import Report from './Page/Report';
import Settings from './Page/Settings';
import Items from './Page/Items';
import Invoice from './Page/Invoice';
import { FaUserAlt } from 'react-icons/fa';
import Sidebar from './components/SideBar';
import Example from './Page/Modal/iItemModal';
import NewInvoice from './Page/Modal/NewInvoice';
import Login from './Page/Modal/login';

function App() {
  return (
    <BrowserRouter>
    <Sidebar>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/invoice' element={<Invoice/>}/>
          <Route path='/customers' element={<Customer/>}/>
          <Route path='/reports' element={<Report/>}/>
          <Route path='/items' element={<Items/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/newitem' element={<Example />}/>
          <Route path='/newinvoice' element={<NewInvoice />}/>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
