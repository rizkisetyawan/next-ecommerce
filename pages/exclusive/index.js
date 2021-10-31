import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Products,
  Footer,
} from '../../components';
import { getProducts } from '../../services';

export default function ExclusivePage({ data }) {
  return (
    <>
      <Header />
      <Products title="Exclusive Awal Mula" data={data} filled />
      <Footer />
    </>
  );
}

ExclusivePage.propTypes = {
  data: PropTypes.array,
};

export async function getServerSideProps() {
  return {
    props: {
      data: getProducts('Exclusive Awal Mula'),
    },
  };
}
