import React, {type ReactNode} from 'react'

type BaseLayoutProps = {
  children: ReactNode
}

const BaseLayout: React.FC<BaseLayoutProps> = ({children}) => <>{children}</>
export default BaseLayout
