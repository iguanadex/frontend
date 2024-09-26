import { Box, useIsomorphicEffect } from '@iguanadex/uikit'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { Banner } from 'views/LandingV4/components/Banner'
import { ExploreHooks } from 'views/LandingV4/components/ExploreHooks'
import { Features } from 'views/LandingV4/components/Features'
import { NewsAndEvents } from 'views/LandingV4/components/NewsAndEvents'
import { StartBuilding } from 'views/LandingV4/components/StartBuilding'
import { SubMenu } from 'views/LandingV4/components/SubMenu'

export const LandingV4 = () => {
  const { asPath } = useRouter()
  const wrapperEl = useRef<HTMLDivElement>(null)

  useIsomorphicEffect(() => {
    const hash = asPath.split('#')[1]

    if (hash) {
      wrapperEl.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }
  }, [asPath])

  return (
    <Box ref={wrapperEl}>
      <SubMenu />
      <Banner />
      <Features />
      <StartBuilding />
      <ExploreHooks />
      <NewsAndEvents />
    </Box>
  )
}
