import Route from './components/Route';
import SideBar from './components/SideBar';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import DropDownPage from './pages/DropDownPage';
import ModalPage from './pages/ModalPage';
import './style/output.css';
function App() {
  
  return ( 
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <SideBar />
      <div>
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
      </div>
    </div>
  )
}

export default App
