// Placeholder menu. Shape mirrors what a future API should return:
// categories[] -> items[] with { name, description, price, tags? }.
// Prices in KES. Set `isSample` to false once items and prices are confirmed.

export const currency = 'KES'
export const isSample = true

export const menu = [
  {
    id: 'coffee',
    title: 'Coffee',
    blurb: 'Espresso drinks and filter coffee, made to order.',
    items: [
      { name: 'Rio Signature Latte', description: 'Double shot, velvet milk, a whisper of caramelised honey.', price: 380, tags: ['signature'] },
      { name: 'Flat White', description: 'Ristretto shots under silky micro-foam.', price: 320 },
      { name: 'Cappuccino', description: 'Classic thirds: espresso, milk, foam.', price: 300 },
      { name: 'Americano', description: 'Long, clean and bright.', price: 250 },
      { name: 'Single-Origin Pour Over', description: 'Filter coffee, brewed by hand.', price: 420, tags: ['specialty'] },
      { name: 'Mocha', description: 'Espresso, dark chocolate, steamed milk.', price: 360 },
    ],
  },
  {
    id: 'cold',
    title: 'Cold & Other Drinks',
    blurb: 'For the warm afternoons and the long conversations.',
    items: [
      { name: 'Iced Spanish Latte', description: 'Condensed milk, espresso, lots of ice.', price: 400, tags: ['popular'] },
      { name: 'Cold Brew', description: '18-hour steep, smooth and chocolatey.', price: 380 },
      { name: 'Dawa', description: 'Lemon, ginger and honey, hot or iced.', price: 280 },
      { name: 'Chai Masala', description: 'Spiced Kenyan tea, simmered with milk.', price: 220 },
      { name: 'Fresh Juice', description: 'Passion, mango or tropical blend.', price: 300 },
      { name: 'Milkshake', description: 'Vanilla, chocolate or Oreo.', price: 450 },
    ],
  },
  {
    id: 'breakfast',
    title: 'Breakfast',
    blurb: 'Served all morning, made to linger over.',
    items: [
      { name: 'Rio Full Breakfast', description: 'Eggs your way, beef sausage, bacon, toast, beans, grilled tomato.', price: 850, tags: ['signature'] },
      { name: 'Avocado Toast', description: 'Sourdough, smashed avocado, chilli, poached egg.', price: 650 },
      { name: 'Pancake Stack', description: 'Buttermilk pancakes, berries, maple syrup.', price: 600 },
      { name: 'Spanish Omelette', description: 'Potato, onion, peppers, side toast.', price: 550 },
    ],
  },
  {
    id: 'mains',
    title: 'Mains',
    blurb: 'Hearty plates from the kitchen, lunch through late.',
    items: [
      { name: 'Rio Beef Burger', description: 'Grilled beef patty, cheddar, house sauce, fries.', price: 1100, tags: ['popular'] },
      { name: 'Grilled Chicken', description: 'Herb-marinated, with chips or rice and kachumbari.', price: 1050 },
      { name: 'Beef Wet Fry', description: 'Slow-cooked in tomato and onion, served with ugali or rice.', price: 950 },
      { name: 'Creamy Chicken Pasta', description: 'Penne, mushroom cream sauce, parmesan.', price: 980 },
      { name: 'Fish Fillet', description: 'Pan-seared tilapia, lemon butter, greens.', price: 1200 },
    ],
  },
  {
    id: 'bakes',
    title: 'Bakes & Desserts',
    blurb: 'Something sweet to go with the cup.',
    items: [
      { name: 'Butter Croissant', description: 'Flaky, golden, baked each morning.', price: 250 },
      { name: 'Chocolate Fudge Cake', description: 'Rich, dense, served warm.', price: 450 },
      { name: 'Carrot Cake', description: 'Spiced sponge, cream cheese frosting.', price: 420 },
      { name: 'Cinnamon Roll', description: 'Soft swirl, vanilla glaze.', price: 300 },
    ],
  },
]
