import Card from '../components/Card'

function Home({
  items,
  searchValue,
  setSearchValue,
  handlerSearchInput,
  handlerAddToCart,
  handlerAddToFavorite,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    return (isLoading ? [...Array(12)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onClickFavorite={(obj) => handlerAddToFavorite(obj)}
        onClickAdd={(obj) => handlerAddToCart(obj)}
        isLoading={isLoading}
        {...item}
      />
    ))
  }

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
        </h1>
        <div className="search-block d-flex">
          <img src="img/search.svg" alt="Search" />
          <input
            value={searchValue}
            onChange={handlerSearchInput}
            placeholder="Поиск..."
          />
          {searchValue && (
            <img
              className="cu-p"
              onClick={() => setSearchValue('')}
              src="img/btn-remove.svg"
              alt="Remove"
            />
          )}
        </div>
      </div>

      <div className="d-flex flex-wrap justify-between">
        {/* {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              isLoading={isLoading}
              id={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickFavorite={(obj) => handlerAddToFavorite(obj)}
              onClickAdd={(obj) => handlerAddToCart(obj)}
              added={cartItems.some(
                (obj) => Number(obj.id) === Number(item.id)
              )}
              // Но можно взять onClickAdd={() => handleAddToCart(item)} и это будет работать 😅
            />
          ))} */}
        {renderItems()}
      </div>
    </div>
  )
}

export default Home
