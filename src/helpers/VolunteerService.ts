import axios from 'axios';

const API_URL = 'https://www.volunteermatch.org/api/open';
const API_KEY = 'your_api_key_here'; // Replace with your actual API key



export const getVolunteerActivities = async (location: string) => {
  try {
    const response = await axios.get(`${API_URL}/opportunities?location=${location}&key=${API_KEY}`);
    return response.data.opportunities;
  } catch (error) {
    console.error('Error fetching volunteer activities:', error);
    throw error;
  }
};