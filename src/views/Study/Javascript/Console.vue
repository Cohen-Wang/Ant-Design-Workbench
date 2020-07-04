<template>
    <div class="panel panel-primary">
        <div class="panel-heading">
            <div class="panel-title">Console</div>
        </div>
        <div class="panel-body panel-body-box">
            <a-button-group>
                <a-button @click="log">console.log(obj)</a-button>
                <a-button @click="info">console.info(obj)</a-button>
                <a-button @click="dir">console.dir(obj)</a-button>
                <a-button @click="dirxml">console.dirxml(obj)</a-button>
                <a-button @click="debug">console.debug(obj)</a-button>
                <a-button @click="warn">console.warn(obj)</a-button>
                <a-button @click="error">console.error(obj)</a-button>
                <a-button @click="count">console.count(obj)</a-button>
                <a-button @click="assert">console.assert(obj)</a-button>
                <a-button @click="assert">console.assert(obj)</a-button>
                <a-button @click="groupCollapsed">console.groupCollapsed(obj)</a-button>
            </a-button-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Console",
        data() {
            return {
                obj: {
                    name: 'cohen',
                    age: 23,
                    school: [
                        '西华师范大学',
                        '四川大学'
                    ]
                }
            }
        },
        methods: {
            log() {
                console.log(this.obj)
            },
            info() {
                console.info(this.obj)
            },
            dir() {
                console.dir(this.obj)
            },
            dirxml() {
                console.dirxml(this.obj)
            },
            debug() {
                console.debug(this.obj)
            },
            warn() {
                console.warn(this.obj)
            },
            error() {
                console.error(this.obj)
            },
            count() {
                console.count(this.obj)
            },
            assert() {
                console.assert(this.obj)
            },
            groupCollapsed() {
                console.groupCollapsed() ;
                console.dir(this.obj);
                console.groupEnd();
            },
        }
    }
</script>

<style scoped>

</style>