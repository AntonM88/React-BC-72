import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { Points, Props } from "tabs";

function App() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Points</Tab>
          <Tab>Props</Tab>
        </TabList>

        <TabPanel>
          <Points />
        </TabPanel>
        <TabPanel>
          <Props />
        </TabPanel>
      </Tabs>
    </>
  );
}

export default App;
