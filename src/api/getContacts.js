export const getContacts = url => fetch(`${url}/contacts`, {
  method: 'GET',
   headers: {
    'Accept': 'application/json',
  }
  })
  .then(response => {
  if(response.ok) {
    return response.json()
  } else {
    return Promise.reject({})
  }
  })
  .then(json => console.log(json))
  .catch(error => console.log('Authorization failed : ' + error.message));