# `v-drag`

<a title="GitHub workflow (ci)" href="https://github.com/geospoc/v-drag/actions?query=workflow%3Aci" rel="nofollow">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/geospoc/v-drag/ci?label=ci&logo=github">
</a>
<a title="GitHub release" href="https://github.com/geospoc/v-drag/packages/321237" rel="nofollow">
  <img alt="GitHub release (latest SemVer)" src="https://img.shields.io/github/v/release/geospoc/v-drag?color=brightgreen&logo=github&sort=semver">
</a>
<a title="GitHub workflow (Ship.js trigger)" href="https://github.com/geospoc/v-drag/actions?query=workflow%3A%22Ship+js+trigger%22" rel="nofollow">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/geospoc/v-drag/Ship%20js%20trigger?label=ship.js%20trigger&logo=github">
</a>
<a title="DeepScan grade" href="https://deepscan.io/dashboard#view=project&tid=9381&pid=12987&bid=210316" rel="nofollow">
  <img alt="DeepScan grade" src="https://deepscan.io/api/teams/9381/projects/12987/branches/210316/badge/grade.svg">
</a>
<a title="GitHub issues" href="https://github.com/geospoc/v-drag/issues" rel="nofollow">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/geospoc/v-drag?logo=github">
</a>
<a title="Dependencies" href="https://david-dm.org/geospoc/v-drag" rel="nofollow">
  <img alt="David" src="https://img.shields.io/david/geospoc/v-drag?logo=npm">
</a>
<a title="Dev Dependencies" href="https://david-dm.org/geospoc/v-drag?type=dev" rel="nofollow">
  <img alt="David" src="https://img.shields.io/david/dev/geospoc/v-drag?logo=npm">
</a>
<a title="Contributors" href="https://github.com/geospoc/v-drag/graphs/contributors" rel="nofollow">
  <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/geospoc/v-drag">
</a>
<a title="deploy" href="https://github.com/algolia/shipjs" rel="nofollow">
  <img src="https://img.shields.io/badge/deploy-🛳%20Ship.js-blue?style=flat" />
</a>
<a title="npm" href="https://github.com/geospoc/v-drag/packages/321237" rel="nofollow">
  <img alt="Maintenance" src="https://img.shields.io/maintenance/yes/2020">
</a>

> A super simple, Vue.js draggable component.

## Installation

```bash
$ npm i @geospoc/v-drag
```

## Usage

```html
<template>
  <div>
    <div style="position: absolute;" v-drag>
    </div>
  </div>
</template>

<script>
import drag from '@geospoc/v-drag';

export default {
  directives: {
    drag,
  },
};
</script>
```

### Notes

An element with `v-drag` must have `position: absolute;` to be draggable.

### Options

You may desire only one part of an element to be `draggable`. You can achieve this by passing a string which refers to an `id` as argument to `v-drag`.

```html
<div id="header">
  <div v-drag:header>
    <div>
      Some text
    </div>
  </div>
</div>
```

This will result in any area that is not `<div id="header">` not becoming draggable. One common use case is a modal, that is only draggable when the top area is clicked.

You can constrain the draggable object from leaving the viewport by using the `window-only` modifier like so:

```html
<div v-drag.window-only>
  This element cannot be dragged outside the window
</div>
```

## Credits
- Thanks to [`@branu-ws`](https://github.com/branu-ws) & their original [`v-drag`](https://github.com/branu-ws/v-drag)
- All contributors ([list](https://github.com/geospoc/v-drag/contributors)).
- All GeoSpoc ([team](https://github.com/orgs/Geospoc/people)).

## License
MIT &copy; [GeoSpoc](https://geospoc.com)

## Contributing
Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/geospoc/v-drag/compare)
