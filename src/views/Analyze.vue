<template>
    <div>
        <div>
            <el-breadcrumb :separator-icon="ArrowRight" class="breadcrumb">
                <el-breadcrumb-item>{{ scene }}</el-breadcrumb-item>
                <el-breadcrumb-item>{{ videoId }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div>
            <el-row :gutter="20">
                <el-col type="flex" align="middle" style="align-self: center;">
                    <el-card shadow="hover" class="mgb20" style="height:auto">
                        <div>
                            <p>视频信息</p>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="14" type="flex" align="middle">
                    <el-card shadow="hover" style="width: 800px; height: 600px">
                        <div>
                            <p>原始视频</p>
                            <VideoPlayer />
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="10" type="flex" align="middle" style="align-self: center;">
                    <el-card shadow="hover" style="width: 500px; height: 300px">
                        <div>
                            <p>事件发生截图</p>
                            <img
                                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
                        </div>
                    </el-card>
                    <el-card shadow="hover" style="width: 500px; height: 300px">
                        <p>事件发生列表</p>
                        <el-table :data="tableData" stripe style="width: 500px">
                            <el-table-column prop="time" label="发生时间" width="100" header-align="center" align="center" />
                            <el-table-column prop="type" label="事件类型" width="400" header-align="center" align="center" />
                        </el-table>
                    </el-card>
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
    font-size: 20px;
    font-family: 'Times New Roman', 'Courier New', Times, serif;
    padding: 10px 10px;
}

h1 {
    text-align: center;
    font-weight: 500;
    font-family: 'Times New Roman', Times, serif;
    font-size: 35px;
    padding-top: 0;
}

.mgb20 {
    margin-bottom: 20px;
}
</style>