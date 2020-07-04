<template>
    <div class="panel panel-primary">
        <div class="panel-heading">
            <div class="panel-title">category</div>
        </div>
        <div class="panel-body panel-body-box">
            <div id="pox" style="height: 400px;"></div>
        </div>
    </div>
</template>

<script>
    import ECharts from 'ECharts'

    // 模拟数据
    const option = {
        xAxis: {
            type: 'category',
            position: 'bottom',// 放在什么位置，默认：'bottom'
            offset: 0,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
        },
        series: [{
            name:'最高气温',
            type: 'line',
            color : ['green'],
            data: [820, 932, 901, 934, 1290, 1330, 1320],
        }]
    }

    export default {
        name: "Category",
        created() {
            console.log(ECharts)
        },
        // mounted 是关键
        mounted : function () {
            this.getRetention();
            //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
            window.addEventListener('resize',function() {myChart.resize()});
        },
        methods : {
            getRetention : function () {
                let myChart = ECharts.init(document.getElementById('pox'));
                myChart.setOption(option);
            },
        },
    }
</script>

<style scoped>

</style>