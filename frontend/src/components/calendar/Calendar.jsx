import React from "react";
import "../../styles/Calendar.css";
import { Epg, Layout } from "planby";

// Import hooks
import { useCalendar } from "./hooks/useCalendar";

// Import components
import Timeline from './components/Timeline';
import ChannelItem from './components/ChannelItem';
import ProgramItem from './components/ProgramItem';

function App() {
  const { isLoading, getEpgProps, getLayoutProps } = useCalendar();

  return (
    <div>
      <div style={{ height: "80vh", width: "100%" }}>
        <Epg isLoading={isLoading} {...getEpgProps()}>
          <Layout
            {...getLayoutProps()}
            renderTimeline={(props) => <Timeline {...props} />}
            renderProgram={({ program, ...rest }) => (
              <ProgramItem key={program.data.id} program={program} {...rest} />
            )}
            renderChannel={({ channel }) => (
              <ChannelItem key={channel.uuid} channel={channel} />
            )}
          />
        </Epg>
      </div>
    </div>
  );
}

export default App;
