import React, { useContext } from "react";

import { fetchChannels, fetchEpg } from "../helpers/common";

import { useEpg } from "planby";

// Import theme
import { theme } from "../helpers/theme";
import { StateContext } from "../../../context/Context";

export function useCalendar() {
  const [channels, setChannels] = React.useState([]);
  const [epg, setEpg] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [state, dispatch] = useContext(StateContext);

  const channelsData = React.useMemo(() => channels, [channels]);
  const epgData = React.useMemo(() => epg, [epg]);

  const { getEpgProps, getLayoutProps } = useEpg({
    channels: channelsData,
    epg: epgData,
    dayWidth: 2400,
    sidebarWidth: 100,
    itemHeight: 100,
    isSidebar: true,
    isTimeline: true,
    startDate: "2022-10-18T08:00:00",
    endDate: "2022-10-18T24:00:00",
    isBaseTimeFormat: true,
    theme,
  });

  const handleFetchResources = React.useCallback(async () => {
    setIsLoading(true);
    const epg = state.groups[0].plans;
    const channels = await fetchChannels();
    setEpg(epg);
    setChannels(channels);
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    handleFetchResources();
  }, [handleFetchResources]);

  return { getEpgProps, getLayoutProps, isLoading };
}