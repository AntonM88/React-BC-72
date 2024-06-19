import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { Todos, Points, Props, Photos } from "tabs";
import { ToggleTheme } from "./components";

function App() {
  return (
    <>
      <ToggleTheme/>
      <Tabs>
        <TabList>
          <Tab>Photos</Tab>
          <Tab>Todos</Tab>
          <Tab>Points</Tab>
          <Tab>Props</Tab>
        </TabList>

        <TabPanel>
          <Photos />
        </TabPanel>
        <TabPanel>
          <Todos />
        </TabPanel>
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
