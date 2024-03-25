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

import {RGBColorSelector, RGBRange} from "../../../main";
import {Color, ColorSelectorType, Range} from "@batpb/genart-base";

function testComponentInRange(component: number, range: Range): void {
    expect(component).toBeGreaterThanOrEqual(range.min);
    expect(component).toBeLessThanOrEqual(range.max);
}

function testColorSelector(selector: RGBColorSelector, rgbRange: RGBRange): void {
    expect(selector.type).toBe(ColorSelectorType.RGB);
    expect(selector.name).toBeTruthy();
    expect(selector.colorNames.length).toBe(0);

    for (let i: number = 0; i < 50; i++) {
        const color: Color = selector.getColor();
        testComponentInRange(color.red, rgbRange.redRange);
        testComponentInRange(color.green, rgbRange.greenRange);
        testComponentInRange(color.blue, rgbRange.blueRange);
    }
}

export {testColorSelector};
