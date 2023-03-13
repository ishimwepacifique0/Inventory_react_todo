import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import Customer from './Page/Customer';
import Report from './Page/Report';
import Items from './Page/Items';
import Invoice from './Page/Invoice';
import Sidebar from './components/SideBar';
import Example from './Page/Modal/iItemModal';
import NewInvoice from './Page/Modal/NewInvoice';
import Login from './Page/Modal/login';
import SignUp from './Page/Modal/registerUser';
import Basic from './Page/Modal/Basic';
import BasicDocument from './Page/Modal/editpage/invoinceEdit';
import Detailcustomer from './Page/detailCustomer';
import ProfilePage from './Page/Settings'
import Applogin from './Page/Modal/editpage/login'
import AppTable from './Page/Modal/editpage/table'
import EditProfile from './Page/Modal/editpage/editProfile';

function App() {
  return (
    <BrowserRouter>
    {/* <Sidebar> */}
    <Basic>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/invoice' element={<Invoice/>}/>
          <Route path='/customers' element={<Customer/>}/>
          <Route path='/reports' element={<Report/>}/>
          <Route path='/items' element={<Items/>}/>
          <Route path='/settings' element={<ProfilePage/>}/>
          <Route path='/newitem' element={<Example />}/>
          <Route path='/newinvoice' element={<NewInvoice />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/print' element={<Basic/>} />
          <Route path='/printing/:id' element={<BasicDocument />} />
          <Route path='/detail' element={< Detailcustomer />} />
          <Route path='/login-user' element={<Applogin />} />
          <Route path='/table-user' element={<AppTable />} />
          <Route path = '/edit-user' element={<EditProfile></EditProfile>} />
        </Routes>
      </Basic>
      {/* </Sidebar> */}
    </BrowserRouter>
  );
}

export default App;
