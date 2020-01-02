import axios from 'axios';

class AxiosCalls {
  static async post(url, requestObject) {
    try {
      return await axios.post(url, requestObject);
    } catch (error) {
      throw error.response.data;
    }
  }

  static async get(url) {
    try {
      return await axios.get(url);
    } catch (error) {
      throw error.response.data;
    }
  }
}

export default AxiosCalls;
