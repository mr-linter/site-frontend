<template>
  <div class="card br-none">
    <div class="card-header">
      <strong>Result</strong>
    </div>

    <div class="card-body">
      <div class="alert alert-danger br-none" role="alert" v-if="this.result.notes.length > 0">
        Notes: {{ this.result.notes.length }}
      </div>

      <div class="alert alert-success br-none" role="alert" v-if="this.result.notes.length === 0">
        No notes
      </div>

      <div class="table-responsive" v-if="this.result.notes.length > 0">
        <table class="table notes-table" style="width: 100%; display: table">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Note</th>
              <th scope="col">Severity</th>
            </tr>

            <tr v-for="(note, index) in result.notes">
              <td>{{ ++index }}</td>
              <td>{{ note.note }}</td>
              <td>{{ note.severity }}</td>
            </tr>

        </table>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    result: {
      state: Boolean(),
      notes: []
    }
  }
}
</script>

<style>
  .notes-table th, td {
    border: 1px solid #ccc;
  }
</style>
