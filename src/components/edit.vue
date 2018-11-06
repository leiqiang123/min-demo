<template>
    <div>
        <quill-editor
            v-model="contentHtml"
            ref="myQuillEditor"
            :options="editorOption"
            @change="editChange">
        </quill-editor>
    </div>
</template>

<script>
    import axios from 'axios'

    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    import {quillEditor, Quill} from 'vue-quill-editor'
    import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
    Quill.register('modules/ImageExtend', ImageExtend)

    export default {
        components: {
            quillEditor
        },
        props: {
            message: {
                type:String
            }
        },
        data () {
            return {
                contentHtml:this.message,
                token:'',
                editorOption:{
                    modules: {
                        ImageExtend: {
                            loading: true,
                            name: 'file',
                            action: 'https://upload-z1.qiniup.com',
                            response: (res) => {
                                return res.url
                            },
                            change: (xhr, formData) => {
                            // xhr.setRequestHeader('myHeader','myValue')
                            formData.append('token', this.token)
                            }
                        },
                        toolbar: {
                            container: container,
                            handlers: {
                                'image': function () {
                                    QuillWatch.emit(this.quill.id)
                                }
                            }
                        }
                    }
                }
            }
        },
        methods: {
            //获取图片token
            getToken() {
                axios.get('http://upload.yaojunrong.com/getToken').then(res => {
                    this.token = res.data.data
                })
            },
            editChange({quil, html, text}) {
                this.contentHtml = html
                this.$emit('toContent',this.contentHtml)
                // this.newsData.contentText = text
            }
        },
        created() {
            this.getToken()
        },
        watch: {
            content(val) {
                this.contentHtml = val
            }
        }
    }
</script>

<style scoped>

</style>