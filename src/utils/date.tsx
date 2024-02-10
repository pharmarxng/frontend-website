import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

// Extend dayjs with utc and timezone plugins
dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (dateString?: string) => {
  const formattedDate = dayjs(dateString)
    .utc() // Convert to UTC time
    .tz('Africa/Lagos') // Set the timezone to WAT (West Africa Time)
    .format('DD/MM/YYYY HH:mm');

  return formattedDate;
};
