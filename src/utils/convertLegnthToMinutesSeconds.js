export default function (timeValue) {
  const minutes = Math.floor(timeValue / 60);
  const seconds = timeValue % minutes;

  return {
    minutes,
    seconds
  };
}