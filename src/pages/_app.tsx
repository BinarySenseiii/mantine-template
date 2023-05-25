import {type Session} from 'next-auth'
import {SessionProvider} from 'next-auth/react'
import {type AppProps} from 'next/app'

import {BaseLayout} from '~/layout'
import MantineThemeProvider from '~/providers/mantine'
import {type NextPage} from 'next'
import {type ReactElement, type ReactNode} from 'react'
import '~/styles/globals.css'

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App(
  props: AppPropsWithLayout & {session: Session | null},
) {
  const getLayout =
    props.Component.getLayout ?? ((page) => <BaseLayout>{page}</BaseLayout>)

  return (
    <SessionProvider session={props.session}>
      <MantineThemeProvider>
        {getLayout(<props.Component {...props.pageProps} />)}
      </MantineThemeProvider>
    </SessionProvider>
  )
}
