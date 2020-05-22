import Vue from 'vue';
export const loadData = ({ commit }) => {
  Vue.$http
    .get('https://d-vuejs-demo.firebaseio.com/data.json')
    .then((res) => {
      const data = res.data;
      if (data) {
        const stocks = data.stocks;
        const funds = data.funds;
        const stockPorfolio = data.stockPorfolio;
        const portfolio = {
          stockPorfolio,
          funds,
        };
        commit('SET_STOCK', stocks);
        commit('SET_PORTFOLIO', portfolio);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
