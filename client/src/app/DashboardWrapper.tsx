import React from 'react'

type Props = {children: React.ReactNode}

function DashboardWrapper({children}: Props) {
  return (
    <div>{children}</div>
  )
}

export default DashboardWrapper