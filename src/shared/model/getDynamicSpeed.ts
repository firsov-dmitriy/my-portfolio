export const getDynamicSpeed = (baseSpeed: number) => {
  return baseSpeed * (0.5 + Math.random()); // Динамическая скорость от 50% до 150% от базовой
};
