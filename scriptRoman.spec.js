import { describe, test } from "node:test";
import assert from "node:assert";
import { convertToDecimal } from "./scriptRoman.js";

describe("Tests for roman number converter", () => {
  test("should render the correct number 2", () => {
    const decimalConverted = convertToDecimal("II");

    assert.equal(decimalConverted, 2);
  });

  test("should render the correct number 4", () => {
    const decimalConverted = convertToDecimal("IV");

    assert.equal(decimalConverted, 4);
  });

  test("should render the correct number 8", () => {
    const decimalConverted = convertToDecimal("VIII");

    assert.equal(decimalConverted, 8);
  });

  test("should render the correct number 89", () => {
    const decimalConverted = convertToDecimal("LXXXIX");

    assert.equal(decimalConverted, 89);
  });

  test("should render the correct number 92", () => {
    const decimalConverted = convertToDecimal("XCII");

    assert.equal(decimalConverted, 92);
  });
});
