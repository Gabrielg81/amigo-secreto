const aws = require ('aws-sdk')

const ses = new aws.SES({ region: 'us-east-1'})

module.exports = (ownerEmail, giver, receiver) => {
    const params = {
        Destination: {
            ToAddresses: [giver.email],
        },
        Message: {
            Body: {
                Text: {
                    Data: `Seu amigo secreto é o (a) ${receiver.name}`
                }
            },
            Subject: {
                Data: '[G81.com.br] Amigo Secreto'
            },
        },
        Source: ownerEmail,
    }

    return ses.sendEmail(params).promise()
}