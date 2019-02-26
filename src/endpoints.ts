const baseUrl = 'https://xprepo-backend.herokuapp.com';
const testUrl = 'http://localhost:8000';
const getCategoryPos = '/getCategories';
const postReviewPos = '/createSubject';

export const getCategory = testUrl.concat(getCategoryPos);
export const postReview = testUrl.concat(postReviewPos);
