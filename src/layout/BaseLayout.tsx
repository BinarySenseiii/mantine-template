import type {ReactNode} from 'react'
import React from 'react'
import PageSeo from '~/components/PageSeo'
import ScrollToTop from '~/components/ScrollToTop'

type BaseLayoutProps = {
  children: ReactNode
}

const BaseLayout: React.FC<BaseLayoutProps> = ({children}) => (
  <>
    <PageSeo />
    <ScrollToTop />
    {children}
  </>
)
export default BaseLayout
