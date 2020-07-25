<template>
    <div id="app">
            {{msg}}
    </div>
</template>


<script>
    export default {
        name: "App",
        data: function() {
            return {
                msg: 'hello vue!'
            }
        }
    }
</script>