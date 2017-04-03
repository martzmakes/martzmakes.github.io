# Entrocode.Github.Io

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Github Pages

For user pages the code has to be in the master branch at root level (annoying).  While not ideal... I can run `ng build` followed by `mv dist/* .` and that will move the built project into root and get served at [https://entrocode.github.io/](https://entrocode.github.io).  Later I'll point my custom domain to that.

## What's up with this, anyways?

I'm planning on using this as a blog.  Since I'm an Angular dev (and there aren't any good angular blogging platforms) I thought it'd be a fun little experiment to make one.  I have plenty of servers so I could host it on one of those, but a front-end only solution seems fun/fine for now.  If I get to the point where I add in 3rd party services then I'll move it.  With no backend I'll obviously be making some compromises... I'll try and track those here.

## Front-end only compromises

* No database
* No secrets
* No CI

## To Do

[ ] Tab Routing w/Components

[ ] Post List Component

[ ] Post View Component

[ ] Display Markdown

[ ] Create Post / Editor Component (with Markdown Preview and JSON export)

## CLI notes

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).