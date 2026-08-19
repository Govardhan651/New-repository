import test from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({ path: './tests/utils/dev.env' })

test('sales', async ({ request }) => {

    const clientId = process.env.SF_CLIENT_ID!
    const clientSecret = process.env.SF_CLIENT_SECRET!
    const username = process.env.SF_Username!
    const password = process.env.SF_Password!

    const response = await request.post(
        'https://login.salesforce.com/services/oauth2/token',
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },

            form: {
                grant_type: 'password',
                username: username,
                password: password,
                client_id: clientId,
                client_secret: clientSecret
            }
        }
    )

    console.log('Status:', response.status())
})