/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's Generative Art Library,
 * which is released under the GNU Affero General Public License, Version 3.0.
 * You may not use this file except in compliance with the license.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. See LICENSE or go to
 * https://www.gnu.org/licenses/agpl-3.0.en.html for full license details.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 */

import eslint from '@rollup/plugin-eslint';
import analyzer from 'rollup-plugin-analyzer';
import ts from 'rollup-plugin-ts';

export default {
    input: './src/main/index.ts',
    output: {
        dir: './out',
        format: 'umd',
        name: 'genart-rgb',
        sourcemap: true,
        preserveModules: false,
        globals: {
            'p5': 'p5',
            '@batpb/genart-base': 'genartBase'
        }
    },
    external: [
        'p5',
        '@batpb/genart-base'
    ],
    plugins: [
        eslint({
            include: ['./src/**/*.ts'],
            throwOnError: true,
            throwOnWarning: true
        }),
        analyzer({
            summaryOnly: true
        }),
        ts()
    ]
};
