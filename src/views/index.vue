<template>
    <div>
        <!-- <h1>首页</h1>
        <richEdit v-bind:message="content" @changeContent="getContent"></richEdit> -->
        <!-- <richEdit v-model="content" @toContent="getContent"></richEdit> -->
        <!-- <button @click="handleContent">daying</button> -->
        <pull-to :top-load-method="refresh" :bottom-load-method="getMoreData">
            <ul v-for="(item, index) in dataList" :key="index">
                <li>{{ item.title }}</li>
            </ul>
        </pull-to>
        <div @click="handleContent" style="margin-top:50px;">daying</div>
        <select v-model="value">
            <option :value="index" v-for="(item, index) in arr" :key="index">{{item}}</option>
        </select>
    </div>
</template>

<script>
    // import richEdit from '../components/edit'
    import PullTo from 'vue-pull-to'
    import axios from 'axios'
    export default {
        components: {
            // richEdit
            PullTo
        },
        data() {
            return {
                content:'<h1>无敌</h1>',
                dataList: [],
                page:1,
                total:0,
                rows:10,
                arr:[
                    '',
                    '无敌',
                    '无敌',
                    '无敌',
                    '无敌',
                    '无敌',
                    '无敌',
                    '无敌'
                ],
                value:''
            }
        },
        methods: {
            getContent(val) {
                // console.log(val)
                this.content = val
            },
            handleContent() {
                console.log(this.value)
                // axios.get('http://211.67.177.56:8080/hhdj/news/newsList.do',{
                //     page:1,
                //     rows:10,
                //     type:0
                // }).then((res) => {
                //     console.log(res)
                // })
            },
            refresh(loaded) {
                axios.get(`http://211.67.177.56:8080/hhdj/news/newsList.do?page=1&rows=10&type=0`).then((res) => {
                    this.dataList = res.data.rows
                    this.page = 1
                    loaded('done')
                })
            },
            getData() {
                axios.get(`http://211.67.177.56:8080/hhdj/news/newsList.do?page=${this.page}&rows=10&type=0`).then((res) => {
                    // console.log(res)
                    this.dataList = res.data.rows
                    this.total = res.data.total
                })
            },
            getMoreData(loaded) {
                this.page = this.page + 1
                console.log(this.page)
                console.log(this.total)
                if(this.page*this.rows >= this.total){
                    loaded('done')
                }else{
                    axios.get(`http://211.67.177.56:8080/hhdj/news/newsList.do?page=${this.page}&rows=10&type=0`).then((res) => {
                        console.log(res)
                        this.dataList = this.dataList.concat(res.data.rows)
                        // console.log(this.dataList)
                        loaded('done')
                    })
                }
            }
        },
        created() {
            this.getData()
        },
        mounted() {
            this.$nextTick(() => {
                this.arr.shift()
            })
        }
    }
</script>

<style scoped>

</style>