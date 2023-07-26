import { Comment } from "../interface/interface";
export const CommentList: React.FC<{ comments: Comment[] }> = ({
  comments,
}) => {
  return (
    <>
      <h2 className="header-posts">Post comments:</h2>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <div>
                <strong>Title:</strong> {comment.name}
              </div>
              <div>
                <strong>Description:</strong> {comment.body}
              </div>
              <br />
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no comments for this post.</p>
      )}
    </>
  );
};
