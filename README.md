# My Portfolio

A React site that showcases the projects I built while learning software development in Level 2.


## Components

| Component | What it shows | Where its values come from | What it remembers | What it receives |
| --- | --- | --- | --- | --- |
| `Header` | My name and a line about me | Typed into the JSX | — | - |
| `Hero` | My three hero photos and photo controls | `heroPhoto`, which calls `imageUrl` | Which photo is showing, whether it is in color, and the blur setting | - |
| `Fortune` | A random fortune | A list and `randomNumber` | Which fortune is showing | - |
| `Footer` | Copyright and the current year | The year the page is opened | — | - |
| `ProjectCard` | One project: its name, description, details, and two links | `projects.js`, through `App` | Its likes, and whether it shows more | `project` |
| `PhotoControls` | The hero's buttons | `Hero` | - | `onNext`, `onPrevious`, `onColor`, `onBlackAndWhite` |


## What I've built

* Buttons to switch hero photos and move between them.
* Color, black-and-white, blur, and reset-blur controls.
* A button to show a new random fortune.
* Like and Unlike buttons for project cards.
* Saved like counts that persist after reloading.
* A Show More and Show Less button on the Click Lab card.

## Built with

React, Vite, Bun, and Pico CSS.
