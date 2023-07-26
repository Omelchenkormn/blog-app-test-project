import axios, { AxiosResponse } from "axios";
import { Post, Comment, User } from "../interface/interface";
const BASE_URL = "https://jsonplaceholder.typicode.com";

const fetchData = async <T>(url: string): Promise<T[]> => {
  try {
    const response: AxiosResponse<T[]> = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const fetchPosts = async (): Promise<Post[]> => {
  const url = `${BASE_URL}/posts`;
  return fetchData<Post>(url);
};

export const fetchComments = async (): Promise<Comment[]> => {
  const url = `${BASE_URL}/comments`;
  return fetchData<Comment>(url);
};

export const fetchUsers = async (): Promise<User[]> => {
  const url = `${BASE_URL}/users`;
  return fetchData<User>(url);
};

export const fetchUserPosts = async (userId: number): Promise<Post[]> => {
  const url = `${BASE_URL}/posts?userId=${userId}`;
  return fetchData<Post>(url);
};
