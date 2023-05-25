import {Button, Group, Stack, Text, Title} from '@mantine/core'
import {NextPage} from 'next'
import {signIn, useSession} from 'next-auth/react'
import {SignOutBtn} from '~/components/auth'

const HomePage: NextPage = () => {
  const {data, status} = useSession()

  return (
    <Stack m="xl" justify="flex-start">
      <Title fz="xl">NEXT AUTH TUTORIAL</Title>
      <Group spacing="xs">
        <Text fw={900}>Status :</Text>
        <Text>{status}</Text>
      </Group>

      <div>
        <Button onClick={() => signIn()}>Signin</Button>
        {data?.user && <SignOutBtn />}
      </div>

      <Text
        mt={2}
        fz="md"
        sx={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}
      >
        {JSON.stringify(data, null, 2)}
      </Text>
    </Stack>
  )
}

export default HomePage
