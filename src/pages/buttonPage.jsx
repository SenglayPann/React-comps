import Button from '../components/Button';
import { GoDatabase } from "react-icons/go";
import '../style/output.css';
function ButtonPage() {
  const handleClick = () => {
    console.log('clicked')
  }

  const handleHover = () => {
    console.log('hovering')
  }

  return (
    <div>
      <Button primary outline onClick={ handleClick } onMouseOver={ handleHover}><GoDatabase />Register</Button>
      <Button secondary outline rounded >Register</Button>
      <Button success rounded >Register</Button>
      <Button warning outline rounded>Register</Button>
    </div>
  )
}

export default ButtonPage
