export const parseDate = (date: Date | undefined | string ,options:Intl.DateTimeFormatOptions = {}) => {
    if(!date) return ''
    const formatter = new Intl.DateTimeFormat('ru', { day: '2-digit', month: '2-digit', year: 'numeric', ...options})
    const dateFormat = formatter.format(new Date(date)).replace(/(\d{2})\.(\d{2})\.(\d{4}), (\d{2}:\d{2})/, '$1-$2-$3 $4')
    return dateFormat
  }
  