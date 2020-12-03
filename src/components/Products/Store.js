import { useState } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';
import products from '../../data/products';

export default function Store() {
  
  const [type, switchType] = useState('view_list');
  const [status, switchView] = useState({cards: products, items: null});

  const onSwitchType = (icon) => {
    if (icon === 'view_list') {
      switchType((prev) => prev = 'view_module');
      switchView((prev) => ({...prev, cards: null, items: products }));
    } else {
      switchType((prev) => prev = 'view_list');
      switchView((prev) => ({...prev, cards: products, items: null }));
    }
  }

  return (
    <>
      <IconSwitch icon={type} onSwitch={() => onSwitchType(type)} />
      <CardsView cards={status.cards} />
      <ListView items={status.items} />
    </>
  )
}
