<template>
  <div class="page-container">
    <div class="sidebar-menu toggle-others fixed">
      <div class="sidebar-menu-inner">
        <header class="logo-env">
          <!-- logo -->
          <div class="logo">
            <a href="#" class="logo-expanded">
              <img src="../assets/images/logo@2x.png" width="100%" alt="" />
            </a>
            <a href="#" class="logo-collapsed">
              <img
                src="../assets/images/logo-collapsed@2x.png"
                width="40"
                alt=""
              />
            </a>
          </div>
          <div class="mobile-menu-toggle visible-xs">
            <a href="#" data-toggle="user-info-menu">
              <i class="linecons-cog"></i>
            </a>
            <a href="#" data-toggle="mobile-menu">
              <i class="fa-bars"></i>
            </a>
          </div>
        </header>
        <!-- 侧边栏 -->
        <ul id="main-menu" class="main-menu">
          <li v-for="(menu, idx) in items" :key="idx">
            <!-- 侧边栏icon -->
            <a :href="'#' + menu.name" class="smooth">
              <i :class="menu.icon"></i>
              <span class="title">{{ menu.name }}</span>
            </a>
            <!-- 侧边栏二级菜单 -->
            <ul v-if="menu.children"> 
              <li v-for="(submenu, idx) in menu.children" :key="idx">
                <a :href="'#' + submenu.name" class="smooth">
                  <!-- 二级菜单名 -->
                  <span class="title">{{ submenu.name }}</span>
                  <span
                    v-show="submenu.is_hot"
                    class="label label-pink pull-right hidden-collapsed"
                    >Hot</span
                  >
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="main-content">
      <!-- 导航栏 -->
      <nav class="navbar user-info-navbar" role="navigation">
        <!-- 面包屑 -->
        <ul class="user-info-menu left-links list-inline list-unstyled">
          <li class="hidden-sm hidden-xs">
            <a href="#" data-toggle="sidebar"><i class="fa-bars"></i></a>
          </li>
        </ul>
        <!-- github链接 -->
        <ul class="user-info-menu right-links list-inline list-unstyled">
          <li class="hidden-sm hidden-xs">
            <a href="https://changhengheng/Anjaxs/WebStack-vue" target="_blank">
              <i class="fa-github"></i> GitHub
            </a>
          </li>
        </ul>
      </nav>

      <!-- 链接区域 -->
      <div v-for="(item, idx) in items" :key="idx">
        <!-- 如果有web属性，说明有子路由 -->
        <div v-if="item.web">
          <WebItem :item="item" />
        </div>
        <div v-else v-for="(subItem, idx) in item.children" :key="idx">
          <WebItem :item="subItem" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import WebItem from "../components/WebItem.vue";
import itemsData from "../assets/data.json";
// import { loadJs } from '../assets/js/app.js'

export default {
  name: "Index",
  components: {
    WebItem,
  },
  data() {
    return {
      items: itemsData,
    };
  },
};
</script>

<style>
</style>
