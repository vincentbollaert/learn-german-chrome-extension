import React from 'react'
import styled from 'styled-components'
import { useGetDictionaryQuery } from './api'

const Wrap = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--white-smoke);
  padding: var(--size-xlg);
  color: var(--arsenic);
`

const Header: React.FC = () => {
  const { data: dictionary } = useGetDictionaryQuery<any>(undefined)

  if (!dictionary) {
    return <div>Loading...</div>
  }

  return <Wrap>{JSON.stringify(dictionary)}</Wrap>
}

export default Header
