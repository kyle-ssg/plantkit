import pluralize from 'pluralize'

export function plural(word: string, amount?: number): string {
  return pluralize(word, amount)
}
