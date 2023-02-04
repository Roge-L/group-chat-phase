import React from 'react';
import {
  TimelineWrapper,
  TimelineBox,
  TimelineTime,
  TimelineDivider,
  TimelineDividers,
  useTimeline
} from "planby";

export default function Timeline({
  isBaseTimeFormat,
  isSidebar,
  dayWidth,
  hourWidth,
  numberOfHoursInDay,
  offsetStartHoursRange,
  sidebarWidth
}) {
  const { time, dividers, formatTime } = useTimeline(
    numberOfHoursInDay,
    isBaseTimeFormat
  );

  const renderTime = (index) => (
    <TimelineBox key={index} width={hourWidth}>
      <TimelineTime>
        {formatTime(index + offsetStartHoursRange).toLowerCase()}
      </TimelineTime>
      <TimelineDividers>{renderDividers()}</TimelineDividers>
    </TimelineBox>
  );

  const renderDividers = () =>
    dividers.map((_, index) => (
      <TimelineDivider key={index} width={hourWidth} />
    ));

  return (
    <TimelineWrapper
      dayWidth={dayWidth}
      sidebarWidth={sidebarWidth}
      isSidebar={isSidebar}
    >
      {time.map((_, index) => renderTime(index))}
    </TimelineWrapper>
  );
}
  
  