const dev = false;

export const baseUrl = 'https://xprepo-backend.herokuapp.com';
export const testUrl = 'http://localhost:8000';
export const url = dev ? testUrl : baseUrl;

const getCategoryPos = '/getCategories';
const postReviewPos = '/createSubject';
export const getSubjects = '/getSubjects';

export const getCategory = url.concat(getCategoryPos);
export const postReview = url.concat(postReviewPos);
