import ShopItem from './ShopItem';

export default function ListView({ items }) {
  if (!items) return null;

  return (
    <div className="items-view-box">
      {items.map((item, idx) => <ShopItem item={item} key={`${'card'}-${idx}`}/>)}
    </div>
  );
}