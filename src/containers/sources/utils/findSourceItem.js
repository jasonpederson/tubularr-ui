export default function (sources, selectedUuid) {
  return sources.find((source) => {
    return source.uuid === selectedUuid
  });
}