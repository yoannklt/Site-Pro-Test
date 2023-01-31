import { useContext } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import TestDeStyleDe from './FormConnexion';

function SigninLogin() {
  const {user, setUser} = useContext(UserContext);

  return (
    <>
      <OverlayTrigger
        trigger="click"
        placement='left'
        rootClose='true'
        overlay={
          <Popover id={`popover-positioned-left`} className='popUpLog'> 
            <Popover.Body>
              <TestDeStyleDe/>
            </Popover.Body>
          </Popover>
        }
      >
        <div className='btnform'>
          {!user ? (
            <a role="button" tabIndex="0" href="#" className="navbtn navbarrr"><strong>Se connecter</strong></a>
          ):(
            <Link to='../pages/MyAccount' className="navbtn navbarrr"><strong>Mon Compte</strong></Link>
          )}
          
        </div>
      </OverlayTrigger>
    </>
  );
}

export default SigninLogin;