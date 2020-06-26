<template>
    <div class="index">
        <!-- 左侧 -->
        <div class="left">
            <div class="logo">
                <a @click="$router.push('/')">
                    <img src="@/assets/image/logo.png" alt="">
                </a>
            </div>
            <!-- sidebar -->
            <LayoutSidebar class="sidebar" />
        </div>
        <!-- 右侧 -->
        <div class="right">
            <LayoutContent>
                <NavHeader slot="top"></NavHeader>
                <router-view slot="content"></router-view>
            </LayoutContent>
        </div>
    </div>
</template>

<script>
    import NavHeader from "./NavHeader"
    import LayoutContent from "./LayoutContent"
    import LayoutSidebar from "./LayoutSidebar"

    export default {
        name: "index",
        components: {
            LayoutSidebar,
            NavHeader,
            LayoutContent,
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
    .index {
        width: 100%;
        height: 100%;
        display: flex;

        .left {
            min-width: 200px;
            max-width: 350px;
            width: 350px;
            height: 100%;

            .logo {
                /*background: url("../../assets/image/logo.png") center center no-repeat #001529;*/
                background-color:  #001529;
                height: 64px;
                text-align: center;
                line-height: 64px;
            }

            .sidebar {
                height: calc(100% - 64px);
            }
        }

        .right {
            width: 100%;
            height: 100%;
        }
    }
</style>