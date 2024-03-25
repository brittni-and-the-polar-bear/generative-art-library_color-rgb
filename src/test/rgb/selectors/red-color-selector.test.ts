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

import {Range} from '@batpb/genart-base';
import {RedColorSelector, RGBColorSelector, RGBRange} from '../../../main';
import {testColorSelector, testInOrderColorSelector} from './index';

describe('red color selector tests', (): void => {
    const redRGBRange: RGBRange = {
        redRange: new Range(125, 255),
        greenRange: new Range(0, 100),
        blueRange: new Range(0, 100)
    }

   test('test unlimited red color selector', (): void => {
      const selector: RGBColorSelector = new RedColorSelector(true);
      testColorSelector(selector, redRGBRange);
   });

    test.each([
        {count: 2, expectedCount: 2},
        {count: 5, expectedCount: 5},
        {count: 10, expectedCount: 10},
        {count: -4, expectedCount: 2},
        {count: 15, expectedCount: 10},
    ])('test in-order red color selector ($count colors)',
        ({count, expectedCount}): void => {
            const selector: RGBColorSelector = new RedColorSelector(false, count, false);
            testInOrderColorSelector(selector, redRGBRange, expectedCount);
        }
    );

    test('test limited red color selector', (): void => {
        const selector: RGBColorSelector = new RedColorSelector(false);
        testColorSelector(selector, redRGBRange);
    });

    test('test default red color selector', (): void => {
        const selector: RGBColorSelector = new RedColorSelector();
        testColorSelector(selector, redRGBRange);
    })
});
