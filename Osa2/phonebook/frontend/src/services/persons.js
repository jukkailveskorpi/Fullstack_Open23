/* import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const getAll = () => {
  const request = axios.get(`${baseUrl}/api/persons`);
  return request.then((response) => response.data);
}

const create = (personObject) => {
  const request = axios.post(`${baseUrl}/api/persons`, personObject);
  return request.then((response) => response.data);
}

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/api/persons/${id}`);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/api/persons/${id}`, newObject);
  return request.then((response) => response.data);
}

export default { getAll, create, deletePerson, update }; */

/*


import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/persons';

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data);
}

const create = (personObject) => {
  const request = axios.post(baseUrl, personObject)
  return request.then(response => response.data);
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data);
};

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default { getAll, create, deletePerson, update }; 


*/