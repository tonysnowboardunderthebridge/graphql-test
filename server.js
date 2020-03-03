const express = require("express");
const expressGraphQL = require("express-graphql");
const app = express();
const { GraphQLSchema, GraphQLString, GraphQLObjectType } = require("graphql");
import { getSchema } from './utils'  

getSchema().then((schema) => {
  
  app.use(
    "/graphql",
    expressGraphQL({
      schema,
      graphiql: true
    })
  );
  app.listen(5000, () => console.log("Up & Running..."));
  
})


