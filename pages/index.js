import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Kategori,
  Lifestyle,
  Products,
  Slider,
  Footer,
} from '../components';
import { getCategory, getProducts } from '../services';
import { getChildrenData } from '../utils';

export default function Home({
  listLifestyle,
  listKatPro,
}) {
  return (
    <>
      <Header />
      <Slider />
      <Kategori listKatPro={listKatPro} />
      <Products title="Exclusive Awal Mula" data={getProducts('Exclusive Awal Mula')} path="/exclusive" />
      <Lifestyle listLifestyle={listLifestyle} />
      <Products title="Semua Produk" data={getProducts()} path="/products" />
      <Footer />
    </>
  );
}

Home.propTypes = {
  listLifestyle: PropTypes.array,
  listKatPro: PropTypes.array,
};

export async function getServerSideProps() {
  const res = await getCategory();
  return {
    props: {
      listKatPro: getChildrenData(res.children_data, 'Kategori Produk'),
      listLifestyle: getChildrenData(res.children_data, 'Lifestyle'),
    },
  };
}
