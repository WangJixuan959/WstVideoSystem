<template>
    <div class="scene" v-for="(sceneData, idx) in sceneDatas">
        <!-- <div class="item">
            <h1>
                <RouterLink :to="{ name: 'list', params: { sceneType: 'scene_' + idx } }">
                    {{ sceneData[0].firstTitle }}
                </RouterLink>
            </h1>
            <el-button color=" rgb(78, 87, 123)" size="large" :dark="isDark" plain>
                <RouterLink :to="{ name: 'list', params: { sceneType: 'scene_' + idx } }">See More</RouterLink>
            </el-button>
        </div> -->

        <el-row justify="space-evenly">
            <el-col v-for="(scene, index) in sceneData" :key="scene" :span="5" :offset="index > 0 ? 1 : 0">
                <div class="item">
                    <h1>
                        <RouterLink :to="{ name: 'list', params: { sceneType: 'scene_' + index } }">
                            {{ sceneData[index].firstTitle }}
                        </RouterLink>
                    </h1>
                    <!-- <el-button color=" rgb(78, 87, 123)" size="large" :dark="isDark" plain>
                        <RouterLink :to="{ name: 'list', params: { sceneType: 'scene_' + index } }">See More</RouterLink>
                    </el-button> -->
                </div>
                <el-card :body-style="{ padding: '15px' }" shadow="hover">
                    <img v-bind:src="scene.imgurl"  class="image" />
                    <div style="padding: 10px" class="text">
                        <span>{{ scene.secondTitle }}</span>
                        <div class="bottom">
                            <span>{{ scene.detail }}</span>
                            <el-button text color=" white" size="small" class="botton" :dark="isDark" >operate</el-button>
                        </div>
                    </div>
                    <!-- <slot name="img"></slot>
                    <slot name="text"></slot> -->
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { isDark } from '~/composables/dark'
export default {
    data() {
        return {
            // TODO：从接口拿数据
            // [{‘一级标题’，‘二级标题’， ‘详情信息’，‘显示图片路径’}, {‘一级标题’，‘二级标题’， ‘详情信息’， ‘显示图片路径’} ......]
            sceneDatas: [
                [
                    { firstTitle: "课堂", secondTitle: '视频1', detail: '详情', imgurl: '/src/assets/picture/one.png' },
                    { firstTitle: "厨房", secondTitle: '视频2', detail: '详情', imgurl: '/src/assets/picture/two.png' },
                    { firstTitle: "科技馆", secondTitle: '视频3', detail: '详情', imgurl: '/src/assets/picture/three.png' },
                    { firstTitle: "校园", secondTitle: '视频4', detail: '详情', imgurl: '/src/assets/picture/one.png' }
                ],
                // TODO：下同
                // [
                //     { firstTitle: "厨房", secondTitle: '视频1', detail: '详情', imgurl: '' },
                //     { firstTitle: "厨房", secondTitle: '视频2', detail: '详情', imgurl: '' },
                //     { firstTitle: "厨房", secondTitle: '视频3', detail: '详情', imgurl: '' },
                //     { firstTitle: "厨房", secondTitle: '视频4', detail: '详情', imgurl: '' }
                // ],
                // [
                //     { firstTitle: "科技馆", secondTitle: '视频1', detail: '详情', imgurl: '' },
                //     { firstTitle: "科技馆", secondTitle: '视频2', detail: '详情', imgurl: '' },
                //     { firstTitle: "科技馆", secondTitle: '视频3', detail: '详情', imgurl: '' },
                //     { firstTitle: "科技馆", secondTitle: '视频4', detail: '详情', imgurl: '' }
                // ],
                // [
                //     { firstTitle: "校园", secondTitle: '视频1', detail: '详情', imgurl: '' },
                //     { firstTitle: "校园", secondTitle: '视频2', detail: '详情', imgurl: '' },
                //     { firstTitle: "校园", secondTitle: '视频3', detail: '详情', imgurl: '' },
                //     { firstTitle: "校园", secondTitle: '视频4', detail: '详情', imgurl: '' }
                // ]
            ]
        }
    },
    methods: {
        getSceneData() {
            return null
        }
    }
}
</script>

<style lang="scss" scoped>
.bottom {
    margin-top: 13px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;
    color: white;
}

.image {
    width: auto;
    height: 150px;
    display: flex;
    justify-content: space-between; 
}


.scene { 
    margin: 0 80px 0 130px;
    height: 700px;

    .item {
        color: white;
        padding: 150px 10px;
        display: flex;
        justify-content: space-between; //水平居中
        padding-bottom: 30px;

        //自定义链接颜色
        .router-link-active {
            text-decoration: none;
            color: yellow;
        }
        a {
            text-decoration: none;
            color: white;
        }
    }

    .el-card {
        background-color: rgb(128, 148, 169);
        border:rgb(123, 129, 136) ;
        .text{
            color: white;
        }
    }
}

</style>