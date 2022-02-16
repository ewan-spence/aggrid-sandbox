import React, { useState } from 'react';

import { Tab, Tabs } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import BasicGridPage from './Pages/BasicGridPage';

const App = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Tabs
      activeKey={activeTab}
      onSelect={setActiveTab}
    >
      <Tab eventKey={1} title="Basic Grid">
        <BasicGridPage />
      </Tab>
    </Tabs>
  );
};

export default App;