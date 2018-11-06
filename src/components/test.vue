<template>
    <div>
        <div>{{content}}</div>
    </div>
</template>

<script>
    export default {
        props:{
            message:{
                type:String
            }
        },
        data() {
            return {
                content:this.message
            }
        }
    }
</script>

<style scoped>

</style>