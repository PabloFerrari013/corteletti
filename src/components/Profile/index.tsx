import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { Input } from '../Input'

const Profile: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box h="100vh" w="100%">
      <Box>
        <Text as="h2" fontSize="1.6em" color="gray.700" fontWeight="medium">
          Conta
        </Text>

        <Text as="p" fontSize="1em" color="gray.700" mt="1em">
          Pablo Caliari Ferrari
        </Text>

        <Text as="p" fontSize="1em" color="gray.700">
          pabloferrari@gmail.com
        </Text>

        <HStack spacing="1em" mt="1em">
          <Button color="gray.700">Sair</Button>

          <Button color="gray.700">
            <Link href="/">Alterar senha</Link>
          </Button>
        </HStack>
      </Box>

      <Divider my="3em" />

      <Box>
        <Text as="h2" fontSize="1.6em" color="gray.700" fontWeight="medium">
          Endereço
        </Text>

        <Text as="p" fontSize="1em" color="gray.700">
          Av. Antônio Gil Veloso, 1265 - Itapuã, Vila Velha - ES, 29101-735
        </Text>

        <Box>
          <Text
            as="h3"
            fontSize="1.2em"
            color="gray.700"
            mt="1em"
            fontWeight="medium"
          >
            Número
          </Text>

          <Text as="p" fontSize="1em" color="gray.700">
            240
          </Text>
        </Box>

        <Button color="gray.700" mt="1em" onClick={onOpen}>
          Alterar Endereço
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
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

                <Button colorScheme="green" mt="1em">
                  Salvar
                </Button>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  )
}

export default Profile
