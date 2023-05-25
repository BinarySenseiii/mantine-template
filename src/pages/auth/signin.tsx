import {Button, Center} from '@mantine/core'
import type {GetServerSidePropsContext, NextPage} from 'next'
import {signIn} from 'next-auth/react'
import {getServerAuthSession} from '~/server/auth'

const SignInPage: NextPage = () => {
  return (
    <Center m={4}>
      <Button
        m={4}
        onClick={() => signIn('google', {callbackUrl: '/'})}
        tt="capitalize"
      >
        Sign In with Google
      </Button>
    </Center>
  )
}

export default SignInPage

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerAuthSession(ctx)

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
