---
title: "Guida Definitiva ad AGENTS.md: Come Istruire i tuoi Agenti AI \"con i crismi\""
description: "Nel panorama dello sviluppo software moderno, sta emergendo un nuovo standard: il file AGENTS.md. Se il file README.md è scritto per gli esseri umani, l'AGENTS.md è a tutti gli effetti un \"README per gli agenti AI\"\n. Si tratta di uno strato di configurazione fondamentale che si posiziona tra le istruzioni di base del modello e il tuo codice sorgente, definendo il comportamento dell'agente all'interno del repository"
pubDate: 2026-03-10
author: "Alessandro"
tags: ["ai", "tech", "agentic ai"]
---

Nel panorama dello sviluppo software moderno, sta emergendo un nuovo standard: il file AGENTS.md. Se il file README.md è scritto per gli esseri umani, l'AGENTS.md è a tutti gli effetti un "README per gli agenti AI"
. Si tratta di uno strato di configurazione fondamentale che si posiziona tra le istruzioni di base del modello e il tuo codice sorgente, definendo il comportamento dell'agente all'interno del repository
.
Tuttavia, scrivere un file AGENTS.md efficace richiede precisione: un file scritto male può confondere l'agente, diventare un incubo di manutenzione e sprecare inutilmente "token"
. Ecco i requisiti e le migliori pratiche per crearlo secondo i più alti standard professionali.
### 1. Il Principio del "Budget di Istruzioni"
Il primo requisito fondamentale è la sinteticità. I modelli di frontiera più avanzati riescono a seguire coerentemente circa 150-200 istruzioni; superata questa soglia, le prestazioni degradano
.
Meno è meglio: Ogni token presente nel file AGENTS.md viene caricato in ogni singola richiesta, indipendentemente dalla sua rilevanza per il compito specifico
. Un file troppo gonfio riduce lo spazio disponibile per le istruzioni specifiche del compito e distrae l'agente
.
L'ideale è il minimo indispensabile: Le fonti suggeriscono di essere spietati nel tagliare i contenuti, mantenendo solo ciò che è essenziale per ogni singola sessione
.
### 2. Requisiti Tecnici Essenziali
Un file AGENTS.md "con i crismi" deve contenere almeno tre elementi chiave:
Descrizione del progetto in una frase: Funziona come un prompt basato sul ruolo (es: "Un'applicazione web per la gestione di inventari costruita con Next.js") e ancora ogni decisione presa dall'agente
.
Specifica del Package Manager: Fondamentale se non si usa npm (es. pnpm o bun). Senza questa informazione, l'agente potrebbe generare comandi errati
.
Comandi di Build e Test: Elenca i comandi esatti (es. npm test, pytest -v) includendo flag e opzioni specifiche. Gli agenti utilizzeranno queste informazioni per verificare il proprio lavoro prima di completare un task
.
### 3. Definire lo Stack e i Confini (Boundaries)
Per evitare che l'agente "allucini" soluzioni o utilizzi pattern errati, è necessario essere specifici:
Tech Stack Dettagliato: Non scrivere solo "React"; scrivi "React 18 con TypeScript, Vite e Tailwind CSS"
. Specificare le versioni aiuta a prevenire bug sottili dovuti a cambiamenti di sintassi tra le versioni delle librerie
.
Stabilire Confini Chiari: Indica esplicitamente cosa l'agente non deve mai fare. Esempi comuni includono: "Non inserire mai segreti nei commit", "Non modificare mai i file nella cartella /vendor" o "Non rimuovere mai i test falliti"
.
Esempi concreti: Uno snippet di codice reale che mostra il tuo stile preferito vale più di tre paragrafi di spiegazioni astratte
.
### 4. La Strategia della Divulgazione Progressiva
Invece di stipare ogni singola regola di stile in un unico file (creando quello che gli esperti chiamano un "ammasso di fango" o ball of mud), utilizza la divulgazione progressiva
.
Sposta le regole specifiche: Se hai molte istruzioni per TypeScript o per i test, crea file separati (es. docs/TYPESCRIPT.md) e inserisci nel file AGENTS.md principale solo un riferimento leggero
.
Gerarchia a cascata: È possibile utilizzare file AGENTS.md annidati. Un file nella radice del progetto per le regole globali e file AGENTS.md all'interno di sottocartelle specifiche per regole modulari (molto utile nei monorepo)
. L'agente darà priorità al file più vicino al codice che sta modificando
.
### 5. Attenzione all'Automazione e alla Staleness
Un errore comune è affidarsi a script per autogenerare il file AGENTS.md. Questi tendono a dare priorità alla completezza rispetto alla pertinenza, saturando il budget di istruzioni con informazioni generiche
. Inoltre, documentazione obsoleta (percorsi di file cambiati, ecc.) agisce come un "veleno" per il contesto, portando l'agente a cercare file inesistenti con estrema sicurezza
. È meglio descrivere le capacità del dominio (es. "la logica di autenticazione") piuttosto che percorsi di file rigidi
.
### 6. Il Verdetto della Ricerca
Ricerche recenti (come quelle di ETH Zurich) indicano che i file AGENTS.md scritti dagli esseri umani possono portare a un incremento del 4% del tasso di successo dei task
. Al contrario, i file generati interamente da AI possono peggiorare le prestazioni del 3% e aumentare i costi di inferenza del 20%, poiché spingono l'agente a compiere passaggi logici inutili o ridondanti
.
### Conclusione
Un file AGENTS.md "con i crismi" è uno strumento vivo che evolve con il progetto
. Deve essere piccolo, focalizzato e orientato all'azione, agendo come una bussola per l'agente senza sostituirsi alla sua capacità di esplorare il codice in tempo reale
.