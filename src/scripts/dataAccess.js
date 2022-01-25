const applicationState = {
  authors: [],
  topics: [],
  recipients: [],
  letters: [],
};
//add property of "requests" onto this?
//above is an internal copy of the API - just holds

const API = "http://localhost:8088";

export const fetchAuthors = () => {
  return fetch(`${API}/authors`)
    .then((response) => response.json())
    .then((authorRequest) => {
      // Store the external state in application state
      applicationState.authors = authorRequest;
    });
};

export const getAuthors = () => {
  return applicationState.authors.map((authorRequest) => ({
    ...authorRequest,
  }));
};
//returns a copy of the requests state - return copies of arrays in the database module



//End of Chapter 4 - confused
export const sendRequest = (userServiceRequest) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userServiceRequest),
  };

  return fetch(`${API}/requests`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
};

export const deleteRequest = (id) => {
  return fetch(`${API}/requests/${id}`, { method: "DELETE" }).then(() => {
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  });
};
