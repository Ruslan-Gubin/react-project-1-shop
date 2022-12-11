
const someDate = new Date('2020-10-08T19:46:00.000+5:30')
schedule.scheduleJob(someDate, () => {
  console.log('Job ran ', new Date().toString())
}) 
// выполнится в указанное время


const mJob = schedul.scheduleJob('*/2*****', () => {
  console.log('I ran')
  mJob.cancel()
})

// second, minets, hours, days функция выполнится через 2 с и сбросится