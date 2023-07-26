import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchComments } from "../api/api";
import { Comment } from "../interface/interface";
import { CommentList } from "../components/CommentList";

export const CommentsPage: React.FC = () => {
  const { postId = "" } = useParams<{ postId: string }>();
  const [comments, setComments] = useState<Comment[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getComments = async () => {
      const commentsData = await fetchComments();
      const postComments = commentsData.filter(
        (comment) => comment.postId === parseInt(postId)
      );
      setComments(postComments);
    };

    getComments();
  }, [postId]);

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="content">
      <div className="comment-button">
        <button onClick={handleGoBack}>Back</button>
      </div>
      <CommentList comments={comments} />
    </div>
  );
};
