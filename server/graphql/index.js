const express = require('express');
const router = express.Router(); 

const graphqlHTTP = require('express-graphql');
const { gql } = require('@apollo/client');
const { buildASTSchema } = require('graphql');

const POSTS = [
    { author: "John Doe", body: "Hello world" },
    { author: "Jane Doe", body: "Hi, planet!" },
  ];
  
  const schema = buildASTSchema(gql`
    type Query {
      posts: [Post]
      post(id: ID!): Post
    }
  
    type Post {
      id: ID
      author: String
      body: String
    }
  `);
  
  const mapPost = (post, id) => post && ({ id, ...post });
  
  const root = {
    posts: () => POSTS.map(mapPost),
    post: ({ id }) => mapPost(POSTS[id], id),
  };

  router.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }));

  module.exports = router;