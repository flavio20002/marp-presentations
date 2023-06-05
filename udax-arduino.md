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

<!-- _class: sectionpage -->
<!-- _header: "![](images/logo_small_white.png)" -->

# INTRODUZIONE

<div class="shape"></div>


---

<div class="shape"></div>

# How to write slides

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

# Bullet list

- One
- Two
- Three

---

<div class="shape"></div>

# Fragmented list

* One
* Two
* Three

---

<div class="shape"></div>

# Multi columns in Marp slide

<div class="columns">
<div>

## Column 1

Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eveniet, corporis commodi vitae accusamus obcaecati dolor corrupti eaque id numquam officia velit sapiente incidunt dolores provident laboriosam praesentium nobis culpa.

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