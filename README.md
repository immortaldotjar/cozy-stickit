# Stickit

A cozy-stickit sticky note

## Install

```bash
npm install cozy-stickit
```

## Usage

```jsx
import StickIt from "cozy-stickit"

<StickIt title="Draw" icon="✏️">
  this is a sticky note.
</StickIt>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| title | string | none | Heading written on the tape |
| icon | node | none | Icon shown at the top of the note (emoji, react-icon, any element) |
| children | node | none | The note text |
| colors | string[] | 6 pastel colors | Palette the random color is picked from |
| color | string | random | Force one color |
| tilt | number | random | Force a rotation in degrees |
| width | number or string | 256 | Width of the note |
| fontFamily | string | inherit | Font for the heading and text |
| className, style | | | Extra class or style on the outer element |