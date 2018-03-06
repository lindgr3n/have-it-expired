<template>
  <div>
    <md-card class="md-primary container">
      <div>
        <slot name="header"></slot>
      </div>
      <div>
        <slot></slot>
      </div>
      <div>
        <slot name="footer"></slot>
      </div>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "v-container"
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}
</style>
