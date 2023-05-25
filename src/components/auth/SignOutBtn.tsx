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
    try {
      const data = await signOut({redirect: false, callbackUrl})
      router.push(data.url)
    } catch (error) {
      throw new Error('Something went wrong. Please try again later.')
    }
  }

  return <Button onClick={onSignOutHandle}>Sign Out</Button>
}

export default SignOutBtn
