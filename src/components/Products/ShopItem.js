export default function ShopItem({ item }) {
  return (
    <div className="shop-item">
      <div className="shop-item_preview">
        <img className="shop-item_img" src={item.img} alt=""/>
      </div>
      <div className="shop-item_title">{item.name}</div>
      <div className="shop-item_color">{item.color}</div>      
      <div className="shop-item_price">${item.price}</div>
      <div className="shop-item_add-button">Add to card</div>
    </div>
  );
}