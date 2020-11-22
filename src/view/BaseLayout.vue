<template>
  <el-container>
    <el-aside width="61px" style="overflow-x: hidden;" class="main-menu">
      <el-menu default-active="Tariffs" @select="openSection" :collapse="isCollapse"    class="el-menu-vertical-demo">
        <div class="logo-menu" ></div>
        <el-menu-item index="Tariffs">
          <i class="el-icon-s-tools" style="color: #F7EB70;"></i><span slot="title">Диспетчерская</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="display: flex; align-items: center; background: #383A45; justify-content: space-between">
        <div style="display: flex; align-items: center; ">
          <div class="logo"></div>
          <div style="padding-left: 20px; color: #ffffff; font-size: 36px;font-style: normal; font-weight: normal;">Диспетчерская</div>
        </div>
        <div style="padding-right: 20px;">
          <el-select v-model="value" placeholder="Select">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-header>
      <div style="height: 68px; background-color: #F9F8E5;">
        <div style="padding: 20px 40px; font-size: 32px; font-weight: bold">GLP</div>
      </div>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: 'BaseLayout',
  data() {
    return {
      activeName: 'first',
      isCollapse: true,
      options: [{
        value: 'Администратор 1',
        label: 'Администратор 1'
      }, {
        value: 'Администратор 2',
        label: 'Администратор 2'
      }, {
        value: 'Администратор 3',
        label: 'Администратор 3'
      }],
      value: 'Администратор 1'
    }
  },
  created() {
    this.$router.push({name: 'Tariffs'});
  },
  methods: {
    openSection(key, keyPath) {
      console.log(key, keyPath);
      let to = {
        name: key,
      }
      this.$router.push(to);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Arial';
  font-weight: 400;

}
.el-header {
  padding: 0 !important;
}
.el-main {
  padding: 20px 40px !important;
}
.logo-menu {
  width: 61px;
  height: 40px;
  margin: 10px 0;
  background: no-repeat center;
  transition: all 200ms ease-in 100ms;
  background-image: url("../assets/menu.png");
}
.logo {
  width: 35px;
  height: 42px;
  margin: 8px 0;
  background: no-repeat center;
  background-image: url("../assets/logo.png");
}
.main-menu, {
  background-color: #1C1F22;
}
.el-menu--collapse {
  height: 100vh;
}
.el-menu {
  background-color: #1C1F22 !important;
}
.el-tabs__item.is-active {
  background-color: #EAEAEA;
}
.el-tabs__active-bar {
  background-color: unset !important;
}
.el-tabs__nav-wrap::after {
  height: 1px !important;
}
.el-tabs--top .el-tabs__item.is-top:last-child, .el-tabs--top .el-tabs__item.is-bottom:last-child, .el-tabs--bottom .el-tabs__item.is-top:last-child, .el-tabs--bottom .el-tabs__item.is-bottom:last-child {
  padding-right: 20px !important;
}
.el-tabs--top .el-tabs__item.is-top:nth-child(2), .el-tabs--top .el-tabs__item.is-bottom:nth-child(2), .el-tabs--bottom .el-tabs__item.is-top:nth-child(2), .el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2) {
  padding-left: 20px !important;
}
.el-input__inner {
  background-color: #F7EB70!important;
  width: 186px!important;
  border-radius: 44px!important;
  color: #000000!important;
  cursor: pointer;
  height: 33px !important;
}
.el-input__icon {
  line-height: 30px;
}
.el-select .el-input .el-select__caret {
  transform: rotateZ(0deg);
}
.el-icon-arrow-up:before {
  content: url("../assets/Vector.svg")!important;
  background: no-repeat center;
}
.el-menu-item.is-active {
  width: 5px !important;
  padding: 0 !important;
  background-color: #F7EB70;
  outline: none;
  padding-left: 0!important;
}

</style>

