# CLAUDE.md – Projektanweisungen EquiBill

Diese Datei gilt dauerhaft und verbindlich für jede Zusammenarbeit an EquiBill (Claude-Projekt und Claude Code).
Ausführliche Inhalte: `PROJECT_BRIEFING.md` (Konzept, Entscheidungen) und `ROADMAP.md` (Planung). Bei Widersprüchen gilt diese Datei, danach das Briefing, danach die Roadmap.
Stand: 26.11.2026 (Neupositionierung Software-first, Kap. 2, 3, 7; Seitenstruktur Kap. 13, 14); Grundlage 24.11.2026 (Designentscheidung Atelier; siehe Änderungsvermerke am Ende).

## 1. Rolle

Du bist strategischer, kreativer und technischer Projektpartner für **EquiBill – The Equestrian Business Platform**: Senior Product Manager, SaaS Business Developer, Solution Architect, Full-Stack Developer, UX/UI Designer, Creative Director, E-Commerce- und Marketingberater, KI-/Automatisierungsexperte.
Arbeite nicht nur ausführend, sondern beratend, kritisch und vorausschauend: Ideen konstruktiv hinterfragen, Risiken und Abhängigkeiten benennen, wirtschaftliche und technische Machbarkeit berücksichtigen.

## 2. Ziel und Kontext

- **Langfristig:** Professionelle, skalierbare, potenziell marktfähige digitale Plattform für den professionellen Reitsport (Software-first).
- **Aktuell:** Projekt der Weiterbildung zur KI-Managerin (DSP Academy, KI-Manager, Baustein 3: KI-gestützte Webentwicklung mit Claude Code). Ergebnis ist ein **fiktives** Unternehmen mit professioneller Website, Software-Landingpage und Demo-Shop (Software-first). Abschluss der Weiterbildung: März 2027.
- **Aktuelle Positionierung (Entscheidung 26.11.2026):** EquiBill ist ein **Softwareunternehmen für den professionellen Pferdesport**. Herzstück ist **EquiBill Manage**, eine digitale Verwaltungs- und Abrechnungssoftware für Berufsreiter, Bereiter, Trainer und Pferdebetriebe. Ergänzend bietet EquiBill digitale Business-Tools sowie Marketing- und Designvorlagen in einem **separaten Onlineshop** an. Die Software ist das Kerngeschäft; der Shop wird visuell und inhaltlich **nicht gleichwertig** behandelt. (Vorher: „Concept Store“ mit Shop im Mittelpunkt, nicht mehr gültig.)
- **Claims:** „The Business Behind the Sport.“ und „Weniger Büro. Mehr Pferd.“ (beide im Hero, Beschlossen); Markeneinführung: „Du machst den Sport. Wir vereinfachen das Business dahinter.“ Weitere (vorläufig, derzeit nicht eingesetzt): Connecting horses, people & business. · Dein Pferdebusiness. Einfach digital.
- **Zielgruppe (primär):** selbstständige Berufsreiter, Bereiter, Trainer, Ausbildungs- und Turnierställe, kleine/mittlere Pferdebetriebe, Fokus Spring- und Ausbildungsreitsport. Der geografische Startfokus (Norddeutschland) ist eine **interne** Planungsannahme und wird in der Markenkommunikation nicht genannt (Entscheidung 26.11.2026).

## 3. Strategische Ebenen (verbindlich)

Seit 26.11.2026 gilt **Software-first auf beiden Ebenen** (vorher Shop-first im Weiterbildungsprojekt).

| Ebene | Gilt für | Grundsatz |
|---|---|---|
| **Software-first (Website)** | Aktuelles Weiterbildungsprojekt (Website, Software-Seite, Demo-Shop) | EquiBill Manage ist der größte und prominenteste Bereich der Startseite und hat eine eigene Landingpage. Der Shop ist ein ergänzendes Angebot auf einer eigenen Seite; auf der Startseite nur als kleiner Teaser. |
| **Software-first (Produkt)** | Langfristige Produktentwicklung | Die Plattformarchitektur bleibt unverändert; Manage ist das Kernprodukt. |

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
- **Software-Tarife:** Basic 19 €/Monat, Professional 39 €/Monat, Business 79 €/Monat (Demo-Preise, Leistungsgrenzen laut Briefing Kap. 10.4 sind Demo-Annahmen). Der Tarifvergleich steht auf `software.html`; die Startseite nennt nur „ab 19 €/Monat“.
- **Gewichtung:** EquiBill Manage ist das Kernprodukt (Software-Seite). Die übrigen fünf Produkte sind ergänzende Shop-Produkte (`shop.html`, Produktseiten in `produkte/`).
- **Einheitliche Schreibweise:** exakt die Produktnamen der Tabelle; Preise im Format „19 €/Monat“ bzw. „29 €“.
- Frühere Sortimentsvorschläge (z. B. Turnierkostenrechner, Stallmanagement-Paket) sind **nicht mehr gültig**.

## 6. Designstrategie

Die Designrichtung ist entschieden (24.11.2026): **Atelier, Variante A „Maison“** ist der Hauptauftritt. **Variante B „Noir“** (dunkel) wird ergänzend eingesetzt und soll mit A kombiniert werden, z. B. für Unterseiten. Die bisherige Heritage-Modern-Ästhetik und alle früher vorgeschlagenen Farbwelten (inkl. Forest Green/Sage/Sand/Off-White/Charcoal) sind **nicht verbindlich**. Das finale Corporate Design (Logo, Schriften, Feinabstimmung) wird aus dieser Richtung ausgearbeitet.

**Leitidee Atelier:** Editorial wie eine Mode-Kollektion: viel Weißraum, ausdrucksstarke Typografie, Produkte nummeriert und einzeln inszeniert. Seit der Neupositionierung (26.11.2026) inszeniert diese Ästhetik eine **Software-Marke**: EquiBill Manage mit großen Geräte-Mockups im Mittelpunkt, der Shop kuratiert als Ergänzung. Das Design bleibt unverändert; es wirkt bewusst nicht wie eine generische SaaS-Seite.

| Rolle | Variante A „Maison“ (hell, Hauptauftritt) | Variante B „Noir“ (dunkel, Ergänzung) |
|---|---|---|
| Fläche | Ivory `#F3EFE8` | Ink `#151213` |
| Text | Ink `#151213` | Ivory `#F3EFE8` |
| Akzent | Oxblood `#6E1423` | Blush `#E9C9C0` |
| Zusatzfarben | Blush `#E9C9C0`, Stone `#BDB5AB` | Wine `#5B1A24`, Smoke `#3A3231` |

Alle Werte stammen aus den Designstudien und sind die **vorläufige Basis**. Kontrast (berechnet, WCAG): Ink auf Ivory 16,25:1, Oxblood auf Ivory 10,25:1, Blush auf Ink 12,04:1, Ink auf Blush 12,04:1. **Stone nicht für Text verwenden** (nur 1,77:1 auf Ivory). Weitere Paarungen vor dem Einsatz prüfen.

- **Typografie:** hochkontrastige Didone (Didot / Bodoni 72) für Display, groß, mit kursivem Gegenspieler; Labels in Helvetica Neue Versalien mit weiter Laufweite (ca. +24 %); Nummern als „N°“. Umsetzung mit lokalen Schriftdateien mit offener Lizenz: Bodoni Moda (statt Didot) und Inter (statt Helvetica Neue), siehe Kap. 13; **keine Google Fonts**. Eine finale Hausschrift ist offen.
- **Bildsprache:** Mittelformat-Look, Fensterlicht, warme Hauttöne, ruhige Porträts und Details (Hände, Zügel, Leder, Stangen im Streiflicht), Stillleben statt Action; Produkte als Packshots auf farbigen Flächen. **Bildstil (Entscheidung 25.11.2026):** hochwertige **Schwarz-Weiß-Fotografie** (Low-Key, Gegenlicht, Körnung, ruhige, intime Momente, Menschen eher von hinten/angeschnitten); auch Software-/Vorlagenfotos in S/W, Markenfarbe nur als Akzent (z. B. Mockup auf dem Display). **Fotos (Entscheidung 25.11.2026):** echte Fotos mit freier Lizenz (Unsplash-Lizenz, keine Unsplash+-Bilder) als **gekennzeichnete Symbolbilder**; jedes Foto mit Fotograf, Link und Lizenz in `website/assets/images/fotos/BILDNACHWEIS.txt`. Eigene Fotos sind langfristig vorzuziehen.
- **Software- und Produkt-Mockups (26.11.2026):** EquiBill Manage wird mit einem detaillierten Interface in HTML/CSS gezeigt (`.app`, fiktive Daten, skaliert über Container-Einheiten; im Laptop-Foto als `.app--fixed`), nicht mit abstrakten Grafiken. Die Vorlagen im Shop-Teaser zeigen ihren tatsächlichen Aufbau (Tabellenblatt Tournament Planner, Seiten des Rider Portfolio) als gezeichnete Packshots auf farbiger Fläche, gekennzeichnet als „Mockup“.
- **Layout:** asymmetrisches 12-Spalten-Raster, überlappende Bilder, Headline über Bildkanten, Kategorien als Index-Liste, Produkte im versetzten Lookbook-Raster (kein gleichförmiges Kachelraster). Produktkarten als abgerundete Rahmen-Kacheln (Entscheidung 26.11.2026, inspiriert von landing.love), Name in Serif, Hover: Kachel hebt sich leicht, Bild zoomt sanft. **Sortiment (26.11.2026, seit der Neupositionierung auf `shop.html`, nicht mehr auf der Startseite):** keine Kacheln, sondern Editorial Category Navigation – drei große Serifen-Kategorien 01–03 mit Haarlinien links, rechts eine Bildfläche, die bei Hover/Fokus per Fade wechselt; Handy: Bild bleibt oben stehen, die Kategorie in der Mitte des freien Bereichs steuert das Bild; Links filtern weiterhin den Shop. **Effekte (26.11.2026):** Cinematic Hero (Foto großflächig auf Ink, langsamer Zoom, Headline blendet ein; Akzent auf Dunkel = Blush), Scroll-Reveal, Text Reveal aller Abschnitts-Überschriften Wort für Wort, animierte Beispielrechnung (fiktive Werte) und horizontal laufende Manage-Funktionen (ab 900 px; Handy: wischbar), Magnetic Buttons (nur Maus); auf `software.html` zusätzlich: App-Fenster richtet sich beim Scrollen auf, Mockups „spielen ab“ beim Sichtbarwerden (`data-play`), Tabs nach WAI-ARIA, anklickbare Demo; alle Effekte entfallen bei „Bewegung reduzieren“ und ohne JavaScript bleibt alles sichtbar.
- **Wortmarke (Idee):** EQUI—BILL in gesperrten Didone-Versalien, Mittelstrich in Akzentfarbe; Monogramm „EB“.
- **Hell/Dunkel:** A ist der Standard. B kommt ergänzend zum Einsatz, z. B. für Unterseiten. Beide teilen Ink, Ivory und Blush und wirken dadurch verwandt. **Entscheidung 26.11.2026:** Die Produktseiten (`website/produkte/`) und die Software-Seite (`software.html`) sind in Variante B „Noir“ gestaltet, ganze Seite inkl. Kopf und Fuß (`<body class="theme-noir">`). Startseite und Shop-Seite (`shop.html`) bleiben Variante A „Maison“. **Offen:** Gestaltung weiterer Unterseiten (Warenkorb, Checkout usw.) und wie der Wechsel aussieht. Nicht innerhalb einer Seite mischen.
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

**Aufbau der Startseite (Beschlossen 26.11.2026, Software-first, Kopf plus acht Bereiche):**

1. **Hero:** Cinematic Hero mit „The Business Behind the Sport.“ und „Weniger Büro. Mehr Pferd.“, klar als Software kommuniziert. Primärer CTA „Software entdecken“ (→ `software.html`), sekundärer CTA „Zum Shop“ (→ `shop.html`).
2. **Markeneinführung:** „Du machst den Sport. Wir vereinfachen das Business dahinter.“ Was EquiBill ist, für wen, welches Problem.
3. **EquiBill Manage:** größter Bereich; großes Geräte-Mockup, Kundennutzen, animierte Beispielrechnung, horizontal laufende Funktionen, Preis „ab 19 €/Monat“, CTAs „Software entdecken“ und „Tarife vergleichen“.
4. **So funktioniert’s:** Erfassen → Verwalten → Abrechnen als versetzte Treppe.
5. **Shop-Teaser „Mehr als Software“:** nur Tournament Planner und Rider Portfolio, kein Filter, keine Beschreibungslisten; CTA „Alle Produkte entdecken“ (→ `shop.html`). Bewusst kleiner als der Manage-Bereich.
6. **Über EquiBill:** emotionale Markengeschichte unter „Aus dem Pferdesport. Für den Pferdesport.“ (Ursprung laut Briefing Kap. 4), editorial mit Foto.
7. **FAQ:** kompakt, zu Software und ergänzenden Produkten.
8. **Abschluss-CTA und Fuß:** erneuter Fokus auf EquiBill Manage; Fuß mit Pflichtangaben (Platzhalter) und Demo-Hinweis.

Entfallen von der Startseite: eigenständiger Sortimentsbereich, vollständige Produktübersicht mit Filter, Bereich „Vorteile“ (redundant).

**Unterseiten und Navigation:** Kopf: Software · Shop · Über uns · Warenkorb (eigenständig, rechts). FAQ nur im Fuß verlinkt (seit 26.11.2026).
- `software.html` – Produktseite EquiBill Manage (Noir, seit 26.11.2026 mit eigener Dramaturgie): 1) Product Hero (CTA „Interaktive Demo entdecken“ → `#demo`, „Tarife ansehen“ → `#tarife`), 2) Problem und Lösung (`#loesung`, Zettel ordnen sich zur Rechnung), 3) sechs Funktionen (`#funktionen`: alternierend, Tabs 03–05, Statusliste), 4) **interaktive Demo** (`#demo`: Pferd wählen, Leistung und Betrag erfassen, Rechnung und Übersicht aktualisieren sich; nichts wird gespeichert), 5) Anwendungsfälle (`#anwendung`, fiktiv, keine Kundenstimmen), 6) Tarife mit Warenkorb je Tarif, aufklappbarer Vergleichstabelle und technischen Daten (`#tarife`), 7) Software-FAQ (`#faq-software`), 8) Abschluss-CTA „Weniger Büro. Mehr Pferd.“. Aktiver Menüpunkt per `aria-current="page"`. Ersetzt die frühere Produktseite `produkte/equibill-manage.html` (archiviert).
- `shop.html` – alle Produkte, Kategorien (Editorial Category Navigation), Filter; Produktdetailseiten in `produkte/`.
- Über uns und FAQ zunächst als Anker auf der Startseite.

**Demo-Hinweise (gebündelt, seit 26.11.2026):** ausführlich an **einer** Stelle im Fuß („Über diese Demo“) auf jeder Seite; zusätzlich nur kurz, wo es nötig ist: „Demo-Preis“ an jedem Preis, ein Satz zum Mockup je Software-Bereich, kurzer Hinweis an der Warenkorb-Schaltfläche, „Symbolbild“/„Mockup“ an Bildern, „Fiktives Unternehmen“ im Über-uns-Bereich. Keine gerahmten Hinweis-Kästen, keine Wiederholungen in jedem Abschnitt.

**Customer Journeys:**
- **Primär (Software):** Marke entdecken → Software verstehen (Startseite) → Software-Seite: Funktionen, Demo, Tarife → Warenkorb → Demo-Checkout.
- **Ergänzend (Shop):** Shop-Teaser oder Navigation → Shop → Produktdetails → Warenkorb → Demo-Checkout.

Die langfristige Journey „Berufsreiter → Manage → Shop → Connect → Discover“ betrifft die Produktentwicklung, nicht die Website.

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
├─ software.html     Landingpage EquiBill Manage (Noir)
├─ shop.html         Shop: Kategorien, Filter, alle Produkte (Maison)
├─ warenkorb.html    Warenkorb mit Mengen, Summen und Demo-Bestellung (Maison), siehe Kap. 15
├─ produkte/         eine Seite je Shop-Produkt (z. B. tournament-planner.html), siehe Kap. 14
├─ css/style.css     vollständiges Styling inkl. @font-face (Atelier A „Maison“, B „Noir“ über .theme-noir)
├─ js/app.js         Interaktion für alle Seiten: Menü, Shop-Filter (auch per ?kategorie=…), Warenkorb (Kap. 15), Effekte
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

- **Ordner und Dateinamen:** Hauptseiten direkt in `website/` (`index.html`, `software.html`, `shop.html`); gleichartige Seiten in einem Ordner je Seitentyp (`produkte/`, später z. B. `warenkorb/`). Dateinamen klein, Wörter mit Bindestrich, keine Umlaute oder Leerzeichen (`equestrian-business-kit.html`). Produktseite = Produktname aus Kap. 5 in dieser Schreibweise; EquiBill Manage hat statt einer Produktseite `software.html`.
- **Eine Gestaltung, eine Logik:** alle Seiten binden dieselbe `css/style.css` und `js/app.js` ein, keine seitenspezifischen CSS- oder JS-Dateien, keine Inline-Styles oder -Skripte. Neue Bausteine bekommen einen eigenen, kommentierten Abschnitt in `style.css`.
- **Relative Pfade je Ebene:** Unterseiten eine Ebene tiefer verwenden `../` (`../css/style.css`, `../js/app.js`, `../assets/images/…`). Seiten müssen per Doppelklick und über localhost funktionieren.
- **Kopf, Menü und Fuß identisch** zur Startseite (gleiche Punkte, gleiche Reihenfolge, gleicher Demo-Hinweis). Anker der Startseite werden auf anderen Seiten zu `index.html#ueber-uns` bzw. `../index.html#ueber-uns`; Logo und Wortmarke führen zur Startseite. Weg zurück von Produktseiten: Brotkrumen und „Zurück zur Übersicht“ → `../shop.html`. **Jede Änderung an Kopf oder Fuß in allen Seiten nachziehen** und per Suche prüfen.
- **Produktdaten fest im HTML**, keine Datendatei und kein Nachladen per JavaScript. Name, Preis und Kategorie müssen auf Startseite, Software-Seite, Shop, Produktseite und in Kap. 5 übereinstimmen (vor jeder Abgabe abgleichen). Zwischen Betrag und €-Zeichen steht ein geschütztes Leerzeichen (`19&nbsp;€`), damit nichts umbricht.
- **Pflichtinhalte jeder Produktseite:** Bild mit Alternativtext und Kennzeichnung „Symbolbild“ (bzw. gezeichnetes Vorlagen-Mockup mit `role="img"`, `aria-label` und Kennzeichnung „Mockup“, wie bei Tournament Planner und Rider Portfolio; Teaser und Produktseite zeigen dasselbe Mockup), Name als einziges `<h1>`, kurze Beschreibung, Preis mit „inkl. MwSt., zzgl. Versand“ und „Demo-Preis“, Versandkosten (digitale Produkte: 0 €, kein Versand), Schaltfläche „In den Warenkorb“ mit `data-cart-add` (Kap. 15), Demo-Hinweis nahe Preis, Beschreibung, technische Daten (als „Vorläufige Konzeptangaben“ gekennzeichnet), Brotkrumen und Link „Zurück zur Übersicht“.
- **Jede Seite** hat einen eigenen `<title>` („Produktname – EquiBill (Demo)“) und eine eigene `meta description`.
- **JavaScript seitenübergreifend:** jeder Teil von `app.js` prüft, ob seine Elemente auf der Seite vorhanden sind, und läuft sonst fehlerfrei weiter. Der Shop-Filter wirkt nur auf `shop.html`; andere Seiten verlinken gefiltert mit `shop.html?kategorie=tools#produkte` (Werte: `software`, `tools`, `design`).
- **Hell/Dunkel:** Variante je ganzer Seite über eine Klasse am `<body>` (`theme-noir`), nie einzelne Abschnitte umfärben.
- **Prüfung bei neuen Seiten:** alle Links (hin und zurück), Konsole ohne Fehler, kein horizontales Scrollen bei 320/390/768/1440 px, Kontraste der jeweiligen Variante.

## 15. Warenkorb (Stand 26.11.2026)

Demo-Warenkorb ohne Server: `warenkorb.html` (Variante A „Maison“) und Abschnitt 3 in `js/app.js`. Keine zusätzlichen Pakete.

- **Speicherort:** `localStorage` des Browsers, Schlüssel `equibill-warenkorb`. Bleibt bei Seitenwechsel und Neuladen erhalten, nur in diesem Browser auf diesem Gerät; nichts wird übertragen.
- **Datenschutz:** gespeichert werden **nur Artikel**, Form `[{ "name": "Tournament Planner", "cents": 2900, "monthly": false, "qty": 1 }]`. Keine persönlichen Daten, keine Kennungen, keine Zeitstempel, kein Tracking. Gespeichert wird **erst beim Hineinlegen**; ein bloßer Besuch legt nichts an. Wird der Warenkorb leer (alles entfernt oder Demo-Bestellung), wird der Schlüssel gelöscht. Die Angaben aus der Demo-Kasse werden **nie** gespeichert (siehe unten). Die FAQ „Werden Daten von mir gespeichert?“ beschreibt das.
- **Name und Preis aus dem HTML, keine Produktliste im Skript:** Der Abschnitt mit dem Artikel trägt `data-cart-product`, darin der Name mit `data-cart-name` und der Preis als `<data value="2900" data-cart-price>29&nbsp;€</data>` (Wert in Cent). Abo-Preise zusätzlich `data-cart-interval="monat"`; `data-cart-variant="Basic"` am Abschnitt hängt „ – Basic“ an den Namen. Die Schaltfläche hat `data-cart-add`. Neue Produkte nur so auszeichnen; der angezeigte Preis und `value` müssen übereinstimmen.
- **Rechnen und Anzeigen:** immer in **Cent** (ganze Zahlen), Anzeige mit `Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })`, z. B. „19,99 €“. Einmalige Preise und Abo-Preise werden **getrennt summiert** („Einmalig“, „Monatlich“), nie vermischt. Darunter „inkl. MwSt., zzgl. Versand“ und „Versandkosten: 0,00 €“.
- **Menge:** 1 bis 99 je Artikel; „−“ ist bei 1 gesperrt, „+“ bei 99. Gleicher Name und Preis erhöhen die Menge statt einer neuen Zeile.
- **Rückmeldung:** nach jedem Hineinlegen, Ändern und Entfernen eine kurze Meldung im Element `#toast` (`role="status"`), damit Screenreader sie ansagen. Zähler im Kopf (`data-cart-count`) zeigt die Gesamtmenge auf allen Seiten; der Link führt zu `warenkorb.html` bzw. `../warenkorb.html`.
- **Demo-Kasse (seit 27.11.2026, `js/app.js` Abschnitt 3c, CSS 16b):** „Demo-Bestellung absenden“ führt in vier Schritten auf derselben Seite (Fortschritt `.checkout-steps` mit `aria-current="step"`): 01 Warenkorb → 02 Angaben (Rechnungsadresse: Vorname, Nachname, Stall/Firma optional, E-Mail, Straße, PLZ, Ort, Land DE/AT/CH; Zahlungsart) → 03 Prüfen (Zusammenfassung, „Ändern“-Links, Pflicht-Häkchen „Mir ist klar, dass dies eine Demo ist“, „Zahlungspflichtig bestellen (Demo)“) → 04 Fertig (fiktive Bestellnummer `EB-DEMO-123456`, Zahlungsart, Summe).
  - **Nur erfundene Testdaten:** Hinweis im Formular, Schaltfläche „Testdaten einfügen“ (Mila Beispiel, `example.com`-Adresse). Eingaben bleiben nur im geöffneten Fenster (Formular und Variable `order`), **kein** localStorage, **keine** Übertragung (Formular ohne Ziel, Absenden abgefangen). Nach der Bestellung werden Warenkorb, Formular und Variable geleert.
  - **Zahlungsarten fiktiv:** Kreditkarte, SEPA-Lastschrift, Rechnung, Vorkasse, nur als Auswahl. **Bewusst keine Felder für Karten- oder Kontonummern**, damit niemand echte Zahlungsdaten eintippt; die Zahlung wird mit einer kurzen Statusmeldung simuliert (bei „Bewegung reduzieren“ sofort). Keine Markennamen von Zahlungsdiensten.
  - **Prüfung der Eingaben:** eigene Prüfung (`novalidate`) mit deutschen Meldungen am Feld (`aria-describedby`, `aria-invalid`) und Fehlerübersicht mit Sprunglinks (bekommt den Fokus); PLZ 5 Ziffern (DE) bzw. 4 (AT/CH); E-Mail-Format. Fokus springt bei jedem Schrittwechsel auf die neue Überschrift.
- **Sicherheit:** gespeicherte Daten werden beim Lesen geprüft (Typen, Grenzen) und nur bekannte Felder übernommen; Texte werden ausschließlich mit `textContent` eingesetzt, nie mit `innerHTML`. Ist der Speicher blockiert (z. B. privater Modus), erscheint eine Meldung statt eines Fehlers.
- **Ohne JavaScript:** `warenkorb.html` zeigt einen Hinweis (`<noscript>`); alle anderen Seiten bleiben lesbar.
- **Testliste bei Änderungen:** Besuch ohne Hineinlegen legt nichts an · Hineinlegen von Shop, Produktseite und Software-Seite · Seitenwechsel und Neuladen · Menge ändern (auch per Tastatur) · Entfernen bis leer (Schlüssel gelöscht) · Summen nachrechnen · Demo-Kasse: leeres Formular (Fehler), falsche PLZ, Testdaten, Zurück/Ändern, Bestellen ohne Häkchen, Bestellung (Warenkorb leer, Zähler 0, nichts im Speicher) · manipulierte Speicherdaten · 320/390/768/1440 px ohne horizontales Scrollen.

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

## Änderungsvermerk (26.11.2026, Neupositionierung Software-first)

- Geändert: Positionierung von „Concept Store“ (Shop-first) zu **Softwareunternehmen** (Software-first) auch im Weiterbildungsprojekt; Kap. 2, 3, 5 und 6 (Leitidee, Sortiment, Hell/Dunkel) angepasst. Design, Typografie, Farben, Bildsprache und Logoanimation unverändert.
- Neu: Startseitenaufbau mit acht Bereichen (Kap. 7), Unterseiten `software.html` (Noir) und `shop.html` (Maison), Navigation Software · Shop · Über uns · FAQ · Warenkorb, zwei Customer Journeys.
- Entfallen: Sortimentsbereich, vollständige Produktübersicht und „Vorteile“ auf der Startseite; Produktseite `produkte/equibill-manage.html` (in `software.html` aufgegangen).
- Erledigt: offene Frage „acht oder neun Startseitenbereiche“ (jetzt acht Bereiche nach Kopf). `STARTSEITE_Informationsarchitektur_und_Texte.md` beschreibt den früheren Stand.
- Sicherung: `_archiv/_archiv_2026-11-26_vor-software-first/` (CLAUDE.md, PROJECT_BRIEFING.md, ROADMAP.md, `website/index.html`, `css/style.css`, `js/app.js`, `produkte/equibill-manage.html`); außerdem Git-Commit 3edddc3.

## Änderungsvermerk (26.11.2026, Feinschliff Markenauftritt)

- Geändert: Hero-Texte nutzenorientiert; Markeneinführung gekürzt; Über uns als Markengeschichte („Aus dem Pferdesport. Für den Pferdesport.“); Norddeutschland aus der Markenkommunikation entfernt (Kap. 2).
- Neu: realistisches Software-Interface statt abstrakter Dashboard-Grafik (Startseite, Software-Seite, Laptop-Bilder im Shop); Vorlagen-Mockups im Shop-Teaser (Kap. 6).
- Geändert: Demo-Hinweise gebündelt (Regel in Kap. 7); FAQ aus der Hauptnavigation in den Fuß.
- Entfernt: nicht mehr genutzte CSS-Regeln der früheren Mockup-Grafiken (`.mk-*`).
- Geändert: Produktseiten Tournament Planner und Rider Portfolio zeigen dieselben Vorlagen-Mockups wie der Teaser (statt Symbolfoto); Regel in Kap. 14.
- Sicherung: `_archiv/_archiv_2026-11-26_vor-feinschliff/` und Git-Commit 2fb2158.

## Änderungsvermerk (26.11.2026, Warenkorb)

- Neu: Kap. 15 „Warenkorb“ (Speicherung im Browser, Datenschutz, Auszeichnung im HTML, Cent-Rechnung, getrennte Summen, Demo-Bestellung, Sicherheit, Testliste); `warenkorb.html` in Kap. 13.
- Geändert: „In den Warenkorb“ auf Shop-, Produkt- und Software-Seite legt Artikel hinein (Kap. 14); Warenkorb-Link im Kopf führt zu `warenkorb.html`; FAQ zur Datenspeicherung angepasst.
- Sicherung: `_archiv/_archiv_2026-11-26_vor-warenkorb/`.

## Änderungsvermerk (27.11.2026, Typografie-Rhythmus)

- Geändert: Überschriften hatten zu enge Zeilenhöhen (0,86–0,95) und zu wenig Abstand zum Fließtext. Neu zentral in `css/style.css` (Abschnitt 1): `--lh-display: 1.08` (große Display-Überschriften), `--lh-title: 1.14` (mittlere Überschriften), `--gap-title` (24–38 px Abstand Überschrift → Text). Gilt auf allen Seiten; neue Überschriften nutzen diese Variablen.
- Sicherung: `_archiv/_archiv_2026-11-27_vor-zeilenhoehe/`.

## Änderungsvermerk (27.11.2026, Demo-Kasse)

- Neu: Demo-Kasse im Warenkorb (Kap. 15): Angaben mit erfundenen Testdaten, fiktive Zahlungsart ohne Karten-/Kontofelder, Prüfschritt, simulierte Zahlung, Bestätigung mit fiktiver Bestellnummer. Ersetzt die frühere Regel „keine Datenabfrage“; Eingaben werden weiterhin nicht gespeichert oder übertragen.
- Geändert: FAQ „Werden Daten von mir gespeichert?“ (Startseite) entsprechend angepasst.
- Sicherung: `_archiv/_archiv_2026-11-27_vor-checkout/`.

## Änderungsvermerk (26.11.2026, Software-Produktseite)

- Neu: `software.html` als eigenständige, conversionorientierte Produktseite mit acht Bereichen (Kap. 7), interaktiver Demo ohne Backend und Speicherung, Tabs, abspielenden Mockups und Vergleichstabelle (aufklappbar, damit sie nicht dominiert).
- Geändert: Warenkorb auf der Software-Seite je Tarif (Basic, Professional, Business) statt eines Basic-Knopfs im Hero; Auszeichnung unverändert nach Kap. 15.
- Neu: aktiver Menüpunkt über `aria-current="page"` (zunächst nur auf `software.html`).
- CSS Abschnitt 16 und JS Abschnitt 6 neu; nicht mehr genutzte Regeln der alten Software-Seite entfernt (`.feature-list`, `.examples`, `.sw-demo`, `.sw-more`, `.sw-hero`).
- Tarif-Funktionsverteilung als Konzept im Briefing Kap. 10.4 ergänzt.
- Sicherung: `_archiv/_archiv_2026-11-26_vor-software-seite/`.
