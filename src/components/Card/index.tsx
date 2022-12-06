import {
  Card as ChakraCard,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
  Flex,
  Box,
  HStack
} from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'

interface CardProps {
  price: string
  description: string
  url: string
  title: string
}

const Card: React.FC<CardProps> = ({ price, description, url, title }) => {
  const [count, setCount] = useState(1)

  return (
    <ChakraCard w="100%" mb="3em">
      <CardBody>
        <Image
          src={url}
          borderRadius="lg"
          w="100%"
          h="12em"
          objectFit="cover"
        />

        <Stack mt="6" spacing="3">
          <Link href={`/product/${title}`}>
            <Heading size="md" _hover={{ color: 'yellow.500' }}>
              {title}
            </Heading>
          </Link>

          <Text>{description}</Text>

          <Text color="green.600" fontSize="1.5em">
            ${price}
          </Text>
        </Stack>
      </CardBody>

      <Divider />

      <CardFooter>
        <Flex gap="1em" flexWrap="wrap">
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
      </CardFooter>
    </ChakraCard>
  )
}

export default Card
