# EquiBill – Roadmap

> Stand: 24.11.2026 · Grundlage: `PROJECT_BRIEFING.md` und `CLAUDE.md`
> Die Roadmap trennt strikt zwischen **Spur 1 – Weiterbildungsprojekt** (aktuell, fiktiv, endet mit der Weiterbildung im März 2027) und **Spur 2 – Produktentwicklung** (langfristig, nur bei realer Weiterführung).
> **Hinweis:** Zeitangaben gibt es nur für die Weiterbildung (Tag 42 heute, Abschluss März 2027). Alle Phasen der Produktentwicklung sind **ohne Termine** und durch Entscheidungsschranken (Gates) gesteuert, nicht durch Kalenderdaten. Die Reihenfolge einzelner technischer Aufgaben darf nach Analyse angepasst werden; die Software-first-Strategie bleibt bestehen.

## Prioritätslegende

| Stufe | Bedeutung |
|---|---|
| **P0** | Pflicht der aktuellen Aufgabe, ohne P0 ist die Aufgabe nicht erfüllt |
| **P1** | Stark empfohlen, hebt die Qualität deutlich |
| **P2** | Optional / Bonus |
| **Später** | Außerhalb der Weiterbildung (Spur 2) |

## Übersicht

```
SPUR 1  Weiterbildung (fiktiv)         SPUR 2  Produktentwicklung (real, nur bei Weiterführung)
─────────────────────────────          ─────────────────────────────────────────────────────────
Tag 42  Teil A  Konzept + Anweisungen  Phase 2  Manage als MVP (Pilotkunden)
        Teil B  Ordner + Projekt       Phase 3  SaaS + Automatisierung
        Teil C  HTML-Startseite        Phase 4  Connect (Netzwerk)
Danach  Shop-Ausbau, Claude Code       Phase 5  Discover (Marktplatz)
        (nach Unterrichtsvorgaben)     Phase 6  Marktreife + Skalierung
```

Gemeinsame Basis: **Phase 1 – Marke, Website, Demo-Shop** ist zugleich Ergebnis der Weiterbildung und Fundament der Produktentwicklung.

---

# SPUR 1 – Weiterbildungsprojekt (aktuelle Priorität)

## Schritt 0 – Tag 42, Teil A: Idee und Anweisungen *(aktuell)*

| Prio | Aufgabe | Ergebnis | Status |
|---|---|---|---|
| P0 | A1 Brainstorming: Shopname, mind. drei Produkte mit Preisen | Name EquiBill; Sortiment mit 7 priorisierten Produkten (Briefing Kap. 10.3) | Inhaltlich erledigt |
| P0 | A2 Projektanweisungen: Rolle/Ziel, Arbeitsweise, Gestaltung, Pflicht, Ton | `CLAUDE.md` | Erstellt, von Teilnehmerin zu prüfen |
| P0 | A2 Konzept als Datei | `PROJECT_BRIEFING.md` | Erstellt, von Teilnehmerin zu prüfen |
| P1 | Planung | `ROADMAP.md` | Erstellt |
| P1 | Eigene Wünsche ergänzen und Dateien auf Richtigkeit prüfen | Freigegebene Dateien | Offen |

**Gate A:** Teilnehmerin hat die drei Dateien gelesen, verstanden und freigegeben. Erst danach HTML-Entwurf.

## Schritt 1 – Tag 42, Teil B: Projektordner und Claude-Projekt

| Prio | Aufgabe | Details |
|---|---|---|
| P0 | B1 Ordner `EquiBill` anlegen | Unterordner `website`; die drei Dateien im Ordner `EquiBill` speichern |
| P0 | B2 Claude-Projekt anlegen | Titel, Beschreibung, Sichtbarkeit **Privat**; Inhalt von `CLAUDE.md` in „Anweisungen“ einfügen |
| P0 | Ordner verbinden | Alternative laut Aufgabe: Dateien im Projekt unter „Dateien“ hochladen (Briefing, Roadmap) |
| P1 | Git-Grundlage | Ordner als Git-Repository initialisieren, `.gitignore` (inkl. `.env`) anlegen, ersten Commit setzen; **Repository nicht öffentlich**, solange nicht geprüft |
| P1 | Prototyp-Schutz | Prototyp **nicht** in den Ordner kopieren; keine echten Daten im Projekt |

**Gate B:** Projekt kennt Anweisungen und Konzept (Fertig-Kriterium der Aufgabe, erster Teil).

## Schritt 2 – Tag 42, Teil C1: Design- und Strukturentscheidungen, dann erste Startseite

**Vor dem HTML (Beratung, noch kein Code):**

| Prio | Entscheidung | Empfehlung/Vorgehen |
|---|---|---|
| P0 | Designrichtung wählen | Zwei bis drei Richtungen vergleichen (z. B. „Editorial Premium“, „Calm SaaS“, „Heritage Modern“), Begründung, eine wählen |
| P0 | Farbwelt bestätigen oder anpassen | Vorschlag aus Briefing prüfen, vor allem Kontraste |
| P0 | Startseiten-Struktur festlegen | Reduzierter Pflichtumfang (s. u.) |
| P1 | Navigation vereinfachen | Netzwerk/Marktplatz als „geplant“ kennzeichnen |
| P1 | Produktabgrenzung im Shop | „Kostendashboard“ (49 €) klar von den Abos abgrenzen |

**Pflichtumfang der ersten Startseite (empfohlen, P0):**

1. Header mit Wortmarke, reduzierter Navigation, CTA
2. Hero mit Headline, Subheadline, zwei CTAs
3. Problem und Nutzen
4. EquiBill Manage – Funktionskarten
5. Software-Abonnements (Basic, Professional, Business)
6. Digitale Produkte und Dienstleistungen (Turnierkostenrechner 19 €, Kostendashboard 49 €, Stallmanagement-Paket 99 €, Onboarding 99 €)
7. Plattformvision Manage → Connect → Discover (Connect/Discover als **geplant**)
8. Abschluss-CTA
9. Footer mit **Demo-Hinweis**, Impressum- und Datenschutz-Platzhalter

**Zusätzlich (P1):** „So funktioniert EquiBill“, FAQ.
**Optional (P2):** Dashboard-Vorschau mit fiktiven Daten, Connect-/Discover-Teaser mit fiktiven Profilen/Angeboten.
**Bonus der Aufgabe (P2):** Abschnitt „Über uns“.

| Prio | Aufgabe | Ergebnis |
|---|---|---|
| P0 | Erste HTML-Startseite erstellen | `website/index.html` (lokal lauffähig, responsive, Systemschriften) |

**Gate C1:** Datei liegt in `website`, öffnet fehlerfrei lokal (Fertig-Kriterium der Aufgabe, zweiter Teil).

## Schritt 3 – Tag 42, Teil C2: Optimierung in Runden (pro Runde eine Änderung)

| Runde | Fokus | Prüfung |
|---|---|---|
| 1 | **Kontraste** und Lesbarkeit | WCAG AA, besonders Sage-Töne und Button-Texte |
| 2 | **Preisangaben** | Alle Preise und Einheiten konsistent mit Briefing Kap. 10; „Demo-Preise“ gekennzeichnet |
| 3 | **Demo-Hinweis** | Sichtbar im Footer und nahe Preisen; Impressum/Datenschutz bleiben Platzhalter |
| 4 | **Responsive Design** | Mobile (zuerst), Tablet, Desktop |
| 5 | **Typografie und Abstände** | Hierarchie, Zeilenabstand, einheitliche Abstände (Design-Teil der Präsentation, außer Google Fonts) |
| 6 | **Bildsprache/Platzhalter** | Authentisch, nicht generisch; Platzhalter klar gekennzeichnet; keine fremden, urheberrechtlich geschützten Bilder |
| 7 | **Bonus: Über uns** | Kurze, klar als fiktiv erkennbare Unternehmensbeschreibung |
| 8 | **Abschlussfrage** | „Was fehlt noch, und was kann ich am Entwurf verbessern?“ |

**Gate C2 (Abnahme der Aufgabe):**
- [ ] Projekt kennt Anweisungen und Konzept
- [ ] Startseite liegt in `website`
- [ ] Kontraste, Preise, Demo-Hinweis geprüft
- [ ] Impressum/Datenschutz als Platzhalter
- [ ] Teilnehmerin kann Aufbau und Code in eigenen Worten erklären und präsentieren

## Schritt 4 – Nach Tag 42 (laut Unterrichtsvorgaben, Phase 1 Fortsetzung)

*Konkrete Inhalte und Termine geben die Unterrichtsvorgaben vor; die folgende Liste ist ein Vorschlag, keine Festlegung.*

| Prio | Möglicher Ausbau mit Claude Code |
|---|---|
| P1 | Weitere Seiten: Software-Übersicht, Preise, Produktdetailseiten, Shopübersicht |
| P1 | Demo-Funktionen: Warenkorb und Demo-Checkout (ohne echte Zahlung), Produktfilter und -suche |
| P1 | Designsystem (Farben, Typografie, Komponenten) in wiederverwendbaren CSS-Dateien |
| P2 | Demo-Kundenkonto, Abo-Verwaltung als Simulation |
| P2 | Fiktive Dashboard-Vorschau, einfache Rechner-Demo (z. B. Turnierkosten) |
| P2 | Erste Prototyp-Analyse (nur Lesen, nichts verändern), falls im Unterricht vorgesehen |

**Grenzen in Spur 1:** keine echten Zahlungen, keine produktive Datenbank, keine echten Daten, keine rechtlichen Konformitätsbehauptungen.

---

# SPUR 2 – Langfristige Produktentwicklung (nur bei realer Weiterführung)

> Nicht Teil der Weiterbildungsaufgabe. Start erst nach bewusster Entscheidung (Gate 0). Alle Phasen sind Vorschläge und nicht beschlossen. Die Reihenfolge der Module bleibt: **Manage → Connect → Discover; Shop modulübergreifend.**

## Gate 0 – Entscheidung zur Weiterführung

Vor Phase 2 klären: Will die Initiatorin das Projekt real weiterführen? Bestehen Zeit und Budget? Gibt es mindestens **ein bis drei Pilotkunden** (Zugang über die Schwestern) mit echtem Interesse? Sind Name, Domain und Markenrecht geprüft? Ist Zahlungsbereitschaft zumindest durch Gespräche erkundet?

## Phase 1 (Fundament, siehe Spur 1) – Marke, Website, Demo-Shop
**Ergebnis:** Professionelle Website und Demo-Shop für EquiBill Manage, wiederverwendbar.

## Phase 2 – EquiBill Manage als funktionsfähiges MVP

| Prio | Aufgabe |
|---|---|
| P0 | Quellcode des Prototyps analysieren, **Ist-Stand je Funktion testen** (vorhanden / getestet / fehlt) |
| P0 | Technische Architektur bewerten, Stack bewusst wählen (Kriterien: Lernziele, Kosten, Wartbarkeit, Datenschutz) |
| P0 | Datenmodell entwickeln (Pferde, Kunden, Kosten, Rechnungen, Turniere) |
| P0 | Registrierung/Login, sichere Datenverwaltung |
| P0 | Pferde-, Kunden-, Kostenverwaltung; Rechnungsstellung inkl. Schutz vor Doppelabrechnung |
| P1 | Turniermanagement, Dashboard, Datenexport (CSV/JSON) |
| P1 | Rechnungsrecht, Umsatzsteuer, GoBD fachlich prüfen lassen |
| P1 | Erste Pilotnutzer, strukturiertes Feedback |

**Gate 2:** Pilotkunden nutzen Manage real und würden dafür zahlen (belegt durch Gespräche/Zusagen, keine Annahme).
**Ergebnis:** Eigenständig nutzbare Business-Software.

## Phase 3 – SaaS und Automatisierung

| Prio | Aufgabe |
|---|---|
| P0 | Abonnementmodelle, Kundenkonten, Zahlungsanbieter (nach Prüfung) |
| P0 | Mehrbenutzerfähigkeit, Rollen/Rechte, Mandantentrennung |
| P1 | Kundenportal für Pferdebesitzer |
| P1 | KI-Belegerkennung (mit Validierung; keine erfundenen Beträge) |
| P1 | n8n-Workflows: Onboarding, Rechnungsversand, Zahlungserinnerungen, Reports |
| P2 | KI-Business-Assistent und -Reporting |

**Gate 3:** Wiederkehrende Einnahmen decken laufende Betriebskosten (Hosting, APIs, Support, Zahlungsgebühren) realistisch.
**Ergebnis:** Wirtschaftlich nutzbare SaaS-Anwendung.

## Phase 4 – EquiBill Connect

| Prio | Aufgabe |
|---|---|
| P0 | Öffentliche Reiter- und Betriebsprofile, Referenzen, Qualifikationen, sportliche Erfolge |
| P0 | Datenschutz- und Bildrechtekonzept; Verifizierungsverfahren festlegen |
| P1 | Fotos/Videos, Premium-Profile, KI-Profilassistent |
| P2 | Integration externer Sportdaten (nur nach Prüfung von Schnittstelle, Nutzungsrechten, Datenschutz) |

**Gate 4:** Ausreichend aktive Berufsreiter aus Manage für eine glaubwürdige Anbieterbasis.
**Ergebnis:** Professionelles Reiternetzwerk mit Nutzerbasis aus Manage.

## Phase 5 – EquiBill Discover

| Prio | Aufgabe |
|---|---|
| P0 | Berittplatz- und Stallplatz-Inserate, Suchfilter, Kartenansicht, Favoriten, Kontaktanfragen |
| P0 | Bewertungs- und Moderationskonzept |
| P1 | Verfügbarkeiten, Benachrichtigungen, Premium-Inserate |
| P2 | KI-Matching mit nachvollziehbarer Begründung; Bewertungsfunktionen |

**Gate 5:** Genügend Anbieter und Nachfrager (Henne-Ei-Problem gelöst). Anfangs **keine** Pflichtprovision; Buchungs-/Zahlungs-/Vertragsabwicklung erst nach rechtlicher Prüfung.
**Ergebnis:** Funktionierender digitaler Marktplatz.

## Phase 6 – Marktreife und Skalierung

Produktvalidierung · Datenschutz · Sicherheitskonzept · Rechnungsrecht · Zahlungsanbieter · Vertragsprozesse · technischer Betrieb und Monitoring · Kundenservice · Marketing · Kooperationen mit Reitsportorganisationen · Expansion Deutschland, dann DACH/Europa.

---

# Querschnittsthemen (laufend)

| Thema | Vorgehen |
|---|---|
| **Git** | Regelmäßig committen, Arbeitsstände sichern, sinnvolle Commit-Messages |
| **Geheimnisse** | `.env` + `.gitignore`, nie im Code oder auf GitHub |
| **Daten** | Spur 1 ausschließlich fiktiv; Spur 2 nur mit Datenschutzkonzept |
| **Dokumentation** | Entscheidungen im Briefing festhalten, Offene Entscheidungen abarbeiten |
| **Markt** | Wettbewerber und Preise vor realer Vermarktung aus offiziellen Quellen verifizieren; Zielgruppeninterviews |
| **Recht** | DSGVO, GoBD, E-Rechnung, Markenrecht fachlich prüfen lassen, bevor Konformität behauptet wird |
| **Qualität** | Prüfung nach `CLAUDE.md` Kap. 10; transparent zwischen implementiert und simuliert unterscheiden |

# Wichtigste Risiken

| Risiko | Gegenmaßnahme |
|---|---|
| Umfang der Vision überfordert die Ressourcen | Spuren und Gates trennen; kleine Schritte; jede Phase eigenständig nutzbar |
| Zahlungsbereitschaft nicht validiert | Pilotkunden und Interviews vor Phase 3 |
| Etablierte Wettbewerber | Nische (Berufsreiter, Turnier- und Fremdkostenabrechnung) schärfen, Wettbewerb ernsthaft analysieren |
| Zweiseitiger Marktplatz | Software-first, Anbieterseite über Manage aufbauen |
| Rechts- und Datenschutzrisiken | Fachliche Prüfung, keine voreiligen Compliance-Aussagen |
| Prototyp mit realen Daten | Strikte Trennung, nur anonymisierte oder fiktive Daten im Projekt |
