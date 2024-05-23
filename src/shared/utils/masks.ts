const formatCEP = (value: string) => {
  const cleanedValue = value?.replace(/\D/g, '')

  const match = cleanedValue?.match(/^(\d{0,5})(\d{0,3})$/)

  if (!match) {
    return cleanedValue || ''
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, ...groups] = match
  const formattedValue = groups
    .filter((group) => group !== undefined)
    .join('-')
    .replace(/-$/, '')

  return formattedValue
}

export { formatCEP }
