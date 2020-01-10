const COLORS = [
  "#e6194b",
  "#3cb44b",
  "#ffe119",
  "#4363d8",
  "#f58231",
  "#911eb4",
  "#46f0f0",
  "#f032e6",
  "#bcf60c",
  "#fabebe",
  "#008080",
  "#e6beff",
  "#9a6324",
  "#fffac8",
  "#aaffc3",
  "#808000",
  "#ffd8b1",
  "#808080",
  "#ffffff",
  "#aaffb0"
];

export const randomColor = () => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};

export const convertSeconds = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds - (hours * 3600)) / 60);
  const secs = seconds - (hours * 3600) - (mins * 60);
  return `${hours < 10 ? "0" + String(hours) : hours}:${
    mins < 10 ? +"0" + String(mins) : mins
  }:${secs < 10 ? +"0" + String(secs) : secs}`;
};

export const randomId = () => {
  return (
    "_" +
    Math.random()
      .toString(36)
      .slice(2,10)
  );
};