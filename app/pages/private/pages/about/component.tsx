import React from 'react'
import {
  Box,
  Heading,
  HStack,
  Icon,
  Link,
  Separator,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Trans, useTranslation } from 'react-i18next'

export function Page() {
  const { t } = useTranslation()
  return (
    <Box>
      <VStack align="start" p={6}>
        <Heading as="h2" size="2xl">
          {t('about.title')}
        </Heading>

        <Text fontSize="md">
          <Trans
            i18nKey="about.intro"
            components={{
              bold: <Text as="span" fontWeight="bold" display="inline" />,
            }}
          />
        </Text>

        <Text fontSize="md">
          <Trans
            i18nKey="about.extra"
            components={{
              bold: <Text as="span" fontWeight="bold" display="inline" />,
            }}
          />
        </Text>

        <Text fontSize="md">{t('about.project-description')}</Text>
      </VStack>

      <Separator my={4} />

      <VStack align="start" p={4}>
        <Text fontSize="xl" fontWeight="bold">
          Contacto
        </Text>

        <HStack p={3}>
          <Icon as={FaEnvelope} />
          <Link href="mailto:leandro.kondratzky@gmail.com">
            leandro.kondratzky@gmail.com
          </Link>
        </HStack>

        <HStack p={3}>
          <Icon as={FaLinkedin} />
          <Link href="https://www.linkedin.com/in/leandro-kondratzky/">
            LinkedIn
          </Link>
        </HStack>

        <HStack p={3}>
          <Icon as={FaGithub} />
          <Link href="https://github.com/Leandroepk">GitHub</Link>
        </HStack>

        <HStack p={3} marginBottom={{ base: 20, md: 0 }}>
          <Icon as={FaFilePdf} />
          <Link href="/CV_Leandro_EPK.pdf">Currículum</Link>
        </HStack>
      </VStack>
    </Box>
  )
}
