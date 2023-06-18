---
marp: true
style: pre.mermaid { all: unset; }
---

<pre class="mermaid">
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2015-01-12  , 12d
    another task      : 24d
</pre>

---

<pre class="mermaid">
gantt
%%{init: {'theme':'neutral'}}%% 
        dateFormat  YYYY-MM-DD
        axisFormat %m-%d
        title xxxx
        excludes    weekends
        
        section xxxx
        xxxx           :active,lxian1 ,2023-03-04,2023-03-31
        xxxx     :zhaobiao1,after lxian1, 45d
        xxxxx	        :crit, milestone,zb1, 2023-05-01,2023-05-01
        xxxx  :fangan1,2023-05-01,25d
        xxxxx        :devTest1, after fangan1,12w
        xxxz	    :crit,milestone,duiba,2023-07-10,2023-07-10
        yyyy          :yansou1, after devTest1, 22d
        zzzz            :  after yansou1,22d
        ddddd	     :crit,milestone,2023-12-10,2023-12-10
        
        
        
        section xxxx 
        xxxx           :active,lxian, 2023-03-04,2023-03-31
        xxxx       :crit,poc,2023-03-31, 30d
        xxxx    :   zhaobiao,after poc, 45d
        xxxx	        :crit, milestone,zb, 2023-06-10,2023-06-10
        
        xxxxxxxxxxxx  :    fangan, after zb,25d
        xxxx         :     devTest, after fangan,12w
        xxxx(07-10)	    :crit,milestone,duiba,2023-07-10,2023-07-10
        xxxx         :   yansou, after devTest, 22d
        xxxx            : 22d
        xxxx(12-10)	     :crit,milestone,2023-12-10,2023-12-10
           
</pre>

<script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10.0.0/dist/mermaid.esm.min.mjs';
    mermaid.initialize({ startOnLoad: true });
    window.addEventListener('vscode.markdown.updateContent', function() { mermaid.init() });
</script>