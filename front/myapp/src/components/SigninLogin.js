import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import TestDeStyle from './TestDeStyle';

function SigninLogin() {
  return (
    <>
        <OverlayTrigger
          trigger="click"
          placement='left'
          overlay={
            <Popover id={`popover-positioned-left`} className='popUpLog'>
              <Popover.Body>
                <TestDeStyle />
              </Popover.Body>
            </Popover>
          }
        >
          <a role="button" tabindex="0" href="#" className="navbtn"><strong>Se connecter</strong></a>
        </OverlayTrigger>
    </>
  );
}

export default SigninLogin;