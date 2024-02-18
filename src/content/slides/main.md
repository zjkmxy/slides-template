## Markdown Slides Template

Xinyu Ma

<div class='multiCol'>
<div class='col'>

- Left column
  - Some item

</div>

<div class='col'>

- Right column
  - Item 1
  - Item 2

</div>
</div>

---

## LaTeX math
Inline: $\{z\in x: \varphi(z)\}$
Block:
$$
\forall x\exists y\forall z[z\in y\leftrightarrow z\in x\wedge\varphi(z)]
$$

---

### Mermaid diagram
```mermaid
%%{init: {
    'theme': 'dark',
    'themeVariables': { 'darkMode': true, 'fontSize': '20px' },
    'class':{ 'useMaxWidth': false }}}%%
classDiagram
    98ca9 --> 92ec2
    92ec2 --> 51db3
    92ec2 --> 911e7
    92ec2 --> cba0a
    class 98ca9{
        &lt;&lt;Commit&gt;&gt;
        tree: 92ec2
        parent: 39ec7
        author: XM 2020-04-02
        committer: XM
    }
    class 92ec2{
        &lt;&lt;Tree&gt;&gt;
        blob 51db3 README
        blob 911e7 LICENSE
        blob cba0a test.rb
    }
    class 51db3{
        &lt;&lt;Blob&gt;&gt;
        File Content
    }
    class 911e7{
        &lt;&lt;Blob&gt;&gt;
        File Content
    }
    class cba0a{
        &lt;&lt;Blob&gt;&gt;
        File Content
    }
```