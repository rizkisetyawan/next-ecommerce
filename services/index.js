const URL = 'https://staging-am.awalmula.co.id/rest/default/V1/categories';

const DummyProduct = [
  {
    id: 1,
    type: 'Exclusive Awal Mula',
    name: 'The Bitty Bite',
    price: 131250,
    location: 'Kota Bekasi',
    rates: 4.0,
    sales: 128,
    image: 'https://media-www.awalmula.co.id/catalog/product/cache/06a2b2d0b3b3bcee577608c878a0377c/t/h/the_bitty_bite.png',
  },
  {
    id: 2,
    type: 'Exclusive Awal Mula',
    name: 'Everything About Vegan',
    price: 105750,
    location: 'Jakarta Selatan',
    rates: 5.0,
    sales: 68,
    image: 'https://media-www.awalmula.co.id/catalog/product/cache/06a2b2d0b3b3bcee577608c878a0377c/e/v/everything_about_vegan.png',
  },
  {
    id: 3,
    type: 'Exclusive Awal Mula',
    name: 'To Our Finest Skin',
    price: 238750,
    location: 'Kota Tangerang',
    rates: 4.0,
    sales: 265,
    image: 'https://media-www.awalmula.co.id/catalog/product/cache/06a2b2d0b3b3bcee577608c878a0377c/t/o/to_our_finest_skin.png',
  },
  {
    id: 4,
    type: 'Vegan',
    name: 'Sagon Bakar 100gr',
    price: 42000,
    location: 'Cileungsi',
    rates: 4.0,
    sales: 24,
    image: 'https://media-www.awalmula.co.id/catalog/product/cache/06a2b2d0b3b3bcee577608c878a0377c/b/h/bhumi-rasa_0027_dsc03396_1.png',
  },
  {
    id: 5,
    type: 'Vegan',
    name: 'Temulawak Celup',
    price: 25000,
    location: 'Cileungsi',
    rates: 4.0,
    sales: 62,
    image: 'https://media-www.awalmula.co.id/catalog/product/cache/06a2b2d0b3b3bcee577608c878a0377c/t/e/temulawak_1_1.png',
  },
  {
    id: 6,
    type: 'Vegan',
    name: 'Jahe Rempah Celup',
    price: 25000,
    location: 'Cileungsi',
    rates: 4.0,
    sales: 88,
    image: 'https://media-www.awalmula.co.id/catalog/product/cache/06a2b2d0b3b3bcee577608c878a0377c/p/u/putriwangi_jahe-rempah_1.png',
  },
];

const getCategory = async () => {
  const res = await fetch(URL);
  const resJson = await res.json();
  return resJson;
};

// eslint-disable-next-line max-len
const getProducts = (type) => (type ? DummyProduct.filter((row) => row.type === type) : DummyProduct);

export {
  getCategory,
  getProducts,
};
