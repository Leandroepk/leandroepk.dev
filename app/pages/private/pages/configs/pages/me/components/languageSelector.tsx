import React from 'react'
import {
  Card,
  createListCollection,
  Heading,
  Portal,
  Select,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const languages = createListCollection({
  items: [
    { label: 'English', value: 'en' },
    { label: 'Español', value: 'es' },
  ],
})

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation()
  const [selected, setSelected] = React.useState(i18n.language)

  const handleChange = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage)
    setSelected(newLanguage)
  }

  return (
    <Card.Root width="fit-content">
      <Card.Header>
        <Heading mb={2}>{t('language-selector.title')}</Heading>
      </Card.Header>
      <Card.Body>
        <Select.Root
          collection={languages}
          width="320px"
          value={[selected]}
          onValueChange={(e) => handleChange(e.value[0])}
        >
          <Select.HiddenSelect />
          <Select.Label></Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText
                placeholder={t('language-selector.placeholder')}
              ></Select.ValueText>
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {languages.items.map((framework) => (
                  <Select.Item item={framework} key={framework.value}>
                    {framework.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
      </Card.Body>
    </Card.Root>
  )
}
