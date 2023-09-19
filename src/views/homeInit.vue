<template>
    <v-header />
    <v-sidebar />
    <div class="content-box" :class="{ 'content-collapse': sidebar.collapse }">
        <v-tags></v-tags>
        <div class="content">
        
            <router-view v-slot="{ Component }">
                <transition name="move" mode="out-in">
                    <!-- keep-alive缓存以前的组件实例，以便在同一个组件之间来回转换时提高性能 -->
                    <keep-alive :include="tags.nameList">
                        <component :is="Component"></component>
                    </keep-alive>
                </transition>
            </router-view>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useSidebarStore } from '../stores/sidebar';
import { useTagsStore } from '../stores/tags';
import vHeader from '../components/header.vue';
import vSidebar from '../components/sidebar.vue';
import vTags from '../components/tags.vue'; //子页面导航栏

const sidebar = useSidebarStore();
const tags = useTagsStore();
</script>


<style>
/* 字体优先级 */
body {
    font-family: 'PingFang SC', "Helvetica Neue", Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
}


/* 去除链接的下划线 */
a {
    text-decoration: none
}

.content-box {
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #f0f0f0;
}

.content {
    width: auto;
    height: 100%;
    padding: 10px;
    overflow-y: scroll;
    box-sizing: border-box;
}
.content-collapse {
    left: 65px;
}
</style>