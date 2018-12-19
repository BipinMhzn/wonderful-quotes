<template>
    <div id="app">
      <app-header
        :quotes-count="quotes.length"
        :max-quotes="maxQuotes"
      ></app-header>
      
      <app-new-quote
        :quotes = "quotes"
      ></app-new-quote>
      <hr>
      <app-quote-grid
        :quotes="quotes"
        @quoteDeleted= "deleteQuote"
      ></app-quote-grid>
  
      <div class="row">
        <p><strong>Info: </strong>Click on a 'Quote' to delete it</p>
      </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import NewQuote from './components/NewQuote.vue'
import QuoteGrid from './components/QuoteGrid.vue'

export default {
  name: 'app',
  components:{
    appHeader: Header,
    appNewQuote: NewQuote,
    appQuoteGrid: QuoteGrid
  },
  data(){
    return{
      quotes:[
        'It always seems impossible until it is done',
        'The past cannot be changed. The future is yet in your power',
        'Life is 10% what happens to you and 90% how you react to it'
      ],
      maxQuotes: 10    
    }
  },
  methods:{
    deleteQuote(index){
      this.quotes.splice(index,1);
    }
  }    
}
</script>

<style scoped>
  .row{
    width: 100%;
    border:1px solid #f44336;
    background-color: #ffcdd2;
    margin: 40px 0 10px 0;
  }
  p{
    width: 300px;
    margin: 0 auto;
    color: #f44336;
    font-size: 18px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-style: italic;
    padding: 5px;
  }
</style>
