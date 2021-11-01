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
  {
    id: 7,
    type: 'Food & Beverages',
    name: 'Seonnie Collagen Drink 480 gr',
    price: 330000,
    location: 'Kota Tangerang',
    rates: 5.0,
    sales: 375,
    image: 'https://media-www.awalmula.co.id/catalog/product/cache/06a2b2d0b3b3bcee577608c878a0377c/s/e/seonie_collagen_drink_1.png',
  },
  {
    id: 8,
    type: 'Food & Beverages',
    name: 'Realfood Super Mom Program 12 Hari',
    price: 650000,
    location: 'Kota Tangerang',
    rates: 5.0,
    sales: 215,
    image: 'https://media-www.awalmula.co.id/catalog/product/cache/06a2b2d0b3b3bcee577608c878a0377c/r/e/realfood_program_super_mom_01.png',
  },
  {
    id: 9,
    type: 'Food & Beverages',
    name: 'Mie Lokality Buah Naga 85 gr',
    price: 12000,
    location: 'Kota Tangerang',
    rates: 4.8,
    sales: 590,
    image: 'https://media-www.awalmula.co.id/catalog/product/cache/06a2b2d0b3b3bcee577608c878a0377c/d/s/dsc02101.png',
  },
  {
    id: 10,
    type: 'Food & Beverages',
    name: 'Mie Lokality Kelor 85 gr',
    price: 12000,
    location: 'Kota Tangerang',
    rates: 4.5,
    sales: 21,
    image: 'https://media-www.awalmula.co.id/catalog/product/cache/06a2b2d0b3b3bcee577608c878a0377c/d/s/dsc02097.png',
  },
  {
    id: 11,
    type: 'Health & Wellness',
    name: 'Rosemary Essential Oil Body Wash 200 ml',
    price: 149000,
    location: 'Jakarta Barat',
    rates: 4.8,
    sales: 67,
    image: 'https://media-www.awalmula.co.id/catalog/product/cache/06a2b2d0b3b3bcee577608c878a0377c/k/a/katalog-hnb_0000s_0002s_0003_img_3967_2.png',
  },
  {
    id: 12,
    type: 'Health & Wellness',
    name: 'Homemade Skincare Soap Bar Rose 120 gr',
    price: 70000,
    location: 'Jakarta Utara',
    rates: 4.4,
    sales: 99,
    image: 'https://media-www.awalmula.co.id/catalog/product/cache/06a2b2d0b3b3bcee577608c878a0377c/k/a/katalog-hnb_0000s_0007s_0000_img_4224.png',
  },
  {
    id: 13,
    type: 'Exclusive Awal Mula',
    name: 'Cemal-cemil dari mama',
    price: 76000,
    location: 'Kota Bekasi',
    rates: 4.7,
    sales: 356,
    image: 'https://media-www.awalmula.co.id/catalog/product/cache/06a2b2d0b3b3bcee577608c878a0377c/c/e/cemal_cemil_dari_ibu.png',
  },
];

const getCategory = async () => {
  const res = await fetch(URL);
  const resJson = await res.json();
  return resJson;
};

const getProduct = (name) => DummyProduct.find((row) => row.name === name);

// eslint-disable-next-line max-len
const getProducts = (type) => (type ? DummyProduct.filter((row) => row.type === type) : DummyProduct);

export {
  getCategory,
  getProduct,
  getProducts,
};
