import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Kategori, Lifestyle, Exclusive, Slider,
} from '../components';
import { getCategory, getProducts } from '../services';
import { getChildrenData } from '../utils';

export default function Home({ listLifestyle, listKatPro, productExclusive }) {
  return (
    <>
      <Layout />
      <Slider />
      <Kategori listKatPro={listKatPro} />
      <Exclusive products={productExclusive} />
      <Lifestyle listLifestyle={listLifestyle} />
    </>
  );
}

Home.propTypes = {
  listLifestyle: PropTypes.array,
  listKatPro: PropTypes.array,
  productExclusive: PropTypes.array,
};

export async function getServerSideProps() {
  const res = await getCategory();
  return {
    props: {
      listKatPro: getChildrenData(res.children_data, 'Kategori Produk'),
      listLifestyle: getChildrenData(res.children_data, 'Lifestyle'),
      productExclusive: getProducts('Exclusive Awal Mula'),
    },
  };
}
