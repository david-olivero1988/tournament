<template>
<div>
    <md-table v-model="data" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
        <md-table-toolbar>
            <div class="md-toolbar-section-start">
                <h1 class="md-title">{{tableTitle}}</h1>
            </div>

            <md-field md-clearable class="md-toolbar-section-end">
                <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
            </md-field>
        </md-table-toolbar>

        <md-table-empty-state md-label="No users found" :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
            <md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>
        </md-table-empty-state>

        <md-table-row slot="md-table-row" slot-scope="{ item }">
            <div v-for="column in columns">
                <md-table-cell :md-label="column.label" :md-sort-by="item.sort" >{{ item.property }}</md-table-cell>
            </div>
        </md-table-row>
    </md-table>
</div>
</template>

<script>
const toLower = text => {
    return text.toString().toLowerCase()
}

const searchByName = (items, term) => {
    if (term) {
        return items.filter(item => toLower(item.name).includes(toLower(term)))
    }

    return items
}

export default {
    name: 'TableSearch',
    props: {
        columns: [Array, Object],
        data: {
            type: [Array, Object],
            default: function() {
                return [];
            }
        },
        tableTitle: {
            type: String,
            default: 'Title'
        }
    },
    data: () => ({
        search: null,
        searched: [],
        users: []
    }),
    methods: {
        newUser() {
            window.alert('Noop')
        },
        searchOnTable() {
            this.searched = searchByName(this.users, this.search)
        }
    },
    created() {
        this.searched = this.users
    }
}

</script>

<style lang="scss" scoped>
.md-field {
    max-width: 300px;
}

.md-table {
    display: flex !important;
    flex-flow: column wrap !important;
    overflow-x: auto !important;
}
</style>
