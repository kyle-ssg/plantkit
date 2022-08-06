import pluralize from 'pluralize'
/**
 * Returns the plural of an English word.
 *
 * @export
 * @param {string} word
 * @param {number} [amount]
 * @returns {string}
 */
export function plural(word: string, amount?: number): string {
 return pluralize(word,amount)
}

export function singular(word: string): string {
 return pluralize.singular(word)
}
