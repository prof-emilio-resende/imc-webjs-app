import { assert } from "chai";
import dft from "../app/index.js";

describe('Dummy', function () {
  describe('#true', function () {
    it('should always return true', function () {
      assert.equal(1, 1);
    });
  });
});

describe('Default', function() {
  describe('dft', function() {
    it('should be true', function() {
      assert.isTrue(dft());
    });
  })
});