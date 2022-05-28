import {
  Box,
  Button,
  Container,
  Image,
  Heading,
  List,
  ListItem,
  Icon,
  Link
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { IoLogoGithub } from 'react-icons/io5'

const Page = () => {
  return (
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Personal Website
          </Heading>
          <p>A Full Stack developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/img/fabrizio.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading>About me</Heading>
        <Paragraph>
          Hey my name is Fabrizio Rolando Mostacero Caceres I&apos;m currently
          studing in UCV university.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h2">On the web</Heading>
        <List>
          <ListItem>
            <Link
              href="https://www.github.com/kfoq7/blog-homepage"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                source
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  )
}

export default Page
