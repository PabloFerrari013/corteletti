import { Box, Flex, Icon, Spinner, Text } from '@chakra-ui/react'
import { AxiosError, AxiosResponse } from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { RiCheckboxCircleFill, RiCloseCircleFill } from 'react-icons/ri'
import { api } from '../../../services/api'

interface UserData {
  user: {
    data: {
      name: string
      email: string
      password: string
      token: string
      status: boolean
    }
  }
}

const Verification = () => {
  const { query } = useRouter()
  const token = query.token

  const [status, setStatus] = useState<
    'loading' | 'tokenError' | 'error' | 'success'
  >('loading')

  const router = useRouter()

  const findUser = async (email: string) => {
    try {
      const response = await api.get<UserData>(`/users/token/${email}/${token}`)

      return response.data.user.data
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    const email = window.localStorage.getItem('email')

    if (email !== '' && token) {
      findUser(email).then(data => {
        if (data.response?.data?.error) {
          if (data.response.status === 401) {
            setStatus('tokenError')

            setTimeout(() => router.push('/account/create'), 2000)

            return
          }

          setStatus('error')

          setTimeout(() => router.push('/account/create'), 2000)

          return
        }

        console.log(data)

        setStatus('success')

        setTimeout(() => router.push('/'), 2000)

        return
      })
    }
  }, [token])

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
          textAlign="center"
          justifyContent="center"
          alignItems="center"
        >
          <Text as="h1" fontSize="1.5em" fontWeight="bold" color="gray.700">
            {status === 'loading' && 'Verificando token'}
            {status === 'error' && 'Erro interno'}
            {status === 'tokenError' && 'Token inválido'}
            {status === 'success' && 'Token verificado com sucesso'}
          </Text>

          <Box mt="1.5em">
            {status === 'loading' && <Spinner size="lg" color="yellow.500" />}

            {(status === 'error' || status === 'tokenError') && (
              <Icon as={RiCloseCircleFill} color="red.500" fontSize="3em" />
            )}

            {status === 'success' && (
              <Icon
                as={RiCheckboxCircleFill}
                color="green.800"
                fontSize="3em"
              />
            )}
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default Verification
