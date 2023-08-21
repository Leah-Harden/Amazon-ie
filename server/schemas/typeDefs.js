const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
  }

  type Product {
    _id: ID!
    name: String!
    price: String!

  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user: [User]
    user(_id: ID!): User
    product: [Product]
    product(_id: ID!): Product

  }


  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
# dont know about the password part 0-o    
    login(email: String!, password: String!): Auth
    createProduct(name: String!price: String!): Product

  }
`;

module.exports = typeDefs;
