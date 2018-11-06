<template>
    <div class="container">
        <header>评论</header>
        <!-- <div style="height:45px;"></div> -->
        <div class="main" ref="main">
            <ul>
                <li v-for="(item, index) in arr" :key="index">
                    {{item}}
                </li>
            </ul>
        </div>
        <div class="box">
            <input type="text" v-model="text" @keyup.enter="handleClick">
            <button @click="handleClick">发送</button>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        data() {
            return {
                text:'',
                BS:'',
                arr:[
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                    '找工作',
                ]
            }
        },
        methods: {
            handleClick() {
                this.arr.push(this.text)
                this.text = ''
                this.$nextTick(() => {
                    this.BS.refresh()
                    let scrollTop = this.$refs.main.scrollHeight - this.$refs.main.offsetHeight
                    this.BS.scrollTo(0, -scrollTop, 300)
                })
            },
            initScroll() {
                this.$nextTick(() => {
                    let main = this.$refs.main
                    this.BS = new BScroll(main, {mouseWheel:true, scrollbar:true})
                })
            }
        },
        mounted() {
            document.documentElement.style.overflow = "auto"
            document.getElementById('app').style.overflow = "auto"
            document.body.style.overflow = "auto"
            this.initScroll()
        },
        beforeDestroy() {
            document.documentElement.style.overflow = "auto"
            document.getElementById('app').style.overflow = "auto"
            document.body.style.overflow = "auto"
        }
    }
</script>

<style>
html{
    height: 100%;
    overflow: hidden;
}
body{
    height: 100%;
    overflow: hidden; 
}
#app{
    height: 100%;
    overflow: hidden;
}
</style>


<style scoped lang="less">

.container{
    height: 100%;
    overflow: hidden;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
    header{
        // position: fixed;
        // top: 0;
        // width: 100%;
        height: 45px;
        text-align: center;
        background-color: red;
        color: #fff;
        font-size: 20px;
        line-height: 45px;
    }
    .main{
        flex: 1;
        // overflow-y: scroll;
        // -webkit-overflow-scrolling: touch;
        background: #f0c78e;
        overflow: hidden;
        li{
            list-style: none;
            height: 50px;
            line-height:50px;
            padding-left: 20px;
            color: #fff;
        }
    }
    .box{
        display: flex;
        // justify-content: space-between;
        input{
            flex: 1;
            display: block;
            height: 40px;
            line-height: 40px;
            padding: 0 10px;
            border: 1px solid #d7d7d7;
            // width: 80%;
            -webkit-appearance:none;
            outline: none;
        }
        button{
            height: 42px;
            width: 20%;
            outline: none;
        }
    }
}
</style>