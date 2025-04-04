module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/email',
     handler: 'email.sendEmail',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
