import React from 'react';
import { gql, useQuery } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
    post(id:1) {
      id
      author
      body
    }
  }
`;

const PostViewer = () => {
    const { loading, error, data } = useQuery(GET_POSTS);
    if(loading) {
        return <p>Loading...</p>
    }
    if(error) {
        return <p>Error</p>;
    }
    return (
        <table>
            <thead>
                <tr>
                <th>Author</th>
                <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {/* {data.posts.map(post => (
                <tr key={post.id}>
                    <td>{post.author}</td>
                    <td>{post.body}</td>
                </tr>
                ))} */}
                <tr key={data.post.id}>
                    <td>{data.post.author}</td>
                    <td>{data.post.body}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default PostViewer;