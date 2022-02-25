import React, { useState } from 'react';

import { Tab, Tabs } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import BasicGridPage from './Pages/BasicGridPage';
import EditableGridPage from './Pages/EditableGridPage';
import WP3GridPage from './Pages/WP3GridPage';

const App = () => {
  const [activeTab, setActiveTab] = useState(3);

  return (
    <Tabs
      activeKey={activeTab}
      onSelect={setActiveTab}
    >
      <Tab eventKey={1} title="Basic Grid">
        <BasicGridPage />
      </Tab>
      <Tab eventKey={2} title="Editable Grid">
        <EditableGridPage />
      </Tab>
      <Tab eventKey={3} title="WP3 Prototype Client Grid">
        <WP3GridPage />
      </Tab>
    </Tabs>
  );
};

export default App;