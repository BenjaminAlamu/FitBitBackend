module.exports.cors = {
  allRoutes: true,
  origin: '*',
//   credentials: true,
  methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
  headers: 'Origin, X-Requested-With, Content-Type, Accept, Engaged-Auth-Token'
};
