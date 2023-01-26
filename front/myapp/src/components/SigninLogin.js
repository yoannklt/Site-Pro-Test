import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import TestDeStyleDe from './TestDeStyleDe';

function SigninLogin() {
  return (
    <>
      <OverlayTrigger
        trigger="click"
        placement='left'
        overlay={
          <Popover id={`popover-positioned-left`} className='popUpLog'> 
            <Popover.Body>
              <TestDeStyleDe />
            </Popover.Body>
          </Popover>
        }
      >
        <div className='btnform'>
          <a role="button" tabindex="0" href="#" className="navbtn"><strong>Se connecter</strong></a>
        </div>
      </OverlayTrigger>
    </>
  );
}

export default SigninLogin;