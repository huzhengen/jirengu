# 移动端 响应式 rem

### 媒体查询

```css
/* 最大是800，就是0-800之间 */
@media(max-width:800px){
    body{
        background:red;
    }
}

/* 321-375之间 */
@media(min-width:321px) and (max-width:375px){
    body{
        background:green;
    }
}
```

```html
<link rel="stylesheet" href="style.css" media="max-width:320px">
```

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

```

### rem

root em

根元素html的font-size是16px，则1个rem就是16px

> vh，viewport height，视口高度

12像素法则

网页默认font-size是16px，如果不给根元素加font-size，那么1rem就是16px

Chrome默认最小是12px

> 1个em等于自己的font-size的值