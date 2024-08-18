import Route from './components/Route';
import SideBar from './components/SideBar';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import DropDownPage from './pages/DropDownPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import './style/output.css';
function App() {
  
  return ( 
    <div className='container flex mt-4'>
      <SideBar />
      <div className='grow-[1]'>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropDownPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  )
}

export default App
