<script lang="ts">
/**
 * 上下左右布局，顶部导航 + (底部左侧侧边栏 + 底部右侧内容区域)
 */
export default defineComponent({
  name: 'LayoutArea'
})
</script>

<template>
  <div class="layout-area-container">
    <div class="layout-area-container__top">
      <slot name="top"></slot>
    </div>
    <div class="layout-area-container__bottom">
      <div class="layout-area-container__bottom__inner">
        <aside
          v-if="$slots.side"
          class="side-layout-area-menu-bar"
        >
          <div class="layout-area-menu-bar__inner">
            <slot name="side"></slot>
          </div>
        </aside>
        <section class="content-section-container">
          <main class="main-content-box">
            <div
              class="inner-content"
            >
              <slot name="content"></slot>
            </div>
          </main>
        </section>
      </div>
    </div>
    <FooterCustom show-border />
  </div>
</template>

<style lang="scss" scoped>
$headerHeight: 48px;

.layout-area-container {
  display: flex;
  flex-direction: column;
  min-width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #f0f2f5;

  .layout-area-container__top {

  }

  .layout-area-container__bottom {
    display: flex;
    flex: 1;
    position: relative;
    color: #303133;

    .layout-area-container__bottom__inner {
      position: absolute;
      inset: 1px 0 0;
      display: flex;

      .side-layout-area-menu-bar {
        position: relative;
        flex-direction: column;
        width: 256px;
        transition: width 0.28s;
        border-right: 1px solid #dcdfe6;

        .layout-area-menu-bar__inner {
          position: absolute;
          inset: 0;
          overflow: hidden auto;
          padding: 24px;
          scroll-behavior: smooth;
        }
      }

      .content-section-container {
        display: flex;
        flex: auto;
        flex-direction: column;
        min-width: 0;
        background-color: #f0f2f5;

        .main-content-box {
          flex: auto;
          position: relative;

          .inner-content {
            padding: 24px;
            position: absolute;
            inset: 0;
            overflow: auto;
            scroll-behavior: smooth;
          }
        }
      }
    }
  }
}
</style>
