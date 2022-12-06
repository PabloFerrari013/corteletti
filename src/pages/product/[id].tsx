import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Product: React.FC = () => {
  const [count, setCount] = useState(1)

  return (
    <Flex
      as="main"
      my="3em"
      maxW="1024px"
      minH="100vh"
      w="100%"
      px="1em"
      mx="auto"
      direction={['column', 'column', 'row']}
      gap={['2em', '2em', '4em']}
    >
      <Box w={['100%', '100%', '45%']} bg="yellow.500" h="min-content">
        <Image
          sizes="100%"
          src="../pizza.jpeg"
          alt="pizza"
          transform={['', '', 'translate(5%, 5%)']}
        />
      </Box>

      <Box w={['100%', '100%', '65%']}>
        <Text as="h1" fontSize="2em" color="gray.700" fontWeight="bold">
          Pizza Portuguesa
        </Text>

        <Text fontSize="1em" color="gray.700" mt="0.5em">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque
          quidem id ducimus, doloremque corrupti beatae blanditiis cum inventore
          at quaerat aperiam similique maiores ullam aspernatur totam magnam
          expedita sed?
        </Text>

        <Text fontSize="1.5em" color="green.700" mt="0.5em">
          R$40,00
        </Text>

        <Flex gap="1em" flexWrap="wrap" mt="1em">
          <Flex
            alignItems="center"
            justifyContent="space-between"
            minW="8em"
            gap="0.5em"
            bg="gray.100"
            borderRadius="xl"
            color="gray.700"
          >
            <Button
              onClick={() => {
                count - 1 >= 1 && setCount(c => c - 1)
              }}
            >
              -
            </Button>

            <Text>{count}</Text>

            <Button onClick={() => setCount(c => c + 1)}>+</Button>
          </Flex>

          <Button
            variant="solid"
            bg="green.800"
            color="white"
            _hover={{ bg: 'green.700' }}
          >
            Adicionar
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Product
