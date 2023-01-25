import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Singin from './Singin';
import Singup from './Singup';



function TestDeStyle() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-1"
      fill
    >
      <Tab eventKey="Singup" title="Inscription">
        <Singup />
      </Tab>
      <Tab eventKey="Singin" title="Connection">
        <Singin />
      </Tab>
    </Tabs>
  );
}

export default TestDeStyle;