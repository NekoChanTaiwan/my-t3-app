import { SessionProvider } from 'next-auth/react'
import { trpc } from '@/utils/trpc'
import { type AppType } from 'next/app'
import { type Session } from 'next-auth'
import '@/styles/globals.css'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default trpc.withTRPC(MyApp)
