import {seoConfig} from '~/config'
import {DefaultSeo} from 'next-seo'
import Head from 'next/head'

type PageSeoProps = {
  title?: string
  description?: string
  canonical?: string
}

const PageSeo = ({...props}: PageSeoProps) => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#333" />
      </Head>
      <DefaultSeo {...seoConfig} {...props} />
    </>
  )
}

export default PageSeo
