import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  List,
  ListItem,
  Text,
  theme
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import {
  BsChatDotsFill,
  BsChevronRight,
  BsFillPersonFill,
  BsFillShieldFill,
  BsJournalText
} from 'react-icons/bs'
import { FaShoppingBag } from 'react-icons/fa'

interface DashboardProps {
  children: ReactNode
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const router = useRouter()

  return (
    <Flex
      as="main"
      direction={['column-reverse', 'column-reverse', 'row']}
      maxW="1024px"
      mx="auto"
    >
      <Flex
        w={['100%', '100%', '40%']}
        justifyContent="flex-start"
        py="3em"
        px="1em"
        direction="column"
      >
        <Flex px="2em" py="0.5em" alignItems="center" h="min-content" gap="1em">
          <Avatar name="Pablo Caliari Ferrari" size="md" />

          <Box overflow="hidden">
            <Text
              color="gray.400"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              overflow="hidden"
            >
              pabloferrari@gmail.com
            </Text>

            <Text mt="-0.5em">
              <Button
                variant="unstyled"
                color="gray.700"
                fontWeight="medium"
                _hover={{ color: 'red.500' }}
              >
                Sair
              </Button>
            </Text>
          </Box>
        </Flex>

        <Divider />

        <List w="100%">
          <Link href="/dashboard/account/profile">
            <ListItem
              px="2em"
              fontWeight="medium"
              fontSize="1.2em"
              color={
                router.query.router === 'profile' ? 'yellow.500' : 'gray.700'
              }
              py="1em"
              justifyContent="space-between"
              alignItems="center"
              display="flex"
              _hover={{ bg: 'gray.50', color: 'yellow.600' }}
            >
              <Flex alignItems="center">
                <Icon as={BsFillPersonFill} />
                <Text ml="1em">Conta</Text>
              </Flex>

              <Flex>
                <Icon as={BsChevronRight} />
              </Flex>
            </ListItem>
          </Link>

          <Divider />

          <Link href="/">
            <ListItem
              px="2em"
              fontWeight="medium"
              fontSize="1.2em"
              color="gray.700"
              py="1em"
              justifyContent="space-between"
              alignItems="center"
              display="flex"
              _hover={{ bg: 'gray.50', color: 'yellow.500' }}
            >
              <Flex alignItems="center">
                <Icon as={BsChatDotsFill} />
                <Text ml="1em">Chat</Text>
              </Flex>

              <Flex>
                <Flex
                  w="1.5em"
                  h="1.5em"
                  mr="0.5em"
                  alignItems="center"
                  fontSize="0.7em"
                  justifyContent="center"
                  bg="red.500"
                  rounded="full"
                  color="white"
                >
                  2
                </Flex>
                <Icon as={BsChevronRight} />
              </Flex>
            </ListItem>
          </Link>

          <Divider />

          <Link href="/dashboard/account/bag">
            <ListItem
              px="2em"
              fontWeight="medium"
              fontSize="1.2em"
              color={router.query.router === 'bag' ? 'yellow.500' : 'gray.700'}
              py="1em"
              justifyContent="space-between"
              alignItems="center"
              display="flex"
              _hover={{ bg: 'gray.50', color: 'yellow.600' }}
            >
              <Flex alignItems="center">
                <Icon as={FaShoppingBag} />
                <Text ml="1em">Sacola</Text>
              </Flex>

              <Flex>
                <Flex
                  w="1.5em"
                  h="1.5em"
                  mr="0.5em"
                  alignItems="center"
                  fontSize="0.7em"
                  justifyContent="center"
                  bg="red.500"
                  rounded="full"
                  color="white"
                >
                  2
                </Flex>
                <Icon as={BsChevronRight} />
              </Flex>
            </ListItem>
          </Link>

          <Divider />

          <Link href="/dashboard/account/requests">
            <ListItem
              px="2em"
              fontWeight="medium"
              fontSize="1.2em"
              color={
                router.query.router === 'requests' ? 'yellow.500' : 'gray.700'
              }
              py="1em"
              justifyContent="space-between"
              alignItems="center"
              display="flex"
              _hover={{ bg: 'gray.50', color: 'yellow.600' }}
            >
              <Flex alignItems="center">
                <Icon as={BsJournalText} />
                <Text ml="1em">Pedidos</Text>
              </Flex>

              <Flex>
                <Flex
                  w="1.5em"
                  h="1.5em"
                  mr="0.5em"
                  alignItems="center"
                  fontSize="0.7em"
                  justifyContent="center"
                  bg="red.500"
                  rounded="full"
                  color="white"
                >
                  !
                </Flex>
                <Icon as={BsChevronRight} />
              </Flex>
            </ListItem>
          </Link>

          <Divider />

          <Link href="/dashboard/account/privacy">
            <ListItem
              px="2em"
              fontWeight="medium"
              fontSize="1.2em"
              color={
                router.query.router === 'privacy' ? 'yellow.500' : 'gray.700'
              }
              py="1em"
              justifyContent="space-between"
              alignItems="center"
              display="flex"
              _hover={{ bg: 'gray.50', color: 'yellow.600' }}
            >
              <Flex alignItems="center">
                <Icon as={BsFillShieldFill} />
                <Text ml="1em">Privacidade</Text>
              </Flex>

              <Flex>
                <Icon as={BsChevronRight} />
              </Flex>
            </ListItem>
          </Link>

          <Divider />
        </List>
      </Flex>

      <Box
        p="2em"
        minH="100vh"
        w={['100%', '100%', '60%']}
        my="2em"
        borderLeft={`1px solid ${theme.colors.gray[200]}`}
      >
        {children}
      </Box>
    </Flex>
  )
}

export default Dashboard
