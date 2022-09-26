

export const now = new Date()

const dateOptions: Intl.DateTimeFormatOptions = {
  day: 'numeric', // 2-digit
  month: 'long', // целое слово , short сокращение 
  year: 'numeric',  // 2-digit - 22г.    numeric- 2022г.
  // era: 'long', //narrow-н.э, long-от Рождества Христова, short-н.э 
  weekday: 'short', //narrow-C,long-суббота,short-сб
  // timeZoneName: 'short', // GMT+3
  hour: 'numeric',
  // hour12: true, 
  minute: 'numeric',
  second: 'numeric',
}

export const RUDate = new Intl.DateTimeFormat('ru', dateOptions)
 const USDate = new Intl.DateTimeFormat('en-US', dateOptions)
 const UKDate = new Intl.DateTimeFormat('en-UK', dateOptions)

export const ruDate =  RUDate.format(now)
export const usDate =  USDate.format(now)
export const ukDate =  UKDate.format(now)