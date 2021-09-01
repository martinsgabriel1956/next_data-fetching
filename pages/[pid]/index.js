import React from 'react';

export default function ProductDetail(props) {
  const { loadedProduct } = props;
  
  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  )
}

export async function getStaticProps(context) {
  const { params } = context;

  const projectId = params.pid;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find(product => product.id === projectId);

  return {
    props: {
      loadedProduct: product
    }
  }
}