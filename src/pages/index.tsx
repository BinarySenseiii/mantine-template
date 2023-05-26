/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {Avatar, Button, Center, Stack, Text} from '@mantine/core'
import type {GetServerSidePropsContext, NextPage} from 'next'
import type {Session} from 'next-auth'
import {signOut} from 'next-auth/react'
import {getServerAuthSession} from '~/server/auth'

const HomePage: NextPage<{session: Session}> = ({session}) => {
  const user = session.user
  return (
    <Center h="100vh">
      <Stack spacing={'xs'} ta="center" align="center" fw={600}>
        <Avatar
          size="lg"
          radius="xl"
          src={user.image}
          alt={`${user.name} not found`}
        />
        <Stack spacing={0}>
          <Text>{user.name}</Text>
          <Text>{user.email}</Text>
        </Stack>
        <Button color="violet" onClick={() => signOut()}>
          Sign Out
        </Button>
      </Stack>
    </Center>
  )
}

export default HomePage

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerAuthSession(ctx)

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: true,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}
