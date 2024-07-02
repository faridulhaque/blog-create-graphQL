export const typeDefs = `#graphql

type Query {
    me: ProfileReturnPayload
    users: [User]
    posts: [Post]
    user(profileId: ID!): ProfileReturnPayload
}

type Mutation {
    signUp(
        name: String!
        email: String!
        password: String!
    ): UserReturn

    addPost(
      post: postArgument!
    ) : PostReturnPayload

    updatePost(
      postId: ID!
      post: postArgument!
    ) : PostReturnPayload

    deletePost(
      postId: ID!
      
    ) : PostReturnPayload

    signIn(
        name: String!
        password: String!
        
    ): UserReturn
}

type ProfileReturnPayload {
  user: User
  error: String
}

type UserReturn {
  user: User
  token: String
}


type PostReturnPayload {
  error: String
  post: Post
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

 


  input postArgument {
    title: String
      content: String
  }
`;
