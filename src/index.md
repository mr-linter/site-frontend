---
home: true
tagline: 
actionText: Getting Started →
actionLink: /guide/getting-started/
xfeatures:
- title: Make requests correctly!
  details: Open rules for validation
  link: /guide/rules

- title: Try online
  details: Try MR Linter online
  link: /try

- title: Receive notifications
  details: See notifications' configuration
  link: /guide/notifications
footer: © Ukrainskii Artem
---

<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.xfeatures">
    <h2>{{ feat.title }}</h2>
    <p v-if="feat.link.length > 0">
      <router-link v-bind:to="feat.link">
        {{ feat.details }}
      </router-link>
    </p>
    <p v-else>{{ feat.details }}</p>
  </div>
</div>
