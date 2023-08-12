const { AuthenticationError, ApolloError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Parent, Child, Entry } = require('../models');

const resolvers = {

}

module.exports = resolvers;