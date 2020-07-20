import Vue from 'vue';
import { mousedown, mouseup, mousemove, setDraggerOffset } from './drag';

const vDrag = Vue.directive('drag', {
  inserted: function (el, binding) {
    const _data = {
      draggableElementId: null, // if this is present, only a specific area of the draggable will respond to dragging (eg header bar).
      down: false,
      height: 0,
      width: 0,
      initialX: 0,
      initialY: 0,
      constraintToWindow: false,
      cursorPreviousX: 0,
      cursorPreviousY: 0,
      draggerOffsetLeft: 0,
      draggerOffsetTop: 0,
      overlay: null,
      draggableEl: null,
      initialZIndex: undefined,
    };
    _data.draggableElementId = binding.arg || null;
    _data.constraintToWindow = binding.modifiers['window-only'];
    el.addEventListener('mouseup', (e) => mouseup(e, el, _data));
    el.addEventListener('mousedown', (e) => mousedown(e, el, _data));
    el.addEventListener('mousemove', (e) => mousemove(e, el, _data));
    setDraggerOffset(el, _data);
    _data.initialZIndex = el.style.zIndex;
  },
});

export default vDrag;
