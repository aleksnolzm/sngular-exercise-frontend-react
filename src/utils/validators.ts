export const regexNumber = /^[0-9]+$/;

export function validateNumber(number: string) {
  const numberExp = regexNumber;
  return numberExp.test(number);
}
