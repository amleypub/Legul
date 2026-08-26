#!/bin/sh
# Compila il build web e poi scatta gli screenshot, in quest'ordine e
# senza sovrapposizioni.
#
# I due comandi vanno tenuti insieme perché lanciarli a mano ha già
# prodotto due volte scatti ingannevoli: un `expo export` avviato prima
# dell'ultima modifica compila il codice vecchio, e le PNG risultanti
# sembrano fresche perché sono state appena riscritte. Qui l'istante di
# avvio della compilazione viene annotato in `web-build/.avviato`, così
# `shoot.js` può rifiutarsi di scattare se un sorgente è più recente.
set -e
cd "$(dirname "$0")/.."
AVVIO=$(date +%s)
npx expo export --platform web --output-dir web-build --clear
printf '%s' "$AVVIO" > web-build/.avviato
exec node scripts/shoot.js "$@"
