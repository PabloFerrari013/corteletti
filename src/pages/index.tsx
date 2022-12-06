import { Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Categories from '../components/Categories'
import Offers from '../components/Offers'
import { useSession } from '../contexts/userSessionContext'

const pages: React.FC = () => {
  const { session } = useSession()

  return (
    <>
      <Head>
        <title>Home | Corteletti</title>
      </Head>

      <Flex as="main" justifyContent="center" minH="100vh" h="100%" w="100%">
        <Flex w="100%" maxW="1024px" mx="auto" direction="column">
          <Categories />

          <Offers />
        </Flex>
      </Flex>
    </>
  )
}

export default pages
