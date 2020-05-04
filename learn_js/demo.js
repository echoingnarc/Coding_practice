'use strict';
const _ = require('underscore')

const sentences = [
    { subject: 'Javascript', verb: 'is', object: 'great'},
    { subject: 'Elephants', verb:'are', object:'large'},
];

const verb = _.pluck(sentences, 'verb')
for(let verb of verbs){
    console.log(`found verb: ${verb}`)
}