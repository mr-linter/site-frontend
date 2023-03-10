<template>
  <div id="tester">
    <div class="container">

      <div class="row" style="padding-bottom: 10px">

        <div class="col">
          <merge-request :merge_request="merge_request"></merge-request>
        </div>

        <div class="col">
          <config-editor :lint_config="lint_config"></config-editor>
        </div>
      </div>

      <lint-result v-if="lint_result" v-bind:result="lint_result"></lint-result>

      <ValidationFails v-if="validation_fails !== null" v-bind:fails="validation_fails"></ValidationFails>

      <div class="d-grid gap-2" style="padding-top: 10px">
        <button class="btn btn-outline-secondary" style="border-radius: 0" type="button" @click="lintRequest">Test</button>

        <div class="input-group" v-if="share_result">
          <span class="input-group-text br-none" id="shared-url">Shared URL</span>
          <input type="text" v-model="sharedUrl" class="form-control br-none" aria-label="dev" aria-describedby="shared-url">
        </div>

        <button class="btn btn-outline-secondary" style="border-radius: 0" type="button" @click="shareRequest" v-if="lint_result">
          Share
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MergeRequest from '../components/MergeRequest'
import LintResult from '../components/LintResult'
import ValidationFails from '../components/ValidationFails'
import ConfigEditor from "./ConfigEditor";

const axios = require('axios')

export default {
  components: {ConfigEditor, LintResult, MergeRequest, ValidationFails},
  data: () => {
    return {
      merge_request: {
        title: 'Request Title',
        description: '',
        changed_files_count: 10,
        has_conflicts: false,
        is_draft: false,
        can_merge: true,
        source_branch: 'dev',
        target_branch: 'master',
        created_at: new Date(),
        labels: ['Feature'],
        author: {
          login: 'developer',
        },
      },
      lint_result: null,
      validation_fails: null,
      share_result: null,
      lint_config: {
        definition: "{\n" +
            "  \"rules\": {\n" +
            "    \"@mr-linter/title_starts_with_task_number\": {\n" +
            "      \"projectName\": \"MYPROJECT\"\n" +
            "    },\n" +
            "    \"@mr-linter/changed_files_limit\": {\n" +
            "      \"limit\": 1,\n" +
            "      \"when\": {\n" +
            "        \"title\": {\n" +
            "          \"starts\": \"[Feature] \",\n" +
            "          \"ends\": \"es\",\n" +
            "          \"equals\": \"dd\"\n" +
            "        }\n" +
            "      }\n" +
            "    },\n" +
            "    \"@mr-linter/jira/has_issue_link\": {\n" +
            "      \"domain\": \"jira.com\",\n" +
            "      \"projectCode\": \"MYPROJECT\",\n" +
            "      \"when\": {\n" +
            "        \"labels\": {\n" +
            "          \"has\": \"Feature\"\n" +
            "        },\n" +
            "        \"targetBranch\": {\n" +
            "          \"ends\": \"er\"\n" +
            "        }\n" +
            "      }\n" +
            "    },\n" +
            "    \"@mr-linter/description_not_empty\": {\n" +
            "      \"when\": {\n" +
            "        \"targetBranch\": {\n" +
            "          \"equals\": \"master\"\n" +
            "        }\n" +
            "      }\n" +
            "    }\n" +
            "  },\n" +
            "  \"credentials\": {\n" +
            "    \"github_actions\": \"env(MR_LINTER_GITHUB_HTTP_TOKEN)\"\n" +
            "  }\n" +
            "}",
      },
    }
  },

  computed: {
    sharedUrl() {
      return "https://mr-linter.dev/try/?i=" + this.share_result.id;
    },
  },

  mounted() {
    document.title = 'Try | MR Linter';

    const analysisId = this.$route.query.i;

    console.log("loading analysis with id: " + analysisId)

    if (! analysisId) {
      return;
    }

    this.loadAnalysis(analysisId);
  },

  methods: {
    shareRequest() {
      axios.post('https://api.mr-linter.dev/api/analyses', {
        config: JSON.parse(this.lint_config.definition),
        mergeRequest: this.merge_request,
      })
          .then(response => {
            this.validation_fails = null;
            this.share_result = response.data
          })
    },

    loadAnalysis(id) {
      axios.get('https://api.mr-linter.dev/api/analyses/' + id)
          .then(response => {
            this.validation_fails = null;
            this.lint_result = response.data.result;
            this.merge_request = response.data.analysis.merge_request;
            this.lint_config.definition = JSON.stringify(response.data.analysis.config, null, 2);
          })
          .catch((error) => {
            this.validation_fails = null;
            this.lint_result = null;
          })
    },

    lintRequest() {
      axios.post('https://api.mr-linter.dev/api/linter/lint', {
        config: JSON.parse(this.lint_config.definition),
        mergeRequest: this.merge_request,
      })
        .then(response => {
          this.validation_fails = null;
          this.lint_result = response.data
        })
        .catch((error) => {
          this.validation_fails = error.response.data.errors;
          this.lint_result = null;
        })
    }
  }
}
</script>
