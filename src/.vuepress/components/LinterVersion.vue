<template>
  <div class="card br-none">
    <div class="card-header" style="border-bottom: none">
      <strong>MR Linter Version: {{ version }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    version: String,
  }
}
</script>
