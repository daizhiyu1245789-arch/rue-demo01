import { type FC } from '@rue-js/rue'
import { RouterView } from '@rue-js/router'
import SiteLayout from './pages/components/Layout'

const RootApp: FC = () => (
  <SiteLayout>
    <RouterView />
  </SiteLayout>
)

export default RootApp
