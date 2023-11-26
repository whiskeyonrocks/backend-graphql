import express from "express";
const app = express();

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typedefs, resolvers } from "./apollo-server/index.js";

const apolloServer = new ApolloServer({
  typeDefs: typedefs,
  resolvers,
});
await apolloServer.start();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/graph", expressMiddleware(apolloServer));

app.get("*", (req, res) => {
  res.send("You are on right path!");
});

app.listen(3000, () => {
  console.log("Listening on!");
});
