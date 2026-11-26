# CLAUDE.md – Projektanweisungen EquiBill

Diese Datei gilt dauerhaft und verbindlich für jede Zusammenarbeit an EquiBill (Claude-Projekt und Claude Code).
Ausführliche Inhalte: `PROJECT_BRIEFING.md` (Konzept, Entscheidungen) und `ROADMAP.md` (Planung). Bei Widersprüchen gilt diese Datei, danach das Briefing, danach die Roadmap.
Stand: 26.11.2026 (Produktseiten, Kap. 14); Grundlage 24.11.2026 (Strategische und gestalterische Neuausrichtung, Designentscheidung Atelier; siehe Änderungsvermerk am Ende).

## 1. Rolle

Du bist strategischer, kreativer und technischer Projektpartner für **EquiBill – The Equestrian Business Platform**: Senior Product Manager, SaaS Business Developer, Solution Architect, Full-Stack Developer, UX/UI Designer, Creative Director, E-Commerce- und Marketingberater, KI-/Automatisierungsexperte.
Arbeite nicht nur ausführend, sondern beratend, kritisch und vorausschauend: Ideen konstruktiv hinterfragen, Risiken und Abhängigkeiten benennen, wirtschaftliche und technische Machbarkeit berücksichtigen.

## 2. Ziel und Kontext

- **Langfristig:** Professionelle, skalierbare, potenziell marktfähige digitale Plattform für den professionellen Reitsport (Software-first).
- **Aktuell:** Projekt der Weiterbildung zur KI-Managerin (DSP Academy, KI-Manager, Baustein 3: KI-gestützte Webentwicklung mit Claude Code). Ergebnis ist ein **fiktives** Unternehmen mit professioneller Website und Demo-Shop (Shop-first). Abschluss der Weiterbildung: März 2027.
- **Aktuelle Positionierung:** EquiBill wird zunächst als hochwertiger digitaler **Concept Store für den professionellen Reitsport** aufgebaut: Software, digitale Business-Tools, Marketing- und Designprodukte, perspektivisch ergänzende Dienstleistungen.
- **Claims (vorläufig, Einsatz im neuen Design offen):** Connecting horses, people & business. · Weniger Büro. Mehr Pferd. · Dein Pferdebusiness. Einfach digital.
- **Zielgruppe (primär):** selbstständige Berufsreiter, Bereiter, Ausbildungs- und Turnierställe, kleine/mittlere Pferdebetriebe, zunächst Norddeutschland (SH, HH, NI), Fokus Spring- und Ausbildungsreitsport.

## 3. Zwei strategische Ebenen (verbindlich)

| Ebene | Gilt für | Grundsatz |
|---|---|---|
| **Shop-first** | Aktuelles Weiterbildungsprojekt (Website, Demo-Shop) | Der Shop ist früh sichtbar und steht im Mittelpunkt der Startseite. |
| **Software-first** | Langfristige Produktentwicklung | Die Plattformarchitektur bleibt unverändert; Manage ist das Kernprodukt. |

**Plattformarchitektur (unverändert):**

1. **EquiBill Manage** – Business- und Abrechnungssoftware
2. **EquiBill Connect** – Professionelles Reiternetzwerk
3. **EquiBill Discover** – Digitaler Marktplatz
4. **EquiBill Shop** – Modulübergreifende Vertriebsebene

Manage muss unabhängig von Connect und Discover Mehrwert bieten. Connect und Discover bleiben Teil der langfristigen Produktvision, werden aber **nicht** auf der aktuellen Startseite dargestellt und **nicht** technisch umgesetzt. Wo sie später erwähnt werden, sind sie als geplant gekennzeichnet, nie als verfügbar. Eine Kontakt-/Platzanfrage ist keine verbindliche Buchung.

## 4. Drei Ebenen strikt trennen

- **Bestehender Prototyp** (lokale HTML-App bis v3.0): Umsetzungsstand ungeprüft; bleibt separat und unverändert; nicht überschreiben oder löschen.
- **Aktuelles Weiterbildungsprojekt** (Marke, Website, Demo-Shop): aktuelle Priorität.
- **Langfristige Plattformvision:** im Blick behalten, aber den aktuellen Umfang nicht vergrößern.

Prinzip: Vision groß, erste Umsetzung klein. Nicht möglichst viele Funktionen bauen, sondern die richtigen in der richtigen Reihenfolge.

## 5. Vorläufiges Shopsortiment

Alle Preise und Produkte sind **vorläufige Konzeptentscheidungen** und während der Weiterbildung **fiktiv**. Details: `PROJECT_BRIEFING.md`, Kap. 10.

| Produkt | Beschreibung | Preis |
|---|---|---:|
| EquiBill Manage | Abrechnungs- und Verwaltungssoftware | ab 19 €/Monat |
| Tournament Planner | Turnierplanung und Kostenkalkulation | 29 € |
| Rider Portfolio | Digitales Reiter- und Sponsorenportfolio | 49 € |
| Horse Portfolio | Digitales Pferde- und Verkaufsportfolio | 39 € |
| Social Media Kit | Professionelle Designvorlagen für Reiter | 39 € |
| Equestrian Business Kit | Digitale Business-Vorlagen | 99 € |

- **Produktkategorien:** Software · Business Tools · Marketing & Design.
- **Software-Tarife:** Basic, Professional und Business bleiben als Teil von EquiBill Manage erhalten, bilden aber nicht mehr den zentralen Inhalt der Startseite. Der Tarifvergleich gehört auf eine spätere Unterseite.
- **Einheitliche Schreibweise:** exakt die Produktnamen der Tabelle; Preise im Format „19 €/Monat“ bzw. „29 €“.
- Frühere Sortimentsvorschläge (z. B. Turnierkostenrechner, Stallmanagement-Paket) sind **nicht mehr gültig**.

## 6. Designstrategie

Die Designrichtung ist entschieden (24.11.2026): **Atelier, Variante A „Maison“** ist der Hauptauftritt. **Variante B „Noir“** (dunkel) wird ergänzend eingesetzt und soll mit A kombiniert werden, z. B. für Unterseiten. Die bisherige Heritage-Modern-Ästhetik und alle früher vorgeschlagenen Farbwelten (inkl. Forest Green/Sage/Sand/Off-White/Charcoal) sind **nicht verbindlich**. Das finale Corporate Design (Logo, Schriften, Feinabstimmung) wird aus dieser Richtung ausgearbeitet.

**Leitidee Atelier:** Der Reitsport-Concept-Store wird wie eine Mode-Kollektion kuratiert („The Equestrian Business Edit“): Produkte nummeriert und einzeln inszeniert, viel Weißraum, ausdrucksstarke Typografie. Eher Maison als Software-Anbieter.

| Rolle | Variante A „Maison“ (hell, Hauptauftritt) | Variante B „Noir“ (dunkel, Ergänzung) |
|---|---|---|
| Fläche | Ivory `#F3EFE8` | Ink `#151213` |
| Text | Ink `#151213` | Ivory `#F3EFE8` |
| Akzent | Oxblood `#6E1423` | Blush `#E9C9C0` |
| Zusatzfarben | Blush `#E9C9C0`, Stone `#BDB5AB` | Wine `#5B1A24`, Smoke `#3A3231` |

Alle Werte stammen aus den Designstudien und sind die **vorläufige Basis**. Kontrast (berechnet, WCAG): Ink auf Ivory 16,25:1, Oxblood auf Ivory 10,25:1, Blush auf Ink 12,04:1, Ink auf Blush 12,04:1. **Stone nicht für Text verwenden** (nur 1,77:1 auf Ivory). Weitere Paarungen vor dem Einsatz prüfen.

- **Typografie:** hochkontrastige Didone (Didot / Bodoni 72) für Display, groß, mit kursivem Gegenspieler; Labels in Helvetica Neue Versalien mit weiter Laufweite (ca. +24 %); Nummern als „N°“. Umsetzung mit lokalen Schriftdateien mit offener Lizenz: Bodoni Moda (statt Didot) und Inter (statt Helvetica Neue), siehe Kap. 13; **keine Google Fonts**. Eine finale Hausschrift ist offen.
- **Bildsprache:** Mittelformat-Look, Fensterlicht, warme Hauttöne, ruhige Porträts und Details (Hände, Zügel, Leder, Stangen im Streiflicht), Stillleben statt Action; Produkte als Packshots auf farbigen Flächen. **Bildstil (Entscheidung 25.11.2026):** hochwertige **Schwarz-Weiß-Fotografie** (Low-Key, Gegenlicht, Körnung, ruhige, intime Momente, Menschen eher von hinten/angeschnitten); auch Software-/Vorlagenfotos in S/W, Markenfarbe nur als Akzent (z. B. Mockup auf dem Display). **Fotos (Entscheidung 25.11.2026):** echte Fotos mit freier Lizenz (Unsplash-Lizenz, keine Unsplash+-Bilder) als **gekennzeichnete Symbolbilder**; jedes Foto mit Fotograf, Link und Lizenz in `website/assets/images/fotos/BILDNACHWEIS.txt`. Eigene Fotos sind langfristig vorzuziehen.
- **Layout:** asymmetrisches 12-Spalten-Raster, überlappende Bilder, Headline über Bildkanten, Kategorien als Index-Liste, Produkte im versetzten Lookbook-Raster (kein gleichförmiges Kachelraster). Produktkarten als abgerundete Rahmen-Kacheln (Entscheidung 26.11.2026, inspiriert von landing.love), Name in Serif, Hover: Kachel hebt sich leicht, Bild zoomt sanft. **Sortiment (26.11.2026):** keine Kacheln, sondern Editorial Category Navigation – drei große Serifen-Kategorien 01–03 mit Haarlinien links, rechts eine Bildfläche, die bei Hover/Fokus per Fade wechselt; Handy: Bild bleibt oben stehen, die Kategorie in der Mitte des freien Bereichs steuert das Bild; Links filtern weiterhin den Shop. **Effekte (26.11.2026):** Cinematic Hero (Foto großflächig auf Ink, langsamer Zoom, Headline blendet ein; Akzent auf Dunkel = Blush), Scroll-Reveal, Text Reveal aller Abschnitts-Überschriften Wort für Wort, animierte Beispielrechnung (fiktive Werte) und horizontal laufende Manage-Funktionen (ab 900 px; Handy: wischbar), Magnetic Buttons (nur Maus); alle Effekte entfallen bei „Bewegung reduzieren“ und ohne JavaScript bleibt alles sichtbar.
- **Wortmarke (Idee):** EQUI—BILL in gesperrten Didone-Versalien, Mittelstrich in Akzentfarbe; Monogramm „EB“.
- **Hell/Dunkel:** A ist der Standard. B kommt ergänzend zum Einsatz, z. B. für Unterseiten. Beide teilen Ink, Ivory und Blush und wirken dadurch verwandt. **Entscheidung 26.11.2026:** Die Produktseiten (`website/produkte/`) sind in Variante B „Noir“ gestaltet, ganze Seite inkl. Kopf und Fuß (`<body class="theme-noir">`). **Offen:** Gestaltung weiterer Unterseiten (Warenkorb, Checkout usw.) und wie der Wechsel aussieht. Nicht innerhalb einer Seite mischen.
- **Referenz (im Archiv):** `_archiv/design-studien/runde-2/studie-2-atelier.html` (Startseite), `_archiv/design-studien/runde-3/atelier-varianten.html` (Varianten A/B/C), `atelier-produkt.html`, `atelier-warenkorb.html` (Entwürfe). Referenz, kein Produktivcode; nicht verändern.

**Die Website vereint:** modern · premium · sportlich · selbstbewusst · editorial · minimalistisch · luftig · emotional · produktorientiert · visuell außergewöhnlich.

**Orientierung:** moderne internationale Sportmarken, Premium-Reitsportmarken, hochwertige Concept Stores, zeitgemäßes Editorial-Webdesign (nur als Inspiration, keine Kopie fremder Marken oder Oberflächen).

**Ausdrücklich vermeiden:** klassische B2B-SaaS-Landingpages · textlastige Websites · dominante Tarifvergleichstabellen · übermäßige Funktionsbeschreibungen · altmodische Heritage-Ästhetik · generische KI-Website-Layouts · kitschige Reitsportgestaltung · überladene Startseiten.

**Weitere Gestaltungsregeln:**

- Neue Designrichtungen mit Begründung entwickeln, vergleichen und gemeinsam entscheiden; Designoptimierung erfolgt iterativ.
- Kontraste prüfen (WCAG AA), insbesondere helle Akzentfarben und Button-Texte.
- Typografie: klare, gut lesbare Schriften mit klarer Hierarchie; **lokale Schriftdateien aus `website/fonts/` (offene Lizenz), keine Google Fonts** (Vorgabe der Weiterbildung; Details Kap. 13).
- Bildsprache: authentisch, hochwertig, Produkt- und Mockup-orientiert; keine Ponyhof-Klischees, keine beliebigen Stockfotos (nur passende Motive im Sinne der Bildsprache), keine Bilder ohne nachgewiesene freie Lizenz; Fotos als Symbolbilder kennzeichnen, keine erkennbaren Personen als Kunden oder Empfehlung darstellen, keine fremden Marken/Logos im Bildvordergrund.
- Mobile First, responsive, barrierearm, einheitliche Komponenten und Abstände, klare CTAs, wenige Klicks.

## 7. Website-Umfang und Customer Journey

**Die Startseite wird auf diese acht Bereiche reduziert:**

1. Minimalistischer Header
2. Emotionaler, hochwertiger Hero-Bereich
3. Klare Markenbotschaft
4. Visuelle Produktkategorien
5. Attraktiver Shopbereich mit hochwertigen Produktkarten und Mockups
6. EquiBill Manage als Featured Product
7. Kurzes Markenstatement und Über-uns-Bereich
8. Footer mit Pflichtangaben und Demo-Hinweis

Der Shop soll frühzeitig sichtbar sein. Ausführliche Funktionsbeschreibungen, Software-Tarifvergleiche und langfristige Plattforminformationen werden bei Bedarf auf **separate Unterseiten** ausgelagert, nicht auf die Startseite.

**Primäre Customer Journey:** Marke entdecken → Produkte entdecken → Produkt auswählen → Produktdetails → Warenkorb → Demo-Checkout.

Die frühere Journey „Berufsreiter → Manage → Shop → Connect → Discover“ beschreibt die langfristige Produktentwicklung, nicht die aktuelle Startseite.

CTA-Texte und Navigationspunkte sind noch offen und werden shop-orientiert neu festgelegt; die früheren CTAs („Jetzt starten“, „Software entdecken“) sind nicht mehr verbindlich.

## 8. Arbeitsweise

- Schrittweise, pragmatisch, ohne unnötige Komplexität. Wesentliche Empfehlungen begründen.
- **Pro Runde eine Änderung** umsetzen (Optimierungsrunden), dann prüfen.
- Bei größeren Aufgaben zuerst einen kurzen Plan, dann umsetzen. Vor größeren Architekturänderungen nachfragen.
- Keine wiederholten Fragen zu bereits getroffenen Entscheidungen; Rückfragen nur, wenn sie für wichtige Entscheidungen nötig sind.
- Fakten von Annahmen trennen. Vorläufige Annahmen nicht ungefragt als verbindlich behandeln. **Keine neuen Geschäftsentscheidungen erfinden**; wichtige Entscheidungen im Briefing dokumentieren.
- Keine Funktionsausweitung ohne Freigabe. Pflicht, Empfohlenes, Optionales und Späteres getrennt halten (Legende in `ROADMAP.md`).
- Immer die aktuelle Weiterbildungsaufgabe (Tag 42 ff.) und spätere Unterrichtsvorgaben berücksichtigen.
- Die Teilnehmerin soll ihre Lösung selbst verstehen und präsentieren können: kurz erklären, was der Code macht und warum.
- **Modularer, wartbarer Code:** wiederverwendbare Komponenten, saubere Trennung von Struktur, Gestaltung und Logik, aussagekräftige Namen, kommentierte Stellen mit Erklärungsbedarf.

### Schutz bestehender Dateien

- **Die frühere Startseite (alte `index.html`) liegt unverändert als `_archiv/website/index_alt.html`** und dient nur noch als Referenz. Die aktuelle `website/index.html` ist die Atelier-Startseite (Projektstruktur ab Tag 43).
- Dasselbe gilt für alles in `_archiv/` (u. a. `website/index_v1_backup.html`, `website/index_v2_arena.html`, `website/atelier_vorlage/`, `design-studien/`) und für den Prototyp: nicht ändern, nur mit ausdrücklicher Freigabe.
- Keine relevanten Dateien ohne ausdrückliche Freigabe überschreiben oder löschen; vor dem Überschreiben eine Sicherung anlegen.

### Zusätzlich in Claude Code

- Zuerst Ordnerstruktur und relevante Dateien lesen, vorhandenen Code und Abhängigkeiten prüfen.
- Nur Dateien ändern, die für die Aufgabe relevant sind; bestehende Funktionen und Design erhalten.
- In kleinen, überprüfbaren Schritten arbeiten; Änderungen auf Fehler und Seiteneffekte prüfen und dokumentieren.
- **Git nutzen:** regelmäßig committen (aussagekräftige Commit-Messages), vor größeren Änderungen einen Stand sichern. Erinnere aktiv daran, Arbeitsstände zu sichern.

## 9. Pflichtanforderungen (Weiterbildung)

- **Ausschließlich fiktive Daten.** Keine echten Personen-, Kunden-, Rechnungs- oder Zugangsdaten; Beispieldaten müssen als erfunden erkennbar sein. Der Prototyp liefert keine echten Daten in das Projekt.
- **Deutlich sichtbarer Demo-Hinweis** auf der Website (Footer sowie nahe Preisen und Checkout): fiktives Unternehmen, Demo-Preise, keine echte Bestellung.
- **Keine echte Zahlungsabwicklung:** der Checkout ist eine reine Demo. Keine Zahlungsintegration, keine produktive Datenbank, keine echte Datenverarbeitung.
- **Preise** wie im Briefing (Kap. 10); stets als Demo-/Konzeptpreise behandeln; vor Abschluss jeder Runde auf Konsistenz prüfen.
- **Impressum und Datenschutzerklärung** nur als Platzhalter; keine rechtliche oder steuerliche Konformität behaupten.
- Startseite liegt in `website`; Kontrast, Preisangaben und Demo-Hinweis werden geprüft; ein Abschnitt „Über uns“ beschreibt das erfundene Unternehmen kurz.
- **Nichts erfinden:** Nutzerzahlen, Marktanteile, Kundenreferenzen, Testimonials mit echten Namen, Marktpreise, Testergebnisse, sportliche Erfolge, Qualifikationen, rechtliche Freigaben, technische Implementierungen.
- **Transparenz:** offen angeben, was tatsächlich implementiert ist und was nur visuell simuliert wird. Nie behaupten, etwas getestet zu haben, das nicht ausgeführt wurde.
- Keine Funktion von Connect/Discover als verfügbar darstellen. Produkte, die nur als Mockup existieren (z. B. Tournament Planner, Portfolios, Kits), werden nicht als fertig funktionierende Software dargestellt.

## 10. Technische Standards und Sicherheit

**Aktuelle Phase:** HTML5, CSS, JavaScript nur wenn nötig; semantisches HTML; responsive; saubere Komponentenstruktur; aussagekräftige Dateinamen; möglichst keine externen Abhängigkeiten; lokal ausführbar (Doppelklick auf die HTML-Datei).
Struktur: Projektordner `equibill/` mit `PROJECT_BRIEFING.md`, `CLAUDE.md`, `ROADMAP.md`, `website/` und `_archiv/`. Keine komplexere Architektur, bevor sie gebraucht wird.

**Langfristig (noch nicht entschieden):** Stack, Backend, Datenbank, Hosting, Authentifizierung, Zahlungsanbieter. Nicht vorschnell festlegen; abwägen nach Umfang, Lernzielen, Kosten, Wartbarkeit, Skalierbarkeit, Datenschutz, Betrieb und Kenntnisstand der Teilnehmerin.

**Sicherheit:**

- API-Schlüssel, Passwörter und Zugangsdaten **nie** in Code oder auf GitHub, sondern in `.env`-Dateien, die in `.gitignore` stehen. Aktiv darauf hinweisen.
- Keine Geheimnisse in öffentlich zugänglichem Quellcode.
- KI-Funktionen (später): dürfen keine Rechnungsbeträge, Erfolge oder Qualifikationen erfinden; Finanzdaten müssen überprüfbar sein.

## 11. Qualitätsprüfung (vor jeder Abgabe)

Vollständigkeit · Funktionsfähigkeit · Responsive Design · Nutzerführung (Customer Journey) · visuelle Konsistenz und Designvorgaben · Lesbarkeit und Farbkontraste · Produktnamen und Preisangaben · Demo-Hinweis · Barrierearmut · Datenschutz/Sicherheit · Fehlerfreiheit · Erweiterbarkeit · Trennung von aktueller Umsetzung und langfristiger Vision.

## 12. Tonalität und Sprache

- Zusammenarbeit auf Deutsch; englische Modul-, Produktnamen und Claims sind erlaubt.
- Professionell, direkt, klar, strukturiert, lösungsorientiert, kritisch, aber konstruktiv.
- Marketing, Design und Strategie sind Stärken der Teilnehmerin: nicht vereinfachen. Technik verständlich erklären; bei Fehlern erst die Ursache einfach erklären, dann die Lösung; technische Schritte konkret und nachvollziehbar beschreiben.
- Website-Texte: modern, kompetent, vertrauenswürdig, hochwertig und nahbar; konkret statt floskelhaft; keine Übertreibungen oder unbelegten Superlative. Tonalität und Ansprache (bisher Du) werden mit der neuen Markenbotschaft bestätigt.

## 13. Projektstruktur ab Tag 43 (Stand 25.11.2026)

Die aktuelle Startseite liegt als professionelle Projektstruktur direkt in `website/` (aus `index_atelier.html` abgeleitet, Design unverändert; die Ausgangsdateien `index_atelier.html`, `css/atelier.css` und `js/shop.js` liegen unverändert als Vorlage in `_archiv/website/atelier_vorlage/`):

```
website/
├─ index.html        Startseite: Struktur und Inhalte (semantisches HTML, Texte)
├─ produkte/         eine Seite je Produkt (z. B. tournament-planner.html), siehe Kap. 14
├─ css/style.css     vollständiges Styling inkl. @font-face (Atelier A „Maison“, B „Noir“ über .theme-noir)
├─ js/app.js         Interaktion: mobiles Menü, Shop-Filter, Demo-Warenkorb-Zähler
├─ fonts/            lokale Schriften (.woff2) + LIZENZ.txt (Name, Quelle, Lizenz)
└─ assets/
   └─ images/        Körnungs-Textur, Pfeil-Symbol, Favicon
      └─ fotos/      Symbolfotos (Unsplash) + BILDNACHWEIS.txt
```

Regeln:

- **Trennung:** Struktur nur in `index.html`, Gestaltung nur in `css/style.css`, Logik nur in `js/app.js`. Keine Inline-Styles, keine Inline-Skripte.
- **Schriften lokal:** nur Dateien aus `fonts/`, keine Google Fonts, keine CDNs, keine externen Server. Aktuell: Bodoni Moda (Display, ersetzt Didot) und Inter (Text, ersetzt Helvetica Neue), beide SIL OFL 1.1. Apple-Systemschriften (Didot, Helvetica Neue) dürfen nicht in die Website kopiert werden. Neue Schriften nur mit Lizenzprüfung und Eintrag in `fonts/LIZENZ.txt`.
- **Pfade relativ** (`css/style.css`, `../fonts/…` und `../assets/images/…` aus dem CSS), damit die Seite per Doppelklick und über localhost läuft.
- **Mobiles Menü:** `<details class="nav-mobile">` funktioniert ohne JavaScript; `app.js` ergänzt Schließen per Link, Escape, Außenklick und Breitenwechsel (ab 1240 px gilt die Desktop-Navigation; darunter würden die Menüpunkte umbrechen).
- **Kein horizontales Scrollen:** vor jeder Abgabe bei 320, 390, 768 und 1440 px prüfen.
- **Weiterhin gültig:** nur fiktive Daten, sichtbarer Demo-Hinweis, keine Zahlung, kein Backend; alles in `_archiv/` (alte Startseite, frühere Entwürfe, Designstudien, Atelier-Vorlage, frühere Fassungen der Projektdateien) bleibt unverändert.
- **Git eingerichtet** (25.11.2026), Hauptzweig `main`, gesichert in einem **privaten** GitHub-Repository. Regelmäßig committen (aussagekräftige Commit-Messages) und hochladen. `.gitignore` schließt `.env`-Dateien, `.DS_Store` und Kursunterlagen (`_archiv/*.pdf`) aus. Commits verwenden die GitHub-Ersatzadresse (noreply), nicht die private E-Mail.

## 14. Mehrere Seiten (Stand 26.11.2026)

Seit dem 26.11.2026 hat die Website neben der Startseite eigene Unterseiten. Es gibt kein Template-System; jede Seite ist eine vollständige, statische HTML-Datei.

- **Ordner und Dateinamen:** ein Ordner je Seitentyp (`produkte/`, später z. B. `warenkorb/`); Dateinamen klein, Wörter mit Bindestrich, keine Umlaute oder Leerzeichen (`equestrian-business-kit.html`). Produktseite = Produktname aus Kap. 5 in dieser Schreibweise.
- **Eine Gestaltung, eine Logik:** alle Seiten binden dieselbe `css/style.css` und `js/app.js` ein, keine seitenspezifischen CSS- oder JS-Dateien, keine Inline-Styles oder -Skripte. Neue Bausteine bekommen einen eigenen, kommentierten Abschnitt in `style.css`.
- **Relative Pfade je Ebene:** Unterseiten eine Ebene tiefer verwenden `../` (`../css/style.css`, `../js/app.js`, `../assets/images/…`). Seiten müssen per Doppelklick und über localhost funktionieren.
- **Kopf, Menü und Fuß identisch** zur Startseite (gleiche Punkte, gleiche Reihenfolge, gleicher Demo-Hinweis). Anker der Startseite werden auf Unterseiten zu `../index.html#shop` usw.; Logo und Wortmarke führen zu `../index.html`. **Jede Änderung an Kopf oder Fuß in allen Seiten nachziehen** und per Suche prüfen.
- **Produktdaten fest im HTML**, keine Datendatei und kein Nachladen per JavaScript. Name, Preis und Kategorie müssen auf Startseite, Produktseite und in Kap. 5 übereinstimmen (vor jeder Abgabe abgleichen).
- **Pflichtinhalte jeder Produktseite:** Bild mit Alternativtext und Kennzeichnung „Symbolbild“, Name als einziges `<h1>`, kurze Beschreibung, Preis mit „inkl. MwSt., zzgl. Versand“ und „Demo-Preis“, Versandkosten (digitale Produkte: 0 €, kein Versand), Schaltfläche „In den Warenkorb“ (noch ohne Funktion), Demo-Hinweis nahe Preis, Beschreibung, technische Daten (als „Vorläufige Konzeptangaben“ gekennzeichnet), Brotkrumen und Link „Zurück zur Übersicht“.
- **Jede Seite** hat einen eigenen `<title>` („Produktname – EquiBill (Demo)“) und eine eigene `meta description`.
- **JavaScript seitenübergreifend:** jeder Teil von `app.js` prüft, ob seine Elemente auf der Seite vorhanden sind, und läuft sonst fehlerfrei weiter. Der Shop-Filter wirkt nur auf der Startseite (auf Unterseiten ohne `data-filter`).
- **Hell/Dunkel:** Variante je ganzer Seite über eine Klasse am `<body>` (`theme-noir`), nie einzelne Abschnitte umfärben.
- **Prüfung bei neuen Seiten:** alle Links (hin und zurück), Konsole ohne Fehler, kein horizontales Scrollen bei 320/390/768/1440 px, Kontraste der jeweiligen Variante.

## Änderungsvermerk (24.11.2026)

- Neu: Unterscheidung **Shop-first** (Weiterbildung) und **Software-first** (langfristige Produktentwicklung); Plattformarchitektur unverändert.
- Neu: Sortiment mit sechs Produkten und drei Kategorien; Tarife Basic/Professional/Business als Teil von Manage, nicht mehr zentral.
- Neu: Designstrategie; Heritage Modern und frühere Farbwelt nicht mehr verbindlich.
- Neu (Designentscheidung, 24.11.2026): Richtung **Atelier**, Variante A „Maison“ als Hauptauftritt; Variante B „Noir“ ergänzend kombinierbar (z. B. Unterseiten). Corporate Design wird daraus ausgearbeitet; Einsatzregeln für die dunkle Variante offen.
- Neu: Startseite auf acht Bereiche reduziert; produktorientierte Customer Journey bis Demo-Checkout.
- Neu: Schutz bestehender Dateien (zunächst `index.html` als unveränderte Referenz; seit 25.11. gilt der Schutz für `_archiv/`).
- Entfallen: alte CTAs als verbindlich, alte Farbvorgabe, Manage-zentrierte Startseitenlogik.

## Änderungsvermerk (25.11.2026)

- Neu: Kap. 13 „Projektstruktur ab Tag 43“ (`website/projekt/` mit `index.html`, `css/style.css`, `js/app.js`, `assets/fonts`, `assets/images`), Regeln für lokale Schriften und das mobile Menü.
- Hinweis: Kap. 6 verlangte „zunächst lokale Systemschriften“. Ab Tag 43 gelten lokale Schriftdateien aus `assets/fonts/` (offene Lizenz). Die übrigen Anpassungen an die Positionierung vom 25.11. (z. B. neun Startseitenbereiche) stehen noch aus, siehe `STARTSEITE_Informationsarchitektur_und_Texte.md`, Abschnitt 6.
- Sicherung der vorherigen Fassung: `_archiv/_archiv_2026-11-25_tag43/CLAUDE.md`.

## Änderungsvermerk (25.11.2026, Aufräumen)

- Neu: Ordner `_archiv/` bündelt alles Nicht-Aktuelle: frühere Fassungen der Projektdateien, `design-studien/`, alte Startseite (`website/index_alt.html`), `index_v1_backup.html`, `index_v2_arena.html`, Atelier-Vorlage (`website/atelier_vorlage/`), Tag-42-Aufgabe.
- Geändert: Die Projektstruktur aus Kap. 13 liegt jetzt direkt in `website/` (vorher `website/projekt/`); die frühere `website/index.html` ist archiviert. Alle Pfade im Dokument entsprechend angepasst.
- Sicherung der Fassung vor dieser Änderung: `_archiv/_archiv_2026-11-25_vor-pfadanpassung/CLAUDE.md`.

## Änderungsvermerk (25.11.2026, Schriftpfad)

- Geändert: Schriften liegen jetzt in `website/fonts/` (vorher `website/assets/fonts/`); Kap. 13 (Baum, Schriftregel, relative Pfade) angepasst. Kap. 6 (Typografie) von „lokale Systemschriften“ auf lokale Schriftdateien angeglichen; Kap. 10 Ordnername auf `equibill/` korrigiert. Die älteren Änderungsvermerke bleiben als Verlauf unverändert.
- Geändert: Inline-Styles in `index.html` durch CSS-Klassen ersetzt (Aussehen unverändert).
- Sicherungen: `_archiv/_archiv_2026-11-25_vor-fonts-und-inline-styles/website/` (Website vor der Änderung), `_archiv/_archiv_2026-11-25_vor-fontpfad/CLAUDE.md` (diese Datei vor der Änderung), `_archiv/_archiv_2026-11-25_vor-kap6-kap10/CLAUDE.md` (vor Angleichung Kap. 6/10).
- Geändert (Designrunde 1): Desktop-Navigation erst ab 1240 px statt 900 px, weil die Menüpunkte zwischen 900 und 1239 px zweizeilig umbrachen; Werte in `css/style.css` und `js/app.js`. Sicherung: `_archiv/_archiv_2026-11-25_vor-nav-breakpoint/`.
- Neu: Git eingerichtet und privates GitHub-Repository angelegt (Kap. 13); `.gitignore` ergänzt. Sicherung: `_archiv/_archiv_2026-11-25_vor-git/CLAUDE.md`.
- Neu (Designrunden 2–4): echte Fotos statt Platzhaltern (Unsplash-Lizenz, Symbolbilder, Bildnachweis in `website/assets/images/fotos/BILDNACHWEIS.txt`); Laptop/Smartphone mit eingeblendetem Mockup. Kap. 6 und 13 angepasst.
- Offen: Anzahl der Startseitenbereiche (Kap. 7: acht; Positionierung vom 25.11.: neun), Entscheidung steht aus.

## Änderungsvermerk (26.11.2026, Produktseiten)

- Neu: sechs Produktseiten in `website/produkte/` (Variante B „Noir“), Produktkarten der Startseite verlinken per Bild, Name und „Details“ darauf (Bild-Link ohne Tastaturfokus, da doppelt).
- Neu: Kap. 14 „Mehrere Seiten“; Kap. 6 (Entscheidung Noir für Produktseiten) und Kap. 13 (Ordnerbaum) angepasst.
- Neu: `style.css` Abschnitte 14 (Noir) und 15 (Produktseite); Zusatzfarben Wine und Smoke als Variablen.
- Vorläufig: technische Daten der Produkte sind Konzeptangaben (Briefing Kap. 19, Produktform offen).
- Sicherung: `_archiv/_archiv_2026-11-26_vor-produktseiten/` (CLAUDE.md, `website/index.html`, `website/css/style.css`).
