import { useState } from 'react'
import axios from 'axios'

import Info from '../Info'
import { useCart } from '../hooks/useCart'

import styles from './Drawer.module.scss'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({ onClickCloseBtn, items, removeCartItem, opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart()
  const [isOrderCompleted, setIsOrderCompleted] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handlerAcceptOrder = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        'https://6374c21648dfab73a4e7e504.mockapi.io/orders',
        { items: cartItems }
      )
      setOrderId(data.id)
      setIsOrderCompleted(true)
      setCartItems([])
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i]
        await axios.delete(
          'https://63a258b2a543280f776d8377.mockapi.io/cart/' + item.id
        )
        await delay(1000)
      }
      setIsLoading(false)
    } catch (error) {
      alert(`Не удалось создать заказ 😥`)
    }
  }

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.bgShadow} onClick={onClickCloseBtn}></div>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Корзина{' '}
          <img
            onClick={onClickCloseBtn}
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className={styles.items}>
              {items.map((obj, index) => {
                return (
                  <div
                    key={index}
                    className="cartItem d-flex align-center mb-20"
                  >
                    <div
                      style={{ backgroundImage: `url(${obj.imageUrl})` }}
                      className="cartItemImg"
                    ></div>

                    <div className="mr-20 flex">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price} грн.</b>
                    </div>
                    <img
                      onClick={() => removeCartItem(obj.id)}
                      className="removeBtn"
                      src="/img/btn-remove.svg"
                      alt="Remove"
                    />
                  </div>
                )
              })}
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} грн.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5} грн.</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={handlerAcceptOrder}
                className="greenButton"
              >
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderCompleted ? 'Заказ оформлен!' : ''}
            description={
              isOrderCompleted
                ? `Ваш заказ №${orderId} скоро будет передан курьерской доставке.`
                : ''
            }
            image={
              isOrderCompleted
                ? '/img/complete-order.jpg'
                : '/img/empty-cart.jpg'
            }
            onClickCloseBtn={onClickCloseBtn}
          />
        )}
      </div>
    </div>
  )
}

export default Drawer
