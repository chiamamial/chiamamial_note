1) Obiettivo del Progetto
Sito statico o semi-statico ad alte prestazioni.

Stabilità Visuale: Priorità assoluta alla coerenza tra breakpoint.

Vibe Coding: Interfaccia viva con microinterazioni fluide.

Qualità CSS: Naming BEM rigoroso e utilizzo di Design Tokens.

SEO & A11y: Accessibilità e indicizzazione native.

2) Stack e Confini
Framework: Definito nel repository (es. Astro / Next.js / Vite).

Styling: SCSS o CSS Modules. Obbligatorio: Divisione dei file per componente.

Mobile-First: Lo stile base è per 320px+. Le Media Queries aggiungono complessità.

Dipendenze: Nessuna libreria UI esterna (es. Bootstrap/Tailwind) se esiste già un sistema custom.

3) Architettura CSS & Naming (BEM)
Tutto lo stile deve essere isolato e prevedibile.

3.1 Convenzione BEM Strict
Block: .c-card (prefisso c- per component).

Element: .c-card__title (doppio underscore).

Modifier: .c-card--featured (doppio trattino).

State: .is-active, .has-scroll.

3.2 Design Tokens
Vietati valori hardcoded. Usa esclusivamente variabili CSS semantiche.

Colori: --color-bg, --color-text-main, --color-primary.

Spacing: Sistema a base 4px (es. --space-m, --space-xl).

Typography: --font-size-base, --font-weight-bold.

4) Responsive & Breakpoints
Approccio Mobile-First obbligatorio.

Mobile: Default

Tablet: @media (min-width: 768px)

Desktop: @media (min-width: 1024px)

Wide: @media (min-width: 1440px)

5) Microinterazioni & UX
L'interfaccia deve reagire all'utente in modo fluido.

Transitions: Ogni hover/active deve avere una transizione (es: var(--anim-smooth)).

Feedback: Usare transform: scale() o translateY() per dare profondità ai click.

Hover/Focus: Stato :focus-visible sempre garantito per l'accessibilità.

6) Regole di Sviluppo (Boundaries)
No Global CSS: Non stilizzare tag nudi fuori dal file base/reset.

No !important: La specificità deve essere risolta tramite la struttura BEM.

JS Difensivo: Selezione elementi con controllo esistenza (if (el) ...).

Separazione: Logica JS separata dallo stile. Lo stile non deve dipendere da calcoli JS se risolvibile con CSS (es. Flex/Grid).

7) SEO & Accessibilità (A11y)
Semantica: Usare <main>, <section>, <article>, <nav> correttamente.

Immagini: alt descrittivo o alt="" se decorativo. Lazy loading nativo per immagini "below the fold".

Icone: Sempre con aria-hidden="true" o aria-label se d'azione.

8) Workflow Operativo
Prima di ogni release/merge:

Build Check: npm run build (deve passare senza errori).

Cross-Device: Verifica Navbar e CTA su Mobile (375px) e Desktop (1440px).

Linting: Il codice deve seguire le regole di formattazione del progetto.

Performance: Controllo console per errori o asset pesanti non ottimizzati.

9) Filosofia
Il codice deve essere leggibile, prevedibile e stabile.

Se una soluzione richiede un "hack" o una forzatura della specificità CSS, la struttura del componente va rivista.