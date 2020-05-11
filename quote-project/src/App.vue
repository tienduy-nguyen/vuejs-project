<template>
  <div id="app">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes" ></app-header>
    <app-new-quote @quoteAdded = "addNewQuote($event)"></app-new-quote>
    <app-quote-grid  :quotes='quotes' @quoteDeleted = "deleteQuote($event)"/>
    <div class="row footer">
      <span class="footer-text">Tip: click on the quote to delete</span>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid";
import NewQuote from './components/newQuote.vue';
import Header from "./components/header.vue";

export default {
  name: "App",
  data() {
    return {
      quotes: ["Just a quote to see something"],
      maxQuotes: 10
    };
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header
  },
  methods:{
    addNewQuote(quote){
      if(quote){
        if(quote.trim().length > 0 && this.quotes.length < this.maxQuotes) this.quotes.push(quote.trim());
      }
    },
    deleteQuote(index){
      if(index >0) this.quotes.splice(index,1);
      console.log('deleted', index)
    }
  }

};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer {
  display: block;
  background: rgba(102, 191, 226, 0.4);
  text-align: center;
  height: 40px;
  width: 100%;
  align-items: center;
}
.footer-text {
  display: inline-block;
  margin: 0 auto;
  height: 100%;
  padding: 5px 10px;
  color: rgb(3, 0, 180);
}
</style>
