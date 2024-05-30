Descrizione:
Rifare l'esercizio della to do list visto insieme a lezione.

Ogni oggetto dovra' avere almeno due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante o premendo il tasto invio, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1 - cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
2 -  aggiungere un altro bottone che permetta la modifica di un task gia' esistente


scomposizione del problema:

    1) Creare una struttura HTML di base per la to-do list:
        - Creare un contenitore per l'app Vue.js.
        - Creare una lista HTML per visualizzare i todo.
        - Creare un campo di input e un pulsante per aggiungere nuovi todo.

    2) Implementare il rendering dei todo con Vue.js:
        - Inizializzare un'istanza Vue.
        - Definire i dati per i todo.
        - Visualizzare ogni todo in un elemento della lista.
        - Applicare una classe di stile per visualizzare il testo sbarrato se il todo è completato.

    3) Aggiungere la funzionalità di rimozione dei todo:
        - Aggiungere un elemento "x" accanto a ogni todo.
        - Implementare un metodo per rimuovere un todo quando si clicca sulla "x".

    4) Aggiungere la funzionalità di aggiunta dei todo:
        - Collegare il campo di input ai dati di Vue.
        - Implementare un metodo per aggiungere un nuovo todo alla lista esistente quando si clicca sul pulsante o si preme il tasto Invio.