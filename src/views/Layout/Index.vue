<template>
    <div class="index">
        <!-- 头部 -->
        <NavHeader />
        <!-- 内容 -->
        <LayoutContent>
            <LayoutSidebar slot="left"></LayoutSidebar>
            <router-view slot="content"></router-view>
        </LayoutContent>
    </div>
</template>

<script>
    import NavHeader from "./NavHeader"
    import LayoutContent from "./LayoutContent"
    import LayoutSidebar from "./LayoutSidebar"

    export default {
        name: "home",
        components: {
            NavHeader,
            LayoutContent,
            LayoutSidebar
        },
        methods: {

        }
    }
</script>

<style scoped>
    .index {
        width: 100%;
        height: 100%;
    }
</style>