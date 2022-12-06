import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Input,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useBreakpointValue,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'

const SearchBox: React.FC = () => {
  const [isFocus, setFocus] = useState(false)
  const variant = useBreakpointValue({
    base: false,
    md: true
  })
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      position="relative"
      w={['fit-content', 'fit-content', '400px']}
      ml={['auto']}
      mr={['0', '0.5rem', 'auto']}
    >
      {variant ? (
        <Flex
          flex="1"
          color="gray.700"
          position="relative"
          borderRadius={isFocus ? 'lg' : 'full'}
          borderBottomRadius={isFocus ? 'none' : 'full'}
          boxShadow="base"
        >
          <Flex as="label" w="100%" alignItems="center" borderRadius="full">
            <Input
              color="gray.700"
              variant="unstyled"
              py="4"
              px="6"
              placeholder="Buscar na plataforma"
              _placeholder={{ color: 'gray.400' }}
              onFocus={() => setFocus(true)}
              onBlur={() => setTimeout(() => setFocus(false), 1000)}
            />

            <Icon
              as={RiSearchLine}
              aria-label="Search database"
              fontSize="20"
              color="gray.400"
              mr="4"
            />
          </Flex>

          {isFocus && (
            <Box
              position="absolute"
              top="100%"
              left="0"
              width="100%"
              h="auto"
              bg="white"
              zIndex="2"
              borderBottomRadius="lg"
              boxShadow="base"
            >
              <List px="6" py="4" w="100%" h="100%">
                <VStack spacing="1em">
                  <ListItem
                    _hover={{ color: 'yellow.500' }}
                    lineHeight="1.3em"
                    color="gray.600"
                  >
                    <Link href="/teste">
                      Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
                      sit amet.
                    </Link>
                  </ListItem>

                  <ListItem
                    _hover={{ color: 'yellow.500' }}
                    lineHeight="1.3em"
                    color="gray.600"
                  >
                    <Link href="/teste">
                      Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
                      sit amet.
                    </Link>
                  </ListItem>

                  <ListItem
                    _hover={{ color: 'yellow.500' }}
                    lineHeight="1.3em"
                    color="gray.600"
                  >
                    <Link href="/teste">
                      Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
                      sit amet.
                    </Link>
                  </ListItem>

                  <ListItem
                    _hover={{ color: 'yellow.500' }}
                    lineHeight="1.3em"
                    color="gray.600"
                  >
                    <Link href="/teste">
                      Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
                      sit amet.
                    </Link>
                  </ListItem>

                  <ListItem
                    _hover={{ color: 'yellow.500' }}
                    lineHeight="1.3em"
                    color="gray.600"
                  >
                    <Link href="/teste">
                      Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
                      sit amet.
                    </Link>
                  </ListItem>

                  <ListItem
                    _hover={{ color: 'yellow.500' }}
                    lineHeight="1.3em"
                    color="gray.600"
                  >
                    <Link href="/teste">
                      Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
                      sit amet.
                    </Link>
                  </ListItem>
                </VStack>
              </List>
            </Box>
          )}
        </Flex>
      ) : (
        <>
          <IconButton
            onClick={onOpen}
            aria-label="Search database"
            icon={<RiSearchLine />}
            borderRadius="full"
            boxShadow="base"
            bg="white"
            color="gray.600"
          />

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />

            <ModalContent>
              <ModalHeader>Buscar produto</ModalHeader>

              <ModalCloseButton />

              <ModalBody pb="2em">
                <Flex
                  flex="1"
                  color="gray.700"
                  position="relative"
                  borderRadius={isFocus ? 'lg' : 'full'}
                  borderBottomRadius={isFocus ? 'none' : 'full'}
                  boxShadow="base"
                  direction="column"
                >
                  <Flex
                    as="label"
                    w="100%"
                    alignItems="center"
                    borderRadius="full"
                  >
                    <Input
                      color="gray.700"
                      variant="unstyled"
                      py="4"
                      px="6"
                      placeholder="Buscar na plataforma"
                      _placeholder={{ color: 'gray.400' }}
                      onFocus={() => setFocus(true)}
                      onBlur={() => setTimeout(() => setFocus(false), 1000)}
                    />

                    <Icon
                      as={RiSearchLine}
                      aria-label="Search database"
                      fontSize="20"
                      color="gray.400"
                      mr="4"
                    />
                  </Flex>

                  {isFocus && (
                    <Box
                      width="100%"
                      h="auto"
                      bg="white"
                      zIndex="2"
                      borderBottomRadius="lg"
                      boxShadow="base"
                    >
                      <List px="6" py="4" w="100%" h="100%">
                        <VStack spacing="1em">
                          <ListItem
                            _hover={{ color: 'yellow.500' }}
                            lineHeight="1.3em"
                            color="gray.600"
                          >
                            <Link href="/teste">
                              Lorem ipsum dolor sit amet consectetur. Lorem
                              ipsum dolor sit amet.
                            </Link>
                          </ListItem>

                          <ListItem
                            _hover={{ color: 'yellow.500' }}
                            lineHeight="1.3em"
                            color="gray.600"
                          >
                            <Link href="/teste">
                              Lorem ipsum dolor sit amet consectetur. Lorem
                              ipsum dolor sit amet.
                            </Link>
                          </ListItem>

                          <ListItem
                            _hover={{ color: 'yellow.500' }}
                            lineHeight="1.3em"
                            color="gray.600"
                          >
                            <Link href="/teste">
                              Lorem ipsum dolor sit amet consectetur. Lorem
                              ipsum dolor sit amet.
                            </Link>
                          </ListItem>

                          <ListItem
                            _hover={{ color: 'yellow.500' }}
                            lineHeight="1.3em"
                            color="gray.600"
                          >
                            <Link href="/teste">
                              Lorem ipsum dolor sit amet consectetur. Lorem
                              ipsum dolor sit amet.
                            </Link>
                          </ListItem>

                          <ListItem
                            _hover={{ color: 'yellow.500' }}
                            lineHeight="1.3em"
                            color="gray.600"
                          >
                            <Link href="/teste">
                              Lorem ipsum dolor sit amet consectetur. Lorem
                              ipsum dolor sit amet.
                            </Link>
                          </ListItem>

                          <ListItem
                            _hover={{ color: 'yellow.500' }}
                            lineHeight="1.3em"
                            color="gray.600"
                          >
                            <Link href="/teste">
                              Lorem ipsum dolor sit amet consectetur. Lorem
                              ipsum dolor sit amet.
                            </Link>
                          </ListItem>
                        </VStack>
                      </List>
                    </Box>
                  )}
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </Box>
  )
}

export default SearchBox
