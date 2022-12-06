import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import Card from '../Card'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from './styles.module.scss'

import { Pagination, FreeMode } from 'swiper'

const Offers: React.FC = () => {
  const variant = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 3
  })

  return (
    <Box mb="4em" px="1em">
      <Text as="h1" fontWeight="bold" fontSize="2em" color="gray.700">
        Destaques
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
                url="pizza.jpeg"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolores eligendi provident dolorum dicta expedita."
              />
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex justifyContent="center">
              <Card
                title="Pizza Portuguesa"
                price="40,00"
                url="pizza.jpeg"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolores eligendi provident dolorum dicta expedita."
              />
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex justifyContent="center">
              <Card
                title="Pizza Portuguesa"
                price="40,00"
                url="pizza.jpeg"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolores eligendi provident dolorum dicta expedita."
              />
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex justifyContent="center">
              <Card
                title="Pizza Portuguesa"
                price="40,00"
                url="pizza.jpeg"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolores eligendi provident dolorum dicta expedita."
              />
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Box>
  )
}

export default Offers
