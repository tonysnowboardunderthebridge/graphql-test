import { GraphQLObjectType, GraphQLString} from 'graphql'

export const CMVideo = new GraphQLObjectType({
  name: 'CMVideo',
  fields: {
    id: { type: GraphQLString },
    callToActionCustomText: { type: GraphQLString },
    alt: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    data: { type: GraphQLString }
  }
});
