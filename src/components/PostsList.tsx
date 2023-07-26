import { FormattedUser, Post } from "../interface/interface";

export const PostsList: React.FC<{
  selectedUser: FormattedUser | null;
  posts: Post[];
  handlePostClick: (postId: number) => void;
  handleReset: () => void;
}> = ({ selectedUser, posts, handlePostClick, handleReset }) => {
  return (
    <>
      {selectedUser && (
        <>
          <h2 className="header-posts">Posts of the selected user:</h2>
          {posts.length > 0 ? (
            <ul>
              {posts.map((post) => (
                <li key={post.id} onClick={() => handlePostClick(post.id)}>
                  {post.title}
                </li>
              ))}
            </ul>
          ) : (
            "No posts"
          )}
          <div className="list-button">
            <button className="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </>
      )}

      {!selectedUser && posts.length > 0 && (
        <>
          <h2 className="header-posts">Posts:</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.id} onClick={() => handlePostClick(post.id)}>
                {post.title}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
