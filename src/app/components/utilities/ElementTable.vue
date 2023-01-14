<template>
<div>
    <el-card class="box-card">
        <div slot="header"
             class="clearfix">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-input
                        placeholder="Please Input"
                        size="small"
                        suffix-icon="el-icon-search"
                        v-model="searchTable">
                         <el-button slot="prepend" @click="refresh()" icon="el-icon-refresh"></el-button>
                    </el-input>
                </el-col>
                <slot name="table-head">
                </slot>
            </el-row>
        </div>
        <div class="text item">
            <el-table :data="data"
                      width="100%"
                      v-loading="loading"
                      ref="elementTable"
                      stripe
                      fit
                      style="width: 100%"
                      @row-click="clickRow"
                      @selection-change="handleSelectionChange">
                <!-- <md-table-empty-state md-label="No users found" :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
                    <md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>
                </md-table-empty-state> -->
                <!-- <el-table-column fixed
                                 type="selection"
                                 width="55">
                </el-table-column> -->
                <div v-for="(data, index) in columns">
                    <el-table-column sortable="custom"
                                    :prop="data.property"
                                    :label="data.label"
                                    :sortable="data.sortable ? false: 'custom'"
                                    :width="data.width"
                                    :min-width="data.minWidth"
                                    :fixed="data.fixed"
                                    :align="data.align ? data.align: 'left'"
                                    :type="data.type ? data.type : '-'"
                                    :class-name="data.class ? data.class : ''"
                                    show-overflow-tooltip>
                                    <span slot-scope="scope">
                                        <template v-if="typeof scope.row[data.property] == 'object' &&  scope.row[data.property] != null" >
                                            <component @evento="evento" v-bind:is="scope.row[data.property].component" v-bind="scope.row[data.property].properties"></component>
                                        </template>
                                        <span v-else :title="scope.row[data.property]" v-html="scope.row[data.property]" ></span>
                                    </span>
                    </el-table-column>
                </div>
            </el-table>
        </div>
    </el-card>
</div>
</template>
<script>
export default
{
    props:
    {
        columns:
        {
            type: Array,
            default: function () {
                return [];
            }
        },
        data:
        {
            type: Array,
            default: function () {
                return [];
            }
        },
        url:
        {
            type: String,
            default: '',
        }
    },
    data()
    {
        return {
            searchTable: '',
            loading: false,
            columns: this.data,
            urlTable: this.url,
            dataTable: [],
            multipleSelection: []
        }
    },

    mounted()
    {

        this.getData();
    },

    methods:
    {
        refresh() {

            this.getData();
        },
        /* check with row*/
        clickRow(row, event, column) {
            this.$refs.elementTable.toggleRowSelection(row);
        },
        getData() {
            console.log('trea data');
            // this.loading = true;
            // this.$http.get(this.urlTable)
            //     .then(
            //         resolve => {
            //             this.dataTable = resolve.data;
            //             this.loading = false;
            //         },
            //         reject => {
            //             this.loading = false;

            //         });
        },
        toggleSelection(rows)
        {
            if (rows)
            {
                rows.forEach(row =>
                {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            }
            else
            {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val)
        {
            this.multipleSelection = val;
            this.$emit('rowSelected', this.multipleSelection);
        }
    },
    watch: {
    }
}

</script>
