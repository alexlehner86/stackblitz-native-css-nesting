import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Native CSS Nesting Demo</h1>
    <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting">
      Learn more about native CSS nesting
    </a>
  `,
})
export class App {}

bootstrapApplication(App);
