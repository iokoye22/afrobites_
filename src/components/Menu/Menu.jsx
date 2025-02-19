import React from 'react';
import './Menu.css';

const foodItems = [
  {
    id: 1,
    name: 'Jollof Rice',
    description: 'A vibrant West African dish of seasoned rice simmered in a rich, spiced tomato sauce with onions and peppers, served with your choice of tender chicken, beef, or fish. A flavorful and hearty classic!',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Suya',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Pounded Yam',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Egusi Soup',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Plantain',
    image: 'https://images.unsplash.com/photo-1543352634-99a5d50ae78e?w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Moi Moi',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop'
  }
];

const Menu = () => {
  const scrollLeft = () => {
    const container = document.querySelector('.menu-carousel');
    container.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.querySelector('.menu-carousel');
    container.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="menu-container">
      <button className="scroll-button left" onClick={scrollLeft}>&#8249;</button>
      <div className="menu-carousel">
        {foodItems.map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.name} className="food-image" />
            <h3 className="food-name">{item.name}</h3>
            {item.description && <p className="food-description">{item.description}</p>}
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>&#8250;</button>
    </div>
  );
};

export default Menu;
