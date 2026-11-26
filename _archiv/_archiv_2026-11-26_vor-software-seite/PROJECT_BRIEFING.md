# EquiBill – Projektbriefing

**The Equestrian Business Platform**
*Connecting horses, people & business.*

> Dieses Dokument ist die zentrale Wissensgrundlage für das Projekt EquiBill (Geschäftskonzept, Anforderungen, Entscheidungen).
> Verbindliche Arbeitsregeln stehen in `CLAUDE.md`, die priorisierte Planung in `ROADMAP.md`.
> Stand: 26.11.2026 (Neupositionierung Software-first, Website-Architektur; siehe Änderungsvermerke am Ende).
> **Wichtig:** Im Rahmen der Weiterbildung ist EquiBill ein **fiktives Unternehmen** mit fiktiven Angeboten, Preisen, Profilen und Kundendaten.

## Statuslegende

| Status | Bedeutung |
|---|---|
| **Beschlossen** | Verbindliche Entscheidung oder Anforderung |
| **Vorläufig** | Konzeptentscheidung, die noch validiert oder angepasst werden darf |
| **Geplant** | Für eine spätere Phase vorgesehen (langfristige Vision) |
| **Optional** | Mögliche Erweiterung, nicht Pflicht |
| **Offen** | Noch nicht entschieden (siehe Kapitel 18) |
| **Ungeprüft** | Behauptung/Funktion, deren Stand noch nicht verifiziert ist |

---

## 1. Projektsteckbrief

| Punkt | Inhalt |
|---|---|
| Projektname | EquiBill *(Arbeitsname, Beschlossen für die Weiterbildung; finaler Name Offen)* |
| Arbeitstitel | The Equestrian Business Platform |
| Übergeordneter Claim | Connecting horses, people & business. *(Vorläufig)* |
| Website-Claims | The Business Behind the Sport. · Weniger Büro. Mehr Pferd. *(im Hero eingesetzt)* · Du machst den Sport. Wir vereinfachen das Business dahinter. *(Markeneinführung)* |
| Alternative Headline | Dein Pferdebusiness. Einfach digital. *(Vorläufig)* |
| Branche | Reitsport, Digitalisierung, Software, digitale Produkte, Plattformökonomie |
| Aktuelle Positionierung | **Softwareunternehmen für den professionellen Pferdesport**: Kernprodukt EquiBill Manage, ergänzend ein separater Onlineshop mit digitalen Business-Tools sowie Marketing- und Designvorlagen *(Beschlossen 26.11.2026; vorher „Concept Store“)* |
| Strategischer Ansatz | **Software-first** im Weiterbildungsprojekt und in der langfristigen Produktentwicklung *(Beschlossen 26.11.2026; vorher Shop-first im Weiterbildungsprojekt)* |
| Geschäftsmodell | Digitale Produkte und Software-Abos (aktuell); perspektivisch Dienstleistungen, Netzwerk, Marktplatz |
| Geografischer Fokus | Deutschland, zunächst Norddeutschland (Schleswig-Holstein, Hamburg, Niedersachsen) |
| Markteinstieg | Professioneller Spring- und Ausbildungsreitsport |
| Projektkontext | Weiterbildung zur KI-Managerin (DSP Academy), Baustein 3: KI-gestützte Webentwicklung mit Claude Code; geplanter Abschluss März 2027 |

---

## 2. Strategische Ebenen und Abgrenzung

### 2.1 Zwei strategische Ebenen (Beschlossen)

| | Aktuelles Weiterbildungsprojekt | Langfristige Produktentwicklung |
|---|---|---|
| **Leitprinzip** | **Software-first** *(seit 26.11.2026; vorher Shop-first)* | **Software-first** |
| **Inhalt** | EquiBill als Softwareunternehmen: EquiBill Manage als Kernprodukt mit eigener Landingpage; ergänzend ein separater Shop mit digitalen Business-Tools sowie Marketing- und Designvorlagen | Plattform aus Manage, Connect, Discover und Shop; Manage als Kernprodukt |
| **Umfang** | Marke, Startseite, Software-Seite, Demo-Shop mit Produktseiten; vollständig fiktiv | Vision; nicht Teil der aktuellen Umsetzung |
| **Connect / Discover** | Nicht auf der Startseite, nicht technisch umgesetzt | Bleiben Bestandteil der Produktvision |

Die langfristige Geschäftsidee von EquiBill bleibt bestehen. Die Neupositionierung vom 26.11.2026 bringt die Website in Einklang mit der Produktstrategie: Die Software ist das Kerngeschäft, der Shop wird visuell und inhaltlich **nicht gleichwertig** behandelt. Die Plattformarchitektur bleibt unverändert.

### 2.2 Drei Ebenen, die nie vermischt werden dürfen

| Ebene | Was ist das? | Stand |
|---|---|---|
| **1. Bestehender Prototyp** | Lokale HTML-Anwendung für Abrechnung/Verwaltung (bis Version 3.0), ursprünglich für eine selbstständige Berufsreiterin im Springreitsport | Existiert; Funktionsumfang **ungeprüft**; bleibt **separat und unverändert** |
| **2. Aktuelles Weiterbildungsprojekt** | Marke, Website mit Software-Landingpage (EquiBill Manage) und separatem Demo-Shop, später Warenkorb und Demo-Checkout mit Claude Code | **Aktuelle Priorität**; vollständig fiktiv |
| **3. Langfristige Plattformvision** | Business-Software + Netzwerk + Marktplatz + Shop als skalierbares Produkt | Vision; nicht Teil der aktuellen Umsetzung |

**Grundsatz:** Die Vision soll groß sein, die erste Umsetzung bewusst klein. Es soll kein isoliertes Wegwerfprojekt entstehen; die Website soll langfristig wiederverwendbar sein.

---

## 3. Projektinitiatorin

- Mehrjährige Berufserfahrung u. a. als Head of Digital Marketing (Team von acht Personen), in Performance Marketing, Art Direction, Kommunikationsdesign, Corporate Design, Markenentwicklung, Website-Relaunches, UX/UI, Social Media, Content Marketing, Digital Analytics, KPI-Reporting, CRM, Marketingautomatisierung, KI, Prompt Engineering, Vibe Coding und ersten n8n-Automatisierungen.
- Tools: Adobe Creative Suite, Figma, Google Analytics 4, Google Tag Manager, Meta Ads, Sprinklr, HubSpot, Microsoft 365, Excel, ChatGPT, Claude, Gemini, n8n.
- Programmierkenntnisse **im Aufbau**: technische Zusammenhänge verständlich erklären, strategische und gestalterische Themen nicht vereinfachen.
- Direkter Zugang zur Zielgruppe: zwei Schwestern sind professionelle Berufsreiterinnen (Zugang zu realen Prozessen, Anforderungen und potenziellen Pilotkunden).

---

## 4. Entstehungsgeschichte und Ausgangsproblem

EquiBill entstand als digitales Abrechnungs- und Verwaltungstool für eine selbstständige Berufsreiterin im Springreitsport. Berufsreiter erfassen viele unterschiedliche Leistungen und Kosten pro Pferd und Besitzer und rechnen sie monatlich ab, teils manuell über Word, Excel, Einzelbelege und PDF-Rechnungen.

**Typische Leistungen und Kosten:** Berittpauschalen (Teil-/Vollberitt), Jungpferdeausbildung, Turniervorstellungen, Verkaufsberitt, Nenngelder, Transport-, Fahrt- und Übernachtungskosten, Kilometerpauschalen, Tierarzt, Hufschmied, Stallkosten, Lehrgänge, Tagespauschalen, individuelle Zusatzleistungen, weiterberechnete Fremdkosten.

**Abrechnungsvarianten:** individuelle Berittpreise pro Pferd; wiederkehrende monatliche und einmalige Leistungen; Einzel- und Sammelabrechnungen (mehrere Pferde eines Besitzers); Fremdkosten teils weiterberechnet, teils direkt vom Besitzer bezahlt.

**Praxisbeispiel (kein Marktpreis):** Berittpauschale 1.000 €/Monat plus Tagespauschale 320 € für eine Veranstaltung, zuzüglich Transportkosten und weiterer Ausgaben.

---

## 5. Bestehender Prototyp (Stand: ungeprüft)

Technischer Ansatz: lokale HTML-Anwendung. Konzipiert bzw. umgesetzt wurden in den bisherigen Ständen (Umsetzungsgrad je Funktion **ungeprüft**):

- **Pferdeverwaltung:** Stammdaten, Besitzer-Zuordnung, Historie, individuelle Preise mit Preishistorie, Kostenbuch pro Pferd, aktiv/inaktiv.
- **Kundenverwaltung:** Besitzer, Kontakt- und Rechnungsdaten, mehrere Pferde pro Besitzer, individuelle Vereinbarungen.
- **Kostenverwaltung:** einmalige/wiederkehrende Kosten, Filter, Kostenverteilung auf mehrere Pferde, Turnierkosten, Fahrtkosten, Standardrouten, Kilometerpauschalen, Vorlagen, Belege, Foto-/Dokumentenimport.
- **Rechnungsstellung:** automatische Monatsabrechnung, Einzel-/Sammelrechnungen, PDF, individuelles Layout, Historie, Archiv, Status, Schutz vor doppelter Abrechnung (Anforderung), Monatsabschluss-Assistent, E-Mail-Entwürfe, Versand (vorgesehen), Zahlungserinnerungen.
- **Turniermanagement:** Turniere, Kalender, Kosten, Mehrfachzuordnung, anteilige Kostenverteilung, NEON-Dokumentenimport (vorgesehen).
- **Datenmanagement:** CSV-Export, JSON-Backup, Import, lokale Datenhaltung.

**Benötigen externe Dienste/Backend (nicht im Prototyp lösbar):** automatisierter E-Mail-Versand, Live-Routing, automatisierte Dokumentenauswertung, Mehrbenutzerbetrieb, Geräte-Synchronisierung, sichere Cloud-Datenverwaltung.

**Verbindliche Hinweise:**

- Der Prototyp ist **keine** produktionsreife und **nicht** vollständig rechtskonforme SaaS-Anwendung.
- Der tatsächliche Implementierungsstand wird später anhand des Quellcodes geprüft.
- Bestehende Funktionen werden nicht ohne Prüfung neu entwickelt, überschrieben oder gelöscht.
- Der Prototyp bleibt zunächst separat und unverändert, bis eine sichere Integrationsstrategie existiert.
- Der Prototyp darf **keine echten Kundendaten** in Projektordner oder Repository bringen (nur fiktive Testdaten).

---

## 6. Vision, Mission, Nutzenversprechen (langfristig)

**Vision:** EquiBill wird eine zentrale digitale Anlaufstelle für den professionellen Reitsport, die Pferde, Menschen und Geschäftsprozesse verbindet. Langfristig wird der gesamte Prozess zwischen Pferdebesitzer und Berufsreiter digital begleitet: von der Kundengewinnung über die Zusammenarbeit bis zu Verwaltung und Abrechnung.

**Mission:** Den professionellen Reitsport transparenter, effizienter, vernetzter und digitaler gestalten.

**Konzeptionelle Inspiration (keine Kopie; eigene Marke, Architektur und Oberfläche):** Lexware Office (Rechnungen/Geschäftsprozesse), LinkedIn (Profile, Qualifikationen, Referenzen), Airbnb (Angebote suchen, vergleichen, anfragen), branchenspezifische Reitsportsoftware (Pferde-, Stall-, Turnierverwaltung).

| Zielgruppe | Nutzenversprechen |
|---|---|
| **Berufsreiter** | Weniger Verwaltungsaufwand, professionelle Rechnungen, Überblick über Kosten und Umsätze, effizientere Prozesse, professionelle Außendarstellung, einfachere Neukundengewinnung |
| **Pferdebesitzer** | Transparente Kosten, übersichtliche Abrechnungen, einfachere Kommunikation, qualifizierte Berufsreiter finden, freie Berittplätze vergleichen, bessere Entscheidungsgrundlagen |
| **Pferdebetriebe** | Zentrale Verwaltung, effiziente Prozesse, Überblick über Pferde/Kunden/Mitarbeiter, bessere Kapazitätsplanung, professionelle Präsentation, neue Kunden |

**Nutzenversprechen im Weiterbildungsprojekt (Vorläufig, seit 26.11.2026):** Mit EquiBill Manage erledigen Berufsreiter, Bereiter, Trainer und Pferdebetriebe Verwaltung und Abrechnung an einem Ort: weniger Büro, mehr Zeit für Pferde und Kunden. Ergänzend gibt es im Shop digitale Vorlagen für Turnierplanung, Auftritt und Büro.

---

## 7. Problemstellung

**Berufsreiter:** manuelle Rechnungen und Kosten; individuelle Abrechnungen pro Pferd und Preisvereinbarungen pro Kunde; Turnierkosten verursachen Aufwand; Fremdkosten müssen korrekt zugeordnet werden; unübersichtliche Zahlungseingänge und offene Forderungen; keine zentrale Übersicht (Pferde, Kunden, Auslastung, Kosten, Umsatz); Neukunden meist über Empfehlungen; professionelle Außendarstellung (Portfolio, Social Media, Website) aufwendig; freie Berittkapazitäten nicht zentral vermarktbar.

**Pferdebesitzer und Züchter:** Reitersuche über persönliche Kontakte; freie Plätze nicht zentral sichtbar; Anbieter schwer vergleichbar; Preise und Kapazitäten intransparent; Qualifikationen und Erfolge aus vielen Quellen; Kommunikation über verschiedene Kanäle; Kosten und Abrechnungen teils unübersichtlich.

**Pferdebetriebe:** getrennte Systeme für Verwaltung, Kommunikation und Rechnungen; fehlende Automatisierung; schwierige Kapazitätsplanung; unübersichtliche Prozesse; hoher organisatorischer Zeitaufwand.

---

## 8. Zielgruppen

| Segment | Gruppen |
|---|---|
| **Primär** (aktueller Shop und Kernprodukt Manage) | Selbstständige Berufsreiter, Bereiter, Spring- und Dressurreiter, Pferdewirtschaftsmeister, Ausbildungsreiter, Ausbildungs- und Turnierställe, kleine und mittelständische Pferdebetriebe |
| **Sekundär** (wächst mit Connect/Discover) | Pferdebesitzer, Züchter, Gestüte, Trainer, Stallbetreiber, Pferdeinvestoren, Verkaufsställe |
| **Später möglich** | Pferdetransporteure, Hufschmiede, Tierärzte, Pferdephysiotherapeuten, weitere Dienstleister |

**Regionen:** zunächst Deutschland/Norddeutschland (interne Planungsannahme, wird in der Markenkommunikation seit 26.11.2026 nicht genannt); langfristig DACH, Europa, international.

---

## 9. Plattformarchitektur und Software-first-Vision (langfristig, unverändert)

**Verbindliche Modulreihenfolge:**

1. **Modul 1: EquiBill Manage** – Business- und Abrechnungssoftware (Kernprodukt)
2. **Modul 2: EquiBill Connect** – Professionelles Reiternetzwerk
3. **Modul 3: EquiBill Discover** – Digitaler Marktplatz
4. **Modulübergreifend: EquiBill Shop** – Vertriebsebene

**Begründung:** Manage bietet auch ohne große Nutzerbasis konkreten Mehrwert. Ein Marktplatz funktioniert nur mit genügend Anbietern und Nachfragern. Daher werden langfristig zunächst Berufsreiter und Betriebe über die Software gewonnen; diese erstellen später Profile und veröffentlichen freie Kapazitäten und bilden so die Anbieterseite des Marktplatzes. Connect und Discover sind Erweiterungen, **keine Voraussetzung** für den Nutzen von Manage.

**Einordnung im Weiterbildungsprojekt:** Seit 26.11.2026 Software-first: Manage ist das Kernprodukt mit eigener Landingpage, der Shop ist ergänzend. Connect und Discover sind **nicht** Bestandteil der Startseite und der technischen Umsetzung; die folgenden Beschreibungen dokumentieren die Produktvision.

### 9.1 EquiBill Manage (Modul 1)

Digitale Abrechnungs-, Verwaltungs- und Business-Management-Software für selbstständige Berufsreiter und professionelle Pferdebetriebe. Basis ist der bestehende Prototyp. **Claim:** Weniger Büro. Mehr Pferd. **Ziel:** Aufwand senken, Zeit sparen, Fehler reduzieren, wirtschaftliche Transparenz schaffen.

| Bereich | Funktionen |
|---|---|
| Pferdeverwaltung | Stammdaten, Besitzer, individuelle Preise, Historie, Ausbildungsstatus, Vertragsinfos, aktiv/inaktiv |
| Kundenverwaltung | Kundendaten, Rechnungsinfos, Ansprechpartner, zugeordnete Pferde, Vereinbarungen, Dokumente |
| Kostenmanagement | Beritt-, Turnier-, Tierarzt-, Hufschmied-, Transport-, Fahrtkosten; wiederkehrend/einmalig; Kostenverteilung; Belegverwaltung |
| Rechnungsstellung | Monatsabrechnung, Einzel-/Sammelrechnungen, Vorlagen, PDF, Historie, Status, Zahlungserinnerungen, Monatsabschluss |
| Turniermanagement | Kalender, Teilnahmen, Pferdezuordnung, Nenngelder, Transport-/Zusatzkosten, Turnierabrechnung, Preisgelder *(Optional)* |
| Business Analytics | Umsatz, Kosten, offene Rechnungen, Zahlungseingänge, Pferdeanzahl, Auslastung, freie Kapazitäten, Wirtschaftlichkeit, Entwicklungen, Management-Dashboard |
| Langfristig *(Geplant)* | Vertrags- und Dokumentenverwaltung, Mitarbeiter, Rollen/Rechte, KI-Belegerkennung, automatischer Rechnungsversand, Schnittstellen, E-Rechnung, Buchhaltungsexport, mandantenfähige Cloud |
| Kundenportal *(Geplant)* | Geschützter Zugang für Pferdebesitzer: Pferde, Rechnungen, Monatskosten, Zusatzkosten, Belege, Turniertermine, Trainingsinfos, Dokumente, Kommunikation, Zahlungsstatus |

**Monetarisierung:** monatliche/jährliche Abos (Tarife Basic, Professional, Business; siehe Kap. 10.4), Zusatzmodule, perspektivisch Onboarding, Schulungen und individuelle Dienstleistungen.

### 9.2 EquiBill Connect (Modul 2, Geplant)

Professionelles digitales Netzwerk für Berufsreiter, Trainer und Pferdebetriebe. **Claim:** Dein Profil. Deine Erfolge. Dein Netzwerk. **Ziel:** Sichtbarkeit verbessern und eine qualifizierte Anbieterdatenbank aufbauen; öffentliches Profil als digitale Visitenkarte und Portfolio.

- **Profilinhalte (Geplant):** Name, Profil-/Titelbild, Standort, Kurzbeschreibung, Berufserfahrung, Ausbildung, Qualifikationen, Trainerlizenzen, Disziplin, Spezialisierung, Leistungsklasse, sportliche Erfolge, Turnierergebnisse, Referenzen, Fotos, Videos, Social Links, Leistungen, Preise, verfügbare Berittplätze, Stallinfos/-ausstattung, Kontakt, Bewertungen, Verifizierungsstatus. Auch Betriebe erhalten Unternehmensprofile.
- **Langfristig:** verifizierte Profile, Qualifikationsnachweise, Referenzmanagement, Profilstatistiken, Netzwerkfunktionen, Kontaktanfragen, Favoriten, persönliche Profil-URL, digitale Visitenkarte, KI-Profiloptimierung, Integration externer Sportdaten.
- **Einschränkung:** Externe Sportdatenbanken nur nach Prüfung von Schnittstellen, Nutzungsrechten und Datenschutz.
- **Monetarisierung (langfristig):** kostenloses Basisprofil, Premium-Profil, erweiterte Präsentation, Statistiken, hervorgehobene Profile, Profil-Setup, digitale Visitenkarten.
- **Abgrenzung zum aktuellen Sortiment:** Das Rider Portfolio ist ein digitales Produkt im Shop, **kein** Connect-Profil (siehe Kap. 19).

### 9.3 EquiBill Discover (Modul 3, Geplant)

Digitaler Marktplatz für Suche und Vermittlung professioneller Reitsportdienstleistungen; UX konzeptionell an Airbnb orientiert. **Claim:** Die richtigen Menschen für dein Pferd. *(Alternative: Great horses deserve the right people.)* **Ziel:** Pferdebesitzer, Züchter und Berufsreiter/Betriebe gezielt zusammenbringen.

- **Angebotskategorien:** Berittplätze, Stallplätze, Ausbildungsplätze, Jungpferdeausbildung, Turniervorstellung, Verkaufsberitt, Berufsreiter, Trainer, Ausbildungsbetriebe, Pensionsställe, Lehrgänge.
- **Suche/Filter:** Standort, PLZ, Umkreis, Land, Disziplin, Ausbildungsstand, Spezialisierung, Leistungsklasse, Preis/Budget, Kapazitäten, Starttermin, Stallausstattung, Leistungsumfang, Qualifikationen, Bewertungen, Referenzen.
- **Darstellung:** Ergebnisliste, Karte, Angebotskarten, Detailseiten, Favoriten, Merkliste, Vergleich, Kontakt- und Platzanfragen.
- **Langfristig:** KI-Matching, Verfügbarkeitskalender, Benachrichtigungen, gespeicherte Suchen, Empfehlungen, Kommunikation, Buchungsanfragen, digitale Verträge, Bewertungen, verifizierte Angebote.
- **Verbindlich:** Eine Kontakt- oder Platzanfrage ist **keine** verbindliche Buchung. Buchungs-, Zahlungs- und Vertragsabwicklung werden erst in späteren Phasen geprüft.
- **Monetarisierung (langfristig):** Premium-Inserate, hervorgehobene Angebote, mehr Sichtbarkeit, ggf. Premium-Suche; perspektivisch Vermittlungsprovisionen. **Zu Beginn keine verpflichtende Provision.**

### 9.4 EquiBill Shop (modulübergreifend)

Der Shop ist die Vertriebsebene der Plattform. Im Weiterbildungsprojekt ist er seit 26.11.2026 ein **ergänzendes Angebot** auf einer eigenen Seite (`shop.html`), nicht mehr der Schwerpunkt. Er verkauft Software (EquiBill Manage), digitale Business-Tools sowie Marketing- und Designprodukte und perspektivisch ergänzende Dienstleistungen. Langfristig kommen Premium-Profile und -Inserate hinzu. Der Shop ist unabhängig von einem funktionierenden Netzwerk oder Marktplatz umsetzbar.

---

## 10. Geschäftsmodell, Sortiment, Priorisierung

**Hinweis:** Alle Preise und Produktangebote sind **vorläufige Konzeptentscheidungen** und während der Weiterbildung **fiktiv**. Zahlungsbereitschaft, steuerliche Preisgestaltung, Leistungsabgrenzung und Tragfähigkeit sind **nicht validiert**.

### 10.1 Erlösmodelle

1. **Digitale Produkte und Software** (aktuell, Shop): Software-Abonnement (Manage), digitale Einzelprodukte (Tools, Portfolios, Vorlagen)
2. **Dienstleistungen** (perspektivisch, Geplant): z. B. Beratung, Schulung, Einrichtung, Anpassung; **kein** Bestandteil des aktuellen Sortiments, Preise nicht festgelegt
3. **Premium-Funktionen für Profile und Inserate** (langfristig, Geplant, abhängig von Connect/Discover)
4. **Vermittlung/Provision** (erst nach erfolgreichem Marktplatzaufbau zu prüfen)

### 10.2 Vorläufiges Shopsortiment (Vorläufig, fiktiv)

| Produkt | Beschreibung | Preis | Kategorie *(Vorschlag, Offen)* |
|---|---|---:|---|
| EquiBill Manage | Abrechnungs- und Verwaltungssoftware | ab 19 €/Monat | Software |
| Tournament Planner | Turnierplanung und Kostenkalkulation | 29 € | Business Tools |
| Rider Portfolio | Digitales Reiter- und Sponsorenportfolio | 49 € | Marketing & Design |
| Horse Portfolio | Digitales Pferde- und Verkaufsportfolio | 39 € | Marketing & Design |
| Social Media Kit | Professionelle Designvorlagen für Reiter | 39 € | Marketing & Design |
| Equestrian Business Kit | Digitale Business-Vorlagen | 99 € | Business Tools |

### 10.3 Produktkategorien (Vorläufig)

- **Software**
- **Business Tools**
- **Marketing & Design**

Die Zuordnung der Produkte zu den Kategorien (Spalte oben) ist ein **Vorschlag** und zur Bestätigung offen. Die Kategorien bilden die Editorial Category Navigation der Shop-Seite (`shop.html`).

### 10.4 EquiBill Manage – Software-Tarife (Vorläufig, Teil von Manage)

Der Tarifvergleich steht auf der Software-Seite (`software.html`, Abschnitt „Tarife“). Die Startseite nennt nur „ab 19 €/Monat“ und verlinkt auf den Vergleich.

| Tarif | Preis | Zielgruppe | Leistungsumfang *(Demo-Annahme, Grenzen nicht final)* |
|---|---:|---|---|
| **Basic** | 19 €/Monat | Selbstständige Bereiter mit kleinem Bestand | Bis 5 Pferde; Pferde- und Kundenverwaltung; Kostenerfassung; Monatsabrechnung; PDF-Rechnungen; einfaches Dashboard |
| **Professional** | 39 €/Monat | Berufsreiter mit mehreren Pferden/Kunden | Bis 25 Pferde; alle Basic-Funktionen; Sammelrechnungen; Turniermanagement und -kosten; Belegmanagement; KI-Belegerkennung *(Geplant)*; Zahlungserinnerungen; erweiterte Auswertungen |
| **Business** | 79 €/Monat | Größere Ausbildungsställe, Pferdebetriebe | Pferdeanzahl gemäß später festgelegtem Tarif; alle Professional-Funktionen; mehrere Benutzer; Rollen/Rechte; Kundenportal *(Geplant)*; Management-Dashboard; erweiterte Automatisierungen und Reports |

„ab 19 €/Monat“ in der Produktkarte entspricht dem Tarif Basic.

### 10.5 Produktpriorisierung im Demo-Shop

- **Priorität 1 (Beschlossen):** EquiBill Manage als **Kernprodukt**: größter Bereich der Startseite und eigene Landingpage `software.html`.
- **Ergänzende Produkte (Vorläufig):** Tournament Planner, Rider Portfolio, Horse Portfolio, Social Media Kit, Equestrian Business Kit erscheinen auf `shop.html` mit eigenen Produktseiten in `produkte/`. Auf der Startseite stellt der Teaser „Mehr als Software“ nur Tournament Planner und Rider Portfolio vor (Beschlossen 26.11.2026). Eine feinere Priorisierung ist **Offen**.
- **Spätere Shop-Funktionen (nach Unterrichtsvorgaben):** Produktdetailseiten, Warenkorb, Demo-Checkout, Kategorien, Preisfilter, Suche, Kundenkonto, Abo-Verwaltung, Bestellübersicht, digitale Downloads, Dienstleistungsbuchung.

### 10.6 Langfristige Konzeptwerte für Connect und Discover (Geplant, ungeprüft)

Nicht Teil des aktuellen Sortiments und nicht im Demo-Shop darstellen:

| Idee | Konzeptwert |
|---|---:|
| Basis-Reiterprofil | Kostenlos |
| Premium-Reiterprofil | 19 €/Monat |
| Premium-Berittplatz-Inserat (30 Tage) | 14,90 € |
| Hervorgehobenes Reiterprofil (30 Tage) | 19,90 € |

### 10.7 Hypothetisches Umsatzszenario (nur Veranschaulichung, **keine Prognose**, bezieht sich nur auf Manage-Tarife)

| Tarif | Beispielkunden | Monatlicher Umsatz |
|---|---:|---:|
| Basic – 19 €/Monat | 30 | 570 € |
| Professional – 39 €/Monat | 50 | 1.950 € |
| Business – 79 €/Monat | 20 | 1.580 € |
| **Gesamt** | **100** | **4.100 €** |

Annualisiert: 49.200 €. Nicht enthalten: digitale Einzelprodukte, Dienstleistungen, Premium-Profile, Inserate. Kosten für Entwicklung, Hosting, KI-APIs, Support, Marketing, Zahlungsabwicklung, Steuern usw. sind separat zu betrachten.

---

## 11. Markt, USP und SWOT

### 11.1 USP (Vorläufig, noch zu validieren)

Kombination aus branchenspezifischer Business-Software, spezialisierter Rechnungsstellung, Turnierkostenmanagement, Pferde- und Kundenverwaltung, professionellen Reiterprofilen, sportlichen Referenzen, aktuellen Berittkapazitäten, Beritt- und Stallplatzvermittlung, digitaler Kundenkommunikation, KI-Funktionen und langfristiger digitaler Geschäftsbeziehung.

Im aktuellen Shop ergänzend: hochwertig gestaltete, branchenspezifische digitale Produkte (Portfolios, Design- und Business-Vorlagen) für professionelle Reiter an einem Ort.

EquiBill soll weder nur Rechnungssoftware noch nur Anzeigenmarkt sein: Berufsreiter verwalten zuerst effizient ihren Betrieb und nutzen dieselbe Plattform später zur Kundengewinnung; Pferdebesitzer finden einen Reiter und begleiten die Zusammenarbeit digital.

### 11.2 Wettbewerbsumfeld (erste Betrachtung, **ungeprüft**; vor realer Vermarktung anhand offizieller Quellen verifizieren)

| Anbieter | Schwerpunkt | Website |
|---|---|---|
| Board & Stable | Stallplatz- und Trainersuche, Verwaltungssoftware | boardandstable.com |
| Pferde.expert | Reiter-, Stall- und Dienstleistervermittlung | pferde.expert |
| EquiManage | Stallmanagement und Buchungen | equimanage.eu |
| ehorses | Pferdemarktplatz, Berittanzeigen | ehorses.de |
| Equicty | Professionelle Pferdebetriebssoftware | equicty.com |
| Equimondo | Pferdeverwaltung und Abrechnung | myequimondo.de |
| PferdeNavi | Stall- und Dienstleistersuche | pferdenavi.de |
| Ridetreat | Vermittlung von Reitsportangeboten | ridetreat.de |
| rimondo | Sportdaten und Reiterprofile | rimondo.com |
| Equidentity | Stallpräsentation und Verwaltung | equidentity.com |
| EquiStable | Stallmanagement und Abrechnung | equistable.com |
| HorseDeal | Vermittlung im Pferdesport | horsedeal.com |
| Kleinanzeigen | Beritt- und Stallplatzanzeigen | kleinanzeigen.de |

**Besonders relevante Benchmarks:** Equicty und Equimondo (Funktionsumfang/Preise von Manage), Board & Stable (Kombination Marktplatz + Software), EquiManage (Verwaltung + Buchung), Pferde.expert (Vermittlung im deutschen Markt), rimondo (Sportdaten, Profile, Ergebnisse). Branchenübergreifend: Lexware Office, Airbnb, LinkedIn. Für die neue Designstrategie zusätzlich als Inspiration (nicht als Wettbewerb): moderne internationale Sportmarken, Premium-Reitsportmarken, Concept Stores.

**Es ist keine vollständig unbesetzte Marktlücke nachgewiesen.**

### 11.3 SWOT

| | |
|---|---|
| **Stärken** | Bestehender Prototyp; realer Anwendungsfall; direkter Zugang zur Zielgruppe; Marketing-/Designexpertise; Branchenfokus; Software-first-Vision; Nutzen von Manage unabhängig vom Marktplatz; Verwaltung + Kundengewinnung kombiniert; wiederkehrende Einnahmen möglich |
| **Schwächen** | Keine Nutzerbasis; begrenzte Ressourcen; sehr große Vision; Zahlungsbereitschaft nicht validiert; keine externen Datenschnittstellen; keine produktionsreife SaaS-Infrastruktur; keine etablierte Marke |
| **Chancen** | Digitalisierung administrativer Prozesse; KI-Branchenlösungen; SaaS-Umsätze; Spezialisierung; Netzwerkaufbau; Kooperationen mit Reitsportorganisationen; internationale Skalierung; Cross-Selling zwischen Modulen und Produkten |
| **Risiken** | Etablierte Wettbewerber; hohe Wechselhürden; Vermittlung über persönliche Netzwerke; Datenschutz und Rechnungsrecht; zweiseitiger Marktplatz schwer aufzubauen; technische Komplexität; Betriebskosten; geringe Zahlungsbereitschaft einzelner Gruppen |

---

## 12. KI und Automatisierung (langfristig, Geplant)

**Grundsatz:** KI löst konkrete Probleme und ist kein reines Marketingargument. Nicht jede Funktion braucht KI. KI-Funktionen müssen nachvollziehbar und kontrollierbar sein. **KI darf keine Rechnungsbeträge erfinden und keine verbindlichen Buchungen ohne Validierung vornehmen; Finanzdaten müssen vor der Verarbeitung überprüfbar sein. KI darf keine sportlichen Erfolge oder Qualifikationen erfinden.**

| Priorität | Modul | Funktionen (alle Geplant) |
|---|---|---|
| 1 | Manage | **Belegerkennung** (Beträge, Datum, Kategorie, Zuordnung zu Pferd/Kunde, Dubletten); **Business-Assistent** (Kostenentwicklung, Auffälligkeiten, Auslastung, Reports, Wirtschaftlichkeit, Empfehlungen); **Dokumentenassistent** (Zusammenfassen, Extrahieren, Abrechnungsdaten vorbereiten, Turnierinfos) |
| 2 | Connect | **Profilassistent** (Profiltexte, Leistungsbeschreibungen, Inserate, Unternehmensprofile, Übersetzungen) |
| 3 | Discover | **Pferd-Reiter-Matching** per natürlicher Sprache auf Basis strukturierter Daten, mit nachvollziehbarer Begründung (Beispielanfrage: erfahrener Springreiter im Umkreis von 100 km um Hamburg, 5-jähriger Wallach, Budget 1.200 €/Monat) |
| – | Übergreifend | Produktberater, Tarifberatung, Kundenservice, Onboarding-Assistent, Marketing, Newsletter, Social-Media-Content, personalisierte Kommunikation |

**Automatisierung mit n8n (Geplant):** Registrierung/Onboarding, CRM-Anbindung, Rechnungsversand, Zahlungserinnerungen, monatliche Managementreports, Datenübertragung, Belegverarbeitung, E-Mail-Kommunikation, Profilvervollständigung, Weiterleitung von Kontaktanfragen, Benachrichtigungen bei passenden Berittplätzen, Abo-Kommunikation, Feedback, Support. Automatisierungen müssen sinnvoll, nachvollziehbar und technisch kontrollierbar sein.

Im Weiterbildungsprojekt werden KI-Funktionen **nicht** als vorhanden dargestellt.

---

## 13. Marke, Corporate Design, UX/UI

### 13.1 Marke

- **Markenarchitektur (Beschlossen für die Weiterbildung):** EquiBill – The Equestrian Business Platform, mit EquiBill Manage, Connect, Discover, Shop.
- **Alternative Dachmarken (diskutiert, Offen):** EquiOne, EquiHub, EquiFlow, EquiConnect, EquiSphere, EquiLink, EquiOffice, StableFlow. Domain- und Markenrechte sind **nicht geprüft**.
- **Werte:** Professionalität, Vertrauen, Transparenz, Qualität, Innovation, Effizienz, Verlässlichkeit, Branchenkompetenz, Einfachheit.
- **Persönlichkeit (neu, Vorläufig):** modern, premium, sportlich, selbstbewusst; hochwertig und nahbar.

### 13.2 Designstrategie (Beschlossen als Richtung, Details Offen)

Die bisherige **Heritage-Modern-Ästhetik** und die **bisher vorgeschlagenen Farbwelten sind nicht verbindlich**. Die gewählte Richtung steht in Kap. 13.3; Logo, Schriften und das finale Corporate Design werden daraus **ausgearbeitet**.

**Die Website vereint:** modern · premium · sportlich · selbstbewusst · editorial · minimalistisch · luftig · emotional · produktorientiert · visuell außergewöhnlich.

**Orientierung:** moderne internationale Sportmarken, Premium-Reitsportmarken, hochwertige Concept Stores, zeitgemäßes Editorial-Webdesign (Inspiration, keine Kopie).

**Ausdrücklich vermeiden:** klassische B2B-SaaS-Landingpages · textlastige Websites · dominante Tarifvergleichstabellen · übermäßige Funktionsbeschreibungen · altmodische Heritage-Ästhetik · generische KI-Website-Layouts · kitschige Reitsportgestaltung · überladene Startseiten.

**Vorgehen:** Mehrere neue Designrichtungen entwickeln, begründet vergleichen, gemeinsam entscheiden (siehe `ROADMAP.md`). Im Ordner `design-studien/` liegen bereits Studien (Editorial, Arena, Concept Store). Sie wurden für dieses Update **nicht inhaltlich geprüft** und gelten als **Referenzmaterial, nicht als Festlegung**.

**Typografie:** klare Hierarchie, gute Lesbarkeit; zunächst **lokal verfügbare Systemschriften** (keine Google Fonts, Vorgabe der Weiterbildung). Die konkrete Schriftwahl ist Teil der neuen Entwicklung.

**Bildsprache:** authentisch, hochwertig, emotional, produktorientiert (Produktkarten, Mockups). Platzhalter klar kennzeichnen; keine fremden urheberrechtlich geschützten Bilder. Vermeiden: Ponyhof-Kitsch, übermäßige Pferdesymbole, generische Stockfotos, überladene Oberflächen, generische KI-Ästhetik.

### 13.3 Designrichtung Atelier (Beschlossen, 24.11.2026; Feinheiten Offen)

**Entscheidung:** Aus fünf Designstudien (Runde 2: Stride, Atelier, Takt, Terra, Floodlight) und einer Vertiefungsrunde (Runde 3: Atelier und Floodlight mit je drei Varianten, Produktseite, Warenkorb/Demo-Checkout) wurde **Atelier** gewählt, **Variante A „Maison“** als Hauptauftritt. **Variante B „Noir“** (dunkel) soll ergänzend **kombiniert** werden, z. B. bei Unterseiten. Stride, Takt, Terra, Floodlight sowie die Atelier-Variante C „Rouge“ sind nicht gewählt und bleiben als Referenz erhalten.

**Kreatives Leitkonzept:** „The Equestrian Business Edit“. Digitale Produkte werden wie Stücke einer Mode-Kollektion kuratiert: nummeriert, einzeln inszeniert, mit Weißraum zum Atmen. Die Marke wirkt wie ein Maison, nicht wie ein Software-Anbieter.

| Rolle | A „Maison“ (hell) | B „Noir“ (dunkel) |
|---|---|---|
| Fläche | Ivory `#F3EFE8` | Ink `#151213` |
| Text | Ink `#151213` | Ivory `#F3EFE8` |
| Akzent | Oxblood `#6E1423` | Blush `#E9C9C0` |
| Zusatzfarben | Blush `#E9C9C0`, Stone `#BDB5AB` | Wine `#5B1A24`, Smoke `#3A3231` |

Die Werte sind die vorläufige Basis aus den Studien. Berechnete Kontraste (WCAG): Ink auf Ivory 16,25:1; Oxblood auf Ivory 10,25:1; Blush auf Ink 12,04:1; Ink auf Blush 12,04:1; **Stone auf Ivory nur 1,77:1 und daher nicht für Text geeignet**. Weitere Paarungen sind vor dem Einsatz zu prüfen.

- **Typografie:** hochkontrastige Didone (Didot / Bodoni 72), groß, mit kursivem Gegenspieler; Labels in Helvetica Neue Versalien, Laufweite ca. +24 %; Nummern als „N°“. Zunächst lokale Systemschriften (keine Google Fonts); finale Hausschrift Offen.
- **Bildsprache:** Mittelformat-Look, Fensterlicht, warme Hauttöne, Porträts und Details (Hände, Zügel, Leder, Stangen im Streiflicht), Stillleben statt Action; Produkte als Packshots auf farbigen Flächen. Fotos sind bis auf Weiteres gekennzeichnete Platzhalter; echte Fotografie müsste erst erstellt oder lizenziert werden (Offen).
- **Layout und Komposition:** asymmetrisches 12-Spalten-Raster, überlappende Fotos, Headline über Bildkanten, Kategorien als Index-Liste, Produkte im versetzten Lookbook-Raster mit wechselnden Formaten (bewusst kein gleichförmiges Kachelraster).
- **Wortmarke (Idee):** EQUI—BILL in gesperrten Didone-Versalien, Mittelstrich in der Akzentfarbe; Monogramm „EB“ als Prägung/Siegel.
- **Produktkarten:** rahmenlose Packshot-Flächen mit eigener Hintergrundfarbe je Produkt, „N°0x“, Name in Serif, Preis rechtsbündig; Hover als sanfter Zoom.
- **Hero:** Zwei überlappende Foto-Platzhalter (Porträt groß, Detail klein) und die Schlagzeile „The Edit.“ über der Bildkante, kurzer Satz, Textlink statt Button.
- **Hell und Dunkel kombinieren:** A ist der Standard, B ergänzt. Beide teilen Ink, Ivory und Blush. Beschlossen (26.11.2026): Startseite und `shop.html` hell (A), `software.html` und Produktseiten dunkel (B), immer als ganze Seite. Offen: Warenkorb, Checkout und weitere Unterseiten.
- **Referenzdateien (nicht verändern):** `design-studien/runde-2/studie-2-atelier.html`, `design-studien/runde-3/atelier-varianten.html`, `atelier-produkt.html`, `atelier-warenkorb.html`. Der Warenkorb-Entwurf rechnet nur im Browserfenster, hat keine Zahlungsfelder und speichert nichts; die Texte der Produktseite sind Beispieltexte.

### 13.4 UX/UI-Prinzipien

Mobile First, responsive, intuitive Navigation, klare Informationshierarchie, großzügige Weißräume, hochwertige Kartenlayouts, einheitliche Komponenten, konsistente Abstände, klare Handlungsaufforderungen, gute Lesbarkeit, ausreichende Kontraste (WCAG AA), Barrierearmut, verständliche Fehlermeldungen, wenige Klicks, klare Nutzerführung, konsistentes Designsystem. Verständlich auch für wenig technikaffine Berufsreiter.

---

## 14. Website-Architektur, Startseite, Navigation, Customer Journey

### 14.1 Ausrichtung (Beschlossen 26.11.2026)

**Software-first.** Die Website stellt EquiBill als Softwareunternehmen vor: EquiBill Manage ist der größte und prominenteste Inhalt, der Shop ein ergänzendes Angebot auf einer eigenen Seite. Das Atelier-Design bleibt unverändert und verhindert den Look einer generischen SaaS-Landingpage. Connect und Discover werden **nicht** dargestellt. (Bis 25.11.2026: Concept Store, Shop-first.)

### 14.2 Aufbau der Startseite (Beschlossen 26.11.2026, Kopf plus acht Bereiche)

| # | Bereich | Inhalt |
|---|---|---|
| – | Kopf | Logo (animiert), Navigation Software · Shop · Über uns, Warenkorb (FAQ im Fuß) |
| 1 | Hero | Cinematic Hero, „The Business Behind the Sport.“, „Weniger Büro. Mehr Pferd.“; CTA „Software entdecken“, sekundär „Zum Shop“ |
| 2 | Markeneinführung | „Du machst den Sport. Wir vereinfachen das Business dahinter.“ Was, für wen, welches Problem |
| 3 | EquiBill Manage | Größter Bereich: Geräte-Mockup, Kundennutzen, animierte Beispielrechnung (fiktiv), Funktionen, „ab 19 €/Monat“ |
| 4 | So funktioniert’s | Erfassen → Verwalten → Abrechnen |
| 5 | Shop-Teaser „Mehr als Software“ | Nur Tournament Planner und Rider Portfolio; CTA „Alle Produkte entdecken“ |
| 6 | Über EquiBill | Markengeschichte „Aus dem Pferdesport. Für den Pferdesport.“ (Ursprung laut Kap. 4), als fiktiv gekennzeichnet |
| 7 | FAQ | Kompakte Fragen zu Software und Shop |
| 8 | Abschluss-CTA und Footer | Fokus auf Manage; Impressum-/Datenschutz-Platzhalter und Demo-Hinweis |

Nicht mehr auf der Startseite: Sortimentsbereich, vollständige Produktübersicht mit Filter, Bereich „Vorteile“, Tarifvergleich.

### 14.3 Navigation und Unterseiten (Beschlossen 26.11.2026)

- **Navigation:** Software · Shop · Über uns; Warenkorb als eigenständiges Element rechts; FAQ im Fuß verlinkt.
- **`software.html`** (Variante Noir): Landingpage EquiBill Manage mit Funktionen, Demo (Beispielrechnung), fiktiven Anwendungsbeispielen, Tarifvergleich Basic/Professional/Business, technischen Daten und Warenkorb-Schaltfläche. Ersetzt die frühere Produktseite von Manage.
- **`shop.html`** (Variante Maison): alle Produkte mit Kategorien, Filter und Links zu den Produktdetailseiten (`produkte/`, Variante Noir).
- **Über uns, FAQ:** zunächst Anker auf der Startseite.

### 14.4 Mögliche weitere Unterseiten (später, nach Bedarf und Unterrichtsvorgaben)

Warenkorb · Demo-Checkout · Bestellübersicht · Über uns (ausführlich) · Kontakt · Impressum und Datenschutz (Platzhalter) · ggf. Kundenkonto (simuliert).

### 14.5 Langfristige Zielarchitektur (nicht aktueller Umfang)

- **Allgemein:** Startseite, Softwareübersicht, Funktionsübersicht, Produktvergleich, Preise, Über uns, FAQ, Kontakt, Impressum, Datenschutz
- **Shop:** Übersicht, Software-Abos, digitale Produkte, Dienstleistungen, Produktdetailseiten, Warenkorb, Checkout, Bestellübersicht
- **Manage:** Login, Registrierung, Dashboard, Pferde-/Kunden-/Kosten-/Rechnungs-/Turnier-/Belegverwaltung, Kundenportal, Einstellungen
- **Connect:** Reiter- und Betriebsprofile, Profilverwaltung, Referenzen, sportliche Erfolge, Netzwerkfunktionen
- **Discover:** Marktplatz, Reiter-/Berittplatz-/Stallplatzsuche, Suchergebnisse, Karte, Angebotsdetails, Favoriten, Kontaktanfragen

### 14.6 Customer Journey

**Customer Journeys (aktuelles Weiterbildungsprojekt, Beschlossen 26.11.2026):**

> Primär (Software): Marke entdecken → Software verstehen (Startseite) → Software-Seite: Funktionen, Demo, Tarife → Warenkorb → Demo-Checkout
>
> Ergänzend (Shop): Shop-Teaser oder Navigation → Shop → Produktdetails → Warenkorb → Demo-Checkout

Der Demo-Checkout ist eine **reine Simulation** ohne echte Zahlung und ohne echte Daten.

**Langfristige Journey (Produktentwicklung, Geplant):**

- *Berufsreiter:* entdeckt EquiBill → erkennt sein Verwaltungsproblem → informiert sich über Manage → prüft Funktionen und Tarife → wählt Abo → startet Pferde- und Kundenverwaltung → nutzt Rechnungsstellung → erstellt später ein Reiterprofil → veröffentlicht freie Kapazitäten → gewinnt über den Marktplatz Kunden.
- *Pferdebesitzer (sekundär):* entdeckt EquiBill → sucht langfristig einen Reiter → vergleicht Profile, Referenzen, Angebote → sendet Kontaktanfrage → Zusammenarbeit entsteht → Reiter verwaltet sie über EquiBill → Besitzer erhält langfristig Zugang zu Rechnungen, Kosten, Informationen.

---

## 15. Weiterbildungsaufgabe Tag 42 – „Shop-Idee, Projekt und erster HTML-Entwurf“

Quelle: offizielle Aufgabenstellung (KI-Manager, Tag 42, Vibe Coding I; PDF im Projektordner). Vorgabe: Start mit Sonnet 5.5 und Aufwand „Mittel“; selbstständiges Arbeiten; **alles ist erfunden** (kein echtes Unternehmen, keine echte Marke, keine echten Kundendaten). Ab dem Folgetag arbeitet Claude Code im selben Ordner weiter.

| Teil | Offizielle Anforderung | Bezug im Projekt |
|---|---|---|
| **A1** | Brainstorming ohne Projekt: Shopname, mind. drei Produkte mit Preis | Name EquiBill; Sortiment mit sechs Produkten (Kap. 10.2) |
| **A2** | Text für Projektanweisungen (Rolle und Ziel, Arbeitsweise, Gestaltung, Pflicht, Ton) plus eigene Wünsche; Konzept und Anweisungen als Datei zum Download | `CLAUDE.md`, `PROJECT_BRIEFING.md`, `ROADMAP.md` |
| **B1** | Ordner mit Shopnamen, Unterordner `website`, Datei aus A2 im Shop-Ordner | Ordner `EquiBill` mit `website` vorhanden |
| **B2** | Claude-Projekt (Titel, Beschreibung, Sichtbarkeit Privat), Anweisungen einfügen, Ordner verbinden oder Datei hochladen | Projekt „EquiBill“ vorhanden; **Anweisungen im Projekt müssen auf die neue `CLAUDE.md` aktualisiert werden** |
| **C1** | Neuer Chat im Projekt: Beratung zu Design, Farben, Aufbau; Startseite als HTML in `website` | Erst nach Abstimmung von Designrichtung und Struktur |
| **C2** | Mehrere Optimierungsrunden, **pro Runde eine Änderung**; Design-Teil der Präsentation durchgehen (außer Google Fonts); Kontrast, Preisangaben, Demo-Hinweis prüfen; Impressum/Datenschutz bleiben Platzhalter; Tipp: „Was fehlt noch, und was kann ich am Entwurf verbessern?“ | Siehe `ROADMAP.md` |
| **Bonus** | Abschnitt „Über uns“ | Fester Bestandteil der Startseite (Bereich 7) |

**Fertig, wenn:** das Projekt Anweisungen und Konzept kennt und die Startseite in `website` liegt. Die Aufgabe verlangt **keine** funktionierende Plattform, keine produktive Datenbank und keinen echten Zahlungsprozess. Spätere Shop-Funktionen richten sich nach den weiteren Unterrichtsvorgaben.

---

## 16. Technische Anforderungen und Projektstruktur

### 16.1 Erste Entwicklungsphase (Beschlossen)

HTML5, CSS, JavaScript nur wenn erforderlich; semantisches HTML; responsive; modulare, wartbare Komponentenstruktur; aussagekräftige Dateinamen; möglichst wenige externe Abhängigkeiten; lokal ausführbar; fiktive Daten; **keine echte Zahlungsintegration; keine produktive Datenverarbeitung**; lokale Systemschriften.

### 16.2 Langfristige Anforderungen (Geplant)

Modulare Architektur, wiederverwendbare Komponenten, sichere Authentifizierung, Backend, Datenbank, API-Struktur, Rollen/Rechte, Mandantentrennung, Skalierbarkeit, Sicherheit, Testbarkeit, Versionskontrolle, Dokumentation, Monitoring.

**Stack, Backend, Datenbank, Hosting und Zahlungsanbieter sind nicht entschieden.** Nicht vorschnell wählen; berücksichtigen: Projektumfang, Lernziele, Kosten, Wartbarkeit, Skalierbarkeit, Datenschutz, Betrieb, technische Kenntnisse der Initiatorin.

### 16.3 Projektstruktur und Schutz bestehender Dateien

```
EquiBill/
├── PROJECT_BRIEFING.md
├── CLAUDE.md
├── ROADMAP.md
├── Tag42_Aufgabe_Shop-Projekt_und_Design-Entwurf.pdf   (Aufgabenstellung)
├── _archiv_2026-11-24/        (Stand der drei Dokumente vor der Neuausrichtung)
├── design-studien/            (Referenzmaterial, nicht verbindlich)
└── website/
    ├── index.html             (bisheriger Entwurf, unverändert als Referenz)
    ├── index_v1_backup.html   (Sicherung, unverändert)
    └── index_v2_arena.html    (Studie, unverändert)
```

Neue Entwürfe entstehen in **neuen Dateien**. Die bisherige `index.html` bleibt unverändert als Referenz erhalten und wird nur nach ausdrücklicher Freigabe ersetzt. Weitere Ordner (z. B. `assets/`, `images/`, `styles/`, `scripts/`) erst bei Bedarf. Der bestehende Prototyp liegt **außerhalb** dieser Struktur, bis eine Integrationsstrategie existiert.

---

## 17. Datenschutz, Sicherheit, rechtliche Anforderungen

**Weiterbildung:** ausschließlich fiktive Daten; keine echten Kundendaten, Zugangsdaten oder vertraulichen Rechnungsinformationen in Demo-Anwendungen. Fiktive Daten müssen als solche erkennbar sein. Keine echte Zahlungsabwicklung.

**Geheimnisse:** API-Schlüssel, Passwörter und Zugangsdaten gehören **nie** in Code oder auf GitHub, sondern in `.env`-Dateien, die in `.gitignore` stehen.

**Arbeitsstände:** regelmäßig mit Git sichern (aussagekräftige Commit-Messages).

**Vor einem produktiven Betrieb zu prüfen:** DSGVO, Datenschutz durch Technikgestaltung, Rollen/Zugriffe, Authentifizierung, Verschlüsselung, sichere Dokumentenspeicherung, Mandantentrennung, Backup/Wiederherstellung, Löschkonzepte, Aufbewahrungspflichten, Rechnungsrecht, Umsatzsteuer, GoBD, E-Rechnung, Zahlungsabwicklung, Plattform- und Vermittlungsbedingungen, Vertragsrecht, Urheber- und Bildrechte, externe Sportdaten, Markenrechte, KI-Regulierung.

**Es wird keine rechtliche oder steuerliche Konformität behauptet, solange sie nicht fachlich geprüft wurde.**

---

## 18. Offene Entscheidungen

**Aktuelles Weiterbildungsprojekt:**

- Designrichtung ist entschieden (Atelier A, B ergänzend, Kap. 13.3). Offen: finales Corporate Design (Logo, Hausschrift, endgültige Farbwerte), Einsatzregeln für die dunkle Variante (welche Seiten, Übergänge), echte Fotografie statt Platzhalter
- Finaler Markenname und Einsatz der Claims im neuen Design
- Zuordnung der Produkte zu den Kategorien (Vorschlag in Kap. 10.2)
- Feinpriorisierung und Reihenfolge der Produkte im Shop
- Konkrete Produktform der digitalen Produkte (z. B. Dateiformat, Umfang) und ihre Darstellung als Mockup
- Finale Navigation und CTA-Texte
- Zeitpunkt, an dem die neue Startseite (`website/index_atelier.html`, erster Entwurf) die bisherige `index.html` ersetzt; bis dahin bleibt `index.html` unverändert
- Umfang der Shop-Funktionen nach den weiteren Unterrichtsvorgaben
- Ob und wann Dienstleistungen ins Sortiment kommen

**Langfristige Produktentwicklung:**

Dachmarkenarchitektur · Marken- und Domainprüfung · quantitative Marktanalyse und Marktgröße · Zielgruppeninterviews · Validierung der Zahlungsbereitschaft · finale Tarifstruktur und -grenzen · technischer Stack · Datenbankarchitektur · Hosting · Authentifizierung · Integration des Prototyps · Zahlungsanbieter · externe Schnittstellen · Umfang des ersten produktiven MVP · Verifizierungsverfahren für Berufsreiter · Bewertungs- und Moderationskonzept · rechtliche und steuerliche Prüfung.

Entscheidungen werden schrittweise getroffen und hier dokumentiert. Vorläufige Annahmen werden nicht ungefragt als verbindlich behandelt.

---

## 19. Bekannte Spannungen und Verbesserungspotenziale (zur Diskussion, nicht beschlossen)

| # | Beobachtung | Empfehlung |
|---|---|---|
| 1 | **Überschneidung Tournament Planner / Manage:** Manage (Tarif Professional) enthält Turniermanagement und -kosten; der Tournament Planner (29 €) behandelt Turnierplanung und Kostenkalkulation und kann Abos kannibalisieren oder verwirren. | Im Shop klar abgrenzen (Einzelprodukt für Planung und Kalkulation vs. laufende Verwaltung in Manage). |
| 2 | **Überschneidung Portfolios / Connect:** Rider Portfolio und Horse Portfolio ähneln dem späteren Connect-Profil. | Als eigenständige digitale Produkte positionieren; Connect nicht im Shop erwähnen. |
| 3 | **Digitale Produkte ohne definierte Form:** Es ist nicht festgelegt, was Kunden tatsächlich erhalten. | In der Demo als Mockups darstellen und als solche kennzeichnen; Produktform später entscheiden. |
| 4 | **Tarifgrenzen:** Business „gemäß später festgelegtem Tarif“ ist uneindeutig; „KI-Belegerkennung“ in Professional ist ein Versprechen, das nur simuliert wäre. | Als „geplant“ bzw. Demo-Annahme kennzeichnen; Tarife nur auf Unterseite zeigen. |
| 5 | **Preisniveau ungeprüft:** Die Preise sind nicht gegen Equicty/Equimondo u. a. validiert. | Wettbewerbspreise vor realer Vermarktung recherchieren; für die Demo reicht der Hinweis „Demo-Preise“. |
| 6 | **Prototypdaten:** Der Prototyp könnte reale Kunden- oder Rechnungsdaten enthalten. | Niemals in Projektordner/GitHub übernehmen; nur anonymisierte, erfundene Daten verwenden. |
| 7 | **Kontraste:** Neue Farbwelt ist noch offen; helle Akzentfarben sind als Textfarbe kritisch. | Kontraste (WCAG AA) bei jeder Designrunde prüfen. |
| 8 | **Vorhandene Entwürfe und Studien** (`index.html`, `design-studien/`) können noch die frühere Richtung oder frühere Preise enthalten. | Nur als Referenz nutzen; nicht ungeprüft übernehmen. |

---

## 20. Leitprinzipien

- **Software-first** in der Weiterbildung und in der langfristigen Produktentwicklung (seit 26.11.2026); aktuelle Umsetzung und langfristige Vision trotzdem klar trennen.
- Manage ist das Kernprodukt der Plattform und Featured Product im Shop; Connect und Discover sind spätere Erweiterungen.
- Die Business-Software muss unabhängig vom Marktplatz Mehrwert bieten.
- Nutzerbedürfnisse stehen vor technischer Komplexität.
- Bestehende Funktionen und Dateien erhalten und sinnvoll weiterentwickeln.
- Markteintritt durch Pilotkunden validieren (langfristig).
- **Entscheidungsprinzip:** Nicht möglichst viele Funktionen bauen, sondern die richtigen Funktionen in der richtigen Reihenfolge.

### Wissensmanagement – Unterscheidung

Konsequent trennen zwischen: bestehenden Funktionen · tatsächlich getesteten Funktionen · verbindlich beschlossenen Anforderungen · vorläufigen Konzeptentscheidungen · geplanten Funktionen · optionalen Erweiterungen · offenen Entscheidungen.

**Nicht erfinden:** Kundendaten, Nutzerzahlen, Marktanteile, Wettbewerbsvorteile, Marktpreise, technische Implementierungen, Testergebnisse, sportliche Erfolge, Qualifikationen, rechtliche Freigaben, neue Geschäftsentscheidungen. Fiktive Beispieldaten sind erlaubt, müssen aber als solche erkennbar sein.

### Qualitätsprüfung

Ergebnisse werden geprüft auf: Vollständigkeit, technische Funktionsfähigkeit, Responsive Design, Nutzerführung, visuelle Konsistenz, Lesbarkeit, Farbkontraste, Produktnamen und Preise, Barrierearmut, Datenschutz, Sicherheit, Fehlerfreiheit, Erweiterbarkeit. Es wird offen gemeldet, welche Funktionen tatsächlich implementiert sind und welche nur visuell simuliert werden. **Es wird nie behauptet, Tests durchgeführt zu haben, die nicht ausgeführt wurden.**

---

## Änderungsvermerk (24.11.2026)

**Neu**

- Kap. 1, 2: Unterscheidung **Shop-first** (Weiterbildung) und **Software-first** (langfristig); Plattformarchitektur unverändert.
- Kap. 10: neues Sortiment (Manage ab 19 €/Monat, Tournament Planner 29 €, Rider Portfolio 49 €, Horse Portfolio 39 €, Social Media Kit 39 €, Equestrian Business Kit 99 €), drei Kategorien, neue Produktpriorisierung; Tarife Basic/Professional/Business als Teil von Manage.
- Kap. 13: neue Designstrategie; Heritage Modern und frühere Farbwelt nicht mehr verbindlich.
- Kap. 13.3, 18 (Ergänzung 24.11.2026): **Designentscheidung Atelier**, Variante A „Maison“ als Hauptauftritt, Variante B „Noir“ ergänzend kombinierbar (z. B. Unterseiten); Palette, Typografie, Bildsprache, Layout, Wortmarkenidee; Kap. 13.3 UX/UI wird zu 13.4.
- Kap. 14: Startseite auf acht Bereiche reduziert; neue Navigation (Vorschlag) und primäre Customer Journey bis Demo-Checkout.
- Kap. 16, 19: Schutz bestehender Dateien; aktualisierte Spannungen; Kap. 18 nach Ebenen gegliedert.

**Entfallen / ersetzt**

- Frühere Produkte (Turnierkostenrechner 19 €, Pferdeverwaltung und Kostendashboard 49 €, Stallmanagement-Paket 99 €, Individuelle Rechnungsvorlage 49 €) und die Dienstleistungspreise (Preise für Dienstleistungen sind nicht mehr festgelegt).
- Frühere Startseite mit 14 Abschnitten, Manage-zentrierte Startseitenlogik, Software-Tarife als zentraler Startseiteninhalt, Netzwerk/Marktplatz in der Hauptnavigation, Connect-/Discover-Teaser auf der Startseite.

**Unverändert erhalten:** Prototyp, Zielgruppen, Plattformmodule Manage/Connect/Discover mit Funktionsumfang, Wettbewerbsumfeld, SWOT, KI-Funktionen und Automatisierung, rechtliche Hinweise, Weiterbildungsanforderungen.

**Hinweis:** Der Stand vor der Änderung liegt in `_archiv_2026-11-24/`.

## Änderungsvermerk (26.11.2026, Neupositionierung Software-first)

- Kap. 1, 2.1, 2.2, 9.4: Positionierung als **Softwareunternehmen** (Kernprodukt EquiBill Manage, Shop ergänzend); Software-first auch im Weiterbildungsprojekt; Website-Claims aktualisiert.
- Kap. 10.3–10.5: Kategorien auf der Shop-Seite, Tarifvergleich auf `software.html`, Gewichtung Manage vs. Shop-Produkte, Startseiten-Teaser mit zwei Produkten.
- Kap. 14.1–14.4, 14.6: neuer Startseitenaufbau, Navigation, Unterseiten `software.html` und `shop.html`, zwei Customer Journeys.
- Unverändert: Plattformarchitektur, Sortiment und Preise, Designrichtung Atelier.
- Sicherung: `_archiv/_archiv_2026-11-26_vor-software-first/PROJECT_BRIEFING.md`.

## Änderungsvermerk (26.11.2026, Feinschliff Markenauftritt)

- Kap. 8, 14.2, 14.3: Norddeutschland nur noch interne Annahme, nicht in der Markenkommunikation; Über uns als Markengeschichte; FAQ aus der Hauptnavigation in den Fuß.
- Website: realistisches Software-Interface, Vorlagen-Mockups im Shop-Teaser, gebündelte Demo-Hinweise (Regeln in `CLAUDE.md` Kap. 6 und 7).
