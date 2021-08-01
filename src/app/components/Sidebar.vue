<template>
<md-list>
    <div v-for="option in data">
        <router-link :to="'/' + option.path">
            <md-list-item>
                <md-icon>{{option.icon}}</md-icon>
                <span class="md-list-item-text">{{option.name}}</span>
            </md-list-item>
        </router-link>

    </div>

</md-list>
</template>
<script>
import { sidebar } from '../configs/sidebar.js';


export default {
    data() {
        return {
            data: sidebar
        }
    },
}
</script>
