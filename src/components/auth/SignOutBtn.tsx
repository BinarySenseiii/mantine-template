import {Button} from '@mantine/core'
import {signOut} from 'next-auth/react'
import {useRouter} from 'next/router'
import React from 'react'

type SignOutProps = {
  callbackUrl?: string
}

const SignOutBtn: React.FC<SignOutProps> = ({callbackUrl = '/auth/signin'}) => {
  const router = useRouter()

  const onSignOutHandle = async () => {
    const data = await signOut({redirect: false, callbackUrl})
    router.push(data.url)
  }

  return <Button onClick={onSignOutHandle}>SignOut</Button>
}

export default SignOutBtn
