import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Head>
        <title>{`一个使用 ${CMS_NAME} 驱动的记事本.`}</title>
      </Head>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
