import { createClient } from "contentful-management";
import author from "../author";

const client = createClient({ 
    accessToken: process.env.CONTENTFUL_CMA || ''
}, {
    type: 'plain',
    defaults: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        environmentId: process.env.CONTENTFUL_ENV_ID
    }
})

const addComment = async (req, res) => {
    try {
        const { id, message, email, author } = JSON.parse(req.body)

        await client.entry.create({
            contentTypeId: 'comment',
        },
        {
            fields: {
                article: {
                    'pl-PL': {
                        sys: {
                            type: 'Link',
                            linkType: 'Entry',
                            id
                        }
                    }
                },
                message: {
                    'pl-PL': message
                },
                email: {
                    'pl-PL': email
                },
                author: {
                    'pl-PL': author
                }
            }
        })

        res.send({ status: 200, mesage: 'Zapisano'})
    } catch (e) {
        res.status(400);
        req.send({ status: 400, message: 'Nie dalo rady' })
    }
}

export default addComment;