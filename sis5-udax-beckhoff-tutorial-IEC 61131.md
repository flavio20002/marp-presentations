---
marp: true
theme: kennedy-hd
math: mathjax
paginate: true
transition: fade
header: "</img>"
---

<!-- _class: titlepage -->

![bg](images/beckhoff/beckhoff_sfondo_hd.jpg)

<div class="shape"></div>
<div class="spacer"></div>

# SISTEMI AUTOMATICI

Classi 4° e 5°

## Sistemi di automazione Beckhoff: lo standard IEC 61131

<div class="spacer"></div>

Prof. Flavio Barisi - Anno scolastico 2022/23

---

<!-- _class: summarypage -->

# Sommario

- [Introduzione](#introduzione)
- [Descrizione Hardware](#descrizione-hardware)


---

<!-- _class: sectionpage -->

# Lo standard IEC 61131

---

# Lo standard IEC 61131

- Lo standard IEC 61131 è uno standard internazionale per la programmazione dei controllori logici programmabili (PLC).
- La sezione 3 dello standard IEC 61131 definisce cinque linguaggi di programmazione comuni utilizzati nell'automazione industriale. Questi linguaggi offrono un'ampia gamma di funzionalità per soddisfare le esigenze di programmazione dei PLC.
- La scelta del linguaggio IEC 61131 dipende dalle esigenze specifiche dell'applicazione in quanto ogni linguaggio ha vantaggi e limitazioni. È possibile utilizzare più linguaggi all'interno di uno stesso progetto per sfruttare al meglio le loro caratteristiche.

---

<!-- _class: small -->

# I cinque linguaggi IEC 61131-3

1. **Ladder Diagram (LD)**: Basato su diagrammi a contatti e bobine, simula il funzionamento di un circuito elettrico. Utilizzato principalmente per controlli sequenziali.
2. **Structured Text (ST)** Linguaggio di programmazione di alto livello simile al Pascal o al C. Consente l'implementazione di algoritmi complessi.
3. **Function Block Diagram (FBD)** Basato sulla rappresentazione grafica di blocchi funzionali interconnessi. Utilizzato per la programmazione di controlli logici complessi.
4. **Instruction List (IL)** Linguaggio di basso livello simile all'Assembly Utilizzato per programmi semplici e ottimizzati.
5. **Sequential Function Chart (SFC)** Linguaggio basato su grafici di stato e diagrammi di flusso. Utilizzato per il controllo di macchine e processi complessi.
---

# Program Organization Unit


- Le POU (Programmation Organization Units) sono unità organizzative del codice che possono essere riutilizzate
  - Funzioni
  - Blocchi funzionali
  - Programmi
- Una POU è composta da
  - Definizione del tipo di POU e del nome
  - Dichiarazione di variabili
  - Implementazione della POU

---


# Struttura a due sezioni dell'editor

- L'interfaccia di editing del codice in un ambiente di sviluppo per sistemi di automazione industriale è generalmente divisa in due sezioni. La sezione di **dichiarazione** e quella di **implementazione**.
- Questa divisione in due sezioni separate offre una chiara distinzione tra la gestione delle variabili e la scrittura del codice, migliorando l'organizzazione e la comprensione del progetto.
- Nell'atto di creazione di una **POU**, l'utente può scegliere il linguaggio di implementazione tra uno dei 5 linguaggi definiti dallo standard IEC 61131. La sezione di dichiarazione è **sempre** in linguaggio ST.

---

# Variabili

- Le variabili sono elementi fondamentali nella programmazione PLC. Sono dei contenitori dove i dati vengono memorizzati e manipolati all'interno di un programma.
- Le variabili possono essere utilizzate per conservare valori temporanei, risultati intermedi o dati di input/output.
- Nel contesto dello standard IEC 61131, esistono numerosi Data Type disponibili per le variabili. I Data Type definiscono il tipo di dato che una variabile può contenere, le operazioni che possono essere eseguite su di essa e la quantità di memoria allocata per ogni variabile.

---


<!-- _class: small -->

# Data Type dello standard IEC 61131

| | |
| --------------- | -------------------------------------- |
| **BOOL**            | Tipo booleano (1 byte, vero o falso)           |
| **BYTE**            | Tipo di dato intero a 8 bit [0..255]    |
| **WORD**            | Tipo di dato intero a 16 bit [0..65535]          |
| **DWORD**           | Tipo di dato intero a 32 bit [0..4294967295]          |
| **LWORD**           | Tipo di dato intero a 64 bit [0..2<sup>64</sup>-1]          |           |
| **SINT**            | Tipo di dato intero con segno a 8 bit [-128..127] |
| **INT**             | Tipo di dato intero con segno a 16 bit [-32768..32767] |
| **DINT**            | Tipo di dato intero con segno a 32 bit [-2147483648..2147483647] |
| **LINT**            | Tipo di dato intero con segno a 64 bit [-2<sup>63</sup>..2<sup>63</sup>-1]|
| **USINT**           | Tipo di dato intero senza segno a 8 bit [0..255] |
| **UINT**            | Tipo di dato intero senza segno a 16 bit [0..65535] |

---

<!-- _class: small -->

# Data Type dello standard IEC 61131

| | |
| --------------- | -------------------------------------- |
| **UDINT**           | Tipo di dato intero senza segno a 32 bit [0..4294967295] |
| **ULINT**           | Tipo di dato intero senza segno a 64 bit [0..2<sup>64</sup>-1] |
| **REAL**            | Tipo di dato a virgola mobile a 32 bit (≈ 10 <sup>38</sup>) |
| **LREAL**           | Tipo di dato a virgola mobile a 64 bit (≈ 10 <sup>308</sup>)|
| **TIME**            | Tipo di dato per rappresentare il tempo a 32 bit |
| **LTIME**            | Tipo di dato per rappresentare il tempo a 64 bit |
| **DATE**            | Tipo di dato per rappresentare la data (32 bit) |
| **TIME_OF_DAY**     | Tipo di dato per rappresentare l'ora del giorno (32 bit) |
| **DATE_AND_TIME**   | Tipo di dato per rappresentare data e ora (32 bit) |
| **STRING**          | Tipo di dato per rappresentare una stringa |
| **WSTRING**         | Tipo di dato per rappresentare una stringa UNICODE |

---


---

<!-- _class: small -->

# Assegnazione delle variabili

- Variabile booleana
  - **TRUE**
  - **FALSE**
- Variabile numerica
  - decimale: Es. **14**
  - binario (è possibile inserire un _): Es. **2#1001_0011**
  - ottale: Es. **8#67**
  - esadecimale Es. **16#A**
- Variabile reale
  - **7.4**
  - **1.64e+009**
---

<!-- _class: small -->

# Assegnazione delle variabili

- Variabile di tipo stringa
  - **'Questa è una stringa'**
- Variabile TIME/LTIME
  - **T#14MS**
  - **T#1D12H34M15S500MS**
  - **LTIME#100D2H30M40S500MS600US700NS**
- Variabile DATE
  - **D#1972-03-29**
- Variabile TIME_OF_DAY
  - **TOD#15:36:30.123**
  - **TOD#00:00:00**
- Variabile DATE_AND_TIME
  - **DT#1972-03-29-00:00:00**

--- 
<!-- _class: small -->

# Etichette

- Nella programmazione PLC, le **etichette** (in inglese *label*) sono nomi simbolici associati alle variabili. Servono a identificare in modo univoco le variabili all'interno del programma.
- Le etichette migliorano la leggibilità e la comprensibilità del codice, consentendo di assegnare nomi significativi alle variabili. Di seguito alcuni esempi:
  - **Temperature**
  - **MotorSpeed**
  - **ValveStatus**
  - **PressureSetpoint**
- A questo indirizzo sono riportate alcune regole utilizzabili per la nomenclatura delle variabili: https://alltwincat.com/2019/02/11/plc-naming-conventions/. In particolare, va evitata la notazione ungara https://en.wikipedia.org/wiki/Hungarian_notation
---

# Dichiarazione delle variabili

- Nello standard IEC 61131, le variabili vanno dichiarate prima di essere utilizzate nel programma PLC. La dichiarazione delle variabili include la specifica del nome, del tipo di dato, delle proprietà (se necessario) ed il valore iniziale se presente.
- La sintassi generale per dichiarare una variabile è:

  ```iecst
  VAR
      <nome>: <tipo di dato>;
  END_VAR
  ```
---

# Esempio di dichiarazione

```iecst
VAR
    Temperature: REAL; // Variabile per la temperatura
    MotorSpeed: INT; // Variabile per la velocità del motore
    ValveStatus: BOOL; // Variabile per lo stato della valvola
    Counter: DINT := 0; // Variabile per un contatore inizializzata a 0
    SensorData: ARRAY [0..9] OF WORD; // Variabile array per i dati del sensore
END_VAR
```
---

# Variabili locali e globabli


---

# Gli array

- Un array è una raccolta di elementi dello stesso tipo. TwinCAT supporta array ad una dimensione (liste) ed array multidimensionali (matrici) di lunghezza fissa e variabile.
- Di seguito vengono riportati alcuni esempi di dichiarazione

  ```iecst
  VAR
    Counter : ARRAY[0..9] OF INT; //array ad una dimensione
    CardGame : ARRAY[1..2, 3..4] OF INT; //array a due dimensioni
    aData : ARRAY [*] OF INT; //array di lunghezza variabile
  END_VAR
  ```

---


# Linguaggio Ladder

- Il linguaggio Ladder è il primo linguaggio ideato per programmare i PLC. Si basa su simboli di provenienza "elettrica": binari di potenza (power rail), contatti elettrici (contact) e avvolgimenti magnetici (coil)
- È costituito in linee verticali dette **rung**. Ciascun rung può contenere **contatti**, **coil**, **Function Block** e **Funzioni**
- Ciascun **rung** deve essere connesso necessariamente al binario di potenza sinistro (left power rail), mentre il collegamento con quello destro è opzionale

---

# Linguaggio ST


---

<!-- _class: small -->


# Linguaggio ST: Espressioni logiche

| Simbolo | Operazione|
|:---------------:|:--------------------------------------:|
| **=**           | Uguale a |
| **<>**           | Diverso da |
| **<**            | Minore |
| **<=**            | Minore o uguale |
| **>**            | Maggiore |
| **>=**            | Maggiore o uguale |
| **NOT**            | Not logico |
| **AND**            | And logico |
| **OR**            | Or logico |

---


# Linguaggio ST: IF ELSE

<div class="columns">
  <div>

  ![](images/beckhoff/if.svg#auto)

  </div>
  <div>

  ![](images/beckhoff/if-else.svg#auto)
  </div>
</div>

---

# Linguaggio ST: IF

<div class="columns" style="align-items: start">
  <div>

  **IF Statement**

  ```iecst
  PROGRAM MAIN
  VAR
    Condition   : BOOL;
    Message     : STRING  := '';
  END_VAR
  ```
  <div class="line" style="width:100%"></div>

  ```iecst
  IF condition THEN
    Message := 'The condition is true';
  END_IF;
  ```

  </div>
  <div>

  **IF ELSE Statement**

  ```iecst
  PROGRAM MAIN
  VAR
    Condition   : BOOL;
    Message     : STRING  := '';
  END_VAR
  ```
  <div class="line" style="width:100%"></div>

  ```iecst
  IF condition THEN
    Message := 'The condition is true';
  ELSE
    Message := 'The condition is false';
  END_IF;
  ```

  </div>
</div>

---

# Linguaggio ST: ELSIF

  ```iecst
  PROGRAM MAIN
  VAR
    IntVar      : INT;
    Message     : STRING  := '';
  END_VAR
  ```
  <div class="line" style="width:100%"></div>

  ```iecst
  IF IntVar = 10 THEN
    Message := 'The value is 10';
  ELSIF IntVar = 20 THEN
    Message := 'The value is 20';
  ELSE THEN
    Message := 'The value is another';
  END_IF;
  ```

---

# Linguaggio ST: CASE

  ```iecst
  PROGRAM MAIN
  VAR
    IntVar      : INT;
    Message     : STRING  := '';
  END_VAR
  ```
  <div class="line" style="width:100%"></div>

  ```iecst
  CASE IntVar OF
    10: 
      Message:= 'The value is 10';
    20,30: 
      Message:= 'The value is 20 or 30';
    40..60:
      Message:= 'The value is in the range 40 to 60';
    ELSE
      Message: 'The value is not listed';
  END_CASE;
  ```

---

# Linguaggio ST: Array

<!-- _class: small -->

- Per leggere o scrivere un Array nel linguaggio ST è possibile usare la seguente sintassi:


  ```iecst
  PROGRAM MAIN
  VAR
    Counter : ARRAY[0..9] OF INT;
    AVariable : INT;
  END_VAR
  ```
  <div class="line" style="width:100%"></div>

  ```iecst
  Counter[3] := 10;
  AVariable := Counter[2];
  ```
- Per conoscere la dimensione di un Array a lunghezza variabile, si possono usare le funzioni **LOWER_BOUND** e **UPPER_BOUND**


---

# Linguaggio ST: ciclo FOR


- Con l'istruzione FOR è possibile ripetere un blocco di istruzioni un numero definito di volte.

  ```iecst
  PROGRAM MAIN
  VAR
    Counter : INT;
    Sum : INT := 0;
  END_VAR
  ```
  <div class="line" style="width:100%"></div>

  ```iecst
  FOR Counter := 1 TO 5 BY 1 DO
    Sum := Sum + Counter;
  END_FOR;
  ```

---

# Linguaggio ST: ciclo WHILE


- Con l'istruzione WHILE è possibile ripetere un blocco di istruzioni un numero indefinito di volte finché si verifica una condizione. La condizione viene verificata all'inizio del ciclo.

  ```iecst
  PROGRAM MAIN
  VAR
    Counter : INT := 1;
    Sum : INT := 0;
  END_VAR
  ```
  <div class="line" style="width:100%"></div>

  ```iecst
  WHILE Counter <=10 DO
    Sum := Sum + Counter;
    Counter := Counter +1:
  END_FOR;
  ```

---

# Linguaggio ST: ciclo REPEAT


- L'istruzione REPEAT è molto simile al WHILE, ma  la condizione viene verificata alla fine del ciclo.

  ```iecst
  PROGRAM MAIN
  VAR
    Counter : INT := 1;
    Sum : INT := 0;
  END_VAR
  ```
  <div class="line" style="width:100%"></div>

  ```iecst
  REPEAT
    Sum := Sum + Counter;
    Counter := Counter +1:
  UNTIL
    Counter > 10
  END_REPEAT;
  ```

---

# Linuaggio ST: nota sui cicli

- È importante che il tempo di esecuzione totale del codice non superi un cycle time e dunque vanno evitati i loop infiniti di lunghezza non nota

---

# Linguaggio ST: Commenti


- Un commento è una porzione di testo nel codice sorgente che viene ignorata dal compilatore o dall'interprete e vengono utilizzati per documentare il codice e facilitarne la manutenzione.
- I commenti su una sola riga iniziano con il carattere "//" mentre quelli su più righe sono delimitati dai caratteri "/*" all'inizio e "*/" alla fine.

```iecst
x:=5; // this is a single line comment
/* 
Multiline comment
*/

```

---

# Auto Declare e Input Assistance

- L'Auto Declare è una funzionalità di TwinCAT che semplifica la dichiarazione delle variabili
- L'Input Assistant fornisce informazioni dettagliate sulle istruzioni, inclusi i parametri richiesti, i tipi di dati supportati e una descrizione delle funzionalità. Questa documentazione aiuta gli sviluppatori a comprendere meglio l'utilizzo corretto delle istruzioni e a evitare errori di sintassi.
- Entrambe le funzioni sono accessibili facendo click con il tasto destro all'interno di una finestra di codice

---

# Smart Coding

<div class="columns">
  <div>

- La modalità Smart Coding in TwinCAT è una potente funzionalità che utilizza l'intelligenza artificiale per migliorare l'efficienza, la precisione e la qualità della scrittura del codice.
- Per attivare la modalità Smart Coding, fare click su Tools -> Options -> TwinCAT -> PLC Environment -> Smart Coding
  </div>
  <div>

  ![](images/beckhoff/smart_coding.png)
  </div>
</div>

