import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { RingLoader } from "react-spinners";
import { fetchUsers, fetchPosts, fetchUserPosts } from "../api/api";
import { FormattedUser } from "../interface/interface";
import { Post } from "../interface/interface";
import { PostsList } from "../components/PostsList";

export const HomePage: React.FC = () => {
  const [users, setUsers] = useState<FormattedUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<FormattedUser | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetchUsers();
      const formattedUsers: FormattedUser[] = usersData.map((user) => ({
        value: user.id,
        label: user.name,
      }));
      setUsers(formattedUsers);
    };

    getUsers();
    loadRandomPosts();
  }, []);

  const loadRandomPosts = async () => {
    setLoading(true);
    const randomPostsData = await fetchPosts();
    setPosts(randomPostsData.slice(0, 10));
    setLoading(false);
  };

  const loadUserPosts = async (userId: number) => {
    setLoading(true);
    const userPostsData = await fetchUserPosts(userId);
    setPosts(userPostsData);
    setLoading(false);
  };

  const handleUserChange = (selectedOption: FormattedUser | null) => {
    setSelectedUser(selectedOption);

    if (selectedOption) {
      loadUserPosts(selectedOption.value);
    } else {
      loadRandomPosts();
    }
  };

  const handlePostClick = (postId: number) => {
    navigate(`/comments/${postId}`);
  };

  const handleReset = () => {
    setSelectedUser(null);
    loadRandomPosts();
  };

  return (
    <div className="content">
      <div className="dropdown">
        <Select
          options={users}
          value={selectedUser}
          onChange={handleUserChange}
          placeholder="Select user"
        />
      </div>

      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
          }}
        >
          <RingLoader color={"#00BFFF"} loading={loading} size={80} />
        </div>
      ) : (
        <PostsList
          selectedUser={selectedUser}
          posts={posts}
          handlePostClick={handlePostClick}
          handleReset={handleReset}
        />
      )}
    </div>
  );
};
