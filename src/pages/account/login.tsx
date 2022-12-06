import Head from 'next/head'
import Link from 'next/link'

import { Box, Button, Flex, Text } from '@chakra-ui/react'

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Input } from '../../components/Input'
import { api } from '../../services/api'

const LoginFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório!').email('E-mail inválido'),
  name: yup.string().required('Nome obrigatório!'),
  password: yup.string().required('Senha obrigatória!')
})

interface User {
  name: string
  email: string
  password: string
}

export default function Login() {
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(LoginFormSchema)
  })

  const showToastMessage = (type: 'success' | 'error', message: string) => {
    if (type === 'success') {
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT
      })
    } else {
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT
      })
    }
  }

  async function login(data: User) {
    try {
      await api.post('/users/login', { ...data, token: '' })

      showToastMessage('success', 'Criação de usuário realizada com sucesso!')
    } catch (error) {
      showToastMessage('error', 'Erro interno ao realizar login')
    }
  }

  async function signIn({ name, email, password }: User) {
    try {
      showToastMessage('success', 'Login realizado com sucesso!')

      await login({ name, email, password })
    } catch (error) {
      showToastMessage('error', 'Erro ao fazer login')
    }
  }

  const handleSignIn: SubmitHandler<FieldValues> = async values => {
    await signIn({
      name: values.name,
      email: values.email,
      password: values.password
    })
  }

  return (
    <>
      <Head>
        <title>Corteletti | Login</title>
      </Head>

      <ToastContainer theme="light" />

      <Flex
        justify="center"
        alignItems="center"
        bg="white"
        w="100%"
        minH="100vh"
        px="6"
      >
        <Flex
          as="form"
          w="100%"
          maxW="30em"
          mx="auto"
          p={['6', '8']}
          boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px;"
          direction="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Text as="h1" fontSize="1.5em" fontWeight="bold" color="gray.700">
            Login
          </Text>

          <Input
            label="Nome"
            placeholder="Ex: Corteletti"
            error={formState.errors.name}
            {...register('name')}
          />

          <Input
            label="E-mail"
            type="email"
            placeholder="Ex: corteletti@gmail.com"
            error={formState.errors.email}
            {...register('email')}
          />

          <Input
            label="Senha"
            isPassword={true}
            placeholder="********"
            error={formState.errors.password}
            {...register('password')}
          />

          <Box
            w="fit-content"
            mt="1.5em"
            color="blue.500"
            textDecoration="underline"
            fontSize=".9em"
            _hover={{ filter: 'brightness(0.9)' }}
          >
            <Link href="/account/create">Criar conta</Link>
          </Box>

          <Button
            type="submit"
            variant="solid"
            bg="green.900"
            color="white"
            fontWeight="medium"
            w={['100%', '10em']}
            mt="2em"
            _hover={{ bg: 'green.800' }}
            isLoading={formState.isSubmitting}
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
