#!/usr/bin/env node
import { program } from './program';

try {
    program.parse(process.argv);
} catch (error) {
    console.log(error);
}
