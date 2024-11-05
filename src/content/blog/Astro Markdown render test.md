---
title: Astro Markdown render test
publishDate: 2024-11-05
---

## Headers

```markdown
# H1 Header
## H2 Header
### H3 Header
#### H4 Header
##### H5 Header
###### H6 Header
```

# H1 Header
## H2 Header
### H3 Header
#### H4 Header
##### H5 Header
###### H6 Header

## Emphasis

```markdown
*This text is italicized* or _This text is italicized_  
**This text is bold** or __This text is bold__  
***This text is bold and italicized*** or ___This text is bold and italicized___  
~~This text is strikethrough~~
```

*This text is italicized* or _This text is italicized_  
**This text is bold** or __This text is bold__  
***This text is bold and italicized*** or ___This text is bold and italicized___  
~~This text is strikethrough~~

## Lists

### Unordered Lists
```markdown
* Item 1
* Item 2
  * Subitem 2.1
  * Subitem 2.2
* Item 3

- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3
```

* Item 1
* Item 2
  * Subitem 2.1
  * Subitem 2.2
* Item 3

- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3

### Ordered Lists
```markdown
1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2
3. Third item
```

1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2
3. Third item

### Task Lists
```markdown
- [x] Completed task
- [ ] Incomplete task
- [x] @mentions, #refs, [links](), **formatting**, ~~tags~~
```

- [x] Completed task
- [ ] Incomplete task
- [x] @mentions, #refs, [links](), **formatting**, ~~tags~~

## Links

```markdown
[GitHub](https://github.com)  
[Relative link to a file](../blob/master/LICENSE)  
https://www.example.com or <https://www.example.com>
```

[GitHub](https://github.com)  
[Relative link to a file](../blob/master/LICENSE)  
https://www.example.com or <https://www.example.com>

## Images

```markdown
![Alt text](https://example.com/image.jpg)
![Alt text](/favicon.svg)
![Alt text](/favicon.svg "Image title")
```

![Alt text](https://example.com/image.jpg)
![Alt text](/favicon.svg)
![Alt text](/favicon.svg "Image title")

## Blockquotes

```markdown
> This is a blockquote
> 
> This is the second paragraph in the blockquote
>
> > This is a nested blockquote
```

> This is a blockquote
> 
> This is the second paragraph in the blockquote
>
> > This is a nested blockquote

## Code

### Inline Code
```markdown
Use `backticks` for inline code
```

Use `backticks` for inline code

### Code Blocks
````markdown
```
Basic code block
```

```javascript
// Code block with syntax highlighting
function helloWorld() {
    console.log("Hello, World!");
}
```
````

```
Basic code block
```

```javascript
// Code block with syntax highlighting
function helloWorld() {
    console.log("Hello, World!");
}
```

### Code Diffs

````markdown
```diff
- This line was removed
+ This line was added
  This line was unchanged
  - This line starts with a minus
  + This line starts with a plus
```
````

```diff
- This line was removed
+ This line was added
  This line was unchanged
  - This line starts with a minus
  + This line starts with a plus
```

## Tables

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

| Left-aligned | Center-aligned | Right-aligned |
|:-------------|:-------------:|-------------:|
| Left         | Center        | Right        |
```

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

| Left-aligned | Center-aligned | Right-aligned |
|:-------------|:-------------:|-------------:|
| Left         | Center        | Right        |

## Horizontal Rules

```markdown
---
***
___
```

---
***
___

## Footnotes

```markdown
Here's a sentence with a footnote[^1].

[^1]: This is the footnote.
```

Here's a sentence with a footnote[^1].

[^1]: This is the footnote.

## Emoji

```markdown
:smile: :heart: :thumbsup:
```

:smile: :heart: :thumbsup:

## Comments

```markdown
[//]: # (This is a comment that won't be rendered)
```

## Escaping Characters

```markdown
\*This text has literal asterisks\*  
\`This is not code\`  
\[This is not a link\]
```

\*This text has literal asterisks\*  
\`This is not code\`  
\[This is not a link\]

## Definition Lists

```markdown
Term
: Definition 1
: Definition 2
```

Term
: Definition 1
: Definition 2

## Diagrams (Mermaid)

````markdown
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
````

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

## Keyboard Keys

```markdown
Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy
```

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy

## Alerts/Admonitions (GitHub specific)

```markdown
> [!NOTE]
> Highlights information that users should take into account.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention.

> [!CAUTION]
> Negative potential consequences of an action.
```

> [!NOTE]
> Highlights information that users should take into account.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention.

> [!CAUTION]
> Negative potential consequences of an action.