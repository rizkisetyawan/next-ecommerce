import * as React from 'react';
import {
  Layout, Kategori, Lifestyle, Exclusive,
} from '../components';

export default function Index() {
  return (
    <Layout>
      <Kategori />
      <Exclusive />
      <Lifestyle />
    </Layout>
  );
}
