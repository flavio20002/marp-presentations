---
marp: true
theme: kennedy
---

<pre>
<code class="iecst">PROGRAM stexample
    VAR
        x : BOOL;
    END_VAR
    x := TRUE;
    REPEAT
        x := FALSE;
    UNTIL x := FALSE;
    END_REPEAT;
END_PROGRAM;</code></pre>

<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js"></script>
<script type="text/javascript" src="https://raw.githubusercontent.com/highlightjs/highlightjs-structured-text/master/dist/iecst.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

<script>window.addEventListener('vscode.markdown.updateContent', function() { hljs.initHighlightingOnLoad() });</script>