export const assets = {
  leaves: 'https://api.getlayers.ai/storage/v1/object/public/public/assets/soda-14ff8a788d/leaves.glb',
  cherry: 'https://api.getlayers.ai/storage/v1/object/public/public/assets/soda-14ff8a788d/cherry.glb',
  blueberry: 'https://api.getlayers.ai/storage/v1/object/public/public/assets/soda-14ff8a788d/blueberry.glb',
  can: 'https://api.getlayers.ai/storage/v1/object/public/public/assets/soda-14ff8a788d/deit_soda2.glb',
  classicImage: 'https://api.getlayers.ai/storage/v1/object/public/public/assets/soda-14ff8a788d/Green%20Soda.png',
  limeImage: 'https://api.getlayers.ai/storage/v1/object/public/public/assets/soda-14ff8a788d/Blue%20Soda.png',
  classicTexture: 'https://api.getlayers.ai/storage/v1/object/public/public/assets/soda-14ff8a788d/green%20base%20color.jpg',
  limeTexture: 'https://api.getlayers.ai/storage/v1/object/public/public/assets/soda-14ff8a788d/blue%20base%20color.jpg',
  bubble: 'https://api.getlayers.ai/storage/v1/object/public/public/assets/soda-14ff8a788d/bubble.png'
};

export const products = [
  { id: 'classic', name: 'Diet Classic', price: '99 جنيه مصري', image: assets.classicImage, texture: assets.classicTexture, theme: 'classic', note: 'Crisp cola character with a clean, balanced finish.' },
  { id: 'blue', name: 'Zero Lime', price: '99 جنيه مصري', image: assets.limeImage, texture: assets.limeTexture, theme: 'blue', note: 'Bright lime sparkle with a cool, refreshing lift.' }
];

export const ingredients = [
  { number: '01', name: 'Pure fizz', copy: 'Fine bubbles designed for a crisp, lively first sip.' },
  { number: '02', name: 'Zero sugar', copy: 'A clean, confident taste with no sugar compromise.' },
  { number: '03', name: 'Signature flavor', copy: 'Layered flavor notes that stay smooth from opening to finish.' }
];

export const reviews = [
  { name: 'Maya R.', rating: 5, copy: 'The flavor feels bright and clean. Zero Lime has become my afternoon reset.', image: 'https://i.pravatar.cc/120?img=47' },
  { name: 'Omar K.', rating: 5, copy: 'The classic taste is familiar, but the finish is much lighter. Beautifully made.', image: 'https://i.pravatar.cc/120?img=12' },
  { name: 'Nour A.', rating: 4, copy: 'Love the detail in the can and the crisp bubbles. It feels like a premium ritual.', image: 'https://i.pravatar.cc/120?img=32' }
];

export const contact = { email: 'hello@diet-soda.example', phone: '+20 100 000 0000', instagram: '#', facebook: '#', whatsapp: '#' };
