<template>
  <div class="card br-none config-editor">
    <div class="card-header" style="padding: 15px 15px 10px;">
      <strong>Config</strong>
    </div>
    <div class="edit-form">
      <textarea class="config-editor-textarea" v-model="lint_config.definition"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lint_config: Object,
  }
}
</script>

<style>
.config-editor {
  box-sizing: border-box;
  border: 1px solid #ccc;
  height: 100%;
  background: #fff;
  margin: 0;
}

.config-editor .edit-form {
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.config-editor-textarea {
  border: none;
  width: 100%;
  resize: none;
  margin: 0;
  padding: 5px;
  height: 430px;
  box-sizing: border-box;
  overflow: auto;
  outline: 0 none;
  color: #666;
}
</style>
