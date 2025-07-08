
import { GraphQLClient, gql } from 'graphql-request';

const graphqlClient = new GraphQLClient('http://localhost:1337/graphql');

export const GET_HOMEPAGE_DATA = gql`
  query {
    homepage {
      data {
        attributes {
          heroTitle
          heroVideo {
            data {
              attributes {
                url
              }
            }
          }
          features {
            title
            description
          }
          testimonials {
            name
            title
            testimonial
          }
        }
      }
    }
  }
`;

export default graphqlClient;
