import { canUseDom } from './can-use-dom';
import { isDev } from './is-dev';

let tenPxTester: HTMLDivElement | null = null;
let tester: HTMLDivElement | null = null;

if (canUseDom) {
  tenPxTester = document.createElement('div');
  tenPxTester.className = 'cishy-tester';
  tenPxTester.style.setProperty('--size', '10');
  tester = document.createElement('div');
  document.body.appendChild(tester);
  if (isDev) {
    if (window.getComputedStyle(tester).position !== 'fixed') {
    }
  }
}

export function convertPx(px: number) {
  if (tenPxTester === null || tester === null) return px;
  if (tenPxTester.getBoundingClientRect().height === 10) {
    return px;
  }
  tester.style.setProperty('--size', px.toString());
  return tester.getBoundingClientRect().height;
}
