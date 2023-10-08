// ! Define all URLs here

// ! Start - Lists

// * Start - Prefix
const prefix = '/api/v1';
// * End - Prefix

// * Start - URLs
const listUrl = 'lists';
// * End - URLs

// * Start - Tags endpoints
export const ListURL = {
  get: `${prefix}/${listUrl}`,
  post: `${prefix}/${listUrl}`,
  put: `${prefix}/${listUrl}`,
  getById: (id: number) => `${prefix}/${listUrl}/${id}`,
  delete: (id: number) => `${prefix}/${listUrl}/${id}`,
};
// * End - Tags endpoints

// ! End - Lists
