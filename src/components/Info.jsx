const Info = ({ image, title, description, onClickCloseBtn }) => {
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img
        width={120}
        src={image}
        alt="Image of empty cart"
        className="mb-20"
      />
      <h2>{title ? title : 'Корзина пуста'}</h2>
      <p className="opacity-6">
        {description
          ? description
          : 'Добавьте хотя бы один товар, чтобы сделать заказ'}
      </p>
      <button onClick={onClickCloseBtn} className="greenButton">
        <img src="/img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  )
}

export default Info
