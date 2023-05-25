import {ActionIcon, Affix, Transition} from '@mantine/core'
import {useWindowScroll} from '@mantine/hooks'
import {ArrowUp} from 'tabler-icons-react'

export default function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <Affix position={{bottom: 20, right: 20}}>
      <Transition transition="scale" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <ActionIcon
            style={transitionStyles}
            onClick={() => scrollTo({y: 0})}
            color="dark"
            size="xl"
            radius="xl"
            variant="filled"
          >
            <ArrowUp size={23} color="white" />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  )
}
