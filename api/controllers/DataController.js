/**
 * HealthinfoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getData: function(req, res) {
    let bpt = [120,121,122];
    let bpb = [80,81,82];
    let temp = [37,36,35];

    return res.send({
      systolicBP: bpt[Math.floor(Math.random()*bpt.length)],
      diastolicBP: bpb[Math.floor(Math.random()*bpb.length)],
      bodyTemp: temp[Math.floor(Math.random()*temp.length)],
    });
  }

};


