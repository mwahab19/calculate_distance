import axios from 'axios';

const ERROR_401 = {
  status: 0,
  message: 'You are not allowed to perform this action',
};

export const callGetApi = async (componentName, API_TAG, URL) => {
  try {
    logData(API_TAG, {
      COMPONENT_NAME: componentName,
      API_URL: URL,
      BODY: {},
    });
    let apiResponse = await axios.get(URL);
    logData(API_TAG, JSON.stringify({ response: apiResponse.data }));
    if (apiResponse.data.status === 999) {
      alert(apiResponse.data.message);
      window.location.reload();
      return null;
    } else {
      return apiResponse.data;
    }
  } catch (e) {
    logData(API_TAG, JSON.stringify({ error: e }));
    console.error(
      'e.response.data.status::',
      e.response ? e.response.status : 'Response is null',
      e.response ? e.response.data : 'Response is null'
    );
    if (e.response && e.response.status === '401') {
      return ERROR_401;
    } else {
      return e;
    }
  }
};

export const logData = (key, value) => {
  console.log(key, value);
};
