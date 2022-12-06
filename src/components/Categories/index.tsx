import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import styles from './styles.module.scss'

import { Pagination, FreeMode } from 'swiper'
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'
import Link from 'next/link'

const Categories: React.FC = () => {
  const variant = useBreakpointValue({
    base: 1,
    sm: 2,
    md: 3,
    lg: 4
  })

  return (
    <Box>
      <Flex mt="2em">
        <Text as="h1" fontWeight="bold" fontSize="2em" color="gray.700">
          Categorias
        </Text>
      </Flex>

      <Flex
        w="100%"
        h="16em"
        alignItems="center"
        mx="auto"
        mt="2em"
        mb="3em"
        px="1em"
      >
        <Swiper
          className={styles.swiper}
          pagination={{
            clickable: true
          }}
          slidesPerView={variant}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination]}
        >
          <SwiperSlide>
            <Flex
              w="100%"
              h="80%"
              bg="red.500"
              borderRadius=".4rem"
              overflow="hidden"
              position="relative"
              p="1em"
            >
              <Flex
                w="100%"
                h="100%"
                direction="column"
                justifyContent="space-between"
                overflow="hidden"
              >
                <Text
                  as="h1"
                  color="white"
                  fontSize="1.5em"
                  fontWeight="bold"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  maxW="100%"
                  overflow="hidden"
                >
                  Pizzas
                </Text>

                <Text as="span" fontSize=".8em" color="white" width="40%">
                  Diversas variedades de sabores
                </Text>

                <Button
                  variant="outline"
                  borderColor="white"
                  w="fit-content"
                  color="white"
                  _hover={{ background: 'green.800', borderColor: 'green.800' }}
                >
                  <Link href="/menu/pizzas">Ver opções</Link>
                </Button>
              </Flex>

              <Box
                w="100px"
                h="100px"
                position="absolute"
                top="50%"
                transform="translateY(-55%)"
                borderRadius="100%"
                right="1.2em"
                bg="white"
              >
                <Image
                  src="pizza.jpeg"
                  alt="categoria de pizzas"
                  w="100%"
                  h="100%"
                  borderRadius="100%"
                  border="2px solid white"
                />
              </Box>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              w="100%"
              h="80%"
              bg="yellow.500"
              borderRadius=".4rem"
              overflow="hidden"
              position="relative"
              p="1em"
            >
              <Flex
                w="100%"
                h="100%"
                direction="column"
                justifyContent="space-between"
                overflow="hidden"
              >
                <Text
                  as="h1"
                  color="white"
                  fontSize="1.5em"
                  fontWeight="bold"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  maxW="100%"
                  overflow="hidden"
                >
                  Lasanhas
                </Text>

                <Text as="span" fontSize=".8em" color="white" width="40%">
                  Escolha a sua favorita
                </Text>

                <Button
                  variant="outline"
                  borderColor="white"
                  w="fit-content"
                  color="white"
                  _hover={{ background: 'green.800', borderColor: 'green.800' }}
                >
                  <Link href="/menu/pizzas">Ver opções</Link>
                </Button>
              </Flex>

              <Box
                w="100px"
                h="100px"
                position="absolute"
                top="50%"
                transform="translateY(-55%)"
                borderRadius="100%"
                right="1.2em"
                bg="white"
              >
                <Image
                  src="lasanha.jpeg"
                  alt="categoria de lasanhas"
                  w="100%"
                  h="100%"
                  borderRadius="100%"
                  border="2px solid white"
                />
              </Box>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              w="100%"
              h="80%"
              bg="green.700"
              borderRadius=".4rem"
              overflow="hidden"
              position="relative"
              p="1em"
            >
              <Flex
                w="100%"
                h="100%"
                direction="column"
                justifyContent="space-between"
                overflow="hidden"
              >
                <Text
                  as="h1"
                  color="white"
                  fontSize="1.5em"
                  fontWeight="bold"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  maxW="100%"
                  overflow="hidden"
                >
                  Macarronadas
                </Text>

                <Text as="span" fontSize=".8em" color="white" width="40%">
                  Qual da match com você hojê?
                </Text>

                <Button
                  variant="outline"
                  borderColor="white"
                  w="fit-content"
                  color="white"
                  _hover={{ background: 'green.800', borderColor: 'green.800' }}
                >
                  <Link href="/menu/pizzas">Ver opções</Link>
                </Button>
              </Flex>

              <Box
                w="100px"
                h="100px"
                position="absolute"
                top="50%"
                transform="translateY(-55%)"
                borderRadius="100%"
                right="1.2em"
                bg="white"
              >
                <Image
                  src="macarrão.webp"
                  alt="categoria de macarronadas"
                  w="100%"
                  h="100%"
                  borderRadius="100%"
                  border="2px solid white"
                />
              </Box>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              w="100%"
              h="80%"
              bg="yellow.800"
              borderRadius=".4rem"
              overflow="hidden"
              position="relative"
              p="1em"
            >
              <Flex
                w="100%"
                h="100%"
                direction="column"
                justifyContent="space-between"
                overflow="hidden"
              >
                <Text
                  as="h1"
                  color="white"
                  fontSize="1.5em"
                  fontWeight="bold"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  maxW="100%"
                  overflow="hidden"
                >
                  Risottos
                </Text>

                <Text as="span" fontSize=".8em" color="white" width="40%">
                  Escolha o seu e seja feliz
                </Text>

                <Button
                  variant="outline"
                  borderColor="white"
                  w="fit-content"
                  color="white"
                  _hover={{ background: 'green.800', borderColor: 'green.800' }}
                >
                  <Link href="/menu/pizzas">Ver opções</Link>
                </Button>
              </Flex>

              <Box
                w="100px"
                h="100px"
                position="absolute"
                top="50%"
                transform="translateY(-55%)"
                borderRadius="100%"
                right="1.2em"
                bg="white"
              >
                <Image
                  src="risotto.jpeg"
                  alt="categoria de Risottos"
                  w="100%"
                  h="100%"
                  borderRadius="100%"
                  border="2px solid white"
                />
              </Box>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              w="100%"
              h="80%"
              bg="red.500"
              borderRadius=".4rem"
              overflow="hidden"
              position="relative"
              p="1em"
            >
              <Flex
                w="100%"
                h="100%"
                direction="column"
                justifyContent="space-between"
                overflow="hidden"
              >
                <Text
                  as="h1"
                  color="white"
                  fontSize="1.5em"
                  fontWeight="bold"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  maxW="100%"
                  overflow="hidden"
                >
                  Pizzas
                </Text>

                <Text as="span" fontSize=".8em" color="white" width="40%">
                  Diversas variedades de sabores
                </Text>

                <Button
                  variant="outline"
                  borderColor="white"
                  w="fit-content"
                  color="white"
                  _hover={{ background: 'green.800', borderColor: 'green.800' }}
                >
                  <Link href="/menu/pizzas">Ver opções</Link>
                </Button>
              </Flex>

              <Box
                w="100px"
                h="100px"
                position="absolute"
                top="50%"
                transform="translateY(-55%)"
                borderRadius="100%"
                right="1.2em"
                bg="white"
              >
                <Image
                  src="pizza.jpeg"
                  alt="categoria de pizzas"
                  w="100%"
                  h="100%"
                  borderRadius="100%"
                  border="2px solid white"
                />
              </Box>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              w="100%"
              h="80%"
              bg="yellow.500"
              borderRadius=".4rem"
              overflow="hidden"
              position="relative"
              p="1em"
            >
              <Flex
                w="100%"
                h="100%"
                direction="column"
                justifyContent="space-between"
                overflow="hidden"
              >
                <Text
                  as="h1"
                  color="white"
                  fontSize="1.5em"
                  fontWeight="bold"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  maxW="100%"
                  overflow="hidden"
                >
                  Lasanhas
                </Text>

                <Text as="span" fontSize=".8em" color="white" width="40%">
                  Escolha a sua favorita
                </Text>

                <Button
                  variant="outline"
                  borderColor="white"
                  w="fit-content"
                  color="white"
                  _hover={{ background: 'green.800', borderColor: 'green.800' }}
                >
                  <Link href="/menu/pizzas">Ver opções</Link>
                </Button>
              </Flex>

              <Box
                w="100px"
                h="100px"
                position="absolute"
                top="50%"
                transform="translateY(-55%)"
                borderRadius="100%"
                right="1.2em"
                bg="white"
              >
                <Image
                  src="lasanha.jpeg"
                  alt="categoria de lasanhas"
                  w="100%"
                  h="100%"
                  borderRadius="100%"
                  border="2px solid white"
                />
              </Box>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              w="100%"
              h="80%"
              bg="green.800"
              borderRadius=".4rem"
              overflow="hidden"
              position="relative"
              p="1em"
            >
              <Flex
                w="100%"
                h="100%"
                direction="column"
                justifyContent="space-between"
                overflow="hidden"
              >
                <Text
                  as="h1"
                  color="white"
                  fontSize="1.5em"
                  fontWeight="bold"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  maxW="100%"
                  overflow="hidden"
                >
                  Macarronadas
                </Text>

                <Text as="span" fontSize=".8em" color="white" width="40%">
                  Qual da match com você hoje?
                </Text>

                <Button
                  variant="outline"
                  borderColor="white"
                  w="fit-content"
                  color="white"
                  _hover={{ background: 'green.800', borderColor: 'green.800' }}
                >
                  <Link href="/menu/pizzas">Ver opções</Link>
                </Button>
              </Flex>

              <Box
                w="100px"
                h="100px"
                position="absolute"
                top="50%"
                transform="translateY(-55%)"
                borderRadius="100%"
                right="1.2em"
                bg="white"
              >
                <Image
                  src="macarrão.webp"
                  alt="categoria de macarronadas"
                  w="100%"
                  h="100%"
                  borderRadius="100%"
                  border="2px solid white"
                />
              </Box>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              w="100%"
              h="80%"
              bg="yellow.800"
              borderRadius=".4rem"
              overflow="hidden"
              position="relative"
              p="1em"
            >
              <Flex
                w="100%"
                h="100%"
                direction="column"
                justifyContent="space-between"
                overflow="hidden"
              >
                <Text
                  as="h1"
                  color="white"
                  fontSize="1.5em"
                  fontWeight="bold"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  maxW="100%"
                  overflow="hidden"
                >
                  Risottos
                </Text>

                <Text as="span" fontSize=".8em" color="white" width="40%">
                  Escolha o seu e seja feliz
                </Text>

                <Button
                  variant="outline"
                  borderColor="white"
                  w="fit-content"
                  color="white"
                  _hover={{ background: 'green.800', borderColor: 'green.800' }}
                >
                  <Link href="/menu/pizzas">Ver opções</Link>
                </Button>
              </Flex>

              <Box
                w="100px"
                h="100px"
                position="absolute"
                top="50%"
                transform="translateY(-55%)"
                borderRadius="100%"
                right="1.2em"
                bg="white"
              >
                <Image
                  src="risotto.jpeg"
                  alt="categoria de Risottos"
                  w="100%"
                  h="100%"
                  borderRadius="100%"
                  border="2px solid white"
                />
              </Box>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Box>
  )
}

export default Categories
