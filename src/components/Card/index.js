import { useState, useContext } from 'react'
import ContentLoader from 'react-content-loader'
import styles from './Card.module.scss'
import AppContext from '../../context'

function Card({
  onClickFavorite,
  isLoading,
  title,
  imageUrl,
  price,
  id,
  onClickAdd,
  favorited = false,
}) {
  const { handlerIsAdded } = useContext(AppContext)
  const [isFavorite, setIsFavorite] = useState(favorited)
  const itemsObj = { id, parentId: id, title, imageUrl, price }

  const handleSetIsAdded = () => {
    onClickAdd(itemsObj)
  }

  const handlerSetIsFavorite = () => {
    onClickFavorite(itemsObj)
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.card}>
      {/* <div className={styles.favorite}>
        <img
          onClick={() => handlerSetIsFavorite()}
          src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
          alt="Favorit Icon"
        />
      </div>

      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} грн.</b>
        </div>
        <img
          className={styles.plus}
          onClick={() => handleSetIsAdded()}
          src={`/img/${isAdded ? 'btn-checked' : 'btn-plus'}.svg`}
          alt="Plus"
        />
      </div> */}
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={200}
          viewBox="0 0 150 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="100" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="125" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="165" rx="5" ry="5" width="80" height="25" />
          <rect x="118" y="160" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            {onClickFavorite && (
              <img
                onClick={() => handlerSetIsFavorite()}
                src={
                  isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'
                }
                alt="Favorit Icon"
              />
            )}
          </div>

          <img width={133} height={112} src={imageUrl} alt="Sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} грн.</b>
            </div>
            {onClickAdd && (
              <img
                className={styles.plus}
                onClick={() => handleSetIsAdded()}
                src={`/img/${
                  handlerIsAdded(id) ? 'btn-checked' : 'btn-plus'
                }.svg`}
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Card
