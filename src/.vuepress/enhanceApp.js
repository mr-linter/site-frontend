/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

import './styles/styles.scss';
import { BootstrapVue } from 'bootstrap-vue'
import Tester from "./components/Tester";
import TesterPage from "./components/TesterPage";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  router.addRoute(
    {
      name: 'try previous analysis',
      path: '/try/:id',
      component: TesterPage,
    },
  )

  Vue.use(BootstrapVue)
}
