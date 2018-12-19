<template>
    <div class="container">
        <h3>Add Quote:</h3>
        <form>
            <textarea 
                name="quote" 
                id="quote"  
                rows="3"
                v-model="quote">
            </textarea>
            <br>
            <div class="content-center">
                <button @click.prevent="createQuote"
                    class="content-center"
                >Add Quote</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'NewQuote',
    props:{
        quotes: Array
    },
    data(){
        return{
            quote: ''
        }
    },
    methods:{
        createQuote(){
            if(this.quote != ''){
                if(this.quotes.length<10){
                    this.quotes.push(this.quote)
                    this.quote = ''   
                }else{
                    alert('You can add only 10 quotes. Please delete some quotes to add new quotes')
                }
            }else{
                alert('Enter some quote to add up in your list');
            }
        }
    }
}
</script>

<style scoped>
    h3{
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 18px;
    }
    textarea{
        width: 95%;
        font-size: 20px;
        font-family: Arial, Helvetica, sans-serif;
        margin: 10px;
    }
    button{
        border: 1px solid #8BC34A;
        color: #827717;
        background-color: #DCEDC8;
        font-size: 25px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        border-radius: 5px;
        padding: 5px;
        
    }
    button:hover{
        background-color: #827717;
        color: whitesmoke;
        transition: background-color 1s, color 1s;
    }
    .content-center{
        width: 200px;
        margin: 0 auto;
        margin-bottom: 10px;
    }
</style>
