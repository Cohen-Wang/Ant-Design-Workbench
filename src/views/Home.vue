<template>
    <div class="home">
        <a-empty
                image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                :image-style="{
      height: '60px',
    }"
        >
            <span slot="description"> Customize <a href="#API">Description</a> </span>
            <a-button type="primary">
                Create Now
            </a-button>
        </a-empty>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
    .home{
        vertical-align: middle;
    }
</style>