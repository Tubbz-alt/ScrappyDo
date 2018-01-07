var async = require('async');
var vogels = require('vogels');
var Joi = require('joi');
var AWS = require('aws-sdk');
vogels.AWS.config.loadFromPath('config.json');
vogels.AWS.config.update({
    region : "us-east-1"
}); // region must be set

var Component = vogels.define('Component', {
    hashKey : 'item',

    // add the timestamp attributes (updatedAt, createdAt)
    timestamps : true,

    schema : {
        item : Joi.string()
    }
});

var search = function(req,res) {
    console.log("Searching..." + req.query.key);
    var data = [];
    Component.scan().where('item').beginsWith(req.query.key).exec(
       function (err, resp) {
          if(err) {
            console.log('Error running scan', err);
          } else {
            console.log(resp.Items);
            var size = Object.keys(resp.Items).length;
            for (var i = 0; i < size; i++) {
                console.log(resp.Items[i].attrs.email);
                data.push(resp.Items[i].attrs.email);
            }
            console.log('Found', resp.Count, 'items');

            if (resp.ConsumedCapacity) {
                console.log('Scan consumed: ', resp.ConsumedCapacity);
            }
        }
        console.log(data);
        res.end(JSON.stringify(data));
    });
};

var routes = {
    search : search
};

module.exports = routes;