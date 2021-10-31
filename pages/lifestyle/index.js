import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Lifestyle,
  Footer,
} from '../../components';
import { getCategory } from '../../services';
import { getChildrenData } from '../../utils';

export default function LifestylePage({ data }) {
  return (
    <>
      <Header />
      <Lifestyle listLifestyle={data} filled />
      <Footer />
    </>
  );
}

LifestylePage.propTypes = {
  data: PropTypes.array,
};

export async function getServerSideProps() {
  const res = await getCategory();
  return {
    props: {
      data: getChildrenData(res.children_data, 'Lifestyle'),
    },
  };
}
