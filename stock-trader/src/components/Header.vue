<template>
  <!--Navbar -->
  <nav class="mb-1 navbar navbar-expand-lg navbar-dark default-color">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent-333"
      aria-controls="navbarSupportedContent-333"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" to="/portfolio" activeClass="nav-item active">
          <a class="nav-link active">Portfolio</a>
        </router-link>
        <router-link tag="li" to="/stocks" activeClass="nav-item active">
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      <ul class="navbar-nav ml-auto nav-flex-icons">
        <li class="nav-item">
          <strong class="nav-link">Funds: {{funds | currency }}</strong>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="endDay">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="navbarDropdownMenuLink-333"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Save & Load</a>
          <div
            class="dropdown-menu dropdown-menu-right dropdown-default"
            aria-labelledby="navbarDropdownMenuLink-333"
          >
            <a class="dropdown-item" href="#" @click.prevent="saveData()">Save Data</a>
            <a class="dropdown-item" href="#" @click.prevent="loadData()">Load Data</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  <!--/.Navbar -->
</template>
<script>
import { mapActions } from "vuex";
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    async saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPorfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      try {
        await this.$http.put(
          "https://d-vuejs-demo.firebaseio.com/data.json",
          data
        );
      } catch (error) {
        console.log(error);
      }
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>

<style scoped>
.nav li.router-link-active a,
.nav li.router-link-exact-active a {
  color: white;
  font-weight: 500;
}
</style>>
