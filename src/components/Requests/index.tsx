import { Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Requests: React.FC = () => {
  return (
    <Box>
      <Text as="h2" fontSize="1.6em" color="gray.700" fontWeight="medium">
        Pedido atual
      </Text>

      <Flex w="100%" my="2em">
        <Flex position="relative" borderTop="2px solid gray" w="100%">
          <Flex
            w="1rem"
            h="1rem"
            rounded="full"
            bg="green"
            transform="translateY(-50%)"
            mr="auto"
          />

          <Text
            as="span"
            position="absolute"
            top="110%"
            left="0%"
            transform="translate(-35%, -50%)"
            fontSize="0.6em"
            whiteSpace="nowrap"
          >
            Pedido feito
          </Text>
        </Flex>

        <Flex position="relative" borderTop="2px solid gray" w="min-content">
          <Flex
            w="1rem"
            h="1rem"
            rounded="full"
            bg="gray"
            transform="translate(-50%, -50%)"
            mx="auto"
          />

          <Text
            as="span"
            position="absolute"
            top="110%"
            left="0%"
            transform="translate(-50%, -50%)"
            fontSize="0.6em"
            whiteSpace="nowrap"
          >
            Preparando seu pedido
          </Text>
        </Flex>

        <Flex position="relative" borderTop="2px solid gray" w="100%">
          <Flex
            w="1rem"
            h="1rem"
            rounded="full"
            bg="gray"
            transform="translateY( -50%)"
            ml="auto"
          />

          <Text
            as="span"
            position="absolute"
            top="110%"
            right="0%"
            transform="translate(35%, -50%)"
            fontSize="0.6em"
            whiteSpace="nowrap"
          >
            A caminho
          </Text>
        </Flex>
      </Flex>

      <Box>
        <Flex mt="1.5em" gap="1.5em" direction={['column', 'row']}>
          <Image
            src="../../pizza.jpeg"
            rounded="md"
            w={['100%', '25%']}
            h="auto"
            objectFit="cover"
          />

          <Box>
            <Link href="/product/Pizza%20Portuguesa">
              <Text
                as="h2"
                fontSize="1em"
                color="gray.800"
                fontWeight="medium"
                _hover={{ color: 'yellow.500' }}
              >
                Pizza portuguesa
              </Text>
            </Link>

            <Text as="p" fontSize="1em" color="gray.700" mt="0.5em">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem numquam dolor nesciunt atque, deleniti laudantium fuga
              laboriosam molestias minima perferendis!
            </Text>
          </Box>
        </Flex>

        <Flex mt="1.5em" gap="1.5em" direction={['column', 'row']}>
          <Image
            src="../../pizza.jpeg"
            rounded="md"
            w={['100%', '25%']}
            h="auto"
            objectFit="cover"
          />

          <Box>
            <Link href="/product/Pizza%20Portuguesa">
              <Text
                as="h2"
                fontSize="1em"
                color="gray.800"
                fontWeight="medium"
                _hover={{ color: 'yellow.500' }}
              >
                Pizza portuguesa
              </Text>
            </Link>

            <Text as="p" fontSize="1em" color="gray.700" mt="0.5em">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem numquam dolor nesciunt atque, deleniti laudantium fuga
              laboriosam molestias minima perferendis!
            </Text>
          </Box>
        </Flex>
      </Box>

      <Divider my="2em" />

      <Box>
        <Text as="p" fontSize="1em" color="gray.800" fontWeight="medium">
          Observação
        </Text>

        <Text as="p" fontSize="1em" color="gray.700" mt="0.5em">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          numquam dolor nesciunt atque, deleniti laudantium fuga laboriosam
          molestias minima perferendis!
        </Text>

        <Text as="p" fontSize="1.3em" color="green.500" mt="1em">
          $40,00
        </Text>

        <Button colorScheme="red" mt="2em">
          Cancelar pedido
        </Button>
      </Box>

      <Divider my="3em" />

      <Box>
        <Text as="h2" fontSize="1.6em" color="gray.700" fontWeight="medium">
          Histórico
        </Text>

        <Flex mt="1.5em" gap="2em" direction="column">
          <Flex gap="1.5em" direction={['column', 'row']}>
            <Image
              src="../../pizza.jpeg"
              rounded="md"
              w={['100%', '25%']}
              objectFit="cover"
            />

            <Box>
              <Text as="time" fontSize="0.7em" color="gray.700">
                06 de nov 2022
              </Text>

              <Link href="/product/Pizza%20Portuguesa">
                <Text
                  as="h2"
                  fontSize="1em"
                  color="gray.800"
                  fontWeight="medium"
                  _hover={{ color: 'yellow.500' }}
                >
                  Pizza portuguesa
                </Text>
              </Link>

              <Text as="p" fontSize="0.8em" color="gray.700" mt="0.5em">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem numquam dolor nesciunt atque, deleniti laudantium
                fuga laboriosam molestias minima perferendis!
              </Text>

              <Link href={`/product/1`}>
                <Button colorScheme="green" mt="1em">
                  Pedir novamente
                </Button>
              </Link>
            </Box>
          </Flex>

          <Flex gap="1.5em" direction={['column', 'row']}>
            <Image
              src="../../pizza.jpeg"
              rounded="md"
              w={['100%', '25%']}
              objectFit="cover"
            />

            <Box>
              <Text as="time" fontSize="0.7em" color="gray.700">
                06 de nov 2022
              </Text>

              <Link href="/product/Pizza%20Portuguesa">
                <Text
                  as="h2"
                  fontSize="1em"
                  color="gray.800"
                  fontWeight="medium"
                  _hover={{ color: 'yellow.500' }}
                >
                  Pizza portuguesa
                </Text>
              </Link>

              <Text as="p" fontSize="0.8em" color="gray.700" mt="0.5em">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem numquam dolor nesciunt atque, deleniti laudantium
                fuga laboriosam molestias minima perferendis!
              </Text>

              <Link href={`/product/1`}>
                <Button colorScheme="green" mt="1em">
                  Pedir novamente
                </Button>
              </Link>
            </Box>
          </Flex>
        </Flex>

        <Button colorScheme="orange" mt="3em" w="100%">
          Carregar mais
        </Button>
      </Box>
    </Box>
  )
}

export default Requests
