/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Utility methods for math.
 * These methods are not specific to Blockly, and could be factored out into
 * a JavaScript framework such as Closure.
 */


/**
 * Utility methods for math.
 * These methods are not specific to Blockly, and could be factored out into
 * a JavaScript framework such as Closure.
 * @namespace Blockly.utils.math
 */
goog.declareModuleId('Blockly.utils.math');


/**
 * Converts degrees to radians.
 * Copied from Closure's goog.math.toRadians.
 * @param angleDegrees Angle in degrees.
 * @return Angle in radians.
 * @alias Blockly.utils.math.toRadians
 */
export function toRadians(angleDegrees: number): number {
  return angleDegrees * Math.PI / 180;
}

/**
 * Converts radians to degrees.
 * Copied from Closure's goog.math.toDegrees.
 * @param angleRadians Angle in radians.
 * @return Angle in degrees.
 * @alias Blockly.utils.math.toDegrees
 */
export function toDegrees(angleRadians: number): number {
  return angleRadians * 180 / Math.PI;
}

/**
 * Clamp the provided number between the lower bound and the upper bound.
 * @param lowerBound The desired lower bound.
 * @param number The number to clamp.
 * @param upperBound The desired upper bound.
 * @return The clamped number.
 * @alias Blockly.utils.math.clamp
 */
export function clamp(
    lowerBound: number, number: number, upperBound: number): number {
  if (upperBound < lowerBound) {
    const temp = upperBound;
    upperBound = lowerBound;
    lowerBound = temp;
  }
  return Math.max(lowerBound, Math.min(number, upperBound));
}
