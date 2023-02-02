import { useContext } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { UserContext } from '../context/UserContext';
import FormConnexion from './FormConnexion';

function SigninLogin() {
  
  const { user, setUser } = useContext(UserContext);
  const logout = () => {
    sessionStorage.removeItem('token');
    setUser(null)
  }

  return (
    <>
      <OverlayTrigger
        trigger="click"
        placement='left'
        rootClose='true'
        overlay={
          <Popover id={`popover-positioned-left`} className='popUpLog'>
            <Popover.Body>
              <FormConnexion />
            </Popover.Body>
          </Popover>
        }
      >
        <div className='btnform'>
          <>
            <a href="#" className="navbtn navbarrr"><strong>{!user ?('Se connecter'):('Mon Compte')}</strong></a>
          </>
        </div>
      </OverlayTrigger>
    </>
  );
}

export default SigninLogin;