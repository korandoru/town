import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import {ClientModule} from "@docusaurus/types";

const module: ClientModule = {
    onRouteDidUpdate({location, previousLocation}) {
        if (ExecutionEnvironment.canUseDOM) {
            if (location.pathname != previousLocation?.pathname) {
                _paq.push(['setCustomUrl', location.pathname])
                _paq.push(['setDocumentTitle', document.title])
                _paq.push(['trackPageView'])
                console.log(`path = ${location.pathname}`)
                console.log(`title = ${document.title}`)
            }
        }
    }
}

export default module
