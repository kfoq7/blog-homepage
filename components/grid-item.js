import NextLink from 'next/link'
import { Box, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  // console.log(thumbnail)
  <Box w="100%" textAlign="center">
    {console.log(thumbnail)}
    <NextLink href={`/works/${id}`} passHref scroll={false}>
      <LinkBox>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={15}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)
