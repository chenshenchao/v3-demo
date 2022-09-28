<template>
    <div>
        <h1>Home</h1>
        <div class="logo-group">
            <img src="../assets/vue.svg"/>
            <img src="../assets/vite.svg"/>
            <img src="../../public/v3.svg"/>
        </div>
        <ul class="link-group">
            <li v-for="row in rows">
                <router-link :to="row.path">{{row.title}}</router-link>
                <router-link :to="row.alias">[html]</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { routes } from '../route';
import { startCase } from 'lodash';

const rows = routes
    .filter(i => i.alias !== '/home.html' && i.alias !== '/not-found.html')
    .map(i => Object.assign(i, { title: startCase(i.path)}));

</script>

<style lang="scss" scoped>
.logo-group {
    display: flex;

    & > img {
        margin: 4px;
        padding: 4px;
        border: none;
        border-radius: 4px;
        box-shadow: 4px 4px 4px #4444;
    }
}

.link-group {
    li {
        list-style: none;
    }
}
</style>