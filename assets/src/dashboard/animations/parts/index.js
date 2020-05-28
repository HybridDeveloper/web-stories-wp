/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Internal dependencies
 */
import { ANIMATION_TYPES } from '../constants';
import { AnimationBounce } from './bounce';
import { AnimationBlinkOn } from './blinkOn';
import { AnimationFade } from './fade';
import { AnimationFlip } from './flip';
import { AnimationFloatOn } from './floatOn';
import { AnimationMove } from './move';
import { AnimationSpin } from './spin';
import { AnimationZoom } from './zoom';

export function throughput() {
  return {
    id: -1,
    generatedKeyframes: {},
    WAAPIAnimation: ({ children }) => children,
    AMPTarget: ({ children }) => children,
    AMPAnimation: () => {},
  };
}

export function AnimationPart(type, args) {
  const generator =
    {
      [ANIMATION_TYPES.BOUNCE]: AnimationBounce,
      [ANIMATION_TYPES.BLINK_ON]: AnimationBlinkOn,
      [ANIMATION_TYPES.FADE]: AnimationFade,
      [ANIMATION_TYPES.FLIP]: AnimationFlip,
      [ANIMATION_TYPES.FLOAT_ON]: AnimationFloatOn,
      [ANIMATION_TYPES.MOVE]: AnimationMove,
      [ANIMATION_TYPES.SPIN]: AnimationSpin,
      [ANIMATION_TYPES.ZOOM]: AnimationZoom,
    }[type] || throughput;

  return generator(args);
}
