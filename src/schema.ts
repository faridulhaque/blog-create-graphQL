export const typeDefs = `#graphql

type Query {
    me: User
    users: [User]
    posts: [Post]
}

type Mutation {
    signUp(
        name: String!
        email: String!
        password: String!
    ): UserReturn

    signIn(
        name: String!
        password: String!
        
    ): UserReturn
}

type UserReturn {
  user: User
  token: String
}
  
  type Post {
    id: ID!
    title: String!
    content: String!
    created_at: String
    author: User     
    published: Boolean  
  }

  type User {
    id: ID!
    name: String!
    email: String!
    createdAt: String!
    posts: [Post]
  }

  type Profile {
    id: ID!   
    bio: String
    createdAt: String
    updatedAt: String
    user: User!
    
  }
`;
