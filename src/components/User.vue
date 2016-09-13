<template>
    <div>
        <img src="../assets/logo.png">
        {{msg}}
    </div>
</template>
<style scoped>
    img{
        width:80px;
    }
</style>
<script>
    export default {
        data () {
            return {
                msg:"User"
            }
        }
    }
</script>