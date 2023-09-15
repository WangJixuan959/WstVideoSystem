<template>
    <div>
        <Navbar />
        <div>
            <el-breadcrumb :separator-icon="ArrowRight" class="breadcrumb">
                <el-breadcrumb-item>{{ scene }}</el-breadcrumb-item>
                <el-breadcrumb-item>{{ videoId }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div>
            <el-row>
                <el-col :span="12" type="flex" align="middle" style="align-self: center;">
                    <div>
                        <h1>原始视频</h1>
                        <VideoPlayer />
                    </div>
                </el-col>
                <el-col :span="12" type="flex" align="middle" style="align-self: center;">
                    <div>
                        <h1>事件发生</h1>
                        <img
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
                    </div>
                </el-col>
            </el-row>
            <el-row class="eventList">
                <el-col :span="24" type="flex" align="middle" style="align-self: center;">
                    <h1>事件发生列表</h1>
                    <el-table :data="tableData" stripe style="width: 800px">
                        <el-table-column prop="time" label="发生时间" width="400" header-align="center" align="center" />
                        <el-table-column prop="type" label="事件类型" width="400" header-align="center" align="center" />
                    </el-table>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts" setup>
import VideoPlayer from '../components/VideoPlayer.vue';
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
var scene = ''
switch (String(route.params.sceneType).split('_')[1]) {
    case '0':
        scene = "课堂"
        break;
    case '1':
        scene = "厨房"
        break;
    case '2':
        scene = "科技馆"
        break;
    case '3':
        scene = "校园"
        break;
    default:
        break;
}
const videoId = route.params.videoId

const tableData = [
    {
        time: '00:07',
        type: '类型1',
    },
    {
        time: '00:47',
        type: '类型2',
    },
    {
        time: '01:22',
        type: '类型3',
    },
    {
        time: '01:50',
        type: '类型4',
    },
]
</script>

<style lang="scss" scoped>
.el-row {
    margin: 10px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.eventList {
    padding: 50px 0;
}

.breadcrumb {
    font-size: 40px;
    font-family: 'Times New Roman', 'Courier New', Times, serif;
    padding: 10px 60px;
}

h1 {
    text-align: center;
    font-weight: 500;
    font-family: 'Times New Roman', Times, serif;
    font-size: 35px;
    padding-top: 0;
}
</style>