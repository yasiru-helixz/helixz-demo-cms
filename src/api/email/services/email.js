'use strict';

const fs = require('fs').promises; // Use promises for async file reading
const path = require('path');

module.exports = {
    async send(userName, email, subject, content, contact) {
        // Read the HTML file
        let htmlContent = await fs.readFile(path.join(__dirname, '../templates/email-template.html'), 'utf8');

        // Replace placeholders with actual data
        htmlContent = htmlContent.replace('{{userName}}', userName).replace('{{subject}}', subject).replace('{{content}}', content);

        return await strapi.plugins.email.services.email.send({
            to: email,
            from: process.env.SMTP_FROM,
            subject: subject || 'No Subject',
            html: htmlContent || `This is sample body from Strapi`,
        });
    }
};
