# EquiBill – Projektbriefing

**The Equestrian Business Platform**
*Connecting horses, people & business.*

> Dieses Dokument ist die zentrale Wissensgrundlage für das Projekt EquiBill (Geschäftskonzept, Anforderungen, Entscheidungen).
> Verbindliche Arbeitsregeln stehen in `CLAUDE.md`, die priorisierte Planung in `ROADMAP.md`.
> **Wichtig:** Im Rahmen der Weiterbildung ist EquiBill ein **fiktives Unternehmen** mit fiktiven Angeboten, Profilen und Kundendaten.

## Statuslegende

Jede Aussage in diesem Dokument ist, wo es relevant ist, einem Status zugeordnet:

| Status | Bedeutung |
|---|---|
| **Beschlossen** | Verbindliche Entscheidung oder Anforderung |
| **Vorläufig** | Konzeptentscheidung, die noch validiert oder angepasst werden darf |
| **Geplant** | Für eine spätere Phase vorgesehen |
| **Optional** | Mögliche Erweiterung, nicht Pflicht |
| **Offen** | Noch nicht entschieden (siehe Kapitel 18) |
| **Ungeprüft** | Behauptung/Funktion, deren Stand noch nicht verifiziert ist |

---

## 1. Projektsteckbrief

| Punkt | Inhalt |
|---|---|
| Projektname | EquiBill *(Arbeitsname, Beschlossen für die Weiterbildung; finaler Name Offen)* |
| Arbeitstitel | The Equestrian Business Platform |
| Übergeordneter Claim | Connecting horses, people & business. |
| Produktclaim (Manage) | Weniger Büro. Mehr Pferd. |
| Alternative Headline | Dein Pferdebusiness. Einfach digital. |
| Branche | Reitsport, Digitalisierung, Software, Plattformökonomie |
| Geschäftsmodell | SaaS, E-Commerce, digitale Produkte, Dienstleistungen, professionelles Netzwerk, digitaler Marktplatz |
| Strategischer Ansatz | **Software-first** (Beschlossen) |
| Geografischer Fokus | Deutschland, zunächst Norddeutschland (Schleswig-Holstein, Hamburg, Niedersachsen) |
| Markteinstieg | Professioneller Spring- und Ausbildungsreitsport |
| Projektkontext | Weiterbildung zur KI-Managerin (DSP Academy), Baustein 3: KI-gestützte Webentwicklung mit Claude Code; geplanter Abschluss März 2027 |

---

## 2. Drei Ebenen: Prototyp, Weiterbildungsprojekt, Plattformvision

Diese drei Ebenen dürfen **nie vermischt** werden.

| Ebene | Was ist das? | Stand |
|---|---|---|
| **1. Bestehender Prototyp** | Lokale HTML-Anwendung für Abrechnung/Verwaltung (bis Version 3.0), ursprünglich für eine selbstständige Berufsreiterin im Springreitsport | Existiert; Funktionsumfang **ungeprüft**; bleibt zunächst **separat und unverändert** |
| **2. Aktuelles Weiterbildungsprojekt** | Marke, Demo-Onlineshop, Website (HTML-Startseite), später weitere Funktionen per Vibe Coding und Claude Code | **Aktuelle Priorität**; vollständig fiktiv |
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

## 6. Vision, Mission, Nutzenversprechen

**Vision:** EquiBill wird eine zentrale digitale Anlaufstelle für den professionellen Reitsport, die Pferde, Menschen und Geschäftsprozesse verbindet. Langfristig wird der gesamte Prozess zwischen Pferdebesitzer und Berufsreiter digital begleitet: von der Kundengewinnung über die Zusammenarbeit bis zu Verwaltung und Abrechnung.

**Mission:** Den professionellen Reitsport transparenter, effizienter, vernetzter und digitaler gestalten.

**Konzeptionelle Inspiration (keine Kopie; eigene Marke, Architektur und Oberfläche):** Lexware Office (Rechnungen/Geschäftsprozesse), LinkedIn (Profile, Qualifikationen, Referenzen), Airbnb (Angebote suchen, vergleichen, anfragen), branchenspezifische Reitsportsoftware (Pferde-, Stall-, Turnierverwaltung).

| Zielgruppe | Nutzenversprechen |
|---|---|
| **Berufsreiter** | Weniger Verwaltungsaufwand, professionelle Rechnungen, Überblick über Kosten und Umsätze, effizientere Prozesse, professionelle Außendarstellung, einfachere Neukundengewinnung |
| **Pferdebesitzer** | Transparente Kosten, übersichtliche Abrechnungen, einfachere Kommunikation, qualifizierte Berufsreiter finden, freie Berittplätze vergleichen, bessere Entscheidungsgrundlagen |
| **Pferdebetriebe** | Zentrale Verwaltung, effiziente Prozesse, Überblick über Pferde/Kunden/Mitarbeiter, bessere Kapazitätsplanung, professionelle Präsentation, neue Kunden |

---

## 7. Problemstellung

**Berufsreiter:** manuelle Rechnungen und Kosten; individuelle Abrechnungen pro Pferd und Preisvereinbarungen pro Kunde; Turnierkosten verursachen Aufwand; Fremdkosten müssen korrekt zugeordnet werden; unübersichtliche Zahlungseingänge und offene Forderungen; keine zentrale Übersicht (Pferde, Kunden, Auslastung, Kosten, Umsatz); Neukunden meist über Empfehlungen; eigene Website aufwendig; freie Berittkapazitäten nicht zentral vermarktbar.

**Pferdebesitzer und Züchter:** Reitersuche über persönliche Kontakte; freie Plätze nicht zentral sichtbar; Anbieter schwer vergleichbar; Preise und Kapazitäten intransparent; Qualifikationen und Erfolge aus vielen Quellen; Kommunikation über verschiedene Kanäle; Kosten und Abrechnungen teils unübersichtlich.

**Pferdebetriebe:** getrennte Systeme für Verwaltung, Kommunikation und Rechnungen; fehlende Automatisierung; schwierige Kapazitätsplanung; unübersichtliche Prozesse; hoher organisatorischer Zeitaufwand.

---

## 8. Zielgruppen

| Segment | Gruppen |
|---|---|
| **Primär** (Kernprodukt Manage) | Selbstständige Berufsreiter, Bereiter, Spring- und Dressurreiter, Pferdewirtschaftsmeister, Ausbildungsreiter, Ausbildungs- und Turnierställe, kleine und mittelständische Pferdebetriebe |
| **Sekundär** (wächst mit Connect/Discover) | Pferdebesitzer, Züchter, Gestüte, Trainer, Stallbetreiber, Pferdeinvestoren, Verkaufsställe |
| **Später möglich** | Pferdetransporteure, Hufschmiede, Tierärzte, Pferdephysiotherapeuten, weitere Dienstleister |

**Regionen:** zunächst Deutschland/Norddeutschland; langfristig DACH, Europa, international.

---

## 9. Software-first-Strategie und Plattformarchitektur (Beschlossen)

**Verbindliche Modulreihenfolge:**

1. **Modul 1: EquiBill Manage** – Business-Software (Kernprodukt)
2. **Modul 2: EquiBill Connect** – Professionelles Netzwerk
3. **Modul 3: EquiBill Discover** – Digitaler Marktplatz
4. **Modulübergreifend: EquiBill Shop** – zentrale Vertriebsebene

**Begründung:** Manage bietet auch ohne große Nutzerbasis konkreten Mehrwert. Ein Marktplatz funktioniert nur mit genügend Anbietern und Nachfragern. Daher werden zunächst Berufsreiter und Betriebe über die Software gewonnen; diese erstellen später Profile und veröffentlichen freie Kapazitäten und bilden so die Anbieterseite des Marktplatzes. Der Shop ermöglicht schon früh den Verkauf von Abonnements, digitalen Produkten und Dienstleistungen. Connect und Discover sind Erweiterungen, **keine Voraussetzung** für den Nutzen von Manage.

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

**Monetarisierung:** monatliche/jährliche Abos, digitale Einzelprodukte, Zusatzmodule, Onboarding, Schulungen, individuelle Dienstleistungen.

### 9.2 EquiBill Connect (Modul 2)

Professionelles digitales Netzwerk für Berufsreiter, Trainer und Pferdebetriebe. **Claim:** Dein Profil. Deine Erfolge. Dein Netzwerk. **Ziel:** Sichtbarkeit verbessern und eine qualifizierte Anbieterdatenbank aufbauen; öffentliches Profil als digitale Visitenkarte und Portfolio.

- **Profilinhalte (Geplant):** Name, Profil-/Titelbild, Standort, Kurzbeschreibung, Berufserfahrung, Ausbildung, Qualifikationen, Trainerlizenzen, Disziplin, Spezialisierung, Leistungsklasse, sportliche Erfolge, Turnierergebnisse, Referenzen, Fotos, Videos, Social Links, Leistungen, Preise, verfügbare Berittplätze, Stallinfos/-ausstattung, Kontakt, Bewertungen, Verifizierungsstatus. Auch Betriebe erhalten Unternehmensprofile.
- **Langfristig:** verifizierte Profile, Qualifikationsnachweise, Referenzmanagement, Profilstatistiken, Netzwerkfunktionen, Kontaktanfragen, Favoriten, persönliche Profil-URL, digitale Visitenkarte, KI-Profiloptimierung, Integration externer Sportdaten.
- **Einschränkung:** Externe Sportdatenbanken nur nach Prüfung von Schnittstellen, Nutzungsrechten und Datenschutz.
- **Monetarisierung:** kostenloses Basisprofil, Premium-Profil, erweiterte Präsentation, Statistiken, hervorgehobene Profile, Profil-Setup, digitale Visitenkarten.

### 9.3 EquiBill Discover (Modul 3)

Digitaler Marktplatz für Suche und Vermittlung professioneller Reitsportdienstleistungen; UX konzeptionell an Airbnb orientiert. **Claim:** Die richtigen Menschen für dein Pferd. *(Alternative: Great horses deserve the right people.)* **Ziel:** Pferdebesitzer, Züchter und Berufsreiter/Betriebe gezielt zusammenbringen.

- **Angebotskategorien:** Berittplätze, Stallplätze, Ausbildungsplätze, Jungpferdeausbildung, Turniervorstellung, Verkaufsberitt, Berufsreiter, Trainer, Ausbildungsbetriebe, Pensionsställe, Lehrgänge.
- **Suche/Filter:** Standort, PLZ, Umkreis, Land, Disziplin, Ausbildungsstand, Spezialisierung, Leistungsklasse, Preis/Budget, Kapazitäten, Starttermin, Stallausstattung, Leistungsumfang, Qualifikationen, Bewertungen, Referenzen.
- **Darstellung:** Ergebnisliste, Karte, Angebotskarten, Detailseiten, Favoriten, Merkliste, Vergleich, Kontakt- und Platzanfragen.
- **Langfristig:** KI-Matching, Verfügbarkeitskalender, Benachrichtigungen, gespeicherte Suchen, Empfehlungen, Kommunikation, Buchungsanfragen, digitale Verträge, Bewertungen, verifizierte Angebote.
- **Verbindlich:** Eine Kontakt- oder Platzanfrage ist **keine** verbindliche Buchung. Buchungs-, Zahlungs- und Vertragsabwicklung werden erst in späteren Phasen geprüft.
- **Monetarisierung:** Premium-Inserate, hervorgehobene Angebote, mehr Sichtbarkeit, ggf. Premium-Suche; perspektivisch Vermittlungsprovisionen. **Zu Beginn keine verpflichtende Provision.**

### 9.4 EquiBill Shop (modulübergreifend)

Kein isoliertes viertes Produkt, sondern die Vertriebsebene der Plattform: Software-Abos, digitale Produkte, Softwaremodule, Premium-Profile und -Inserate, Schulungen, Onboarding, individuelle Dienstleistungen. Der Shop ist **Schwerpunkt der aktuellen Weiterbildungsaufgabe** und soll unabhängig von einem funktionierenden Netzwerk oder Marktplatz umsetzbar sein.

---

## 10. Geschäftsmodell, Sortiment, Tarife

**Erlösmodelle:** (1) SaaS-Abos, (2) digitale Einzelprodukte (Tools, Rechner, Vorlagen), (3) Dienstleistungen (Beratung, Schulung, Einrichtung, Anpassung), (4) Premium-Funktionen für Profile und Inserate, (5) Vermittlung/Provision (erst nach erfolgreichem Marktplatzaufbau prüfen).

### 10.1 Vorläufiges Shopsortiment (Vorläufig – alle Preise sind Konzept- und Demo-Preise)

**Software-Abonnements (EquiBill Manage)**

| Produkt | Preis |
|---|---:|
| EquiBill Basic | 19 €/Monat |
| EquiBill Professional | 39 €/Monat |
| EquiBill Business | 79 €/Monat |

**Digitale Einzelprodukte**

| Produkt | Preis |
|---|---:|
| Digitaler Turnierkostenrechner | 19 € |
| Pferdeverwaltung und Kostendashboard | 49 € |
| Digitales Stallmanagement-Paket | 99 € |
| Individuelle Rechnungsvorlage | 49 € |

**Dienstleistungen**

| Produkt | Preis |
|---|---:|
| Online-Softwareschulung | 89 € |
| Persönliches Onboarding | 99 € |
| Professionelles Profil-Setup | 99 € |
| Softwareeinrichtung und Datenmigration | 149 € |
| Individuelle Softwareanpassung | Auf Anfrage |

**Netzwerk und Marktplatz** *(Geplant, zunächst nur als Erweiterung gekennzeichnet)*

| Produkt | Preis |
|---|---:|
| Basis-Reiterprofil | Kostenlos |
| Premium-Reiterprofil | 19 €/Monat |
| Premium-Berittplatz-Inserat (30 Tage) | 14,90 € |
| Hervorgehobenes Reiterprofil (30 Tage) | 19,90 € |

Zahlungsbereitschaft, steuerliche Preisgestaltung, Leistungsabgrenzung und Tragfähigkeit sind **noch nicht validiert**.

### 10.2 Vorgeschlagene Software-Tarife (Vorläufig, Grenzen nicht final)

| Tarif | Zielgruppe | Leistungsumfang |
|---|---|---|
| **Basic** – 19 €/Monat | Selbstständige Bereiter mit kleinem Bestand | Bis 5 Pferde; Pferde- und Kundenverwaltung; Kostenerfassung; Monatsabrechnung; PDF-Rechnungen; einfaches Dashboard |
| **Professional** – 39 €/Monat | Berufsreiter mit mehreren Pferden/Kunden | Bis 25 Pferde; alle Basic-Funktionen; Sammelrechnungen; Turniermanagement und -kosten; Belegmanagement; KI-Belegerkennung; Zahlungserinnerungen; erweiterte Auswertungen |
| **Business** – 79 €/Monat | Größere Ausbildungsställe, Pferdebetriebe | Pferdeanzahl gemäß später festgelegtem Tarif; alle Professional-Funktionen; mehrere Benutzer; Rollen/Rechte; Kundenportal; Management-Dashboard; erweiterte Automatisierungen und Reports |

Die Software-Abos sollen unabhängig von Netzwerk und Marktplatz angeboten werden können.

### 10.3 Priorität im Demo-Shop der Weiterbildung (Beschlossen)

1. EquiBill Basic – 19 €/Monat
2. EquiBill Professional – 39 €/Monat
3. EquiBill Business – 79 €/Monat
4. Digitaler Turnierkostenrechner – 19 €
5. Pferdeverwaltung und Kostendashboard – 49 €
6. Digitales Stallmanagement-Paket – 99 €
7. Persönliches Onboarding – 99 €

Damit sind drei Produkttypen abgedeckt: Software-Abo, digitales Einzelprodukt, Dienstleistung. Spätere Shop-Funktionen: Produktübersicht, Detailseiten, Kategorien, Preisfilter, Suche, Warenkorb, Checkout, Kundenkonto, Abo-Verwaltung, Bestellübersicht, digitale Downloads, Dienstleistungsbuchung.

### 10.4 Hypothetisches Umsatzszenario (nur Veranschaulichung, **keine Prognose**)

| Tarif | Beispielkunden | Monatlicher Umsatz |
|---|---:|---:|
| Basic – 19 € | 30 | 570 € |
| Professional – 39 € | 50 | 1.950 € |
| Business – 79 € | 20 | 1.580 € |
| **Gesamt** | **100** | **4.100 €** |

Annualisiert: 49.200 €. Nicht enthalten: digitale Produkte, Onboarding, Premium-Profile, Inserate. Kosten für Entwicklung, Hosting, KI-APIs, Support, Marketing, Zahlungsabwicklung, Steuern usw. sind separat zu betrachten.

---

## 11. Markt, USP und SWOT

### 11.1 USP (Vorläufig, noch zu validieren)

Kombination aus branchenspezifischer Business-Software, spezialisierter Rechnungsstellung, Turnierkostenmanagement, Pferde- und Kundenverwaltung, professionellen Reiterprofilen, sportlichen Referenzen, aktuellen Berittkapazitäten, Beritt- und Stallplatzvermittlung, digitaler Kundenkommunikation, KI-Funktionen und langfristiger digitaler Geschäftsbeziehung.

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

**Besonders relevante Benchmarks:** Equicty und Equimondo (Funktionsumfang/Preise von Manage), Board & Stable (Kombination Marktplatz + Software), EquiManage (Verwaltung + Buchung), Pferde.expert (Vermittlung im deutschen Markt), rimondo (Sportdaten, Profile, Ergebnisse). Branchenübergreifend: Lexware Office, Airbnb, LinkedIn.

**Es ist keine vollständig unbesetzte Marktlücke nachgewiesen.**

### 11.3 SWOT

| | |
|---|---|
| **Stärken** | Bestehender Prototyp; realer Anwendungsfall; direkter Zugang zur Zielgruppe; Marketing-/Designexpertise; Branchenfokus; Software-first; Nutzen unabhängig vom Marktplatz; Verwaltung + Kundengewinnung kombiniert; wiederkehrende Einnahmen möglich |
| **Schwächen** | Keine Nutzerbasis; begrenzte Ressourcen; sehr große Vision; Zahlungsbereitschaft nicht validiert; keine externen Datenschnittstellen; keine produktionsreife SaaS-Infrastruktur; keine etablierte Marke |
| **Chancen** | Digitalisierung administrativer Prozesse; KI-Branchenlösungen; SaaS-Umsätze; Spezialisierung; Netzwerkaufbau; Kooperationen mit Reitsportorganisationen; internationale Skalierung; Cross-Selling zwischen Modulen |
| **Risiken** | Etablierte Wettbewerber; hohe Wechselhürden; Vermittlung über persönliche Netzwerke; Datenschutz und Rechnungsrecht; zweiseitiger Marktplatz schwer aufzubauen; technische Komplexität; Betriebskosten; geringe Zahlungsbereitschaft einzelner Gruppen |

---

## 12. KI und Automatisierung

**Grundsatz:** KI löst konkrete Probleme und ist kein reines Marketingargument. Nicht jede Funktion braucht KI. KI-Funktionen müssen nachvollziehbar und kontrollierbar sein. **KI darf keine Rechnungsbeträge erfinden und keine verbindlichen Buchungen ohne Validierung vornehmen; Finanzdaten müssen vor der Verarbeitung überprüfbar sein. KI darf keine sportlichen Erfolge oder Qualifikationen erfinden.**

| Priorität | Modul | Funktionen (alle Geplant) |
|---|---|---|
| 1 | Manage | **Belegerkennung** (Beträge, Datum, Kategorie, Zuordnung zu Pferd/Kunde, Dubletten); **Business-Assistent** (Kostenentwicklung, Auffälligkeiten, Auslastung, Reports, Wirtschaftlichkeit, Empfehlungen); **Dokumentenassistent** (Zusammenfassen, Extrahieren, Abrechnungsdaten vorbereiten, Turnierinfos) |
| 2 | Connect | **Profilassistent** (Profiltexte, Leistungsbeschreibungen, Inserate, Unternehmensprofile, Übersetzungen) |
| 3 | Discover | **Pferd-Reiter-Matching** per natürlicher Sprache auf Basis strukturierter Daten, mit nachvollziehbarer Begründung (Beispielanfrage: erfahrener Springreiter im Umkreis von 100 km um Hamburg, 5-jähriger Wallach, Budget 1.200 €/Monat) |
| – | Übergreifend | Produktberater, Tarifberatung, Kundenservice, Onboarding-Assistent, Marketing, Newsletter, Social-Media-Content, personalisierte Kommunikation |

**Automatisierung mit n8n (Geplant):** Registrierung/Onboarding, CRM-Anbindung, Rechnungsversand, Zahlungserinnerungen, monatliche Managementreports, Datenübertragung, Belegverarbeitung, E-Mail-Kommunikation, Profilvervollständigung, Weiterleitung von Kontaktanfragen, Benachrichtigungen bei passenden Berittplätzen, Abo-Kommunikation, Feedback, Support. Automatisierungen müssen sinnvoll, nachvollziehbar und technisch kontrollierbar sein.

---

## 13. Marke, Corporate Design, UX/UI

### 13.1 Marke

- **Markenarchitektur (Beschlossen für die Weiterbildung):** EquiBill – The Equestrian Business Platform, mit EquiBill Manage, Connect, Discover, Shop.
- **Alternative Dachmarken (diskutiert, Offen):** EquiOne, EquiHub, EquiFlow, EquiConnect, EquiSphere, EquiLink, EquiOffice, StableFlow. Denkbar später: Dachmarke mit EquiBill als Softwareprodukt. Domain- und Markenrechte sind **nicht geprüft**.
- **Werte:** Professionalität, Vertrauen, Transparenz, Qualität, Innovation, Effizienz, Verlässlichkeit, Branchenkompetenz, Einfachheit.
- **Persönlichkeit:** modern, kompetent, vertrauenswürdig, hochwertig, nahbar; spricht professionelle Sportreiter und qualitätsbewusste Pferdebesitzer an.

### 13.2 Designrichtung (Beschlossen als Richtung, Details Vorläufig)

Premium, minimalistisch, modern, hochwertig, großzügig, luftig, editorial, nutzerzentriert, emotional aber nicht verspielt, professionelle SaaS-Ästhetik, authentische Reitsport-Bildwelt. Visuelle Referenzen: moderne SaaS-Plattformen, hochwertige Business-Software, Airbnb, Portfolio-Websites, Premium-Reitsportmarken, Editorial-Webdesign.

**Die Website soll nicht wirken wie:** ein klassischer Pferdezubehörshop, eine veraltete Vereinsseite, ein generisches Schulprojekt, eine generische KI-Website, eine überladene Software oder eine zusammenhanglose Funktionssammlung.

**Vorläufige Farbwelt** (Designidee, keine Festlegung):

| Farbe | Hex |
|---|---|
| Forest Green | #243D34 |
| Sage Green | #9EA995 |
| Sand | #E1D5C3 |
| Off-White | #F7F5F0 |
| Charcoal | #222222 |

Weitere Designrichtungen dürfen mit Begründung entwickelt werden; Kontraste sind zu prüfen (z. B. Sage Green auf Off-White ist für Fließtext voraussichtlich zu kontrastarm).

**Typografie:** klare, gut lesbare Sans-Serif; optional elegante Serife für ausgewählte Headlines; klare Hierarchie; großzügige Zeilenabstände; keine dekorativen Schriften; zunächst **lokal verfügbare Systemschriften** (keine Google Fonts, gemäß Unterrichtsvorgabe).

**Bildsprache:** professioneller Spring- und Dressursport, hochwertige Sportpferde, authentische Reiterporträts, moderne Ausbildungsbetriebe und Anlagen, natürliche Farben, Editorial-Fotografie, Detailaufnahmen, professionelle Software-Mockups, authentische Einblicke in den Berufsreiteralltag.
**Vermeiden:** Ponyhof-Kitsch, übermäßige Pferdesymbole, generische Stockfotos, unnötige Farbverläufe, überladene Oberflächen, generische KI-Ästhetik, unnötige Animationen.

### 13.3 UX/UI-Prinzipien

Mobile First, responsive, intuitive Navigation, klare Informationshierarchie, großzügige Weißräume, hochwertige Kartenlayouts, einheitliche Komponenten, konsistente Abstände, klare Handlungsaufforderungen, gute Lesbarkeit, ausreichende Kontraste, Barrierearmut, verständliche Fehlermeldungen, wenige Klicks, klare Nutzerführung, konsistentes Designsystem. Verständlich auch für wenig technikaffine Berufsreiter.

---

## 14. Website und Customer Journey

### 14.1 Ausrichtung

Zunächst professionelle **Software- und E-Commerce-Website**; Manage steht im Mittelpunkt der Startseite und der ersten Customer Journey; Connect und Discover werden als **geplante Erweiterungen** vorgestellt. Aufgaben: Marke positionieren, Software verständlich präsentieren, Problem aufzeigen, Nutzen vermitteln, Abos/Produkte/Dienstleistungen anbieten, Vertrauen aufbauen, zur Produktauswahl führen, Plattformvision vermitteln. Der Shop darf nicht von einem funktionierenden Marktplatz abhängen.

### 14.2 Hauptnavigation (Vorläufig, darf vereinfacht werden)

Software · Funktionen · Shop · Preise · Netzwerk · Marktplatz · Über uns · Anmelden

Primärer CTA: „Jetzt starten“. Alternativer CTA: „Software entdecken“. Netzwerk und Marktplatz müssen als **geplante Erweiterungen** erkennbar sein.

### 14.3 Langfristige Zielarchitektur (nicht aktueller Umfang)

- **Allgemein:** Startseite, Softwareübersicht, Funktionsübersicht, Produktvergleich, Preise, Über uns, FAQ, Kontakt, Impressum, Datenschutz
- **Shop:** Übersicht, Software-Abos, Digitale Produkte, Dienstleistungen, Produktdetailseiten, Warenkorb, Checkout, Bestellübersicht
- **Manage:** Login, Registrierung, Dashboard, Pferde-/Kunden-/Kosten-/Rechnungs-/Turnier-/Belegverwaltung, Kundenportal, Einstellungen
- **Connect:** Reiter- und Betriebsprofile, Profilverwaltung, Referenzen, sportliche Erfolge, Netzwerkfunktionen
- **Discover:** Marktplatz, Reiter-/Berittplatz-/Stallplatzsuche, Suchergebnisse, Karte, Angebotsdetails, Favoriten, Kontaktanfragen

### 14.4 Aufbau der ersten Startseite (Vorschlag; darf für die erste HTML-Version reduziert werden)

1. Header (Wortmarke, Navigation, Login, Shopzugang, Warenkorb als vorgesehene Funktion, primärer CTA)
2. Hero („Dein Pferdebusiness. Einfach digital.“ oder „Weniger Büro. Mehr Pferd.“; Subheadline: „Verwalte deine Pferde, automatisiere deine Abrechnungen und organisiere dein Reitsportbusiness – einfach, professionell und an einem Ort.“; CTA Software entdecken / Shop ansehen; Software-Mockup)
3. Problem und Nutzen
4. EquiBill Manage (Funktionskarten: Pferde, Kunden, Rechnungen, Turniere, Kosten, Analytics; optional Dashboard-Vorschau mit fiktiven Daten)
5. Software-Abonnements (drei Tarife, vergleichbar)
6. Digitale Produkte und Dienstleistungen (Turnierkostenrechner 19 €, Kostendashboard 49 €, Stallmanagement-Paket 99 €, Onboarding 99 €)
7. So funktioniert EquiBill (Pferde/Kunden erfassen → Kosten dokumentieren → Monatsabrechnung → Rechnungen verwalten → Entwicklung analysieren)
8. Plattformvision (Manage → Connect → Discover; Connect/Discover als geplant gekennzeichnet)
9. Connect-Teaser (fiktive Profile als Vorschau)
10. Discover-Teaser (fiktive Angebote/Suchmaske als Vorschau)
11. Über uns (Bonus der Aufgabe)
12. FAQ
13. Abschluss-CTA („Mach dein Pferdebusiness fit für die Zukunft.“ / „Jetzt Software entdecken“)
14. Footer (Navigation, Produkte, Kontakt, Impressum- und Datenschutz-**Platzhalter**, deutlich sichtbarer **Demo-Hinweis**)

### 14.5 Customer Journey

**Primär – Berufsreiter (Vorrang in der ersten Phase):** entdeckt EquiBill → erkennt sein Verwaltungsproblem → informiert sich über Manage → prüft Funktionen und Preise → wählt Produkt/Abo → registriert sich bzw. durchläuft Demo-Checkout → startet Pferde- und Kundenverwaltung → nutzt Rechnungsstellung → erstellt später ein Reiterprofil → veröffentlicht freie Kapazitäten → gewinnt über den Marktplatz Kunden.

**Sekundär – Pferdebesitzer:** entdeckt EquiBill → sucht langfristig einen Reiter → vergleicht Profile, Referenzen, Angebote → sendet Kontaktanfrage → Zusammenarbeit entsteht → Reiter verwaltet sie über EquiBill → Besitzer erhält langfristig Zugang zu Rechnungen, Kosten, Informationen.

---

## 15. Weiterbildungsaufgabe Tag 42 – „Shop-Idee, Projekt und erster HTML-Entwurf“

Quelle: offizielle Aufgabenstellung (KI-Manager, Tag 42, Vibe Coding I). Vorgabe: Start mit Sonnet 5.5 und Aufwand „Mittel“; selbstständiges Arbeiten; **alles ist erfunden** (kein echtes Unternehmen, keine echte Marke, keine echten Kundendaten). Ab dem Folgetag arbeitet Claude Code im selben Ordner weiter.

| Teil | Aufgabe | Status im Projekt |
|---|---|---|
| **A1** | Brainstorming im normalen Chat ohne Projekt: Shopname, mind. drei Produkte mit Preis | Inhaltlich durch dieses Briefing abgedeckt (Name: EquiBill; Sortiment: Kapitel 10) |
| **A2** | Text für Projektanweisungen (Rolle und Ziel, Arbeitsweise, Gestaltung, Pflicht, Ton) plus eigene Wünsche; Konzept und Anweisungen als Datei zum Download | **Aktuelle Arbeit:** `PROJECT_BRIEFING.md`, `CLAUDE.md`, `ROADMAP.md` |
| **B1** | Ordner mit Shopnamen anlegen, Unterordner `website`, Datei aus A2 im Shop-Ordner speichern | Offen (manuell durch Teilnehmerin) |
| **B2** | Claude-Projekt anlegen (Titel, Beschreibung, Sichtbarkeit Privat), Anweisungen einfügen, Ordner verbinden oder Datei hochladen | Offen |
| **C1** | Neuer Chat im Projekt: Beratung zu Design, Farben, Aufbau; HTML-Startseite in `website` speichern | Offen – **erst nach Abstimmung der Design- und Strukturentscheidungen** |
| **C2** | Mehrere Optimierungsrunden, pro Runde **eine** Änderung; Kontrast, Preisangaben, Demo-Hinweis prüfen; Impressum/Datenschutz bleiben Platzhalter; Design-Teil der Präsentation durchgehen (außer Google Fonts) | Offen |
| **Bonus** | Abschnitt „Über uns“ | Offen |

**Fertig, wenn:** das Projekt Anweisungen und Konzept kennt und die Startseite in `website` liegt. Die Aufgabe verlangt **keine** funktionierende Plattform, keine produktive Datenbank und keinen echten Zahlungsprozess.

---

## 16. Technische Anforderungen und Projektstruktur

### 16.1 Erste Entwicklungsphase (Beschlossen)

HTML5, CSS, JavaScript nur wenn erforderlich; semantisches HTML; responsive; saubere Komponentenstruktur; aussagekräftige Dateinamen; möglichst wenige externe Abhängigkeiten; lokal ausführbar; fiktive Daten; **keine echte Zahlungsintegration; keine produktive Datenverarbeitung**; lokale Systemschriften.

### 16.2 Langfristige Anforderungen (Geplant)

Modulare Architektur, wiederverwendbare Komponenten, sichere Authentifizierung, Backend, Datenbank, API-Struktur, Rollen/Rechte, Mandantentrennung, Skalierbarkeit, Sicherheit, Testbarkeit, Versionskontrolle, Dokumentation, Monitoring.

**Stack, Backend, Datenbank, Hosting und Zahlungsanbieter sind nicht entschieden.** Nicht vorschnell wählen; berücksichtigen: Projektumfang, Lernziele, Kosten, Wartbarkeit, Skalierbarkeit, Datenschutz, Betrieb, technische Kenntnisse der Initiatorin.

### 16.3 Projektstruktur

```
EquiBill/
├── PROJECT_BRIEFING.md
├── CLAUDE.md
├── ROADMAP.md
├── Tag42_Aufgabe.pdf        (optional, Aufgabenstellung)
└── website/
    └── index.html           (entsteht erst in Teil C)
```

Erweiterung erst bei Bedarf (z. B. `assets/`, `images/`, `styles/`, `scripts/`, `docs/`, `data/`, `tests/`). Keine unnötig komplexe Architektur vorab. Der bestehende Prototyp liegt **außerhalb** dieser Struktur, bis eine Integrationsstrategie existiert.

---

## 17. Datenschutz, Sicherheit, rechtliche Anforderungen

**Weiterbildung:** ausschließlich fiktive Daten; keine echten Kundendaten, Zugangsdaten oder vertraulichen Rechnungsinformationen in Demo-Anwendungen. Fiktive Daten müssen als solche erkennbar sein.

**Geheimnisse:** API-Schlüssel, Passwörter und Zugangsdaten gehören **nie** in Code oder auf GitHub, sondern in `.env`-Dateien, die in `.gitignore` stehen.

**Vor einem produktiven Betrieb zu prüfen:** DSGVO, Datenschutz durch Technikgestaltung, Rollen/Zugriffe, Authentifizierung, Verschlüsselung, sichere Dokumentenspeicherung, Mandantentrennung, Backup/Wiederherstellung, Löschkonzepte, Aufbewahrungspflichten, Rechnungsrecht, Umsatzsteuer, GoBD, E-Rechnung, Zahlungsabwicklung, Plattform- und Vermittlungsbedingungen, Vertragsrecht, Urheber- und Bildrechte, externe Sportdaten, Markenrechte, KI-Regulierung.

**Es wird keine rechtliche oder steuerliche Konformität behauptet, solange sie nicht fachlich geprüft wurde.**

---

## 18. Offene Entscheidungen

Finaler Markenname · Dachmarkenarchitektur · Marken- und Domainprüfung · finales Corporate Design, Farbwelt, Logo, Typografie · quantitative Marktanalyse und Marktgröße · Zielgruppeninterviews · Validierung der Zahlungsbereitschaft · finale Tarifstruktur und -grenzen · technischer Stack · Datenbankarchitektur · Hosting · Authentifizierung · Integration des Prototyps · Zahlungsanbieter · externe Schnittstellen · Umfang des ersten produktiven MVP · Verifizierungsverfahren für Berufsreiter · Bewertungs- und Moderationskonzept · rechtliche und steuerliche Prüfung.

Entscheidungen werden schrittweise getroffen und hier dokumentiert. Vorläufige Annahmen werden nicht ungefragt als verbindlich behandelt.

---

## 19. Bekannte Spannungen und Verbesserungspotenziale (zur Diskussion, nicht beschlossen)

| # | Beobachtung | Empfehlung |
|---|---|---|
| 1 | **Shop-Doppelung:** „Pferdeverwaltung und Kostendashboard“ (49 €) überschneidet sich inhaltlich mit EquiBill Basic/Professional (Verwaltung, Dashboard) und kann Abos kannibalisieren. | Im Demo-Shop klar abgrenzen (z. B. Einmal-Tool als Excel-/Vorlagenlösung ohne Software-Zugang) oder umbenennen. |
| 2 | **Navigation vs. Software-first:** „Netzwerk“ und „Marktplatz“ in der Hauptnavigation können suggerieren, dass diese Module bereits nutzbar sind. | In der Navigation mit „Bald“/„Geplant“ kennzeichnen oder in Footer/Vision-Abschnitt verlagern. |
| 3 | **Premium-Produkte ohne Funktion:** Premium-Reiterprofil, Inserate und Profil-Setup im Sortiment gehören zu nicht existierenden Modulen. | Im Demo-Shop nicht als kaufbar darstellen (Priorisierung in 10.3 beachtet dies bereits). |
| 4 | **Tarifgrenzen:** Business „unbegrenzt“ vs. „gemäß später festgelegtem Tarif“ ist uneindeutig; „KI-Belegerkennung“ in Professional ist ein Versprechen, das in der Demo nur simuliert wäre. | Auf der Website als „geplant“ kennzeichnen; Tarifgrenzen als Demo-Annahme markieren. |
| 5 | **Preisniveau ungeprüft:** Die Preise sind nicht gegen Equicty/Equimondo u. a. validiert. | Wettbewerbspreise vor realer Vermarktung recherchieren; für die Demo reicht der Hinweis „Demo-Preise“. |
| 6 | **Prototypdaten:** Der Prototyp könnte reale Kunden- oder Rechnungsdaten enthalten. | Niemals in Projektordner/GitHub übernehmen; nur anonymisierte, erfundene Daten verwenden. |
| 7 | **Farbkontraste:** Sage (#9EA995) auf hellen Flächen ist als Textfarbe kritisch. | Sage nur für Flächen/Akzente, Text in Forest Green oder Charcoal; Kontraste (WCAG AA) prüfen. |
| 8 | **Umfang der Startseite:** 14 Abschnitte sind für die erste Version groß. | Reduzierter Pflichtumfang siehe `ROADMAP.md`. |

---

## 20. Leitprinzipien

- Manage ist das Kernprodukt; Connect ist die erste, Discover die darauf aufbauende Erweiterung; der Shop ist die Vertriebsebene.
- Die Business-Software muss unabhängig vom Marktplatz Mehrwert bieten.
- Nutzerbedürfnisse stehen vor technischer Komplexität.
- Bestehende Funktionen erhalten und sinnvoll weiterentwickeln.
- Markteintritt durch Pilotkunden validieren.
- **Entscheidungsprinzip:** Nicht möglichst viele Funktionen bauen, sondern die richtigen Funktionen in der richtigen Reihenfolge.

### Wissensmanagement – Unterscheidung

Konsequent trennen zwischen: bestehenden Funktionen · tatsächlich getesteten Funktionen · verbindlich beschlossenen Anforderungen · vorläufigen Konzeptentscheidungen · geplanten Funktionen · optionalen Erweiterungen · offenen Entscheidungen.

**Nicht erfinden:** Kundendaten, Nutzerzahlen, Marktanteile, Wettbewerbsvorteile, Marktpreise, technische Implementierungen, Testergebnisse, sportliche Erfolge, Qualifikationen, rechtliche Freigaben. Fiktive Beispieldaten sind erlaubt, müssen aber als solche erkennbar sein.

### Qualitätsprüfung

Ergebnisse werden geprüft auf: Vollständigkeit, technische Funktionsfähigkeit, Responsive Design, Nutzerfreundlichkeit, visuelle Konsistenz, Lesbarkeit, Farbkontraste, Barrierearmut, Datenschutz, Sicherheit, Fehlerfreiheit, Erweiterbarkeit. Es wird offen gemeldet, welche Funktionen tatsächlich implementiert sind und welche nur visuell simuliert werden. **Es wird nie behauptet, Tests durchgeführt zu haben, die nicht ausgeführt wurden.**
