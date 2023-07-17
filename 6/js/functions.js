const dayStart = '9:00';
const dayEnd = '18:00';
const meetingStart = '15:30';
const meetingTime = 60;

function timeParcing (a) {
  const parcing = a.split(':').map(Number);
  const [hours, minutes] = parcing;
  const minutesInHour = 60;
  return hours * minutesInHour + minutes;
}

function perfectTiming (dayStartTime, dayEndTime, meetingStartTime, meetingLength) {
  const dayEndInMinutes = timeParcing(dayEndTime);
  const meetingStartInMinutes = timeParcing(meetingStartTime);
  const finishTime = meetingStartInMinutes + meetingLength;
  switch (finishTime) {
    case finishTime > dayEndInMinutes:
      return(false);
    case finishTime <= dayEndInMinutes:
      return(true);
  }
}

perfectTiming (dayStart, dayEnd, meetingStart, meetingTime);
