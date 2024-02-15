export function MoneyMask(value: number) {
  return value.toFixed(2).replace('.', ',')
}
