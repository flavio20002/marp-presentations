---
marp: true
theme: kennedy
math: mathjax
paginate: true
backgroundColor: white
color: black
header: "![](images/logo_small.png)"
---

<!-- _class: titlepage -->
<!-- _header: "![](images/logo_small_white.png)" -->

![bg opacity:.3](images/arduino.webp)

<div class="shape"></div>

<div class="spacer"></div>

# TECNOLOGIE INFORMATICHE

Classi 1°

## Arduino

<div class="spacer"></div>

Prof. Flavio Barisi - Anno scolastico 2022/23

---

<div class="shape"></div>

<h1 class="title">Sommario</h1>

- Tinkercad
- Lampeggio LED integrato
- Lampeggio LED esterno
- Accensione LED graduale con potenziometro
- Accensione LED con pulsante
- Fotoresistenza

---

<!-- _class: sectionpage -->
<!-- _header: "![](images/logo_small_white.png)" -->

# TINKERCAD

<div class="shape"></div>


---


<div class="shape"></div>
<h1 class="title">Introduzione</h1>

Tinkercad è un programma di modellazione 3D e di
simulazione di circuiti elettronici creato da Autodesk. Per accedere:

- Navigare verso il sito https://www.tinkercad.com
- Two Selezionare il pulsante Accedi
- Selezionare Studenti con codice della lezione
- Inserire il codice della lezione fornito dal docente
- Inserire il proprio nickname comunicato dal docente

---

<div class="shape"></div>
<h1 class="title">How to write slides</h1>

Split pages by horizontal ruler (`---`). It's very simple! :satisfied:

```markdown
# Slide 1

foobar

---

# Slide 2

foobar
```

___

<div class="shape"></div>
<h1 class="title">Bullet list</h1>

- One
- Two
- Three

---

<div class="shape"></div>

<h1 class="title">Fragmented list</h1>

* One
* Two
* Three

---

<div class="shape"></div>

<h1 class="title">Multi columns in Marp slide</h1>

<div class="columns">
<div>


Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eveniet.

</div>
<div>

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH); 
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```

</div>
</div>