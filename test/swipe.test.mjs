import assert from 'node:assert/strict';
import { test } from 'node:test';
import { swipeDirection } from '../src/utils/swipe.ts';

test('o carrossel só muda com um deslize horizontal intencional', () => {
  assert.equal(swipeDirection({ x: 100, y: 100 }, { x: 45, y: 105 }), 1);
  assert.equal(swipeDirection({ x: 100, y: 100 }, { x: 155, y: 105 }), -1);
  assert.equal(swipeDirection({ x: 100, y: 100 }, { x: 75, y: 100 }), 0);
  assert.equal(swipeDirection({ x: 100, y: 100 }, { x: 45, y: 170 }), 0);
});
