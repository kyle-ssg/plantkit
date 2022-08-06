const Format = {
  enumeration: {
    get(value: string | null | undefined): string {
      // MY_CONSTANT > My constant
      if (!value) {
        return ''
      }
      return Format.camelCase(value.replace(/_/g, ' '))
    },
    set(value: string): string {
      // My Constant > MY_CONSTANT
      return value ? value.replace(/ /g, '_').toUpperCase() : ''
    },
  },

  camelCase(val: string | null | undefined): string {
    // hello world > Hello world
    return val ? val.charAt(0).toUpperCase() + val.slice(1).toLowerCase() : ''
  },

  cssImage(value: string | null | undefined): string {
    // lol.jpg  > url('lol.jpg')
    return value ? `url("${value}")` : 'none'
  },

  ordinal(value: number | null | undefined): string {
    if (!value) {
      return '0'
    }
    const s = ['th', 'st', 'nd', 'rd']
    const v = value % 100
    return value ? value + (s[(v - 20) % 10] || s[v] || s[0]) : ''
  },

  prefixQuantity(value: number, singular: any, multiple: any): any {
    return value === 1 ? singular : multiple
  },

  truncateText(
    text: string | null | undefined,
    numberOfChars: number,
  ): string | null | undefined {
    // lol,1 > l...
    if (text) {
      if (text.length > numberOfChars) {
        return `${text.substring(0, numberOfChars)}...`
      }
    }
    return text
  },

  bytesToSize(bytes: number) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes == 0) return '0 Byte'
    // @ts-ignore
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
    // @ts-ignore
    return `${Math.round(bytes / Math.pow(1024, i), 2)} ${sizes[i]}`
  },
}

export default Format
