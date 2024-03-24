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

import P5Lib from 'p5';
import {Color, ColorSelector, Random, SketchContext} from '@batpb/genart-base';
import {RGBRange} from "./rgb-range";

const p5: P5Lib = SketchContext.p5;

abstract class RGBColorSelector extends ColorSelector {
    private readonly _unlimitedColors: boolean;

    public constructor(private readonly _rgbRange: RGBRange,
                       unlimitedColors?: boolean,
                       colorCount?: number,
                       randomOrder?: boolean) {
        super(randomOrder);
        this._unlimitedColors = unlimitedColors ?? Random.randomBoolean();

        if (!this._unlimitedColors) {
            const minColors: number = 2;
            const maxColors: number = 10;

            if (!colorCount) {
                colorCount = Random.randomInt(minColors, maxColors + 1);
            }

            colorCount = p5.constrain(colorCount, minColors, maxColors);
            this.chooseColors(colorCount);
        }
    }

    public override getColor(): Color {
        let col: Color = this.generateColor();

        if (!this._unlimitedColors) {
            col = this.selectColorFromChoices();
        }

        return col;
    }

    public override get colorNames(): string[] {
        return [];
    }

    public override get hasPalette(): boolean {
        return false;
    }

    private chooseColors(colorCount: number): void {
        for (let i: number = 0; i < colorCount; i++) {
            const c: Color = this.generateColor();
            this.addColorChoice(c);
        }
    }

    private generateColor(): Color {
        const r: number = Random.randomInt(this._rgbRange.redRange.min, this._rgbRange.redRange.max);
        const g: number = Random.randomInt(this._rgbRange.greenRange.min, this._rgbRange.greenRange.max);
        const b: number = Random.randomInt(this._rgbRange.blueRange.min, this._rgbRange.blueRange.max);
        return new Color(p5.color(r, g, b));
    }
}

export {RGBColorSelector};
