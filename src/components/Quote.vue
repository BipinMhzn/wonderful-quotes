<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .row-quote{
        border: 2px solid #2196F3;
        background-color: #B3E5FC;
        padding: 10px 20px;
        margin: 20px;
        border-radius: 5px;
        font-family:Arial, Helvetica, sans-serif;
        font-size: 18px;
        text-align: center;
        color: #1A237E;
    }
    .row-quote:hover{
        font-size: 20px;
        border: 2px solid #33691E;
        background-color: #C8E6C9;
        color: #4CAF50;
        transition: font-size 1s, color 1s, border 1s, background-color 1s;
    }
    .row{
        display: block;
    }
</style>
