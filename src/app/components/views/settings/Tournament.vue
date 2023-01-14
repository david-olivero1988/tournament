<template>
    <div>
        <!-- <table-material :data="data" :columns="columns"></table-material> -->

        <element-table :columns="columns" :data="data"></element-table>
    </div>
</template>
<script>
import MaterialTable from '../../utilities/MaterialTable.vue';
import ElementTable from '../../utilities/ElementTable.vue';

export default {
    components: {
        MaterialTable,
        ElementTable
    },
    data() {
        return {
            data: [
                {
                    column: 'column',
                    label: 'Column'
                }
            ],
            columns: [
                {
                    label: 'ID',
                    property: 'column',
                    sort: false
                }
            ]

        }
    },
}
</script>
