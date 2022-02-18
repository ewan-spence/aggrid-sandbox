import React, { useState } from 'react';

import { Tab, Tabs } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import BasicGridPage from './Pages/BasicGridPage';
import EditableGridPage from './Pages/EditableGridPage';

const App = () => {
  const [activeTab, setActiveTab] = useState(2);

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
    </Tabs>
  );
};

export default App;