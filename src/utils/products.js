import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(
    'https://api-us-west-2.graphcms.com/v2/ckp4k4niv0co601z293wrf4q1/master'
);

export const getProductList = async () => {
    const { products } = await graphcms.request(
        `{
      products(orderBy: createdAt_DESC) {
        productName
        price
        createdAt
        id
        slug
        productImage {
          id
          fileName
          url
          height
          width
        }
      }
    }`
    );

    return products;
};

export const getProductSlugs = async () => {
    const { products } = await graphcms.request(
        `{
      products {
        id
        slug
      }
    }`
    );

    return products.map(({ slug }) => {
        return {
            params: {
                slug,
            },
        };
    });
};

export const getProductData = async (productSlug) => {
    const { product } = await graphcms.request(
        `query ProductPageQuery($productSlug: String!){
        product(where: {slug: $productSlug}) {
          productName
          price
          id
          description {
              html
          }
          slug
          productImage {
            id
            fileName
            url
            height
            width
          }
        }
      }`,
        {
            productSlug,
        }
    );

    return product;
};