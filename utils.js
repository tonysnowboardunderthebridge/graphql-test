import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from './graphql/resolver.js'
export const getSchema = async function() {
  const typeDefs = await importSchema("./graphql/schema.graphql");

  // console.log("typeDefs", typeDefs);

  const schema = makeExecutableSchema({ typeDefs, resolvers });
  // console.log('schema,', schema)
  return schema;
};
