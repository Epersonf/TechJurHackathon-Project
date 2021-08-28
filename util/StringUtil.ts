export function replaceAll(param: string, value: string, newValue: string): string {
  return param.split(value).join(newValue);
}