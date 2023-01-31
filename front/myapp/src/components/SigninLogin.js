import { useContext } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import TestDeStyleDe from './FormConnexion';

function SigninLogin() {
  const { user, setUser } = useContext(UserContext);

  const logout = () => {
    console.log("skibidibap")
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
              <TestDeStyleDe />
            </Popover.Body>
          </Popover>
        }
      >
        <div className='btnform'>
          {!user ? (
            <>
              <a href="#" className="navbtn navbarrr"><strong>Se connecter</strong></a>
            </>
          ) : null}

        </div>
      </OverlayTrigger>
      {user ? (
        <>
          <a href='#' onClick={logout} className="navbtn navbarrr"><strong>Se déconnecter</strong></a>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <Link to='../pages/MyAccount' className="navbtn navbarrr"><strong>Mon Compte</strong></Link>
        </>
      ) : null
      }
    </>
  );
}

export default SigninLogin;