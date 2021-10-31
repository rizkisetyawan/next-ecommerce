import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Products,
  Footer,
} from '../../components';
import { getProducts } from '../../services';

export default function ProductsPage({ data }) {
  return (
    <>
      <Header />
      <Products title="Semua Produk" data={data} filled />
      <Footer />
    </>
  );
}

ProductsPage.propTypes = {
  data: PropTypes.array,
};

export async function getServerSideProps() {
  return {
    props: {
      data: getProducts(),
    },
  };
}
