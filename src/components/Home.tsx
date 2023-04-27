import { posts } from "../db/posts";
import "../css/home.css";
import { IPost, RootState } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_FAVORITES } from "../redux/actionTypes";

function Home() {
  const dispatch = useDispatch();
  const favoritesIds = useSelector(
    (state: RootState) => state.posts.postsId
  );

  const addPostHandler = (postId: number) => {
    dispatch({ type: ADD_TO_FAVORITES, payload: postId });
  };

  return (
    <div className="home-main">
      <p>Home</p>
      <div className="posts-container">
        {posts.map((post: IPost) => (
          <div key={post.id} className="post">
            <div className="post-header">
              <p className="author">
                Author: <span className="author-name">{post.author}</span>
              </p>
              <div className="fav-btn">
                {favoritesIds && !favoritesIds.includes(post.id) && (
                  <button onClick={() => addPostHandler(post.id)}>Add</button>
                )}
              </div>
            </div>
            <div className="content">{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
