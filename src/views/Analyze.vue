<template>
    <div class="container">
        <div>
            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: sceneType }">{{ scene }}场景</el-breadcrumb-item>
                <el-breadcrumb-item>{{ videoId }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div>
            <el-row :gutter="20">
                <el-col type="flex" align="middle" style="align-self: center;">
                    <el-card shadow="hover">
                        <div>
                            <p>视频信息</p>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12" type="flex" align="middle">
                    <el-card shadow="hover" style="height: 400px;">
                        <div>
                            <p>原始视频</p>
                            <VideoPlayer />
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="12" type="flex" align="middle" style="align-self: center;">
                    <el-card shadow="hover" style="height: 400px;">
                        <div>
                            <p>事件发生截图</p>
                            <!-- <img src='/src/assets/frames/frame10.png' class="image"> -->
                            <div class="demo-image__preview">
                                <el-image  class="image" src='/src/assets/frames/frame10.png'  :zoom-rate="1.2"
                                    :preview-src-list="srcList" :initial-index="4" fit="cover" />
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row>
                <el-col type="flex" align="middle" style="align-self: center;">
                    <el-card shadow="hover">
                        <p>分析结果</p>
                        <el-table :data="tableData" stripe>
                            <el-table-column prop="time" label="事件发生时间" width="150" header-align="center" align="center" />
                            <el-table-column prop="type" label="事件类型" width="400" header-align="center" align="center" />
                            <el-table-column prop="type" label="具体内容" width="700" header-align="center" align="center" />
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
var sceneType = '/' + String(route.params.sceneType) + '/list';
var scene = ''
switch (String(route.params.sceneType).split('_')[1]) {
    case '0':
        scene = "课堂"
        break;
    case '1':
        scene = "家庭"
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

const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]
</script>

<style lang="scss" scoped>
.container {
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;

    .el-breadcrumb {
        font-size: 18px;
        padding-bottom: 15px;
        font-family: 'Times New Roman', 'Courier New', Times, serif;
    }
}


.image {
    width: auto;
    height: 300px;
    // display: flex;
    // justify-content: space-between;
    // padding-top: 60px;
}




h1 {
    text-align: center;
    font-weight: 500;
    font-family: 'Times New Roman', Times, serif;
    font-size: 35px;
    padding-top: 0;
}

.el-card {
    margin-bottom: 20px;
    height: auto;
}

.demo-image__error .image-slot {
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>