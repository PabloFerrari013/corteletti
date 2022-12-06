import { Flex, Text } from '@chakra-ui/react'

import React from 'react'
import Head from 'next/head'

const Verification: React.FC = () => {
  return (
    <>
      <Head>
        <title>Corteletti | verificação de conta</title>
      </Head>

      <Flex
        justify="center"
        alignItems="center"
        bg="white"
        w="100%"
        minH="100vh"
        px="6"
      >
        <Flex
          w="100%"
          maxW="30em"
          mx="auto"
          p={['6', '8']}
          boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px;"
          direction="column"
        >
          <Text as="h1" fontSize="1.5em" fontWeight="bold" color="gray.700">
            Verificação de conta
          </Text>

          <Text as="p" mt="1em">
            Enviamos a você um e-mail contendo um link de verificação para
            termos certeza que este e-mail realmente é seu.
          </Text>
        </Flex>
      </Flex>
    </>
  )
}

export default Verification
