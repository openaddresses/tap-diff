#!/usr/bin/env node

import createReporter from './lib/index.js';

const reporter = createReporter();

process.stdin
    .pipe(reporter)
    .pipe(process.stdout);

process.on('exit', (status) => {
    if (status === 1 || reporter.isFailed) process.exit(1);
});
