import {showNotification} from '@mantine/notifications'
import {CircleCheck, CircleX} from 'tabler-icons-react'
import {capitalizeWords} from '~/helpers'

interface SuccessNotificationProps {
  msg: string
}

export const SuccessNotification: React.FC<SuccessNotificationProps> = ({
  msg,
}) => {
  showNotification({
    autoClose: 5000,
    title: 'Success!',
    message: capitalizeWords(msg),
    icon: <CircleCheck />,
    color: 'teal',
  })

  // Render null since this component doesn't directly return a React element
  return null
}

interface ErrorNotificationProps {
  code: string | undefined
  msg: string
}

export const ErrorNotification: React.FC<ErrorNotificationProps> = ({
  code,
  msg,
}) => {
  showNotification({
    autoClose: 5000,
    title: code,
    message: msg,
    icon: <CircleX />,
    color: 'red',
  })

  // Render null since this component doesn't directly return a React element
  return null
}
