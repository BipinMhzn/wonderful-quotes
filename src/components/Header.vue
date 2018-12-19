<template>
    <div class="container">
        <h1>Quotes</h1>
        <div class="progress"
            v-if="quotesCount>0">
            <div 
                class="row"
                :style="{width: (quotesCount/maxQuotes)*100 + '%'}">
                {{quotesCount}}/{{maxQuotes}}    
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'quotesCount',
        'maxQuotes'
    ]
}
</script>

<style scoped>
    .progress{
        background-color: lightgrey;
        width: 100%;
        border-radius: 5px;
    }
    .row{
        background-color: blue;
        color: white;
        text-align: center;
        font-size: 18px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        padding: 10px;
        border-radius: 5px;
    }
</style>
