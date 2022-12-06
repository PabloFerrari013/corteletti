import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  ListItem,
  UnorderedList,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BsJournalText } from 'react-icons/bs'
import { FaShoppingBag } from 'react-icons/fa'

const Navegation: React.FC = () => {
  return (
    <UnorderedList listStyleType="none">
      <HStack spacing={['0.5em', '1em', '1.5em']}>
        <ListItem color="whiteAlpha.800" _hover={{ color: 'yellow.500' }}>
          <Link href="/dashboard/account/requests">
            <Flex
              position="relative"
              alignItems="center"
              justifyContent="center"
              _before={{
                content: "'!'",
                position: 'absolute',
                top: '0%',
                left: '100%',
                transform: 'translate(-50%, -40%)',
                fontSize: '.6em',
                fontWeight: 'bold',
                color: 'white',
                bg: 'red',
                w: '1.5em',
                h: '1.5em',
                borderRadius: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex'
              }}
            >
              <Icon
                as={BsJournalText}
                fontSize={['1.2em', '1.5em']}
                color="yellow.500"
              />
            </Flex>
          </Link>
        </ListItem>

        <ListItem color="whiteAlpha.800" _hover={{ color: 'yellow.500' }}>
          <Link href="/dashboard/account/bag">
            <Flex
              alignItems="center"
              justifyContent="center"
              position="relative"
              _before={{
                content: "'2'",
                position: 'absolute',
                top: '0%',
                left: '100%',
                transform: 'translate(-50%, -40%)',
                fontSize: '.6em',
                fontWeight: 'bold',
                color: 'white',
                bg: 'red',
                w: '1.5em',
                h: '1.5em',
                borderRadius: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex'
              }}
            >
              <Icon
                as={FaShoppingBag}
                fontSize={['1.2em', '1.5em']}
                color="yellow.500"
              />
            </Flex>
          </Link>
        </ListItem>

        <ListItem>
          <Wrap>
            <WrapItem border="2px solid white" borderRadius="100%">
              <Link href="/dashboard/account/profile">
                <Avatar size="sm" name="Pablo Caliari Ferrari" src="" />
              </Link>
            </WrapItem>
          </Wrap>
        </ListItem>

        {/* <ListItem color="yellow.500" _hover={{ color: 'yellow.700' }}>
          <Link href="/account/login">Login</Link>
        </ListItem> */}
      </HStack>
    </UnorderedList>
  )
}

export default Navegation
