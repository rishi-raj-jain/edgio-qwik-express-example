import { Router } from '@edgio/core'
import { isProductionBuild } from '@edgio/core/environment'

const router = new Router({ indexPermalink: false })

if (isProductionBuild()) {
  router.static('dist')
}

router.fallback(({ renderWithApp }) => renderWithApp())

export default router
