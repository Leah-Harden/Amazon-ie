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
  users: [User]   # Change the field name from "user" to "users"
  user(_id: ID!): User
  products: [Product]   # Change the field name from "product" to "products"
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
