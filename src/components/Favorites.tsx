import { posts } from "../db/posts";
import "../css/home.css";
import { useDispatch, useSelector } from "react-redux";
import { IPost, RootState } from "../types";
import { DELETE_FROM_FAVORITES } from "../redux/actionTypes";

function Favorites() {
  const dispatch = useDispatch();
  const favoritesIds = useSelector((state: RootState) => state.posts.postsId);

  console.log("favoritesIds", favoritesIds);
  console.log("posts", posts);

  const deletePostHandler = (postId: number) => {
    dispatch({ type: DELETE_FROM_FAVORITES, payload: postId });
  };

  return (
    <div className="home-main">
      <p>Favorites</p>
      <div className="posts-container">
        {posts.map(
          (post: IPost) =>
            favoritesIds.includes(post.id) && (
              <div key={post.id} className="post">
                <div className="post-header">
                  <p className="author">
                    Author: <span className="author-name">{post.author}</span>
                  </p>
                  <div className="fav-btn">
                    <button onClick={() => deletePostHandler}>Delete</button>
                  </div>
                </div>
                <div className="content">{post.content}</div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Favorites;
