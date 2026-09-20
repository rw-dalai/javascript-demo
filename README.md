# JavaScript Demo

| Datei | Inhalt |
|---|---|
| `js-basics-demo.js` | Funktionen, Objekte, Arrays, Early Return Pattern |
| `js-input-demo.js` | Eingabe von der Konsole mit `@inquirer/prompts` |

## Installieren

Nach dem Klonen einmal die Abhängigkeiten installieren:

```bash
git clone git@github.com:rw-dalai/javascript-demo.git
cd javascript-demo
npm install
```

## package.json und package-lock.json

| Datei | Wer schreibt sie | Inhalt |
|---|---|---|
| `package.json` | du | Name, Scripts und die gewünschten Pakete mit einem Versionsbereich, z.B. `^8.7.2` |
| `package-lock.json` | npm | die exakt installierte Version jedes Pakets, auch der indirekten |
| `node_modules/` | npm | die Pakete selbst, wird nie committet (steht in `.gitignore`) |

Beide JSON Dateien gehören ins Repo. So bekommt jeder, der klont, mit `npm install` exakt dieselben Versionen.

### Semantic Versioning

Eine Version hat drei Zahlen: `MAJOR.MINOR.PATCH`, z.B. `8.7.2`.

| Stelle | Steigt bei | Beispiel |
|---|---|---|
| `MAJOR` | Änderungen, die alten Code brechen | `8.7.2` zu `9.0.0` |
| `MINOR` | neuen Features, alter Code läuft weiter | `8.7.2` zu `8.8.0` |
| `PATCH` | Bugfixes | `8.7.2` zu `8.7.3` |

In der `package.json` steht meist ein Bereich statt einer festen Version:

| Schreibweise | Bedeutung |
|---|---|
| `^8.7.2` | alles ab `8.7.2`, aber unter `9.0.0` (Standard bei `npm install`) |
| `~8.7.2` | alles ab `8.7.2`, aber unter `8.8.0` |
| `8.7.2` | genau diese Version |

### Was `npm install` macht

1. `npm install` ohne Paketname: liest `package.json` und `package-lock.json` und füllt `node_modules/`.
   Gibt es eine Lock Datei, werden exakt deren Versionen installiert.
2. `npm install @inquirer/prompts`: lädt die neueste Version, trägt sie mit `^` in `dependencies` ein
   und aktualisiert die Lock Datei.
3. `npm uninstall @inquirer/prompts`: entfernt das Paket aus allen drei Orten.

## Starten

Die Programme sind als Scripts in der `package.json` eingetragen:

```bash
npm run js-basics-demo
npm run js-input-demo
```

Das ist dasselbe wie `node js-basics-demo.js` und `node js-input-demo.js`.

## Abhängigkeiten

| Paket | Zweck | Doku |
|---|---|---|
| `@inquirer/prompts` | Prompts für die Konsole: `input`, `select`, `confirm`, `number` | [GitHub](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/prompts) |
