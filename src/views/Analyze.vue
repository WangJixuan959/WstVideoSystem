<template>
    <div class="container">
        <div>
            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: sceneType }">{{ scene }}</el-breadcrumb-item>
                <el-breadcrumb-item>视频{{ videoId }}</el-breadcrumb-item>
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
            
            <!-- 使用4个不同的场景自定义组件 -->
            <div v-if="videoclass === '0'">
                <class />
            </div>
            <div v-else-if="videoclass === '1'">
                <homework />
            </div>
            <div v-else-if="videoclass === '2'">
                <experiment />
            </div>
            <div v-else-if="videoclass === '3'">
                <school />
            </div>
            <div v-else>
                请退出重试！
            </div>
           
        </div>
    </div>
</template>

<script lang="ts" setup>
import VideoPlayer from '../components/VideoPlayer.vue';
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
var videopath = String(route.params.sceneType);
var sceneType = '/' + videopath + '/list';
var videoclass = videopath.split('_')[1]; //场景类别0123
var scene = ''
switch (videoclass) {
    case '0':
        scene = "课堂表现"
        break;
    case '1':
        scene = "家庭劳务"
        break;
    case '2':
        scene = "科技实验"
        break;
    case '3':
        scene = "校园活动"
        break;
    default:
        break;
}
const videoId = route.params.videoId



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