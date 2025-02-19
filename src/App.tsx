import React from 'react';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/afrobites_background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed w-full bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center py-4">
              <img src="/images/afrobite_logo.png" alt="Afrobites Logo" className="h-16" />
              <div className="flex-1 flex items-center justify-center">
                <div className="flex items-center justify-center space-x-12">
              {['menu', 'about', 'order', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-white hover:text-yellow-400 transition-colors uppercase tracking-wide"
                >
                  {item === 'order' ? 'Order Online' : item === 'about' ? 'About Us' : item === 'contact' ? 'Contact Us' : item}
                </button>
              ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero with Logo */}
        <div className="min-h-screen flex flex-col items-center justify-center text-white">
          <img src="/images/afrobite_logo.png" alt="Afrobites Logo" className="h-20 mb-4" />
          <h1 className="text-6xl mb-2 logo-text">AfroBites</h1>
          <p className="text-xl text-yellow-400">Experience authentic African cuisine</p>
        </div>

        {/* Menu Section */}
        <section id="menu" className="min-h-screen bg-black/80 p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-center text-yellow-400 mb-12">Our Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: 'Jollof Rice', price: 15.99 },
                { name: 'Egusi Soup', price: 15.99 },
                { name: 'Pounded Yam', price: 15.99 },
                { name: 'Fried Rice', price: 16.99 }
              ].map((dish) => (
                <div key={dish.name} className="bg-black/50 p-6 rounded-lg">
                  <h3 className="text-xl text-white mb-2">{dish.name}</h3>
                  <p className="text-gray-300">{dish.name === 'Jollof Rice' ? 'A vibrant West African dish of seasoned rice simmered in a rich, spiced tomato sauce with onions and peppers, served with your choice of tender chicken, beef, or fish. A flavorful and hearty classic!' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}</p>
                  <p className="text-yellow-400 mt-2">${dish.price.toFixed(2)}</p>
                </div>
              ))}
            </div>

            {/* Catering Options */}
            <div className="mt-16">
              <h3 className="text-3xl text-center text-yellow-400 mb-8">Catering Options</h3>
              <div className="overflow-hidden border border-white">
                {/* Header Row */}
                <div className="grid grid-cols-2 border-b border-white">
                  <div className="p-4 text-white font-semibold text-lg border-r border-white">Item</div>
                  <div className="p-4 text-white font-semibold text-lg">Price</div>
                </div>
                {/* Data Rows */}
                {[
                  { name: 'Half pan of Abacha', price: 60 },
                  { name: 'Half pan of Ugba Stockfish', price: 140 },
                  { name: 'Half pan of Nkwobi', price: 150 },
                  { name: 'Half pan of Onugbu Soup with Assorted Meats', price: 100 },
                  { name: 'Half pan of Spicy Fowl', price: 100 }
                ].map((option, index) => (
                  <div key={option.name} className={`grid grid-cols-2 ${index !== 4 ? 'border-b' : ''} border-white`}>
                    <div className="p-4 text-white border-r border-white">{option.name}</div>
                    <div className="p-4 text-yellow-400 font-semibold">${option.price.toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen bg-black/90 p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-yellow-400 mb-8">About Us</h2>
            <p className="text-white text-lg leading-relaxed">
              At Afrobites, we bring you authentic African flavors crafted with passion and tradition. 
              Our chefs combine time-honored recipes with modern culinary techniques to create an 
              unforgettable dining experience.
            </p>
          </div>
        </section>

        {/* Order Online Section */}
        <section id="order" className="min-h-screen bg-black/80 p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-yellow-400 mb-8">Order Online</h2>
            <div className="bg-black/50 p-8 rounded-lg">
              <p className="text-white mb-6">Ready to experience our delicious meals at home?</p>
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors">
                Start Your Order
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen bg-black/90 p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-yellow-400 mb-8">Contact Us</h2>
            <div className="space-y-6 text-white">
              <p className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                32 Cambridge St. Charlestown, MA 02129
              </p>
              <p className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                857-2395-4181
              </p>
              <p className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                afrobitesma@gmail.com
              </p>
              <div className="flex justify-center space-x-6 mt-4">
                <a href="https://twitter.com/afrobitesma" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/afrobitesma" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
                <a href="https://facebook.com/afrobitesma" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
