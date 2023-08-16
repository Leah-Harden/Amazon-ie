import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        savedChildren {
          name
        }
      }
    }
  }
`;

export const ADD_CHILD = gql`
  mutation Mutation($name: String!, $badges: String, $theme: String) {
  createChild(name: $name, badges: $badges, theme: $theme) {
    _id
    name
    badges
    grownups {
      _id
    }
    theme
  }
}
`;
