import { Link } from 'react-router-dom'
import { useCart } from './hooks/useCart'

function Header({ onClickCart }) {
  const { totalPrice } = useCart()

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/react-sneakers/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li onClick={onClickCart} className="cu-p mr-30 d-flex">
          <img width={18} height={18} src="img/cart.svg" />
          <span>{totalPrice} грн.</span>
        </li>
        <li className="d-flex">
          <Link to="/react-sneakers/favorites">
            <img
              className="cu-p"
              width={18}
              height={18}
              src="img/heart-icon.svg"
              alt="Favorites"
            />
          </Link>
        </li>
        <li className="d-flex">
          <Link to="/react-sneakers/orders">
            <img
              className="cu-p"
              width={18}
              height={18}
              src="img/user.svg"
              alt="User"
            />
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
