export default function ShopCard({ card }) {
  return (
    <div className="shop-card">
      <div className="shop-card_title">{card.name}</div>
      <div className="shop-card_color">{card.color}</div>
      <div className="shop-card_preview">
        <img className="shop-card_img" src={card.img} alt=""/>
      </div>
      <div className="shop-card_footer">
        <div className="shop-card_footer_price">${card.price}</div>
        <div className="shop-card_footer_add-button">Add to card</div>
      </div>
    </div>
  );
}