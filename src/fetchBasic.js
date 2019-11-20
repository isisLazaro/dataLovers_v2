import { CHARACTER_ENDPOINT } from "./constants.js";
import { createPagination, createCards } from "./util.js";

const fetchApi = async urlPage => {
  const url = `${CHARACTER_ENDPOINT}${urlPage}`;
  try {
    // https://developers.google.com/web/updates/2015/03/introduction-to-fetch#fetch
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

const loadPage = async urlPage => {
  // createCards([]);
  const { info = {}, results = [] } = await fetchApi(urlPage);

  createCards(results);
  createPagination(info, urlPage);
};

export default loadPage;
