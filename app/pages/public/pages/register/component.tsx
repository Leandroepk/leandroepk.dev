import React from 'react'
import { Button, Input, Heading, VStack, Field, Text } from '@chakra-ui/react'
import { toaster, Toaster } from '@/components/ui/toaster'
import { RouterLink } from '@/components/custom/RouterLink'
import { PasswordInput } from '@/components/ui/password-input'
import { useForm } from 'react-hook-form'
import authService from '../../services/authService'
import { useTranslation } from 'react-i18next'

interface FormValues {
  email: string
  password: string
}

export function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const { t } = useTranslation()

  const submit = async (e: FormValues) => {
    const { data } = await authService.register(e.email, e.password)
    if (data.success) {
      toaster.success({ title: 'Registro exitoso' })
    } else {
      toaster.error({ title: 'Error al registrar', description: data.message })
    }
  }

  return (
    <VStack>
      <Heading mb={6} textAlign="center" size="lg">
        {t('register.title')}
      </Heading>

      <form
        onSubmit={handleSubmit((data) => submit(data))}
        style={{ width: '100%' }}
      >
        <VStack gap={4}>
          <Field.Root invalid={!!errors.email}>
            <Field.Label>Email</Field.Label>
            <Input
              placeholder={t('register.email-placeholder')}
              {...register('email', {
                required: {
                  value: true,
                  message: t('register.email-required'),
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: t('register.email-invalid'),
                },
              })}
            />
            <Field.ErrorText>
              {(errors.email?.message as string) ?? ''}
            </Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.password}>
            <Field.Label>{t('register.password-label')}</Field.Label>
            <PasswordInput
              placeholder="••••••••"
              {...register('password', {
                required: {
                  value: true,
                  message: t('register.password-required'),
                },
                minLength: {
                  value: 6,
                  message: t('register.password-min-length'),
                },
              })}
            />
            <Field.ErrorText>
              {(errors.password?.message as string) ?? ''}
            </Field.ErrorText>
          </Field.Root>

          <Button colorScheme="blue" type="submit" w="full">
            {t('register.submit-button')}
          </Button>
        </VStack>
      </form>

      <Text mt={4} textAlign="center">
        {t('register.already-account-link')}{' '}
        <RouterLink color="blue.500" fontWeight="bold" to="/login">
          {t('register.login-link')}
        </RouterLink>
      </Text>

      <Toaster />
    </VStack>
  )
}
