import React, { useRef } from 'react'
import { stores } from '../../store'
import star from '../../assets/react.svg'
import './index.scss'
import { observer } from 'mobx-react'

const Cart = () => {
  const { HomeStore } = stores
  const { setTransitionStyle, transitionStyle } = HomeStore

  const refList = [] as HTMLDivElement[]
  const destinationDom = useRef<HTMLDivElement>(null)
  const canGather = useRef(true)

  const getRef = (dom: HTMLDivElement | null) => {
    dom && refList.push(dom)
  }

  const gather = (index: number) => {
    if (!canGather.current) return

    canGather.current = false

    const target = refList[index].getBoundingClientRect()
    const destination = destinationDom.current!.getBoundingClientRect()
    setTransitionStyle({
      display: 'block',
      top: target.top,
      left: target.left,
      transform: 'scale(1)',
      transition: 'none'
    })

    setTimeout(() => {
      setTransitionStyle({
        display: 'block',
        top: destination.top,
        left: destination.left,
        transform: 'scale(0.5)',
        transition: 'all 1s linear'
      })
    }, 0)

    setTimeout(() => {
      setTransitionStyle({
        display: 'none',
        top: 0,
        left: 0,
        transform: 'scale(1)',
        transition: 'none'
      })
      canGather.current = true
    }, 1000) // 定时器时间要跟动画时间一致才能保证动画完整的执行
  }

  return (
    <div className='cart'>
      <div ref={destinationDom} className='destination'></div>目的地
      <div className='box'></div>
      <div className='week'>
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
          return (
            <div
              ref={getRef}
              className={`day day${index + 1}`}
              key={item}
              onClick={() => gather(index)}
            >
              <div className='day-num'>第{item}天</div>
              <div className='top'>
                <img src={star} alt='star' className='img' />
              </div>
              <div className='bottom'>5积分</div>
            </div>
          )
        })}
      </div>
      <div className='transition-div' style={{ ...transitionStyle }}></div>
    </div>
  )
}

export default observer(Cart)
