<template>
    <div class="container">
        <app-quote 
            v-for="(quote, index) in quotes" 
            :key="index"
            @click.native="deleteQuote(index)">
            <label>
                <div class="row-quote">
                    "{{ quote }}"
                </div>
            </label>
        </app-quote>
    </div>
</template>

<script>
import Quote from './Quote.vue'

export default {
    name: 'QuoteGrid',
    props:['quotes'],
    components:{
        appQuote: Quote
    },
    methods:{
        deleteQuote(index){
            this.$emit('quoteDeleted', index)
        }
    }
}
</script>

<style scoped>
 
</style>
