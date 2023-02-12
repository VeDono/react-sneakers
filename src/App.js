import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Drawer from './components/Drawer/Drawer'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Orders from './pages/Orders'
import AppContext from './context'

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favoriteItems, setFavoriteItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // fetch('https://63a258b2a543280f776d8377.mockapi.io/items')
    //   .then((response) => response.json())
    //   .then((json) => setItems(json))

    async function fetchData() {
      try {
        const [cardResponse, favoritesResponse, itemsResponse] =
          await Promise.all([
            axios.get('https://63a258b2a543280f776d8377.mockapi.io/cart'),
            axios.get('https://63a258b2a543280f776d8377.mockapi.io/favorites'),
            await axios.get(
              'https://63a258b2a543280f776d8377.mockapi.io/items'
            ),
          ])
        // const cardResponse = await axios.get(
        //   'https://63a258b2a543280f776d8377.mockapi.io/cart'
        // )
        // const favoritesResponse = await axios.get(
        //   'https://63a258b2a543280f776d8377.mockapi.io/favorites'
        // )
        // const itemsResponse = await axios.get(
        //   'https://63a258b2a543280f776d8377.mockapi.io/items'
        // )

        setIsLoading(false)

        setCartItems(cardResponse.data)
        setFavoriteItems(favoritesResponse.data)
        setItems(itemsResponse.data)
      } catch (error) {
        alert('Ошибка загрузки данных 😥')
        console.error(error)
      }
    }

    fetchData()

    // axios
    //   .get('https://63a258b2a543280f776d8377.mockapi.io/items')
    //   .then((response) => setItems(response.data))

    // axios
    //   .get('https://63a258b2a543280f776d8377.mockapi.io/cart')
    //   .then((response) => setCartItems(response.data))

    // axios
    //   .get('https://63a258b2a543280f776d8377.mockapi.io/favorites')
    //   .then((response) => setFavoriteItems(response.data))
  }, [])

  const handlerAddToCart = async (obj) => {
    // axios.post('https://63a258b2a543280f776d8377.mockapi.io/cart', obj)
    // setCartItems((prev) => [...prev, obj])

    try {
      const findItem = cartItems.find(
        (cartObj) => Number(cartObj.parentId) === Number(obj.id)
      )
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        )
        await axios.delete(
          `https://63a258b2a543280f776d8377.mockapi.io/cart/${findItem.id}`
        )
      } else {
        // setCartItems((prev) => [...prev, obj])
        const { data } = await axios.post(
          'https://63a258b2a543280f776d8377.mockapi.io/cart',
          obj
        )
        // setCartItems((prev) => [
        //   prev.map((item) => {
        //     if (item.parentId === data.parentId) {
        //       return {
        //         ...item,
        //         id: data.id,
        //       }
        //     }
        //     return item
        //   }),
        // ])
        setCartItems((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Ошибка при внесении изменений 😥')
    }
  }

  const handlerRemoveCartItem = async (id) => {
    try {
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      )
      await axios.delete(
        `https://63a258b2a543280f776d8377.mockapi.io/cart/${id}`
      )
    } catch (error) {
      alert('Ошибка при удалении из корзины 😥')
      console.error(error)
    }
  }
  const handlerAddToFavorite = async (obj) => {
    try {
      if (favoriteItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://63a258b2a543280f776d8377.mockapi.io/favorites/${obj.id}`
        )
        setFavoriteItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        )
      } else {
        const { data } = await axios.post(
          'https://63a258b2a543280f776d8377.mockapi.io/favorites',
          obj
        )
        setFavoriteItems((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Ошибка при добавлении в избранное 😥')
      console.error(error)
    }
    // axios.post('https://63a258b2a543280f776d8377.mockapi.io/favorites', obj)
    // setFavoriteItems((prev) => [...prev, obj])
  }

  const handlerSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const handlerIsAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favoriteItems,
        handlerIsAdded,
        setCartItems,
        handlerAddToFavorite,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClickCloseBtn={() => setCartOpened(!cartOpened)}
          removeCartItem={handlerRemoveCartItem}
          opened={cartOpened}
        />
        <Header onClickCart={() => setCartOpened(!cartOpened)} />
        <Routes>
          <Route
            path="/react-sneakers/"
            element={
              <Home
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                handlerSearchInput={handlerSearchInput}
                cartItems={cartItems}
                handlerAddToCart={handlerAddToCart}
                isLoading={isLoading}
                handlerAddToFavorite={(obj) => handlerAddToFavorite(obj)}
              />
            }
          />

          <Route
            path="/react-sneakers/favorites"
            element={<Favorites handlerAddToFavorite={handlerAddToFavorite} />}
          ></Route>
          <Route path="/react-sneakers/orders" element={<Orders />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App
