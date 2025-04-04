'use strict';

const {send} = require('../services/email')

module.exports = {
    async sendEmail(ctx) {
        try {
            const {userName, email, subject, content, contact} = ctx.request.body;

            // Basic validation
            if (!userName || !email || !subject || !content || !contact) {
                return ctx.badRequest('Missing required fields: userName, email, subject, content, contact');
            }

            return ctx.send(await send(userName, email, subject, content, contact));
        } catch (err) {
            strapi.log.error(`Email sending failed : ${err.message}`);
            return ctx.internalServerError('Email sending failed', {
                error: {
                    message: err.message,
                    code: 'EMAIL_SEND_FAILED',
                    timestamp: new Date().toISOString(),
                },
            });
        }
    }
};
