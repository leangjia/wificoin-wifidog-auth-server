'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const wificoinSchema = new Schema({
	channel: String,
	toAddress: {type: String, default: 'wZirordpuoJgmRp6wRPKZjAjVruQr5gF7r'},
	toAmount: {type: Number, default: 2},
})

wificoinSchema.index({channel: 1});

const WiFicoin = mongoose.model('WiFicoin', wificoinSchema);


export default WiFicoin
