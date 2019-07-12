<template>
  <div class="gold-wrapper">
    <!-- <el-button type="primary" class="add-btn" @click="add">添加</el-button> -->
    <el-table
      :data="tableData"
      style="width: 100%"
      border>
      <el-table-column
        v-for="(item, key) in thList"
        :key="key"
        :prop="item.data"
        :label="item.label"
        :min-width="item.width"
        align="center">
        <template slot-scope="scope">
          <div v-if="item.data === 'moneyDay'">{{ (scope.row['rate']* 10000/365).toFixed(2) }}</div>
          <div v-else-if="item.data === 'moneyYear'">{{ (scope.row['rate']* 10000).toFixed(2) }}</div>
          <div v-else-if="item.data === 'rate'">{{ (scope.row['rate']* 100).toFixed(2) + '%' }}</div>
          <div v-else-if="item.data === 'proName' && scope.row.hotFlag">
            <el-badge value="hot" class="item"><div>{{ scope.row[item.data] }}</div></el-badge>
          </div>
          <div v-else>{{ scope.row[item.data] }}</div>
        </template>
      </el-table-column>
      <!-- <el-table-column>
        <template slot-scope="scope">
          <el-button type="success" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          proName: '余额宝',
          proPeriod: '活期',
          rate: 0.02525,
          risk: '低',
          platform: '支付宝',
          minVal: '1'
        },
        {
          proName: '余利宝',
          proPeriod: '活期',
          rate: 0.0254,
          risk: '低',
          platform: '支付宝',
          minVal: '1'
        },
        {
          proName: '零钱通',
          proPeriod: '活期',
          rate: 0.02832,
          risk: '低',
          platform: '微信理财通',
          minVal: '1'
        },
        {
          proName: '日日欣理财T+1',
          proPeriod: '活期',
          rate: 0.0334,
          risk: 'R2较低',
          platform: '招商银行',
          minVal: '1万',
          hotFlag: true
        },
        {
          proName: '安邦安增益31天',
          proPeriod: '1m',
          rate: 0.0354,
          risk: '中低',
          platform: '支付宝',
          minVal: '1000'
        },
        {
          proName: '建信养老飞益鑫30天',
          proPeriod: '1m',
          rate: 0.03547,
          risk: '中低',
          platform: '微信理财通',
          minVal: '1000'
        },
        {
          proName: '聚益生金30天T+3',
          proPeriod: '1m',
          rate: 0.0365,
          risk: 'R2较低',
          platform: '招商银行',
          minVal: '1万'
        },
        {
          proName: '日益月鑫31天',
          proPeriod: '1m',
          rate: 0.0368,
          risk: 'R3中',
          platform: '招商银行',
          minVal: '10万'
        },
        {
          proName: '长江养老月安享',
          proPeriod: '1m',
          rate: 0.03962,
          risk: '中低',
          platform: '支付宝',
          minVal: '1000',
          hotFlag: true
        },
        {
          proName: '海通海蓝稳享系列35天',
          proPeriod: '1m',
          rate: 0.04,
          risk: '中低',
          platform: '微信理财通',
          minVal: '10万',
          hotFlag: true
        },
        {
          proName: '太平养老共享太平30天',
          proPeriod: '1m',
          rate: 0.0433,
          risk: '中低',
          platform: '微信理财通',
          minVal: '1000',
          hotFlag: true
        },
        {
          proName: '太平养老颐养系列30天',
          proPeriod: '1m',
          rate: 0.04453,
          risk: '中低',
          platform: '微信理财通',
          minVal: '1000',
          hotFlag: true
        },
        {
          proName: '国寿超月宝',
          proPeriod: '2m',
          rate: 0.03447,
          risk: '中低',
          platform: '支付宝',
          minVal: '1000'
        },
        {
          proName: '聚益生金60天',
          proPeriod: '2m',
          rate: 0.0395,
          risk: 'R2较低',
          platform: '招商银行',
          minVal: '1万'
        },
        {
          proName: '财通财慧道安盈系列',
          proPeriod: '3m',
          rate: 0.0395,
          risk: '中低',
          platform: '微信理财通',
          minVal: '5万',
          hotFlag: true
        },
        {
          proName: '海通海蓝3月期',
          proPeriod: '3m',
          rate: 0.04,
          risk: '中低',
          platform: '微信理财通',
          minVal: '10万',
          hotFlag: true
        },
        {
          proName: '太平久久99天',
          proPeriod: '3m',
          rate: 0.04249,
          risk: '中低',
          platform: '支付宝',
          minVal: '1000'
        },
        {
          proName: '聚益生金180天',
          proPeriod: '6m',
          rate: 0.0395,
          risk: 'R2较低',
          platform: '招商银行',
          minVal: '1万'
        },
        {
          proName: '广发多添利X184天',
          proPeriod: '6m',
          rate: 0.042,
          risk: '低',
          platform: '壹钱包',
          minVal: '5万'
        },
        {
          proName: '广州年年盈180',
          proPeriod: '6m',
          rate: 0.0435,
          risk: '中低',
          platform: '壹钱包',
          minVal: '5万'
        },
        {
          proName: '万联理财宝182',
          proPeriod: '6m',
          rate: 0.046,
          risk: '中低',
          platform: '壹钱包',
          minVal: '5万',
          hotFlag: true
        },
        {
          proName: '平安养老富盈180天',
          proPeriod: '6m',
          rate: 0.04731,
          risk: '中',
          platform: '微信理财通',
          minVal: '1000',
          hotFlag: true
        },
        {
          proName: '长江乐享1天270',
          proPeriod: '9m',
          rate: 0.0455,
          risk: '中低',
          platform: '壹钱包',
          minVal: '5万',
          hotFlag: true
        },
        {
          proName: '太平养老颐养系列270天',
          proPeriod: '9m',
          rate: 0.0456,
          risk: '中',
          platform: '微信理财通',
          minVal: '1000',
          hotFlag: true
        },
        {
          proName: '聚益生金360天',
          proPeriod: '1y',
          rate: 0.04,
          risk: 'R2较低',
          platform: '招商银行',
          minVal: '1万'
        },
        {
          proName: '长江养老盛年享',
          proPeriod: '1y',
          rate: 0.04242,
          risk: '中低',
          platform: '支付宝',
          minVal: '1000'
        },
        {
          proName: '国寿安鑫盈360天',
          proPeriod: '1y',
          rate: 0.04620,
          risk: '中低',
          platform: '支付宝',
          minVal: '1000'
        },
        {
          proName: '平安养老富盈360天',
          proPeriod: '1y',
          rate: 0.04753,
          risk: '中',
          platform: '微信理财通/壹钱包',
          minVal: '1000'
        },
        {
          proName: '天风证券天泽1号378天',
          proPeriod: '1y',
          rate: 0.05,
          risk: '中低',
          platform: '壹钱包',
          minVal: '10万'
        },
      ],
      thList: [
        { label: '产品', data: 'proName', width: 120 },
        { label: '期限', data: 'proPeriod' },
        { label: '收益率', data: 'rate' },
        { label: '1天收益（万/元）', data: 'moneyDay', width: 120 },
        { label: '1年收益（万/元）', data: 'moneyYear', width: 120 },
        { label: '风险', data: 'risk' },
        { label: '平台', data: 'platform' },
        { label: '起购金额', data: 'minVal' }
      ]
    }
  },
  methods: {
    del() {
    },
    add() {
    }
  }
}
</script>
<style lang="scss" scope>
.gold-wrapper {
  width: 90%;
  margin: 0  auto;
  .add-btn{
    margin: 60px 0 30px;
  }
}
</style>
