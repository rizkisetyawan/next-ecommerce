import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Products,
  Footer,
} from '../../components';
import { getProducts } from '../../services';

export default function CategoryPage({ title, data }) {
  return (
    <>
      <Header />
      <Products title={`Category ${title}`} data={data} filled />
      <Footer />
    </>
  );
}

CategoryPage.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export async function getServerSideProps({ params }) {
  return {
    props: {
      title: params.name,
      data: getProducts(params.name),
    },
  };
}
