import '/@/design/index.less'
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
// Register icon sprite
import 'virtual:svg-icons-register'
import App from './App.vue'
import { createApp } from 'vue'
import { setupStore } from '/@/store'
import { initAppConfigStore } from '/@/logics/initAppConfig'
import { registerGlobComp } from '/@/components/registerGlobComp'
import { setupI18n } from '/@/locales/setupI18n'
import { router, setupRouter } from '/@/router'
import { setupRouterGuard } from '/@/router/guard'
import { setupGlobDirectives } from '/@/directives'
import { setupErrorHandle } from '/@/logics/error-handle'

import VueDOMPurifyHTML from 'vue-dompurify-html'

// Importing on demand in local development will increase the number of browser requests by around 20%.
// This may slow down the browser refresh speed.
// Therefore, only enable on-demand importing in production environments .
if (import.meta.env.DEV) {
    import('ant-design-vue/dist/antd.less')
}

async function bootstrap() {
    const app = createApp(App)

    // Configure store
    setupStore(app)

    // Initialize internal system configuration
    initAppConfigStore()

    // Register global components
    registerGlobComp(app)

    // Multilingual configuration
    // Asynchronous case: language files may be obtained from the server side
    await setupI18n(app)

    // Configure routing
    setupRouter(app)

    // router-guard
    setupRouterGuard(router)

    // Register global directive
    setupGlobDirectives(app)

    // Configure global error handling
    setupErrorHandle(app)

    // 防止v-html xss攻击
    app.use(VueDOMPurifyHTML)

    app.mount('#app')
}

bootstrap()
