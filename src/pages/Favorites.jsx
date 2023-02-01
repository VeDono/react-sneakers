import Card from '../components/Card'
import AppContext from '../context'
import { useContext } from 'react'

function Favorites({ handlerAddToFavorite }) {
  const { favoriteItems } = useContext(AppContext)

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap justify-between">
        {favoriteItems.map((item, index) => (
          <Card
            key={index}
            onClickFavorite={(obj) => handlerAddToFavorite(obj)}
            favorited={true}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites
