#!/usr/bin/env node
// hello.js - basic JS script that prints a greeting and accepts a name argument

const name = process.argv[2] || 'world';
console.log(`Hello, ${name}!`);
