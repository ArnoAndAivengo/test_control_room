<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" >
    <el-tab-pane label="Данные" name="data">Данных нет</el-tab-pane>
    <el-tab-pane label="Документы" name="docs">Данных нет</el-tab-pane>
    <el-tab-pane label="Контакты" name="contacts">Данных нет</el-tab-pane>
    <el-tab-pane label="Тарифы" name="tar">
      <Tariffs/>
    </el-tab-pane>
    <el-tab-pane label="Арбитраж" name="arb">Данных нет</el-tab-pane>
  </el-tabs>
</template>
<script>
import Tariffs from "./Tariffs"
  export default {
    components: {
      Tariffs
    },
    name: 'Tabs',
    data() {
      return {
        activeName: 'tar'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
