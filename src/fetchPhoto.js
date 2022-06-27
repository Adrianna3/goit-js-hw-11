
import axios from 'axios';
const axios = require('axios');

export function fetchPhoto(name) {
  return fetch(
    `https://pixabay.com/api/?key=28305156-2c31ea34b0b957161935cfaa0&q=${name}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
