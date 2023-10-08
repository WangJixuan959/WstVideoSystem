<template>
    <div>
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
                        <div class="demo-image__preview">
                            <el-image class="image" src='/src/assets/picture/experiment_1.png' :zoom-rate="1.2"
                                :preview-src-list="srcList" :initial-index="4" fit="cover" />
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col align="middle" style="padding-bottom: 20px; padding-top: 20px;">
                <span class="text">分析结果</span>
            </el-col>
        </el-row>
        <el-row>
            <el-col type="flex" align="middle" style="align-self: center;">
                <el-card shadow="hover">
                    <el-table :data="tableData" stripe>
                        <el-table-column prop="time" label="事件发生时间" width="150" header-align="center" align="center" />
                        <el-table-column prop="type" label="事件类型" width="400" header-align="center" align="center" />
                        <el-table-column prop="type" label="具体内容" width="700" header-align="center" align="center" />
                    </el-table>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>


const srcList = [
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
];
const tableData = [
    {
        time: '00:07',
        type: '准备工作',
    },
    {
        time: '00:47',
        type: '实验',
    },
    {
        time: '01:22',
        type: '做记录',
    },
    {
        time: '01:50',
        type: '收拾台面',
    },
]

</script>

<style lang="scss" scoped>
.image {
    width: auto;
    height: 300px;
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

.text {
    text-align: center;
    font-weight: 500;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    color: white;

    border: 2px solid #324157;
    /* 边框宽度、边框样式、边框颜色 */
    padding: 10px;
    /* 可选的内边距，以增加文字与边框之间的间距 */
    background-color: #3e5372;
    border-radius: 5px;
}
</style>