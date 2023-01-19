const delay = (callback: () => void, ms: number): Promise<void> => {
  return new Promise(resolve => {
     setTimeout(() => {
      resolve(callback())
    },ms)
  })
}

export {delay}