export function humanReadableSize(sizeBytes) {
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  if (sizeBytes === 0) return "0B";
  const i = Math.floor(Math.log(sizeBytes) / Math.log(1024));
  const size = (sizeBytes / Math.pow(1024, i)).toFixed(2);
  return `${size} ${units[i]}`;
}

export function formatDateTime(dateTimeStr) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(dateTimeStr);
  const pmam = date.getHours() > 12 ? "pm" : "am";
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  return `${hours}:${minutes}${pmam}, ${date.getDate()} ${months[date.getMonth()]}`;
}
