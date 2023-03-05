<template>
  <div id="merge-request" class="card br-none">
    <div class="card-header merge-request-title">
      <input type="text" v-model="merge_request.title" value="Request Title"/>
    </div>

    <div class="merge-request-description">
      <textarea v-model="merge_request.description" placeholder="Request Description">
      </textarea>
    </div>

    <div class="merge-request-tags">
      <div class="input-group input-group-sm">
        <span class="input-group-text" id="merge-request-source-branch">source branch</span>
        <input type="text" v-model="merge_request.source_branch" class="form-control" aria-label="dev" aria-describedby="merge-request-source-branch">

        <span class="input-group-text" id="merge-request-target-branch">target branch</span>
        <input type="text" v-model="merge_request.target_branch" class="form-control" aria-label="dev" aria-describedby="merge-request-target-branch">
      </div>
    </div>

    <div class="merge-request-tags">
      <div class="col">
        <div class="input-group input-group-sm">
          <span class="input-group-text" id="merge-request-changed-files-count">Changed files count</span>
          <input type="number" v-model="merge_request.changed_files_count" class="form-control" aria-label="dev" aria-describedby="merge-request-changed-files-count">
        </div>
      </div>
    </div>

    <div class="merge-request-tags">
      <div class="row">
        <div class="col">
          <div class="form-check">
            <input class="form-check-input" v-model="merge_request.has_conflicts" type="checkbox" value=true id="hasConflictsChecked" checked>
            <label class="form-check-label" for="hasConflictsChecked">
              Has conflicts?
            </label>
          </div>
        </div>

        <div class="col">
          <div class="form-check">
            <input class="form-check-input" v-model="merge_request.is_draft" type="checkbox" value=true id="isDraftChecked" checked>
            <label class="form-check-label" for="isDraftChecked">
              Is draft?
            </label>
          </div>
        </div>

        <div class="col">
          <div class="form-check">
            <input class="form-check-input" v-model="merge_request.can_merge" type="checkbox" value=true id="canMergeChecked" checked>
            <label class="form-check-label" for="canMergeChecked">
              Can merge?
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    merge_request: Object
  }
}
</script>

<style>
#merge-request {
  background: #fff;
  border: 1px solid #ccc;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.merge-request-title {
  padding: 15px 15px 10px;
}

.merge-request-title input {
  border: 0 none;
  border-radius: 0;
  font-size: 16px;
  font-weight: bold;
  background: none;
  width: 100%;
  padding: 0;
  margin: 0;
}

.merge-request-description textarea {
  width: 100%;
  border: 0 none;
  border-radius: 0;
  border-bottom: 1px dashed #ccc;
  box-sizing: border-box;
  font-size: 0.875rem;
}

.merge-request-description {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  width: 100%;
  box-sizing: border-box;
}

.merge-request-description textarea {
  width: 100%;
  border: 0 none;
  border-bottom: 1px dashed #ccc;
}

.merge-request-tags {
  border-top: 1px solid #ccc;
  padding: 15px;
}
</style>
