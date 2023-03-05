<template>
  <div class="card br-none">
    <div class="card-header">
      <strong>Validation failed</strong>
    </div>

    <div class="card-body">
      <table class="table" style="width: 100%; display: table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Subject</th>
          <th scope="col">Error</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(fail, i) in preparedErrors">
          <th scope="row">{{ ++i }}</th>
          <td>{{ fail.subject }}</td>
          <td>{{ fail.error }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    preparedErrors() {
      let errors = [];

      for (let name in this.fails) {
        let fail = this.fails[name]

        for (let i in fail) {
          errors.push({'subject': name, 'error': fail[i]})
        }
      }

      return errors
    },
  },
  props: {
    fails: Object,
  }
}
</script>
