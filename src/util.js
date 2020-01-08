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
];

export const randomColor = () => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}