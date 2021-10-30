import * as React from 'react';
import { Layout, Kategori, Lifestyle, Exclusive, Product } from '../components';

export default function Index() {
  return (
    <Layout>
      <Kategori />
      <Exclusive />
      <Lifestyle />
    </Layout>
  );
}
