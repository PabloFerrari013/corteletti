import { Flex } from '@chakra-ui/react'
import React from 'react'
import Category from '../../components/Category'

const Menu: React.FC = () => {
  return (
    <Flex as="main" justifyContent="center" minH="100vh" h="100%" w="100%">
      <Category />
    </Flex>
  )
}

export default Menu
