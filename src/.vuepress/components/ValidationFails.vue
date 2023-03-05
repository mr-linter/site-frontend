<template>
  <div class="card" style="border-radius: 0">
    <h5 class="card-header">Validation failed</h5>
    <div class="card-body">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
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
          errors.push({'error': fail[i]})
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
