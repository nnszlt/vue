<template>
    <yd-cell-group title="单选">
        <yd-cell-item type="radio">
            <span slot="left">单选一</span>
            <input slot="right" type="radio" value="Lili" v-model="picked"/>
        </yd-cell-item>

        <yd-cell-item type="radio">
            <span slot="left">单选二</span>
            <input slot="right" type="radio" value="Lucy" v-model="picked"/>
        </yd-cell-item>

        <yd-cell-item>
            <span slot="left">选中的值：</span>
            <span slot="right">{{picked}}</span>
             <yd-switch slot="right"></yd-switch>
        </yd-cell-item>
    </yd-cell-group>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                picked: 'Lucy'
            }
        }
    }
</script>