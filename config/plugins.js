module.exports = ({env}) => ({
    email: {
        config: {
            provider: 'nodemailer', providerOptions: {
                host: env('SMTP_HOST', 'smtp.example.com'), port: env('SMTP_PORT', 587), auth: {
                    user: env('SMTP_USERNAME'), pass: env('SMTP_PASSWORD'),
                }, // Optional settings
                secure: env.bool('SMTP_SECURE', false), // true for 465, false for other ports
            }, settings: {
                defaultFrom: env('SMTP_FROM', 'hello@example.com'),
                defaultReplyTo: env('SMTP_REPLY_TO', 'hello@example.com'),
            },
        },
    },
});