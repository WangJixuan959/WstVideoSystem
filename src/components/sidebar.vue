<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="sidebar.collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items" :key="item.index">
                <el-menu-item :index="item.index" v-permiss="item.permiss">
                    <el-icon>
                        <component :is="item.icon"></component>
                    </el-icon>
                    <template #title><span>{{ item.title }}</span></template>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSidebarStore } from '../stores/sidebar';
import { useRoute } from 'vue-router';

const items = [
    {
        icon: 'Odometer',
        index: '/scene_0/list',
        title: '课堂表现',
        permiss: '1',
    },
    {
        icon: 'Setting',
        index: '/scene_1/list',
        title: '家庭劳务',
        permiss: '1',
    },
    {
        icon: 'PieChart',
        index: '/scene_2/list',
        title: '科技实验',
        permiss: '1',
    },
    {
        icon: 'Calendar',
        index: '/scene_3/list',
        title: '校园活动',
        permiss: '1',
        // subs: [
        //     {
        //         index: '/id_3/analyze',
        //         title: '分析',
        //         permiss: '2',
        //     }
        // ],
    }
];

const route = useRoute();
const onRoutes = computed(() => {
    return route.path;
});

const sidebar = useSidebarStore();
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
    width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}


.sidebar>ul {
    height: 100%;
}
</style>
