import { createClient } from 'contentful';

const client = createClient({
  space: '',
  accessToken: '',
})

async function fetchEntries(context: any) {
  const entries = await client.getEntries(context)

  if (entries.items) {
    return entries.items
  }

  return null
}

export { fetchEntries }