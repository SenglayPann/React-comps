import Link from './components/Link';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import './style/output.css';
function App() {
  
  return ( 
    <div>
      <Link to="/accordion">got to accordion</Link>
      <Link to="/dropdown">got to accordion</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <ButtonPage />
        </Route>
      </div>
    </div>
    
  )
}

export default App
