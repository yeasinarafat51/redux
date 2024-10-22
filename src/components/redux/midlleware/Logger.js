const logger = store => next => action => {
    console.log('dispatching', action)
     next(action)
    const result = store.getState()
    
     console.log(result)
  }

  export default logger;