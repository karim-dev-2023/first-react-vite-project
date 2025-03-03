function Dish({ nameItem ,imageSrc,price}) {
  return (
    <>
      <article>
        <h2>{nameItem}</h2>
        <img src={imageSrc} alt={nameItem} />
        <p>{price} €</p>
      </article>
    </>
  );
}

export default Dish;
