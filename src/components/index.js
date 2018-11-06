import edit from './edit.vue'
// 这里是重点
const richEdit = {
    install: function(Vue){
        Vue.component('richEdit',edit)
    }
}

// 导出组件
export default richEdit