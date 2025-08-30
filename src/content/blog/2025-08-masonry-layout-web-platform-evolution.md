---
title: masonry web layout
date: 2025-08-11
tags: ["web", "css"]
---

What feels like two decades ago I was busy making masonry-style layouts for different agency & portfolio websites. Funny to see the masonry layout slowly but surely reaching the web platform as a standard.

![CSS masonry layout example](https://webkit.org/wp-content/uploads/Image-23.png)

Here's an excerpt of the proposed (!) syntax:

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  item-flow: row collapse;  
  gap: 1rem;
}
```

- https://webkit.org/blog/17219/item-flow-part-2-next-steps-for-masonry/

