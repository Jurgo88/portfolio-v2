export const useLocale = () => {
  const { t, locale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

  const toggleLocale = () => {
    const next = locale.value === 'en' ? 'sk' : 'en'
    navigateTo(switchLocalePath(next))
  }

  return { t, locale, toggleLocale }
}
