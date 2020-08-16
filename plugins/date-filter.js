import Vue from 'vue'

Vue.filter('dateFormat', (input,
  format = 'YYYY-MM-DD HH:mm:ss',
  monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ]) => {
  if (typeof input !== "object") input = new Date(input)
  const padZeros = (input, maxLength) => `0000${input}`.slice(-maxLength)
  const year = input.getFullYear()
  const month = input.getMonth() + 1
  const date = input.getDate()
  const hours24 = input.getHours()
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12
  const minutes = input.getMinutes()
  const seconds = input.getSeconds()
  return format
    .replace('YYYY', '%01%')
    .replace('YY', '%02%')
    .replace('MMMM', '%03%')
    .replace('MMM', '%04%')
    .replace('MM', '%05%')
    .replace('M', '%06%')
    .replace('DD', '%07%')
    .replace('D', '%08%')
    .replace('HH', '%09%')
    .replace('H', '%10%')
    .replace('hh', '%11%')
    .replace('h', '%12%')
    .replace('mm', '%13%')
    .replace('m', '%14%')
    .replace('ss', '%15%')
    .replace('s', '%16%')
    .replace('A', '%17%')
    .replace('a', '%18%')
    .replace('%01%', padZeros(year, 4))
    .replace('%02%', padZeros(year % 100, 2))
    .replace('%03%', monthNames[month - 1])
    .replace('%04%', monthNames[month - 1].substr(0, 3))
    .replace('%05%', padZeros(month, 2))
    .replace('%06%', `${month}`)
    .replace('%07%', padZeros(date, 2))
    .replace('%08%', `${date}`)
    .replace('%09%', padZeros(hours24, 2))
    .replace('%10%', `${hours24}`)
    .replace('%11%', padZeros(hours12, 2))
    .replace('%12%', `${hours12}`)
    .replace('%13%', padZeros(minutes, 2))
    .replace('%14%', `${minutes}`)
    .replace('%15%', padZeros(seconds, 2))
    .replace('%16%', `${seconds}`)
    .replace('%17%', hours24 < 12 ? 'AM' : 'PM')
    .replace('%18%', hours24 < 12 ? 'am' : 'pm')
})
