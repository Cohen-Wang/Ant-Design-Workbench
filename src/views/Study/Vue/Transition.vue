<template>
    <div class="container">
        <a-button type="primary" @click="handleClick">点击</a-button>

        <div class="flex">
            <!-- 无过渡效果 -->
            <div v-if="isShow" class="box">无过渡效果</div>
            <!-- 有过渡效果 -->
            <transition name="fade"
                        appear
                        :duration="1000"
                        enter-active-class="animated fadeInDown"
                        leave-active-class="animated bounceOutRight"
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @after-enter="afterEnter"
                        @enter-cancelled="enterCancelled"
                        @before-leave="beforeLeave"
                        @leave="leave"
                        @after-leave="afterLeave"
                        @leave-cancelled="leaveCancelled"
            >
                <div v-if="isShow" class="box">有过渡效果1</div>
            </transition>

            <!--<transition name="fadeIn" duration="3000">
                <div v-if="isShow" class="box">有过渡效果2</div>
            </transition>

            <transition name="fadeIn" :duration="{ enter: 1000, leave: 2000 }">
                <div v-if="isShow" class="box">有过渡效果3</div>
            </transition>-->
        </div>
    </div>
</template>
<script>
    export default {
        // name: "transition",// ❤❤❤❤ 这个名字不能写成transition，否则会递归调用，导致栈溢出
        name: "transition-study",
        data() {
            return {
                isShow: false,
            }
        },
        methods: {
            handleClick() {
                this.isShow = !this.isShow
            },


            // --------
            // 进入中
            //动画进入前
            // --------
            beforeEnter: function (el) {
                console.log('beforeEnter')
            },
            // 此回调函数是可选项的设置
            // 与 CSS 结合时使用
            //动画进入时
            enter: function (el, done) {
                console.log('enter')
                done()
            },
            //动画进入后
            afterEnter: function (el) {
                console.log('afterEnter')
            },
            //动画进入完成
            enterCancelled: function (el) {
                console.log('enterCancelled')
            },
            // --------
            // 离开时
            // --------
            beforeLeave: function (el) {
                console.log('beforeLeave')
            },
            // 此回调函数是可选项的设置
            // 与 CSS 结合时使用
            leave: function (el, done) {
                console.log('leave')
                done()
            },
            afterLeave: function (el) {
                console.log('afterLeave')
            },
            // leaveCancelled 只用于 v-show 中
            leaveCancelled: function (el) {
                console.log('leaveCancelled')
            }
        }
    }
</script>

<style lang="less" scoped>
    .container {
        padding: 10px;

        .box {
            width: 200px;
            height: 200px;
            background-color: #FF456E;
            margin-right: 10px;
        }
    }

    .flex {
        display: flex;
    }
</style>