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
import {RGBColorSelector} from '../rgb-color-selector';

class RedColorSelector extends RGBColorSelector {
    public constructor(unlimitedColors?: boolean,
                       colorCount?: number,
                       randomOrder?: boolean) {
        super({
            redRange: new Range(125, 255),
            greenRange: new Range(0, 75),
            blueRange: new Range(0, 75)},
            unlimitedColors,
            colorCount,
            randomOrder);
    }

    get name(): string {
        return 'red rgb color selector';
    }
}

export {RedColorSelector};
