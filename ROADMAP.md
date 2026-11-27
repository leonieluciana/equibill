# EquiBill – Roadmap

> Stand: 26.11.2026 (Neupositionierung Software-first) · Grundlage: `PROJECT_BRIEFING.md` und `CLAUDE.md`
> Die Roadmap trennt strikt zwischen **Spur 1 – Weiterbildungsprojekt (Software-first seit 26.11.2026, vorher Shop-first; aktuell, fiktiv, endet mit der Weiterbildung im März 2027)** und **Spur 2 – Produktentwicklung (Software-first, langfristig, nur bei realer Weiterführung)**.
> **Hinweis:** Zeitangaben gibt es nur für die Weiterbildung (Abschluss März 2027). Alle Phasen der Produktentwicklung sind **ohne Termine** und durch Entscheidungsschranken (Gates) gesteuert. Die Reihenfolge einzelner Aufgaben darf nach Analyse angepasst werden; Software-first gilt seit 26.11.2026 für beide Spuren.

## Anforderungsstufen

| Stufe | Bedeutung |
|---|---|
| **Pflicht** | Offizielle Anforderung der Weiterbildung oder verbindlicher Bestandteil der Neuausrichtung; ohne Pflicht ist die Aufgabe nicht erfüllt |
| **Empfohlen** | Hebt die Qualität deutlich; wird umgesetzt, sofern Zeit und Unterrichtsvorgaben es zulassen |
| **Optional** | Mögliche Erweiterung, nur nach ausdrücklicher Freigabe |
| **Später** | Außerhalb der aktuellen Umsetzung (Spur 2 oder spätere Ausbaustufe) |

## Übersicht

```
SPUR 1  Weiterbildung (Software-first, fiktiv) SPUR 2  Produktentwicklung (Software-first, nur bei Weiterführung)
──────────────────────────────────────         ─────────────────────────────────────────────────────────────────
Phase 1  Marke, Design, Startseite,           Phase 2  Manage als MVP (Pilotkunden)
         Software-Seite, Demo-Shop             Phase 3  SaaS + Automatisierung
         (Schritte 1–10)                       Phase 4  Connect (Netzwerk)
                                               Phase 5  Discover (Marktplatz)
                                               Phase 6  Marktreife + Skalierung
```

Gemeinsame Basis: **Phase 1** ist zugleich Ergebnis der Weiterbildung und Fundament der Produktentwicklung. Connect und Discover kommen in Phase 1 **nicht** vor.

---

# SPUR 1 – Weiterbildungsprojekt, Phase 1: Marke, Website und Demo-Shop (aktuelle Priorität)

## Priorisierte Entwicklungsschritte

| # | Schritt | Stufe | Ergebnis | Status |
|---|---|---|---|---|
| 1 | Strategische Neuausrichtung dokumentieren | Pflicht | `CLAUDE.md`, `PROJECT_BRIEFING.md`, `ROADMAP.md` aktualisiert; Projektanweisungen im Claude-Projekt ersetzt | Dokumente erstellt (24.11.2026); von Teilnehmerin zu prüfen und im Claude-Projekt zu übernehmen |
| 2 | Produktsortiment definieren | Pflicht | Sechs Produkte, drei Kategorien, Preise (Briefing Kap. 10); Kategoriezuordnung bestätigen | Sortiment dokumentiert; Zuordnung zu Kategorien offen |
| 3 | Neue visuelle Designrichtungen entwickeln | Pflicht | Mehrere Richtungen mit Begründung, eine ausgewählt | **Erledigt (24.11.2026):** Atelier, Variante A „Maison“; Variante B „Noir“ ergänzend kombinierbar (Briefing Kap. 13.3). Studien in `design-studien/runde-2/` und `runde-3/` als Referenz |
| 4 | Corporate Design abstimmen | Pflicht | Farbwelt, Typografie, Logo-Richtung, Bildsprache, Kontrastprüfung | In Arbeit: Basis aus Atelier A/B festgelegt (Palette, Didone + Helvetica Neue, Wortmarkenidee); Kontraste teilweise berechnet; Offen: finale Werte, Hausschrift, Einsatzregeln für die dunkle Variante |
| 5 | Startseite konzipieren | Pflicht | Struktur mit acht Bereichen, Navigation, CTAs | **Neu beschlossen (26.11.2026):** Software-first-Aufbau (CLAUDE.md Kap. 7), Navigation Software · Shop · Über uns · FAQ · Warenkorb, CTAs „Software entdecken“, „Zum Shop“, „Alle Produkte entdecken“ |
| 6 | Professionellen HTML-Entwurf erstellen | Pflicht | Neue Datei in `website/`; lokal lauffähig; bisherige `index.html` unverändert | Umgesetzt: `website/index.html` mit `css/style.css` und `js/app.js` (Atelier A, echte Symbolfotos, Effekte); seit 26.11.2026 Software-first umgebaut; weitere Optimierungsrunden möglich |
| 7 | Produktdarstellungen und Mockups integrieren | Pflicht | Hochwertige Software-Mockups und Produktdarstellungen (als Mockups/Symbolbilder gekennzeichnet) | Umgesetzt: Laptop-Mockup mit Dashboard, animierte Beispielrechnung, Produktfotos; Feinschliff offen |
| 8 | Responsive Design optimieren | Pflicht | Mobile First; Mobile, Tablet, Desktop geprüft | Geprüft bei 320/390/768/1440 px (26.11.2026), kein horizontales Scrollen |
| 9 | Shop-Funktionalitäten entsprechend der weiteren Unterrichtsvorgaben entwickeln | Empfohlen | Je nach Vorgabe: Produktdetails, Warenkorb, Demo-Checkout (siehe Abschnitt „Schritt 9“ unten) | Umgesetzt: Software-Seite, Shop-Seite mit Filter, fünf Produktseiten (26.11.2026), Warenkorb (26.11.2026) und Demo-Checkout mit Testdaten und fiktiver Zahlung (27.11.2026) |
| 10 | Qualitätssicherung | Pflicht | Prüfung nach `CLAUDE.md` Kap. 11; ehrliche Aussage, was implementiert und was simuliert ist | Offen |

Abhängigkeiten: 3 → 4 → 5 → 6; 7 und 8 gehören zum HTML-Entwurf und werden in Optimierungsrunden verfeinert; 9 baut auf einem freigegebenen Entwurf auf; 10 begleitet jede Runde und schließt ab.

## Schritt 1–2: Dokumentation und Sortiment

| Stufe | Aufgabe | Details |
|---|---|---|
| Pflicht | Dokumente prüfen und freigeben | Teilnehmerin liest, versteht und gibt `CLAUDE.md`, `PROJECT_BRIEFING.md`, `ROADMAP.md` frei |
| Pflicht | Projektanweisungen im Claude-Projekt aktualisieren | Inhalt der neuen `CLAUDE.md` in „Anweisungen“ einfügen; Projektbeschreibung an Software-first anpassen (Stand 26.11.2026) |
| Pflicht | Dateien im Ordner `EquiBill` speichern | Ordner mit Unterordner `website` (Tag 42, B1) |
| Empfohlen | Git-Grundlage | Ordner als Git-Repository, `.gitignore` inkl. `.env`, ersten Commit setzen; Repository nicht öffentlich, solange nicht geprüft |
| Pflicht | Schutz bestehender Dateien | `website/index.html`, `index_v1_backup.html`, `index_v2_arena.html`, `design-studien/`, Prototyp unverändert lassen; kein echtes Datenmaterial im Projekt |
| Pflicht | Sortiment bestätigen | Produktnamen und Preise aus Briefing Kap. 10; Kategoriezuordnung entscheiden |
| Empfohlen | Abgrenzung im Shop klären | Tournament Planner vs. Manage-Turniermanagement; Portfolios vs. späteres Connect (Briefing Kap. 19) |

**Gate A (Dokumentation):** Dokumente freigegeben; Projektanweisungen im Claude-Projekt aktualisiert (Tag 42: „Projekt kennt Anweisungen und Konzept“). Erst danach Design- und HTML-Arbeit.

## Schritt 3–4: Design und Corporate Design

| Stufe | Aufgabe | Details |
|---|---|---|
| Pflicht | Mehrere neue Designrichtungen vergleichen | Eigenschaften: modern, premium, sportlich, selbstbewusst, editorial, minimalistisch, luftig, emotional, produktorientiert, visuell außergewöhnlich; Vermeidungsliste aus `CLAUDE.md` Kap. 6 beachten |
| Pflicht | Eine Richtung wählen und begründen | Entscheidung dokumentieren (Briefing Kap. 13/18) |
| Pflicht | Farbwelt, Typografie, Bildsprache festlegen | Heritage Modern und frühere Farbwelt nicht verbindlich; lokale Systemschriften, keine Google Fonts; Kontraste WCAG AA |
| Empfohlen | Logo- und Wortmarkenrichtung | Einfach und passend zur gewählten Richtung |
| Optional | Kleines Designsystem (Farben, Typografie, Komponenten) als wiederverwendbare CSS-Dateien | Erleichtert spätere Seiten |

**Gate B (Design):** Eine Designrichtung ist ausgewählt und freigegeben. **Erreicht für die Richtung (24.11.2026: Atelier A, B ergänzend); das finale Corporate Design bleibt in Arbeit.**

## Schritt 5–8: Startseite, HTML-Entwurf, Mockups, Responsive

**Pflichtumfang der Startseite (Software-first, seit 26.11.2026; Kopf plus acht Bereiche):**

1. Hero (Cinematic Hero, Claims, CTA „Software entdecken“ und „Zum Shop“)
2. Markeneinführung („Du machst den Sport. Wir vereinfachen das Business dahinter.“)
3. EquiBill Manage als größter Bereich (Mockup, Nutzen, animierte Rechnung, Funktionen)
4. So funktioniert’s (Erfassen, Verwalten, Abrechnen)
5. Shop-Teaser „Mehr als Software“ (zwei Produkte, CTA „Alle Produkte entdecken“)
6. Über EquiBill (Vision, Zielgruppe; als fiktiv erkennbar; deckt den Bonus der Aufgabe ab)
7. FAQ
8. Abschluss-CTA und Footer mit Pflichtangaben und Demo-Hinweis

| Stufe | Aufgabe |
|---|---|
| Pflicht | Neue HTML-Datei in `website/` (lokal lauffähig, semantisch, modulare Struktur, Systemschriften); bisherige `index.html` bleibt unverändert |
| Pflicht | Demo-Hinweis im Footer und nahe Preisen; Impressum/Datenschutz als Platzhalter |
| Pflicht | Preise und Produktnamen exakt wie im Briefing; Preise als Demo-Preise gekennzeichnet |
| Pflicht | Responsive Design, Mobile First |
| Empfohlen | Hochwertige Mockups je Produkt (klar als Mockup/Platzhalter gekennzeichnet) |
| Optional | Dezente Interaktionen (nur wenn sie Nutzen bringen; keine unnötigen Animationen) |
| Erledigt (26.11.2026) | Tarifvergleich und Funktionen auf `software.html`, vollständiger Shop auf `shop.html` |
| Später | Plattforminformationen, Connect-/Discover-Informationen |

**Gate C (HTML-Entwurf):** Neue Startseite liegt in `website/`, öffnet fehlerfrei lokal (Tag 42: „Startseite liegt in website“).

## Optimierungsrunden (Tag 42, C2) – pro Runde eine Änderung

| Runde | Fokus | Stufe | Prüfung |
|---|---|---|---|
| 1 | Kontraste und Lesbarkeit | Pflicht | WCAG AA, besonders Akzentfarben und Button-Texte |
| 2 | Preisangaben | Pflicht | Preise, Einheiten und Produktnamen konsistent mit Briefing Kap. 10 |
| 3 | Demo-Hinweis | Pflicht | Sichtbar im Footer und nahe Preisen/Checkout; Impressum/Datenschutz Platzhalter |
| 4 | Responsive Design | Pflicht | Mobile (zuerst), Tablet, Desktop |
| 5 | Typografie und Abstände | Empfohlen | Hierarchie, Zeilenabstand, einheitliche Abstände (Design-Teil der Präsentation, außer Google Fonts) |
| 6 | Bildsprache und Mockups | Empfohlen | Authentisch, nicht generisch; Platzhalter gekennzeichnet; keine fremden geschützten Bilder |
| 7 | Über-uns-Bereich | Pflicht | Kurz, klar als fiktiv erkennbar |
| 8 | Abschlussfrage | Empfohlen | „Was fehlt noch, und was kann ich am Entwurf verbessern?“ |

## Schritt 9: Shop-Funktionalitäten (nach den weiteren Unterrichtsvorgaben)

*Inhalte und Termine geben die Unterrichtsvorgaben vor; die Liste ist ein Vorschlag, keine Festlegung.*

Customer Journeys (seit 26.11.2026): primär Marke entdecken → Software verstehen → Software-Seite (Funktionen, Demo, Tarife) → Warenkorb → Demo-Checkout; ergänzend Shop → Produktdetails → Warenkorb → Demo-Checkout.

| Stufe | Möglicher Ausbau mit Claude Code |
|---|---|
| Erledigt | Produktdetailseiten für die fünf Shop-Produkte (Manage: `software.html`) |
| Empfohlen | Warenkorb und Demo-Checkout (ohne echte Zahlung, ohne echte Daten) |
| Empfohlen | Gemeinsames Designsystem in wiederverwendbaren CSS-Dateien |
| Erledigt | Shopübersicht mit Kategorien und Filter (`shop.html`) |
| Optional | Suche im Shop |
| Erledigt | Seite EquiBill Manage mit Funktionen, Demo, Anwendungsbeispielen und Tarifvergleich (`software.html`) |
| Erledigt (26.11.2026) | Software-Produktseite neu inszeniert: Problem/Lösung, Funktions-Mockups mit Tabs, anklickbare Demo (ohne Backend), Anwendungsfälle, Warenkorb je Tarif, Vergleichstabelle, Software-FAQ |
| Optional | Demo-Kundenkonto, Abo-Verwaltung und Bestellübersicht als Simulation |
| Optional | Fiktive Dashboard-Vorschau, einfache Rechner-Demo (z. B. Turnierkosten) |
| Optional | Erste Prototyp-Analyse (nur Lesen, nichts verändern), falls im Unterricht vorgesehen |
| Später | Connect-/Discover-Informationen, Dienstleistungen im Shop |

**Grenzen in Spur 1:** keine echten Zahlungen, keine produktive Datenbank, keine echten Daten, keine rechtlichen Konformitätsbehauptungen, keine Darstellung von Connect/Discover als verfügbar.

## Schritt 10: Qualitätssicherung

| Stufe | Prüfung |
|---|---|
| Pflicht | Prüfung nach `CLAUDE.md` Kap. 11 (Vollständigkeit, Funktion, Responsive, Nutzerführung, Konsistenz, Kontraste, Preise, Demo-Hinweis, Barrierearmut, Datenschutz, Fehlerfreiheit, Erweiterbarkeit) |
| Pflicht | Nur Tests als ausgeführt melden, die tatsächlich ausgeführt wurden; Implementiertes und Simuliertes unterscheiden |
| Pflicht | Git-Stand sichern |

**Gate D (Abnahme der Weiterbildungsaufgabe):**

- [ ] Projekt kennt Anweisungen und Konzept (Claude-Projekt aktualisiert)
- [ ] Startseite liegt in `website`
- [ ] Kontraste, Preise, Demo-Hinweis geprüft
- [ ] Impressum/Datenschutz als Platzhalter
- [ ] Bonus: Abschnitt „Über uns“ vorhanden
- [ ] Bisherige `index.html` unverändert
- [ ] Teilnehmerin kann Aufbau, Design und Code in eigenen Worten erklären und präsentieren

---

# SPUR 2 – Langfristige Produktentwicklung (Software-first, nur bei realer Weiterführung)

> Nicht Teil der Weiterbildungsaufgabe. Start erst nach bewusster Entscheidung (Gate 0). Alle Phasen sind Vorschläge und nicht beschlossen. Alle Anforderungen in Spur 2 haben die Stufe **Später**; die Prioritäten P0/P1/P2 unten gelten nur innerhalb der jeweiligen Phase (P0 = Kern der Phase, P1 = empfohlen, P2 = optional). Die Reihenfolge der Module bleibt: **Manage → Connect → Discover; Shop modulübergreifend.**

## Gate 0 – Entscheidung zur Weiterführung

Vor Phase 2 klären: Will die Initiatorin das Projekt real weiterführen? Bestehen Zeit und Budget? Gibt es mindestens **ein bis drei Pilotkunden** (Zugang über die Schwestern) mit echtem Interesse? Sind Name, Domain und Markenrecht geprüft? Ist Zahlungsbereitschaft zumindest durch Gespräche erkundet?

## Phase 1 (Fundament, siehe Spur 1) – Marke, Website, Software-Seite, Demo-Shop
**Ergebnis:** Professionelle Marke und Website mit Demo-Shop, wiederverwendbar.

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
| P0 | Abonnementmodelle (Basic, Professional, Business), Kundenkonten, Zahlungsanbieter (nach Prüfung) |
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
| **Dokumentation** | Entscheidungen im Briefing festhalten, offene Entscheidungen (Briefing Kap. 18) abarbeiten |
| **Dateischutz** | Bestehende Dateien (`index.html`, Studien, Prototyp) nicht ohne Freigabe verändern |
| **Markt** | Wettbewerber und Preise vor realer Vermarktung aus offiziellen Quellen verifizieren; Zielgruppeninterviews |
| **Recht** | DSGVO, GoBD, E-Rechnung, Markenrecht fachlich prüfen lassen, bevor Konformität behauptet wird |
| **Qualität** | Prüfung nach `CLAUDE.md` Kap. 11; transparent zwischen implementiert und simuliert unterscheiden |

# Wichtigste Risiken

| Risiko | Gegenmaßnahme |
|---|---|
| Umfang der Vision überfordert die Ressourcen | Spuren und Gates trennen; kleine Schritte; reduzierte Startseite |
| Startseite wird zu voll oder wirkt wie eine generische SaaS-Seite | Acht Bereiche als Pflichtumfang; Details auf `software.html` und `shop.html`; Atelier-Design und Vermeidungsliste beibehalten |
| Neue Designrichtung bleibt beliebig oder wirkt generisch | Mehrere Richtungen begründet vergleichen; Vermeidungsliste prüfen; Runden mit je einer Änderung |
| Produktabgrenzung unklar (Tournament Planner / Manage; Portfolios / Connect) | Abgrenzung im Shop festlegen (Briefing Kap. 19) |
| Zahlungsbereitschaft nicht validiert | Pilotkunden und Interviews vor Phase 3 |
| Etablierte Wettbewerber | Nische (Berufsreiter, Turnier- und Fremdkostenabrechnung) schärfen, Wettbewerb ernsthaft analysieren |
| Zweiseitiger Marktplatz | Software-first, Anbieterseite über Manage aufbauen |
| Rechts- und Datenschutzrisiken | Fachliche Prüfung, keine voreiligen Compliance-Aussagen |
| Prototyp mit realen Daten | Strikte Trennung, nur anonymisierte oder fiktive Daten im Projekt |
| Versehentliches Überschreiben bestehender Dateien | Neue Dateien für neue Entwürfe; Sicherung vor Änderungen; Git |

---

## Änderungsvermerk (24.11.2026)

- Neu: Spur 1 auf **Shop-first** (Concept Store) ausgerichtet, mit der neuen Priorisierung in zehn Schritten und den Gates A–D.
- Neu: Anforderungsstufen **Pflicht / Empfohlen / Optional / Später** statt P0–P2 in Spur 1.
- Neu: Reduzierte Startseite mit acht Bereichen; Produktsortiment mit sechs Produkten; Customer Journey bis Demo-Checkout; Schutz bestehender Dateien.
- Ergänzung (24.11.2026): Designentscheidung **Atelier** (Variante A „Maison“ Hauptauftritt, Variante B „Noir“ ergänzend kombinierbar); Schritt 3 erledigt, Schritt 4 in Arbeit, Gate B für die Richtung erreicht.
- Entfallen: frühere 14-Bereiche-Startseite, Software-Tarife als zentraler Startseiteninhalt, Connect-/Discover-Teaser und Plattformvision auf der Startseite, alte Designvorauswahl (Heritage Modern, frühere Farbwelt).
- Unverändert erhalten: Spur 2 mit Phasen und Gates für Manage, Connect und Discover (nur Phase 1 und Tarifnennung angepasst), Querschnittsthemen, Risiken.

## Änderungsvermerk (26.11.2026, Neupositionierung Software-first)

- Geändert: Spur 1 von Shop-first (Concept Store) auf **Software-first**; Übersicht, Phase-1-Titel und Risiken angepasst.
- Geändert: Pflichtumfang der Startseite (Schritt 5–8) nach dem neuen Aufbau; Status der Schritte 5–9 aktualisiert.
- Erledigt: Software-Seite, Shop-Seite mit Filter, Produktdetailseiten. Offen: Warenkorb, Demo-Checkout, Qualitätssicherung (Schritt 10).
- Sicherung: `_archiv/_archiv_2026-11-26_vor-software-first/ROADMAP.md`.

## Änderungsvermerk (26.11.2026, Software-Produktseite)

- Erledigt: eigenständige Software-Produktseite mit interaktiver Demo (Schritt 9). Offen bleiben Demo-Checkout und Qualitätssicherung (Schritt 10).
- Sicherung: `_archiv/_archiv_2026-11-26_vor-software-seite/ROADMAP.md`.
