import { makeAutoObservable } from 'mobx'

class HomeStore {
  constructor() {
    makeAutoObservable(this)
  }

  transitionStyle = {
    display: 'none',
    top: 0,
    left: 0,
    transform: 'scale(0)',
    transition: 'none'
  }

  setTransitionStyle = (newTransitionStyle: any) => {
    this.transitionStyle = newTransitionStyle
  }
}

export default new HomeStore()
