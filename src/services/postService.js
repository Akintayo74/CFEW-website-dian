import axios from 'axios';

const API_BASE_URL = 'https://centre-for-earth-works-26db89bfe5a5.herokuapp.com/api/v1';

// Create axios instance with base URL and common headers
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add authorization header if needed
    // 'Authorization': `Bearer ${getAuthToken()}`
  },
});

// Posts API
const postService = {
  // Get all posts
  async getPosts() {
    try {
      const response = await apiClient.get('/posts');
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  },

  // Create a new post
  async createPost(postData) {
    try {
      const response = await apiClient.post('/posts', postData);
      return response.data;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  },

  // Update post status (publish/unpublish)
  async updatePostStatus(postId, published) {
    try {
      const response = await apiClient.patch(`/posts/${postId}/publish`, { published });
      return response.data;
    } catch (error) {
      console.error('Error updating post status:', error);
      throw error;
    }
  },

  // Update post
  async updatePost(postId, postData) {
    try {
      const response = await apiClient.put(`/posts/${postId}`, postData);
      return response.data;
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  },

  // Delete post
  async deletePost(postId) {
    try {
      const response = await apiClient.delete(`/posts/${postId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  }
};

export default postService;
