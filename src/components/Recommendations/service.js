import axios from "axios";

  const getTopic = async () => {
    try {
      const url = 'https://dog.ceo/api/breeds/image/random';
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

export default getTopic;