import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_CDA,
})

async function fetchEntries(context: any) {
  const entries = await client.getEntries(context)

  if (entries.items) {
    return entries.items
  }

  return null
}

export { fetchEntries }