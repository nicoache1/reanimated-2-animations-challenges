export const calculateIconTranslationValue = (value: number) => {
  // eslint-disable-next-line prettier/prettier
  "worklet";
  if (value === 0) {
    return value
  }
  return value > 0 ? value - 10 : value + 10
}
