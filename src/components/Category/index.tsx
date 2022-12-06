import React from 'react'

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  useBreakpointValue
} from '@chakra-ui/react'
import Card from '../Card'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Category: React.FC = () => {
  const variant = useBreakpointValue({
    base: '1fr',
    md: '1fr 1fr',
    lg: '1fr 1fr 1fr'
  })

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Categoria de {router.query.category} | Corteletti</title>
      </Head>

      <Flex
        as="main"
        w="100%"
        maxW="1024px"
        mx="auto"
        direction="column"
        mb="3em"
        px="1em"
      >
        <Heading fontWeight="bold" fontSize="2em" color="gray.700" mt="2em">
          Cardápios de Pizzas
        </Heading>

        <Grid templateColumns={variant} w="100%" gap="2em" mt="2em">
          <GridItem mx="auto">
            <Card
              title="Pizza Portuguesa"
              price="40,00"
              url="../pizza.jpeg"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolores eligendi provident dolorum dicta expedita."
            />
          </GridItem>

          <GridItem mx="auto">
            <Card
              title="Pizza Portuguesa"
              price="40,00"
              url="../pizza.jpeg"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolores eligendi provident dolorum dicta expedita."
            />
          </GridItem>

          <GridItem mx="auto">
            <Card
              title="Pizza Portuguesa"
              price="40,00"
              url="../pizza.jpeg"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolores eligendi provident dolorum dicta expedita."
            />
          </GridItem>

          <GridItem mx="auto">
            <Card
              title="Pizza Portuguesa"
              price="40,00"
              url="../pizza.jpeg"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolores eligendi provident dolorum dicta expedita."
            />
          </GridItem>

          <GridItem mx="auto">
            <Card
              title="Pizza Portuguesa"
              price="40,00"
              url="../pizza.jpeg"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolores eligendi provident dolorum dicta expedita."
            />
          </GridItem>
        </Grid>
      </Flex>
    </>
  )
}

export default Category
