var API_BASE = 'http://iklch.ezagoo.com:16111/';

const CONFIG = {
  API_URL: {
    GET_INDEX: API_BASE,
    GET_CamperRecommend: API_BASE + 'motorHomesCar/getCamperRecommend.ashx',
    GET_ARTICLE: API_BASE + '&p=',
    GET_CATEGORY: API_BASE + '&cat=',
  }
}

module.exports = CONFIG;
