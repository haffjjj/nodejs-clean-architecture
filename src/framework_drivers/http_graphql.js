import {ApolloServer, gql} from "apollo-server-express"
import {mergeTypes} from "merge-graphql-schemas"
import {merge} from "lodash";

import AuthDirective from "./_gql_auth_directive_jwt"

const _globalTypes = gql`
  directive @auth(requires: String) on OBJECT | FIELD_DEFINITION

  type OutputId {
    id: String
  }
`
/**
 * @param {[]gql_handler} handlers is array of graphql handler ( delivery layer )
 */
export default (...handlers) => {
  const typeDefs = []
  const resolvers = {
    Mutation: {},
    Query: {},
  }

  handlers.map((handler) => {
    typeDefs.push(handler.typeDefs())
    resolvers.Mutation = merge(resolvers.Mutation, handler.resolvers().Mutation)
    resolvers.Query = merge(resolvers.Query, handler.resolvers().Query)
  })

  typeDefs.push(_globalTypes)

  return new ApolloServer({
    typeDefs: mergeTypes(typeDefs, {all: true}),
    resolvers: resolvers,
    context: ({req}) => {
      return req
    },
    schemaDirectives: {
      auth: AuthDirective,
    },
    formatError: (error) => {
      if (process.env.NODE_ENV === "prod") delete error.extensions.exception.stacktrace
      return error
    },
    uploads: {
      // Limits here should be stricter than config for surrounding
      // infrastructure such as Nginx so errors can be handled elegantly by
      // graphql-upload:
      // https://github.com/jaydenseric/graphql-upload#type-uploadoptions
      maxFileSize: 10000000, // 10 MB
      maxFiles: 20,
    },
    tracing: process.env.NODE_ENV === "dev" ? true : false,
  })
}
