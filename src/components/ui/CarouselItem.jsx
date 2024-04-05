const CarouselItem = ({ item, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div></div>
      <img className="carousel-img" src={item.icon} />
      <div className="carousel-item-text">{item.description}</div>
    </div>
  );
};
export default CarouselItem;
