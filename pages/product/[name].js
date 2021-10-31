import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  ProductDetail,
  Footer,
} from '../../components';
import { getProduct } from '../../services';

export default function DetailProductPage({ data }) {
  return (
    <>
      <Header />
      <ProductDetail data={data} />
      <Footer />
    </>
  );
}

DetailProductPage.propTypes = {
  data: PropTypes.array,
};

export async function getServerSideProps({ params }) {
  return {
    props: {
      data: getProduct(params.name),
    },
  };
}
