import { gql } from '@apollo/client';

const GET_ALL_COUNTRIES_INFO = gql`
{
  countries {
    name
    native
    capital
    currency
    languages {
      name
    }
    states {
      name
    }
  }
}
`;

export default  GET_ALL_COUNTRIES_INFO