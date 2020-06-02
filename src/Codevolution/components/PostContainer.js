import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux";

const PostContainer = ({ postData, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return postData.loading ? (
    <h2>Loading</h2>
  ) : postData.error ? (
    <h2>{postData.error}</h2>
  ) : (
    <div>
      <h2>Post List</h2>
      {postData.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postData: state.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
