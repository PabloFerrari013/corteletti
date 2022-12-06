import {
  Flex,
  Divider,
  Button,
  Text,
  Box,
  Image,
  HStack,
  Textarea,
  useBreakpointValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from './styles.module.scss'

import { Pagination, FreeMode } from 'swiper'
import Card from '../Card'
import { Input } from '../Input'

const Bag: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const variant = useBreakpointValue({
    base: 1,
    lg: 2
  })

  return (
    <Box>
      <Text as="h2" fontSize="1.6em" color="gray.700" fontWeight="medium">
        Sacola
      </Text>

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
        <Box>
          <Text as="h2" fontSize="1em" color="gray.700" fontWeight="medium">
            Endereço
          </Text>

          <Text as="p" fontSize="1em" color="gray.700">
            Av. Antônio Gil Veloso, 1265 - Itapuã, Vila Velha - ES, 29101-735
          </Text>

          <Box mt="1em">
            <Text as="h2" fontSize="1em" color="gray.700" fontWeight="medium">
              Número
            </Text>

            <Text as="p" fontSize="1em" color="gray.700">
              240
            </Text>
          </Box>

          <Button color="gray.700" mt="1em" onClick={onOpen}>
            Alterar Endereço
          </Button>

          <Modal isOpen={isOpen} onClose={onClose} size={['xs', 'sm']}>
            <ModalOverlay />

            <ModalContent>
              <ModalHeader>Alterar endereço</ModalHeader>

              <ModalCloseButton />

              <ModalBody>
                <FormControl>
                  <Input label="CEP" name="cep" type="number" />

                  <Input label="Número" name="number" type="number" />

                  <Button colorScheme="green" mt="1em">
                    Procurar
                  </Button>
                </FormControl>

                <Divider my="1em" />

                <Box>
                  <Box>
                    <Text
                      as="h2"
                      fontWeight="medium"
                      fontSize="1em"
                      color="gray.700"
                    >
                      Endereço
                    </Text>

                    <Text as="p" color="gray.700" fontSize="1em">
                      Av. Antônio Gil Veloso, 1265 - Itapuã, Vila Velha - ES,
                      29101-735
                    </Text>
                  </Box>

                  <Box mt="1em">
                    <Text
                      as="h2"
                      fontWeight="medium"
                      fontSize="1em"
                      color="gray.700"
                    >
                      Número
                    </Text>

                    <Text as="p" color="gray.600" fontSize="1em">
                      240
                    </Text>
                  </Box>

                  <HStack spacing="1em" mt="1em">
                    <Button colorScheme="gray">Usar só essa vez</Button>

                    <Button colorScheme="green">Salvar</Button>
                  </HStack>
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>

        <Box mt="2em">
          <Text as="h2" fontSize="1em" color="gray.800" fontWeight="medium">
            Observação
          </Text>

          <Textarea mt="1em" placeholder="Digite aqui..." />
        </Box>
      </Box>

      <Text as="p" fontSize="1.3em" color="green.500" mt="1em">
        $40,00
      </Text>

      <Flex gap="1em" mt="2em" flexWrap="wrap">
        <Button colorScheme="green">Finalizar pedido</Button>

        <Button colorScheme="red">Limpar sacola</Button>
      </Flex>

      <Divider my="3em" />

      <Box>
        <Text as="h2" fontSize="1.6em" color="gray.700" fontWeight="medium">
          Peça também
        </Text>

        <Flex mt="2em">
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
              <Flex justifyContent="center">
                <Card
                  title="Pizza Portuguesa"
                  price="40,00"
                  url="../../pizza.jpeg"
                  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolores eligendi provident dolorum dicta expedita."
                />
              </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <Flex justifyContent="center">
                <Card
                  title="Pizza Portuguesa"
                  price="40,00"
                  url="../../pizza.jpeg"
                  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolores eligendi provident dolorum dicta expedita."
                />
              </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <Flex justifyContent="center">
                <Card
                  title="Pizza Portuguesa"
                  price="40,00"
                  url="../../pizza.jpeg"
                  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolores eligendi provident dolorum dicta expedita."
                />
              </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <Flex justifyContent="center">
                <Card
                  title="Pizza Portuguesa"
                  price="40,00"
                  url="../../pizza.jpeg"
                  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolores eligendi provident dolorum dicta expedita."
                />
              </Flex>
            </SwiperSlide>
          </Swiper>
        </Flex>
      </Box>
    </Box>
  )
}

export default Bag
