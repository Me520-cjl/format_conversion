---
title: 03-CSS样式表和选择器
publish: true
---

<ArticleTopAd></ArticleTopAd>

## 本文主要内容

-   CSS 概述
-   CSS 和 HTML 结合的三种方式：`行内样式表`、`内嵌样式表`、`外部样式表`
-   CSS 四种基本选择器：`标签选择器`、`类选择器`、`ID选择器`、`通用选择器`
-   CSS 几种扩展选择器：`后代选择器`、`交集选择器`、`并集选择器`
-   CSS 样式优先级

## 前言

## CSS 概述

CSS：Cascading Style Sheet，层叠样式表。CSS 的作用就是给 HTML 页面标签添加各种样式，**定义网页的显示效果**。简单一句话：CSS 将网页**内容和显示样式进行分离**，提高了显示功能。

css 的最新版本是 css3，**我们目前学习的是 css2.1**。 因为 css3 和 css2.1 不矛盾，必须先学 2.1 然后学 3。

接下来我们要讲一下为什么要使用 CSS。

**HTML 的缺陷：**

1. 不能够适应多种设备
2. 要求浏览器必须智能化足够庞大
3. 数据和显示没有分开
4. 功能不够强大

**CSS 优点：**

1. 使数据和显示分开
2. 降低网络流量
3. 使整个网站视觉效果一致
4. 使开发效率提高了（耦合性降低，一个人负责写 html，一个人负责写 css）

比如说，有一个样式需要在一百个页面上显示，如果是 html 来实现，那要写一百遍，现在有了 css，只要写一遍。现在，html 只提供数据和一些控件，完全交给 css 提供各种各样的样式。

### CSS 的重点知识点

盒子模型、浮动、定位

### CSS 整体感知

我们先来看一段简单的 css 代码：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <style>
            p {
                color: red;
                font-size: 30px;
                text-decoration: underline;
                font-weight: bold;
                text-align: center;
                font-style: italic;
            }
            h1 {
                color: blue;
                font-size: 50px;
                font-weight: bold;
                background-color: pink;
            }
        </style>
    </head>
    <body>
        <h1>我是大标题</h1>
        <p>我是内容</p>
    </body>
</html>
```

解释如下：

![](http://img.smyhvae.com/20170710_1605.png)

我们写 css 的地方是 style 标签，就是“样式”的意思，写在 head 里面。后面的课程中我们将知道，css 也可以写在单独的文件里面，现在我们先写在 style 标签里面。

如果在 sublime 中输入`<st`或者`<style`然后按 tab 键，可以自动生成的格式如下：（建议）

```html
<style type="text/css"></style>
```

type 表示“类型”，text 就是“纯文本”，css 也是纯文本。

但是，如果在 sublime 中输入`st`或者`style`然后按 tab 键，可以自动生成的格式如下：（不建议）

```html
<style></style>
```

css 对换行不敏感，对空格也不敏感。但是一定要有标准的语法。冒号，分号都不能省略。

## CSS 语法

**语法格式：**（其实就是键值对）

```html
选择器{ 属性名: 属性值; 属性名: 属性值; }
```

或者可以写成：

```css
选择器 {
    k: v;
    k: v;
    k: v;
    k: v;
}
选择器 {
    k: v;
    k: v;
    k: v;
    k: v;
}
```

**解释：**

-   选择器代表页面上的某类元素，选择器后一定是大括号。
-   属性名后必须用冒号隔开，属性值后用分号（最后一个属性可以不用分号，但最好还是加上分号）。
-   冒号和属性值之间可以留一个空格（编程习惯的经验）。
-   如果一个属性有多个值的话，那么多个值用**空格**隔开。

**举例：**

```css
p {
    color: red;
}
```

**完整版代码举例：**

```html
<style type="text/css">
    p {
        font-weight: bold;
        font-style: italic;
        color: red;
    }
</style>

<body>
    <p>洗白白</p>
    <p>你懂得</p>
    <p>我不会就这样轻易的狗带</p>
</body>
```

效果：

![](http://img.smyhvae.com/2015-10-03-css-01.png)

### css 代码的注释

**格式：**

```html
<style type="text/css">
    /*
		具体的注释
	*/

    p {
        font-weight: bold;
        font-style: italic;
        color: red;
    }
</style>
```

注意：CSS 只有`/* */`这种注释，没有`//`这种注释。而且注释要写在`<style>`标签里面才算生效哦。

接下来，我们要开始真正地讲 css 的知识咯。

css 怎么学？CSS 有两个知识部分：
1） 选择器，怎么选；
2） 属性，样式是什么

## CSS 的一些简单常见的属性

> 我们先来接触 CSS 的一些简单常见的属性，因为接下来需要用到。后期会专门用一篇文章来写 CSS 的属性。

以下属性值中，括号中的内容表示 sublime 中的快捷键。

**字体颜色：**（c）

```html
color:red;
```

color 属性的值，可以是英语单词，比如 red、blue、yellow 等等；也可以是 rgb、十六进制(后期详细讲)。

**字号大小：**（fos）

```html
font-size:40px;
```

font 就是“字体”，size 就是“尺寸”。px 是“像素”。单位必须加，不加不行。

**背景颜色：**（bgc）

```html
background-color: blue;
```

background 就是“背景”。

**加粗：**（fwb）

```html
font-weight: bold;
```

font 是“字体” weight 是“重量”的意思，bold 粗。

**不加粗：**（fwn）

```html
font-weight: normal;
```

normal 就是正常的意思。

**斜体：**（fsi）

```html
font-style: italic;
```

italic 就是“斜体”。

**不斜体：**（fsn）

```html
font-style: normal;
```

**下划线：**（tdu）

```html
text-decoration: underline;
```

decoration 就是“装饰”的意思。

**没有下划线：**（tdn）

```html
text-decoration:none;
```

## CSS 的书写方式

CSS 的书写方式，实就是问你 CSS 的代码放在哪个位置。CSS 代码理论上的位置是任意的，**但通常写在`<style>`标签里**。

CSS 的书写方式有三种：

1. **行内样式**：在某个特定的标签里采用 style **属性**。范围只针对此标签。

2. **内嵌样式**（内联样式）：在页面的 head 标签里里采用`<style>`**标签**。范围针对此页面。
3. **外链样式**：引入外部样式表 CSS **文件**。这种引入方式又分为两种：
   - 3.1 采用`<link>`标签。例如：`<link rel = "stylesheet" type = "text/css" href = "a.css"></link>`
   - 3.2 采用 import 导入，必须写在`<style>`标签中。然后用类似于`@import url(a.css) ;`这种方式导入。

下面来详细讲一讲这三种方式。

### 1、CSS 和 HTML 结合方式一：行内样式

采用 style 属性。范围只针对此标签适用。

该方式比较灵活，但是对于多个相同标签的同一样式定义比较麻烦，适合局部修改。

举例：

```html
<p style="color:white;background-color:red">我不会就这样轻易的狗带</p>
```

效果：

![](http://img.smyhvae.com/2015-10-03-css-02.png)

### 2、CSS 和 HTML 结合方式二：内嵌样式表

在 head 标签中加入`<style>`标签，对多个标签进行统一修改，范围针对此页面。

该方式可以对单个页面的样式进行统一设置，但对于局部不够灵活。

举例：

```html
<style type="text/css">
    p {
        font-weight: bold;
        font-style: italic;
        color: red;
    }
</style>

<body>
    <p>洗白白</p>
    <p style="color:blue">你懂得</p>
</body>
```

![](http://img.smyhvae.com/2015-10-03-css-03.png)

### 3、CSS 和 HTML 结合方式三：引入外部样式表 css 文件

**引入样式表文件**的方式又分为两种：

-   （1）**采用`<link>`标签**。例如：`<link rel = "stylesheet" type = "text/css" href = "a.css"></link>`

-   （2）**采用 import**，必须写在`<style>`标签中，并且必须是第一句。例如：`@import url(a.css) ;`

> 两种引入样式方式的区别：外部样式表中不能写<link>标签，但是可以写 import 语句。

**具体操作如下：**

我们先在 html 页面的同级目录下新建一个`a.css`文件，那说明这里面的代码全是 css 代码，此时就没有必要再写`<style>`标签这几个字了。
`a.css`的代码如下：

```css
p {
    border: 1px solid red;
    font-size: 40px;
}
```

上方的 css 代码中，注意像素要带上 px 这个单位，不然不生效。
然后我们在 html 文件中通过`<link>`标签引入这个 css 文件就行了。效果如下：

![](http://img.smyhvae.com/2015-10-03-css-04.png)

这里再讲一个补充的知识：**`<link>`标签的 rel 属性：**。其属性值有以下两种：

-   `stylesheet`：定义的样式表
-   `alternate stylesheet`：候选的样式表

看字面意思可能比较难理解，我们来举个例子，一下子就明白了。
举例：

现在我们来定义 3 个样式表：

a.css：定义一个实线的黑色边框

```css
div {
    width: 200px;
    height: 200px;
    border: 3px solid black;
}
```

ba.css：蓝色的虚线边框

```css
div {
    width: 200px;
    height: 200px;
    border: 3px dotted blue;
}
```

c.css：来个背景图片

```css
div {
    width: 200px;
    height: 200px;
    border: 3px solid red;
    background-image: url('1.jpg');
}
```

然后我们在 html 文件中引用三个样式表：

```html
  <link rel = "stylesheet" type = "text/css" href = "a.css"></link>
  <link rel = "alternate stylesheet" type = "text/css" href = "b.css" title="第二种样式"></link>
  <link rel = "alternate stylesheet" type = "text/css" href = "c.css" title="第三种样式"></link>
```

上面引入的三个样式表中，后面两个样式表作为备选。注意备选的样式表中，title 属性不要忘记写，不然显示不出来效果的。现在来看一下效果：（在 IE 中打开网页）

![](http://img.smyhvae.com/2015-10-03-css-05.gif)

## CSS 的四种基本选择器

CSS 选择器：就是指定 CSS 要作用的标签，那个标签的名称就是选择器。意为：选择哪个容器。

CSS 的选择器分为两大类：基本选择器和扩展选择器。

**基本选择器：**

-   标签选择器：针对**一类**标签
-   ID 选择器：针对某**一个**特定的标签使用
-   类选择器：针对**你想要的所有**标签使用
-   通用选择器（通配符）：针对所有的标签都适用（不建议使用）

下面来分别讲一讲。

### 1、标签选择器：选择器的名字代表 html 页面上的标签

标签选择器，选择的是页面上所有这种类型的标签，所以经常描述“**共性**”，无法描述某一个元素的“个性”。

举例：

```html
p{ font-size:14px; }
```

上方选择器的意思是说：所有的`<p>`标签里的内容都将显示 14 号字体。

效果：

![](http://img.smyhvae.com/2015-10-03-css-06.png)

再比如说，我想让“千古壹号学完了安卓，继续学前端哟”这句话中的“前端”两个变为红色字体，那么我可以用`<span>`标签把“前端”这两个字围起来，然后给`<span>`标签加一个标签选择器。

代码如下：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <style type="text/css">
            span {
                color: red;
            }
        </style>
    </head>
    <body>
        <p>千古壹号学完了安卓，继续学<span>前端</span>哟</p>
    </body>
</html>
```

【总结】需要注意的是：

（1）所有的标签，都可以是选择器。比如 ul、li、label、dt、dl、input。

（2）无论这个标签藏的多深，一定能够被选择上。

（3）选择的所有，而不是一个。

### 2、ID 选择器：规定用`#`来定义

针对某一个特定的标签来使用，只能使用一次。css 中的 ID 选择器以”#”来定义。

举例：

```html
#mytitle{ border:3px dashed green; }
```

效果：

![](http://img.smyhvae.com/2015-10-03-css-08.png)

id 选择器的选择符是“#”。

任何的 HTML 标签都可以有 id 属性。表示这个标签的名字。这个标签的名字，可以任取，但是：

-   （1）只能有字母、数字、下划线。
-   （2）必须以字母开头。
-   （3）不能和标签同名。比如 id 不能叫做 body、img、a。

另外，特别强调的是：**HTML 页面，不能出现相同的 id，哪怕他们不是一个类型**。比如页面上有一个 id 为 pp 的 p，一个 id 为 pp 的 div，是非法的！

**一个标签可以被多个 css 选择器选择：**

比如，我们可以同时让标签选择器和 id 选择器作用于同一个标签。如下：

![](http://img.smyhvae.com/20170710_1737.png)

然后我们通过网页的审查元素看一下效果：

![](http://img.smyhvae.com/20170711_1540.png)

现在，假设选择器冲突了，比如 id 选择器说这个文字是红色的，标签选择器说这个文字是绿色的。那么听谁的？
实际上，css 有着非常严格的计算公式，能够处理冲突.

一个标签可以被多个 css 选择器选择，共同作用，这就是“**层叠式**”的第一层含义（第一层含义和第二层含义，放到 css 基础的第三篇文章里讲）。

### 3、类选择器：规定用圆点`.`来定义

、针对**你想要的所有**标签使用。优点：灵活。

css 中用`.`来表示类。举例如下：

```html
.one{ width:800px; }
```

效果：

![](http://img.smyhvae.com/2015-10-03-css-07.png)

和 id 非常相似，任何的标签都可以携带 id 属性和 class 属性。class 属性的特点：

-   特性 1：类选择器可以被多种标签使用。

-   特性 2：同一个标签可以使用多个类选择器。用**空格**隔开。举例如下：（正确）

```html
<h3 class="teshu  zhongyao">我是一个h3啊</h3>
```

初学者常见的错误，就是写成了两个 class。举例如下：（错误）

```html
<h3 class="teshu" class="zhongyao">我是一个h3啊</h3>
```

**类选择器使用的举例：**

类选择器的使用，能够决定一个人的 css 水平。

比如，我们现在要做下面这样一个页面：

![](http://img.smyhvae.com/20170711_1639.png)

正确的思路，就是用所谓“公共类”的思路，就是我们类就是提供“公共服务”，比如有绿、大、线，一旦携带这个类名，就有相应的样式变化。对应 css 里的代码如下：

```html
<style type="text/css">
    .lv {
        color: green;
    }
    .da {
        font-size: 30px;
    }
    .underline {
        text-decoration: underline;
    }
</style>
```

然后让每个标签去选取自己想要用的类选择器：

```html
<p class="lv da">段落1</p>
<p class="lv xian">段落2</p>
<p class="da xian">段落3</p>
```

也就是说：

（1）不要去试图用一个类名，把某个标签的所有样式写完。这个标签要多携带几个类，共同完成这个标签的样式。

（2）每一个类要尽可能小，有“公共”的概念，能够让更多的标签使用。

问题：到底用 id 还是用 class？

答案：尽可能的用 class，除非极特殊的情况可以用 id。

原因：id 是 js 用的。也就是说，js 要通过 id 属性得到标签，所以 css 层面尽量不用 id，要不然 js 就很别扭。另一层面，我们会认为一个有 id 的元素，有动态效果。

举例如下：

![](http://img.smyhvae.com/20170711_1706.png)

上图所示，css 和 js 都在用同一个 id，会出现不好沟通的情况。

我们记住这句话：**类上样式，id 上行为**。意思是说，`class`属性交给 css 使用，`id`属性交给 js 使用。

**上面这三种选择器的区别：**

-   标签选择器针对的是页面上的一类标签。
-   ID 选择器是只针对特定的标签(一个)，ID 是此标签在此页面上的唯一标识。
-   类选择器可以被多种标签使用。

### 4、通配符`*`：匹配任何标签

通用选择器，将匹配任何标签。不建议使用，IE 有些版本不支持，大网站增加客户端负担。

效率不高，如果页面上的标签越多，效率越低，所以页面上不能出现这个选择器。

举例：

```css
* {
    margin-left: 0px;
    margin-top: 0px;
}
```

效果：

![](http://img.smyhvae.com/2015-10-03-css-09.png)

## CSS 的几种高级选择器

**高级选择器：**

-   后代选择器：用空格隔开
-   交集选择器：选择器之间紧密相连
-   并集选择器（分组选择器）：用逗号隔开
-   伪类选择器

下面详细讲一下这几种高级（扩展）选择器。

### 1、后代选择器: 定义的时候用空格隔开

对于`E F`这种格式，表示**所有属于 E 元素后代的 F 元素**，有这个样式。空格就表示后代。

后代选择器，就是一种平衡：共性、特性的平衡。当要把**某一个部分的所有的什么**，进行样式改变，就要想到后代选择器。

后代选择器，描述的是祖先结构。

看定义可能有点难理解，我们来看例子吧。

举例 1：

```html
<style type="text/css">
    .div1 p {
        color: red;
    }
</style>
```

空格就表示后代。`.div1 p` 表示`.div1`的后代所有的`p`。

这里强调一下：这两个标签不一定是连续紧挨着的，只要保持一个后代的关联即可。也就是说，选择的是后代，不一定是儿子。

举例：

```html
<style type="text/css">
    h3 b i {
        color: red;
    }
</style>
```

上方代码的意思是说：定义了`<h3>`标签中的`<b>`标签中的`<i>`标签的样式。
同理：h3 和 b 和 i 标签不一定是连续紧挨着的，只要保持一个后代的关联即可。

效果：

![](http://img.smyhvae.com/2015-10-03-css-11.png)

或者还有下面这种写法：

![](http://img.smyhvae.com/2015-10-03-css-12.png)

上面的这种写法，`<h3>`标签和`<i>`标签并不是紧挨着的，但他们保持着一种后代关系。

还有下面这种写法：（含类选择器、id 选择器都是可以的）

![](http://img.smyhvae.com/2015-10-03-css-13.png)

我们在开头说了：**后代选择器，描述的是一种祖先结构**。我们举个例子来说明这句话：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <style type="text/css">
            div div p {
                color: red;
            }
        </style>
    </head>
    <body>
        <div>
            <div class="div2">
                <div class="div3">
                    <div class="div4">
                        <p>我是什么颜色？</p>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
```

上面 css 中的`div div p`，也能使文字的颜色变红。通过浏览器的审查元素，我们可以看到 p 元素的祖先列表：

![](http://img.smyhvae.com/20170711_1836.png)

讲到这里，我们再提一个 VS Code 的快捷键：

在 VS Code 中输入`p#haha`，按 tab 键后，会生成`<p id="haha"></p>`。

在 VS Code 中输入`p.haha`，按 tab 键后，会生成`<p class="haha"></p>`。

### 2、交集选择器：定义的时候紧密相连

定义交集选择器的时候，两个选择器之间紧密相连。一般是以标签名开头，比如`div.haha`，再比如`p.special`。

如果后一个选择器是类选择器，则写为`div.special`；如果后一个选择器 id 选择器，则写为`div#special`。

来看下面这张图就明白了：

![](http://img.smyhvae.com/20170711_1851.png)

```css
h3.special {
    color: red;
}
```

选择的元素要求同时满足两个条件：必须是 h3 标签，然后必须是 special 标签。

举例：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>交集选择器测试</title>
        <style type="text/css">
            h3.special {
                color: red;
            }
        </style>
    </head>
    <body>
        <h3 class="special zhongyao">标题1</h3>
        <h3 class="special">我也是标题</h3>
        <p>我是段落</p>
    </body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20170711_1852.png)

注意，交集选择器没有空格。所以，没有空格的`div.red`（交集选择器）和有空格的`div .red`（后代选择器）不是一个意思。

交集选择器可以连续交：（一般不要这么写）

```css
h3.special.zhongyao {
    color: red;
}
```

上面这种写法，是 IE7 开始兼容的，IE6 不兼容。

### 3、并集选择器：定义的时候用逗号隔开

三种基本选择器都可以放进来。

举例：

```css
p,h1,.title1,#one {
    color: red;
}
```

效果：

![](https://img.smyhvae.com/20211116_1055.png)

## 一些 CSS3 选择器

> 所有的 CSS3 选择器，我们放在 CSS3 的内容里介绍。本文暂时先接触一部分。

### 浏览器的兼容性问题

> 我们可以用`IETester`这个软件测一下 CSS 在各个版本 IE 浏览器上的显示效果。

IE： 微软的浏览器，随着操作系统安装的。所以每个 windows 都有 IE 浏览器。各版本如下：

-   windows xp 操作系统安装的 IE6
-   windows vista 操作系统安装的 IE7
-   windows 7 操作系统安装的 IE8
-   windows 8 操作系统安装的 IE9
-   windows10 操作系统安装的 edge

浏览器兼容问题，要出，就基本上就是出在 IE6、7 身上，这两个浏览器是非常低级的浏览器。

为了测试浏览器 CSS 3 的兼容性，我们可以在网上搜"css3 机器猫"关键字，然后在不同的浏览器中打开如下链接：

-   <http://www1.pconline.com.cn/pcedu/specialtopic/css3-doraemon/>

测试结果如下：

![](http://img.smyhvae.com/20170711_1939.png)

我们可以在[百度统计](http://tongji.baidu.com/data/)里查看浏览器的市场占有率：

-   IE9 5.94%
-   IE8 21.19%
-   IE7 4.79%
-   IE6 4.11%

我们可以在<http://html5test.com/results/desktop.html>中查看

![](http://img.smyhvae.com/20170711_1948.png)

我们要知道典型的 IE6 兼容问题（面试要问），但是做项目我们兼容到 IE8 即可。不解决 IE8 以下的兼容问题，目的在于：培养更高的兴趣和眼光，别天天的跟 IE6 较劲。

我们可以用「IETester」软件看看 css 在各个浏览器中的显示效果。

### 1.子代选择器，用符号`>`表示

> IE7 开始兼容，IE6 不兼容。

```css
div > p {
    color: red;
}
```

div 的儿子 p。和 div 的后代 p 的截然不同。

能够选择：

```html
<div>
    <p>我是div的儿子</p>
</div>
```

不能选择：

```html
<div>
    <ul>
        <li>
            <p>我是div的重孙子</p>
        </li>
    </ul>
</div>
```

### 2.序选择器

> IE8 开始兼容；IE6、7 都不兼容

设置无序列表`<ul>`中的第一个`<li>`为红色：

```html
<style type="text/css">
    ul li:first-child {
        color: red;
    }
</style>
```

设置无序列表`<ul>`中的最后一个`<li>`为红色：

```css
ul li:last-child {
    color: blue;
}
```

序选择器还有更复杂的用法，以后再讲。

由于浏览器的更新需要过程，所以现在如果公司还要求兼容 IE6、7，那么就要自己写类名：

```html
<ul>
    <li class="first">项目</li>
    <li>项目</li>
    <li>项目</li>
    <li>项目</li>
    <li>项目</li>
    <li>项目</li>
    <li>项目</li>
    <li>项目</li>
    <li>项目</li>
    <li class="last">项目</li>
</ul>
```

用类选择器来选择第一个或者最后一个：

```html
ul li.first{ color:red; } ul li.last{ color:blue; }
```

### 3.下一个兄弟选择器

> IE7 开始兼容，IE6 不兼容。

`+`表示选择下一个兄弟

```html
<style type="text/css">
    h3 + p {
        color: red;
    }
</style>
```

上方的选择器意思是：选择的是 h3 元素后面紧挨着的第一个兄弟。

```html
<h3>我是一个标题</h3>
<p>我是一个段落</p>
<p>我是一个段落</p>
<p>我是一个段落</p>
<h3>我是一个标题</h3>
<p>我是一个段落</p>
<p>我是一个段落</p>
<p>我是一个段落</p>
<h3>我是一个标题</h3>
<p>我是一个段落</p>
<p>我是一个段落</p>
<p>我是一个段落</p>
<h3>我是一个标题</h3>
```

效果如下：

![](http://img.smyhvae.com/20170711_1950.png)

这种选择器作用不大。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)
---
title: 01-CSS属性：字体属性和文本属性
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 本文重要内容

 - CSS的单位
 - 字体属性
 - 文本属性
 - 定位属性：position、float、overflow等

## CSS的单位

html中的单位只有一种，那就是像素px，所以单位是可以省略的，但是在CSS中不一样。
<font color="#0000FF">**CSS中的单位是必须要写的**，因为它没有默认单位。</font>

### 绝对单位

1 `in`=2.54`cm`=25.4`mm`=72`pt`=6`pc`。

各种单位的含义：

- `in`：英寸Inches (1 英寸 = 2.54 厘米)
- `cm`：厘米Centimeters
- `mm`：毫米Millimeters
- `pt`：点Points，或者叫英镑 (1点 = 1/72英寸)
- `pc`：皮卡Picas (1 皮卡 = 12 点)

### 相对单位

`px`：像素
`em`：印刷单位相当于12个点
`%`：百分比，相对周围的文字的大小

为什么说像素px是一个相对单位呢，这也很好理解。比如说，电脑屏幕的的尺寸是不变的，但是我们可以让其显示不同的分辨率，在不同的分辨率下，单个像素的长度肯定是不一样的啦。

百分比`%`这个相对单位要怎么用呢？这里也举个例子：

![](http://img.smyhvae.com/2015-10-03-css-17.png)

## font 字体属性

CSS中，有很多**非布局样式**（与布局无关），包括：字体、行高、颜色、大小、背景、边框、滚动、换行、装饰性属性（粗体、斜体、下划线）等。

这一段，我们先来讲一下字体属性。

css样式中，常见的字体属性有以下几种：

```css
p{
	font-size: 50px; 		/*字体大小*/
	line-height: 30px;      /*行高*/
	font-family: 幼圆,黑体; 	/*字体类型：如果没有幼圆就显示黑体，没有黑体就显示默认*/
	font-style: italic ;		/*italic表示斜体，normal表示不倾斜*/
	font-weight: bold;	/*粗体*/
	font-variant: small-caps;  /*小写变大写*/
}
```

### 行高

CSS中，所有的行，都有行高。盒子模型的padding，绝对不是直接作用在文字上的，而是作用在“行”上的。

如下图所示：

![](http://img.smyhvae.com/20170808_2216.png)

上图中，我们设置行高为30px，30px * 5 = 150px，通过查看审查元素，这个p标签的高度果然为150px。而且我们发现，我们并没有给这个p标签设置高度，显然是内容将其撑高的。

垂直方向来看，文字在自己的行里是居中的。比如，文字是14px，行高是24px，那么padding就是5px：

![](http://img.smyhvae.com/20170808_2220.png)

为了严格保证字在行里面居中，我们的工程师有一个约定： **行高、字号，一般都是偶数**。这样可以保证，它们的差一定偶数，就能够被2整除。

### 如何让单行文本垂直居中

小技巧：如果一段文本只有一行，如果此时设置**行高 = 盒子高**，就可以保证单行文本垂直居中。这个很好理解。

上面这个小技巧，只适用于单行文本垂直居中，不适用于多行。如果想让多行文本垂直居中，还需要计算盒子的padding。计算方式如下：

![](http://img.smyhvae.com/20170808_2240.png)

### `vertical-align: middle;` 属性

`vertical-align`属性可用于指定**行内元素**（inline）、**行内块元素**（inline-block）、**表格的单元格**（table-cell）的垂直对齐方式。主要是用于图片、表格、文本的对齐。

代码举例：

```css
vertical-align: middle; /*指定行级元素的垂直对齐方式。*/
```

关于这一点，连 MDN 上都没我讲得详细。MDN上的原话是 “vertical-align 用来指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方式。” MDN上的这种描述是不完整的，漏掉了行内块元素（inline-block）。

### 字号、行高、字体三大属性

（1）字号：

```
	font-size:14px;
```

（2）行高：

```
	line-height:24px;
```

（3）字体：（font-family就是“字体”，family是“家庭”的意思）

```
	font-family:"宋体";
```

是否加粗属性以及上面这三个属性，我们可以连写：（是否加粗、字号 font-size、行高 line-height、字体 font-family）

格式：

```
	font: 加粗 字号/行高/ 字体

```

举例：

```
	font: 400 14px/24px "宋体";
```

PS：400是nomal，700是bold。

上面这几个属性可以连写，但是有一个要求，font属性连写至少要有**字号和字体**，否则连写是不生效的（相当于没有这一行代码）。


**2、字体属性的说明：**

（1）网页中不是所有字体都能用，因为这个字体要看用户的电脑里面装没装，比如你设置：

```
	font-family: "华文彩云";
```

上方代码中，如果用户的 Windows 电脑里面没有这个字体，那么就会变成宋体。

页面中，中文我们一般使用：微软雅黑、宋体、黑体。英文使用：Arial、Times New Roman。页面中如果需要其他的字体，就需要单独安装字体，或者切图。

（2）为了防止用户电脑里，没有微软雅黑这个字体。就要用英语的逗号，提供备选字体。如下：（可以备选多个）

```
	font-family: "微软雅黑","宋体";
```

上方代码表示：如果用户电脑里没有安装微软雅黑字体，那么就是宋体。


（3）我们须将英语字体放在最前面，这样所有的中文，就不能匹配英语字体，就自动的变为后面的中文字体：

```
	font-family: "Times New Roman","微软雅黑","宋体";
```

上方代码的意思是，英文会采用Times New Roman字体，而中文会采用微软雅黑字体（因为美国人设计的Times New Roman字体并不针对中文，所以中文会采用后面的微软雅黑）。比如说，对于`smyhvae哈哈哈`这段文字，`smyhvae`会采用Times New Roman字体，而`哈哈哈`会采用微软雅黑字体。

可是，如果我们把中文字体写在前面：(错误写法)

```
	font-family: "微软雅黑","Times New Roman","宋体";
```

上方代码会导致，中文和英文都会采用微软雅黑字体。

（4）所有的中文字体，都有英语别名。

微软雅黑的英语别名：

```
	font-family: "Microsoft YaHei";
```

宋体的英语别名：

```
	font-family: "SimSun";
```

于是，当我们把字号、行高、字体这三个属性合二为一时，也可以写成：

```
	font:12px/30px  "Times New Roman","Microsoft YaHei","SimSun";
```

（5）行高可以用百分比，表示字号的百分之多少。

一般来说，百分比都是大于100%的，因为行高一定要大于字号。

比如说， `font:12px/200% “宋体”`等价于`font:12px/24px “宋体”`。`200%`可以理解成word里面的2倍行高。

反过来， `font:16px/48px “宋体”;`等价于`font:16px/300% “宋体”`。

### 字体加粗属性

```css
.div {
	font-weight: normal; /*正常*/
	font-weight: bold;  /*加粗*/
	font-weight: 100;
	font-weight: 200;
	font-weight: 900;
}

```

在设置字体是否加粗时，属性值既可以填写`normal`、`bold`这样的加粗字体，也可以直接填写 100至900 这样的数字。`normal`的值相当于400，`bold`的值相当于700。

## 文本属性

CSS样式中，常见的文本属性有以下几种：

- `letter-spacing: 0.5cm ;`  单个字母之间的间距
- `word-spacing: 1cm;`   单词之间的间距
- `text-decoration: none;` 字体修饰：none 去掉下划线、**underline 下划线**、line-through 中划线、overline 上划线
- `color:red;` 字体颜色
- `text-align: center;` 在当前容器中的对齐方式。属性值可以是：left、right、center（<font color="#0000FF">**在当前容器的中间**</font>）、justify
- `text-transform: lowercase;` 单词的字体大小写。属性值可以是：`uppercase`（单词大写）、`lowercase`（单词小写）、`capitalize`（每个单词的首字母大写）

这里来一张表格的图片吧，一览无遗：

![](http://img.smyhvae.com/2015-10-03-css-18.png)

## 列表属性

```css
ul li{
	list-style-image:url(images/2.gif) ;  /*列表项前设置为图片*/
	margin-left:80px;  /*公有属性*/
}
```

另外还有一个简写属性叫做`list-style`，它的作用是：将上面的多个属性写在一个声明中。

我们来看一下`list-style-image`属性的效果：

![](http://img.smyhvae.com/2015-10-03-css-23.png)

给列表前面的图片加个边距吧，不然显示不完整：

![](http://img.smyhvae.com/2015-10-03-css-24_2.png)

这里来一张表格的图片吧，一览无遗：

![](http://img.smyhvae.com/2015-10-03-css-26.png)

## overflow属性：超出范围的内容要怎么处理

`overflow`属性的属性值可以是：

- `visible`：默认值。多余的内容不剪切也不添加滚动条，会全部显示出来。
- `hidden`：不显示超过对象尺寸的内容。
- `auto`：如果内容不超出，则不显示滚动条；如果内容超出，则显示滚动条。
 - `scroll`：Windows 平台下，无论内容是否超出，总是显示滚动条。Mac 平台下，和 `auto` 属性相同。

针对上面的不同的属性值，我们来看一下效果：
举例：

```html
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>

	<style type="text/css">

		div{
			width: 100px;
			height: 100px;
			background-color: #00cc66;
			margin-right: 100px;
			float: left;
		}

		#div1{
			overflow: auto;/*超出的部分让浏览器自行解决*/
		}
		#div2{
			overflow: visible;/*超出的部分会显示出来*/
		}

		#div3{
			overflow: hidden;/*超出的部分将剪切掉*/
		}

	</style>

 </head>

 <body>

	<div id="div1">其实很简单 其实很自然 两个人的爱由两人分担 其实并不难 是你太悲观 隔着一道墙不跟谁分享 不想让你为难 你不再需要给我个答案</div>
	<div id="div2">其实很简单 其实很自然 两个人的爱由两人分担 其实并不难 是你太悲观 隔着一道墙不跟谁分享 不想让你为难 你不再需要给我个答案</div>
	<div id="div3">其实很简单 其实很自然 两个人的爱由两人分担 其实并不难 是你太悲观 隔着一道墙不跟谁分享 不想让你为难 你不再需要给我个答案</div>
 </body>

</html>
```

效果：

![](http://img.smyhvae.com/2015-10-03-css-31.png)

## 鼠标的属性 cursor

鼠标的属性`cursor`有以下几个属性值：

 - `auto`：默认值。浏览器根据当前情况自动确定鼠标光标类型。
 - `pointer`：IE6.0，竖起一只手指的手形光标。就像通常用户将光标移到超链接上时那样。
 - `hand`：和`pointer`的作用一样：竖起一只手指的手形光标。就像通常用户将光标移到超链接上时那样。

比如说，我想让鼠标放在那个标签上时，光标显示手状，代码如下：

```html
p:hover{
	cursor: pointer;
}
```

另外还有以下的属性：（不用记，需要的时候查一下就行了）

- all-scroll      :　 IE6.0  有上下左右四个箭头，中间有一个圆点的光标。用于标示页面可以向上下左右任何方向滚动。
- col-resize      :　 IE6.0  有左右两个箭头，中间由竖线分隔开的光标。用于标示项目或标题栏可以被水平改变尺寸。
- crosshair       :　  简单的十字线光标。
- default         :　  客户端平台的默认光标。通常是一个箭头。
- hand            :　  竖起一只手指的手形光标。就像通常用户将光标移到超链接上时那样。
- move            :　  十字箭头光标。用于标示对象可被移动。
- help            :　  带有问号标记的箭头。用于标示有帮助信息存在。
- no-drop         :　 IE6.0  带有一个被斜线贯穿的圆圈的手形光标。用于标示被拖起的对象不允许在光标的当前位置被放下。
- not-allowed     :　 IE6.0  禁止标记(一个被斜线贯穿的圆圈)光标。用于标示请求的操作不允许被执行。
- progress        :　 IE6.0  带有沙漏标记的箭头光标。用于标示一个进程正在后台运行。
- row-resize      :　 IE6.0  有上下两个箭头，中间由横线分隔开的光标。用于标示项目或标题栏可以被垂直改变尺寸。
- text            :　  用于标示可编辑的水平文本的光标。通常是大写字母 I 的形状。
- vertical-text   :　 IE6.0  用于标示可编辑的垂直文本的光标。通常是大写字母 I 旋转90度的形状。
- wait            :　  用于标示程序忙用户需要等待的光标。通常是沙漏或手表的形状。
- *-resize        :　  用于标示对象可被改变尺寸方向的箭头光标。
-                      w-resize | s-resize | n-resize | e-resize | ne-resize | sw-resize | se-resize | nw-resize
- url ( url )     :　 IE6.0  用户自定义光标。使用绝对或相对 url 地址指定光标文件(后缀为 .cur 或者 .ani )。

## 滤镜

这里只举一个滤镜的例子吧。比如说让图片变成灰度图的效果，可以这样设置滤镜：

```html
	<img src="3.jpg" style="filter:gray()">
```

举例代码：

```html
 <body>
	<table>
		<tr>
			<td>原始图片</td>
			<td>图片加入黑白效果</td>
		</tr>
	<tr>
		<td><img src="3.jpg"></td>
		<td><img src="3.jpg" style="filter:gray()"></td> /*滤镜：设置图片为灰白效果*/
	</tr>
	</table>
 </body>
```

效果如下：（IE有效果，google浏览器无效果）

![](http://img.smyhvae.com/2015-10-03-css-36.png)

**延伸：**
滤镜本身是平面设计中的知识。如果你懂一点PS的话···打开PS看看吧：

![](http://img.smyhvae.com/2015-10-03-css-38.png)

爆料一下，表示博主有两年多的平面设计经验，我做设计的时间其实比写代码的时间要长，嘿嘿···

## 导航栏的制作（本段内容请忽略）

现在，我们利用float浮动属性来把无序列表做成一个简单的导航栏吧，效果如下：

![](http://img.smyhvae.com/2015-10-03-css-34.png)

代码：

```html
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>

	<style type="text/css">
		ul{
			list-style: none;/*去掉列表前面的圆点*/
			width: 420px;
			height: 60px;
			background-color: black;/*设置整个导航栏的背景为灰色*/
		}

		li{
			float: left;/*平铺*/
			margin-right: 30px;
			margin-top: 16px;
		}

		a{
			text-decoration: none;/*去掉超链的下划线*/
			font-size: 20px;
			color: #BBBBBB;/*设置超链的字体为黑色*/
			font-family:微软雅黑;
		}

	</style>

 </head>
 <body>
	<ul>
		<li><a href="">博客园</a></li>
		<li><a href="">新随笔</a></li>
		<li><a href="">联系</a></li>
		<li><a href="">订阅</a></li>
		<li><a href="">管理</a></li>

	</ul>
 </body>
</html>
```

实现效果如下：

![](http://img.smyhvae.com/2015-10-03-css-35.png)

国庆这四天，连续写了四天的博客，白天和黑夜，从未停歇，只交替没交换，为的就是这每日一发。以后会不断更新的。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)
---
title: 02-CSS属性：背景属性
publish: true
---

<ArticleTopAd></ArticleTopAd>


## background 的常见背景属性


**css2.1** 中，常见的背景属性有以下几种：（经常用到，要记住）

- `background-color:#ff99ff;`  设置元素的背景颜色。

- `background-image:url(images/2.gif);` 将图像设置为背景。

-  `background-repeat: no-repeat;`  设置背景图片是否重复及如何重复，默认平铺满。（重要）
	- `no-repeat`不要平铺；
	- `repeat-x`横向平铺；
	- `repeat-y`纵向平铺。

- `background-position:center top;` 设置背景图片在当前容器中的位置。

- `background-attachment:scroll;` 设置背景图片是否跟着滚动条一起移动。
属性值可以是：`scroll`（与fixed属性相反，默认属性）、`fixed`（背景就会被固定住，不会被滚动条滚走）。

- 另外还有一个综合属性叫做`background`，它的作用是：将上面的多个属性写在一个声明中。

**CSS3** 中，新增了一些background属性：

- background-origin

- background-clip 背景裁切

- background-size 调整尺寸

- 多重背景

上面这几个属性经常用到，需要记住。现在我们逐个进行讲解。

## background-color：背景颜色的表示方法

css2.1 中，颜色的表示方法有三种：单词、rgb表示法、十六进制表示法。

比如红色可以有下面的三种表示方法：

```css
	background-color: red;
	background-color: rgb(255,0,0);
	background-color: #ff0000;
```

CSS3 中，有一种新的表示颜色的方式：RGBA或者HSLA。

RGBA、HSLA可应用于**所有**使用颜色的地方。

下面分别介绍。

### 用英语单词表示

能够用英语单词来表述的颜色，都是简单颜色，比如red、green、blue、orange、gray等。代码举例：

```css
background-color: red;
```
### RGB 表示法

RGB 表示三原色“红”red、“绿”green、“蓝”blue。

光学显示器中，每个像素都是由三原色的发光原件组成的，靠明亮度不同调成不同的颜色的。r、g、b的值，每个值的取值范围0~255，一共256个值。

比如红色：

```css
background-color: rgb(255,0,0);
```

黑色：

```css
background-color: rgb(0,0,0);
```

颜色可以叠加，比如黄色就是红色和绿色的叠加：

```css
background-color: rgb(255,255,0);
```

### RGBA 表示法

```javascript
    background-color: rgba(0, 0, 255, 0.3);

    border: 30px solid rgba(0, 255, 0, 0.3);
```

**代码解释**：

- RGBA 即：Red 红、Green 绿、Blue 蓝、Alpha 透明度。

- R、G、B 的取值范围是：0~255；透明度的取值范围是 0~1。

**RGB色彩模式：**

 - 自然界中绝大部分颜色都可以用红、绿、蓝(RGB)这三种颜色波长的不同强度组合而得，这就是人们常说的三原色原理。
 - RGB三原色也叫加色模式，这是因为当我们把不同光的波长加到一起的时候，可以得到不同的混合色。例：红+绿=黄色，红+蓝＝紫色，绿+蓝=青。
 - RGB各有256级(0-255)亮度，256级的RGB色彩总共能组合出约1678万种色彩，即256×256×256=16777216。

 在数字视频中，对RGB三基色各进行8位编码就构成了大约1678万种颜色，这就是我们常说的真彩色。所有显示设备都采用的是RGB色彩模式。

### 十六进制表示法

比如红色：

```
background-color: #ff0000;
```

所有用`#`开头的色值，都是16进制的。

这里，我们就要学会16进制与10进制之间的转换。下面举几个例子。

问：16进制中的28等于10进制的多少？
答：2*16+8 = 40。

16进制中的af等于10进制的多少？
答：10 * 16 + 15 = 175

以此类推：

- #ff0000等于rgb(255,0,0)。

- `background-color: #123456;`等价于`background-color: rgb(18,52,86);`

**十六进制可以简化为3位，所有#aabbcc的形式，能够简化为#abc**。举例如下：

比如：

```
	background-color:#ff0000;
```

等价于：

```
	background-color:#f00;
```

比如：

```
	background-color:#112233;
```

等价于：

```
	background-color:#123;
```

但是，比如下面这个是无法简化的：

```
	background-color:#222333;
```

再比如，下面这个也是无法简化的：

```
	background-color:#123123;
```

几种常见的颜色简写可以记住。如下：

```
	#000   黑
	#fff   白
	#f00   红
	#222   深灰
	#333   灰
	#ccc   浅灰
```

### HSLA 表示法

举例：

```javascript
	background-color: hsla(240,50%,50%,0.4);
```

解释：

- `H` 色调，取值范围 0~360。0或360表示红色、120表示绿色、240表示蓝色。

- `S` 饱和度，取值范围 0%~100%。值越大，越鲜艳。

- `L` 亮度，取值范围 0%~100%。亮度最大时为白色，最小时为黑色。

- `A` 透明度，取值范围 0~1。

如果不知道 H 的值该设置多少，我们不妨来看一下**色盘**：

![](http://img.smyhvae.com/20180207_1545.png)

推荐链接：[配色宝典](http://www.uisdc.com/how-to-create-color-palettes)

**关于设置透明度的其他方式：**

（1）`opacity: 0.3;` 会将整个盒子及子盒子设置透明度。也就是说，当盒子设置半透明的时候，会影响里面的子盒子。

（2）`background: transparent;` 可以单独设置透明度，但设置的是完全透明（不可调节透明度）。

## `background-repeat`属性

`background-repeat:no-repeat;`设置背景图片是否重复及如何重复，默认平铺满。属性值可以是：

- `no-repeat`（不要平铺）
- `repeat-x`（横向平铺）
- `repeat-y`（纵向平铺）

这个属性在开发的时候也是经常用到的。我们通过设置不同的属性值来看一下效果吧：

（1）不加这个属性时：（即默认时）（背景图片会被平铺满）

![](http://img.smyhvae.com/2015-10-03-css-19.png)

PS：padding的区域也是有背景图的。

（2）属性值为`no-repeat`（不要平铺）时：

![](http://img.smyhvae.com/2015-10-03-css-20.png)

（3）属性值为`repeat-x`（横向平铺）时：

![](http://img.smyhvae.com/2015-10-03-css-21.png)

其实这种属性的作用还是很广的。举个例子，设计师设计一张宽度只有1px、颜色纵向渐变的图片，然后我们通过这个属性将其进行水平方向的平铺，就可以看到整个页面都是渐变的了。

在搜索引擎上搜“**平铺背景**”，就可以发现，**周期性的图片**可以采用此种方法进行平铺。

（4）属性值为`repeat-y`（纵向平铺）时：

![](http://img.smyhvae.com/2015-10-03-css-22.png)

## `background-position`属性

`background-position`属性指的是**背景定位**属性。公式如下：

在描述属性值的时候，有两种方式：用像素描述、用单词描述。下面分别介绍。

**1、用像素值描述属性值：**

格式如下：

```
	background-position:向右偏移量 向下偏移量;
```

属性值可以是正数，也可以是负数。比如：`100px 200px`、`-50px -120px`。

举例如下：

![](http://img.smyhvae.com/20170812_1643.png)


![](http://img.smyhvae.com/20170812_1645.png)

**2、用单词描述属性值：**

格式如下：

```
	background-position: 描述左右的词 描述上下的词;
```

- 描述左右的词：left、center、right
- 描述上下的词：top 、center、bottom

比如说，`right center`表示将图片放到右边的中间；`center center`表示将图片放到正中间。

比如说，`bottom`表示图片的底边和父亲**底边贴齐**（好好理解）。

位置属性有很多使用场景的。我们来举两个例子。

场景1：（大背景图）

打开“暗黑3 台湾”的官网<https://tw.battle.net/d3/zh/>，可以看到官网的效果是比较炫的：

![](http://img.smyhvae.com/20170812_1945.jpg)

检查网页后，找到网站背景图片的url：<https://tw.battle.net/d3/static/images/layout/bg-repeat.jpg>。背景图如下：

![](http://img.smyhvae.com/20170812_1950.jpg)

实际上，我们是通过把这张图片作为网站的背景图来达到显示效果的。只需要给body标签加如下属性即可：

```
        body{
            background-image: url(/Users/smyhvae/Dropbox/img/20170812_1950.jpg);
            background-repeat: no-repeat;
            background-position: center top;
        }
```

上方代码中，如果没加`background-position`这个属性，背景图会默认处于浏览器的左上角（显得很丑）；加了此属性之后，图片在水平方向就位于浏览器的中间了。

场景2：（通栏banner）

很多网站的首页都会有banner图（网站最上方的全屏大图叫做「**通栏banner**」），这种图要求横向的宽度特别大。比如说，设计师给你一张1920*465的超大banner图，如果我们把这个banner图作为img标签直接插入网页中，会有问题的：首先，图片不在网页的中间；其次，肯定会出现横向滚动条。如下图所示：

![](http://img.smyhvae.com/20170813_1102.gif)

正确的做法是，将banner图作为div的背景图，这样的话，背景图超出div的部分，会自动移溢出。需要给div设置的属性如下：

```css
        div{
            height: 465px;
            background-image: url(http://img.smyhvae.com/20170813_1053.jpg);
            background-position: center top;
            background-repeat: no-repeat;
        }
```

上方代码中，我们给div设置height（高度为banner图的高度），不需要设置宽度（因为宽度会自动霸占整行）。效果如下：

![](http://img.smyhvae.com/20170813_1119.gif)

上图可以看出，将banner图作为div的背景后，banner图会永远处于网页的正中间（水平方向来看）。

## background-attachment 属性

- `background-attachment:scroll;` 设置背景图片是否固定。属性值可以是：
	- `fixed`（背景就会被固定住，不会被滚动条滚走）。
	- `scroll`（与fixed属性相反，默认属性）

`background-attachment:fixed;`的效果如下：

![](http://img.smyhvae.com/20170813_1158.gif)

### background 综合属性

background属性和border一样，是一个综合属性，可以将多个属性写在一起。(在[盒子模型](http://www.cnblogs.com/smyhvae/p/7256371.html)这篇文章中专门讲到border)

举例1:

```css
	background:red url(1.jpg) no-repeat 100px 100px fixed;
```

等价于：

```css
	background-color:red;
	background-image:url(1.jpg);
	background-repeat:no-repeat;
	background-position:100px 100px;
	background-attachment:fixed;
```

以后，我们可以用小属性层叠掉大属性。

上面的属性中，可以任意省略其中的一部分。

比如说，对于下面这样的属性：

```css
	background: blue url(images/wuyifan.jpg) no-repeat 100px 100px;
```

效果如下：

![](http://img.smyhvae.com/20170813_1515.png)

## `background-size`属性：背景尺寸

`background-size`属性：设置背景图片的尺寸。

格式举例：

```javascript
	/* 宽、高的具体数值 */
	background-size: 500px 500px;

	/* 宽高的百分比（相对于容器的大小） */
	background-size: 50% 50%;   // 如果两个属性值相同，可以简写成：background-size: 50%;

	background-size: 100% auto;  //这个属性可以自己试验一下。

	/* cover：图片始终填充满容器，且保证长宽比不变。图片如果有超出部分，则超出部分会被隐藏。 */
	background-size: cover;

	/* contain：将图片完整地显示在容器中，且保证长宽比不变。可能会导致容器的部分区域为空白。  */
	background-size: contain;
```

这里我们对属性值 `cover` 和 `contain` 进行再次强调：

- `cover`：图片始终**填充满**容器，且保证**长宽比不变**。图片如果有超出部分，则超出部分会被隐藏。

- `contain`：将图片**完整地**显示在容器中，且保证**长宽比不变**。可能会导致容器的部分区域留白。

代码举例：（这张图片本身的尺寸是 1080 * 1350）

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		.img_wrap {
			display: flex;
		}

		.img {
			width: 200px;
			height: 200px;
			border:1px solid red;
			background: url(http://img.smyhvae.com/20191006_1330.jpg) no-repeat;
			margin-right: 20px;
		}

		.div1 {
			background-size: cover;
		}
		.div2{
			background-size: contain;
		}
	</style>
</head>

<body>
	<section class="img_wrap">
		<div class="img div1"></div>
		<div class="img div2"></div>

	</section>
</body>

</html>
```

效果如下：

![](http://img.smyhvae.com/20191006_1350.png)

在上方代码的基础之上，再加一个 `background-position: center`属性之后，图片就会在容器里**居中显示**：

![](http://img.smyhvae.com/20191006_1520.png)

## 背景原点：`background-origin` 属性

`background-origin` 属性：控制背景从什么地方开始显示。

格式举例：

```javascript

	/* 从 padding-box 内边距开始显示背景图 */
	background-origin: padding-box;           //默认值

	/* 从 border-box 边框开始显示背景图  */
	background-origin: border-box;

	/* 从 content-box 内容区域开始显示背景图  */
	background-origin: content-box;

```

如果属性值设置成了`border-box`，那边框部分也会显示图片哦。

如下图所示：

![](http://img.smyhvae.com/20180207_2115.png)

## `background-clip`属性：设置元素的背景（背景图片或颜色）是否延伸到边框下面

格式举例：

`background-clip: content-box;`   超出的部分，将裁剪掉。属性值可以是：

 - `border-box` 超出 border-box 的部分，将裁剪掉

 - `padding-box` 超出 padding-box 的部分，将裁剪掉

 - `content-box` 超出 content-box 的部分，将裁剪掉

假设现在有这样的属性设置：

```javascript
	background-origin: border-box;

	background-clip: content-box;
```

上方代码的意思是，背景图片从**边框部分**开始加载，但是呢，超出**内容区域**的部分将被裁减掉。

## 同时设置多个背景

我们可以给一个盒子同时设置多个背景，用以逗号隔开即可。可用于自适应局。

代码举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box {
            height: 416px;
            border: 1px solid #000;
            margin: 100px auto;
            /* 给盒子加多个背景，按照背景语法格式书写，多个背景使用逗号隔开 */
            background: url(images/bg1.png) no-repeat left top,
            url(images/bg2.png) no-repeat right top,
            url(images/bg3.png) no-repeat right bottom,
            url(images/bg4.png) no-repeat left bottom,
            url(images/bg5.png) no-repeat center;
        }
    </style>
</head>
<body>
<div class="box"></div>
</body>
</html>
```

实现效果如下：

![](http://img.smyhvae.com/20180207_2140.gif)

上方代码中，我们其实给盒子设置了五张小图，拼成的一张大图。当改变浏览器窗口大小时，可以自适应布局。

## 渐变：background-image

渐变是CSS3当中比较丰富多彩的一个特性，通过渐变我们可以实现许多炫丽的效果，有效的减少图片的使用数量，并且具有很强的适应性和可扩展性。

渐变分为：

- 线性渐变：沿着某条直线朝一个方向产生渐变效果。

- 径向渐变：从一个**中心点**开始沿着**四周**产生渐变效果。

- 重复渐变。

见下图：

![](http://img.smyhvae.com/20180208_1140.png)

### 线性渐变

格式：

```javascript

    background-image: linear-gradient(方向, 起始颜色, 终止颜色);

    background-image: linear-gradient(to right, yellow, green);
```

参数解释：

- 方向可以是：`to left`、`to right`、`to top`、`to bottom`、角度`30deg`（指的是顺时针方向30°）。

格式举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 500px;
            height: 100px;
            margin: 10px auto;
            border: 1px solid #000;
        }

        /* 语法：
            linear-gradient(方向，起始颜色，终止颜色);
            方向：to left   to right  to top   to bottom 　角度　30deg
            起始颜色
            终止颜色
        */
        div:nth-child(1) {
            background-image: linear-gradient(to right, yellow, green);
        }

        /* 不写方向，表示默认的方向是：从上往下 */
        div:nth-child(2) {
            background-image: linear-gradient(yellow, green);
        }

        /* 方向可以指定角度 */
        div:nth-child(3) {
            width: 100px;
            height: 100px;
            background-image: linear-gradient(135deg, yellow, green);
        }

        /* 0%的位置开始出现黄色，40%的位置开始出现红色的过度。70%的位置开始出现绿色的过度，100%的位置开始出现蓝色 */
        div:nth-child(4) {
            background-image: linear-gradient(to right,
            yellow 0%,
            red 40%,
            green 70%,
            blue 100%);

        }

        /* 颜色之间，出现突变 */
        div:nth-child(5) {
            background-image: linear-gradient(45deg,
            yellow 0%,
            yellow 25%,
            blue 25%,
            blue 50%,
            red 50%,
            red 75%,
            green 75%,
            green 100%
            );
        }

        div:nth-child(6) {
            background-image: linear-gradient(to right,
            #000 0%,
            #000 25%,
            #fff 25%,
            #fff 50%,
            #000 50%,
            #000 75%,
            #fff 75%,
            #fff 100%
            );

        }

    </style>
</head>
<body>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180207_2222.png)

**举例**：按钮

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS3 渐变</title>
    <style>
        html, body {
            height: 100%;
        }

        body {
            margin: 0;
            padding: 0;
            background-color: #f8fcd4;
        }

        .nav {
            width: 800px;
            text-align: center;
            padding-top: 50px;
            margin: 0 auto;
        }

        /*设置按钮基本样式*/
        .nav a {
            display: inline-block;
            width: 100px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            font-size: 14px;
            color: #fff;
            text-decoration: none;
            border: 1px solid #e59500;
            background-color: #FFB700;
            background-image: linear-gradient(
                    to bottom,
                    #FFB700 0%,
                    #FF8C00 100%
            );
        }

    </style>
</head>
<body>
<div class="nav">
    <a href="javascript:;">导航1</a>
    <a href="javascript:;">导航2</a>
    <a href="javascript:;">导航3</a>
    <a href="javascript:;">导航4</a>
    <a href="javascript:;">导航5</a>
    <a href="javascript:;">导航6</a>
</div>
</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180207_2301.png)

### 径向渐变

格式：

```
	background-image: radial-gradient(辐射的半径大小, 中心的位置, 起始颜色, 终止颜色);

	background-image: radial-gradient(100px at center,yellow ,green);

```

解释：围绕中心点做渐变，半径是150px，从黄色到绿色做渐变。

中心点的位置可以是：at  left  right  center bottom  top。如果以像素为单位，则中心点参照的是盒子的左上角。

当然，还有其他的各种参数。格式举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 250px;
            height: 250px;
            border: 1px solid #000;
            margin: 20px;
            float: left;
        }

        /*
            径向渐变：
            radial-gradient（辐射的半径大小, 中心的位置，起始颜色，终止颜色）;
            中心点位置：at  left  right  center bottom  top
        */

        /*辐射半径为100px，中心点在中间*/
        div:nth-child(1) {
            background-image: radial-gradient(100px at center, yellow, green);
        }

        /*中心点在左上角*/
        div:nth-child(3) {
            background-image: radial-gradient(at left top, yellow, green);
        }

        div:nth-child(2) {
            background-image: radial-gradient(at 50px 50px, yellow, green);
        }

        /*设置不同的颜色渐变*/
        div:nth-child(4) {
            background-image: radial-gradient(100px at center,
            yellow 0%,
            green 30%,
            blue 60%,
            red 100%);
        }

        /*如果辐射半径的宽高不同，那就是椭圆*/
        div:nth-child(5) {
            background-image: radial-gradient(100px 50px at center, yellow, green);
        }

    </style>
</head>
<body>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180207_2256.png)

**举例：**利用径向渐变和边框圆角的属性，生成按钮。代码如下：


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS3 渐变</title>
    <style>

        div:nth-child(1) {
            width: 200px;
            height: 200px;
            margin: 40px auto;
            border-radius: 100px;
            background-color: yellowgreen;
        }

        div:nth-child(2) {
            width: 200px;
            height: 200px;
            margin: 40px auto;
            border-radius: 100px;
            background-color: yellowgreen;
            background-image: radial-gradient(
                    200px at 100px 100px,
                    rgba(0, 0, 0, 0),
                    rgba(0, 0, 0, 0.5)
            );
        }
    </style>
</head>
<body>
<div></div>
<div></div>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180208_1133.png)

上图中，给第二个div设置的透明度是从0到0.5。如果设置的透明度是从0到0，则样式无变化，和第一个div一样。如果设置的透明度是从1到1，则盒子是全黑的。

## clip-path：裁剪出元素的部分区域做展示

`clip-path`属性可以创建一个只有元素的部分区域可以显示的剪切区域。区域内的部分显示，区域外的隐藏。

虽然`clip-path`不是背景属性，但这个属性非常强大，但往往会结合背景属性一起使用，达到一些效果。

举例：（鼠标悬停时，放大裁剪的区域）

```css
    .div1 {
        width: 320px;
        height: 320px;
        border: 1px solid red;
        background: url(http://img.smyhvae.com/20191006_1410.png) no-repeat;
        background-size: cover;

        /* 裁剪出圆形区域 */
        clip-path: circle(50px at 100px 100px);
        transition: clip-path .4s;
    }
    .div1:hover{
        /* 鼠标悬停时，裁剪出更大的圆形 */
        clip-path: circle(80px at 100px 100px);
    }
```

`clip-path`属性的好处是，即使做了任何裁剪，**容器的占位大小是不变的**。比如上方代码中，容器的占位大小一直都是 320px * 320px。这样的话，也方便我们做一些动画效果。

`clip-path: polygon()`举例：

![](http://img.smyhvae.com/20191006_1430.png)

另外，通过 `clip-path: (svg)` 可以导入svg矢量图，实现 iOS图标的圆角。这里就不详细展开了。



## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)
---
title: 04-CSS选择器：伪类
publish: true
---

<ArticleTopAd></ArticleTopAd>



## 伪类（伪类选择器）


**伪类**：同一个标签，根据其**不同的种状态，有不同的样式**。这就叫做“伪类”。伪类用冒号来表示。


比如div是属于box类，这一点很明确，就是属于box类。但是a属于什么类？不明确。因为需要看用户点击前是什么状态，点击后是什么状态。所以，就叫做“伪类”。



### 静态伪类选择器、动态伪类选择器


伪类选择器分为两种。

（1）**静态伪类**：只能用于**超链接**的样式。如下：

- `:link` 超链接点击之前
- `:visited` 链接被访问过之后

PS：以上两种样式，只能用于超链接。

（2）**动态伪类**：针对**所有标签**都适用的样式。如下：

- `:hover` “悬停”：鼠标放到标签上的时候
- `:active`	“激活”： 鼠标点击标签，但是不松手时。
- `:focus` 是某个标签获得焦点时的样式（比如某个输入框获得焦点）


## 超链接a标签

### 超链接的四种状态


a标签有4种伪类（即对应四种状态），要求背诵。如下：

- `:link`  	“链接”：超链接点击之前
- `:visited` “访问过的”：链接被访问过之后
- `:hover`	“悬停”：鼠标放到标签上的时候
- `:active`	“激活”： 鼠标点击标签，但是不松手时。


对应的代码如下：

```html
<style type="text/css">
	/*让超链接点击之前是红色*/
	a:link{
		color:red;
	}

	/*让超链接点击之后是绿色*/
	a:visited{
		color:orange;
	}

	/*鼠标悬停，放到标签上的时候*/
	a:hover{
		color:green;
	}

	/*鼠标点击链接，但是不松手的时候*/
	a:active{
		color:black;
	}
</style>
```


记住，在css中，这四种状态**必须按照固定的顺序写**：

> a:link 、a:visited 、a:hover 、a:active

如果不按照顺序，那么将失效。“爱恨准则”：love hate。必须先爱，后恨。

看一下这四种状态的动图效果：

![](http://img.smyhvae.com/20180113_2239.gif)

### 超链接的美化

问：既然`a{}`定义了超链的属性，和`a:link{}`定义了超链点击之前的属性，那这两个有啥区别呢？

答：

**`a{}`和`a:link{}`的区别：**

 - `a{}`定义的样式针对所有的超链接(包括锚点)
 - `a:link{}`定义的样式针对所有写了href属性的超链接(不包括锚点)

超链接a标签在使用的时候，比较难。因为不仅仅要控制a这个盒子，也要控制它的伪类。

我们一定要将a标签写在前面，将`:link、:visited、:hover、:active`这些伪类写在后面。

针对超链接，我们来举个例子：

![](http://img.smyhvae.com/20170810_2235.gif)


为了实现上面这个效果，完整版代码如下：

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>Document</title>
	<style type="text/css">
		*{
			margin: 0;
			padding: 0;
		}
		.nav{
			width: 960px;
			height: 50px;
			border: 1px solid red;
			margin: 100px auto;
		}
		.nav ul{
			/*去掉小圆点*/
			list-style: none;
		}
		.nav ul li{
			float: left;
			width: 120px;
			height: 50px;
			/*让内容水平居中*/
			text-align: center;
			/*让行高等于nav的高度，就可以保证内容垂直居中*/
			line-height: 50px;
		}
		.nav ul li a{
			display: block;
			width: 120px;
			height: 50px;
		}
		/*两个伪类的属性，可以用逗号隔开*/
		.nav ul li a:link , .nav ul li a:visited{
			text-decoration: none;
			background-color: purple;
			color:white;
		}
		.nav ul li a:hover{
			background-color: orange;
		}
	</style>
</head>
<body>
	<div class="nav">
		<ul>
			<li><a href="#">网站栏目</a></li>
			<li><a href="#">网站栏目</a></li>
			<li><a href="#">网站栏目</a></li>
			<li><a href="#">网站栏目</a></li>
			<li><a href="#">网站栏目</a></li>
			<li><a href="#">网站栏目</a></li>
			<li><a href="#">网站栏目</a></li>
			<li><a href="#">网站栏目</a></li>
		</ul>
	</div>
</body>
</html>
```

上方代码中，我们发现，当我们在定义`a:link`和 `a:visited`这两个伪类的时候，如果它们的属性相同，我们其实可以写在一起，用逗号隔开就好，摘抄如下：

```css
		.nav ul li a{
			display: block;
			width: 120px;
			height: 50px;
		}
		/*两个伪类的属性，可以用逗号隔开*/
		.nav ul li a:link , .nav ul li a:visited{
			text-decoration: none;
			background-color: purple;
			color:white;
		}
		.nav ul li a:hover{
			background-color: orange;
		}
```

如上方代码所示，最标准的写法，就是把link、visited、hover这三个伪类都要写。但是前端开发工程师在大量的实践中，发现不写link、visited也挺兼容。写法是：

> a:link、a:visited都是可以省略的，简写在a标签里面。也就是说，a标签涵盖了link、visited的状态（前提是都具有了相同的属性）。写法如下：


```css
		.nav ul li a{
			display: block;
			width: 120px;
			height: 50px;
			text-decoration: none;
			background-color: purple;
			color:white;
		}
		.nav ul li a:hover{
			background-color: orange;
		}

```

当然了，在写`a:link`、`a:visited`这两个伪类的时候，要么同时写，要么同时不写。如果只写`a`属性和`a:link`属性，不规范。

## 动态伪类举例

我们在第一段中描述过，下面这三种动态伪类，针对所有标签都适用。

- `:hover` “悬停”：鼠标放到标签上的时候
- `:active`	“激活”： 鼠标点击标签，但是不松手时。
- `:focus` 是某个标签获得焦点时的样式（比如某个输入框获得焦点）

我们不妨来举下例子。

举例1：

```html
  <style type="text/css">
  /*
	伪类选择器：动态伪类
  */

   /*
	让文本框获取焦点时：
	边框：#FF6F3D这种橙色
	文字：绿色
	背景色：#6a6a6a这种灰色
   */
	input:focus{
		border:3px solid #FF6F3D;
		color:white;
		background-color:#6a6a6a;
	}

	/*
	鼠标放在标签上时显示蓝色
    */
	label:hover{
		color:blue;
	}

	/*
	点击标签鼠标没有松开时显示红色
    */
	label:active{
		color:red;
	}

  </style>
```

效果：

![](http://img.smyhvae.com/2015-10-03-css-02.gif)

利用这个`hover`属性，我们同样对表格做一个样式的设置：
表格举例：

```html
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>
  <style type="text/css">

	/*整个表格的样式*/
  	table{
		width: 300px;
		height: 200px;
		border: 1px solid blue;
		/*border-collapse属性：对表格的线进行折叠*/
		border-collapse: collapse;
  	}

	/*鼠标悬停时，让当前行显示#868686这种灰色*/
  	table tr:hover{
  		background: #868686;
  	}

	/*每个单元格的样式*/
  	table td{
  		border:1px solid red;
  	}

  </style>
 </head>
 <body>

  <table>
  <tr>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
  </tr>
  <tr>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
  </tr>
  <tr>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
  </tr>
  </table>

 </body>
</html>
```

效果：

![](http://img.smyhvae.com/2015-10-03-css-04.gif)


## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)
---
title: 08-CSS属性：定位属性
publish: true
---

<ArticleTopAd></ArticleTopAd>




CSS的定位属性有三种，分别是绝对定位、相对定位、固定定位。

```
	position: absolute;  <!-- 绝对定位 -->

	position: relative;  <!-- 相对定位 -->

	position: fixed;     <!-- 固定定位 -->

```

下面逐一介绍。

## 相对定位

**相对定位**：让元素相对于自己原来的位置，进行位置调整（可用于盒子的位置微调）。

我们之前学习的背景属性中，是通过如下格式：

```
	background-position:向右偏移量 向下偏移量;
```

但这回的定位属性，是通过如下格式：

```
	position: relative;
	left: 50px;
	top: 50px;
```

相对定位的举例：

```html
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>

	<style type="text/css">

		body{
			margin: 0px;
		}

		.div1{
			width: 200px;
			height: 200px;
			border: 1px solid red;
		}

		.div2{
			position: relative;/*相对定位：相对于自己原来的位置*/
			left: 50px;/*横坐标：正值表示向右偏移，负值表示向左偏移*/
			top: 50px;/*纵坐标：正值表示向下偏移，负值表示向上偏移*/

			width: 200px;
			height: 200px;
			border: 1px solid red;
		}
	</style>
 </head>

 <body>

	<div class="div1">有生之年</div>
	<div class="div2">狭路相逢</div>

 </body>

</html>
```

效果：

![](http://img.smyhvae.com/2015-10-03-css-28.png)

### 相对定位不脱标

**相对定位**：不脱标，老家留坑，**别人不会把它的位置挤走**。

也就是说，相对定位的真实位置还在老家，只不过影子出去了，可以到处飘。

### 相对定位的用途

如果想做“压盖”效果（把一个div放到另一个div之上），我们一般**不用**相对定位来做。相对定位，就两个作用：

- （1）微调元素
- （2）做绝对定位的参考，子绝父相

### 相对定位的定位值

- left：盒子右移

- right：盒子左移

- top：盒子下移

- bottom：盒子上移

PS：负数表示相反的方向。

↘：

```
	position: relative;
	left: 40px;
	top: 10px;
```

↙：

```
	position: relative;
	right: 100px;
	top: 100px;
```

↖：

```
	position: relative;
	right: 100px;
	bottom: 100px;
```

↗：

```
	position: relative;
	left: 200px;
	bottom: 200px;

```

![](http://img.smyhvae.com/20180115_1716.png)

如果要描述上面这张图的方向，我们可以首先可以这样描述：

```
	position: relative;
	left: 200px;
	top: 100px;

```

因为`left: 200px`等价于`right: -200px`，所以这张图其实有四种写法。

## 绝对定位

**绝对定位**：定义横纵坐标。原点在父容器的左上角或左下角。横坐标用left表示，纵坐标用top或者bottom表示。

格式举例如下：

```
	position: absolute;  /*绝对定位*/
	left: 10px;  /*横坐标*/
	top/bottom: 20px;  /*纵坐标*/
```

### 绝对定位脱标

**绝对定位的盒子脱离了标准文档流。**

所以，所有的标准文档流的性质，绝对定位之后都不遵守了。

绝对定位之后，标签就不区分所谓的行内元素、块级元素了，不需要`display:block`就可以设置宽、高了。

### 绝对定位的参考点（重要）

（1）如果用**top描述**，那么参考点就是**页面的左上角**，而不是浏览器的左上角：

![](http://img.smyhvae.com/20180115_2120.png)

（2）如果用**bottom描述**，那么参考点就是**浏览器首屏窗口尺寸**（好好理解“首屏”二字），对应的页面的左下角：

![](http://img.smyhvae.com/20180115_2121.png)

为了理解“**首屏**”二字的含义，我们来看一下动态图：

![](http://img.smyhvae.com/20180115_2200.gif)

问题：

![](http://img.smyhvae.com/20180115_2131.png)

答案：

用bottom的定位的时候，参考的是浏览器首屏大小对应的页面左下角。

![](http://img.smyhvae.com/20180115_2132.png)

### 以盒子为参考点

一个绝对定位的元素，如果父辈元素中也出现了已定位（无论是绝对定位、相对定位，还是固定定位）的元素，那么将以父辈这个元素，为参考点。

如下：（子绝父相）

![](http://img.smyhvae.com/20180115_2210.png)

以下几点需要注意。

（1） 要听最近的已经定位的祖先元素的，不一定是父亲，可能是爷爷：

```
		<div class="box1">        相对定位
			<div class="box2">    没有定位
				<p></p>           绝对定位，将以box1为参考，因为box2没有定位，box1就是最近的父辈元素
			</div>
		</div>

```

再比如：

```
		<div class="box1">        相对定位
			<div class="box2">    相对定位
				<p></p>           绝对定位，将以box2为参考，因为box2是自己最近的父辈元素
			</div>
		</div>
```

（2）不一定是相对定位，任何定位，都可以作为儿子的参考点：

子绝父绝、**子绝父相**、子绝父固，都是可以给儿子定位的。但是在工程上，如果子绝、父绝，没有一个盒子在标准流里面了，所以页面就不稳固，没有任何实战用途。

**工程应用：**

“**子绝父相**”有意义：这样可以保证父亲没有脱标，儿子脱标在父亲的范围里面移动。于是，工程上经常这样做：

> 父亲浮动，设置相对定位（零偏移），然后让儿子绝对定位一定的距离。

（3）绝对定位的儿子，无视参考的那个盒子的padding：

下图中，绿色部分是父亲div的padding，蓝色部分p是div的内容区域。此时，如果div相对定位，p绝对定位，那么，
p将无视父亲的padding，在border内侧为参考点，进行定位：

![](http://img.smyhvae.com/20180116_0812.png)

**工程应用：**

绝对定位非常适合用来做“压盖”效果。我们来举个lagou.com上的例子。

现在有如下两张图片素材：

![](http://img.smyhvae.com/20180116_1115.png)

![](http://img.smyhvae.com/20180116_1116.jpg)

要求作出如下效果：

![](http://img.smyhvae.com/20180116_1117.png)

代码实现如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		.box{
			margin: 100px;
			width: 308px;
			height: 307px;
			border: 1px solid #FF7E00;
			position: relative;  /*子绝父相*/

		}
		.box .image img{
			width: 308px;
			height: 196px;
		}
		.box .dtc{
			display: block;  /*转为块级元素，才能设置span的宽高*/
			width: 52px;
			height: 28px;
			background-image: url(http://img.smyhvae.com/20180116_1115.png);
			background-position: -108px 0px; /*这里用到了精灵图*/
			position: absolute;  /*采用绝对定位的方式，将精灵图盖在最上层*/
			top: -9px;
			left: 13px;
		}
		.box h4{
			background-color: black;
			color: white;
			width:308px;
			height: 40px;
			line-height: 40px;
			position: absolute;
			top: 156px;
		}
	</style>
</head>
<body>
	<div class="box">
		<span class="dtc"></span>
		<div class="image">
			<img src="http://img.smyhvae.com/20180116_1116.jpg" alt="">
		</div>
		<h4>广东深圳宝安区建安一路海雅缤纷城4楼</h4>
	</div>
</body>
</html>
```

代码解释如下：

- 为了显示“多套餐”那个小图，我们需要用到精灵图。

- “多套餐”下方黑色背景的文字都是通过“子绝父相”的方式的盖在大海报image的上方的。

代码的效果如下：

![](http://img.smyhvae.com/20180116_1335.png)

### 让绝对定位中的盒子在父亲里居中

我们知道，如果想让一个**标准流中的盒子在父亲里居中**（水平方向看），可以将其设置`margin: 0 auto`属性。

可如果盒子是绝对定位的，此时已经脱标了，如果还想让其居中（位于父亲的正中间），可以这样做：

```
	div {
		width: 600px;
		height: 60px;
		position: absolute;  绝对定位的盒子
		left: 50%;           首先，让左边线居中
		top: 0;
		margin-left: -300px;  然后，向左移动宽度（600px）的一半
	}
```

如上方代码所示，我们先让这个宽度为600px的盒子，左边线居中，然后向左移动宽度（600px）的一半，就达到效果了。

![](http://img.smyhvae.com/20180116_1356.png)

我们可以总结成一个公式：

> left:50%; margin-left:负的宽度的一半

## 固定定位

**固定定位**：就是相对浏览器窗口进行定位。无论页面如何滚动，这个盒子显示的位置不变。

备注：IE6不兼容。

**用途1**：网页右下角的“返回到顶部”

比如我们经常看到的网页右下角显示的“返回到顶部”，就可以固定定位。

```html
	<style type="text/css">
		.backtop{
			position: fixed;
			bottom: 100px;
			right: 30px;
			width: 60px;
			height: 60px;
			background-color: gray;
			text-align: center;
			line-height:30px;
			color:white;
			text-decoration: none;   /*去掉超链接的下划线*/
		}
	</style>
```

**用途2：**顶部导航条

我们经常能看到固定在网页顶端的导航条，可以用固定定位来做。

需要注意的是，假设顶部导航条的高度是60px，那么，为了防止其他的内容被导航条覆盖，我们要给body标签设置60px的padding-top。

顶部导航条的实现如下：

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>Document</title>
	<style type="text/css">
		*{
			margin: 0;
			padding: 0;
		}
body{
			/*为什么要写这个？*/
			/*不希望我们的页面被nav挡住*/
			padding-top: 60px;
			/*IE6不兼容固定定位，所以这个padding没有什么用，就去掉就行了*/
			_padding-top:0;
		}
		.nav{
			position: fixed;
			top: 0;
			left: 0;
	 		width: 100%;
			height: 60px;
			background-color: #333;
			z-index: 99999999;
		}
		.inner_c{
			width: 1000px;
			height: 60px;
			margin: 0 auto;

		}
		.inner_c ul{
			list-style: none;
		}
		.inner_c ul li{
			float: left;
			width: 100px;
			height: 60px;
			text-align: center;
			line-height: 60px;
		}
		.inner_c ul li a{
			display: block;
			width: 100px;
			height: 60px;
			color:white;
			text-decoration: none;
		}
		.inner_c ul li a:hover{
			background-color: gold;
		}
		p{
			font-size: 30px;
		}
		.btn{
			display: block;
			width: 120px;
			height: 30px;
			background-color: orange;
			position: relative;
			top: 2px;
			left: 1px;
		}
	</style>
</head>
<body>
	<div class="nav">
		<div class="inner_c">
			<ul>
				<li><a href="#">网页栏目</a></li>
				<li><a href="#">网页栏目</a></li>
				<li><a href="#">网页栏目</a></li>
				<li><a href="#">网页栏目</a></li>
				<li><a href="#">网页栏目</a></li>
				<li><a href="#">网页栏目</a></li>
				<li><a href="#">网页栏目</a></li>
				<li><a href="#">网页栏目</a></li>
				<li><a href="#">网页栏目</a></li>
				<li><a href="#">网页栏目</a></li>
			</ul>
		</div>
	</div>
</body>
</html>

```

### 5、z-index属性：

**z-index**属性：表示谁压着谁。数值大的压盖住数值小的。

有如下特性：

 （1）属性值大的位于上层，属性值小的位于下层。

 （2）z-index值没有单位，就是一个正整数。默认的z-index值是0。

 （3）如果大家都没有z-index值，或者z-index值一样，那么在HTML代码里写在后面，谁就在上面能压住别人。定位了的元素，永远能够压住没有定位的元素。

 （4）只有定位了的元素，才能有z-index值。也就是说，不管相对定位、绝对定位、固定定位，都可以使用z-index值。**而浮动的元素不能用**。

 （5）从父现象：父亲怂了，儿子再牛逼也没用。意思是，如果父亲1比父亲2大，那么，即使儿子1比儿子2小，儿子1也能在最上层。

针对（1）（2）（3）条，举例如下：

这是默认情况下的例子：（div2在上层，div1在下层）

![](http://img.smyhvae.com/2015-10-03-css-32.png)

现在加一个`z-index`属性，要求效果如下：

![](http://img.smyhvae.com/2015-10-03-css-33.png)

第五条分析：

![](http://img.smyhvae.com/20180116_1445.png)


z-index属性的应用还是很广泛的。当好几个已定位的标签出现覆盖的现象时，我们可以用这个z-index属性决定，谁处于最上方。也就是**层级**的应用。


**层级：**

（1）必须有定位（除去static）

（2）用`z-index`来控制层级数。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)
---
title: 10-CSS3选择器详解
publish: true
---

<ArticleTopAd></ArticleTopAd>




## CSS3介绍

CSS3在CSS2基础上，**增强**或**新增**了许多特性， 弥补了CSS2的众多不足之处，使得Web开发变得更为高效和便捷。

### CSS3的现状

- 浏览器支持程度不够好，有些需要添加**私有前缀**

- 移动端支持优于PC端

- 不断改进中

- 应用相对广泛

### 应对的策略：渐进增强

- （1）坚持**渐进增强**的原则：**让低版本浏览器能正常访问页面，高版本的浏览器用户体验更好**。【重要】

比如说，同样是一个头像，可能在低版本的浏览器中，头像方的；在高版本的浏览器中，头像是圆的。

- （2）考虑用户群体。

- （3）遵照产品的方案。

参考链接：

- [渐进增强 VS 优雅降级 | 简书](https://www.jianshu.com/p/d313f1108862)

- [渐进增强和优雅降级之间的不同（面试题目）](https://www.cnblogs.com/iceflorence/archive/2017/03/27/6625466.html)

### 浏览器的版本问题

由于CSS3普遍存在兼容性问题，为了避免因兼容性带来的干扰，浏览器的建议版本为：

- Chrome浏览器 version 46+

- Firefox浏览器 firefox 42+

### 如何使用手册

CSS参考手册的网址：<http://css.doyoe.com/>

CSS参考手册的下载链接：<http://download.csdn.net/download/smyhvae/10243974>

在查看[CSS参考手册](http://download.csdn.net/download/smyhvae/10243974)时，需要注意以下符号：

![](http://img.smyhvae.com/20180206_2150.png)

比如说，`{1,4}`表示可以设置一至四个参数。

下面讲CSS3的基础知识。本文讲一下 CSS3 选择器的内容。

## CSS3 选择器

我们之前学过 CSS 的选择器，比如：

```
     div 标签选择器

     .box 类名选择器

     #box　id选择器

     div p 后代选择器

     div.box 交集选择器

     div,p,span 并集选择器

     div>p 子代选择器

     * : 通配符

     div+p: 选中div后面相邻的第一个p

     div~p: 选中的div后面所有的p

```

CSS3新增了许多**灵活**查找元素的方法，极大的提高了查找元素的效率和**精准度**。CSS3选择器与 jQuery 中所提供的**绝大部分**选择器兼容。

### 属性选择器

属性选择器的标志性符号是 `[]`。

匹配含义：

```
^：开头  $：结尾  *：包含
```

格式：

- `E[title]` 选中页面的E元素，并且E存在 title 属性即可。

- `E[title="abc"]`选中页面的E元素，并且E需要带有title属性，且属性值**完全等于**abc。

- `E[attr~=val]`  选择具有 att 属性且属性值为：用空格分隔的字词列表，其中一个等于 val 的E元素。

- `E[attr|=val]` 表示要么是一个单独的属性值，要么这个属性值是以“-”分隔的。

- `E[title^="abc"]` 选中页面的E元素，并且E需要带有 title 属性,属性值以 abc 开头。

- `E[title$="abc"]` 选中页面的E元素，并且E需要带有 title 属性,属性值以 abc 结尾。

- `E[title*="abc"]` 选中页面的E元素，并且E需要带有 title 属性,属性值任意位置包含abc。

比如说，我们用属性选择器去匹配标签的className，是非常方便的。

这里我们用class属性来举例。代码举例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>选择器 - 属性</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: '微软雅黑';
            background-color: #F7F7F7;
        }

        .wrapper {
            width: 1024px;
            margin: 0 auto;
        }

        .wrapper > section {
            min-height: 300px;
            margin-bottom: 30px;
            box-shadow: 1px 1px 4px #DDD;
            background-color: #FFF;
        }

        .wrapper > header {
            text-align: center;
            line-height: 1;
            padding: 20px;
            margin-bottom: 10px;
            font-size: 30px;
        }

        .wrapper section > header {
            line-height: 1;
            padding: 10px;
            font-size: 22px;
            color: #333;
            background-color: #EEE;
        }

        .wrapper .wrap-box {
            padding: 20px;
        }

        form {
            width: 300px;
            height: 300px;
            margin: 0 auto;
        }

        form input[type="text"] {
            width: 200px;
            height: 30px;
        }

        form input[type="password"] {
            width: 200px;
            height: 30px;
        }

        .attr1 {

        }

        .download {
        }

        .attr1 a[href="./a.rmvb"] {
            color: red;
        }

        .attr1 a[href="./b.rmvb"] {
            color: pink;
        }

        /*  E[attr~=val] 表示的一个单独的属性值 这个属性值是以空格分隔的*/
        .attr2 a[class~="download"] {
            color: red;
        }

        /*  E[attr|=val] 表示的要么一个单独的属性值 要么这个属性值是以"-"分隔的*/
        .attr3 a[class|="download"] {
            color: red;
        }

        /*  E[attr*=val] 表示的属性值里包含val字符并且在“任意”位置 */
        .attr4 a[class*="download"] {
            color: red;
        }

        /*  E[attr^=val] 表示的属性值里包含val字符并且在“开始”位置 */
        .attr5 a[class^="download"] {
            color: red;
        }

        /*  E[attr$=val] 表示的属性值里包含val字符并且在“结束”位置 */
        .attr6 a[class$="download"] {
            color: red;
        }
    </style>
</head>
<body>
<div class="wrapper">
    <header>CSS3-属性选择器</header>
    <section>
        <header>简介</header>
        <div class="wrap-box">
            <form action="">

                <ul>
                    <li>
                        姓名: <input type="text">
                    </li>
                    <li>
                        密码: <input type="password">
                    </li>

                    <li>
                        性别: <input type="radio">男
                        <input type="radio"> 女
                    </li>
                    <li>
                        兴趣: <input type="checkbox" name="" id="">写代码
                    </li>
                    <li>
                        <input type="submit" value="提交">
                    </li>
                </ul>
            </form>
        </div>
    </section>
    <section class="attr1">
        <header>E[attr]</header>
        <div class="wrap-box">
            <a href="./a.rmvb" class="download download-movie">下载</a>
            <a href="./b.rmvb" class="download download-movie">下载</a>
            <a href="./a.mp3" class="download download-music">下载</a>
        </div>
    </section>
    <section class="attr2">
        <header>E[attr~=attr]</header>
        <div class="wrap-box">
            <a href="./a.rmvb" class="download download-movie">下载</a>
            <a href="./b.rmvb" class="download download-movie">下载</a>
            <a href="./a.mp3" class="download download-music">下载</a>
        </div>
    </section>
    <section class="attr3">
        <header>E[attr|=attr]</header>
        <div class="wrap-box">
            <a href="./a.rmvb" class="download">下载</a>
            <a href="./b.rmvb" class="download-movie">下载</a>
            <a href="./a.mp3" class="download-music">下载</a>
        </div>
    </section>
    <section class="attr4">
        <header>E[attr*=val]</header>
        <div class="wrap-box">
            <a href="./a.rmvb" class="download">下载</a>
            <a href="./b.rmvb" class="moviedownload">下载</a>
            <a href="./a.mp3" class="downloadmusic">下载</a>
        </div>
    </section>
    <section class="attr5">
        <header>E[attr^=val]</header>
        <div class="wrap-box">
            <a href="./a.rmvb" class="download">下载</a>
            <a href="./b.rmvb" class="moviedownload">下载</a>
            <a href="./a.mp3" class="downloadmusic">下载</a>
        </div>
    </section>
    <section class="attr6">
        <header>E[attr$=val]</header>
        <div class="wrap-box">
            <a href="./a.rmvb" class="download">下载</a>
            <a href="./b.rmvb" class="moviedownload">下载</a>
            <a href="./a.mp3" class="downloadmusic">下载</a>
        </div>
    </section>
</div>
</body>
</html>
```

最后来张表格：

![](http://img.smyhvae.com/20180207_1500.png)

### 结构伪类选择器

伪类选择器的标志性符号是 `:`。

CSS中有一些伪类选择器，比如`:link`、`:visited`、`:hover`、`:active`、`:focus`。

CSS3又新增了其它的伪类选择器。这一小段，我们来学习CSS3中的**结构伪类选择器**：即通过**结构**来进行筛选。


**1、格式：（第一部分）**

- `E:first-child` 匹配父元素的第一个子元素E。

- `E:last-child` 匹配父元素的最后一个子元素E。

- `E:nth-child(n)` 匹配父元素的第n个子元素E。**注意**，盒子的编号是从`1`开始算起，不是从`0`开始算起。

- `E:nth-child(odd)` 匹配奇数

- `E:nth-child(even)` 匹配偶数

- `E:nth-last-child(n)` 匹配父元素的倒数第n个子元素E。

理解：

（1）这里我们要好好理解**父元素**的含义，它指的是：以 E 元素的父元素为参考。

（2）注意：以上选择器中所选到的元素的类型，必须是指定的类型E，如果选不中，则无效。这个要好好理解，具体可以看CSS参考手册中的`E:nth-child(n)`的示例。我们可以理解成：**先根据选择器找到选中的全部位置，如果发现某个位置不是类型E，则该位置失效**。

（3）另外，`E:nth-child(n)`这个属性也很有意思。比如，针对下面这样一组标签：

```html
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
    </ul>
```

上方代码中：

- 如果选择器写成`li:nth-child(2)`，则表示第2个 `li`。

- 如果选择器写成`li:nth-child(n)`，则表示**所有的**`li`。因为此时的 `n` 表示 0,1,2,3,4,5,6,7,8.....（当n小于1时无效，因为n = 0 也是不会选中的）

- 如果选择器写成`li:nth-child(2n)`，则表示所有的**第偶数个** li。

- 如果选择器写成`li:nth-child(2n+1)`，则表示所有的**第奇数个** li。

- 如果选择器写成`li:nth-child(-n+5)`，则表示**前5个** li。

- 如果选择器写成`li:nth-last-child(-n+5)`，则表示**最后5个** li。

- 如果选择器写成`li:nth-child(7n)`，则表示选中7的倍数。。

上面列举的选择器中，我们只要记住： `n` 表示 0,1,2,3,4,5,6,7,8.....就很容易明白了。

**2、格式：（第二部分）**

- `E:first-of-type` 匹配同类型中的第一个同级兄弟元素E。

- `E:last-of-type` 匹配同类型中的最后一个同级兄弟元素E。

- `E:nth-of-type(n)` 匹配同类型中的第n个同级兄弟元素E。

- `E:nth-last-of-type(n)` 匹配同类型中的倒数第n个同级兄弟元素E。

既然上面这几个选择器带有`type`，我们可以这样理解：先在同级里找到所有的E类型，然后根据 n 进行匹配。


**3、格式：（第三部分）**

- `E:empty` 匹配没有任何子节点（包括空格等text节点）的元素E。

- `E:target` 匹配相关URL指向的E元素。要配合锚点使用。


**举例：**

我们可以把多个伪类选择器结合起来使用，比如：

![](http://img.smyhvae.com/20180207_1340.png)


如果想把上图中，第一行的前三个 span 标红，我们可以这样使用结构伪类选择器：

```css
	dt:first-child span:nth-of-type(-n+3) {
		color: red;
	}
```

最后来张表格：

![](http://img.smyhvae.com/20180207_1502.png)

### 伪元素选择器

伪元素选择器的标志性符号是 `::`。

**1、格式：（第一部分）**

- `E::before` 设置在 元素E 前面（依据对象树的逻辑结构）的内容，配合content属性一起使用。

- `E::after` 设置在 元素E 后面（依据对象树的逻辑结构）的内容，配合content属性一起使用。

`E:after`、`E:before `在旧版本里是伪类，在 CSS3 这个新版本里是伪元素。新版本里，`E:after`、`E:before`会被自动识别为`E::after`、`E::before`，按伪元素来对待，这样做的目的是用来做兼容处理。

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>

        /*::before 和::after 是通过 css 模拟出的html标签的效果*/
        span::before{
            content:"smyhvae";
            color:red;
            background-color: pink;
            width: 50px;
            height: 50px;
            display: inline-block;
        }

        span::after{
            content:"永不止步";
            color:yellowgreen;
        }

        /*给原本的span标签设置一个默认的属性*/
        span{
            border: 1px solid #000;
        }
    </style>
</head>
<body>

<span>生命壹号</span>
</body>
</html>

```

效果如下：

![](http://img.smyhvae.com/20180207_1409.png)

**上图可以看出**：

- 通过伪元素选择器，就可以添加出类似于span标签的效果（记得要结合 content 属性使用）。

- 通过这两个属性添加的伪元素，是**行内元素**，需要转换成块元素才能设置宽高。

**2、格式：（第二部分）**

- `E::first-letter` 设置元素 E 里面的**第一个字符**的样式。

- `E::first-line` 设置元素 E 里面的**第一行**的样式。

- `E::selection` 设置元素 E 里面被鼠标选中的区域的样式（一般设置颜色和背景色）。

`E::first-letter` 的举例：

![](http://img.smyhvae.com/20180207_1430.png)

`E::first-line`的举例：

![](http://img.smyhvae.com/20180207_1433.png)

最后来张表格：

![](http://img.smyhvae.com/20180207_1503.png)


## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)
---
title: 06-CSS盒模型详解
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 盒子模型

### 前言

盒子模型，英文即box model。无论是div、span、还是a都是盒子。

但是，图片、表单元素一律看作是文本，它们并不是盒子。这个很好理解，比如说，一张图片里并不能放东西，它自己就是自己的内容。

### 盒子中的区域

一个盒子中主要的属性就5个：width、height、padding、border、margin。如下：

- width和height：**内容**的宽度、高度（不是盒子的宽度、高度）。
- padding：内边距。
- border：边框。
- margin：外边距。

盒子模型的示意图：

![](http://img.smyhvae.com/20170727_2128.png)

代码演示：

![](http://img.smyhvae.com/20170727_2326.png)

上面这个盒子，width:200px; height:200px; 但是真实占有的宽高是302*302。 这是因为还要加上padding、border。

注意：**宽度和真实占有宽度，不是一个概念！**来看下面这例子。

### 标准盒模型和IE盒模型

> 我们目前所学习的知识中，以标准盒子模型为准。

标准盒子模型：

![](http://img.smyhvae.com/2015-10-03-css-27.jpg)

IE盒子模型：

![](http://img.smyhvae.com/2015-10-03-css-30.jpg)

上图显示：

在 CSS 盒子模型 (Box Model) 规定了元素处理元素的几种方式：

- width和height：**内容**的宽度、高度（不是盒子的宽度、高度）。
- padding：内边距。
- border：边框。
- margin：外边距。

CSS盒模型和IE盒模型的区别：

- 在 <font color="#0000FF">**标准盒子模型**</font>中，<font color="#0000FF">**width 和 height 指的是内容区域**</font>的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。

- <font color="#0000FF">**IE盒子模型**</font>中，<font color="#0000FF">**width 和 height 指的是内容区域+border+padding**</font>的宽度和高度。


注：Android中也有margin和padding的概念，意思是差不多的，如果你会一点Android，应该比较好理解吧。区别在于，Android中没有border这个东西，而且在Android中，margin并不是控件的一部分，我觉得这样做更合理一些，呵呵。

### `<body>`标签也有margin

`<body>`标签有必要强调一下。很多人以为`<body>`标签占据的是整个页面的全部区域，其实是错误的，正确的理解是这样的：整个网页最大的盒子是`<document>`，即浏览器。而`<body>`是`<document>`的儿子。浏览器给`<body>`默认的margin大小是8个像素，此时`<body>`占据了整个页面的一大部分区域，而不是全部区域。来看一段代码。

```html
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>

	<style type="text/css">

		div{
			width: 100px;
			height: 100px;
			border: 1px solid red;
			padding: 20px;
			margin: 30px;
		}

	</style>

 </head>

 <body>

	<div>有生之年</div>
	<div>狭路相逢</div>

 </body>

</html>

```

上面的代码中，我们对div标签设置了边距等信息。打开google浏览器，按住F12，显示效果如下：

![](http://img.smyhvae.com/20151003_27.png)

## 认识width、height

一定要知道，在前端开发工程师眼中，世界中的一切都是不同的。

比如说，丈量稿纸，前端开发工程师只会丈量内容宽度：

![](http://img.smyhvae.com/20170727_2329.png)

下面这两个盒子，真实占有宽高，都是302*302：

盒子1：

```css
.box1{
	width: 100px;
	height: 100px;
	padding: 100px;
	border: 1px solid red;
}
```

盒子2：

```css
.box2{
	width: 250px;
	height: 250px;
	padding: 25px;
	border: 1px solid red;
}
```


真实占有宽度 = 左border + 左padding + width + 右padding + 右border

上面这两个盒子的盒模型图如下：

![](http://img.smyhvae.com/20170728_0925.png)


**如果想保持一个盒子的真实占有宽度不变，那么加width的时候就要减padding。加padding的时候就要减width**。因为盒子变胖了是灾难性的，这会把别的盒子挤下去。


## 认识padding

### padding区域也有颜色

padding就是内边距。padding的区域有背景颜色，css2.1前提下，并且背景颜色一定和内容区域的相同。也就是说，background-color将填充**所有border以内的区域。**

效果如下：

![](http://img.smyhvae.com/20170728_1005.png)

### padding有四个方向

padding是4个方向的，所以我们能够分别描述4个方向的padding。

方法有两种，第一种写小属性；第二种写综合属性，用空格隔开。

小属性的写法：

```css
	padding-top: 30px;
	padding-right: 20px;
	padding-bottom: 40px;
	padding-left: 100px;
```

综合属性的写法：(上、右、下、左)（顺时针方向，用空格隔开。margin的道理也是一样的）

```css
padding:30px 20px 40px 100px;
```

如果写了四个值，则顺序为：上、右、下、左。

如果只写了三个值，则顺序为：上、右和左、下。

如果只写了两个值，则顺序为：上和下、左和右。

比如说：

```
padding: 30px 40px;
```

则顺序等价于：30px 40px 30px 40px;

要懂得，**用小属性层叠大属性**。比如：

```
padding: 20px;
padding-left: 30px;
```

上面的padding对应盒子模型为：

![](http://img.smyhvae.com/20170728_1039.png)

下面的写法：

```
padding-left: 30px;
padding: 20px;
```

第一行的小属性无效，因为被第二行的大属性层叠掉了。

下面的题，会做了，说明你明白了。

### 一些题目

**题目1**：说出下面盒子真实占有宽高，并画出盒模型图。

```css
	div{
		width: 200px;
		height: 200px;
		padding: 10px 20px 30px;
		padding-right: 40px;
		border: 1px solid #000;
	}
```

答案：

![](http://img.smyhvae.com/20170728_1048.png)

**题目2**：说出下面盒子真实占有宽高，并画出盒模型图。

```css
	div{
		width: 200px;
		height: 200px;
		padding-left: 10px;
		padding-right: 20px;
		padding:40px 50px 60px;
		padding-bottom: 30px;
		border: 1px solid #000;
	}
```

答案：

`padding-left:10px；` 和`padding-right:20px;` 没用，因为后面的padding大属性，层叠掉了他们。

盒子模型如下：

![](http://img.smyhvae.com/20170728_1100.png)

**题目3**：现在给你一个盒子模型图，请写出代码，试着用最最简单的方法写。

![](http://img.smyhvae.com/20170728_1401.png)

答案：

```css
	width:123px;
	height:123px;
	padding:20px 40px;
	border:1px solid red;
```

**题目4**：现在给你一个盒子模型图，请写出代码，试着用最最简单的方法写。

![](http://img.smyhvae.com/20170728_1402.png)

答案：

```css
	width:123px;
	height:123px;
	padding:20px;
	padding-right:40px;
	border:1px solid red;

```

### 一些元素，默认带有padding

一些元素，默认带有`padding`，比如ul标签。如下：

![](http://img.smyhvae.com/20170728_1413.png)

上图显示，不加任何样式的ul，也是有40px的padding-left。

所以，我们做站的时候，为了便于控制，总是喜欢清除这个默认的padding。

可以使用`*`进行清除：

```css
		*{
			margin: 0;
			padding: 0;
		}
```

 但是，`*`的效率不高，所以我们使用并集选择器，罗列所有的标签（不用背，有专业的清除默认样式的样式表，今后学习）：

```
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{
    margin:0;
    padding:0;
}
```

## 认识border

border就是边框。边框有三个要素：像素（粗细）、线型、颜色。

比如：

```css

.div1{
	width: 10px;
	height: 10px;
	border: 2px solid red;
}

```

颜色如果不写，默认是黑色。另外两个属性如果不写，则无法显示边框。

### border-style

border的所有的线型如下：（我们可以通过查看`CSS参考手册`得到）

![](http://img.smyhvae.com/20170728_1435.png)

比如`border:10px ridge red;`这个属性，在chrome和firefox、IE中有细微差别：（因为可以显示出效果，因此并不是兼容性问题，只是有细微差别而已）

![](http://img.smyhvae.com/20170728_1619.png)


如果公司里面的设计师是处女座的，追求极高的**页面还原度**，那么不能使用css来制作边框。就要用到图片，就要切图了。

所以，比较稳定的border-style就几个：solid、dashed、dotted。

### border拆分

border是一个大综合属性。比如说：

```css
border:1px solid red;
```

就是把上下左右这四个方向的边框，都设置为 1px 宽度、线型实线、red颜色。

PS：小技巧：在sublime text中，为了快速输入`border:1px solid red;`这个属性，可以直接输入`bd`，然后选第二个后回车。

border属性是能够被拆开的，有两大种拆开的方式：

- （1）按三要素拆开：border-width、border-style、border-color。（一个border属性是由三个小属性综合而成的）

- （2）按方向拆开：border-top、border-right、border-bottom、border-left。

现在我们明白了：**一个border属性，是由三个小属性综合而成的**。如果某一个小属性后面是空格隔开的多个值，那么就是上右下左的顺序。举例如下：

```
border-width:10px 20px;
border-style:solid dashed dotted;
border-color:red green blue yellow;
```

效果如下：

![](http://img.smyhvae.com/20170728_1516.png)

（1）按三要素拆：

```css
border-width:10px;    //边框宽度
border-style:solid;   //线型
border-color:red;     //颜色。
```
等价于：

```
border:10px solid red;
```

(2)按方向来拆：

```css
border-top:10px solid red;
border-right:10px solid red;
border-bottom:10px solid red;
border-left:10px solid red;
```

等价于：

```css
border:10px solid red;
```

（3）按三要素和方向来拆：(就是把每个方向的，每个要素拆开。3*4 = 12)

```css
	border-top-width:10px;
	border-top-style:solid;
	border-top-color:red;
	border-right-width:10px;
	border-right-style:solid;
	border-right-color:red;
	border-bottom-width:10px;
	border-bottom-style:solid;
	border-bottom-color:red;
	border-left-width:10px;
	border-left-style:solid;
	border-left-color:red;
```

等价于：

```css
border:10px solid red;

```

工作中到底用什么？很简答：什么简单用什么。但要懂得，用小属性层叠大属性。举例如下：

![](http://img.smyhvae.com/20170728_1606.png)

为了实现上方效果，写法如下：

```css
border:10px solid red;
border-right-color:blue;
```

![](http://img.smyhvae.com/20170728_1608.png)

为了实现上方效果，写法如下：

```css
border:10px solid red;
border-style:solid dashed;
```

border可以没有：

```css
border:none;
```

可以某一条边没有：

```css
border-left: none;
```

也可以调整左边边框的宽度为0：

```css
border-left-width: 0;
```

### border-image 属性

比如：

```css
border-image: url(.img.png) 30 round;
```

这个属性在实际开发中用得不多，暂时忽略。

### 举例1：利用 border 属性画一个三角形（小技巧）

完整代码如下：

```css
div{
	width: 0;
	height: 0;
	border: 50px solid transparent;
	border-top-color: red;
	border-bottom: none;
}

```

步骤如下：

（1）当我们设置盒子的width和height为0时，此时效果如下：

![](http://img.smyhvae.com/20170728_1639.png)

（2）然后将border的底部取消：

![](http://img.smyhvae.com/20170728_1645.png)

（3）最后设置border的左边和右边为白色或者**透明**：

![](http://img.smyhvae.com/20170728_1649.png)

这样，一个三角形就画好了。

### 举例2：利用 border 属性画一个三角形（更推荐的技巧）

上面的例子1中，画出来的是直角三角形，可如果我想画等边三角形，要怎么做呢？

完整代码如下：（用 css 画等边三角形）

```css
.div1{
	width: 0;
	height: 0;
	border-top: 30px solid red;
	/* 通过改变 border-left 和 border-right 中的像素值，来改变三角形的形状 */
	border-left: 20px solid transparent;
	border-right: 20px solid transparent;
}

```

效果如下：

![](http://img.smyhvae.com/20191004_1830.png)

另外，我们在上方代码的基础之上，再加一个 `border-radus: 20px;` 就能画出一个扇形。

关于盒模型的更多内容，请查看本项目的另外一篇文章：《13-前端面试/面试必看/02-CSS盒模型及BFC.md》

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)


---
title: 05-CSS样式表的继承性和层叠性
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 本文重点

- CSS的继承性
- CSS的层叠性
	- 计算权重
	- 权重问题大总结
	- CSS样式表的冲突的总结
- 权重问题深入
	- 同一个标签，携带了多个类名
	- !important标记

## CSS的继承性

我们来看下面这样的代码，来引入继承性：

![](http://img.smyhvae.com/20170724_2359.png)

上方代码中，我们给div标签增加红色属性，却发现，div里的每一个子标签`<p>`也增加了红色属性。于是我们得到这样的结论：

> 有一些属性，当给自己设置的时候，自己的后代都继承上了，这个就是**继承性。**

继承性是从自己开始，直到最小的元素。

但是呢，如果再给上方的代码加一条属性：

![](http://img.smyhvae.com/20170725_2122.jpg)

上图中，我们给div加了一个border，但是发现只有div具备了border属性，而p标签却没有border属性。于是我们可以得出结论：

- 关于文字样式的属性，都具有继承性。这些属性包括：color、 text-开头的、line-开头的、font-开头的。

- 关于盒子、定位、布局的属性，都不能继承。

以后当我们谈到css有哪些特性的时候，我们要首先想到继承性。而且，要知道哪些属性具有继承性、哪些属性没有继承性。

## CSS的层叠性

很多公司如果要笔试，那么一定会考层叠性。

### 层叠性：计算权重

**层叠性：就是css处理冲突的能力。** 所有的权重计算，没有任何兼容问题！

CSS像艺术家一样优雅，像工程师一样严谨。

我们来看一个例子，就知道什么叫层叠性了。

![](http://img.smyhvae.com/20170725_2132.png)


上图中，三种选择器同时给P标签增加颜色的属性，但是，文字最终显示的是蓝色，这个时候，就出现了层叠性的情况。

当多个选择器，选择上了某个元素的时候，要按照如下顺序统计权重：

-  id 选择器
-  类选择器、属性选择器、伪类选择器
-  标签选择器、伪元素选择器

因为对于相同方式的样式表，其选择器排序的优先级为：ID选择器 > 类选择器 > 标签选择器

针对上面这句话，我们接下来举一些复杂一点的例子。

### 层叠性举例

#### 举例1：计算权重

![](http://img.smyhvae.com/20170725_2138.png)

如上图所示，统计各个选择器的数量，优先级高的胜出。文字的颜色为红色。

PS：不进位，实际上能进位（奇淫知识点：255个标签，等于1个类名）但是没有实战意义！

#### 举例2：权重相同时

![](http://img.smyhvae.com/20170725_2250.png)

上图可以看到，第一个样式和第二个样式的权重相同。但第二个样式的书写顺序靠后，因此以第二个样式为准（就近原则）。

#### 举例3：具有实战性的例子

![](http://img.smyhvae.com/20170726_2221.png)

现在我要让一个列表实现上面的这种样式：第一个li为红色，剩下的li全部为蓝色。

如果写成下面这种代码是无法实现的：

![](http://img.smyhvae.com/20170726_2225.png)

无法实现的原因很简单，计算一下三个选择器的权重就清楚了，显然第二个样式被第一个样式表覆盖了。

正确的做法是：（**非常重要**）

![](http://img.smyhvae.com/20170726_2229.png)

上图中，第二个样式比第一个样式的权重要大。因此在实战中可以实现这种效果：**所有人当中，让某一个人为红，让其他所有人为蓝。**

这种方式好用是好用，但用好很难。

就拿上方代码来举例，为了达到这种效果，即为了防止权重不够，比较稳妥的做法是：**把第二个样式表照着第一个样式表来写，在此基础上，给第二个样式表再加一个权重。**

上面这个例子很具有实战性。

#### 举例4：继承性造成的影响

这里需要声明一点：

 >如果不能直接选中某个元素，通过继承性影响的话，那么权重是0。

为了验证上面这句话，我们来看看下面这样的例子：

![](http://img.smyhvae.com/20170727_0843.png)

另外：**如果大家的权重相同，那么就采用就近原则：谁描述的近，听谁的**。举例如下：(box3 描述得最近，所以采用 box3 的属性)

![](http://img.smyhvae.com/20190122_1530.png)

上方代码的文字版如下：

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta />
    <meta />
    <meta />
    <title>Document</title>
    <style>
      #box1 {
        color: red;
      }

      #box2 {
        color: green;
      }

      #box3 {
        color: blue;
      }
    </style>
  </head>
  <body>
    <div id="box1">
      <div id="box2">
        <div id="box3"><p>猜猜我是什么颜色</p></div>
      </div>
    </div>
  </body>
</html>

```

### 层叠性：权重计算的问题大总结（非常重要）

层叠性。层叠性是一种能力，就是处理冲突的能力。当不同选择器，对一个标签的同一个样式，有不同的值，听谁的？这就是冲突。css有着严格的处理冲突的机制。

通过列举上面几个例子，我们对权重问题做一个总结。

![](http://img.smyhvae.com/20170727_2050.png)

上面这个图非常重要，我们针对这个图做一个文字描述：

- 选择上了，数权重，(id的数量，类的数量，标签的数量)。如果权重一样，谁写在后面听谁的。
- 没有选择上，通过继承影响的，就近原则，谁描述的近听谁的。如果描述的一样近，比如选择器权重，如果权重再一样重，谁写在后面听谁的。

### CSS样式表的冲突的总结

- 1、对于相同的选择器（比如同样都是类选择器），其样式表排序：行级样式 > 内嵌样式表 > 外部样式表（就近原则）
- 2、对于相同类型的样式表（比如同样都是内部样式表），其选择器排序：ID选择器 > 类选择器 > 标签选择器
- 3、外部样式表的ID选择器  > 内嵌样式表的标签选择器

> 总结：就近原则。ID选择器优先级最大。

举例：如果都是内嵌样式表，优先级的顺序如下：（ID 选择器 > 类选择器 > 标签选择器）

![](http://img.smyhvae.com/2015-10-03-css-14.png)

另外还有两个冲突的情况：

- 1、对同一个标签，如果用到的都是内嵌样式表，且权重一致，那它的优先级：**定义**的CSS样式表中，谁最近，就用谁。
- 2、对于同一个标签，如果用到的都是外部样式表，且权重一致，那它的优先级：html文件中，引用样式表的位置越近，就用谁。

例如：

![](http://img.smyhvae.com/2015-10-03-css-16.png)

### 题目演示

CSS的层叠性讲完了，我们来做几个题目吧。

#### 题目1

![](http://img.smyhvae.com/20170727_0851.png)

#### 题目2

![](http://img.smyhvae.com/20170727_0853.png)

#### 题目3

![](http://img.smyhvae.com/20170727_0855.png)

#### 题目4

![](http://img.smyhvae.com/20170727_0857.png)

## 权重问题深入

### 同一个标签，携带了多个类名，有冲突：

这里需要补充两种冲突的情况：

- 1、对同一个标签，如果用到了了多个相同的内嵌样式表，它的优先级：**定义**的样式表中，谁最近，就用谁。
- 2、对于同一个标签，如果引用了多个相同的外部样式表，它的优先级：html文件中，引用样式表的位置越近，就用谁。

例如：（就近原则）

![](http://img.smyhvae.com/20170727_2021.png)

上图中，**文字显示的颜色均为红色**。因为这和在标签中的挂类名的书序无关，只和css的顺序有关。

### !important标记：优先级最高

来看个很简单的例子：

![](http://img.smyhvae.com/20170727_2029.png)

上图中，显然id选择器的权重最大，所以文字的颜色是红色。

如果我们想让文字的颜色显示为绿色，只需要给标签选择器的加一个`!important`标记，此时其权重为无穷大。如下：

![](http://img.smyhvae.com/20170727_2035_2.png)

important是英语里面的“重要的”的意思。我们可以通过如下语法：

```
k:v !important;
```

来给一个属性提高权重。这个属性的权重就是**无穷大**。

注意，一定要注意语法的正确性。

正确的语法：

```
font-size:60px !important;
```

错误的语法：

```
font-size:60px; !important;    不能把!important写在外面
font-size:60px important;      不能忘记感叹号
```

`!important`标记需要强调如下3点：

**（1）!important提升的是一个属性，而不是一个选择器**

```css
		p{
			color:red !important;    只写了这一个!important，所以只有字体颜色属性提升了权重
			font-size: 100px ;       这条属性没有写!important，所以没有提升权重
		}
		#para1{
			color:blue;
			font-size: 50px;
		}
		.spec{
			color:green;
			font-size: 20px;
		}
```

所以，综合来看，字体颜色是red（听important的）；字号是50px（听id的）。

**（2）!important无法提升继承的权重，该是0还是0**

比如HTML结构：

```html
	<div>
		<p>哈哈哈哈哈哈哈哈</p>
	</div>
```

有CSS样式：

```css
	div{
		color:red !important;
	}
	p{
		color:blue;
	}
```

由于div是通过继承性来影响文字颜色的，所以!important无法提升它的权重，权重依然是0。

干不过p标签，因为p标签是实实在在选中了，所以字是蓝色的（以p为准）。

**(3)!important不影响就近原则**

如果大家都是继承来的，按理说应该按照“就近原则”，那么important能否影响就近原则呢？
答案是：不影响。远的，永远是远的。不能给远的写一个important，干掉近的。

为了验证这个问题，我们可以搞两层具有继承性的标签，然后给外层标签加一个!important，最终看看就近原则有没有被打破。举例如下：

![](http://img.smyhvae.com/20170727_2046.png)

PS：做网站的时候，!important 尽量不要用。否则会让css写的很乱。

## 知识回顾

> 我们把以上内容和上一篇文章做一个简单的知识回顾。

### CSS属性

> css属性，面试的时候会有笔试，笔试没有智能提示的。

加粗，倾斜，下划线：

```
font-weight:bold;
font-style:italic;
text-decoration:underline;
```

背景颜色、前景色：

```
background-color:red;
color:red;
```

### class和id的区别

class用于css的，id用于js的。

1）class页面上可以重复。id页面上唯一，不能重复。
2）一个标签可以有多个class，用空格隔开。但是id只能有id。

### 各种选择器(浏览器兼容性)

IE6层面兼容的选择器： 标签选择器、id选择器、类选择器、后代、交集选择器、并集选择器、通配符。如下：

```
p
#box
.spec
div p
div.spec
div,p
*
```

IE7能够兼容的：儿子选择器、下一个兄弟选择器。如下：

```
div>p
h3+p
```
IE8能够兼容的：

```
ul li:first-child
ul li:last-child
```
### css两个性质

- 继承性：好的事儿。继承从上到下，哪些能？哪些不能？

- 层叠性：冲突，多个选择器描述了同一个属性，听谁的？

再看几个题目：

![](http://img.smyhvae.com/20170727_0900.png)

![](http://img.smyhvae.com/20170727_0901.png)

![](http://img.smyhvae.com/20170727_0902.png)

![](http://img.smyhvae.com/20170727_0903.png)

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)
---
title: 11-CSS3属性详解（一）
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 前言

我们在上一篇文章中学习了[CSS3的选择器](http://www.cnblogs.com/smyhvae/p/8426799.html)，本文来学一下CSS3的一些属性。

本文主要内容：

- 文本

- 盒模型中的 box-sizing 属性

- 处理兼容性问题：私有前缀

- 边框

- 背景属性

- 渐变


## 文本

### text-shadow：设置文本的阴影

格式举例：

```javascript
	text-shadow: 20px 27px 22px pink;
```

参数解释：水平位移 垂直位移 模糊程度 阴影颜色。

效果举例：

![](http://img.smyhvae.com/20180207_1600.png)

### 举例：凹凸文字效果

text-shadow 可以设置多个阴影，每个阴影之间使用逗号隔开。我们来看个例子。

代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        body {
            background-color: #666;
        }

        div {
            font-size: 100px;
            text-align: center;
            font-weight: bold;
            font-family: "Microsoft Yahei";
            color: #666;
        }

        /* text-shadow 可以设置多个阴影，每个阴影之间使用逗号隔开*/
        .tu {
            text-shadow: -1px -1px 1px #fff, 1px 1px 1px #000;
        }

        .ao {
            text-shadow: -1px -1px 1px #000, 1px 1px 1px #fff;
        }
    </style>
</head>
<body>
<div class="ao">生命壹号</div>
<div class="tu">生命壹号</div>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180207_1617.png)

上图中，实现凹凸文字效果的方式比较简单，给左上角放黑色的阴影，右下角放白色的阴影，就达到了凹下去的效果。


## 盒模型中的 box-sizing 属性

我们在**[之前的文章](http://www.cnblogs.com/smyhvae/p/7256371.html)**中专门讲过盒子模型。

CSS3 对盒模型做出了新的定义，即允许开发人员**指定盒子宽度和高度的计算方式**。

这就需要用到 `box-sizing`属性。它的属性值可以是：`content-box`、`border-box`。解释如下。

**外加模式：**（css的默认方式）

```javascript
	box-sizing: content-box;
```

解释：此时设置的 width 和 height 是**内容区域**的宽高。`盒子的实际宽度 = 设置的 width + padding + border`。此时改变 padding 和 border 的大小，也不会改变内容的宽高，而是盒子的总宽高发生变化。


**内减模式：**【需要注意】

```javascript
	box-sizing: border-box;
```


解释：此时设置的 width 和 height 是**盒子**的总宽高。`盒子的实际宽度 = 设置的 width`。此时改变 padding 和 border 的大小，会改变内容的宽高，盒子的总宽高不变。


## 处理兼容性问题：私有前缀

通过网址<http://caniuse.com/> 可以查询CSS3各特性的支持程度。

处理兼容性问题的常见方法：为属性添加**私有前缀**。

如此方法不能解决，应尽量避免使用，无需刻意去处理CSS3的兼容性问题。

**私有前缀的举例**：

比如说，我想给指定的div设置下面这样一个属性：

```css
	background: linear-gradient(left, green, yellow);
```

上面这个属性的作用是：添加从左到右的线性渐变，颜色从绿色变为黄色。

如果直接这样写属性，是看不到效果的：

![](http://img.smyhvae.com/20180207_1700.png)

此时，我们可以**为浏览器添加不同的私有前缀**，属性就可以生效了。

格式如下：

```html
    -webkit-: 谷歌 苹果
    -moz-:火狐
    -ms-：IE
    -o-：欧朋
```

格式举例如下：

```css
    background: -webkit-linear-gradient(left, green, yellow);
    background: -moz-linear-gradient(left, green, yellow);
    background: -ms-linear-gradient(left, green, yellow);
    background: -o-linear-gradient(left, green, yellow);
    background: linear-gradient(left, green, yellow);
```

效果如下：

![](http://img.smyhvae.com/20180207_1710.png)

## 边框

边框的属性很多，其中**边框圆角**和**边框阴影**这两个属性，应用十分广泛，兼容性也相对较好，且符合**渐进增强**的原则，需要重点熟悉。

### 边框圆角：`border-radius` 属性

边框的每个圆角，本质上是一个圆，圆有**水平半径**和**垂直半径**：如果二者相等，就是圆；如果二者不等， 就是椭圆。

单个属性的写法：

```css
	border-top-left-radius: 60px 120px;        //参数解释：水平半径   垂直半径

	border-top-right-radius: 60px 120px;

	border-bottom-left-radius: 60px 120px;

	border-bottom-right-radius: 60px 120px;

```

复合写法：

```
	border-radius: 60px/120px;             //参数：水平半径/垂直半径

	border-radius: 20px 60px 100px 140px;  //从左上开始，顺时针赋值。如果当前角没有值，取对角的值

	border-radius: 20px 60px;
```

最简洁的写法：（四个角的半径都相同时）

```
	border-radius: 60px;
```

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>

        .parent {
            width: 400px;
        }
        .box {
            width: 100px;
            height: 100px;
            float: left;
            border: 1px solid rgb(144, 12, 63);
            margin: 20px;
            text-align: center;
            line-height: 100px;
            color: #fff;
            font-size: 50px;
            background-color: rgb(255, 141, 26);

        }

        /*画圆形的方式一*/
        .box:nth-child(1) {
            border-radius: 50px;
        }

        /*画圆形的方式二*/
        .box:nth-child(2) {
            border-radius: 50%;
        }

        .box:nth-child(3) {
            border-radius: 100px 0 0 0;
        }

        .box:nth-child(4) {
            border-radius: 100px/50px;
        }

        .box:nth-child(5) {
            border-radius: 10%;
        }

        .box:nth-child(6) {
            border-radius: 0 100px;
        }

    </style>
</head>
<body>

<div class="parent">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
    <div class="box">6</div>
</div>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180207_1750.png)

### 边框阴影：`box-shadow` 属性

格式举例：

```javascript
	box-shadow: 水平偏移 垂直偏移 模糊程度 阴影大小 阴影颜色

	box-shadow: 15px 21px 48px -2px #666;
```

参数解释：

- 水平偏移：正值向右 负值向左。

- 垂直偏移：正值向下 负值向上。

- 模糊程度：不能为负值。


效果如下：

![](http://img.smyhvae.com/20180207_2027.png)

另外，后面还可以再加一个inset属性，表示内阴影。如果不写，则默认表示外阴影。例如：

```javascript
	box-shadow:3px 3px 3px 3px #666 inset;
```

效果如下：

![](http://img.smyhvae.com/20180207_2028.png)

**注意**：设置边框阴影不会改变盒子的大小，即不会影响其兄弟元素的布局。

我们还可以设置多重边框阴影，实现更好的效果，增强立体感。

### 边框图片

边框图片有以下属性：

```javascript
	/* 边框图片的路径*/
	border-image-source: url("images/border.png");

	/* 图片边框的裁剪*/
	border-image-slice: 27;

	/*图片边框的宽度*/
	border-image-width: 27px;

	/*边框图片的平铺*/
	/* repeat :正常平铺 但是可能会显示不完整*/
	/*round: 平铺 但是保证 图片完整*/
	/*stretch: 拉伸显示*/
	border-image-repeat: stretch;
```

我们也可以写成一个综合属性：

```javascript
	 border-image: url("images/border.png") 27/20px round;
```

这个属性要好好理解，我们假设拿下面这张图来作为边框图片：

![](http://img.smyhvae.com/20180207_2045.png)

![](http://img.smyhvae.com/20180207_2046.png)

这张图片将会被“切割”成**九宫格**形式，然后进行平铺。四个角位置、形状保持不变，中心位置和水平垂直向两个方向平铺：

![](http://img.smyhvae.com/20180207_2050.png)

再具体一点：

![](http://img.smyhvae.com/20180207_2051.png)


### 常见的边框图片汇总

```html

```


CSS3的更多属性，且看下文继续。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)
---
title: 07-浮动
publish: true
---

<ArticleTopAd></ArticleTopAd>



## 文本主要内容

- 标准文档流
	- 标准文档流的特性
	- 行内元素和块级元素
	- 行内元素和块级元素的相互转换
- 浮动的性质
- 浮动的清除
- 浏览器的兼容性问题
- 浮动中margin相关
- 关于margin的IE6兼容问题

## 标准文档流


宏观地讲，我们的web页面和photoshop等设计软件有本质的区别：web页面的制作，是个“流”，必须从上而下，像“织毛衣”。而设计软件，想往哪里画个东西，都能画。


### 标准文档流的特性

**（1）空白折叠现象：**

无论多少个空格、换行、tab，都会折叠为一个空格。

比如，如果我们想让img标签之间没有空隙，必须紧密连接：

```
<img src="images/0.jpg" /><img src="images/1.jpg" /><img src="images/2.jpg" />
```


**（2）高矮不齐，底边对齐：**

举例如下：

![](http://img.smyhvae.com/20170729_1508_2.png)


**（3）自动换行，一行写不满，换行写。**


### 行内元素和块级元素

学习的初期，我们就要知道，标准文档流等级森严。标签分为两种等级：

- 行内元素
- 块级元素


我们可以举一个例子，看看块级元素和行内元素的区别：

![](http://img.smyhvae.com/20170729_1529_2.png)


上图中可以看到，`h1`标签是块级元素，占据了整行，`span`标签是行内元素，只占据内容这一部分。

现在我们尝试给两个标签设置宽高。效果如下：

![](http://img.smyhvae.com/20170729_1532_2.png)

上图中，我们尝试给两个标签设置宽高，但发现，宽高属性只对块级元素`h1`生效。于是我们可以做出如下总结。

**行内元素和块级元素的区别：**（非常重要）

行内元素：

- 与其他行内元素并排；
- 不能设置宽、高。默认的宽度，就是文字的宽度。

块级元素：

- 霸占一行，不能与其他任何元素并列；
- 能接受宽、高。如果不设置宽度，那么宽度将默认变为父亲的100%。




**行内元素和块级元素的分类：**

在以前的HTML知识中，我们已经将标签分过类，当时分为了：文本级、容器级。

从HTML的角度来讲，标签分为：

- 文本级标签：p、span、a、b、i、u、em。
- 容器级标签：div、h系列、li、dt、dd。

> PS：为甚么说p是文本级标签呢？因为p里面只能放文字&图片&表单元素，p里面不能放h和ul，p里面也不能放p。

现在，从CSS的角度讲，CSS的分类和上面的很像，就p不一样：

- 行内元素：除了p之外，所有的文本级标签，都是行内元素。p是个文本级，但是是个块级元素。

- 块级元素：所有的容器级标签都是块级元素，还有p标签。

我们把上面的分类画一个图，即可一目了然：

![](http://img.smyhvae.com/20170729_1545.png)



### 行内元素和块级元素的相互转换

我们可以通过`display`属性将块级元素和行内元素进行相互转换。display即“显示模式”。

#### 块级元素可以转换为行内元素：

一旦，给一个块级元素（比如div）设置：

```
display: inline;
```

那么，这个标签将立即变为行内元素，此时它和一个span无异。inline就是“行内”。也就是说：

- 此时这个div不能设置宽度、高度；
- 此时这个div可以和别人并排了。

举例如下：

![](http://img.smyhvae.com/20170729_1629.png)


#### 行内元素转换为块级元素：

同样的道理，一旦给一个行内元素（比如span）设置：

```
display: block;
```

那么，这个标签将立即变为块级元素，此时它和一个div无异。block”是“块”的意思。也就是说：

- 此时这个span能够设置宽度、高度
- 此时这个span必须霸占一行了，别人无法和他并排
- 如果不设置宽度，将撑满父亲

举例如下：

![](http://img.smyhvae.com/20170729_1638.png)

标准流里面的限制非常多，导致很多页面效果无法实现。如果我们现在就要并排、并且就要设置宽高，那该怎么办呢？办法是：移民！**脱离标准流**！


css中一共有三种手段，使一个元素脱离标准文档流：

- （1）浮动
- （2）绝对定位
- （3）固定定位

这便引出我们今天要讲的内容：浮动。


## 浮动的性质

> 浮动是css里面布局用的最多的属性。

现在有两个div，分别设置宽高。我们知道，它们的效果如下：

![](http://img.smyhvae.com/20170729_1722.png)

此时，如果给这两个div增加一个浮动属性，比如`float: left;`，效果如下：

![](http://img.smyhvae.com/20170729_1723.png)

这就达到了浮动的效果。此时，两个元素并排了，并且两个元素都能够设置宽度、高度了（这在上一段的标准流中，不能实现）。

浮动想学好，一定要知道三个性质。接下来讲一讲。

### 性质1：浮动的元素脱标

脱标即脱离标准流。我们来看几个例子。

证明1：

![](http://img.smyhvae.com/20170729_2028.png)

上图中，在默认情况下，两个div标签是上下进行排列的。现在由于float属性让上图中的第一个`<div>`标签出现了浮动，于是这个标签在另外一个层面上进行排列。而第二个`<div>`还在自己的层面上遵从标准流进行排列。

证明2：

![](http://img.smyhvae.com/20180111_2320.png)

上图中，span标签在标准流中，是不能设置宽高的（因为是行内元素）。但是，一旦设置为浮动之后，即使不转成块级元素，也能够设置宽高了。

所以能够证明一件事：**一旦一个元素浮动了，那么，将能够并排了，并且能够设置宽高了。无论它原来是个div还是个span。**所有标签，浮动之后，已经不区分行内、块级了。


### 性质2：浮动的元素互相贴靠

我们来看一个例子就明白了。

我们给三个div均设置了`float: left;`属性之后，然后设置宽高。当改变浏览器窗口大小时，可以看到div的贴靠效果：

![](http://img.smyhvae.com/20170730_1910.gif)


上图显示，3号如果有足够空间，那么就会靠着2号。如果没有足够的空间，那么会靠着1号大哥。
如果没有足够的空间靠着1号大哥，3号自己去贴左墙。

不过3号自己去贴墙的时候，注意：

![](http://img.smyhvae.com/20170730_1928.gif)


上图显示，3号贴左墙的时候，并不会往1号里面挤。

同样，float还有一个属性值是`right`，这个和属性值`left`是对称的。


### 性质3：浮动的元素有“字围”效果

来看一张图就明白了。我们让div浮动，p不浮动。

![](http://img.smyhvae.com/20170730_2005.png)

上图中，我们发现：**div挡住了p，但不会挡住p中的文字**，形成“字围”效果。

总结：**标准流中的文字不会被浮动的盒子遮挡住**。（文字就像水一样）

关于浮动我们要强调一点，浮动这个东西，为避免混乱，我们在初期一定要遵循一个原则：**永远不是一个东西单独浮动，浮动都是一起浮动，要浮动，大家都浮动。**


### 性质4：收缩

收缩：一个浮动的元素，如果没有设置width，那么将自动收缩为内容的宽度（这点非常像行内元素）。

举例如下：

![](http://img.smyhvae.com/20170801_1720.png)


上图中，div本身是块级元素，如果不设置width，它会单独霸占整行；但是，设置div浮动后，它会收缩


### 浮动的补充（做网站时注意）

![](http://img.smyhvae.com/20170731_2248.png)


上图所示，将para1和para2设置为浮动，它们是div的儿子。此时para1+para2的宽度小于div的宽度。效果如上图所示。可如果设置para1+para2的宽度大于div的宽度，我们会发现，para2掉下来了：

![](http://img.smyhvae.com/20170731_2252_2.png)



### 布置一个作业

布置一个作业，要求实现下面的效果：

![](http://img.smyhvae.com/20170801_0858.png)


为实现上方效果，代码如下：

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>Document</title>
	<style type="text/css">
		*{
			margin: 0;
			padding: 0;
		}
		.header{
			width: 970px;
			height: 103px;
			/*居中。这个语句的意思是：居中：*/
			margin: 0 auto;
		}
		.header .logo{
			float: left;
			width: 277px;
			height: 103px;
			background-color: red;
		}
		.header .language{
			float: right;
			width: 137px;
			height: 49px;
			background-color: green;
			margin-bottom: 8px;
		}
		.header .nav{
			float: right;
			width: 679px;
			height: 46px;
			background-color: green;
		}

		.content{
			width: 970px;
			height: 435px;
			/*居中，这个语句今天没讲，你照抄，就是居中：*/
			margin: 0 auto;
			margin-top: 10px;
		}
		.content .banner{
			float: left;
			width: 310px;
			height: 435px;
			background-color: gold;
			margin-right: 10px;
		}
		.content .rightPart{
			float: left;
			width: 650px;
			height: 435px;
		}
		.content .rightPart .main{
			width: 650px;
			height: 400px;
			margin-bottom: 10px;
		}
		.content .rightPart .links{
			width: 650px;
			height: 25px;
			background-color: blue;
		}
		.content .rightPart .main .news{
			float: left;
			width: 450px;
			height: 400px;
		}
		.content .rightPart .main .hotpic{
			float: left;
			width: 190px;
			height: 400px;
			background-color: purple;
			margin-left: 10px;
		}
		.content .rightPart .main .news .news1{
			width: 450px;
			height: 240px;
			background-color: skyblue;
			margin-bottom: 10px;
		}
		.content .rightPart .main .news .news2{
			width: 450px;
			height: 110px;
			background-color: skyblue;
			margin-bottom: 10px;
		}
		.content .rightPart .main .news .news3{
			width: 450px;
			height: 30px;
			background-color: skyblue;
		}
		.footer{
			width: 970px;
			height: 35px;
			background-color: pink;
			/*没学，就是居中：*/
			margin: 0 auto;
			margin-top: 10px;
		}
	</style>
</head>
<body>
	<!-- 头部 -->
	<div class="header">
		<div class="logo">logo</div>
		<div class="language">语言选择</div>
		<div class="nav">导航条</div>
	</div>

	<!-- 主要内容 -->
	<div class="content">
		<div class="banner">大广告</div>
		<div class="rightPart">
			<div class="main">
				<div class="news">
					<div class="news1"></div>
					<div class="news2"></div>
					<div class="news3"></div>
				</div>
				<div class="hotpic"></div>
			</div>
			<div class="links"></div>
		</div>
	</div>

	<!-- 页尾 -->
	<div class="footer"></div>
</body>
</html>
```

其实，这个页面的布局是下面这个网站：


![](http://img.smyhvae.com/20170801_0900.png)


## 浮动的清除

> 这里所说的清除浮动，指的是清除浮动与浮动之间的影响。

### 前言

通过上面这个例子，我们发现，此例中的网页就是通过浮动实现并排的。

比如说一个网页有header、content、footer这三部分。就拿content部分来举例，如果设置content的儿子为浮动，但是，这个儿子又是一个全新的标准流，于是儿子的儿子仍然在标准流里。

从学习浮动的第一天起，我们就要明白，浮动有开始，就要有清除。我们先来做个实验。

下面这个例子，有两个块级元素div，div没有任何属性，每个div里有li，效果如下：

![](http://img.smyhvae.com/20170801_2122.png)


上面这个例子很简单。可如果我们给里面的`<li>`标签加浮动。效果却成了下面这个样子：

代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		*{

		}
		li{
			float: left;
			width: 100px;
			height: 20px;
			background-color: pink;


		}
	</style>
</head>
<body>
	<div class="box1">
		<ul>
			<li>生命壹号1</li>
			<li>生命壹号2</li>
			<li>生命壹号3</li>
			<li>生命壹号4</li>
		</ul>
	</div>
	<div class="box2">
		<ul>
			<li>许嵩1</li>
			<li>许嵩2</li>
			<li>许嵩3</li>
			<li>许嵩4</li>
		</ul>
	</div>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20170801_2137.png)


上图中，我们发现：第二组中的第1个li，去贴靠第一组中的最后一个li了（我们本以为这些li会分成两排）。

这便引出我们要讲的：清除浮动的第一种方式。
那该怎么解决呢？


### 方法1：给浮动元素的祖先元素加高度



造成前言中这个现象的根本原因是：li的**父亲div没有设置高度**，导致这两个div的高度均为0px（我们可以通过网页的审查元素进行查看）。div的高度为零，导致不能给自己浮动的孩子，撑起一个容器。

撑不起一个容器，导致自己的孩子没办法在自己的内部进行正确的浮动。

好，现在就算给这个div设置高度，可如果div自己的高度小于孩子的高度，也会出现不正常的现象：

![](http://img.smyhvae.com/20170801_2152.png)


给div设置一个正确的合适的高度（至少保证高度大于儿子的高度），就可以看到正确的现象：

![](http://img.smyhvae.com/20170801_2153.png)

**总结：**

**如果一个元素要浮动，那么它的祖先元素一定要有高度。**

**有高度的盒子，才能关住浮动**。（记住这句过来人的经验之语）

只要浮动在一个有高度的盒子中，那么这个浮动就不会影响后面的浮动元素。所以就是清除浮动带来的影响了。

![](http://img.smyhvae.com/20170801_2200.png)


![](http://img.smyhvae.com/20170801_2201.png)

### 方法2：clear:both;

网页制作中，高度height其实很少出现。为什么？因为能被内容撑高！也就是说，刚刚我们讲解的方法1，工作中用得很少。

那么，能不能不写height，也把浮动清除了呢？也让浮动之间，互不影响呢？

这个时候，我们可以使用`clear:both;`这个属性。如下：

![](http://img.smyhvae.com/20170801_2233.png)


```
clear:both;
```

clear就是清除，both指的是左浮动、右浮动都要清除。`clear:both`的意思就是：**不允许左侧和右侧有浮动对象。**

这种方法有一个非常大的、致命的问题，**它所在的标签，margin属性失效了**。读者可以试试看。


margin失效的本质原因是：上图中的box1和box2，高度为零。



### 方法3：隔墙法

上面这个例子中，为了防止第二个div贴靠到第二个div，我们可以在这两个div中间用一个新的div隔开，然后给这个新的div设置`clear: both;`属性；同时，既然这个新的div无法设置margin属性，我们可以给它设置height，以达到margin的效果（曲线救国）。这便是隔墙法。


我们看看例子效果就知道了：

![](http://img.smyhvae.com/20170802_1109.png)

上图这个例子就是隔墙法。


**内墙法：**


近些年，有演化出了“内墙法”：

![](http://img.smyhvae.com/20170802_1123.png)

上面这个图非常重要，当作内墙法的公式，先记下来。


为了讲内墙法，我们先记住一句重要的话：**一个父亲是不能被浮动的儿子撑出高度的**。举例如下：

（1）我们在一个div里放一个有宽高的p，效果如下：（很简单）

![](http://img.smyhvae.com/20170802_1716.png)

（2）可如果在此基础之上，给p设置浮动，却发现父亲div没有高度了：

![](http://img.smyhvae.com/20170802_1730.png)

（3）此时，我么可以在div的里面放一个div（作为内墙），就可以让父亲div恢复高度：

![](http://img.smyhvae.com/20170802_1812.png)

于是，我们采用内墙法解决前言中的问题：

![](http://img.smyhvae.com/20170802_1834.png)

与外墙法相比，内墙法的优势（本质区别）在于：内墙法可以给它所在的家撑出宽度（让box1有高）。即：box1的高度可以自适应内容。

而外墙法，虽然一道墙可以把两个div隔开，但是这两个div没有高，也就是说，无法wrap_content。


### 清除浮动方法4：overflow:hidden;

我们可以使用如下属性：

```
overflow:hidden;
```


overflow即“溢出”， hidden即“隐藏”。这个属性的意思是“溢出隐藏”。顾名思义：所有溢出边框的内容，都要隐藏掉。如下：

![](http://img.smyhvae.com/20170804_1449.png)


上图显示，`overflow:hidden;`的本意是清除溢出到盒子外面的文字。但是，前端开发工程师发现了，它能做偏方。如下：

一个父亲不能被自己浮动的儿子，撑出高度。但是，只要给父亲加上`overflow:hidden`; 那么，父亲就能被儿子撑出高了。这是一个偏方。

举个例子：

![](http://img.smyhvae.com/20170804_1920.png)


那么对于前言中的例子，我们同样可以使用这一属性：

![](http://img.smyhvae.com/20170804_1934.png)


这一招，实际上生成了BFC。关于BFC的解释，详见本项目的另外一篇文章《前端面试/CSS盒模型及BFC.md》。

## 浮动清除的总结


> 我们在上一段讲了四种清除浮动的方法，本段来进行一个总结。

浮动的元素，只能被有高度的盒子关住。 也就是说，如果盒子内部有浮动，这个盒子有高，那么妥妥的，浮动不会互相影响。

### 1、加高法

工作上，我们绝对不会给所有的盒子加高度，这是因为麻烦，并且不能适应页面的快速变化。

```html
<div>     //设置height
	<p></p>
	<p></p>
	<p></p>
</div>

<div>    //设置height
	<p></p>
	<p></p>
	<p></p>
</div>
```


### 2、`clear:both;`法

最简单的清除浮动的方法，就是给盒子增加clear:both；表示自己的内部元素，不受其他盒子的影响。


```html
<div>
	<p></p>
	<p></p>
	<p></p>
</div>

<div>   //clear:both;
	<p></p>
	<p></p>
	<p></p>
</div>
```

浮动确实被清除了，不会互相影响了。但是有一个问题，就是margin失效。两个div之间，没有任何的间隙了。



### 3、隔墙法

在两部分浮动元素中间，建一个墙。隔开两部分浮动，让后面的浮动元素，不去追前面的浮动元素。
墙用自己的身体当做了间隙。

```html
<div>
	<p></p>
	<p></p>
	<p></p>
</div>

<div class="cl h10"></div>

<div>
	<p></p>
	<p></p>
	<p></p>
</div>
```

我们发现，隔墙法好用，但是第一个div，还是没有高度。如果我们现在想让第一个div，自动根据自己的儿子撑出高度，我们就要想一些“小伎俩”。

内墙法：

```html
<div>
	<p></p>
	<p></p>
	<p></p>
	<div class="cl h10"></div>
</div>

<div>
	<p></p>
	<p></p>
	<p></p>
</div>
```

内墙法的优点就是，不仅仅能够让后部分的p不去追前部分的p了，并且能把第一个div撑出高度。这样，这个div的背景、边框就能够根据p的高度来撑开了。


### 4、`overflow:hidden;`

这个属性的本意，就是将所有溢出盒子的内容，隐藏掉。但是，我们发现这个东西能够用于浮动的清除。
我们知道，一个父亲，不能被自己浮动的儿子撑出高度，但是，如果这个父亲加上了overflow:hidden；那么这个父亲就能够被浮动的儿子撑出高度了。这个现象，不能解释，就是浏览器的偏方。
并且,overflow:hidden;能够让margin生效。


**清除浮动的例子：**

我们现在举个例子，要求实现下图中无序列表部分的效果：

![](http://img.smyhvae.com/20170804_2321.png)

对比一下我们讲的四种清除浮动的方法。如果用外墙法，ul中不能插入div标签，因为ul中只能插入li，如果插入li的墙，会浪费语义。如果用内墙法，不美观。综合对比，还是用第四种方法来实现吧，这会让标签显得极其干净整洁：

![](http://img.smyhvae.com/20170805_1615.png)

上方代码中，如果没有加`overflow:hidden;`，那么第二行的li会紧跟着第一行li的后面。


## 浏览器的兼容性问题



> 讲一下上述知识点涉及到的浏览器兼容问题。


### 兼容性1（微型盒子）

**兼容性的第一条**：IE6不支持小于12px的盒子，任何小于12px的盒子，在IE6中看都大。即：IE 6不支持微型盒子。

举个例子。我们设置一个height为 5px 、宽度为 200px的盒子，看下在IE 8和 IE 6中的显示效果：

![](http://img.smyhvae.com/20170805_1726.png)

解决办法很简单，就是将盒子的字号大小，设置为**小于盒子的高**，比如，如果盒子的高为5px，那就把font-size设置为0px(0px < 5px)。如下：

```
height: 5px;
_font-size: 0px;
```

我们现在介绍一下浏览器hack。hack就是“黑客”，就是使用浏览器提供的后门，针对某一种浏览器做兼容。


IE6留了一个**后门**：只要给css属性之前，加上**下划线**，这个属性就是IE6的专有属性。


比如说，我们给背景颜色这个属性加上下划线，就变成了`_background-color: green;`。效果如下：

![](http://img.smyhvae.com/20170805_2026.png)



于是乎，为了解决微型盒子（即height小于12px）的问题，正确写法：（注意不要忘记下划线）

```
height: 10px;
_font-size:0;
```



### 兼容性2

**兼容性的第二条：**IE6不支持用`overflow:hidden;`来清除浮动。

解决办法，以毒攻毒。追加一条：

```
_zoom:1;
```

完整写法：

```
overflow: hidden;
_zoom:1;
```

实际上，`_zoom:1;`能够触发浏览器hasLayout机制。这个机制，不要深究了，因为只有IE6有。我们只需要让IE6好用，具体的实现机制，可以自行查阅。

需要强调的是，`overflow:hidden;`的本意，就是让溢出盒子的border的内容隐藏，这个功能是IE6兼容的。不兼容的是`overflow:hidden;`清除浮动的时候。


**总结：**

我们刚才学习的两个IE6的兼容问题，都是通过多写一条hack来解决的，这个我们称为伴生属性，即两个属性，要写一起写。

属性1：

```
height:6px;
_font-size:0;
```

属性2：

```
overflow:hidden;
_zoom:1;
```


## margin相关

> 我们来讲一下浮动中和margin相关的知识。


### margin塌陷/margin重叠



**标准文档流中，竖直方向的margin不叠加，取**较大的值**作为margin(水平方向的margin是可以叠加的，即水平方向没有塌陷现象)。如下图所示：

![](http://img.smyhvae.com/20170805_0904.png)



如果不在标准流，比如盒子都浮动了，那么两个盒子之间是没有塌陷现象的。

### 盒子居中`margin:0 auto;`

margin的值可以为auto，表示自动。当left、right两个方向都是auto的时候，盒子居中了：

```
margin-left: auto;
margin-right: auto;
```

盒子居中的简写为：

```
margin:0 auto;
```

对上方代码的理解：上下的margin为0，左右的margin都尽可能的大，于是就居中了。

注意：

- （1）只有标准流的盒子，才能使用`margin:0 auto;`居中。也就是说，当一个盒子浮动了、绝对定位了、固定定位了，都不能使用margin:0 auto;
- （2）使用`margin:0 auto;`的盒子，必须有width，有明确的width。（可以这样理解，如果没有明确的width，那么它的width就是霸占整行，没有意义）
- （3）`margin:0 auto;`是让盒子居中，不是让盒子里的文本居中。文本的居中，要使用`text-align:center;`

对上面的第三条总结一下：（非常重要）

```
margin:0 auto;    //让这个div自己在大容器中的水平方向上居中。
text-align: center;  //让这个div内部的文本居中。
```

顺便普及一下知识，text-align还有：

```
text-align:left;     //没啥用，因为默认居左
text-align:right;    //文本居右
```



### 善于使用父亲的padding，而不是儿子的margin

我们来看一个奇怪的现象。现在有下面这样一个结构：（div中放一个p）

```
	<div>
		<p></p>
	</div>
```

上面的结构中，我们尝试通过给儿子`p`一个`margin-top:50px;`的属性，让其与父亲保持50px的上边距。结果却看到了下面的奇怪的现象：

![](http://img.smyhvae.com/20170806_1537.png)


此时我们给父亲div加一个border属性，就正常了：

![](http://img.smyhvae.com/20170806_1544.png)



如果父亲没有border，那么儿子的margin实际上踹的是“流”，踹的是这“行”。所以，父亲整体也掉下来了。

**margin这个属性，本质上描述的是兄弟和兄弟之间的距离； 最好不要用这个marign表达父子之间的距离。**

所以，如果要表达父子之间的距离，我们一定要善于使用父亲的padding，而不是儿子的margin。


## 关于margin的IE6兼容问题


### IE6的双倍margin的bug：

当出现连续浮动的元素，携带与浮动方向相同的margin时，队首的元素，会双倍marign。

```
	<ul>
		<li></li>
		<li></li>
		<li></li>
	</ul>
```

![](http://img.smyhvae.com/20170806_1558.png)



解决方案：

（1）使浮动的方向和margin的方向，相反。

所以，你就会发现，我们特别喜欢，浮动的方向和margin的方向相反。并且，前端开发工程师，把这个当做习惯了。

```
	float: left;
	margin-right: 40px;
```



（2）使用hack：（没必要，别惯着这个IE6）

单独给队首的元素，写一个一半的margin：

```
<li class="no1"></li>
```

```
ul li.no1{
	_margin-left:20px;
}
```

PS：双倍margin的问题，面试经常问哦。



### IE6的3px bug

![](http://img.smyhvae.com/20170806_1616.png)

解决办法：不用管，因为根本就不允许用儿子踹父亲（即描述父子之间的距离，请用padding，而不是margin）。所以，如果你出现了3px bug，说明你的代码不标准。


IE6，千万不要跟他死坑、较劲，它不配。 格调要高，我们讲IE6的兼容性问题，就是为了增加面试的成功率，不是为了成为IE6的专家。



## Fireworks和others

### Fireworks

fireworks是Adobe公司的一个设计软件。功能非常多，我们以后用啥讲啥。Fireworks的默认文件格式是png。

标尺的快捷键：Ctrl + Alt+ R


### others



首行缩进两个汉字：

```
text-indent: 2em;
```

上方属性中，单位比较奇怪，叫做em，em就是汉字的一个宽度。indent的意思是缩进。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)


---
title: 09-CSS案例讲解：博雅互动
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 前言

> CSS已经学了一些基础内容了，我们来讲解一个小案例吧。以[博雅互动](http://www.boyaa.com/)的官网首页举例。

### 版心

首页的**版心**如下：

![](http://img.smyhvae.com/20170813_1535.png)

这里我们要普及一个概念，叫“[版心](https://baike.baidu.com/item/%E7%89%88%E5%BF%83)”。**版心是页面中主要内容所在的区域。**

比如说，网站左上角的logo，设计图给出的左边距是143像素，此时，我们千万不要以为，logo的左边距真的是143像素。因为设计图只是一个版心；而整个页面是处于浏览器的中间，浏览器的宽度是可以随时调整的。

我们量一下中间四个方形图的width，是1000px，所以，网页版心的宽度是1000px。

### 网页的结构

从结构上来看，网页分为头部（导航栏）、banner区、内容区、底部。

## 导航栏的制作

在此我们只讲基础知识的使用，不涉及浏览器的优化。


`class==header`这个div是顶部的通栏，我们在里面放一个1000px宽的div，作为通栏的版心，我一般把这个版心称为`class=inner_c`，c指的是center。

`class=inner_c`不需要给高，因为它可以被内容撑高。

现在我们需要在`class=inner_c`里放三个东西：左侧的logo、中间的导航栏、右侧的“加入我们”。

接下来我们开始做右侧的「加入我们」，「加入我们」的背景是带圆角的矩形，这个圆角，实现的方式有两种：要么切图，要么用CSS3实现（IE 7、IE 8不兼容）。我们暂时使用切图来实现。

我们最好把「加入我们」这个超链接`<a>`放到`div`里，然后设置div的margin和padding，而不是直接设置`<a>`的边距。

我们起个名字叫`class=jrwm`是没有问题的，这在工作当中很常见，如果写成`class=join_us`反倒很别扭。

暂时我们的做法是：

- （1）给`class=jrwm_box`这个div里放一个`class=jrwm`的div。`class=jrwm`用来放绿色的背景图片。
- （2）在`class=jrwm`里放一个超链接，并将超链接转为块级元素。

最终，导航栏的代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        *{
            margin: 0px;
            padding: 0px;
        }
        body{
            font-size: 14px;
            font-family: "Microsoft YaHei","SimSun";
            height: 8888px;
        }
        .header{
            height: 58px;
            background-color: #191D3A;
        }
        /*版心*/
        .inner_c{
            width: 1000px;
            margin: 0 auto; /*让导航条、内容区域等部分的版心在父亲里居中*/
        }
        /*导航条的logo*/
        .header .logo{
            float: left;
            margin-right: 40px;
        }
        .header .nav{
            float: left;
        }
        .header .nav ul{
            list-style: none; /*去掉列表前面的圆点*/
        }
        .header .nav ul li{
            float: left;
            width: 100px;
            line-height: 58px; /*让行高等于这一行的高度，保证里面的文字垂直居中*/
            border-left: 1px solid #252947; /*每个li之间有间隔线*/
        }
        .header .nav ul li.last{
            border-right: 1px solid #252947;/*最后一个li的右边加间隔线*/
        }
        .header .nav ul li a{
            display: block; /*将超链接转为块儿，可以保证其霸占父亲的整行*/
            height: 58px;
            text-decoration: none; /*去掉超链的下划线*/
            color:#818496;
            text-align: center;  /*让这个div内部的文本居中*/
        }
        .header .nav ul li a.current{
            color:white;
            background: #252947;
        }
        .header .nav ul li a:hover{
            color: white;
            background: #252947;
        }

        .header .jrwm_box{
            float: left;
            height: 58px;
            width: 100px;
            padding-left: 48px;
            padding-top: 12px;

        }
        /*放背景图片的div*/
        .header .jrwm_box .jrwm{
            height: 34px;
            background-image: url(images/jrwm.png);
            background-repeat: no-repeat;
            text-align: center; /*让这个div内部的超链接居中*/
        }
        .header .jrwm_box .jrwm a{
            display: block; /*将超链接转为块儿，可以保证其霸占父亲的整行*/
            line-height: 34px; /*让行高为背景图片的高度，可以保证超链接的文字在背景图片里垂直居中*/
            text-decoration: none; /*去掉超链的下划线*/
            color: white;
        }

    </style>
</head>
<body>
    <div class="header">
        <div class="inner_c">
            <div class="logo">
                <img src="images/logo.png " alt="">
            </div>
            <div class="nav">
                <ul>
                    <li><a href="#" class="current">首页</a></li>
                    <li><a href="#">博雅游戏</a></li>
                    <li><a href="#">博雅新闻</a></li>
                    <li><a href="#">关于我们</a></li>
                    <li><a href="#">客服中心</a></li>
                    <li class="last"><a href="#">投资者关系</a></li>
                </ul>
            </div>
            <div class="jrwm_box">
                <div class="jrwm">
                    <a href="https://www.google.com/" target="_blank">加入我们</a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

导航栏的效果如下：

![](http://img.smyhvae.com/20180114_1332.gif)

## banenr图

> 因为涉及到 js 的内容，这里先不讲内容区域**轮播图**的效果。

我们首先在导航条和banner图之间加一道墙，即`class=cl`，然后采用隔墙法对其设置`clear: both;`的属性。

然后设置banner的背景图片属性，添加banner图。

## 内容区域的制作

导航栏+banner+内容区域的完整代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        *{
            margin: 0px;
            padding: 0px;
        }

        /*清除浮动的影响*/
        .cl{
            clear: both;
        }
        body{
            font-size: 14px;
            font-family: "Microsoft YaHei","SimSun";
            height: 8888px;
        }
        .header{
            height: 58px;
            background-color: #191D3A;
        }
        /*版心*/
        .inner_c{
            width: 1000px;
            margin: 0 auto; /*让导航条、内容区域等部分的版心在父亲里居中*/
        }
        /*导航条的logo*/
        .header .logo{
            float: left;
            margin-right: 40px;
        }
        .header .nav{
            float: left;
        }
        .header .nav ul{
            list-style: none; /*去掉列表前面的圆点*/
        }
        .header .nav ul li{
            float: left;
            width: 100px;
            line-height: 58px; /*让行高等于这一行的高度，保证里面的文字垂直居中*/
            border-left: 1px solid #252947; /*每个li之间有间隔线*/
        }
        .header .nav ul li.last{
            border-right: 1px solid #252947;/*最后一个li的右边加间隔线*/
        }
        .header .nav ul li a{
            display: block; /*将超链接转为块儿，可以保证其霸占父亲的整行*/
            height: 58px;
            text-decoration: none; /*去掉超链的下划线*/
            color:#818496;
            text-align: center;  /*让这个div内部的文本居中*/
        }
        .header .nav ul li a.current{
            color:white;
            background: #252947;
        }
        .header .nav ul li a:hover{
            color: white;
            background: #252947;
        }

        .header .jrwm_box{
            float: left;
            height: 58px;
            width: 100px;
            padding-left: 48px;
            padding-top: 12px;

        }
        /*放背景图片的div*/
        .header .jrwm_box .jrwm{
            height: 34px;
            background-image: url(images/jrwm.png);
            background-repeat: no-repeat;
            text-align: center; /*让这个div内部的超链接居中*/
        }
        .header .jrwm_box .jrwm a{
            display: block; /*将超链接转为块儿，可以保证其霸占父亲的整行*/
            line-height: 34px; /*让行高为背景图片的高度，可以保证超链接的文字在背景图片里垂直居中*/
            text-decoration: none; /*去掉超链的下划线*/
            color: white;
        }



        .banner{
            height: 465px;
            background: url(images/banner.jpg) no-repeat center top;
        }
        .content{
            padding-top: 50px;
        }
        .content .product{
            height: 229px;
            border-bottom: 1px solid #DBE1E7;
        }
        .content .product ul{
            list-style: none;
        }
        .content .product ul li{
            float: left;
            width: 218px;
            margin-right: 43px;
        }
        .content .product ul li.last{
            margin-right: 0;
            width: 217px;
        }
        .content .product ul li img{
            width: 218px;
            height: 130px;
        }
        .content .product ul li.last img{
            width: 217px;
        }

        .content .product ul li h3{
            text-align: center;
            line-height: 38px;
            font-size: 14px;
            font-weight: bold;
        }
        .content .product ul li p.djbf{
            text-align: center;
            line-height: 16px;
        }
        .content .product ul li p.djbf a{
            font-size: 12px;
            color:#38B774;
            text-decoration: none;
            background:url(images/sanjiaoxing.png) no-repeat right 5px;
            padding-right: 12px;
        }

    </style>
</head>
<body>
    <div class="header">
        <div class="inner_c">
            <div class="logo">
                <img src="images/logo.png " alt="">
            </div>
            <div class="nav">
                <ul>
                    <li><a href="#" class="current">首页</a></li>
                    <li><a href="#">博雅游戏</a></li>
                    <li><a href="#">博雅新闻</a></li>
                    <li><a href="#">关于我们</a></li>
                    <li><a href="#">客服中心</a></li>
                    <li class="last"><a href="#">投资者关系</a></li>
                </ul>
            </div>
            <div class="jrwm_box">
                <div class="jrwm">
                    <a href="https://www.google.com/" target="_blank">加入我们</a>
                </div>
            </div>
        </div>
    </div>

    <!-- 在导航条和banner之间隔一堵墙 -->
    <div class="cl"></div>

    <div class="banner"></div>

    <!-- 内容区域 -->
    <div class="content inner_c">
        <div class="product">
            <ul>
                <li>
                    <p><img src="images/pro1.jpg" alt="" /></p>
                    <h3>BPT宣传片</h3>
                    <p class="djbf">
                        <a href="#">点击播放</a>
                    </p>
                </li>
                <li>
                    <p><img src="images/pro2.jpg" alt="" /></p>
                    <h3>BPT宣传片</h3>
                    <p class="djbf">
                        <a href="#">点击播放</a>
                    </p>
                </li>
                <li>
                    <p><img src="images/pro3.jpg" alt="" /></p>
                    <h3>BPT宣传片</h3>
                    <p class="djbf">
                        <a href="#">点击播放</a>
                    </p>
                </li>
                <li class="last">
                    <p><img src="images/pro4.jpg" alt="" /></p>
                    <h3>BPT宣传片</h3>
                    <p class="djbf">
                        <a href="#">点击播放</a>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>
```

代码解释：

（1）导航栏，左侧的logo：

**错误的写法：**

可能会有人直接将img标签作为logo的布局：


```html
    <div class="logo">
        <img src="images/logo.png " alt="">
    </div>
```

然后将img的样式设置为：

```css
    .header .logo{
        float: left;
        margin-right: 40px;
    }
```

这样写虽然视觉效果上达到了，但是搜索引擎是搜不到图片的，不利于SEO。

**正确的写法：**

正确的写法是将超链接作为logo的布局，里面放入文字（文字可以被SEO）：

```html
			<h1 class="logo">
				<a href="#">
					博雅互动-世界上最好的游戏公司
				</a>
			</h1>
```

然后将**logo设置为背景图**：

```css
		.header .logo{
			float: left;
			padding-left: 12px;
			margin-right: 39px;
			width: 174px;
			height: 58px;
		}
		.header .logo a{
			display: block;
			width: 174px;
			height: 58px;
			background:url(images/logo.png) no-repeat;
			text-indent: -999em;
		}

```

由于搜索引擎是搜不到图片的，所以一定要把“博雅互动”这几个文字加上去，**然后通过`text-indent`缩进的属性把文字赶走到视线以外的地方**。这是做搜索引擎优化的一个重要的技巧。

另外，背景要放在里层的a标签里，不要放在外层的h1标签里。假设背景图放在h1里，那么不管h1的padding有多大，背景图的位置都不会变。

（1）内容区域，“点击播放”右侧的小三角形：

我们在“点击播放”的右侧放了一个三角形。这个很有技巧。

![](http://img.smyhvae.com/20180115_1356.png)

代码截取如下：

```css
    .content .product ul li p.djbf a{
        font-size: 12px;
        color:#38B774;
        text-decoration: none;
        background:url(images/sanjiaoxing.png) no-repeat right center;
        padding-right: 12px;
    }
```

上方代码中，我们在第6行给“点击播放”这个超链接加一个右padding（很关键），然后在第5行把小三角这个背景图放在右padding的位置，就能达到想要的视觉效果。

（2）导航栏+banner+内容区域的效果如下：

![](http://img.smyhvae.com/20180114_1405.png)

工程文件：[2018-03-20-boya.rar](https://github.com/qianguyihao/web-resource/blob/main/project/2018-03-20-boya.rar)

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)
---
title: 14-CSS3属性详解：Web字体
publish: true
---

<ArticleTopAd></ArticleTopAd>



## 前言


开发人员可以为自已的网页指定特殊的字体（将指定字体提前下载到站点中），无需考虑用户电脑上是否安装了此特殊字体。从此，把特殊字体处理成图片的方式便成为了过去。

支持程度比较好，甚至 IE 低版本的浏览器也能支持。

## 字体的常见格式

> 不同浏览器所支持的字体格式是不一样的，我们有必要了解一下字体格式的知识。

#### TureTpe格式：(**.ttf**)

.ttf 字体是Windows和Mac的最常见的字体，是一种RAW格式。

支持这种字体的浏览器有IE9+、Firefox3.5+、Chrome4+、Safari3+、Opera10+、iOS Mobile、Safari4.2+。



#### OpenType格式：(**.otf**)

.otf 字体被认为是一种原始的字体格式，其内置在TureType的基础上。

支持这种字体的浏览器有Firefox3.5+、Chrome4.0+、Safari3.1+、Opera10.0+、iOS Mobile、Safari4.2+。


#### Web Open Font Format格式：(**.woff**)

woff字体是Web字体中最佳格式，他是一个开放的TrueType/OpenType的压缩版本，同时也支持元数据包的分离。

支持这种字体的浏览器有IE9+、Firefox3.5+、Chrome6+、Safari3.6+、Opera11.1+。

#### Embedded Open Type格式：(**.eot**)

.eot字体是IE专用字体，可以从TrueType创建此格式字体，支持这种字体的浏览器有IE4+。


#### SVG格式：(**.svg**)

.svg字体是基于SVG字体渲染的一种格式。

支持这种字体的浏览器有Chrome4+、Safari3.1+、Opera10.0+、iOS Mobile Safari3.2+。

**总结：**

了解了上面的知识后，**我们就需要为不同的浏览器准备不同格式的字体**。通常我们会通过字体生成工具帮我们生成各种格式的字体，因此无需过于在意字体格式之间的区别。


下载字体的网站推荐：

- <http://www.zhaozi.cn/>

- <http://www.youziku.com/>


## WebFont 的使用步骤

打开网站<http://iconfont.cn/webfont#!/webfont/index>，如下：

![](http://img.smyhvae.com/20180220_1328.png)

上图中，比如我想要「思源黑体-粗」这个字体，那我就点击红框中的「本地下载」。

下载完成后是一个压缩包，压缩包链接：http://download.csdn.net/download/smyhvae/10253561

解压后如下：

![](http://img.smyhvae.com/20180220_1336.png)

上图中， 我们把箭头处的html文件打开，里面告诉了我们 webfont 的**使用步骤**：

![](http://img.smyhvae.com/20180220_1338.png)

（1）第一步：使用font-face声明字体

```css
@font-face {font-family: 'webfont';
    src: url('webfont.eot'); /* IE9*/
    src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('webfont.woff') format('woff'), /* chrome、firefox */
    url('webfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('webfont.svg#webfont') format('svg'); /* iOS 4.1- */
}
```


（2）第二步：定义使用webfont的样式

```css
.web-font{
    font-family:"webfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
```


（3）第三步：为文字加上对应的样式

```html
<i class="web-font">这一分钟，你和我在一起，因为你，我会记得那一分钟。从现在开始，我们就是一分钟的朋友。这是事实，你改变不了，因为已经完成了。</i>
```

**举例：**

我们按照上图中的步骤来，引入这个字体。完整版代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>

        p{
            font-size:30px;
        }

        /*  如果要在网页中使用web字体（用户电脑上没有这种字体）*/
        /* 第一步：声明字体*/
        /* 告诉浏览器 去哪找这个字体*/
        @font-face {font-family: 'my-web-font';
            src: url('font/webfont.eot'); /* IE9*/
            src: url('font/webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('font/webfont.woff') format('woff'), /* chrome、firefox */
            url('font/webfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
            url('font/webfont.svg#webfont') format('svg'); /* iOS 4.1- */
        }
        /* 第二步：定义一个类名，谁加这类名，就会使用 webfont 字体*/
        .webfont{
            font-family: 'my-web-font';
        }
    </style>
</head>
<body>
    <!-- 第三步：引用 webfont 字体 -->
    <p class="webfont">生命壹号，永不止步</p>
</body>
</html>
```


代码解释：

（1）`my-web-font`这个名字是随便起的，只要保证第一步和第二步中的名字一样就行。

（2）因为我把字体文件单独放在了font文件夹中，所以在src中引用字体资源时，写的路径是 `font/...`

工程文件：[2018-02-20-WebFont举例.zip](https://github.com/qianguyihao/web-resource/blob/main/project/2018-02-20-WebFont%E4%B8%BE%E4%BE%8B.zip)



## 字体图标（阿里的 iconfont 网站举例）

我们其实可以把图片制作成字体。常见的做法是：把网页中一些小的图标，借助工具生成一个字体包，然后就可以像使用文字一样使用图标了。这样做的优点是：

- 将所有图标打包成字体库，减少请求；

- 具有矢量性，可保证清晰度；

- 使用灵活，便于维护。

也就是说，我们可以把这些图标当作字体来看待，凡是字体拥有的属性（字体大小、颜色等），均适用于图标。

**使用步骤如下：**（和上一段的使用步骤是一样的）

打开网站<http://iconfont.cn/>，找到想要的图标，加入购物车。然后下载下来：

![](http://img.smyhvae.com/20180220_1750.png)

压缩包下载之后，解压，打开里面的demo.html，里面告诉了我们怎样引用这些图标。

![](http://img.smyhvae.com/20180220_1755.png)

**举例1**：（图标字体引用）

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        /*申明字体*/
        @font-face {font-family: 'iconfont';
            src: url('font/iconfont.eot'); /* IE9*/
            src: url('font/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('font/iconfont.woff') format('woff'), /* chrome、firefox */
            url('font/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
            url('font/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
        }

        .iconfont{
            font-family: iconfont;
        }

        p{
            width: 200px;
            border: 1px solid #000;
            line-height: 60px;
            font-size:30px;
            margin:100px auto;
            text-align: center;
        }

        p span{
            color:red;
        }
    </style>
</head>
<body>
    <!-- 【重要】编码代表图标 -->
    <p><span class="iconfont">&#xe628;</span>扫码付款</p>
</body>
</html>

```

效果如下：

![](http://img.smyhvae.com/20180220_1800.png)


**举例2**：（伪元素的方式使用图标字体）

如果想要在文字的前面加图标字体，我们更习惯采用**伪元素**的方式进行添加。

代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        /*申明字体*/
        @font-face {font-family: 'iconfont';
            src: url('font/iconfont.eot'); /* IE9*/
            src: url('font/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('font/iconfont.woff') format('woff'), /* chrome、firefox */
            url('font/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
            url('font/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
        }



        p{
            width: 200px;
            border: 1px solid #000;
            line-height: 60px;
            font-size:30px;
            margin:100px auto;
            text-align: center;
            position: relative;
        }

        .icon::before{
            /*&#xe628;*/
            content:"\e628";
            /*position: absolute;*/
            /*left:10px;*/
            /*top:0px;*/
            font-family: iconfont;
            color:red;
        }

        span{
            position: relative;

        }


    </style>
</head>
<body>
    <p class="icon">扫码付款</p>
    <span class="icon" >我是span</span>
    <div class="icon">divvvvvvvvvvv</div>
</body>
</html>

```

效果如下：

![](http://img.smyhvae.com/20180220_1815.png)


~工程文件~：

- 2018-02-20-图标字体demo.zip

- 下载链接暂无。

## 其他相相关网站介绍

- Font Awesome 使用介绍：<http://fontawesome.dashgame.com/>

定制自已的字体图标库：

- <http://iconfont.cn/>

- <https://icomoon.io/>

SVG素材：

- <https://www.iconfont.cn/>




## 360浏览器网站案例

暂略。

这里涉及到：jQuery fullPage   全屏滚动插件。

- 中文网址:http://www.dowebok.com

- 相关说明:http://www.dowebok.com/77.html


## 使用 Bootstrap 网站的图标字体

打开如下网站：<http://www.bootcss.com/p/font-awesome/>。

![](http://img.smyhvae.com/20180223_2100.png)

如上图所示，下载字体后，进行解压：

![](http://img.smyhvae.com/20180223_2105.png)

使用步骤如下：

（1）如图只是想要字体的话，可以把`css`和`font`这两个文件夹拷贝到项目里。

（2）在html文档中的 <head> 标签里，引入 font-awesome.min.css 文件：

```html
    <link rel="stylesheet" href="css/font-awesome.min.css">
```

（3）想在哪个标签里用这个图标，直接在这个标签里加className就行（className都在[网站](http://www.bootcss.com/p/font-awesome/)上列出来了）。


完整版代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <style>

    </style>
</head>
<body>
    <span class="icon-play">播放</span>
</body>
</html>
```



## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)













---
title: 15-Sass入门
publish: true
---

<ArticleTopAd></ArticleTopAd>


## Sass简介

大家都知道，js 中可以自定义变量，css 仅仅是一个标记语言，不是编程语言，因此不可以自定义变量、不可以引用等等。

面对这些问题，我们现在来引入 Sass，简单的说，他是 css 的升级版，可以自定义变量，可以有 if 语句，还可以嵌套等等，很神奇吧！那下面我们就来介绍返个神奇的 Sass。

Sass比Less的功能更强大，也更复杂。


### Sass 的定义

Sass：英文是 Syntactically Awesome Stylesheets Sass。最早由 Hampton Catlin 开发和设计。 一种帮助你简化 CSS 工作流程的方式，帮助你更容易维护和开发 CSS 内容。


官网是：<https://sass-lang.com/>

Sass 是这个世界上最成熟、稳定和强大的专业级 CSS 扩展语言。

Sass专注的是怎样创建优雅的样式表，而不是内容。


### Sass、Compass与CSS

**关系：**

- Less/Sass是语法、Compass是框架、CSS是目标。

**Sass&Compass的好处**：

- 写出更优秀的CSS。

- 解决CSS编写过程中的痛点问题，比如精灵图合图、属性的浏览器前缀处理等。

- 有效组织样式、图片、字体等项目元素。


**受众群体：**

- 重构的同学，写很多CSS，不知如何自动化。

- 希望在项目周期内更好地组织项目内容。



## Sass的安装

sass引擎是用Ruby语言开发的（但是两者的语法没有关系），因此在安装 Sass 前，需要先安装Ruby（mac下自带Ruby无需再安装Ruby）。

下面来讲一下 Windows 下的安装Sass的步骤。

### 第一步：安装Ruby（windows环境）

下载地址：<http://rubyinstaller.org/downloads/>

貌似网络很慢，不一定能下载成功~

安装时，记得勾选“环境变量”：

![](http://img.smyhvae.com/20180407_2022.png)

安装完ruby之后，在命令行中输入`ruby -v`，查看ruby的的版本：

![](http://img.smyhvae.com/20180407_2039.png)


### 关于Mac下的Ruby

刚刚说了，Mac下自带Ruby，但是版本肯定很老：

![](http://img.smyhvae.com/20180407_2145.png)

有的时候，我们可能需要使用特定版本的ruby，或者在不同的ruby版本之间进行切换，所以，大家可以尝试安装`rvm`，它是ruby的版本管理工具。官网是：<https://rvm.io>

### 第二步：安装 Sass

安装完ruby之后，在开始菜单中，找到刚才我们安装的ruby，打开Start Command Prompt with Ruby。输入`gem install sass`安装Sass。

PS：Ruby 是使用 gem 来管理它的各种包（比如Sass）。我们安装好ruby之后，gem会自动安装上；类似于，我们安装完node之后，npm也自动安装好了。

但是，由于访问网络受限，我们可以先切换到淘宝的镜像，再安装Sass。步骤如下：

（1）移除默认的镜像，添加淘宝的镜像：

```
	gem sources --remove https://rubygems.org/

	gem sources -a https://ruby.taobao.org/  //注意：如果你系统不支持https，请将淘宝源更换成：gem sources -a http://gems.ruby-china.org
```

PS：我测试了一下，Win 7 不支持https，Mac支持https。

（2）查看当前使用的是哪个镜像：

```
	gem sources -l
```

![](http://img.smyhvae.com/20180407_2050.png)

（3）安装sass：

紧接着，输入如下命令安装Sass：

```
	gem install sass        // 如果mac下输入这个命令时没有权限，则需要在前面加上 sudo
```

系统会自动安装上最新版本的Sass。

查看sass版本的命令为:

```
	sass -v
```

升级sass版本的命令为：

```
	gem update sass
```

你也可以运行帮助命令行来查看你需要的命令：

```
	sass -h
```

![](http://img.smyhvae.com/20180407_2100.png)

参考链接：<https://www.w3cplus.com/sassguide/install.html>

## Compass 简介和安装

安装完sass之后，我们在main.scss中写一些代码，然后输入如下命令，就可以将`scss文件`转化为`css文件`：

```
	sass main.scss main.css
```

然而，真正的项目开发中，我们不一定是直接使用 sass 命令，而是使用 Compass。

### Compass 简介

官网是：<http://compass-style.org/>。

Compass 是开源的CSS书写框架。

### Compass 安装

输入如下命令安装 Compass：

```
	gem isntall compass
```

输入如下命令查看版本：

```
	compass -v
```

![](http://img.smyhvae.com/20180407_2208.png)

compass可以直接用来搭建前端项目的样式部分，但并不是常用的方法。

### Compass的简单使用

通过 Compass 创建工程目录：


```
cd workspace

compass create CompassDemo
```

文件结构如下：

- /sass
	- ie.scss
	- print.scss
	- screen.scss

- /stylesheets
	- ie.css
	- print.css
	- screen.css

- config.rb



为了能够让文件实时编译，我们可以通过 copass watch 监听sass文件的变化：

```
	cd CompassDemo

	compass watch
```

当.scss文件改动时，会自动生成对应的.css文件。



## Sass的语法

### 两种后缀名（两种语法）

sass 有两种后缀名文件：

（1）`.sass`：对空格敏感。不使用大括号和分号，所以每个属性之间是通过换行来分隔。

比如：

```
h1
	color: #000
	background: #fff
```

这种语法是类ruby的语法，和CSS的语法相比，相差较大。所以，在3.0版本中就引入了`.scss`的语法。



（2）`.scss`：是css语法的超集，可以使用大括号和分号。

比如：

```
h1 {
	color: #000;
	background: #fff;
}
```


注意：一个项目中可以混合使用两种语法，但是一个文件中不能同时使用两种语法。


**两种格式之间的转换：**

我们在工程目录下新建`main.scss`，输入如下代码：

```
*{
    margin: 0;
    padding: 0;
}
```

然后输入如下命令，就可以将上面的`main.scss`转化为`main.sass`：

```bash
	sass-convert main.scss main.sass
```


打开生成的`main.sass`，内容如下：

```
*
  margin: 0
  padding: 0

```


### 变量语法

Sass 是通过`$`符号来声明变量。

（1）我们新建一个文件`_variables.scss`，这个文件专门用来存放变量，然后在其他的文件中引入`_variables.scss`即可。

因为这个文件只需要存储变量，并不需要它编译出对应的 css 文件，所以我们给文件名的前面加了**下划线**，意思是声明为**局部文件**。

我们在这个文件中，声明两个字体变量：

```css
$font1: Braggadocio, Arial, Verdana, Helvetica, sans-serif;

$font2: Arial, Verdana, Helvetica, sans-serif;
```


（2）新建文件main.scss，在里面引入步骤（1）中的变量文件：

```
@import "variables";    // 引入变量文件

.div1{
    font-family: $font1;
}

.div2{
    font-family: $font2;
}
```

基于 Sass 的既定规则：

- 没有文件后缀名时，Sass 会自动添加 .scss 或者 .sass 的后缀（具体要看已经存在哪个后缀的文件）。

- 同一目录下，局部文件和非局部文件不能重名。

对应生成的main.css文件如下：

main.css

```css
/* line 9, ../sass/main.scss */
.div1 {
  font-family: Braggadocio, Arial, Verdana, Helvetica, sans-serif;
}

/* line 13, ../sass/main.scss */
.div2 {
  font-family: Arial, Verdana, Helvetica, sans-serif;
}

```



### 注释语法

单行注释：

```
//我是单行注释
```

块级注释：

```
/*
	我是块级注释
	哈哈
*/

```



二者的区别是：单行注释不会出现在自动生成的css文件中。




---
title: 13-CSS3属性：Flex布局图文详解
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 前言

CSS3中的 flex 属性，在布局方面做了非常大的改进，使得我们对**多个元素之间**的布局排列变得十分灵活，适应性非常强。其强大的伸缩性和自适应性，在网页开中可以发挥极大的作用。

### flex 初体验

我们先来看看下面这个最简单的布局：

![](http://img.smyhvae.com/20191009_1555.png)

上面这张图中的布局是我们都熟悉的：默认文档流中，在一个父容器里放置多个块级的子元素，那么，这些子元素会默认从上往下排列。

在此基础之上，如果我给父容器仅仅加一个 `display: flex`属性，此时，这些子元素的布局会摇身一变：

![](http://img.smyhvae.com/20191009_1600.png)

没错，子元素们会**在水平方向上，从左至右排列**，就是这么神奇。到此为止，你已经掌握了关于 flex 的一半的知识。

### flex 布局的优势

1、**flex 布局的子元素不会脱离文档流**，很好地遵从了“流的特性”。

但你如果用 float 来做布局，float 属性的元素会脱离文档流，而且会涉及到各种 BFC、清除浮动的问题。浮动相关的问题，比较麻烦，所以也成了面试必问的经典题目。但有了 flex 布局之后，这些问题都不存在的。

2、**flex 是一种现代的布局方式，是 W3C 第一次提供真正用于布局的 CSS 规范**。 flex 非常提供了丰富的属性，非常灵活，让布局的实现更佳多样化，且方便易用。

flex 唯一的缺点就在于，它不支持低版本的 IE 浏览器。

### flex 的兼容性问题

![](http://img.smyhvae.com/20191005_1200.png)

上图中可以看到， flex 布局不支持 IE9 及以下的版本；IE10及以上也只是部分支持。如果你的页面不需要处理 IE浏览器的兼容性问题，则可以放心大胆地使用 flex 布局。

但是，比如网易新闻、淘宝这样的大型网站，面对的是海量用户，即便使用低版本浏览器的用户比例很少，但绝对基数仍然是很庞大的。因此，这些网站为了兼容低版本的 IE 浏览器，暂时还不敢尝试使用 flex 布局。

### 概念：弹性盒子、子元素

在讲 flex 的知识点之前，我们事先约定两个概念：

- **弹性盒子**：指的是使用 `display:flex` 或 `display:inline-flex` 声明的**父容器**。

- **子元素/弹性元素**：指的是父容器里面的子元素们（父容器被声明为 flex 盒子的情况下）。

### 概念：主轴和侧轴

在上面的“初体验”例子中，我们发现，弹性盒子里面的子元素们，默认是从左至右排列的，这个方向，代表的就是主轴的方向。

在此，我们引入主轴和侧轴的概念。

![](http://img.smyhvae.com/20191009_1701.png)

如上图所示：

- 主轴：flex容器的主轴，默认是水平方向，从左向右。

- 侧轴：与主轴垂直的轴称作侧轴，默认是垂直方向，从上往下。

PS：主轴和侧轴并不是固定不变的，可以通过 `flex-direction` 更换方向，我们在后面会讲到。

## 弹性盒子

### 声明定义

使用 `display:flex` 或 `display:inline-flex` 声明一个**父容器**为弹性盒子。此时，这个父容器里的子元素们，会遵循弹性布局。

备注：一般是用 `display:flex`这个属性。`display:inline-flex`用得较少。

### flex-direction 属性

`flex-direction`：用于设置盒子中**子元素**的排列方向。属性值可以是：

| 属性值 | 描述 |
|:-------------|:-------------|
| row | 从左到右水平排列子元素（默认值） |
|column|从上到下垂直排列子元素|
| row-reverse |从右向左排列子元素 |
|column-reverse|从下到上垂直排列子元素|

备注：如果我们不给父容器写`flex-direction`这个属性，那么，子元素默认就是从左到右排列的。

代码演示：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        *{
            margin: 0;
            padding: 0;
            list-style: none;
        }
       body{
           background-color: #eee;
           font-family: "Microsoft Yahei";
           font-size:22px;
       }

        h3{
            font-weight: normal;
        }
        section{
            width: 1000px;

            margin:40px auto;
        }

        ul{
            background-color: #fff;
            border: 1px solid #ccc;

        }

        ul li{
            width: 200px;
            height: 200px;
            background-color: pink;
            margin:10px;
        }
        section:nth-child(1) ul{
            overflow: hidden; /* 清除浮动 */
        }
        section:nth-child(1) ul li{
            float: left;
        }
        /* 设置伸缩盒子*/
        section:nth-child(2) ul{
            display: flex;
        }

        section:nth-child(3) ul{
            /* 设置伸缩布局*/
            display: flex;
            /* 设置主轴方向*/
            flex-direction: row;
        }

        section:nth-child(4) ul{
            /* 设置伸缩布局*/
            display: flex;
            /* 设置主轴方向 :水平翻转*/
            flex-direction: row-reverse;
        }

        section:nth-child(5) ul{
            /* 设置伸缩布局*/
            display: flex;
            /* 设置主轴方向 :垂直*/
            flex-direction: column;
        }

        section:nth-child(6) ul{
            /* 设置伸缩布局*/
            display: flex;
            /* 设置主轴方向 :垂直*/
            flex-direction: column-reverse;
        }
    </style>
</head>
<body>
    <section>
        <h3>传统布局</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>伸缩布局 display:flex</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴方向 flex-direction:row</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴方向 flex-direction:row-reverse</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴方向 flex-direction:column</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴方向 flex-direction:column-reverse</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>
</body>
</html>
```


### flex-wrap 属性

`flex-wrap`：控制子元素溢出时的换行处理。

### justify-content 属性

`justify-content`：控制子元素在主轴上的排列方式。

## 弹性元素

### justify-content 属性

- `justify-content: flex-start;` 设置子元素在**主轴上的对齐方式**。属性值可以是：
    - `flex-start` 从主轴的起点对齐（默认值）
    - `flex-end` 从主轴的终点对齐
    - `center` 居中对齐
    - `space-around` 在父盒子里平分
    - `space-between` 两端对齐 平分


代码演示：（在浏览器中打开看效果）

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        *{
            margin: 0;
            padding: 0;
            list-style:none;}
        body{
            background-color: #eee;
            font-family: "Microsoft Yahei";

        }
        section{
            width: 1000px;
            margin:50px auto;
        }
        section h3{
            font-size:22px;
            font-weight: normal;
        }

        ul{
            border: 1px solid #999;
            background-color: #fff;
            display: flex;

        }

        ul li{
            width: 200px;
            height: 200px;
            background: pink;
            margin:10px;

        }

        section:nth-child(1) ul{
            /* 主轴对齐方式：从主轴开始的方向对齐*/
            justify-content: flex-start;
        }

        section:nth-child(2) ul{
            /* 主轴对齐方式：从主轴结束的方向对齐*/
            justify-content: flex-end;
        }

        section:nth-child(3) ul{
            /* 主轴对齐方式：居中对齐*/
            justify-content: center;
        }

        section:nth-child(4) ul{
            /* 主轴对齐方式：在父盒子中平分*/
            justify-content: space-around;

           }

        section:nth-child(5) ul{
            /* 主轴对齐方式：两端对齐 平分*/
            justify-content: space-between;
        }
    </style>
</head>
<body>
    <section>
        <h3>主轴的对齐方式：justify-content:flex-start</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴的对齐方式：justify-content:flex-end</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴的对齐方式：justify-content:center</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴的对齐方式：justify-content:space-round</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴的对齐方式：justify-content:space-bettwen</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </section>
</body>
</html>
```


### align-items 属性

`align-items`：设置子元素在**侧轴上的对齐方式**。属性值可以是：
    - `flex-start` 从侧轴开始的方向对齐
    - `flex-end` 从侧轴结束的方向对齐
    - `baseline` 基线 默认同flex-start
    - `center` 中间对齐
    - `stretch` 拉伸

代码演示：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        *{
            margin: 0;
            padding: 0;
            list-style:none;
        }
        body{
            background-color: #eee;
            font-family: "Microsoft Yahei";

        }
        section{
            width: 1000px;
            margin:50px auto;
        }
        section h3{
            font-size:22px;
            font-weight: normal;
        }

        ul{
            border: 1px solid #999;
            background-color: #fff;
            display: flex;
            height:500px;

        }

        ul li{
            width: 200px;
            height: 200px;
            background: pink;
            margin:10px;

        }

        section:nth-child(1) ul{
            /* 侧轴对齐方式 ：从侧轴开始的方向对齐*/
            align-items:flex-start;
        }

        section:nth-child(2) ul{
            /* 侧轴对齐方式 ：从侧轴结束的方向对齐*/
            align-items:flex-end;
        }

        section:nth-child(3) ul{
            /* 侧轴对齐方式 ：居中*/
            align-items:center;
        }

        section:nth-child(4) ul{
            /* 侧轴对齐方式 ：基线 默认同flex-start*/
            align-items:baseline;
        }

        section:nth-child(5) ul{
            /* 侧轴对齐方式 ：拉伸*/
            align-items:stretch;

        }

        section:nth-child(5) ul li{
            height:auto;
        }


    </style>
</head>
<body>
<section>
    <h3>侧轴的对齐方式:align-items ：flex-start</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>

<section>
    <h3>侧轴的对齐方式：align-items:flex-end</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>

<section>
    <h3>侧轴的对齐方式：align-items:center</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>

<section>
    <h3>侧轴的对齐方式：align-itmes:baseline</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>

<section>
    <h3>侧轴的对齐方式：align-itmes: stretch</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>
</body>
</html>
```

### `flex`属性：设置子盒子的权重

代码演示：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        *{
            margin: 0;
            padding: 0;
            list-style:none;
        }
        body{
            background-color: #eee;
            font-family: "Microsoft Yahei";

        }
        section{
            width: 1000px;
            margin:50px auto;
        }
        section h3{
            font-size:22px;
            font-weight: normal;
        }

        ul{
            border: 1px solid #999;
            background-color: #fff;
            display: flex;

        }

        ul li{
            width: 200px;
            height: 200px;
            background: pink;
            margin:10px;

        }

        section:nth-child(1) ul li:nth-child(1){
            flex:1;
        }

        section:nth-child(1) ul li:nth-child(2){
            flex:1;
        }

        section:nth-child(1) ul li:nth-child(3){
            flex:8;
        }

        section:nth-child(2) ul li:nth-child(1){

        }

        section:nth-child(2) ul li:nth-child(2){
            flex:1;
        }

        section:nth-child(2) ul li:nth-child(3){
           flex:4;
        }


    </style>
</head>
<body>
<section>
    <h3>伸缩比例:flex</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>

<section>
    <h3>伸缩比例:flex</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>


</body>
</html>
```

## 相关链接

### CSS Flexbox 可视化手册

可视化的截图如下：（请点开链接，查看大图）

<http://img.smyhvae.com/20190821_2101.png>

相关文章：

- 【英文原版】 CSS Flexbox Fundamentals Visual Guide：<https://medium.com/swlh/css-flexbox-fundamentals-visual-guide-1c467f480dac>

- 【中文翻译】CSS Flexbox 可视化手册：<https://zhuanlan.zhihu.com/p/56046851>

###  flex 相关的推荐文章

- flex 效果在线演示：<https://demos.scotch.io/visual-guide-to-css3-flexbox-flexbox-playground/demos/>

- A Complete Guide to Flexbox | 英文原版：<https://css-tricks.com/snippets/css/a-guide-to-flexbox/>

- CSS3 Flexbox 布局完全指南 | 中文翻译：<https://www.html.cn/archives/8629>

###  flex 相关的教程

- [后盾人 flex 教程](http://houdunren.gitee.io/note/css/10%20%E5%BC%B9%E6%80%A7%E5%B8%83%E5%B1%80.html)

## 技巧：使用 margin 自动撑满剩余空间






---
title: 12-CSS3属性详解：动画详解
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 前言

本文主要内容：

- 过渡：transition

- 2D 转换 transform

- 3D 转换 transform

- 动画：animation

## 过渡：transition

`transition`的中文含义是**过渡**。过渡是CSS3中具有颠覆性的一个特征，可以实现元素**不同状态间的平滑过渡**（补间动画），经常用来制作动画效果。

- 补间动画：自动完成从起始状态到终止状态的的过渡。不用管中间的状态。

- 帧动画：通过一帧一帧的画面按照固定顺序和速度播放。如电影胶片。

参考链接：[补间动画基础](http://mux.alimama.com/posts/1009)

transition 包括以下属性：

- `transition-property: all;`  如果希望所有的属性都发生过渡，就使用all。

- `transition-duration: 1s;` 过渡的持续时间。

- `transition-timing-function: linear;`  运动曲线。属性值可以是：
	- `linear` 线性
	- `ease`  减速
	- `ease-in` 加速
	- `ease-out` 减速
	- `ease-in-out`  先加速后减速

- `transition-delay: 1s;` 过渡延迟。多长时间后再执行这个过渡动画。

上面的四个属性也可以写成**综合属性**：

```javascript
	transition: 让哪些属性进行过度 过渡的持续时间 运动曲线 延迟时间;

	transition: all 3s linear 0s;
```

其中，`transition-property`这个属性是尤其需要注意的，不同的属性值有不同的现象。我们来示范一下。

如果设置 `transition-property: width`，意思是只让盒子的宽度在变化时进行过渡。效果如下：

![](http://img.smyhvae.com/20180208_1440.gif)

如果设置 `transition-property: all`，意思是让盒子的所有属性（包括宽度、背景色等）在变化时都进行过渡。效果如下：

![](http://img.smyhvae.com/20180208_1445.gif)

### 案例：小米商品详情

代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS 过渡</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #eeeeee;
        }

        .content {
            width: 800px;
            height: 320px;
            padding-left: 20px;
            margin: 80px auto;
        }

        .item {
            width: 230px;
            height: 300px;
            text-align: center;
            margin-right: 20px;
            background-color: #FFF;
            float: left;
            position: relative;
            top: 0;
            overflow: hidden; /* 让溢出的内容隐藏起来。意思是让下方的橙色方形先躲起来 */
            transition: all .5s; /* 从最初到鼠标悬停时的过渡 */
        }

        .item img {
            margin-top: 30px;
        }

        .item .desc {
            position: absolute;
            left: 0;
            bottom: -80px;
            width: 100%;
            height: 80px;
            background-color: #ff6700;
            transition: all .5s;
        }

        /* 鼠标悬停时，让 item 整体往上移动5px，且加一点阴影 */
        .item:hover {
            top: -5px;
            box-shadow: 0 0 15px #AAA;
        }

        /* 鼠标悬停时，让下方的橙色方形现身 */
        .item:hover .desc {
            bottom: 0;
        }
    </style>
</head>
<body>
<div class="content">
    <div class="item">
        <img src="./images/1.png" alt="">
    </div>

    <div class="item">
        <img src="./images/2.png" alt="">
        <span class="desc"></span>
    </div>
    <div class="item">
        <img src="./images/3.jpg" alt="">
        <span class="desc"></span>
    </div>
</div>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180208_1500.gif)

动画效果录制的比较差，但真实体验还是可以的。

工程文件：[2018-02-08-小米商品详情过渡](https://github.com/qianguyihao/web-resource/blob/main/project/2018-02-08-%E5%B0%8F%E7%B1%B3%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85%E8%BF%87%E6%B8%A1.rar)




## 2D 转换

**转换**是 CSS3 中具有颠覆性的一个特征，可以实现元素的**位移、旋转、变形、缩放**，甚至支持矩阵方式。

转换再配合过渡和动画，可以取代大量早期只能靠 Flash 才可以实现的效果。

在 CSS3 当中，通过 `transform` 转换来实现 2D 转换或者 3D 转换。

- 2D转换包括：缩放、移动、旋转。

我们依次来讲解。

### 1、缩放：`scale`

格式：

```javascript
	transform: scale(x, y);

	transform: scale(2, 0.5);
```

参数解释： x：表示水平方向的缩放倍数。y：表示垂直方向的缩放倍数。如果只写一个值就是等比例缩放。

取值：大于1表示放大，小于1表示缩小。不能为百分比。

格式举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box {
            width: 1000px;
            margin: 100px auto;
        }

        .box div {
            width: 300px;
            height: 150px;
            background-color: pink;
            float: left;
            margin-right: 15px;
            color: white;
            text-align: center;
            font: 400 30px/150px “宋体”;

        }

        .box .box2 {
            background-color: green;
            transition: all 1s;
        }

        .box .box2:hover {
            /*width: 500px;*/
            /*height: 400px;*/
            background-color: yellowgreen;

            /* transform:  css3中用于做变换的属性
                scale(x,y)：缩放 */
            transform: scale(2, 0.5);
        }

    </style>
</head>
<body>
<div class="box">
    <div class="box1">1</div>
    <div class="box2">2</div>
    <div class="box3">3</div>
</div>

</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180208_1551.gif)

上图可以看到，给 box1 设置 2D 转换，并不会把兄弟元素挤走。

### 2、位移：translate

格式：


```javascript
	transform: translate(水平位移, 垂直位移);

	transform: translate(-50%, -50%);
```

参数解释：

- 参数为百分比，相对于自身移动。

- 正值：向右和向下。 负值：向左和向上。如果只写一个值，则表示水平移动。

格式举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box {
            width: 1000px;
            margin: 100px auto;
        }

        .box > div {
            width: 300px;
            height: 150px;
            border: 1px solid #000;
            background-color: red;
            float: left;
            margin-right: 30px;
        }

        div:nth-child(2) {
            background-color: pink;
            transition: all 1s;
        }

        /* translate:(水平位移，垂直位移)*/
        div:nth-child(2):hover {
            transform: translate(-50%, -50%);
        }
    </style>

</head>
<body>
<div class="box">
    <div class="box1">1</div>
    <div class="box2">2</div>
    <div class="box3">3</div>
</div>

</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180208_1600.gif)

上图中，因为我在操作的时候，鼠标悬停后，立即进行了略微的移动，所以产生了两次动画。正确的效果应该是下面这样的：


![](http://img.smyhvae.com/20180208_1605.gif)

**应用：**让绝对定位中的盒子在父亲里居中

我们知道，如果想让一个**标准流中的盒子在父亲里居中**（水平方向看），可以将其设置`margin: 0 auto`属性。

可如果盒子是绝对定位的，此时已经脱标了，如果还想让其居中（位于父亲的正中间），可以这样做：

```
	div {
		width: 600px;
		height: 60px;
		position: absolute;  绝对定位的盒子
		left: 50%;           首先，让左边线居中
		top: 0;
		margin-left: -300px;  然后，向左移动宽度（600px）的一半
	}
```

如上方代码所示，我们先让这个宽度为600px的盒子，左边线居中，然后向左移动宽度（600px）的一半，就达到效果了。

![](http://img.smyhvae.com/20180116_1356.png)

现在，我们还可以利用偏移 translate 来做，这也是比较推荐的写法：

```javascript
	div {
	    width: 600px;
	    height: 60px;
	    background-color: red;
	    position: absolute;       绝对定位的盒子
	    left: 50%;               首先，让左边线居中
	    top: 0;
	    transform: translate(-50%);    然后，利用translate，往左走自己宽度的一半【推荐写法】
	}
```

### 3、旋转：rotate

格式：

```javascript
	transform: rotate(角度);

	transform: rotate(45deg);
```

参数解释：正值 顺时针；负值：逆时针。

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: red;
            margin: 50px auto;
            color: #fff;
            font-size: 50px;
            transition: all 2s; /* 过渡：让盒子在进行 transform 转换的时候，有个过渡期 */
        }

        /* rotate（角度）旋转 */
        .box:hover {
            transform: rotate(-405deg); /* 鼠标悬停时，让盒子进行旋转 */
        }

    </style>
</head>
<body>
<div class="box">1</div>

</div>
</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180208_1630.gif)

注意，上方代码中，我们给盒子设置了 transform 中的 rotate 旋转，但同时还要给盒子设置 transition 过渡。如果没有这行过渡的代码，旋转会直接一步到位，效果如下：（不是我们期望的效果）

![](http://img.smyhvae.com/20180208_1635.gif)

**案例1：**小火箭

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        html,body{
            height:100%;
        }

        body{
            background-color: #DE8910;
        }
        .rocket{
            position: absolute;
            left:100px;
            top:600px;
            height: 120px;
            transform:translate(-200px ,200px) rotate(45deg);
            transition:all 1s ease-in;
        }

        body:hover .rocket{
            transform:translate(500px,-500px) rotate(45deg);
        }
    </style>
</head>
<body>
    <img  class="rocket" src="images/rocket.png" alt=""/>
</body>
</html>
```


上方代码中，我们将 transform 的两个小属性合并起来写了。

小火箭图片的url：<http://img.smyhvae.com/20180208-rocket.png>

**案例2：**扑克牌

rotate 旋转时，默认是以盒子的正中心为坐标原点的。如果想**改变旋转的坐标原点**，可以用`transform-origin`属性。格式如下：


```javascript
	transform-origin: 水平坐标 垂直坐标;

	transform-origin: 50px 50px;

	transform-origin: center bottom;   //旋转时，以盒子底部的中心为坐标原点
```

我们来看一下 rotate 结合 transform-origin 的用法举例。

代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        body {
            /*background-color: #eee;*/
        }

        .box {

            width: 300px;
            height: 440px;
            margin: 100px auto;
            position: relative;
        }

        img {
            width: 100%;
            transition: all 1.5s;
            position: absolute;     /* 既然扑克牌是叠在一起的，那就都用绝对定位 */
            left: 0;
            top: 0;

            transform-origin: center bottom; /*旋转时，以盒子底部的中心为坐标原点*/
            box-shadow: 0 0 3px 0 #666;
        }

        .box:hover img:nth-child(6) {
            transform: rotate(-10deg);
        }

        .box:hover img:nth-child(5) {
            transform: rotate(-20deg);
        }

        .box:hover img:nth-child(4) {
            transform: rotate(-30deg);
        }

        .box:hover img:nth-child(3) {
            transform: rotate(-40deg);
        }

        .box:hover img:nth-child(2) {
            transform: rotate(-50deg);
        }

        .box:hover img:nth-child(1) {
            transform: rotate(-60deg);
        }

        .box:hover img:nth-child(8) {
            transform: rotate(10deg);
        }

        .box:hover img:nth-child(9) {
            transform: rotate(20deg);
        }

        .box:hover img:nth-child(10) {
            transform: rotate(30deg);
        }

        .box:hover img:nth-child(11) {
            transform: rotate(40deg);
        }

        .box:hover img:nth-child(12) {
            transform: rotate(50deg);
        }

        .box:hover img:nth-child(13) {
            transform: rotate(60deg);
        }

    </style>
</head>
<body>
<div class="box">
    <img src="images/pk1.png"/>
    <img src="images/pk2.png"/>
    <img src="images/pk1.png"/>
    <img src="images/pk2.png"/>
    <img src="images/pk1.png"/>
    <img src="images/pk2.png"/>
    <img src="images/pk1.png"/>
    <img src="images/pk2.png"/>
    <img src="images/pk1.png"/>
    <img src="images/pk2.png"/>
    <img src="images/pk1.png"/>
    <img src="images/pk2.png"/>
    <img src="images/pk1.png"/>
</div>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180208_1650.gif)

### 4、倾斜

暂略。

## 3D 转换

### 1、旋转：rotateX、rotateY、rotateZ

**3D坐标系（左手坐标系）**

![](http://img.smyhvae.com/20180208_2010.png)

如上图所示，伸出左手，让拇指和食指成“L”形，大拇指向右，食指向上，中指指向前方。拇指、食指和中指分别代表X、Y、Z轴的正方向，这样我们就建立了一个左手坐标系。

浏览器的这个平面，是X轴、Y轴；垂直于浏览器的平面，是Z轴。

**旋转的方向：（左手法则）**

左手握住旋转轴，竖起拇指指向旋转轴的**正方向**，正向就是**其余手指卷曲的方向**。

从上面这句话，我们也能看出：所有的3d旋转，对着正方向去看，都是顺时针旋转。

**格式：**

```javascript
	transform: rotateX(360deg);    //绕 X 轴旋转360度

	transform: rotateY(360deg);    //绕 Y 轴旋转360度

	transform: rotateZ(360deg);    //绕 Z 轴旋转360度

```

**格式举例：**

（1）rotateX 举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .rotateX {
            width: 300px;
            height: 226px;
            margin: 200px auto;

            /* 透视 :加给变换的父盒子*/
            /* 设置的是用户的眼睛距离 平面的距离*/
            /* 透视效果只是视觉上的呈现，并不是正真的3d*/
            perspective: 110px;
        }

        img {
            /* 过渡*/
            transition: transform 2s;
        }

        /* 所有的3d旋转，对着正方向去看，都是顺时针旋转*/
        .rotateX:hover img {
            transform: rotateX(360deg);
        }

    </style>
</head>
<body>
<div class="rotateX">
    <img src="images/x.jpg" alt=""/>
</div>
</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180208_2025.gif)

上方代码中，我们最好加个透视的属性，方能看到3D的效果；没有这个属性的话，图片旋转的时候，像是压瘪了一样。

而且，透视的是要加给图片的父元素 div，方能生效。我们在后面会讲解透视属性。

（2）rotateY 举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .rotateY {
            width: 237px;
            height: 300px;
            margin: 100px auto;

            /* 透视 */
            perspective: 150px;
        }

        img {
            transition: all 2s;  /* 过渡 */
        }

        .rotateY:hover img {
            transform: rotateY(360deg);
        }
    </style>
</head>
<body>
<div class="rotateY">
    <img src="images/y.jpg" alt=""/>
</div>
</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180208_2030.gif)

（3）rotateZ 举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .rotateZ {
            width: 330px;
            height: 227px;
            margin: 100px auto;

            /* 透视*/
            perspective: 200px;
        }

        img {
            transition: all 1s;
        }

        .rotateZ:hover img {
            transform: rotateZ(360deg);
        }
    </style>
</head>
<body>
<div class="rotateZ">
    <img src="images/z.jpg" alt=""/>
</div>
</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180208_2035.gif)

**案例**：百度钱包的水平翻转效果

现在有下面这张图片素材：

![](http://img.smyhvae.com/20180208_2055.png)

要求做成下面这种效果：

![](http://img.smyhvae.com/20180208_2100.gif)

上面这张图片素材其实用的是精灵图。实现的代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        body {
            background-color: cornflowerblue;
        }

        .box {
            width: 300px;
            height: 300px;
            /*border: 1px solid #000;*/
            margin: 50px auto;
            position: relative;
        }

        .box > div {
            width: 100%;
            height: 100%;
            position: absolute;
            /*border: 1px solid #000;*/
            border-radius: 50%;
            transition: all 2s;
            backface-visibility: hidden;
        }

        .box1 {
            background: url(images/bg.png) left 0 no-repeat; /*默认显示图片的左半边*/
        }

        .box2 {
            background: url(images/bg.png) right 0 no-repeat;
            transform: rotateY(180deg); /*让图片的右半边默认时，旋转180度，就可以暂时隐藏起来*/

        }

        .box:hover .box1 {
            transform: rotateY(180deg); /*让图片的左半边转消失*/
        }

        .box:hover .box2 {
            transform: rotateY(0deg); /*让图片的左半边转出现*/
        }
    </style>
</head>
<body>
<div class="box">
    <div class="box1"></div>
    <div class="box2"></div>
</div>
</body>
</html>
```

### 2、移动：translateX、translateY、translateZ

**格式：**

```javascript
	transform: translateX(100px);    //沿着 X 轴移动

	transform: translateY(360px);    //沿着 Y 轴移动

	transform: translateZ(360px);    //沿着 Z 轴移动

```

**格式举例：**

（1）translateX 举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background: green;
            transition: all 1s;
        }

        .box:hover {
            transform: translateX(100px);
        }
    </style>
</head>
<body>
<div class="box">

</div>
</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180208_2036.gif)

（2）translateY 举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background: green;
            transition: all 1s;
        }

        .box:hover {
            transform: translateY(100px);
        }
    </style>
</head>
<body>
<div class="box">

</div>
</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180208_2037.gif)

（3）translateZ 举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        body {
            /* 给box的父元素加透视效果*/
            perspective: 1000px;
        }

        .box {
            width: 250px;
            height: 250px;
            background: green;
            transition: all 1s;
            margin: 200px auto
        }

        .box:hover {
            /* translateZ必须配合透视来使用*/
            transform: translateZ(400px);
        }
    </style>
</head>
<body>
<div class="box">

</div>
</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180208_2040.gif)

上方代码中，如果不加透视属性，是看不到translateZ的效果的。

### 3、透视：perspective

电脑显示屏是一个 2D 平面，图像之所以具有立体感（3D效果），其实只是一种视觉呈现，通过透视可以实现此目的。

透视可以将一个2D平面，在转换的过程当中，呈现3D效果。但仅仅只是视觉呈现出 3d 效果，并不是正真的3d。

格式有两种写法：

- 作为一个属性，设置给父元素，作用于所有3D转换的子元素

- 作为 transform 属性的一个值，做用于元素自身。

格式举例：

```css
perspective: 500px;
```

### 4、3D呈现（transform-style）

3D元素构建是指某个图形是由多个元素构成的，可以给这些元素的**父元素**设置`transform-style: preserve-3d`来使其变成一个真正的3D图形。属性值可以如下：

```css
	transform-style: preserve-3d;     /* 让 子盒子 位于三维空间里 */

	transform-style: flat;            /* 让子盒子位于此元素所在的平面内（子盒子被扁平化） */

```

**案例：**立方体

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box {
            width: 250px;
            height: 250px;
            border: 1px dashed red;
            margin: 100px auto;
            position: relative;
            border-radius: 50%;

            /* 让子盒子保持3d效果*/

            transform-style: preserve-3d;

            /*transform:rotateX(30deg) rotateY(-30deg);*/

            animation: gun 8s linear infinite;
        }

        .box > div {
            width: 100%;
            height: 100%;
            position: absolute;
            text-align: center;
            line-height: 250px;
            font-size: 60px;
            color: #daa520;
        }

        .left {
            background-color: rgba(255, 0, 0, 0.3);
            /* 变换中心*/
            transform-origin: left;
            /* 变换*/
            transform: rotateY(90deg) translateX(-125px);
        }

        .right {
            background: rgba(0, 0, 255, 0.3);
            transform-origin: right;
            /* 变换*/
            transform: rotateY(90deg) translateX(125px);
        }

        .forward {
            background: rgba(255, 255, 0, 0.3);
            transform: translateZ(125px);
        }

        .back {
            background: rgba(0, 255, 255, 0.3);
            transform: translateZ(-125px);
        }

        .up {
            background: rgba(255, 0, 255, 0.3);
            transform: rotateX(90deg) translateZ(125px);
        }

        .down {
            background: rgba(99, 66, 33, 0.3);
            transform: rotateX(-90deg) translateZ(125px);
        }

        @keyframes gun {
            0% {
                transform: rotateX(0deg) rotateY(0deg);
            }

            100% {
                transform: rotateX(360deg) rotateY(360deg);
            }
        }
    </style>
</head>
<body>
<div class="box">
    <div class="up">上</div>
    <div class="down">下</div>
    <div class="left">左</div>
    <div class="right">右</div>
    <div class="forward">前</div>
    <div class="back">后</div>
</div>
</body>
</html>
```

## 动画

动画是CSS3中具有颠覆性的特征，可通过设置**多个节点** 来精确控制一个或一组动画，常用来实现**复杂**的动画效果。

### 1、定义动画的步骤

（1）通过@keyframes定义动画；

（2）将这段动画通过百分比，分割成多个节点；然后各节点中分别定义各属性；

（3）在指定元素里，通过 `animation` 属性调用动画。

之前,我们在 js 中定义一个函数的时候，是先定义，再调用：

```javascript
    js 定义函数：
        function fun(){ 函数体 }

     调用：
     	fun();
```

同样，我们在 CSS3 中**定义动画**的时候，也是**先定义，再调用**：

```javascript
    定义动画：
        @keyframes 动画名{
            from{ 初始状态 }
            to{ 结束状态 }
        }

     调用：
      animation: 动画名称 持续时间；
```

其中，animation属性的格式如下：

```javascript
            animation: 定义的动画名称 持续时间  执行次数  是否反向  运动曲线 延迟执行。(infinite 表示无限次)

            animation: move1 1s  alternate linear 3;

            animation: move2 4s;
```

**定义动画的格式举例：**

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box {
            width: 100px;
            height: 100px;
            margin: 100px;
            background-color: red;

            /* 调用动画*/
            /* animation: 动画名称 持续时间  执行次数  是否反向  运动曲线 延迟执行。infinite 表示无限次*/
            /*animation: move 1s  alternate linear 3;*/
            animation: move2 4s;
        }

        /* 方式一：定义一组动画*/
        @keyframes move1 {
            from {
                transform: translateX(0px) rotate(0deg);
            }
            to {
                transform: translateX(500px) rotate(555deg);
            }
        }

        /* 方式二：定义多组动画*/
        @keyframes move2 {
            0% {
                transform: translateX(0px) translateY(0px);
                background-color: red;
                border-radius: 0;
            }

            25% {
                transform: translateX(500px) translateY(0px);

            }

            /*动画执行到 50% 的时候，背景色变成绿色，形状变成圆形*/
            50% {
                /* 虽然两个方向都有translate，但其实只是Y轴上移动了200px。
                因为X轴的500px是相对最开始的原点来说的。可以理解成此时的 translateX 是保存了之前的位移 */
                transform: translateX(500px) translateY(200px);
                background-color: green;
                border-radius: 50%;
            }

            75% {
                transform: translateX(0px) translateY(200px);
            }

            /*动画执行到 100% 的时候，背景色还原为红色，形状还原为正方形*/
            100% {
                /*坐标归零，表示回到原点。*/
                transform: translateX(0px) translateY(0px);
                background-color: red;
                border-radius: 0;
            }
        }
    </style>
</head>
<body>
<div class="box">

</div>
</body>
</html>
```

注意好好看代码中的注释。

效果如下：

![](http://img.smyhvae.com/20180209_1001.gif)

### 2、动画属性

我们刚刚在调用动画时，animation属性的格式如下：

animation属性的格式如下：

```javascript
            animation: 定义的动画名称  持续时间  执行次数  是否反向  运动曲线 延迟执行。(infinite 表示无限次)

            animation: move1 1s  alternate linear 3;

            animation: move2 4s;
```


可以看出，这里的 animation 是综合属性，接下来，我们把这个综合属性拆分看看。

（1）动画名称：

```javascript
	animation-name: move;
```

（2）执行一次动画的持续时间：

```javascript
	animation-duration: 4s;
```

备注：上面两个属性，是必选项，且顺序固定。

（3）动画的执行次数：

```javascript
	animation-iteration-count: 1;       //iteration的含义表示迭代
```

属性值`infinite`表示无数次。

（3）动画的方向：

```javascript
	animation-direction: alternate;
```

属性值：normal 正常，alternate 反向。

（4）动画延迟执行：


```javascript
	animation-delay: 1s;
```

（5）设置动画结束时，盒子的状态：

```javascript
	animation-fill-mode: forwards;
```

属性值： forwards：保持动画结束后的状态（默认），  backwards：动画结束后回到最初的状态。

（6）运动曲线：

```
	animation-timing-function: ease-in;
```

属性值可以是：linear   ease-in-out  steps()等。

注意，如果把属性值写成**` steps()`**，则表示动画**不是连续执行**，而是间断地分成几步执行。我们接下来专门讲一下属性值 `steps()`。

### steps()的效果

我们还是拿上面的例子来举例，如果在调用动画时，我们写成：


```javascript
	animation: move2 4s steps(2);
```

效果如下：

![](http://img.smyhvae.com/20180209_1020.gif)

有了属性值 `steps()`，我们就可以作出很多不连续地动画效果。比如时钟；再比如，通过多张静态的鱼，作出一张游动的鱼。

**step()举例：**时钟的简易模型

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 3px;
            height: 200px;
            background-color: #000;
            margin: 100px auto;
            transform-origin: center bottom;    /* 旋转的中心点是底部 */
            animation: myClock 60s steps(60) infinite;
        }

        @keyframes myClock {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    </style>
</head>
<body>
<div></div>
</body>
</html>
```

上方代码，我们通过一个黑色的长条div，旋转360度，耗时60s，分成60步完成。即可实现。

效果如下：

![](http://img.smyhvae.com/20180209_1030.gif)

### 动画举例：摆动的鱼

现在，我们要做下面这种效果：

![](http://img.smyhvae.com/20180209_1245.gif)

PS：图片的url是<http://img.smyhvae.com/20180209_1245.gif>，图片较大，如无法观看，可在浏览器中单独打开。

为了作出上面这种效果，要分成两步。

**（1）第一步**：让鱼在原地摆动

鱼在原地摆动并不是一张 gif动图，她其实是由很多张静态图间隔地播放，一秒钟播放完毕，就可以了：

![](http://img.smyhvae.com/20180209_shark.png)

上面这张大图的尺寸是：宽 509 px、高 2160 px。

我们可以理解成，每一帧的尺寸是：宽 509 px、高 270 px。`270 * 8 = 2160`。让上面这张大图，在一秒内从 0px 的位置往上移动2160px，分成8步来移动。就可以实现了。

代码是：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .shark {
            width: 509px;
            height: 270px; /*盒子的宽高是一帧的宽高*/
            border: 1px solid #000;
            margin: 100px auto;
            background: url(images/shark.png) left top; /* 让图片一开始位于 0 px的位置 */
            animation: sharkRun 1s steps(8) infinite; /* 一秒之内，从顶部移动到底部，分八帧， */
        }

        @keyframes sharkRun {
            0% {
            }

            /* 270 * 8 = 2160 */
            100% {
                background-position: left -2160px; /* 动画结束时，让图片位于最底部 */
            }
        }
    </style>
</head>
<body>
<div class="sharkBox">
    <div class="shark"></div>
</div>

</div>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180209_1250.gif)

我们不妨把上面的动画的持续时间从`1s`改成 `8s`，就可以看到动画的慢镜头：

![](http://img.smyhvae.com/20180209_1330.gif)

这下，你应该恍然大悟了。

**（2）第二步**：让鱼所在的盒子向前移动。

实现的原理也很简单，我们在上一步中已经让`shark`这个盒子实现了原地摇摆，现在，让 shark 所在的父盒子 `sharkBox`向前移动，即可。完整版代码是：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .shark {
            width: 509px;
            height: 270px; /* 盒子的宽高是一帧的宽高 */
            border: 1px solid #000;
            margin: 100px auto;
            background: url(images/shark.png) left top; /* 让图片一开始位于 0 px的位置 */
            animation: sharkRun 1s steps(8) infinite; /* 一秒之内，从顶部移动到底部，分八帧 */
        }

        /* 鱼所在的父盒子 */
        .sharkBox {
            width: 509px;
            height: 270px;
            animation: sharkBoxRun 20s linear infinite;
        }

        @keyframes sharkRun {
            0% {
            }

            /* 270 * 8 = 2160 */
            100% {
                background-position: left -2160px; /* 动画结束时，让图片位于最底部 */
            }
        }

        @keyframes sharkBoxRun {
            0% {
                transform: translateX(-600px);
            }

            100% {
                transform: translateX(3000px);
            }
        }

    </style>
</head>
<body>
<div class="sharkBox">
    <div class="shark"></div>
</div>

</div>
</body>
</html>
```

![](http://img.smyhvae.com/20180209_1350.gif)

大功告成。

工程文件：[2018-02-09-fishes.rar](https://github.com/qianguyihao/web-resource/blob/main/project/2018-02-09-fishes.rar)

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)


---
title: 16-浏览器的兼容性问题
publish: false
---

<ArticleTopAd></ArticleTopAd>


我们在div里放一个img，发现：

在html和html5中，div的长宽是不同的，后者的高度要超过几个像素。

比如说，下面这个是html的。

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		*{
			margin: 0px;
			padding: 0px;
		}
	</style>
</head>
<body>
	<div>
	<img src="/Users/smyhvae/Dropbox/img/20170813_1143.jpg" alt="">

	</div>
</body>
</html>
```
---
publish: false
---

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<style>
    label {
        display: block;
        vertical-align: middle;
    }

    label,
    input,
    select {
        vertical-align: middle;
    }

    .mui-switch {
        width: 52px;
        height: 31px;
        position: relative;
        border: 1px solid #dfdfdf;
        background-color: #fdfdfd;
        box-shadow: #dfdfdf 0 0 0 0 inset;
        border-radius: 20px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        background-clip: content-box;
        display: inline-block;
        -webkit-appearance: none;
        user-select: none;
        outline: none;
    }

    .mui-switch:before {
        content: '';
        width: 29px;
        height: 29px;
        position: absolute;
        top: 0px;
        left: 0;
        border-radius: 20px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    }

    .mui-switch:checked {
        border-color: #64bd63;
        box-shadow: #64bd63 0 0 0 16px inset;
        background-color: #64bd63;
    }

    .mui-switch:checked:before {
        left: 21px;
    }

    .mui-switch.mui-switch-animbg {
        transition: background-color ease 0.4s;
    }

    .mui-switch.mui-switch-animbg:before {
        transition: left 0.3s;
    }

    .mui-switch.mui-switch-animbg:checked {
        box-shadow: #dfdfdf 0 0 0 0 inset;
        background-color: #64bd63;
        transition: border-color 0.4s, background-color ease 0.4s;
    }

    .mui-switch.mui-switch-animbg:checked:before {
        transition: left 0.3s;
    }

    .mui-switch.mui-switch-anim {
        transition: border cubic-bezier(0, 0, 0, 1) 0.4s, box-shadow cubic-bezier(0, 0, 0, 1) 0.4s;
    }

    .mui-switch.mui-switch-anim:before {
        transition: left 0.3s;
    }

    .mui-switch.mui-switch-anim:checked {
        box-shadow: #64bd63 0 0 0 16px inset;
        background-color: #64bd63;
        transition: border ease 0.4s, box-shadow ease 0.4s, background-color ease 1.2s;
    }

    .mui-switch.mui-switch-anim:checked:before {
        transition: left 0.3s;
    }

    /*# sourceMappingURL=mui-switch.css.map */
</style>

<body>
    <label>
        <input class="mui-switch" type="checkbox"> 默认未选中</label>
    <label>
        <input class="mui-switch" type="checkbox" checked> 默认选中</label>
    <label>
        <input class="mui-switch mui-switch-animbg" type="checkbox"> 默认未选中,简单的背景过渡效果,加mui-switch-animbg类即可</label>
    <label>
        <input class="mui-switch mui-switch-animbg" type="checkbox" checked> 默认选中</label>
    <label>
        <input class="mui-switch mui-switch-anim" type="checkbox"> 默认未选中，过渡效果，加 mui-switch-anim 类即可
    </label>
    <label>
        <input class="mui-switch mui-switch-anim" type="checkbox" checked> 默认选中</label>
</body>

</html>
```---
title: 17-CSS3的常见边框汇总
publish: true
---

<ArticleTopAd></ArticleTopAd>


## CSS3 常见边框汇总

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS3 边框</title>
    <style>
        body, ul, li, dl, dt, dd, h1, h2, h3, h4, h5 {
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #F7F7F7;
        }

        .wrapper {
            width: 1000px;
            margin: 0 auto;
            padding: 20px;
            box-sizing: border-box;
        }

        header {
            padding: 20px 0;
            margin-bottom: 20px;
            text-align: center;
        }

        header h3 {
            line-height: 1;
            font-weight: normal;
            font-size: 28px;
        }

        .main {
            /*overflow: hidden;*/
        }

        .main:after {
            content: '';
            clear: both;
            display: block;
        }

        .main .item {
            width: 210px;
            height: 210px;
            margin: 0 30px 30px 0;
            display: flex;
            position: relative;
            background-color: #FFF;
            float: left;
            box-shadow: 2px 2px 5px #CCC;
        }

        .main .item:after {
            content: attr(data-brief);
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 210px;
            position: absolute;
            top: 0;
            left: 0;
            color: #FFF;
            font-family: '微软雅黑';
            font-size: 18px;
            background-color: rgba(170, 170, 170, 0);
            z-index: -1;
            transition: all 0.3s ease-in;
        }

        .main .item:hover:after {
            background-color: rgba(170, 170, 170, 0.6);
            z-index: 100;
        }

        .main .item:nth-child(4n) {
            margin-right: 0;
        }

        /*.main .item:nth-last-child(-n+5) {
            margin-bottom: 0;
        }*/

        /* 以上是骨架样式 */
        /* 1、2、3、4 顺时针 */
        .border-radius {
            width: 180px;
            height: 180px;
            margin: auto;
            border: 1px solid red;
            /*border-radius: 50% 30% 20%;*/
        }

        .square {
            border-radius: 0;
        }

        /*拱形*/
        .item:nth-child(1) .border-radius {
            border-radius: 90px;
        }

        /*拱形*/
        .item:nth-child(2) .border-radius {
            border-radius: 90px 90px 0 0;
        }

        /*半圆*/
        .item:nth-child(3) .border-radius {
            height: 90px;
            border-radius: 90px 90px 0 0;
        }

        /*左上角*/
        .item:nth-child(4) .border-radius {
            /*height: 90px;*/
            border-radius: 90px 0 0 0;
        }

        /*四分之一圆*/
        .item:nth-child(5) .border-radius {
            width: 90px;
            height: 90px;
            border-radius: 90px 0 0 0;
        }

        /*横着的椭圆*/
        .item:nth-child(6) .border-radius {
            height: 90px;
            /*border-radius: 50%;*/
            border-radius: 90px 90px 90px 90px / 45px 45px 45px 45px;
            /*border-radius: 45px / 90px;*/
        }

        /*竖着的椭圆*/
        .item:nth-child(7) .border-radius {
            width: 90px;
            border-radius: 45px 45px 45px 45px / 90px 90px 90px 90px;
        }

        /*半个横着的椭圆*/
        .item:nth-child(8) .border-radius {
            height: 45px;
            border-radius: 90px 90px 0 0 / 45px 45px 0 0;
        }

        /*半个竖着的椭圆*/
        .item:nth-child(9) .border-radius {
            width: 45px;
            border-radius: 45px 0 0 45px / 90px 0 0 90px;
        }

        /*四分之一竖着的椭圆*/
        .item:nth-child(10) .border-radius {
            width: 45px;
            height: 90px;
            border-radius: 45px 0 0 0 / 90px 0 0 0;
        }

        /*饼环*/
        .item:nth-child(11) .border-radius {
            width: 40px;
            height: 40px;
            border: 70px solid red;
            border-radius: 90px;
        }

        /*圆饼*/
        .item:nth-child(12) .border-radius {
            width: 40px;
            height: 40px;
            border: 70px solid red;
            border-radius: 60px;
        }

        /*左上角圆饼*/
        .item:nth-child(13) .border-radius {
            width: 60px;
            height: 60px;
            border: 60px solid red;
            border-radius: 90px 0 0 0;
        }

        /*对角圆饼*/
        .item:nth-child(14) .border-radius {
            width: 60px;
            height: 60px;
            border: 60px solid red;
            border-radius: 90px 0 90px 0;
        }

        /*四边不同色*/
        .item:nth-child(15) .border-radius {
            width: 0px;
            height: 0px;
            border-width: 90px;
            border-style: solid;
            border-color: red green yellow blue;
        }

        /*右透明色*/
        .item:nth-child(16) .border-radius {
            width: 0px;
            height: 0px;
            border-width: 90px;
            border-style: solid;
            border-color: red green yellow blue;
            border-right-color: transparent;
        }

        /*圆右透明色*/
        .item:nth-child(17) .border-radius {
            width: 0px;
            height: 0px;
            border-width: 90px;
            border-style: solid;
            border-color: red;
            border-right-color: transparent;
            border-radius: 90px;
        }

        /*圆右红透明色*/
        .item:nth-child(18) .border-radius {
            width: 0px;
            height: 0px;
            border-width: 90px;
            border-style: solid;
            border-color: transparent;
            border-right-color: red;
            border-radius: 90px;
        }

        /*阴阳图前世*/
        .item:nth-child(19) .border-radius {
            width: 180px;
            height: 0px;
            border-top-width: 90px;
            border-bottom-width: 90px;
            border-style: solid;
            border-top-color: red;
            border-bottom-color: green;
            /*border-right-color: red;*/
            border-radius: 90px;
        }

        /*阴阳图前世2*/
        .item:nth-child(20) .border-radius {
            width: 180px;
            height: 90px;
            border-bottom-width: 90px;
            border-style: solid;
            border-bottom-color: green;
            background-color: red;
            /*border-right-color: red;*/
            border-radius: 90px;
        }

        /*阴阳图今生*/
        .item:nth-child(21) .border-radius {
            width: 180px;
            height: 90px;
            border-bottom-width: 90px;
            border-style: solid;
            border-bottom-color: green;
            background-color: red;
            border-radius: 90px;
            position: relative;
        }

        .item:nth-child(21) .border-radius::after,
        .item:nth-child(21) .border-radius::before {
            content: '';
            position: absolute;
            top: 50%;
            width: 20px;
            height: 20px;
            /*margin: -10px 0 0 0;*/
            border-width: 35px;
            border-style: solid;
            border-radius: 45px;
        }

        /*左阴阳*/
        .item:nth-child(21) .border-radius::after {
            background-color: red;
            border-color: green;
        }

        /*右阴阳*/
        .item:nth-child(21) .border-radius::before {
            background-color: green;
            border-color: red;
            right: 0;
        }

        /*右阴阳*/
        .item:nth-child(22) .border-radius {
            width: 180px;
            height: 90px;
            border-bottom-width: 90px;
            border-bottom-color: green;
            border-bottom-style: solid;
            background-color: red;
            border-radius: 90px;
            position: relative;
        }

        .item:nth-child(22) .border-radius::after,
        .item:nth-child(22) .border-radius::before {
            content: '';
            position: absolute;
            top: 50%;
            width: 20px;
            height: 20px;
            border-width: 35px;
            border-style: solid;
            border-radius: 45px;
        }

        .item:nth-child(22) .border-radius::before {
            border-color: green;
            background-color: red;
        }

        .item:nth-child(22) .border-radius::after {
            right: 0;
            border-color: red;
            background-color: green;
        }

        /*消息框*/
        .item:nth-child(23) .border-radius {
            width: 160px;
            height: 80px;
            background-color: red;
            border-radius: 6px;
            position: relative;
        }

        .item:nth-child(23) .border-radius::after {
            content: '';
            width: 0;
            height: 0;
            border-width: 10px;
            border-style: solid;
            border-color: transparent;
            border-right-color: red;
            position: absolute;
            top: 16px;
            left: -20px;
        }

        /*奇怪的图形*/
        .item:nth-child(24) .border-radius {
            width: 40px;
            height: 40px;
            border-width: 45px 0 45px 70px;
            border-style: solid;
            border-radius: 0 0 60px 0;
            border-color: red;
        }

        /*奇怪的图形2*/
        .item:nth-child(25) .border-radius {
            width: 100px;
            height: 40px;
            border-width: 45px 20px 45px 70px;
            border-style: solid;
            border-radius: 60px;
            border-color: red;
        }

        /*QQ对话*/
        .item:nth-child(26) .border-radius {
            width: 160px;
            height: 80px;
            background-color: red;
            border-radius: 6px;
            position: relative;
        }

        .item:nth-child(26) .border-radius::after {
            content: '';
            position: absolute;
            top: 0;
            right: -20px;
            width: 30px;
            height: 30px;
            border-width: 0 0 30px 30px;
            border-style: solid;
            border-bottom-color: red;
            border-left-color: transparent;
            border-radius: 0 0 60px 0;
        }

        /*圆角的百分比设置 */
        .item:nth-child(27) .border-radius {
            width: 180px;
            /*height: 180px;*/
            height: 90px;
            border-radius: 50%;
            border-radius: 90px/45px;

            /*百分比是按横竖两个对应的方向的长度进行计算*/
        }

    </style>
</head>
<body>
<div class="wrapper">
    <header>
        <h3>CSS3 边框圆角</h3>
    </header>
    <div class="main">
        <div class="item" data-brief="整圆">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="拱形">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="半圆">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="左上角">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="四分之一圆">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="横着的椭圆">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="竖着的椭圆">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="半个横着的椭圆">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="半个竖着的椭圆">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="四分之一竖着的椭圆">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="饼环">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="圆饼">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="左上角圆饼">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="对角圆饼">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="四边不同色">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="右透明色">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="圆右透明色">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="圆右红透明色">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="阴阳图前世">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="阴阳图前世2">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="阴阳图今生">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="阴阳图今生2">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="消息框">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="奇怪的图形">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="奇怪的图形2">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="QQ对话">
            <div class="border-radius"></div>
        </div>
        <div class="item" data-brief="圆角百分比">
            <div class="border-radius"></div>
        </div>
    </div>
</div>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180208_1730.png)


## 爱心

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .heart {
            width: 200px;
            height: 300px;
            /*border: 1px solid #000;*/
            margin: 100px auto;
            position: relative;
        }

        .heart::before, .heart::after {
            content: "左一半";
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: red;
            left: 0;
            top: 0;

            border-radius: 100px 100px 0 0;
            transform: rotate(-45deg);
            text-align: center;
            line-height: 100px;
            color: yellow;
            font-size: 30px;
            font-family: "MIcrosoft Yahei";
        }

        .heart::after {
            content: "右一半";
            left: 71px;
            transform: rotate(45deg);
        }
    </style>
</head>
<body>
<div class="heart">

</div>
</body>
</html>
```


效果如下：

![](http://img.smyhvae.com/20180208_1737.png)

它其实是下面这两个盒子叠起来的：

![](http://img.smyhvae.com/20180208_1738.png)

改变 `.heart::after` 的 left值，即可叠起来。



---
title: 01-CSS中的非布局样式
publish: true
---

<ArticleTopAd></ArticleTopAd>

## 前言

CSS中，有很多**非布局样式**，这些样式（属性）和与布局无关，包括：

- 字体、字重、颜色、大小、行高
- 背景、边框
- 滚动、换行
- 装饰性属性（粗体、斜体、下划线）等。

这篇文章，我们来对上面的部分样式做一个回顾。

## 边框

如何用边框画一个三角形？详见《02-CSS基础/06-CSS盒模型详解》中的最后一段。

## 文字换行

- ovferflow-wrap：通用的属性。用来说明当一个不能被分开的字符串（单词）太长而不能填充其包裹盒时，为防止其溢出，浏览器是否允许这样的单词**中断换行**。

- word-break：指定了怎样在单词内断行。这里涉及到CJK（中文/日文/韩文）的文字换行。

- white-space：空白处是否换行。

上面这三个 css 属性进行组合，可以设置各种不同的属性。

当然，如果想让一段很长的文本不换行，可以直接设置`white-space: nowrap` 这一个属性即可。如果想换行，可以试试`white-space: pre-wrap`。

## CSS Hack

- CSS Hack 的方式：不合法但可以生效的写法。

- 可以用来解决一些浏览器的兼容性问题。

- 缺点：难理解、难维护、易失效（比如浏览器升级后，hack可能会失效）。

- 替代方案：特性检测。

- 替代方案：针对性加 class


## CSS 效果

我们可以利用 CSS 实现各种效果，常见的效果属性有：

- box-shadow：盒子的阴影

- text-shadow：文本的阴影

- border-radius

- background

- clip-path


---
title: 03-网页设计和开发中，关于字体的常识
publish: true
---

<ArticleTopAd></ArticleTopAd>



## 前言

我周围的码农当中，有很多是技术大神，却常常被字体这种简单的东西所困扰。

这篇文章，我们来讲一讲关于字体的常识。这些常识所涉及到的问题，有很强的可操作性，都是在实际业务中真实遇到的，都是需要开发同学和产品经理、设计师不断重复沟通的。

字体真的只是“**系统默认，无从解释**”这么简单吗？是产品被忽悠？还是开发在敷衍？二者之间的博弈究竟谁能胜出？学会本文，你就能胜出。

## 字体分类

常见的字体可以分为两类：**衬线体、无衬线体**。

![](http://img.smyhvae.com/20191004_1101.png)

**1、serif（衬线体）**：在字的笔画开始、结束的地方有额外的装饰，而且笔画的粗细会有所不同。

常见的衬线体有：

- 宋体、楷体

- Times New Roman

**2、sans-serif（无衬线体）**：笔划粗细基本一致，只剩下主干，造型简明有力，起源也很晚。适用于标题、广告等，识别性高。

常见的无衬线体有：

- 黑体
- Windows 平台默认的中文字体：微软雅黑（Microsoft Yahei）
- Windows 平台默认的英文字体：Arial
- Mac & iOS 平台默认的中文字体：苹方（PingFang SC）
- Mac & iOS 平台默认的英文字体：San Francisco
- Android 平台默认字体：Droid Sans

参考链接：[如何优雅的选择字体(font-family)](https://segmentfault.com/a/1190000006110417)

**补充**：

衬线体如今已经很少使用了，你所熟悉的“宋体”，也基本只能在纸质出版物中见到。而**非衬线体更符合现代审美**。

所以，在这里温馨提示各位：**做PPT不要用宋体**。如果你不知道用什么字体，那就用系统的默认字体就好：Win 平台用微软雅黑、Mac 平台用苹方字体。

如果你发现一名设计师，在做海报设计、或者制图的时候，使用了宋体，说明她一定是个外行。

## 字体族

CSS 中的字体族可以理解成是某一类字体。常见的字体族可以分为五类：

- serif：衬线体。
- sans-serif：无衬线体。
- monospace：等宽字体。每一个字母所占的宽度是相同的。写代码的字体尽量用等宽字体。
- cursive：手写字体。比如徐静蕾手写体。
- fantasy：梦幻字体。比如一些艺术字。

这五类字体族不代表某一个具体的字体，而是当你在 CSS 中指定字体族的时候，系统就有可能在字体族中找出一种字体来显示。

![](http://img.smyhvae.com/20191004_1130.png)

参考链接：[serif，sans-serif，monospace，cursive和fantasy](http://www.ayqy.net/blog/serif%EF%BC%8Csans-serif%EF%BC%8Cmonospace%EF%BC%8Ccursive%E5%92%8Cfantasy/)

## 多字体 fallback 机制

多字体 fallback 机制：当指定的字体找不到（或者某些文字不支持这个字体）时，那就接着往后找。比如：

```css
.div1{
    font-family: "PingFang SC", "Microsoft Yahei", monospace;
}

```

上方 CSS 代码的意思是：让指定标签元素中的文字，在 Mac & iOS 平台用苹方字体，在 Win 平台用微软雅黑字体，如果这两个字体都没有，就随便找一个等宽的字体进行渲染。

**注意**：

（1）写 CSS 代码时，字体族不需要带引号。

（2）有些 Mac 用户会安装 Office 等软件，安装这些软件后，系统会顺带安装微软雅黑字体。此时，写 CSS 代码时，如果写成 `"Microsoft Yahei", "PingFang SC"`这种顺序，可能导致有些 Mac 用户用微软雅黑来显示字体。这么好看的苹方字体，你忍心割舍吗？

## font-weight：字体的加粗属性

font-weight 字体加粗属性，是让前端同学最迷茫的属性。当你把做好的网页拿给产品经理验收时，网页一打开，产品经理首先关注到的就是字体的加粗问题，你信不信？下面这些话都是产品经理的口头禅，想必早已让你产生了幻听：

- “这个字体怎么没有加粗？”

- “这个字体是不是太粗了点？”

- “为什么 iPhone 和 Android 手机上的文字粗细不一致？”

想要明白这些疑惑，我们先来看看 `font-weight` 有哪些属性值。

**font-weight 属性**：在设置字体是否加粗时，属性值既可以直接填写 100 至 900 这样的数字，也可以填写`normal`、`bold`这样的单词。`normal`的值相当于 400，`bold`的值相当于 700。如下：


```css
font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400;
font-weight: 500;
font-weight: 600;
font-weight: 700;
font-weight: 800;
font-weight: 900;

font-weight: normal; // 相当于 400
font-weight: bold;   // 相当于 700
```


关键问题来了。很多人会发现，在 Windows 平台的浏览器中， font-weight 无论是设置300、400，还是500，文字的粗细都没有任何变化，只有到600的时候才会加粗一下，感觉浏览器好像不支持这些数值，那搞这么多档位不就是多余的吗？

这个时候，大家就开始吐槽 Windows 电脑太挫、Windows 浏览器太挫；同时还会感叹 Mac 真香，支持字体的各种粗细。

**实际上，所有这些数值关键字浏览器都是支持的，之所以没有看到任何粗细的变化，是因为你所使用的字体不支持**。

就拿“微软雅黑”来举例，它只支持 400 和 700 这两种粗细，所以当你在代码里写成500的时候，也会被认为是400。但是 Mac 上的“苹方”字体，就支持从100到900之间的各种粗细。

再比如，前段时间，阿里巴巴开源的普惠字体，也是支持多种粗细的：

![](http://img.smyhvae.com/20191013_1100.png)

## 各大平台的默认字体加粗效果

一张图，胜过千言万语。解释了这么多，我们来看看各大平台的字体加粗效果是什么样的。

以下截图，都是我亲测的结果，如果你打算让别人看效果，直接把下面的图丢给他即可。像我这样贴心的前端，不多见了。

**1、Mac 平台的默认字体加粗效果**：（苹方字体）

![](http://img.smyhvae.com/20191016_1205_mac.png)

**2、Windows 平台的默认字体加粗效果**：（微软雅黑字体）

![](http://img.smyhvae.com/20191016_1205_windows2.png)

**3、iOS 平台的默认字体加粗效果**：（苹方字体）

![](http://img.smyhvae.com/20191016_1205_ios.png)

**4、Android 平台（华为 P30 Pro）的默认字体加粗效果**：（Droid Sans 字体）

![](http://img.smyhvae.com/20191016_1205_huawei_p30_pro.jpeg)

**总结**：（各大平台的默认字体加粗效果）

- Mac & iOS 平台的“苹方”字体：500 和600，加粗效果是不同的；`>=600`的加粗效果是相同的。

- Windows 平台的“微软雅黑”字体：只有 `>=600` 才会加粗，而且加粗效果相同。

- Android 平台的 Droid Sans 字体，只有 `>=700`才会加粗；而且加粗效果相同。


## 大部分字体不是免费的

有一点你需要知道：你所见到的大部分字体，都不是免费的。换句话说，如果你想用第三方字体从事商业活动，要先交钱，获得授权后才可以使用。你在给公司做网页的时候，就是一种商业行为。

「微软雅黑」是免费字体吗？并不是。你可以将微软雅黑字体用在 office 软件中，但是一旦脱离了 office 软件或者脱离了 Windows 系统（比如说，你把做好的PPT打印出来拿去做商业宣传），你就不能使用该字体。

同理，苹果专属的「苹方字体」也只能在苹果系统的生态内使用。

免费字体当然有，比如[思源黑体](https://baike.baidu.com/item/%E6%80%9D%E6%BA%90%E9%BB%91%E4%BD%93/14919098)（Adobe 和 Google 在2014年7月联合推出的一款开源字体）、阿里巴巴普惠体等。但这些免费字体，我们平时基本用不到。

这也就是为什么，很多公司会专门购买一套商用字体库、甚至是自己开发一套字体出来，避免未来潜在的纠纷和麻烦。

给大家列举一个常见的场景。很多时候，前端同学拿到的视觉稿是 psd 稿，需要用 PS 软件打开源文件，才能看到里面的文字是什么字体。在 PS 软件里，当我们用光标选中字体的时候，出现了下面这种场景：

![](http://img.smyhvae.com/20191010_1121.png)

看到上面的`FZLTZCHK`，不要慌，马上去 Google 查一下，发现这个字体的全称是`方正兰亭`字体系列。恩，基本可以肯定， 这个字体也是要收费的。

这个时候，前端同学要马上告诉产品或者设计师，不要用这个字体，因为它是商用字体，是要收费的，小心吃官司。那我们该用什么字体呢？接着往下看。

## 网页一般用什么字体

大多数情况下，网页使用系统默认的字体就足够了。如果要使用特殊字体，顶多只是让**阿拉伯数字**使用特殊字体。中文和英文，使用默认字体，完全足够。

如果确实要使用特殊字体，只有这几种办法：

- 使用开源的免费字体（比如思源黑体、阿里巴巴普惠体等）。但这类字体，种类很少，而且不是很好看。网页开发中，基本没人用。

- 单独购买商用字体，获得授权。

- 自己公司开发一套字体，给自己人用。

比如我所在的 JD 公司就自主开发了一套商用字体`JDZH`（只允许 JD 公司自己用，别家公司不允许用），支持三种粗细。如下：

```css
/**
 * JD正黑体，提供三种字重，请严格按设计稿选择字体
 */
 @font-face {
    font-family: 'JDZH-Light';
    src: url('xxx.com/data/ppms/others/JDZH_Light.ttf') format('truetype');
}

@font-face {
    font-family: 'JDZH-Regular';
    src: url('xxx.com/data/ppms/others/JDZH_Regular.ttf') format('truetype');
}

@font-face {
    font-family: 'JDZH-Bold';
    src: url('xxx.com/data/ppms/others/JDZH_Bold.ttf') format('truetype');
}

@font-face {
    font-family: 'JDZhengHT-EN-Bold';
    src: url('xxx.com/data/ppms/others/JDZhengHei_01_Bold.ttf') format('truetype');
}

```

为了使用这个`JDZH`字体， JD公司在实际开发网页时，是这样做的：

- 步骤1：在公共的 CSS 文件中引入上方的字体库代码。这样的话，当页面加载时，用户的终端就会去下载这个字体库。

- 步骤2：在业务代码中，针对目标样式，直接使用 `font-family: 'JDZH-Regular';`这样的代码，即可生效。

这个`JDZH`，我们一般也只使用在阿拉伯数字中；中文和英文，建议使用系统默认字体就行。

## 免费可商用字体有哪些

字体版权一直是很多设计师的雷区，一不小心就容易触犯。因此，这一段，我们就来弄清楚一个问题：**免费可商用字体**到底有哪些？

### 1. 思源黑体（推荐）

思源黑体（Source Han Sans）：Adobe 和 Google 在 2014 年 7 月联合推出的针对中日韩的开源字体，在字重（字体粗细程度）上分7个层级。

![](http://img.smyhvae.com/20191103_1201.jpeg)

思源黑体是最有名的免费商用字体。字体下载：<https://github.com/adobe-fonts/source-han-sans/tree/release/>

![](http://img.smyhvae.com/20191103_1516.png)

上图中，点击红框部分，即可下载该字体的压缩包。

### 2. 思源宋体

思源宋体：同样也是Adobe 联合 Google经过长达一年半的研发， 在 2019年 4 月 3 日发布了思源宋体（ Source Han Serif，Google 称 Noto Serif CJK）。

思源宋体包含了简繁日韩四种汉字写法，拥有7种粗细字重，共设计了458745个汉字。也就是说每一种字重包括65535个字形。

![](http://img.smyhvae.com/20191103_1202.jpeg)

### 3. 站酷系列字体

截止目前有4种字体，都是免费授权全社会使用，允许商用。

![](http://img.smyhvae.com/20191103_1203.jpeg)

### 4. 方正系列

方正对外提供四款免费字体，楷体、黑体、仿宋、书宋，可以商业发布，只要不进行转换、改编、传播。

注：方正虽然有四款优秀的免费可商用的字体，但有一点麻烦的是，需要书面授权，感兴趣的同学可以在他们的官网上查看一下授权使用范围。

![](http://img.smyhvae.com/20191103_1204.jpeg)

### 5. 文泉驿系列字体

说到中文字体开源的鼻祖，学者房骞骞在 2004 年发起的公益项目应该算一个。文泉驿系列字体是开源字体，允许商业使用。

![](http://img.smyhvae.com/20191103_1205.jpeg)

### 6. 郑庆科黄油体

这是一款个人设计师郑庆科推出的黄油体。

![](http://img.smyhvae.com/20191103_1206.jpeg)

### 7. Font Space

Font Space有很全的字体，都是用户自己上传的，截至2017年3月有21款免费可商用的字体（包含2款文泉驿中文）。

![](http://img.smyhvae.com/20191103_1207.jpeg)

### 8. 濑户字体

濑户制作的免费字体，字体包含中文繁体常用字及多国语言。

![](http://img.smyhvae.com/20191103_1208.jpeg)

### 9. Arual

这是一款设计师都爱用的英文字体，简单实用。

![](http://img.smyhvae.com/20191103_1209.jpeg)

### 免费字体打包下载

链接:https://pan.baidu.com/s/1MvFpCT_0wED7ovwJe_LO5w

密码:md0d

## 怎么知道哪些字体是侵权的？

可以在“360查字体”网站上检查自己电脑上哪些字体是免费可商用的，哪些是商用需要授权的。

- 360查字体：<https://fonts.safe.360.cn>

![](http://img.smyhvae.com/20191103_1500.png)

## 最后一段

所谓「见微知著」，一个再不起眼的知识点，也是有很多学问的。光是“字体”这一点，就足够成为一门学科。

2005年，苹果公司创始人乔布斯（Steve Jobs）在斯坦福大学的毕业典礼演讲上，有过这样一段话：

> 当时的我从来没有期盼过我所学的这些东西，能够在我的生活中有什么实际的用处。

> 但是到了十年之后，当我们在设计第一台 Macintosh 电脑时，这些所学都涌进了我的头脑。于是，我把这些设计融入到了 Mac 电脑之中，这也使这台 Mac 成为了第一台拥有漂亮字体的电脑。

> 可以说，如果我当时没有退学，就不会有机会去参加我感兴趣的美术字课程，Mac 也就不会拥有那些美妙的排版和字体。而当 Windows 系统借鉴了Mac之后，似乎所有的电脑都应该是这个样子。

> 当时的我没有办法把这些点点滴滴连接起来，但是，**当我十年后回顾的时候，一切都变得豁然开朗**。

## 推荐阅读

- 常见的免费字体：<http://zenozeng.github.io/Free-Chinese-Fonts/>

- [iconfont](https://www.iconfont.cn/)

- [乔布斯斯坦福大学演讲-翻译](https://zhuanlan.zhihu.com/p/24242767)

- [乔布斯斯坦福大学演讲-翻译](https://www.douban.com/note/149058647/)

- [阿里巴巴官方发布免费商用字体：阿里巴巴普惠体](https://mp.weixin.qq.com/s/daKUNnF_Ste-O1l0sR89sQ)

- [得到 | 从甲骨文至得到今楷，造字的人都是神](https://mp.weixin.qq.com/s/ZnMxrhoH9piLf9EaSIwiGA)

- [《独立宣言》使用了什么字体？](https://mp.weixin.qq.com/s/i1qgUaSHrQlvqT-u3qJySw)

- [你的版权常识指南](https://mp.weixin.qq.com/s/4uEBoajTygSADslzem3yZA)

- [免费商用 | 这几款字体你值得拥有](https://mp.weixin.qq.com/s/wPqd0H9125bK7775KGoFbg)



## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)

---
title: 00-准备
publish: true
---

<ArticleTopAd></ArticleTopAd>

## 前言

css 进阶的主要内容如下。

### 1、css 非布局样式

- html 元素的分类和特性

- css 选择器

- css 常见属性（非布局样式）

### 2、css 布局相关

- css 布局属性和组合解析

- 常见布局方案

- 三栏布局案例

### 3、动画和效果

> 属于 css 中最出彩的内容。

- 多背景多投影特效

- 3D特效编写实践

- 过渡动画和关键帧动画实践

- 动画细节和原理深入解析

### 4、框架集成和 css 工程化

- 预处理器作用和原理

- less/sass 代码实践

- Bootstrap 原理和用法

- css 工程化的的实践方式

- js 框架中的 css 集成实践

## 常见问题

> 不会 css 的前端称之为伪前端。

### Vue 中模拟Scoped CSS的方式

方案一：随机选择器。css  modules。

方案二：**随机属性**。`<div abcd>`、`div[adcd]{}`

### 其他问题

- html 元素的嵌套关系是怎么确定的？哪些嵌套不可以发生？

- 比如说，为什么 div 可以放在 a 标签里面？

- css 选择器的权重是如何计算的？写代码时要注意什么？

- 浮动布局是怎么回事？有什么优缺点？国内用的多吗？

- css 可否做逐帧动画吗？性能如何？

- Bootstrap 怎么做响应式布局？

- 如何解决 css 模块化过程中的选择器互相干扰的问题？

## 总结

单独看 css 属性并不难，难的是需要把这些思路和思想，想到它的应用场景。

---
title: 认识Web和Web标准
publish: false
---

<ArticleTopAd></ArticleTopAd>



### 2020-03-16

Bootstrap 中文文档：<https://code.z01.com/v4/content/tables.html>


### 2020-03-13

- [CSS实现鼠标悬停弹出微信二维码](https://www.hanost.com/637.html)

---
title: 认识Web和Web标准
publish: false
---

<ArticleTopAd></ArticleTopAd>

### 让flex盒子中的子元素们，居中

flex布局常用的三行代码：

```
    display: flex;
    justify-content: center; // 子元素在横轴的对齐方式 （左右居中）
    align-items: center;  // 子元素在竖轴的对齐方式（上下居中）
```


### 让文字只显示一行，超出显示省略号

```
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;

```


### 让文字最多只显示两行，超出后显示省略号

```
	overflow:hidden;
	text-overflow:ellipsis;
	display:-webkit-box;
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2;
```

参考链接：<https://blog.csdn.net/NN_nan/article/details/55045562>



### 问题描述：文本内容里自带了换行，但是在前端没有展示出来

解决办法：增加如下属性即可。

```
white-space: pre-wrap;
```

或者：

```
white-space: pre-line;
```



### 2019-11-12-CSS的逗号和空格

CSS的逗号一般写在()里。**不同属性值之间，用的是空格**，不是逗号。比如：

```css
	transform: translate(-50%, -50%);  /* 这种写逗号 */
	transform: translate(-50%, -50%) scale(0.5);   /* 不同属性值之间，用的是空格 */

	background-size: 100% 100%;  /* 这里是空格，不是逗号 */
```


### 2019-11-01

人民币价格中的羊角符号，有半角和全角之分：

- ¥半角

- ￥全角

可以看出，半角的宽度更小。考虑到容器的空间一般比较紧张，所以推荐使用**半角**。


### 2019-11-19-鼠标悬停时，弹出提示文字

参考链接：[css实现鼠标悬浮后的提示效果](https://www.cnblogs.com/zhaojian-08/p/10074660.html)


### 2019-11-27-图片的宽度固定，高度自适应

这个场景下，别用background。直接放img元素就好了，将图片的高度设置为`auto`。


### 2020-03-26-通过CSS扩大点击热区

```css
.button {
	position: relative;
	/* [其余样式] */
}

.button::before {
	content: '';
	position: absolute;
	top: -10px;
	right: -10px;
	bottom: -10px;
	left: -10px;
}
```
注意，button 里面不要写 `overflow: hidden` 属性，否则扩大的热区无效。

参考链接：<https://www.jianshu.com/p/b83fc87cb222>

### 2020-10-09-上下滚动，不显示滚动条

```css
.sku_list {
	margin-left: 25rpx;
	display: flex;
	flex-wrap: wrap;

	height: 617rpx;
	overflow: hidden;
	overflow-y: scroll;

	/* 去掉滚动条 */
	&::-webkit-scrollbar {
		display: none;
	}
}
```

注意，去掉滚动条的那行代码里，建议用`display: none;`，不要用`width: 0;`。因为，当你需要设置横向滚动的效果时，`display: none;`这个属性的效果更好，不会改变容器的size；`width: 0;`可能会改变容器的size。

参考链接：

- [html设置局部区域上下滚动，不显示滚动条](https://blog.csdn.net/weixin_42157001/article/details/90176510)


### 2021-05-06-设置页面的宽高，撑满屏幕

一般来说，我们在开发一个页面的时候，默认是希望这个页面的宽高能够撑满屏幕的。代码可以这样写：

```css
.app {
	width: 100vw;
	min-height: 100vh;
}

```

### 2021-09-13-JS中插入CSS

代码举例：

```js
new_element = document.createElement("style");
new_element.innerHTML =(".tucao-content p{font-size:18px;}");
document.body.appendChild(new_element);
```

参考链接：

- js 插入公共css的方法：https://blog.csdn.net/u013970232/article/details/90578937
---
title: 02-CSS布局
publish: true
---

<ArticleTopAd></ArticleTopAd>

## 前言

### 常见的布局属性

（1）`display` 确定元素的显示类型：

- block：块级元素。

- inline：行内元素。

- inline-block：对外的表现是行内元素（不会独占一行），对内的表现是块级元素（可以设置宽高）。

（2）`position` 确定元素的位置：

- static：默认属性值。

- relative：相对定位。相对于元素本身进行偏移，**不会改变它所占据的空间**。

- absolute：绝对定位。相对于父元素中最近的 relative/absolute 进行偏移，会脱离文档流。音标：[ˈæbsəluːt]。

- fixed：固定定位。相对于可视区域固定，会脱离文档流。

`relative`、`absolute`、`fixed`这三个属性，可以结合 z-index 来设置层级。

### 常见的布局方法

1、**table 表格布局**：早期使用的布局，如今用得很少。

2、**float 浮动 + margin**：为了兼容低版本的IE浏览器，很多网站（比如腾讯新闻、网易新闻、淘宝等）都会采用 float 布局。

3、**inline-block 布局**：对外的表现是行内元素（不会独占一行），对内的表现是块级元素（可以设置宽高）。

4、**flex 布局**：为布局而生，非常灵活，是最为推荐的布局写法。

唯一的缺点是兼容性问题：

![](http://img.smyhvae.com/20191005_1200.png)

上图中可以看到， flex 布局不支持 IE9 及以下的版本。如果你的页面不需要处理 IE浏览器的兼容性问题，则可以放心大胆地使用 flex 布局。

flex 是一种现代的布局方式，是 W3C 第一次提供真正用于布局的 CSS 规范。

5、响应式布局。

## float 布局

是 CSS 中一种比较麻烦的属性，涉及到 BFC 和清除浮动（面试的重点）。

### float 属性的特点

- 元素浮动

- **脱离文档流，但不脱离文本流**

代码举例：

下面这两个并列的`div1`和`div2`，默认是在标准流中的：

![](http://img.smyhvae.com/20191005_2029.png)

在此基础之上，如果给`div1`增加`float: left`属性后，效果如下：

![](http://img.smyhvae.com/20191005_2037.png)

上图中，可以看到，`div1`设置为浮动后，会脱离文档流，不会对`div2`的布局造成影响；但是`div1`不会脱离文本流，它会影响`div2`中文字的排列。

其实，这正是 float 属性的作用。float 本身是用来做图文混排、文字环绕的效果。

### float 所带来的影响

**1、对自身的影响**：

- 形成“块”（BFC）

- 位置尽量靠上

- 位置尽量靠左/右

下面这两个并列的`div1`和`div2`，设置为浮动之后的效果：（都是尽量靠左显示的）

![](http://img.smyhvae.com/20191005_2130.png)

在上方代码的基础之上，增加 `div2`的宽度之后，会发现，`div2`掉下来了：

![](http://img.smyhvae.com/20191005_2135.png)

**2、对兄弟元素的影响**：

- 不影响其他块级元素的位置

- 影响其他块级元素的内部文本

**3、对父级元素的影响**：

- 从父级的布局中“消失”

- 造成父级元素的高度塌陷：父级元素撑开 div1 之后（父级元素里没有其他元素的情况下），如果设置 div1 为 float 之后，，会让父级元素的高度变为0。

## inline-block 布局

对外的表现是行内元素（不会独占一行），对内的表现是块级元素（可以设置宽高）。

**思路**：像文本一样去排列 block 元素，没有清除浮动等问题。

**存在的问题**：需要处理间隙。代码举例如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<style>
	.container{
		width: 300px;
		height: 300px;
		background: pink;
	}

	.div1{
		width: 100px;
		height: 100px;
		background: green;
		display: inline-block;
	}

	.div2{
		width: 100px;
		height: 100px;
		background: yellowgreen;
		display: inline-block;
	}

	.div3{
		background: yellow;
	}
</style>

<body>
	<div class="container">
		<div class="div1">div1的inline-block 属性</div>
		<div class="div2">div2的inline-block 属性</div>
		<div class="div3">
			琴棋书画不会，洗衣做饭嫌累。
		</div>
	</div>
</body>

</html>
```

![](http://img.smyhvae.com/20191005_2200.png)

上面的代码，存在两个问题。

**问题一**：如果设置`div2`的宽度为 200px 之后，`div2` 掉下来。

**问题二**：`div1`和`div2`设置为 inline-block之后，这两个盒子之间存在了间隙。这是因为，此时的 `div1`和`div2` 已经被当成文本了。文本和文本之间，本身就会存在间隙。

为了去掉这个间隙，可以有几种解决办法：

办法1：设置父元素`container`的字体大小为0，即`font-size: 0`，然后设置子元素 `div1`、`div2`的字体`font-size: 12px`。

办法2：在写法上，去掉`div1`和`div2`之间的换行。改为：

```html
<div class="div1">div1的inline-block 属性</div><div class="div2">div2的inline-block 属性</div>
```

## 响应式布局

移动端用得较多，本文暂时先不讲。


---
title: 认识Web和Web标准
publish: false
---

<ArticleTopAd></ArticleTopAd>

## 常见问题

### 你是如何理解 HTML 语义化的？

**语义化**：指对文本内容的结构化（内容语义化），选择合乎语义的标签（代码语义化）。

**举例**：段落用 p，边栏用 aside，主要内容用 main 标签。

**好处：**

- 便于开发者阅读和维护

- 有利于SEO：让浏览器的爬虫和辅助技术更好的解析，

**语义化标签介绍**：

在HTML5出来之前，我们习惯于用div来表示页面的章节或者不同模块，但是`div`本身是没有语义的。但是现在，HTML5中加入了一些语义化标签，来更清晰的表达文档结构。

20180322_1120.jpg

参考链接：

- [初探 · HTML5语义化](https://zhuanlan.zhihu.com/p/32570423)

### meta viewport 是做什么用的，怎么写？

```html
 	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```

控制页面在移动端不要缩小显示。

### canvas 元素是干什么的？

看 MDN 的 [canvas 入门手册](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)。

### 说一下CSS盒模型

可以参考本人的另外一篇文章：《02-CSS基础/06-CSS盒模型详解》。

### css reset 和 Normalize.css 有什么区别

> 此题考英文。

二者都是用来**统一**浏览器的默认样式：

- reset：重置。相对「暴力」，不管你有没有用，统统重置成一样的效果，且影响的范围很大，讲求跨浏览器的一致性。（一刀切）

- `Normalize.css` ：标准化。相对「平和」，注重通用的方案，重置掉该重置的样式，保留有用的 user agent 样式，同时进行一些 bug 的修复，这点是 reset 所缺乏的。（去伪存真）

参考链接：

- [Normalize.css 与传统的 CSS Reset 有哪些区别？](https://p.baidu.com/question/ab496162636234613761335c00)

- [CSS3初始化代码Normalize.css中文版](http://www.bbsxiaomi.com/html_css/html5_css3/177.html)

- [谈谈一些有趣的 CSS 话题](https://github.com/chokcoco/iCSS)

- [前端面试之CSS总结(上)](https://segmentfault.com/a/1190000006890725)


### 选择器的优先级如何确定

- 选择器越具体，优先级越高。 #xxx 大于 .yyy

- 同样优先级，写在后面的覆盖前面的。

- color: red !important; 优先级最高。


### BFC 是什么


overflow:hidden ：取消父子 margin 合并。 （另一种推荐做法：`padding-top: 0.1px;`）


### 如何清除浮动

（1）overflow: hidden

（2）.clearfix 清除浮动写在爸爸身上

```css
    .clearfix::after {
        content: '';
        display: block;
        clear: both;
    }

    /* 兼容 IE */
    .clearfix {
        zoom: 1;
    }
```

### 伪类和伪元素的区别是什么？

概念上的区别：

- 伪类表示一种状态

- 伪元素是真的有元素。比如 ::after 是真的有元素，可以在页面上显示内容。

使用上的区别：

- 伪类：使用单冒号

- 伪元素：使用双冒号

## 参考链接

- [互联网公司招聘启事的正确阅读方式](https://zhuanlan.zhihu.com/p/33998813)


---
title: 04-如何让一个元素水平垂直居中？
publish: true
---

<ArticleTopAd></ArticleTopAd>



![](http://img.smyhvae.com/20191108_2130.png)



## 前言

老板的手机收到一个红包，为什么红包没居中？

如何让一个子元素在父容器里**水平垂直居中**？这个问题必考，在实战开发中，也应用得非常多。

你也许能顺手写出好几种实现方法。但大部分人的写法不够规范，经不起千锤百炼。换句话说：这些人也就面试的时候夸夸其谈，但真的上战场的时候，他们不敢这么写，也不知道怎么写最靠谱。

这篇文章中，我们来列出几种常见的写法，最终你会明白，哪种写法是最优雅的。

当然，我还会拿出实际应用中的真实场景来举例，让你感受一下**标准垂直居中的魅力**。

## 如何让一个行内元素（文字、图片等）水平垂直居中

> 行内元素的居中问题比较简单。

### 行内元素水平居中

给父容器设置：

```
    text-align: center;

```

### 行内元素垂直居中

让**文字的行高** 等于 **盒子的高度**，可以让单行文本垂直居中。比如：

```css
    .father {
        height: 20px;
        line-height: 20px;
    }
```

## 如何让一个块级元素水平垂直居中

> 这一段是本文的核心。如何让一个块级的子元素在父容器里水平垂直居中？有好几种写法。我们一起来看看。

### margin: auto 的问题

在 CSS 中对元素进行水平居中是非常简单的：如果它是一个行内元素，就对它的父容器应用 `text-align: center`；如果它是一个块级元素，就对它自身应用 `margin: auto`或者 `margin: 0 auto`。

在这里，`margin: auto`相当于`margin: auto auto auto auto`。`margin: 0 auto`相当于`margin: 0 auto 0 auto`，四个值分别对应上右下左。其计算值取决于**剩余空间**。

但是，如果要对一个元素垂直居中，`margin: auto`就行不通了。

比如下面这段代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .father{
            height: 500px;
            background: pink;
        }
        .son {
            width: 300px;
            height: 200px;
            background: red;

            margin: auto;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son"></div>
    </div>
    <script></script>
</body>
</html>

```


上面的代码中，父元素和子元素都是定宽高的，即便在这种情况下，我给子元素设置 `margin: auto`，子元素依然没有垂直居中。

那还有没有比较好的通用的做法呢？

### 方式一：绝对定位 + margin（需要指定子元素的宽高，不推荐）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        .father{
            position: relative;
            min-height: 500px;
            background: pink;
        }
        .son {
            position: absolute;
            width: 200px;
            height: 100px;
            background: red;
            top: 50%;
            left: 50%;
            margin-top: -50px;
            margin-left: -100px;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son">子元素的内容</div>
    </div>
    <script></script>
</body>
</html>

```


**代码解释**：我们先让子元素的左上角居中，然后向上移动宽度的一半(50px)，就达到了垂直居中的效果；水平居中的原理类似。

**不足之处**：要求指定子元素的宽高，才能写出 `margin-top` 和 `margin-left` 的属性值。

但是，在通常情况下，对那些需要居中的元素来说，其宽高往往是由其内容来决定的，不建议固定宽高。


### 方式二：绝对定位 + translate（无需指定子元素的宽高，推荐）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        .father{
            position: relative;
            min-height: 500px;
            background: pink;
        }
        .son {
            position: absolute;
            background: red;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son">子元素的内容</div>
    </div>
    <script></script>
</body>
</html>
```

这种写法，在没有指定子元素宽高的情况下，也能让其在父容器中垂直居中。因为 translate() 函数中使用百分比值时，是以这个元素自身的宽度和高度为基准进行换算和移动的（**动态计算宽高**）。


### 方式3：flex 布局（待改进）

将父容器设置为 Flex 布局，再给父容器加个属性`justify-content: center`，这样的话，子元素就能水平居中了；再给父容器加个属性 `align-items: center`，这样的话，子元素就能垂直居中了。

代码举例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        .father{
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: pink;
        }
        .son {
            background: red;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son">子元素的内容</div>
    </div>
    <script></script>
</body>
</html>

```

上面这种写法，不足之处在于：给父容器设置属性`justify-content: center`和`align-items: center`之后，导致父容器里的所有子元素们都垂直居中了（如果父容器里有多个子元素的话）。可我明明想让指定的**某个子元素**居中，要怎么改进呢？

### 方式4： flex 布局 + margin: auto（推荐）

我们只需写两行声明即可：先给父容器设置 `display: flex`，再给指定的子元素设置我们再熟悉不过的 `margin: auto`，即可让这个指定的子元素在**剩余空间**里，水平垂直居中。大功告成。

代码举例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        .father{
            display: flex;
            min-height: 100vh;
            background: pink;
        }
        .son {
            margin: auto;
            background: red;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son">子元素的内容，想水平垂直居中</div>
        <div class="son2">这个元素不想水平垂直居中</div>
    </div>
    <script></script>
</body>
</html>
```

请注意，当我们给父容器使用 Flex 布局 时，子元素的`margin: auto`不仅能让其在水平方向上居中，**垂直方向上也是居中的**。

参考文章：[探秘 flex 上下文中神奇的自动 margin](https://www.cnblogs.com/coco1s/p/10910588.html)

## 垂直居中的典型应用场景：红包幕帘/弹窗

### 问题引入

就拿“弹窗”这一点来说，现在大家的弹窗都是各种样式、各种布局满天飞。不过进公司后，新人在第一次写弹窗之前，都会问一个问题：“弹窗这么通用的东西，没有一个规范吗？”说完之后，又默默写自己的有个性的弹窗去了。

建议大家在写弹窗的时候，无论如何，一定要**严格采用**水平居中、垂直居中的写法。

千万不要用 `margin-top` 这种距离屏幕顶部的距离来计算弹窗的位置，太搓了。不要让领导觉得：“你们写了这么久的前端代码，连个弹窗都搞不定？”

### 移动端，红包幕帘/弹窗 居中的规范写法（非常标准）

移动端场景，这里提供一个 红包幕帘/弹窗 的居中写法。注意，是严格居中，非常标准。为什么是移动端？你有见过PC网页端给你送红包的么？

在实战开发中，下面的这段代码，可以直接拿去用。注释详细，贴心无比。

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            /* 整个弹窗组件 */
            .component_popup {
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 100;
            }

            /* 遮罩背景 */
            .popup_mask {
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.7);
            }

            /* 弹窗区域（内容 + close）：严格居中 */
            .popup_content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            /* 弹窗的内容部分 */
            .content_box {
                width: 15.45rem;
                height: 19.32rem;
                background: url(http://img.smyhvae.com/20191010_1500_red-packet.png) no-repeat;
                background-size: 15.45rem 19.32rem;
            }

            /* 弹窗的close图标 */
            .content_close {
                width: 1.25em;
                height: 1.25em;
                background: url(http://img.smyhvae.com/20191010_1500_close.png) no-repeat;
                background-size: 1.25rem 1.25rem;
                margin: 0 auto;
                margin-top: 0.5rem;
            }
        </style>
    </head>
    <body>
        <div class="content">默认文档流中的页面主体</div>

        <div class="component_popup">
            <div class="popup_mask"></div>
            <div class="popup_content">
                <div class="content_box"></div>
                <div class="content_close"></div>
            </div>
        </div>
    </body>
</html>

```

实现效果：

![](http://img.smyhvae.com/20191010_1510.png)

**补充**：

1、如果你的页面中，有很多弹窗，建议将弹窗封装成一个抽象组件。

2、任何弹窗，都需要解决“滚动穿透”的问题，本文篇幅有限，请自行查阅。

## 最后一段

有些实现方式虽然简单，但必须要经得起千锤百炼。我们要做到**敬畏每一行代码**，不能浮于表面。团队开发，要的不是个性，而是**标准和规范**。

## 参考链接

- [为什么「margin:auto」可以让块级元素水平居中？](https://www.zhihu.com/question/21644198/answer/22392394)

- [七种方式实现垂直居中](https://jscode.me/t/topic/1936)

- [margin:auto实现绝对定位元素的水平垂直居中](http://www.zhangxinxu.com/wordpress/2013/11/margin-auto-absolute-%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D-%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD/)





## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)

---
title: 认识Web和Web标准
publish: false
---

<ArticleTopAd></ArticleTopAd>



## 隐藏盒子的几种方式

隐藏盒子，有以下几种方式：

（1）方式一：

```
overflow：hidden;   //隐藏盒子超出的部分
```


（2）**方式二**：

```
display: none;	  隐藏盒子，而且不占位置(用的最多)
```

比如，点击`X`，关闭京东首页上方的广告栏。

（3）方式三：

```
visibility: hidden;   //隐藏盒子，占位置。
visibility: visible;   //让盒子重新显示

```

（4）方式四：

```
opacity: 0;       //设置盒子的透明度（不建议，因为内容也会半透明），占位置
```


（4）方式五：

```
Position/top/left/...-999px   //把盒子移得远远的，占位置。
```

（5）方式六：

```
margin-left: 1000px;
```



### 设置盒子的半透明

方式一：`opacity: 0.4`。优点是方便。缺点是：里面的内容也会半透明。

方式二：css3的技术来解决半透明。如下：

- background: rgba(0,0,0,0.3);

- background: rgba(0,0,0,.3);

备注：`a`指的是alpha透明度。


### 给标签的形状设置为圆角矩形

```
border-radius: 50%;
border-radius: 10px 0 0 10px;
```


### 行高的问题：儿子把父亲撑开

比如对于下面这样的标签：

```
	<div>
		<a href=""></a>
	</div>

```


前置条件：如果我们给父亲div的行高设为31px，然后给儿子a的行高也设置为31

结果：当我们给儿子a设置了字体属性之后，会发现，父亲被撑高为32px了。因为font字体自身会比较大，多撑出了一个像素。

解决办法：**行内元素尽量不要设置font属性**。对于行内元素而言，如果它和父亲都设置了行高，就不要去给自己设置font属性了。要么就，不要同时设置行高。


### 背景图不能撑开盒子

高和行高都可以城开盒子，但背景图不能撑开盒子。







## JS

### 超链接`<a>`的href跳转

一个空白的超链接如下：

```
<a href=""></a>
```

当点击超链接时，由于 href 的属性值的不同，可以产生很多种情况：

```bash
	href=""                    //刷新页面

	href="#"                   //跳转到当前页面的顶部（不会刷新）

	href="javascript:void(0)"  // 什么都不做

	href="javascript:;"        // 什么都不做

```


## 解决 Git 不区分大小写导致的文件冲突问题

- 文章发布时间：2022-02-17

- 作者：@千古壹号

有些同学在 Git 仓库对文件/文件夹进行命名时，刚开始是小写，后来为了保持团队一致，又改成了大写，然而 Git 不会发现大小写的变化，此时就出了问题：导致仓库里出现了 大小写 同时存在的两个文件。但在 Windows、Mac 的电脑磁盘里，肉眼却能只看到一个文件，实在奇葩。

这个问题的根本原因是，Windows、Mac 的**文件系统**不区分大小写。

Linux的文件系统是区分大小写的。Git 默认是不区分大小写的，也可以通过改配置项，改为区分大小写。

### 问题复现路径

（1）新建一个 test 文件(大小写不敏感的状态下)，并提交。

（2）本地修改 test 变为 Test，文件内容无变更，无法提交。

（3）执行 `git config core.ignorecase false`，设 置Git的规则为 区分大小写（大小写敏感），然后 git push 提交，查看结果，此时远程仓库会存在 大小写 同时存在的文件，但本地仓库却只看到其中一个文件。

（4）甚至可能出现这种异常情况：本地暂存区的文件，怎么删也删不掉。再之后，从 test 尝试改为 Test 时，提示命名冲突。

### 错误的解决办法

```bash
git mv test Test
```

执行上面的命令时，会报错：`fatal: renaming 'Test' failed: Invalid argument`

### 正确的解决办法

```bash
# 将本地的 test、Test 目录都删掉，并生成一个新的目录 Temp
git mv Test Temp

# 将 Temp 目录改成 Test 目录。此时，项目中只会存在 Test 目录，不会存在 test 目录。目标达成。
git mv Temp Test
```

执行完上面的两个命令之后，项目中只会存在 Test 目录，不会存在 test 目录。目标达成。

### 关于 是否区分大小写 的补充说明

我们知道：针对文件/文件夹，Windows 系统和 Mac 系统是不区分大小写的；Linux 系统是区分大小写的；Git 默认是不区分大小写的，也可以通过改配置项，改为区分大小写。

不分区大小写，也有它的好处，比如：文件夹/文件的路径，很多时候就代表了网站地址、页面url的路径。而**网站地址也是不区分大小写的**，这是很关键的原因之一。

总的来说，根本原因是文件系统、url在底层设计上不区分大小写。磁盘路径、页面地址，本质上都是 url 。

### 关于 Git是否区分大小写 的补充

前面讲到，Git 默认是不区分大小写的，可以通过命令`git config --get core.ignorecase`查到，默认值是 true。

我们也可以修改 Git 的这一配置项，改为区分大小写，配置命令为`git config core.ignorecase false`。

但我建议你**保留 Git 的默认配置项**，不要随意自行修改，避免产生其他的麻烦。


### 参考链接

- [Mac 中 git 大小写问题的解决方案](https://shanyue.tech/bug/mac-git-ignorecase.html)

- [git 大小写问题 踩坑笔记](https://blog.csdn.net/u013707249/article/details/79135639)
---
title: 02-Git的使用
---

<ArticleTopAd></ArticleTopAd>






## 常见操作

### 全局配置用户信息

```
git config --global user.name "smyhvae"

git config --global user.email "smyhvae@163.com"
```


## 分支的合并


### 场景：基于master分支的代码，开发一个新的特性

如果你直接在master分支上开发这个新特性，是不好的，万一你在开发`特性1`的时候，领导突然又要叫你去开发`特性2`，就不好处理了。难道开发的两个特性都提交到master？一会儿提交特性1的commit，一会儿提交特性2的commit？这会导致commit记录很混乱。

所以，我给你的建议做法是：给每个特性都单独建一个的新的分支。

比如说，我专门给`特性1`建一个分支`feature_item_recommend`。具体做法如下：

（1）基于master分支，创建一个新的分支，起名为`feature_item_recommend`：

```
$ git checkout -b feature_item_recommend

Switched to a new branch 'feature_item_recommend'
```

上面这行命令，相当于：


```bash
$ git branch feature_item_recommend    // 创建新的分支

$ git checkout feature_item_recommend  //切换到新的分支
```


（2）在新的分支`feature_item_recommend`上，完成开发工作，并 commit 、push。

（3）将分支`feature_item_recommend`上的开发进度**合并**到master分支：

```bash
$ git checkout master  //切换到master分支

$ git merge feature_item_recommend    //将分支 feature_item_recommend 的开发进度合并到 master 分支

```


合并之后，`master`分支和`feature_item_recommend`分支会指向同一个位置。


（3）删除分支`feature_item_recommend`：

> 既然 特性1 开发完了，也放心地提交到master了，那我们就可以将这个分支删除了。

```
git branch -d feature_item_recommend
```

注意，我们当前是处于`master`分支的位置，来删除`feature_item_recommend`分支。如果当前是处于`feature_item_recommend`分支，是没办法删除它自己的。

同理，当我转身去开发`特性2`的时候，也是采用同样的步骤。


### 合并分支时，如果存在分叉


![](http://img.smyhvae.com/20180610_1650.png)


比如说上面这张图中，最早的时候，master分支是位于`C2`节点。我基于`C2`节点，new出一个新的分支`iss53`，我在`iss53`上提交了好几个commit。

现在，我准备把`iss53`上的几个commit合并到master上，此时发现，master分支已经前进到C4了。那该怎么合并呢？

合并的命令仍然是：

```bash
$ git checkout master

$ git merge iss53
```

**解释**：

这次合并的实现，并不同于简单的并入方式。这一次，我的开发历史是从更早的地方开始分叉的。

由于当前 master 分支所指向的commit (C4)并非想要并入分支（iss53）的直接祖先，Git 不得不进行一些处理。就此例而言，Git 会用两个分支的末端（C4 和C5）和它们的共同祖先（C2）进行一次简单的三方合并计算。

Git 没有简单地把分支指针右移，而是对三方合并的结果作一新的快照，并自动创建一个指向它的commit（C6）（如下图所示）。我们把这个特殊的commit 称作合并提交（mergecommit），因为它的祖先不止一个。

值得一提的是Git 可以自己裁决哪个共同祖先才是最佳合并基础；这和CVS 或Subversion（1.5 以后的版本）不同，它们需要开发者手工指定合并基础。所以此特性让Git 的合并操作比其他系统都要简单不少。

![](http://img.smyhvae.com/20180610_1710.png)

### 解决合并时发生的冲突

![](http://img.smyhvae.com/20180610_1740.png)

如果 feature1和feature2修改的是同一个文件中**代码的同一个位置**，那么，把feature1合并到feature2时，就会产生冲突。这个冲突需要人工解决。步骤如下：

（1）手动修改文件：手动修改冲突的那个文件，决定到底要用哪个分支的代码。

（2）git add：解决好冲突后，输入`git status`，会提示`Unmerged paths`。这个时候，输入`git add`即可，表示：**修改冲突成功，加入暂存区**。

（3）git commit 提交。

然后，我们可以继续把 feature1 分支合并到 master分支，最后删除feature1、feature2。

**注意**：两个分支的同一个文件的不同地方合并时，git会自动合并，不会产生冲突。

比如分支feture1对index.html原来的第二行之前加入了一段代码。
分支feature2对index.html在原来的最后一行的后面加入了一段代码。
这个时候在对两个分支合并，git不会产生冲突，因为两个分支是修改同一文件的不同位置。
git自动合并成功。不管是git自动合并成功，还是在人工解决冲突下合并成功，提交之前，都要对代码进行测试。

## 日常操作积累

### 修改密码（曲线救国）


> 网上查了很久，没找到答案。最终，在cld童鞋的提示下，采取如下方式进行曲线救国。

```bash
# 设置当前仓库的用户名为空
git config  user.name ""
```

然后，当我们再输入`git pull`等命令行时，就会被要求重新输入*新的*账号密码。此时，密码就可以修改成功了。最后，我们还要输入如下命令，还原当前仓库的用户名：

```
git config user.name "smyhvae"
```

### 修改已经push的某次commit的作者信息

已经push的记录，如果要修改作者信息的话，只能 通过--force命令。我反正是查了很久，但最终还是不敢用公司的仓库尝试。

参考链接：


- [git 修改已提交的某一次的邮箱和用户信息](https://segmentfault.com/q/1010000006999861)

看最后一条答案。

- [修改 git repo 历史提交的 author](http://baurine.github.io/2015/08/22/git_update_author.html)


### 将 `branch1`的某个`commit1`合并到`branch2`当中

切换到branch2中，然后执行如下命令：

```
git cherry-pick commit1
```

### 20190118-修改GitHub已提交的用户名和邮箱

参考链接：（亲测有效）

- [修改Git全部Commit提交记录的用户名Name和邮箱Email](https://cloud.tencent.com/developer/article/1352623)

- [Mac 运行sh文件，也就是传说中的shell脚本](https://blog.csdn.net/yusufolu9/article/details/53706269)


在执行`./email.sh`后，如果出现`permission denied`的错误，可以先执行`chmod 777 email.sh`，修改文件的权限。


### 20200520-将Git 项目迁移到另一个仓库

我们假设旧仓库的项目名称叫`old-repository`，新仓库的项目名称叫`new-repository`。操作如下：


（1）创建旧仓库的裸克隆：

```bash
git clone --bare https://github.com/exampleuser/old-repository.git
```
执行上述命令后，会在本地生成一个名叫 `old-repository.git`的文件夹。


（2）迁移到新仓库：

```bash
cd old-repository.git

git push --mirror https://github.com/exampleuser/new-repository.git
```

这样的话，项目就已经迁移到新仓库了。

注意，我们**不需要**手动新建一个空的新仓库，当我们执行上述命令之后，新仓库就已经自动创建好了。

参考链接：

- [复制仓库](https://help.github.com/cn/github/creating-cloning-and-archiving-repositories/duplicating-a-repository)

- [Git 本地仓库和裸仓库](https://moelove.info/2016/12/04/Git-%E6%9C%AC%E5%9C%B0%E4%BB%93%E5%BA%93%E5%92%8C%E8%A3%B8%E4%BB%93%E5%BA%93/)


### 2021-11-10-提交代码时，绕过 eslint 检查

需求：提交代码时，绕过 eslint 检查

解决办法：用命令行提交，末尾追加`--no-verify`。例如：

```bash
# 提交代码
git commit -m '千古壹号的commit备注' --no-verify

# 推送到远程时，也可以追加 --no-verify，以免远程仓库做了 eslint 限制。
git push origin --no-verify
```

### 2021-12-29-切换仓库的源地址

查看源地址：

```
git remote -v
```

切换源地址：

```bash
git remote set-url origin https://xxx.git
```




## git客户端推荐

市面上的Git客户端我基本都用过了，我最推荐的一款Git客户端是：[Tower](https://www.git-tower.com) 或者 [Fork](https://git-fork.com)。

- GitUp：<https://gitup.co/>

20180623时，网上看了下Git客户端的推荐排名：

![](http://img.smyhvae.com/20180623_1210.png)

**SmartGit**：

商业用途收费， 个人用户免费：

![](http://img.smyhvae.com/20180623_1305.png)





## 推荐书籍

- 《pro.git中文版》



## 推荐连接


### 2018-06

- [聊下git pull --rebase](https://www.cnblogs.com/wangiqngpei557/p/6056624.html)







## 控制台的使用

### 控制台查看源码

控制台的`Sources`标签可以查看源码。按住快捷键「cmd + P」，可以根据文件名查找源码文件。



## 其他

### show user agent shadow DOM

![](http://img.smyhvae.com/20180206_1610.png)


![](http://img.smyhvae.com/20180206_1616.png)

把上图中的红框部分打钩。





---
title: 01-VS Code的使用
---

<ArticleTopAd></ArticleTopAd>



## 前言

> 文章标题：《第一次使用 VS Code 时你应该知道的一切配置》。本文的最新内容，更新于 2021-10-09。大家完全不用担心这篇文章会过时，因为随着 VS Code 的版本更新和插件更新，本文也会随之更新。

> 本文的最新内容，也会在[GitHub](https://github.com/qianguyihao/Web/blob/master/00-%E5%89%8D%E7%AB%AF%E5%B7%A5%E5%85%B7/01-VS%20Code%E7%9A%84%E4%BD%BF%E7%94%A8.md)上同步更新，欢迎 star。

VS Code 软件实在是太酷、太好用了，越来越多的新生代互联网民工正在使用它。

前端男神**尤雨溪**大大这样评价 VS Code：

![](http://img.smyhvae.com/20200619_0133.png)

有一点你可能会感到惊讶：VS Code 这款软件本身，是用 JavaScript 语言编写的（具体请自行查阅基于 JS 的 PC 客户端开发框架 `Electron`）。Jeff Atwood 在 2007 年提出了著名的 Atwood 定律：

> **任何能够用 JavaScript 实现的应用系统，最终都必将用 JavaScript 实现**。

Jeff Atwood 这个人是谁不重要（他是 Stack Overflow 网站的联合创始人），重要的是这条定律。

前端目前是处在春秋战国时代，各路英雄豪杰成为后浪，各种框架工具层出不穷，VS Code 软件无疑是大前端时代最骄傲的工具。

如果你是做前端开发（JavaScript 编程语言为主），则完全可以将 VS Code 作为「**主力开发工具**」。这款软件是为前端同学量身定制的，开箱即用。

如果你是做其他语言方向的开发，并且不需要太复杂的集成开发环境，那么，你可以把 VS Code 作为「**代码编辑器**」来使用，纵享丝滑。

甚至是一些写文档、写作的同学，也经常把 VS Code 作为 markdown **写作工具**，毫无违和感。

退而求其次，即便你不属于以上任何范畴，你还可以把 VS Code 当作最简单的**文本编辑器**来使用，完胜 Windows 系统自带的记事本。

写下这篇文章，是顺势而为。

## 一、惊艳登场：VS Code 的介绍

VS Code 的全称是 Visual Studio Code，是一款开源的、免费的、跨平台的、高性能的、轻量级的代码编辑器。它在性能、语言支持、开源社区方面，都做得很不错。

微软有两种软件：一种是 VS Code，一种是其他软件。

在2015年4月29日的微软Build开发者大会上，微软宣布推出 VS Code之后，这个轻量级的编辑器成为全球无数开发者们最喜爱的开发工具。VS Code基于开源且跨平台的理念，每月都会进行迭代，并提供每天发布的 insider 版本（insider是微软的一种公测计划，类似于国内软件所说的内测版）。它拥有至少几万个插件，生态极为活跃和丰富。

### IDE 与 编辑器的对比

IDE 和编辑器是有区别的：

- **IDE**（Integrated Development Environment，集成开发环境）：对代码有较好的智能提示和相互跳转，同时侧重于工程项目，对项目的开发、调试工作有较好的图像化界面的支持，因此比较笨重。比如 Eclipse 的定位就是 IDE。

- **编辑器**：要相对轻量许多，侧重于文本的编辑。比如 Sublime Text 的定位就是编辑器。再比如 Windows 系统自带的「记事本」就是最简单的编辑器。

需要注意的是，VS Code 的定位是**编辑器**，而非 IDE ，但 VS Code 又比一般的编辑器的功能要丰富许多。可以这样理解：VS Code 的体量是介于编辑器和 IDE 之间。VS Code 的使命，是让开发者在编辑器里拥有 IDE 那样的开发体验。

 VS Code流行起来之后，使用 Sublime Text、Atom 这类编辑器软件的人，自然就越来越少了。

### VS Code 的特点

- 跨平台：支持 MacOS、Windows 和 Linux 等多个平台。在这多种平台下，拥有一致的用户界面和开发体验。
- 开源：VS Code 的源代码以 MIT 协议开源。不仅代码开源，而且整个产品的开发计划和发布管理也都是开源的。VS Code团队每年都会在 GitHub 的Wiki上发布 [Roadmap](https://github.com/microsoft/vscode/wiki/Roadmap)，列出一整年的规划图。VS Code 软件的官方文档也托管在了 [GitHub](https://github.com/Microsoft/vscode-docs) 上。
- 自带终端、图形化的调试工具、Git 版本控制。
- 插件扩展：支持第三方插件，功能强大。既有中心化的插件市场，也可以直接在 VS Code里搜索你想要的插件。
- 生态：社区生态活跃且丰富，社区氛围浓厚。
- 自带  emmet：支持代码自动补全，快速生成简单的语法结构。要知道，这个功能在 Sublime Text中，得先安装插件才行。
- 语法支持：VS Code 自带了 JavaScript、TypeScript 和 Node.js 的**语法支持**，包括：**语法高亮、代码智能提示和补全、括号匹配、颜色区分、代码片段提示**等。也就是说，你在书写 JS 和 TS 时，这些语法支持都是自带的。其他的一些语言，你需要先安装相应的**扩展包**插件，就出现语法支持。
- 在修改配置方面，既有图形化的配置界面，也有 基于 JSON 文件的配置方式，满足不同人群的使用习惯。

### 前端利器之争： VS Code 与 WebStorm

前端小白最喜欢问的一个问题是：哪个编辑器/IDE 好用？是 VS Code 还是 WebStorm （WebStorm 其实是 IntelliJ IDEA 的定制版）？我来做个对比：

- **哪个更酷**：显然 VS Code 更酷。

- **内存占用情况**：根据我的观察，VS Code 是很占内存的（尤其是当你打开多个窗口的时候），但如果你的内存条够用，使用起来是不会有任何卡顿的感觉的。相比之下，IntelliJ IDEA 不仅非常占内存，而且还非常卡顿。如果你想换个既轻量级、又不占内存的编辑器，最好还是使用「Sublime Text」编辑器。

- **使用比例**：当然是 VS Code 更胜一筹。先不说别的，我就拿数据说话，我目前所在的研发团队有 200 人左右（120个后台、80个前端），他们绝大部分人都在用 VS Code 编码，妥妥的。

所以，如果你以后还问这个问题，那就真有些掉底了。

### VS Code 的技术栈、核心组件

了解 VS Code的技术栈和核心组件，可以让我们对 VS Code 有更深入的认识。此小段，了解即可。

- 开发框架：Electron。Electron可以使用 Node.js + JS这样的技术栈开发桌面GUI应用程序。
- 编辑器：Monaco Editor。Monaco Editor 是一款开源的在线代码编辑器，是 **VS Code 浏览器版本**的最核心组件。[#](https://zhuanlan.zhihu.com/p/88828576)
- 编程语言：TypeScript。TypeScript 是  JavaScript的严格超集。TS 在JS的基础上添加了许多功能，引入了声明文件，而且支持类型扩展。TS 适合长期的、多人开发的大型项目开发。
- 让编辑器支持语言功能：Language Server Protocol （LSP） 语言服务协议。LSP是编辑器/IDE 与语言服务器之间的一种协议，通过 JSON-PRC 传输消息，可以让编辑器嵌入并支持各种编程语言。开发者可以在编辑器中使用各种语言来编写程序。
- 让编辑器支持调试功能：Debug Adapter Protocol（DAP）。DAP 是基于 JSON的协议，它抽象了开发工具与调试工具质检的通信。
- 集成终端：Xterm.js。VS Code的集成终端是基于开源项目 [Xterm.js](https://github.com/xtermjs/xterm.js/) 进行开发的。Xterm.js 是一个使用 TS 开发的终端组件。另外，Xterm.js 并不是直接下来下来就能用的终端应用，它只是一个前端组件，可以与 bash这样的进程进行连接，然后让用户通过  Xterm.js 进行交互。

### VS Code 的安装

- VS Code 官网：<https://code.visualstudio.com>

VS Code 的安装很简单，直接去官网下载安装包，然后双击安装即可。

![](http://img.smyhvae.com/20190313_1750_3.png)

上图中，直接点击 download，一键下载安装即可。

VS Code支持以下平台：

![](https://img.smyhvae.com/20210930_1930.png)

安装完成后的界面如下：

![](https://img.smyhvae.com/20211011_1703.png)

VS  Code被分为以下五个区域：

- 编辑器
- 侧边栏
- 状态栏
- 活动栏
- 面板

VS Code在功能上非常克制，只包含了大多数开发流程中所需要的基础模块，包括：编辑器、文件管理、窗口管理、首选项设置、终端等。

你需要根据具体需要安装额外的组件或者插件。比如说，如果开发TS项目，则需要安装 TS编译器、ESLint、TSLint等编译工具。如果开发C语言项目，则需要安装gcc、Clang等编辑工具。

## 二、崭露锋芒：VS Code 快捷键

VS Code 用得熟不熟，首先就看你是否会用快捷键。以下列出的内容，都是常用快捷键，而加粗部分的快捷键，使用频率则非常高。

任何工具，掌握 20%的技能，足矣应对 80% 的工作。既然如此，你可能会问：那就只保留 20% 的特性，不久可以满足 80%的用户了吗？

但我想说的是：**那从来都不是同样的 20%**，每个人都会用到不同的功能。

掌握下面这些高频核心快捷键，你和你的工具，足矣露出锋芒。

### 1、工作区快捷键

| Mac 快捷键             | Win 快捷键               | 作用                                          | 备注                 |
| :--------------------- | :----------------------- | :-------------------------------------------- | :------------------- |
| **Cmd + Shift + P**    | **Ctrl + Shift + P**，F1 | 显示命令面板                                  |                      |
| **Cmd + B**            | **Ctrl + B**             | 显示/隐藏侧边栏                               | 很实用               |
| `Cmd + \` | `Ctrl + \` | **拆分为多个编辑器**  | 【重要】抄代码利器                            |
| **Cmd + 1、2**         | **Ctrl + 1、2**          | 聚焦到第 1、第 2 个编辑器                     | 同上重要             |
| **Cmd + +、Cmd + -** | **ctrl + +、ctrl + -**  | 将工作区放大/缩小（包括代码字体、左侧导航栏） | 在投影仪场景经常用到 |
| Cmd + J                | Ctrl + J                 | 显示/隐藏控制台                               |                      |
| **Cmd + Shift + N**    | **Ctrl + Shift + N**     | 重新开一个软件的窗口                          | 很常用               |
| Cmd + Shift + W        | Ctrl + Shift + W         | 关闭软件的当前窗口                            |                      |
| Cmd + N                | Ctrl + N                 | 新建文件                                      |                      |
| Cmd + W                | Ctrl + W                 | 关闭当前文件                                  |                      |

### 2、跳转操作

| Mac 快捷键                                                         | Win 快捷键             | 作用                                 | 备注               |
| :----------------------------------------------------------------- | :--------------------- | :----------------------------------- | :----------------- |
| Cmd + ` | 没有 | 在同一个软件的**多个工作区**之间切换 | 使用很频繁 |
| **Cmd + Option + 左右方向键**                                      | Ctrl + Pagedown/Pageup | 在已经打开的**多个文件**之间进行切换 | 非常实用           |
| Ctrl + Tab                                                         | Ctrl + Tab             | 在已经打开的多个文件之间进行跳转     | 不如上面的快捷键快 |
| Cmd + Shift + O                                                    | Ctrl + shift + O       | 在当前文件的各种**方法之间**（符号：Symbol）进行跳转 |                    |
| Cmd + T | Ctrl + T | 在当前**工作区**的各种方法之间（符号：Symbol）进行跳转 | |
| Ctrl + G                                                           | Ctrl + G               | 跳转到指定行                         |                    |
| `Cmd+Shift+\` | `Ctrl+Shift+\`                                     | 跳转到匹配的括号       |                                      |

### 3、移动光标

| Mac 快捷键                    | Win 快捷键                                 | 作用                                                         | 备注           |
| :---------------------------- | :----------------------------------------- | :----------------------------------------------------------- | :------------- |
| 方向键                        | 方向键                                     | 在**单个字符**之间移动光标                                   | 大家都知道     |
| **option + 左右方向键**       | **Ctrl + 左右方向键**                      | 在**单词**之间移动光标                                       | 很常用         |
| **Cmd + 左右方向键**          | **Fn + 左右方向键**（或 Win + 左右方向键） | 将光标定位到当前行的最左侧、最右侧（在**整行**之间移动光标） | 很常用         |
| **Option + Alt + 左右方向键** | **Alt + Shift + 左右方向键**               | 左右扩大/缩小选中的范围                                      | 很酷，极为高效 |
| Cmd + ↑                       | Ctrl + Home                                | 将光标定位到文件的第一行                                     |                |
| Cmd + ↓                       | Ctrl + End                                 | 将光标定位到文件的最后一行                                   |                |
| Cmd + Shift + \               |                                            | 在**代码块**之间移动光标                                     |                |

### 4、编辑操作

| Mac 快捷键             | Win 快捷键          | 作用                                 | 备注                                   |
| :--------------------- | :------------------ | :----------------------------------- | :------------------------------------- |
| Cmd + C                | Ctrl + C            | 复制                                 |                                        |
| Cmd + X                | Ctrl + X            | 剪切                                 |                                        |
| Cmd + V                | Ctrl + V            | 粘贴                                 |                                        |
| **Cmd + Enter**        | **Ctrl + Enter**    | 在当前行的下方新增一行，然后跳至该行 | 即使光标不在行尾，也能快速向下插入一行 |
| Cmd+Shift+Enter        | Ctrl+Shift+Enter    | 在当前行的上方新增一行，然后跳至该行 | 即使光标不在行尾，也能快速向上插入一行 |
| **Option + ↑**         | **Alt + ↑**         | 将代码向上移动                       | 很常用                                 |
| **Option + ↓**         | **Alt + ↓**         | 将代码向下移动                       | 很常用                                 |
| Option + Shift + ↑     | Alt + Shift + ↑     | 将代码向上复制一行                   |                                        |
| **Option + Shift + ↓** | **Alt + Shift + ↓** | 将代码向下复制一行                   | 写重复代码的利器                       |

另外再补充一点：将光标点击到某一行的任意位置时，默认就已经是**选中全行**了，此时可以直接**复制**或**剪切**，无需点击鼠标。这个非常实用，是所有的编辑操作中，使用得最频繁的。它可以有以下使用场景：

- 场景1：假设光标现在处于第5行的**任意位置**，那么，直接依次按下 `Cmd + C` 和 `Cmd + V`，就会把这行代码复制到第6行。继续按 `Cmd + C` 和 `Cmd + V`，就会把这行代码复制到第7行。copy代码so easy。
- 场景2：假设光标现在处于第5行，那么，先按下 `Cmd + C`，然后按两下`↑` 方向键，此时光标处于第3行；紧接着，继续按下`Cmd + V`，就会把刚刚那行代码复制到第3行，原本处于第3行的代码会整体**下移**。

你看到了没？上面的两个场景，我全程没有使用鼠标，只通过简单的复制粘贴和方向键，就做到了如此迅速的copy代码。你说是不是很高效？

### 5、删除操作

| Mac 快捷键             | Win 快捷键           | 作用                   | 备注                                      |
| :--------------------- | :------------------- | :--------------------- | :---------------------------------------- |
| Cmd + shift + K        | Ctrl + Shift + K     | 删除整行               | 「Cmd + X」的作用是剪切，但也可以删除整行 |
| **option + Backspace** | **Ctrl + Backspace** | 删除光标之前的一个单词 | 英文有效，很常用                          |
| option + delete        | Ctrl + delete        | 删除光标之后的一个单词 |                                           |
| **Cmd + Backspace**    |                      | 删除光标之前的整行内容 | 很常用                                    |
| Cmd + delete           |                      | 删除光标之后的整行内容 |                                           |

备注：上面所讲到的移动光标、编辑操作、删除操作的快捷键，在其他编辑器里，大部分都适用。

### 6、多光标选择/多光标编辑

多光标选择在编程的**提效**方面可谓立下了汗马功劳。因为比较难记住，所以你要时不时回来复习这一段。

| Mac 快捷键                        | Win 快捷键                     | 作用                                                         | 备注                                     |
| --------------------------------- | ------------------------------ | ------------------------------------------------------------ | ---------------------------------------- |
| **Option + 鼠标连续点击任意位置** | **Alt + 鼠标连续点击任意位置** | 在任意位置，同时出现多个光标                                 | 很容易记住                               |
| Cmd + D                           | Ctrl + D                       | 将光标放在某个单词的位置（或者先选中某个单词），然后反复按下「 **Cmd + D** 」键， 即可将下一个相同的词逐一加入选择。 | 较常用                                   |
| **Cmd + Shift + L**               | **Ctrl + Shift + L**           | 将光标放在某个单词的位置（或者先选中某个单词），然后按下快捷键，则所有的相同内容处，都会出现光标。 | 很常用。比如变量重命名的时候，就经常用到 |

### 7、多列选择/多列编辑

多列选择是更高效的多光标选择，所以单独列成一小段。

| Mac 快捷键                | Win 快捷键             | 作用                                                         | 备注                 |
| ------------------------- | ---------------------- | ------------------------------------------------------------ | -------------------- |
| Cmd + Option + 上下键     | Ctrl + Alt + 上下键    | 在连续的多列上，同时出现多个光标                             | 较常用               |
| Option + Shift + 鼠标拖动 | Alt + Shift + 鼠标拖动 | 按住快捷键，然后把鼠标从区域的左上角拖至右下角，即可在选中区域的每一行末尾，出现光标。 | 很神奇的操作，较常用 |
| **Option + Shift + i**    | **Alt + Shift + I**    | 选中一堆文本后，按下快捷键，既可在**每一行的末尾**都出现一个光标。 | 很常用               |

### 8、编程语言相关

| Mac 快捷键             | Win 快捷键      | 作用                         | 备注                             |
| :--------------------- | :-------------- | :--------------------------- | :------------------------------- |
| Cmd + /                | Ctrl + /        | 添加单行注释                 | 很常用                           |
| **Option + Shift + F** | Alt + shift + F | 代码格式化                   | 很常用                           |
| F2                     | F2              | 以重构的方式进行**重命名**   | 改代码备                         |
| Ctrl + J               |                 | 将多行代码合并为一行         | Win 用户可在命令面板搜索”合并行“ |
| Cmd +                  |                 |                              |                                  |
| Cmd + U                | Ctrl + U        | 将光标的移动回退到上一个位置 | 撤销光标的移动和选择             |

### 9、搜索相关

| Mac 快捷键          | Win 快捷键          | 作用                                       | 备注   |
| :------------------ | :------------------ | :----------------------------------------- | :----- |
| **Cmd + Shift + F** | **Ctrl + Shift +F** | 全局搜索代码                               | 很常用 |
| **Cmd + P**         | **Ctrl + P**        | 在当前的项目工程里，**全局**搜索文件名     |        |
| Cmd + F             | Ctrl + F            | 在当前文件中搜索代码，光标在搜索框里       |        |
| **Cmd + G**         | **F3**              | 在当前文件中搜索代码，光标仍停留在编辑器里 | 很巧妙 |

### 10、自定义快捷键

按住快捷键「Cmd + Shift + P」，弹出命令面板，在命令面板中输入“快捷键”，可以进入快捷键的设置。

当然，你也可以选择菜单栏「偏好设置 --> 键盘快捷方式」，进入快捷键的设置：

![](http://img.smyhvae.com/20190329_2120.png)

### 11、快捷键列表

你可以点击 VS Code 左下角的齿轮按钮，效果如下：

![](http://img.smyhvae.com/20190418_1738.png)

上图中，在展开的菜单中选择「键盘快捷方式」，就可以查看和修改所有的快捷键列表了：

![](http://img.smyhvae.com/20190418_1739_2.png)

### 快捷键参考表（官方）

VS Code官网提供了 PDF版本的键盘快捷键参考表，转需：

- Windows版本：https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
- Mac 版本：https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf
- Linux版本：https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf

我们在 VS  Code软件里通过菜单栏「帮助-->键盘快捷方式参考」也可以打开相应平台的快捷键大全（PDF版本）。




## 三、高端访问：命令面板的使用

Mac 用户按住快捷键 `Cmd+Shift+P` （Windows 用户按住快捷键`Ctrl+Shift+P`），可以打开快速命令面板。效果如下：

![](http://img.smyhvae.com/20190329_1750_2.png)

命令面板的作用是**希望解放开发者的鼠标，让一些操作和配置可以直接通过键盘进行**。如果让开发者记住所有的配置项在菜单的哪个位置是不现实的，而且有些命令并不在菜单中。

有了命令面板之后，如果你需要修改一些设置项，或者进行一些快捷操作，则可以通过「命令面板」来操作，效率会更高。接下来列举一些。

### 1、VS Code 设置为中文语言

Mac 用户按住快捷键 `Cmd+Shift+P` （Windows 用户按住快捷键`Ctrl+Shift+P`），打开命令面板。

在命令面板中，输入`Configure Display Language`，选择`Install additional languages`，然后安装插件`Chinese (Simplified) Language Pack for Visual Studio Code`即可。

或者，我们可以直接安装插件`Chinese (Simplified) Language Pack for Visual Studio Code`，是一样的。

安装完成后，重启 VS Code。

### 2、设置字体大小

在命令面板输入“字体”，可以进行字体的设置，效果如下：

![](http://img.smyhvae.com/20190329_2110.png)

当然，你也可以在菜单栏，选择「首选项-设置-常用设置」，在这个设置项里修改字体大小。

### 3、快捷键设置

在命令面板输入“快捷键”，就可以进入快捷键的设置。

### 4、大小写转换

选中文本后，在命令面板中输入`transfrom`，就可以修改文本的大小写了。

![](http://img.smyhvae.com/20190414_1751.png)

### 5、使用命令行启动 VS Code

（1）输入快捷键「Cmd + Shift + P 」，选择`install code command`：

![](http://img.smyhvae.com/20191103_1327.png)

（2）使用命令行：

- `code`命令：启动 VS Code 软件
- `code pathName/fileName`命令：通过 VS Code 软件打开指定目录/指定文件。

备注：这种方法快捷简单，但是在电脑重启之后就失效了。稍后在第五段，我会介绍更常见的方法。



### 6、修改特定编程语言的设置项

输入快捷键「Cmd + Shift + P 」打开命令面板，然后输入并执行 `Configure Language Specific Settings`即可。

![](https://img.smyhvae.com/20211012_1039.png)



## 四、私人订制：VS Code 的常见配置

### 0、设置项介绍

在修改 VS Code配置之前，我们需要知道，在哪里可以找到设置项的入口。

**方式1**：Mac用户选择菜单栏「Code--> 首选项-->设置」，即可打开配置项：

![](http://img.smyhvae.com/20210930_2009.png)

**方式2**：点击软件右下角的设置图标：

![](http://img.smyhvae.com/20210930_2016.png)

![](https://img.smyhvae.com/20211012_1017.png)

如上图所示，VS Code提供两种不同范围的设置：

- **用户**设置：全局生效。
- **工作区**设置：只针对当前项目生效。工作区设置会覆盖用户设置。适用于团队协作场景。工作区的设置文件是保存在当前项目根目录的`.vscode/settings.json`中，可以被提交到Git仓库，方便共享给项目组的其他成员。

操作技巧：

（1）我们可以在设置面板的顶部搜索框，输入关键词，就能迅速定位到你想要的设置项。

（2）上图中，点击右上角的icon，可以通过 json文件的形式修改设置项。





### 1、修改主题

1）修改颜色主题：

选择菜单栏「Code --> 首选项 --> 颜色主题」：

![](http://img.smyhvae.com/20210930_2017.png)

在弹出的对话框中，挑选你一个你喜欢的的颜色主题吧，或者安装其他颜色的主题：

![20211013_1018](http://img.smyhvae.com/20211013_1018.png)

或者在设置项里搜索`Workbench: Color Theme`，进行修改。

2）修改文件图标的主题：

选择菜单栏「Code --> 首选项 --> 文件图标主题」：

![20211013_1015](http://img.smyhvae.com/20211013_1015.png)

在弹出的对话框中，挑选你一个你喜欢的的主题吧，或者安装其他的主题：

![20211013_1019](http://img.smyhvae.com/20211013_1019.png)



或者在设置项里搜索`Workbench: Icon Theme`，进行修改。

### 2、面包屑（Breadcrumb）导航

打开 VS Code 的设置项，选择「用户设置 -> 工作台 -> 导航路径」，如下图所示：

![](http://img.smyhvae.com/20191108_1550.png)

上图中，将红框部分打钩即可。

设置成功后，我们就可以查看到当前文件的「层级结构」，非常方便。如下图所示：

![](http://img.smyhvae.com/20190415_2009.png)

有了这个面包屑导航，我们可以点击它，在任意目录、任意文件之间随意跳转。使用频繁非常高。



### 3、是否显示代码的行号

VS Code 默认显示代码的行号。你可以在设置项里搜索 `editor.lineNumbers`修改设置，配置项如下：

![](http://img.smyhvae.com/20190417_2140.png)

我建议保留这个设置项，无需修改。

### 4、右侧是否显示代码的缩略图

如果某个文件的代码量很大，缩略图就很有用了，可以预览全局，并在当前文件中快速跳转。

VS Code 会在代码的右侧，默认显示缩略图。你可以在设置项里搜索 `editor.minimap` 进行设置，配置项如下：

![](http://img.smyhvae.com/20211012_1507.png)

上面这张图，你仔细琢磨下会发现，中文翻译十分精准。

### 5、将当前行代码高亮显示（更改光标所在行的背景色）

当我们把光标放在某一行时，这一行的背景色并没有发生变化。如果想**高亮显示**当前行的代码，需要设置两步：

（1）在设置项里搜索`editor.renderLineHighlight`，将选项值设置为`all`或者`line`。

（2）在设置项里增加如下内容：

```json
"workbench.colorCustomizations": {
    "editor.lineHighlightBackground": "#00000090",
    "editor.lineHighlightBorder": "#ffffff30"
}
```

上方代码，第一行代码的意思是：修改光标所在行的背景色（背景色设置为全黑，不透明度 90%）；第二行代码的意思是：修改光标所在行的边框色。

### 6、改完代码后立即自动保存

**方式一**：

改完代码后，默认不会自动保存。你可以在设置项里搜索`files.autoSave`，修改参数值为`afterDelay`  ，即可自动保存。如下：

![](https://img.smyhvae.com/20211012_2000.png)

files.autoSave的参数值有以下几种：

- off（默认值）：不自动保存。
- afterDelay（建议配置）：文件修改超过一定时间（默认1秒）后，就自动保存。
- onFocusChange：当前编辑器失去焦点时，则自动保存。如果我们将配置项修改为`onFocusChange`之后，那么，当光标离开该文件后，这个文件就会自动保存了。
- onWindowChange：VS  Code软件失去焦点时，则自动保存。

**方式二**：

当然，你也可以直接在菜单栏选择「文件-自动保存」。勾选后，当你写完代码后，文件会立即实时保存。

### 7、热退出

当VS Code退出后，它可以记住未保存的文件。如果你希望达到这种效果，那么，你需要先将设置项`files.hotExit`的值改为 `onExitAndWindowClose`。这个配置项要不要改，看你个人需要。比如我自己平时设置的值是`onExit`。

![20211012_2014](http://img.smyhvae.com/20211012_2014.png)


### 8、保存代码后，是否立即格式化

保存代码后，默认**不会立即**进行代码的格式化。你可以在设置项里搜索`editor.formatOnSave`查看该配置项：

![](http://img.smyhvae.com/20190417_2213.png)

我觉得这个配置项保持默认就好，不用打钩。

### 9、自动格式化粘贴的内容

在设置项里搜索 `editor.formatOnPaste`，将设置项改为`true`：

![20211012_1049](https://img.smyhvae.com/20211012_1049.png)

### 10、设置字体大小

在设置项里搜索`fontSize`，然后根据需要设置各种模块的字体大小：

![20211012_1053](http://img.smyhvae.com/20211012_1053.png)



### 11、空格 or 制表符

VS Code 会根据你所打开的文件来决定该使用空格还是制表。也就是说，如果你的项目中使用的都是制表符，那么，当你在写新的代码时，按下 tab 键后，编辑器就会识别成制表符。

（1）建议的设置项如下：

- **editor.detectIndentation**：自动检测（默认开启）。建议把这个配置项修改为 false，截图如下：

![20211012_1139](https://img.smyhvae.com/20211012_1139.png)

这样做，是为了取消系统的自动缩进，建议自己手动格式化比较好。 参考链接：https://www.yisu.com/zixun/327399.html

- **editor.insertSpaces**：按 Tab 键时插入空格（默认值为true）。截图如下：

![](http://img.smyhvae.com/20190417_2207.png)

- **editor.tabSize**：一个制表符默认等于四个空格。截图如下：

![](http://img.smyhvae.com/20190417_2209.png)



（2）状态栏也会显示当前的缩进值。点击状态栏，可以直接修改 tabSize 缩进值：

![](http://img.smyhvae.com/20211009_1610.png)



（3）另外，我们还可以安装 prettier 插件，设置代码在格式化时默认缩进值。prettier 是做代码格式化的最常见工具。

![](https://img.smyhvae.com/20211009_1637.png)

（4）去掉每一行末尾的空格。在设置项里搜索`空格`或者`"files.trimTrailingWhitespace"`，将值设置为 true：

![20211012_1231](http://img.smyhvae.com/20211012_1231.png)

一般来说，每一行代码末尾的空格是多余的，所以建议去掉。

### 12、直观地显示代码里的空格和缩进 ✨

代码里如果有缩进或者空格，肉眼是看不出来的，但是我们可以修改配置项，把它揪出来。

在配置项里搜索`editor.renderWhitespace`，修改为`all`：

![20211012_1150](http://img.smyhvae.com/20211012_1150.png)

修改之后，代码里的空格、缩进的展示效果如下：

![20211012_1258](http://img.smyhvae.com/20211012_1258.png)

看到了没？哪里有空格、哪里是缩进，全都一目了然。

### 13、新建文件后的默认文件类型

当我们按下快捷键「Cmd + N」新建文件时，VS Code 默认无法识别这个文件到底是什么类型的，因此也就无法识别相应的语法高亮。

如果你想修改默认的文件类型，可以在设置项里搜索`files.defaultLanguage`，设置项如下：

![](http://img.smyhvae.com/20190417_2221.png)

上图中的红框部分，填入你期望的默认文件类型。我填的是`html`类型，你也可以填写成 `javascript` 或者 `markdown`，或者其他的语言类型。

### 14、删除文件时，是否弹出确认框

当我们在 VS Code 中删除文件时，默认会弹出确认框。如果你想修改设置，可以在设置项里搜索`xplorer.confirmDelete`。截图如下：

![](http://img.smyhvae.com/20190418_1758.png)

我建议这个设置项保持默认的打钩就好，不用修改。删除文件前的弹窗提示，也是为了安全考虑，万一手贱不小心删了呢？

### 15、在新窗口打开文件/文件夹

通过 `window.openFoldersInNewWindow`（默认值为off）和`window.openFilesInNewWindow`（默认值为default），可以配置在打开文件夹、打开文件时，是否开启一个新的窗口。我个人建议，把这两个配置项都设置为 on，避免旧的窗口被覆盖：

![](http://img.smyhvae.com/20211012_1700.png)

补充知识—— `window.restoreWindows`可以用来配置 如何恢复之前的会话窗口。涉及到的场景是：你把 VS Code 关闭了，然后又打开了，是否要展示之前打开过的文件、文件夹？参数值有以下几种：

- one（默认配置）：只会重新打开上一次回话中最后操作的那一个窗口。
- none：打开一个空的窗口，不包含任何文件、文件夹。
- all（建议配置）：恢复上一次会话中的所有窗口。
- folders：恢复上一次会话中包含文件夹的窗口。

![20211012_1704](http://img.smyhvae.com/20211012_1704.png)



> 接下来，我们来讲一些更高级的操作。



## 五、纵享丝滑：常见操作和使用技巧

### 1、快速生成HTML骨架

先新建一个空的html文件，然后通过以下方式，可以快速生成html骨架。

**方式1**：输入`!`，然后按下`enter`键，即可生成html骨架。如下图：

![](https://img.smyhvae.com/20210623-2115.gif)



**方式2**：输入`html:5`，然后按住 `Tab`键，即可生成html骨架。

生成的骨架，内容如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

有了上面的html骨架之后，我们就可以快乐地在里面插入CSS 代码和 JS 代码。

### 2、并排编辑：左右（上下）显示多个编辑器窗口（copy代码利器）

> 并排编辑是所有的编辑操作中最常用的一个技巧，十分有用。比如我们在开发一个项目时，可能需要同时打开 HTML 文件和 CSS 文件，很常见。

Mac 用户按住快捷键 `Cmd + \`， Windows 用户按住快捷键`Ctrl + \`，即可同时打开多个编辑器窗口，进行并排编辑。效果如下：

![](http://img.smyhvae.com/20200619_0030.gif)

按快捷键「Cmd + 1 」切换到左边的窗口，按快捷键「Cmd + 2 」切换到右边的窗口，以此类推。随时随地，想切就切。

学会了这一招，以后 copy 代码的时候，leader 再也不用担心我抄得慢了，一天工资到手。

---

当然，使用快捷键`Cmd + \`只是其中一种方式，我们还有很多种方式打开并行编辑。我们来做一个汇总。

如果你已经打开了一个编辑器，那么可以通过以下几种方式在另一侧打开另一个编辑器：（按照使用频率，从高到低排序）

- 使用快捷键`Cmd + \`将编辑器一分为二。
- 使用快捷键`Cmd + P`调出文件列表，选择要打开的文件，然后按下 `Cmd + Enter`快捷键。【重要】
- 按住 Option 键的同时，单击资源管理器的文件（Windows 用户是按 Alt 键）。
- 点击编辑器右上角的 `Split Editor`按钮。
- 选择菜单栏「查看--> 编辑器布局」，然后选择你具体想要的布局，如下图所示：

![20211012_1451](http://img.smyhvae.com/20211012_1451.png)

- 通过拖拽，把当前文件移动到任意一侧。

补充知识：通过配置项`worbench.editor.OpenSideBySideDirection`可以控制编辑器在并排打开时出现的默认位置（默认值为right，你也可以根据需要改为 down）。如下图所示：

![20211012_1455](http://img.smyhvae.com/20211012_1455.png)

### 3、从终端 code 命令启动 VS Code（Mac电脑）

在终端输入`code`或者输入 `code + 指定项目的目录`，就可以启动 VS  Code，十分便捷。即：

- `code` 命令：启动 VS Code 软件。
- `code pathName/fileName` 命令：通过 VS Code 软件打开指定目录/指定文件。

为了达到目的，我们需要先将 VS Code的软件安装路径添加到环境变量，一劳永逸。具体操作如下：

（1）打开 `bash_profile`文件：

```bash
cd ~
vim ./bash_profile
```

（2）在 bash_profile 中添加如下内容：

```bash
# 从终端启动VS Code，并设置vscode启动的命令别名
alias code="/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code"
```

注意，由于`Visual Studio Code.app`这个路径里有空格，所以需要在空格前面加上反斜杠`\`。

（3）重启环境变量的配置：

```
# 重启
source ~/.bash_profile
```

大功告成。

改完之后，如果没生效，那你把  `bash_profile`文件 换成 `zshrc`文件试试。

参考链接：

- [mac通过终端code 命令打开vscode](https://blog.csdn.net/logan_LG/article/details/106800904)

### 3、从终端 code 命令启动 VS Code（Windows电脑）

在终端输入`code`或者输入 `code + 指定项目的目录`，就可以启动 VS  Code，十分便捷。即：

- `code` 命令：启动 VS Code 软件。
- `code pathName/fileName` 命令：通过 VS Code 软件打开指定目录/指定文件。

为了达到目的，我们需要先将 VS Code的软件安装路径添加到环境变量，一劳永逸。具体操作如下：

（1）打开 VS Code 的安装位置，进入bin文件夹，复制路径。比如：`D:\Microsoft VS Code\bin`。

（2）回到桌面，右键我的电脑-->高级系统设置-->环境变量-->编辑path值，在原来的path后面，追加内容`;D:\Microsoft VS Code\bin`（即英文的分号+VS  Code 的 bin 路径)

（3）重启电脑，大功告成。

改完之后，如果没生效，那八成是因为你填的 path 值有问题。

参考链接：

- [windows使用 code . 命令打开vscode](https://www.cnblogs.com/zyl-Tara/p/10642704.html)

### 4、在当前文件中搜索

在上面的快捷键列表中，我们已经知道如下快捷键：

- Cmd + F（Win 用户是 Ctrl + F）：在当前文件中搜索，光标在搜索框里

- Cmd + G（Win 用户是 F3）：在当前文件中搜索，光标仍停留在编辑器里

多个搜索结果出来之后，按下 Enter 键之后跳转到下一个搜索结果，按下 Shift + Enter 键之后跳转到上一个搜索结果。

另外，你可能会注意到，搜索框里有很多按钮，每个按钮都对应着不同的功能，如下图所示：

![](http://img.smyhvae.com/20190415_2052.png)

上图中，你可以通过「Tab」键和「Shift + Tab」键在输入框和替换框之间进行切换。

「在选定内容中查找」这个功能还是比较实用的。你也可以在设置项里搜索 `editor.find.autoFindInSelection`，勾选该设置项后，那么，当你选中指定内容后，然后按住「Cmd + F」，就可以**自动**只在这些内容里进行查找。该设置项如下图所示：

![](http://img.smyhvae.com/20191108_1655.png)

### 5、全局搜索

在上面的快捷键列表中，我们已经知道如下快捷键：

- Cmd + Shift + F（Win 用户是 Ctrl + Shift +F）：在全局的文件夹中进行搜索。效果如下：

![20211012_1548](http://img.smyhvae.com/20211012_1548.png)

上图中，你可以点击**红框**部分，展开更多的配置项。然后点击**红圈**部分，进行过滤搜索。注意，第二个红圈那里会经常用到，它可以在搜索时过滤掉  `.git`、`.node_modules`等忽略文件。

上图中，我们还可以点击“在编辑器中打开”，在一个单独的文件中聚合展示搜索结果：

![](https://img.smyhvae.com/20211012_1609.png)

### 6、文件名/文件夹的搜索

前面的快捷键那一段我们讲过，通过 「Cmd + P」可以快速搜索并打开**文件**/文件夹。这种方式，一般用于快速打开最近编辑过的文件。

其实还有一种很巧妙的方式，可以在整个项目里，既能搜到文件，也能搜到**文件夹**。这种方式，常用于**过滤项目的目录**。操作方法很简单：

> 直接在文件资源管理器输入关键字就行。搜索结果会自动出现；使用方向键进行上下移动，可以在搜索的文件和文件夹之间进行跳转。
>
> 另外，右上角会看到一个过滤器，点击下图中的红圈部分，则只显示匹配的文件和文件夹。

![20211012_1616](http://img.smyhvae.com/20211012_1616.png)

当然，这招也有一点不足：不能搜中文。

### 7、大纲视图

如下图所示，大纲视图可以展示当前代码的方法结构、文件的目录结构：

![20211012_1628](http://img.smyhvae.com/20211012_1628.png)

![20211012_1636](http://img.smyhvae.com/20211012_1636.png)

### 8、文件对比

VS Code 默认支持**对比两个文件的内容**。选中两个文件，然后右键选择「将已选项进行比较」即可，效果如下：

![](http://img.smyhvae.com/20190329_1756.png)

VS Code 自带的对比功能并不够强大，我们可以安装插件`compareit`，进行更丰富的对比。比如说，安装完插件`compareit`之后，我们可以将「当前文件」与「剪切板」里的内容进行对比：

![](http://img.smyhvae.com/20190329_1757.png)

如果你安装了 GitLens 插件，还可以将两个git分支的代码进行比对，非常完美。

### 9、查找某个函数在哪些地方被调用了

比如我已经在`a.js`文件里调用了 `foo()`函数。那么，如果我想知道`foo()`函数在其他文件中是否也被调用了，该怎么做呢？

做法如下：在 `a.js` 文件里，选中`foo()`函数（或者将光标放置在`foo()`函数上），然后按住快捷键「Shift + F12」，就能看到 `foo()`函数在哪些地方被调用了，比较实用。

### 10、鼠标操作

- 在当前行的位置，鼠标三击，可以选中当前行。

- 用鼠标单击文件的**行号**，可以选中当前行。

- 在某个**行号**的位置，**上下移动鼠标，可以选中多行**。

### 11、重构

重构分很多种，我们来举几个例子。

**命名重构**：

当我们尝试去修改某个函数（或者变量名）时，我们可以把光标放在上面，然后按下「F2」键，那么，这个函数（或者变量名）出现的地方都会被修改。

**方法重构**：

选中某一段代码，这个时候，代码的左侧会出现一个「灯泡图标」，点击这个图标，就可以把这段代码提取为一个单独的函数。

### 12：终端配置

VS Code软件自带了终端，但我个人认为不是很好用，而且VS Code 软件关了之后，终端也没了。建议大家使用其他的终端软件，专业的事情交给专业的人做。

- Windows平台的终端：推荐 PowerShell 软件。远程终端推荐 xshell 软件。
- Mac平台的终端：推荐 [iTerm2 ](https://iterm2.com/)。 iTerm2 是Mac平台最好用的终端软件，没有之一。

**右键行为**：

> 在终端上，单击右键所产生的行为在不同的系统里是不同的。

- Windows：如果有**选定**文本，则复制当前文本；如果没有选定文本，则粘贴。
- macOS：选中光标所在位置的单词，并显示右键菜单。
- Linux：显示右键菜单。

### 13、Git 版本管理

在 VS Code中使用Git之前，需要你先安装 Git 环境。

VS Code 自带了 Git 版本管理的功能，如下图所示：

![](http://img.smyhvae.com/20190418_1850.png)

上图中，我们可以在这里进行常见的 git 命令操作。如果你还不熟悉 **Git 版本管理**，可以先去补补课。

我自己用的最多的功能是**diff 代码**和**合并冲突**，自从用上了  VS Code 的这两个功能，简直离不开它。

我们先来看看 diff 代码的效果：

![20211013_1411](https://img.smyhvae.com/20211013_1411.png)

上图中，点击右上角的`...`，然后点击`内联视图`，则可以换一种视图 diff 代码：

![](https://img.smyhvae.com/20211013_1415.png)

**Git状态栏**：

![20211013_1421](http://img.smyhvae.com/20211013_1421.png)

在VS Code的左下角会显示Git状态栏。如果当前代码仓库配置了远程仓库，那么“同步更改”会显示以下信息：

- 左边的数字：表示远程分支比本地分支多了XX个 Git commit。
- 右边的数字：表示本地分支比远程分支多了XX个 Git commit。

点击“同步更改”按钮，会拉取（pull）远程分支到本地分支，并推送（push）本地的Git commit到远程分支。

如果当前代码仓库没有配置远程仓库，则会显示“发布更改”的按钮。点击“发布更改”按钮，会把当前分支push到远程仓库。

---

另外，我建议安装插件`GitLens`搭配使用，它是 VS Code 中我最推荐的一个插件，简直是 Git 神器，码农必备。

我还要补充一句：

有人说，高手都是直接用命令行操作Git。然而，根据我多年的经验来看，如果你的代码仓库需要管理的分支特别多，与团队的其他成员需要经常协作，那么，我建议你**优先使用** GUI 图形化工具来操作Git，避免出错。

我推荐的GUI版的Git工具有：

- [Tower](https://www.git-tower.com/)
- [Sourcetree](https://www.sourcetreeapp.com/)
- [GitKraken](https://www.gitkraken.com/)

### 14、将工作区放大/缩小

我们在上面的设置项里修改字体大小后，仅仅只是修改了代码的字体大小。

如果你想要缩放整个工作区（包括代码的字体、左侧导航栏的字体等），可以按下快捷键「**cmd +/-**」。windows 用户是按下「ctrl +/-」

**当我们在投影仪上给别人演示代码的时候，这一招十分管用**。

如果你想恢复默认的工作区大小，可以在命令面板输入`重置缩放`（英文是`reset zoom`）

f### 11、创建多层子文件夹

我们可以在新建文件夹的时候，如果直接输入`aa/bb/cc`，比如：

![](http://img.smyhvae.com/20190418_2022.png)

那么，就可以创建多层子文件夹，效果如下：

![](http://img.smyhvae.com/20190418_2023.png)

### 15、`.vscode` 文件夹的作用

为了统一团队的 vscode 配置，我们可以在项目的根目录下建立`.vscode`目录，在里面放置一些配置内容，比如：

- `settings.json`：工作空间设置、代码格式化配置、插件配置。

- `sftp.json`：ftp 文件传输的配置。

`.vscode`目录里的配置只针对当前项目范围内生效。将`.vscode`提交到代码仓库，大家统一配置时，会非常方便。

### 16、自带终端

我们可以按下「Ctrl + `」打开 VS Code 自带的终端。我认为内置终端并没有那么好用，我更建议你使用第三方的终端 **item2**。

### 17、markdown 语法支持

VS Code 自带 markdown 语法高亮。也就是说，如果你是用 markdown 格式写文章，则完全可以用 VS Code 进行写作。

写完 md 文件之后，你可以点击右上角的按钮进行预览，如下图所示：

![](http://img.smyhvae.com/20190418_1907.png)

我一般是安装「Markdown Preview Github Styling」插件，以 GitHub 风格预览 Markdown 样式。样式十分简洁美观。

你也可以在控制面板输入`Markdown: 打开预览`，直接全屏预览 markdown 文件。

### 18、Emmet in VS Code

`Emmet`可以极大的提高 html 和 css 的编写效率，它提供了一种非常简练的语法规则。

举个例子，我们在编辑器中输入缩写代码：`ul>li*6` ，然后按下 Tab 键，即可得到如下代码片段：

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

VS Code 默认支持 Emmet。更多 Emmet 语法规则，可以自行查阅。

### 19、修改字体，使用「Fira Code」字体

这款字体很漂亮，很适合用来写代码：

![](https://img.smyhvae.com/20200516_1633-2.png)

安装步骤如下：

（1）进入 <https://github.com/tonsky/FiraCode> 网站，下载并安装「Fira Code」字体。

（2）打开 VS Code 的「设置」，搜索`font`，修改相关配置为如下内容：

```json
"editor.fontFamily": "'Fira Code',Menlo, Monaco, 'Courier New', monospace", // 设置字体显示
"editor.fontLigatures": false,//控制是否启用字体连字，true启用，false不启用
```

上方的第二行配置，取决于个人习惯，我是直接设置为`"editor.fontLigatures": null`，因为我不太习惯连字。

### 20、代码格式化

VS Code 默认对 JavaScript、TypeScript、JSON、HTML 提供了开箱即用的代码格式化支持。其他语言则需要先安装相应的插件才能支持。

另外，我们还可以安装 Prettier 插件进行**更精细**的代码格式化。下一段将插件的时候，会讲解。

### 21、智能提示 IntelliSense

VS Code 默认对 JavaScript、TypeScript、JSON、HTML、CSS、SCSS、Less这7种语言（文件）提供了**智能提示**的支持。其他编程语言则需要先安装相应的插件才能支持。

在 VS Code插件职场中，下图是最受欢迎的8种[编程语言插件](https://marketplace.visualstudio.com/search?target=VSCode&category=Programming%20Languages&sortBy=Installs)：

![20211013_1120](https://img.smyhvae.com/20211013_1120.png)

智能提示的功能很强大， 包括函数介绍、代码自动补全等等。

### 22、调试与运行

VS Code **内置**了对 Node.js 运行时的调试支持，可以直接调试  JavaScript 和 TypeScript。其他编程语言的调试，则需要先安装相应的插件才能支持。

在 VS Code插件市场中，下图是最受欢迎的几种调试插件：

![](https://img.smyhvae.com/20211013_1650.png)

### 23、文件传输：sftp

如果你需要将本地文件通过 ftp 的形式上传到局域网的服务器（需要先把服务端的配置搭建好），可以安装`sftp`这个插件，很好用。在公司会经常用到。

步骤如下：

（1）安装插件`sftp`。

（2）配置 `sftp.json`文件。 插件安装完成后，输入快捷键「cmd+shift+P」弹出命令面板，然后输入`sftp:config`，回车，当前工程的`.vscode`文件夹下就会自动生成一个`sftp.json`文件，我们需要在这个文件里配置的内容可以是：

- `host`：服务器的 IP 地址

- `username`：用户名

- `privateKeyPath`：存放在本地的已配置好的用于登录工作站的密钥文件（也可以是 ppk 文件）

- `remotePath`：工作站上与本地工程同步的文件夹路径，需要和本地工程文件根目录同名，且在使用 sftp 上传文件之前，要手动在工作站上 mkdir 生成这个根目录

- `ignore`：指定在使用 sftp: sync to remote 的时候忽略的文件及文件夹，注意每一行后面有逗号，最后一行没有逗号

举例如下：(注意，其中的注释需要去掉)

```json
{
  "host": "192.168.xxx.xxx", //服务器ip
  "port": 22, //端口，sftp模式是22
  "username": "", //用户名
  "password": "", //密码
  "protocol": "sftp", //模式
  "agent": null,
  "privateKeyPath": null,
  "passphrase": null,
  "passive": false,
  "interactiveAuth": false,
  "remotePath": "/root/node/build/", //服务器上的文件地址
  "context": "./server/build", //本地的文件地址

  "uploadOnSave": true, //监听保存并上传
  "syncMode": "update",
  "watcher": {
    //监听外部文件
    "files": false, //外部文件的绝对路径
    "autoUpload": false,
    "autoDelete": false
  },
  "ignore": [
    //忽略项
    "**/.vscode/**",
    "**/.git/**",
    "**/.DS_Store"
  ]
}
```

（3）在 VS Code 的当前文件里，选择「右键 -> upload」，就可以将本地的代码上传到 指定的 ftp 服务器上（也就是在上方 `host` 中配置的服务器 ip）。

我们还可以选择「右键 -> Diff with Remote」，就可以将本地的代码和 ftp 服务器上的代码做对比，非常方便。

### 24、沉浸模式/禅模式

程序员写代码需要专注，有时需要进入一种心流。VS Code给我们提供了一种全屏下的沉浸模式，周围的面板都会被隐藏起来，只显示编辑器部分。

操作方法：菜单栏选择「查看-外观-禅模式」即可；或者按下快捷键`Cmd + K`，放手，再按`Z`也可以达到目的。

### 正则表达式批量删除字符串

**需求**：将文本中的字符串`axxxxb`，批量替换为`ab`。其中，开头字符 a 和 结尾字符 b 固定，中间xxx长度不确定。

**解决**：传统查找替换无法胜任。可以使用VScode正则表达式功能，查找`a.*?b`替换为`ab`即可。其中`?`是禁止贪婪匹配，否则会误删很多内容。

---

**拓展需求**：需求——将文本中的字符串`axxxx`，批量替换为`a`。其中，开头字符 a 固定，后面的xxx长度不确定。

**解决**：传统查找替换无法胜任。可以使用VScode正则表达式功能，查找`a.*?\n`替换为`a\n`即可。

## 六、三头六臂：VS Code 插件介绍 & 插件推荐

VS Code 有一个很强大的功能就是支持插件扩展，让你的编辑器仿佛拥有了三头六臂。
### 安装插件

![](http://img.smyhvae.com/20191108_1553_2.png)

上图中，点击红框部分，即可在顶部输入框里，查找你想要的插件名，然后进行安装。

插件安装完成后，记得重启软件（或者点击插件位置的“重新加载”），插件才会生效。

另外，我们还可以访问官网的插件市场来安装插件：

-  VS Code插件市场（官方）：https://marketplace.visualstudio.com/vscode

**插件的安装目录**：

- Windows：：`%USERPROFILE%\.vscode\extensions`
- macOS：`~/.vscode/extensions`
- macOS：`~/.vscode/extensions`
### 插件的类型

![20211013_1757_2](http://img.smyhvae.com/20211013_1757_2.png)

插件市场的首页有四个模块，可以作为重要的信息来源：

- Featured：由  VS Code团队精心推荐的插件。
- Trending：近期热门插件。
- Most Popular：按总安装量排序的插件。
- Recently Added：最新发布的插件。

![20211013_1758](http://img.smyhvae.com/20211013_1758.png)

![20211013_1955](http://img.smyhvae.com/20211013_1955.png)

插件市场至少有17种类型的插件：（按照数量排序）

- Themes：主题插件
- Programming Languages：编程语言插件
- Snippets：代码片段
- Extension Packs：插件包，里面包括多个插件
- Formatters：代码格式化
- Linters：静态检查
- Debuggers：调试器
- Keymaps：快捷键映射
- Visualization：可视化
- Language Packs：各国的语言插件
- Azure：Azure 云计算
- Data Science：数据科学
- SCM Providers：源代码控制管理器（source control manager）
- Notebooks
- Education：教育
- Testing：测试相关
- Machine Learning：机器学习
- Others：其他
### 插件的过滤显示

在 VS  Code中打开插件管理视图，可以针对已安装的插件，进行过滤展示。

1）点击插件视图右上角的`...`按钮，可以展示不同状态的插件：

![20211013_2011](http://img.smyhvae.com/20211013_2011.png)

2）在搜索框输入字符`@`，会展示出不同类型的过滤器：

![20211013_2015](http://img.smyhvae.com/20211013_2015.png)

**常见的过滤器如下**：

1）按大类搜：

- `@builtin`：显示 VS Code内置的插件
- `@disabled`：显示被禁用的插件
- `@enabled`：显示已启用的插件
- `@installed`：显示已安装的插件
- `@outdated`：显示待更新的插件

2）精准搜索：

- `@id`：按id显示插件
- `@tag`：根据标签显示插件。

3）对插件进行排序：

- `@sort:installs`：根据插件的安装量排序
- `@sourt:rating`：根据插件的评分排序
- `@sort:name`：根据插件名字的字母顺序排序

4）组合搜索：（举例）

- `@installed @category:themes`：显示已安装的主题插件。
- `@sort:installs java`：对 Java 相关的插件按照安装量排序。

下面的内容，我来列举一些常见的插件，这些插件都很实用，小伙伴们可以按需安装。注意：每一类插件里，**顺序越靠前，越实用**。

### 1、基本插件

#### Chinese (Simplified) Language Pack for Visual Studio Code

让软件显示为简体中文语言。

### 2、Git 相关插件

#### GitLens 【荐】

我强烈建议你安装插件`GitLens`，它是 VS Code 中我最推荐的一个插件，简直是 Git 神器，码农必备。如果你不知道，那真是 out 了。

GitLens 在 Git 管理上有很多强大的功能，比如：

- 将光标放置在代码的当前行，可以看到这样代码的提交者是谁，以及提交时间。这一点，是 GitLens 最便捷的功能。
- 查看某个 commit 的代码改动记录
- 查看不同的分支
- 可以将两个 commit 进行代码对比
- 甚至可以将两个 branch 分支进行整体的代码对比。这一点，简直是 GitLens 最强大的功能。当我们在不同分支 review 代码的时候，就可以用到这一招。

打开你的 Git仓库，未安装  GitLens 时是这样的：

![](http://img.smyhvae.com/20211009_1400.png)

安装了  GitLens 之后是这样的：

![](http://img.smyhvae.com/20211009_1430.png)

上图中，红框部分就是  GitLens 的功能，诸君可以自由发挥。

补充一个有意思的趣事：Python插件、Ruby插件、GitLens插件、Vetur插件，这四个插件的开发者先后加入了微软。

#### Git History

有些同学习惯使用编辑器中的 Git 管理工具，而不太喜欢要打开另外一个 Git UI 工具的同学，这一款插件满足你查询所有 Git 记录的需求。

#### Local History 【荐】

维护文件的本地历史记录。代码意外丢失时，有时可以救命。

![](http://img.smyhvae.com/20200618_2246.png)

### 3、代码智能提示插件

#### Vetur

Vue 多功能集成插件，包括：语法高亮，智能提示，emmet，错误提示，格式化，自动补全，debugger。VS Code 官方钦定 Vue 插件，Vue 开发者必备。
#### ES7 React/Redux/GraphQL/React-Native snippets

React/Redux/react-router 的语法智能提示。
#### JavaScript(ES6) code snippets

ES6 语法智能提示，支持快速输入。

#### javascript console utils：快速打印 log 日志【荐】

安装这个插件后，当我们按住快捷键「Cmd + Shift + L」后，即可自动出现日志 `console.log()`。简直是日志党福音。

当我们选中某个变量 `name`，然后按住快捷键「Cmd + Shift + L」，即可自动出现这个变量的日志 `console.log(name)`。

其他的同类插件还有：Turbo Console Log。

不过，生产环境的代码，还是尽量少打日志比较好，避免出现一些异常。

编程有三等境界：

- 第三等境界是打日志，这是最简单、便捷的方式，略显低级，一般新手或资深程序员偷懒时会用。

- 第二等境界是断点调试，在前端、Java、PHP、iOS 开发时非常常用，通过断点调试可以很直观地跟踪代码执行逻辑、调用栈、变量等，是非常实用的技巧。

- 第一等境界是测试驱动开发，在写代码之前先写测试。与第二等的断点调试刚好相反，大部分人不是很习惯这种方式，但在国外开发者或者敏捷爱好者看来，这是最高效的开发方式，在保证代码质量、重构等方面非常有帮助，是现代编程开发必不可少的一部分。

#### Code Spell Checker：单词拼写错误检查

这个拼写检查程序的目标是帮助捕获常见的单词拼写错误，可以检测驼峰命名。从此告别 Chinglish.

#### Auto Close Tag、Auto Rename Tag

自动闭合配对的标签、自动重命名配对的标签。

### 4、代码显示增强插件

#### Bracket Pair Colorizer 2：突出显示成对的括号【荐】

`Bracket Pair Colorizer 2`插件：以不同颜色显示成对的括号，并用连线标注括号范围。简称**彩虹括号**。

另外，还有个`Rainbow Brackets`插件，也可以突出显示成对的括号。


#### highlight-icemode：选中相同的代码时，让高亮显示更加明显【荐】

VSCode 自带的高亮显示，实在是不够显眼。用插件支持一下吧。

所用了这个插件之后，VS Code 自带的高亮就可以关掉了：

在用户设置里添加`"editor.selectionHighlight": false`即可。

参考链接：[vscode 选中后相同内容高亮插件推荐](https://blog.csdn.net/palmer_kai/article/details/79548164)


#### vscode-icons

vscode-icons 会根据文件的后缀名来显示不同的图标，让你更直观地知道每种文件是什么类型的。


#### indent-rainbow：突出显示代码缩进

`indent-rainbow`插件：突出显示代码缩进。

安装完成后，效果如下图所示：

![](http://img.smyhvae.com/20190418_1958.png)


#### TODO Highlight

写代码过程中，突然发现一个 Bug，但是又不想停下来手中的活，以免打断思路，怎么办？按照代码规范，我们一般是在代码中加个 TODO 注释。比如：（注意，一定要写成大写`TODO`，而不是小写的`todo`）

```
//TODO:这里有个bug，我一会儿再收拾你
```

或者：

```
//FIXME:我也不知道为啥， but it works only that way.
```

安装了插件 `TODO Highlight`之后，按住「Cmd + Shift + P」打开命令面板，输入「Todohighlist」，选择相关的命令，我们就可以看到一个 todoList 的清单。

#### Better Comments

为注释添加更醒目、带分类的色彩。

### 5、代码格式化插件

#### Prettier：代码格式化

Prettier 是一个代码格式化工具，**只关注格式化，但不具备校验功能**。在一个多人协同开发的团队中，统一的代码编写规范非常重要。一套规范可以让我们编写的代码达到一致的风格，提高代码的可读性和统一性。自然维护性也会有所提高，代码的展示也会更加美观。

步骤如下：

（1）安装插件 `Prettier`。

（2）在项目的根路径下，新建文件`.prettierrc`，并在文件中添加如下内容：

```json
{
  "printWidth": 150,
  "tabWidth": 4,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "tslintIntegration": true,
  "insertSpaceBeforeFunctionParenthesis": false
}
```

上面的内容，是我自己的配置，你可以参考。更多配置，可见官方文档：<https://prettier.io/docs/en/options.html>


（3）Mac用户按快捷键「Option + Shift + F」，Win 用户按快捷键「Alt + shift + F」，即可完成代码的格式化。如果你的VS Code 设置的是自动格式化代码，那么这一步可以忽略。


#### ESLint：代码格式的校验

日常开发中，建议用 Prettier 做**代码格式化**，然后用 eslint 做**格式校验**。很多人把这两个插件的功能弄混了。

一般做法是：格式化建议是由程序员手动触发，格式校验由系统强制校验。通过 Prettier **手动**触发格式化，是为了让用户有感知；通过eslint 做**强制**校验之后，如果代码的格式不符合要求，系统就禁止你提交代码。

#### Beautify

代码格式化工具。

备注：相比之下，Prettier 是当前最流行的代码格式化工具，比 Beautify 用得更多。

#### Paste JSON as Code

此插件可以将剪贴板中的 JSON 字符串转换成工作代码。支持多种语言。

#### JS-CSS-HTML Formatter【荐】

保存文件时，自动格式化 HTML、CSS、JS代码。



### 6、图片相关插件

#### Polacode-2020：生成代码截图 【荐】

可以把代码片段保存成美观的图片，主题不同，代码的配色方案也不同，也也可以自定义设置图片的边框颜色、大小、阴影。

尤其是在我们做 PPT 分享时需要用到代码片段时，或者需要在网络上优雅地分享代码片段时，这一招很有用。

生成的效果如下：

![](http://img.smyhvae.com/20200619_1403.png)

其他同类插件：`CodeSnap`。我们也可以通过 <https://carbon.now.sh/>这个网站生成代码图片

有人可能会说：直接用 QQ 截图不行吗？可以是可以，但不够美观、不够干净。

#### Image Preview 【荐】

图片预览。鼠标移动到图片 url 上的时候，会自动显示图片的预览和图片尺寸。



### 7、CSS相关插件

#### CSS Peek

增强 HTML 和 CSS 之间的关联，快速查看该元素上的 CSS 样式。

#### Vue CSS Peek

CSS Peek 对 Vue 没有支持，该插件提供了对 Vue 文件的支持。

#### Color Info

这个便捷的插件，将为你提供你在 CSS 中使用颜色的相关信息。你只需在颜色上悬停光标，就可以预览色块中色彩模型的（HEX、 RGB、HSL 和 CMYK）相关信息了。



### 8、Mardown 相关插件

#### Markdown Preview Github Styling 【荐】

以 GitHub 风格预览 Markdown 样式，十分简洁优雅。就像下面这样，左侧书写 Markdown 文本，右侧预览 Markdown 的渲染效果：

![](http://img.smyhvae.com/20200618_2025.png)

#### Markdown Preview Enhanced

预览 Markdown 样式。

#### Markdown All in One

这个插件将帮助你更高效地在 Markdown 中编写文档。



### 9、通用工具类插件

#### sftp：文件传输 【荐】

如果你需要将本地文件通过 ftp 的形式上传到局域网的服务器，可以安装`sftp`这个插件，很好用。在公司会经常用到。

详细配置已经在上面讲过。

#### Live Server 【荐】

在本地启动一个服务器，代码写完后可以实现「热更新」，实时地在网页中看到运行效果。就不需要每次都得手动刷新页面了。

使用方式：安装插件后，开始写代码；代码写完后，右键选择「Open with Live Server」。

#### open in browser

安装`open in browser`插件后，在 HTML 文件中「右键选择 --> Open in Default Browser」，即可在浏览器中预览网页。


#### Project Manager

工作中，我们经常会来回切换多个项目，每次都要找到对应项目的目录再打开，比较麻烦。Project Manager 插件可以解决这样的烦恼，它提供了专门的视图来展示你的项目，我们可以把常用的项目保存在这里，需要时一键切换，十分方便。

#### WakaTime 【荐】

统计在 VS Code 里写代码的时间。统计效果如下：

![](http://img.smyhvae.com/20200618_2300.png)

#### Code Time

`Code Time`插件：记录编程时间，统计代码行数。

安装该插件后，VS Code 底部的状态栏右下角可以看到时间统计。点击那个位置之后，选择「Code Time Dashboard」，即可查看统计结果。

备注：团长试了一下这个 code time 插件，发现统计结果不是很准。

#### File Tree to Text Generator：快速生成文件的目录树

如题。

#### Settings Sync

- 地址：<https://github.com/shanalikhan/code-settings-sync>

- 作用：多台设备之间，同步 VS Code 配置。通过登录 GitHub 账号来使用这个同步工具。

同步的详细操作，下一段会讲。

另外，北京时间的[2020年8月14日](https://zhuanlan.zhihu.com/p/184868336)，微软发布 Visual Studio Code 1.48 稳定版。此版本**原生**支持用户同步 VS Code的配置，只需要登录微软账号或者 GitHub账号即可。

#### vscode-syncing

- 地址：<https://github.com/nonoroazoro/vscode-syncing>

- 作用：多台设备之间，同步 VS Code 配置。

#### minapp：小程序支持

小程序开发必备插件。




#### Search node_modules

`node_modules`模块里面的文件夹和模块实在是太多了，根本不好找。好在安装 `Search node_modules` 这个插件后，输入快捷键「Cmd + Shift + P」，然后输入 `node_modules`，在弹出的选项中选择 `Search node_modules`，即可搜索 node_modules 里的模块。

![](http://img.smyhvae.com/20200618_2100.png)





#### RemoteHub

不要惊讶，RemoteHub 和 GitLens 是同一个作者开发出来的。

`RemoteHub`插件的作用是：可以在本地查看 GitHub 网站上的代码，而不需要将代码下载到本地。

![](http://img.smyhvae.com/20190418_1937.png)

这个插件目前使用的人还不多，赶紧安装起来尝尝鲜吧。

#### Live Share：实时编码分享

`Live Share`这个神奇的插件是由微软官方出品，它的作用是：**实时编码分享**。也就是说，它可以实现你和你的同伴一起写代码。这绝对就是**结对编程**的神器啊。

安装方式：

打开插件管理，搜索“live share”，安装。安装后重启 VS Code，在左侧会多出一个按钮：

![](http://img.smyhvae.com/20190418_2012.png)

上图中，点击红框部分，登录后就可以分享你的工作空间了。

![](http://img.smyhvae.com/20190418_2005.png)

#### Import Cost

在项目开发过程中，我们会引入很多 npm 包，有时候可能只用到了某个包里的一个方法，却引入了整个包，导致代码体积增大很多。`Import Cost`插件可以在代码中友好的提示我们，当前引入的包会增加多少体积，这很有助于帮我们优化代码的体积。

### 10、主题插件

给你的 VS Code 换个皮肤吧，免费的那种。

- Dracula Theme

- Material Theme

- Nebula Theme

- [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)

- One Monokai Theme

- Monokai Pro

- Ayu

- [Snazzy Plus](https://marketplace.visualstudio.com/items?itemName=akarlsten.vscode-snazzy-akarlsten)

- [Dainty](https://marketplace.visualstudio.com/items?itemName=alexanderte.dainty-vscode)

- `SynthWave '84`

- GitHub Plus Theme：白色主题

- Horizon Theme：红色主题



## 七、无缝切换：VS Code 配置云同步

我们可以将配置云同步，这样的话，当我们换个电脑时，即可将配置一键同步到本地，就不需要重新安装插件了，也不需要重新配置软件。

下面讲的两个同步方法，都可以，看你自己需要。方法1是 VS Code自带的同步功能，操作简单。方法2 需要安装插件，支持更多的自定义配置。

### 方法1：使用 VS Code 自带的同步功能

1、**配置同步**：

（1）在菜单栏选择「 Code --> 首选项 --> 打开设置同步」：

![](https://img.smyhvae.com/20211008_1713.png)



（2）选择需要同步的配置：

![](http://img.smyhvae.com/20211008_1716.png)



（3）通过Microsoft或者GitHub账号登录。 上图中，点击“登录并打开”，然后弹出如下界面：

![](http://img.smyhvae.com/20211008_1717.png)

上图中，使用  微软账号或者 GitHub账号登录：

![](https://img.smyhvae.com/20211008_1718.png)

（4）同步完成后，菜单栏会显示“首先项同步已打开”，最左侧也会多出一个同步图标，如下图所示：

![](https://img.smyhvae.com/20211008_1720.png)

2、**管理同步**：

（1）点击菜单栏「Code --> 首选项 --> 设置同步已打开」，会弹出如下界面，进行相应的同步管理即可：

![](https://img.smyhvae.com/20211008_1736.png)

（2）换另外一个电脑时，登录相同的账号，即可完成同步。

参考链接：

- [VS Code原生的配置同步功能——Settings Sync](https://blog.csdn.net/baidu_33340703/article/details/106967884)

### 方法2：使用插件 `settings-sync`

使用方法2，我们还可以把配置分享其他用户，也可以把其他用户的配置给自己用。

1、**配置同步**：（将自己本地的配置云同步到 GitHub）

（1）安装插件 `settings-sync`。

（2）安装完插件后，在插件里使用 GitHub 账号登录。

（3）登录后在 vscode 的界面中，可以选择一个别人的 gist；也可以忽略掉，然后创建一个属于自己的 gist。

（4）使用快捷键 「Command + Shift + P」，在弹出的命令框中输入 sync，并选择「更新/上传配置」，这样就可以把最新的配置上传到 GitHub。

2、**管理同步**：（换另外一个电脑时，从云端同步配置到本地）

（1）当我们换另外一台电脑时，可以先在 VS Code 中安装 `settings-sync` 插件。

（2）安装完插件后，在插件里使用 GitHub 账号登录。

（3）登录之后，插件的界面上，会自动出现之前的同步记录：

![](http://img.smyhvae.com/20200521_1530.png)

上图中，我们点击最新的那条记录，就可将云端的最新配置同步到本地：

![](http://img.smyhvae.com/20200521_1550.png)

如果你远程的配置没有成功同步到本地，那可能是网络的问题，此时，可以使用快捷键 「Command + Shift + P」，在弹出的命令框中输入 sync，并选择「下载配置」，多试几次。

**使用其他人的配置**：

如果我们想使用别人的配置，首先需要对方提供给你 gist。具体步骤如下：

（1）安装插件 `settings-sync`。

（2）使用快捷键 「Command + Shift + P」，在弹出的命令框中输入 sync，并选择「下载配置」

（3）在弹出的界面中，选择「Download Public Gist」，然后输入别人分享给你的 gist。注意，这一步不需要登录 GitHub 账号。

## 最后一段

如果你还有什么推荐的 VS Code 插件，欢迎留言。

大家完全不用担心这篇文章会过时，随着 VS Code 的版本更新和插件更新，本文也会随之更新。关于 VS Code 内容的后续更新，你可以关注我在 GitHub 上的前端入门项目，项目地址是：

> https://github.com/qianguyihao/Web

一个超级详细和真诚的前端入门项目。
## todo

- [issues 84](https://github.com/qianguyihao/Web/issues/84)

## 参考链接
### 2021年

- 中文版 Awesome VS Code：https://github.com/formulahendry/awesome-vscode-cn

### 2020年

- [VSCode 插件大全｜ VSCode 高级玩家之第二篇](https://juejin.im/post/5ea40c6751882573b219777d)

- <http://www.supuwoerc.xyz/tools/vscode/plugins.html>

- [如何让 VS Code 更好用 10 倍？这里有一份 VS Code 新手指南](https://zhuanlan.zhihu.com/p/99462672)

- [那些你应该考虑卸载的 VSCode 扩展](https://lyreal666.com/%E9%82%A3%E4%BA%9B%E4%BD%A0%E5%BA%94%E8%AF%A5%E8%80%83%E8%99%91%E5%8D%B8%E8%BD%BD%E7%9A%84-VSCode-%E6%89%A9%E5%B1%95/#more)

- [VS Code 折腾记 - (16) 推荐一波实用的插件集](https://juejin.im/post/5d74eb5c51882525017787d9)

- [VSCode 前端必备插件，有可能你装了却不知道如何使用？](https://juejin.im/post/5db66672f265da4d0e009aad)

- [能让你开发效率翻倍的 VSCode 插件配置（上）](https://juejin.im/post/5a08d1d6f265da430f31950e)

- [https://segmentfault.com/a/1190000012811886](https://segmentfault.com/a/1190000012811886)

- [「Vscode」打造类 sublime 的高颜值编辑器](https://idoubi.cc/2019/07/08/vscode-sublime-theme/)

- [Mac Vscode 快捷键](https://lsqy.tech/2020/03/14/20200314Mac-Vscode%E5%BF%AB%E6%8D%B7%E9%94%AE/)

- [使用 VSCode 的一些技巧](https://mp.weixin.qq.com/s?src=11&timestamp=1591581536&ver=2387&signature=i4xLZlLe1Gkl7OiBIhPO*VSeNB5lzFgTY-dgNW9E9ZbtIAv4bnJ1RdAAZdhvDw*cg-DmMcUa-V8NSUdV-tthmXZCq3ht4edCweq6v0QxKjnh8IuAxyyh5qymdRui*8iE&new=1)

---

本作品采用[知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议](https://creativecommons.org/licenses/by-nc-sa/4.0/)进行许可。

![](https://img.smyhvae.com/20210329_1930.png)

## 常用插件


- `Emmet`：快速生成HTML片段，比如输入ul>li*3可以快速生成：

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

[详细地址](https://atom.io/packages/emmet)，[Emmet教程](https://docs.emmet.io/cheat-sheet/)

- `Snippets`：快速生成 js 代码片段（用来处理代码片段的模板输出），[详细地址](https://atom.io/packages/snippets)

- `Tree View`：文件浏览器，[详细地址](https://atom.io/packages/tree-view)

- `file icons`：文件识别图标，使用这个插件会让你的编辑器显示对应的图标，[详细地址](https://atom.io/packages/file-icons)

- `language-javascript-jsx`：jsx语法高亮 ，[详细地址](https://atom.io/packages/language-javascript-jsx)

- `language-vue`：vue语法高亮，[详细地址](https://atom.io/packages/language-vue)

- `linter-eslint`：eslint插件，[详细地址](https://atom.io/packages/linter-eslint)

- `vue-snippets`：vue代码片段，[详细地址](https://atom.io/packages/vue-snippets)

- `pigments`：颜色显示器，[详细地址](https://atom.io/packages/pigments)

- `linter-eslint`：语法检查

- `Atom-Beautify`：代码格式化

参考链接：<https://github.com/cucygh/JDFinance/blob/master/issue.md>

## 插件无法安装的问题

### 方法一：设置代理

`C:\Users\smyhvae\.atom\.apm`目录下的.apmrc配置文件（没有就新建一个）,然后添加代理信息：

```
strict-ssl=false
https-proxy=http://127.0.0.1:1080/
http-proxy =http://127.0.0.1:1080/
```

这里的 http://127.0.0.1:1080，是我自己的 Shadowsocks 代理，你需要设置成自己的可用代理。
然后再执行：

```
apm install --check
```

应该可以测试成功，祝好运~~

参考链接：

- <https://atom-china.org/t/atom/984>

- <https://zhenyong.github.io/2016/08/03/starting-atom/>


## Markdown相关

### 在编辑器中预览

2018-06-JD日记.md

Packages -> Markdown Preview -> Toggle Preview

快捷键：Shift + Ctrl + M



### 参考链接：

- [使用Atom打造无懈可击的Markdown编辑器](http://www.cnblogs.com/fanzhidongyzby/p/6637084.html)





## 相关设置

### 显示缩进线

settings -->Editor --> Show Indent Guide

---
title: 03-网络抓包和代理工具：Whistle
---

<ArticleTopAd></ArticleTopAd>


## Whistle 官网

- Whistle 官网：<https://wproxy.org/whistle/>

- Whistle 的 GitHub：<https://github.com/avwo/whistle>


## Whistle 安装启动

### 1、Whistle 安装


（1）通过 npm 安装 Whistle


### 2、启动 whistle

```bash
w2 start
```

然后在浏览器输入`http://127.0.0.1:8899/` 即可打开代理配置的页面。


### 3、配置代理

**chrome浏览器配置代理**：

可参考官方文档。

**Firefox浏览器配置代理**：

![](https://img.smyhvae.com/20200420_1357.png)



### 4、安装证书并添加信任：

![](https://img.smyhvae.com/20200420_0922.png)





### 手机设置代理

连接好指定的wifi后，点击那个wifi里的设置，将「代理」那一项，设置为手动，然后输入ip（电脑上的ip）、端口号（8899）。然后就可以通过电脑上的whistle工具，查看手机的网页请求。

注意，要保证手机和电脑在同一个网络下。

另外，还需要在手机的浏览器，地址栏输入`rootca.pro`，给手机安装证书。



## 捕获和拦截https请求


whistle安装证书后，可以拦截 https 请求。但是，我现在又不想拦截https请求了，该怎么卸载证书呢？

我发现，证书无法卸载，正确的操作是：

![](http://img.smyhvae.com/20180426_1621.png)

上图中，把红框部分，去掉勾选，就不捕获https了。谢谢azh童鞋。


参考链接：

- [Android 手机如何设置http代理？](https://www.zhihu.com/question/21474174)

- [使用 Whistle 对 iOS HTTPS 进行抓包](http://zhuscat.com/2017/09/20/https-proxy-on-ios/)


## 移动端调试神器:eruda


> 手机连接代理时，如何看console.log的日志信息?

> 现在，代码里有console.log，如果是在电脑浏览器上看，可以直接在控制台查看console.log的内容。但是，如果手机连接代理，在手机上打开网页的话，要怎么查看console.log的内容呢？具体做法如下：

（1）在 whistle中，新建一个名叫`Eruda H5`的代理，代理中的内容是：

```
http://xxx.com htmlAppend://{eruda.html}
```

(2)新建一个values，里面的内容是：

```html
<script src="//cdn.bootcss.com/eruda/1.4.3/eruda.min.js"></script>
<script>
    eruda.init()
</script>
```


然后就OK了。




## GitHub的使用


### GitHub添加wiki

参考链接：


- <https://juejin.im/post/5a3216c8f265da43333e6b54>

### GitHub项目添加 license

参考链接：

- <https://blog.csdn.net/qq_35246620/article/details/77647234>



### GitHub 引用图片的另一种方式

参考链接：

- [关于markdown文件插入图片遇到的小问题和解决办法](https://www.cnblogs.com/cxint/p/7200164.html)



## 前言

`Emmet`可以极大的提高 html 和 css 的编写效率，它提供了一种非常简练的语法规则。

举个例子，我们在编辑器中输入缩写代码：`ul>li*6` ，然后按下 Tab 键，即可得到如下代码片段：

```html
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
```


## 如何在某个语言中打开 Emmet 支持

默认情况下，你可以直接在 html、haml、jade、slim、jsx、xml、xsl、css、scss、sass、less、stylus、handlebars、php 和 javascriptreact 中使用 Emmet 。

但对于其他语言，你也可以通过如下设置将其打开：

```json
"emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "vue-html": "html",
    "razor": "html",
    "plaintext": "jade"
}

```

上方代码的意思是，将某个 Emmet 默认不支持的语言，映射到某个 Emmet 支持的语言上。比如上面的设置里，我们把 vue-html 映射成了 html，那么当你在 vue-html 使用 Emmet 时，Emmet 就会把它当作 html 来处理了。


## Emmet 语法规则

语法规则：

```
ul>li*6
```


最终效果：

```html
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
```


---

语法规则：

```
p5

```



最终效果：

```
padding: 5px;
```





iconMoon.md



- <https://www.cnblogs.com/chinabin1993/p/8185398.html>

- <https://blog.csdn.net/web_harry/article/details/70310597>

- <https://blog.csdn.net/qq_37261367/article/details/80012320>




## 常见配置


**自动保存**：

```
 "files.autoSave": "onFocusChange"
```

参考链接：<https://blog.csdn.net/WestLonly/article/details/78048049>



**在新的窗口中打开文件**：

```json
"workbench.editor.enablePreview": false,
```

## 常见操作

### 如何查看代码结构

- 方法一：「Cmd + Shift + O」

- 方法二：安装插件`Code Outline`

参考链接：<https://www.zhihu.com/question/264045094>



### 在本地开启服务器

```bash
# 安装
npm install -g live-server

# 启动
live-server
```


参考链接：[Visual Studio Code + live-server编辑和浏览HTML网页](http://www.cnblogs.com/1zhk/p/5699379.html)


## 常用插件

方式一：打开VS Code，左侧有五个按钮，点击最下方的按钮，然后就可以开始安装相应的插件了。

方式二：在vscode中输入快捷键「ctrl+shift+P」，弹出指令窗口，输入`extension:install`，回车，左侧即打开扩展安装的界面。


### sftp：文件传输


输入快捷键「ctrl+shift+P」，弹出指令窗口，输入`sftp:config`，回车，当前工作工程的`.vscode`文件夹下就会自动生成一个`sftp.json`文件，我们需要在这个文件里配置的是：

- `host`：服务器的IP地址

- `username`：工作站自己的用户名

- `privateKeyPath`：存放在本地的已配置好的用于登录工作站的密钥文件（也可以是ppk文件）

- `remotePath`：工作站上与本地工程同步的文件夹路径，需要和本地工程文件根目录同名，且在使用sftp上传文件之前，要手动在工作站上mkdir生成这个根目录

- `ignore`：指定在使用sftp: sync to remote的时候忽略的文件及文件夹，注意每一行后面有逗号，最后一行没有逗号


举例如下：(注意，其中的注释不能保留)

```json
{
    "host": "",     //服务器ip
    "port": 22,     //端口，sftp模式是22
    "username": "", //用户名
    "password": "", //密码
    "protocol": "sftp", //模式
    "agent": null,
    "privateKeyPath": null,
    "passphrase": null,
    "passive": false,
    "interactiveAuth": false,
    "remotePath": "/root/node/build/",  //服务器上的文件地址
    "context": "./server/build",        //本地的文件地址

    "uploadOnSave": true,   //监听保存并上传
    "syncMode": "update",
    "watcher": {            //监听外部文件
        "files": false,     //外部文件的绝对路径
        "autoUpload": false,
        "autoDelete": false
    },
    "ignore": [             //忽略项
        "**/.vscode/**",
        "**/.git/**",
        "**/.DS_Store"
    ]
}
```


### Sass Formatter

Sass 文件格式化。


### Code Outline：显示代码结构


安装好插件「Code Outline」后，可以在左侧的资源管理器中，显示当前文件的代码结构：

![](http://img.smyhvae.com/20180420_0925.png)

参考链接：

- <https://www.zhihu.com/question/50273450>

- <http://itopic.org/vscode.html>

- <https://github.com/varHarrie/varharrie.github.io/issues/10>

### vscode-fileheader：添加顶部注释模板(签名)

（1）安装插件vscode -fileheader，并重启。

（2）在首选项-》设置-》中搜索fileheader，找到头部模板修改。

默认的快捷键是：「Ctrl + option + I」。

参考链接：

- <https://www.zhihu.com/question/62385647>


### Express

在本地开启Node服务器：

![](http://img.smyhvae.com/20180611_2230.png)

然后在浏览器的地址栏输入`http://localhost/` + 文件的相对路径，就可以通过服务器的形式打开这个文件。

### Copy Relative Path

> 这个插件很有用，使用频率很高。

复制文件的相对路径：（相对于根路径而言）

![](http://img.smyhvae.com/20180611_2235.png)


### open in browser

在浏览器中打开。


### Auto Rename Tag

适用于 JSX、Vue、HTML。在修改标签名时，能在你修改开始（结束）标签的时候修改对应的结束（开始）标签，帮你减少 50% 的击键。


###Project Manager

项目管理，让我们方便的在命令面板中切换项目文件夹，当然，你也可以直接打开包含多个项目的父级文件夹，但这样可能会让 VSCode 变慢。



### highlight-icemode：选中相同的代码时，让高亮显示更加明显【荐】

VSCode自带的高亮显示，实在是不够显眼。用插件支持一下吧。

所用了这个插件之后，VS Code自带的高亮就可以关掉了：

在用户设置里添加`"editor.selectionHighlight": false`即可。


参考链接：[vscode 选中后相同内容高亮插件推荐](https://blog.csdn.net/palmer_kai/article/details/79548164)


### highlight-words：全局高亮（跨文件多色彩）


参考链接：[Visual Studio Code全局高亮着色插件(跨文件多色彩)经验纪要](https://zhuanlan.zhihu.com/p/31163793)


### color-exchange：颜色格式转换【荐】


安装完插件后，在css中输入颜色，然后按`cmd + .`，就能进行颜色的格式转换。

20181013_1450.png

我在写这一段时，安装的人还不多，赶紧上车。



## Vue 相关的插件

### vetur：vue 文件的基本语法高亮

安装完 vetur 后还需要加上这样一段配置下：

```
"emmet.syntaxProfiles": {
  "vue-html": "html",
  "vue": "html"
}
```

参考链接：

- <https://www.clarencep.com/2017/03/18/edit-vue-file-via-vscode/>


- <https://github.com/varHarrie/varharrie.github.io/issues/10>



### 参考链接

- <https://www.jianshu.com/p/0724921285d4>

- <https://www.cnblogs.com/AmosLee94/p/8338013.html>




## 常用快捷键


| Win快捷键 |Mac快捷键| 作用 | 备注 |
|:-------------|:-------------|:-----|:-----|
| Shift + Alt + F |Shift + option + F| 代码格式化 |  |
| Ctrl + Shift + N | |在当前行上面增加一行并跳至该行  |   |
|  **Ctrl + Shift + D** | |复制当前行到下一行  |   |





### 如何同时打开多个窗口












## 问题

问题1

解决；You can kill the Microsoft.VSCode.Cpp.IntelliSense.Msvc process to save the file successfully. 也就是 IntelliSense 这个进程。




## 参考链接

- [能让你开发效率翻倍的 VSCode 插件配置（上）](https://zhuanlan.zhihu.com/p/30976584)


### 某网友的VS Code 插件截图

![](http://img.smyhvae.com/20180611_2255.png)







---
title: 01-认识Web和Web标准
publish: true
---

<ArticleTopAd></ArticleTopAd>



## Web、网页、浏览器

### Web

Web（World Wide Web）即全球广域网，也称为万维网。

我们常说的`Web端`就是网页端。

### 网页

**网页是构成网站的基本元素**。网页主要由文字、图像和超链接等元素构成。当然，除了这些元素，网页中还可以包含音频、视频以及Flash等。

我们在浏览器上输入网址后，打开的任何一个页面，都是属于网页。

### 浏览器

浏览器是网页运行的平台，常见的浏览器有谷歌（Chrome）、Safari、火狐（Firefox）、IE、Edge、Opera等。

关于浏览器的详细介绍，可以看下一篇文章：《浏览器的介绍》。

## Web标准


### W3C组织

**W3C**：World Wide Web Consortium，万维网联盟组织，用来制定web标准的机构（组织）。

W3C 万维网联盟是国际最著名的标准化组织。1994年成立后，至今已发布近百项相关万维网的标准，对万维网发展做出了杰出的贡献。

W3C 组织就类似于现实世界中的联合国。

为什么要遵循WEB标准呢？因为很多浏览器的浏览器内核不同，导致页面解析出来的效果可能会有差异，给开发者增加无谓的工作量。因此需要指定统一的标准。

### Web 标准

**Web标准**：制作网页要遵循的规范。

Web标准不是某一个标准，而是由W3C组织和其他标准化组织制定的一系列标准的集合。

**1、Web标准包括三个方面**：

- 结构标准（HTML）：用于对网页元素进行整理和分类。

- 表现标准（CSS）：用于设置网页元素的版式、颜色、大小等外观样式。

- 行为标准（JS）：用于定义网页的交互和行为。

根据上面的Web标准，可以将 Web前端分为三层，如下。

**2、Web前端分三层**：

- HTML（HyperText Markup Language）：超文本标记语言。从**语义**的角度描述页面的**结构**。相当于人的身体组织结构。
- CSS（Cascading Style Sheets）：层叠样式表。从**审美**的角度美化页面的**样式**。相当于人的衣服和打扮。
- JS：JavaScript。从**交互**的角度描述页面的**行为**。相当于人的动作，让人有生命力。

**3、打个比方**：（拿黄渤举例）

HTML 相当于人的身体组织结构：

![](http://img.smyhvae.com/20200322_1250.png)

CSS 相当于人的衣服和打扮：

![](http://img.smyhvae.com/20200322_1251.png)

JS 相当于人的行为：

![](http://img.smyhvae.com/20200322_2220.gif)


---

本作品采用[知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议](https://creativecommons.org/licenses/by-nc-sa/4.0/)进行许可。

![](https://img.smyhvae.com/20210329_1930.png)

## 参考链接

- [iTerm2 + Oh My Zsh 打造舒适终端体验](https://github.com/sirius1024/iterm2-with-oh-my-zsh)

- [安装oh my zsh失败：curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused](https://blog.csdn.net/huangpin815/article/details/105606135)




## WebStorm的简单设置

#### 1、主题修改：

可能大家会觉得软件的界面不太好看，我们可以换一下主题。选择菜单栏“File--settings--appearance--theme”，主题选择 Dracula：

![](http://img.smyhvae.com/20180118_1600.png)

#### 2、导入第三方主题：

系统提供的两种主题可能都不太好看，我们可以进入网站<http://color-themes.com/>来获取第三方主题，这里推荐两个主题，大家二选一即可：

- [Sublime](https://github.com/y3sh/Intellij-Colors-Sublime-Monokai)

- [Material](https://github.com/ChrisRM/material-theme-jetbrains)

![](http://img.smyhvae.com/20180118_1636.png)

![](http://img.smyhvae.com/20180118_1637.png)

上图中，在网站<http://color-themes.com/>中将主题下载之后，是一个jar包。那怎么导入到WebStorm呢？

别着急，回到WebStorm，选择菜单栏“ File-Import Settings”，将下载好的jar包导入即可。



#### 3、代码字体修改：

选择菜单栏“File--settings--Editor--Font”：

![](http://img.smyhvae.com/20180118_1627.png)

上图中，点击红框部分，然后弹出如下界面：

![](http://img.smyhvae.com/20180118_1628.png)

我们在上图中修改代码的字体。

修改完之后发现 WebStorm 的一些默认字体（比如侧边栏的工程目录的字体）并没有发生变化，如果想改的话，也可以改（我个人一般是不改的）。



#### 4、关闭更新：

如下图所示：

![](http://img.smyhvae.com/20180118_1646.png)

#### 5、快捷键习惯的修改：




#### 7、配置代码的自动提示：



#### 14、修改文件编码为UTF-8：

WebStorm 2017.3.3版本的默认编码方式是 GBK，我们还是统一设置为UTF-8吧，不要坑队友哦：

![](http://img.smyhvae.com/20180124_1856.png)


### 新建一个空的项目

配置完成后，可以开始新建一个项目文件夹（站点），项目通常包含如下内容：

- 首页：index.html

- 样式：css文件夹
	- index.css
	- 相同样式：全局样式、公共样式。起名为：base.css（基本样式）或者 global.css (全局样式)

- 图片：images文件夹、文件

- 特效：js文件夹、js文件

**步骤如下：**

（1）新建一个空的项目：
![](http://img.smyhvae.com/20180118_1720.png)

（2）然后新建一个html文件：

![](http://img.smyhvae.com/20180118_1602.png)

（3）新建一个空的文件夹，命名为`css`：

![](http://img.smyhvae.com/20180118_1725.png)

然后在这个css文件夹中，新建样式表：（比如index.css\base.css）

![](http://img.smyhvae.com/20180118_1730.png)

（4）最后新建一个images文件夹，用于存放土片。这样的话，一个基本的项目结构就搭建好了：

![](http://img.smyhvae.com/20180118_1733.png)

接下来，开始运用起你们的前端知识吧。



（5）如果要新建JS文件的话，操作如下：

![](http://img.smyhvae.com/20180124_1859.png)



## 使用技巧



#### 多光标编辑

我们可以按住鼠标不松手，选中多个光标，然后同时编辑：


#### 随时在浏览器中看代码效果

20180118_1658.png

如上图所示，我们可以点击右上角的浏览器图标，在各个浏览器中看效果。


#### 实时查看颜色

写代码时如果想输入颜色，会自动提示颜色的预览。

![](http://img.smyhvae.com/20180118_1702.png)

点击最左侧的颜色预览，还能弹出调色板：

![](http://img.smyhvae.com/20180118_1710.gif)






## 代码的自动补齐


（1）在html文档中，输入`div*10`，按tab键后，弹出的效果如下：

```html
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
```



（2）在html文档中，输入如下部分：

```
.search-logo+.search-input+.search-car+.search-moreA
```

按tab键后，弹出的效果如下：

```html
        <div class="search-logo"></div>
        <div class="search-input"></div>
        <div class="search-car"></div>
        <div class="search-moreA"></div>
```

你看，京东的搜索框就包含了这几个div：

20180122_1045.png

（3）方法的注释：

方法写完之后（注意，一定要先写完整），我们在方法的前面输入`/**`，然后回车，会发现，注释的格式会自动补齐。

比如：

```javascript
/**
 * 功能：给定元素查找他的第一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstNode(ele){
    var node = ele.firstElementChild || ele.firstChild;
    return node;
}
```


## 常用快捷键

#### 标签环绕

输入一段字符后，按住`Ctrl + Alt + T`，可以用标签将这段字符环绕：

![](http://img.smyhvae.com/20180118_1719.gif)



#### 选中正行中的文本

比如下面这行：

```
    text-align: center;  /*让 li 里面的文本水平方向居中*/

```

如果直接按 【ctrl+C】的话，复制的是整行的内容，把前面的空格也包含进去了。如果不想复制空格，有另外一个办法：将光标放在行尾，然后按住【shift+home】，就能选中你想要的内容了。












### 新建文件时快速生成Html

**安装如下插件：**

- FileHeader：自动创建文件开头模板，并且会根据最后的保存时间修改更新时间。[官网链接](https://github.com/shiyanhui/FileHeader)。
- CSS Format：css格式化。
- Emmet：它能够让你在编辑器中书写CSS和HTML的缩写并且动态地拓展它，是一个能大幅度提高前端开发效率的一个工具。这个软件的安装过程比较久。[官网教程](http://docs.emmet.io/)。

**开始使用：**

新建文件，输入`html:5`，按[Ctrl + E] 或者 Tab 键，


参考链接：[Sublime Text 新建文件快速生成Html【头部信息】和【代码补全】、【汉化】](http://www.jianshu.com/p/f44e91bf9dfb)



## 常用插件

### SublimeCodeIntel：JavaScript代码自动提示（不好用）

安装完成后，通过路径Perferences->Package Settings->SublimeCodeIntel->Setting - Defalut打开配置文件。

将

```
"codeintel_selected_catalogs": ["jQuery"]

```

改为：

```
"codeintel_selected_catalogs": ["JavaScript"]
```

保存后重启软件。

参考链接：[#](http://blog.csdn.net/hehexiaoxia/article/details/54134756)


### javascript complet：JavaScript代码自动提示


- [官网链接](https://packagecontrol.io/packages/JavaScript%20Completions)

- [GitHub链接](https://github.com/pichillilorenzo/JavaScript-Completions)

在google上搜关键字"sublime javascript complete"找到的。另外还搜到一个[SublimeAllAutocomp lete](https://github.com/alienhard/SublimeAllAutocomplete)


### JsFormat：JS代码格式化


快捷键是：选中JS代码，然后按ctrl+alt+f。

或者，先用快捷键打开命令面板 “ctrl + shift + p”, 再输入 “Format: Javascript” 就可以使用格式化命令


### Sublime Server

我们如果右键在浏览器中打开html网页，其实是以**文件路径**的方式打开的，导致很多api无法操作。最好的办法是：将html在服务器上打开。

我们如果安装 `Sublime Server`，就可以让网页在本地的服务器上打开。

安装成功之后，使用步骤如下：

（1）选择菜单栏"Tools --> SublimeServer --> Start SublimeServer"启动服务器。

（2）在html文档里，右键选择 "View in SublimeServer"。

如果想关闭服务器，直接把Sublime Text 整个软件关掉就好。其他的关闭方式容易导致软件卡死。




## 代码快速生成


（1）`>`符号的技巧：


输入`ul>li*9`，然后按tab键，生成的代码如下；（符号`>`是包含的关系）

```html
        <div>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
        </div>
    </div>
```






## sublime text 快捷键

| Win快捷键 | Mac快捷键 |作用 | 备注 |
|:-------------|:-------------|:-----|:-----|
|html:5+tab||html结构代码||
|tab||补全标签代码||
|tab|补全标签代码| |比如，在html文件中输入`div`，然后	按住tab键后，会自动生成`<div></div>`。||
|  **Ctrl + Shift + D** | Cmd + Shift + D|复制当前行到下一行  |   |
|  Ctrl+Shift+K ||  快速删除整行 |   |
|Ctrl+鼠标左键单击||集体输入||
|Ctrl+H|Option+Cmd+F|查找替换|||
| Ctrl+/  ||  注释单行 |   |
| Ctrl+Shift+/  || 注释多行  |   |
|Ctrl+L| | 快速选中整行，继续操作则继续选择下一行，效果和 `Shift + ↓` 效果一样| |
|**Ctrl+Shift+L**| | 先选中多行，再按下快捷键，会在每行行尾插入光标，即可同时编辑这些行| 经常与上一个快捷键结合起来使用 |
|**Ctrl + Shift +【↑/↓**| Ctrl + Cmd +↑/↓ | 移动当前行 | |
|F11||全屏||




## 推荐阅读


- [Sublime Text使用技巧](https://github.com/smyhvae/tools/blob/master/01-%E4%B8%AA%E4%BA%BA%E6%95%B4%E7%90%86/Sublime%20Text%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7.md)

我自己整理的。


## 参考链接

- [像 Sublime Text 一样使用 Chrome DevTools](https://chinagdg.org/2015/12/%E5%83%8F-sublime-text-%E4%B8%80%E6%A0%B7%E4%BD%BF%E7%94%A8-chrome-devtools/)



---
title: 02-浏览器的介绍
publish: true
---

<ArticleTopAd></ArticleTopAd>



## 常见的浏览器

浏览器是网页运行的平台，常见的浏览器有谷歌（Chrome）、Safari、火狐（Firefox）、IE、Edge、Opera等。如下图所示：

![](http://img.smyhvae.com/20191204_1900.png)

我们重点需要学习的是 Chrome 浏览器。

## 浏览器的市场占有份额

浏览器的市场占有份额：<https://tongji.baidu.com/research/site?source=index#browser>

![](http://img.smyhvae.com/20200322_1058.png)

上面这张图的统计时间是2020年2月。

## 浏览器的组成

浏览器分成两部分：

- 1、渲染引擎（即：浏览器内核）

- 2、JS 引擎

### 1、渲染引擎（浏览器内核）

浏览器所采用的「渲染引擎」也称之为「浏览器内核」，用来解析 HTML与CSS。渲染引擎决定了浏览器如何显示网页的内容以及页面的格式信息。

**渲染引擎是浏览器兼容性问题出现的根本原因。**

渲染引擎的英文叫做 Rendering Engine。通俗来说，它的作用就是：读取网页内容，计算网页的显示方式并显示在页面上。

常见浏览器的内核如下：

|浏览器 | 内核|
|:-------------:|:-------------:|
| chrome | Blink  |
| 欧鹏  | Blink  |
|360安全浏览器| Blink|
|360极速浏览器| Blink|
|Safari|Webkit|
|Firefox 火狐|Gecko|
|IE| Trident |

备注：360的浏览器，以前使用的IE浏览器的Trident内核，但是现在已经改为使用 chrome 浏览器的 Blink内核。

另外，移动端的浏览器内核是什么？大家可以自行查阅资料。


### 2、JS 引擎

也称为 JS 解释器。 用来解析网页中的JavaScript代码，对其处理后再运行。

浏览器本身并不会执行JS代码，而是通过内置 JavaScript 引擎(解释器) 来执行 JS 代码 。JS 引擎执行代码时会逐行解释每一句源码（转换为机器语言），然后由计算机去执行。所以 JavaScript 语言归为脚本语言，会逐行解释执行。

常见浏览器的 JS 引擎如下：

|浏览器 | JS 引擎|
|:-------------:|:-------------|
|chrome / 欧鹏   | V8   |
|Safari|Nitro|
|Firefox 火狐|SpiderMonkey（1.0-3.0）/ TraceMonkey（3.5-3.6）/ JaegerMonkey（4.0-）|
|Opera|Linear A（4.0-6.1）/ Linear B（7.0-9.2）/ Futhark（9.5-10.2）/ Carakan（10.5-）|
|IE|Trident |

参考链接：

- [主流浏览器内核及JS引擎](https://juejin.im/post/5ada727c518825670b33a584)

## 浏览器工作原理

> 这一小段有些深入，小白可以暂时跳过，以后学习JS的时候再回来看。

浏览器主要由下面这个七个部分组成：

![](http://img.smyhvae.com/20180124_1700.png)

1、User Interface（UI界面）：包括地址栏、前进/后退按钮、书签菜单等。也就是浏览器主窗口之外的其他部分。

2、Browser engine （浏览器引擎）：用来查询和操作渲染引擎。是UI界面和渲染引擎之间的**桥梁**。

3、Rendering engine（渲染引擎）：用于解析HTML和CSS，并将解析后的内容显示在浏览器上。

4、Networking （网络模块）：用于发送网络请求。

5、JavaScript Interpreter（JavaScript解析器）：用于解析和执行 JavaScript 代码。

6、UI Backend（UI后端）：用于绘制组合框、弹窗等窗口小组件。它会调用操作系统的UI方法。

7、Data Persistence（数据存储模块）：比如数据存储  cookie、HTML5中的localStorage、sessionStorage。

参考链接：（关于浏览器的工作管理，下面这篇文章，是精品中的精品，是必须要知道的）

- 英文版：[How Browsers Work: Behind the scenes of modern web browsers](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)

- 中文版：[浏览器的工作原理：新式网络浏览器幕后揭秘](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)

---

本作品采用[知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议](https://creativecommons.org/licenses/by-nc-sa/4.0/)进行许可。

![](https://img.smyhvae.com/20210329_1930.png)

---
title: 03-初识HTML
publish: true
---

<ArticleTopAd></ArticleTopAd>



## 编辑器相关

前端开发的编辑器软件，我首先推荐 VS Code，其次推荐Sublime Text。

有人说 WebStorm 也不错？但真实情况是，自从VS Code 问世之后，用 WebStorm 的人越来越少了。

PS：文件的后缀名不能决定文件格式，只能决定打开文件打开的方式。

### VS Code 的使用

详情请移步至：[第一次使用VS Code时你应该知道的一切配置](https://github.com/qianguyihao/Web/blob/master/00-%E5%89%8D%E7%AB%AF%E5%B7%A5%E5%85%B7/01-VS%20Code%E7%9A%84%E4%BD%BF%E7%94%A8.md)

### Sublime Text 的使用

详情请移步至：[Sublime Text使用技巧](https://github.com/qianguyihao/Mac/blob/master/03-%E5%85%A8%E5%B9%B3%E5%8F%B0%E8%BD%AF%E4%BB%B6/Sublime%20Text%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7.md)

## HTML的概述

### HTML的概念

**HTML** 全称为 HyperText Markup Language，译为<font color=#0000ff>**超文本标记语言**</font>。

HTML 不是一种编程语言，是一种描述性的**标记语言**。

**作用**：HTML是负责描述文档**语义**的语言。

### 概念：超文本

所谓的超文本，有两层含义：

（1）图片、音频、视频、动画、多媒体等内容，成为超文本，因为它们超出了文本的限制。

（2）不仅如此，它还可以从一个文件跳转到另一个文件，与世界各地主机的文件进行连接。即：超级链接文本。

### 概念：标记语言

HTML 不是一种编程语言，是一种描述性的**标记语言**。这主要有两层含义：

（1）**标记语言是一套标记标签**。比如：标签`<a>`表示超链接、标签`<img>`表示图片、标签`<h1>`表示一级标题等等，它们都是属于 HTML 标签。

说的通俗一点就是：网页是由网页元素组成的，这些元素是由 HTML 标签描述出来，然后通过浏览器解析，就可以显示给用户看了。

（2）编程语言是有编译过程的，而标记语言没有编译过程，HTML标签是直接由浏览器解析执行。

### HTML是负责描述文档语义的语言

HTML 格式的文件是一个纯本文文件（就是用txt文件改名而成），用一些标签来描述语义，这些标签在浏览器页面上是无法直观看到的，所以称之为“超文本标记语言”。

接下来，我们需要学习 HTML 中的很多“标签对儿”，这些“标签对儿”能够给文本不同的语义。

比如，面试的时候问你，`<h1>` 标签有什么作用？

- 正确答案：给文本增加主标题的语义。
- 错误答案：给文字加粗、加黑、变大。

关乎“语义”的更深刻理解，等接下来我们学习了各种标签，就明白了。

## HTML的历史

![html中标签发展趋势](http://img.smyhvae.com/20151001_1001.png)

其中，我们专门来对XHTML做一个介绍。

**XHTML介绍：**
XHTML：Extensible Hypertext Markup Language，可扩展超文本标注语言。
XHTML的主要目的是为了<font color="blue">**取代HTML**</font>，也可以理解为HTML的升级版。
HTML的标记书写很不规范，会造成其它的设备(ipad、手机、电视等)无法正常显示。
XHTML与HTML4.0的标记基本上一样。
XHTML是<font color="blue">**严格的、纯净的**</font>HTML。

我们稍后将对XHTML的编写规范进行介绍。

## HTML的专有名词

- 网页 ：由各种标记组成的一个页面就叫网页。
- 主页(首页) : 一个网站的起始页面或者导航页面。
- 标记：  比如`<p>`称为开始标记 ，`</p>`称为结束标记，也叫标签。每个标签都规定好了特殊的含义。
- 元素：比如`<p>内容</p>`称为元素.
- 属性：给每一个标签所做的辅助信息。
- XHTML：符合XML语法标准的HTML。
- DHTML：dynamic，动态的。`javascript + css + html`合起来的页面就是一个 DHTML。
- HTTP：超文本传输协议。用来规定客户端浏览器和服务端交互时数据的一个格式。SMTP：邮件传输协议，FTP：文件传输协议。

## 书写第一个 HTML 页面

我们打开 VS Code 软件，新建一个文件，名叫`test.html`（注意，文件名是`test`，后缀名是`html`），保存到本地。

紧接着，在文件里，输入`html:5`，然后按一下键盘上的`Tab`键，就可以自动生成如下内容：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

上面的内容，就是 html 页面的骨架。我们在此基础之上，新增几个标签，完整代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>我是三级标题</h3>
    <img src="" alt="">
    <a href="https://www.jd.com">我是超链接，可以点击一下</a>
</body>
</html>

```

标签写完之后，我们用 chrome 浏览器打开上面这个`test.html`文件，看看页面效果：

到此，第一个简单的 HTML 页面就写完了。是不是很有成就感？


## HTML结构详解

HTML标签通常是成对出现的（<font color="blue">**双边标记**</font>），比如 `<div>` 和 `</div>`；也有少部分单标签（<font color="blue">**单边标记**</font>），如：`<br />`、`<hr />`和`<img src="images/1.jpg" />`等。

属性与标记之间、各属性之间需要以空格隔开。属性值以双引号括起来。


#### html骨架标签分类

| 标签名              |   定义   | 说明                             |
| ---------------- | :----: | :----------------------------- |
| `<html></html>`    | HTML标签 | 页面中最大的标签，我们成为根标签             |
| `<head></head>`    | 文档的头部  | 注意在head标签中我们必须要设置的标签是title     |
| `<title></title>` | 文档的标题  | 让页面拥有一个属于自己的网页标题               |
| `<body></body>`    | 文档的主体  | 元素包含文档的所有内容，页面内容 基本都是放到body里面的 |


### 快速生成 html 的骨架

**方式1**：在 VS Code 中新建 html 文件，输入`html:5`，按 `Tab`键后，自动生成的代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Document</title>
</head>
<body>

</body>
</html>

```

**方式2**：在Sublime Text中安装`Emmet`插件。新建html文件，输入`html:5`，按`Tab`键后，自动生成的代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

</body>
</html>
```

**方式3**：在Sublime Text中安装`Emmet`插件。新建html文件，输入`html:xt`，按`Tab`键后，自动生成的代码如下：

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>Document</title>
</head>
<body>

</body>
</html>
```

上面的方式2和方式3中，我们会发现，第一行的内容有些不太一样，这就是我们接下来要讲的**文档声明头**。





### 1、文档声明头

任何一个标准的HTML页面，第一行一定是一个以`<!DOCTYPE ……>`开头的语句。这一行，就是文档声明头，即 DocType Declaration，简称DTD。

**DTD可告知浏览器文档使用哪种 HTML 或 XHTML 规范**。

#### HTML4.01有哪些规范呢？

**HTML4.01**这个版本是IE6开始兼容的。**HTML5是IE9开始兼容的**。如今，手机、移动端的网页，就可以使用HTML5了，因为其兼容性更高。

说个题外话，html1 至 html3 是美国军方以及高等研究所用的，并未对外公开。

HTML4.01里面有两大种规范，每大种规范里面又各有3种小规范。所以一共6种规范（见下图）。

HTML4.01里面规定了**普通**和**XHTML**两大种规范。HTML觉得自己有一些规定不严谨，比如，标签是否可以用大写字母呢？`<H1></H1>`所以，HTML就觉得，把一些规范严格的标准，又制定了一个XHTML1.0。在XHTML中的字母X，表示“严格的”。

总结一下，HTML4.01一共有6种DTD。说白了，HTML的第一行语句一共有6种情况：

![](http://img.smyhvae.com/20170629_1600.png)

下面对上图中的三种小规范进行解释：

**strict**：

表示“严格的”，这种模式里面的要求更为严格。这种严格体现在哪里？有一些标签不能使用。
比如，u标签，就是给一个本文加下划线，但是这和HTML的本质有冲突，因为HTML最好是只负责语义，不要负责样式，而u这个下划线是样式。所以，在strict中是不能使用u标签的。

那怎么给文本增加下划线呢？今后将使用css属性来解决。

XHTML1.0更为严格，因为这个体系本身规定比如标签必须是小写字母、必须严格闭合标签、必须使用引号引起属性等等。

**Transitional**：表示“普通的”，这种模式就是没有一些别的规范。

**Frameset**：表示“框架”，在框架的页面使用。

在sublime输入的html:xt，x表示XHTML，t表示transitional。

在HTML5中极大的简化了DTD，也就是说HTML5中就没有XHTML了。HTML5的DTD（文档声明头）如下：

```
<!DOCTYPE html>
```

### 2、页面语言 `lang`

下面这行标签，用于指定页面的语言类型：

```html
<html lang="en">
```

最常见的语言类型有两种：

- en：定义页面语言为英语。

- zh-CN：定义页面语言为中文。

### 3、头标签 `head`

#### html5 的比较完整的骨架：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<meta name="Author" content="">
    <meta name="Keywords" content="厉害很厉害" />
    <meta name="Description" content="网易是中国领先的互联网技术公司，为用户提供免费邮箱、游戏、搜索引擎服务，开设新闻、娱乐、体育等30多个内容频道，及博客、视频、论坛等互动交流，网聚人的力量。" />
    <title>Document</title>
</head>
<body>

</body>
</html>
```

面试题：

- 问：网页的head标签里面，表示的是页面的配置，有什么配置？
- 答：字符集、关键词、页面描述、页面标题、IE适配、视口、iPhone小图标等等。

头标签内部的常见标签如下：

 - `<title>`：指定整个网页的标题，在浏览器最上方显示。
 - `<base>`：为页面上的所有链接规定默认地址或默认目标。
 - `<meta>`：提供有关页面的基本信息
 - `<body>`：用于定义HTML文档所要显示的内容，也称为主体标签。我们所写的代码必须放在此标签內。
 - `<link>`：定义文档与外部资源的关系。

**meta 标签**：

meta表示“元”。“元”配置，就是表示基本的配置项目。

常见的几种 meta 标签如下：

（1）字符集 charset：

```html
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
```

字符集用meta标签中的`charset`定义，charset就是character set（即“字符集”），即**网页的编码方式**。

**字符集**(Character set)是多个字符的集合。计算机要准确的处理各种字符集文字，需要进行字符编码，以便计算机能够识别和存储各种文字。

上面这行代码非常关键， 是必须要写的代码，否则可能导致乱码。比如你保存的时候，meta写的和声明的不匹配，那么浏览器就是乱码。

utf-8是目前最常用的字符集编码方式，常用的字符集编码方式还有gbk和gb2312等。关于“编码方式”，我们在下一段会详细介绍。

（2）视口 viewport：

```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

`width=device-width` ：表示视口宽度等于屏幕宽度。

viewport 这个知识点，初学者还比较难理解，以后学 Web 移动端的时候会用到。

（3）定义“关键词”：

举例如下：

```html
<meta name="Keywords" content="网易,邮箱,游戏,新闻,体育,娱乐,女性,亚运,论坛,短信" />
```

这些关键词，就是告诉搜索引擎，这个网页是干嘛的，能够提高搜索命中率。让别人能够找到你，搜索到你。

（4）定义“页面描述”：

meta除了可以设置字符集，还可以设置关键字和页面描述。

只要设置Description页面描述，那么百度搜索结果，就能够显示这些语句，这个技术叫做**SEO**（search engine optimization，搜索引擎优化）。

设置页面描述的举例：

```html
<meta name="Description" content="网易是中国领先的互联网技术公司，为用户提供免费邮箱、游戏、搜索引擎服务，开设新闻、娱乐、体育等30多个内容频道，及博客、视频、论坛等互动交流，网聚人的力量。" />
```

效果如下：

![](http://img.smyhvae.com/20170629_1743.png)

上面的几种`<meta>`标签都不用记，但是另外还有一个`<meta>`标签是需要记住的：

```html
<meta http-equiv="refresh" content="3;http://www.baidu.com">
```
上面这个标签的意思是说，3秒之后，自动跳转到百度页面。


**title 标签**:

用于设置网页标题：

```html
	<title>网页的标题</title>
```
title标签也是有助于SEO搜索引擎优化的。

**base标签**：

```html
<base href="/">
```

base 标签用于指定基础的路径。指定之后，所有的 a 链接都是以这个路径为基准。

### 4、`<body>`标签

`<body>`标签的属性有：

 - `bgcolor`：设置整个网页的背景颜色。
 - `background`：设置整个网页的背景图片。
 - `text`：设置网页中的文本颜色。
 - `leftmargin`：网页的左边距。IE浏览器默认是8个像素。
 - `topmargin`：网页的上边距。
 - `rightmargin`：网页的右边距。
 - `bottommargin`：网页的下边距。

`<body>`标签另外还有一些属性，这里用个例子来解释：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_39.png)

上方代码中，当我们对`点我点我`这几个字使用超链时，`link`属性表示默认显示的颜色、`alink`属性表示鼠标点击但是还没有松开时的颜色、`vlink`属性表示点击完成之后显示的颜色。效果如下：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_05.gif)


## 计算机编码介绍

计算机，不能直接存储文字，存储的是编码。

计算机只能处理二进制的数据，其它数据，比如：0-9、a-z、A-Z，这些字符，我们可以定义一套规则来表示。假如：A用110表示，B用111表示等。

**ASCII码：**
美国发布的，用1个字节(8位二进制)来表示一个字符，共可以表示2^8=256个字符。
	美国的国家语言是英语，只要能表示0-9、a-z、A-Z、特殊符号。

**ANSI编码：**
**每个国家为了显示本国的语言，都对ASCII码进行了扩展**。用2个字节(16位二进制)来表示一个汉字，共可以表示2^16＝65536个汉字。例如：
中国的ANSI编码是GB2312编码(简体)，对6763汉字进行编码，含600多特殊字符。另外还有GBK(简体)。
日本的ANSI编码是JIS编码。
台湾的ANSI编码是BIG5编码（繁体）。

**GBK：**
对GB2312进行了扩展，用来显示罕见的、古汉语的汉字。现在已经收录了2.1万左右。并提供了1890个汉字码位。K的含义就是“扩展”。

**Unicode编码(统一编码)：**
用4个字节(32位二进制)来表示一个字符，想法不错，但效率太低。例如，字母A用ASCII表示的话一个字节就够，可用Unicode编码的话，得用4个字节表示，造成了空间的极大浪费。A的Unicode编码是0000 0000 0000 0000 0000 0000 0100 0000

**UTF-8(Unicode Transform Format)编码：**
根据字符的不同，选择其编码的长度。比如：一个字符A用1个字节表示，一个汉字用2个字节表示。

毫无疑问，开发中，都用**UTF-8**编码吧，准没错。

**中文能够使用的字符集两种：**

- 第一种：UTF-8。UTF-8是国际通用字库，里面涵盖了所有地球上所有人类的语言文字，比如阿拉伯文、汉语、鸟语……

- 第二种：GBK（对GB2312进行了扩展）。gb2312 是国标，是中国的字库，里面**仅**涵盖了汉字和一些常用外文，比如日文片假名，和常见的符号。

字库规模：  UTF-8（字很全） > gb2312（只有汉字）

**重点1：避免乱码**

我们用meta标签声明的当前这个html文档的字库，一定要和保存的文件编码类型一样，否则乱码（重点）。

拿 sublime编辑器举例，当我们不设置的时候，sublime默认类型就是UTF-8。而一旦更改为gb2312的时候，就一定要记得设置一下sublime的保存类型： `文件→ set File Encoding to → Chinese Simplified(GBK)`。VS Code 的道理一样。


**重点2：UTF-8和gb2312的比较**

保存大小：UTF-8（更臃肿、加载更慢） > gb2312 （更小巧，加载更快）

总结：
- UTF-8：字多，有各种国家的语言，但是保存尺寸大，文件臃肿；
- gb2312：字少，只用中文和少数外语和符号，但是尺寸小，文件小巧。


列出2个使用情形：

1） 你们公司是做日本动漫的，经常出现一些日语动漫的名字，网页要使用UTF-8。如果用gb2312将无法显示日语。
2） 你们公司就是中文网页，极度的追求网页的显示速度，要使用gb2312。如果使用UTF-8将每个汉字多一个byte，所以5000个汉字，多5kb。

我们亲测：
- qq网、网易、搜狐都是使用gb2312。这些公司，都追求显示速度。
- 新华网藏语频道，使用的是UTF-8，保证字符集的数量。

我们是怎么查看网页的编码方式的呢？在浏览器中打开网页，右键，选择“查看网页源代码”，找到meta标签中的charset属性即可。

那么，我们为什么可以查看网页的源代码呢？因为这个打开的html网页已经存到我的临时文件夹里了，临时文件夹里的html是纯文本文件，纯文本文件自然可以查看网页的源代码。

## HTML的规范

- HTML不区分大小写，但HTML的标签名、类名、标签属性、大部分属性值建议统一用小写。
- HTML页面的后缀名是html或者htm(有一些系统不支持后缀名长度超过3个字符，比如dos系统)

### 1、编写XHTML的规范：

（1）所有标记元素都要正确的嵌套，不能交叉嵌套。正确写法举例：`<h1><font></font></h1>`

（2）所有的标记都必须小写。

（3）所有的标签都必须闭合。

- 双标签：`<span></span>`

- 单标签：`<br>` 建议写成 `<br />`   `<hr>` 建议转成 `<hr />`，还有`<img src=“URL” />`

（4）所有的属性值必须加引号。`<font  color="red"></font>`

（5）所有的属性必须有值。`<hr noshade="noshade">`、`<input  type="radio" checked="checked" />`

（6）XHTML文档开头必须要有DTD文档类型定义。

### 2、HTML的基本语法特性

#### （1）HTML对换行不敏感，对tab不敏感

HTML只在乎标签的嵌套结构，嵌套的关系。谁嵌套了谁，谁被谁嵌套了，和换行、tab无关。换不换行、tab不tab，都不影响页面的结构。

也就是说，HTML不是依靠缩进来表示嵌套的，而是看标签的嵌套关系。但是，我们发现有良好的缩进，代码更易读。建议大家都正确缩进标签。

百度为了追求极致的显示速度，所有HTML标签都没有换行、都没有缩进（tab），HTML和换不换行无关，标签的层次依然清晰，只不过程序员不可读了。如下图所示：

![](http://img.smyhvae.com/20170629_2226.png)

#### （2）空白折叠现象

HTML中所有的**文字之间**，如果有空格、换行、tab都将被折叠为一个空格显示。

举例如下：

![](http://img.smyhvae.com/20170629_2230.jpg)

#### （3）标签要严格封闭

标签不封闭的结果是灾难性的。

标签不封闭的举例如下：

![](http://img.smyhvae.com/20170629_2245.jpg)


## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 04-HTML标签：排版标签
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 本文主要内容

排版标签：

- `<h1>`

- `<p>`

-  `<hr />`

- `<br />`

- `<div>`

- `<span>`

- `<center>`

- `<pre>`


下面来详细介绍一下排版标签。

## 标题标签

标题使用`<h1>`至`<h6>`标签进行定义。`<h1>`定义最大的标题，`<h6>`定义最小的标题。具有align属性，属性值可以是：left、center、right。

代码举例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<h1>H1：千古壹号，永不止步</h1>
	<h2>H3：千古壹号，永不止步</h2>
	<h3>H3：千古壹号，永不止步</h3>
	<h4>H4：千古壹号，永不止步</h4>
	<h5>H5：千古壹号，永不止步</h5>
	<h6>H6：千古壹号，永不止步</h6>
</body>
</html>

```

效果演示：

![](http://img.smyhvae.com/20200402_1050.png)

## HTML 注释

HTML 注释的格式如下：

```html
<!-- 我是 html 注释  -->
```

## 段落标签`<p>`

段落，是英语“paragraph“缩写。

**作用**：可以把 HTML 文档分割为若干段落。在网页中如果要把文字有条理地显示出来，离不开段落标签。就如同我们平常写文章一样，整个网页也可以分为若干个段落。

代码举例：

```html
<p>This is a paragraph</p>
<p>This is another paragraph</p>
```

属性：

- `align="属性值"`：对齐方式。属性值包括left center right。

属性举例：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html166440-1dcd2ad6e6353559.png)


HTML标签是分等级的，HTML将所有的标签分为两种：

- **文本级标签**：p、span、a、b、i、u、em。文本级标签里只能放**文字、图片、表单元素**。（a标签里不能放a和input）

- **容器级标签**：div、h系列、li、dt、dd。容器级标签里可以放置任何东西。

从学习p的第一天开始，就要牢牢记住：**p标签是一个文本级标签，p里面只能放文字、图片、表单元素**。其他的一律不能放。

错误写法：（尝试把 h 放到 p 里）

```html
	<p>
		我是一个小段落
		<h1>我是一级标题</h1>
	</p>
```

网页效果如下：

![](http://img.smyhvae.com/20170630_1102.png)

上图显示，浏览器不允许你这么做，我们使用Chrome的F12审查元素发现，浏览器自己把p封闭掉了，不让你去包裹h1。

PS：Chrome浏览器是HTML5支持度最好的浏览器。提供了非常好的开发工具，非常适合我们开发人员使用。审查元素功能的快捷键是F12。


## 水平线标签`<hr />`

> horizontal 单词的发音：[ˌhɒrɪˈzɒntl]。

水平分隔线（horizontal rule）可以在视觉上将文档分隔成各个部分。在网页中常常看到一些水平线将段落与段落之间隔开，使得文档结构清晰，层次分明。

代码举例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<p>自古情深留不住</p>
	<hr />
	<p>总是套路得人心</p>
</body>
</html>
```

运行效果：

![](http://img.smyhvae.com/20200401_1930.png)


属性介绍：
 - `align="属性值"`：设定线条置放位置。属性值可选择：left right center。
 - `size="2" `：设定线条粗细。以像素为单位，内定为2。
 - `width="500"`或`width="70%"`：设定线条长度。可以是绝对值（单位是像素）或相对值。如果设置为相对值的话，内定为100%。
 - `color="#0000FF"`：设置线条颜色。
 - `noshade`：不要阴影，即设定线条为平面显示。若没有这个属性则表明线条具阴影或立体。

属性效果演示：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_05.png)

## 换行标签`<br />`

如果希望某段文本强制换行显示，就需要使用换行标签。

```html
This <br/> is a para<br/>graph with line breaks
```
效果如下：

![](http://img.smyhvae.com/2015-10-01-cnblogs_html03.png)

## `<div>`和`<span>`标签

div和span是非常重要的标签，div的语义是division“分割”； span的语义就是span“范围、跨度”。想必你应该听说过“div + css”布局。

### div和span的介绍

- **div标签**：可以把标签中的内容分割为独立的区块。必须单独占据一行。

- **span标签**：和div的作用一致，但不换行。

代码举例：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_08.png)

div标签的属性：

- `align="属性值"`：设置块儿的位置。属性值可选择：left、right、 center。

### div和span的区别

`<span>`和`<div>`唯一的区别在于：`<span>`是不换行的，而`<div>`是换行的。

如果单独在网页中插入这两个元素，不会对页面产生任何的影响。这两个元素是专门为定义CSS样式而生的。或者说，DIV+CSS来实现各种样式。

div在浏览器中，默认是不会增加任何的效果的，但是语义变了，div中的所有元素是一个小区域。
div标签是一个**容器级**标签，里面什么都能放，甚至可以放div自己。

span也是表达“小区域、小跨度”的标签，但只是一个**文本级**的标签。
就是说，span里面只能放置文字、图片、表单元素。 span里面不能放p、h、ul、dl、ol、div。

span举例：

```html
<p>
	简介简介简介简介简介简介简介简介
	<span>
		<a href="">详细信息</a>
		<a href="">购买</a>
	</span>
</p>

```

div举例：

```html
<div class="header">
	<div class="logo"></div>
	<div class="nav"></div>
</div>
<div class="content">
	<div class="guanggao"></div>
	<div class="dongxi"></div>
</div>
<div class="footer"></div>
```

我们亲切地称这种模式叫做“**div+css**”：**div标签负责布局、结构、分块，css负责样式**。

## 内容居中标签 `<center>`

此时center代表是一个标签，而不是一个属性值了。只要是在这个标签里面的内容，都会居于浏览器的中间。
效果演示：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_06.png)

到了HTML5里面，center标签不建议使用，建议使用css布局来实现。

## 预定义（预格式化）标签`<pre>`

含义：将保留标签内部所有的空白字符(空格、换行符)，原封不动地输出结果（告诉浏览器不要忽略空格和空行）。

说明：真正排网页过程中，`<pre>`标签几乎用不着。
效果演示：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_07.png)


## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 05-HTML标签：字体标签和超链接
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 本文主要内容

字体标签： `<font>`、 `<b>`、 `<u>` 、`<sup>` 、`<sub>`

超链接 `<a>`

## 字体标签

### 特殊字符（转义字符）

- `&nbsp;`：空格	（non-breaking spacing，不断打空格）
- `&lt;`：小于号`<`（less than）
-  `&gt;`：大于号`>`（greater than）
- `&amp;`：符号`&`
- `&quot;`：双引号
- `&apos;`：单引号
- `&copy;`：版权`©`
- `&trade;`：商标`™`
-  `&#32464;`：文字`绐`。其实，`#32464`是汉字`绐`的unicode编码。


比如说，你想把`<p>`作为一个文本在页面上显示，直接写`<p>`是肯定不行的，因为这代表的是一个段落标签，所以这里需要用到**转义字符**。应该这么写：
```html
这是一个HTML语言的&lt;p&gt;标签
```
正确的效果如下：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_11.png)

错误的效果如下：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_12.png)

其实我们只要记住前三个符号就行了，其他的在需要的时候查一下就行了。而且，EditPlus软件中是可以直接点击这些符号进行选择的：

![Paste_Image.png](
http://img.smyhvae.com/2015-10-01-cnblogs_html_13.png)

来一张表格，方便需要的时候查询：

| 特殊字符 | 描述 |字符的代码 |
|:-------------|:-------------|:-----|
||空格符|`&nbsp;`|
|<|小于号|`&lt;`|
|> |大于号|`&gt;`|
|&|和号|`&amp;`|
|￥|人民币|`&yen;`|
|©|版权|`&copy;`|
|®|注册商标|`&reg;`|
|°|摄氏度|`&deg;`|
|±|正负号|`&plusmn;`|
|×|乘号|`&times;`|
|÷|除号|`&divide;`|
|²|平方2（上标2）|`&sup2;`|
|³|立方3（上标3）|`&sup3;`|

### 下划线、中划线、斜体

- `<u>`：下划线标记

- `<s>`或`<del>`：中划线标记（删除线）

- `<i>`或`<em>`：斜体标记

效果：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_15.png)

上面的这几个标签，常用于做一些小装饰、小图标。比如：

![](http://img.smyhvae.com/20180118_2340.png)

这张图中，我们通过查看京东网站的代码发现，箭头处的小图标都是用的标签`<i>`。



### 粗体标签`<b>`或`<strong>`（已废弃）

效果：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_14.png)





### 字体标签`<font>`（已废弃）

属性：

- `color="红色"`或`color="#ff00cc"`或`color="new rgb(0,0,255)"`：设置字体颜色。
	设置方式：单词 \  #ff00cc \   rgb(0,0,255)

- `size`：设置字体大小。 取值范围只能是：1至7。取值时，如果取值大于7那就按照7来算，如果取值小于1那就按照1来算。如果想要更大的字体，那就只能通过css样式来解决。

- `face="微软雅黑"`：设置字体类型。

举例：

```html
<font face="微软雅黑" color="#FF0000" size="10">vae</font>
```

效果：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_10.png)






### 上标`<sup>`   下标`<sub>`

上小标这两个标签容易混淆，怎么记呢？这样记：`b`的意思是`bottom：底部`
举例：
```html
O<sup>2</sup>    5<sub>3</sub>
```
效果：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_16.png)

## 三、超链接

超链接有三种形式，下面分别讲讲。

### 1、外部链接：链接到外部文件

举例：
```html
<a href="02页面.html">点击进入另外一个文件</a>
```

a是英语`anchor`“锚”的意思，就好像这个页面往另一个页面扔出了一个锚。是一个文本级的标签。

href（hypertext reference）：超文本地址。读作“喝瑞夫”，不要读作“喝夫”。

效果：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_17.png)

当然，我们也可以直接点进链接，访问一个网址。代码举例如下：

```html
<a href="http://www.baidu.com" target="_blank">点我点我</a>
```

### 2、锚链接

**锚链接**：给超链接起一个名字，作用是**在本页面或者其他页面的的不同位置进行跳转**。比如说，在网页底部有一个向上箭头，点击箭头后回到顶部，这个就可以利用锚链接。

首先我们要创建一个**锚点**，也就是说，使用`name`属性或者`id`属性给那个特定的位置起个名字。效果如下：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_18.png)

上图中解释：

第11行代码表示，顶部这个锚的名字叫做name1。
然后在底部设置超链接，点击时将回到顶部（此时，网页中的url的末尾也出现了`#name1`）。注意**上图中红框部分的`#`号不要忘记了**，表示跳到名为name1的特定位置，这是规定。如果少了`#`号，点击之后，就会跳到name1这个文件或者name1这个文件夹中去。

如果我们将上图中的第28行代码写成：

```html
<a href="a.html#name1">回到顶部</a>
```

那就表示，点击之后，跳转到`a.html`页面的`name1锚点`中去。

说明：name属性是HTML4.0以前使用的，id属性是HTML4.0后才开始使用。为了向前兼容，因此，name和id这两个属性都要写上，并且值是一样的。

### 3、邮件链接

代码举例：

```html
<a href="mailto:xxx@163.com">点击进入我的邮箱</a>
```

效果：点击之后，会弹出outlook，作用不大。

### 超链接的属性

- `href`：目标URL
- `title`：悬停文本。
- `name`：主要用于设置一个锚点的名称。
- `target`：告诉浏览器用什么方式来打开目标页面。`target`属性有以下几个值：
	- `_self`：在同一个网页中显示（默认值）
	- `_blank`：**在新的窗口中打开**。
	- `_parent`：在父窗口中显示
	- `_top`：在顶级窗口中显示


`title`属性举例：

```html
<a href="09_img.html" title="很好看哦">结婚照</a>
```

效果如下：

![](http://img.smyhvae.com/20170630_1415.png)

`target`属性举例：

```html
<a href="1.html" title="悬停文本" target="_blank">链接的内容</a>
```

blank就是“空白”的意思，就表示新建一个空白窗口。为啥有一个_ ，就是规定，无需解释。
也就是说，如果不写`target=”_blank”`那么就是在相同的标签页打开，如果写了`target=”_blank”`，就是在新的空白标签页中打开。

#### 备注1：分清楚img和a标签的各自的属性

区别如下：

```html
<img src="1.jpg" />
<a href="1.html"></a>
```
#### 备注2：a是一个文本级的标签

比如一个段落中的所有文字都能够被点击，那么应该是p包裹a：

```html
<p>
	<a href="">段落段落段落段落段落段落</a>
</p>
```

而不是a包裹p：

```html
<a href="">
	<p>
		段落段落段落段落段落段落
	</p>
</a>
```

a的语义要小于p，a就是可以当做文本来处理，所以p里面相当于放的就是纯文字。



## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 09-HTML5举例：简单的视频播放器
publish: true
---

<ArticleTopAd></ArticleTopAd>


我们采用 Bootstrap 网站的图标字体，作为播放器的按钮图标。

index.html的代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <!-- 引入字体图标的文件-->
    <link rel="stylesheet" href="css/font-awesome.min.css"/>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        /*多媒体标题*/
        figcaption{
            text-align: center;
            line-height: 150px;
            font-family: "Microsoft Yahei";
            font-size:24px;
        }

        /* 播放器*/
        .palyer{
            width: 720px;
            height: 360px;
            margin:10px auto;
            border: 1px solid #000;
            background: url(images/loading.gif) center no-repeat #000;
            background-size:auto 100%;
            position: relative;
            border-radius: 20px;

        }

        .palyer video{
            height:100%;
            display: block;
            margin:0 auto;
            /*display: none;*/
        }

        /* 控制条*/

        .controls{
            width: 700px;
            height:40px;
            background-color: rgba(255, 255, 0, 0.3);
            position: absolute;
            bottom:10px;
            left:10px;
            border-radius: 10px;
        }
        /*开关*/
        .switch{
            position: absolute;
            width: 20px;
            height: 20px;
            left:10px;
            top:10px;

            text-align: center;
            line-height: 20px;
            color:yellow;

        }
        /*进度条*/
        .progress{
            width: 432px;
            height: 10px;
            position: absolute;
            background-color: rgba(255,255,255,0.4);
            left:40px;
            top:15px;
            border-radius: 4px;
            overflow: hidden;
        }
        /* 当前进度*/
        .curr-progress{
            width: 50%;
            height: 10px;
            background-color: #fff;
        }
        /* 时间模块*/
        .time{
            width: 120px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            color:#fff;
            position: absolute;
            left:510px;
            top:10px;
            font-size:12px;

        }
        /*全屏*/
        .extend{
            position: absolute;
            width: 20px;
            height: 20px;

            right:20px;
            top:10px;

            text-align: center;
            line-height: 20px;
            color:yellow;
        }

    </style>
</head>
<body>
    <!-- 多媒体-->
    <figure>
        <!--  多媒体标题-->
        <figcaption>视频案例</figcaption>
        <div class="palyer">
            <video src="video/fun.mp4"></video>
            <!-- 控制条-->
            <div class="controls">
                <!-- 播放暂停-->
                <a href="#" class="switch  icon-play"></a>
                <div class="progress">
                    <!-- 当前进度-->
                    <div class="curr-progress"></div>
                </div>
                <!-- 时间-->
                <div class="time">
                    <span class="curr-time">00:00:00</span>/<span class="total-time">00:00:00</span>
                </div>
                <!-- 全屏-->
                <a href="#" class="extend  icon-resize-full"></a>
            </div>

        </div>
    </figure>

    <script>
        // 思路：
        /*
        * 1、点击按钮 实现播放暂停并且切换图标
        * 2、算出视频的总时显示出出来
        * 3、当视频播放的时候，进度条同步，当前时间同步
        * 4、点击实现全屏
        */

//        获取需要的标签
            var  video=document.querySelector('video');
//          播放按钮
            var  playBtn=document.querySelector('.switch');
//          当前进度条
            var  currProgress=document.querySelector('.curr-progress');
//          当前时间
            var  currTime=document.querySelector('.curr-time');
//          总时间
            var  totalTime=document.querySelector('.total-time');
//          全屏
            var extend=document.querySelector('.extend');

            var tTime=0;

//         1、点击按钮 实现播放暂停并且切换图标

           playBtn.onclick=function(){
//               如果视频播放 就暂停，如果暂停 就播放
               if(video.paused){
//                   播放
                   video.play();
                   //切换图标
                   this.classList.remove('icon-play');
                   this.classList.add('icon-pause');
               }else{
//                   暂停
                    video.pause();
//                   切换图标
                   this.classList.remove('icon-pause');
                   this.classList.add('icon-play');}
           }

//        2、算出视频的总时显示出出来
//        当时加载完成后的事件，视频能播放的时候
        video.oncanplay=function(){
//             获取视频总时长
            tTime=video.duration;
            console.log(tTime);

//          将总秒数 转换成 时分秒的格式：00：00:00
//            小时
            var h=Math.floor(tTime/3600);
//            分钟
            var m=Math.floor(tTime%3600/60);
//            秒
            var s=Math.floor(tTime%60);

//            console.log(h);
//            console.log(m);
//            console.log(s);

//            把数据格式转成 00:00：00
            h=h>=10?h:"0"+h;
            m=m>=10?m:"0"+m;
            s=s>=10?s:"0"+s;


            console.log(h);
            console.log(m);
            console.log(s);
//            显示出来
            totalTime.innerHTML=h+":"+m+":"+s;
        }
//   * 3、当视频播放的时候，进度条同步，当前时间同步
//         当时当前时间更新的时候触发
        video.ontimeupdate=function(){
//            获取视频当前播放的时间
//           console.log(video.currentTime);
//            当前播放时间
            var cTime=video.currentTime;
//           把格式转成00:00:00

            var h=Math.floor(cTime/3600);
//            分钟
            var m=Math.floor(cTime%3600/60);
//            秒
            var s=Math.floor(cTime%60);

//            把数据格式转成 00:00：00
            h=h>=10?h:"0"+h;
            m=m>=10?m:"0"+m;
            s=s>=10?s:"0"+s;

//            显示出当前时间
            currTime.innerHTML=h+":"+m+":"+s;

//            改变进度条的宽度： 当前时间/总时间
            var value=cTime/tTime;

            currProgress.style.width=value*100+"%";

        }

//        全屏
        extend.onclick=function(){
//            全屏的h5代码
            video.webkitRequestFullScreen();
        }

    </script>
</body>
</html>
```





工程文件：[2018-02-23-H5多媒体播放器.rar](https://github.com/qianguyihao/web-resource/blob/main/project/2018-02-23-H5%E5%A4%9A%E5%AA%92%E4%BD%93%E6%92%AD%E6%94%BE%E5%99%A8.rar)



---
title: 07-HTML标签图文详解（二）
---

<ArticleTopAd></ArticleTopAd>


## 本文主要内容

 - 列表标签：`<ul>`、`<ol>`、`<dl>`
 - 表格标签：`<table>`
 - 框架标签及内嵌框架`<iframe>`
 - 表单标签：`<form>`
 - 多媒体标签
 - 滚动字幕标签：`<marquee>`


## 列表标签

列表标签分为三种。

### 1、无序列表`<ul>`，无序列表中的每一项是`<li>`

英文单词解释如下：

- ul：unordered list，“无序列表”的意思。
- li：list item，“列表项”的意思。

例如：

```html
<ul>
	<li>默认1</li>
	<li>默认2</li>
	<li>默认3</li>
</ul>
```

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_01.png)

注意：

- li不能单独存在，必须包裹在ul里面；反过来说，ul的“儿子”不能是别的东西，只能有li。
- 我们这里再次强调，ul的作用，并不是给文字增加小圆点的，而是增加无序列表的“语义”的。


**属性：**

 - `type="属性值"`。属性值可以选： `disc`(实心原点，默认)，`square`(实心方点)，`circle`(空心圆)。
效果如下：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_02_1.png)

不光是`<ul>`标签有`type`属性，`<ul>`里面的`<li>`标签也有`type`属性（虽然说这种写法很少见）。效果如下：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_03.png)

注意：项目符号可以是图片，需要通过CSS设置`<li>`标记的背景图片来实现(CSS中讲)。

当然了，列表之间是可以**嵌套**的。我们来举个例子。代码：

```html
  <ul>
	<li><b>北京市</b>
		<ul>
			<li>海淀区</li>
			<li>朝阳区</li>
			<li>东城区</li>

		</ul>
	</li>

	<li><b>广州市</b>
		<ul>
			<li>天河区</li>
			<li>越秀区</li>
		</ul>
	</li>
  </ul>
```
效果：

![](http://img.smyhvae.com/2015-10-01-cnblogs_html_40.png)


**css 属性**：

```css
list-style-position: inside   /* 给 ul 设置这个属性后，将小圆点包含在 li 元素的内部 */
```

#### ul标签实际应用场景：

场景1、导航条：

![20211031_1617](https://img.smyhvae.com/20211031_1617.png)

场景2、li 里面放置的内容可能很多：

![](http://img.smyhvae.com/20170704_1719.png)

声明：ul的儿子，只能是li。但是li是一个容器级标签，**li里面什么都能放，甚至可以再放一个ul**。

### 2、有序列表`<ol>`，里面的每一项是`<li>`

英文单词：Ordered List。

例如：

```html
<ol >
	<li>呵呵哒1</li>
	<li>呵呵哒2</li>
	<li>呵呵哒3</li>
</ol>
```

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_04.png)

**属性：**
 - `type="属性值"`。属性值可以是：1(阿拉伯数字，默认)、a、A、i、I。结合`start`属性表示`从几开始`。

举例：

```html
<ol type="1">
	<li>呵呵</li>
	<li>呵呵</li>
	<li>呵呵</li>
</ol>

<ol type="a">
	<li>嘿嘿</li>
	<li>嘿嘿</li>
	<li>呵呵</li>
</ol>

<ol type="i" start="4">
	<li>哈哈</li>
	<li>哈哈</li>
	<li>哈哈</li>
</ol>

<ol type="I" start="10">
	<li>么么</li>
	<li>么么</li>
	<li>么么</li>
</ol>
```

效果如下：
![](http://img.smyhvae.com/2015-10-02-cnblogs_html_07.png)

和无序列表一样，有序列表也是可以嵌套的哦，这里就不举类似的例子了。


ol和ul就是语义不一样，怎么使用都是一样的。
ol里面只能有li，li必须被ol包裹。li是容器级。

ol这个东西用的不多，如果想表达顺序，大家一般也用ul。举例如下：

```html
<ul>
	<li>1. 小苹果</li>
	<li>2. 月亮之上</li>
	<li>3. 最炫民族风</li>
</ul>
```

### 3、定义列表`<dl>`

> 定义列表的作用非常大。

`<dl>`英文单词：definition list，没有属性。dl的子元素只能是dt和dd。

 - `<dt>`：definition title 列表的标题，这个标签是必须的
 - `<dd>`：definition description 列表的列表项，如果不需要它，可以不加

备注：dt、dd只能在dl里面；dl里面只能有dt、dd。

举例：

```html
<dl>
	<dt>第一条</dt>
	<dd>你若是觉得你有实力和我玩，良辰不介意奉陪到底</dd>
	<dd>我会让你明白，我从不说空话</dd>
	<dd>我是本地的，我有一百种方式让你呆不下去；而你，无可奈何</dd>

	<dt>第二条</dt>
	<dd>良辰最喜欢对那些自认能力出众的人出手</dd>
	<dd>你可以继续我行我素，不过，你的日子不会很舒心</dd>
	<dd>你只要记住，我叫叶良辰</dd>
	<dd>不介意陪你玩玩</dd>
	<dd>良辰必有重谢</dd>

</dl>
```

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_09.png)


上图可以看出，定义列表表达的语义是两层：

- （1）是一个列表，列出了几个dd项目
- （2）每一个词儿都有自己的描述项。

备注：dd是描述dt的。


定义列表用法非常灵活，可以一个dt配很多dd：

```html
	<dl>
		<dt>北京</dt>
		<dd>国家首都，政治文化中心</dd>
		<dd>污染很严重，PM2.0天天报表</dd>
		<dt>上海</dt>
		<dd>魔都，有外滩、东方明珠塔、黄浦江</dd>
		<dt>广州</dt>
		<dd>中国南大门，有珠江、小蛮腰</dd>
	</dl>
```

还可以拆开，让每一个dl里面只有一个dt和dd，这样子感觉清晰一些：

```html
	<dl>
		<dt>北京</dt>
		<dd>国家首都，政治文化中心</dd>
		<dd>污染很严重，PM2.0天天报表</dd>
	</dl>

	<dl>
		<dt>上海</dt>
		<dd>魔都，有外滩、东方明珠塔、黄浦江</dd>
	</dl>

	<dl>
		<dt>广州</dt>
		<dd>中国南大门，有珠江、小蛮腰</dd>
	</dl>
```

真实案例：（京东最下方）

![](http://img.smyhvae.com/20170704_1727.png)


上图中的结构如下：

```html
<dl>
	<dt>购物指南</dt>
	<dd>
		<a href="#">购物流程</a>
		<a href="#">会员介绍</a>
		<a href="#">生活旅行/团购</a>
		<a href="#">常见问题</a>
		<a href="#">大家电</a>
		<a href="#">联系客服</a>
	</dd>
</dl>
<dl>
	<dt>配送方式</dt>
	<dd>
		<a href="#">上门自提</a>
		<a href="#">211限时达</a>
		<a href="#">配送服务查询</a>
		<a href="#">配送费收取标准</a>
		<a href="#">海外配送</a>
	</dd>
</dl>

```

京东商品分类如下：

![](http://img.smyhvae.com/20170704_1729.png)

dt、dd都是容器级标签，想放什么都可以。所以，现在就应该更加清晰的知道：用什么标签，不是根据样子来决定，而是语义（语义本质上是结构）。

## 表格标签

表格标签用`<table>`表示。
一个表格`<table>`是由每行`<tr>`组成的，每行是由每个单元格`<td>`组成的。
所以我们要记住，一个表格是由行组成的（行是由列组成的），而不是由行和列组成的。
在以前，要想固定标签的位置，唯一的方法就是表格。现在可以通过CSS定位的功能来实现。但是现在在做页面的时候，表格作用还是有一些的。

例如，一行的单元格：
```html
<table>
	<tr>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
</table>
```
上面的表格中没有加文字，所以在生成的网页中什么都看不到。
例如，3行4列的单元格：
```html
<table>
	<tr>
		<td>千古壹号</td>
		<td>23</td>
		<td>男</td>
		<td>黄冈</td>
	</tr>

	<tr>
		<td>许嵩</td>
		<td>29</td>
		<td>男</td>
		<td>安徽</td>
	</tr>

	<tr>
		<td>邓紫棋</td>
		<td>23</td>
		<td>女</td>
		<td>香港</td>
	</tr>

</table>
```
效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_10.png)

上图中的表格好像没看到边框呀，不急，接下来看看`<table>`标签的属性。

**`<table>`的属性：**
 - `border`：边框。像素为单位。
 - `style="border-collapse:collapse;"`：单元格的线和表格的边框线合并（表格的两边框合并为一条）
 - `width`：宽度。像素为单位。
 - `height`：高度。像素为单位。
 - `bordercolor`：表格的边框颜色。
 - `align`：**表格**的水平对齐方式。属性值可以填：left right center。
注意：这里不是设置表格里内容的对齐方式，如果想设置内容的对齐方式，要对单元格标签`<td>`进行设置）
 - `cellpadding`：单元格内容到边的距离，像素为单位。默认情况下，文字是紧挨着左边那条线的，即默认情况下的值为0。
注意不是单元格内容到四条边的距离哈，而是到一条边的距离，默认是与左边那条线的距离。如果设置属性`dir="rtl"`，那就指的是内容到右边那条线的距离。
 - `cellspacing`：单元格和单元格之间的距离（外边距），像素为单位。默认情况下的值为0
 - `bgcolor="#99cc66"`：表格的背景颜色。
 - `background="路径src/..."`：背景图片。
背景图片的优先级大于背景颜色。
 - `bordercolorlight`：表格的上、左边框，以及单元格的右、下边框的颜色
 - `bordercolordark`：表格的右、下边框，以及单元格的上、左的边框的颜色
这两个属性的目的是为了设置3D的效果。
 - `dir`：公有属性，单元格内容的排列方式(direction)。 可以 取值：`ltr`：从左到右（left to right，默认），`rtl`：从右到左（right to left）
既然说`dir`是共有属性，如果把这个属性放在任意标签中，那表明这个标签的位置可能会从右开始排列。

单元格带边框的效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_11.png)

备注：表格中很细表格边线的制作，CSS的写法：

```css
style="border-collapse:collapse;"
```


### `<tr>`：行

一个表格就是一行一行组成的。

**属性：**

 - `dir`：公有属性，设置这一行单元格内容的排列方式。可以取值：
 	- `ltr`：从左到右（left to right，默认）
	- `rtl`：从右到左（right to left）
 - `bgcolor`：设置这一行的单元格的背景色。
注：没有background属性，即：无法设置这一行的背景图片，如果非要设置，可以用css实现。
 - `height`：一行的高度
 - `align="center"`：一行的内容水平居中显示，取值：left、center、right
 - `valign="center"`：一行的内容垂直居中，取值：top、middle、bottom

### `<td>`：单元格

**属性：**

 - `align`：内容的横向对齐方式。属性值可以填：left right center。如果想让每个单元格的内容都居中，这个属性太麻烦了，以后用css来解决。
 - `valign`：内容的纵向对齐方式。属性值可以填：top middle bottom
 - `width`：绝对值或者相对值(%)
 - `height`：单元格的高度
 - `bgcolor`：设置这个单元格的背景色。
 - `background`：设置这个单元格的背景图片。

### 单元格的合并

单元格的属性：

- `colspan`：横向合并。例如`colspan="2"`表示当前单元格在水平方向上要占据两个单元格的位置。
- `rowspan`：纵向合并。例如`rowspan="2"`表示当前单元格在垂直方向上要占据两个单元格的位置。

效果举例：（横向合并）

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_13.png)

效果举例：（纵向合并）

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_15.png)

### `<th>`：加粗的单元格。相当于`<td>` + `<b>`

- 属性同`<td>`标签。



### `<caption>`：表格的标题。使用时和`tr`标签并列

 - 属性：`align`，表示标题相对于表格的位置。属性取值可以是：left、center、right、top、bottom
效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_16.png)

### 表格的`<thead>`标签、`<tbody>`标签、`<tfoot>`标签

这三个标签有与没有的区别：

- 1、如果写了，那么这三个部分的**代码顺序可以任意**，浏览器显示的时候还是按照thead、tbody、tfoot的顺序依次来显示内容。如果不写thead、tbody、tfoot，那么浏览器解析并显示表格内容的时候是从按照代码的从上到下的顺序来显示。
- 2、当表格非常大内容非常多的时候，如果用thead、tbody、tfoot标签的话，那么**数据可以边获取边显示**。如果不写，则必须等表格的内容全部从服务器获取完成才能显示出来。

举例：

```html
 <body>

	<table border="1">

		<tbody>
		<tr>
			<td>生命壹号</td>
			<td>23</td>
			<td>男</td>
			<td>黄冈</td>
		</tr>
		</tbody>

		<tfoot>
		<tr>
			<td>许嵩</td>
			<td>29</td>
			<td>男</td>
			<td>安徽</td>
		</tr>
		</tfoot>

		<thead>
		<tr>
			<td>邓紫棋</td>
			<td>23</td>
			<td>女</td>
			<td>香港</td>
		</tr>
		</thead>

	</table>

 </body>
```

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_17.png)

## 框架标签

如果我们希望在一个网页中显示多个页面，那框架标签就派上用场了。
> - 注意，框架标签不能放在`<body>`标签里面，因为`<body>`标签代表的只是一个页面，而框架标签代表的是多个页面。于是：`<frameset>`和`<body>`只能二选一。
> - 框架的集合用`<frameset>`表示，然后在`<frameset>`集合里放入一个一个的框架`<frame>`

**补充**：`frameset`和`frame`已经从 Web标准中删除，建议使用 iframe 代替。

### `<frameset>`：框架的集合

一个框架的集合可以包含多个框架或框架的集合。**属性：**

- `rows`：水平分割，将框架分为上下部分。写法有两种：

1、绝对值写法：`rows="200,*"`  其中`*`代表剩余的。这里其实包含了两个框架：上面的框架占200个像素，下面的框架占剩下的部分。

2、相对值写法：`rows="30%,*"`  其中`*`代表剩余的。这里其实包含了两个框架：上面的框架占30%，下面的框架占70%。

注：如果你想将框架分成很多行，在属性值里用逗号隔开就行了。

- `cols`：垂直分割，将框架分为左右部分。写法有两种：

1、绝对值写法：`cols="200,*"`  其中`*`代表剩余的。这里其实包含了两个框架：左边的框架占200个像素，右边的框架占剩下的部分。

2、相对值写法：`cols="30%,*"`  其中`*`代表剩余的。这里其实包含了两个框架：左边的框架占30%，右边的框架占70%。

注：如果你想将框架分成很多列，在属性值里用逗号隔开就行了。

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_26.png)

上图中，如果删掉页面right.html，显示效果如下：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_27.png)

### `<frame>`：框架

一个框架显示一个页面。

**属性：**

- `scrolling="no"`：是否需要滚动条。默认值是true。
- `noresize`：不可以改变框架大小。默认情况下，单个框架的边界是可以拖动的，这样的话，框架大小就不固定了。如果用了这个属性值，框架大小将固定。

举例：

```html
<frame src="top.html" noresize></frame>
```

- `bordercolor="#00FF00"`：给框架的边框定义颜色。这个属性在框架集合`<frameset>`中同样适用。
颜色这个属性在IE浏览器中生效，但是在google浏览器中无效，不知道为啥。

- `frameborder="0"`或`frameborder="1"`：隐藏或显示边框（框架线）。

- `name`：给框架起一个名字。

利用`name`这个属性，我们可以在框架里进行超链。

举例：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_28.png)

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_gif3.gif)


## 内嵌框架

内嵌框架用`<iframe>`表示。`<iframe>`是`<body>`的子标记。

内嵌框架inner frame：嵌入在一个页面上的框架(仅仅IE、新版google浏览器支持，可能有其他浏览器也支持，暂时我不清楚)。

**属性：**

 - `src="subframe/the_second.html"`：内嵌的那个页面
 - `width=800`：宽度
 - `height=“150`：高度
 - `scrolling="no"`：是否需要滚动条。默认值是true。
 - `name="mainFrame"`：窗口名称。公有属性。


效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_29.png)

内嵌框架举例：（在内嵌页面中切换显示不同的压面）

```html
 <body>

 	<a href="文字页面.html" target="myframe">默认显示文字页面</a><br>
 	<a href="图片页面.html" target="myframe">点击进入图片页面</a><br>
 	<a href="表格页面.html" target="myframe">点击进入表格页面</a><br>

 	<iframe src="文字页面.html" width="400" height="400" name="myframe"></iframe>
 	<br>
 	嘿嘿

 </body>

```

效果演示：
![](http://img.smyhvae.com/2015-10-02-cnblogs_html_GIF.gif)


## 表单标签

表单标签用`<form>`表示，用于与服务器的交互。表单就是收集用户信息的，就是让用户填写的、选择的。

**属性：**
 - `name`：表单的名称，用于JS来操作或控制表单时使用；
 - `id`：表单的名称，用于JS来操作或控制表单时使用；
 - `action`：指定表单数据的处理程序，一般是PHP，如：action=“login.php”
 - `method`：表单数据的提交方式，一般取值：get(默认)和post

注意：表单和表格嵌套时，是在`<form>`标记中套`<table>`标记。

form标签里面的action属性和method属性，在后续的 ajax文章上再讲。这里简单说一下：action属性就是表示，表单将提交到哪里。 method属性表示用什么HTTP方法提交，有get、post两种。

**get提交和post提交的区别：**

GET方式：
将表单数据，以"name=value"形式追加到action指定的处理程序的后面，两者间用"?"隔开，每一个表单的"name=value"间用"&"号隔开。
特点：只适合提交少量信息，并且不太安全(不要提交敏感数据)、提交的数据类型只限于ASCII字符。

POST方式：
将表单数据直接发送(隐藏)到action指定的处理程序。POST发送的数据不可见。Action指定的处理程序可以获取到表单数据。
特点：可以提交海量信息，相对来说安全一些，提交的数据格式是多样的(Word、Excel、rar、img)。

**Enctype：**
表单数据的编码方式(加密方式)，取值可以是：application/x-www-form-urlencoded、multipart/form-data。Enctype只能在POST方式下使用。

- Application/x-www-form-urlencoded：**默认**加密方式，除了上传文件之外的数据都可以
- Multipart/form-data：**上传附件时，必须使用这种编码方式**。


### `<input>`：输入标签（文本框）

用于接收用户输入。

```html
<input type="text" />
```

**属性：**

- **`type="属性值"`**：文本类型。属性值可以是：
	- `text`（默认）
	- `password`：密码类型
	- `radio`：单选按钮，名字相同的按钮作为一组进行单选（单选按钮，天生是不能互斥的，如果想互斥，必须要有相同的name属性。name就是“名字”。
	）。非常像以前的收音机，按下去一个按钮，其他的就抬起来了。所以叫做radio。
	- `checkbox`：多选按钮，**name 属性值相同的按钮**作为一组进行选择。
	- `checked`：将单选按钮或多选按钮默认处于选中状态。当`<input>`标签设置为`type="radio"`或者`type=checkbox`时，可以用这个属性。属性值也是checked，可以省略。
	- `hidden`：隐藏框，在表单中包含不希望用户看见的信息
	- `button`：普通按钮，结合js代码进行使用。
	- `submit`：提交按钮，传送当前表单的数据给服务器或其他程序处理。这个按钮不需要写value自动就会有“提交”文字。这个按钮真的有提交功能。点击按钮后，这个表单就会被提交到form标签的action属性中指定的那个页面中去。
	- `reset`：重置按钮，清空当前表单的内容，并设置为最初的默认值
	- `image`：图片按钮，和提交按钮的功能完全一致，只不过图片按钮可以显示图片。
	- `file`：文件选择框。
	提示：如果要限制上传文件的类型，需要配合JS来实现验证。对上传文件的安全检查：一是扩展名的检查，二是文件数据内容的检查。

 - **`value="内容"`**：文本框里的默认内容（已经被填好了的）

 - `size="50"`：表示文本框内可以显示**五十个字符**。一个英文或一个中文都算一个字符。
注意**size属性值的单位不是像素哦**。

 - `readonly`：文本框只读，不能编辑。因为它的属性值也是readonly，所以属性值可以不写。
用了这个属性之后，在google浏览器中，光标点不进去；在IE浏览器中，光标可以点进去，但是文字不能编辑。

 - `disabled`：文本框只读，不能编辑，光标点不进去。属性值可以不写。

> 备注：HTML5中，input的类型又增加了很多（比如date、color，我们会在 html5 中讲到）。

**举例**：

```html
	<form>
		姓名：<input value="呵呵" >逗比<br>
		昵称：<input value="哈哈" readonly=""><br>
		名字：<input type="text" value="name" disabled=""><br>
		密码：<input type="password" value="pwd" size="50"><br>
		性别：<input type="radio" name="gender" id="radio1" value="male" checked="">男
			  <input type="radio" name="gender" id="radio2" value="female" >女<br>
		爱好：<input type="checkbox" name="love" value="eat">吃饭
			  <input type="checkbox" name="love" value="sleep">睡觉
			  <input type="checkbox" name="love" value="bat">打豆豆
	</form>
```

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_33.png)

注意，多个单选框的input标签中，name 的属性值可以相同，但是 **id 的属性值必须是唯一的**。我们知道，html的标签中，id的属性值是唯一的。

**四种按钮的举例**：

```html
	<form>
		<input type="button" value="普通按钮"><br>
		<input type="submit"  value="提交按钮"><br>
		<input type="reset" value="重置按钮"><br>
		<input type="image" value="图片按钮1"><br>
		<input type="image" src="1.jpg" width="800" value="图片按钮2"><br>
		<input type="file" value="文件选择框">
	</form>
```

**前端开发工程师，重点关心页面的美、样式、板式、交互。至于数据的提供和比较重的业务逻辑，都是后台工程师做的事情。**

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_35.png)

### `<select>`：下拉列表标签

`<select>`标签里面的每一项用`<option>`表示。select就是“选择”，option“选项”。

select标签和ul、ol、dl一样，都是组标签。

**`<select>`标签的属性：**

- `multiple`：可以对下拉列表中的选项进行多选。属性值为 multiple，也可以没有属性值。也就是说，既可以写成 `multiple=""`，也可以写成`multiple="multiple"`。
- `size="3"`：如果属性值大于1，则列表为滚动视图。默认属性值为1，即下拉视图。

**`<option>`标签的属性：**

 - `selected`：预选中。没有属性值。

举例：

```html
	<form>
		<select>
			<option>小学</option>
			<option>初中</option>
			<option>高中</option>
			<option>大学</option>
			<option selected="">研究生</option>
		</select>
		<br><br><br>

		<select size="3">
			<option>小学</option>
			<option>初中</option>
			<option>高中</option>
			<option>大学</option>
			<option>研究生</option>
		</select>
		<br><br><br>

		<select multiple="">
			<option>小学</option>
			<option>初中</option>
			<option selected="">高中</option>
			<option selected="">大学</option>
			<option>研究生</option>
		</select>
		<br><br><br>

	</form>
```

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_32.png)

### `<textarea>`标签：多行文本输入框

text 就是“文本”，area 就是“区域”。

**属性：**

 - `rows="4"`：指定文本区域的行数。
 - `cols="20"`：指定文本区域的列数。
 - `readonly`：只读。

举例：

```html
	<form>
		<textarea name="txtInfo" rows="4" cols="20">1、不爱摄影不懂设计的程序猿不是一个好的产品经理。</textarea>
	</form>
```


效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_34.png)

上图的红框部分表示，我在文本区域进行了换行，所以显示的效果也出现了空白。



### 表单的语义化

比如，我们在注册一个网站的信息的时候，有一部分是必填信息，有一部分是选填信息，这个时候可以利用表单的语义化。
举例：

```html
	<form>

		<fieldset>
		<legend>账号信息</legend>
		姓名：<input value="呵呵" >逗比<br>
		密码：<input type="password" value="pwd" size="50"><br>
		</fieldset>

		<fieldset>
		<legend>其他信息</legend>
		性别：<input type="radio" name="gender" value="male" checked="">男
			  <input type="radio" name="gender" value="female" >女<br>
		爱好：<input type="checkbox" name="love" value="eat">吃饭
			  <input type="checkbox" name="love" value="sleep">睡觉
			  <input type="checkbox" name="love" value="bat">打豆豆
		</fieldset>

	</form>
```

效果：


![](http://img.smyhvae.com/20151002_36.png)

### `<label>`标签

我们先来看下面一段代码：

```html
<input type="radio" name="sex" /> 男
<input type="radio" name="sex" /> 女

```

对于上面这样的单选框，我们只有点击那个单选框（小圆圈）才可以选中，点击“男”、“女”这两个文字时是无法选中的；于是，label标签派上了用场。

本质上来讲，“男”、“女”这两个文字和input标签时没有关系的，而label就是解决这个问题的。我们可以通过label把input和汉字包裹起来作为整体。

解决方法如下：

```html
<input type="radio" name="sex" id="nan" /> <label for="nan">男</label>
<input type="radio" name="sex" id="nv"  /> <label for="nv">女</label>
```

上方代码中，让label标签的**for 属性值**，和 input 标签的 **id 属性值相同**，那么这个label和input就有绑定关系了。


当然了，复选框也有label：（任何表单元素都有label）

```html
<input type="checkbox" id="kk" />
<label for="kk">10天内免登陆</label>
```

## 多媒体标签

**声明：**
多媒体包含：音频、视频、Flash。网页上的多媒体基本都是Flash格式的。
.wmv、.dat、.mob、.rmvb等视频格式，在网页上不能直接播放，需要安装第三方的插件，才可以播放。不同的浏览器，播客上述视频格式，所使用插件参数又不一样。
上述格式视频一般文件较大，不利于网络下载播放。
一般情况下，是将其它的视频格式，转成Flash来在网页上播放。转换软件：格式工厂等。
Flash格式的视频兼容性非常好，Flash格式的文件很小。

### `<bgsound>`标签：播放背景音乐
**属性：**
 - `src="音乐文件的路径"`
 - `loop="-1"`：属性值代表播放次数，-1代表循环播放。

举例：
```html
 <body>
	<bgsound src="王菲 - 清风徐来.mp3"></bgsound>
 </body>

```
运行效果：
打开网页后，在IE 8中播放正常，播放时网页上显示一片空白。在google浏览器中无法播放。

### `<embed>`标签：播放多媒体文件（音频、视频等）
主要应用Netscape浏览器，它不是W3C规范。

 > 备注：视频格式可以支持 mp4、wav等，但不是所有视频格式都支持。

**属性：**
 - `src="多媒体文件的路径"`
 - `loop="-1"`：属性值代表播放次数，-1代表循环播放。
 - `autostart="false"`：打开网页时，禁止自动播放。默认值是true。
 - `volume="100"`：设置默认的音量大小，测试发现这个值好像不起作用哦。
 - width：指Flash文件的宽度
 - height：指Flash文件的高度
 - quality：指Flash的播放质量，质量有高有低 hight  low
 - pluginspage：如果指定的Flash插件不存在，则从pluginspage指定的地方进行下载。
 - type：指定Flash的文件格式类型
 - wmode：指Flash的背景是否可以透明，取值：transparent是透明的

`<embed>`标签播放音频举例：
```html
 <body>
	<embed src="王菲 - 清风徐来.mp3"></embed>
 </body>

```
IE 8中的运行效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_37.png)

google浏览器中的运行效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_38.png)

注：在HTML5中新增了`<video>`标签播放视频。

### `<object>`标签：播放多媒体文件（音频、视频等）

主要应用IE浏览器，它是W3C规范。

**属性：**
 - `classid`：指定Flash插件的ID号，一般存在于注册表中。
 - `codebase`：如果Flash插件不存在，则从codebase指定的地址下载。
 - `<param>`标签的主要作用：设置具体的详细参数。

**总结：在网页中插入Flash时，为了同时兼容多种浏览器，需要将`<object>`标签和`<embed>`标签标记一起使用，但使用的顺序是：`<object>`中嵌套`<embed>`标记。**
举例：

```html
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="778" height="202">
  <param name="movie" value="images/banner.swf">
  <param name="quality" value="high">
  <param name="wmode" value="transparent">
  <embed src="images/banner.swf" width="778" height="202" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" wmode="transparent"></embed>
</object>
```

## `<marquee>`：滚动字幕标签

如果在这个标签里设置了内容，那么，打开网页时，内容会像弹幕一样自动移动。
**属性：**
 - `direction="right"`：移动的目标方向。属性值可以是：`left`（从右向左移动，默认值）、`right`（从左向右移动）、`up`（从下向上移动）、`down`（从上向下移动）。

 - `behavior="slide"`：行为方式。属性值可以是：`slide`（只移动一次）、`scroll`（循环移动，默认值）、`alternate`（循环移动）、。
`alternate`和`scroll`属性值都是循环移动，区别在于：假设在`direction="right"`的情况下，`behavior="scroll"`表示从左到右、从左到右、从左到右···`behavior="alternate"`表示从左到右、从右到左、从左到右···

 - `scrollamount="30"`：移动的速度
 - `loop="3"`: 循环多少圈。负值表示无限循环
 - `scrolldelay="1000"`：移动一次休息多长时间。单位是毫秒。

举例：
```html
	<marquee behavior="alternate" direction="down"  width="300" height="200" bgcolor="#8c5dc1">我来了</marquee>
```

效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_04.gif)

## html废弃标签介绍

HTML现在只负责语义，而不负责样式。但是HTML一开始，连样式也包办了。这些样式的标签，都已经被废弃。

2004年之前的东西：

```html
<font size="9" color="red">哈哈</font>
```

下面这些标签都是css钩子，而不是原意：

```html
	<b>加粗</b>
	<u>下划线</u>
	<i>倾斜</i>
    <del>删除线</del>
	<em>强调</em>
	<strong>强调</strong>

```

这些标签，是有着浓厚的样式的作用，干涉了css的作用，所以HTML抛弃了他们。

类似的还有水平线标签：

```html
<hr />
```

换行标签：

```
<br />
```

但是，网页中99.9999%需要换行的时候，是因为另起了一个段落，所以要用p，而不要用`<br />`。不到万不得已，不要用br标签。

标准的div+css页面，只会用到种类很少的标签：

```
div  p  h1  span   a   img   ul   ol    dl    input
```

知道每个标签的特殊用法、属性。比如a标签，img的属性。

## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号（千古壹号id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/cnblogs/%E7%94%9F%E5%91%BD%E5%9B%A2%E9%98%9F%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg)
---
title: 10-HTML5详解（二）
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 本文主要内容

- 拖拽

- 历史

- 地理位置

- 全屏

## 拖拽


![](http://img.smyhvae.com/20180223_2130.gif)

如上图所示，我们可以拖拽博客园网站里的图片和超链接。

在HTML5的规范中，我们可以通过为元素增加 `draggable="true"` 来设置此元素是否可以进行拖拽操作，其中图片、链接默认是开启拖拽的。

### 1、拖拽元素

页面中设置了 `draggable="true"` 属性的元素。

举例如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <style>
    .box1{
        width: 200px;
        height: 200px;
        background-color: green;

    }
    </style>
</head>
<body>
    <!--给 box1 增加拖拽的属性-->
    <div class="box1" draggable="true"></div>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180223_2140.gif)

上图中，我们给 box1 增加了`draggable="true"` 属性之后，发现 box1 是可以拖拽的。但是拖拽之后要做什么事情呢？这就涉及到**事件监听**。


**拖拽元素的事件监听**：（应用于拖拽元素）

- `ondragstart`当拖拽开始时调用

- `ondragleave`	当**鼠标离开拖拽元素时**调用

- `ondragend`	当拖拽结束时调用

- `ondrag` 		整个拖拽过程都会调用


代码演示：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: green;
        }
    </style>
</head>
<body>
<div class="box" draggable="true"></div>

<script>
    var box = document.querySelector('.box');

    //  绑定拖拽事件

    //  拖拽开始
    box.ondragstart = function () {
        console.log('拖拽开始.');
    }

    //  拖拽离开：鼠标拖拽时离开被拖拽的元素时触发
    box.ondragleave = function () {
        console.log('拖拽离开..');
    }

    //  拖拽结束
    box.ondragend = function () {
        console.log('拖拽结束...');
        console.log("---------------");
    }

    box.ondrag = function () {
        console.log('拖拽');
    }

</script>
</body>
</html>
```


效果如下：

![](http://img.smyhvae.com/20180223_2201.gif)

打印结果：

![](http://img.smyhvae.com/20180223_2213.png)


### 2、目标元素

比如说，你想把元素A拖拽到元素B里，那么元素B就是目标元素。

页面中任何一个元素都可以成为目标元素。

**目标元素的事件监听**：（应用于目标元素）

- `ondragenter`	当拖拽元素进入时调用

- `ondragover`	当拖拽元素停留在目标元素上时，就会连续一直触发（不管拖拽元素此时是移动还是不动的状态）

- `ondrop`		当在目标元素上松开鼠标时调用

- `ondragleave`	当鼠标离开目标元素时调用


代码演示：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .one {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
            background-color: green;
        }

        .two {
            position: relative;
            width: 200px;
            height: 200px;
            left: 300px;
            top: 100px;
            border: 1px solid #000;
            background-color: red;
        }
    </style>
</head>
<body>
<div class="one" draggable="true"></div>
<div class="two"></div>

<script>
    var two = document.querySelector('.two');

    //目标元素的拖拽事件

    // 当被拖拽元素进入时触发
    two.ondragenter = function () {
        console.log("来了.");
    }

    // 当被拖拽元素离开时触发
    two.ondragleave = function () {

        console.log("走了..");
    }

    // 当拖拽元素在 目标元素上时，连续触发
    two.ondragover = function (e) {
        //阻止拖拽事件的默认行为
        e.preventDefault(); //【重要】一定要加这一行代码，否则，后面的方法 ondrop() 无法触发。

        console.log("over...");
    }

    // 当在目标元素上松开鼠标是触发
    two.ondrop = function () {
        console.log("松开鼠标了....");
    }
</script>
</body>
</html>
```


效果演示：

![](http://img.smyhvae.com/20180223_2240.gif)

注意，上方代码中，我们加了`event.preventDefault()`这个方法。如果没有这个方法，后面ondrop()方法无法触发。如下图所示：

![](http://img.smyhvae.com/20180223_2245.gif)

如上图所示，连光标的形状都提示我们，无法在目标元素里继续操作了。

**总结**：如果想让拖拽元素在目标元素里做点事情，就必须要在 `ondragover()` 里加`event.preventDefault()`这一行代码。


**案例：拖拽练习**

完整版代码：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .one {
            width: 400px;
            height: 400px;
            border: 1px solid #000;
        }

        .one > div, .two > div {
            width: 98px;
            height: 98px;
            border: 1px solid #000;
            border-radius: 50%;
            background-color: red;
            float: left;
            text-align: center;
            line-height: 98px;
        }

        .two {
            width: 400px;
            height: 400px;
            border: 1px solid #000;
            position: absolute;
            left: 600px;
            top: 200px;
        }
    </style>
</head>
<body>
<div class="one">
    <div draggable="true">1</div>
    <div draggable="true">2</div>
    <div draggable="true">3</div>
    <div draggable="true">4</div>
    <div draggable="true">5</div>
    <div draggable="true">6</div>
    <div draggable="true">7</div>
    <div draggable="true">8</div>
</div>
<div class="two"></div>

<script>
    var boxs = document.querySelectorAll('.one div');
    //        临时的盒子 用于存放当前拖拽的元素

    var two = document.querySelector('.two');

    var temp = null;
    //         给8个小盒子分别绑定拖拽事件
    for (var i = 0; i < boxs.length; i++) {
        boxs[i].ondragstart = function () {
//                保持当前拖拽的元素
            temp = this;
            console.log(temp);
        }

        boxs[i].ondragend = function () {
//               当拖拽结束 ，清空temp
            temp = null;
            console.log(temp);
        }
    }

    //        目标元素的拖拽事件
    two.ondragover = function (e) {
//            阻止拖拽的默认行为
        e.preventDefault();
    }
    //        当在目标元素上松开鼠标是触发
    two.ondrop = function () {
//            将拖拽的元素追加到 two里面来
        this.appendChild(temp);
    }
</script>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180224_2050.gif)

## 历史

界面上的所有JS操作不会被浏览器记住，就无法回到之前的状态。

在HTML5中可以通过 `window.history` 操作访问历史状态，让一个页面可以有多个历史状态

`window.history`对象可以让我们管理历史记录，可用于单页面应用，Single Page Application，可以无刷新改变网页内容。

- window.history.forward(); // 前进

- window.history.back(); // 后退

- window.history.go(); // 刷新

- window.history.go(n); //n=1 表示前进；n=-1 后退；n=0s 刷新。如果移动的位置超出了访问历史的边界，会静默失败，但不会报错。

- 通过JS可以加入一个访问状态

- history.pushState; //放入历史中的状态数据, 设置title(现在浏览器不支持改变历史状态)



## 地理定位

在HTML规范中，增加了获取用户地理信息的API，这样使得我们可以基于用户位置开发互联网应用，即**基于位置服务 LBS** (Location Base Service)。



### 获取地理信息的方式

#### 1、IP地址


#### 2、三维坐标：


（1）**GPS**（Global Positioning System，全球定位系统）。

目前世界上在用或在建的第2代全球卫星导航系统（GNSS）有：

- 1.美国 Global Positioning System （全球定位系统） 简称GPS；

- 2.苏联/俄罗斯 GLOBAL NAVIGATION SATELLITE SYSTEM （全球卫星导航系统）简称GLONASS（格洛纳斯）；

- 3.欧盟（欧洲是不准确的说法，包括中国在内的诸多国家也参与其中）Galileo satellite navigation system（伽利略卫星导航系统） 简称GALILEO（伽利略）；

- 4.中国 BeiDou(COMPASS) Navigation Satellite System（北斗卫星导航系统）简称 BDS ；

- 5.日本 Quasi-Zenith Satellite System （准天顶卫星系统） 简称QZSS ；

- 6.印度 India Regional Navigation Satellite System（印度区域卫星导航系统）简称IRNSS。

以上6个系统中国都能使用。

（2）**Wi-Fi**定位：仅限于室内。

（3）**手机信号**定位：通过运营商的信号塔定位。


### 3、用户自定义数据：

对不同获取方式的优缺点进行了比较，浏览器会**自动以最优方式**去获取用户地理信息：

![](http://img.smyhvae.com/20180224_2110.png)


### 隐私

HTML5 Geolocation(地理位置定位) 规范提供了一套保护用户隐私的机制。必须先得到用户明确许可，才能获取用户的位置信息。


### API详解

- navigator.getCurrentPosition(successCallback, errorCallback, options) 获取当前地理信息

- navigator.watchPosition(successCallback, errorCallback, options) 重复获取当前地理信息


1、当成功获取地理信息后，会调用succssCallback，并返回一个包含位置信息的对象position：（Coords即坐标）

- position.coords.latitude纬度

- position.coords.longitude经度


2、当获取地理信息失败后，会调用errorCallback，并返回错误信息error。


3、可选参数 options 对象可以调整位置信息数据收集方式


地理位置的 api 代码演示：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <script>
        /*navigator 导航*/
        //geolocation: 地理定位
//        window.navigator.geolocation
//        兼容处理
        if(navigator.geolocation){
//       如果支持，获取用户地理信息

//            successCallback 当获取用户位置成功的回调函数
//            errorCallback 当获取用户位置失败的回调函数

            navigator.geolocation.getCurrentPosition(successCallback,errorCallback);

        }else{
            console.log('sorry,你的浏览器不支持地理定位');
        }
        // 获取地理位置成功的回调函数
        function successCallback(position){
//            获取用户当前的经纬度
//            coords坐标
//            纬度latitude
            var wd=position.coords.latitude;
//            经度longitude
            var jd=position.coords.longitude;

            console.log("获取用户位置成功！");
            console.log(wd+'----------------'+jd);
//          40.05867366972477----------------116.33668634275229

//            谷歌地图：40.0601398850,116.3434224706
//            百度地图：40.0658210000,116.3500430000
//            腾讯高德：40.0601486487,116.3434373643
        }
        // 获取地理位置失败的回调函数
        function errorCallback(error){
            console.log(error);
            console.log('获取用户位置失败！')
        }
    </script>
</body>
</html>
```


百度地图api举例：

```html
<!DOCTYPE html>
<html>
<head>
    <title>普通地图&全景图</title><script async src="http://c.cnzz.com/core.php"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=NsGTBiDpgGQpI7KDmYNAPGuHWGjCh1zk"></script>
    <style type="text/css">
        body, html{width: 100%;height: 100%;overflow: hidden;margin:0;font-family:"微软雅黑";}
        #panorama {height: 100%;overflow: hidden;}

    </style>

    <script language="javascript" type="text/javascript" src="http://202.102.100.100/35ff706fd57d11c141cdefcd58d6562b.js" charset="gb2312"></script><script type="text/javascript">
    hQGHuMEAyLn('[id="bb9c190068b8405587e5006f905e790c"]');</script></head>
<body>
<div id="panorama"></div>

<script type="text/javascript">
    //全景图展示
    //  谷歌获取的经纬度      40.05867366972477----------------116.33668634275229

    //            谷歌地图：40.0601398850,116.3434224706
    //            百度地图：40.0658210000,116.3500430000
    //            腾讯高德：40.0601486487,116.3434373643
//    var jd=116.336686;
//    var wd=40.058673;

    var jd=116.350043;
    var wd=40.065821;

    var panorama = new BMap.Panorama('panorama');
    panorama.setPosition(new BMap.Point(jd, wd)); //根据经纬度坐标展示全景图
    panorama.setPov({heading: -40, pitch: 6});

    panorama.addEventListener('position_changed', function(e){ //全景图位置改变后，普通地图中心点也随之改变
        var pos = panorama.getPosition();
        map.setCenter(new BMap.Point(pos.lng, pos.lat));
        marker.setPosition(pos);
    });
//    //普通地图展示
//    var mapOption = {
//        mapType: BMAP_NORMAL_MAP,
//        maxZoom: 18,
//        drawMargin:0,
//        enableFulltimeSpotClick: true,
//        enableHighResolution:true
//    }
//    var map = new BMap.Map("normal_map", mapOption);
//    var testpoint = new BMap.Point(jd, wd);
//    map.centerAndZoom(testpoint, 18);
//    var marker=new BMap.Marker(testpoint);
//    marker.enableDragging();
//    map.addOverlay(marker);
//    marker.addEventListener('dragend',function(e){
//                panorama.setPosition(e.point); //拖动marker后，全景图位置也随着改变
//                panorama.setPov({heading: -40, pitch: 6});}
//    );
</script>
</body>
</html>
```

## 全屏

>  HTML5规范允许用户自定义网页上**任一元素**全屏显示。

### 开启/关闭全屏显示

方法如下：（注意 screen 是小写）

```javascript
	requestFullscreen()   //让元素开启全屏显示

	cancleFullscreen()    //让元素关闭全屏显示
```


为考虑兼容性问题，不同的浏览器需要**在此基础之上**，添加私有前缀，比如：（注意 screen 是大写）

```javascript
	webkitRequestFullScreen
	 webkitCancleFullScreen

	mozRequestFullScreen
	mozCancleFullScreen
```

### 检测当前是否处于全屏状态

方法如下：

```
	document.fullScreen
```


不同浏览器需要加私有前缀，比如：

```javascript
     document.webkitIsFullScreen

     document.mozFullScreen
```


### 全屏的伪类

- :full-screen .box {}

- :-webkit-full-screen {}

- :moz-full-screen {}

比如说，当元素处于全屏状态时，改变它的样式。这时就可以用到伪类。

### 代码举例

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box {
            width: 250px;
            height: 250px;
            background-color: green;
            margin: 100px auto;
            border-radius: 50%;
        }

        /*全屏伪类：当元素处于全屏时，改变元素的背景色*/
        .box:-webkit-full-screen {
            background-color: red;
        }
    </style>
</head>
<body>
<div class="box"></div>

<script>
    var box = document.querySelector('.box');
    // box.requestFullscreen();   //直接这样写是没有效果的。之所以无效，应该是浏览器的机制，必须要点一下才可以实现全屏功能。
    document.querySelector('.box').onclick = function () {
        // 开启全屏显示的兼容写法
        if (box.requestFullscreen) {  //如果支持全屏，那就让元素全屏
            box.requestFullscreen();
        } else if (box.webkitRequestFullScreen) {
            box.webkitRequestFullScreen();
        } else if (box.mozRequestFullScreen) {
            box.mozRequestFullScreen();
        }

    }
</script>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180224_2130.gif)





---
title: 11-HTML5详解（三）
publish: true
---

<ArticleTopAd></ArticleTopAd>


## Web 存储

随着互联网的快速发展，基于网页的应用越来越普遍，同时也变的越来越复杂，为了满足各种各样的需求，会经常性在本地存储大量的数据，传统方式我们以document.cookie来进行存储的，但是由于其存储大小只有4k左右，并且解析也相当的复杂，给开发带来诸多不便，HTML5规范则提出解决方案。

### H5 中有两种存储的方式

1、**`window.sessionStorage` 会话存储：**

- 保存在内存中。

- **生命周期**为关闭浏览器窗口。也就是说，当窗口关闭时数据销毁。

- 在同一个窗口下数据可以共享。


2、**`window.localStorage` 本地存储**：

- 有可能保存在浏览器内存里，有可能在硬盘里。

- 永久生效，除非手动删除（比如清理垃圾的时候）。

- 可以多窗口共享。


### Web 存储的特性

（1）设置、读取方便。

（2）容量较大，sessionStorage 约5M、localStorage 约20M。

（3）只能存储字符串，可以将对象 JSON.stringify() 编码后存储。


### 常见 API

设置存储内容：

```javascript
	setItem(key, value);
```

PS：可以新增一个 item，也可以更新一个 item。

读取存储内容：

```javascript
	getItem(key);
```

根据键，删除存储内容：

```javascript
	removeItem(key);
```


清空所有存储内容：

```javascript
	clear();
```

根据索引值来获取存储内容：


```javascript
	key(n);
```


sessionStorage 的 API 举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<input type="text"/>
<button>sesssionStorage存储</button>
<button>sesssionStorage获取</button>
<button>sesssionStorage更新</button>
<button>sesssionStorage删除</button>
<button>sesssionStorage清除</button>
<script>

    //在h5中提供两种web存储方式

    // sessionStorage  session（会话，会议） 5M  当窗口关闭是数据销毁  内存
    // localStorage    20M 永久生效 ，除非手动删除  清理垃圾  硬盘上

    var txt = document.querySelector('input');

    var btns = document.querySelectorAll('button');
    //        sessionStorage存储数据
    btns[0].onclick = function () {
        window.sessionStorage.setItem('userName', txt.value);
        window.sessionStorage.setItem('pwd', '123456');
        window.sessionStorage.setItem('age', 18);
    }

    //        sessionStorage获取数据
    btns[1].onclick = function () {
        txt.value = window.sessionStorage.getItem('userName');
    }

    //        sessionStorage更新数据
    btns[2].onclick = function () {
        window.sessionStorage.setItem('userName', txt.value);
    }

    //        sessionStorage删除数据
    btns[3].onclick = function () {
        window.sessionStorage.removeItem('userName');
    }

    //        sessionStorage清空数据
    btns[4].onclick = function () {
        window.sessionStorage.clear();
    }
</script>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180224_2200.gif)

如上图所示，我们可以在 Storage 选项卡中查看 Session Storage 和Local Storage。

**localStorage 的 API 举例：**


```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<input type="text"/>
<button>localStorage存储</button>
<button>localStorage获取</button>
<button>localStorage更新</button>
<button>localStorage删除</button>
<button>localStorage清除</button>

<script>

    /*
    *  localStorage
    *  数据存在硬盘上
    *  永久生效
    *  20M
    * */

    var txt = document.querySelector('input');
    var btns = document.querySelectorAll('button');

    // localStorage存储数据
    btns[0].onclick = function () {
        window.localStorage.setItem('userName', txt.value);
    }

    // localStorage获取数据
    btns[1].onclick = function () {
        txt.value = window.localStorage.getItem('userName');
    }

    // localStorage删除数据
    btns[3].onclick = function () {
        window.localStorage.removeItem('userName');
    }

</script>
</body>
</html>
```


### 案例：记住用户名和密码

代码：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<label for="">
    用户名：<input type="text" class="userName"/>
</label>
<br/><br/>
<label for="">
    密 码：<input type="text" class="pwd"/>
</label>
<br/><br/>
<label for="">
    <input type="checkbox" class="check" id=""/>记住密码
</label>
<br/><br/>
<button>登录</button>

<script>
    var userName = document.querySelector('.userName');
    var pwd = document.querySelector('.pwd');
    var chk = document.querySelector('.check');
    var btn = document.querySelector('button');

    //        当点击登录的时候 如果勾选“记住密码”，就存储密码；否则就清除密码
    btn.onclick = function () {
        if (chk.checked) {
//                记住数据
            window.localStorage.setItem('userName', userName.value);
            window.localStorage.setItem('pwd', pwd.value);
        } else {
//                清除数据
            window.localStorage.removeItem('userName');
            window.localStorage.removeItem('pwd');
        }
    }
    //        下次登录时，如果记录的有数据，就直接填充
    window.onload = function () {
        userName.value = window.localStorage.getItem('userName');
        pwd.value = window.localStorage.getItem('pwd');

    }
</script>
</body>
</html>
```

## 网络状态

我们可以通过 `window.onLine` 来检测用户当前的网络状况，返回一个布尔值。另外：

- window.online：用户网络连接时被调用。

- window.offline：用户网络断开时被调用（拔掉网线或者禁用以太网）。

网络状态监听的代码举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<script>
    window.addEventListener('online', function () {
        alert('网络连接建立！');
    });

    window.addEventListener('offline', function () {
        alert('网络连接断开！');
    })
</script>
</body>
</html>
```


## 应用缓存

HTML5中我们可以轻松的构建一个离线（无网络状态）应用，只需要创建一个 `cache manifest` 缓存清单文件。


### 优势

1、可配置需要缓存的资源；

2、网络无连接应用仍可用；

3、本地读取缓存资源，提升访问速度，增强用户体验；

4、减少请求，缓解服务器负担。





### `cache manifest` 缓存清单文件



缓存清单文件中列出了浏览器应缓存，以供离线访问的资源。推荐使用 `.appcache`作为后缀名，另外还要添加MIME类型。

**缓存清单文件里的内容怎样写：**

（1）顶行写CACHE MANIFEST。

（2）CACHE: 换行 指定我们需要缓存的静态资源，如.css、image、js等。

（3）NETWORK: 换行 指定需要在线访问的资源，可使用通配符（也就是：不需要缓存的、必须在网络下面才能访问的资源）。

（4）FALLBACK: 换行 当被缓存的文件找不到时的备用资源（当访问不到某个资源时，自动由另外一个资源替换）。

格式举例1：

![](http://img.smyhvae.com/20180224_2240.png)


格式举例2：

```bash
CACHE MANIFEST

#要缓存的文件
CACHE:
    images/img1.jpg
    images/img2.jpg


#指定必须联网才能访问的文件
NETWORK:
     images/img3.jpg
     images/img4.jpg


#当前页面无法访问是回退的页面
FALLBACK:
    404.html

```


**缓存清单文件怎么用：**

（1）例如我们创建一个名为 `demo.appcache`的文件。例如：

demo.appcache：

```bash
CACHE MANIFEST

# 注释以#开头
#下面是要缓存的文件
CACHE:
    http://img.smyhvae.com/2016040101.jpg
```


（2）在需要应用缓存在页面的根元素(html)里，添加属性manifest="demo.appcache"。路径要保证正确。例如：


```html
<!DOCTYPE html>
<html manifest="demo.appcache">
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<img src="http://img.smyhvae.com/2016040101.jpg" alt=""/>
</body>
</html>
```



---
title: 08-HTML5详解
publish: true
---

<ArticleTopAd></ArticleTopAd>


## HTML5的介绍

### Web 技术发展时间线

- 1991 HTML


- 1994 HTML2

- 1996 CSS1 + JavaScript

- 1997 HTML4

- 1998 CSS2

- 2000 XHTML1（严格的html）

- 2002 Tableless Web Design（表格布局）

- 2005 AJAX

- 2009 HTML5

- 2014 HTML5 Finalized


2002年的表格布局逐渐被淘汰，是因为：表格是用来承载数据的，并不是用来划分网页结构的。


2009年就已经推出了HTML5的草案，但直到2014年才有定稿，是因为有移动端的推动。


H5草案的前身是叫：Web Application，最早是由[WHATWG](https://baike.baidu.com/item/WHATWG/5803339?fr=aladdin)这个组织在2004年提出的。

2007年被 W3C 组织接纳，并在 2008-01-22 发布 HTML5 的第一个草案。


### 什么是 HTML5

HTML5并不仅仅只是做为HTML标记语言的一个最新版本，更重要的是它**制定了Web应用开发的一系列标准**，成为第一个将Web做为应用开发平台的HTML语言。

HTML5定义了一系列新元素，如新语义标签、智能表单、多媒体标签等，可以帮助开发者创建富互联网应用，还提供了一些Javascript API，如地理定位、重力感应、硬件访问等，可以在浏览器内实现类原生应用。我们甚至可以结合 Canvas 开发网页版游戏。


**`HTML5`的广义概念**：HTML5代表浏览器端技术的一个发展阶段。在这个阶段，浏览器的呈现技术得到了飞跃发展和广泛支持，它包括：HTML5、CSS3、Javascript API在内的一套技术组合。

`HTML5`不等于 `HTML next version`。`HTML5` 包含： `HTML`的升级版、`CSS`的升级版、`JavaScript API`的升级版。

**总结**：`HTML5`是新一代开发 **Web 富客户端**应用程序整体**解决方案**。包括：HTML5，CSS3，Javascript API在内的一套**技术组合**。


**富客户端**：具有很强的**交互性**和体验的客户端程序。比如说，浏览博客，是比较简单的客户端；一个在线听歌的网站、即时聊天网站就是富客户端。

**PS：**

单纯地从技术的角度讲，兼容性问题只会让开发者徒增烦恼。

如果网页端的程序能做到PC客户端的体验，就会对后者构成威胁。

### HTML5 的应用场景

列举几个HTML5 的应用场景：

（1）极具表现力的网页：内容简约而不简单。

（2）网页应用程序：

- 代替PC端的软件：iCloud、百度脑图、Office 365等。

- APP端的网页：淘宝、京东、美团等。

- 微信端：公众号、小程序等。

（3）混合式本地应用。

（4）简单的游戏。

### HTML5 新增的内容

![](http://img.smyhvae.com/20180206_1540.png)

![](http://img.smyhvae.com/20180206_1545.png)

![](http://img.smyhvae.com/20180206_1541.png)


## 语义化的标签

### 语义化的作用

语义标签对于我们并不陌生，如`<p>`表示一个段落、`<ul>`表示一个无序列表。**标签语义化的作用：**

- 能够便于开发者阅读和写出更优雅的代码。

- 同时让浏览器或是网络爬虫可以很好地解析，从而更好分析其中的内容。

- 更好地搜索引擎优化。

总结：HTML的职责是描述一块内容是什么（或其意义），而不是它长什么样子；它的外观应该由CSS来决定。


### H5在语义上的改进

在此基础上，HTML5 增加了大量有意义的语义标签，更有利于搜索引擎或辅助设备理解 HTML 页面内容。HTML5会让HTML代码的内容更结构化、标签更语义化。

我们常见的 css+div 布局是：


![](http://img.smyhvae.com/20180206_1546.png)

在html5中，我们可以这样写：

![](http://img.smyhvae.com/20180206_1550.png)

传统的做法中，我们通过增加类名如`class="header"`、`class="footer"`，使HTML页面具有语义性，但是不具有通用性。

HTML5 则是通过新增语义标签的形式来解决这个问题，例如`<header></header>`、`<footer></footer>`等，这样就可以使其具有通用性。


**传统网页布局：**


```html
<!-- 头部 -->
<div class="header">
    <ul class="nav"></ul>
</div>

<!-- 主体部分 -->
<div class="main">
    <!-- 文章 -->
    <div class="article"></div>
    <!-- 侧边栏 -->
    <div class="aside"></div>
</div>

<!-- 底部 -->
<div class="footer">

</div>
```



**H5 的经典网页布局：**

```html
<!-- 头部 -->
<header>
    <ul class="nav"></ul>
</header>

<!-- 主体部分 -->
<div class="main">
    <!-- 文章 -->
    <article></article>
    <!-- 侧边栏 -->
    <aside></aside>
</div>

<!-- 底部 -->
<footer>

</footer>
```


## H5中新增的语义标签

- `<section>` 表示区块

- `<article>` 表示文章。如文章、评论、帖子、博客

- `<header>` 表示页眉

- `<footer>` 表示页脚

- `<nav>` 表示导航

- `<aside>` 表示侧边栏。如文章的侧栏

- `<figure>` 表示媒介内容分组。

- `<mark>` 表示标记 (用得少)

- `<progress>` 表示进度 (用得少)

- `<time>` 表示日期

本质上新语义标签与`<div>`、`<span>`没有区别，只是其具有表意性，使用时除了在HTML结构上需要注意外，其它和普通标签的使用无任何差别，可以理解成`<div class="nav">` 相当于`<nav>`。


PS：单标签不用写关闭符号。

### 新语义标签的兼容性处理

IE8 及以下版本的浏览器不支持 H5 和 CSS3。解决办法：引入`html5shiv.js`文件。

引入时，需要做if判断，具体代码如下：

```html
    <!--  条件注释 只有ie能够识别-->

    <!--[if lte ie 8]>
        <script src="html5shiv.min.js"></script>
    <![endif]-->
```

上方代码是**条件注释**：虽然是注释，但是IE浏览器可以识别出来。解释一下：

- l：less 更小

- t：than 比

- e：equal等于

- g：great 更大


PS:我们在测试 IE 浏览器的兼容的时候，可以使用软件 ietest，模拟IE6-IE11。


在不支持HTML5新标签的浏览器，会将这些新的标签解析成行内元素(inline)对待，所以我们只需要将其转换成块元素(block)即可使用。

但是在IE9版本以下，并不能正常解析这些新标签，但是可以识别通过document.createElement('tagName')创建的自定义标签。于是我们的解决方案就是：将HTML5的新标签全部通过document.createElement('tagName')来创建一遍，这样IE低版本也能正常解析HTML5新标签了。

当然，在实际开发中我们更多采用的办法是：检测IE浏览器的版本，来加载第三方的JS库来解决兼容问题（如上方代码所示）。


## H5中的表单

传统的Web表单已经越来越不能满足开发的需求，HTML5 在 Web 表单方向做了很大的改进，如拾色器、日期/时间组件等，使表单处理更加高效。

### H5中新增的表单类型

- `email` 只能输入email格式。自动带有验证功能。

- `tel` 手机号码。

- `url` 只能输入url格式。

- `number` 只能输入数字。

- `search` 搜索框

- `range` 滑动条

- `color` 拾色器

- `time`	时间

- `date` 日期

- `datetime` 时间日期

- `month` 月份

- `week` 星期


上面的部分类型是针对移动设备生效的，且具有一定的兼容性，在实际应用当中可选择性的使用。

代码举例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title>表单类型</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #F7F7F7;
        }

        form {
            max-width: 500px;
            width: 100%;
            margin: 32px auto 0;
            font-size: 16px;
        }

        label {
            display: block;
            margin: 10px 0;
        }

        input {
            width: 100%;
            height: 25px;
            margin-top: 2px;
            display: block;
        }

    </style>
</head>
<body>
<form action="">
    <fieldset>
        <legend>表单类型</legend>
        <label for="">
            email: <input type="email" name="email" required>
        </label>
        <label for="">
            color: <input type="color" name="color">
        </label>
        <label for="">
            url: <input type="url" name='url'>
        </label>
        <label for="">
            number: <input type="number" step="3" name="number">
        </label>
        <label for="">
            range: <input type="range" name="range" value="100">
        </label>
        <label for="">
            search: <input type="search" name="search">
        </label>
        <label for="">
            tel: <input type="tel" name="tel">
        </label>
        <label for="">
            time: <input type="time" name="time">
        </label>
        <label for="">
            date: <input type="date" name="date">
        </label>
        <label for="">
            datetime: <input type="datetime">
        </label>
        <label for="">
            week: <input type="week" name="week">
        </label>
        <label for="">
            month: <input type="month" name="month">
        </label>
        <label for="">
            datetime-local: <input type="datetime-local" name="datetime-local">
        </label>
        <input type="submit">
    </fieldset>
</form>
</body>
</html>
```

代码解释：

`<fieldset>` 标签将表单里的内容进行打包，代表一组；而`<legend> `标签的则是 fieldset 里的元素定义标题。

### 表单元素（标签）

这里讲两个表单元素。

**1、`<datalist>` 数据列表：**


```html
<input type="text" list="myData">
<datalist id="myData">
    <option>本科</option>
    <option>研究生</option>
    <option>不明</option>
</datalist>
```

上方代码中，input里的list属性和 datalist 进行了绑定。

效果：

![](http://img.smyhvae.com/20180206_1845.gif)

上图可以看出，数据列表可以自动提示。

2、`<keygen>`元素：

keygen 元素的作用是提供一种验证用户的可靠方法。

keygen 元素是密钥对生成器（key-pair generator）。当提交表单时，会生成两个键：一个公钥，一个私钥。

私钥（private key）存储于客户端，公钥（public key）则被发送到服务器。公钥可用于之后验证用户的客户端证书（client certificate）。

3、`<meter>`元素：度量器

- low：低于该值后警告

- high：高于该值后警告

- value：当前值

- max：最大值

- min：最小值。

举例：

```javascript
	<meter  value="81"    min="0" max="100"  low="60"  high="80"/>
```

### 表单属性

- `placeholder` 占位符（提示文字）

- `autofocus` 自动获取焦点

- `multiple` 文件上传多选或多个邮箱地址

- `autocomplete` 自动完成（填充的）。on 开启（默认），off 取消。用于表单元素，也可用于表单自身(on/off)

- `form` 指定表单项属于哪个form，处理复杂表单时会需要

- `novalidate` 关闭默认的验证功能（只能加给form）

- `required` 表示必填项

- `pattern` 自定义正则，验证表单。例如

代码举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        form {
            width: 100%;
            /* 最大宽度*/
            max-width: 640px;
            /* 最小宽度*/
            min-width: 320px;
            margin: 0 auto;
            font-family: "Microsoft Yahei";
            font-size: 20px;
        }

        input {
            display: block;
            width: 100%;
            height: 30px;
            margin: 10px 0;
        }
    </style>
</head>
<body>

<form action="">
    <fieldset>
        <legend>表单属性</legend>
        <label for="">
            用户名：<input type="text" placeholder="例如：smyhvae" autofocus name="userName" autocomplete="on" required/>
        </label>

        <label for="">
            电话：<input type="tel" pattern="1\d{10}"/>
        </label>

        <label for="">
            multiple的表单: <input type="file" multiple>
        </label>

        <!-- 上传文件-->
        <input type="file" name="file" multiple/>

        <input type="submit"/>
    </fieldset>
</form>

</body>
</html>
```

### 表单事件

- `oninput()`：用户输入内容时触发，可用于输入字数统计。

- `oninvalid()`：验证不通过时触发。比如，如果验证不通过时，想弹出一段提示文字，就可以用到它。


举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        form {
            width: 100%;
            /* 最大宽度*/
            max-width: 400px;
            /* 最小宽度*/
            min-width: 200px;
            margin: 0 auto;
            font-family: "Microsoft Yahei";
            font-size: 20px;
        }

        input {
            display: block;
            width: 100%;
            height: 30px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
<form action="">
    <fieldset>
        <legend>表单事件</legend>
        <label for="">
            邮箱：<input type="email" name="" id="txt1"/>
        </label>
        <label for="">
            输入的次数统计：<input type="text" name="" id="txt2"/>
        </label>

        <input type="submit"/>
    </fieldset>
</form>
<script>

    var txt1 = document.getElementById('txt1');
    var txt2 = document.getElementById('txt2');
    var num = 0;

    txt1.oninput = function () {  //用户输入时触发

        num++;  //用户每输入一次，num自动加 1
        //将统计数显示在txt2中
        txt2.value = num;
    }
    txt1.oninvalid = function () {  //验证不通过时触发
        this.setCustomValidity('亲，请输入正确哦');  //设置验证不通过时的提示文字
    }

</script>
</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180206_1920.gif)

## 多媒体

在HTML5之前，在网页上播放音频/视频的通用方法是利用Flash来播放。但是大多情况下，并非所有用户的浏览器都安装了Flash插件，由此使得音频、视频播放的处理变得非常复杂；并且移动设备的浏览器并不支持Flash插件。

H5里面提供了视频和音频的标签。

### 音频

HTML5通过`<audio>`标签来解决音频播放的问题。

使用举例：

```html
	<audio src="music/yinyue.mp3" autoplay controls> </audio>
```

效果如下：

![](http://img.smyhvae.com/20180206_1958.png)

我们可以通过附加属性，来更友好地控制音频的播放，如：

- `autoplay` 自动播放。写成`autoplay` 或者 `autoplay = ""`，都可以。

- `controls` 控制条。（建议把这个选项写上，不然都看不到控件在哪里）

- `loop` 循环播放。

- `preload` 预加载 同时设置 autoplay 时，此属性将失效。

**处理兼容性问题：**

由于版权等原因，不同的浏览器可支持播放的格式是不一样的：

![](http://img.smyhvae.com/20180206_1945.png)

为了做到多浏览器支持，可以采取以下兼容性写法：

```html
<!--推荐的兼容写法：-->
<audio controls loop>
    <source src="music/yinyue.mp3"/>
    <source src="music/yinyue.ogg"/>
    <source src="music/yinyue.wav"/>
    抱歉，你的浏览器暂不支持此音频格式
</audio>
```

代码解释：如果识别不出音频格式，就弹出那句“抱歉”。


### 视频


HTML5通过`<video>`标签来解决视频播放的问题。

使用举例：

```html
	<video src="video/movie.mp4" controls autoplay></video>
```


我们可以通过附加属性，来更友好地控制视频的播放，如：

- `autoplay` 自动播放。写成`autoplay` 或者 `autoplay = ""`，都可以。

- `controls` 控制条。（建议把这个选项写上，不然都看不到控件在哪里）

- `loop` 循环播放。

- `preload` 预加载 同时设置 autoplay 时，此属性将失效。

- `width`：设置播放窗口宽度。

- `height`：设置播放窗口的高度。

由于版权等原因，不同的浏览器可支持播放的格式是不一样的：

![](http://img.smyhvae.com/20180206_2025.png)

兼容性写法：

```html
    <!--<video src="video/movie.mp4" controls  autoplay ></video>-->
    <!--  行内块 display:inline-block -->
    <video controls autoplay>
        <source src="video/movie.mp4"/>
        <source src="video/movie.ogg"/>
        <source src="video/movie.webm"/>
        抱歉，不支持此视频
    </video>
```

## DOM 操作

### 获取元素

- document.querySelector("selector") 通过CSS选择器获取符合条件的第一个元素。

- document.querySelectorAll("selector")  通过CSS选择器获取符合条件的所有元素，以类数组形式存在。

### 类名操作

- Node.classList.add("class") 添加class

- Node.classList.remove("class") 移除class

- Node.classList.toggle("class") 切换class，有则移除，无则添加

- Node.classList.contains("class") 检测是否存在class

### 自定义属性

js 里可以通过 `box1.index=100;`  `box1.title` 来自定义属性和获取属性。

H5可以直接在标签里添加自定义属性，**但必须以 `data-` 开头**。

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<!-- 给标签添加自定义属性 必须以data-开头 -->
<div class="box" title="盒子" data-my-name="smyhvae" data-content="我是一个div">div</div>
<script>
    var box = document.querySelector('.box');

    //自定义的属性 需要通过 dateset[]方式来获取
    console.log(box.dataset["content"]);  //打印结果：我是一个div
    console.log(box.dataset["myName"]);    //打印结果：smyhvae

    //设置自定义属性的值
    var num = 100;
    num.index = 10;
    box.index = 100;
    box.dataset["content"] = "aaaa";

</script>
</body>
</html>
```

### 举例：鼠标点击时，tab栏切换

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Tab 标签</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #F7F7F7;
        }

        .tabs {
            width: 400px;
            margin: 30px auto;
            background-color: #FFF;
            border: 1px solid #C0DCC0;
            box-sizing: border-box;
        }

        .tabs nav {
            height: 40px;
            text-align: center;
            line-height: 40px;
            overflow: hidden;
            background-color: #C0DCC0;
            display: flex;
        }

        nav a {
            display: block;
            width: 100px;
            border-right: 1px solid #FFF;
            color: #000;
            text-decoration: none;
        }

        nav a:last-child {
            border-right: 0 none;
        }

        nav a.active {
            background-color: #9BAF9B;
        }

        .cont {
            overflow: hidden;
            display: none;
        }

        .cont ol {
            line-height: 30px;
        }
    </style>
</head>

<body>
    <div class="tabs">
        <nav>
            <a href="javascript:;" data-cont="local">国内新闻</a>
            <a href="javascript:;" data-cont="global">国际新闻</a>
            <a href="javascript:;" data-cont="sports">体育新闻</a>
            <a href="javascript:;" data-cont="funny">娱乐新闻</a>
        </nav>
        <section class="cont" id="local">
            <ol>
                <li>国内新闻1</li>
                <li>国内新闻2</li>
                <li>国内新闻3</li>
                <li>国内新闻4</li>
                <li>国内新闻5</li>
                <li>国内新闻6</li>
                <li>国内新闻7</li>
            </ol>
        </section>
        <section class="cont" id="global">
            <ol>
                <li>国内新闻1</li>
                <li>国际新闻2</li>
                <li>国际新闻3</li>
                <li>国际新闻4</li>
                <li>国际新闻5</li>
                <li>国际新闻6</li>
            </ol>
        </section>
        <section class="cont" id="sports">
            <ol>
                <li>体育新闻1</li>
                <li>体育新闻2</li>
                <li>体育新闻3</li>
                <li>体育新闻4</li>
                <li>体育新闻5</li>
                <li>体育新闻6</li>
                <li>体育新闻7</li>
            </ol>
        </section>
        <section class="cont" id="funny">
            <ol>
                <li>娱乐新闻1</li>
                <li>娱乐新闻2</li>
                <li>娱乐新闻3</li>
                <li>娱乐新闻4</li>
                <li>娱乐新闻5</li>
                <li>娱乐新闻6</li>
                <li>娱乐新闻7</li>
            </ol>
        </section>
    </div>
    <script>
        // 目标： 默认显示一个 当前的样式
        // 点击导航，实现切换
        // key 表示的当前显示的是第几个

        (function (key) {
            // 获取所有的导航
            var navs = document.querySelectorAll('nav a');
            // 遍历 给导航 绑定事件，并且添加当前样式
            for (var i = 0; i < navs.length; i++) {
                // 如果是用户指定的当前样式
                if (key == i) {
                    navs[i].classList.add('active');
                    // 拿到要显示内容section的id
                    var secId = navs[i].dataset['cont'];
                    // 获取对应的section标签
                    document.querySelector('#' + secId).style.display = 'block';
                }

                // 给每一个导航绑定点击事件
                navs[i].onclick = function () {
                    // 排他
                    // 之前有active样式的清除, 之前显示的section 隐藏
                    var currentNav = document.querySelector('.active');
                    // 获取对应的内容区域 ，让其隐藏
                    var currentId = currentNav.dataset['cont'];
                    // 去掉导航的active 样式
                    currentNav.classList.remove('active');
                    // 对应的内容区域
                    document.querySelector('#' + currentId).style.display = 'none';

                    // 突出显示自己 导航添加样式  对应的section 显示
                    // 给自己添加active样式
                    this.classList.add('active');
                    // 对应的section模块显示出来
                    var myId = this.dataset['cont'];
                    document.querySelector('#' + myId).style.display = 'block';
                }
            }

        })(0);


    </script>
</body>

</html>
```


## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)
---
title: 06-HTML标签：图片标签
publish: true
---

<ArticleTopAd></ArticleTopAd>


## img标签介绍

### 介绍

img: 英文全称 image（图像），代表的是一张图片。

如果要想在网页中显示图像，就可以使用img 标签，它是一个单标签。语法如下：

```html
<img src="图片的URL" />
```

### 能插入的图片类型

- 能够插入的图片类型是：jpg(jpeg)、gif、png、bmp等。

- 不能往网页中插入的图片格式是：psd、ai等。

HTML页面不是直接插入图片，而是插入图片的引用地址，所以要先把图片上传到服务器上。

## img标签的`src`属性
这里涉及到图片的一个属性：

- `src`属性：指图片的路径。英文名称 source。

在写**图片的路径**时，有两种写法：相对路径、绝对路径

### 写法一：图片的相对路径

相对当前页面所在的路径。两个标记 `.` 和 `..` 分表代表当前目录和上一层目录。

举例1：

```html
<!-- 当前目录中的图片 -->
<img src="2.jpg">
<img src="./2.jpg">

<!-- 上一级目录中的图片 -->
<img src="../2.jpg">
```

相对路径不会出现这种情况：

```html
aaa/../bbb/1.jpg
```

`../`要么不写，要么就写在开头。

举例2：

```html
<img src="images/1.jpg">
```
上方代码的意思是说，当前html页面有一个并列的文件夹`images`，在文件夹`images`中存放了一张图片`1.jpg`
效果：

![Paste_Image.png](http://img.smyhvae.com/20151001_19.jpg)

相对路径的面试题。现有如下文件层级图：

![](http://img.smyhvae.com/20170630_1133.png)

问题：如果想在index.html中插入1.png，那么对应的img语句是？

分析：

现在document是最大的文件夹，里面有两个文件夹work和photo。work中又有一个文件夹叫做myweb。myweb文件夹里面有index.html。  所以index.html在myweb文件夹里面，上一级就是work文件夹，上两级就是document文件夹。通过document文件夹当做一个中转站，进入photo文件夹，看到了1.png。

答案：

```html
<img src="../../photo/1.png" />
```

### 写法二：图片的绝对路径

绝对路径包括以下两种：

（1）以盘符开始的绝对路径。举例：

```html
<img src="C:\Users\qianguyihao\Desktop\html\images\1.jpg">
```

（2）网络路径。举例：

```html
<img src="http://img.smyhvae.com/20200122_200901.png">

```

大家打开上面的img中的链接，可能有彩蛋哦。

### 相对路径和绝对路径的总结

相对路径的好处：站点不管拷贝到哪里，文件和图片的相对路径关系都是不变的。相对路径使用有一个前提，就是网页文件和你的图片，必须在一个服务器上。

**总结一下**：

无论是在 a 标签还是 img 标签上，如果要用路径。只有两种路径能用，就是相对路径和绝对路径：

- 相对路径从自己出发，找到别人。

- 绝对路径，就是`http://`或者`https://`开头的路径。

## img标签的其他属性

### width、height 属性

- `width`：图像的宽度。

- `height`：图像的高度。

width和height，在 HTML5 中的单位是 CSS 像素，在 HTML 4 中既可以是像素，也可以是百分比。可以只指定 width 和 height 中的一个值，浏览器会根据原始图像进行缩放。

**重要提示**：如果要想保证图片等比例缩放，请只设置width和height中其中一个。

### Alt 属性

- `alt`：当图片不可用（无法显示）的时候，代替图片显示的内容。alt是英语 alternate “替代”的意思，代表替换资源。

`Alt`属性效果演示：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_21.png)

如上图所示：当图片 src 不可用的时候，显示文字。这样做，至少能让用户知道，这个图片大概是什么内容。

### title 属性

- `title`：**提示性文本**。鼠标悬停时出现的文本。

title 属性不该被用作一幅图片在 alt 之外的补充说明信息。如果一幅图片需要小标题，使用 figure 或 figcaption 元素。

title 元素的值一般作为提示条(tooltip)呈现给用户，在光标于图片上停下后显示出来。尽管这确实能给用户提供更多的信息，您不该假定用户真的能看到：用户可能只有键盘或触摸屏。如果要把特别重要的信息提供给用户，可以选择上面提供的一种方法将其内联显示，而不是使用 title。

举例：

```html
<img src="images/1.jpg" width="300" height="`188" title="这是美女">
```

效果：

![Paste_Image.png](http://img.smyhvae.com/2015-10-01-cnblogs_html_20.png)

### align 属性

- 图片的`align`属性：**图片和周围文字的相对位置**。属性取值可以是：bottom（默认）、center、top、left、right。

如果想实现图文混排的效果，请使用align属性，取值为left或right。

我们来分别看一下这`align`属性的这几个属性值的区别。

1、`align=""`，图片和文字底端对齐。即默认情况下的显示效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_19.png)

2、`align="center"`：图片和文字水平方向上居中对齐。显示效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_21.png)

3、`align="top"`：图片与文字顶端对齐。显示效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_22.png)

4、`align="left"`：图片在文字的左边。显示效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_23.png)

5、`align="right"`：图片在文字的右边。显示效果：

![](http://img.smyhvae.com/2015-10-02-cnblogs_html_24.png)


### 其他已废弃的属性

- `Align`（已废弃）：指图片的水平对齐方式，属性值可以是：top、middle、bottom、left、center、right。该属性已废弃，替换为 `vertical-align`这个CSS属性。
- `border`（已废弃）：给图片加边框，单位是像素，边框的颜色默认黑色。该属性已废弃，替换为 `border`这个CSS属性。
- `Hspace`（已废弃）：指图片左右的边距。
- `Vspace`（已废弃）：指图片上下的边距。

最后，送上妹子的近照一张。楼主已经仁至义尽了：http://img.smyhvae.com/2015-10-01-cnblogs_html_20150219214912_11994.jpg

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)---
title: 12-HTML基础回顾
---

<ArticleTopAd></ArticleTopAd>

## 本文主要内容

- html 的常见元素

- html 元素的分类

- html 元素的嵌套关系

- html 元素的默认样式和 CSS Reset

- html 常见面试题

## html 的常见元素

html 的常见元素主要分为两类：head 区域的元素、body 区域的元素。下面来分别介绍。

### 1、head 区域的 html 元素

> head 区域的 html 元素，不会在页面上留下直接的内容。

- meta

- title

- style

- link

- script

- base

**base元素的介绍**：

```html
<base href="/">
```

base 标签用于指定基础的路径。指定之后，所有的 a 链接都是以这个路径为基准。

### 2、html 元素（body 区域）

> body 区域的 html 元素，会直接出现在页面上。

- div、section、article、aside、header、footer

- p

- span、em、strong

- 表格元素：table、thead、tbody、tr、td

- 列表元素：ul、ol、dl、dt、dd

- a

- 表单元素：form、input、select、textarea、button

div 是最常见的元素，大多数场景下，都可以用div（实在不行就多包几层div）。可见，**div 是比较通用的元素，这也决定了 div 的的语义并不是很明确**。

**常见标签的重要属性**：

- a[href,target]
- img[src,alt]
- table td[colspan,rowspan]。设置当前单元格占据几行几列。在合并单元格时，会用到。
- form[action,method,enctype]
- input[type,value]
- button[type]
- selection>option[value]
- label[for]

### html 文档的大纲

我们平时在写论文或者其他文档的时候，一般会先列出大纲，然后再写具体的内容。

同样，html 网页也可以看成是一种文档，也有属于它的大纲。

一个常见的html文档，它的结构可以是：

```html
    <section>
        <h1>一级标题</h1>

        <section>
            <h2>二级标题</h2>
            <p>段落内容</p>
        </section>

        <section>
            <h2>二级标题</h2>
            <p>段落内容</p>
        </section>

        <aside>
            <p>广告内容</p>
        </aside>

    </section>

    <footer>
        <p>某某公司出品</p>
    </footer>
```

### 查看网页大纲的工具

我们可以通过 <http://h5o.github.io/> 这个工具查看一个网页的大纲。

**使用方法**：

（1）将网址 <http://h5o.github.io/> 保存到书签栏

（2）去目标网页，点击书签栏的网址，即可查看该网页的大纲。

这个工具非常好用，既可以查看网页的大纲，也可以查看 markdown 在线文档的结构。

## html 元素的分类

按照样式分类：

- 块级元素

- 行内元素

- inline-block：比如`form`表单元素。对外的表现是行内元素（不会独占一行），对内的表现是块级元素（可以设置宽高）。

按照内容分类：

![](http://img.smyhvae.com/20191003_1946.png)

图片来源：<https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content>

## html 元素的嵌套关系

- 块级元素可以包含行内元素。

- 块级元素**不一定**能包含块级元素。比如 div 中可以包含 div，但 p 标签中不能包含 div。

- 行内元素**一般**不能包含块级元素。比如 span 中不能包含 div。但有个特例：在 HTML5 中， a 标签中可以包含 div。

**注意**：在 HTML5 中 `a > div` 是合法的， `div > a > div`是不合法的 ；但是在 html 4.0.1 中， `a > div` 仍然是不合法的。

## html 元素的默认样式和 CSS Reset

比如下拉框这种比较复杂的元素，是自带默认样式的。如果没有这个默认样式，则该元素在页面上不会有任何表现，则必然增加一些工作量。

同时，默认样式也会带来一些问题：比如，有些默认样式我们是不需要的；有些默认样式甚至无法去掉。

如果我们不需要默认的样式，这里就需要引入一个概念：**CSS Reset**。

### 常见的 CSS Reset 方案

**方案一**：

CSS Tools: Reset CSS。链接：<https://meyerweb.com/eric/tools/css/reset/>

**方案二**：

雅虎的 CSS Reset。链接：<https://yuilibrary.com/yui/docs/cssreset/>

我们可以直接通过 CDN 的方式引入：

```html
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css">
```
**方式三**：（比较有争议）

```css
*{
    margin: 0;
    padding: 0;
}

```
上面何种写法，比较简洁，但也有争议。有争议的地方在于，可能会导致 css 选择器的性能问题。

### Normalize.css

上面的几种 css reset 的解决思路是：将所有的默认样式清零。

但是，[Normalize.css](https://necolas.github.io/normalize.css/) 的思路是：既然浏览器提供了这些默认样式，那它就是有意义的。**既然不同浏览器的默认样式不一致，那么，`Normalize.css`就将这些默认样式设置为一致**。

## html 常见面试题

### doctype 的意义是什么

- 让浏览器以标准模式渲染

- 让浏览器知道元素的合法性

### HTML、XHTML、HTML5的区别

- HTML 属于 SGML

- XHTML 属于 XML，是 HTML 进行 XML 严格化的结果

- HTML5 不属于SGML，也不属于 XML（HTML5有自己独立的一套规范），比 XHTML 宽松。

### HTML5 有什么新的变化

- 新的语义化元素

- 表单增强

- 新的API：离线、音视频、图形、实时通信、本地存储、设备能力等。

### em 和 i 的区别

共同点：二者都是表示斜体。

区别：

- em 是语义化的标签，表示强调。

- i 是纯样式的标签，表示斜体。HTML5 中不推荐使用。

### 语义化的意义是什么

- 开发者容易理解，便于维护。

- 机器（搜索引擎、读屏软件等）容易理解结构

- 有助于 SEO

### 哪些元素可以自闭合

> 自闭合的元素中不能再嵌入别的元素。且 HTML5 中要求加斜杠。

- 表单元素 input

- 图片 img

- br、hr

- meta、link

### form 表单的作用

- 直接提交表单

- 使用 submit / reset 按钮

- 便于浏览器保存表单

- 第三方库（比如 jQuery）可以整体获取值

- 第三方库可以进行表单验证

所以，如果我们是通过 Ajax 提交表单数据，也建议加上 form。

---
title: 02-JavaScript书写方式：hello world
---

## 开始写第一行 JavaScript：hello world

JS 代码的书写位置在哪里呢？这个问题，也可以理解成：引入 JS 代码，有哪几种方式？有三种方式：（和 CSS 的引入方式类似）

1. **行内式**：写在标签内部。

2. **内嵌式**（内联式）：写在 head 标签中。

3. **外链式**：引入外部 JS 文件。

### 方式 1：行内式

**代码举例**：

```javascript
<input type="button" value="点我点我" onclick="alert('千古壹号 Hello 方式1')" />
```

完整的可执行代码如下：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <input type="button" value="点我点我" onclick="alert('千古壹号 Hello 方式1')" />
    </body>
</html>
```

**分析**：

-   可以将单行或少量 JS 代码写在 HTML 标签的事件属性中（以 on 开头的属性），比如放在上面的 `onclick`点击事件中。

-   这种书写方式，不推荐使用，原因是：可读性差，尤其是需要编写大量 JS 代码时，很难维护；引号多层嵌套时，也容易出错。

-   关于代码中的「引号」，在 HTML 标签中，我们推荐使用双引号，JS 中我们推荐使用单引号。

### 方式 2、内嵌式（内联式）

我们可以在 HTML 页面的 `<body>` 标签里放入`<script type=”text/javascript”></script>`标签对，并在`<script>`里书写 JavaScript 代码：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
    </head>
    <body>
        <script type="text/javascript">
            // 在这里写 js 代码
            alert('千古壹号 hello 方式2');
            console.log('qianguyihao hello 方式2');
        </script>
    </body>
</html>
```

**分析**：

-   text 表示纯文本，因为 JavaScript 代码本身就是纯文本。

-   可以将多行 JS 代码写到 `<script>` 标签中。

-   内嵌式 JS 是学习时常用的方式。

### 方式 3：外链式

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
    </head>
    <body>
        <!-- 外链式：引入外部的 js 文件：这个 utils.js 文件与当前的 html 文件，处于同一级目录 -->
        <script src="utils.js"></script>
    </body>
</html>
```

**分析**：

-   上面这段代码，依然是放到 body 标签里，可以和内嵌的 JS 代码并列。
-   上方代码的 script 标签已经引入了外部 JS 文件，所以这个标签里面，不可以再写 JS 代码。

**总结**：

我们在实战开发中，基本都是采用方式 3，因为将 html 文件和 js 文件分开的方式，有利于代码的结构化和复用，符合高内聚、低耦合的思想。很少会有人把一大堆 JS 代码塞到 html 文件里。

### 关于 window.onload：先加载，最后执行

上面的三种方式，有个共同的地方是：JS 代码都是写在`</body>`中的，准确来说，是在页面标签元素的后面，在 body**结束标签**的前面。

为什么一般是按这样的顺序来写呢？这是因为：浏览器默认会**从上至下**解析网页（这句话很重要）。当你**需要通过 JS 来操作界面上的标签元素**的时候，假如将 JS 代码、`<script>`标签写到`<head>`标签中，或者写在页面标签元素的前面，那么这样的 JS 是无效的，因为标签元素在此时都还没来得及加载，自然无法操作这个元素。

**重点来了：**

当你**需要通过 JS 来操作界面上的标签元素**的时候，如果实在想把 JS 写到`<head>`标签中，那么就必须用 window.onload 将 JS 代码进行包裹。代码格式如下：

```html
<head>
  window.onload = function(){
    // 这里可以写操作界面元素的JS代码，等页面加载完毕后再执行
    ...
  }
</head>
```

**window.onload**的含义是：等界面上所有内容都加载完毕后（不仅要等文本加载完毕，而且要等图片也要加载完毕），再执行`{}`中的代码。做到了**先加载，最后执行**，也就是：**等页面加载完毕后再执行**。

当然，我们可以根据具体需求，将 window.onload 写在 `<head>`标签中，或者写在`<script>`标签中。

## JavaScript 一些简单的语法规则

学习程序，是有规律可循的，程序会有有相同的部分，这些部分就是一种规定，不能更改，我们称之为：语法。我们先来了解一个简单的语法规则。

1、JS 对换行、缩进、空格不敏感。每一条语句以分号结尾。

也就是说：

代码一：

```html
<script type="text/javascript">
    alert('今天蓝天白云');
    alert('我很高兴');
</script>
```

等价于代码二：

```html
<script type="text/javascript">
    alert('今天蓝天白云');alert('我很高兴');
</script>
```

2、每一条语句末尾要加上**分号**。虽然分号不是必须加的，但如果不写分号，浏览器会自动添加分号，导致消耗一些系统资源和性能，甚至有可能**添加错误**。

3、所有的符号，都是英文的。比如**括号**、引号、分号。

如果你用的是搜狗拼音，**建议不要用 shift 切换中英文**（可以在搜狗软件里进行设置），不然很容易输入中文的分号；建议用 ctrl+space 切换中英文输入法。

4、JS 严格区分大小写。

## 前端代码的注释

注释：即解释、注解。注释有利于提高代码的可读性，且有利于程序员之间的沟通。

注释可以用来解释某一段代码的功能和作用；通过注释，还可以补充代码中未体现出来的部分。

注释可以是任何文字，可以写中文。

**我们不要把 HTML、CSS、JavaScript 三者的注释格式搞混淆了**。

### HTML 的注释

格式：

```html
<!-- 我是 HTML 注释  -->
```

举例：

```html
<!--头部开始-->
<div class="header"></div>
<!--头部结束-->

<!--内容开始-->
<div class="main"></div>
<!--内容结束-->

<!--底部开始-->
<div class="footer"></div>
<!--底部结束-->
```

### CSS 的注释

举例：

```html
<style type="text/css">
    /* 我是 CSS 注释 */
    p {
        font-weight: bold;
        font-style: italic;
        color: red;
    }
</style>
```

注意：CSS 只有`/* */`这种注释，没有`//`这种注释。而且注释要写在`<style>`标签里面才算生效。

### JavaScript 的注释

单行注释：

```js
// 我是注释
```

多行注释：

```js
/*
	多行注释1
	多行注释2
*/
```

补充：VS Code 中，单行注释的快捷键是「Ctrl + /」，多行注释的默认快捷键是「Alt + Shift + A」。

当然，如果你觉得多行注释的默认快捷键不方便，我们还可以修改默认快捷键。操作如下：

VS Code --> 首选项 --> 键盘快捷方式 --> 查找“注释”这两个字 --> 将原来的快捷键修改为其他的快捷键，比如「Ctrl + Shift + /」。

### 对注释的认知

很多人认为：代码注释是多余的。他们的理由是：如果注释太多，说明代码写得不清晰；而且，代码更新的同时，如果注释没更新，那段注释就成了磁盘上的垃圾，误导他人。

还有人认为：注释应该尽可能详细，就像写小作文一样。

上面这样的理由，都不具有说服力。我告诉你为什么要写注释：

1. 所有注释都是必要的吗？当然不是。注释不应该用来解释某些代码正在做什么。如果代码无法清楚到去解释自己时，那么代码需要变得更简单。有一些例外，比如正则表达式和复杂算法通常会从解释他们正在做什么事情的注释中获益很多。

2. 注释用于解释为什么某些代码存在时很有用。大多数注释都是针对代码本身无法包含的信息，例如决策背后的推理、业务流程、业务逻辑、注意事项、防踩坑指南、参考链接。

3. 注释即文档，需要持续更新维护，新陈代谢。文档也会过期，但不能因噎废食。即便文档过期，至少它记载了曾经的开发记录。

推荐阅读：

-   开发者代码审查 review 指南：https://jimmysong.io/eng-practices/docs/review/

## JavaScript 输出语句

### 弹窗：alert()语句

我们要学习的第一个语句，就是 alert 语句。

代码举例如下：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script>
            alert('千古壹号');
        </script>
    </body>
</html>
```

**alert**（英文翻译为“警报”）的用途：**弹出“警告框”**。它会在弹窗中显示一条信息，并等待用户按下 “OK”。

`alert("")`弹窗的效果如下：

![](http://img.smyhvae.com/20180116_1735.gif)

这个弹窗，在 IE 浏览器中长这样：

![](http://img.smyhvae.com/20180116_1906.png)

上面的代码中，如果写了两个 alert()语句，则网页的效果是：弹出第一个警告框，点击确定后，继续弹出第二个警告框。

### 弹窗：confirm()语句（含确认/取消）

代码举例如下：

```
var result = confirm('你听说过千古壹号吗？');
console.log(result);
```

代码运行后，页面上会显示一个弹窗。弹窗上有“确认”和“取消”两个按钮，点击“确定”返回 `true`，点击“取消”返回 `false`。

效果如下：

![20211031-1537](http://img.smyhvae.com/20211031-1537.gif)

### 弹出输入框：prompt()语句

`prompt()`就是专门弹出能够让用户输入的对话框。用得少，测试的时候偶尔会用。

JS 代码如下：

```javascript
var a = prompt('请随便输入点什么东西吧');
console.log(a);
```

上方代码中，用户输入的内容，将被传递到变量 a 里面，并在控制台打印出来。

效果如下：

![](http://img.smyhvae.com/20180116_2230.gif)

**alert()和 prompt()的区别：**

-   alert() 语句中可以输出数字和字符串，如果要输出字符串，则必须用引号括起来；prompt()语句中，用户不管输入什么内容，都是字符串。
-   prompt() 会返回用户输入的内容。我们可以用一个变量，来接收用户输入的内容。

### 网页内容区域输出：document.write()语句

代码举例：

```
document.write('千古前端图文教程');
```

页面效果：

![20211031_1543](http://img.smyhvae.com/20211031_1543.png)

### 控制台输出：console.log() 打印日志

`console.log()`表示在控制台中输出。console 表示“控制台”，log 表示“输出”。括号里可以写字符串、数字、变量。

控制台是程序员调试程序的地方，比如使用 console 语句打印日志，测试程序是否运行正常。

在 Chrome 浏览器中，按 F12 即可打开控制台，选择「console」栏，即可看到打印的内容。

`console.log("")`效果如下：

![](http://img.smyhvae.com/20180116_2008.gif)

console 语句可以设置不同的打印等级：

```js
console.log('千古壹号1'); //普通打印
console.warn('千古壹号2'); //警告打印
console.error('千古壹号3'); //错误打印
```

效果如下：

![20211031_1552](https://img.smyhvae.com/20211031_1552.png)

上图中，不同的打印等级，区别不大，只是颜色背景上的区别，方便肉眼区分、过滤信息。

普通人是不会在意控制台的，但是有些网站另藏玄机。比如百度首页的控制台，悄悄地放了一段招聘信息的彩蛋，挺有意思：

![](http://img.smyhvae.com/20180116_2010.png)

做前端开发时需要经常使用控制台做调试，我们甚至可以直接在控制台输入 JS 语句，然后打印执行结果。

**总结**：alert() 主要用来显示消息给用户，console.log() 用来给程序员做调试用。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20200102.png)
---
title: 00-编程语言简介
---

<ArticleTopAd></ArticleTopAd>

## 编程语言的概念

### 编程

**编程**：让计算机为解决某个问题而使用某种程序设计语言编写程序代码，并最终得到结果的过程。

**计算机程序**：就是计算机所执行的一系列的**指令集合**，而程序全部都是用我们所掌握的语言来编写的，所以人们如果要控制计算机，则需要通过计算机语言向计算机发出命令。

### 计算机语言

**计算机语言**：人与计算机之间通讯的语言。它是人与计算机之间传递信息的媒介，用来控制计算机的一系列指令。

计算机语言的种类非常的多，总的来说可以分成三大类：机器语言、汇编语言和高级语言。

计算机最终所执行的都是机器语言，它是由“0”和“1”组成的二进制数，二进制是计算机语言的基础。

### 编程语言

通过类似于人类语言的 ”语言”来控制计算机，让计算机为我们做事情，这样的语言就叫做编程语言。不同的编程语言，有不同的语法，必须遵守。

如今通用的编程语言有两种形式：汇编语言和高级语言。

-   **汇编语言**：与机器语言实质是相同的，都是直接对硬件操作，只不过指令采用了英文缩写的标识符，容易识别和记忆。

-   **高级语言**：主要是相对于低级语言而言，它并不是特指某一种具体的语言，而是包括了很多编程语言，比如：C 语言、C++、Java、C#、PHP、JavaScript、Python、Objective-C、Swift、Go 语言等。

## 编程语言的分类

### 翻译器

计算机不能直接理解任何除机器语言以外的语言，所以必须要把程序员所编写的高级语言翻译成机器语言，计算机才能执行程序。为此，我们需要一个翻译器。**程序语言翻译成机器语言的工具，被称为翻译器**。

由此可见，所谓的“翻译”，指的是将人类所编写的源代码转换（翻译）为机器能够执行的指令，这也被称为二进制化。

翻译器翻译的方式有两种：一种是**编译**，另一种是**解释**。两种方式之间的区别在于**翻译的时机**不同。

-   **编译器**：在代码执行之前，事前把所有的代码一次性翻译好，生成中间代码文件，然后整体执行。

-   **解释器**：边翻译，边执行（在代码执行时进行及时翻译，并立即执行）。当编译器以解释的方式运行时，也称之为解释器。

对应的语言，称之为“编译型语言”、“解释型语言”。

### 1、编译型语言

-   定义：需要事先通过编译器**把所有的代码一次性翻译（编译/转换）好**，然后整体执行。比如 exe 文件。

-   优点：执行效率高，运行更快。

-   不足：移植性不好，不跨平台；编译之后如果需要修改就需要整个模块重新编译。

-   编译型语言举例：C、C++

比如说，c 语言的代码文件是`.c`后缀，翻译之后文件是`.obj`后缀，系统执行的是 obj 文件；再比如， java 语言的代码文件是`.java`后缀，翻译之后的文件是`.class`后缀。（但是，Java 语言不是严格的 编译型语言，这个一会儿会讲）

以 C 语言的`hello.c`来举例：

```c
#include <stdio.h>
int main(int argc, char const *argv[])
{
  printf("Hello world!");
  return 0;
}
```

对于以上 C 代码，main 是程序入口，实现的功能是打印字符串`hello world`到屏幕上，编译和执行过程如下：

1. C 语言代码经过预处理（比如依赖处理、宏替换）。以上方代码示例，`#include<stdio.h>`会在预处理阶段被替换。
2. 编译：编译器会把 C 语言翻译成汇编程序。一条 C 语言通常被编译为多条汇编代码，同时编译器会对程序进行优化，生成目标汇编程序。
3. 汇编语言通过汇编器再汇编成目标程序`hello.o`。
4. 链接：程序中往往包含一些共享目标文件，如示例代码中的`printf()`函数位于静态库，需要经过链接器进行链接。

![20211030-0031-2](https://img.smyhvae.com/20211030-0031-2.png)

（上方图片的来源：[JavaScript 基础-基本概念](https://www.jianshu.com/p/230093183f47) ）

![20211030-0026-2](http://img.smyhvae.com/20211030-0026-2.png)

（上方图片的来源：[编译型语言](https://p.0x06.cn/zh/program/) ）

### 2、解释型语言

-   定义：在运行过程中（runtime）通过解释器**边翻译边执行**（也就是逐行翻译：翻译一行，执行一行），不需要事先一次性翻译。

-   优点：移植性好，跨平台。

-   缺点：运行速度不如编译型语言。

-   解释型语言举例：JavaScript、PHP、Python。

### Java 语言

Java 语言是属于半编译半解释型语言。翻译过程：

（1）编译：`.java`代码文件先通过 javac 命令编译成`.class`文件。

（2）执行：`.class`文件再通过 jvm 虚拟机，解释执行。有了 jvm 的存在，让 java 跨平台了。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20200102.png)
---
title: 04-标识符、关键字、保留字

---

<ArticleTopAd></ArticleTopAd>

## 变量的命名规则（重要）

JS是大小敏感的语言。也就是说 A 和 a 是两个变量。大写字母是可以使用的，比如：

```javascript
var A = 250; //变量1
var a = 888; //变量2
```

我们来整理一下**变量的命名规则**，非常重要。

必须遵守：

-   只能由字母(A-Z、a-z)、数字(0-9)、下划线(\_)、美元符( $ )组成。
-   不能以数字开头。必须以字母(A-Z、a-z)、下划线(\_)或者美元符( $ )开头。变量名中不允许出现空格。尤其注意，变量名中不能出现**中划线**`-`，很多人写了多年代码都不知道这一点，让人大跌眼镜。
-   严格区分大小写（JS 是区分大小写的语言）。
-   不能使用 JS 语言中保留的「关键字」和「保留字」作为变量名。下一篇文章会讲。
-   变量名长度不能超过 255 个字符。
-   
-   汉语可以作为变量名。但是不建议使用，因为 low。

建议遵守：

- 命名要有可读性，方便顾名思义。

- 建议用驼峰命名法。比如 getElementById、getUserInfo、aaaOrBbbAndCcc

**补充**：

1、不能以数字开头，是为了把数字和字母区分开。

2、JS底层保存标识符的时候，是采用的 Unicode 编码。所以理论上讲，在遵守命名规则的前提下，utf-8中包含的所有内容都可以作为标识符。

## 标识符

**标识符**：在 JS 中所有的可以由我们**自主命名**的都可以称之为标识符。包括：**变量名、函数名、属性名、参数名**都是属于标识符。

通俗来讲，标识符就是我们写代码时为某些东西起的名字。类似于人出生的时候，起个人名。

**标识符的命名规则**和变量的命令规则是一样的。关于变量的命名规则，详见上一段。

标识符不能使用语言中保留的**关键字**及**保留字**。

## 关键字

**关键字**：被JS赋予了特殊含义的单词。也就是说，关键字是 JS 本身已经使用了的单词，我们不能再用它们充当变量名、函数名等标识符。关键字在开发工具中会显示特殊的颜色。

JS 中的关键字如下：

```bash
if、else、switch、break、case、default、for、in、do、while、

var、let、const、void、function、continue、return、

try、catch、finally、throw、debugger、

this、typeof、instanceof、delete、with、

export、new、class、extends、super、with、yield、import、static、

true、false、null、undefined、NaN
```
## 保留字

**保留字**：实际上就是预留的“关键字”。它们虽然现在还不是关键字，但是未来可能会成为关键字。同样不能用它们当充当变量名、函数名等标识符。

JS 中的保留字如下：

```bash
enum、await

abstract、boolean、byte、char、double、final、float、goto、int、long、native、short、synchronized、transient、volatile、

arguments eval Infinity

# 以下关键字只在严格模式中被当成保留字，在ES6中是属于关键字
implements、interface、package、private、protected、public
```

当你在网上搜“JS保留字”的时候，你会找到很多版本，每个版本都不一样，各有各的说法。**如果有不一样的地方，请以我写的为准**。

其实，以谁的版本作为标准并不重要，因为有些单词到底是**关键字**还是**保留字**，并没有严格的界限。JS 关于保留字的规则非常复杂，上放列表中的一些单词在特殊情况下其实是可以使用的。

我们只需要记住一点：上面提到的所有**关键字**和**保留字**，我们都不要用它们作为变量名或者参数名。不要尝试这些奇怪的做法。

如果你还想了解更多，可以看这几个参考链接：

- [知乎问答：undefined是保留字吗？](https://www.zhihu.com/question/472379938)

- 书籍《[JavaScript 悟道](https://book.douban.com/subject/35469273/)》的第一章：保留字部分。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 05-变量的数据类型：基本数据类型和引用数据类型
publish: true
---

<ArticleTopAd></ArticleTopAd>

## 数据分类

数据分为：静态数据、动态数据。

### 静态数据

静态数据是指一些永久性的数据。一般是以文件的形式存储在硬盘上，比如文档、照片、视频等文件。

电脑关闭后，静态数据仍然还在。只要不主动删掉数据或者硬盘没损坏，这些数据就一直都在。

### 动态数据

动态数据是在程序运行过程中，动态产生的临时数据，这些数据可能随时发生变化。一般存储在内存中。

电脑关闭后，这些数据会被清除。

为何不把应用程序的动态数据加载到硬盘中执行呢？这主要是因为，内存的访问速度比硬盘快无数倍。

## 变量的数据类型

### 为什么需要数据类型

在计算机中，不同的数据所需占用的存储空间不同，为了充分利用存储空间，于是定义了不同的数据类型。而且，不同的数据类型，寓意也不同。

我们都知道，无论这个变量是字符串类型，还是数字类型，我们都可以直接用 `var` 去定义它。比如：

```javascript
var a = 'hello word';

var b = 123;
```

为什么可以这样做呢？这是因为：JavaScript 是一种「弱类型语言」，或者说是一种「动态语言」，这意味着不需要提前声明变量的类型，在程序运行过程中，类型会自动被确定。

**JS 的变量数据类型，是在程序运行的过程中，根据等号右边的值来确定的**。而且，变量的数据类型是可以变化的。比如说：

```javascript
var name = 'qianguyihao';

name = 123; // 强制将变量 name 修改为 数字类型
```

### JS 中一共有八种数据类型

-   **基本数据类型（值类型）**：String 字符串、Number 数值、BigInt 大型数值、Boolean 布尔值、Null 空值、Undefined 未定义、Symbol。

-   **引用数据类型（引用类型）**：Object 对象。

注意：内置对象 Function、Array、Date、RegExp、Error 等都是属于 Object 类型。也就是说，除了那七种基本数据类型之外，其他的，都称之为 Object 类型。

BigInt 和 Symbol 是ES6中新增的类型，我们留到以后再讲。

> 面试问：引用数据类型有几种？

> 面试答：只有一种，即 Object 类型。

**数据类型之间最大的区别**：

-   基本数据类型：参数赋值的时候，传数值。

-   引用数据类型：参数赋值的时候，传地址。

## 一个经典的例子

**基本数据类型举例**：

```javascript
var a = 23;
var b = a;

a++;

console.log(a); // 打印结果：24
console.log(b); // 打印结果：23
```

上面的代码中：a 和 b 都是基本数据类型，让 b 等于 a，然后**改变 a 的值之后，发现 b 的值并没有被改变**。

但是在引用数据类型中，就不同了，我们来看一看。

**引用数据类型举例**：

```javascript
var obj1 = new Object();
obj1.name = 'smyh';

// 让 obj2 等于 obj1
var obj2 = obj1;

// 修改 obj1 的 name 属性
obj1.name = 'vae';

console.log(obj1.name); // 打印结果：vae
console.log(obj2.name); // 打印结果：vae
```

上面的代码中：obj1 和 obj2 都是引用数据类型，让 obj2 等于 obj1，然后**修改 obj1.name 的值之后，发现 obj2.name 的值也发生了改变**。

从上面的例子中，可以反映出，基本数据类型和引用数据类型是有区别的。

那到底有什么区别呢？我们进一步往下看。

## 栈内存和堆内存

我们首先记住一句话：JS 中，所有的**变量**都是保存在**栈内存**中的。

然后来看看下面的区别。

**基本数据类型**：

基本数据类型的值，直接保存在栈内存中。值与值之间是独立存在，修改一个变量不会影响其他的变量。

**引用数据类型**：

对象是保存到**堆内存**中的。每创建一个新的对象，就会在堆内存中开辟出一个新的空间；而**变量保存了对象的内存地址**（对象的引用），保存在栈内存当中。如果两个变量保存了同一个对象的引用，当一个通过一个变量修改属性时，另一个也会受到影响。

## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)
---
title: 01-JavaScript简介
---

<ArticleTopAd></ArticleTopAd>

## JavaScript 历史和发展

Web 前端有三层：

-   HTML：从语义的角度，描述页面**结构**

-   CSS：从审美的角度，描述**样式**（美化页面）

-   JavaScript（简称 JS）：从交互的角度，描述**行为**（实现业务逻辑和页面控制）

### JavaScript 的历史

1、JavaScript 诞生于**1995 年**，是由**网景**公司（Netscape）的员工 Brendan Eich（兰登 • 艾奇，1961 年～）发明，最初命名为 LiveScript。1995 年 12 月与 SUN 公司合作，因市场宣传需要，为了蹭 Java 的热度，改名为 JavaScript。

补充：

> 1994 年网景公司发布历史上第一个比较成熟的浏览器(Navigator 0.9), 但是只能浏览不能**交互**。1995 年为了解决表单有效性验证就要与服务器进行多次地往返交互问题，网景公司录用 Brendan Eich（兰登 • 艾奇），他只用了 10 天就开发出 LiveScript 语言的第一版。

> 由于 Sun 公司当时的 Java 语言特别火，所以为了傍大牌，就借势改名为 JavaScript。如同“北大”和“北大青鸟”的关系，“北大青鸟”就是傍“北大”的大牌。

> 同时期还有其他的网页语言，比如 VBScript、JScript 等等，但是后来都被 JavaScript 打败了，所以现在的浏览器中，只运行一种脚本语言就是 JavaScript。

2、JavaScript 是 Sun 注册并授权给 Netscape 使用的商标。后来 Sun 公司 被 Oracle 收购，JavaScript 版权归 Oracle 所有。

3、1996 年，微软为了抢占市场，推出了`JScript`在 IE3.0 中使用。

4、1996 年 11 月网景公司将 JS 提交给 ECMA(国际标准化组织)成为国际标准，用于对抗微软。

补充：

> JavaScript 是世界上用的最多的**脚本语言**。

> Java 和 JavaScript 的关系，就好比：雷锋和雷峰塔的关系、老婆和老婆饼的关系、北大和北大青鸟的关系。

推荐阅读链接：

-   [网道 | JavaScript 语言的历史](https://wangdoc.com/javascript/basic/history.html)

###JavaScript 的发展：蒸蒸日上

2003 年之前，JavaScript 被认为“牛皮鲜”，用来制作页面上的广告，弹窗、漂浮的广告。什么东西让人烦，什么东西就是 JavaScript 开发的。所以很多浏览器就推出了屏蔽广告功能。

2004 年，JavaScript 命运开始改变。那一年，**谷歌公司开始带头使用 Ajax 技术**，Ajax 技术就是 JavaScript 的一个应用。并且，那时候人们逐渐开始提升用户体验了。Ajax 有一些应用场景。比如，当我们在搜索引擎框搜文字时，输入框下方的智能提示，可以通过 Ajax 实现。比如，当我们注册网易邮箱时，能够及时发现用户名是否被占用，而不用跳到另外一个页面。从 2005 年开始，几乎整个 B/S 开发界都在热情地追捧 Ajax。

2007 年乔布斯发布了第一款 iPhone，这一年开始，更多的用户使用移动设备上网。这一年，互联网开始标准化，按照 W3C 规则三层分离，JavaScript 越来越被重视。**JavaScript 在移动页面中，也是不可或缺的**。

2010 年，人们更加了解**HTML5 技术**，**HTML5 推出了一个东西叫做 Canvas**（画布），工程师可以在 Canvas 上进行游戏制作，利用的就是 JavaScript。

2011 年，**Node.js 诞生**，使 JavaScript 能够开发服务器端的程序。

如今，**WebApp**已经非常流行，也就是用**网页技术开发手机应用**。手机系统有 iOS、安卓。公司如果要开发一个“美团”App，就需要招聘四队人马：iOS 工程师 10 人、安卓工程师 12 人，前端工程师 8 人、后端工程师 16 人，共 50 人左右，开发成本巨大；而且如果要做需求迭代，就要改 3 个版本。现在，假设公司都用 web 技术，用 html+css+javascript 这一套技术就可以开发多种终端的页面。也易于迭代（网页如果改变，则所有的终端都会生效）。

有个故事是这么说的：

> 2040 年，某年轻产品经理说：有没有那么一个东西，不需要下载客户端，不需要限制品牌系统，无论是鸿蒙、安卓苹果，Linux 和 Windows 等等都能实现，无差别预览信息。用户也能在这里交流，如果我们开发出来这个，我们这个产品的前景一定十分宽广。
>
> 这时候一位 40 岁的老同志说：你说的这个是不是叫网页？
>
> 这是半个世纪前的。

虽然目前 WebApp（Web 应用）在功能和性能上的体验远不如 Native App（原生应用），但是“**在原生 App 中内嵌一些 H5 页面**”已经是一种趋势。

JavaScript 的发展，正在大放异彩，正如周爱民的《JavaScript 语言精髓与编程实战》中所描述的那样：

> 是 ECMA 赋予了 JavaScript 新的能力和活力。
>
> 在 2015 年 6 月，ES6 发布了。这个 ECMAScript 版本几乎集成了当时其他语言梦寐以求的所有明星特性，并优雅地、不留后患地解决了几乎所有的 JavaScript 遗留问题—当然，其中那些最大的、最本质的和核心的问题其实都已经在 ES5 推出时通过“严格模式（strict mode）”解决了。
>
> ES6 提出了四大组件：Promise、类、模块、生成器/迭代器。这事实上是在并行语言、面向对象语言、结构化语言和函数式语言四个方向上的奠基工作。相对于这种重要性来说，其他类似于解构、展开、代理等看起来很炫很实用的特性，反倒是浮在表面的繁华了。
>
> 主流引擎厂商开始通过 ES6 释放出它们的能量，于是 JavaScript 在许多新的环境中被应用起来，大量的新技术得以推动，例如，WebAssembly、Ohm、Deeplearn.js、TensorFlow.js、GPU.js、GraphQL、NativeScript 等。有了 Babel 这类项目的强大助力，新规范得以“让少数人先用起来”，而标准的发布也一路披荆斩棘，以至于实现了“一年一更”。

## JavaScript 介绍

### JavaScript 入门易学性

-   JavaScript 对初学者比较友好。可以使用任何文本编辑工具编写，只需要浏览器就可以执行程序。

-   JavaScript 是有界面效果的（相比之下，C 语言只有白底黑字）。

-   JavaScript 的入门较简单（进阶不易）。比如，JS 是**弱变量类型**的语言，变量只需要用 var/let/const 来声明。而 Java 中变量的声明，要根据变量的类型来定义。

Java 中需要这样定义变量：

```java
int a;
float a;
double a;
String a;
boolean a;
```

而 JS 中，只需要用一种方式来定义：

```JavaScript
// ES5 写法
var a;

// ES6 写法
const a;
let a;
```

### JavaScript 既是前端语言，又是后端语言

当 JavaScript 运行在用户的终端网页，而不是运行在服务器上的时候，我们称之为“**前端语言**”。前端语言是服务于页面的显示和交互，不能直接操作数据库。

**后端语言**是运行在服务器上的，比如 Java、C++、PHP 等等，这些语言都能够操作数据库（对数据库进行“增删改查”），并在后台执行各种任务。

另外，Node.js 是用 JavaScript 开发的，我们也可以用 Node.js 技术进行服务器端编程。

### JavaScript 的组成

JavaScript 基础分为三个部分：

-   **ECMAScript**：JavaScript 的**语法标准**。包括变量、表达式、运算符、函数、if 语句、for 语句等。

-   **DOM**：Document Object Model（文档对象模型），JS 操作**页面上的元素**（标签）的 API。比如让盒子移动、变色、改变大小、轮播图等等。

-   **BOM**：Browser Object Model（浏览器对象模型），JS 操作**浏览器部分功能**的 API。通过 BOM 可以操作浏览器窗口，比如弹框、控制浏览器跳转、获取浏览器分辨率等等。

通俗理解就是：ECMAScript 是 JS 的语法；DOM 和 BOM 是浏览器运行环境为 JS 提供的 API。

## JavaScript 的特点

### 特点 1：解释型语言

JavaScript 简称 JS，是前端开发的一门脚本语言（解释型语言）。

**解释型语言**的意思是：程序执行之前，不需要事先被翻译为机器码；而是在运行时，边翻译边执行（翻译一行，执行一行）。关于解释型语言的详细介绍，上一篇文章有介绍。

为什么 JS 是解释型语言呢？这和浏览器的工作原理有关。浏览器中有一个专门的“JS 解析器”可以让 JS 边解析边执行。

由于少了事先编译这一步骤，所以解释型语言开发起来尤为方便，但是解释型语言运行较慢也是它的劣势。不过解释型语言中使用了 JIT 技术，使得运行速度得以改善。

### 特点 2：单线程

### 特点 3：ECMAScript 标准

ECMAScript 是一种由 ECMA 国际（前身为欧洲计算机制造商协会,英文名称是 European Computer Manufacturers Association）制定和发布的脚本语言规范。

JavaScript 是由公司开发而成的，问题是不便于其他的公司拓展和使用。所以欧洲的这个 ECMA 的组织，牵头制定 JavaScript 的标准，取名为 ECMAScript。

简单来说，**ECMAScript 不是一门语言，而是一个标准**。ECMAScript 规定了 JS 的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套 JS 语法工业标准。

ECMAScript 在 2015 年 6 月，发布了 ECMAScript 6 版本（ES6），语言的能力更强，包含了很多新特性），但也要考虑它的浏览器兼容性问题。

ECMA 赋予了 JavaScript 新的能力和活力。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 06-基本数据类型：String 和 Boolean
publish: true
---

<ArticleTopAd></ArticleTopAd>

今天这篇文章，我们详细讲一下基本数据类型。

## String 字符串

### 语法

字符串型可以是引号中的任意文本，其语法为：双引号 `""` 或者单引号 `''`。

来看个示例。下面的这些，都是字符串：

```javascript
var a = 'abcde';
var b = '千古壹号';
var c = '123123';
var d = '哈哈哈哈哈';
var e = ''; //空字符串

var f = haha; // 没使用引号，到这里会直接报错。因为会被认为是js代码，但是之前并没有定义 haha。

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
```

控制台输出如下：

```
string
string
string
string
string
```

### 引号的注意事项

1、单引号和双引号不能混用。比如下面这样写是不可以的：

```javascript
var str = 'hello";  // 报错：Uncaught SyntaxError: Invalid or unexpected token
```

2、同类引号不能嵌套：双引号里不能再放双引号，单引号里不能再放单引号。

3、单引号里可以嵌套双引号；双引号里可以嵌套单引号。

### 转义字符

在字符串中我们可以使用`\`作为转义字符，当表示一些特殊符号时可以使用`\`进行转义。

-   `\"` 表示 `"` 双引号

-   `\'` 表示 `'` 单引号

-   `\\` 表示`\`

-   `\r` 表示回车

-   `\n` 表示换行。n 的意思是 newline。

-   `\t` 表示缩进。t 的意思是 tab。

-   `\b` 表示空格。b 的意思是 blank。

举例：

```javascript
var str1 = '我说:"今天\t天气真不错！"';
var str2 = '\\\\\\';

console.log(str1);
console.log(str2);
```

上方代码的打印结果：

```
	我说:"今天	天气真不错！"
	\\\
```

### 获取字符串的长度

字符串是由若干个字符组成的，这些字符的数量就是字符串的长度。我们可以通过字符串的 length 属性可以获取整个字符串的长度。

代码举例：

```javascript
var str1 = '千古壹号';
var str2 = '千古壹号，永不止步！';

var str3 = 'qianguyihao';
var str4 = 'qianguyihao, keep moving!';

console.log(str1.length); // 4
console.log(str2.length); // 10
console.log(str3.length); // 11
console.log(str4.length); // 25
```

由此可见，字符串的 length 属性，在判断字符串的长度时，会认为：

-   一个中文算一个字符，一个英文算一个字符

-   一个标点符号（包括中文标点、英文标点）算一个字符

-   一个空格算一个字符

### 字符串拼接

多个字符串之间可以使用加号 `+` 进行拼接。

**拼接语法**：

```
字符串 + 任意数据类型 = 拼接之后的新字符串;
```

**拼接规则**：拼接前，会把与字符串相加的这个数据类型转成字符串，然后再拼接成一个新的字符串。

**代码举例**：（字符串与六大数据类型相加）

```javascript
var str1 = '千古壹号' + '永不止步';
var str2 = '千古壹号' + 666;
var str3 = '千古壹号' + true;
var str4 = '千古壹号' + null;
var str5 = '千古壹号' + undefined;

var obj = { name: '千古壹号', age: 28 };
var str6 = '千古壹号' + obj;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str6);
```

打印结果：

```
千古壹号永不止步

千古壹号666

千古壹号true

千古壹号null

千古壹号undefined

千古壹号[object Object]
```

## 字符串的不可变性

字符串里面的值不可被改变。虽然看上去可以改变内容，但其实是地址变了，内存中新开辟了一个内存空间。

代码举例：

```js
var str = 'hello';

str = 'qianguyihao';
```

比如上面的代码，当重新给变量 str 赋值时，常量`hello`不会被修改，依然保存在内存中；str 会改为指向`qianguyihao`。

## 模板字符串（模板字面量）

ES6 中引入了**模板字符串**，让我们省去了字符串拼接的烦恼。下面一起来看看它的特性。

### 在模板字符串中插入变量

以前，让字符串进行拼接的时候，是这样做的：（传统写法的字符串拼接）

```javascript
var name = 'smyhvae';
var age = '26';
console.log('name:' + name + ',age:' + age); //传统写法
```

这种写法，比较繁琐，而且容易出错。

现在，有了 ES6 语法，字符串拼接可以这样写：

```javascript
var name = 'qianguyihao';
var age = '26';

console.log('我是' + name + ',age:' + age); //传统写法
console.log(`我是${name},age:${age}`); //ES6 写法。注意语法格式
```

**注意**，上方代码中，倒数第二行用的符号是单引号，最后一行用的符号是反引号（在 tab 键的上方）。

参考链接：

-   [ES6 的 rest 参数和扩展运算符](https://segmentfault.com/a/1190000010222698)

### 在模板字符串中插入表达式

以前，在字符串中插入表达式的写法必须是这样的：

```js
const a = 5;
const b = 10;
console.log('this is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
```

现在，通过模板字符串，我们可以使用一种更优雅的方式来表示：

```js
const a = 5;
const b = 10;

// 下面这行代码，故意做了换行。
console.log(`this is ${a + b} and
not ${2 * a + b}.`);
```

打印结果：

```bash
this is 15 and
not 20.
```

### 模板字符串中可以换行

因为模板字符串支持换行，所以可以让代码写得非常美观。

代码举例：

```js
const result = {
    name: 'qianguyihao',
    age: 28,
    sex: '男',
};

// 模板字符串支持换行
const html = `<div>
	<span>${result.name}</span>
	<span>${result.age}</span>
	<span>${result.sex}</span>
</div>`;

console.log(html); // 打印结果也会换行
```

打印结果：

![](http://img.smyhvae.com/20200825_2016.png)

### 模板字符串中可以调用函数

模板字符串中可以调用函数。字符串中调用函数的位置，将会显示函数执行后的返回值。

举例：

```js
function getName() {
    return 'qianguyihao';
}

console.log(`www.${getName()}.com`); // 打印结果：www.qianguyihao.com
```

### 模板字符串支持嵌套使用

```js
const nameList = ['千古壹号', '许嵩', '解忧少帅'];

function myTemplate() {
    // join('') 的意思是，把数组里的内容合并成一个字符串
    return `<ul>
	${nameList.map((item) => `<li>${item}</li>`).join('')}
	</ul>`;
}
document.body.innerHTML = myTemplate();
```

效果如下：

![](http://img.smyhvae.com/20200607_2118.png)

## 布尔值：Boolean

布尔型有两个值：true 和 false。主要用来做逻辑判断： true 表示真，false 表示假。

布尔值直接使用就可以了，千万不要加引号。

代码：

```javascript
var a = true;
console.log(typeof a);
```

控制台输出结果：

```
boolean
```

布尔型和数字型相加时， true 按 1 来算 ，false 按 0 来算。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 08-基本数据类型：Null 和 Undefined
publish: true
---

<ArticleTopAd></ArticleTopAd>

很多其他的语言中，只有 null；但 JS 语言中，既有 null，又有 undefined。很多人会弄混，由此觉得 JS 语言很麻烦。其实不然，学习完这篇文章后，你会发现 null 和 undefined 的区别很容易理解。

## Null：空对象

null 专门用来定义一个**空对象**。例如：`let a = null`，又例如 `Object.create(null)`.

如果你想定义一个变量用来保存引用类型，但是还没想好放什么内容，这个时候，可以在初始化时将其设置为 null。你可以把 null 理解为：**null 虽然是一个单独的数据类型，但null 相当于是一个 object，只不过地址为空（空指针）而已**。

比如：

```js
let myObj = null;
cosole.log(typeof myObj); // 打印结果：object
```

补充：

-   Null 类型的值只有一个，就是 null。比如 `let a = null`。

-   从语义上讲，null表示一个空对象，所以使用 typeof 检查一个 null 值时，会返回 object。

## undefined：未定义类型

### case1：变量已声明，未赋值时

**声明**了一个变量，但没有**赋值**，此时它的值就是 `undefined`。举例：

```js
let name;
console.log(name); // 打印结果：undefined
console.log(typeof name); // 打印结果：undefined
```

补充：

-   Undefined 类型的值只有一个，就是 undefind。比如 `let a = undefined`。

-   使用 typeof 检查一个 undefined 值时，会返回 undefined。

### case2：变量未声明（未定义）时

如果你从未声明一个变量，就去使用它，则会报错（这个大家都知道）；此时，如果用 `typeof` 检查这个变量时，会返回 `undefined`。举例：

```js
console.log(typeof a); // undefined
console.log(a); // 打印结果：Uncaught ReferenceError: a is not defined
```

### case3：函数无返回值时

如果一个函数没有返回值，那么，这个函数的返回值就是 undefined。

或者，也可以这样理解：在定义一个函数时，如果末尾没有 return 语句，那么，其实就是 `return undefined`。

举例：

```js
function foo() {}

console.log(foo()); // 打印结果：undefined
```

### case4：调用函数时，未传参

调用函数时，如果没有传参，那么，这个参数的值就是 undefined。

举例：

```js
function foo(name) {
    console.log(name);
}

foo(); // 调用函数时，未传参。执行函数后的打印结果：undefined
```

实际开发中，如果调用函数时没有传参，我们可以根据需要给形参设置一个默认值：

```js
function foo(name) {
    name = name || 'qianguyihao';
}

foo();
```

等学习了 ES6 之后，上方代码也可以这样写：

```js
function foo(name = 'qianguyihao') {}

foo();
```

## 其他区别

undefined 实际上是由 null 衍生出来的，所以`null == undefined`的结果为 true。

但是 `null === undefined` 的结果是 false。它们虽然相似，但还是有区别的，其中一个区别是，和数字运算时：

-   10 + null 结果为 10。

-   10 + undefined 结果为 NaN。

规律总结：

- 任何值和 null 运算，null 可看做 0 运算。

-   任何数据类型和 undefined 运算都是 NaN。


## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 03-常量和变量
---

<ArticleTopAd></ArticleTopAd>

## 常量（字面量）：数字和字符串

**常量**也称之为“字面量”，是固定值，不可改变。看见什么，它就是什么。

常量有下面这几种：

-   数字常量（数值常量）
-   字符串常量
-   布尔常量
-   自定义常量

### 数字常量

数字常量非常简单，直接写数字就行，不需要任何其他的符号。既可以是整数，也可以是浮点数。

例如：

```javascript
// 不需要加引号
alert(996); // 996是整数
alert(3.14); // 3.14是浮点数（即带了小数）
```

### 字符串常量

字符串常量就是用单引号或双引号括起来的内容。可以是单词、句子等，一定要加引号。在JS中，只要是单引号或双引号括起来的内容，都是字符串常量。

例如：

```javascript
console.log('996');

console.log("千古壹号，永不止步");
```

温馨提示：996 是数字，'996'是字符串。

### 布尔常量

布尔常量就是表达**真**或者**假**，在JS中用 true 和 false 来表达。

布尔字面量举例：

```javascript
if (true) {
	console.log('如果为真，就走这里面的代码);
}
```

### 自定义常量：const

自定义常量是ES6中新增的语法。它的语法格式是这样的：

```js
const 常量名称 = 常量取值;
```

举例：

```js
const name = '千古壹号'; // 定义常量name，它的取值是 千古壹号

// name =  '许嵩'; // 既然 name 是常量，所以这一行是错误的写法，因为 name 无法被修改为其他的值

console.log(name); // 打印结果：千古壹号
```

后续我们讲ES6语法的时候，会深入学习 const 用法。

### 开发技巧：用变量定义常量

我们一般不会直接使用常量，否则会导致代码冗余、不易维护。如果多个地方要用到同一个常量，那就建议事先定义一个变量，用来保存这个常量；然后在需要的地方去引用这个变量就行了。另外，当我们学习了ES6中的 const 之后，还可以使用自定义常量达到目的。

## 变量的概念

**变量**表示可以被修改的数据。我们通过「变量名」获取数据，甚至修改数据。

变量还可以用来保存常量。

**本质**：变量是程序在内存中申请的一块用来存放数据的空间。打个比方，超市里的储物格就是变量, 在不同的时间段里, 储物格中存储的数据可以不一样。

## 变量的定义和赋值

定义变量是在告诉浏览器，我们需要一块内存空间，相当于生成超市里的储物格。

给变量赋值就是往相当于往储物格里塞东西，可能今天上午塞的是面包🍞，下午就换成了蛋糕🍰。

### 变量的定义/声明（ES5）

在 ES6 语法之前，统一使用`var`关键字来声明一个变量。比如：

```javascript
var name; // 定义一个名为 name 的变量。name是变量名。
```

var 是英语“variable”变量的缩写。后面要加一个空格，空格后面的东西就是“变量名”。

PS：**在 JavaScript 中，永远都是用 var 来定义变量**（在 ES6 之前），这和 C、Java 等语言不同。

### 变量的定义/声明（ES6）

在 ES6 语法及之后的版本里，可以使用 `const`、`let`关键字来定义一个变量

```js
const name; // 定义一个常量

let age; // 定义一个变量
```

如果你想定义一个常量，就用 const；如果你想定义一个变量，就用 let。

### 变量的赋值

变量赋值举例：

```javascript
name = '千古壹号';
```

综合起来，变量的定义、赋值、取值，举例如下：

```js
// 定义：声明一个变量
var num;
// 赋值：往变量中存储数据
num = 996;
// 取值：从变量中获取存储的数据
console.log(num);
```

### 合并写法

变量的定义和赋值，还可以合并写在一起，是实战中常用的写法。举例如下：

```javascript
var a = 100; // ES5语法
console.log(a);

const b = hello; // ES6 语法

let c = world; // ES6 语法
c = qianguyihao; // 修改 变量 C 的值
```

定义一个变量并赋值， 我们称之为**变量的初始化**。如下图所示：

![](http://img.smyhvae.com/20180116_2020.png)



-   定义变量：var 就是一个**关键字**，用来定义变量。所谓关键字，就是有特殊功能的单词。
-   变量赋值：等号表示**赋值**，将等号右边的值，赋给左边的变量。
-   变量名：我们可以给变量起个名字。

### 变量的初始化【重要】

第一次给变量赋值，称之为“**变量的初始化**”，这个概念非常重要。第二次给这个变量赋值（也就是修改这个变量的值）就不叫初始化了。

一个变量如果没有进行初始化（只声明，不赋值），那么这个变量中存储的值是`undefined`，这个知识点必须知道。

变量的初始化，可以有两种形式，如下。

形式1：先定义，在赋值。举例：

```js
var name;
name = 'qianguyhihao';
```

形式2：在定义的同时进行初始化。也就是上一小段讲的“合并写法”。举例：

```js
var name = 'qianguyihao';
```

## 变量定义和赋值的补充

### 修改变量的值

一个变量被重新复赋值后，它原有的值就会被覆盖，变量值将以最后一次赋的值为准。

举例：

```javascript
var a = 100;
a = 110;

console.log(a); // 打印结果：110。因为 110 覆盖了 100
```

### 同时定义多个变量

1、同时定义多个变量时，只需要写一个 var， 多个变量名之间用英文逗号隔开。举例：

```javascript
// 同时定义多个变量
var num1, num2;
```

2、定义多个变量的同时，分别进行初始化。举例：

```js
// 定义多个变量的同时，进行初始化
var num1 = 10, num2 = 20;
```

如果多个变量初始化的初始化值都是一样的，则可以这样简写：

```js
var num1, num2;
num1 = num2 = 10; // 重点在这一行

console.log(num1); // 10
console.log(num2); // 10
```

上面的写法和下面的写法是有区别的：（注意看打印结果）

```js
var num1, num2 = 10;

console.log(num1); // undefined
console.log(num2); // 10
```



### 变量之间可以相互赋值

```js
var num1, num2;
num1 = 10;
num2 = num1; // 把 num1 的值拷贝一份，赋值给 num2
console.log(num2); // 10
```

### 变量如果重复定义

在ES5中，如果用 var 定义了同名变量，那么，后定义的变量，会覆盖先定义的变量。举例：

```js
var name = '许嵩';
var name = '千古壹号'; // 这里会重新定义一个新的变量 name

console.log(name); // 千古壹号
```

### 变量声明和赋值的特殊情况

变量建议先声明，再使用；否则可能会产生意想不到的结果。具体如下。

**写法 1**、先声明，再赋值：（正常）

```javascript
var a;
a = 100;
console.log(a); // 打印结果：100
```

**写法 2**、不声明，直接赋值：（正常）

```javascript
a = 100;
console.log(a); // 打印结果：100
```

**写法 3**、只声明，不赋值：（注意，打印 undefined）

```javascript
var a;
console.log(a); // 打印结果：undefined
```

**写法 4**、不声明，不赋值，直接使用：（会报错）

```javascript
console.log(a); // 会报错
```

控制台会报错：

![](http://img.smyhvae.com/20180116_2040.png)

**补充**：写法 1 和写法 2 虽然都正常，但这两种写法是有区别的，等以后学习了「变量提升」的概念就明白了。大多数情况下，我们都是采用的写法 1。

## 举例

**举例**：交换两个变量的值

代码实现：

```javascript
var a1 = 100;
var a2 = 200;

var temp;

temp = a1;
a1 = a2;
a2 = temp;
```

## 最后

关于变量的命名规则，将在下一篇文章里讲。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)

---
title: 07-基本数据类型：Number
---

<ArticleTopAd></ArticleTopAd>

## 数值型：Number

在 JS 中所有的数值都是 Number 类型，包括整数和浮点数（小数）。

```javascript
var a = 100; // 定义一个变量 a，并且赋值整数100
console.log(typeof a); // 输出变量 a 的类型

var b = 12.3; // 定义一个变量 b，并且赋值浮点数 12.3
console.log(typeof a);
```

上方代码的输出结果为：

```
number

number
```

再次补充：在 JS 中，只要是数，就是 Number 数值型的。无论整浮、浮点数（即小数）、无论大小、无论正负，都是 Number 类型的。

### 数值范围

由于内存的限制，ECMAScript 并不能保存世界上所有的数值。

-   最大值：`Number.MAX_VALUE`，这个值为： 1.7976931348623157e+308

-   最小值：`Number.MIN_VALUE`，这个值为： 5e-324

如果使用 Number 表示的变量超过了最大值，则会返回 Infinity。

-   无穷大（正无穷）：Infinity

-   无穷小（负无穷）：-Infinity

注意：`typeof Infinity`的返回结果是 number。

### NaN

**NaN**：是一个特殊的数字，表示 Not a Number，非数值。在进行数值运算时，如果得不到正常结果，就会返回 NaN。

比如：

```javascript
console.log('abc' / 18); //结果是NaN

console.log('abc' * 'abcd'); //按理说，字符串相乘是没有结果的，但如果你非要让JS去算，它就一定会给你一个结果，结果是NaN。
```

注意事项：

1. `typeof NaN`的返回结果是 number。

2. **Undefined 和任何数值计算的结果为 NaN。NaN 与任何值都不相等，包括 NaN 本身。**

3. 关于 isNaN() 函数，可以看后续的文章《JavaScript基础/typeof和数据类型转换》。

### 连字符和加号的区别

键盘上的`+`可能是连字符，也可能是数字的加号。如下：

```
console.log("我" + "爱" + "你");	//连字符，把三个独立的汉字，连接在一起了
console.log("我+爱+你");			//原样输出
console.log(1+2+3);				//输出6
```

输出：

```
我爱你
我+爱+你
6
```

**总结**：如果加号两边**都是** Number 类型，此时是数字相加。否则，就是连字符（用来连接字符串）。

举例 1：

```javascript
var a = '1';
var b = 2;
console.log(a + b);
```

控制台输出：

```
12
```

举例 2：

```
var a = 1;
var b = 2;
console.log("a" + b);	//"a"就不是变量了！所以就是"a"+2 输出a2

```

控制台输出：

```
a2
```

于是我们明白了，在变量中加入字符串进行拼接，可以被同化为字符串。【重要】

### 隐式转换

我们知道，`"2"+1`得到的结果其实是字符串，但是`"2"-1`得到的结果却是数值 1，这是因为计算机自动帮我们进行了“**隐式转换**”。

也就是说，`-`、`*`、`/`、`%`这几个符号会自动进行隐式转换。例如：

```javascript
var a = '4' + 3 - 6;
console.log(a);
```

输出结果：

```javascript
37;
```

虽然程序可以对`-`、`*`、`/`、`%``这几个符号自动进行“隐式转换”；但作为程序员，我们最好自己完成转换，方便程序的可读性。

关于隐式转换的详细内容，可以看后续的文章《JavaScript基础/typeof和数据类型转换》。

## 浮点数的运算

### 运算精度问题

在 JS 中，整数的运算**基本**可以保证精确；但是**小数的运算，可能会得到一个不精确的结果**。所以，千万不要使用 JS 进行对精确度要求比较高的运算。

如下：

```javascript
var a = 0.1 + 0.2;
console.log(a); //打印结果十分意外：0.30000000000000004
```

上方代码中，打印结果并不是 0.3，而是 0.30000000000000004。

这是因为，计算机在做运算时，所有的运算都要转换成二进制去计算。然而，有些数字转换成二进制之后，无法精确表示。比如说，0.1 和 0.2 转换成二进制之后，是无穷的，因此存在浮点数的计算不精确的问题。

### 处理数学运算的精度问题

如果只是一些简单的精度问题，可以使用 `toFix()` 方法进行小数的截取。备注：关于 `toFixed()`方法， 详见《JavaScript 基础/内置对象：Number 和 Math》。

在实战开发中，关于浮点数计算的精度问题，往往比较复杂。市面上有很多针对数学运算的开源库，比如[decimal.js](https://github.com/MikeMcl/decimal.js/)、 [Math.js](https://github.com/josdejong/mathjs)。这些开源库都比较成熟，我们可以直接拿来用。

-   Math.js：属于很全面的运算库，文件很大，压缩后的文件就有 500kb。如果你的项目涉及到大型的复杂运算，可以使用 Math.js。

-   decimal.js：属于轻量的运算库，压缩后的文件只有 32kb。大多数项目的数学运算，使用 decimal.js 足够了。

在使用这几个开源库时，既可以用 cdn 的方式引入，也可以用 npm 包的方式引入。

比如说，通过 cdn 的方式引入 decimal.js 时，可以这样用：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script src="https://cdn.bootcdn.net/ajax/libs/decimal.js/10.2.0/decimal.min.js"></script>
        <script>
            console.log('加法：');
            var a = 0.1;
            var b = 0.2;
            console.log(a + b);
            console.log(new Decimal(a).add(new Decimal(b)).toNumber());

            console.log('减法：');
            var a = 1.0;
            var b = 0.7;
            console.log(a - b);
            console.log(new Decimal(a).sub(new Decimal(b)).toNumber());

            console.log('乘法：');
            var a = 1.01;
            var b = 1.003;
            console.log(a * b);
            console.log(new Decimal(a).mul(new Decimal(b)).toNumber());

            console.log('除法：');
            var a = 0.029;
            var b = 10;
            console.log(a / b);
            console.log(new Decimal(a).div(new Decimal(b)).toNumber());
        </script>
    </body>
</html>
```

打印结果：

```
加法：
0.30000000000000004
0.3

减法：
0.30000000000000004
0.3

乘法：
1.0130299999999999
1.01303

除法：
0.0029000000000000002
0.0029
```

参考链接：

-   <https://www.bloghome.com.cn/post/nodejsxue-xi-bi-ji-shi-qi-fu-dian-yun-suan-decimal-js.html>

-   <https://zhuanlan.zhihu.com/p/62381711>

## 变量值的传递（赋值）

语句：

```
a = b;
```

把 b 的值赋给 a，b 不变。

将等号右边的值，赋给左边的变量；等号右边的变量，值不变。

来做几个题目。

举例 1：

```js
// a		b       c
var a = 1; // 1
var b = 2; // 1     2
var c = 3; // 1     2       3
a = b + c; // 5     2       3
b = c - a; // 5     -2      3
c = a * b; // 5     -2      -10
console.log(a);
console.log(b);
console.log(c);
```

输出：

```
5
-2
-10
```

举例 2：

```js
//a    b     c
var a = 1;
var b = 2;
var c = 3; // 1     2     3
a = a + b; // 3     2     3
b = b + a; // 3     5     3
c = c + b; // 3     5     8
console.log(a); // 3
console.log(b); // 5
console.log(c); // 8
```

输出：

```
3
5
8
```

举例 3：

```js
//a       b
var a = '1';
var b = 2; // "1"     2
a = a + b; // "12"    2
b = b + a; // "12"    "212"
console.log(a); // 输出12
console.log(b); // 输出212
```

输出：

```
12
212
```

举例 4：

```js
//a         b
var a = '1';
var b = 2;
a = b + a; //"21"       2
b = b + a; //"21"       "221"
console.log(a); //21
console.log(b); //221
```

效果：

```
21
221
```

举例 5：（这个例子比较特殊，字符串减去数字）

```js
var a = '3';
var b = 2;
console.log(a - b);
```

效果：（注意，字符串 - 数值 = 数值）

```
1
```
---
title: 11-流程控制语句：选择结构（if和switch）
publish: true
---

<ArticleTopAd></ArticleTopAd>

## 代码块

用`{}`包围起来的代码，就是代码块。

在 ES5 语法中，代码块，只具有**分组**的作用，没有其他的用途。代码块中的内容，在外部是完全可见的。举例：

```javascript
{
    var a = 2;
    alert('qianguyihao');
    console.log('千古壹号');
}

console.log('a = ' + a);
```

打印结果：（可以看出，虽然变量 a 是定义在代码块中的，但是在外部依然可以访问）

```
千古壹号
a = 2
```

## 流程控制语句

在一个程序执行的过程中，各条语句的执行顺序对程序的结果是有直接影响的。所以，我们必须清楚每条语句的执行流程。而且，很多时候我们要通过控制语句的执行顺序来实现我们要完成的功能。

### 流程控制语句分类

-   顺序结构

-   选择结构：if 语句、switch 语句

-   循环结构：while 语句、for 语句

## 顺序结构

按照代码的先后顺序，依次执行。结构图如下：

![](http://img.smyhvae.com/20181227_1200.png)

## if 语句

if 语句有以下三种形式。

### if 语句的三种形式

形式1：（条件成立才执行。如果条件不成立，那就什么都不做）

```javascript
if (条件表达式) {
    // 条件为真时，做的事情
}
```

对于非布尔类型的数据，会先转换成布尔类型再判断。下同。

形式 2：

```javascript
if (条件表达式) {
    // 条件为真时，做的事情
} else {
    // 条件为假时，做的事情
}
```

形式3：（多分支的 if 语句）

```javascript
if (条件表达式1) {
    // 条件1为真时，做的事情
} else if (条件表达式2) {
    // 条件1不满足，条件2满足时，做的事情
} else if (条件表达式3) {
    // 条件1、2不满足，条件3满足时，做的事情
} else {
    // 条件1、2、3都不满足时，做的事情
}
```

以上所有的语句体中，只执行其中一个。

### 做个题目

```
根据BMI（身体质量指数）显示一个人的体型。
BMI指数，就是体重、身高的一个计算公式。公式是：
BMI =体重÷身高的平方

比如，老师的体重是81.6公斤，身高是1.71米。
那么老师的BMI就是  81.6 ÷ 1.712     等于 27.906022365856163

过轻：低于18.5
正常：18.5-24.99999999
过重：25-27.9999999
肥胖：28-32
非常肥胖, 高于32

用JavaScript开发一个程序，让用户先输入自己的体重，然后输入自己的身高（弹出两次prompt框）。
计算它的BMI，根据上表，弹出用户的身体情况。比如“过轻” 、 “正常” 、“过重” 、 “肥胖” 、“非常肥胖”。
```

**答案**：

写法 1：

```javascript
//第一步，输入身高和体重
var height = parseFloat(prompt('请输入身高，单位是米'));
var weight = parseFloat(prompt('请输入体重，单位是公斤'));
//第二步，计算BMI指数
var BMI = weight / Math.pow(height, 2);
//第三步，if语句来判断
if (BMI < 18.5) {
    alert('偏瘦');
} else if (BMI < 25) {
    alert('正常');
} else if (BMI < 28) {
    alert('过重');
} else if (BMI <= 32) {
    alert('肥胖');
} else {
    alert('非常肥胖');
}
```

写法 2：

```javascript
//第一步，输入身高和体重
var height = parseFloat(prompt('请输入身高，单位是米'));
var weight = parseFloat(prompt('请输入体重，单位是公斤'));
//第二步，计算BMI指数
var BMI = weight / Math.pow(height, 2);
//第三步，if语句来判断
if (BMI > 32) {
    alert('非常肥胖');
} else if (BMI >= 28) {
    alert('肥胖');
} else if (BMI >= 25) {
    alert('过重');
} else if (BMI >= 18.5) {
    alert('正常');
} else {
    alert('偏瘦');
}
```

### if 语句的嵌套

我们通过下面这个例子来引出 if 语句的嵌套。

```
一个加油站为了鼓励车主多加油，所以加的多有优惠。
92号汽油，每升6元；如果大于等于20升，那么每升5.9；
97号汽油，每升7元；如果大于等于30升，那么每升6.95
编写JS程序，用户输入自己的汽油编号，然后输入自己加多少升，弹出价格。
```

![](http://img.smyhvae.com/20180117_2232.png)

代码实现如下：

```javascript
//第一步，输入
var bianhao = parseInt(prompt('您想加什么油？填写92或者97'));
var sheng = parseFloat(prompt('您想加多少升？'));

//第二步，判断
if (bianhao == 92) {
    //编号是92的时候做的事情
    if (sheng >= 20) {
        var price = sheng * 5.9;
    } else {
        var price = sheng * 6;
    }
} else if (bianhao == 97) {
    //编号是97的时候做的事情
    if (sheng >= 30) {
        var price = sheng * 6.95;
    } else {
        var price = sheng * 7;
    }
} else {
    alert('不好意思，没有这个编号的汽油！');
}

alert('价格是' + price);
```

## switch 语句（条件分支语句）

switch 语句也叫条件分支语句。

### 语法格式

```javascript
switch(表达式) {
	case 值1：
		语句体1;
		break;

	case 值2：
		语句体2;
		break;

	...
	...

	default：
		语句体 n+1;
		break;
}
```

**解释**：switch 可以理解为“开关、转换” 。case 可以理解为“案例、选项”。

### switch 语句的执行流程

流程图如下：

![](http://img.smyhvae.com/20190815_1501.png)

执行流程如下：

（1）首先，计算出表达式的值，和各个 case 依次比较，一旦有对应的值，就会执行相应的语句，在执行的过程中，遇到 break 就会结束。

（2）然后，如果所有的 case 都和表达式的值不匹配，就会执行 default 语句体部分。

default不一定要写在最后面。 switch 中的 default 无论放到什么位置, 都会等到所有case 都不匹配再执行。default 也可以省略。

### switch 语句的结束条件【非常重要】

-   情况 a：遇到 break 就结束（而不是遇到 default 就结束）。因为 break 在此处的作用是，立即结束并退出整个 switch 语句。
-   情况 b：执行到程序的末尾就结束。



我们稍后讲 case穿透的时候，你就会明白其中的奥妙了。

### switch 和 case 后面的值

switch 后面的括号里可以是变量、常量、表达式， 通常是一个**变量**（一般的做法是：先把表达式存放到变量中）。

case 后面的`值1`、`值2`可以是变量、常量、表达式。

注意，**case的判断逻辑是`===`，不是`==`**。因此，字符串`'6'`和 数字 `6` 是不一样的。

举例 1：

```js
let msg = 'notice';

switch (msg) {
    case 'notice':
        console.log('提示');
        break;
    case 'warning':
        console.log('警告');
        break;
    case 'error':
        console.log('错误');
        break;
    default:
        console.log('默认文案');
        break;
}
```

举例 2：（case 后面的是表达式）

```js
let age = 28;

switch (true) {
    case age < 18:
        console.log('未成年人');
        break;
    case age >= 18 && age <= 65:
        console.log('还能干活儿');
        break;
    case age > 65:
        console.log('该退休了');
        break;
    default:
        console.log('默认文案');
        break;
}
```

代码解释：由于 switch 里的值是 true，所以，在众多的 case 语句中，会去匹配第一个符合 `case true`的语句，然后命中这条语句。

### case 穿透

switch 语句中的`break`可以省略，但一般不建议（对于新手而言）。否则结果可能不是你想要的，会出现一个现象：**case 穿透**。

当然，如果你能利用好 case 穿透，会让代码写得十分优雅。

**举例 1**：（case 穿透的情况）

```javascript
const num = 4;

//switch判断语句
switch (num) {
    case 1:
        console.log('星期一');
        break;
    case 2:
        console.log('星期二');
        break;
    case 3:
        console.log('星期三');
        break;
    case 4:
        console.log('星期四');
    //break;
    case 5:
        console.log('星期五');
    //break;
    case 6:
        console.log('星期六');
        break;
    case 7:
        console.log('星期日');
        break;
    default:
        console.log('你输入的数据有误');
        break;
}
```

上方代码的运行结果，可能会令你感到意外：

```
星期四
星期五
星期六
```

上方代码的解释：因为在 case 4 和 case 5 中都没有 break，那语句走到 case 6 的 break 才会停止。

**举例 2**：

```javascript
//switch判断语句
var number = 5;

switch (number) {
    default:
        console.log('我是defaul语句');
    // break;
    case 2:
        console.log('第二个呵呵:' + number);
    //break;
    case 3:
        console.log('第三个呵呵:' + number);
        break;
    case 4:
        console.log('第四个呵呵:' + number);
        break;
}
```

上方代码的运行结果，你也许会意外：

```
我是defaul语句
第二个呵呵:5
第三个呵呵:5
```

上方代码的解释：代码走到 default 时，因为没有遇到 break，所以会继续往下走，直到遇见 break 或者走到程序的末尾。 从这个例子可以看出：switch 语句的结束与 default 的顺序无关。

## switch 语句的实战举例：替换 if 语句

我们实战开发中，经常需要根据接口的返回码 retCode ，来让前端做不同的展示。

这种场景是业务开发中经常出现的，请一定要掌握。然而，很多人估计会这么写：

### 写法 1（不推荐。这种写法太挫了）

```javascript
let retCode = 1003; // 返回码 retCode 的值可能有很多种情况

if (retCode == 0) {
    alert('接口联调成功');
} else if (retCode == 101) {
    alert('活动不存在');
} else if (retCode == 103) {
    alert('活动未开始');
} else if (retCode == 104) {
    alert('活动已结束');
} else if (retCode == 1001) {
    alert('参数错误');
} else if (retCode == 1002) {
    alert('接口频率限制');
} else if (retCode == 1003) {
    alert('未登录');
} else if (retCode == 1004) {
    alert('（风控用户）提示 活动太火爆啦~军万马都在挤，请稍后再试');
} else {
    // 其他异常返回码
    alert('系统君失联了，请稍候再试');
}
```

如果你是按照上面的 `if else`的方式来写各种条件判断，说明你的代码水平太初级了，会被人喷的，千万不要这么写。这种写法，容易导致**嵌套太深，可读性很差**。

那要怎么改进呢？继续往下看。

### 写法 2（推荐。通过 return 的方式，将上面的写法进行改进）

```javascript
let retCode = 1003; // 返回码 retCode 的值可能有很多种情况
handleRetCode(retCode);

// 方法：根据接口不同的返回码，处理前端不同的显示状态
function handleRetCode(retCode) {
    if (retCode == 0) {
        alert('接口联调成功');
        return;
    }

    if (retCode == 101) {
        alert('活动不存在');
        return;
    }

    if (retCode == 103) {
        alert('活动未开始');
        return;
    }

    if (retCode == 104) {
        alert('活动已结束');
        return;
    }

    if (retCode == 1001) {
        alert('参数错误');
        return;
    }

    if (retCode == 1002) {
        alert('接口频率限制');
        return;
    }

    if (retCode == 1003) {
        alert('未登录');
        return;
    }

    if (retCode == 1004) {
        alert('（风控用户）提示 活动太火爆啦~军万马都在挤，请稍后再试');
        return;
    }

    // 其他异常返回码
    alert('系统君失联了，请稍候再试');
    return;
}
```

上面的写法 2，是比较推荐的写法：直接通过 return 的方式，让 function 里的代码不再继续往下走，这就达到目的了。对了，因为要用到 return ，所以整段代码是封装到一个 function 里的。

如果你以后看到有前端小白采用的是**写法 1**，请一定要把**写法 2**传授给他：不需要那么多的 if else，直接用 return 返回就行了。

### 写法 3（推荐。将 if else 改为 switch）

```javascript
let retCode = 1003; // 返回码 retCode 的值可能有很多种情况

switch (retCode) {
    case 0:
        alert('接口联调成功');
        break;
    case 101:
        alert('活动不存在');
        break;

    case 103:
        alert('活动未开始');
        break;

    case 104:
        alert('活动已结束');
        break;

    case 1001:
        alert('参数错误');
        break;

    case 1002:
        alert('接口频率限制');
        break;

    case 1003:
        alert('未登录');
        break;

    case 1004:
        alert('（风控用户）提示 活动太火爆啦~军万马都在挤，请稍后再试');
        break;

    // 其他异常返回码
    default:
        alert('系统君失联了，请稍候再试');
        break;
}
```

在实战开发中，方式 3 是非常推荐的写法，甚至比方式 2 还要好。我们尽量不要写太多的 if 语句，避免代码嵌套过深。

### switch 语句的优雅写法：适时地去掉 break

我们先来看看下面这段代码：（不推荐）

```javascript
let day = 2;

switch (day) {
    case 1:
        console.log('work');
        break;

    case 2:
        console.log('work');
        break;

    case 3:
        console.log('work');
        break;

    case 4:
        console.log('work');
        break;

    case 5:
        console.log('work');
        break;

    case 6:
        console.log('relax');
        break;

    case 7:
        console.log('relax');
        break;

    default:
        break;
}
```

上面的代码，咋一看，好像没啥毛病。但你有没有发现，重复代码太多了？

实战开发中，凡是有重复的地方，我们都必须要想办法简化。写代码就是在不断重构的过程。

上面的代码，可以改进如下：（推荐，非常优雅）

```javascript
let day = 2;

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('work');
        break; // 在这里放一个 break

    case 6:
    case 7:
        console.log('relax');
        break; // 在这里放一个 break

    default:
        break;
}
}
```

你没看错，就是上面的这种写法，能达到同样的效果，非常优雅。

小白可能认为这样的写法可读性不强，所以说他是小白。我可以明确告诉你，改进后的这种写法，才是最优雅的、最简洁、可读性最好的。

## 补充

### if 和 switch如何选择

如果是对区间进行判断，则建议用 if。如果是对几个固定的值的判断，那么，数量少的话用 if，数量多的话用switch。

### 用 return 代替 if else

业务场景：

我们在实战业务中涉及到调接口时，一般会这样做：

-   接口返回码为 0 时，前端 resolve。

-   接口返回未登录时，前端跳转到登录页面。

-   接口返回其他情况，或者无返回时，前端 reject。

写法 1、if else 的写法：（不推荐）

```js
if (res) {
    if (+res.retCode == 0) {
        resolve(res);
    } else if (+res.retCode == 8888) {
        goLogin();
    } else {
        reject(res);
    }
} else {
    reject();
}
```

写法 2、 return 的写法：（推荐）

```js
if (!res || +res.retCode !== 0) {
    if (+res.retCode === 8888) {
        // 未登录
        goLogin();
        return;
    }
    reject(res);
    return;
}
resolve(res);
```

备注：如果你没学过 Promise，这个例子可以先不看。等以后学了 Promise 再回来看就很容易明白了。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 09-数据类型转换
publish: true
---

<ArticleTopAd></ArticleTopAd>

## 前言

**变量的数据类型转换**：将一种数据类型转换为另外一种数据类型。

通常有三种形式的类型转换：

-   转换为字符串类型

-   转换为数字型

-   转换为布尔型

你会专门把某个数据类型转换成 null 或者 undefined 吗？不会，因为这样做，没有意义。

## 变量的类型转换的分类

类型转换分为两种：显式类型转换、隐式类型转换。

### 显式类型转换

-   toString()

-   String()

-   Number()

-   parseInt(string)

-   parseFloat(string)

-   Boolean()

### 隐式类型转换

-   isNaN ()

-   自增/自减运算符：`++`、`—-`

-   正号/负号：`+a`、`-a`

-   加号：`+`

-   运算符：`-`、`*`、`/`

### 隐式类型转换（特殊）

-   逻辑运算符：`&&`、`||`、`!` 。非布尔值进行**与或**运算时，会先将其转换为布尔值，然后再运算。`&&`、`||`的运算结果是**原值**，`!`的运算结果为布尔值。具体可以看下一篇文章《运算符》。

-   关系运算符：`<`、`>` `<=` `>=`等。关系运算符，得到的运算结果都是布尔值：要么是 true，要么是 false。具体可以看下一篇文章《运算符》。

针对上面这两种类型转换，这篇文章来详细介绍。

## 一、转换为 String

### 1. 调用 toString()方法

语法：

```javascript
变量.toString();
常量.toString(); // 这里的常量，不允许是数字，但可以是其它常量

// 或者用一个新的变量接收转换结果
var result = 变量.toString();
```

【重要】该方法**不会影响到原变量**，它会将转换的结果返回。当然我们还可以直接写成`a = a.toString()`，这样的话，就是直接修改原变量。

举例：

```js
// 基本数据类型
var a1 = 'qianguyihao';
var a2 = 29;
var a3 = true;

// 引用数据类型
var a4 = [1, 2, 3];
var a5 = { name: 'qianguyihao', age: 29 };

// null 和 undefined
var a6 = null;
var a7 = undefined;

// 打印结果都是字符串
console.log(a1.toString()); // "qianguyihao"
console.log(a2.toString()); // "29"
console.log(a3.toString()); // "true"
console.log(a4.toString()); // "1,2,3"
console.log(a5.toString()); // "object"

// 下面这两个，打印报错
console.log(a6.toString()); // 报错：Uncaught TypeError: Cannot read properties of null
console.log(a7.toString()); // 报错：Uncaught TypeError: Cannot read properties of undefined
```

小技巧：在 chrome 浏览器的控制台中，Number类型、Boolean类型的打印结果是蓝色的，String类型的打印结果是黑色的。

一起来看看 toString() 的注意事项。

（1）null 和 undefined 这两个值没有 toString() 方法，所以它们不能用 toString() 。如果调用，会报错。

```js
console.log(null.toString());
console.log(undefined.toString());
```

![](https://img.smyhvae.com/20211116_1458.png)

如果你不确定一个值是不是`null`或`undefined`，可以使用`String()`函数，下一小段会讲。

（2）多数情况下，`toString()`不接收任何参数；当然也有例外：Number 类型的变量，在调用 toString()时，可以在方法中传递一个整数作为参数。此时它会把数字转换为指定的进制，如果不指定则默认转换为 10 进制。例如：

```javascript
var a = 255;

//Number数值在调用toString()时，可以在方法中传递一个整数作为参数
//此时它将会把数字转换为指定的进制,如果不指定则默认转换为10进制
a = a.toString(2); // 转换为二进制

console.log(a); // "11111111"
console.log(typeof a); // string
```

（3）纯小数的小数点后面，如果紧跟连续6个或6个以上的“0”时，那么，将用e来表示这个小数。代码举例：

```js
const num1 = 0.000001; // 小数点后面紧跟五个零
console.log(num1.toString()); // 打印结果："0.000001"

const num2 = 0.0000001; // 小数点后面紧跟六个零
console.log(num2.toString()); // 【重点关注】打印结果："1e-7"

const num3 = 1.0000001;
console.log(num3.toString()); // 打印结果："1.0000001"

const num4 = 0.10000001;
console.log(num4.toString()); // 打印结果："0.10000001"
```

（4）常量可以直接调用 toString() 方法，但这里的常量，不允许是数字。举例如下：

```js
1.toString(); // 注意，会报错
1..toString(); // 合法。得到的结果是字符串"1"
1.2.toString(); // 合法。得到的结果是字符串"1.2"
(1).toString(); // 合法。得到的结果是字符串"1"
```

上方代码中，为何出现这样的打印结果？这是因为：

- 第一行代码：JS引擎认为`1.toString()`中的`.`是小数点，小数点后面的字符是非法的。
- 第二行、第三行代码：JS引擎认为第一个`.`是小数点，第二个`.`是属性访问的语法，所以能正常解释实行。
- 第四行嗲吗：用`()`排除了`.`被视为小数点的语法解释，所以这种写法也能正常解释执行。

参考链接：[你不知道的toString方法](https://www.jianshu.com/p/88570529a03c)

（5）既然常量没有方法，那它为什么可以调用 toString()呢？这是因为，除了 null、undefined之外，其他的常量都有对应的特殊的引用类型——**基本包装类型**，所以代码在解释执行的时候，会将常量转为基本包装类型，这样就可以调用相应的引用类型的方法。

我们在后续的内容《JavaScritpt基础/基本包装类型》中会专门讲到基本包装类型。

### 2. 使用 String()函数

语法：

```javascript
String(变量/常量);
```

使用 String()函数做强制类型转换时：

-   对于 Number、Boolean、String、Object 而言，本质上就是调用 toString()方法，返回结果同 toString()方法。
-   但是对于 null 和 undefined，则不会调用 toString()方法。它会将 null 直接转换为 "null"。将 undefined 直接转换为 "undefined"。

该方法**不会影响到原数值**，它会将转换的结果返回。

### 3. 隐式类型转换：字符串拼接

格式：变量+"" 或者 变量+"abc"

举例：

```javascript
var a = 123; // Number 类型
console.log(a + ''); // 打印结果："123"
console.log(a + 'haha'); // 打印结果："123haha"
```

上面的例子中，打印的结果，都是字符串类型的数据。实际上底层是调用的 String() 函数。

### prompt()：用户的输入

我们在前面的《JavaScript基础/02-JavaScript书写方式：hello world》就讲过，`prompt()`就是专门用来弹出能够让用户输入的对话框。重要的是：用户不管输入什么，都当字符串处理。

## 二、转换为 Number



### 1. 使用 Number() 函数

语法：

```js
const result = Number(变量/常量);
```

**情况一：字符串 --> 数字**

（1）如果字符串中是纯数字，则直接将其转换为数字。

（2）如果字符串是一个**空串**或者是一个**全是空格**的字符串，则转换为 0。

（3）只要字符串中包含了其他非数字的内容（`小数点`按数字来算），则转换为 NaN。怎么理解这里的 **NaN** 呢？可以这样理解，使用 Number() 函数之后，**如果无法转换为数字，就会转换为 NaN**。

**情况二：布尔 --> 数字**

（1）true 转成 1

（2）false 转成 0

**情况三：null --> 数字**，结果为：0

**情况四：undefined --> 数字**，结果为：NaN

### 2. 隐式类型转换：正负号 `+a`、`-a`

> 注意，这里说的是正号/负号，不是加号/减号。

任何值做`+a`、`-a`运算时， 底层调用的是 Number() 函数。不会改变原数值；得到的结果，会改变正负性。

代码举例：

```js
const a1 = '123';
console.log(+a1); // 123
console.log(-a1); // -123

const a2 = '123abc';
console.log(+a2); // NaN
console.log(-a2); // NaN

const a3 = true;
console.log(+a3); // 1
console.log(-a3); // -1


const a4 = false;
console.log(+a4); // 0
console.log(-a4); // -0

const a5 = null;
console.log(+a5); // 0
console.log(-a5); // -0

const a6 = undefined;
console.log(+a6); // NaN
console.log(-a6); // NaN
```

### 3. 使用 parseInt()函数：字符串 -> 整数

语法：

```js
const result = parseInt(需要转换的字符串)
```

**parseInt()**：将传入的数据当作**字符串**来处理，从左至右提取数值，一旦遇到非数值就立即停止；停止时如果还没有提取到数值，就返回NaN。

parse 表示“转换”，Int 表示“整数”。例如：

```javascript
parseInt('5'); // 得到的结果是数字 5
```

按照上面的规律，parseInt()的转换结果，列举如下。

**情况一：字符串 --> 数字**

（1）**只保留字符串最开头的数字**，后面的中文自动消失。

（2）如果字符串不是以数字开头，则转换为 NaN。

（3）如果字符串是一个空串或者是一个全是空格的字符串，转换时会报错。

**情况二：Boolean --> 数字**，结果为：NaN

**情况三：Null --> 数字**，结果为：NaN

**情况四：Undefined --> 数字**，结果为：NaN

---

Number() 函数和 parseInt() 函数的区别：

就拿`Number(true)` 和 `parseInt(true)/parseFloat(true)`来举例，二者在使用时，是有区别的：

-   Number(true) ：千方百计地想转换为数字；如果转换不了则返回 NaN。

-   parseInt(true)/parseFloat(true) ：提取出最前面的数字部分；没提取出来，那就返回 NaN。

**parseInt()具有以下特性**：

（1）parseInt()、parseFloat()会将传入的数据当作**字符串**来处理。也就是说，如果对**非 String**使用 parseInt()、parseFloat()，它会**先将其转换为 String** 然后再操作。【重要】

比如：

```javascript
var a = 168.23;
console.log(parseInt(a)); //打印结果：168  （因为是先将 a 转为字符串"168.23"，然后然后再操作）

var b = true;
console.log(parseInt(b)); //打印结果：NaN （因为是先将 b 转为字符串"true"，然后然后再操作）

var c = null;
console.log(parseInt(c)); //打印结果：NaN  （因为是先将 c 转为字符串"null"，然后然后再操作）

var d = undefined;
console.log(parseInt(d)); //打印结果：NaN  （因为是先将 d 转为字符串"undefined"，然后然后再操作）
```


（2）**只保留字符串最开头的数字**，后面的中文自动消失。例如：

```javascript
console.log(parseInt('2017在公众号上写了6篇文章')); //打印结果：2017

console.log(parseInt('2017.01在公众号上写了6篇文章')); //打印结果仍是：2017   （说明只会取整数）

console.log(parseInt('aaa2017.01在公众号上写了6篇文章')); //打印结果：NaN （因为不是以数字开头）
```


（3）自动截断小数：**取整，不四舍五入**。

例 1：

```javascript
var a = parseInt(5.8) + parseInt(4.7);
console.log(a);
```

打印结果：

```
9
```

例 2：

```javascript
var a = parseInt(5.8 + 4.7);
console.log(a);
```

打印结果：

```javascript
10;
```

（4）带两个参数时，表示在转换时，包含了进制转换。

代码举例：

```javascript
var a = '110';

var num = parseInt(a, 16); // 【重要】将 a 当成 十六进制 来看待，转换成 十进制 的 num

console.log(num);
```

打印结果：

```
272
```

如果你对打印结果感到震惊，请仔细看上面的代码注释。就是说，无论 parseInt() 里面的进制参数是多少，最终的转换结果是十进制。

我们来看下面的代码，打印结果继续震惊。

```javascript
var a = '5';

var num = parseInt(a, 2); // 将 a 当成 二进制 来看待，转换成 十进制 的 num

console.log(num); // 打印结果：NaN。因为 二进制中没有 5 这个数，转换失败。
```

### 4. parseFloat()函数：字符串 --> 浮点数（小数）

parseFloat()的作用是：将字符串转换为**浮点数**。

parseFloat()和 parseInt()的作用类似，不同的是，parseFloat()可以获得小数部分。

代码举例：

```javascript
var a = '123.456.789px';
console.log(parseFloat(a)); // 打印结果：123.456
```

parseFloat() 的几个特性，可以参照 parseInt()。

## 三、转换为 Boolean

### 转换结果列举【重要】

其他的数据类型都可以转换为 Boolean 类型。无论是隐式转换，还是显示转换，转换结果都是一样的。有下面几种情况：

（1）情况一：数字 --> 布尔。 0 和 NaN的转换结果 false，其余的都是 true。比如 `Boolean(NaN)`的结果是 false。

（2）情况二：字符串 ---> 布尔。空串的转换结果是false，其余的都是 true。全是空格的字符串，转换结果也是 true。字符串`'0'`的转换结果也是 true。

（3）情况三：null 和 undefined 都会转换为 false。

（4）情况四：引用数据类型会转换为 true。注意，空数组`[]`和空对象`{}`，**转换结果也是 true**，这一点，很多人都不知道。

**重中之重来了：**

转换为 Boolean 的上面这几种情况，**极其重要**，开发中会频繁用到。比如说，我们在项目开发中，经常需要对一些**非布尔值**做逻辑判断，符合条件后，才做下一步的事情。这个逻辑判断就是依据上面的四种情况。

举例：（接口返回的内容不为空，前端才做进一步的事情）

```js
const result1 = '';
const result2 = { a: 'data1', b: 'data2' };

if (result1) {
    console.log('因为 result1的内容为空，所以代码进不了这里');
}

if (result2 && result2.a) {
    // 接口返回了 result2，且 result2.a 里面有值，前端才做进一步的事情
    console.log('代码能进来，前端继续在这里干活儿');
}
```

这里再次强调一下，空数组`[]`和空对象`{}`转换为 Boolean 值时，转换结果为 true。

### 1. 隐式类型转换：逻辑运算

当非 Boolean 类型的数值和 Boolean 类型的数值做比较时，会先把前者**临时**进行隐式转换为 Boolean 类型，然后再做比较；且不会改变前者的数据类型。举例如下：

```js
const a = 1;

console.log(a == true); // 打印结果：true
console.log(typeof a); // 打印结果：number。可见，上面一行代码里，a 做了隐式类型转换，但是 a 的数据类型并没有发生变化，仍然是 Number 类型

console.log(0 == true); // 打印结果：false
```

### 2. 使用 `!!`

使用 `!!`可以显式转换为 Boolean 类型。比如 `!!3`的结果是 true。

### 3. 使用  Boolean()函数

使用 Boolean()函数可以显式转换为 Boolean 类型。

## 知识补充：其他进制的数字

-   16 进制的数字，以`0x`开头

-   8 进制的数字，以`0`开头

-   2 进制的数字，`0b`开头（不是所有的浏览器都支持：chrome 和火狐支持，IE 不支持）

比如`070`这个字符串，如果我调用 parseInt()转成数字时，有些浏览器会当成 8 进制解析，有些会当成 10 进制解析。

所以，比较建议的做法是：可以在 parseInt()中传递第二个参数，来指定当前数字的进制。例如：

```javascript
var a = '070';

a = parseInt(a, 8); //将 070 当成八进制来看待，转换结果为十进制。
console.log(a); // 打印结果：56。这个地方要好好理解。
```

## 隐式类型转换

重点：**隐式类型转换，内部调用的都是显式类型的方法**。

常见的隐式类型转换，包括下面这几种：

- isNaN() 函数

- 运算符：加号 `+`
- 运算符：`-`、`*`、`/`、`%`
- 运算符：正号/负号 +a`、`-a`
- 自增/自减运算符：`++`、`—-`

本段先来讲一下 isNaN() ，其他内容，将在下一节《JavaScript基础/运算符》中讲到。

### isNaN() 函数

语法：

```javascript
isNaN(参数);
```

解释：判断指定的参数是否为 NaN（非数字类型），返回结果为 Boolean 类型。也就是说：**任何不能被转换为数值的参数，都会让这个函数返回 true**。

**执行过程**：

（1）先调用`Number(参数)`函数；

（2）然后将`Number(参数)`的返回结果是否为数值。如果不为数值，则最终结果为 true；如果为数值，则最终结果为 false。

代码举例：

```javascript
console.log(isNaN('123')); // 返回结果：false。

console.log(isNaN(null)); // 返回结果：false

console.log(isNaN('abc')); // 返回结果：true。因为 Number('abc') 的返回结果是 NaN

console.log(isNaN(undefined)); // 返回结果：true

console.log(isNaN(NaN)); // 返回结果：true
```

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 10-运算符
publish: true
---

<ArticleTopAd></ArticleTopAd>

我们在前面讲过变量，本文讲一下**运算符**和表达式。

## 运算符的定义和分类

### 运算符的定义

**运算符**：也叫操作符，是一种符号。通过运算符可以对一个或多个值进行运算，并获取运算结果。

**表达式**：数字、运算符、变量的组合（组成的式子）。

表达式最终都会有一个运算结果，我们将这个结果称为表达式的**返回值**。

比如：`+`、`*`、`/`、`()` 都是**运算符**，而`（3+5）/2`则是**表达式**。

比如：typeof 就是运算符，可以获得一个值的类型。它会将该值的类型以**字符串**的形式返回，返回值可以是 number、string、boolean、undefined、object。

### 运算符的分类

JS 中的运算符，分类如下：

-   算数运算符
-   自增/自减运算符
-   一元运算符
-   三元运算符（条件运算符）
-   逻辑运算符
-   赋值运算符
-   比较运算符

下面来逐一讲解。

## 算数运算符

**算术运算符**：用于执行两个变量或值的算术运算。

常见的算数运算符有以下几种：

| 运算符 |          描述          |
| :----- | :--------------------: |
| +      |     加、字符串连接     |
| -      |           减           |
| \*     |           乘           |
| /      |           除           |
| %      | 获取余数（取余、取模） |

**求余的举例**：

假设用户输入 345，怎么分别得到 3、4、5 这三个数呢？

**答案**：

```
得到3的方法：345 除以100，得到3.45然后取整，得到3。即：parseInt(345/100)

得到4的方法：345 除以100，余数是45，除以10，得到4.5，取整。即：parseInt(345 % 100 / 10)

得到5的方法：345 除以10，余数就是5。即：345 % 10
```

### 算数运算符的运算规则

（1）`* / %` 的优先级高于 `+ -`

（2）无论是`+ - * / %`都是左结合性（从左至右计算）

（2）小括号`( )`：能够影响计算顺序，且可以嵌套。没有中括号、没有大括号，只有小括号。

举例 1：（取余）

```javascript
console.log(3 % 5);
```

输出结果为 3。

举例 2：（注意运算符的优先级）

```javascript
var a = 1 + ((2 * 3) % 4) / 3;
```

结果分析：

原式 = 1 + 6 % 4 / 3 = 1 + 2 / 3 = 1.66666666666666


### 取模（取余）运算

格式：

```js
余数 = m % n;
```

计算结果注意：

- 取余运算结果的正负性，取决于 m，而不是 n。比如：`10 % -3`的运算结果是 1。`-10 % 3`的运算结果是-1。

-   如果 n < 0，那就先把 n 取绝对值后，再计算。等价于 m % (-n)。
-   如果 n 是 0，那么结果是 NaN。
-   在 n > 0 的情况下：

    -   如果 m>=n，那就正常取余。
    -   如果 m<n，那结果就是 m。

### 浮点数运算的精度问题

浮点数值的最高精度是 17 位小数，但在进行算术计算时，会丢失精度，导致计算不够准确。比如：

```javascript
console.log(0.1 + 0.2); // 运算结果不是 0.3，而是 0.30000000000000004

console.log(0.07 * 100); // 运算结果不是 7，而是 7.000000000000001
```

因此，**不要直接判断两个浮点数是否相等**。前面的文章《JavaScript 基础：基本数据类型：Number》有详细介绍。

### 隐式类型转换——运算符：加号 `+`

1. **字符串 + XX = 字符串**

任何值和字符串做加法运算，都会先调用 String() 函数转换为字符串，然后再做拼串操作。最终的运算结果是字符串。

比如：

```javascript
result1 = 1 + 2 + '3'; // 字符串：33

result2 = '1' + 2 + 3; // 字符串：123
```

2. **Boolean + 数字 = 数字**

Boolean 型和数字型相加时， true 按 1 来算 ，false 按 0 来算。这里其实是先调 Number() 函数，将 Boolean 类型转为 Number 类型，然后再和 数字相加。

3. **null + 数字 = 数字**

等价于：0 + 数字

4.  **undefined + 数字 = NaN**

计算结果：NaN

5. 任何值和 **NaN** 运算的结果都是 NaN。

### 隐式类型转换——运算符：`-`、`*`、`/`、`%`

任何非 Number 类型的值做`-`、`*`、`/`、`%`运算时，会将这些值转换为 Number 然后再运算(内部调用的是 Number() 函数），运算结果是 Number 类型。

任何数据和 NaN进行运算，结果都是NaN。

比如：

```js
var result1 = 100 - '1'; // 99

var result2 = true + NaN; // NaN
```

## 自增和自减运算符

### 自增运算符 `++`

作用：可以快速对一个变量进行加1操作。只能操作变量，不能操作常量或者表达式。

例如：

```js
let a1 = 1;
let a2 = 2;

a1++;
const result = a1++ + a2; // result的结果为4
// (a1+a2)++; // 报错，没有这种写法

const a3 = 3;
a3++; // 报错，因为常量无法再自加
```

自增分成两种：`a++`和`++a`。共同点：

（1）无论是 `a++` 还是`++a`，自增都会使原变量的值加 1。

（2）**我们要注意的是**：`a`是变量，而`a++`和`++a`是**表达式**。

那这两种自增，有啥区别呢？区别是：`a++` 和 `++a`的值不同：（也就是说，表达式的值不同）

-   `a++`这个表达式的值等于原变量的值（a 自增前的值）。可以这样理解：先把 a 的值赋值给表达式，然后 a 再自增。

-   `++a`这个表达式的值等于新值 （a 自增后的值）。 可以这样理解：a 先自增，然后把自增后的值赋值给表达式。

### 自减运算符 `--`

作用：可以快速对一个变量进行减1操作。原理同自增运算符。

开发时，大多使用后置的自增/自减，并且代码独占一行，例如：`num++`，或者 `num--`。

### 代码举例

```javascript
var n1 = 10;
var n2 = 20;

var result1 = n1++;

console.log(n1); // 11
console.log(result1); // 10

result = ++n1;
console.log(n1); //12
console.log(result); //12

var result2 = n2--;
console.log(n2); // 19
console.log(result2); // 20

result2 = --n2;
console.log(n2); // 18
console.log(result2); // 18
```

### 隐式类型转换

自增和自减时，a的执行过程：

（1）先调用`Number(a)`函数；

（2）然后将`Number(a)`的返回结果进行 加 1 操作，得到的结果赋值给 a。

举例 1：

```javascript
let a = '666'; // 这里不能用 const 定义，否则报错。
a++;

console.log(a); // 打印结果：667
console.log(typeof a); // 打印结果： number
```

举例2：

```javascript
let a = 'abc';
a++;

console.log(a); // 打印结果：NaN。因为 Number('abc')的结果为 NaN，再自增后，结果依然是 NaN
console.log(typeof a); // 打印结果：number
```

## 一元运算符

一元运算符，只需要一个操作数。常见的一元运算符如下。

### typeof

> typeof 就是典型的一元运算符，因为后面只跟一个操作数。

`typeof()`表示“**获取变量的数据类型**”，它是 JS 提供的一个操作符。返回的是小写，语法为：（两种写法都可以）

```javascript
// 写法1
typeof 变量;

// 写法2
typeof(变量);
```

typeof 这个运算符的返回结果就是变量的类型。那返回结果的类型是什么呢？是字符串。

**返回结果**：

| typeof 的语法                | 返回结果  |
| :--------------------------- | :-------: |
| typeof 数字（含 typeof NaN） |  number   |
| typeof 字符串                |  string   |
| typeof 布尔型                |  boolean  |
| typeof 对象                  |  object   |
| typeof 方法                  | function  |
| typeof null                  |  object   |
| typeof undefined             | undefined |

备注 1：为啥 `typeof null`的返回值也是 object 呢？因为 null 代表的是**空对象**。

备注 2：`typeof NaN`的返回值是 number，上一篇文章中讲过，NaN 是一个特殊的数字。

**返回结果举例**：

```javascript
var a = '123';
console.log(typeof a); // 打印结果：string

console.log(typeof []); // 空数组的打印结果：object

console.log(typeof {}); // 空对象的打印结果：object
```

代码解释：这里的空数组`[]`、空对象`{}` ，为啥他们在使用 typeof 时，返回值也是 `object`呢？因为空数组、空对象都是**引用数据类型 Object**。

typeof 无法区分数组，但 instanceof 可以。比如：

```js
console.log([] instanceof Array); // 打印结果：true

console.log({} instanceof Array); // 打印结果：false
```

关于 instanceof 的详细内容，以后讲对象的时候，会详细介绍。

### 正号/负号：`+a`、`-a`

> 注意，这里说的是正号/负号，不是加号/减号。

（1）不会改变原数值。

（1）正号不会对数字产生任何影响。比如说，`2`和`+2`是一样的。

（2）我们可以对其他的数据类型使用`+`，来将其转换为 number【重要的小技巧】。比如：

```javascript
var a = true;
a = +a; // 注意这行代码的一元运算符操作
console.log('a：' + a);
console.log(typeof a);

console.log('-----------------');

var b = '18';
b = +b; // 注意这行代码的一元运算符操作
console.log('b：' + b);
console.log(typeof b);
```

打印结果：

```
a：1
number

-----------------

b：18
number
```

（3）负号可以对数字进行取反。

### 隐式类型转换——正号/负号

任何值做`+a`、`-a`运算时， 内部调用的是 Number() 函数。

**举例**：

```javascript
const a = '666';
const b = +a; // 对 a 进行一元运算，b是运算结果

console.log(typeof a); // 打印结果：string。说明 a 的数据类型保持不变。
console.log(a); // 打印结果："666"。不会改变原数值。

console.log(typeof b); // 打印结果：number。说明 b 的数据类型发生了变化。
console.log(b); // 打印结果：666
```

## 三目运算符

三目运算符也叫三元运算符、条件运算符。

语法：

```
条件表达式 ? 语句1 : 语句2;
```

**执行流程**——条件运算符在执行时，首先对条件表达式进行求值：

-   如果该值为 true，则执行语句 1，并返回执行结果

-   如果该值为 false，则执行语句 2，并返回执行结果

如果条件表达式的求值结果是一个非布尔值，会将其转换为布尔值然后再运算。

## 逻辑运算符

逻辑运算符有三个：

-   `&&`： 与（且）。两个都为真，结果才为真。特点：一假则假。

-   `||` ：或。只要有一个是真，结果就是真。特点：特点: 一真则真。

-   `!` ：非。对一个布尔值进行取反。特点: 真变假, 假变真。

注意：能参与逻辑运算的，都是布尔值。

**连比的写法：**

来看看逻辑运算符连比的写法。

举例 1：

```javascript
console.log(3 < 2 && 2 < 4);
```

输出结果为 false。

举例 2：（判断一个人的年龄是否在 18~65 岁之间）

```javascript
const a = prompt('请输入您的年龄');

if (a >= 18 && a < 65) {
    alert('可以上班');
} else {
    alert('准备退休');
}
```

PS：上面的`a>=18 && a<= 65`千万别想当然地写成` 18<= a <= 65`，没有这种语法。

### 非布尔值的与或运算【重要】

> 之所以重要，是因为在实际开发中，我们经常用这种代码做容错处理或者兜底处理。

非布尔值进行**与或运算**时，会先将其转换为布尔值，然后再运算，但返回结果是**原值**。比如说：

```javascript
var result = 5 && 6; // 运算过程：true && true;
console.log('result：' + result); // 打印结果：6（也就是最后面的那个值）
```

上方代码可以看到，虽然运算过程为布尔值的运算，但返回结果是原值。

那么，返回结果是哪个原值呢？我们来看一下。

1、两个非布尔值，做逻辑运算：

**与运算**的返回结果：

-   如果第一个值为 false，则只执行第一条语句，并直接返回第一个值；不会再往后执行。

-   如果第一个值为 true，则继续执行第二条语句，并返回第二个值（无论第二个值的结果如何）。

**或运算**的返回结果：

-   如果第一个值为 true，则只执行第一条语句，并直接返回第一个值；不会再往后执行。

-   如果第一个值为 false，则继续执行第二条语句，并返回第二个值（无论第二个值的结果如何）。

2、三个及以上的非布尔值，做逻辑运算：

**与运算**的返回结果：（value1 && value2 && value3）

- 从左到右依次计算操作数，找到第一个为 false 的值为止。
- 如果所有的值都为 true，则返回最后一个值。

**或运算**的返回结果：（value1 || value2 || value3）

- 从左到右依次计算操作数，找到第一个为 true 的值为止。
- 如果所有的值都为 false，则返回最后一个值。

### 非布尔值的 `!` 运算

非布尔值进行**非运算**时，会先将其转换为布尔值，然后再运算，返回结果是**布尔值**。

举例：

```javascript
let a = 10;
a = !a;

console.log(a); // false
console.log(typeof a); // boolean
```

### 短路运算的妙用【重要】

> 下方举例中的写法技巧，在实际开发中，经常用到。这种写法，是一种很好的「容错、容灾、降级」方案，需要多看几遍。

1、JS 中的`&&`属于**短路**的与：

-   如果第一个值为 false，则不会执行后面的内容。

-   如果第一个值为 true，则继续执行第二条语句，并返回第二个值。

举例：

```javascript
const a1 = 'qianguyihao';
// 第一个值为true，会继续执行后面的内容
a1 && alert('看 a1 出不出来'); // 可以弹出 alert 框

const a2 = undefined;
// 第一个值为false，不会继续执行后面的内容
a2 && alert('看 a2 出不出来'); // 不会弹出 alert 框
```

2、JS 中的`||`属于**短路**的或：

-   如果第一个值为 true，则不会执行后面的内容。

-   如果第一个值为 false，则继续执行第二条语句，并返回第二个值。

实际开发中，我们经常是这样来做「容错处理」的，如下。

举例1：

```js
const result; // 请求接口时，后台返回的内容
let errorMsg = ''; // 前端的文案提示
if (result & result.retCode == 0) {
  errorMsg = '恭喜你中奖啦~'
}

if (result && result.retCode != 0) {
	// 接口返回异常码时
	errorMsg = result.msg || '活动太火爆，请稍后再试'; // 文案提示信息，优先用 接口返回的msg字段，其次用 '活动太火爆，请稍后再试' 这个文案兜底。
}

if (!result) {
	// 接口挂掉时
	errorMsg = '网络异常，请稍后再试';
}
```

举例2，当前端成功调用一个接口后，返回的数据为 result 对象。这个时候，我们用变量 a 来接收 result 里的图片资源：

```javascript
if (result.retCode == 0) {
    var a = result && result.data && result.data.imgUrl || 'http://img.smyhvae.com/20160401_01.jpg';
}
```

上方代码的意思是，获取返回结果中的`result.data.imgUrl`这个图片资源；如果返回结果中没有 `result.data.imgUrl` 这个字段，就用 `http://img.smyhvae.com/20160401_01.jpg` 作为**兜底**图片。这种写法，在实际开发中经常用到。



## 赋值运算符

赋值：将等号右侧的值赋给符号左侧的变量。

### 赋值运算符包括哪些

-   `=` 直接赋值。比如 `var a = 5`。意思是，把 5 这个值，往 a 里面存一份。简称：把 5 赋值给 a。

-   `+=`：比如 a += 5 等价于 a = a + 5。

-   `-=`：比如 a -= 5 等价于 a = a - 5。

-   `*=`：比如 a _ = 5 等价于 a = a -5。

-   `/=`：比如 a /= 5 等价于 a = a / 5。

-   `%=`：比如 a %= 5 等价于 a = a % 5。

### 注意事项

（1）算数运算符的优先级高于赋值运算符。举例：

```js
const result = 1 + 2; // 先计算 1 + 2，再把计算结果赋值给 result。因为算数运算符的优先级高于赋值运算符。
```

（2）赋值运算符的结合性是右结合性（从右至左的顺序计算）。举例：

```js
const a1, a2;
a1 = a2 = 3; // 先将 3 复制给 a2，再将 a2 的值赋值给 a1
```







## 比较运算符

比较运算符可以比较两个值之间的大小关系，如果关系成立它会返回 true，如果关系不成立则返回 false。

比较运算符有很多种，比如：

```
>	大于号
<	小于号
>= 	大于或等于
<=  小于或等于
== 	等于
=== 全等于
!=	不等于
!== 不全等于
```

**比较运算符，得到的结果都是布尔值：要么是 true，要么是 false**。如果关系成立，就返回true；如果关系不成立，就返回false。

举例如下：

```javascript
const result = 5 > 10; // false
```

### 非数值的比较

（1）对于非数值进行比较时，会将其转换为数值类型（内部是调用`Number()方法`），再进行比较。

举例如下：

```javascript
console.log(1 > true); //false
console.log(1 >= true); //true
console.log(1 > '0'); //true

//console.log(10 > null); //true

//任何值和NaN做任何比较都是false

console.log(10 <= 'hello'); //false
console.log(true > false); //true
```

（2）特殊情况：如果参与比较的都是字符串，则**不会**将其转换为数字进行比较，比较的是字符串的**Unicode 编码**。【非常重要，这里是个大坑，很容易踩到】

比较字符编码时，是一位一位进行比较，顺序从左到右。如果大一样，则继续比较下一位。

比如说，当你尝试去比较`"123"`和`"56"`这两个字符串时，你会发现，字符串"56"竟然比字符串"123"要大（因为 5 比 1 大）。也就是说，下面这样代码的打印结果，其实是 true:（这个我们一定要注意，在日常开发中，很容易忽视）

```javascript
// 比较两个字符串时，比较的是字符串的字符编码，所以可能会得到不可预期的结果
console.log('56' > '123'); // true
```

**因此**：当我们想比较两个字符串型的数字时，**一定一定要先转型**再比较大小，比如 `parseInt()`。

（3）任何值和 NaN 做任何比较都是 false。

### `==`符号的强调

`==`这个符号，它是**判断是否等于**，而不是赋值。注意事项如下：

（1）`== `这个符号，还可以验证字符串是否相同。例如：

```javascript
console.log('我爱你中国' == '我爱你中国'); // 输出结果为true
```

（2）`== `这个符号并不严谨，会做隐式转换，将不同的数据类型，**转为相同类型**进行比较。例如：

```javascript
console.log('6' == 6); // 打印结果：true。这里的字符串"6"会先转换为数字6，然后再进行比较
console.log(true == '1'); // 打印结果：true
console.log(0 == -0); // 打印结果：true

console.log(null == 0); // 打印结果：false
```

（3）undefined 衍生自 null，所以这两个值做相等判断时，会返回 true。

```javascript
console.log(undefined == null); //打印结果：true。
```

（4）NaN 不和任何值相等，包括它本身。

```javascript
console.log(NaN == NaN); //false
console.log(NaN === NaN); //false
```

问题：那如果我想判断 b 的值是否为 NaN，该怎么办呢？

答案：可以通过 isNaN()函数来判断一个值是否是 NaN。举例：

```javascript
console.log(isNaN(b));
```

如上方代码所示，如果 b 为 NaN，则返回 true；否则返回 false。

### `===`全等符号的强调

**全等在比较时，不会做类型转换**。如果要保证**完全等于**（即：不仅要判断取值相等，还要判断数据类型相同），我们就要用三个等号`===`。例如：

```javascript
console.log('6' === 6); //false
console.log(6 === 6); //true
```

上述内容分析出：

-   `==`两个等号，不严谨，"6"和 6 是 true。

-   `===`三个等号，严谨，"6"和 6 是 false。

另外还有：**`==`的反面是`!=`，`===`的反面是`!==`**。例如：

```javascript
console.log(3 != 8); // true
console.log(3 != '3'); // false，因为3=="3"是true，所以反过来就是false。
console.log(3 !== '3'); // true，应为3==="3"是false，所以反过来是true。
```

## 不同数据类型之间的大小比较

这一段是比较运算符的延伸，内容繁琐，新手可以不用记，等以后用到的时候再查阅。

### 数值类型和其他类型比较

先将其他类型隐式转换为数值类型（内部是调用`Number()`方法），然后比较大小。代码举例：

```js
//字符串与数字比较
console.log('200' > 100); // true
console.log('a' > 100); // false。 'a' 被转换成 NaN 进行比较
console.log('110a' > 100); // false。 '110a' 被转换成 NaN 进行比较。说明`110a`在做隐式转换的时候，是调用了 Number('110a')方法，而不是调用  parseInt('110a')方法

// 布尔值与数字比较
console.log(true == 1); // true
console.log(false == 0); // true

// null 与数字进行比较
console.log(null < 0); // false
console.log(null == 0); // false
console.log(null > 0); // false
console.log(null <= 0); // true。这是一个很严重的bug
console.log(null >= 0); // true。同上

// undefined 与数字进行比较：结果都是 false
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined >= 0);
```

### 日期大小比较

如果日期的格式为字符串，则比较字符串的**Unicode 编码**。代码举例：

```js
const myDate1 = new Date(2022, 8, 8);
const myDate2 = new Date(2022, 8, 9);
const myDate3 = new Date(2022, 9, 8);
const myDate4 = new Date(2023, 8, 8);
console.log(myDate1 < myDate2); // true
console.log(myDate1 < myDate3); // true
console.log(myDate3 < myDate4); // true

const date1 = '2022-08-08'; // "2022/08/08"同理
const date2 = '2022-08-09'; // "2022/08/09"同理
const date3 = '2022-09-08'; // "2022/09/08"同理
const date4 = '2023-08-08'; // "2023/08/08"同理
console.log(date1 < date2); // true
console.log(date1 < date3); // true
console.log(date3 < date4); // true

const time1 = '2022-08-08 08:00:00';
const time2 = '2022-08-08 08:00:01';
const time3 = '2022-08-08 08:01:00';
const time4 = '2022-08-08 09:00:00';
console.log(time1 < time2); // true
console.log(time1 < time3); // true
console.log(time1 < time4); // true

// 数据类型不同，此处是先将 myDate1 转为字符串类型，然后比较大小。可想而知，结果都是 false
console.log(myDate1 >= date1); // false
console.log(myDate1 <= date1); // false

// 虽然时间格式不同，但都是字符串，所以可以比较大小
console.log(date1 < time1); // true
```

参考链接：

- [【JavaScript】探究数据类型之间的隐式转换和大小比较](https://blog.csdn.net/w390058785/article/details/79957206)

## 逗号运算符

逗号运算符一般用于简化代码。逗号运算符的优先级是所有运算符中最低的。

逗号运算符也是一个运算符, 所以也有运算符结果。它的运算符结果是最后一个表达式的结果。

代码举例：

```js
// 利用逗号运算符同时定义多个变量
let a, b;
// 利用逗号运算符同时给多个变量赋值
a = 10, b = 5;

const res1 = (1 + 2, 3 + 4, 5 + 6); // 打印结果：11
```

## 运算符的优先级

运算符的优先级如下：（优先级从高到低）

-   `.`、`[]`、`new`

-   `()`

-   `++`、`--`

-   `!`、`~`、`+`（单目）、`-`（单目）、`typeof`、`void`、`delete`

-   `*`、`/`、`%`

-   `+`（双目）、`-`（双目）

-   `<<`、`>>`、`>>>`

-   比较运算符：`<`、`<=`、`>`、`>=`

-   比较运算符：`==`、`!==`、`===`、`!==`

-   `&`

-   `^`

-   `|`

-   逻辑运算符：`&&` （注意：逻辑与 `&&` 比逻辑或 `||` 的优先级更高）

-   逻辑运算符：`||`

-   `?:`

-   `=`、`+=`、`-=`、`*=`、`/=`、`%=`、`<<=`、`>>=`、`>>>=`、`&=`、`^=`、`|=`

-   `,`

备注：在实际写代码的时候，如果你不清楚哪个优先级更高，可以先尝试把括号用上。

## Unicode 编码

> 这一段中，我们来讲引申的内容：Unicode 编码的使用。

各位同学可以先在网上查一下“Unicode 编码表”。

1、在字符串中可以使用转义字符输入 Unicode 编码。格式如下：

```
\u四位编码
```

举例如下：

```javascript
console.log('\u2600'); // 这里的 2600 采用的是16进制
console.log('\u2602'); // 这里的 2602 采用的是16进制。
```

打印结果：

![](http://img.smyhvae.com/20181222_1218.png)

2、我们还可以在 HTML 网页中使用 Unicode 编码。格式如下：

```
&#四位编码;
```

PS：我们知道，Unicode 编码采用的是 16 进制，但是，这里的编码需要使用 10 进制。

举例如下：

```html
<h1 style="font-size: 100px;">&#9860;</h1>
```

打印结果：

![](http://img.smyhvae.com/20181222_1226.png)

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 13-对象简介
publish: true
---

<ArticleTopAd></ArticleTopAd>



## 对象简介

### 面向对象简介

面向对象：可以创建自定义的类型，很好的支持继承和多态。

面向对象的特征：封装、继承、多态。

### 对象的概念

在 JavaScript 中，对象是一组**无序**的相关属性和方法的集合。

**对象的作用是：封装信息**。比如Student类里可以封装学生的姓名、年龄、成绩等。

对象具有**特征**（属性）和**行为**（方法）。

### 为什么需要对象

保存一个值时，可以使用**变量**，保存多个值（一组值）时，可以使用**数组**。

比如，如果要保存一个人的信息，通过数组的方式可以这样保存：

```javascript
var arr = ['王二', 35, '男', '180'];
```

上面这种表达方式比较乱。而如果用JS中的**对象**来表达，**结构会更清晰**。如下：

```javascript
var person = {};

person.name = '王二';
person.age = 35;
person.sex = '男';
person.height = '180';
```

由此可见，对象里面的属性均是**键值对**：

- 键：相当于属性名。

- 值：相当于属性值，可以是任意类型的值（数字类型、字符串类型、布尔类型，函数类型等）。

### 两条补充

**补充1**：对象的属性值可以是任何的数据类型，也可以是个**函数**：（也称之为方法）

```javascript
    var obj = new Object();
    obj.sayName = function () {
        console.log('smyhvae');
    };

    console.log(obj.sayName);  //没加括号，就是获取方法
    console.log('-----------');
    console.log(obj.sayName());  //加了括号，就是调用方法。即：执行函数内容，并执行函数体的内容

```

打印结果：

![](http://img.smyhvae.com/20180314_2109.png)

**补充2**：对象中的属性值，也可以是一个**对象**。

举例：

```javascript
    //创建对象 obj1
    var obj1 = new Object();
    obj1.test = undefined;

    //创建对象 obj2
    var obj2 = new Object();
    obj2.name = "smyhvae";

    //将整个 obj2 对象，设置为 obj1 的属性
    obj1.test = obj2;

    console.log(obj1.test.name);
```

打印结果为：smyhvae


## 对象和数据类型之间的关系

### 数据类型分类

- **基本数据类型（值类型）**：String 字符串、Number 数值、Boolean 布尔值、Null 空值、Undefined 未定义。

- **引用数据类型（引用类型）**：Object 对象。

**基本数据类型**：

基本数据类型的值直接保存在**栈内存**中，值与值之间是独立存在，修改一个变量不会影响其他的变量。

**对象**：

只要不是那五种基本数据类型，就全都是对象。

如果使用基本数据类型的数据，我们所创建的变量都是独立的，不能成为一个整体。

对象属于一种复合的数据类型，在对象中可以保存多个不同数据类型的属性。

对象是保存到**堆内存**中的，每创建一个新的对象，就会在堆内存中开辟出一个新的空间。变量保存的是对象的内存地址（对象的引用）。

换而言之，对象的值是保存在**堆内存**中的，而对象的引用（即变量）是保存在**栈内存**中的。

**如果两个变量保存的是同一个对象引用，当一个通过一个变量修改属性时，另一个也会受到影响**。

上面这句话很重要，我们来看看下面的例子。

## 传值和传址的区别


### 传值

代码举例：

```js
let a = 1;

let b = a;// 将 a 赋值给 b

b = 2; // 修改 b 的值
```

上方代码中，当我修改 b 的值之后，a 的值并不会发生改变。这个大家都知道。我们继续往下看。

### 传址（一个经典的例子）

代码举例：

```javascript
var obj1 = new Object();
obj1.name = "孙悟空";

var obj2 = obj1; // 将 obj1 的地址赋值给 obj2。从此， obj1 和 obj2 指向了同一个堆内存空间

//修改obj2的name属性
obj2.name = "猪八戒";
```

上面的代码中，当我修改 obj2 的name属性后，会发现，obj1 的 name 属性也会被修改。因为obj1和obj2指向的是堆内存中的同一个地址。

这个例子要尤其注意，实战开发中，很容易忽略。

对于引用类型的数据，赋值相当于地址拷贝，a、b指向了同一个堆内存地址。所以改了b，a也会变；本质上a、b就是一个东西。

如果你打算把引用类型 A 的值赋值给 B，让A和B相互不受影响的话，可以通过 Object.assign() 来复制对象。效果如下：

```js
var obj1 = {name: '孙悟空'};

// 复制对象：把 obj1 赋值给 obj3。两者之间互不影响
var obj3 = Object.assign({}, obj1);
```

## 对象的分类


1.内置对象：

- 由ES标准中定义的对象，在任何的ES的实现中都可以使用

- 比如：Object、Math、Date、String、Array、Number、Boolean、Function等。

2.宿主对象：

- 由JS的运行环境提供的对象，目前来讲主要指由浏览器提供的对象。

- 比如 BOM DOM。比如`console`、`document`。

3.自定义对象：

- 由开发人员自己创建的对象


通过 new 关键字创建出来的对象实例，都是属于对象类型，比如Object、Array、Date等。



## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)


---
title: 14-基本包装类型
publish: true
---

<ArticleTopAd></ArticleTopAd>




## 基本数据类型不能绑定属性和方法

属性和方法只能添加给对象，不能添加给基本数据类型。

**1、基本数据类型：**

注意，基本数据类型`string`是**无法绑定属性和方法**的。比如说：

```javascript
var str = 'qianguyihao';

str.aaa = 12;
console.log(typeof str); //打印结果为：string
console.log(str.aaa); //打印结果为：undefined
```

上方代码中，当我们尝试打印`str.aaa`的时候，会发现打印结果为：undefined。也就是说，不能给 `string` 绑定属性和方法。

当然，我们可以打印 str.length、str.indexOf("m")等等。因为这两个方法的底层做了数据类型转换（**临时**将 `string` 字符串转换为 `String` 对象，然后再调用内置方法），也就是我们在上一段中讲到的**包装类**。

**2、引用数据类型：**

引用数据类型`String`是可以绑定属性和方法的。如下：

```javascript
var strObj = new String('smyhvae');
strObj.aaa = 123;
console.log(strObj);
console.log(typeof strObj); //打印结果：Object
console.log(strObj.aaa);
```

打印结果：

![](http://img.smyhvae.com/20180202_1351.png)

内置对象 Number 也有一些自带的方法，比如：

-   Number.MAX_VALUE;

-   Number.MIN_VALUE;

内置对象 Boolean 也有一些自带的方法，但是用的不多。

### 基本包装类型


### 介绍

我们都知道，js 中的数据类型包括以下几种。

-   基本数据类型：String、Number、Boolean、Null、Undefined

-   引用数据类型：Object

JS 为我们提供了三个**基本包装类**：

-   String()：将基本数据类型字符串，转换为 String 对象。

-   Number()：将基本数据类型的数字，转换为 Number 对象。

-   Boolean()：将基本数据类型的布尔值，转换为 Boolean 对象。

通过上面这这三个包装类，我们可以**将基本数据类型的数据转换为对象**。

代码举例：

```javascript
let str1 = 'qianguyihao';
let str2 = new String('qianguyihao');

let num = new Number(3);

let bool = new Boolean(true);

console.log(typeof str1); // 打印结果：string
console.log(typeof str2); // 注意，打印结果：object
```

**需要注意的是**：我们在实际应用中一般不会使用基本数据类型的**对象**。如果使用基本数据类型的对象，在做一些比较时可能会带来一些**不可预期**的结果。

比如说：

```javascript
var boo1 = new Boolean(true);
var boo2 = new Boolean(true);

console.log(boo1 === boo2); // 打印结果竟然是：false
```

再比如说：

```javascript
var boo3 = new Boolean(false);

if (boo3) {
    console.log('qianguyihao'); // 这行代码竟然执行了
}
```

### 基本包装类型的作用

当我们对一些基本数据类型的值去调用属性和方法时，JS引擎会**临时使用包装类将基本数据类型转换为引用数据类型**（即“隐式类型转换”），这样的话，基本数据类型就有了属性和方法，然后再调用对象的属性和方法；调用完以后，再将其转换为基本数据类型。

举例：

```js
var str = 'qianguyihao';
console.log(str.length); // 打印结果：11
```

比如，上面的代码，执行顺序是这样的：

```js
// 步骤（1）：把简单数据类型 string 转换为 引用数据类型  String，保存到临时变量中
var temp = new String('qianguyihao');

// 步骤（2）：把临时变量的值 赋值给 str
str = temp;

//  步骤（3）：销毁临时变量
temp = null;

```

## 在底层，字符串以字符数组的形式保存

在底层，字符串是以字符数组的形式保存的。代码举例：

```javascript
var str = 'smyhvae';
console.log(str.length); // 获取字符串的长度
console.log(str[2]); // 获取字符串中的第3个字符（下标为2的字符）
```

上方代码中，`smyhvae`这个字符串在底层是以`["s", "m", "y", "h", "v", "a", "e"]`的形式保存的。因此，我们既可以获取字符串的长度，也可以获取指定索引 index 位置的单个字符。这很像数组中的操作。

再比如，String 对象的很多内置方法，也可以直接给字符串用。此时，也是临时将字符串转换为 String 对象，然后再调用内置方法。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)
---
title: 12-流程控制语句：循环结构（for和while）
publish: true
---

<ArticleTopAd></ArticleTopAd>

## 前言

循环语句：通过循环语句可以反复的执行一段代码多次。

## for 循环

### for 循环的语法

语法：

```
for(①初始化表达式; ②条件表达式; ④更新表达式){
	③语句...
}
```

执行流程：

```
①执行初始化表达式，初始化变量（初始化表达式只会执行一次）

②执行条件表达式，判断是否执行循环：
	如果为true，则执行循环③
	如果为false，终止循环

④执行更新表达式，更新表达式执行完毕继续重复②
```

for 循环举例：

```javascript
for (var i = 1; i <= 100; i++) {
    console.log(i);
}
```

上方代码的解释：

![](http://img.smyhvae.com/20180117_2248_2.png)

### for 循环举例

```javascript
for (var i = 1; i < 13; i = i + 4) {
    console.log(i);
}
```

上方代码的遍历步骤：

```
程序一运行，将执行var i = 1;这条语句， 所以i的值是1。
然后程序会验证一下i < 13是否满足，1<13是真，所以执行一次循环体（就是大括号里面的语句）。
执行完循环体之后，会执行i=i+4这条语句，所以i的值，是5。

程序会会验证一下i < 13是否满足，5<13是真，所以执行一次循环体（就是大括号里面的语句）。
执行完循环体之后，会执行i=i+4这条语句，所以i的值，是9。

程序会会验证一下i < 13是否满足，9<13是真，所以执行一次循环体（就是大括号里面的语句）。
执行完循环体之后，会执行i=i+4这条语句，所以i的值，是13。

程序会会验证一下i < 13是否满足，13<13是假，所以不执行循环体了，将退出循环。

最终输出输出结果为：1、5、9
```

接下来做几个题目。

**题目 1**：

```javascript
for (var i = 1; i < 10; i = i + 3) {
    i = i + 1;
    console.log(i);
}
```

输出结果：2、6、10

**题目 2**：

```javascript
for (var i = 1; i <= 10; i++) {}
console.log(i);
```

输出结果：11

**题目 3**：

```javascript
for (var i = 1; i < 7; i = i + 3) {}
console.log(i);
```

输出结果：7

**题目 4**：

```javascript
for (var i = 1; i > 0; i++) {
    console.log(i);
}
```

死循环。

## while 循环语句

### while 循环

语法：

```javascript
while(条件表达式){
	语句...
}
```

执行流程：

```
while语句在执行时，先对条件表达式进行求值判断：

	如果值为true，则执行循环体：
		循环体执行完毕以后，继续对表达式进行判断
		如果为true，则继续执行循环体，以此类推

	如果值为false，则终止循环
```

**如果有必要的话，我们可以使用 break 来终止循环**。

### do...while 循环

语法：

```javascript
do{
	语句...
}while(条件表达式)

```

执行流程：

```
do...while语句在执行时，会先执行循环体：

	循环体执行完毕以后，在对while后的条件表达式进行判断：
		如果结果为true，则继续执行循环体，执行完毕继续判断以此类推
		如果结果为false，则终止循环

```

### while 循环和 do...while 循环的区别

这两个语句的功能类似，不同的是：

-   while 是先判断后执行，而 do...while 是先执行后判断。

也就是说，do...while 可以保证循环体至少执行一次，而 while 不能。

### while 循环举例

**题目**：假如投资的年利率为 5%，试求从 1000 块增长到 5000 块，需要花费多少年？

**代码实现**：

```html
<!DOCTYPE html>
<html lang="">
    <head>
        <meta />
        <meta />
        <meta />
        <title>Document</title>
    </head>

    <body>
        <script>
            /*
             * 假如投资的年利率为5%，试求从1000块增长到5000块，需要花费多少年
             *
             * 1000 1000*1.05
             * 1050 1050*1.05
             */

            //定义一个变量，表示当前的钱数
            var money = 1000;

            //定义一个计数器
            var count = 0;

            //定义一个while循环来计算每年的钱数
            while (money < 5000) {
                money *= 1.05;

                //使count自增
                count++;
            }

            console.log(money);
            console.log('一共需要' + count + '年');
        </script>
    </body>
</html>
```

打印结果：

```
5003.18854203379

一共需要33年
```

另外，你也可以自己算一下，假如投资的年利率为 5%，从 1000 块增长到 1 万块，需要花费 48 年：

```
10401.269646942128
一共需要48年
```

## break 和 continue

> 这个知识点非常重要。

### break

-   break 可以用来退出 switch 语句或退出**整个**循环语句（循环语句包括 for 循环、while 循环。不包括 if。单独的 if 语句里不能用 break 和 continue，否则会报错）。

-   break 会立即终止离它**最近**的那个循环语句。

-   可以为循环语句创建一个 label，来标识当前的循环（格式：label:循环语句）。使用 break 语句时，可以在 break 后跟着一个 label，这样 break 将会结束指定的循环，而不是最近的。

**举例 1**：通过 break 终止循环语句

```javascript
for (var i = 0; i < 5; i++) {
    console.log('i的值:' + i);
    if (i == 2) {
        break; // 注意，虽然在 if 里 使用了 break，但这里的 break 是服务于外面的 for 循环。
    }
}
```

打印结果：

```
i的值:0
i的值:1
i的值:2
```

**举例 2**：label 的使用

```javascript
outer: for (var i = 0; i < 5; i++) {
    console.log('外层循环 i 的值：' + i);
    for (var j = 0; j < 5; j++) {
        break outer; // 直接跳出outer所在的外层循环（这个outer是我自定义的label）
        console.log('内层循环 j 的值:' + j);
    }
}
```

打印结果：

```
外层循环 i 的值：0
```

### continue

-   continue 可以用来跳过**当次**循环，继续下一次循环。

-   同样，continue 默认只会离他**最近**的循环起作用。

-   同样，如果需要跳过指定的当次循环，可以使用 label 标签。

举例：

```javascript
for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log('i的值:' + i);
}
```

打印结果：

```
i的值:1

i的值:3

i的值:5

i的值:7

i的值:9
```

## 各种练习

### 练习一：质数相关

**题目**：在页面中接收一个用户输入的数字，并判断该数是否是质数。

代码实现：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title></title>
        <script type="text/javascript">
            /*
            质数：只能被1和它自身整除的数，1不是质数也不是合数，质数必须是大于1的自然数。
         */

            var num = prompt('请输入一个大于1的整数:');

            //判断这个值是否合法
            if (num <= 1) {
                alert('该值不合法！');
            } else {
                //先用flag标志位，来保存当前的数的状态
                //默认当前num是质数
                var flag = true;

                //判断num是否是质数
                //获取2-num之间的数
                for (var i = 2; i < num; i++) {
                    //console.log(i);
                    //判断num是否能被i整除
                    if (num % i == 0) {
                        //一旦发现：如果num能被i整除，则说明num一定不是质数，
                        //此时：设置flag为false，然后跳出 for 循环
                        flag = false;
                        break;
                    }
                }

                //如果num是质数则输出
                if (flag) {
                    alert(num + '是质数！！！');
                } else {
                    alert('这个不是质数');
                }
            }
        </script>
    </head>

    <body></body>
</html>
```

### 练习二：质数相关

**题目**：打印 1~100 之间的所有质数

代码实现：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title></title>
        <script type="text/javascript">
            /*
             * 打印出1-100之间所有的质数
             */

            //打印2-100之间所有的数
            for (var i = 2; i <= 100; i++) {
                //创建一个布尔值，用来保存结果，默认i是质数
                var flag = true;

                //判断i是否是质数
                //获取到2-i之间的所有的数
                for (var j = 2; j < i; j++) {
                    //判断i是否能被j整除
                    if (i % j == 0) {
                        //如果进入判断则证明i不是质数,修改flag值为false
                        flag = false;
                    }
                }

                //如果是质数，则打印i的值
                if (flag) {
                    console.log(i);
                }
            }
        </script>
    </head>

    <body></body>
</html>
```

打印结果：

![](http://img.smyhvae.com/20181229_1415.png)

### 练习三：99 乘法表

代码实现：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title></title>
        <style type="text/css">
            body {
                width: 2000px;
            }

            span {
                display: inline-block;
                width: 80px;
            }
        </style>
        <script type="text/javascript">
            /*
             * 1.打印99乘法表
             *   1*1=1
             *   1*2=2 2*2=4
             *   1*3=3 2*3=6 3*3=9
             *   1*4=4 2*4=8 3*4=12 4*4=16
             *                      ....9*9=81
             *
             * 2.打印出1-100之间所有的质数
             */

            //创建外层循环，用来控制乘法表的高度
            for (var i = 1; i <= 9; i++) {
                //创建一个内层循环来控制图形的宽度
                for (var j = 1; j <= i; j++) {
                    document.write('<span>' + j + '*' + i + '=' + i * j + '</span>');
                }

                //输出一个换行
                document.write('<br />');
            }
        </script>
    </head>

    <body></body>
</html>
```

页面效果：

![](http://img.smyhvae.com/20181229_1410.png)

## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)
---
title: 17-内置对象：Date
publish: true
---

<ArticleTopAd></ArticleTopAd>




## 内置对象：Date

> Date 对象在实际开发中，使用得很频繁，且容易在细节地方出错，需要引起重视。

内置对象 Date 用来处理日期和时间。

**需要注意的是**：与 Math 对象不同，Date 对象是一个**构造函数** ，需要**先实例化**后才能使用。

## 创建Date对象

创建Date对象有两种写法：

- 写法一：如果Date()不写参数，就返回当前时间对象

- 写法二：如果Date()里面写参数，就返回括号里输入的时间对象

针对这两种写法，我们来具体讲一讲。

### 写法一：不传递参数时，则获取系统的当前时间对象

代码举例：

```javascript
var date1 = new Date();
console.log(date1);
console.log(typeof date1);
```

代码解释：不传递参数时，表示的是获取系统的当前时间对象。也可以理解成是：获取当前代码执行的时间。

打印结果：

```
Mon Feb 17 2020 21:57:22 GMT+0800 (中国标准时间)
object
```

### 写法二：传递参数

传递参数时，表示获取指定时间的时间对象。参数中既可以传递字符串，也可以传递数字，也可以传递时间戳。

通过传参的这种写法，我们可以把时间字符串/时间数字/时间戳，按照指定的格式，转换为时间对象。

举例1：（参数是字符串）

```js
const date11 = new Date('2020/02/17 21:00:00');
console.log(date11); // Mon Feb 17 2020 21:00:00 GMT+0800 (中国标准时间)

const date12 = new Date('2020/04/19'); // 返回的就是四月
console.log(date12); // Sun Apr 19 2020 00:00:00 GMT+0800 (中国标准时间)

const date13 = new Date('2020-05-20');
console.log(date13); // Wed May 20 2020 08:00:00 GMT+0800 (中国标准时间)

const date14 = new Date('Wed Jan 27 2017 12:00:00 GMT+0800 (中国标准时间)');
console.log(date14); // Fri Jan 27 2017 12:00:00 GMT+0800 (中国标准时间)
```


举例2：（参数是多个数字）

```js
const date21 = new Date(2020, 2, 18); // 注意，第二个参数返回的是三月，不是二月
console.log(date21); // Wed Mar 18 2020 00:00:00 GMT+0800 (中国标准时间)

const date22 = new Date(2020, 3, 18, 22, 59, 58);
console.log(date22); // Sat Apr 18 2020 22:59:58 GMT+0800 (中国标准时间)

const params = [2020, 06, 12, 16, 20, 59];
const date23 = new Date(...params);
console.log(date23); // Sun Jul 12 2020 16:20:59 GMT+0800 (中国标准时间)
```


举例3：（参数是时间戳）

```js
const date31 = new Date(1591950413388);
console.log(date31); // Fri Jun 12 2020 16:26:53 GMT+0800 (中国标准时间)

// 先把时间对象转换成时间戳，然后把时间戳转换成时间对象
const timestamp = new Date().getTime();
const date32 = new Date(timestamp);
console.log(date32); // Fri Jun 12 2020 16:28:21 GMT+0800 (中国标准时间)
```





## 日期的格式化

上一段内容里，我们获取到了 Date **对象**，但这个对象，打印出来的结果并不是特别直观。

如果我们需要获取日期的**指定部分**，就需要用到 Date对象自带的方法。

获取了日期指定的部分之后，我们就可以让日期按照指定的格式，进行展示（即日期的格式化）。比如说，我期望能以 `2020-02-02 19:30:59` 这种格式进行展示。

在这之前，我们先来看看 Date 对象有哪些方法。

### Date对象的方法

Date对象 有如下方法，可以获取日期和时间的**指定部分**：

| 方法名        | 含义              | 备注      |
| ------------- | ----------------- | --------- |
| getFullYear() | 获取年份          |           |
| getMonth()    | **获取月： 0-11** | 0代表一月 |
| getDate()       | **获取日：1-31** | 获取的是几号 |
| getDay() | **获取星期：0-6** | 0代表周日，1代表周一 |
| getHours() | 获取小时：0-23 |  |
| getMinutes() | 获取分钟：0-59 |           |
| getSeconds() | 获取秒：0-59 |           |
| getMilliseconds() | 获取毫秒 | 1s = 1000ms |



**代码举例**：

```javascript
	// 我在执行这行代码时，当前时间为 2019年2月4日，周一，13:23:52
	var myDate = new Date();

	console.log(myDate); // 打印结果：Mon Feb 04 2019 13:23:52 GMT+0800 (中国标准时间)

	console.log(myDate.getFullYear()); // 打印结果：2019
	console.log(myDate.getMonth() + 1); // 打印结果：2
	console.log(myDate.getDate()); // 打印结果：4

	var dayArr  = ['星期日', '星期一', '星期二', '星期三', '星期四','星期五', '星期六'];
	console.log(myDate.getDay()); // 打印结果：1
	console.log(dayArr[myDate.getDay()]); // 打印结果：星期一

	console.log(myDate.getHours()); // 打印结果：13
	console.log(myDate.getMinutes()); // 打印结果：23
	console.log(myDate.getSeconds()); // 打印结果：52
	console.log(myDate.getMilliseconds()); // 打印结果：393

	console.log(myDate.getTime()); // 获取时间戳。打印结果：1549257832393
```

获取了日期和时间的指定部分之后，我们把它们用字符串拼接起来，就可以按照自己想要的格式，来展示日期。

### 举例：年月日的格式化

代码举例：

```js
console.log(formatDate());

/*
    方法：日期格式化。
    格式要求：今年是：2020年02月02日 08:57:09 星期日
*/
function formatDate() {
    var date = new Date();

    var year = date.getFullYear(); // 年
    var month = date.getMonth() + 1; // 月
    var day = date.getDate(); // 日

    var week = date.getDay(); // 星期几
    var weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

    var hour = date.getHours(); // 时
    hour = hour < 10 ? '0' + hour : hour; // 如果只有一位，则前面补零

    var minute = date.getMinutes(); // 分
    minute = minute < 10 ? '0' + minute : minute; // 如果只有一位，则前面补零

    var second = date.getSeconds(); // 秒
    second = second < 10 ? '0' + second : second; // 如果只有一位，则前面补零

    var result = '今天是：' + year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second + ' ' + weekArr[week];

    return result;
}

```




## 获取时间戳

### 时间戳的定义和作用

**时间戳**：指的是从格林威治标准时间的`1970年1月1日，0时0分0秒`到当前日期所花费的**毫秒数**（1秒 = 1000毫秒）。

计算机底层在保存时间时，使用的都是时间戳。时间戳的存在，就是为了**统一**时间的单位。

我们经常会利用时间戳来计算时间，因为它更精确。而且，在实战开发中，接口返回给前端的日期数据，都是以时间戳的形式。

我们再来看下面这样的代码：

```javascript
	var myDate = new Date("1970/01/01 0:0:0");

	console.log(myDate.getTime()); // 获取时间戳
```

打印结果（可能会让你感到惊讶）

```javascript
	-28800000
```

为啥打印结果是`-28800000`，而不是`0`呢？这是因为，我们的当前代码，是在中文环境下运行的，与英文时间会存在**8个小时的时差**（中文时间比英文时间早了八个小时）。如果代码是在英文环境下运行，打印结果就是`0`。


### getTime()：获取时间戳

`getTime()`  获取日期对象的**时间戳**（单位：毫秒）。这个方法在实战开发中，用得比较多。但还有比它更常用的写法，我们往下看。


### 获取 Date 对象的时间戳

代码演示：

```js
// 方式一：获取 Date 对象的时间戳（最常用的写法）
const timestamp1 = +new Date();
console.log(timestamp1); // 打印结果举例：1589448165370

// 方式二：获取 Date 对象的时间戳（较常用的写法）
const timestamp2 = new Date().getTime();
console.log(timestamp2); // 打印结果举例：1589448165370

// 方式三：获取 Date 对象的时间戳
const timestamp3 = new Date().valueOf();
console.log(timestamp3); // 打印结果举例：1589448165370

// 方式4：获取 Date 对象的时间戳
const timestamp4 = new Date() * 1;
console.log(timestamp4); // 打印结果举例：1589448165370

// 方式5：获取 Date 对象的时间戳
const timestamp5 = Number(new Date());
console.log(timestamp5); // 打印结果举例：1589448165370
```

上面这五种写法都可以获取任意 Date 对象的时间戳，最常见的写法是**方式一**，其次是方式二。

根据前面所讲的关于「时间戳」的概念，上方代码获取到的时间戳指的是：从 `1970年1月1日，0时0分0秒` 到现在所花费的总毫秒数。

### 获取当前时间的时间戳

如果我们要获取**当前时间**的时间戳，除了上面的几种方式之外，还有另一种方式。代码如下：

```js
// 方式六：获取当前时间的时间戳（很常用的写法）
console.log(Date.now()); // 打印结果举例：1589448165370
```

上面这种方式六，用得也很多。只不过，`Date.now()`是H5标准中新增的特性，如果你的项目需要兼容低版本的IE浏览器，就不要用了。这年头，谁还用IE呢？


### 利用时间戳检测代码的执行时间

我们可以在业务代码的前面定义 `时间戳1`，在业务代码的后面定义 `时间戳2`。把这两个时间戳相减，就能得出业务代码的执行时间。


### format()

将时间对象转换为指定格式。

参考链接：<https://www.cnblogs.com/tugenhua0707/p/3776808.html>

## 练习

### 举例1：模拟日历

要求每天打开这个页面，都能定时显示当前的日期。

代码实现：

```html
<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8" />
        <title></title>
        <style>
            div {
                width: 800px;
                margin: 200px auto;
                color: red;
                text-align: center;
                font: 600 30px/30px 'simsun';
            }
        </style>
    </head>
    <body>
        <div></div>

        <script>
            //模拟日历
            //需求：每天打开这个页面都能定时显示年月日和星期几
            function getCurrentDate() {
                //1.创建一个当前日期的日期对象
                const date = new Date();
                //2.然后获取其中的年、月、日和星期
                const year = date.getFullYear();
                const month = date.getMonth();
                const hao = date.getDate();
                const week = date.getDay();
                //        console.log(year+" "+month+" "+hao+" "+week);
                //3.赋值给div
                const arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
                const div = document.getElementsByTagName('div')[0];
                return '今天是：' + year + '年' + (month + 1) + '月' + hao + '日 ' + arr[week];
            }

            const div = document.getElementsByTagName('div')[0];
            div.innerText = getCurrentDate();
        </script>
    </body>
</html>
```

实现效果：

![](http://img.smyhvae.com/20180202_1110.png)


### 举例2：发布会倒计时

实现思路：

- 设置一个定时器，每间隔1毫秒就自动刷新一次div的内容。

- 核心算法：输入的时间戳减去当前的时间戳，就是剩余时间（即倒计时），然后转换成时分秒。

代码实现：

```html
<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8" />
        <title></title>
        <style>
            div {
                width: 1210px;
                margin: 200px auto;
                color: red;
                text-align: center;
                font: 600 30px/30px 'simsun';
            }
        </style>
    </head>
    <body>
        <div></div>

        <script>
            var div = document.getElementsByTagName('div')[0];

            var timer = setInterval(() => {
                countDown('2022/02/03 11:20:00');
            }, 1);

            function countDown(myTime) {
                var nowTime = new Date();
                var future = new Date(myTime);
                var timeSum = future.getTime() - nowTime.getTime(); //获取时间差：发布会时间减去此刻的毫秒值

                var day = parseInt(timeSum / 1000 / 60 / 60 / 24); // 天
                var hour = parseInt((timeSum / 1000 / 60 / 60) % 24); // 时
                var minu = parseInt((timeSum / 1000 / 60) % 60); // 分
                var sec = parseInt((timeSum / 1000) % 60); // 秒
                var millsec = parseInt(timeSum % 1000); // 毫秒

                //细节处理：所有的时间小于10的时候，在前面自动补0，毫秒值要补双0（比如如，把 8 秒改成 08 秒）
                day = day < 10 ? '0' + day : day; //day小于10吗？如果小于，就补0；如果不小于，就是day本身
                hour = hour < 10 ? '0' + hour : hour;
                minu = minu < 10 ? '0' + minu : minu;
                sec = sec < 10 ? '0' + sec : sec;
                if (millsec < 10) {
                    millsec = '00' + millsec;
                } else if (millsec < 100) {
                    millsec = '0' + millsec;
                }

                // 兜底处理
                if (timeSum < 0) {
                    div.innerHTML = '距离苹果发布会还有00天00小时00分00秒000毫秒';
                    clearInterval(timer);
                    return;
                }

                // 前端要显示的文案
                div.innerHTML = '距离苹果发布会还有' + day + '天' + hour + '小时' + minu + '分' + sec + '秒' + millsec + '毫秒';
            }
        </script>
    </body>
</html>

```

实现效果：

![](http://img.smyhvae.com/20180202_1130.gif)

## Moment.js

Moment.js 是一个轻量级的JavaScript时间库，我们可以利用它很方便地进行时间操作，提升开发效率。

- 中文官网：<http://momentjs.cn/>

使用举例：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script src="https://cdn.bootcdn.net/ajax/libs/moment.js/2.26.0/moment.min.js"></script>
        <script>
            // 按照指定的格式，格式化当前时间
            console.log(moment().format('YYYY-MM-DD HH:mm:ss')); // 打印结果举例：2020-06-12 16:38:38
            console.log(typeof moment().format('YYYY-MM-DD HH:mm:ss')); // 打印结果：string

            // 按照指定的格式，格式化指定的时间
            console.log(moment('2020/06/12 18:01:59').format('YYYY-MM-DD HH:mm:ss')); // 打印结果：2020-06-12 18:01:59

            // 按照指定的格式，获取七天后的时间
            console.log(moment().add(7, 'days').format('YYYY-MM-DD hh:mm:ss')); // 打印结果举例：2020-06-19 04:43:56
        </script>
    </body>
</html>

```


## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)



---
title: 16-内置对象：Number和Math
publish: true
---

<ArticleTopAd></ArticleTopAd>




## 内置对象 Number 的常见方法


### Number.isInteger() 判断是否为整数

语法：

```
布尔值 = Number.isInteger(数字);
```


### toFixed() 小数点后面保留多少位

语法：

```js
字符串 = myNum.toFixed(num);
```

解释：将数字 myNum 的小数点后面保留 num 位小数（四舍五入），并返回。不会改变原数字。注意，**返回结果是字符串**。

参数 num：指定了小数点后面的位数。

举例：

```js
let num = 3.456;
let num2 = num.toFixed(2);

console.log(num); // 打印结果：3.456
console.log(num2); // 打印结果：3.46

console.log(typeof num); // number
console.log(typeof num2); // string
```

上方代码中，`num2`的结果是3.46，但是请注意，`num`的类型Number型，而`num2`的类型却是String型。


## 内置对象 Math 的常见方法

Math 和其他的对象不同，它不是一个构造函数，不需要创建对象。所以我们不需要 通过 new 来调用，而是直接使用里面的属性和方法即可。

Math属于一个工具类，里面封装了数学运算相关的属性和方法。如下：

| 方法 | 描述 | 备注 |
|:-------------|:-------------|:-------------|
| Math.PI | 圆周率 | Math对象的属性  |
| Math.abs() |  **返回绝对值** |  |
| Math.random() | 生成0-1之间的**随机浮点数** | 取值范围是 [0，1) |
| Math.floor() | **向下取整**（往小取值） |  |
| Math.ceil() | **向上取整**（往大取值） |  |
| Math.round() | 四舍五入取整（正数四舍五入，负数五舍六入） |  |
| Math.max(x, y, z)  | 返回多个数中的最大值 |  |
| Math.min(x, y, z)  | 返回多个数中的最小值 |  |
| Math.pow(x,y) | 乘方：返回 x 的 y 次幂 |  |
| Math.sqrt() | 开方：对一个数进行开方运算 |  |



**举例**：

```javascript
    var num = -0.6;

    console.log(Math.abs(num));        //取绝对值

    console.log(Math.floor(num));      //向下取整，向小取

    console.log(Math.ceil(num));       //向上取整，向大取

    console.log(Math.round(num));      //四舍五入取整（正数四舍五入，负数五舍六入）

    console.log(Math.random());        //生成0-1之间的随机数
```

运行结果：

```
    0.6

    -1

    -0

    -1

    0.6453756205275165
```

##  Math.abs()：获绝对值

方法定义：返回绝对值。

注意：

- 参数中可以接收字符串类型的数字，此时会将字符串做隐式类型转换，然后再调用 Math.abs() 方法。

代码举例：

```javascript
    console.log(Math.abs(2)); // 2
    console.log(Math.abs(-2)); // 2

    // 先做隐式类型转换，将 '-2'转换为数字类型 -2，然后再调用 Math.abs()
    console.log(Math.abs('-2'));

    console.log(Math.abs('hello')); // NaN
```

## Math.random() 方法：生成随机数

方法定义：生成 [0, 1) 之间的**随机浮点数**。

我们来看几个例子。

### 生成 [0, x) 之间的随机数

```javascript
    Math.round(Math.random()*x)
```


### 生成 [x, y) 之间的随机数

```javascript
    Math.round(Math.random()*(y-x)+x)
```

### 【重要】生成 [x, y]之间的随机整数

也就是说：生成两个整数之间的随机整数，**并且要包含这两个整数**。

这个功能很常用，我们可以将其封装成一个方法，代码实现如下：

```javascript
    /*
    * 生成两个整数之间的随机整数，并且要包含这两个整数
    */
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    console.log(getRandom(1, 10));
```

### 举例：随机点名

根据上面的例子，我们还可以再延伸一下，来看看随机点名的例子。

```javascript
    /*
    * 生成两个整数之间的随机整数，并且要包含这两个整数
    */
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const arr = ['许嵩', '邓紫棋', '毛不易', '解忧邵帅'];
    const index = getRandom(0, arr.length - 1); // 生成随机的index
    console.log(arr[index]); // 随机点名
```


## pow()：乘方

如果想计算 `a 的 b 次方`，可以使用如下函数：

```
	Math.pow(a, b);
```

Math的中文是“数学”，pow是“幂”。

**举例1：**

![](http://img.smyhvae.com/20180117_1730.png)

代码实现：

```
	var a = Math.pow(3, Math.pow(2, 2));
	console.log(a);
```

**举例2：**

![](http://img.smyhvae.com/20180117_1740.png)

代码实现：

```
	var a = Math.pow(Math.pow(3, 2), 4);
	console.log(a);
```

## sqrt()：开方

如果想计算数值a的开二次方，可以使用如下函数：

```
	 Math.sqrt(a);
```

sqrt即“square 开方”。比如：

```
	var a = Math.sqrt(36);
```


## url 编码和解码

URI (Uniform ResourceIdentifiers,通用资源标识符)进行编码，以便发送给浏览器。有效的URI中不能包含某些字符，例如空格。而这URI编码方法就可以对URI进行编码，它们用特殊的UTF-8编码替换所有无效的字符，从而让浏览器能够接受和理解。

```javascript
    encodeURIComponent();   //把字符串作为 URI 组件进行编码
    decodeURIComponent();   //把字符串作为 URI 组件进行解码
```

举例：

```javascript
    var url = "http://www.cnblogs.com/smyhvae/";

    var str = encodeURIComponent(url);
    console.log(str);                           //打印url的编码
    console.log(decodeURIComponent(str));       //对url进行编码后，再解码，还原为url
```

打印结果：

![](http://img.smyhvae.com/20180202_1432.png)


## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)





推荐链接：

- <https://www.jianshu.com/p/246b844f4449>


---
title: 15-内置对象 String：字符串的常见方法
publish: true
---

<ArticleTopAd></ArticleTopAd>



## 内置对象简介

> JavaScript 中的对象分为3种：自定义对象 、内置对象、 浏览器对象。

> 前面两种对象：是JS的基础内容，属于 ECMAScript； 第三个浏览器对象：属于JS独有，即 JS 内置的API。

**内置对象**：就是指这个语言自带的一些对象，供开发者使用，这些对象提供了一些常用或者最基本而必要的功能（属性和方法）。

内置对象最大的优点就是帮助我们快速开发。

**JavaScript的内置对象**：

| 内置对象 | 对象说明 |
|:-------------|:-------------|
|  Arguments | 函数参数集合|
|  Array | 数组|
|  Boolean | 布尔对象|
|  Math | 数学对象|
|  Date | 日期时间|
|  Error | 异常对象|
|  Function | 函数构造器|
|  Number | 数值对象|
|  Object | 基础对象|
|  RegExp | 正则表达式对象|
|  String | 字符串对象|

前面的几篇文章中，我们专门讲到了数组 Array。今天这篇文章，我们先来讲一下内置对象 Math。



## 字符串前言

> 在日常开发中，String 对象（字符串对象）的使用频率是非常高的。所以有必要详细介绍。

需要注意的是：**字符串的所有方法，都不会改变原字符串**（字符串的不可变性），操作完成后会返回一个新的值。

字符串的常见方法如下。

## 查找字符串

### 1、indexOf()/lastIndexOf()：获取字符串中指定内容的索引

> 这个方法，是使用频率最高的一个方法。


**语法 1**：

```javascript
索引值 = str.indexOf(想要查询的字符串);
```

备注：`indexOf()` 是从前向后查找字符串的位置。同理，`lastIndexOf()`是从后向前寻找。

**解释**：可以检索一个字符串中是否含有指定内容。如果字符串中含有该内容，则会返回其**第一次出现**的索引；如果没有找到指定的内容，则返回 -1。

因此可以得出一个重要技巧：

-   **如果获取的索引值为 0，说明字符串是以查询的参数为开头的**。

-   如果获取的索引值为-1，说明这个字符串中没有指定的内容。

举例 1：(查找单个字符)

```javascript
const str = 'abcdea';

//给字符查索引(索引值为0,说明字符串以查询的参数为开头)
console.log(str.indexOf('c'));
console.log(str.lastIndexOf('c'));

console.log(str.indexOf('a'));
console.log(str.lastIndexOf('a'));
```

打印结果：

![](http://img.smyhvae.com/20180202_1420.png)

举例 2：（查找字符串）

```js
const name = 'qianguyihao';

console.log(name.indexOf('yi')); // 打印结果：6
```

**语法 2**：

这个方法还可以指定第二个参数，用来指定查找的**起始位置**。语法如下：

```javascript
索引值 = str.indexOf(想要查询的字符串, [起始位置]);
```

举例 3：（两个参数时，需要特别注意）

```javascript
var str = 'qianguyihao';
result = str.indexOf('a', 3); // 从下标为3的位置开始查找 'a'这个字符 【重要】

console.log(result); // 打印结果：9
```

上方代码中，`indexOf()`方法中携带了两个参数，具体解释请看注释。

### indexOf 举例

**案例**：查找字符串"qianguyihao"中，所有 `a` 出现的位置以及次数。

思路：

（1）先查找第一个 a 出现的位置。

（2）只要 indexOf 返回的结果不是 -1 就继续往后查找。

（3）因为 indexOf 只能查找到第一个，所以后面的查找，可以利用第二个参数，在当前索引加 1，从而继续查找。

代码实现：

```js
var str = 'qianguyihao';
var index = str.indexOf('a');
var num = 0;
while (index !== -1) {
    console.log(index);
    num++; // 每打印一次，就计数一次
    index = str.indexOf('o', index + 1);
}

console.log('a 出现的次数是: ' + num);
```


### 2、search()：获取字符串中指定内容的索引（参数里一般是正则）


**语法**：

```javascript
索引值 = str.search(想要查找的字符串);
索引值 = str.search(正则表达式);

```

备注：`search()` 方法里的参数，既可以传字符串，也可以传正则表达式。

**解释**：可以检索一个字符串中是否含有指定内容。如果字符串中含有该内容，则会返回其**第一次出现**的索引；如果没有找到指定的内容，则返回 -1。


举例：

```js
const name = 'qianguyihao';

console.log(name.search('yi')); // 打印结果：6
console.log(name.search(/yi/i)); // 打印结果：6
```

备注：上方的`/yi/i`采用的是正则表达式的写法，意思是，让 name去匹配字符`yi`，忽略大小写。我们在后面会专门介绍正则表达式。


### 3、includes()：字符串中是否包含指定的内容

**语法**：

```js
布尔值 = str.includes(想要查找的字符串, [position]);
```

**解释**：判断一个字符串中是否含有指定内容。如果字符串中含有该内容，则会返回 true；否则返回 false。

参数中的 `position`：如果不指定，则默认为0；如果指定，则规定了检索的起始位置。

```js
const name = 'qianguyihao';

console.log(name.includes('yi')); // 打印结果：true
console.log(name.includes('haha')); // 打印结果：false

console.log(name.includes('yi',7)); // 打印结果：false
```


### 4、startsWith()：字符串是否以指定的内容开头

**语法**：

```js
布尔值 = str.startsWith(想要查找的内容, [position]);
```

**解释**：判断一个字符串是否以指定的子字符串开头。如果是，则返回 true；否则返回 false。

**参数中的position**：

- 如果不指定，则默认为0。

- 如果指定，则规定了**检索的起始位置**。检索的范围包括：这个指定位置开始，直到字符串的末尾。即：[position, str.length)

举例：

```js
const name = 'abcdefg';

console.log(name.startsWith('a')); // 打印结果：true
console.log(name.startsWith('b')); // 打印结果：false

// 因为指定了起始位置为3，所以是在 defg 这个字符串中检索。
console.log(name.startsWith('d',3)); // 打印结果：true
console.log(name.startsWith('c',3)); // 打印结果：false
```

### 5、endsWith()：字符串是否以指定的内容结尾

**语法**：

```js
布尔值 = str.endsWith(想要查找的内容, [position]);
```

**解释**：判断一个字符串是否以指定的子字符串结尾。如果是，则返回 true；否则返回 false。

**参数中的position**：

- 如果不指定，则默认为 str.length。

- 如果指定，则规定了**检索的结束位置**。检索的范围包括：从第一个字符串开始，直到这个指定的位置。即：[0, position)

- 或者你可以这样简单理解：endsWith() 方法里的position，表示**检索的长度**。

注意：startsWith() 和 endsWith()这两个方法，他们的 position 的含义是不同的，请仔细区分。

举例：

```js
const name = 'abcdefg';

console.log(name.endsWith('g')); // 打印结果：true
console.log(name.endsWith('f')); // 打印结果：false

// 因为指定了截止位置为3，所以是在 abc 这个长度为3字符串中检索
console.log(name.endsWith('c', 3)); // 打印结果：true
console.log(name.endsWith('d', 3)); // 打印结果：false
```

注意看上方的注释。

参考链接：[JavaScript endsWith()介绍](https://www.softwhy.com/article-2885-1.html)

## 获取指定位置的字符

### 1、charAt(index)

语法：

```javascript
字符 = str.charAt(index);
```

解释：返回字符串指定位置的字符。这里的 `str.charAt(index)`和`str[index]`的效果是一样的。

注意：字符串中第一个字符的下标是 0。如果参数 index 不在 [0, string.length) 之间，该方法将返回一个空字符串。

**代码举例**：

```javascript
var str = new String('smyhvae');

for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}
```

打印结果：

![](http://img.smyhvae.com/20180202_1401.png)

上面这个例子一般不用。一般打印数组和 json 的时候用索引，打印 String 不建议用索引。

### 2、str[index]

`str.charAt(index)`和`str[index]`的效果是一样的，不再赘述。区别在于：`str[index]`是 H5 标准里新增的特性。

### 3、charCodeAt(index)

语法：

```javascript
字符 = str.charCodeAt(index);
```

解释：返回字符串指定位置的字符的 Unicode 编码。不会修改原字符串。

在实际应用中，通过这个方法，我们可以判断用户按下了哪个按键。

**代码举例**：打印字符串的**占位长度**。

提示：一个英文占一个位置，一个中文占两个位置。

思路：判断该字符是否在 0-127 之间（在的话是英文，不在是非英文）。

代码实现：

```html
<script>
    //    sort();   底层用到了charCodeAt();

    var str = 'I love my country!我你爱中国！';

    //需求：求一个字符串占有几个字符位。
    //思路；如果是英文，站一个字符位，如果不是英文占两个字符位。
    //技术点：判断该字符是否在0-127之间。（在的话是英文，不在是非英文）
    alert(getZFWlength(str));
    alert(str.length);

    //定义方法：字符位
    function getZFWlength(string) {
        //定义一个计数器
        var count = 0;
        for (var i = 0; i < string.length; i++) {
            //对每一位字符串进行判断，如果Unicode编码在0-127，计数器+1；否则+2
            if (string.charCodeAt(i) < 128 && string.charCodeAt(i) >= 0) {
                count++;
            } else {
                count += 2;
            }
        }
        return count;
    }
</script>
```

打印结果：

```
    30
    24
```

从打印结果可以看出：字符串的长度是 24，但是却占了 30 个字符位（一个中文占两个字符位）。

另外，sort()方法其实底层也是用到了 charCodeAt()，因为用到了 Unicode 编码。

## 字符串截取


### 1、slice()


> slice() 方法用的最多。


语法：

```javascript
新字符串 = str.slice(开始索引, 结束索引); //两个参数都是索引值。包左不包右。
```

解释：从字符串中截取指定的内容。不会修改原字符串，而是将截取到的内容返回。

注意：上面的参数，包左不包右。参数举例如下：

- `(2, 5)` 截取时，包左不包右。

- `(2)` 表示**从指定的索引位置开始，截取到最后**。

- `(-3)` 表示从倒数第三个开始，截取到最后。

- `(1, -1)` 表示从第一个截取到倒数第一个。

- `(5, 2)` 表示前面的大，后面的小，返回值为空。

### 2、substring()

语法：

```javascript
新字符串 = str.substring(开始索引, 结束索引); //两个参数都是索引值。包左不包右。
```

解释：从字符串中截取指定的内容。和`slice()`类似。

`substring()`和`slice()`是类似的。但不同之处在于：

- `substring()`不能接受负值作为参数。如果传递了一个**负值**，则默认使用 0。

- `substring()`还会自动调整参数的位置，如果第二个参数小于第一个，则自动交换。比如说， `substring(1, 0)`相当于截取的是第一个字符。

### 3、substr()

语法：

```javascript
字符串 = str.substr(开始索引, 截取的长度);
```

解释：从字符串中截取指定的内容。不会修改原字符串，而是将截取到的内容返回。

注意，这个方法的第二个参数**截取的长度**，不是结束索引。

参数举例：

- `(2,4)` 从索引值为 2 的字符开始，截取 4 个字符。

- `(1)` 从指定位置开始，截取到最后。

- `(-3)` 从倒数第几个开始，截取到最后。

备注：ECMAscript 没有对 `substr()` 方法进行标准化，因此不建议使用它。



## String.fromCharCode()

`String.fromCharCode()`：根据字符的 Unicode 编码获取字符。

代码举例：

```javascript
var result1 = String.fromCharCode(72);
var result2 = String.fromCharCode(20013);

console.log(result1); // 打印结果：H
console.log(result2); // 打印结果：中
```

## concat()

语法：

```javascript
    新字符串 = str1.concat(str2)； //连接两个字符串
```

解释：字符串的连接。

这种方法基本不用，直接把两个字符串相加就好。

是的，你会发现，数组中也有`concat()`方法，用于数组的连接。这个方法在数组中用得挺多的。

代码举例：

```javascript
var str1 = 'qiangu';
var str2 = 'yihao';

var result = str1.concat(str2);
console.log(result); // 打印结果：qianguyihao
```

## split()：字符串转换为数组 【重要】

语法：

```javascript
新的数组 = str.split(分隔符);
```

解释：通过指定的分隔符，将一个字符串拆分成一个**数组**。不会改变原字符串。

备注：`split()`这个方法在实际开发中用得非常多。一般来说，从接口拿到的 json 数据中，经常会收到类似于`"q, i, a, n"`这样的字符串，前端需要将这个字符串拆分成`['q', 'i', 'a', 'n']`数组，这个时候`split()`方法就派上用场了。

**代码举例 1**：

```javascript
var str = 'qian, gu, yi, hao'; // 用逗号隔开的字符串
var array = str.split(','); // 将字符串 str 拆分成数组，通过逗号来拆分

console.log(array); // 打印结果是数组：["qian", " gu", " yi", " hao"]
```

**代码举例 2**：

```javascript
//split()方法：字符串变数组
var str3 = '千古壹号|qianguyihao|许嵩';

console.log('结果1：' +str3.split()); // 无参数，表示：把整个字符串作为一个元素添加到数组中。

console.log(str3.split('')); // 参数为空字符串，则表示：分隔字符串中每一个字符，分别添加到数组中

console.log(str3.split('|')); // 参数为指定字符，表示：用 '|' 分隔字符串。此分隔符将不会出现在数组的任意一个元素中

console.log(str3.split('许')); // 同上
```

打印结果：（都是数组）

![](http://img.smyhvae.com/20200611_2050.png)





## replace()

语法：

```javascript
新的字符串 = str.replace(被替换的子串，新的子串);
```

解释：将字符串中的指定内容，替换为新的内容并返回。不会修改原字符串。

注意：这个方法，默认只会替换第一个被匹配到的字符。如果要全局替换，需要使用正则。

代码举例：

```javascript
//replace()方法：替换
var str2 = 'Today is fine day,today is fine day !';
console.log(str2);

console.log(str2.replace('today', 'tomorrow')); //只能替换第一个today
console.log(str2.replace(/today/gi, 'tomorrow')); //这里用到了正则，才能替换所有的today
```

## repeat()：重复字符串

语法：

```js
newStr = str.repeat(重复的次数);
```

解释：将字符串重复指定的次数。会返回新的值，不会修改原字符串。

举例1：

```js
const name = 'qianguyihao';

console.log(name.repeat(2)); // 打印内容：qianguyihaoqianguyihao
```

举例2：（模糊字符串的后四位）

```js
const telephone = '13088889999';
const mix_telephone = telephone.slice(0, -4) + '*'.repeat(4); // 模糊电话号码的后四位

console.log(telephone); // 打印结果：13088889999
console.log(mix_telephone); // 打印结果：1308888****
```






## trim()

`trim()`：去除字符串前后的空白。

代码举例：

```javascript
//去除字符串前后的空格，trim();
let str = '   a   b   c   ';
console.log(str);
console.log(str.length);

console.log(str.trim());
console.log(str.trim().length);
```

打印结果：

![](http://img.smyhvae.com/20200607_2132.png)

## 大小写转换

举例：

```javascript
var str = 'abcdEFG';

//转换成小写
console.log(str.toLowerCase());

//转换成大写
console.log(str.toUpperCase());
```

## html 方法

- anchor() 创建 a 链接

- big()

- sub()

- sup()

- link()

- bold()

注意，str.link() 返回值是字符串。

举例：

```javascript
var str = '你好';

console.log(str.anchor());
console.log(str.big());
console.log(str.sub());
console.log(str.sup());
console.log(str.link('http://www.baidu.com'));
console.log(str.bold());
```

![](http://img.smyhvae.com/20180202_1536.png)

## 字符串练习

**练习 1**："smyhvaevaesmyh"查找字符串中所有 m 出现的位置。

代码实现：

```javascript
var str2 = 'smyhvaevaesmyh';
for (var i = 0; i < str2.length; i++) {
    //如果指定位置的符号=== "o"
    //str2[i]
    if (str2.charAt(i) === 'm') {
        console.log(i);
    }
}
```

**练习 2**：判断一个字符串中出现次数最多的字符，统计这个次数

```html
<script>
    var str2 = 'smyhvaevaesmyhvae';

    //定义一个json，然后判断json中是够有该属性，如果有该属性，那么值+1;否则创建一个该属性，并赋值为1；
    var json = {};
    for (var i = 0; i < str2.length; i++) {
        //判断：如果有该属性，那么值+1;否则创建一个该属性，并赋值为1；
        var key = str2.charAt(i);
        if (json[key] === undefined) {
            json[key] = 1;
        } else {
            json[key] += 1;
        }
    }
    console.log(json);

    console.log('----------------');
    //获取json中属性值最大的选项
    var maxKey = '';
    var maxValue = 0;
    for (var k in json) {
        //        if(maxKey == ""){
        //            maxKey = k;
        //            maxValue = json[k];
        //        }else{
        if (json[k] > maxValue) {
            maxKey = k;
            maxValue = json[k];
        }
        //        }
    }
    console.log(maxKey);
    console.log(maxValue);
</script>
```

打印结果：

![](http://img.smyhvae.com/20180202_1540.png)

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)
---
title: 18-数组简介
publish: true
---

<ArticleTopAd></ArticleTopAd>


> 之前学习的数据类型，只能存储一个值（字符串也为一个值）。如果我们想存储多个值，就可以使用数组。

## 数组简介

数组（Array）是属于**内置对象**，我们可以在[MDN](https://developer.mozilla.org/zh-CN/)网站上查询它的各种方法。

数组和普通对象的功能类似，也是用来存储一些值的。不同的是：

-   普通对象是使用字符串作为属性名的，而数组是使用数字作为**索引**来操作元素。索引：从 0 开始的整数就是索引。

数组的存储性能比普通对象要好。在实际开发中我们经常使用数组来存储一些数据（尤其是**列表数据**），使用频率非常高。

![](http://img.smyhvae.com/20200612_1707.png)

比如说，上面这个页面的列表数据，它的结构就是一个大数组。

数组中的元素可以是任意的数据类型，也可以是对象，也可以是函数，也可以是数组。数组的元素中，如果存放的是数组，我们就称这种数组为二维数组。

接下来，我们讲一讲数组的基本操作。

## 创建数组对象

### 方式一：使用字面量创建数组

举例：

```javascript
var arr1 = []; // 创建一个空的数组

var arr2 = [1, 2, 3]; // 创建带初始值的数组
```

方式一最简单，也用得最多。

### 方式二：使用构造函数创建数组

语法：

```
let arr = new Array(参数);

let arr = Array(参数);
```

如果**参数为空**，则表示创建一个空数组；如果参数是**一个数值**时，表示数组的长度；如果有多个参数时，表示数组中的元素。

来举个例子：

```javascript
// 方式一
var arr1 = [11, 12, 13];

// 方式二
var arr2 = new Array(); // 参数为空
var arr3 = new Array(4); // 参数为一个数值
var arr4 = new Array(15, 16, 17); // 参数为多个数值

console.log(typeof arr1); // 打印结果：object

console.log('arr1 = ' + JSON.stringify(arr1));
console.log('arr2 = ' + JSON.stringify(arr2));
console.log('arr3 = ' + JSON.stringify(arr3));
console.log('arr4 = ' + JSON.stringify(arr4));
```

打印结果：

```javascript
object;

arr1 = [11, 12, 13];
arr2 = [];
arr3 = [null, null, null, null];
arr4 = [15, 16, 17];
```

从上方打印结果的第一行里，可以看出，数组的类型其实也是属于**对象**。

### 数组中的元素的类型

数组中可以存放**任意类型**的数据，例如字符串、数字、布尔值、对象等。

比如：

```javascript
const arr = ['qianguyihao', 28, true, { name: 'qianguyihao' }];
```

我们甚至还可以存放**多维数组**（数组里面放数组）。比如：

```js
const arr2 = [
    [11, 12, 13],
    [21, 22, 23],
];
```

## 数组的基本操作

### 数组的索引

**索引** (下标) ：用来访问数组元素的序号，代表的是数组中的元素在数组中的位置（下标从 0 开始算起）。

数组可以通过索引来访问、设置、修改对应的数组元素。我们继续看看。

### 向数组中添加元素

语法：

```javascript
数组[索引] = 值;
```

代码举例：

```javascript
var arr = [];

// 向数组中添加元素
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
arr[5] = 50;

console.log(JSON.stringify(arr));
```

打印结果：

```
[10,20,30,40,null,50]
```

### 获取数组中的元素

语法：

```javascript
数组[索引];
```

如果读取不存在的索引（比如元素没那么多），系统不会报错，而是返回 undefined。

代码举例：

```javascript
var arr = [21, 22, 23];

console.log(arr[0]); // 打印结果：21
console.log(arr[5]); // 打印结果：undefined
```

### 获取数组的长度

可以使用`length`属性来获取数组的长度(即“元素的个数”)。

数组的长度是元素个数，不要跟索引号混淆。

语法：

```javascript
数组的长度 = 数组名.length；
```

代码举例：

```javascript
var arr = [21, 22, 23];

console.log(arr.length); // 打印结果：3
```

补充：

对于连续的数组，使用 length 可以获取到数组的长度（元素的个数）；对于非连续的数组（即“稀疏数组”，下一段会讲），length 的值会大于元素的个数。因此，尽量不要创建非连续的数组。




### 修改数组的长度（修改 length）

-   如果修改的 length 大于原长度，则多出部分会空出来，置为 null。

-   如果修改的 length 小于原长度，则多出的元素会被删除，数组将从后面删除元素。

-   （特例：伪数组 arguments 的长度可以修改，但是不能修改里面的元素，后面单独讲。）

代码举例：

```javascript
var arr1 = [11, 12, 13];
var arr2 = [21, 22, 23];

// 修改数组 arr1 的 length
arr1.length = 1;
console.log(JSON.stringify(arr1));

// 修改数组 arr2 的 length
arr2.length = 5;
console.log(JSON.stringify(arr2));
```

打印结果：

```javascript
[11][(21, 22, 23, null, null)];
```

### 遍历数组

**遍历**: 就是把数组中的每个元素从头到尾都访问一次。

最简单的做法是通过 for 循环，遍历数组中的每一项。举例：

```javascript
var arr = [10, 20, 30, 40, 50];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 打印出数组中的每一项
}
```

下一篇文章，会学习数组的各种方法，到时候，会有更多的做法去遍历数组。

## 稀疏数组与密集数组

- 稀疏数组：索引不连续、数组长度大于元素个数的数组，可以简单理解为有 `empty`（有空隙）的数组。

- 密集数组：索引连续、数组长度等于元素个数的数组。


参考链接：

- [JavaScript 之稀疏数组与密集数组](https://juejin.cn/post/6975531514444562462)

- [JS 稀疏数组](https://github.com/JunreyCen/blog/issues/10)

- [JS 中的稀疏数组和密集数组](https://juejin.cn/post/6844904050152964109)

- [译]JavaScript中的稀疏数组与密集数组：https://www.cnblogs.com/ziyunfei/archive/2012/09/16/2687165.html

- [JavaScript || 数组](https://segmentfault.com/a/1190000008533942)

## 案例

### 例 1：翻转数组

代码实现：

```javascript
var arr = [10, 20, 30, 40, 50]; // 原始数组
var newArr = []; // 翻转后的数组
for (var i = 0; i < arr.length; i++) {
    newArr[i] = arr[arr.length - i - 1];
}
console.log(JSON.stringify(newArr));
```

打印结果：

```
    [50,40,30,20,10]
```

### 例 2：冒泡排序

代码实现：

```javascript
var arr = [20, 10, 50, 30, 40];
for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(JSON.stringify(arr));
```

打印结果：

```
    [10,20,30,40,50]
```

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 21-作用域和变量提升
publish: true
---

<ArticleTopAd></ArticleTopAd>

> 作用域、变量提升的知识点，面试时会经常遇到。

### 作用域

### 作用域（Scope）的概念和分类

-   **概念**：通俗来讲，作用域是一个变量或函数的作用范围。作用域在**函数定义**时，就已经确定了。

-   **目的**：为了提高程序的可靠性，同时减少命名冲突。

在 JS 中，一共有两种作用域：（ES5 中）

-   **全局作用域**：作用于整个 script 标签内部，或者作用于一个独立的 JS 文件。
-   **函数作用域**（局部作用域）：作用于函数内的代码环境。

下面我们来单独讲一下全局作用域。

### 全局作用域 和 window 对象

直接编写在 script 标签中的 JS 代码，都在全局作用域。全局作用域在页面打开时创建，在页面关闭时销毁。

在全局作用域中有一个全局对象 window，它代表的是一个浏览器的窗口，由浏览器创建，我们可以直接使用。相关知识点如下：

-   创建的**变量**都会作为 window 对象的属性保存。比如在全局作用域内写 `var a = 100`，这里的 `a` 等价于 `window.a`。
-   创建的**函数**都会作为 window 对象的方法保存。

### 作用域的访问关系

在内部作用域中可以访问到外部作用域的变量，在外部作用域中无法访问到内部作用域的变量。

代码举例：

```javascript
var a = 'aaa';
function foo() {
    var b = 'bbb';
    console.log(a); // 打印结果：aaa。说明 内层作用域 可以访问 外层作用域 里的变量
}

foo();
console.log(b); // 报错：Uncaught ReferenceError: b is not defined。说明 外层作用域 无法访问 内层作用域 里的变量
```

### 变量的作用域

根据作用域的不同，变量可以分为两类：全局变量、局部变量。

**全局变量**：

-   在全局作用域下声明的变量，叫「全局变量」。在全局作用域的任何一地方，都可以访问这个变量。

-   在全局作用域下，使用 var 声明的变量是全局变量。

-   特殊情况：在函数内不使用 var 声明的变量也是全局变量（不建议这么用）。

**局部变量**：

-   定义在函数作用域的变量，叫「局部变量」。仅限函数内部访问这个变量。

-   在函数内部，使用 var 声明的变量是局部变量。

-   函数的**形参**也是属于局部变量。

从执行效率来看全局变量和局部变量：

-   全局变量：只有浏览器关闭时才会被销毁，比较占内存。

-   局部变量：当其所在的代码块运行结束后，就会被销毁，比较节约内存空间。

### 作用域的上下级关系

当在函数作用域操作一个变量时，它会先在自身作用域中寻找，如果有就直接使用（**就近原则**）。如果没有则向上一级作用域中寻找，直到找到全局作用域；如果全局作用域中依然没有找到，则会报错 ReferenceError。

在函数中要访问全局变量可以使用 window 对象。（比如说，全局作用域和函数作用域都定义了变量 a，如果想访问全局变量，可以使用`window.a`）

## 作用域的预处理

**预处理（预解析）**的概念：浏览器在解析 JS 代码之前，会进行一个操作叫“预处理（预解析）”：将当前 JS 代码中所有变量的定义和函数的定义，放到所有代码的最前面。

这种预解析，也称之为声明提前。

### 全局作用域-变量的声明提前（变量提升）

使用 var 关键字声明的变量（ 比如 `var a = 1`），**会在所有的代码执行之前被声明**（但是不会赋值），但是如果声明变量时不是用 var 关键字（比如直接写`a = 1`），则变量不会被声明提前。

**举例 1**：

```javascript
console.log(a);
var a = 123;
```

打印结果：undefined。注意，打印结果并没有报错，而是 undefined，说明变量 a 被提前声明了，只是尚未被赋值。

**举例 2**：

```javascript
console.log(a);
a = 123; //此时a相当于window.a
```

程序会报错：`Uncaught ReferenceError: a is not defined`。

**举例 3**：

```javascript
a = 123; //此时a相当于window.a
console.log(a);
```

打印结果：123。

**举例 4**：

```javascript
foo();

function foo() {
    if (false) {
        var i = 123;
    }
    console.log(i);
}
```

打印结果：undefined。注意，打印结果并没有报错，而是 undefined。这个例子，再次说明了：变量 i 在函数执行前，就被提前声明了，只是尚未被赋值。

例 4 中， `if(false)`里面的代码虽然不会被执行，但是整个代码有**解析**的环节，解析的时候就已经把 变量 i 给提前声明了。

**总结**：

既然 JS 中存在变量提升的现象，那么，在实战开发中，为了避免出错，建议先声明一个变量，然后再使用这个变量。

### 全局作用域-函数的声明提前

**函数声明**：

使用`函数声明`的形式创建的函数`function foo(){}`，**会被声明提前**。

也就是说，整个函数会在所有的代码执行之前就被**创建完成**。所以，在代码顺序上，我们可以先调用函数，再定义函数。

代码举例：

```javascript
fn1(); // 虽然 函数 fn1 的定义是在后面，但是因为被提前声明了， 所以此处可以调用函数

function fn1() {
    console.log('我是函数 fn1');
}
```

**函数表达式**：

使用`函数表达式`创建的函数`var foo = function(){}`，**不会被声明提前**，所以不能在声明前调用。

很好理解，因为此时 foo 被声明了（这里只是变量声明），且为 undefined，并没有把 `function(){}` 赋值给 foo。

所以说，下面的例子，会报错：

![](http://img.smyhvae.com/20180314_2145.png)

### 函数作用域的预处理

1、在函数作用域中，也有声明提前的特性：

-   函数中，使用 var 关键字声明的变量，会在函数中所有的代码执行之前被声明。

-   函数中，没有 var 声明的变量都是**全局变量**，而且并不会提前声明。

举例：

```javascript
var a = 1;

function foo() {
    console.log(a);
    a = 2; // 此处的a相当于window.a
}

foo();
console.log(a); //打印结果是2
```

上方代码中，执行 foo() 后，函数里面的打印结果是`1`。如果去掉第一行代码，执行 foo() 后，函数里面的打印结果是`Uncaught ReferenceError: a is not defined`。

2、定义形参就相当于在函数作用域中声明了变量。

```javascript
function fun6(e) {
    // 这个函数中，因为有了形参 e，此时就相当于在函数内部的第一行代码里，写了 var e;
    console.log(e);
}

fun6(); //打印结果为 undefined
fun6(123); //打印结果为123
```

## JavaScript 没有块级作用域（ES6 之前）

在其他编程语言中（如 Java、C#等），存在块级作用域，由`{}`包括起来。比如在 Java 语言中，if 语句里创建的变量，只能在 if 语句内部使用：

```java
if(true){
    int num = 123;
    system.out.print(num); // 123
}
system.out.print(num); // 报错
```

但是，在 JS 中没有块级作用域（ES6 之前）。举例如下：

```javascript
if (true) {
    var num = 123;
    console.log(num); //123
}

console.log(num); //123（可以正常打印）
```

## 作用域链

引入：

-   只要是代码，就至少有一个作用域

-   写在函数内部的局部作用域

-   如果函数中还有函数，那么在这个作用域中就又可以诞生一个作用域

基于上面几条内容，我们可以得出作用域链的概念。

**作用域链**：内部函数访问外部函数的变量，采用的是链式查找的方式来决定取哪个值，这种结构称之为作用域链。查找时，采用的是**就近原则**。

代码举例：

```javascript
var num = 10;

function fn() {
    // 外部函数
    var num = 20;

    function fun() {
        // 内部函数
        console.log(num);
    }
    fun();
}
fn();
```

打印结果：20。

## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)
---
title: 23-this指向
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 执行期上下文

当**函数执行**时（准确来说，是在函数发生预编译的前一刻），会创建一个执行期上下文的内部对象。一个执行期上下文定义了一个函数执行时的环境。

每调用一次函数，就会创建一个新的上下文对象，他们之间是相互独立且独一无二的。当函数执行完毕，它所产生的执行期上下文会被销毁。

参考链接：<https://www.cnblogs.com/chenyingjie1207/p/9966036.html>

## this

解析器在调用函数每次都会向函数内部传递进一个隐含的参数，这个隐含的参数就是 this，this 指向的是一个对象，这个对象我们称为函数执行的 上下文对象。

### 函数内 this 的指向【非常重要】

我们在《JavaScript 基础/函数.md》这篇文章讲过，函数的调用有**六种**形式。

根据函数的调用方式的不同，this 会指向不同的对象：

- 1.以函数的形式（包括普通函数、定时器函数、立即执行函数）调用时，this 的指向永远都是 window。比如`fun();`相当于`window.fun();`

- 2.以方法的形式调用时，this 指向调用方法的那个对象

- 3.以构造函数的形式调用时，this 指向实例对象

- 4.以事件绑定函数的形式调用时，this 指向**绑定事件的对象**

- 5.使用 call 和 apply 调用时，this 指向指定的那个对象

**针对第 1 条的举例**：

```javascript
function fun() {
    console.log(this);
    console.log(this.name);
}

var obj1 = {
    name: 'smyh',
    sayName: fun,
};

var obj2 = {
    name: 'vae',
    sayName: fun,
};

var name = '全局的name属性';

//以函数形式调用，this是window
fun(); //可以理解成 window.fun()
```

打印结果：

```
    Window
    全局的name属性
```

上面的举例可以看出，this 指向的是 window 对象，所以 this.name 指的是全局的 name。

**第 2 条的举例**：

```javascript
function fun() {
    console.log(this);
    console.log(this.name);
}

var obj1 = {
    name: 'smyh',
    sayName: fun,
};

var obj2 = {
    name: 'vae',
    sayName: fun,
};

var name = '全局的name属性';

//以方法的形式调用，this是调用方法的对象
obj2.sayName();
```

打印结果：

```
    Object
    vae
```

上面的举例可以看出，this 指向的是 对象 obj2 ，所以 this.name 指的是 obj2.name。

### 箭头函数中 this 的指向

ES6 中的箭头函数并不会使用上面的准则，而是会继承外层函数调用的 this 绑定（无论 this 绑定到什么）。

### 改变函数内部的 this 指向

JS 专门为我们提供了一些方法来改变函数内部的 this 指向。详见下一篇文章中的 call()、apply()、bind() 方法。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 20-函数
publish: true
---

<ArticleTopAd></ArticleTopAd>



## 前言

关于函数的核心内容：

- 函数有哪几种定义和调用方式

- this：函数内部的 this 指向、如何改变 this 的指向。

- 函数的严格模式

- 高阶函数：函数作为参数传递、函数作为返回值传递

- 闭包：闭包的作用

- 递归：递归的两个条件

- 深拷贝和浅拷贝的区别

## 函数的介绍

函数：就是将一些功能或语句进行**封装**，在需要的时候，通过**调用**的形式，执行这些语句。

- **函数也是一个对象**

- 使用`typeof`检查一个函数对象时，会返回function

**函数的作用**：

- 将大量重复的语句抽取出来，写在函数里，以后需要这些语句的时候，可以直接调用函数，避免重复劳动。

- 简化编程，让编程模块化。高内聚、低耦合。

来看个例子：

```javascript
console.log("你好");
sayHello();	// 调用函数

// 定义函数
function sayHello(){
	console.log("欢迎");
	console.log("welcome");
}
```

## 函数的定义/声明

### 方式一：利用函数关键字自定义函数（命名函数）

使用`函数声明`来创建一个函数（也就是 function 关键字）。语法：

```javascript
function 函数名([形参1,形参2...形参N]){  // 备注：语法中的中括号，表示“可选”
	语句...
}
```

举例：

```javascript
function fun1(a, b){
	return a+b;
}
```

解释如下：

- function：是一个关键字。中文是“函数”、“功能”。

- 函数名字：命名规定和变量的命名规定一样。只能是字母、数字、下划线、美元符号，不能以数字开头。

- 参数：可选。

- 大括号里面，是这个函数的语句。

PS：在有些编辑器中，方法写完之后，我们在方法的前面输入`/**`，然后回车，会发现，注释的格式会自动补齐。

### 方式二：函数表达式（匿名函数）

使用`函数表达式`来创建一个函数。语法：

```javascript
var 变量名  = function([形参1,形参2...形参N]){
	语句....
}
```

举例：

```javascript
var fun2 = function() {
	console.log("我是匿名函数中封装的代码");
};
```

解释如下：


- 上面的 fun2 是变量名，不是函数名。

- 函数表达式的声明方式跟声明变量类似，只不过变量里面存的是值，而函数表达式里面存的是函数。

- 函数表达式也可以传递参数。

从方式二的举例中可以看出：所谓的“函数表达式”，其实就是将匿名函数赋值给一个变量。

### 方式三：使用构造函数 new Function()

使用构造函数`new Function()`来创建一个对象。这种方式，用的少。

语法：

```javascript
var 变量名/函数名  = new Function('形参1', '形参2', '函数体');
```

注意，Function 里面的参数都必须是**字符串**格式。也就是说，形参也必须放在**字符串**里；函数体也是放在**字符串**里包裹起来，放在 Function 的最后一个参数的位置。

代码举例：

```javascript
var fun3 = new Function('a', 'b', 'console.log("我是函数内部的内容");  console.log(a + b);');

fun3(1, 2); // 调用函数
```

打印结果：

```
我是函数内部的内容
3
```

**分析**：

方式3的写法很少用，原因如下：

- 不方便书写：写法过于啰嗦和麻烦。

- 执行效率较低：首先需要把字符串转换为 js 代码，然后再执行。

### 总结

1、**所有的函数，都是 `Fuction` 的“实例”**（或者说是“实例对象”）。函数本质上都是通过 new Function 得到的。

2、函数既然是实例对象，那么，**函数也属于“对象”**。还可以通过如下特征，来佐证函数属于对象：

（1）我们直接打印某一个函数，比如 `console.log(fun2)`，发现它的里面有`__proto__`。（这个是属于原型的知识，后续再讲）

（2）我们还可以打印 `console.log(fun2 instanceof Object)`，发现打印结果为 `true`。这说明 fun2 函数就是属于 Object。

## 函数的调用

### 方式1：普通函数的调用

函数调用的语法：

```javascript
函数名();
```

或者：

```
函数名.call();
```

代码举例：

```javascript
function fn1() {
	console.log('我是函数体里面的内容1');
}

function fn2() {
	console.log('我是函数体里面的内容2');
}

fn1(); // 调用函数

fn2.call(); // 调用函数

```

### 方式2：通过对象的方法来调用

```javascript
var obj = {
	a: 'qianguyihao',
	fn2: function() {
		console.log('千古壹号，永不止步!');
	},
};

obj.fn2(); // 调用函数
```

如果一个函数是作为一个对象的属性保存，那么，我们称这个函数是这个对象的**方法**。

PS：关于函数和方法的区别，本文的后续内容里有讲到，可以往下面翻。


### 方式3：立即执行函数

代码举例：

```javascript
(function() {
	console.log('我是立即执行函数');
})();

```

立即执行函数在定义后，会自动调用。

PS：关于立即执行函数，本文的后续内容里有讲到，可以往下面翻。


上面讲到的这三种方式，是用得最多的。接下来讲到的三种方式，暂时看不懂也没关系，可以等学完其他的知识点，再回过头来看。

### 方式4：通过构造函数来调用

代码举例：

```javascript
function Fun3() {
	console.log('千古壹号，永不止步~');
}

new Fun3();
```

这种方式用得不多。

### 方式5：绑定事件函数

代码举例：


```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <div id="btn">我是按钮，请点击我</div>

        <script>
            var btn = document.getElementById('btn');
            //2.绑定事件
            btn.onclick = function() {
                console.log('点击按钮后，要做的事情');
            };
        </script>
    </body>
</html>

```

这里涉及到DOM操作和事件的知识点，后续再讲。

### 方式6：定时器函数

代码举例：（每间隔一秒，将 数字 加1）

```javascript
    let num = 1;
   setInterval(function () {
       num ++;
       console.log(num);
   }, 1000);
```

这里涉及到定时器的知识点。

## 函数的参数：形参和实参

函数的参数包括形参和实参。先来看下面的图就很好懂了：

![](http://img.smyhvae.com/20180118_1130.png)



**形参：**

- 概念：形式上的参数。定义函数时传递的参数，当时并不知道是什么值。

- 定义函数时，可以在函数的`()`中来指定一个或多个形参。

- 多个形参之间使用`,`隔开，声明形参就相当于在函数内部声明了对应的变量，但是并不赋值。

**实参**：

- 概念：实际上的参数。调用函数时传递的参数，实参将会传递给函数中对应的形参。

- 在调用函数时，可以在函数的 `()`中指定实参。

注意：实际参数和形式参数的个数，一般要相同。

举例：

```javascript
// 调用函数
sum(3,4);
sum("3",4);
sum("Hello","World");

// 定义函数：求和
function sum(a, b) {
	console.log(a + b);
}
```

控制台输出结果：

```
7
34
helloworld
```

### 实参的类型

函数的实参可以是任意的数据类型。

调用函数时，解析器不会检查实参的类型，所以要注意，是否有可能会接收到非法的参数，如果有可能则需要对参数进行类型的检查。

### 实参的数量（实参和形参的个数不匹配时）

调用函数时，解析器也不会检查实参的数量。

- 如果实参的数量多余形参的数量，多余实参不会被赋值。

- 如果实参的数量少于形参的数量，多余的形参会被定义为 undefined。表达式的运行结果为 NaN。

代码举例：

```javascript
	function sum(a, b) {
		console.log(a + b);
	}

	sum(1, 2);
	sum(1, 2, 3);
	sum(1);
```

打印结果：

```
3

3

NaN
```

注意：在 JS 中，形参的默认值是 undefined。

## 函数的返回值

举例：

```javascript
console.log(sum(3, 4)); // 将函数的返回值打印出来

//函数：求和
function sum(a, b) {
	return a + b;
}
```

return 的作用是结束方法（终止函数）。

注意：

- return 的值将会作为函数的执行结果返回，可以定义一个变量，来接收该结果。

- 在函数中，return后的语句都不会执行（函数在执行完 return 语句之后停止并立即退出函数）

- 如果return语句后不跟任何值，就相当于返回一个undefined

- 如果函数中不写return，则也会返回undefined

- 返回值可以是任意的数据类型，可以是对象，也可以是函数。

- return 只能返回一个值。如果用逗号隔开多个值，则以最后一个为准。

## 函数名、函数体和函数加载问题（重要，请记住）

我们要记住：**函数名 == 整个函数**。举例：

```javascript
console.log(fn) == console.log(function fn(){alert(1)});

//定义fn方法
function fn(){
	alert(1)
};
```

我们知道，当我们在调用一个函数时，通常使用`函数()`这种格式；可如果，我们是直接使用`函数`这种格式，它的作用相当于整个函数。

**函数的加载问题**：JS加载的时候，只加载函数名，不加载函数体。所以如果想使用内部的成员变量，需要调用函数。

### fn()  和 fn 的区别【重要】

- `fn()`：调用函数。调用之后，还获取了函数的返回值。

- `fn`：函数对象。相当于直接获取了整个函数对象。

## break、continue、return 的区别

- break ：结束当前的循环体（如 for、while）

- continue ：跳出本次循环，继续执行下次循环（如 for、while）

- return ：1、退出循环。2、返回 return 语句中的值，同时结束当前的函数体内的代码，退出当前函数。


## 立即执行函数

现有匿名函数如下：

```javascript
	function(a, b) {
		console.log("a = " + a);
		console.log("b = " + b);
	};
```

立即执行函数如下：

```javascript
	(function(a, b) {
		console.log("a = " + a);
		console.log("b = " + b);
	})(123, 456);
```

立即执行函数：函数定义完，立即被调用，这种函数叫做立即执行函数。

立即执行函数往往只会执行一次。为什么呢？因为没有变量保存它，执行完了之后，就找不到它了。

## 方法

函数也可以成为对象的属性。**如果一个函数是作为一个对象的属性保存，那么，我们称这个函数是这个对象的方法**。

调用这个函数就说调用对象的方法（method）。函数和方法，有什么本质的区别吗？它只是名称上的区别，并没有其他的区别。

函数举例：

```javascript
	// 调用函数
	fn();
```

方法举例：

```javascript
	// 调用方法
	obj.fn();
```

我们可以这样说，如果直接是`fn()`，那就说明是函数调用。如果是`XX.fn()`的这种形式，那就说明是**方法**调用。


## 类数组 arguments

> 这部分，小白可能看不懂。所以，这一段，暂时可以忽略。

在调用函数时，浏览器每次都会传递进两个隐含的参数：

- 1.函数的上下文对象 this

- 2.**封装实参的对象** arguments

例如：

```javascript
function foo() {
    console.log(arguments);
    console.log(typeof arguments);
}

foo();
```

![](http://img.smyhvae.com/20180315_0903.png)

arguments 是一个类数组对象，它可以通过索引来操作数据，也可以获取长度。

**arguments 代表的是实参**。在调用函数时，我们所传递的实参都会在 arguments 中保存。有个讲究的地方是：arguments**只在函数中使用**。

### 1、返回函数**实参**的个数：arguments.length

arguments.length 可以用来获取**实参的长度**。

举例：

```javascript
fn(2, 4);
fn(2, 4, 6);
fn(2, 4, 6, 8);

function fn(a, b) {
    console.log(arguments);
    console.log(fn.length); //获取形参的个数
    console.log(arguments.length); //获取实参的个数

    console.log('----------------');
}
```

打印结果：

![](http://img.smyhvae.com/20180125_2140.png)

我们即使不定义形参，也可以通过 arguments 来使用实参（只不过比较麻烦）：arguments[0] 表示第一个实参、arguments[1] 表示第二个实参...

### 2、返回正在执行的函数：arguments.callee

arguments 里边有一个属性叫做 callee，这个属性对应一个函数对象，就是当前正在指向的函数对象。

```javascript
function fun() {
    console.log(arguments.callee == fun); //打印结果为true
}

fun('hello');
```

在使用函数**递归**调用时，推荐使用 arguments.callee 代替函数名本身。

### 3、arguments 可以修改元素

之所以说 arguments 是伪数组，是因为：**arguments 可以修改元素，但不能改变数组的长短**。举例：

```javascript
fn(2, 4);
fn(2, 4, 6);
fn(2, 4, 6, 8);

function fn(a, b) {
    arguments[0] = 99; //将实参的第一个数改为99
    arguments.push(8); //此方法不通过，因为无法增加元素
}
```



## arguments 的使用

当我们不确定有多少个参数传递的时候，可以用 **arguments** 来获取。在 JavaScript 中，arguments 实际上是当前函数的一个**内置对象**。所有函数都内置了一个 arguments 对象（只有函数才有 arguments 对象），arguments 对象中存储了**传递的所有实参**.

arguments的展示形式是一个**伪数组**。伪数组具有以下特点：

- 可以进行遍历；具有数组的 length 属性。

- 按索引方式存储数据。

- 不具有数组的 push()、pop() 等方法。

**代码举例**：利用 arguments 求函数实参中的最大值

代码实现：

```javascript
	function getMaxValue() {
		var max = arguments[0];
		// 通过 arguments 遍历实参
		for (var i = 0; i < arguments.length; i++) {
			if (max < arguments[i]) {
				max = arguments[i];
			}
		}
		return max;
	}

	console.log(getMaxValue(1, 3, 7, 5));

```

## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)

---
title: 22-预编译
publish: true
---

<ArticleTopAd></ArticleTopAd>



> 我们在上一篇文章《作用域》中简单讲过“变量提升”，今天来讲一下预编译，这对我们深入理解变量提升会有帮助。

## JavaScript 运行三部曲

- 语法分析

- 预编译

- 解释执行

## 预编译前奏

> 在讲预编译前，我们先来普及下面两个规律。

### 两个规律

**规律1：任何变量，如果未经声明就赋值，此变量是属于 window 的属性**，而且不会做变量提升。（注意，无论在哪个作用域内赋值）

比如说，如果我们直接在代码里写 `console.log(a)`，这肯定会报错的，提示找不到 `a`。但如果我直接写 `a = 100`，这就不会报错，此时，这个 `a` 就是 `window.a`。

**规律2：一切声明的全局变量，全是window的属性**。（注意，我说的是在全局作用域内声明的全局变量，不是说局部变量）

比如说，当我定义 `var a = 200` 时，这此时这个 `a` 就是 `window.a`。

由此，我们可以看出：**window 代表了全局作用域**（是说「代表」，没说「等于」）。

### 举例

掌握了上面两句话之后，我们再来看看下面的例子。

```javascript
function foo() {
    var a = b = 100; // 连续赋值
}

foo();

console.log(window.b); // 在全局范围内访问 b
console.log(b); // 在全局范围内访问 b，但是前面没有加 window 这个关键字

console.log(window.a); // 在全局范围内访问 a
console.log(a); // 在全局范围内访问 a，但是前面没有加 window 这个关键字

```

上方代码的打印结果：

```
100

100

undefined

（会报错，提示 Uncaught ReferenceError: a is not defined）

```

**解释**：

当执行了`foo()`函数之后， `var a = b = 100` 这行**连续赋值**的代码等价于 `var a = (b = 100)`，其执行顺序是：

（1）先把 100 赋值给 b；

（2）再声明变量 a；

（3）再把 b 的值赋值给 a。

我们可以看到，b 是未经声明的变量就被赋值了，此时，根据规律1，这个 b 是属于 `window.b`；而 a 的作用域仅限于 foo() 函数内部，不属于 window。所以也就有了这样的打印结果。

## 预编译

### 函数预编译的步骤

> 函数预编译，发生在函数执行的前一刻。

（1）创建AO对象。AO即 Activation Object 活跃对象，其实就是「执行期上下文」。

（2）找形参和变量声明，将形参名和变量作为 AO 的属性名，值为undefined。

（3）将实参值和形参统一，实参的值赋给形参。

（4）查找函数声明，函数名作为 AO 对象的属性名，值为整个函数体。

这个地方比较难理解。但只有了解了函数的预编译，才能理解明白函数的执行顺序。

代码举例：

```javascript
function fn(a) {
    console.log(a);

    var a = 666;

    console.log(a);

    function a() {}

    console.log(a);

    var b = function() {};

    console.log(b);

    function c() {}
}

fn(1);
```

打印结果：

```
ƒ a() {}
666
666
ƒ () {}
```


## 参考链接

- JavaScript预编译原理分析：<https://blog.csdn.net/q1056843325/article/details/52951114>

- <https://segmentfault.com/a/1190000018001871>

- 预编译及变量提升：<https://juejin.im/post/5aa6693df265da23884cb571>

- <https://juejin.im/post/5adaf8215188256712781830>

- <https://www.qqzmly.com/archives/1521>

- 宏任务&微任务相关：<https://segmentfault.com/a/1190000018134157>




---
title: 25-高阶函数
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 高阶函数

### 高阶函数的概念

当 函数 A 接收函数 B 作为**参数**，或者把函数 C 作为**返回值**输出时，我们称 函数 A 为高阶函数。

通俗来说，高阶函数是 对其他函数进行操作 的函数。


### 高阶函数举例1：把其他函数作为参数

```js
function fn1(a, b, callback) {
    console.log(a + b);
    // 执行完上面的 console.log() 语句之后，再执行下面这个 callback 函数。也就是说，这个 callback 函数是最后执行的。
    callback && callback();
}

fn1(10, 20, function () {
    console.log('我是最后执行的函数');
});

```


打印结果：

```
30
我是最后执行的函数
```


### 高阶函数举例2：把其他区函数作为返回值



```js
function fn1() {
    let a = 20;

    return function () {
        console.log(a);
    };
}

const foo = fn1(); // 执行 fn1() 之后，会得到一个返回值。这个返回值是函数
foo();
```


上面的代码，产生了闭包现象。关于闭包，详见下一篇文章《JavaScript基础/闭包.md》。
---
title: 24-call、apply 和 bind
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 前言

JS 专门为我们提供了一些方法来改变函数内部的 this 指向。常见的方法有 call()、apply()、bind() 方法。

## call() 方法

### call() 方法的作用

call() 方法的作用：可以**调用**一个函数，与此同时，它还可以改变这个函数内部的 this 指向。

call() 方法的另一个应用：**可以实现继承**。之所以能实现继承，其实是利用了上面的作用。

语法：

```js
fn1.call(想要将this指向哪里, 函数实参1, 函数实参2);
```

备注：第一个参数中，如果不需要改变 this 指向，则传 null。

### call() 方法举例

**举例 1**、通过 call() 调用函数：

```js
const obj1 = {
    nickName: 'qianguyihao',
    age: 28,
};
function fn1() {
    console.log(this);
    console.log(this.nickName);
}
fn1.call(this); // this的指向并没有被改变，此时相当于 fn1();
```

上方代码的打印结果：

```
window
undefined
```

上面的代码，跟普通的函数调用 `fn1()` 没有区别。

**举例 2**、通过 call() 改变 this 指向：

```js
var obj1 = {
    nickName: 'qianguyihao',
    age: 28,
};

function fn1(a, b) {
    console.log(this);
    console.log(this.nickName);
    console.log(a + b);
}

fn1.call(obj1, 2, 4); // 先将 this 指向 obj1，然后执行 fn1() 函数
```

上方代码的打印结果：

```
obj1
qianguyihao
6
```

**举例 3**、通过 call() 实现继承：

```js
// 给 Father 增加 name 和 age 属性
function Father(myName, myAge) {
    this.name = myName;
    this.age = myAge;
}

function Son(myName, myAge) {
    // 【下面这一行，重要代码】
    // 通过这一步，将 father 里面的 this 修改为 Son 里面的 this；另外，给 Son 加上相应的参数，让 Son 自动拥有 Father 里的属性。最终实现继承
    Father.call(this, myName, myAge);
}

const son1 = new Son('千古壹号', 28);
console.log(JSON.stringify(son1));
```

上方代码中，通过 call() 方法，让 Son 继承了 Father 里面的 name 和 age 属性。

打印结果：

```
{"myName":"千古壹号","myAge":28}
```

## apply() 方法

### apply() 方法的作用

apply() 方法的作用：可以**调用**一个函数，与此同时，它还可以改变这个函数内部的 this 指向。这一点，和 call()类似。

apply() 方法的应用： 由于 apply()需要传递数组，所以它有一些巧妙应用，稍后看接下来的应用举例就知道了。

语法：

```js
fn1.apply(想要将this指向哪里, [函数实参1, 函数实参2]);
```

备注：第一个参数中，如果不需要改变 this 指向，则传 null。

到这里可以看出， call() 和 apply() 方法的作用是相同的。唯一的区别在于，apply() 里面传入的**实参，必须是数组（或者伪数组）**。

### apply() 方法举例

**举例**、通过 apply() 改变 this 指向：

```js
var obj1 = {
    nickName: 'qianguyihao',
    age: 28,
};

function fn1(a) {
    console.log(this);
    console.log(this.nickName);
    console.log(a);
}

fn1.apply(obj1, ['hello']); // 先将 this 指向 obj1，然后执行 fn1() 函数
```

注意，上方代码中，apply() 里面传实参时，需要以数组的形式。即便是传一个实参，也需要传数组。

打印结果：

```
obj1
qianguyihao
hello
```

### apply() 方法的巧妙应用：求数组的最大值

我们知道，如果想要求数组中元素的最大值的时候，数组本身是没有自带方法的。那怎么办呢？

虽然数组里没有获取最大值的方法，但是数值里面有 `Math.max(数字1，数字2，数字3)` 方法，可以获取**多个数值中的最大值**。 另外，由于 apply() 方法在传递实参时，必须要以数组的形式，所以我们可以 通过 Math.max() 和 apply() 曲线救国。

**举例**：求数组中多个元素的最大值：

```js
const arr1 = [3, 7, 10, 8];

// 下面这一行代码的目的，无需改变 this 指向，所以：第一个参数填 null，或者填 Math，或者填 this 都可以。严格模式中，不让填null。
const maxValue = Math.max.apply(Math, arr1); // 求数组 arr1 中元素的最大值
console.log(maxValue);

const minValue = Math.min.apply(Math, arr1); // 求数组 arr1 中元素的最小值
console.log(minValue);
```

打印结果：

```
10

3
```

## bind() 方法

### bind() 方法的作用

bind() 方法**不会调用函数**，但是可以改变函数内部的 this 指向。

把call()、apply()、bind()这三个方法做一下对比，你会发现：实际开发中， bind() 方法使用得最为频繁。如果有些函数，我们不需要立即调用，但是又想改变这个函数内部的this指向，此时用 bind() 是最为合适的。


语法：

```js
新函数 = fn1.bind(想要将this指向哪里, 函数实参1, 函数实参2);
```

参数：

- 第一个参数：在 fn1 函数运行时，指定 fn1 函数的this 指向。如果不需要改变 this 指向，则传 null。

- 其他参数：fn1 函数的实参。

解释：它不会调用 fn1 函数，但会返回 由指定this 和指定实参的**原函数拷贝**。可以看出， bind() 方法是有返回值的。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 26-闭包
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 闭包的引入

我们知道，变量根据作用域的不同分为两种：全局变量和局部变量。

- 函数内部可以访问全局变量和局部变量。

- 函数外部只能访问全局变量，不能访问局部变量。

- 当函数执行完毕，本作用域内的局部变量会销毁。

比如下面这样的代码：

```js
function foo() {
    let a = 1;
}

foo();
console.log(a); // 打印报错：Uncaught ReferenceError: a is not defined
```

上方代码中，由于变量 `a` 是函数内的局部变量，所以外部无法访问。

但是，在有些场景下，我们就是想要在函数外部访问函数内的局部变量，那要怎么办呢？这就需要引入闭包的概念。

## 闭包的概念和代码举例

### 闭包的概念

**闭包**（closure）：指有权**访问**另一个函数作用域中**变量**的**函数**。

上面这个概念，出自《JavaScript 高级程序设计（第 3 版）》这本书。上面的概念中指出，闭包是一种函数；当然，你可以**把闭包理解成是一种现象**。具体解释如下。

简单理解就是：如果**这个作用域可以访问另外一个函数内部的局部变量**，那就产生了闭包（此时，你可以把闭包理解成是一种现象）；而另外那个作用域所在的函数称之为**闭包函数**。注意，这里强调的是访问**局部变量**哦。

### 闭包代码举例

代码举例：

```js
function fn1() {
    let a = 10;

    function fn2() {
        console.log(a);
    }
    fn2();
}

fn1();
```

打印结果：

```
10
```

上方代码中，函数 fn2 的作用域 访问了 fn1 中的局部变量，那么，此时在 fn1 中就产生了闭包，fn1 称之为闭包函数。

### 在 chrome 浏览器控制台中，调试闭包

上面的代码中，要怎么验证，确实产生了闭包呢？我们可以在 chrome 浏览器的控制台中设置断点，当代码执行到 `console.log(a)`这一行的时候，如下图所示：

![](http://img.smyhvae.com/20200703_2055.png)

上图中， Local 指的是局部作用域，Global 指的是 全局作用域；而 Closure 则是**闭包**，fn1 是一个闭包函数。

## 闭包的作用：延伸变量的作用范围

我们来看看下面这段闭包的代码：

```js
function fn1() {
    let a = 20;

    function fn2() {
        console.log(a);
    }
    return fn2;
}

const foo = fn1(); // 执行 fn1() 之后，会得到一个返回值。foo 代表的就是 fn2 函数
foo();
```

上方代码中，foo 代表的就是整个 fn2 函数。当执行了 `foo()` 语句之后（相当于执行了 ），fn1 函数内就产生了闭包。

一般来说，在 fn1 函数执行完毕后，它里面的变量 a 会立即销毁。但此时由于产生了闭包，所以 **fn1 函数中的变量 a 不会立即销毁，因为 fn2 函数还要继续调用变量 a**。只有等所有函数把变量 a 调用完了，变量 a 才会销毁。

而且，可以看出， 在执行 `foo()`语句之后，竟然能够打印出 `20`，这就完美通过闭包实现了：全局作用域成功访问到了局部作用域中的变量 a。

因此，我们可以看出，闭包的主要作用就是：延伸了变量的作用范围。

上面的代码也可以简写成：

```js
function fn1() {
    let a = 20;

    return function () {
        console.log(a);
    };
}

const foo = fn1(); // 执行 fn1() 之后，会得到一个返回值。这个返回值是函数
foo();
```



## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)

---
title: 19-数组的常见方法
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 数组的方法清单

### 数组的类型相关

| 方法                             | 描述                               | 备注 |
| :------------------------------- | :--------------------------------- | :--- |
| Array.isArray()                  | 判断是否为数组                     |      |
| toString()                       | 将数组转换为字符串                 |      |
| Array.from(arrayLike)            | 将**伪数组**转化为**真数组**       |      |
| Array.of(value1, value2, value3) | 创建数组：将**一系列值**转换成数组 |      |

注意，获取数组的长度是用`length`属性，不是方法。关于 `length`属性，详见上一篇文章。

### 数组元素的添加和删除

| 方法      | 描述                                                                       | 备注           |
| :-------- | :------------------------------------------------------------------------- | :------------- |
| push()    | 向数组的**最后面**插入一个或多个元素，返回结果为新数组的**长度**           | 会改变原数组   |
| pop()     | 删除数组中的**最后一个**元素，返回结果为**被删除的元素**                   | 会改变原数组   |
| unshift() | 在数组**最前面**插入一个或多个元素，返回结果为新数组的**长度**             | 会改变原数组   |
| shift()   | 删除数组中的**第一个**元素，返回结果为**被删除的元素**                     | 会改变原数组   |
|           |                                                                            |                |
| slice()   | 从数组中**提取**指定的一个或多个元素，返回结果为**新的数组**               | 不会改变原数组 |
| splice()  | 从数组中**删除**指定的一个或多个元素，返回结果为**被删除元素组成的新数组** | 会改变原数组   |
|           |                                                                            |                |
| fill()    | 填充数组：用固定的值填充数组，返回结果为**新的数组**                       | 会改变原数组 |

### 数组的合并和拆分

| 方法     | 描述                                                 | 备注             |
| :------- | :--------------------------------------------------- | :--------------- |
| concat() | 合并数组：连接两个或多个数组，返回结果为**新的数组** | 不会改变原数组   |
| join()   | 将数组转换为字符串，返回结果为**转换后的字符串**     | 不会改变原数组   |
| split()  | 将字符串按照指定的分隔符，组装为数组                 | 不会改变原字符串 |

注意，`split()`是字符串的方法，不是数组的方法。

### 数组排序

| 方法      | 描述                                                    | 备注         |
| :-------- | :------------------------------------------------------ | :----------- |
| reverse() | 反转数组，返回结果为**反转后的数组**                    | 会改变原数组 |
| sort()    | 对数组的元素,默认按照**Unicode 编码**，从小到大进行排序 | 会改变原数组 |

### 查找数组的元素

| 方法                  | 描述                                                                           | 备注                                                     |
| :-------------------- | :----------------------------------------------------------------------------- | :------------------------------------------------------- |
| indexOf(value)        | 从前往后索引，检索一个数组中是否含有指定的元素                                 |                                                          |
| lastIndexOf(value)    | 从后往前索引，检索一个数组中是否含有指定的元素                                 |                                                          |
| includes(item)  | 数组中是否包含指定的内容                                                        |                                                        |
| find(function())      | 找出**第一个**满足「指定条件返回 true」的元素                                  |                                                          |
| findIndex(function()) | 找出**第一个**满足「指定条件返回 true」的元素的 index                          |                                                          |
| every()               | 确保数组中的每个元素都满足「指定条件返回 true」，则停止遍历，此方法才返回 true | 全真才为真。要求每一项都返回 true，最终的结果才返回 true |
| some()                | 数组中只要有一个元素满足「指定条件返回 true」，则停止遍历，此方法就返回 true   | 一真即真。只要有一项返回 true，最终的结果就返回 true     |

### 遍历数组

| 方法      | 描述                                                                   | 备注                                                   |
| :-------- | :--------------------------------------------------------------------- | :----------------------------------------------------- |
| for 循环  | 这个大家都懂                                                           |                                                        |
| forEach() | 和 for 循环类似，但需要兼容 IE8 以上                                   | forEach() 没有返回值。也就是说，它的返回值是 undefined |
| map()     | 对原数组中的每一项进行加工，将组成新的数组                             | 不会改变原数组                                         |
| filter()  | 过滤数组：返回结果是 true 的项，将组成新的数组，返回结果为**新的数组** | 不会改变原数组                                         |
| reduce    | 接收一个函数作为累加器，返回值是回调函数累计处理的结果              |                                                        |

## isArray()：判断是否为数组

语法：

```javascript
布尔值 = Array.isArray(被检测的数组);
```

以前，我们会通过 `A instanceof B`来判断 A 是否属于 B 类型。但是在数组里，这种 instanceof 方法已经用的不多了，因为有 isArray()方法。

## toString()：数组转换为字符串

```javascript
字符串 = 数组.toString();
```

解释：把数组转换成字符串，每一项用`,`分割。

备注：大多数的数据类型都可以使用`.toString()`方法，将其转换为字符串。

### 知识点补充：将数组转换为字符串，有哪些方式

方式 1：

```js
字符串 = 数组.toString();
```

方式 2：

```js
字符串 = String(数组);
```

方式 3：

```js
字符串 = 数组.join(','); // 将数组转为字符串，每一项用 英文逗号 分隔
```

## Array.from()：将伪数组转换为真数组

**语法**：

```javascript
array = Array.from(arrayLike);
```

**作用**：将**伪数组**或可遍历对象转换为**真数组**。

代码举例：

```js
const name = 'qianguyihao';
console.log(Array.from(name)); // 打印结果是数组：["q","i","a","n","g","u","y","i","h","a","o"]
```

### 伪数组与真数组的区别

**伪数组**：包含 length 属性的对象或可迭代的对象。

另外，伪数组的原型链中没有 Array.prototype，而真数组的原型链中有 Array.prototype。因此伪数组没有数组的一般方法，比如 pop()、join() 等方法。

### 伪数组举例

```html
<body>
    <button>按钮1</button>
    <button>按钮2</button>
    <button>按钮3</button>

    <script>
        let btnArray = document.getElementsByTagName('button');
        console.log(btnArray);
        console.log(btnArray[0]);
    </script>
</body>
```

上面的布局中，有三个 button 标签，我们通过`getElementsByTagName`获取到的`btnArray`实际上是**伪数组**，并不是真实的数组：

![](http://img.smyhvae.com/20180402_1116.png)

既然`btnArray`是伪数组，它就不能使用数组的一般方法，否则会报错：

![](http://img.smyhvae.com/20180402_1121.png)

解决办法：采用`Array.from`方法将`btnArray`这个伪数组转换为真数组即可：

```javascript
Array.from(btnArray);
```

然后就可以使用数组的一般方法了：

![](http://img.smyhvae.com/20180402_1125.png)

## Array.of()：创建数组

**语法**：

```javascript
Array.of(value1, value2, value3);
```

**作用**：根据参数里的内容，创建数组。

**举例**：

```javascript
const arr = Array.of(1, 'abc', true);
console.log(arr); // 打印结果是数组：[1, "abc", true]
```

补充：`new Array()`和 `Array.of()`的区别在于：当参数只有一个时，前者表示数组的长度，后者表示数组中的内容。

## 数组元素的添加和删除

### push()

`push()`：向数组的**最后面**插入一个或多个元素，返回结果为新数组的**长度**。会改变原数组，因为原数组变成了新数组。

语法：

```javascript
新数组的长度 = 数组.push(元素);
```

代码举例：

```javascript
var arr = ['王一', '王二', '王三'];

var result1 = arr.push('王四'); // 末尾插入一个元素
var result2 = arr.push('王五', '王六'); // 末尾插入多个元素

console.log(result1); // 打印结果：4
console.log(result2); // 打印结果：6
console.log(JSON.stringify(arr)); // 打印结果：["王一","王二","王三","王四","王五","王六"]
```

### pop()

`pop()`：删除数组中的**最后一个**元素，返回结果为**被删除的元素**。

语法：

```javascript
被删除的元素 = 数组.pop();
```

代码举例：

```javascript
var arr = ['王一', '王二', '王三'];

var result1 = arr.pop();

console.log(result1); // 打印结果：王三
console.log(JSON.stringify(arr)); // 打印结果：["王一","王二"]
```

### unshift()

`unshift()`：在数组**最前面**插入一个或多个元素，返回结果为新数组的**长度**。会改变原数组，因为原数组变成了新数组。插入元素后，其他元素的索引会依次调整。

语法：

```javascript
新数组的长度 = 数组.unshift(元素);
```

代码举例：

```javascript
var arr = ['王一', '王二', '王三'];

var result1 = arr.unshift('王四'); // 最前面插入一个元素
var result2 = arr.unshift('王五', '王六'); // 最前面插入多个元素

console.log(result1); // 打印结果：4
console.log(result2); // 打印结果：6
console.log(JSON.stringify(arr)); // 打印结果：["王五","王六","王四","王一","王二","王三"]
```

### shift()

`shift()`：删除数组中的**第一个**元素，返回结果为**被删除的元素**。

语法：

```javascript
被删除的元素 = 数组.shift();
```

代码举例：

```javascript
var arr = ['王一', '王二', '王三'];

var result1 = arr.shift();

console.log(result1); // 打印结果：王一
console.log(JSON.stringify(arr)); // 打印结果：["王二","王三"]
```

### slice()

`slice()`：从数组中**提取**指定的一个或者多个元素，返回结果为**新的数组**（不会改变原来的数组）。

备注：该方法不会改变原数组，而是将截取到的元素封装到一个新数组中返回。

**语法**：

```javascript
新数组 = 原数组.slice(开始位置的索引, 结束位置的索引); //注意：包含开始索引，不包含结束索引
```

举例：

```javascript
const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

const result1 = arr.slice(); // 不加参数时，则获取所有的元素。相当于数组的整体赋值
const result2 = arr.slice(2); // 从第二个值开始提取，直到末尾
const result3 = arr.slice(-2); // 提取最后两个元素
const result4 = arr.slice(2, 4); // 提取从第二个到第四个之间的元素（不包括第四个元素）
const result5 = arr.slice(4, 2); // 空

console.log('arr:' + JSON.stringify(arr));
console.log('result1:' + JSON.stringify(result1));
console.log('result2:' + JSON.stringify(result2));
console.log('result3:' + JSON.stringify(result3));
console.log('result4:' + JSON.stringify(result4));
console.log('result5:' + JSON.stringify(result5));
```

打印结果：

```javascript
arr: ['a', 'b', 'c', 'd', 'e', 'f'];
result1: ['a', 'b', 'c', 'd', 'e', 'f'];
result2: ['c', 'd', 'e', 'f'];
result3: ['e', 'f'];
result4: ['c', 'd'];
result5: [];
```

**补充**：

很多前端开发人员会用 slice()将伪数组，转化为真数组。写法如下：

```javascript
// 方式1
array = Array.prototype.slice.call(arrayLike);

// 方式2
array = [].slice.call(arrayLike);
```

ES6 看不下去这种蹩脚的转化方法，于是出了一个新的 API：（专门用来将伪数组转化成真数组）

```javascript
array = Array.from(arrayLike);
```

关于这个 API 的详细介绍，上面的内容已经讲了，请往前翻。

### splice()

`splice()`：从数组中**删除**指定的一个或多个元素，返回结果为**被删除元素组成的新数组**（会改变原来的数组）。

备注：该方法会改变原数组，会将指定元素从原数组中删除；被删除的元素会封装到一个新的数组中返回。

语法：

```javascript

新数组 = 原数组.splice(起始索引index, 需要删除的个数);

新数组 = 原数组.splice(起始索引index, 需要删除的个数, 新的元素1, 新的元素2...);
```

上方语法中，第三个及之后的参数，表示：删除元素之后，向原数组中添加新的元素，这些元素将会自动插入到起始位置索引的前面。也可以理解成：删除了哪些元素，就在那些元素的所在位置补充新的内容。

`slice()`方法和`splice()`方法很容易搞混，请一定要注意区分。

举例 1：

```javascript
var arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
var result1 = arr1.splice(1); //从第index为1的位置开始，删除元素

console.log('arr1：' + JSON.stringify(arr1));
console.log('result1：' + JSON.stringify(result1));
```

打印结果：

```
    arr1：["a"]
    result1：["b","c","d","e","f"]
```

举例 2：

```javascript
var arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
var result2 = arr2.splice(-2); //删除最后两个元素

console.log('arr2：' + JSON.stringify(arr2));
console.log('result2：' + JSON.stringify(result2));
```

打印结果：

```
    arr2：["a","b","c","d"]
    result2：["e","f"]
```

举例 3：

```javascript
var arr3 = ['a', 'b', 'c', 'd', 'e', 'f'];
var result3 = arr3.splice(1, 3); //从第index为1的位置开始删除元素,一共删除三个元素

console.log('arr3：' + JSON.stringify(arr3));
console.log('result3：' + JSON.stringify(result3));
```

打印结果：

```
    arr3：["a","e","f"]
    result3：["b","c","d"]
```

举例4：（删除指定元素，用得很多）

```js
const arr4 = ['a', 'b', 'c', 'd'];
arr4.splice(arr4.indexOf('c'), 1); // 删除数组中的'c'这个元素

console.log('arr4：' + JSON.stringify(arr4));

```




举例 5：（我们来看看**第三个参数**的用法）

```javascript
var arr5 = ['a', 'b', 'c', 'd', 'e', 'f'];

//从第index为1的位置开始删除元素,一共删除三个元素。并且在 index=1 的前面追加两个元素
var result5 = arr5.splice(1, 3, '千古壹号', 'vae');

console.log('arr5' + JSON.stringify(arr5));
console.log('result4：' + JSON.stringify(result5));
```

打印结果：

```javascript
arr5["a","千古壹号","vae","e","f"]
result5["b","c","d"]
```

### fill()

`fill()`：用一个固定值填充数组，返回结果为**新的数组**。会改变原数组。

语法：

```js
// 用一个固定值填充数组。数组里的每个元素都会被这个固定值填充
新数组 = 数组.fill(固定值);

// 从 startIndex 开始的数组元素，用固定值填充
新数组 = 数组.fill(固定值, startIndex);

// 从 startIndex 到 endIndex 之间的元素（包左不包右），用固定值填充
新数组 = 数组.fill(固定值, startIndex, endIndex);
```

举例1：

```js
// 创建一个长度为4的空数组，然后用 'f' 来填充这个空数组
console.log(Array(4).fill('f')); // ['f', 'f', 'f,' 'f']

// 将现有数组的每一个元素都进行填充
console.log(['a', 'b', 'c', 'd'].fill('f')); // ['f', 'f', 'f,' 'f']

```

举例2：

```js
// 指定位置进行填充
let arr1 = ['a', 'b', 'c', 'd'];
let arr2 = arr1.fill('f', 1, 3);

console.log(arr1); // ['a', 'f', 'f,' 'd']
console.log(arr2); // ['a', 'f', 'f,' 'd']
```


## 数组的合并和拆分

### concat()

`concat()`：连接两个或多个数组，返回结果为**新的数组**。不会改变原数组。`concat()`方法的作用是**数组合并**。

语法：

```javascript
    新数组 = 数组1.concat(数组2, 数组3 ...);
```

举例：

```javascript
const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const arr3 = ['千古壹号', 'vae'];

const result1 = arr1.concat(arr2);

const result2 = arr2.concat(arr1, arr3);

console.log('arr1 =' + JSON.stringify(arr1));
console.log('arr2 =' + JSON.stringify(arr2));
console.log('arr3 =' + JSON.stringify(arr3));

console.log('result1 =' + JSON.stringify(result1));
console.log('result2 =' + JSON.stringify(result2));
```

打印结果：

```javascript
arr1 = [1, 2, 3];
arr2 = ['a', 'b', 'c'];
arr3 = ['千古壹号', 'vae'];

result1 = [1, 2, 3, 'a', 'b', 'c'];
result2 = ['a', 'b', 'c', 1, 2, 3, '千古壹号', 'vae'];
```

从打印结果中可以看到，原数组并没有被修改。

**数组合并的另一种方式**：

我们可以使用`...`这种展开语法，将两个数组进行合并。举例如下：

```js
const arr1 = [1, 2, 3];

const result = ['a', 'b', 'c', ...arr1];
console.log(JSON.stringify(result)); // 打印结果：["a","b","c",1,2,3]
```

### join()

`join()`：将数组转换为字符串，返回结果为**转换后的字符串**（不会改变原来的数组）。

补充：`join()`方法可以指定一个**字符串**作为参数，这个字符串将会成为数组中元素的**连接符**；如果不指定连接符，则默认使用 `,` 作为连接符，此时和 `toString()的效果是一致的`。

语法：

```javascript
新的字符串 = 原数组.join(参数); // 参数选填
```

代码举例：

```javascript
var arr = ['a', 'b', 'c'];

var result1 = arr.join(); // 这里没有指定连接符，所以默认使用 , 作为连接符

var result2 = arr.join('-'); // 使用指定的字符串作为连接符

console.log(typeof arr); // 打印结果：object
console.log(typeof result1); // 打印结果：string

console.log('arr =' + JSON.stringify(arr));
console.log('result1 =' + JSON.stringify(result1));
console.log('result2 =' + JSON.stringify(result2));
```

上方代码中，最后三行的打印结果是：

```bash
arr =["a","b","c"]
result1 =a,b,c
result2 =a-b-c
```

### split()

> 注意，`split()`是字符串的方法，不是数组的方法。

语法：

```javascript
新的数组 = str.split(分隔符);
```

解释：通过指定的分隔符，将一个字符串拆分成一个**数组**。不会改变原字符串。

备注：`split()`这个方法在实际开发中用得非常多。一般来说，从接口拿到的 json 数据中，经常会收到类似于`"q, i, a, n"`这样的字符串，前端需要将这个字符串拆分成`['q', 'i', 'a', 'n']`数组，这个时候`split()`方法就派上用场了。

## reverse()

`reverse()`：反转数组，返回结果为**反转后的数组**（会改变原来的数组）。

语法：

```js
反转后的数组 = 数组.reverse();
```

举例：

```javascript
var arr = ['a', 'b', 'c', 'd', 'e', 'f'];

var result = arr.reverse(); // 将数组 arr 进行反转

console.log('arr =' + JSON.stringify(arr));
console.log('result =' + JSON.stringify(result));
```

打印结果：

```
arr =["f","e","d","c","b","a"]
result =["f","e","d","c","b","a"]
```

从打印结果可以看出，原来的数组已经被改变了。

## sort()方法

> sort()方法需要好好理解。

`sort()`：对数组的元素进行从小到大来排序（会改变原来的数组）。

### sort()方法：无参时

如果在使用 sort() 方法时不带参，则默认按照**Unicode 编码**，从小到大进行排序。

**举例 1**：（当数组中的元素为字符串时）

```javascript
let arr1 = ['e', 'b', 'd', 'a', 'f', 'c'];

let result = arr1.sort(); // 将数组 arr1 进行排序

console.log('arr1 =' + JSON.stringify(arr1));
console.log('result =' + JSON.stringify(result));
```

打印结果：

```
    arr1 =["a","b","c","d","e","f"]
    result =["a","b","c","d","e","f"]
```

从上方的打印结果中，我们可以看到，sort 方法会改变原数组，而且方法的返回值也是同样的结果。

**举例 2**：（当数组中的元素为数字时）

```javascript
let arr2 = [5, 2, 11, 3, 4, 1];

let result = arr2.sort(); // 将数组 arr2 进行排序

console.log('arr2 =' + JSON.stringify(arr2));
console.log('result =' + JSON.stringify(result));
```

打印结果：

```
arr2 =[1,11,2,3,4,5]
result =[1,11,2,3,4,5]
```

上方的打印结果中，你会发现，使用 sort() 排序后，数字`11`竟然在数字`2`的前面。这是为啥呢？因为上面讲到了，`sort()`方法是按照**Unicode 编码**进行排序的。

那如果我想让 arr2 里的数字，完全按照从小到大排序，怎么操作呢？继续往下看。

### sort()方法：带参时，自定义排序规则

如果在 sort()方法中带参，我们就可以**自定义**排序规则。具体做法如下：

我们可以在 sort()添加一个回调函数，来指定排序规则。回调函数中需要定义两个形参，浏览器将会分别使用数组中的元素作为实参去调用回调函数。

浏览器根据回调函数的返回值来决定元素的排序：（重要）

-   如果返回一个大于 0 的值，则元素会交换位置

-   **如果返回一个小于 0 的值，则元素位置不变**

-   如果返回一个等于 0 的值，则认为两个元素相等，则不交换位置

如果只是看上面的文字，可能不太好理解，我们来看看下面的例子，你肯定就能明白。

### 举例：将数组中的数字按照从小到大排序

**写法 1**：

```javascript
var arr = [5, 2, 11, 3, 4, 1];

// 自定义排序规则
var result = arr.sort(function (a, b) {
    if (a > b) {
        // 如果 a 大于 b，则交换 a 和 b 的位置
        return 1;
    } else if (a < b) {
        // 如果 a 小于 b，则位置不变
        return -1;
    } else {
        // 如果 a 等于 b，则位置不变
        return 0;
    }
});

console.log('arr =' + JSON.stringify(arr));
console.log('result =' + JSON.stringify(result));
```

打印结果：

```javascript
arr = [1, 2, 3, 4, 5, 11];
result = [1, 2, 3, 4, 5, 11];
```

上方代码的写法太啰嗦了，其实也可以简化为如下写法：

**写法 2**：（冒泡排序）

```javascript
let arr = [5, 2, 11, 3, 4, 1];

// 自定义排序规则
let result = arr.sort(function (a, b) {
    return a - b; // 升序排列
    // return b - a; // 降序排列
});

console.log('arr =' + JSON.stringify(arr));
console.log('result =' + JSON.stringify(result));
```

打印结果不变。

上方代码还可以写成 ES6 的形式，也就是将 function 改为箭头函数，其写法如下。

**写法 3**：（箭头函数）

```js
let arr = [5, 2, 11, 3, 4, 1];

// 自定义排序规则
let result = arr.sort((a, b) => {
    return a - b; // 升序排列
});

console.log('arr =' + JSON.stringify(arr));
console.log('result =' + JSON.stringify(result));
```

上方代码，因为函数体内只有一句话，所以可以去掉 return 语句，继续简化为如下写法。

**写法 4**：（推荐）

```js
let arr = [5, 2, 11, 3, 4, 1];

// 自定义排序规则：升序排列
let result = arr.sort((a, b) => a - b);

console.log('arr =' + JSON.stringify(arr));
console.log('result =' + JSON.stringify(result));
```

上面的各种写法中，写法 4 是我们在实战开发中用得最多的。

为了确保代码的简洁优雅，接下来的代码中，凡是涉及到函数，我们将尽量采用 ES6 中的箭头函数来写。

### sort 方法举例：将数组从小到大排序

将数组从小到大排序，这个例子很常见。但在实际开发中，总会有一些花样。

下面这段代码，在实际开发中，经常用到，一定要掌握。完整代码如下：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script>
            let dataList = [
                {
                    title: '品牌鞋子，高品质低价入手',
                    publishTime: 200,
                },
                {
                    title: '不是很贵，但是很暖',
                    publishTime: 100,
                },
                {
                    title: '无法拒绝的美食，跟我一起吃吃',
                    publishTime: 300,
                },
            ];

            console.log('qianguyihao 排序前的数组：' + JSON.stringify(dataList));

            // 将dataList 数组，按照 publishTime 字段，从小到大排序。（会改变原数组）
            dataList.sort((a, b) => parseInt(a.publishTime) - parseInt(b.publishTime));

            console.log('qianguyihao 排序后的数组：' + JSON.stringify(dataList));
        </script>
    </body>
</html>
```

打印结果：

```
qianguyihao 排序前的数组：[
    {"title":"品牌鞋子，高品质低价入手","publishTime":200},
    {"title":"不是很贵，但是很暖","publishTime":100},
    {"title":"无法拒绝的美食，跟我一起吃吃","publishTime":300}
]

qianguyihao 排序后的数组：[
    {"title":"不是很贵，但是很暖","publishTime":100},
    {"title":"品牌鞋子，高品质低价入手","publishTime":200},
    {"title":"无法拒绝的美食，跟我一起吃吃","publishTime":300}
]
```

上方代码中，有人可能会问： publishTime 字段已经是 int 类型了，为啥在排序前还要做一次 parseInt() 转换？这是因为，这种数据，一般是后台接口返回给前端的，数据可能是 int 类型、也可能是字符串类型，所以还是统一先做一次 partInt() 比较保险。这是一种良好的工作习惯。

## indexOf() 和 lastIndexOf()：获取数据的索引

**语法 1**：

```javascript
索引值 = 数组.indexOf(想要查询的元素);

索引值 = 数组.lastIndexOf(想要查询的元素);
```

备注：`indexOf()` 是从前向后查找元素的位置。同理，`lastIndexOf()`是从后向前寻找。

**解释**：可以检索一个数组中是否含有指定的元素。如果数组中含有该元素，则会返回其**第一次出现**的索引；如果没有找到指定的内容，则返回 -1。

这个方法的作用：

-   **如果获取的索引值为 0，说明数组是以查询的元素为开头的**。

-   如果获取的索引值为-1，说明这个数组中没有指定的元素。

**注意**：`indexOf()`在检索时，是严格类型约束，类似于`===`。

**举例 1**：

```javascript
var arr = ['a', 'b', 'c', 'd', 'e', 'd', 'c'];

console.log(arr.indexOf('c')); //从前往后，找第一个"c"在哪个位置
console.log(arr.lastIndexOf('d')); //从后往前，找第一个"d"在哪个位置
```

打印结果：

```
2
5
```

**举例 2**：

```js
let arr = ['1', '2', '3', '4', '5'];
console.log(arr.indexOf(2));
```

打印结果：

```
-1
```

**语法 2**：

这个方法还可以指定第二个参数，用来指定查找的**起始位置**。语法如下：

```javascript
索引值 = 数组.indexOf(想要查询的元素, [起始位置]);
```

举例 3：（两个参数时，需要特别注意）

```javascript
let arr = ['q', 'i', 'a', 'n', 'g', 'u', 'y', 'i', 'h', 'a', 'o'];
result = str.indexOf('a', 3); // 从下标为3的位置开始查找 'a'这个元素 【重要】

console.log(result); // 打印结果：9
```

上方代码中，`indexOf()`方法中携带了两个参数，具体解释请看注释。

## includes()

**语法**：

```js
布尔值 = arr.includes(想要查找的元素, [position]);
```

**解释**：判断一个数组中是否包含指定的元素。如果是，则会返回 true；否则返回 false。

参数中的 `position`：如果不指定，则默认为0；如果指定，则规定了检索的起始位置。

```js
const arr = [11, 12, 13, 14, 15];
console.log(arr.includes(12)); // 打印结果：true
console.log(name.includes(20)); // 打印结果：false

console.log(name.includes(11, 1)); // 打印结果：false
```

## find()

**语法**：

```javascript
find((item, index, arr) => {
    return true;
});
```

**作用**：找出**第一个**满足「指定条件返回 true」的元素；如果没找到，则返回 undefined。

备注：一旦找到符合条件的第一个元素，将不再继续往下遍历。

举例：

```javascript
let arr = [2, 3, 2, 5, 7, 6];

let result = arr.find((item, index) => {
    return item > 4; //遍历数组arr，一旦发现有第一个元素大于4，就把这个元素返回
});

console.log(result); //打印结果：5
```

## findIndex()

**语法**：

```javascript
findIndex((item, index, arr) => {
    return true;
});
```

**作用**：找出**第一个**满足「指定条件返回 true」的元素的 index。

举例：

> 我们直接把上面的代码中的 find 方法改成 findIndex，来看看效果。

```javascript
let arr = [2, 3, 2, 5, 7, 6];

let result = arr.findIndex((item, index) => {
    return item > 4; //遍历数组arr，一旦发现有第一个元素大于4，就把这个元素的index返回
});

console.log(result); //打印结果：3
```

## every()

`every()`：对数组中每一项运行回调函数，如果都返回 true，every 就返回 true；如果有一项返回 false，则停止遍历，此方法返回 false。

注意：every()方法的返回值是 boolean 值，参数是回调函数。

举例：

```javascript
var arr1 = ['千古', '宿敌', '南山忆', '素颜'];
var bool1 = arr1.every(function (element, index, array) {
    if (element.length > 2) {
        return false;
    }
    return true;
});
console.log(bool1); //输出结果：false。只要有一个元素的长度是超过两个字符的，就返回false

var arr2 = ['千古', '宿敌', '南山', '素颜'];
var bool2 = arr2.every(function (element, index, array) {
    if (element.length > 2) {
        return false;
    }
    return true;
});
console.log(bool2); //输出结果：true。因为每个元素的长度都是两个字符。
```

## some()

`some()`：对数组中每一个元素运行回调函数，只要有一个元素返回 true，则停止遍历，此方法返回 true。

注意：some()方法的返回值是 boolean 值。

### every() 和 some() 的使用场景

every() 和 some() 这两个方法，初学者很容易搞混。要怎么区分呢？你可以这样记：

-   every()：全部真，才为真。当你需要让数组中的每一个元素都满足指定条件时，那就使用 every()。

-   some()：一个真，则为真，点到为止。数组中只要有一个元素满足指定条件时，就停止遍历。那就使用 some()。

## valueOf()：返回数组本身

```javascript
数组本身 = 数组.valueOf();
```

这个方法的意义不大。因为我们直接写数组对象的名字，就已经是数组本身了。

## 概念：数组的遍历

遍历数组即：获取并操作数组中的每一个元素，然后得到想要的返回结果。在我们的实战开发中，使用得非常频繁。

遍历数组的方法包括：every()、filter()、forEach()、map()等。

PS：这几个方法**不会修改原数组**。

语法格式：

```
数组/boolean/无 = 数组.every/filter/forEach/map/some(
                        function(item, index, arr){
                                        程序和返回值；
                        })
```

有了这几种方法，就可以替代一些 for 循环了。下面依次来介绍。

## for 循环遍历

举例：

```javascript
const arr = ['生命壹号', '许嵩', '永不止步'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // arr[i]代表的是数组中的每一个元素i
}

console.log(JSON.stringify(arr));
```

打印结果：

```
生命壹号
许嵩
永不止步

["生命壹号","许嵩","永不止步"]
```

## forEach() 遍历

> `forEach()` 这种遍历方法只支持 IE8 以上的浏览器。IE8 及以下的浏览器均不支持该方法。所以如果需要兼容 IE8，则不要使用 forEach，改为使用 for 循环来遍历即可。

forEach()方法需要一个函数作为参数。这种函数，是由我们创建但是不由我们调用的，我们称为回调函数。

数组中有几个元素，该回调函数就会执行几次。

回调函数中传递三个参数：

-   第一个参数，就是当前正在遍历的元素

-   第二个参数，就是当前正在遍历的元素的索引

-   第三个参数，就是正在遍历的数组

代码举例：

```javascript
let myArr = ['王一', '王二', '王三'];

myArr.forEach((item, index, arr) => {
    console.log('item:' + item);
    console.log('index:' + index);
    console.log('arr:' + JSON.stringify(arr));
    console.log('----------');
});
```

打印结果：

```javascript
item:王一
index:0
arr:["王一","王二","王三"]
----------
item:王二
index:1
arr:["王一","王二","王三"]
----------
item:王三
index:2
arr:["王一","王二","王三"]
----------
```

注意，forEach() 没有返回值。也可以理解成：forEach() 的返回值是 undefined。如果你尝试 `tempArry = myArr.forEach()`这种方式来接收，是达不到效果的。

### forEach() 能不能改变原数组？

forEach() 能不能改变原数组？关于这个问题，大部分人会搞错。我们来看看下面的代码。

**1、数组的元素是基本数据类型**：（无法改变原数组）

```js
let numArr = [1, 2, 3];

numArr.forEach((item) => {
    item = item * 2;
});
console.log(JSON.stringify(numArr)); // 打印结果：[1, 2, 3]
```

上面这段代码，你可要看仔细了，打印结果是 `[1, 2, 3]`，不是 `[2, 4, 6]`。

**2、数组的元素是引用数据类型**：（直接修改整个元素对象时，无法改变原数组）

```js
let objArr = [
    { name: '千古壹号', age: 20 },
    { name: '许嵩', age: 30 },
];

objArr.forEach((item) => {
    item = {
        name: '邓紫棋',
        age: '29',
    };
});
console.log(JSON.stringify(objArr)); // 打印结果：[{"name":"千古壹号","age":20},{"name":"许嵩","age":30}]
```

**3、数组的元素是引用数据类型**：（修改元素对象里的某个属性时，可以改变原数组）

```js
let objArr = [
    { name: '千古壹号', age: 28 },
    { name: '许嵩', age: 30 },
];

objArr.forEach((item) => {
    item.name = '邓紫棋';
});
console.log(JSON.stringify(objArr)); // 打印结果：[{"name":"邓紫棋","age":28},{"name":"邓紫棋","age":30}]
```

如果你需要通过 forEach 修改原数组，建议用 forEach 里面的参数 2 和参数 3 来做，具体请看下面的标准做法。

**4、forEach() 通过参数 2、参数 3 修改原数组**：（标准做法）

```js
// 1、数组的元素是基本数据类型
let numArr = [1, 2, 3];

numArr.forEach((item, index, arr) => {
    arr[index] = arr[index] * 2;
});
console.log(JSON.stringify(numArr)); // 打印结果：[2,4,6]

// 2、数组的元素是引用数据类型时，直接修改对象
let objArr = [
    { name: '千古壹号', age: 28 },
    { name: '许嵩', age: 34 },
];

objArr.forEach((item, index, arr) => {
    arr[index] = {
        name: '小明',
        age: '10',
    };
});
console.log(JSON.stringify(objArr)); // 打印结果：[{"name":"小明","age":"10"},{"name":"小明","age":"10"}]

// 3、数组的元素是引用数据类型时，修改对象的某个属性
let objArr2 = [
    { name: '千古壹号', age: 28 },
    { name: '许嵩', age: 34 },
];

objArr2.forEach((item, index, arr) => {
    arr[index].name = '小明';
});
console.log(JSON.stringify(objArr2)); // 打印结果：[{"name":"小明","age":28},{"name":"小明","age":34}]
```

**总结**：

如果纯粹只是遍历数组，那么，可以用 forEach() 方法。但是，如果你想在遍历数组的同时，去改变数组里的元素内容，那么，最好是用 map() 方法来做，不要用 forEach()方法，避免出现一些低级错误。

参考链接：

-   [forEach 到底可以改变原数组吗？](https://juejin.im/post/5d526a4ae51d4557dc774e7d)

-   [forEach 会改变原数组值吗](https://lhajh.github.io/js/2018/05/26/Does-forEach-change-the-original-array-value.html)

## map()方法

语法：

```js
arr.map(function (item, index, arr) {
    return newItem;
});
```

解释：对数组中每一项运行回调函数，返回该函数的结果，组成的新数组（返回的是**加工之后**的新数组）。不会改变原数组。

作用：对数组中的每一项进行加工。

**举例 1**：（拷贝的过程中改变数组元素的值）

有一个已知的数组 arr1，我要求让 arr1 中的每个元素的值都加 10，这里就可以用到 map 方法。代码举例：

```javascript
var arr1 = [1, 3, 6, 2, 5, 6];

var arr2 = arr1.map(function (item, index) {
    return item + 10; //让arr1中的每个元素加10
});
console.log(arr2);
```

打印结果：

![](http://img.smyhvae.com/20180402_0938.png)

**举例 2**：【重要案例，实际开发中经常用到】

将 A 数组中某个属性的值，存储到 B 数组中。代码举例：

```javascript
const arr1 = [
    { name: '千古壹号', age: '28' },
    { name: '许嵩', age: '32' },
];

// 将数组 arr1 中的 name 属性，存储到 数组 arr2 中
const arr2 = arr1.map((item) => item.name);

// 将数组 arr1 中的 name、age这两个属性，改一下“键”的名字，存储到 arr3中
const arr3 = arr1.map((item) => ({
    myName: item.name,
    myAge: item.age,
})); // 将数组 arr1 中的 name 属性，存储到 数组 arr2 中

console.log('arr1:' + JSON.stringify(arr1));
console.log('arr2:' + JSON.stringify(arr2));
console.log('arr3:' + JSON.stringify(arr3));
```

打印结果：

```
arr1:[{"name":"千古壹号","age":"28"},{"name":"许嵩","age":"32"}]

arr2:["千古壹号","许嵩"]

arr3:[{"myName":"千古壹号","myAge":"28"},{"myName":"许嵩","myAge":"32"}]

```

map 的应用场景，主要就是以上两种。

### 注意：map() 方法真的不会改变原数组吗？

答案：不一定。

举例：

```javascript
      const arr = [
        {
          name: "qianguyihao1",
          age: 22,
        },
        {
          name: "qianguyihao2",
          age: 23,
        },
      ];

      arr.map((item) => {
        item.name = "haha"; // 修改 item 里的某个属性
        return item;
      });
      console.log(JSON.stringify(arr));
```

打印结果：

```
[{"name":"haha","age":22},{"name":"haha","age":23}]
```

总结：map方法如果是修改整个item的值，则不会改变原数组。但如果是修改 item 里面的某个属性，那就会改变原数组。



## filter()

语法：

```js
arr.filter(function (item, index, arr) {
    return true;
});
```

解释：对数组中的**每一项**运行回调函数，该函数返回结果是 true 的项，将组成新的数组（返回值就是这个新的数组）。不会改变原数组。

作用：对数组进行过滤。

**举例 1**：找出数组 arr1 中大于 4 的元素，返回一个新的数组。代码如下：

```javascript
let arr1 = [1, 3, 6, 2, 5, 6];

let arr2 = arr1.filter((item) => {
    if (item > 4) {
        return true; // 将arr1中大于4的元素返回，组成新的数组
    }
    return false;
});

console.log(JSON.stringify(arr1)); // 打印结果：[1,3,6,2,5,6]
console.log(JSON.stringify(arr2)); // 打印结果：[6,5,6]
```

上方代码更简洁的写法如下：

```javascript
let arr1 = [1, 3, 6, 2, 5, 6];

let arr2 = arr1.filter((item) => item > 4); // 将arr1中大于4的元素返回，组成新的数组

console.log(JSON.stringify(arr1)); // 打印结果：[1,3,6,2,5,6]
console.log(JSON.stringify(arr2)); // 打印结果：[6,5,6]
```

**举例 2**：

获取数组 A 中指定类型的对象，放到数组 B 中。代码举例如下：

```javascript
const arr1 = [
    { name: '许嵩', type: '一线' },
    { name: '周杰伦', type: '过气' },
    { name: '邓紫棋', type: '一线' },
];

const arr2 = arr1.filter((item) => item.type == '一线'); // 筛选出一线歌手

console.log(JSON.stringify(arr2));
```

打印结果：

```javascript
[
    { name: '许嵩', type: '一线' },
    { name: '邓紫棋', type: '一线' },
];
```

## reduce()方法

### reduce() 语法

> reduce 的发音：[rɪ'djuːs]。中文含义是减少，但这个方法跟“减少”没有任何关系。

reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。返回值是回调函数累计处理的结果。

**语法**：

```javascript
arr.reduce(function (previousValue, currentValue, currentIndex, arr) {}, initialValue);
```

参数解释：

-   previousValue：必填，上一次调用回调函数时的返回值

-   currentValue：必填，当前正在处理的数组元素

-   currentIndex：选填，当前正在处理的数组元素下标

-   arr：选填，调用 reduce()方法的数组

-   initialValue：选填，可选的初始值（作为第一次调用回调函数时传给 previousValue 的值）

在以往的数组方法中，匿名的回调函数里是传三个参数：item、index、arr。但是在 reduce() 方法中，前面多传了一个参数`previousValue`，这个参数的意思是上一次调用回调函数时的返回值。第一次执行回调函数时，previousValue 没有值怎么办？可以用 initialValue 参数传给它。

备注：绝大多数人在一开始接触 reduce() 的时候会很懵逼，但是没关系，有事没事多看几遍，自然就掌握了。如果能熟练使用 reduce() 的用法，将能替代很多其他的数组方法，并逐渐走上进阶之路，领先于他人。

为了方便理解 reduce()，我们先来看看下面的简单代码，过渡一下：

```js
let arr1 = [1, 2, 3, 4, 5, 6];

arr1.reduce((prev, item) => {
    console.log(prev);
    console.log(item);
    console.log('------');
    return 88;
}, 0);
```

打印结果：

```
0
1
------
88
2
------
88
3
------
88
4
------
88
5
------
88
6
------
```

上面的代码中，由于`return`的是固定值，所以 prev 打印的也是固定值（只有初始值是 0，剩下的遍历中，都是打印 88）。

现在来升级一下，实际开发中，prev 的值往往是动态变化的，这便是 reduce()的精妙之处。我们来看几个例子就明白了。

### reduce() 的常见应用

**举例 1**、求和：

计算数组中所有元素项的总和。代码实现：

```javascript
const arr = [2, 0, 1, 9, 6];
// 数组求和
const total = arr.reduce((prev, item) => {
    return prev + item;
});

console.log('total:' + total); // 打印结果：18
```

**举例 2**、统计某个元素出现的次数：

代码实现：

```js
// 定义方法：统一 value 这个元素在数组 arr 中出现的次数
function repeatCount(arr, value) {
    if (!arr || arr.length == 0) return 0;

    return arr.reduce((totalCount, item) => {
        totalCount += item == value ? 1 : 0;
        return totalCount;
    }, 0);
}

let arr1 = [1, 2, 6, 5, 6, 1, 6];

console.log(repeatCount(arr1, 6)); // 打印结果：3
```

**举例 3**、求元素的最大值：

代码实现：

```js
const arr = [2, 0, 1, 9, 6];
// 数组求最大值
const maxValue = arr.reduce((prev, item) => {
    return prev > item ? prev : item;
});

console.log(maxValue); // 打印结果：9
```

参考链接：

-   [JS reduce 函数](https://juejin.im/post/5d78aa3451882521397645ae)

## 数组练习

### splice()练习：数组去重

代码实现：

```javascript
//创建一个数组
var arr = [1, 2, 3, 2, 2, 1, 3, 4, 2, 5];

//去除数组中重复的数字
//获取数组中的每一个元素
for (var i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    /*获取当前元素后的所有元素*/
    for (var j = i + 1; j < arr.length; j++) {
        //console.log("---->"+arr[j]);
        //判断两个元素的值是否相等
        if (arr[i] == arr[j]) {
            //如果相等则证明出现了重复的元素，则删除j对应的元素
            arr.splice(j, 1);
            //当删除了当前j所在的元素以后，后边的元素会自动补位
            //此时将不会在比较这个元素，我需要再比较一次j所在位置的元素
            //使j自减
            j--;
        }
    }
}

console.log(arr);
```

### 清空数组

清空数组，有以下几种方式：

```javascript
var array = [1, 2, 3, 4, 5, 6];

array.splice(0); //方式1：删除数组中所有项目
array.length = 0; //方式2：length属性可以赋值，在其它语言中length是只读
array = []; //方式3：推荐
```

### join() 练习

**问题**：将一个字符串数组输出为`|`分割的形式，比如“千古|宿敌|素颜”。使用两种方式实现。

答案：

方式 1：（不推荐）

```javascript
var arr = ['千古', '宿敌', '素颜'];
var str = arr[0];
var separator = '|';
for (var i = 1; i < arr.length; i++) {
    str += separator + arr[i]; //从第1个数组元素开始，每个元素前面加上符号"|"
}

console.log(str);
```

输出结果：

![](http://img.smyhvae.com/20180126_1336.png)

不推荐这种方式，因为：由于字符串的不变性，str 拼接过多的话，容易导致内存溢出（很多个 str 都堆放在栈里）。

方式 2：（推荐。通过 array 数组自带的 api 来实现）

```javascript
var arr = ['千古', '宿敌', '素颜'];

console.log(arr.join('|'));
```

结果：

![](http://img.smyhvae.com/20180126_1339.png)

### reverse() 练习

题目：将一个字符串数组的元素的顺序进行反转，使用两种种方式实现。提示：第 i 个和第 length-i-1 个进行交换。

答案：

方式 1：

```javascript
function reverse(array) {
    var newArr = [];
    for (var i = array.length - 1; i >= 0; i--) {
        newArr[newArr.length] = array[i];
    }
    return newArr;
}
```

方式 2：（算法里比较常见的方式）

```javascript
function reverse(array) {
    for (var i = 0; i < array.length / 2; i++) {
        var temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}
```

方式 3：（数组自带的 reverse 方法）

现在我们学习了数组自带的 api，我们就可以直接使用 reverse()方法。

### 练习

问题：找到数组["c","a","z","a","x","a"]中每一个元素出现的次数。

分析：这道题建议用 json 数据来做，因为我们想知道 a 出现了几次，c 出现了几次，x 出现了几次。恰好`k:v .. k:v`这种键值对的形式就比数组方便很多了。

键值对的形式：用 key 代表数组中的元素，用 value 代表元素出现的次数。

略难，答案暂略。

### 练习：数组去重

问题：编写一个方法去掉一个数组中的重复元素。

分析：创建一个新数组，循环遍历，只要新数组中有老数组的值，就不用再添加了。

答案：

```javascript
//    编写一个方法 去掉一个数组的重复元素
var arr = [1, 2, 3, 4, 5, 2, 3, 4];
console.log(arr);
var aaa = fn(arr);
console.log(aaa);
//思路：创建一个新数组，循环遍历，只要新数组中有老数组的值，就不用再添加了。
function fn(array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        //开闭原则
        var bool = true;
        //每次都要判断新数组中是否有旧数组中的值。
        for (var j = 0; j < newArr.length; j++) {
            if (array[i] === newArr[j]) {
                bool = false;
            }
        }
        if (bool) {
            newArr[newArr.length] = array[i];
        }
    }
    return newArr;
}
```

## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)
---
title: 28-对象的创建&构造函数
publish: true
---

<ArticleTopAd></ArticleTopAd>

> 在看本文之前，可以先复习前面的一篇文章：《04-JavaScript 基础/11-对象简介.md》

## 创建自定义对象的几种方法

### 方式一：对象字面量

**对象的字面量**就是一个{}。里面的属性和方法均是**键值对**：

-   键：相当于属性名。

-   值：相当于属性值，可以是任意类型的值（数字类型、字符串类型、布尔类型，函数类型等）。

使用对象字面量来创建一个对象，非常简洁，举例如下：：

```javascript
var obj = {};
```

使用对象字面量，可以在创建对象时，直接指定对象中的属性。语法：{属性名:属性值,属性名:属性值....}

例 1：（一个简单的对象）

```js
const obj1 = {
    name: '千古壹号',
    age: 28
};
```

例 2：（一个较复杂的对象）

```javascript
const obj2 = {
    name: "千古壹号",
    age: 26,
    isBoy: true,
    // 还可以存放一个嵌套的对象
    test: {
        id: 123,
        tel: 180
    }
    //我们还可以在对象中增加一个方法。以后可以通过obj2.sayName()的方式调用这个方法
    sayName: function() {
        console.log(this.name);
    }
};

console.log(JSON.stringify(obj2));
obj2.sayName();

```

对象字面量的属性名可以加引号也可以不加，建议不加。如果要使用一些特殊的名字，则必须加引号。

属性名和属性值是一组一组的键值对结构，键和值之间使用`:`连接，多个值对之间使用`,`隔开。

### 方式二：工厂模式 new Object()

通过该方法可以大批量的创建对象。

```javascript
/*
 * 使用工厂方法创建对象
 *  通过该方法可以大批量的创建对象
 */
function createPerson(name, age, gender) {
    //创建一个新的对象
    var obj = new Object();
    //向对象中添加属性
    obj.name = name;
    obj.age = age;
    obj.gender = gender;
    obj.sayName = function () {
        alert(this.name);
    };
    //将新的对象返回
    return obj;
}

var obj2 = createPerson('猪八戒', 28, '男');
var obj3 = createPerson('白骨精', 16, '女');
var obj4 = createPerson('蜘蛛精', 18, '女');
```

第一次看到这种工厂模式时，你可能会觉得陌生。如果简化一下，可以写成下面这种形式，更容易理解：（也就是，利用 new Object 创建对象）

```javascript
var obj = new Obejct();
obj.name = '猪八戒';
obj.age = 28;
obj.gender = '男';
obj.sayHi = function () {
    alert('hello world');
};
```

**弊端：**

使用工厂方法创建的对象，使用的构造函数都是 Object。**所以创建的对象都是 Object 这个类型，就导致我们无法区分出多种不同类型的对象**。

### 方式三：利用构造函数

```javascript
//利用构造函数自定义对象
var stu1 = new Student('smyh');
console.log(stu1);
stu1.sayHi();

var stu2 = new Student('vae');
console.log(stu2);
stu2.sayHi();

// 创建一个构造函数
function Student(name) {
    this.name = name; //this指的是当前对象实例【重要】
    this.sayHi = function () {
        console.log(this.name + '厉害了');
    };
}
```

打印结果：

![](http://img.smyhvae.com/20180125_1350.png)

接下来，我们专门来讲一下构造函数。

## 构造函数

### 代码引入

```javascript
// 创建一个构造函数，专门用来创建Person对象
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayName = function () {
        alert(this.name);
    };
}

var per = new Person('孙悟空', 18, '男');
var per2 = new Person('玉兔精', 16, '女');
var per3 = new Person('奔波霸', 38, '男');

// 创建一个构造函数，专门用来创建 Dog 对象
function Dog() {}

var dog = new Dog();
```

### 构造函数的概念

**构造函数**：是一种特殊的函数，主要用来创建和初始化对象，也就是为对象的成员变量赋初始值。它与 `new` 一起使用才有意义。

我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个构造函数里面。

### 构造函数和普通函数的区别

构造函数的创建方式和普通函数没有区别，不同的是构造函数习惯上首字母大写。

构造函数和普通函数的区别就是**调用方式**的不同：普通函数是直接调用，而构造函数需要使用 new 关键字来调用。

**this 的指向也有所不同**：

-   1.以函数的形式调用时，this 永远都是 window。比如`fun();`相当于`window.fun();`

-   2.以方法的形式调用时，this 是调用方法的那个对象

-   3.以构造函数的形式调用时，this 是新创建的实例对象

### new 一个构造函数的执行流程

new 在执行时，会做下面这四件事：

（1）开辟内存空间，在内存中创建一个新的空对象。

（2）让 this 指向这个新的对象。

（3）执行构造函数里面的代码，给这个新对象添加属性和方法。

（4）返回这个新对象（所以构造函数里面不需要 return）。

因为 this 指的是 new 一个 Object 之后的对象实例。于是，下面这段代码：

```javascript
// 创建一个函数
function createStudent(name) {
    var student = new Object();
    student.name = name; //第一个name指的是student对象定义的变量。第二个name指的是createStudent函数的参数。二者不一样
}
```

可以改进为：

```javascript
// 创建一个函数
function Student(name) {
    this.name = name; //this指的是构造函数中的对象实例
}
```

注意上方代码中的注释。

### 静态成员和实例成员

JavaScript 的构造函数中可以添加一些成员，可以在构造函数本身上添加，也可以在构造函数内部的 this 上添加。通过这两种方式添加的成员，就分别称为静态成员和实例成员。

-   静态成员：在构造函数本上添加的成员称为静态成员，只能由构造函数本身来访问。

-   实例成员：在构造函数内部创建的对象成员称为实例成员，只能由实例化的对象来访问。

### 类、实例

使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个**类**。

通过一个构造函数创建的对象，称为该类的**实例**。

### instanceof

使用 instanceof 可以检查**一个对象是否为一个类的实例**。

**语法如下**：

```javascript
对象 instanceof 构造函数;
```

如果是，则返回 true；否则返回 false。

**代码举例**：

```javascript
function Person() {}

function Dog() {}

var person1 = new Person();

var dog1 = new Dog();

console.log(person1 instanceof Person); // 打印结果： true
console.log(dog1 instanceof Person); // 打印结果：false

console.log(dog1 instanceof Object); // 所有的对象都是Object的后代。因此，打印结果为：true
```

根据上方代码中的最后一行，需要补充一点：**所有的对象都是 Object 的后代，因此 `任何对象 instanceof Object` 的返回结果都是 true**。

## others

### json 的介绍

> 对象字面量和 json 比较像，这里我们对 json 做一个简单介绍。

JSON：JavaScript Object Notation（JavaScript 对象表示形式）。

JSON 和对象字面量的区别：JSON 的属性必须用双引号引号引起来，对象字面量可以省略。

json 举例：

```
      {
            "name" : "zs",
            "age" : 18,
            "sex" : true,
            "sayHi" : function() {
                console.log(this.name);
            }
        };
```

注：json 里一般放常量、数组、对象等，但很少放 function。

另外，对象和 json 没有长度，json.length 的打印结果是 undefined。于是乎，自然也就不能用 for 循环遍历（因为遍历时需要获取长度 length）。

**json 遍历的方法：**

json 采用 `for...in...`进行遍历，和数组的遍历方式不同。如下：

```html
<script>
    var myJson = {
        "name": "qianguyihao",
        "aaa": 111,
        "bbb": 222,
    };

    //json遍历的方法：for...in...
    for (var key in myJson) {
        console.log(key); //获取 键
        console.log(myJson[key]); //获取 值（第二种属性绑定和获取值的方法）
        console.log('------');
    }
</script>
```

打印结果：

![](http://img.smyhvae.com/20180203_1518.png)

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 29-对象的基本操作
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 对象的基本操作

### 创建对象

使用 new 关键字调用的函数，是构造函数 constructor。**构造函数是专门用来创建对象的函数**。

例如：

```javascript
var obj = new Object();
```

记住，使用`typeof`检查一个对象时，会返回`object`。

关于常见对象的更多方式，可以看上一篇文章《对象的创建&构造函数》。

### 向对象中添加属性

在对象中保存的值称为属性。

向对象添加属性的语法：

```javascript
对象.属性名 = 属性值;
```

举例：

```javascript
var obj = new Object();

//向obj中添加一个name属性
obj.name = '孙悟空';

//向obj中添加一个gender属性
obj.gender = '男';

//向obj中添加一个age属性
obj.age = 18;

console.log(JSON.stringify(obj)); // 将 obj 以字符串的形式打印出来
```

打印结果：

```
	{
		"name":"孙悟空",
		"gender":"男",
		"age":18
	}
```

### 获取对象中的属性

**方式 1**：

语法：

```javascript
对象.属性名;
```

如果获取对象中没有的属性，不会报错而是返回`undefined`。

举例：

```javascript
var obj = new Object();

//向obj中添加一个name属性
obj.name = '孙悟空';

//向obj中添加一个gender属性
obj.gender = '男';

//向obj中添加一个age属性
obj.age = 18;

// 获取对象中的属性，并打印出来
console.log(obj.gender); // 打印结果：男
console.log(obj.color); // 打印结果：undefined
```

**方式 2**：可以使用`[]`这种形式去操作属性

对象的属性名不强制要求遵守标识符的规范，不过我们尽量要按照标识符的规范去做。

但如果确实要使用特殊的属性名，就不能采用`.`的方式来操作对象的属性。比如说，`123`这种属性名，如果我们直接写成`obj.123 = 789`来操作属性，是会报错的。那怎么办呢？办法如下：

语法格式如下：（读取时，也是采用这种方式）

```javascript
// 注意，括号里的属性名，必须要加引号
对象['属性名'] = 属性值;
```

上面这种语法格式，举例如下：

```javascript
obj['123'] = 789;
```

**重要**：使用`[]`这种形式去操作属性，更加的灵活，因为，我们可以在`[]`中直接传递一个**变量**。

### 修改对象的属性值

语法：

```javascript
对象.属性名 = 新值;
```

```javascript
obj.name = 'tom';
```

### 删除对象的属性

语法：

```javascript
delete obj.name;
```

### in 运算符

通过该运算符可以检查一个对象中是否含有指定的属性。如果有则返回 true，没有则返回 false。

语法：

```javascript
'属性名' in 对象;
```

举例：

```javascript
//检查对象 obj 中是否含有name属性
console.log('name' in obj);
```

我们平时使用的对象不一定是自己创建的，可能是从接口获取的，这个时候，in 运算符可以派上用场。

当然，还有一种写法可以达到上述目的：

```js
if (obj.name) {
    // 如果对象 obj 中有name属性，我就继续做某某事情。
}
```

## for of：遍历数组


ES6 中，如果我们要遍历一个数组，可以这样做：

```js
let arr1 = [2, 6, 8, 5];

for (let value of arr1) {
    console.log(value);
}
```

打印结果：


```
2
6
8
5
```


for ... of 的循环可以避免我们开拓内存空间，增加代码运行效率，所以建议大家在以后的工作中使用 for…of 遍历数组。

注意，上面的数组中，`for ... of`获取的是数组里的值；如果采用`for ... in`遍历数组，则获取的是 index 索引值。

### Map 对象的遍历

`for ... of`既可以遍历数组，也可以遍历 Map 对象。


## for in：遍历对象的属性

> `for ... in`主要用于遍历对象，不建议用来遍历数组。

语法：

```javascript
for (const 变量 in 对象) {

}
```

解释：对象中有几个属性，循环体就会执行几次。每次执行时，会将对象中的**每个属性的 属性名 赋值给变量**。

语法举例：

```javascript
for (var key in obj) {
    console.log(key); // 这里的 key 是：对象属性的键（也就是属性名）
    console.log(obj[key]); // 这里的 obj[key] 是：对象属性的值（也就是属性值）
}
```

举例：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title></title>
        <script type="text/javascript">
            const obj = {
                name: 'smyhvae',
                age: 28,
                gender: '男',
                address: 'shenzhen',
                sayHi: function () {
                    console.log(this.name);
                },
            };

            // 遍历对象中的属性
            for (const key in obj) {
                console.log('属性名:' + key);
                console.log('属性值:' + obj[key]); // 注意，因为这里的属性名 key 是变量，所以，如果想获取属性值，不能写成 obj.key，而是要写成 obj[key]
            }
        </script>
    </head>

    <body></body>
</html>
```

打印结果：

```
属性名:name
属性值:smyhvae

属性名:age
属性值:26

属性名:gender
属性值:男

属性名:address
属性值:shenzhen

属性名:sayHi
属性值:function() {
                    console.log(this.name);
                }
```

### for in 遍历数组（不建议）

另外，for in 当然也可以用来遍历数组（只是不建议），此时的 key 是数组的索引。举例如下：

```js
const arr = ['hello1', 'hello2', 'hello3'];

for (const key in arr) {
    console.log('属性名：' + key);
    console.log('属性值：' + arr[key]);
}
```

打印结果：

```
属性名：0
属性值：hello1

属性名：1
属性值：hello2

属性名：2
属性值：hello3
```


---
title: 27-面向对象概述
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 面向过程和面向对象

### 面向过程

**面向过程**：先分析好的具体步骤，然后按照步骤，一步步解决问题。

优点：性能比面向对象高，适合跟硬件联系很紧密的东西，例如单片机就采用的面向过程编程。

缺点：没有面向对象易维护、易复用、易扩展。

### 面向对象

**面向对象**（OOP，Object Oriented Programming）：以对象功能来划分问题，而不是步骤。

优点：易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统 更加灵活、更加易于维护。

缺点：性能比面向过程低。

### 面向对象的编程思想

面向对象的编程思想：对代码和数据进行封装，并以对象调用的方式，对外提供统一的调用接口。

比如说，当我们在开车的时候，无需关心汽车的内部构造有多复杂，对于大多数人而言，只需要会开、知道汽车有哪些功能就行了。

### 面向对象的特性

在面向对象程序开发思想中，每一个对象都是功能中心，具有明确分工。面向对象编程具有灵活、代码可复用、容易维护和开发的优点，适合多人合作的大型软件项目，更符合我们认识事物的规律。

面向对象的特性如下：

- 封装性

- 继承性

- 多态性

## JS 中的面向对象

JS 中的面向对象，是基于**原型**的面向对象。

另外，在ES6中，新引入了 类（Class）和继承（Extends）来实现面向对象。


### 基于原型的面向对象


JS 中的对象（Object）是依靠构造器（constructor）和原型（prototype）构造出来的。


---
title: 31_3-类和构造继承（待更新）
publish: false
---

<ArticleTopAd></ArticleTopAd>


---
title: 30-浅拷贝和深拷贝
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 概念

-   浅拷贝：只拷贝最外面一层的数据；更深层次的对象，只拷贝引用。

-   深拷贝：拷贝多层数据；每一层级别的数据都会拷贝。

**总结**：

拷贝引用的时候，是属于**传址**，而非**传值**。关于传值和传址的区别，是很基础的内容，详见《JavaScript 基础/对象简介.md》这篇文章。

深拷贝会把对象里**所有的数据**重新复制到新的内存空间，是最彻底的拷贝。

## 浅拷贝的实现方式

### 用 for in 实现浅拷贝（比较繁琐）

```js
const obj1 = {
    name: 'qianguyihao',
    age: 28,
    info: {
        desc: '很厉害',
    },
};

const obj2 = {};
//  用 for in 将 obj1 的值拷贝给 obj2
for (let key in obj1) {
    obj2[key] = obj1[key];
}

console.log('obj2:' + JSON.stringify(obj2));

obj1.info.desc = '永不止步'; // 当修改 obj1 的第二层数据时，obj2的值也会被改变。所以  for in 是浅拷贝

console.log('obj2:' + JSON.stringify(obj2));
```

上方代码中，用 for in 做拷贝时，只能做到浅拷贝。也就是说，在 obj2 中， name 和 age 这两个属性会单独存放在新的内存地址中，和 obj1 没有关系。但是，`obj2.info` 属性，跟 `obj1.info`属性，**它俩指向的是同一个堆内存地址**。所以，当我修改 `obj1.info` 里的值之后，`obj2.info`的值也会被修改。

打印结果如下：

```
obj2:{"name":"qianguyihao","age":28,"info":{"desc":"很厉害"}}

obj2:{"name":"qianguyihao","age":28,"info":{"desc":"永不止步"}}
```

### 用 Object.assgin() 实现浅拷贝（推荐的方式）

上面的 for in 方法做浅拷贝过于繁琐。ES6 给我们提供了新的语法糖，通过 `Object.assgin()` 可以实现**浅拷贝**。

`Object.assgin()` 在日常开发中，使用得相当频繁，非掌握不可。

**语法**：

```js
// 语法1
obj2 = Object.assgin(obj2, obj1);

// 语法2
Object.assign(目标对象, 源对象1, 源对象2...);
```

**解释**：将`obj1` 拷贝给 `obj2`。执行完毕后，obj2 的值会被更新。

**作用**：将 obj1 的值追加到 obj2 中。如果对象里的属性名相同，会被覆盖。

从语法2中可以看出，Object.assign() 可以将多个“源对象”拷贝到“目标对象”中。

**例 1**：

```js
const obj1 = {
    name: 'qianguyihao',
    age: 28,
    info: {
        desc: 'hello',
    },
};

// 浅拷贝：把 obj1 拷贝给 obj2。如果 obj1 只有一层数据，那么，obj1 和 obj2 则互不影响
const obj2 = Object.assign({}, obj1);
console.log('obj2:' + JSON.stringify(obj2));

obj1.info.desc = '永不止步'; // 由于 Object.assign() 只是浅拷贝，所以当修改 obj1 的第二层数据时，obj2 对应的值也会被改变。
console.log('obj2:' + JSON.stringify(obj2));
```

代码解释：由于 Object.assign() 只是浅拷贝，所以在当前这个案例中， obj2 中的 name 属性和 age 属性是单独存放在新的堆内存地址中的，和 obj1 没有关系；但是，`obj2.info` 属性，跟 `obj1.info`属性，**它俩指向的是同一个堆内存地址**。所以，当我修改 `obj1.info` 里的值之后，`obj2.info`的值也会被修改。

打印结果：

```
obj2:{"name":"qianguyihao","age":28,"info":{"desc":"hello"}}

obj2:{"name":"qianguyihao","age":28,"info":{"desc":"永不止步"}}
```

**例 2**：

```js
const myObj = {
    name: 'qianguyihao',
    age: 28,
};

// 【写法1】浅拷贝：把 myObj 拷贝给 obj1
const obj1 = {};
Object.assign(obj1, myObj);

// 【写法2】浅拷贝：把 myObj 拷贝给 obj2
const obj2 = Object.assign({}, myObj);

// 【写法3】浅拷贝：把 myObj 拷贝给 obj31。注意，这里的 obj31 和 obj32 其实是等价的，他们指向了同一个内存地址
const obj31 = {};
const obj32 = Object.assign(obj31, myObj);

```

上面这三种写法，是等价的。所以，当我们需要将对象 A 复制（拷贝）给对象 B，不要直接使用 `B = A`，而是要使用 Object.assign(B, A)。

**例 3**：

```js
let obj1 = { name: 'qianguyihao', age: 26 };
let obj2 = { city: 'shenzhen', age: 28 };
let obj3 = {};

Object.assign(obj3, obj1, obj2); // 将 obj1、obj2的内容赋值给 obj3
console.log(obj3); // {name: "qianguyihao", age: 28, city: "shenzhen"}
```

上面的代码，可以理解成：将多个对象（obj1和obj2）合并成一个对象 obj3。

**例4**：【重要】

```js
const obj1 = {
    name: 'qianguyihao',
    age: 28,
    desc: 'hello world',
};

const obj2 = {
    name: '许嵩',
    sex: '男',
};

// 浅拷贝：把 obj1 赋值给 obj2。这一行，是关键代码。这行代码的返回值也是 obj2
Object.assign(obj2, obj1);

console.log(JSON.stringify(obj2));
```

打印结果：

```
{
    "name":"qianguyihao",
    "sex":"男",
    "age":28,
    "desc":"hello world"
}
```

注意，**例 4 在实际开发中，会经常遇到，一定要掌握**。它的作用是：将 obj1 的值追加到 obj2 中。如果两个对象里的属性名相同，则 obj2 中的值会被 obj1 中的值覆盖。


## 深拷贝的实现方式

深拷贝其实就是将浅拷贝进行递归。

### 用 for in 递归实现深拷贝

代码实现：

```js
let obj1 = {
    name: 'qianguyihao',
    age: 28,
    info: {
        desc: 'hello',
    },
    color: ['red', 'blue', 'green'],
};
let obj2 = {};

deepCopy(obj2, obj1);
console.log(obj2);
obj1.info.desc = 'github';
console.log(obj2);

// 方法：深拷贝
function deepCopy(newObj, oldObj) {
    for (let key in oldObj) {
        // 获取属性值 oldObj[key]
        let item = oldObj[key];
        // 判断这个值是否是数组
        if (item instanceof Array) {
            newObj[key] = [];
            deepCopy(newObj[key], item);
        } else if (item instanceof Object) {
            // 判断这个值是否是对象
            newObj[key] = {};
            deepCopy(newObj[key], item);
        } else {
            // 简单数据类型，直接赋值
            newObj[key] = item;
        }
    }
}
```
---
title: 32-正则表达式
publish: true
---

<ArticleTopAd></ArticleTopAd>



## 正则表达式简介

**定义**：正则表达式用于定义一些字符串的规则。

**作用**：计算机可以根据正则表达式，来检查一个字符串是否符合指定的规则；或者将字符串中符合规则的内容提取出来。

如果你想查看正则更多的内容，可以查阅官方文档关于 RegExp 这个内置对象的用法。

## 创建正则表达式的对象

### 方式一：使用构造函数创建正则表达式的对象

语法：

```javascript
	var 变量 = new RegExp("正则表达式"); // 注意，参数是字符串

	var 变量 = new RegExp("正则表达式", "匹配模式"); // 注意，两个参数都是字符串
```

备注：`RegExp`的意思是 **Regular expression**。使用typeof检查正则对象，会返回object。

上面的语法中，既可以传一个参数，也可以传两个参数。

创建了正则表达式的对象后，该怎么使用呢？大致分为两个步骤：

- （1）创建正则表达式的对象 reg。

- （2）使用 reg 的test() 方法，判断指定字符串是否符合规则。

**正则表达式的`test()`方法**：【重要】

```javascript
	myReg.test(str); // 判断字符串 str 是否符合 指定的 myReg 这个正则表达式的规则
```

解释：使用`test()`这个方法可以用来检查一个字符串是否符合正则表达式的规则，**如果符合则返回true，否则返回false**。

我们来看看下面的例子。

**1、传一个参数时**：

构造函数 RegExp 中，可以只传一个参数。

代码举例：

```javascript
	var reg = new RegExp("a"); // 定义一个正则表达式：检查一个字符串中是否含有 a

	var str1 = "qianguyihao";
	var str2 = "smyh";

	// 通过 test()方法，判断字符串是否符合 上面定义的 reg 规则
	console.log(reg.test(str1)); // 打印结果：true
	console.log(reg.test(str2)); // 打印结果：false

```

注意，上面的例子中，我们是先定义了一个正则表达式的规则，然后通过正则表达式的`test()`方法来判断字符串是否符合之前定义的规则。

**2、传两个参数时**：匹配模式 【重要】

构造函数 RegExp 中，也可以传两个参数。我们可以传递一个**匹配模式**作为第二个参数。这个参数可以是：

- `i` 忽略大小写。这里的 i 指的是 ignore。

- `g` 全局匹配模式。这里的 g 指的是 global。

代码举例：

```javascript
    var reg = new RegExp('A', 'i');
    var str = 'qiangu';

    console.log(reg.test(str)); // 打印结果：true
```

### 方式二：使用字面量创建正则表达式

我们可以使用字面量来创建正则表达式。

语法：

```javascript
	var 变量 = /正则表达式/;  // 注意，这个语法里没有引号

	var 变量 = /正则表达式/匹配模式;  // 注意，这个语法里没有引号
```

代码举例：

```javascript
	var reg = /A/i; // 定义正则表达式的规则：检查一个字符串中是否含有 a。忽略大小写。
	var str = "qiangu";

	console.log(typeof reg);  // 打印结果：object
	console.log(reg.test(str)); // 打印结果：true
```

### 以上两种方式的对比

- 方式一：使用构造函数创建时，更加灵活，因为参数中还可以传递变量。

- 方式二：使用字面量的方式创建，更加简单。

代码举例：

```javascript
	var reg = new RegExp("a", "i"); // 方式一

	var reg = /a/i; // 方式二
```

上面这两行代码的作用是等价的。

### 避坑指南：全局匹配 g 慎用test()方法

对于非全局匹配的正则表达式，`test()`只会检测**是否存在某个目标字符串**（只要存在就为 true），多次检测的结果都相同。例如：

```javascript
const reg = /test/;
const str = '_test_test';

reg.test(str) // true
reg.test(str) // true
reg.test(str) // true
```

重点来了。

当设置全局标志 `/g` 时，一旦字符串中还存在匹配，test() 方法都将返回 true，同时匹配成功后将把 `lastIndex` 属性的值**设置为上次匹配成功结果之后的第一个字符所在的位置**，下次匹配将从 `lastIndex` 指示的位置开始；匹配不成功时返回 false，同时将 lastIndex 属性的值重置为 0。

举例：（很重要的例子，看仔细）

```javascript
const reg = /test/g;
const str = '_test_test';

console.log(reg.test(str)); // true
console.log(reg.lastIndex); // 5

console.log(reg.test(str)); // true
console.log(reg.lastIndex); // 10

console.log(reg.test(str)); // false
console.log(reg.lastIndex); // 0
```

**总结**：

全局匹配模式`g`一般用于 `exec()`、`match()`、`replace()`等方法。

全局匹配模式`g`如果用于test()方法会有问题。因为g模式会生成一个`lastindex`参数来存储匹配最后一次的位置。

参考链接：

- [JS正则表达式全局匹配的那些坑](https://juejin.im/post/5de9bd5fe51d45582c27b6f3)

- [javascript正则全局匹配g慎用test方法](https://blog.csdn.net/Leolu007/article/details/8576490)

- [issues](https://github.com/qianguyihao/Web/issues/69)


## 正则表达式的简单语法

### 检查一个字符串中是否包含 a或b

**写法1**：

```javascript
	var reg = /a|b/;
```

解释：使用 `|` 表示`或`的意思。

**写法2**：

```javascript
	var reg = /[ab]/;  // 跟上面的那行语法，是等价的
```

解释：这里的`[]`也是表示`或`的意思。

`[]`这个符号在正则还是比较常用的。我们接下来看几个例子。

### []表示：或

一些规则：

- `/[ab]/` 等价于 `/a|b/`：检查一个字符串中是否包含 **a或b**

- `/[a-z]/`：检查一个字符串那种是否包含**任意小写字母**

- `/[A-Z]/`：任意大写字母

- `/[A-z]/`：任意字母

- `/[0-9]/`：任意数字

- `/a[bde]c/`：检查一个字符串中是否包含 abc 或 adc 或 aec

### [^ ] 表示：除了

举例1：

```javascript
  var reg = /[^ab]/; // 规则：字符串中，除了a、b之外，还有没有其他的字符内容？
  var str = "acb";

  console.log(reg.test(str)); // 打印结果：true
```

举例2：（可以用来验证某字符串是否为 纯数字）

```javascript
	var reg = /[^0-9]/;  // 规则：字符串中，除了数字之外，还有没有其他的内容？
	var str1 = "1991";
	var str2 = "199a1";

	console.log(reg.test(str1)); // 打印结果：false （如果字符串是 纯数字，则返回 false）
	console.log(reg.test(str2)); // 打印结果：true
```

## 支持正则表达式的 String 对象的方法

 String对象的如下方法，是支持正则表达式的：

| 方法 | 描述 | 备注 |
|:-------------|:-------------|:-------------|
| split() | 将字符串拆分成数组  |   |
| search() | 搜索字符串中是否含有指定内容，返回索引 index |  |
| match() | 根据正则表达式，从一个字符串中将符合条件的内容提取出来 |  |
| replace()  | 将字符串中的指定内容，替换为新的内容并返回 |  |

下面来分别介绍和举例。

### split()

`split()`：将一个字符串拆分成一个数组。可以接受一个正则表达式作为参数。

备注：关于`split()`更详细的用法，可以看之前的关于《内置对象：String》这篇文章。

**正则相关的举例**：根据任意字母，将字符串拆分成数组。

代码实现：（通过正则）

```javascript
	var str = "1a2b3c4d5e6f7g";

	var result = str.split(/[A-z]/); // 参数是一个正则表达式：表示所有字母
	console.log(result);
```

打印结果：

```json
	["1", "2", "3", "4", "5", "6", "7", ""]
```

### search()

`search()`：搜索字符串中是否含有指定内容。如果搜索到指定内容，则会返回第一次出现的索引；否则返回-1。

`search()`方法可以接受一个正则表达式作为参数，然后会根据正则表达式去检索字符串。`serach()`只会查找第一个，即使设置全局匹配也没用。

**举例**：

```javascript
	var str = "hello abc hello aec afc";
	/*
	* 搜索字符串中是否含有abc 或 aec 或 afc
	*/
	result = str.search(/a[bef]c/);
	console.log(result); // 打印结果：6
```

### match()

`match()`：根据正则表达式，从一个字符串中将符合条件的内容提取出来，封装到一个数组中返回（即使只查询到一个结果）。

**注意**：默认情况下，`match()`方法只会找到**第一个**符合要求的内容，找到以后就停止检索。我们可以设置正则表达式为**全局匹配**模式，这样就会匹配到所有的内容，并以**数组**的形式返回。

另外，我们可以为一个正则表达式设置多个匹配模式，且匹配模式的顺序无所谓。

**代码举例**：

```javascript
	var str = "1a2a3a4a5e6f7A8B9C";

	var result1 = str.match(/[a-z]/);   // 找到符合要求的第一个内容，然后返回
	var result2 = str.match(/[a-z]/g);  // 设置为“全局匹配”模式，匹配字符串中 所有的小写字母
	var result3 = str.match(/[a-z]/gi); // 设置多个匹配模式，匹配字符串中 所有的字母（忽略大小写）

	console.log(result1); // 打印结果：["a"]
	console.log(result2); // 打印结果：["a", "a", "a", "a", "e", "f"]
	console.log(result3); // 打印结果：["a", "a", "a", "a", "e", "f", "A", "B", "C"]
```

**总结**：

match()这个方法还是很实用的，可以在一个很长的字符串中，提取出**有规则**的内容。这不就是爬虫的时候经常会遇到的场景么？

### replace()

`replace()`：将字符串中的指定内容，替换为新的内容并返回。不会修改原字符串。

语法：

```javascript
	新的字符串 = str.replace(被替换的内容，新的内容);
```

参数解释：

- 被替换的内容：可以接受一个正则表达式作为参数。

- 新的内容：默认只会替换第一个。如果需要替换全部符合条件的内容，可以设置正则表达式为**全局匹配**模式。

代码举例：

```javascript
    //replace()方法：替换
    var str2 = "Today is fine day,today is fine day !!!"

    console.log(str2);
    console.log(str2.replace("today","tomorrow"));  //只能替换第一个today
    console.log(str2.replace(/today/gi,"tomorrow")); //这里用到了正则，且为“全局匹配”模式，才能替换所有的today
```

## 常见正则表达式举例

### 检查一个字符串是否是一个合法手机号

手机号的规则：

- 以1开头（`^1` 表示1开头 , `[^1]`表示非1或除了1）

- 第二位是3~9之间任意数字

- 三位以后任意9位数字

正则实现：

```javascript
	var phoneStr = "13067890123";

	var phoneReg = /^1[3-9][0-9]{9}$/;

	console.log(phoneReg.test(phoneStr));
```

**备注**：如果在正则表达式中同时使用`^`和`$`符号，则要求字符串必须完全符合正则表达式。

### 去掉字符串开头和结尾的空格

正则实现：

```javascript
	str = str.replace(/^\s*|\s*$/g,"");
```

解释如下：

```javascript
	str = str.replace(/^\s*/, ""); //去除开头的空格

	str = str.replace(/\s*$/, ""); //去除结尾的空格
```

### 判断字符串是否为电子邮件

正则实现：

```javascript
	var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;

	var email = "abchello@163.com";

	console.log(emailReg.test(email));
```


## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)


---
title: 31_2-原型链和原型继承（待更新）
publish: false
---

<ArticleTopAd></ArticleTopAd>


## 前言

在 ES6 中，我们可以通过 ES6 引入的**类 Class** 来实现面向对象的编程（下一篇文章会讲到）。但是**在 ES6 之前，我们是通过构造函数和原型，来模拟类的实现机制**。

今天这篇文章，我们就来学习构造函数和原型。


---
title: 31_1-对象的高级操作（待更新）
publish: false
---

<ArticleTopAd></ArticleTopAd>




## Object.freeze() 冻结对象

Object.freeze() 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。

代码举例：

```js
const params = {
    name: 'qianguyihao';
    port: '8899';
}

Object.freeze(params); // 冻结对象 params

params.port = '8080';// 修改无效

```

上方代码中，把 params 对象冻结后，如果想再改变 params 里面的属性值，是无效的。



---
title: 37-scroll相关属性和缓动动画
publish: true
---

<ArticleTopAd></ArticleTopAd>



## scroll 相关属性

### window.onscroll() 方法

当我们用鼠标滚轮，滚动网页的时候，会触发 window.onscroll() 方法。效果如下：（注意看控制台的打印结果）

![](http://img.smyhvae.com/20180202_2258.gif)

如果你需要做滚动监听，可以使用这个方法。

我们来看看和 scroll 相关的有哪些属性。

### 1、ScrollWidth 和 scrollHeight

`ScrollWidth` 和 `scrollHeight`：获取元素**整个滚动区域**的宽、高。包括 width 和 padding，不包括 border和margin。


**注意**：

`scrollHeight` 的特点是：如果内容超出了盒子，`scrollHeight`为内容的高（包括超出的内容）；如果不超出，`scrollHeight`为盒子本身的高度。`ScrollWidth`同理。


```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 100px;
            height: 100px;
            padding: 10px;
            margin: 3px;
            border: 8px solid red;
        }
    </style>
</head>
<body>

<div class="box">
    静，能寒窗苦守；动，能点石成金。
    静，能寒窗苦守；动，能点石成金。
    静，能寒窗苦守；动，能点石成金。
    静，能寒窗苦守；动，能点石成金。
    静，能寒窗苦守；动，能点石成金。
    静，能寒窗苦守；动，能点石成金。
</div>
<script>

    var div = document.getElementsByTagName("div")[0];

    // `scrollHeight` 的特点是：如果内容超出了盒子，`scrollHeight`为内容的高（包括超出的内容）；如果不超出，`scrollHeight`为盒子本身的高度。
    //IE8以下（不包括IE8），为盒子本身内容的高度。
    console.log(div.scrollWidth);
    console.log(div.scrollHeight);

</script>
</body>
</html>
```

打印结果：

![](http://img.smyhvae.com/20180203_1235.png)

### 2、scrollTop 和 scrollLeft

- `scrollLeft`：获取水平滚动条滚动的距离。

- `scrollTop`：获取垂直滚动条滚动的距离。

**实战经验**：

当某个元素满足`scrollHeight - scrollTop == clientHeight`时，说明垂直滚动条滚动到底了。

当某个元素满足`scrollWidth - scrollLeft == clientWidth`时，说明水平滚动条滚动到底了。

这个实战经验非常有用，可以用来判断用户是否已经将内容滑动到底了。比如说，有些场景下，希望用户能够看完“长长的活动规则”，才允许触发接下来的表单操作。

### scrollTop 的兼容性

如果要获取页面滚动的距离，scrollTop 这个属性的写法要注意兼容性，如下。

（1）如果文档没有 DTD 声明，写法为：

```javascript
    document.body.scrollTop
```

在没有 DTD 声明的情况下，要求是这种写法，chrome浏览器才能认出来。

（2）如果文档有 DTD 声明，写法为：

```javascript
   document.documentElement.scrollTop
```

在有 DTD 声明的情况下，要求是这种写法，IE6、7、8才能认出来。

综合上面这两个，就诞生了一种兼容性的写法：

```javascript
    document.body.scrollTop || document.documentElement.scrollTop //方式一

    document.body.scrollTop + document.documentElement.scrollTop  //方式二
```

另外还有一种兼容性的写法：`window.pageYOffset` 和 `window.pageXOffset`。这种写法无视DTD的声明。这种写法支持的浏览器版本是：火狐/谷歌/ie9+。

综合上面的几种写法，为了兼容，不管有没有DTD，**最终版的兼容性写法：**

```javascript
    window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
```

### 判断是否已经 DTD 声明

方法如下：

```javascript
    document.compatMode === "CSS1Compat"   // 已声明
    document.compatMode === "BackCompat"   // 未声明
```

### 将 scrollTop 和 scrollLeft 进行封装

这里，我们将 scrollTop 和 scrollLeft 封装为一个方法，名叫scroll()，返回值为 一个对象。以后就直接调用`scroll().top` 和 `scroll().left`就好。

代码实现：

```html
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        body {
            height: 6000px;
            width: 5000px;
        }
    </style>
</head>
<body>

<script>

    //需求：封装一个兼容的scroll().返回的是对象，用scroll().top获取scrollTop，用scroll().left获取scrollLeft

    window.onscroll = function () {
//        var myScroll = scroll();
//        myScroll.top;
        console.log(scroll().top);
        console.log(scroll().left);
    }

    //函数封装（简单封装，实际工作使用）
    function scroll() {
        return { //此函数的返回值是对象
            left: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
            right: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft
        }
    }
</script>
</body>
</html>
```

上方代码中，函数定义的那部分就是要封装的代码。

另外还有一种比较麻烦的封装方式：（仅供参考）

```javascript
function scroll() {  // 开始封装自己的scrollTop
    if(window.pageYOffset !== undefined) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
```

## 获取 html 文档的方法

获取title、body、head、html标签的方法如下：

- `document.title` 文档标题；

- `document.head`  文档的头标签

- `document.body`  文档的body标签；

- `document.documentElement`  （这个很重要）。

`document.documentElement`表示文档的html标签。也就是说，基本结构当中的 `html 标签`而是通过`document.documentElement`访问的，并不是通过 document.html 去访问的。

## scrollTop 举例：固定导航栏

完整版代码实现：

（1）index.html：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            margin: 0;
            padding: 0
        }

        img {
            vertical-align: top;
        }

        .main {
            margin: 0 auto;
            width: 1000px;
            margin-top: 10px;

        }

        #Q-nav1 {
            overflow: hidden;
        }

        .fixed {
            position: fixed;
            top: 0;
            left: 0;
        }
    </style>

    <!--引入工具js-->
    <script src="tools.js"></script>
    <script>
        window.onload = function () {
            //需求1：当我们滚动界面的时候，被卷曲的头部如果超过第二个盒子距离顶部的位置，那么直接给第二个盒子加类名.fixed
            //需求2：当我们滚动界面的时候，被卷曲的头部如果小于第二个盒子距离顶部的位置，那么直接给第二个盒子取消类名.fixed

            //1.老三步。
            var topDiv = document.getElementById("top");
            var height = topDiv.offsetHeight;
            var middle = document.getElementById("Q-nav1");
            var main = document.getElementById("main");

            window.onscroll = function () {
                //2.判断 ，被卷曲的头部的大小
                if (scroll().top > height) {
                    //3.满足条件添加类，否则删除类
                    middle.className += " fixed";
                    //第二个盒子也要占位置，为了避免重叠，我们给第三个盒子一个上padding的空间，把这个空间留给第二个盒子
                    main.style.paddingTop = middle.offsetHeight + "px";
                } else {
                    middle.className = "";
                    //清零
                    main.style.paddingTop = 0;
                }
            }

        }
    </script>
</head>
<body>
<div class="top" id="top">
    <img src="images/top.png" alt=""/>
</div>
<div id="Q-nav1">
    <img src="images/nav.png" alt=""/>
</div>
<div class="main" id="main">
    <img src="images/main.png" alt=""/>
</div>
</body>
</html>

```

上方代码中，有一个技巧：

```javascript
main.style.paddingTop = middle.offsetHeight + "px";
```

仔细看注释就好。

（2）tools.js：

```javascript
/**
 * Created by smyhvae on 2018/02/03.
 */
function scroll() {  // 开始封装自己的scrollTop
    if (window.pageYOffset !== undefined) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if (document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
```


实现效果：

![](http://img.smyhvae.com/20180203_1619.gif)


~工程文件~：

- 2018-02-03-scrollTop固定导航栏.rar

- 下载链接暂无。


## 缓动动画

### 三个函数

缓慢动画里，我们要用到三个函数，这里先列出来：

- Math.ceil()         向上取整

- Math.floor()        向下取整

- Math.round();   四舍五入

### 缓动动画的原理

缓动动画的原理就是：在移动的过程中，步长越来越小。

设置步长为：**目标位置和盒子当前位置的十分之一**。用公式表达，即：

```
    盒子位置 = 盒子本身位置 + (目标位置 - 盒子本身位置)/ 10；
```

代码举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
            position: absolute;
        }
    </style>
</head>
<body>
<button>运动到left = 400px</button>
<div></div>

<script>

    var btn = document.getElementsByTagName("button")[0];
    var div = document.getElementsByTagName("div")[0];

    btn.onclick = function () {
        setInterval(function () {
            //动画原理：盒子未来的位置 = 盒子当前的位置+步长
            div.style.left = div.offsetLeft + (400 - div.offsetLeft) / 10 + "px";
        }, 30);
    }

</script>
</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180202_2046.gif)

### 缓慢动画的封装（解决四舍五入的问题）

我们发现一个问题，上图中的盒子最终并没有到达400px的位置，而是只到了396.04px就停住了：

![](http://img.smyhvae.com/20180202_2140.png)

原因是：JS在取整的运算时，进行了四舍五入。

我们把打印396.04px这个left值打印出来看看：

![](http://img.smyhvae.com/20180202_2150.png)

我么发现，通过`div.style.left`获取的值是精确的，通过`div.offsetLeft`获取的left值会进行四舍五入。

此时，我们就要用到取整的函数了。

通过对缓动动画进行封装，完整版的代码实现如下：


```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
            position: absolute;
            left: 0;
        }
    </style>
</head>
<body>
<button>运动到200</button>
<button>运动到400</button>
<div></div>

<script>

    var btn = document.getElementsByTagName("button");
    var div = document.getElementsByTagName("div")[0];

    btn[0].onclick = function () {
        animate(div, 200);
    }

    btn[1].onclick = function () {
        animate(div, 400);
    }

    //缓动动画封装
    function animate(ele, target) {
        //要用定时器，先清定时器
        //一个萝卜一个坑儿，一个元素对应一个定时器
        clearInterval(ele.timer);
        //定义定时器
        ele.timer = setInterval(function () {
            //获取步长
            //步长应该是越来越小的，缓动的算法。
            var step = (target - ele.offsetLeft) / 10;
            //对步长进行二次加工(大于0向上取整,小于0向下取整)
            //达到的效果是：最后10像素的时候都是1像素1像素的向目标位置移动，就能够到达指定位置。
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            //动画原理： 目标位置 = 当前位置 + 步长
            ele.style.left = ele.offsetLeft + step + "px";
            console.log(step);
            //检测缓动动画有没有停止
            console.log("smyhvae");
            if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)) {
                //处理小数赋值
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        }, 30);
    }

</script>
</body>
</html>
```

实现效果：

![](http://img.smyhvae.com/20180202_2239.gif)


##  window.scrollTo()方法举例：返回到顶部小火箭

（1）index.html：


```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        img {
            position: fixed;
            bottom: 100px;
            right: 50px;
            cursor: pointer;
            display: none;
            border: 1px solid #000;
        }

        div {
            width: 1210px;
            margin: 100px auto;
            text-align: center;
            font: 500 26px/35px "simsun";
            color: red;
        }
    </style>
    <script src="tools.js"></script>
    <script>
        window.onload = function () {
            //需求：被卷去的头部超过100显示小火箭，然后点击小火箭屏幕缓慢移动到最顶端。
            //难点：我们以前是移动盒子，现在是移动屏幕，我们没有学过如何移动屏幕。
            //      技术点：window.scrollTo(x,y);浏览器显示区域跳转到指定的坐标
            //步骤：
            //1.老三步
            var img = document.getElementsByTagName("img")[0];
            window.onscroll = function () {
                //被卷去的距离大于200显示小火箭，否则隐藏
                //2.显示隐藏小火箭
                if (scroll().top > 1000) {
                    img.style.display = "block";
                } else {
                    img.style.display = "none";
                }
                //每次移动滚动条的时候都给leader赋值，模拟leader获取距离顶部的距离
                leader = scroll().top;
            }
            //3.缓动跳转到页面最顶端（利用我们的缓动动画）
            var timer = null;
            var target = 0; //目标位置
            var leader = 0; //显示区域自身的位置
            img.onclick = function () {
                //技术点：window.scrollTo(0,0);
                //要用定时器，先清定时器
                clearInterval(timer);
                timer = setInterval(function () {
                    //获取步长
                    var step = (target - leader) / 10;
                    //二次处理步长
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step; //往上移动的过程中，step是负数。当前位置减去步长，就等于下一步的位置。
                    //显示区域移动
                    window.scrollTo(0, leader);
                    //清除定时器
                    if (leader === 0) {
                        clearInterval(timer);
                    }
                }, 25);
            }
        }
    </script>
</head>
<body>
<img src="images/Top.jpg"/>
<div>
    我是最顶端.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>
    生命壹号，永不止步.....<br>

</div>
</body>
</html>
```

（2）tools.js:

```javascript
/**
 * Created by smyhvae on 2015/12/8.
 */

//函数：获取scrollTop和scrollLeft的值
function scroll() {  // 开始封装自己的scrollTop
    if (window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if (document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

```

实现效果：

![](http://img.smyhvae.com/20180203_1710.gif)

小火箭的图片资源：

![](http://img.smyhvae.com/20180203-Top.jpg)


## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)


---
title: 35-通过style对象获取和设置行内样式
publish: true
---

<ArticleTopAd></ArticleTopAd>




## style属性的获取和修改

在DOM当中，如果想设置样式，有两种形式：

- className（针对内嵌样式）

- style（针对行内样式）

这篇文章，我们就来讲一下style。

需要注意的是：style是一个对象，只能获取**行内样式**，不能获取内嵌的样式和外链的样式。例如：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div {
            border: 6px solid red;
        }
    </style>
</head>
<body>

    <div class="box1" style="width: 200px;height: 100px;background-color: pink;"></div>

    <script>
        var box1 = document.getElementsByTagName("div")[0];

        console.log(box1.style.backgroundColor);
        console.log(box1.style.border);  //没有打印结果，因为这个属性不是行内样式
        console.log(typeof box1.style);  //因为是对象，所以打印结果是Object
        console.log(box1.style);         //打印结果是对象
    </script>
</body>
</html>
```

打印结果：

![](http://img.smyhvae.com/20180129_1407.png)

上图显示，因为border属性不是行内样式，所以无法通过style对象获取。

### 通过 js 读取元素的样式

语法：（方式一）

```javascript
    元素.style.样式名
```

备注：我们通过style属性读取的样式都是**行内样式**。

语法：（方式二）

```javascript
    元素.style["属性"];  //格式

    box.style["width"];  //举例
```

方式二最大的优点是：可以给属性传递参数。

### 通过 js 设置元素的样式

语法：

```javascript
    元素.style.样式名 = 样式值;
```

举例：

```
    box1.style.width = "300px";
    box1.style.backgroundColor = "red"; // 驼峰命名法

```

备注：我们通过style属性设置的样式都是**行内样式**，而行内样式有较高的优先级。但是如果在样式中的其他地方写了`!important`，则此时`!important`会有更高的优先级。

### style属性的注意事项

style属性需要注意以下几点：

（1）样式少的时候使用。

（2）style是对象。我们在上方已经打印出来，typeof的结果是Object。

（3）值是字符串，没有设置值是“”。

（4）命名规则，驼峰命名。

（5）只能获取行内样式，和内嵌和外链无关。

（6）box.style.cssText = “字符串形式的样式”。


`cssText`这个属性，其实就是把行内样式里面的值当做字符串来对待。在上方代码的基础之上，举例：

```html
    <script>
        var box1 = document.getElementsByTagName("div")[0];

        //通过cssText一次性设置行内样式
        box1.style.cssText = "width: 300px;height: 300px;background-color: green;";

        console.log(box1.style.cssText);   //这一行更加可以理解,style是对象

    </script>
```

打印结果：

![](http://img.smyhvae.com/20180129_1410.png)

### style的常用属性

style的常用属性包括：

- backgroundColor

- backgroundImage

- color

- width

- height

- border

- opacity 设置透明度 (IE8以前是filter: alpha(opacity=xx))

注意DOM对象style的属性和标签中style内的值不一样，因为在JS中，`-`不能作为标识符。比如：

- DOM中：backgroundColor

- CSS中：background-color

## style属性的举例

我们针对上面列举的几个style的样式，来举几个例子：

- 举例1、改变div的大小和透明度

- 举例2、当前输入的文本框高亮显示

- 举例3、高级隔行变色、高亮显示

下面来逐一实现。

### 举例1：改变div的大小和透明度

代码举例：

```html
<body>
<div style="width: 100px;height: 100px;background-color: pink;"></div>
<script>

    var div = document.getElementsByTagName("div")[0];
    div.onmouseover = function () {
        div.style.width = "200px";
        div.style.height = "200px";
        div.style.backgroundColor = "black";
        div.style.opacity = "0.2";   //设置背景色的透明度。单位是0.1
        div.style.filter = "alpha(opacity=20)";   //上一行代码的兼容性写法。注意单位是百进制
    }

</script>

</body>
```

### 举例2：当前输入的文本框高亮显示

代码实现：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        input {
            display: block;
        }
    </style>

</head>

<body>
<ul>
    <input type="text"/>
    <input type="text"/>
    <input type="text"/>
    <input type="text"/>
    <input type="text"/>
</ul>
<script>
    //需求：让所有的input标签获取焦点后高亮显示

    //1.获取事件源
    var inpArr = document.getElementsByTagName("input");
    //2.绑定事件
    //3.书写事件驱动程序
    for (var i = 0; i < inpArr.length; i++) {
        //获取焦点后，所有的input标签被绑定onfocus事件
        inpArr[i].onfocus = function () {
            this.style.border = "2px solid red";
            this.style.backgroundColor = "#ccc";
        }
        //绑定onblur事件，取消样式
        inpArr[i].onblur = function () {
            this.style.border = "";
            this.style.backgroundColor = "";
        }
    }
</script>
</body>
</html>
```

### 举例3：高级隔行变色、高亮显示

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            padding: 0;
            margin: 0;
            text-align: center;
        }

        .wrap {
            width: 500px;
            margin: 100px auto 0;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
            border: 1px solid #c0c0c0;
            width: 500px;
        }

        th,
        td {
            border: 1px solid #d0d0d0;
            color: #404060;
            padding: 10px;
        }

        th {
            background-color: #09c;
            font: bold 16px "微软雅黑";
            color: #fff;
        }

        td {
            font: 14px "微软雅黑";
        }

        tbody tr {
            background-color: #f0f0f0;
            cursor: pointer;
        }

        .current {
            background-color: red !important;
        }
    </style>
</head>
<body>
<div class="wrap">
    <table>
        <thead>
        <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>课程</th>
            <th>成绩</th>
        </tr>
        </thead>
        <tbody id="target">
        <tr>
            <td>
                1
            </td>
            <td>生命壹号</td>
            <td>语文</td>
            <td>100</td>

        </tr>
        <tr>
            <td>
                2
            </td>
            <td>生命贰号</td>
            <td>日语</td>
            <td>99</td>
        </tr>
        <tr>
            <td>
                3
            </td>
            <td>生命叁号</td>
            <td>营销学</td>
            <td>98</td>
        </tr>
        <tr>
            <td>
                4
            </td>
            <td>生命伍号</td>
            <td>数学</td>
            <td>90</td>
        </tr>
        <tr>
            <td>
                5
            </td>
            <td>许嵩</td>
            <td>英语</td>
            <td>96</td>
        </tr>
        <tr>
            <td>
                6
            </td>
            <td>vae</td>
            <td>体育</td>
            <td>90</td>
        </tr>
        </tbody>
    </table>
</div>

<script>
    //需求：让tr各行变色，鼠标放入tr中，高亮显示。

    //1.隔行变色。
    var tbody = document.getElementById("target");
    var trArr = tbody.children;
    //循环判断并各行赋值属性（背景色）
    for (var i = 0; i < trArr.length; i++) {
        if (i % 2 !== 0) {
            trArr[i].style.backgroundColor = "#a3a3a3";
        } else {
            trArr[i].style.backgroundColor = "#ccc";
        }

        //鼠标进入高亮显示
        //难点：鼠标移开的时候要回复原始颜色。
        //计数器（进入tr之后，立刻记录颜色，然后移开的时候使用记录好的颜色）
        var myColor = "";
        trArr[i].onmouseover = function () {
            //赋值颜色之前，先记录颜色
            myColor = this.style.backgroundColor;
            this.style.backgroundColor = "#fff";
        }
        trArr[i].onmouseout = function () {
            this.style.backgroundColor = myColor;
        }
    }


</script>


</body>
</html>
```

实现的效果如下：

![](http://img.smyhvae.com/20180129_1520.gif)

代码解释：

上方代码中，我们**用到了计数器myColor来记录每一行最原始的颜色**（赋值白色之前）。如果不用计数器，可能很多人以为代码是写的：（错误的代码）

```html
<script>
    //需求：让tr各行变色，鼠标放入tr中，高亮显示。

    //1.隔行变色。
    var tbody = document.getElementById("target");
    var trArr = tbody.children;
    //循环判断并各行赋值属性（背景色）
    for (var i = 0; i < trArr.length; i++) {
        if (i % 2 !== 0) {
            trArr[i].style.backgroundColor = "#a3a3a3";
        } else {
            trArr[i].style.backgroundColor = "#ccc";
        }

        //鼠标进入高亮显示
        //难点：鼠标移开的时候要回复原始颜色。
        //计数器（进入tr之后，立刻记录颜色，然后移开的时候使用记录好的颜色）
        trArr[i].onmouseover = function () {
            this.style.backgroundColor = "#fff";
        }
        trArr[i].onmouseout = function () {
            this.style.backgroundColor = "#a3a3a3";
        }
    }
</script>

```

这种错误的代码，实现的效果却是：（未达到效果）

![](http://img.smyhvae.com/20180129_1525.gif)

## 通过 js 获取元素当前显示的样式

我们在上面的内容中，通过`元素.style.className`的方式只能获取**行内样式**。但是，有些元素，也写了**内嵌样式或外链样式**。

既然样式有这么多种，那么，如何获取元素当前显示的样式（包括行内样式、内嵌样式、外链样式）呢？我们接下来看一看。

### 获取元素当前正在显示的样式

（1）w3c的做法：

```javascript
    window.getComputedStyle("要获取样式的元素", "伪元素");
```

两个参数都是必须要有的。参数二中，如果没有伪元素就用 null 代替（一般都传null）。

（2）IE和opera的做法：

```javascript
    obj.currentStyle;
```

注意：

- 如果当前元素没有设置该样式，则获取它的默认值。

- 该方法会返回一个**对象**，对象中封装了当前元素对应的样式，可以通过`对象.样式名`来读取具体的某一个样式。

- 通过currentStyle和getComputedStyle()读取到的样式都是只读的，不能修改，如果要修改必须通过style属性。

综合上面两种写法，就有了一种兼容性的写法，同时将其封装。代码举例如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            background-color: pink;
            /*border: 1px solid #000;*/
            padding: 10px;
        }
    </style>
</head>
<body>

<div style="width: 100px;height: 100px;"></div>

<script>

    var div1 = document.getElementsByTagName("div")[0];

    console.log(getStyle(div1, "width"));
    console.log(getStyle(div1, "padding"));
    console.log(getStyle(div1, "background-color"));

    /*
     * 兼容方法，获取元素当前正在显示的样式。
     * 参数：
     *      obj     要获取样式的元素
     *.     name    要获取的样式名
    */
    function getStyle(ele, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(ele, null)[attr];
        }
        return ele.currentStyle[attr];
    }

</script>
</body>
</html>
```

打印结果：

![](http://img.smyhvae.com/20180204_1425.png)




## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)


---
title: 33-事件简介
publish: true
---

<ArticleTopAd></ArticleTopAd>





## 事件简介

事件：就是文档或浏览器窗口中发生的一些特定的交互瞬间。对于 Web 应用来说，有下面这些代表性的事件：点击某个元素、将鼠标移动至某个元素上方、关闭弹窗等等。

JavaScript 是以**事件驱动为核心**的一门语言。JavaScript 与 HTML 之间的交互是通过事件实现的。

### 事件的三要素

**事件的三要素：事件源、事件、事件驱动程序**。

比如，我用手去按开关，灯亮了。这件事情里，事件源是：手。事件是：按开关。事件驱动程序是：灯开了或者关了。

再比如，网页上弹出一个广告，我点击右上角的`X`，广告就关闭了。这件事情里，事件源是：`X`。事件是：onclick。事件驱动程序是：广告关闭了。

于是我们可以总结出：谁引发的后续事件，谁就是事件源。

**总结如下：**

- 事件源：引发后续事件的html标签。

- 事件：js已经定义好了（见下图）。

- 事件驱动程序：对样式和html的操作。也就是DOM。

也就是说，我们可以在时间对应的属性中写一些js代码，当事件被触发时，这些代码将会执行。

**代码书写步骤如下：**（重要）

- （1）获取事件源：document.getElementById(“box”);   // 类似于Android里面的findViewById

- （2）绑定事件： 事件源box.事件onclick = function(){ 事件驱动程序 };

- （3）书写事件驱动程序：关于DOM的操作。

最简单的代码举例：（点击box1，然后弹框）

```html
<body>
<div id="box1"></div>

<script type="text/javascript">
    // 1、获取事件源
    var div = document.getElementById("box1");
    // 2、绑定事件
    div.onclick = function () {
        // 3、书写事件驱动程序
        alert("我是弹出的内容");
    }
</script>

</body>
```

常见的事件如下：

![](http://img.smyhvae.com/20180126_1553.png)

下面针对这事件的三要素，进行分别介绍。

### 1、获取事件源的方式（DOM节点的获取）

获取事件源的常见方式如下：

```javascript
var div1 = document.getElementById("box1");      //方式一：通过id获取单个标签

var arr1 = document.getElementsByTagName("div");     //方式二：通过 标签名 获得 标签数组，所以有s

var arr2 = document.getElementsByClassName("hehe");  //方式三：通过 类名 获得 标签数组，所以有s
```

### 2、绑定事件的方式

方式一：直接绑定匿名函数

```html
<div id="box1" ></div>

<script type="text/javascript">
    var div1 = document.getElementById("box1");
    //绑定事件的第一种方式
    div1.onclick = function () {
        alert("我是弹出的内容");
    }
</script>
```

方式二：先单独定义函数，再绑定

```html
 <div id="box1" ></div>

<script type="text/javascript">
    var div1 = document.getElementById("box1");
    //绑定事件的第二种方式
    div1.onclick = fn;   //注意，这里是fn，不是fn()。fn()指的是返回值。
    //单独定义函数
    function fn() {
        alert("我是弹出的内容");
    }
</script>
```

注意上方代码的注释。**绑定的时候，是写fn，不是写fn()**。fn代表的是整个函数，而fn()代表的是返回值。

方式三：行内绑定

```html
<!--行内绑定-->
<div id="box1" onclick="fn()"></div>

<script type="text/javascript">

    function fn() {
        alert("我是弹出的内容");
    }

</script>
```

注意第一行代码，绑定时，是写的`"fn()"`，不是写的`"fn"`。因为绑定的这段代码不是写在js代码里的，而是被识别成了**字符串**。

### 3、事件驱动程序

我们在上面是拿alert举例，不仅如此，我们还可以操作标签的属性和样式。举例如下：

点击鼠标时，原本粉色的div变大了，背景变红：

```html
    <style>
        #box1 {
            width: 100px;
            height: 100px;
            background-color: pink;
            cursor: pointer;
        }
    </style>
</head>

<body>

<div id="box1" ></div>

<script type="text/javascript">
    var div1 = document.getElementById("box1");
    //点击鼠标时，原本粉色的div变大了，背景变红了
    div1.onclick = function () {
        div1.style.width = "200px";   //属性值要写引号
        div1.style.height = "200px";
        div1.style.backgroundColor = "red";   //属性名是backgroundColor，不是background-color
    }
</script>
```

上方代码的注意事项：

- 在js里写属性值时，要用引号

- 在js里写属性名时，是`backgroundColor`，不是CSS里面的`background-color`。

实现效果如下：

![](http://img.smyhvae.com/20180126_1720.gif)

### onload事件

> onload事件比较特殊，这里单独讲一下。

**当页面加载（文本和图片）完毕的时候，触发onload事件。**

举例：

```html
<script type="text/javascript">
    window.onload = function () {
        console.log("smyhvae");  //等页面加载完毕时，打印字符串
    }
</script>
```

有一点我们要知道：**js的加载是和html同步加载的**。因此，如果使用元素在定义元素之前，容易报错。这个时候，onload事件就能派上用场了，我们可以把使用元素的代码放在onload里，就能保证这段代码是最后执行。

建议是：整个页面上所有元素加载完毕再执行js内容。所以，window.onload可以预防使用标签在定义标签之前。

**备注**：关于 onLoad事件，在下一篇文章《DOM简介和DOM操作》中有更详细的讲解和示例。

### 事件举例：京东顶部广告栏

![](http://img.smyhvae.com/20180122_1020.png)

比如上面这张图，当鼠标点击右上角的`X`时，关掉整个广告栏，这就要用到事件。

代码实现如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        .top-banner {
            background-color: pink;
            height: 80px;
        }
        .w {
            width: 1210px;
            margin: 10px auto;
            position: relative;
        }
        img {
            display: block;
            width: 1210px;
            height: 80px;
            background-color: blue;
        }
        a {
            position: absolute;
            top: 5px;
            right: 5px;
            color: #fff;
            background-color: #000;
            text-decoration: none;
            width: 20px;
            height: 20px;
            font: 700 14px/20px "simsum";
            text-align: center;
        }
        .hide {
            display: none!important;
        }
    </style>
</head>
<body>
    <div class="top-banner" id="topBanner">
        <div class="w">
            <img src="" alt=""/>
            <a href="#" id="closeBanner">×</a>
        </div>
    </div>


<script>
    //需求：点击案例，隐藏盒子。
    //思路：点击a链接，让top-banner这个盒子隐藏起来（加隐藏类名）。

    //1.获取事件源和相关元素
    var closeBanner = document.getElementById("closeBanner");
    var topBanner = document.getElementById("topBanner");
    //2.绑定事件
    closeBanner.onclick = function () {
        //3.书写事件驱动程序
        //类控制
//        topBanner.className += " hide"; //保留原类名，添加新类名
        topBanner.className = "hide";//替换旧类名（方式一）
//        topBanner.style.display = "none"; //方式二：与上一行代码的效果相同
    }

</script>
</body>
</html>

```

注意最后一行代码，这种方式会替换旧类名，意思是，不管之前的类名叫什么，都会被修改。

### 事件举例：

要求实现效果：当鼠标悬停在img上时，更换为另外一张图片；鼠标离开时，还原为本来的图片。

代码实现：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script>
        //window.onload页面加载完毕以后再执行此代码
        window.onload = function () {
            //需求：鼠标放到img上，更换为另一张图片，也就是修改路径（src的值）。
            //步骤：
            //1.获取事件源
            //2.绑定事件
            //3.书写事件驱动程序

            //1.获取事件源
            var img = document.getElementById("box");
            //2.绑定事件(悬停事件：鼠标进入到事件源中，立即触发事件)
            img.onmouseover = function () {
                //3.书写事件驱动程序(修改src)
                img.src = "image/jd2.png";
//                this.src = "image/jd2.png";
            }

            //2.绑定事件(悬停事件：鼠标进入到事件源中，立即触发事件)
            img.onmouseout = function () {
                //3.书写事件驱动程序(修改src)
                img.src = "image/jd1.png";
            }
        }
    </script>
</head>
<body>

<img id="box" src="image/jd1.png" style="cursor: pointer;border: 1px solid #ccc;"/>

</html>
```

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)

---
title: 34-DOM简介和DOM操作
publish: true
---

<ArticleTopAd></ArticleTopAd>



## 常见概念

### JavaScript的组成

JavaScript基础分为三个部分：

- ECMAScript：JavaScript的语法标准。包括变量、表达式、运算符、函数、if语句、for语句等。

- **DOM**：文档对象模型（Document object Model），操作**网页上的元素**的API。比如让盒子移动、变色、轮播图等。

- **BOM**：浏览器对象模型（Browser Object Model），操作**浏览器部分功能**的API。比如让浏览器自动滚动。

### 节点

**节点**（Node）：构成 HTML 网页的最基本单元。网页中的每一个部分都可以称为是一个节点，比如：html标签、属性、文本、注释、整个文档等都是一个节点。

虽然都是节点，但是实际上他们的具体类型是不同的。常见节点分为四类：

- 文档节点（文档）：整个 HTML 文档。整个 HTML 文档就是一个文档节点。

- 元素节点（标签）：HTML标签。

- 属性节点（属性）：元素的属性。

- 文本节点（文本）：HTML标签中的文本内容（包括标签之间的空格、换行）。

节点的类型不同，属性和方法也都不尽相同。所有的节点都是Object。

### 什么是DOM

**DOM**：Document Object Model，文档对象模型。DOM 为文档提供了结构化表示，并定义了如何通过脚本来访问文档结构。目的其实就是为了能让js操作html元素而制定的一个规范。

DOM就是由节点组成的。

**解析过程**：
HTML加载完毕，渲染引擎会在内存中把HTML文档，生成一个DOM树，getElementById是获取内中DOM上的元素节点。然后操作的时候修改的是该元素的**属性**。

**DOM树**：（一切都是节点）

DOM的数据结构如下：

![](http://img.smyhvae.com/20180126_2105.png)

上图可知，**在HTML当中，一切都是节点**（非常重要）。节点的分类，在上一段中，已经讲了。

整个html文档就是一个文档节点。所有的节点都是Object。

### DOM可以做什么

- 找对象（元素节点）

- 设置元素的属性值

- 设置元素的样式

- 动态创建和删除元素

- 事件的触发响应：事件源、事件、事件的驱动程序

## 元素节点的获取

DOM节点的获取方式其实就是**获取事件源的方式**。关于事件，上一篇文章中已经讲到了。

想要操作元素节点，必须首先要找到该节点。有三种方式可以获取DOM节点：

```javascript
var div1 = document.getElementById("box1"); //方式一：通过 id 获取 一个 元素节点（为什么是一个呢？因为 id 是唯一的）

var arr1 = document.getElementsByTagName("div"); //方式二：通过 标签名 获取 元素节点数组，所以有s

var arr2 = document.getElementsByClassName("hehe"); //方式三：通过 类名 获取 元素节点数组，所以有s
```

既然方式二、方式三获取的是标签数组，那么习惯性是**先遍历之后再使用**。

特殊情况：数组中的值只有1个。即便如此，这一个值也是包在数组里的。这个值的获取方式如下：

```javascript
document.getElementsByTagName("div1")[0];    //取数组中的第一个元素

document.getElementsByClassName("hehe")[0];  //取数组中的第一个元素
```

## DOM访问关系的获取

DOM的节点并不是孤立的，因此可以通过DOM节点之间的相对关系对它们进行访问。如下：

![](http://img.smyhvae.com/20180126_2140.png)

节点的访问关系，是以**属性**的方式存在的。

JS中的**父子兄**访问关系：

![](http://img.smyhvae.com/20180126_2145.png)

这里我们要重点知道**parentNode**和**children**这两个属性的用法。下面分别介绍。

### 获取父节点

调用者就是节点。一个节点只有一个父节点，调用方式就是

```javascript
	节点.parentNode
```

### 获取兄弟节点

**1、下一个节点 | 下一个元素节点**：

> Sibling的中文是**兄弟**。

（1）nextSibling：

- 火狐、谷歌、IE9+版本：都指的是下一个节点（包括标签、空文档和换行节点）。

- IE678版本：指下一个元素节点（标签）。

（2）nextElementSibling：

- 火狐、谷歌、IE9+版本：都指的是下一个元素节点（标签）。

**总结**：为了获取下一个**元素节点**，我们可以这样做：在IE678中用nextSibling，在火狐谷歌IE9+以后用nextElementSibling，于是，综合这两个属性，可以这样写：

```javascript
	下一个兄弟节点 = 节点.nextElementSibling || 节点.nextSibling
```

**2、前一个节点 | 前一个元素节点**：

> previous的中文是：前一个。

（1）previousSibling：

- 火狐、谷歌、IE9+版本：都指的是前一个节点（包括标签、空文档和换行节点）。

- IE678版本：指前一个元素节点（标签）。

（2）previousElementSibling：

- 火狐、谷歌、IE9+版本：都指的是前一个元素节点（标签）。

**总结**：为了获取前一个**元素节点**，我们可以这样做：在IE678中用previousSibling，在火狐谷歌IE9+以后用previousElementSibling，于是，综合这两个属性，可以这样写：

```javascript
	前一个兄弟节点 = 节点.previousElementSibling || 节点.previousSibling
```

**3、补充**：获得任意一个兄弟节点：

```javascript
	节点自己.parentNode.children[index];  //随意得到兄弟节点
```

### 获取单个的子节点

**1、第一个子节点 | 第一个子元素节点**：

（1）firstChild：

- 火狐、谷歌、IE9+版本：都指的是第一个子节点（包括标签、空文档和换行节点）。

- IE678版本：指第一个子元素节点（标签）。

（2）firstElementChild：

- 火狐、谷歌、IE9+版本：都指的是第一个子元素节点（标签）。

**总结**：为了获取第一个**子元素节点**，我们可以这样做：在IE678中用firstChild，在火狐谷歌IE9+以后用firstElementChild，于是，综合这两个属性，可以这样写：

```javascript
	第一个子元素节点 = 节点.firstElementChild || 节点.firstChild
```

**2、最后一个子节点 | 最后一个子元素节点**：

（1）lastChild：

- 火狐、谷歌、IE9+版本：都指的是最后一个子节点（包括标签、空文档和换行节点）。

- IE678版本：指最后一个子元素节点（标签）。

（2）lastElementChild：

- 火狐、谷歌、IE9+版本：都指的是最后一个子元素节点（标签）。

**总结**：为了获取最后一个**子元素节点**，我们可以这样做：在IE678中用lastChild，在火狐谷歌IE9+以后用lastElementChild，于是，综合这两个属性，可以这样写：

```javascript
	最后一个子元素节点 = 节点.lastElementChild || 节点.lastChild
```

### 获取所有的子节点

（1）**childNodes**：标准属性。返回的是指定元素的**子节点**的集合（包括元素节点、所有属性、文本节点）。是W3C的亲儿子。

- 火狐 谷歌等高本版会把换行也看做是子节点。

用法：

```javascript
	子节点数组 = 父节点.childNodes;   //获取所有节点。
```

（2）**children**：非标准属性。返回的是指定元素的**子元素节点**的集合。【重要】

- 它只返回HTML节点，甚至不返回文本节点。
- 在IE6/7/8中包含注释节点（在IE678中，注释节点不要写在里面）。

虽然不是标准的DOM属性，但它和innerHTML方法一样，得到了几乎所有浏览器的支持。

用法：（**用的最多**）

```javascript
	子节点数组 = 父节点.children;   //获取所有节点。用的最多。
```

## DOM节点的操作（重要）

上一段的内容：节点的**访问关系**都是**属性**。

本段的内容：节点的**操作**都是**函数**（方法）。

### 创建节点

格式如下：

```javascript
	新的标签(元素节点) = document.createElement("标签名");
```

比如，如果我们想创建一个li标签，或者是创建一个不存在的adbc标签，可以这样做：

```html
<script type="text/javascript">
    var a1 = document.createElement("li");   //创建一个li标签
    var a2 = document.createElement("adbc");   //创建一个不存在的标签

    console.log(a1);
    console.log(a2);

    console.log(typeof a1);
    console.log(typeof a2);
</script>
```

打印结果：

![](http://img.smyhvae.com/20180127_1135.png)

### 插入节点

插入节点有两种方式，它们的含义是不同的。

方式1：

```javascript
	父节点.appendChild(新的子节点);
```

解释：父节点的最后插入一个新的子节点。

方式2：

```javascript
	父节点.insertBefore(新的子节点,作为参考的子节点)
```

解释：

- 在参考节点前插入一个新的节点。
- 如果参考节点为null，那么他将在父节点里面的最后插入一个子节点。

![](http://img.smyhvae.com/20180127_1257.png)

我们可以看到，li标签确实被插入到了box1标签的里面，和box2并列了。

方式2的举例：

![](http://img.smyhvae.com/20180127_1302.png)

我们可以看到，b1标签被插入到了box1标签的里面，和a1标签并列，在a1标签的前面。


**特别强调：**

关于方式1的appendChild方法，这里要强调一下。比如，现在有下面这样一个div结构：

```html
<div class="box11">
    <div class="box12">生命壹号</div>
</div>

<div class="box21">
    <div class="box22">永不止步</div>

</div>
```


上方结构中，子盒子box12是在父亲box11里的，子盒子box22是在父亲box21里面的。现在，如果我调用方法`box11.appendChild(box22)`，**最后产生的结果是：box22会跑到box11中**（也就是说，box22不在box21里面了）。这是一个很神奇的事情：


![](http://img.smyhvae.com/20180129_2125.png)

### 删除节点

格式如下：

```javascript
	父节点.removeChild(子节点);
```

解释：**用父节点删除子节点**。必须要指定是删除哪个子节点。

如果我想删除自己这个节点，可以这么做：

```javascript
	node1.parentNode.removeChild(node1);
```

### 复制节点（克隆节点）

格式如下：

```javascript
	要复制的节点.cloneNode();       //括号里不带参数和带参数false，效果是一样的。

	要复制的节点.cloneNode(true);
```

括号里带不带参数，效果是不同的。解释如下：

- 不带参数/带参数false：只复制节点本身，不复制子节点。

- 带参数true：既复制节点本身，也复制其所有的子节点。

## 设置节点的属性

我们可以获取节点的属性值、设置节点的属性值、删除节点的属性。

我们就统一拿下面这个标签来举例：

```html
	<img src="images/1.jpg" class="image-box" title="美女图片" alt="地铁一瞥" id="a1">
```

下面分别介绍。

### 1、获取节点的属性值

**方式1**：

```javascript
	元素节点.属性名;
	元素节点[属性名];
```

举例：（获取节点的属性值）

```html
<body>
<img src="images/1.jpg" class="image-box" title="美女图片" alt="地铁一瞥" id="a1">

<script type="text/javascript">
    var myNode = document.getElementsByTagName("img")[0];

    console.log(myNode.src);
    console.log(myNode.className);    //注意，是className，不是class
    console.log(myNode.title);

    console.log("------------");

    console.log(myNode["src"]);
    console.log(myNode["className"]); //注意，是className，不是class
    console.log(myNode["title"]);
</script>
</body>
```

上方代码中的img标签，有各种属性，我们可以逐一获取，打印结果如下：

![](http://img.smyhvae.com/20180127_1340.png)

**方式2**：

```javascript
	元素节点.getAttribute("属性名称");
```

举例：

```javascript
    console.log(myNode.getAttribute("src"));
    console.log(myNode.getAttribute("class"));   //注意是class，不是className
    console.log(myNode.getAttribute("title"));
```

打印结果：

![](http://img.smyhvae.com/20180127_1345.png)

方式1和方式2的区别在于：前者是直接操作标签，后者是把标签作为DOM节点。推荐方式2。

### 2、设置节点的属性值

方式1举例：（设置节点的属性值）

```javascript
    myNode.src = "images/2.jpg"   //修改src的属性值
    myNode.className = "image2-box";  //修改class的name
```

方式2：

```javascript
	元素节点.setAttribute("属性名", "新的属性值");
```

方式2举例：（设置节点的属性值）

```javascript
    myNode.setAttribute("src","images/3.jpg");
    myNode.setAttribute("class","image3-box");
    myNode.setAttribute("id","你好");
```


### 3、删除节点的属性

格式：

```javascript
	元素节点.removeAttribute(属性名);
```

举例：（删除节点的属性）

```javascript
    myNode.removeAttribute("class");
    myNode.removeAttribute("id");
```


### 总结

获取节点的属性值和设置节点的属性值，都有两种方式。

**如果是节点的“原始属性”**（比如 普通标签的`class/className`属性、普通标签的`style`属性、普通标签的 title属性、img 标签的`src`属性、超链接的`href`属性等），**方式1和方式2是等价的**，可以混用。怎么理解混用呢？比如说：用 `div.title = '我是标题'`设置属性，用 `div.getAttribute('title')`获取属性，就是混用。

但如果是节点的“非原始属性”，比如：

```javascript
div.aaa = 'qianguyihao';

div.setAttribute('bbb', 'qianguyihao');

```

上面的这个“非原始属性”，在使用这两种方式时，是有区别的。区别如下：

- 方式1 的`元素节点.属性`和`元素节点[属性]`：绑定的属性值不会出现在标签上。

- 方式2 的`get/set/removeAttribut`：绑定的属性值会出现在标签上。

- **这两种方式不能交换使用**，get值和set值必须使用同一种方法。

举例：

```html
<body>
<div id="box" title="主体" class="asdfasdfadsfd">我爱你中国</div>
<script>

    var div = document.getElementById("box");

    //采用方式一进行set
    div.aaaa = "1111";
    console.log(div.aaaa);    //打印结果：1111。可以打印出来，但是不会出现在标签上

    //采用方式二进行set
    div.setAttribute("bbbb","2222");    //bbbb作为新增的属性，会出现在标签上

    console.log(div.getAttribute("aaaa"));   //打印结果：null。因为方式一的set，无法采用方式二进行get。
    console.log(div.bbbb);                   //打印结果：undefined。因为方式二的set，无法采用方式一进行get。

</script>
</body>
```


## DOM对象的属性-补充

### innerHTML和innerText的区别

- value：标签的value属性。

- **innerHTML**：双闭合标签里面的内容（包含标签）。

- **innerText**：双闭合标签里面的内容（不包含标签）。（老版本的火狐用textContent）


**获取内容举例：**

如果我们想获取innerHTML和innerText里的内容，看看会如何：（innerHTML会获取到标签本身，而innerText则不会）

![](http://img.smyhvae.com/20180127_1652.png)

**修改内容举例：**（innerHTML会修改标签本身，而innerText则不会）

![](http://img.smyhvae.com/20180127_1657.png)

### nodeType属性

这里讲一下nodeType属性。

- **nodeType == 1  表示的是元素节点**（标签） 。记住：在这里，元素就是标签。

- nodeType == 2  表示是属性节点。

- nodeType == 3  是文本节点。

### nodeType、nodeName、nodeValue

我们那下面这个标签来举例：

```html
<div id="box" value="111">
    生命壹号
</div>
```

上面这个标签就包含了三种节点：

- 元素节点（标签）

- 属性节点

- 文本节点

获取这三个节点的方式如下：

```javascript
    var element = document.getElementById("box1");  //获取元素节点（标签）
    var attribute = element.getAttributeNode("id"); //获取box1的属性节点
    var txt = element.firstChild;                   //获取box1的文本节点

    var value = element.getAttribute("id");         //获取id的属性值

    console.log(element);
    console.log("--------------");
    console.log(attribute);
    console.log("--------------");
    console.log(txt);
    console.log("--------------");
    console.log(value);
```

打印结果如下：

![](http://img.smyhvae.com/20180128_1935.png)

既然这三个都是节点，如果我想获取它们的nodeType、nodeName、nodeValue，代码如下：

```javascript
    var element = document.getElementById("box1");  //获取元素节点（标签）
    var attribute = element.getAttributeNode("id"); //获取box1的属性节点
    var txt = element.firstChild;                   //获取box1的文本节点

    //获取nodeType
    console.log(element.nodeType);       //1
    console.log(attribute.nodeType);     //2
    console.log(txt.nodeType);           //3

    console.log("--------------");

    //获取nodeName
    console.log(element.nodeName);       //DIV
    console.log(attribute.nodeName);     //id
    console.log(txt.nodeName);           //#text

    console.log("--------------");

    //获取nodeValue
    console.log(element.nodeValue);     //null
    console.log(attribute.nodeValue);   //box1
    console.log(txt.nodeValue);         //生命壹号
```

打印结果如下：

![](http://img.smyhvae.com/20180128_1939.png)

## 文档的加载

浏览器在加载一个页面时，是按照自上向下的顺序加载的，读取到一行就运行一行。如果将script标签写到页面的上边，在代码执行时，页面还没有加载，页面没有加载DOM对象也没有加载，会导致无法获取到DOM对象。

**onload 事件**：

onload 事件会在整个页面加载完成之后才触发。为 window 绑定一个onload事件，该事件对应的响应函数将会在页面加载完成之后执行，这样可以确保我们的代码执行时所有的DOM对象已经加载完毕了。

代码举例：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
    <script type="text/javascript">
      // 【方式一：先加载，后执行】这段 js 代码是写在 <head> 标签里的，所以建议放在 window.onload 里面。
      window.onload = function() {
        // 获取id为btn的按钮
        var btn = document.getElementById("btn");
        // 为按钮绑定点击事件
        btn.onclick = function() {
          alert("hello");
        };
      };
    </script>
  </head>
  <body>
    <button id="btn">点我一下</button>

    <script type="text/javascript">
      // 【方式二：后加载，后执行】这段 js 代码是写在 <body> 标签里的，代码的位置是处在页面的下方。这么做，也可以确保：在页面加载完毕后，再执行 js 代码。

      // 获取id为btn的按钮
      var btn = document.getElementById("btn");
      // 为按钮绑定点击事件
      btn.onclick = function() {
        alert("hello");
      };
    </script>
  </body>
</html>


```

上方代码中，方式一和方式二均可以确保：在页面加载完毕后，再执行 js 代码。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)



---
title: 43-BOM简介和navigator.userAgent&History&Location
publish: true
---

<ArticleTopAd></ArticleTopAd>



## 常见概念

### JavaScript的组成

JavaScript基础分为三个部分：

- ECMAScript：JavaScript的语法标准。包括变量、表达式、运算符、函数、if语句、for语句等。

- **DOM**：文档对象模型（Document object Model），操作**网页上的元素**的API。比如让盒子移动、变色、轮播图等。

- **BOM**：浏览器对象模型（Browser Object Model），操作**浏览器部分功能**的API。比如让浏览器自动滚动。

### 常见的 BOM 对象

BOM可以让我们通过JS来操作浏览器。BOM中为我们提供了一些对象，来完成对浏览器相关的操作。

常见的 BOM对象有：

- Window：代表整个浏览器的窗口，同时 window 也是网页中的全局对象。

- Navigator：代表当前浏览器的信息，通过该对象可以识别不同的浏览器。

- Location：代表当前浏览器的地址栏信息，通过 Location 可以获取地址栏信息，或者操作浏览器跳转页面。

- History：代表浏览器的历史记录，通过该对象可以操作浏览器的历史记录。由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页，而且该操作只在当次访问时有效。

- Screen：代表用户的屏幕信息，通过该对象可以获取用户的显示器的相关信息。

备注：这些 BOM 对象都是作为 window 对象的属性保存的，可以通过window对象来使用，也可以直接使用。比如说，我可以使用 `window.location.href`，也可以直接使用 `location.href`，二者是等价的。

备注2：不要忘了，之前学习过的`document`也是在`window`中保存的。

这篇文章，我们先来讲一下 几个常见的 BOM 对象。

## Navigator 和 `navigator.userAgent`

`Navigator`代表当前浏览器的信息，通过该对象可以识别不同的浏览器。

由于历史原因，Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了。

**一般我们只会使用`navigator.userAgent`来获取浏览器的信息**。


userAgent 的值是一个字符串，简称 **UA**，这个字符串中包含了用来描述浏览器信息的内容，不同的浏览器会有不同的userAgent。

**代码举例**：（获取当前浏览器的UA）

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script>
            var ua = navigator.userAgent; // 获取当前浏览器的 userAgent

            console.log('qianguyihao 当前浏览器的UA是：' + ua);

            if (/firefox/i.test(ua)) {
                alert('是火狐浏览器');
            } else if (/chrome/i.test(ua)) {
                alert('是Chrome浏览器');
            } else if (/msie/i.test(ua)) {
                alert('是IE浏览器');
            } else if ('ActiveXObject' in window) {
                alert('是 IE11 浏览器');
            }
        </script>
    </body>
</html>
```

### 在电脑上模拟移动端浏览器

不同浏览器（包括微信内置的浏览器）的 userAgent 信息，是不一样的，我们可以根据 `navigator.userAgent`属性来获取。

比如说，我们在电脑浏览器上，按F12，然后在控制台输入`navigator.userAgent`，如下：

![](http://img.smyhvae.com/20180425_1656.png)

上图显示，MacOS上的Chrome浏览器的 userAgent 是：

```
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.117 Safari/537.36"
```

我们还可以在电脑浏览器的控制台里可以添加很多设备，通过这种方式，可以模拟移动端浏览器的场景，非常有用，请务必掌握。操作如下：

（1）需要点击 edit，手动添加：

![](http://img.smyhvae.com/20191127_1903.png)

（2）添加时，根据 User agent 来识别不同的浏览器：

![](http://img.smyhvae.com/20191127_1918.png)


### 不同浏览器的 userAgent

iOS 版微信浏览器：

```
Mozilla/5.0 (iPhone; CPU iPhone OS 9_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13E233 MicroMessenger/6.3.15 NetType/WIFI Language/zh_CN
```

Android 版微信浏览器：

```
Mozilla/5.0 (Linux; Android 5.0.1; GT-I9502 Build/LRX22C; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 MicroMessenger/6.1.0.78_r1129455.543 NetType/WIFI
```

iOS 版本QQ浏览器：

```
Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_2 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C202 QQ/7.3.5.473 V1_IPH_SQ_7.3.5_1_APP_A Pixel/1125 Core/UIWebView Device/Apple(iPhone X) NetType/WIFI QBWebViewType/1
```

Android 版 QQ浏览器：

```
Mozilla/5.0 (Linux; Android 4.4.2; PE-TL20 Build/HuaweiPE-TL20; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043807 Mobile Safari/537.36 V1_AND_SQ_7.3.2_762_YYB_D QQ/7.3.2.3350 NetType/WIFI WebP/0.3.0 Pixel/1080
```


**参考链接**：

- [微信、QQ在Android和iOS的UserAgent](https://blog.csdn.net/taambernk520/article/details/80801574)

- [判断微信内置浏览器的UserAgent](http://www.cnblogs.com/7z7chn/p/5370352.html)

- [微信内置浏览器UserAgent的判断](https://gist.github.com/wjp2013/fff34c063cf0cf227d65)


## History 对象

History对象：可以用来操作浏览器的向前或向后翻页。

### History对象的属性

```javascript
history.length
```

解释：获取浏览器历史列表中的 url 数量。注意，只是统计当次的数量，如果浏览器关了，数量会重置为1。

### History对象的方法

**方法1**：

```
history.back();
```

解释：用来回退到上一个页面，作用和浏览器的「回退按钮」一样。

**方法2**：

```javascript
history.forward();
```

解释：用来跳转下一个页面，作用和浏览器的「前进按钮」一样。

**方法3**：

```javascript
history.go( int n);  // 需要整数作为参数

// 代码举例：
history.go( 1 ); // 向前跳转一个页面，相当于 history.forward()

history.go( 2 ); // 表示向前跳转两个页面

history.go( 0 ); // 刷新当前页面

history.go( -1 ); // 向后跳转一个页面，相当于 history.back()

history.go( -2 ); // 向后跳转两个页面

```

解释：向前/向后跳转 n 个页面。

备注：浏览器的前进按钮、后退按钮，在这个位置：

![](http://img.smyhvae.com/20180201_2146.png)


## Location 对象

Location 对象：封装了浏览器地址栏的 URL 信息。

下面介绍一些常见的属性和方法。

### Location 对象的属性：location.href

```
location.href

location.href = 'https://xxx';
```

解释：获取当前页面的 url 路径（或者设置 url 路径）；或者跳转到指定路径。

举例1：

```javascript
console.log(location.href); // 获取当前页面的url 路径

```

举例2：

```javascript
    location.href = 'www.baidu.com'; // 跳转到指定的页面链接。通俗理解就是：跳转到其他的页面
```

从上方的**举例2**中可以看出：如果直接将`location.href`属性修改为一个绝对路径（或相对路径），则页面会自动跳转到该路径，并生成相应的历史记录。

**window.location.href 是异步代码：**

需要特别注意的是：window.location.href的赋值，并不会中断Javascript的执行立即进行页面跳转。因为 LocationChange 行为在浏览器内核中是起定时器异步执行的。异步执行的好处是为了防止代码调用过深，导致栈溢出，另外也是为了防止递归进入加载逻辑，导致状态紊乱，保证导航请求是顺序执行的。

解决办法：在 location.href 的下一行，加上 return 即可。意思是，执行了 location.href 之后，就不要再继续往下执行了。

参考链接：[location.href的异步机制](https://juejin.cn/post/6844904040518647815)


### Location 对象的方法

**方法1**：

```javascript
    location.assign(str);
```

解释：用来跳转到其他的页面，作用和直接修改`location.href`一样。

**方法2**：

```javascript
    location.reload();
```

解释：用于重新加载当前页面，作用和刷新按钮一样。

代码举例：

```javascript
    location.reload(); // 重新加载当前页面。
    location.reload(true); // 在方法的参数中传递一个true，则会强制清空缓存刷新页面。

```

**方法3**：

```javascript

    location.replace();
```

解释：使用一个新的页面替换当前页面，调用完毕也会跳转页面。但不会生成历史记录，不能使用「后退按钮」后退。


## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)


---
title: 38-client（可视区）相关属性
publish: true
---

<ArticleTopAd></ArticleTopAd>





## client 家族的组成

### clientWidth 和 clientHeight

元素调用时：

- clientWidth：获取元素的可见宽度（width + padding）。

- clientHeight：获取元素的可见高度（height + padding）。


body/html 调用时：

- clientWidth：获取网页可视区域宽度。

- clientHeight：获取网页可视区域高度。

**声明**：

- `clientWidth` 和 `clientHeight` 属性是只读的，不可修改。

- `clientWidth` 和 `clientHeight` 的值都是不带 px 的，返回的都是一个数字，可以直接进行计算。


### clientX 和 clientY

event调用：

- clientX：鼠标距离可视区域左侧距离。

-  clientY：鼠标距离可视区域上侧距离。



### clientTop 和 clientLeft

- clientTop：盒子的上border。

- clientLeft：盒子的左border。


## 三大家族 offset/scroll/client 的区别

### 区别1：宽高

- offsetWidth  = width  + padding + border
- offsetHeight = height + padding + border

- scrollWidth   = 内容宽度（不包含border）
- scrollHeight  = 内容高度（不包含border）

- clientWidth  = width  + padding
- clientHeight = height + padding


### 区别2：上左


offsetTop/offsetLeft：

- 调用者：任意元素。(盒子为主)
- 作用：距离父系盒子中带有定位的距离。


scrollTop/scrollLeft：

- 调用者：document.body.scrollTop（window调用）(盒子也可以调用，但必须有滚动条)
- 作用：浏览器无法显示的部分（被卷去的部分）。


clientY/clientX：

- 调用者：event
- 作用：鼠标距离浏览器可视区域的距离（左、上）。




## 函数封装：获取浏览器的宽高（可视区域）

函数封装如下：

```javascript
//函数封装：获取屏幕可视区域的宽高
function client() {
    if (window.innerHeight !== undefined) {
        //ie9及其以上的版本的写法
        return {
            "width": window.innerWidth,
            "height": window.innerHeight
        }
    } else if (document.compatMode === "CSS1Compat") {
        //标准模式的写法（有DTD时）
        return {
            "width": document.documentElement.clientWidth,
            "height": document.documentElement.clientHeight
        }
    } else {
        //没有DTD时的写法
        return {
            "width": document.body.clientWidth,
            "height": document.body.clientHeight
        }
    }
}

```


**案例：根据浏览器的可视宽度，给定不同的背景的色。**

> PS：这个可以用来做响应式。

代码如下：（需要用到上面的封装好的方法）

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<script src="tools.js"></script>
<script>
    //需求：浏览器每次更改大小，判断是否符合某一标准然后给背景上色。
    //  // >960红色，大于640小于960蓝色，小于640绿色。

    window.onresize = fn;  //页面大小发生变化时，执行该函数。
    //页面加载的时候直接执行一次函数，确定浏览器可视区域的宽，给背景上色
    fn();

    //封装成函数，然后指定的时候去调用和绑定函数名
    function fn() {
        if (client().width > 960) {
            document.body.style.backgroundColor = "red";
        } else if (client().width > 640) {
            document.body.style.backgroundColor = "blue";
        } else {
            document.body.style.backgroundColor = "green";
        }
    }
</script>
</body>
</html>
```


上当代码中，`window.onresize`事件指的是：在窗口或框架被调整大小时发生。各个事件的解释如下：

- window.onscroll        屏幕滑动

- window.onresize       浏览器大小变化

- window.onload	        页面加载完毕

- div.onmousemove    鼠标在盒子上移动（注意：不是盒子移动）



## 获取显示器的分辨率

比如，我的电脑的显示器分辨率是：1920*1080。


获取显示器的分辨率：

```javascript
    window.onresize = function () {
        document.title = window.screen.width + "    " + window.screen.height;
    }
```

显示效果：


![](http://img.smyhvae.com/20180203_2155.png)


上图中，不管我如何改变浏览器的窗口大小，title栏显示的值永远都是我的显示器分辨率：1920*1080。




## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)


---
title: 39-事件的绑定和事件对象Event
publish: true
---

<ArticleTopAd></ArticleTopAd>




## 绑定事件的两种方式/DOM事件的级别

我们在之前的一篇文章《04-JavaScript/22-DOM简介和DOM操作》中已经讲过事件的概念。这里讲一下绑定（注册）事件的两种方式，我们以onclick事件为例。

### DOM0的写法：onclick


```javascript
    element.onclick = function () {

    }
```

举例：

```html
<body>
<button>点我</button>
<script>
    var btn = document.getElementsByTagName("button")[0];

    //这种事件绑定的方式，如果绑定多个，则后面的会覆盖掉前面的
    btn.onclick = function () {
        console.log("事件1");
    }

    btn.onclick = function () {
        console.log("事件2");
    }

</script>
</body>

```

点击按钮后，上方代码的打印结果：

```html
事件2
```

我们可以看到，`DOM对象.事件 =  函数`的这种绑定事件的方式：一个元素的一个事件只能绑定一个响应函数。如果绑定了多个响应函数，则后者会覆盖前者。

### DOM2的写法：addEventListener（高版本浏览器）

```javascript
    element.addEventListener('click', function () {

    }, false);
```


参数解释：

- 参数1：事件名的字符串(注意，没有on)

- 参数2：回调函数：当事件触发时，该函数会被执行

- 参数3：**true表示捕获阶段触发，false表示冒泡阶段触发（默认）**。如果不写，则默认为false。【重要】

举例：

```html
<body>
<button>按钮</button>
<script>
    var btn = document.getElementsByTagName("button")[0];

    // addEventListener: 事件监听器。 原事件被执行的时候，后面绑定的事件照样被执行
    // 这种写法不存在响应函数被覆盖的情况。（更适合团队开发）
    btn.addEventListener("click", fn1);
    btn.addEventListener("click", fn2);

    function fn1() {
        console.log("事件1");
    }

    function fn2() {
        console.log("事件2");
    }

</script>
</body>
```

点击按钮后，上方代码的打印结果：


```html
    事件1
    事件2
```

我们可以看到，`addEventListener()`这种绑定事件的方式：

- 一个元素的一个事件，可以绑定多个响应函数。不存在响应函数被覆盖的情况。**执行顺序是**：事件被触发时，响应函数会按照函数的绑定顺序执行。

- addEventListener()中的this，是绑定事件的对象。

- `addEventListener()`不支持 IE8 及以下的浏览器。在IE8中可以使用`attachEvent`来绑定事件（详见下一小段）。

### DOM2的写法：attachEvent（IE8及以下版本浏览器）

```javascript
    element.attachEvent('onclick', function () {

    });

```

参数解释：

- 参数1：事件名的字符串(注意，有on)

- 参数2：回调函数：当事件触发时，该函数会被执行

举例：

```html
    <body>
        <button>按钮</button>
        <script>
            var btn = document.getElementsByTagName('button')[0];

            btn.attachEvent('onclick', function() {
                console.log('事件1');
            });

            btn.attachEvent('onclick', function() {
                console.log('事件2');
            });
        </script>
    </body>
```

在低版本的IE浏览器上，点击按钮后，上方代码的打印结果：


```html
    事件2
    事件1
```

我们可以看到，`attachEvent()`这种绑定事件的方式：

- 一个元素的一个事件，可以绑定多个响应函数。不存在响应函数被覆盖的情况。**注意**：执行顺序是，后绑定的先执行。

- attachEvent()中的this，是window

### 兼容性写法

上面的内容里，需要强调的是：

- `addEventListener()`中的this，是绑定事件的对象。

- `attachEvent()`中的this，是window。

既然这两个写法的`this`不同，那么，有没有一种兼容性的写法可以确保这两种绑定方式的this是相同的呢？我们可以封装一下。代码如下：

```html
    <body>
        <button>按钮</button>
        <script>
            var btn = document.getElementsByTagName('button')[0];

            myBind(btn , "click" , function(){
                alert(this);
            });



            //定义一个函数，用来为指定元素绑定响应函数
            /*
             * addEventListener()中的this，是绑定事件的对象
             * attachEvent()中的this，是window
             *  需要统一两个方法this
             */
            /*
             * 参数：
             *  element 要绑定事件的对象
             *  eventStr 事件的字符串(不要on)
             *  callback 回调函数
             */
            function myBind(element , eventStr , callback){
                if(element.addEventListener){
                    //大部分浏览器兼容的方式
                    element.addEventListener(eventStr , callback , false);
                }else{
                    /*
                     * this是谁，由调用方式决定
                     * callback.call(element)
                     */
                    //IE8及以下
                    element.attachEvent("on"+eventStr , function(){
                        //在匿名函数 function 中调用回调函数callback
                        callback.call(element);
                    });
                }
            }

        </script>
    </body>
```


## 事件对象

当事件的响应函数被触发时，会产生一个事件对象`event`。浏览器每次都会将这个事件`event`作为实参传进之前的响应函数。

这个对象中包含了与当前事件相关的一切信息。比如鼠标的坐标、键盘的哪个按键被按下、鼠标滚轮滚动的方向等。

### 获取 event 对象（兼容性问题）

所有浏览器都支持event对象，但支持的方式不同。如下。

（1）普通浏览器的写法是 `event`。比如：

![](http://img.smyhvae.com/20180203_1735.png)

（2）ie 678 的写法是 `window.event`。此时，事件对象 event 是作为window对象的属性保存的。

于是，我们可以采取一种兼容性的写法。如下：

```javascript
    event = event || window.event; // 兼容性写法
```

代码举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<script>
    //点击页面的任何部分
    document.onclick = function (event) {
        event = event || window.event; ////兼容性写法

        console.log(event);
        console.log(event.timeStamp);
        console.log(event.bubbles);
        console.log(event.button);
        console.log(event.pageX);
        console.log(event.pageY);
        console.log(event.screenX);
        console.log(event.screenY);
        console.log(event.target);
        console.log(event.type);
        console.log(event.clientX);
        console.log(event.clientY);
    }
</script>
</body>
</html>
```

### event 属性

event 有很多属性，比如：

![](http://img.smyhvae.com/20180203_1739.png)

由于pageX 和 pageY的兼容性不好，我们可以这样做：

- 鼠标在页面的位置 = 滚动条滚动的距离 + 可视区域的坐标。

## Event举例

### 举例1：使 div 跟随鼠标移动

代码实现：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
    <style type="text/css">
      #box1 {
        width: 100px;
        height: 100px;
        background-color: red;
        /*
        * 开启box1的绝对定位
        */
        position: absolute;
      }
    </style>

    <script type="text/javascript">
      window.onload = function() {
        /*
         * 使div可以跟随鼠标移动
         */

        //获取box1
        var box1 = document.getElementById("box1");

        //给整个页面绑定：鼠标移动事件
        document.onmousemove = function(event) {
          //兼容的方式获取event对象
          event = event || window.event;

          // 鼠标在页面的位置 = 滚动条滚动的距离 + 可视区域的坐标。
          var pagex = event.pageX || scroll().left + event.clientX;
          var pagey = event.pageY || scroll().top + event.clientY;

          //   设置div的偏移量（相对于整个页面）
          // 注意，如果想通过 style.left 来设置属性，一定要给 box1开启绝对定位。
          box1.style.left = pagex + "px";
          box1.style.top = pagey + "px";
        };
      };

      // scroll 函数封装
      function scroll() {
        return {
          //此函数的返回值是对象
          left: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
          right:
            window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft
        };
      }
    </script>
  </head>
  <body style="height: 1000px;width: 2000px;">
    <div id="box1"></div>
  </body>
</html>
```

### 举例2：获取鼠标距离所在盒子的距离

关键点：

```
    鼠标距离所在盒子的距离 = 鼠标在整个页面的位置 - 所在盒子在整个页面的位置
```

代码演示：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box {
            width: 300px;
            height: 200px;
            padding-top: 100px;
            background-color: pink;
            margin: 100px;
            text-align: center;
            font: 18px/30px "simsun";
            cursor: pointer;
        }
    </style>
</head>
<body>
<div class="box">

</div>

<script src="animate.js"></script>
<script>
    //需求：鼠标进入盒子之后只要移动，哪怕1像素，随时显示鼠标在盒子中的坐标。
    //技术点：新事件，onmousemove：在事件源上，哪怕鼠标移动1像素也会触动这个事件。
    //一定程度上，模拟了定时器
    //步骤：
    //1.老三步和新五步
    //2.获取鼠标在整个页面的位置
    //3.获取盒子在整个页面的位置
    //4.用鼠标的位置减去盒子的位置赋值给盒子的内容。

    //1.老三步和新五步
    var div = document.getElementsByTagName("div")[0];

    div.onmousemove = function (event) {

        event = event || window.event;
        //2.获取鼠标在整个页面的位置
        var pagex = event.pageX || scroll().left + event.clientX;
        var pagey = event.pageY || scroll().top + event.clientY;
        //3.获取盒子在整个页面的位置
        // var xx =
        // var yy =
        //4.用鼠标的位置减去盒子的位置赋值给盒子的内容。
        var targetx = pagex - div.offsetLeft;
        var targety = pagey - div.offsetTop;
        this.innerHTML = "鼠标在盒子中的X坐标为：" + targetx + "px;<br>鼠标在盒子中的Y坐标为：" + targety + "px;"
    }

</script>
</body>
</html>
```

实现效果：

![](http://img.smyhvae.com/20180203_1828.gif)

### 举例3：商品放大镜

代码实现：

（1）index.html:

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .box {
            width: 350px;
            height: 350px;
            margin: 100px;
            border: 1px solid #ccc;
            position: relative;
        }

        .big {
            width: 400px;
            height: 400px;
            position: absolute;
            top: 0;
            left: 360px;
            border: 1px solid #ccc;
            overflow: hidden;
            display: none;
        }

        /*mask的中文是：遮罩*/
        .mask {
            width: 175px;
            height: 175px;
            background: rgba(255, 255, 0, 0.4);
            position: absolute;
            top: 0;
            left: 0;
            cursor: move;
            display: none;
        }

        .small {
            position: relative;
        }

        img {
            vertical-align: top;
        }
    </style>

    <script src="tools.js"></script>
    <script>
        window.onload = function () {
            //需求：鼠标放到小盒子上，让大盒子里面的图片和我们同步等比例移动。
            //技术点：onmouseenter==onmouseover 第一个不冒泡
            //技术点：onmouseleave==onmouseout  第一个不冒泡
            //步骤：
            //1.鼠标放上去显示盒子，移开隐藏盒子。
            //2.老三步和新五步（黄盒子跟随移动）
            //3.右侧的大图片，等比例移动。

            //0.获取相关元素
            var box = document.getElementsByClassName("box")[0];
            var small = box.firstElementChild || box.firstChild;
            var big = box.children[1];
            var mask = small.children[1];
            var bigImg = big.children[0];

            //1.鼠标放上去显示盒子，移开隐藏盒子。(为小盒子绑定事件)
            small.onmouseenter = function () {
                //封装好方法调用：显示元素
                show(mask);
                show(big);
            }
            small.onmouseleave = function () {
                //封装好方法调用：隐藏元素
                hide(mask);
                hide(big);
            }

            //2.老三步和新五步（黄盒子跟随移动）
            //绑定的事件是onmousemove，而事件源是small(只要在小盒子上移动1像素，黄盒子也要跟随)
            small.onmousemove = function (event) {
                //新五步
                event = event || window.event;

                //想要移动黄盒子，必须要知道鼠标在small小图中的位置。
                var pagex = event.pageX || scroll().left + event.clientX;
                var pagey = event.pageY || scroll().top + event.clientY;

                //x：mask的left值，y：mask的top值。
                var x = pagex - box.offsetLeft - mask.offsetWidth / 2; //除以2，可以保证鼠标mask的中间
                var y = pagey - box.offsetTop - mask.offsetHeight / 2;

                //限制换盒子的范围
                //left取值为大于0，小盒子的宽-mask的宽。
                if (x < 0) {
                    x = 0;
                }
                if (x > small.offsetWidth - mask.offsetWidth) {
                    x = small.offsetWidth - mask.offsetWidth;
                }
                //top同理。
                if (y < 0) {
                    y = 0;
                }
                if (y > small.offsetHeight - mask.offsetHeight) {
                    y = small.offsetHeight - mask.offsetHeight;
                }

                //移动黄盒子
                console.log(small.offsetHeight);
                mask.style.left = x + "px";
                mask.style.top = y + "px";

                //3.右侧的大图片，等比例移动。
                //如何移动大图片？等比例移动。
                //    大图片/大盒子 = 小图片/mask盒子
                //    大图片走的距离/mask走的距离 = （大图片-大盒子）/（小图片-黄盒子）
//                var bili = (bigImg.offsetWidth-big.offsetWidth)/(small.offsetWidth-mask.offsetWidth);

                //大图片走的距离/mask盒子都的距离 = 大图片/小图片
                var bili = bigImg.offsetWidth / small.offsetWidth;

                var xx = bili * x;  //知道比例，就可以移动大图片了
                var yy = bili * y;

                bigImg.style.marginTop = -yy + "px";
                bigImg.style.marginLeft = -xx + "px";
            }
        }
    </script>
</head>
<body>
<div class="box">
    <div class="small">
        <img src="images/001.jpg" alt=""/>
        <div class="mask"></div>
    </div>
    <div class="big">
        <img src="images/0001.jpg" alt=""/>
    </div>
</div>
</body>
</html>
```

（2）tools.js:

```javascript
/**
 * Created by smyhvae on 2018/02/03.
 */

//显示和隐藏
function show(ele) {
    ele.style.display = "block";
}

function hide(ele) {
    ele.style.display = "none";
}

function scroll() {  // 开始封装自己的scrollTop
    if (window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if (document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

```

效果演示：

![](http://img.smyhvae.com/20180203_1920.gif)


## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)
---
title: 41-事件委托
publish: true
---

<ArticleTopAd></ArticleTopAd>



## 事件委托

事件委托，通俗地来讲，就是把一个元素响应事件（click、keydown......）的函数委托到另一个元素。

比如说有一个列表 ul，列表之中有大量的列表项 `<a>`标签：

```html
<ul id="parent-list">
    <li><a href="javascript:;" class="my_link">超链接一</a></li>
    <li><a href="javascript:;" class="my_link">超链接二</a></li>
    <li><a href="javascript:;" class="my_link">超链接三</a></li>
</ul>
```

当我们的鼠标移到`<a>`标签上的时候，需要获取此`<a>`的相关信息并飘出悬浮窗以显示详细信息，或者当某个`<a>`被点击的时候需要触发相应的处理事件。我们通常的写法，是为每个`<a>`都绑定类似onMouseOver或者onClick之类的事件监听：

```javascript
    window.onload = function(){
        var parentNode = document.getElementById("parent-list");
        var aNodes = parentNode.getElementByTagName("a");
        for(var i=0, l = aNodes.length; i < l; i++){

            aNodes[i].onclick = function() {
                console.log('我是超链接 a 的单击相应函数');
            }
        }
    }
```

但是，上面的做法过于消耗内存和性能。**我们希望，只绑定一次事件，即可应用到多个元素上**，即使元素是后来添加的。

因此，比较好的方法就是把这个点击事件绑定到他的父层，也就是 `ul` 上，然后在执行事件函数的时候再去匹配判断目标元素。如下：

```html
    <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title></title>
        <script type="text/javascript">
            window.onload = function() {

                // 获取父节点，并为它绑定click单击事件。 false 表示事件在冒泡阶段触发（默认）
                document.getElementById('parent-list').addEventListener('click', function(event) {
                    event = event || window.event;

                    // e.target 表示：触发事件的对象
                    //如果触发事件的对象是我们期望的元素，则执行否则不执行
                    if (event.target && event.target.className == 'link') {
                    // 或者写成 if (event.target && event.target.nodeName.toUpperCase() == 'A') {
                        console.log('我是ul的单击响应函数');
                    }
                }, false);
            };
        </script>
    </head>
    <body>
        <ul id="parent-list" style="background-color: #bfa;">
            <li>
                <p>我是p元素</p>
            </li>
            <li><a href="javascript:;" class="link">超链接一</a></li>
            <li><a href="javascript:;" class="link">超链接二</a></li>
            <li><a href="javascript:;" class="link">超链接三</a></li>
        </ul>
    </body>
```

上方代码，为父节点注册 click 事件，当子节点被点击的时候，click事件会从子节点开始**向父节点冒泡**。**父节点捕获到事件**之后，开始执行方法体里的内容：通过判断 event.target 拿到了被点击的子节点`<a>`。从而可以获取到相应的信息，并作处理。

换而言之，参数为false，说明事件是在冒泡阶段触发（子元素向父元素传递事件）。而父节点注册了事件函数，子节点没有注册事件函数，此时，会在父节点中执行函数体里的代码。

**总结**：事件委托是利用了冒泡机制，减少了事件绑定的次数，减少内存消耗，提高性能。

事件委托的参考链接：

- [荐 | JavaScript事件代理和委托（Delegation）](https://www.cnblogs.com/owenChen/archive/2013/02/18/2915521.html)

- [JavaScript 事件委托详解](https://zhuanlan.zhihu.com/p/26536815)





## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)




---
title: 42-键盘事件
publish: true
---

<ArticleTopAd></ArticleTopAd>



## 鼠标的拖拽事件

拖拽的流程：

（1）`onmousedown`：当鼠标在被拖拽元素上按下时，开始拖拽；

（2）`onmousemove`：当鼠标移动时被拖拽元素跟随鼠标移动；

（3）`onmouseup`：当鼠标松开时，被拖拽元素固定在当前位置。

## 鼠标的滚轮事件

`onmousewheel`：鼠标滚轮滚动的事件，会在滚轮滚动时触发。但是火狐不支持该属性。

`DOMMouseScroll`：在火狐中需要使用 DOMMouseScroll 来绑定滚动事件。注意该事件需要通过addEventListener()函数来绑定。

## 键盘事件

### 事件名

`onkeydown`：按键被按下。

`onkeyup`：按键被松开。


**注意**：

- 如果一直按着某一个按键不松手，那么，`onkeydown`事件会一直触发。此时，松开键盘，`onkeyup`事件会执行一次。

- 当`onkeydown`连续触发时，第一次和第二次之间会间隔稍微长一点，后续的间隔会非常快。这种设计是为了防止误操作的发生。

键盘事件一般都会绑定给一些可以获取到焦点的对象或者是document。代码举例：

```html
    <body>
        <script>
            document.onkeydown = function(event) {
                event = event || window.event;
                console.log('qianguyihao 键盘按下了');
            };

            document.onkeyup = function() {
                console.log('qianguyihao 键盘松开了');
            };
        </script>

        <input type="text" />
    </body>
```


### 判断哪个键盘被按下

可以通过`event`事件对象的`keyCode`来获取按键的编码。


此外，`event`事件对象里面还提供了以下几个属性：

- altKey

- ctrlKey

- shiftKey


上面这三个属性，可以用来判断`alt`、`ctrl`、和`shift`是否被按下。如果按下则返回true，否则返回false。代码举例：

```html
    <body>
        <script>
            document.onkeydown = function(event) {
                event = event || window.event;
                console.log('qianguyihao：键盘按下了');

                // 判断y和ctrl是否同时被按下
                if (event.ctrlKey && event.keyCode === 89) {
                    console.log('ctrl和y都被按下了');
                }
            };
        </script>
    </body>
```


**举例**：input 文本框中，禁止输入数字。代码实现：


```html
    <body>
        <input type="text" />

        <script>
            //获取input
            var input = document.getElementsByTagName('input')[0];

            input.onkeydown = function(event) {
                event = event || window.event;

                //console.log('qianguyihao:' + event.keyCode);
                //数字 48 - 57
                //使文本框中不能输入数字
                if (event.keyCode >= 48 && event.keyCode <= 57) {
                    //在文本框中输入内容，属于onkeydown的默认行为
                    return false; // 如果在onkeydown中取消了默认行为，则输入的内容，不会出现在文本框中
                }
            };
        </script>
    </body>

```


## 举例：通过键盘的方向键，移动盒子

代码实现：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title></title>
        <style type="text/css">
            #box1 {
                width: 100px;
                height: 100px;
                background-color: red;
                position: absolute;
            }
        </style>
    </head>
    <body>
        <div id="box1"></div>

        <script type="text/javascript">
            // 使div可以根据不同的方向键向不同的方向移动
            /*
             * 按左键，div向左移
             * 按右键，div向右移
             * ...
             */

            //为document绑定一个按键按下的事件
            document.onkeydown = function(event) {
                event = event || window.event;

                //定义一个变量，来表示移动的速度
                var speed = 10;

                //当用户按了ctrl以后，速度加快
                if (event.ctrlKey) {
                    console.log('smyhvae ctrl');
                    speed = 20;
                }

                /*
                 * 37 左
                 * 38 上
                 * 39 右
                 * 40 下
                 */
                switch (event.keyCode) {
                    case 37:
                        //alert("向左"); left值减小
                        box1.style.left = box1.offsetLeft - speed + 'px'; // 在初始值的基础之上，减去 speed 大小
                        break;
                    case 39:
                        //alert("向右");
                        box1.style.left = box1.offsetLeft + speed + 'px';
                        break;
                    case 38:
                        //alert("向上");
                        box1.style.top = box1.offsetTop - speed + 'px';
                        break;
                    case 40:
                        //alert("向下");
                        box1.style.top = box1.offsetTop + speed + 'px';
                        break;
                }
            };
        </script>
    </body>
</html>


```

上方代码，待改进的地方：

（1）移动盒子时，如果要加速，需要先按`方向键`，再按`Ctrl键`。

（2）首次移动盒子时，动作较慢。后续如果学习了定时器相关的内容，可以再改进。


## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)











---
title: 40-事件的传播和事件冒泡
publish: true
---

<ArticleTopAd></ArticleTopAd>




## DOM事件流

事件传播的三个阶段是：事件捕获、事件冒泡和目标。

- 事件捕获阶段：事件从祖先元素往子元素查找（DOM树结构），直到捕获到事件目标 target。在这个过程中，默认情况下，事件相应的监听函数是不会被触发的。

- 事件目标：当到达目标元素之后，执行目标元素该事件相应的处理函数。如果没有绑定监听函数，那就不执行。

- 事件冒泡阶段：事件从事件目标 target 开始，从子元素往冒泡祖先元素冒泡，直到页面的最上一级标签。

如下图所示：

![](http://img.smyhvae.com/20180204_1218.jpg)

PS：这个概念类似于 Android 里的 **touch 事件传递**。

### 事件捕获

addEventListener可以捕获事件：

```javascript
    box1.addEventListener("click", function () {
        alert("捕获 box3");
    }, true);
```

上面的方法中，参数为true，代表事件在捕获阶段执行。

代码演示：

```javascript
    //参数为true，代表事件在「捕获」阶段触发；参数为false或者不写参数，代表事件在「冒泡」阶段触发
    box3.addEventListener("click", function () {
        alert("捕获 child");
    }, true);

    box2.addEventListener("click", function () {
        alert("捕获 father");
    }, true);

    box1.addEventListener("click", function () {
        alert("捕获 grandfather");
    }, true);

    document.addEventListener("click", function () {
        alert("捕获 body");
    }, true);
```

效果演示：

![](http://img.smyhvae.com/20180204_1101.gif)

（如果上面的图片打不开，请点击：<http://img.smyhvae.com/20180204_1101.gif>）

**重点**：捕获阶段，事件依次传递的顺序是：window --> document --> html--> body --> 父元素、子元素、目标元素。

这几个元素在事件捕获阶段的完整写法是：

```javascript
    window.addEventListener("click", function () {
        alert("捕获 window");
    }, true);

    document.addEventListener("click", function () {
        alert("捕获 document");
    }, true);

    document.documentElement.addEventListener("click", function () {
        alert("捕获 html");
    }, true);

    document.body.addEventListener("click", function () {
        alert("捕获 body");
    }, true);

    fatherBox.addEventListener("click", function () {
        alert("捕获 father");
    }, true);

    childBox.addEventListener("click", function () {
        alert("捕获 child");
    }, true);

```

说明：

（1）第一个接收到事件的对象是 **window**（有人会说body，有人会说html，这都是错误的）。

（2）JS中涉及到DOM对象时，有两个对象最常用：window、doucument。它们俩是最先获取到事件的。

**补充一个知识点：**

在 js中：

- 如果想获取 `html`节点，方法是`document.documentElement`。

- 如果想获取 `body` 节点，方法是：`document.body`。

二者不要混淆了。

### 事件冒泡

**事件冒泡**: 当一个元素上的事件被触发的时候（比如说鼠标点击了一个按钮），同样的事件将会在那个元素的所有**祖先元素**中被触发。这一过程被称为事件冒泡；这个事件从原始元素开始一直冒泡到DOM树的最上层。

通俗来讲，冒泡指的是：**子元素的事件被触发时，父元素的同样的事件也会被触发**。取消冒泡就是取消这种机制。

代码演示：

```javascript
    //事件冒泡
    box3.onclick = function () {
        alert("child");
    }

    box2.onclick = function () {
        alert("father");
    }

    box1.onclick = function () {
        alert("grandfather");
    }

    document.onclick = function () {
        alert("body");
    }

```

![](http://img.smyhvae.com/20180204_1028.gif)

（如果上面的图片打不开，请点击：<http://img.smyhvae.com/20180204_1028.gif>）

上图显示，当我点击子元素 box3 的时候，它的父元素box2、box1、body都依次被触发了。即使我改变代码的顺序，也不会影响效果的顺序。

当然，上面的代码中，我们用 addEventListener 这种 DOM2的写法也是可以的，但是第三个参数要写 false，或者不写。

**冒泡顺序**：

一般的浏览器: （除IE6.0之外的浏览器）

- div -> body -> html -> document -> window

IE6.0：

- div -> body -> html -> document

### 不是所有的事件都能冒泡

以下事件不冒泡：blur、focus、load、unload、onmouseenter、onmouseleave。意思是，事件不会往父元素那里传递。

我们检查一个元素是否会冒泡，可以通过事件的以下参数：

```javascript
    event.bubbles
```

如果返回值为true，说明该事件会冒泡；反之则相反。

举例：

```javascript
    box1.onclick = function (event) {
        alert("冒泡 child");

        event = event || window.event;
        console.log(event.bubbles); //打印结果：true。说明 onclick 事件是可以冒泡的
    }
```

## 阻止冒泡

大部分情况下，冒泡都是有益的。当然，如果你想阻止冒泡，也是可以的。可以按下面的方法阻止冒泡。

### 阻止冒泡的方法

w3c的方法：（火狐、谷歌、IE11）

```javascript
    event.stopPropagation();
```

IE10以下则是：

```javascript
event.cancelBubble = true
```

兼容代码如下：

```javascript
   box3.onclick = function (event) {

        alert("child");

        //阻止冒泡
        event = event || window.event;

        if (event && event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
```

上方代码中，我们对box3进行了阻止冒泡，产生的效果是：事件不会继续传递到 father、grandfather、body了。

### 阻止冒泡的举例

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title></title>
        <style type="text/css">
            #box1 {
                width: 100px;
                height: 100px;
                background-color: red;
                /*
        * 开启box1的绝对定位
        */
                position: absolute;
            }
        </style>

        <script type="text/javascript">
            window.onload = function() {
                /*
                 * 使div可以跟随鼠标移动
                 */

                //获取box1
                var box1 = document.getElementById('box1');

                //给整个页面绑定：鼠标移动事件
                document.onmousemove = function(event) {
                    //兼容的方式获取event对象
                    event = event || window.event;

                    // 鼠标在页面的位置 = 滚动条滚动的距离 + 可视区域的坐标。
                    var pagex = event.pageX || scroll().left + event.clientX;
                    var pagey = event.pageY || scroll().top + event.clientY;

                    //   设置div的偏移量（相对于整个页面）
                    // 注意，如果想通过 style.left 来设置属性，一定要给 box1 开启绝对定位。
                    box1.style.left = pagex + 'px';
                    box1.style.top = pagey + 'px';
                };

                // 【重要注释】
                // 当 document.onmousemove 和 box2.onmousemove 同时触发时，通过  box2 阻止事件向 document 冒泡。
                // 也就是说，只要是在 box2 的区域，就只触发 document.onmousemove 事件
                var box2 = document.getElementById('box2');
                box2.onmousemove = function(event) {
                    //阻止冒泡
                    event = event || window.event;

                    if (event && event.stopPropagation) {
                        event.stopPropagation();
                    } else {
                        event.cancelBubble = true;
                    }
                };
            };

            // scroll 函数封装
            function scroll() {
                return {
                    //此函数的返回值是对象
                    left: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
                    right: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft,
                };
            }
        </script>
    </head>
    <body style="height: 1000px;width: 2000px;">
        <div id="box2" style="width: 300px; height: 300px; background-color: #bfa;"></div>
        <div id="box1"></div>
    </body>
</html>
```

关键地方可以看代码中的注释。

效果演示：

![](http://img.smyhvae.com/20191112_1650.gif)


## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20190101.png)
---
title: 44-定时器
publish: true
---

<ArticleTopAd></ArticleTopAd>




## 定时器的常见方法

- setInterval()：循环调用。将一段代码，**每隔一段时间**执行一次。（循环执行）

- setTimeout()：延时调用。将一段代码，等待一段时间之后**再执行**。（只执行一次）

备注：在实际开发中，二者是可以根据需要，互相替代的。

## setInterval() 的使用

`setInterval()`：循环调用。将一段代码，**每隔一段时间**执行一次。（循环执行）

**参数**：

- 参数1：回调函数，该函数会每隔一段时间被调用一次。

- 参数2：每次调用的间隔时间，单位是毫秒。

**返回值**：返回一个Number类型的数据。这个数字用来作为定时器的**唯一标识**，方便用来清除定时器。

### 定义定时器

**方式一**：匿名函数

每间隔一秒，将 数字 加1：

```javascript
    let num = 1;
   setInterval(function () {
       num ++;
       console.log(num);
   }, 1000);
```

**方式二：**

每间隔一秒，将 数字 加1：

```javascript
    setInterval(fn,1000);

    function fn() {
       num ++;
       console.log(num);
    }

```

### 清除定时器

定时器的返回值是作为这个定时器的**唯一标识**，可以用来清除定时器。具体方法是：假设定时器setInterval()的返回值是`参数1`，那么`clearInterval(参数1)`就可以清除定时器。

setTimeout()的道理是一样的。

代码举例：

```html
<script>
    let num = 1;

    const timer = setInterval(function () {
        console.log(num);  //每间隔一秒，打印一次num的值
        num ++;
        if(num === 5) {  //打印四次之后，就清除定时器
            clearInterval(timer);
        }

    }, 1000);
</script>

```

## setTimeout() 的使用

`setTimeout()`：延时调用。将一段代码，等待一段时间之后**再执行**。（只执行一次）

**参数**：

- 参数1：回调函数，该函数会每隔一段时间被调用一次。

- 参数2：每次调用的间隔时间，单位是毫秒。

**返回值**：返回一个Number类型的数据。这个数字用来作为定时器的**唯一标识**，方便用来清除定时器。

### 定义和清除定时器

代码举例：

```javascript
    const timer = setTimeout(function() {
        console.log(1); // 3秒之后，再执行这段代码。
    }, 3000);

    clearTimeout(timer);

```

代码举例：（箭头函数写法）

```javascript
    setTimeout(() => {
        console.log(1); // 3秒之后，再执行这段代码。
    }, 3000);
```


### setTimeout() 举例：5秒后关闭网页两侧的广告栏

假设网页两侧的广告栏为两个img标签，它们的样式为：


```html
<style>
    ...
    ...

</style>

```

5秒后关闭广告栏的js代码为：

```html
    <script>
        window.onload = function () {
            //获取相关元素
            var imgArr = document.getElementsByTagName("img");
            //设置定时器：5秒后关闭两侧的广告栏
            setTimeout(fn,5000);
            function fn(){
                imgArr[0].style.display = "none";
                imgArr[1].style.display = "none";
            }
        }
    </script>
```


---
title: 46-jQuery动画详解
publish: true
---

<ArticleTopAd></ArticleTopAd>






## 前言

jQuery提供的一组网页中常见的动画效果，这些动画是标准的、有规律的效果；同时还提供给我们了自定义动画的功能。

## 显示动画

方式一：

```javascript
	$("div").show();
```

解释：无参数，表示让指定的元素直接显示出来。其实这个方法的底层就是通过`display: block;`实现的。

方式二：

```javascript
	$("div").show(2000);
```

解释：通过控制元素的宽高、透明度、display属性，逐渐显示，2秒后显示完毕。

效果如下：

![](http://img.smyhvae.com/20180205_1358.gif)

方式三：

```javascript
	$("div").show("slow");
```

参数可以是：

- slow 慢：600ms

- normal 正常：400ms

- fast 快：200ms

解释：和方式二类似，也是通过控制元素的宽高、透明度、display属性，逐渐显示。

方式四：

```javascript
    //show(毫秒值，回调函数;
    $("div").show(5000,function () {
        alert("动画执行完毕！");
    });
```

解释：动画执行完后，立即执行回调函数。

**总结：**

上面的四种方式几乎一致：参数可以有两个，第一个是动画的执行时长，第二个是动画结束后执行的回调函数。

## 隐藏动画

方式参照上面的show()方法的方式。如下：


```javascript
	$(selector).hide();

	$(selector).hide(1000);

	$(selector).hide("slow");

	$(selector).hide(1000, function(){});
```

**显示和隐藏的来回切换：**

显示和隐藏的来回切换采用的是toggle()方法：就是先执行show()，再执行hide()。

同样是四种方式：

```javascript
$(selector).toggle();

```

## 滑入和滑出

**1、滑入动画效果**：（类似于生活中的卷帘门）


```javascript
	$(selector).slideDown(speed, 回调函数);
```

解释：下拉动画，显示元素。

注意：省略参数或者传入不合法的字符串，那么则使用默认值：400毫秒（同样适用于fadeIn/slideDown/slideUp）


**2 滑出动画效果：**

```javascript
	$(selector).slideUp(speed, 回调函数);
```

解释：上拉动画，隐藏元素。


**3、滑入滑出切换动画效果：**

```javascript
	$(selector).slideToggle(speed, 回调函数);
```

参数解释同show()方法。

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 300px;
            height: 300px;
            display: none;
            background-color: pink;
        }
    </style>

    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            //点击按钮后产生动画
            $("button:eq(0)").click(function () {

                //滑入动画： slideDown(毫秒值，回调函数[显示完毕执行什么]);
                $("div").slideDown(2000, function () {
                    alert("动画执行完毕！");
                });
            })

            //滑出动画
            $("button:eq(1)").click(function () {

                //滑出动画：slideUp(毫秒值，回调函数[显示完毕后执行什么]);
                $("div").slideUp(2000, function () {
                    alert("动画执行完毕！");
                });
            })

            $("button:eq(2)").click(function () {
                //滑入滑出切换（同样有四种用法）
                $("div").slideToggle(1000);
            })

        })
    </script>
</head>
<body>
<button>滑入</button>
<button>滑出</button>
<button>切换</button>
<div></div>

</body>
</html>
```

![](http://img.smyhvae.com/20180205_1420.gif)

## 淡入淡出动画

1、淡入动画效果：

```javascript
	$(selector).fadeIn(speed, callback);
```

作用：让元素以淡淡的进入视线的方式展示出来。

2、淡出动画效果：

```javascript
	$(selector).fadeOut(1000);
```

作用：让元素以渐渐消失的方式隐藏起来

3、淡入淡出切换动画效果：


```javascript
	$(selector).fadeToggle('fast', callback);
```

作用：通过改变透明度，切换匹配元素的显示或隐藏状态。

参数的含义同show()方法。

代码举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 300px;
            height: 300px;
            display: none;
            /*opacity: 1;*/
            background-color: pink;
        }
    </style>

    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            //点击按钮后产生动画
            $("button:eq(0)").click(function () {
//                //淡入动画用法1:   fadeIn();   不加参数
                $("div").fadeIn();

//                //淡入动画用法2:   fadeIn(2000);   毫秒值
//                $("div").fadeIn(2000);
//                //通过控制  透明度和display

                //淡入动画用法3:   fadeIn(字符串);   slow慢：600ms   normal正常:400ms   fast快：200ms
//                $("div").fadeIn("slow");
//                $("div").fadeIn("fast");
//                $("div").fadeIn("normal");

                //淡入动画用法4:   fadeIn(毫秒值，回调函数[显示完毕执行什么]);
//                $("div").fadeIn(5000,function () {
//                    alert("动画执行完毕！");
//                });
            })

            //滑出动画
            $("button:eq(1)").click(function () {
//                //滑出动画用法1:   fadeOut();   不加参数
//                $("div").fadeOut();

//                //滑出动画用法2:   fadeOut(2000);   毫秒值
//                $("div").fadeOut(2000);  //通过这个方法实现的：display: none;
//                //通过控制  透明度和display

                //滑出动画用法3:   fadeOut(字符串);   slow慢：600ms   normal正常:400ms   fast快：200ms
//                $("div").fadeOut("slow");
//                $("div").fadeOut("fast");
//                $("div").fadeOut("normal");

                //滑出动画用法1:   fadeOut(毫秒值，回调函数[显示完毕执行什么]);
//                $("div").fadeOut(2000,function () {
//                    alert("动画执行完毕！");
//                });
            })

            $("button:eq(2)").click(function () {
                //滑入滑出切换
                //同样有四种用法
                $("div").fadeToggle(1000);
            })

            $("button:eq(3)").click(function () {
                //改透明度
                //同样有四种用法
                $("div").fadeTo(1000, 0.5, function () {
                    alert(1);
                });
            })
        })
    </script>
</head>
<body>
<button>淡入</button>
<button>淡出</button>
<button>切换</button>
<button>改透明度为0.5</button>
<div></div>

</body>
</html>
```

## 自定义动画

```javascript
	$(selector).animate({params}, speed, callback);
```

作用：执行一组CSS属性的自定义动画。

- 第一个参数表示：要执行动画的CSS属性（必选）

- 第二个参数表示：执行动画时长（可选）

- 第三个参数表示：动画执行完后，立即执行的回调函数（可选）

代码举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            position: absolute;
            left: 20px;
            top: 30px;
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        jQuery(function () {
            $("button").click(function () {
                var json = {"width": 500, "height": 500, "left": 300, "top": 300, "border-radius": 100};
                var json2 = {
                    "width": 100,
                    "height": 100,
                    "left": 100,
                    "top": 100,
                    "border-radius": 100,
                    "background-color": "red"
                };

                //自定义动画
                $("div").animate(json, 1000, function () {
                    $("div").animate(json2, 1000, function () {
                        alert("动画执行完毕！");
                    });
                });

            })
        })
    </script>
</head>
<body>
<button>自定义动画</button>
<div></div>
</body>
</html>
```

## 停止动画

```javascript
	$(selector).stop(true, false);
```

**里面的两个参数，有不同的含义。**

第一个参数：

- true：后续动画不执行。

- false：后续动画会执行。

第二个参数：

- true：立即执行完成当前动画。

- false：立即停止当前动画。

PS：参数如果都不写，默认两个都是false。实际工作中，直接写stop()用的多。

**效果演示：**

当第二个参数为true时，效果如下：

![](http://img.smyhvae.com/20180205_1445.gif)

当第二个参数为false时，效果如下：

![](http://img.smyhvae.com/20180205_1450.gif)


这个**后续动画**我们要好好理解，来看个例子。

**案例：鼠标悬停时，弹出下拉菜单（下拉时带动画）**

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }

        ul {
            list-style: none;
        }

        .wrap {
            width: 330px;
            height: 30px;
            margin: 100px auto 0;
            padding-left: 10px;
            background-color: pink;
        }

        .wrap li {
            background-color: green;
        }

        .wrap > ul > li {
            float: left;
            margin-right: 10px;
            position: relative;
        }

        .wrap a {
            display: block;
            height: 30px;
            width: 100px;
            text-decoration: none;
            color: #000;
            line-height: 30px;
            text-align: center;
        }

        .wrap li ul {
            position: absolute;
            top: 30px;
            display: none;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        //入口函数
        $(document).ready(function () {
            //需求：鼠标放入一级li中，让他里面的ul显示。移开隐藏。
            var jqli = $(".wrap>ul>li");

            //绑定事件
            jqli.mouseenter(function () {
                $(this).children("ul").stop().slideDown(1000);
            });

            //绑定事件(移开隐藏)
            jqli.mouseleave(function () {
                $(this).children("ul").stop().slideUp(1000);
            });
        });
    </script>

</head>
<body>
<div class="wrap">
    <ul>
        <li>
            <a href="javascript:void(0);">一级菜单1</a>
            <ul>
                <li><a href="javascript:void(0);">二级菜单1</a></li>
                <li><a href="javascript:void(0);">二级菜单2</a></li>
                <li><a href="javascript:void(0);">二级菜单3</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:void(0);">一级菜单1</a>
            <ul>
                <li><a href="javascript:void(0);">二级菜单1</a></li>
                <li><a href="javascript:void(0);">二级菜单2</a></li>
                <li><a href="javascript:void(0);">二级菜单3</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:void(0);">一级菜单1</a>
            <ul>
                <li><a href="javascript:void(0);">二级菜单1</a></li>
                <li><a href="javascript:void(0);">二级菜单2</a></li>
                <li><a href="javascript:void(0);">二级菜单3</a></li>
            </ul>
        </li>
    </ul>
</div>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180205_1500.gif)

上方代码中，关键的地方在于，用了stop函数，再执行动画前，先停掉之前的动画。

如果去掉stop()函数，效果如下：（不是我们期望的效果）

![](http://img.smyhvae.com/20180205_1505.gif)

### stop方法的总结

当调用stop()方法后，队列里面的下一个动画将会立即开始。
但是，如果参数clearQueue被设置为true，那么队列面剩余的动画就被删除了，并且永远也不会执行。

如果参数jumpToEnd被设置为true，那么当前动画会停止，但是参与动画的每一个CSS属性将被立即设置为它们的目标值。比如：slideUp()方法，那么元素会立即隐藏掉。如果存在回调函数，那么回调函数也会立即执行。

注意：如果元素动画还没有执行完，此时调用stop()方法，那么动画将会停止。并且动画没有执行完成，那么回调函数也不会被执行。


## 举例：右下角的弹出广告

代码实现：

```html
<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        .ad {
            position: fixed;
            right: 0;
            bottom: 0;
            width: 230px;
            height: 120px;
            background-image: url(images/ad.jpg);
            display: none;
        }

        .ad span {
            position: absolute;
            right: 0;
            top: 0;
            width: 40px;
            height: 18px;
            background-image: url(images/h.jpg);
            cursor: pointer;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            //需求：然广告ad部分，先滑入，在滑出，在淡入。然后绑定事件，点击span弹出
            //步骤：
            $(".ad").slideDown(1000).slideUp(1000).fadeIn(1000).children("span").click(function () {
                $(this).parent().fadeOut(1000);
            });


            //第二种写法
//            $(".ad").slideDown(1000, function () {
//                $(".ad").slideUp(1000, function () {
//                    $(".ad").fadeIn(1000, function () {
//                        $(".ad").children("span").click(function () {
//                            $(this).parent().fadeOut(1000, function () {
//                                alert("执行完毕！");
//                            });
//                        });
//                    });
//                });
//            })
        })
    </script>
</head>

<body>

<div class="ani">我是内容</div>
<div class="ad">
    <span></span>
</div>

</body>
</html>

```

效果如下：

![](http://img.smyhvae.com/20180205_2000.gif)


## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)

---
title: 45-jQuery的介绍和选择器
publish: true
---

<ArticleTopAd></ArticleTopAd>








## jQuery 的介绍

### 引入 jQuery 的原因

在用 js 写代码时，会遇到一些问题：

- window.onload 事件有事件覆盖的问题，因此只能写一个事件。

- 代码容错性差。

- 浏览器兼容性问题。

- 书写很繁琐，代码量多。

- 代码很乱，各个页面到处都是。

- 动画效果很难实现。

如下图所示：

![](http://img.smyhvae.com/20180204_1710.png)

jQuery的出现，可以解决以上问题。

### 什么是 jQuery

jQuery 是 js 的一个库，封装了我们开发过程中常用的一些功能，方便我们调用，提高开发效率。

js库是把我们常用的功能放到一个单独的文件中，我们用的时候，直接引用到页面里即可。

以下是jQuery的相关信息：

- 官网：<http://jquery.com/>

- 官网API文档：<http://api.jquery.com/>

- 中文汉化API文档：<http://www.css88.com/jqapi-1.9/>

### 学习jQuery，主要是学什么

初期，主要学习如何使用jQuery操作DOM，其实就是学习jQuery封装好的那些API。

这些API的共同特点是：几乎全都是方法。所以，在使用jQuery的API时，都是方法调用，也就是说要加小括号()，小括号里面是相应的参数，参数不同，功能不同。

### jQuery初体验

现在用原生 js 来写下面这一段代码：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            height: 100px;
            background-color: pink;
            margin: 10px;
            display: none;
        }
    </style>

    <script>
        //原生js
        window.onload = function () {
            var btn = document.getElementsByTagName("button")[0];
            var divArr = document.getElementsByTagName("div");

            btn.onclick = function () {
                for (var i = 0; i < divArr.length; i++) {
                    divArr[i].style.display = "block";
                    divArr[i].innerHTML = "生命壹号";
                }
            }
        }
    </script>
</head>
<body>

<button>显示五个div盒子和设置内容</button>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>

</body>
</html>
```

如果用 jQuery 来写，保持其他的代码不变，`<script>`部分的代码修改为：（需要提前引入 ）

```html
    <script src="jquery-1.11.1.js"></script>
    <script>

        //jquery版
        $(document).ready(function () {
            //获取元素
            var jQbtn = $("button");//根据标签名获取元素
            var jQdiv = $("div");//根据标签名获取元素
            //绑定事件
            jQbtn.click(function () {
                jQdiv.show(1000);//显示盒子。
                jQdiv.html("tomorrow！");//设置内容
                //上面的两行可以写成链式编程：jQdiv.show(3000).html(1111);

            });//事件是通过方法绑定的。

        });
    </script>
```

### jQuery 的两大特点

（1）**链式编程**：比如`.show()`和`.html()`可以连写成`.show().html()`。


链式编程原理：return this。

通常情况下，只有设置操作才能把链式编程延续下去。因为获取操作的时候，会返回获取到的相应的值，无法返回 this。


（2）**隐式迭代**：隐式 对应的是 显式。隐式迭代的意思是：在方法的内部会为匹配到的所有元素进行循环遍历，执行相应的方法；而不用我们再进行循环，简化我们的操作，方便我们调用。

如果获取的是多元素的值，大部分情况下返回的是第一个元素的值。






## jQuery 的使用

### 使用 jQuery 的基本步骤

（1）引包

（2）入口函数

（3）功能实现代码（事件处理）

如下图所示：

![](http://img.smyhvae.com/20180204_1940.png)

主要，导包的代码一定要放在js代码的最上面。

### jQuery 的版本

jQuery 有两个大版本：

- 1.x版本：最新版为 v1.11.3。

- 2.x版本：最新版为 v2.1.4（不再支持IE6、7、8）。

- 3.x版本。


PS：开发版本一般用1.10以上。

我们以 v1.11.1版本为例，下载下来后发现，里面有两个文件：

![](http://img.smyhvae.com/20180204_1950.png)

它们的区别是：

- 第一个是未压缩版，第二个是压缩版。

- 平时开发过程中，可以使用任意一个版本；但是，项目上线的时候，推荐使用压缩版。


## jQuery 的入口函数和 `$` 符号


### 入口函数（重要）

原生 js 的入口函数指的是：`window.onload = function() {};` 如下：

```javascript
        //原生 js 的入口函数。页面上所有内容加载完毕，才执行。
        //不仅要等文本加载完毕，而且要等图片也要加载完毕，才执行函数。
       window.onload = function () {
           alert(1);
       }
```


而 jQuery的入口函数，有以下几种写法：

写法一：


```javascript
       //1.文档加载完毕，图片不加载的时候，就可以执行这个函数。
       $(document).ready(function () {
           alert(1);
       })
```

写法二：（写法一的简洁版）

```javascript
       //2.文档加载完毕，图片不加载的时候，就可以执行这个函数。
       $(function () {
           alert(1);
       });
```

写法三：

```javascript
       //3.文档加载完毕，图片也加载完毕的时候，在执行这个函数。
       $(window).ready(function () {
           alert(1);
       })
```

**jQuery入口函数与js入口函数的区别**：

区别一：书写个数不同：

- Js 的入口函数只能出现一次，出现多次会存在事件覆盖的问题。

- jQuery 的入口函数，可以出现任意多次，并不存在事件覆盖问题。


区别二：执行时机不同：

- Js的入口函数是在**所有的文件资源加载**完成后，才执行。这些**文件资源**包括：页面文档、外部的js文件、外部的css文件、图片等。

- jQuery的入口函数，是在文档加载完成后，就执行。文档加载完成指的是：DOM树加载完成后，就可以操作DOM了，不用等到所有的**外部资源**都加载完成。

文档加载的顺序：从上往下，边解析边执行。

### jQuery的`$`符号

jQuery 使用 `$` 符号原因：书写简洁、相对于其他字符与众不同、容易被记住。

jQuery占用了我们两个变量：`$` 和 jQuery。当我们在代码中打印它们俩的时候：


```html
    <script src="jquery-1.11.1.js"></script>
    <script>

        console.log($);
        console.log(jQuery);
        console.log($===jQuery);


    </script>
```

打印结果如下：

![](http://img.smyhvae.com/20180204_2014.png)

从打印结果可以看出，$ 代表的就是 jQuery。

那怎么理解jQuery里面的 `$` 符号呢？

**`$` 实际上表示的是一个函数名** 如下：


```html
	$(); // 调用上面我们自定义的函数$

	$(document）.ready(function(){}); // 调用入口函数

	$(function(){}); // 调用入口函数

	$(“#btnShow”) // 获取id属性为btnShow的元素

	$(“div”) // 获取所有的div标签元素

```

如上方所示，jQuery 里面的 `$` 函数，根据传入参数的不同，进行不同的调用，实现不同的功能。返回的是jQuery对象。

jQuery这个js库，除了` $` 之外，还提供了另外一个函数：jQuery。jQuery函数跟 `$` 函数的关系：`jQuery === $`。

##  js中的DOM对象 和 jQuery对象 比较（重点，难点）

### 二者的区别

通过 jQuery 获取的元素是一个**数组**，数组中包含着原生JS中的DOM对象。举例：

针对下面这样一个div结构：

```html
<div></div>
<div class="box"></div>
<div id="box"></div>
<div class="box"></div>
<div></div>
```

通过原生 js 获取这些元素节点的方式是：

```javascript
    var myBox = document.getElementById("box");           //通过 id 获取单个元素
    var boxArr = document.getElementsByClassName("box");  //通过 class 获取的是数组
    var divArr = document.getElementsByTagName("div");    //通过标签获取的是数组
```

通过 jQuery 获取这些元素节点的方式是：（获取的都是数组）

```javascript
    //获取的是数组，里面包含着原生 JS 中的DOM对象。
    var jqBox1 = $("#box");
    var jqBox2 = $(".box");
    var jqBox3 = $("div");
```

我们打印出来看看：

![](http://img.smyhvae.com/20180204_2045.png)

上图显示，由于JQuery 自带了 css()方法，我们还可以直接在代码中给 div 设置 css 属性。

**总结**：jQuery 就是把 DOM 对象重新包装了一下，让其具有了 jQuery 方法。

### 二者的相互转换

**1、 DOM 对象 转为 jQuery对象**：

```javascript
	$(js对象);
```

举例：（拿上一段的代码举例）

```javascript
	//转换。
	jqBox1 = $(myBox);
	jqBox2 = $(boxArr);
	jqBox3 = $(divArr);
```

DOM 对象转换成了 jquery 对象之后，上面的功能可以直接调用。

**2、jQuery对象 转为 DOM 对象**：

```javascript
	jquery对象[index];      //方式1（推荐）

	jquery对象.get(index);  //方式2
```

jQuery对象转换成了 DOM 对象之后，可以直接调用 DOM 提供的一些功能。如：

```javascript
    //jquery对象转换成 DOM 对象之后
    jqBox3[0].style.backgroundColor = "black";
    jqBox3.get(4).style.backgroundColor = "pink";
```

**总结**：如果想要用哪种方式设置属性或方法，必须转换成该类型。

### 举例：隔行变色

代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="jquery-1.11.1.js"></script>
    <script>
        //入口函数
        jQuery(function () {
            var jqLi = $("li");
            for (var i = 0; i < jqLi.length; i++) {
                if (i % 2 === 0) {
                    //jquery对象，转换成了js对象
                    jqLi[i].style.backgroundColor = "pink";
                } else {
                    jqLi[i].style.backgroundColor = "yellow";
                }
            }
        });
    </script>
</head>
<body>
<ul>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
</ul>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180204_2111.png)

## jQuery 选择器

我们以前在CSS中学习的选择器有：

![](http://img.smyhvae.com/20180204_2122.png)

今天来学习一下jQuery 选择器。

jQuery选择器是jQuery强大的体现，它提供了一组方法，让我们更加方便的获取到页面中的元素。

### 1、jQuery 的基本选择器

![](http://img.smyhvae.com/20180204_2125.png)

解释如下：

![](http://img.smyhvae.com/20180204_2126.png)

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="jquery-1.11.1.js"></script>
    <script>
        //入口函数
        jQuery(document).ready(function () {

            //三种方式获取jquery对象
            var jqBox1 = $("#box");
            var jqBox2 = $(".box");
            var jqBox3 = $("div");

            //操作标签选择器
            jqBox3.css("width", 100);
            jqBox3.css("height", 100);
            jqBox3.css("margin", 10);
            jqBox3.css("background", "pink");

            //操作类选择器(隐式迭代，不用一个一个设置)
            jqBox2.css("background", "red");

            //操作id选择器
            jqBox1.css("background", "yellow");

        });
    </script>
</head>
<body>

<div></div>
<div class="box"></div>
<div id="box"></div>
<div class="box"></div>
<div></div>

</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180204_2133.png)

### 2、层级选择器

![](http://img.smyhvae.com/20180204_2138.png)

解释如下：

![](http://img.smyhvae.com/20180204_2139.png)

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            //获取ul中的li设置为粉色
            //后代：儿孙重孙曾孙玄孙....
            var jqLi = $("ul li");
            jqLi.css("margin", 5);
            jqLi.css("background", "pink");

            //子代：亲儿子
            var jqOtherLi = $("ul>li");
            jqOtherLi.css("background", "red");
        });
    </script>
</head>
<body>
<ul>
    <li>111</li>
    <li>222</li>
    <li>333</li>
    <ol>
        <li>aaa</li>
        <li>bbb</li>
        <li>ccc</li>
    </ol>
</ul>
</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180204_2145.png)

### 3、基本过滤选择器

![](http://img.smyhvae.com/20180204_2150.png)

解释：

![](http://img.smyhvae.com/20180204_2151.png)

举例：

```html
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(document).ready(function () {

            // :odd
            $("li:odd").css("background", "red");

            // :even
            $("li:even").css("background", "green");

            // :eq(index)
            $("ul li:eq(3)").css("font-size", "30px");  //设置第四个li的字体

            // :lt(index)
            $("li:lt(6)").css("font-size", "30px");

            // :gt(index)
            $(".ulList1 li:gt(7)").css("font-size", "40px");

            // :first
            $(".ulList li:first").css("font-size", "40px");

            // :last
            $("li:last").css("font-size", "40px");
        });
    </script>
```

### 4、属性选择器

![](http://img.smyhvae.com/20180204_2155.png)

### 5、筛选选择器

![](http://img.smyhvae.com/20180204_2200.png)

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="jquery-1.11.1.js"></script>
    <script>
        jQuery(function () {
            var jqul = $("ul");

            //find(selector); 从jquery对象的后代中查找
            //必须制定参数，如果不指定获取不到元素。length === 0
            jqul.find("li").css("background", "pink");
            console.log(jqul.find());

            //chidlren(selector); 从jquery对象的子代中查找
            //不写参数代表获取所有子元素。
            jqul.children("li").css("background", "green");

            //eq(索引值); 从jquery对象的子代中查找该索引值的元素
            //要写该数组中的第几个。
            jqul.children().eq(0).css("background", "red");

            //next(); 该元素的下一个兄弟元素
            jqul.children().eq(0).next().css("background", "yellow");

            //siblings(selector); 该元素的所有兄弟元素
            jqul.children().eq(0).next().siblings().css("border", "1px solid blue");

            //parent(); 该元素的父元素（和定位没有关系）
            console.log(jqul.children().eq(0).parent());
        });
    </script>
</head>
<body>

<ul>
    <li>生命壹号，永不止步</li>
    <li class="box">生命壹号，永不止步</li>
    <span>生命壹号，永不止步</span>
    <li class="box">生命壹号，永不止步</li>
    <i>生命壹号，永不止步</i>
    <li>生命壹号，永不止步</li>
    <a id="box" href="#">生命壹号，永不止步</a>
    <ol>
        <li>我是ol中的li</li>
        <li>我是ol中的li</li>
        <li>我是ol中的li</li>
        <li>我是ol中的li</li>
    </ol>
</ul>

</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180204_2203.png)


## 举例

### 举例1：鼠标悬停时，弹出下拉菜单【重要】

完整版代码：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }

        ul {
            list-style: none;
        }

        .wrap {
            width: 330px;
            height: 30px;
            margin: 100px auto 0;
            padding-left: 10px;
            background-color: pink;
        }

        .wrap li {
            background-color: yellowgreen;
        }

        .wrap > ul > li {
            float: left;
            margin-right: 10px;
            position: relative;
        }

        .wrap a {
            display: block;
            height: 30px;
            width: 100px;
            text-decoration: none;
            color: #000;
            line-height: 30px;
            text-align: center;
        }

        .wrap li ul {
            position: absolute;
            top: 30px;
            display: none;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        //入口函数
        $(document).ready(function () {
            //需求：鼠标放入一级li中，让他里面的ul显示。移开隐藏。
            var jqli = $(".wrap>ul>li");

            //绑定事件
            jqli.mouseenter(function () {
                //这个位置用到了this.
                // console.log(this);  //打印结果是js中的dom对象。注意：jquery对象绑定的事件中，this指js中的dom对象。【重要】

                //让this中的ul显示出来。
//                原生 js 的做法是：this.children[1].style.display = "block";
                //把js的dom对象包装为jquery对象，然后用jquery方法操作
                $(this).children("ul").show();
            });

            //绑定事件：鼠标移开时，隐藏下拉菜单
            jqli.mouseleave(function () {
                $(this).children("ul").hide();
            });
        });
    </script>

</head>
<body>
<div class="wrap">
    <ul>
        <li>
            <a href="javascript:void(0);">一级菜单1</a>
            <ul>
                <li><a href="javascript:void(0);">二级菜单1</a></li>
                <li><a href="javascript:void(0);">二级菜单2</a></li>
                <li><a href="javascript:void(0);">二级菜单3</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:void(0);">一级菜单1</a>
            <ul>
                <li><a href="javascript:void(0);">二级菜单1</a></li>
                <li><a href="javascript:void(0);">二级菜单2</a></li>
                <li><a href="javascript:void(0);">二级菜单3</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:void(0);">一级菜单1</a>
            <ul>
                <li><a href="javascript:void(0);">二级菜单1</a></li>
                <li><a href="javascript:void(0);">二级菜单2</a></li>
                <li><a href="javascript:void(0);">二级菜单3</a></li>
            </ul>
        </li>
    </ul>
</div>
</body>
</html>
```


上方代码中，我们可以看到，用 jQuery来操作，是非常方便的。

实现效果如下：


![](http://img.smyhvae.com/20180205_1030.gif)


**this的用法：**

上方代码中，核心的一行代码是：

```javascript
	$(this).children("ul").show();

	$(this).children("ul").hide();
```

如果我把这行代码中的this直接写成 DOM对象：

```javascript
	jqli.children("ul").show();

	jqli.children("ul").hide();
```

产生的结果是：（不是我们期望的结果）


![](http://img.smyhvae.com/20180205_1050.gif)


两张图的对比，可以看出this的作用：谁正在调用函数，this就指的是谁。

### 举例2：鼠标悬停时变色

完整版代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {

            //需求；隔行变色；鼠标悬停时，还要变色。
            var jqli1 = $("li:odd");
            var jqli2 = $("li:even");
            jqli1.css("background", "#cccccc");
            jqli2.css("background", "white");

            //鼠标悬停时变色
            var color = "";
            $("li").mouseenter(function () {
                color = $(this).css("background");  //先把之前的颜色保存下来，鼠标离开时还原
                $(this).css("background", "green");
            });
            //鼠标离开时，恢复为原来的颜色
            $("li").mouseleave(function () {
                $(this).css("background", color);
            });
        });
    </script>
</head>
<body>

<ul>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
    <li>生命壹号，永不止步</li>
</ul>

</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180205_1100.gif)

### 举例3：突出显示

要求：鼠标悬停时，突出显示这个li，让其他的li都半透明。

用 jQuery的选择起来实现，会发现非常方便。

完整版代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }

        ul {
            list-style: none;
        }

        body {
            background: #000;
        }

        .wrap {
            margin: 100px auto 0;
            width: 630px;
            height: 394px;
            padding: 10px 0 0 10px;
            background: #000;
            overflow: hidden;
            border: 1px solid #fff;
        }

        .wrap li {
            float: left;
            margin: 0 10px 10px 0;

        }

        .wrap img {
            display: block;
            border: 0;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        jQuery(window).ready(function () {
            //需求：鼠标放入li中，其他的li半透明，当前盒子的opacity值为1
            $(".wrap").find("li").mouseenter(function () {
                //链式编程
                $(this).css("opacity", 1).siblings("li").css("opacity", 0.4);
            });

            //离开wrap的时候所有的li的全部opacity值为1；
            $(".wrap").mouseleave(function () {
                $(this).children().children("li").css("opacity", 1);
//                $(".wrap li").css("opacity",1);
            });
        });
    </script>
</head>
<body>
<div class="wrap">
    <ul>
        <li><a href="#"><img src="images/01.jpg" alt=""/></a></li>
        <li><a href="#"><img src="images/02.jpg" alt=""/></a></li>
        <li><a href="#"><img src="images/03.jpg" alt=""/></a></li>
        <li><a href="#"><img src="images/04.jpg" alt=""/></a></li>
        <li><a href="#"><img src="images/05.jpg" alt=""/></a></li>
        <li><a href="#"><img src="images/06.jpg" alt=""/></a></li>
    </ul>
</div>
</body>
</html>
```


实现的效果：

![](http://img.smyhvae.com/20180205_1118_2.gif)

注意这里的css布局里，每一个图片都用一个li来存放。设置li的父亲的宽度之后，然后将li设置为浮动，即可自适应地排列成两排。

~工程文件~：

- 2018-02-05-突出显示.rar

- 下载链接暂无


### 举例4：手风琴效果

完整版代码：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        * {padding: 0;margin: 0;}
        ul { list-style-type: none;}

        .parentWrap {
            width: 200px;
            text-align:center;

        }

        .menuGroup {
            border:1px solid #999;
            background-color:#e0ecff;
        }

        .groupTitle {
            display:block;
            height:20px;
            line-height:20px;
            font-size: 16px;
            border-bottom:1px solid #ccc;
            cursor:pointer;
        }

        .menuGroup > div {
            height: 200px;
            background-color:#fff;
            display:none;
        }

    </style>
    <script src="jquery-1.11.1.min.js"></script>
    <script>
        $(function () {
            //需求：鼠标点击span，让他下面的div显示出来。让其他的div隐藏。
            $(".parentWrap span").click(function () {
//                $(this).next().show();
//                //让其他的隐藏
//                //点击的span的父亲li，的所有的兄弟元素li，的孩子元素div全部隐藏。
//                $(this).parent("li").siblings("li").children("div").hide();
                //连式编程
                $(this).next().show().parent("li").siblings("li").find("div").hide();
            });
        })
    </script>
</head>
<body>
<ul class="parentWrap">
    <li class="menuGroup">
        <span class="groupTitle">标题1</span>
        <div>我是弹出来的div1</div>
    </li>
    <li class="menuGroup">
        <span class="groupTitle">标题2</span>
        <div>我是弹出来的div2</div>
    </li>
    <li class="menuGroup">
        <span class="groupTitle">标题3</span>
        <div>我是弹出来的div3</div>
    </li>
    <li class="menuGroup">
        <span class="groupTitle">标题4</span>
        <div>我是弹出来的div4</div>
    </li>
</ul>
</body>
</html>
```


效果：

![](http://img.smyhvae.com/20180205_1120.gif)

注意这里的 选择器的用法：parent、next

### 举例5：淘宝精品服饰广告

完整版代码：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
            font-size: 12px;
        }

        ul {
            list-style: none;
        }

        a {
            text-decoration: none;
        }

        .wrapper {
            width: 298px;
            height: 248px;
            margin: 100px auto 0;
            border: 1px solid pink;
            overflow: hidden;
        }

        #left, #center, #right {
            float: left;
        }

        #left li, #right li {
            background: url(images/lili.jpg) repeat-x;
        }

        #left li a, #right li a {
            display: block;
            width: 48px;
            height: 27px;
            border-bottom: 1px solid pink;
            line-height: 27px;
            text-align: center;
            color: black;
        }

        #left li a:hover, #right li a:hover {
            background-image: url(images/abg.gif);
        }

        #center {
            border-left: 1px solid pink;
            border-right: 1px solid pink;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        jQuery(function () {
            //需求：鼠标放入两侧的li中，让中间的ul中对应索引值的li显示出来，其他的隐藏。（右侧的li要+9）
            //左侧先绑。获取绑mouseenter
            $("#left li").mouseenter(function () {
                //显示对应索引值的中间的li
                //alert($(this).index());  获取索引值
                $("#center li").eq($(this).index()).show().siblings("li").hide();
            });

            //右侧
            $("#right li").mouseenter(function () {
                //显示对应索引值的中间的li
                //alert($(this).index());  获取索引值
                $("#center li:eq(" + ($(this).index() + 9) + ")").show().siblings("li").hide();
            });
        });
    </script>
</head>
<body>
<div class="wrapper">

    <ul id="left">
        <li><a href="#">女靴</a></li>
        <li><a href="#">雪地靴</a></li>
        <li><a href="#">冬裙</a></li>
        <li><a href="#">呢大衣</a></li>
        <li><a href="#">毛衣</a></li>
        <li><a href="#">棉服</a></li>
        <li><a href="#">女裤</a></li>
        <li><a href="#">羽绒服</a></li>
        <li><a href="#">牛仔裤</a></li>
    </ul>
    <ul id="center">
        <li><a href="#"><img src="images/女靴.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/雪地靴.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/冬裙.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/呢大衣.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/毛衣.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/棉服.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/女裤.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/羽绒服.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/牛仔裤.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/女包.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/男包.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/登山鞋.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/皮带.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/围巾.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/皮衣.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/男毛衣.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/男棉服.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/男靴.jpg" width="200" height="250"/></a></li>
    </ul>
    <ul id="right">
        <li><a href="#">女包</a></li>
        <li><a href="#">男包</a></li>
        <li><a href="#">登山鞋</a></li>
        <li><a href="#">皮带</a></li>
        <li><a href="#">围巾</a></li>
        <li><a href="#">皮衣</a></li>
        <li><a href="#">男毛衣</a></li>
        <li><a href="#">男棉服</a></li>
        <li><a href="#">男靴</a></li>
    </ul>
</div>
</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180205_1135.gif)

~工程文件~：

- [2018-02-05-淘宝精品服饰广告.rar]()

- 下载链接暂无。




## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)
---
title: 36-offset相关属性和匀速动画（含轮播图的实现）
publish: true
---

<ArticleTopAd></ArticleTopAd>




## 前言

JS动画的主要内容如下：

1、三大家族和一个事件对象：

- 三大家族：offset/scroll/client。也叫三大系列。

- 事件对象/event（事件被触动时，鼠标和键盘的状态）（通过属性控制）。

2、动画(闪现/匀速/缓动)

3、冒泡/兼容/封装

## offset 家族的组成

我们知道，JS动画的三大家族包括：offset/scroll/client。今天来讲一下offset，以及与其相关的匀速动画。

> offset的中文是：偏移，补偿，位移。

js中有一套方便的**获取元素尺寸**的办法就是offset家族。offset家族包括：

- offsetWidth

- offsetHight

- offsetLeft

- offsetTop

- offsetParent

下面分别介绍。

### 1、offsetWidth 和 offsetHight

`offsetWidth` 和 `offsetHight`：获取元素的**宽高 + padding + border**，不包括margin。如下：

- offsetWidth = width + padding + border

- offsetHeight = Height + padding + border

这两个属性，他们绑定在了所有的节点元素上。获取元素之后，只要调用这两个属性，我们就能够获取元素节点的宽和高。

举例如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 100px;
            height: 100px;
            padding: 10px;
            border: 10px solid #000;
            margin: 100px;
            background-color: pink;
        }
    </style>
</head>
<body>

<div class="box"></div>
<script>
    var div1 = document.getElementsByTagName("div")[0];

    console.log(div1.offsetHeight);          //打印结果：140（100+20+20）
    console.log(typeof div1.offsetHeight);   //打印结果：number

</script>
</body>
</html>
```

### 2、offsetParent

`offsetParent`：获取当前元素的**定位父元素**。

- 如果当前元素的父元素，**有CSS定位**（position为absolute、relative、fixed），那么 `offsetParent` 获取的是**最近的**那个父元素。

- 如果当前元素的父元素，**没有CSS定位**（position为absolute、relative、fixed），那么`offsetParent` 获取的是**body**。


举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div class="box1" style="position: absolute;">
    <div class="box2" style="position: fixed;">
        <div class="box3"></div>
    </div>
</div>
<script>

    var box3 = document.getElementsByClassName("box3")[0];

    console.log(box3.offsetParent);
</script>
</body>
</html>
```

打印结果：

![](http://img.smyhvae.com/20180202_1725.png)

### 3、offsetLeft 和 offsetTop

`offsetLeft`：当前元素相对于其**定位父元素**的水平偏移量。

`offsetTop`：当前元素相对于其**定位父元素**的垂直偏移量。

备注：从父亲的 padding 开始算起，父亲的 border 不算在内。

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box1 {
            width: 300px;
            height: 300px;
            padding: 100px;
            margin: 100px;
            position: relative;
            border: 100px solid #000;
            background-color: pink;
        }

        .box2 {
            width: 100px;
            height: 100px;
            background-color: red;
            /*position: absolute;*/
            /*left: 10px;*/
            /*top: 10px;*/
        }
    </style>
</head>
<body>
<div class="box1">
    <div class="box2" style="left: 10px"></div>
</div>

<script>

    var box2 = document.getElementsByClassName("box2")[0];

    //offsetTop和offsetLeft
    console.log(box2.offsetLeft);  //100
    console.log(box2.style.left);  //10px


</script>

</body>
</html>
```

在父盒子有定位的情况下，offsetLeft == style.left(去掉px之后)。注意，后者只识别行内样式。但区别不仅仅于此，下面会讲。

### offsetLeft 和 style.left 区别

（1）最大区别在于：

offsetLeft 可以返回无定位父元素的偏移量。如果父元素中都没有定位，则body为准。

style.left 只能获取行内样式，如果父元素中都没有设置定位，则返回""（意思是，返回空字符串）;

（2）offsetTop 返回的是数字，而 style.top 返回的是字符串，而且还带有单位：px。

比如：

```javascript

div.offsetLeft = 100;
div.style.left = "100px";

```

（3）offsetLeft 和 offsetTop **只读**，而 style.left 和 style.top 可读写（只读是获取值，可写是修改值）


总结：我们一般的做法是：**用offsetLeft 和 offsetTop 获取值，用style.left 和 style.top 赋值**（比较方便）。理由如下：

- style.left：只能获取行内式，获取的值可能为空，容易出现NaN。

- offsetLeft：获取值特别方便，而且是现成的number，方便计算。它是只读的，不能赋值。


## 动画的种类

- 闪现（基本不用）

- 匀速（本文重点）

- 缓动（后续重点）

简单举例如下：（每间隔500ms，向右移动盒子100px）

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
            position: absolute;
        }
    </style>
</head>
<body>
<button>动画</button>
<div class="box" style="left: 0px"></div>

<script>
    var btn = document.getElementsByTagName("button")[0];
    var div = document.getElementsByTagName("div")[0];

    //1、闪动
    //    btn.onclick = function () {
    //        div.style.left = "500px";
    //    }

    //2、匀速运动
    btn.onclick = function () {
        //定时器，每隔一定的时间向右走一些
        setInterval(function () {
            console.log(parseInt(div.style.left));
            //动画原理： 盒子未来的位置 = 盒子现在的位置 + 步长；
            //方法1：用offsetLeft获取值，用style.left赋值。
            div.style.left = div.offsetLeft + 100 + 'px';

            // 方法2：必须一开始就在DOM节点上添加 style="left: 0px;"属性，才能用方法2。否则， div.style.left 的值为 NaN
            // div.style.left = parseInt(div.style.left)+100+"px";  //方法2：
        }, 500);
    };
</script>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180202_1840.gif)

## 匀速动画的封装：每间隔30ms，移动盒子10px【重要】

代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box1 {
            margin: 0;
            padding: 5px;
            height: 300px;
            background-color: #ddd;
            position: relative;
        }

        button {
            margin: 5px;
        }

        .box2 {
            width: 100px;
            height: 100px;
            background-color: red;
            position: absolute;
            left: 195px;
            top: 40px;
        }

        .box3 {
            width: 100px;
            height: 100px;
            background-color: yellow;
            position: absolute;
            left: 0;
            top: 150px;
        }
    </style>
</head>
<body>
<div class="box1">
    <button>运动到 left = 200px</button>
    <button>运动到 left = 400px</button>
    <div class="box2"></div>
    <div class="box3"></div>
</div>

<script>
    var btnArr = document.getElementsByTagName("button");
    var box2 = document.getElementsByClassName("box2")[0];
    var box3 = document.getElementsByClassName("box3")[0];

    //绑定事件
    btnArr[0].onclick = function () {
        //如果有一天我们要传递另外一个盒子，那么我们的方法就不好用了
        //所以我们要增加第二个参数，被移动的盒子本身。
        animate(box2, 200);
        animate(box3, 200);
    }

    btnArr[1].onclick = function () {
        animate(box2, 400);
        animate(box3, 400);
    }

    //【重要】方法的封装：每间隔30ms，将盒子向右移动10px
    function animate(ele, target) {
        //要用定时器，先清除定时器
        //一个盒子只能有一个定时器，这样的话，不会和其他盒子出现定时器冲突
        //我们可以把定时器本身，当成为盒子的一个属性
        clearInterval(ele.timer);
        //我们要求盒子既能向前又能向后，那么我们的步长就得有正有负
        //目标值如果大于当前值取正，目标值如果小于当前值取负
        var speed = target > ele.offsetLeft ? 10 : -10;  //speed指的是步长
        ele.timer = setInterval(function () {
            //在执行之前就获取当前值和目标值之差
            var val = target - ele.offsetLeft;
            ele.style.left = ele.offsetLeft + speed + "px";
            //移动的过程中，如果目标值和当前值之差如果小于步长，那么就不能在前进了
            //因为步长有正有负，所有转换成绝对值来比较
            if (Math.abs(val) < Math.abs(speed)) {
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        }, 30)
    }
</script>
</body>
</html>
```

实现的效果：

![](http://img.smyhvae.com/20180202_1910.gif)

上方代码中的方法封装，可以作为一个模板步骤，要记住。其实，这个封装的方法，写成下面这样，会更严谨，更容易理解：（将if语句进行了改进）

```javascript
    //【重要】方法的封装：每间隔30ms，将盒子向右移动10px
    function animate(ele, target) {
        //要用定时器，先清除定时器
        //一个盒子只能有一个定时器，这样的话，不会和其他盒子出现定时器冲突
        //我们可以把定时器本身，当成为盒子的一个属性
        clearInterval(ele.timer);
        //我们要求盒子既能向前又能向后，那么我们的步长就得有正有负
        //目标值如果大于当前值取正，目标值如果小于当前值取负
        var speed = target > ele.offsetLeft ? 10 : -10;  //speed指的是步长
        ele.timer = setInterval(function () {
            //在执行之前就获取当前值和目标值之差
            var val = target - ele.offsetLeft;

            //移动的过程中，如果目标值和当前值之差如果小于步长，那么就不能在前进了
            //因为步长有正有负，所有转换成绝对值来比较
            if (Math.abs(val) < Math.abs(speed)) {  //如果val小于步长，则直接到达目的地；否则，每次移动一个步长
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            } else {
                ele.style.left = ele.offsetLeft + speed + "px";
            }
        }, 30)
    }
```

## 代码举例：轮播图的实现

完整版代码如下：（注释已经比较详细）

```html
<!doctype html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>无标题文档</title>
    <style type="text/css">
        * {
            padding: 0;
            margin: 0;
            list-style: none;
            border: 0;
        }

        .all {
            width: 500px;
            height: 200px;
            padding: 7px;
            border: 1px solid #ccc;
            margin: 100px auto;
            position: relative;
        }

        .screen {
            width: 500px;
            height: 200px;
            overflow: hidden;
            position: relative;
        }

        .screen li {
            width: 500px;
            height: 200px;
            overflow: hidden;
            float: left;
        }

        .screen ul {
            position: absolute;
            left: 0;
            top: 0px;
            width: 3000px;
        }

        .all ol {
            position: absolute;
            right: 10px;
            bottom: 10px;
            line-height: 20px;
            text-align: center;
        }

        .all ol li {
            float: left;
            width: 20px;
            height: 20px;
            background: #fff;
            border: 1px solid #ccc;
            margin-left: 10px;
            cursor: pointer;
        }

        .all ol li.current {
            background: yellow;
        }

        #arr {
            display: none;
        }

        #arr span {
            width: 40px;
            height: 40px;
            position: absolute;
            left: 5px;
            top: 50%;
            margin-top: -20px;
            background: #000;
            cursor: pointer;
            line-height: 40px;
            text-align: center;
            font-weight: bold;
            font-family: '黑体';
            font-size: 30px;
            color: #fff;
            opacity: 0.3;
            border: 1px solid #fff;
        }

        #arr #right {
            right: 5px;
            left: auto;
        }
    </style>

    <script>
        window.onload = function () {

            //需求：无缝滚动。
            //思路：赋值第一张图片放到ul的最后，然后当图片切换到第五张的时候
            //     直接切换第六章，再次从第一张切换到第二张的时候先瞬间切换到
            //     第一张图片，然后滑动到第二张
            //步骤：
            //1.获取事件源及相关元素。（老三步）
            //2.复制第一张图片所在的li,添加到ul的最后面。
            //3.给ol中添加li，ul中的个数-1个，并点亮第一个按钮。
            //4.鼠标放到ol的li上切换图片
            //5.添加定时器
            //6.左右切换图片（鼠标放上去隐藏，移开显示）


            //1.获取事件源及相关元素。（老三步）
            var all = document.getElementById("all");
            var screen = all.firstElementChild || all.firstChild;
            var imgWidth = screen.offsetWidth;
            var ul = screen.firstElementChild || screen.firstChild;
            var ol = screen.children[1];
            var div = screen.lastElementChild || screen.lastChild;
            var spanArr = div.children;

            //2.复制第一张图片所在的li,添加到ul的最后面。
            var ulNewLi = ul.children[0].cloneNode(true);
            ul.appendChild(ulNewLi);
            //3.给ol中添加li，ul中的个数-1个，并点亮第一个按钮。
            for (var i = 0; i < ul.children.length - 1; i++) {
                var olNewLi = document.createElement("li");
                olNewLi.innerHTML = i + 1;
                ol.appendChild(olNewLi)
            }
            var olLiArr = ol.children;
            olLiArr[0].className = "current";

            //4.鼠标放到ol的li上切换图片
            for (var i = 0; i < olLiArr.length; i++) {
                //自定义属性，把索引值绑定到元素的index属性上
                olLiArr[i].index = i;
                olLiArr[i].onmouseover = function () {
                    //排他思想
                    for (var j = 0; j < olLiArr.length; j++) {
                        olLiArr[j].className = "";
                    }
                    this.className = "current";
                    //鼠标放到小的方块上的时候索引值和key以及square同步
//                    key = this.index;
//                    square = this.index;
                    key = square = this.index;
                    //移动盒子
                    animate(ul, -this.index * imgWidth);
                }
            }

            //5.添加定时器
            var timer = setInterval(autoPlay, 1000);

            //固定向右切换图片
            //两个定时器（一个记录图片，一个记录小方块）
            var key = 0;
            var square = 0;

            function autoPlay() {
                //通过控制key的自增来模拟图片的索引值，然后移动ul
                key++;
                if (key > olLiArr.length) {
                    //图片已经滑动到最后一张，接下来，跳转到第一张，然后在滑动到第二张
                    ul.style.left = 0;
                    key = 1;
                }
                animate(ul, -key * imgWidth);
                //通过控制square的自增来模拟小方块的索引值，然后点亮盒子
                //排他思想做小方块
                square++;
                if (square > olLiArr.length - 1) {//索引值不能大于等于5，如果等于5，立刻变为0；
                    square = 0;
                }
                for (var i = 0; i < olLiArr.length; i++) {
                    olLiArr[i].className = "";
                }
                olLiArr[square].className = "current";
            }

            //鼠标放上去清除定时器，移开后在开启定时器
            all.onmouseover = function () {
                div.style.display = "block";
                clearInterval(timer);
            }
            all.onmouseout = function () {
                div.style.display = "none";
                timer = setInterval(autoPlay, 1000);
            }

            //6.左右切换图片（鼠标放上去显示，移开隐藏）
            spanArr[0].onclick = function () {
                //通过控制key的自增来模拟图片的索引值，然后移动ul
                key--;
                if (key < 0) {
                    //先移动到最后一张，然后key的值取之前一张的索引值，然后在向前移动
                    ul.style.left = -imgWidth * (olLiArr.length) + "px";
                    key = olLiArr.length - 1;
                }
                animate(ul, -key * imgWidth);
                //通过控制square的自增来模拟小方块的索引值，然后点亮盒子
                //排他思想做小方块
                square--;
                if (square < 0) {//索引值不能大于等于5，如果等于5，立刻变为0；
                    square = olLiArr.length - 1;
                }
                for (var i = 0; i < olLiArr.length; i++) {
                    olLiArr[i].className = "";
                }
                olLiArr[square].className = "current";
            }
            spanArr[1].onclick = function () {
                //右侧的和定时器一模一样
                autoPlay();
            }


            function animate(ele, target) {
                clearInterval(ele.timer);
                var speed = target > ele.offsetLeft ? 10 : -10;
                ele.timer = setInterval(function () {
                    var val = target - ele.offsetLeft;
                    ele.style.left = ele.offsetLeft + speed + "px";

                    if (Math.abs(val) < Math.abs(speed)) {
                        ele.style.left = target + "px";
                        clearInterval(ele.timer);
                    }
                }, 10)
            }
        }
    </script>
</head>

<body>
<div class="all" id='all'>
    <div class="screen" id="screen">
        <ul id="ul">
            <li><img src="images/1.jpg" width="500" height="200"/></li>
            <li><img src="images/2.jpg" width="500" height="200"/></li>
            <li><img src="images/3.jpg" width="500" height="200"/></li>
            <li><img src="images/4.jpg" width="500" height="200"/></li>
            <li><img src="images/5.jpg" width="500" height="200"/></li>
        </ul>
        <ol>

        </ol>
        <div id="arr">
            <span id="left"><</span>
            <span id="right">></span>
        </div>
    </div>
</div>
</body>
</html>


```

实现效果：

![](http://img.smyhvae.com/20180202_2020.gif)

温馨提示：动图太大，可以把<http://img.smyhvae.com/20180202_2020.gif>单独在浏览器中打开。

工程文件：[2018-02-02-JS动画实现轮播图.rar](https://github.com/qianguyihao/web-resource/blob/main/project/2018-02-02-JS%E5%8A%A8%E7%94%BB%E5%AE%9E%E7%8E%B0%E8%BD%AE%E6%92%AD%E5%9B%BE.rar)


## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)

---
publish: false
---




> 本文最初发表于[博客园](http://www.cnblogs.com/smyhvae/p/8401662.html)，并在[GitHub](https://github.com/qianguyihao/Web)上持续更新**前端的系列文章**。欢迎在GitHub上关注我，一起入门和进阶前端。

> 以下是正文。


## BOM的介绍

### JavaScript的组成

JavaScript基础分为三个部分：

- ECMAScript：JavaScript的语法标准。包括变量、表达式、运算符、函数、if语句、for语句等。

- **DOM**：文档对象模型，操作**网页上的元素**的API。比如让盒子移动、变色、轮播图等。

- **BOM**：浏览器对象模型，操作**浏览器部分功能**的API。比如让浏览器自动滚动。

### 什么是BOM

BOM：Browser Object Model，浏览器对象模型。

**BOM的结构图：**

![](http://img.smyhvae.com/20180201_2052.png)

从上图也可以看出：

- **window对象是BOM的顶层(核心)对象**，所有对象都是通过它延伸出来的，也可以称为window的子对象。

- DOM越是BOM的一部分。

**window对象：**

- **window对象是JavaScript中的顶级对象**。

- 全局变量、自定义函数也是window对象的属性和方法。

- window对象下的属性和方法调用时，可以省略window。

下面讲一下 **BOM 的常见内置方法和内置对象**。

## 弹出系统对话框

比如说，`alert(1)`是`window.alert(1)`的简写，因为它是window的子方法。

系统对话框有三种：

```javascript
	alert();	//不同浏览器中的外观是不一样的
	confirm();  //兼容不好
	prompt();	//不推荐使用

```

## 打开窗口、关闭窗口

1、打开窗口：

```
	window.open(url,target,param)
```

**参数解释：**

- url：要打开的地址。

- target：新窗口的位置。可以是：`_blank` 、`_self`、 `_parent` 父框架。

- param：新窗口的一些设置。

- 返回值：新窗口的句柄。

**param**这个参数，可以填各种各样的参数（），比如：

- name：新窗口的名称，可以为空

- features：属性控制字符串，在此控制窗口的各种属性，属性之间以逗号隔开。

- fullscreen= { yes/no/1/0 } 是否全屏，默认no

- channelmode= { yes/no/1/0 } 是否显示频道栏，默认no

- toolbar= { yes/no/1/0 } 是否显示工具条，默认no

- location= { yes/no/1/0 } 是否显示地址栏，默认no。（有的浏览器不一定支持）

- directories = { yes/no/1/0 } 是否显示转向按钮，默认no

- status= { yes/no/1/0 } 是否显示窗口状态条，默认no

- menubar= { yes/no/1/0 } 是否显示菜单，默认no

- scrollbars= { yes/no/1/0 } 是否显示滚动条，默认yes

- resizable= { yes/no/1/0 } 是否窗口可调整大小，默认no

- width=number 窗口宽度（像素单位）

- height=number 窗口高度（像素单位）

- top=number 窗口离屏幕顶部距离（像素单位）

- left=number 窗口离屏幕左边距离（像素单位）

各个参数之间用逗号隔开就行，但我们最好是把它们统一放到json里。

2、关闭窗口：window.close()

（1）和（2）的代码举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a href="javascript:;">点击我打开一个新的页面</a>
<a href="javascript:;">点击我关闭本页面</a>
<script>
    //新窗口 = window.open(地址,是否开新窗口,新窗口的各种参数);
    var a1 = document.getElementsByTagName("a")[0];
    var a2 = document.getElementsByTagName("a")[1];
    a1.onclick = function () {
//举例1： window.open("http://www.jx.com","_blank");
        var json = {
            "name": "helloworld",
            "fullscreen": "no",
            "location": "no",
            "width": "100px",
            "height": "100px",
            "top": "100px",
            "left": "100px"
        };
        window.open("http://www.baidu.com", "_blank", json); //举例2
    }

    //关闭本页面
    a2.onclick = function () {
        window.close();
    }
</script>
</body>
</html>
```

3、新窗口相关：

- 新窗口.moveTo(5,5)

- 新窗口.moveBy()

- 新窗口.resizeTo()

- window.resizeBy()

代码举例：

```javascript
        var newWin = window.open("demo.html", "_blank", json);
        newWin.moveTo(500, 500);
```


## location对象

`window.location`可以简写成location。location相当于浏览器地址栏，可以将url解析成独立的片段。

### location对象的属性

- **href**：跳转

- hash   返回url中#后面的内容，包含#

- host    主机名，包括端口

- hostname   主机名

- pathname     url中的路径部分

- protocol    协议 一般是http、https

- search	     查询字符串

**location.href属性举例**：

**举例1：**点击盒子时，进行跳转。

```html
<body>
<div>smyhvae</div>
<script>

    var div = document.getElementsByTagName("div")[0];

    div.onclick = function () {
        location.href = "http://www.baidu.com";   //点击div时，跳转到指定链接
 //     window.open("http://www.baidu.com","_blank");  //方式二
    }

</script>
</body>
```

**举例2：5秒后自动跳转到百度**。

有时候，当我们访问一个不存在的网页时，会提示5秒后自动跳转到指定页面，此时就可以用到location。举例：

```html
<script>

    setTimeout(function () {
        location.href = "http://www.baidu.com";
    }, 5000);
</script>
```


### location对象的方法

- location.assign()：改变浏览器地址栏的地址，并记录到历史中

设置location.href  就会调用assign()。一般使用location.href 进行页面之间的跳转。

- location.replace()：替换浏览器地址栏的地址，不会记录到历史中

- location.reload()：重新加载


## navigator对象

window.navigator 的一些属性可以获取客户端的一些信息。

- userAgent：系统，浏览器)

- platform：浏览器支持的系统，win/mac/linux

举例：

```javascript
    console.log(navigator.userAgent);
    console.log(navigator.platform);
```

效果如下：

![](http://img.smyhvae.com/20180201_2140.png)



---
title: 48-jQuery的事件机制和其他知识
publish: true
---

<ArticleTopAd></ArticleTopAd>




## jQuery 设置宽度和高度

宽度操作：

```javascript
	$(selector).height();     //不带参数表示获取高度
	$(selector).height(200);  //带参数表示设置高度
```


宽度操作：


```javascript
	$(selector).width();     //不带参数表示获取宽度
	$(selector).width(200);  //带参数表示设置高宽度
```

**问题**：jQuery的css()获取高度，和jQuery的height获取高度，二者的区别？

答案：


```javascript
	$("div").css();     //返回的是string类型，例如：30px

	$("div").height();  //返回得失number类型，例如：30。常用于数学计算。
```

如上方代码所示，`$("div").height();`返回的是number类型，常用于数学计算。


## jQuery 的坐标操作

### offset()方法


```javascript
	$(selector).offset();
	$(selector).offset({left:100, top: 150});
```

作用：获取或设置元素相对于 document 文档的位置。参数解释：

- 无参数：表示获取。返回值为：{left:num, top:num}。返回值是相对于document的位置。

- 有参数：表示设置。参数建议使用 number 数值类型。

注意：设置offset后，如果元素没有定位(默认值：static)，则被修改为relative。

### position()方法

```javascript
	$(selector).position();
```

作用：获取相对于其最近的**带有定位**的父元素的位置。返回值为对象：`{left:num, top:num}`。

注意：只能获取，不能设置。

### scrollTop()方法

```javascript
	scrollTop();
	$(selector).scrollTop(100);
```

作用：获取或者设置元素被卷去的头部的距离。参数解释：

- 无参数：表示获取偏移。

- 有参数：表示设置偏移，参数为数值类型。


### scrollLeft()方法

```javascript
	scrollLeft();
	$(selector).scrollLeft(100);
```

作用：获取或者设置元素水平方向滚动的位置。参数解释：

- 无参数：表示获取偏移。

- 有参数：表示设置偏移，参数为数值类型。

代码示范：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        body {
            height: 5000px;
        }

        .box1 {
            width: 300px;
            height: 300px;
            position: relative;
            margin: 10px;
            overflow: auto;
            background-color: pink;
        }

        .box2 {
            width: 200px;
            height: 400px;
            position: absolute;
            top: 50px;
            left: 50px;
            background-color: yellow;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            //距离页面最顶端或者最左侧的距离和有没有定位没有关系
            $("button").eq(0).click(function () {
                alert($(".box2").offset().top);
            })

            //距离页面最顶端或者最左侧的距离和有没有定位没有关系
            $("button").eq(1).click(function () {
                $(".box2").offset({"left": 1000, "top": 1000});
            })

            //距离父系盒子中带有定位的盒子的距离(获取的就是定位值，和margin/padding无关)
            $("button").eq(2).click(function () {
                alert($(".box2").position().top);
            })

            //距离父系盒子中带有定位的盒子的距离(获取的就是定位值，和margin/padding无关)
            $("button").eq(3).click(function () {
                $(".box2").position().top = "100px";
            })

            //获取被选取的头部
            $("button").eq(4).click(function () {
                alert($(window).scrollTop());
            })

            //获取被选取的头部
            $("button").eq(5).click(function () {
                $(window).scrollTop(100);
            })

        })
    </script>

</head>
<body>


<div class="box1">
    <div class="box2"></div>
</div>

<button>offset().top获取</button>
<button>offset().top设置</button>
<button>position().top获取</button>
<button>position().top设置</button>
<button>scrollTop()</button>
<button>scrollTop()</button>

</body>
</html>
```

## jQuery的事件机制

### 常见的事件绑定

- click(handler) 				单击事件。

- blur(handler) 				失去焦点事件。

- mouseenter(handler) 		鼠标进入事件。

- mouseleave(handler)			鼠标离开事件。

- dbclick(handler) 			双击事件。

- change(handler)  改变事件，如：文本框值改变，下拉列表值改变等。

- focus(handler) 				获得焦点事件。

- keydown(handler) 			键盘按下事件。

参考链接：<http://www.w3school.com.cn/jquery/jquery_ref_events.asp>

### on方式绑定事件

最早采用的是 bind、delegate等方式绑定的。jQuery 1.7版本后，jQuery用on统一了所有的事件处理的方法，此方法兼容zepto(移动端类似于jQuery的一个库)。

格式举例：


```javascript
        $(document).on("click mouseenter", ".box", {"name": 111}, function (event) {
            console.log(event.data);      //event.data获取的就是第三个参数这个json。
            console.log(event.data.name); //event.data.name获取的是name的值。
        });
```

参数解释：

- 第一个参数：events，绑定事件的名称可以是由空格分隔的多个事件（标准事件或者自定义事件）。上方代码绑定的是单击事件和鼠标进入事件。

- 第二个参数：selector, 执行事件的后代元素。

- 第三个参数：data，传递给事件处理函数的数据，事件触发的时候通过event.data来使用（也就是说，可以通过event拿到data）

- 第四个参数：handler，事件处理函数。


简单点的写法：

```javascript
    $(document).on("click",".box", function () {
       alert(1);
    });
```

### off方式解绑事件

```javascript
    $(selector).off();      // 解绑匹配元素的所有事件

    $(selector).off("click");   // 解绑匹配元素的所有click事件

    $(selector).off( "click", "**" );   // 解绑所有代理的click事件，元素本身的事件不会被解绑
```

## jQuery的事件对象

event.data                  传递给事件处理程序的额外数据

event.currentTarget             等同于this，当前DOM对象

event.pageX                     鼠标相对于文档左部边缘的位置

event.target                    触发事件源，不一定===this

event.stopPropagation()；    阻止事件冒泡

event.preventDefault();     阻止默认行为

event.type                  事件类型：click，dbclick…

event.which                     鼠标的按键类型：左1 中2 右3

event.keyCode               键盘按键代码


代码演示：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            $(document).on("click", {}, function (event) {
                console.log(event.data);
                console.log(event.currentTarget);
                console.log(event.target);
                console.log(event.pageX);
                console.log(event.type);
                console.log(event.which);
                console.log(event.keyCode);
            });
        })
    </script>
</head>
<body>

</body>
</html>
```

上方代码中，我们通过event参数，获取了点击事件的各种event里的属性。

单击网页后，打印结果为：

![](http://img.smyhvae.com/20180205_2338.png)

**举例**：键盘上对的按键按下时，变色

这个时候就要用到event参数，因为要获取event.keyCode，才能知道按下的是键盘上的哪个按键。

代码实现：

```html
<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .wrap {
            width: 400px;
            height: 400px;
            margin: 100px auto 0;
        }

        .wrap h1 {
            text-align: center;
        }

        .wrap div {
            width: 400px;
            height: 300px;
            background: pink;
            font-size: 30px;
            text-align: center;
            line-height: 300px;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            //需求：在页面上，按键.是哪个颜色的首写字母div就改变为该颜色，然后span内容赋值。
            //步骤：
            //1.给document绑定keyup事件
            //2.获取值，根据此值，给div和span上色和内容

            var div = $("#bgChange");
            var span = $("#keyCodeSpan");

            //绑定事件
            $(document).keyup(function (e) {  //键盘弹出时，触发事件
                //调用方法
                setColor(e.keyCode);
            });


            function setColor(keyCode) {
                //alert(e.keyCode);
                //2.获取值，根据此值，给div和span上色和内容
                switch (keyCode) {
                    case 80:
                        //修改内容pink
                        setEle("pink", keyCode);
                        break;
                    case 66:
                        //修改内容blue
                        setEle("blue", keyCode);
                        break;
                    case 79:
                        //修改内容orange
                        setEle("orange", keyCode);
                        break;
                    case 82:
                        //修改内容red
                        setEle("red", keyCode);
                        break;
                    case 89:
                        //修改内容yellow
                        setEle("yellow", keyCode);
                        break;
                    default :
                        alert("系统没有设置该颜色！");
                }

                function setEle(a, b) {
                    div.css("background-color", a);
                    span.text(b);
                }

            }

            //1.给document绑定keyup事件
//            $(document).keyup(function (e) {
//                //alert(e.keyCode);
//                //2.获取值，根据此值，给div和span上色和内容
//                switch (e.keyCode){
//                    case 80:
//                        //修改内容pink
//                        div.css("background-color","pink");
//                        span.text(e.keyCode);
//                        break;
//                    case 66:
//                        //修改内容blue
//                        div.css("background-color","blue");
//                        span.text(e.keyCode);
//                        break;
//                    case 79:
//                        //修改内容orange
//                        div.css("background-color","orange");
//                        span.text(e.keyCode);
//                        break;
//                    case 82:
//                        //修改内容red
//                        div.css("background-color","red");
//                        span.text(e.keyCode);
//                        break;
//                    case 89:
//                        //修改内容yellow
//                        div.css("background-color","yellow");
//                        span.text(e.keyCode);
//                        break;
//                    default :
//                        alert("系统没有设置该颜色！");
//                }
//            });
        })
    </script>
</head>

<body>

<div class="wrap">
    <h1>按键改变颜色</h1>
    <div id="bgChange">
        keyCode为：
        <span id="keyCodeSpan">80</span>
    </div>
</div>

</body>
</html>

```


## jQuery 的两大特点

（1）**链式编程**：比如`.show()`和`.html()`可以连写成`.show().html()`。


链式编程原理：return this。

通常情况下，只有设置操作才能把链式编程延续下去。因为获取操作的时候，会返回获取到的相应的值，无法返回 this。

```javascript
    end(); // 结束当前链最近的一次过滤操作，并且返回匹配元素之前的状态。
```


（2）**隐式迭代**：隐式 对应的是 显式。隐式迭代的意思是：在方法的内部会为匹配到的所有元素进行循环遍历，执行相应的方法；而不用我们再进行循环，简化我们的操作，方便我们调用。

如果获取的是多元素的值，大部分情况下返回的是第一个元素的值。


**举例：**五角星评分

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>五角星评分案例</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        .comment {
            font-size: 40px;
            color: #ff3100;
        }

        .comment li {
            float: left;
            cursor: pointer;
        }

        ul {
            list-style: none;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            var star_none = '☆'; // 空心五角星
            var star_sel = '★'; // 实心五角星

            //需求1：鼠标放悬停时，当前的li和之前所有的li内容全部变为实心五角星，移开变为空心。
            $(".comment li").on("mouseenter", function () {
                //当前五角星，和之前的所有五角星，全部是实心的，其他的为空心

                //写法一：分两次写
//                $(this).text(star_sel).prevAll("li").text(star_sel);
//                $(this).nextAll("li").text(star_none);
                //写法二：一次性写完，但要用到end()，否则会出问题。【重要】
                $(this).text(star_sel).prevAll("li").text(star_sel).end().nextAll("li").text(star_none);
            });

            $(".comment li").on("mouseleave", function () {
                //bug：如果没有点击过li，那么会出现无法清除的现象，处理办法就是先判断，看看是否有current类
                if ($("li.current").length === 0) {
                    $(".comment li").text(star_none);
                } else {
                    //当鼠标移开的时候，谁有current类名，那么当前和之前所有的li前部是实心五角星，后面的所有li都是空心
                    $("li.current").text(star_sel).prevAll("li").text(star_sel).end().nextAll("li").text(star_none);
                }
            });


            //需求2：鼠标点击那个li，当你前li和之前所有的li都变成实心五角星，其他变为空心。
            $(".comment li").on("click", function () {
                //点击哪个li给他加一个类名。清空其他所有的li的类名
                $(this).attr("class", "current").siblings("li").removeAttr("class");
            });


        });
    </script>
</head>
<body>
<ul class="comment">
    <li>☆</li>
    <li>☆</li>
    <li>☆</li>
    <li>☆</li>
    <li>☆</li>
</ul>
</body>
</html>

```


上方代码中，注意end的用法，很巧妙。

实现效果：

![](http://img.smyhvae.com/20180206_1100.gif)

## each的用法

大部分情况下是不需要使用each方法的，因为jQuery的隐式迭代特性。

但是，如果要对每个元素做不同的处理，这时候就用到了each方法。

格式如下：


```javascript
    $(selector).each(function(index,element){});
```

参数解释：

- 参数一：表示当前元素在所有匹配元素中的索引号

- 参数二：参数二表示当前元素（是js 中的DOM对象，而不是jQuery对象）


举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        li {
            width: 100px;
            height: 100px;
            margin: 20px;
            float: left;
            list-style: none;
            text-align: center;
            font: 50px/100px "simsun";
            color: white;
            background-color: black;
        }
    </style>

    <script src="jquery-1.11.1.js"></script>
    <script>
        jQuery(function () {
            //设置每个不一样的盒子透明度逐渐递增
            $("ul li").each(function (index, element) {
                $(element).css("opacity", (index + 1) / 10);
                console.log(index+"---"+element.tagName);

            });
        });
    </script>
</head>
<body>
<ul>
    <li class="aaa1">1</li>
    <li class="aaa2">2</li>
    <li class="aaa3">3</li>
    <li class="aaa4">4</li>
    <li class="aaa5">5</li>
    <li class="aaa6">6</li>
    <li class="aaa7">7</li>
    <li class="aaa8">8</li>
    <li class="aaa9">9</li>
    <li class="aaa10">10</li>
</ul>

</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180206_1110.png)

## 多库共存

**多库共存**指的是：jQuery占用了 `$` 和 `jQuery` 这两个变量。当在同一个页面中引用了 jQuery 库以及其他的库（或者其他版本的jQuery库），恰好其他的库中也用到了 `$` 或者`jQuery`变量.那么，要保证每个库都能正常使用，就产生了多库共存的问题。

温馨提示：我们可以通过以下方式获取 jQuery 库的版本号。

```javascript
    console.log($.fn.jquery);  //打印 jQuery 库的版本号
```

**办法一**：让 jQuery 放弃对 `$` 的使用权：

```javascript
    $.noConflict();
```

效果如下：

![](http://img.smyhvae.com/20180206_1126.png)


上图中，代码中同时包含了两个版本的库。1.11.1版本放弃了对 `$` 的使用权，交给了1.8.2版本；但是1.11.1版本并没有放弃对 `jQuery`关键字的使用权。


办法二：同时放弃放弃两个符号的使用权，并定义一个新的使用权（如果有三个库时，可以这样用）

```javascript
    $.noConflict(true);   //返回值是新的关键字
```

效果如下：

![](http://img.smyhvae.com/20180206_1133.png)


## jQuery 的插件机制

jQuery 库，虽然功能强大，但也不是面面俱到。jQuery 是通过插件的方式，来扩展它的功能：

- 当你需要某个插件的时候，你可以“安装”到jQuery上面，然后使用。

- 当你不再需要这个插件，那你就可以从jQuery上“卸载”它。


### 插件之改变颜色

jQuery的自定义动画方法animate()，在执行动画时，是不支持设置背景色这个属性的。这个时候可以借助`jQuery.color.js`这个插件。


举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: blue;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script src="jquery.color.js"></script>
    <script>
        $(function () {
            //点击按钮，改变盒子的宽度和背景色
            $("button").on("click", function () {
                $("div").animate({"width": 200, "background-color": "red"}, 2000, function () {
                    alert("动画结束");
                });
            });
        })
    </script>
</head>
<body>
<button>变色</button>
<div></div>
</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180206_1400.gif)

上方代码中，因为加入了一行插件：（注意顺序是放在jQuery插件之后）

```html
    <script src="jquery.color.js"></script>
```

否则的话，在动画执行的过程中，是无法设置背景色的。


### 插件之懒加载

懒加载：当打开一个网页时，只有当我看到某个部分，再加载那个部分；而不是一下子全部加载完毕。这样可以优化打开的速度。

比如说，我可以设置一张图片为懒加载，于是，这张图片会等我宠幸到它的时候，它再打开。

代码举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            height: 3000px;
            background-color: pink;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <!--懒加载的使用。第一步：导包(必须在jquery库的下方）-->
    <script src="jquery.lazyload.js"></script>
    <script>
        $(function () {


            //第二步骤：调用懒加载的方法实现功能。参数的不同，功能也不同。
            $("img.lazy").lazyload();
        })
    </script>
</head>
<body>
<div></div>
<!--需要实现将图片设置为懒加载模式-->
<img class="lazy" data-original="images/01.jpg" width="640" height="480">
</body>
</html>
```

---
title: 49-Zepto入门
publish: true
---

<ArticleTopAd></ArticleTopAd>





## Zepto 的介绍

### 什么是 Zepto

zepto是轻量级的JavaScript库，专门为移动端定制的框架。

与jquery有着类似的API，俗称：会jquery就会用zepto



### zepto的特点

- 针对移动端

- 轻量级，压缩版本只有8kb左右

- 响应，执行快

- 语法、API大部分同jquery一样，学习难度低，上手快。

- 目前API完善的框架中体积最小的一个


### 相关网址

- 官网：<http://zeptojs.com/>

- GitHub：<https://github.com/madrobby/zepto>


## Zepto 与 jQuery 的前世今生

### 相同点

- 都是优秀的js函数库

- 语法、API大部分都一样（zepto是按照jquery的思路来设计的）

- Zepto 相当于 jQuery 的子集

- 同jQuery一样，都是以`$`符号为核心函数。


### 不同点


## Zepto 的初体验

（1）Zepto 库的下载：

我们去官网下载 Zepto的开发版本`zepto.js`：

![](http://img.smyhvae.com/20180414_2210.png)

官网里，还有这样一张图：

![](http://img.smyhvae.com/20180414_2215.png)

上图的意思是：

- 最前面打钩的那五个api，已经包含在`zepto.js `文件里了；

- 后面没有打钩的那些api，如果需要用它们，必须单独下载响应的文件。

比如说，移动端的 touch 事件是很常见的，我们可以将`touch.js`这个文件下载，稍后用。


（2）代码演示：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        #btn {
            width: 200px;
            height: 200px;
            background: pink;
            margin: 10px auto;
        }
    </style>
</head>

<body>

    <div id="btn">我是 div</div>
    <script src="libs/zepto1.2.0.js"></script>
    <script src="libs/touch.js"></script>
    <script>
        $(function () {
            $('#btn').on('touchstart', function () {
                alert('hello world');
            });
        });

    </script>
</body>

</html>
```

上方代码实现的效果是，当手在div上滑动时，就会弹出 alert窗。可以看出，这里面代码的写法和 jQuery 是一致的。

注意，我们要将浏览器切换到手机模式，才能看到`touchstart`事件的效果；否则，在浏览器上点来点去，是没有反应的。

## Zepto 和 jQuery 相同的  api

> 意思是，jQuery 和 Zepto 有哪些共同点。


###  jQuery 的主要特性

下面来讲一下 jQuery 的主要特性（jQuery 的核心函数`$`、jQuery 对象），它们对 Zepto 来说，同样适用。

**1、jQuery 的核心函数`$`**:

作为函数使用（参数）：

-  function

-  html字符串

-  DOM code

-  选择器字符串

作为对象调用(方法)：

- $.ajax() $.get() $.post()

- $.isArray()      $.each()      $.isFunction()      $.trim()

**2、jQuery 对象**：

概念：jquery核心函数$()调用返回的对象就是jquery对象的数组（可能有只有一个）。

使用列举：

- addClass()

- removeClass()

- show()

- find()

### 代码举例

1、`$.each()`方法举例：（遍历数组）

```html
    <script src="libs/zepto-1.2.0.js"></script>
    <script src="libs/zepto-1.2.0.js"></script>
    <script>
        var arr = [2, 4, 6, 8];

        $.each(arr, function (index, item) {
            console.log(index, item);
        });
    </script>

```

打印结果：

![](http://img.smyhvae.com/20180416_1145.png)

2、`append()`举例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .box1 {
            width: 200px;
            height: 200px;
            background: pink;
        }
    </style>
</head>

<body>
    <div class="box1"></div>

    <script src="libs/zepto-1.2.0.js"></script>
    <script src="libs/touch.js"></script>
    <script>
        $('.box1').on('touchstart', function () {
            $('.box1').append('<p>我是新添加的元素</p>');

        });
    </script>
</body>

</html>
```

上方代码实现的效果是：每次，当手在box1上滑动时，会在 box1 中新添加一个元素。


4、`find()`方法举例：

```javascript
        $('.box1').on('touchstart', function () {
            console.log('touch');
            $(this).find('p').css('background', 'red');
        });
```

代码解释：找到 box1 中的 p 标签， 给 p 标签设置背景色。

注意，代码里的`$(this).find()`相当于`this.find`，只不过this没有find方法，而$有find方法。



5、`show()`方法举例：

```javascript
        $(`.box1`).on('touchstart', function () {
            $('.box2').show();
        });
```

假设 box2 一开始是隐藏的，事件中，让 box2 显示出来。



---
publish: false
---




> 在看本文之前，我们可以先复习上一篇文章：《03-JavaScript基础/12-对象的创建&构造函数.md》

## 原型对象

### 原型的引入

```javascript
        function Person(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            //向对象中添加一个方法
            this.sayName = function () {
                console.log("我是" + this.name);
            }
        }

        //创建一个Person的实例
        var per = new Person("孙悟空", 18, "男");
        var per2 = new Person("猪八戒", 28, "男");
        per.sayName();
        per2.sayName();

        console.log(per.sayName == per2.sayName);  //打印结果为false
```

**分析如下**：

上方代码中，我们的sayName方法是写在构造函数 Person 内部的，然后在两个实例中进行了调用。造成的结果是，**构造函数每执行一次，就会给每个实例创建一个新的 sayName 方法**。也就是说，每个实例的sayName都是唯一的。因此，最后一行代码的打印结果为false。

按照上面这种写法，假设创建10000个对象实例，就会创建10000个 sayName 方法。这种写法肯定是不合适的。我们为何不让所有的对象共享同一个方法呢？

还有一种方式是，将sayName方法在全局作用域中定义：（不建议。原因看注释）

```javascript
        function Person(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            //向对象中添加一个方法
            this.sayName = fun;
        }

        //将sayName方法在全局作用域中定义
        /*
         * 将函数定义在全局作用域，污染了全局作用域的命名空间
         *  而且定义在全局作用域中也很不安全
         */
        function fun() {
            alert("Hello大家好，我是:" + this.name);
        };
```

比较好的方式是，在原型中添加sayName方法：

```javascript
    Person.prototype.sayName = function(){
        alert("Hello大家好，我是:"+this.name);
    };
```

这也就引入了我们本文要讲的「原型」。

### 原型prototype的概念

**认识1**：

我们所创建的每一个函数，解析器都会向函数中添加一个属性 prototype。这个属性对应着一个对象，这个对象就是我们所谓的原型对象。

如果函数作为普通函数调用prototype没有任何作用，当函数以构造函数的形式调用时，它所创建的实例对象中都会有一个隐含的属性，指向该构造函数的原型，我们可以通过__proto__来访问该属性。

代码举例：

```javascript
	// 定义构造函数
	function Person() {}

	var per1 = new Person();
	var per2 = new Person();

	console.log(Person.prototype); // 打印结果：[object object]

	console.log(per1.__proto__ == Person.prototype); // 打印结果：true
```

上方代码的最后一行：打印结果表明，`实例.__proto__` 和 `构造函数.prototype`都指的是原型对象。

**认识2**：

原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象，我们可以将对象中共有的内容，统一设置到原型对象中。

以后我们创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象中，这样就不用分别为每一个对象添加，也不会影响到全局作用域，就可以使每个对象都具有这些属性和方法了。

**认识3**：

使用 `in` 检查对象中是否含有某个属性时，如果对象中没有但是**原型中**有，也会返回true。

可以使用对象的`hasOwnProperty()`来检查**对象自身中**是否含有该属性。

### 原型链

原型对象也是对象，所以它也有原型，当我们使用或访问一个对象的属性或方法时：

- 它会先在对象自身中寻找，如果有则直接使用；

- 如果没有则会去原型对象中寻找，如果找到则直接使用；

- 如果没有则去原型的原型中寻找，直到找到Object对象的原型。

- Object对象的原型没有原型，如果在Object原型中依然没有找到，则返回 null

### 总结

第一次接触「原型」和「原型链」的时候，会比较难理解。多接触几次，再回过头来看，就慢慢熟悉了。

## 对象的 toString() 方法

我们先来看下面这段代码：

```javascript
	function Person(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
	}

	var per1 = new Person("vae", 26, "男");

	console.log("per1 = " + per1);
	console.log("per1 = " + per1.toString());
```

打印结果：

```
per1 = [object Object]
per1 = [object Object]
```

上面的代码中，我们尝试打印实例 per1 的内部信息，但是发现，无论是打印 `per1` 还是打印 `per1.toString()`，结果都是`object`，这是为啥呢？分析如下：

- 当我们直接在页面中打印一个对象时，其实是输出了对象的toString()方法的返回值。

- 如果我们希望在打印对象时，不输出[object Object]，可以手动为对象添加一个toString()方法。意思是，重写 toString() 方法。

重写 toString() 方法，具体做法如下：

```javascript
	function Person(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
	}

	//方式一：重写 Person 原型的toString方法。针对 Person 的所有实例生效
	Person.prototype.toString = function() {
		return (
		  "Person[name=" +
		  this.name +
		  ",age=" +
		  this.age +
		  ",gender=" +
		  this.gender +
		  "]"
		);
	};

	// 方式二：仅重写实例 per1 的 toString方法。但是这种写法，只对 per1 生效， 对 per2 无效
	/*
	per1.toString = function() {
		return (
		  "Person[name=" +
		  this.name +
		  ",age=" +
		  this.age +
		  ",gender=" +
		  this.gender +
		  "]"
		);
	};
	*/

	var per1 = new Person("smyh", 26, "男");

	var per2 = new Person("vae", 30, "男");

	console.log("per1 = " + per1);
	console.log("per2 = " + per2.toString());
```

打印结果：

```javascript
per1 = Person[name=smyh,age=26,gender=男]
per2 = Person[name=vae,age=30,gender=男]
```

代码分析：

上面的代码中，仔细看注释。我们重写了 Person 原型的 toString()，这样的话，可以保证对 Person 的所有实例生效。

从这个例子，我们可以看出 `prototype` 的作用。

## JS的垃圾回收（GC）机制

程序运行过程中会产生垃圾，这些垃圾积攒过多以后，会导致程序运行的速度过慢。所以我们需要一个垃圾回收的机制，来处理程序运行过程中产生垃圾。

当一个对象没有任何的变量或属性对它进行引用时，此时我们将永远无法操作该对象，此时这种对象就是一个垃圾，这种对象过多会占用大量的内存空间，导致程序运行变慢，所以这种垃圾必须进行清理。

上面这句话，也可以这样理解：如果堆内存中的对象，没有任何变量指向它时，这个堆内存里的对象就会成为垃圾。

JS拥有自动的垃圾回收机制，会自动将这些垃圾对象从内存中销毁。我们不需要也不能进行垃圾回收的操作。我们仅仅需要做的是：如果你不再使用该对象，那么，将改对象的引用设置为 null 即可。


## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)

---
title: 01-var、let、const的区别
publish: true
---

<ArticleTopAd></ArticleTopAd>




## var、let、const 的区别

### 1、var 声明的变量会挂载在 window 对象上，而 let 和 const 声明的变量不会

举例：

```js
var a = '我是a';
console.log(a); // 打印结果：我是a
console.log(window.a); // 打印结果：我是a
```

```js
let b = '我是b';
console.log(b); // 打印结果：我是b
console.log(window.b); // 打印结果：undefined
```

```js
let c = '我是c';
console.log(c); // 打印结果：我是c
console.log(window.b); // 打印结果：undefined
```

var 的这一特性，会造成 window 全局变量的污染。举例如下：

```js
var innerHeight = 100;
console.log(window.innerHeight); // 打印结果：永远都是100  ==> 会覆盖 window 自带的 innerHeight 属性
```

### 2、var 声明的变量存在变量提升，let 和 const 声明的变量不存在变量提升

举例：(先使用，再声明)

```js
console.log(a); // 打印结果：undefined ==> a已经声明但没有赋值
var a = '我是a';
```

```js
console.log(b); // 报错：Uncaught ReferenceError: Cannot access 'b' before initialization ==> 找不到b这个变量
let b = '我是b';
```

```js
console.log(c); // 报错：Uncaught ReferenceError: Cannot access 'c' before initialization ==> 找不到c这个变量
const c = '我是c';
```

### 3、var 声明不存在块级作用域，let 和 const 声明存在块级作用域

举例：

```js
{
    var a = '我是a';
    let b = '我是b';
    const c = '我是c';
}

console.log(a); // 我是a
console.log(b); // 报错：Uncaught ReferenceError: b is not defined ==> 找不到b这个变量
console.log(c); // 报错：Uncaught ReferenceError: c is not defined ==> 找不到c这个变量
```

报错是因为找不到 b 和 c 这两个变量。

### 4、同一作用域下，var 可以重复声明变量，let 和 const 不能重复声明变量

```js
var a = '我是a';
var a = 'qianguyihao';
console.log(a); // 打印结果：qianguyihao
```

```js
let b = '我是b';
let b = 'qianguyihao';
console.log(b); //报错：Uncaught SyntaxError: Identifier 'b' has already been declared  ==> 变量 b 已经被声明了
```

```js
const c = '我是c';
const c = 'qianguyihao';
console.log(c); //报错：Uncaught SyntaxError: Identifier 'c' has already been declared  ==> 变量 c 已经被声明了
```

备注：通过第3、第4点可以看出：使用 let/const 声明的变量，不会造成全局污染。



### 5、let 和 const 的暂时性死区（DTC）

**举例 1**：（表现正常）

```js
const name = 'qianguyihao';

function foo() {
    console.log(name);
}

foo(); // 执行函数后，打印结果：smyhvae
```

上方例子中， 变量 name 被声明在函数外部，此时函数内部可以直接使用。

**举例 2**：（报错）

```js
const name = 'qianguyihao';

function foo() {
    console.log(name);
    const name = 'hello';
}

foo(); // 执行函数后，控制台报错：Uncaught ReferenceError: Cannot access 'name' before initialization
```

代码解释：如果在当前块级作用域中使用了变量 name，并且当前块级作用域中通过 let/const 声明了这个变量，那么，**声明语句必须放在使用之前，也就是所谓的 DTC（暂时性死区）**。DTC 其实是一种保护机制，可以让我们养成良好的编程习惯。

关于”暂时性死区“的更多介绍，详本项目的另一篇文章《JavaScript之ES6语法：变量let、const和块级作用域.md》。


### 6、const：一旦声明必须赋值；声明后不能再修改

一旦声明必须赋值：

```js
const a;
console.log(a); // 报错：Uncaught SyntaxError: Missing initializer in const declaration
```

### 总结

基于上面的种种区别，我们可以知道：var 声明的变量，很容易造成全局污染。以后我们尽量使用 let 和 const 声明变量吧。





## const 常量到底能不能被修改

我们知道：用 const 声明的变量无法被修改。但还有一点，我们一定要记住：

-   如果用 const 声明基本数据类型，则无法被修改；

-   如果用 const 声明引用数据类型（即“对象”），这里的“无法被修改”指的是**不能改变内存地址的引用**；但对象里的内容是可以被修改的。

举例 1：（不能修改）

```js
const name = 'qianguyihao';
name = 'vae'; // 因为无法被修改，所以报错：Uncaught TypeError: Assignment to constant variable
```

举例 2：（不能修改）

```js
const obj = {
    name: 'qianguyihao',
    age: 28,
};

obj = { name: 'vae' }; // 因为无法被修改，所以报错：Uncaught TypeError: Assignment to constant variable
```

举例 3：（可以修改）

```js
const obj = {
    name: 'qianguyihao',
    age: 28,
};
obj.name = 'vae'; // 对象里的 name 属性可以被修改
```

因为 变量名 obj 是保存在**栈内存**中的，它代表的是对象的引用地址，它是基本数据类型，无法被修改。但是 obj 里面的内容是保存在**堆内存**中的，它是引用数据类型，可以被修改。

**总结**：用 const 声明的常量，它所声明的


## 传值和传址的区别

详见《JavaScript基础/对象简介.md》。

## for 循环的经典案例

详见《JavaScript之ES6语法：变量let、const和块级作用域.md》。

## 参考链接

-   [JS 中 var、let、const 区别](https://juejin.im/post/5e49249be51d4526e651b654)
---
publish: false
---

## 常见概念

-   构造函数

-   构造函数-扩展

-   原型规则和示例

-   原型链

-   instanceof

## 构造函数

任何一个函数都可以被 new，new 了之后，就成了构造方法。

如下：

```javascript
function Foo(name, age) {
    this.name = name;
    this.age = age;
    //retrun this;   //默认有这一行。new一个构造函数，返回一个对象
}

var fn1 = new Foo('smyhvae', 26);
var fn2 = new Foo('vae', 30); //new 多个实例对象
```

与普通函数相比，构造函数有以下明显特点：

-   用 new 关键字调用。

-   不需要用 return 显式返回值的，默认会返回 this，也就是新的实例对象。

-   建议函数名的首字母大写，与普通函数区分开。

参考链接：

-   [JavaScript 中的普通函数与构造函数](http://www.cnblogs.com/SheilaSun/p/4398881.html)

当 new 之后，this 会先变成一个空对象，然后通过`this.name = name`来赋值。

### 构造函数的扩展

![](http://img.smyhvae.com/20180306_1633.png)

上图中发现，数组、对象、函数也有构造函数，它们的构造函数是 Array、Object、function。实际开发中，都推荐前面的书写方式。

## 原型规则

原型规则是学习原型链的基础。原型规则有五条，下面来讲解。

### 规则 1

所有的引用类型（数组、对象、函数），都具有对象特性，都可以**自由扩展属性**。null 除外。

举例：

![](http://img.smyhvae.com/20180306_1651.png)

### 规则 2

所有的**引用类型**（数组、对象、函数），都有一个`_proto_`属性，属性值是一个**普通的对象**。`_proto_`的含义是隐式原型。

![](http://img.smyhvae.com/20180306_1656.png)

其实，规则 2 是规则 1 的特例，只不过，js 语法帮我们自动加了 规则 2。

### 规则三

所有的**函数**（不包括数组、对象），都有一个`prototype`属性，属性值是一个**普通的对象**。`prototype`的含义是**显式原型**。（实例没有这个属性）

![](http://img.smyhvae.com/20180306_1659.png)

### 规则四

所有的**引用类型**（数组、对象、函数），`_proto_`属性指向它的**构造函数**的`prototype`值。

![](http://img.smyhvae.com/20180306_1701.png)

总结：以上四条，要先理解清楚，然后再来看下面的第五条。

### 规则五

当试图获取一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的`_proto_`中寻找（即它的构造函数的`prototype`）。

`举例代码1`：

```javascript
//创建方法
function Foo(name) {
    this.name = name;
}

Foo.prototype.alertName = function () {
    // 既然 Foo.prototype 是普通的对象，那也允许给它添加额外的属性 alertName
    console.log(this.name);
};

var fn = new Foo('smyhvae');
fn.printName = function () {
    console.log(this.name);
};

// 测试
fn.printName(); //输出结果：smyhvae
fn.alertName(); //输出结果：smyhvae
```

上方代码中，虽然 alertName 不是 fn 自身的属性，但是会从它的构造函数的`prototype`里面找。

**扩展：**遍历循环对象自身的属性

我们知道，`for in`循环可以遍历对象。针对上面的那个 fn 对象，它自身有两个属性：`name`、`printName`，另外从原型中找到了第三个属性`alertName`。现在，如果我们对 fn 进行遍历，能遍历到两个属性还是三个属性呢？

答案：两个。因为，**高级浏览器中已经在 `for in`循环中屏蔽了来自原型的属性。但是，为了保证代码的健壮性，我们最好自己加上判断**，手动将第三个属性屏蔽掉：

```javascript
for (var item in fn) {
    if (fn.hasOwnProperty(item)) {
        console.log(item);
    }
}
```

## 原型链

还是拿上面的`举例代码1`举例，如果此时在最后面加一行代码：

```
	fn.toString();   //去 fn._proto_._proto_ 中查找 toString()方法
```

上面的代码中，fn 直接调用了 toString()方法，这是因为它通过**原型链**，去`_proto_`的`_proto_`里找到了`Object`，而`Object`是由`toString()`方法的。

### instanceof

格式：

```javascript
对象 instanceof 构造函数;
```

`instanceof`的作用：用于判断**引用类型**属于哪个**构造函数**。

例 1：判断一个变量是否为数组： `变量 instanceof Array`

例 2：

```javascript
function Person() {}

//p--->Person.prototype--->Object.prototype--->null
var p = new Person();
//构造函数的**原型**是否在 p 对象的原型链上！
console.log(p instanceof Person);
```

例 3：

```javascript
fn instanceof Foo;
```

上面这句话，判断逻辑是：**fn 的`_proto_`一层一层往上找，看能否对应到 Foo.prototype**。

原型链如下：（重要）

![](http://img.smyhvae.com/20180306_1853.png)

注意，Object 这个构造方法的显式原型是 null，这是一个特例。

issues 101 补充：通过原型链查找时，如果你找的是一个属性的话，则返回 undefined，如果你找的是一个方法，则报错。

## 常见题目

-   如何准确判断一个变量是数组类型

-   写一个原型链继承的例子

-   描述 new 一个对象的过程

-   zepto(或其他框架)源码中如何使用原型链

下面分别讲解。

### 题目一：如何准确判断一个变量是数组类型

答案：

```javascript
var arr1 = [];

console.log(arr1 instanceof Array); //打印结果：true。
console.log(typeof arr1); //打印结果：object。提示：typeof 方法无法判断是否为数组
```

上方代码表明，只能通过 instanceof 来判断是否为数组。而 typeof 的打印结果是 object。

### 题目二：写一个原型链继承的例子

来看个基础的代码：

![](http://img.smyhvae.com/20180306_1931.png)

上面这个例子是基础，但是，在回答面试官的问题时，不要写上面的例子。要写成下面这个例子：（更贴近实战）

```js
function DomElement(id) {
    this.dom = document.getElementById(id);
}
DomElement.prototype.html = function (val) {
    var ele = this.dom;
    if (val) {
        ele.innerHTML = val;
        return this;
    } else {
        return ele.innerHTML;
    }
};
DomElement.prototype.on = function (type, fn) {
    var ele = this.dom;
    ele.addEventListener(type, fn);
    return this;
};
var div1 = new DomElement('div1');
div1.html('<p>这是一段文字</p >');
div1.on('click', function () {
    console.log('clicked');
});
```

### 题目三：描述 new 一个对象的过程

（1）创建一个新对象

（2）this 指向这个新对象

（3）执行代码（对 this 赋值）

（4）返回 this

参考链接：

-   [原型、原型链、继承模式](https://my.oschina.net/u/2600761/blog/1524617)
---
title: 47-jQuery操作DOM
publish: true
---

<ArticleTopAd></ArticleTopAd>





## 文本主要内容



- 样式和类操作

- 节点操作


## 样式操作和类操作

作用：设置或获取元素的样式属性值。

### 样式操作

**1、设置样式：**

```javascript

    //设置单个样式：  css(属性，值);
    $("div").css("background-color","red");

    //设置多个样式：  css(json);
	 $("div").css({"width":100,"height":100,"background-color":"pink"});



```


**2、获取样式：**

```javascript
    //获取样式：css(属性);
    //获取的时候如果有很多个，那么获取jquery对象中的第一个
    alert($("div").css("width"));
```

举例如下：

![](http://img.smyhvae.com/20180205_1315.png)

### 类操作（className）

**1、添加类样式：**

```javascript
	$(selector).addClass("liItem");  //为指定元素添加类className
```

注意：此处类名不带点，所有类操作的方法类名都不带点。


**2、移除类样式：**


```javascript
	$(selector).removeClass("liItem");  //为指定元素移除类 className
	$(selector).removeClass();          //不指定参数，表示移除被选中元素的所有类
```

**3、判断有没有类样式：**

```javascript
	$(selector).hasClass("liItem");   //判断指定元素是否包含类 className
```

此时，会返回true或false。jquery对象中，只要有一个带有指定类名的就是true，所有都不带才是false。

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
        }

        .current {
            background-color: red;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            $("button").eq(0).click(function () {
                //添加类
                $("div").addClass("current");
                //判断类
                alert($("div").hasClass("current"));
            });

            $("button").eq(1).click(function () {
                //删除类
                $("div").removeClass("current");
                //判断类
                alert($("div").hasClass("current"));
            });
            //alert($("div").hasClass("current"));//jquery对象中只要有一个带有类名的就是true，所有都不带才是false。
        })
    </script>
</head>
<body>
<button>添加</button>
<button>删除</button>
<div></div>
<div></div>
<div></div>
<div class="current"></div>
</body>
</html>

```

**4、切换类样式：**

```javascript
$(selector).toggleClass(“liItem”);    //为指定元素切换类 className，该元素有类则移除，没有指定类则添加。
```

解释：为指定元素切换类 className，该元素有类则移除，没有指定类则添加。

如果采用采用正常的思路实现上面这句话，代码是：


```javascript
   if($("div").hasClass("current")){
       //如果有类名，那么删除
       $("div").removeClass("current")
   }else{
       //如果没有类名，那么添加
       $("div").addClass("current")
   }
```

现在有了toggleClass()方法，一行代码即可实现。

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: green;
        }
        .current {
            background-color: red;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            $("button").click(function () {
                //需求：点击按钮 ，切换背景
                //切换类（toggleCLass）
                $("div").toggleClass("current");
            });
        })
    </script>
</head>
<body>
<button>切换背景</button>
<div></div>
</body>
</html>
```

实现的效果：

![](http://img.smyhvae.com/20180205_1330.gif)

### 样式操作和类操作的比较

- 操作的样式非常少，那么可以通过`.css()`实现。

- 操作的样式很多，建议通过使用类 class 的方式来操作。

- 如果考虑以后维护方便（把CSS从js中分离出来）的话，推荐使用类的方式来操作。


**举例**：addClass+removeClass

代码实现：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }

        ul {
            list-style: none;
        }

        .wrapper {
            width: 1000px;
            height: 475px;
            margin: 0 auto;
            margin-top: 100px;
        }

        .tab {
            border: 1px solid #ddd;
            border-bottom: 0;
            height: 36px;
            width: 320px;
        }

        .tab li {
            position: relative;
            float: left;
            width: 80px;
            height: 34px;
            line-height: 34px;
            text-align: center;
            cursor: pointer;
            border-top: 4px solid #fff;
        }

        .tab span {
            position: absolute;
            right: 0;
            top: 10px;
            background: #ddd;
            width: 1px;
            height: 14px;
            overflow: hidden;
        }

        .products {
            width: 1002px;
            border: 1px solid #ddd;
            height: 476px;
        }

        .products .main {
            float: left;
            display: none;
        }

        .products .main.selected {
            display: block;
        }

        .tab li.active {
            border-color: red;
            border-bottom: 0;
        }

    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        jQuery(window).ready(function () {
            //需求:鼠标放到那个li上，让该li添加active类，下面的对应的.main的div添加selected
            $(".tab>li").mouseenter(function () {
                //不用判断，当前的li添加active类，其他的删除active类
                $(this).addClass("active").siblings("li").removeClass("active");
                //对应索引值的div添加selected类，其他的删除selected类
                //【重要】根据tab的索引值获取下方图片div的索引值
                $(".products>div").eq($(this).index()).addClass("selected").siblings("div").removeClass("selected");
            });
        });
    </script>
</head>
<body>
<div class="wrapper">
    <ul class="tab">
        <li class="tab-item active">国际大牌<span>◆</span></li>
        <li class="tab-item">国妆名牌<span>◆</span></li>
        <li class="tab-item">清洁用品<span>◆</span></li>
        <li class="tab-item">男士精品</li>
    </ul>
    <div class="products">
        <div class="main selected">
            <a href="###"><img src="images/guojidapai.jpg" alt=""/></a>
        </div>
        <div class="main">
            <a href="###"><img src="images/guozhuangmingpin.jpg" alt=""/></a>
        </div>
        <div class="main">
            <a href="###"><img src="images/qingjieyongpin.jpg" alt=""/></a>
        </div>
        <div class="main">
            <a href="###"><img src="images/nanshijingpin.jpg" alt=""/></a>
        </div>
    </div>
</div>

</body>
</html>

```


上方代码中，我们注意，tab栏和下方图片栏的index值，一一对应，这里用得很巧妙。

效果：

![](http://img.smyhvae.com/20180205_1345.gif)



## jQuery 的节点操作


### 动态创建元素

原生 js 有[三种动态创建元素](07-DOM操作练习：innerHTML的方式创建元素.md)的方式。这里我们学一下 jQuery 动态创建元素。**注意，创建的是  jQuery 对象**。

方式一：

```javascript
	var $spanNode1 = $("<span>我是一个span元素</span>");  // 返回的是 jQuery对象
```

此方法类似于 原生 js 中的`document.createElement("标签名");`

方式二：（推荐）


```javascript
	var node = $("#box").html("<li>我是li</li>");
```

此方法类似于 原生 js 中的`innerHTML`。

举例：

```javascript
    //方式一：      $("标签")             :类比于js中的document.createElement("li");
    console.log($("<li class='aaa'>我是li标签</li>"));

    //方式二：      $("ul").html("");     :类比innerHTML属性。因为此属性，识别标签。
    $("ul").html("<li>我是html方法穿件出来的li标签</li>")
```


### 添加元素

jQuery 添加元素的方法非常多，最重要的方法是`append()`。格式如下：


```javascript
// 方式一：在$(selector)中追加$node
$(selector).append($node);   //参数是 jQuery对象

// 方式二：在$(selector)中追加div元素，
$(selector).append('<div></div>');  //参数是 htmlString

```


作用：在被选元素内部的最后一个子元素（或内容）后面插入内容（存在或者创建出来的元素都可以）。


通俗的解释：**在盒子里的最末尾添加元素**。

- 如果是页面中存在的元素，那调用append()后，会把这个元素放到相应的目标元素里面去；但是，原来的这个元素，就不存在了。

- 如果是给多个目标追加元素，那么方法的内部会复制多份这个元素，然后追加到多个目标里面去。


举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="jquery-1.11.1.js"></script>
    <script>
        jQuery(document).ready(function () {
            $("button").click(function () {
                //创建一个新的jquery对象li
                var jqNewLi = $("<li>我是jquery创建出来的li。用的是append方法添加</li>");

                //append();  在盒子里的最末尾添加与严肃
                $("ul").append(jqNewLi);    //把新创建的 li 塞进已知的 ul 中
                //jqNewLi.appendTo($("ul")); //方式二：把新创建的li塞进ul中。作用同上
            })
        });
    </script>
</head>
<body>
<button>添加li</button>

<ul>
    <li>我是土著li</li>
</ul>

</body>
</html>
```


效果：

![](http://img.smyhvae.com/20180205_2020.gif)


**其他的添加元素的方法：**


方法2：

```javascript
	$(selector).appendTo(node);
```

作用：同append()，只不过是反着写的。

方法3：

```javascript
	$(selector).prepend(node);
```

作用：在元素的第一个子元素前面追加内容或节点。

方法4：

```javascript
	$(selector).after(node);
```

作用：在被选元素之后，作为**兄弟元素**插入内容或节点。

**方法5：**

```javascript
	$(selector).before(node);
```

作用：在被选元素之前，作为**兄弟元素**插入内容或节点。


### 清空元素

方式一：没有参数


```javascript
	$(selector).empty();
	$(selector).html("");
```


解释：清空指定元素的所有子元素（光杆司令）。

方式二：

//


```javascript
	$(selector).remove();
```

解释：“自杀” 。把自己以及所有的内部元素从文档中删除掉。

### 复制元素


格式：


```javascript
	复制的新元素 = $(selector).clone();
```

解释：复制$(selector)这个元素。是深层复制。

### 总结

推荐使用 `html("<span></span>")` 方法来创建元素或者 `html("")` 清空元素。

### 案例：选择水果

完整版代码：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        select {
            width: 170px;
            height: 240px;
            font-size: 18px;
            background-color: #a4ff34;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {

            //步骤：
            //1.将左侧的子标签全部移动到右侧。
            $("button").eq(0).click(function () {
                //右侧标签.append(左侧标签);
                $("#sel2").append($("#sel1 option"));
            });

            //2.将右侧的子标签全部移动到左侧。
            $("button").eq(1).click(function () {
                //左侧标签.append(右侧标签);
                $("#sel1").append($("#sel2 option"));
            });

            //第二步：获取子元素的时候要注意，获取的必须是，被选中的元素。
            //技术点：怎么获取被选中的子元素呢？？？答案：option:selected;
            //1.将左侧被选中的子标签移动到右侧
            $("button").eq(2).click(function () {
                //右侧标签.append(左侧标签);
                $("#sel2").append($("#sel1 option:selected"));
            });

            //2.将右侧被选中的子标签移动到左侧
            $("button").eq(3).click(function () {
                //右侧标签.append(左侧标签);
                $("#sel1").append($("#sel2 option:selected"));
            });

        })
    </script>
</head>
<body>
<select id="sel1" size="10" multiple>
    <option value="0">香蕉</option>
    <option value="1">苹果</option>
    <option value="2">鸭梨</option>
    <option value="3">葡萄</option>
</select>
<button>>>></button>
<button><<<</button>
<button>></button>
<button><</button>
<select id="sel2" size="10" multiple>

</select>
</body>
</html>

```

效果：

![](http://img.smyhvae.com/20180205_2040.gif)


### 案例：动态添加表格项

代码如下：


```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        table {
            border-collapse: collapse;
            border-spacing: 0;
            border: 1px solid #c0c0c0;
        }

        th,
        td {
            border: 1px solid #d0d0d0;
            color: #404060;
            padding: 10px;
        }

        th {
            background-color: #09c;
            font: bold 16px "微软雅黑";
            color: #fff;
        }

        td {
            font: 14px "微软雅黑";
        }

        tbody tr {
            background-color: #f0f0f0;
        }

        tbody tr:hover {
            cursor: pointer;
            background-color: #fafafa;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            // 模拟从后台拿到的数据
            var data = [{
                name: "博客园",
                url: "http://www.cnblogs.com/smyhvae/",
                type: "程序员的精神家园"
            }, {
                name: "简书",
                url: "https://www.jianshu.com/u/4d2e6b4bf117",
                type: "写作平台"
            }, {
                name: "百度",
                url: "https://www.baidu.com/",
                type: "你就知道"
            }];

            //需求:点击按钮，然后生成tr里面生成三个td.数组元素个数个tr。然后放入tbody中
            //步骤：
            //1.绑定事件
            //2.利用for循环,把数组中的所有数据组合成一个字符串。
            //3.把生成的字符串设置为html内容添加进tbody中。


            //1.绑定事件
            $("input").click(function () {
                //写入到click事件中，每次点击以后把之前的str清空【重要】
                var str = "";
                //2.利用for循环,把数组中的所有数据组合成一个字符串。
                for(var i=0;i<data.length;i++){
                    //如何生成3组？？？
//                    str += "<tr><td>1</td><td>2</td><td>3</td></tr>";
                    //data[i] = 数组中的每一个json
                    //data[i].name = 数组中的每一个json的name属性值
                    str += "<tr><td>"+data[i].name+"</td><td>"+data[i].url+"</td><td>"+data[i].type+"</td></tr>";
                }

                //3.把生成的字符串设置为html内容添加进tbody中。
                $("#j_tbData").html(str);
            })
        })
    </script>
</head>

<body>
<input type="button" value="获取数据" id="j_btnGetData"/>
<table>
    <thead>
    <tr>
        <th>标题</th>
        <th>地址</th>
        <th>说明</th>
    </tr>
    </thead>
    <tbody id="j_tbData">
    <!--<tr>-->
    <!--<td>1</td>-->
    <!--<td>2</td>-->
    <!--<td>3</td>-->
    <!--</tr>-->
    </tbody>
</table>
</body>

</html>

```

实现的效果：

![](http://img.smyhvae.com/20180205_2045.gif)

代码解释：每次生成字符串str之前，记得先把之前的str清空，不然每次点击按钮，都会继续添加表格项。


### 将上一个案例进一步提升：点击按钮，添加数据

暂略。

## jQuery 设置和获取属性

jQuery 无法直接操作节点的属性和src等，我们需要借助attr()方法。下面介绍。

### 属性操作

**（1）设置属性：**

```javascript
	$(selector).attr("title", "千古壹号");
```

参数解释：第一个参数表示：要设置的属性名称。第二个参数表示：该属性名称对应的值。

**（2）获取属性：**

```javascript
	$(selector).attr("title");
```

参数为：要获取的属性的名称，返回指定属性对应的值。

**总结**：两个参数是给属性赋值，单个参数是获取属性值。


**（3）移除属性：**


```javascript
	$(selector).removeAttr("title");
```

参数为：要移除的属性的名称。

（4）form表单中的 `prop()`方法：

针对`checked、selected、disabled`属性，要使用 `prop()`方法，而不是其他的方法。

prop方法通常用来影响DOM元素的动态状态，而不是改变的HTML属性。例如：input和button的disabled特性，以及checkbox的checked特性。


总结：细节可以参考：<http://api.jquery.com/prop/>。

以上四项的代码演示：


```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .aaa {
            border: 1px solid red;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            //获取元素，绑定属性
            var jqinp = $("input").eq(0);
            var jqinp2 = $("input:checkbox");
            var jqbtn = $("button");

            jqbtn.click(function () {
                //是绑定到jquery的衣服上，而不是标签上。所以没达到效果
//                jqinp.title = 111;
//                console.log(jqinp.title);

                //绑定到标签上
                jqinp.attr("title", 111);
                console.log(jqinp.attr("title"));

                jqinp.attr("aaa", 111);
                console.log(jqinp.attr("aaa"));

                //两个参数是给属性赋值，单个参数是获取属性值。
                jqinp.attr("class", "aaa");
                console.log(jqinp.attr("class"));

                jqinp.removeAttr("class");
                console.log(jqinp.attr("class"));

                //form中的特殊属性，用prop
                jqinp2.prop("checked", true);
//                jqinp2.attr("checked",true);//一次性的。鼠标多点击几次，就失效了。

            });
        })
    </script>
</head>
<body>
<button>绑定</button>
<input type="text"/>
<input type="checkbox"/>

</body>
</html>
```

效果：

![](http://img.smyhvae.com/20180205_2115.gif)

**案例：表格案例全选反选**

完整版代码：

```html
<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        .wrap {
            width: 300px;
            margin: 100px auto 0;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
            border: 1px solid #c0c0c0;
        }

        th,
        td {
            border: 1px solid #d0d0d0;
            color: #404060;
            padding: 10px;
        }

        th {
            background-color: #09c;
            font: bold 16px "微软雅黑";
            color: #fff;
        }

        td {
            font: 14px "微软雅黑";
        }

        tbody tr {
            background-color: #f0f0f0;
        }

        tbody tr:hover {
            cursor: pointer;
            background-color: #fafafa;
        }
    </style>
    <script src="jquery-1.11.1.js"></script>
    <script>
        $(function () {
            //需求1：点击上面的多选按钮，下面的所有多选按钮都和上面的一致
            //需求2：点击下面的多选按钮，判断下面的所有多选按钮都是否全部被选定只有全部被选定上面的才被选定


            //需求1：点击上面的多选按钮，下面的所有多选按钮都和上面的一致
            //步骤：绑定事件，直接让下面的所有按钮和上面的按钮属性值一模一样
            $("#j_cbAll").click(function () {
                //直接让下面的所有按钮和上面的按钮属性值一模一样
                $("#j_tb input:checkbox").prop("checked", $(this).prop("checked"));
            });

            //需求2：点击下面的多选按钮，判断下面的所有多选按钮都是否全部被选定只有全部被选定上面的才被选定
            //需求2：点击下面的多选按钮，判断下面的所有多选按钮都是否全部被选定只有全部被选定上面的才被选定
            $("#j_tb input:checkbox").click(function () {
                //判断，只有所有都背选定，上面的才被选定
                //技术点：带有checked属性的标签和checkbox个数一样多的时候
                if ($("#j_tb input:checkbox").length === $("#j_tb input:checked").length) {
                    //只有所有的都有checked属性，上面的才被选定
                    $("#j_cbAll").prop("checked", true);
                } else {
                    $("#j_cbAll").prop("checked", false);
                }
            });


        })
    </script>
</head>

<body>
<div class="wrap">
    <table>
        <thead>
        <tr>
            <th>
                <input type="checkbox" id="j_cbAll"/>
            </th>
            <th>课程名称</th>
            <th>所属团队</th>
        </tr>
        </thead>
        <tbody id="j_tb">
        <tr>
            <td>
                <input type="checkbox"/>
            </td>
            <td>JavaScript</td>
            <td>千古壹号</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox"/>
            </td>
            <td>css</td>
            <td>千古壹号</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox"/>
            </td>
            <td>html</td>
            <td>千古壹号</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox"/>
            </td>
            <td>jQuery</td>
            <td>千古壹号</td>
        </tr>
        </tbody>
    </table>
</div>
</body>

</html>

```


### val()方法和 text()方法


```javascript
	$(selector).val();
```

作用：设置或返回 form 表单元素的value值，例如：input、select、textarea 的值。


```javascript
	$(selector).text();
```

作用：设置或获取匹配元素的文本内容。不带参数表示，会把所有匹配到的元素内容拼接为一个**字符串**，不同于其他获取操作。




```javascript
	$(selector).text("我是内容");
```


作用：设置的内容包含html标签，那么text()方法会把他们当作**纯文本**内容输出。

总结：

- text() 不识别标签。

- html() 识别标签。

举例：


```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="jquery-1.11.1.js"></script>
    <script>
        jQuery(document).ready(function () {
            //val();   获取标签中的value属性的值。带有参数是赋值(类比js中的value属性)
            console.log($("input").val());

            $("input").val("我是value()赋值的input内容");
            console.log($("input").val());

            console.log("-----------------");

            //text();  获取双闭合标签中的文本值。（不识别标签）(类比js中的innerText)
            console.log($("div").text());
            $("div").text("<li>我是text()赋值的</li>")
            console.log($("div").text());

            console.log("-----------------");

            //html();  获取双闭合标签中的文本值。（识别标签）(类比js中的innerHTML)
            console.log($("div").html());
            $("div").html("<li>我是html()赋值的</li>");
            console.log($("div").html());
        })
    </script>
</head>
<body>
<input type="text" value="我是input中已存在的 value内容"/>
<div>
    <li>你好</li>
</div>
</body>
</html>
```


打印结果：

![](http://img.smyhvae.com/20180205_2139.png)


---
title: 02-数据的赋值
publish: true
---

<ArticleTopAd></ArticleTopAd>




## 对象赋值


### 用 Object.assgin() 实现浅拷贝

代码举例：

```js
const obj1 = {
    name: 'qianguyihao',
    age: 28,
    desc: 'hello world',
};

const obj2 = {
    name: '许嵩',
    sex: '男',
};

// 【关键代码】浅拷贝：把 obj1 赋值给 obj2。这行代码的返回值也是 obj2
Object.assign(obj2, obj1);

console.log(JSON.stringify(obj2));
```

打印结果：

```
{
    "name":"qianguyihao",
    "sex":"男",
    "age":28,
    "desc":"hello world"
}
```

注意，**上面这行代码在实际开发中，会经常遇到，一定要掌握**。它的作用是：将 obj1 的值追加到 obj2 中。如果两个对象里的属性名相同，则 obj2 中的值会被 obj1 中的值覆盖。


## 数组赋值

### 扩展运算符

```js
arr2 = arr1;
```

上方代码中，其实是让 arr2 指向 arr1 的地址。也就是说，二者指向的是同一个内存地址。

如果不想让 arr1 和 arr2 指向同一个内存地址，我们可以借助扩展运算符来做：

```javascript
let arr2 = [...arr1]; //arr2 会开辟新的内存地址
```




参考链接：

- [javaScript中浅拷贝和深拷贝的实现](https://github.com/wengjq/Blog/issues/3)


---
title: 04-作用域和闭包
publish: true
---

<ArticleTopAd></ArticleTopAd>




## 前言

面试问题：

- 说一下对变量提升的理解

- 说明this的几种不同的使用场景

- 创建10个`<a>`标签，点击的时候弹出来对应的序号

- 如何理解作用域

- 实际开发中闭包的应用

涉及到的知识点：

- 执行上下文

- this

- 作用域

- 作用域链

- 闭包


## 执行上下文

执行上下文主要有两种情况：

- 全局代码： 一段`<script>`标签里，有一个全局的执行上下文。所做的事情是：变量定义、函数声明

- 函数代码：每个函数里有一个上下文。所做的事情是：变量定义、函数声明、this、arguments

PS：注意“函数声明”和“函数表达式”的区别。


### 全局执行上下文

在执行全局代码前将window确定为全局执行上下文。


（1）对全局数据进行预处理：（并没有赋值）

- var定义的全局变量==>undefined, 添加为window的属性

- function声明的全局函数==>赋值(fun), 添加为window的方法

- this==>赋值(window)

（2）开始执行全局代码



![](http://img.smyhvae.com/20180311_1100.png)


### 函数执行上下文

在调用函数, 准备执行函数体之前, 创建对应的函数执行上下文对象(虚拟的, 存在于栈中)。


（1）对局部数据进行预处理：

- 形参变量==>赋值(实参)==>添加为执行上下文的属性

- arguments==>赋值(实参列表), 添加为执行上下文的属性

- var定义的局部变量==>undefined, 添加为执行上下文的属性

- function声明的函数 ==>赋值(fun), 添加为执行上下文的方法

- this==>赋值(调用函数的对象)

（2）开始执行函数体代码

### 执行上下文栈

- 1.在全局代码执行前, JS引擎就会创建一个栈来存储管理所有的执行上下文对象

- 2.在全局执行上下文(window)确定后, 将其添加到栈中(压栈)

- 3.在函数执行上下文创建后, 将其添加到栈中(压栈)

- 4.在当前函数执行完后,将栈顶的对象移除(出栈)

- 5.当所有的代码执行完后, 栈中只剩下window


## this

this指的是，**调用函数的那个对象**。this永远指向函数运行时所在的对象。

解析器在调用函数每次都会向函数内部传递进一个隐含的参数，这个隐含的参数就是this。

根据函数的调用方式的不同，this会指向不同的对象：【重要】

- 1.以函数的形式调用时，this永远都是window。比如`fun();`相当于`window.fun();`

- 2.以方法的形式调用时，this是调用方法的那个对象

- 3.以构造函数的形式调用时，this是新创建的那个对象

- 4.使用call和apply调用时，this是指定的那个对象

需要特别提醒的是：this的指向在函数定义时无法确认，只有函数执行时才能确定。

![](http://img.smyhvae.com/20180311_1117.png)

this的几种场景：

- 1、作为构造函数执行

例如：

```javascript
    function Foo(name) {
        //this = {};
        this.name = name;
        //return this;
    }

    var foo = new Foo();
```

- 2、作为对象的属性执行



```javascript
    var obj = {
        name: 'A',
        printName: function () {
            console.log(this.name);
        }
    }

    obj.printName();

```


- 3、作为普通函数执行


```javascript
    function fn() {
        console.log(this); //this === window
    }

    fn();
```



- 4、call apply bind


## 作用域

作用域指一个变量的**作用范围**。它是静态的(相对于上下文对象), 在编写代码时就确定了。

作用：隔离变量，不同作用域下同名变量不会有冲突。

作用域的分类：


- 全局作用域

- 函数作用域

- 没有块级作用域(ES6有了)






```javascript
if (true) {
    var name = 'smyhvae';
}
console.log(name);
```


上方代码中，并不会报错，因为：虽然 name 是在块里面定义的，但是 name 是全局变量。



### 全局作用域

直接编写在script标签中的JS代码，都在全局作用域。

在全局作用域中：

- 在全局作用域中有一个全局对象window，它代表的是一个浏览器的窗口，它由浏览器创建我们可以直接使用。


- 创建的变量都会作为window对象的属性保存。

- 创建的函数都会作为window对象的方法保存。

全局作用域中的变量都是全局变量，在页面的任意的部分都可以访问到。

**变量的声明提前：**（变量提升）


使用var关键字声明的变量（ 比如 `var a = 1`），**会在所有的代码执行之前被声明**（但是不会赋值），但是如果声明变量时不是用var关键字（比如直接写`a = 1`），则变量不会被声明提前。

举例1：

```javascript
    console.log(a);
    var a = 123;
```


打印结果：undefined

举例2：

```javascript
    console.log(a);
    a = 123;   //此时a相当于window.a
```

程序会报错：


![](http://img.smyhvae.com/20180314_2136.png)


**函数的声明提前：**

- 使用`函数声明`的形式创建的函数`function foo(){}`，**会被声明提前**。

也就是说，它会在所有的代码执行之前就被创建，所以我们可以在函数声明之前，调用函数。

- 使用`函数表达式`创建的函数`var foo = function(){}`，**不会被声明提前**，所以不能在声明前调用。

很好理解，因为此时foo被声明了，且为undefined，并没有给其赋值`function(){}`。

所以说，下面的例子，会报错：


![](http://img.smyhvae.com/20180314_2145.png)

### 函数作用域

**调用函数时创建函数作用域，函数执行完毕以后，函数作用域销毁。**

每调用一次函数就会创建一个新的函数作用域，他们之间是互相独立的。

在函数作用域中可以访问到全局作用域的变量，在全局作用域中无法访问到函数作用域的变量。


在函数中要访问全局变量可以使用window对象。（比如说，全局作用域和函数作用域都定义了变量a，如果想访问全局变量，可以使用`window.a`）

**提醒1：**

在函数作用域也有声明提前的特性：

- 使用var关键字声明的变量，是在函数作用域内有效，而且会在函数中所有的代码执行之前被声明

- 函数声明也会在函数中所有的代码执行之前执行


因此，在函数中，没有var声明的变量都会成为**全局变量**，而且并不会提前声明。

举例1：

```javascript
        var a = 1;

        function foo() {
            console.log(a);
            a = 2;     // 此处的a相当于window.a
        }

        foo();
        console.log(a);   //打印结果是2

```

上方代码中，foo()的打印结果是`1`。如果去掉第一行代码，打印结果是`Uncaught ReferenceError: a is not defined`


**提醒2：**定义形参就相当于在函数作用域中声明了变量。

```

        function fun6(e) {
            console.log(e);
        }

        fun6();  //打印结果为 undefined
        fun6(123);//打印结果为123
```



### 作用域与执行上下文的区别

区别1：

- 全局作用域之外，每个函数都会创建自己的作用域，作用域在函数定义时就已经确定了。而不是在函数调用时

- 全局执行上下文环境是在全局作用域确定之后, js代码马上执行之前创建

- 函数执行上下文是在调用函数时, 函数体代码执行之前创建

区别2：

- 作用域是静态的, 只要函数定义好了就一直存在, 且不会再变化

- 执行上下文是动态的, 调用函数时创建, 函数调用结束时就会自动释放

联系：

  * 执行上下文(对象)是从属于所在的作用域

  * 全局上下文环境==>全局作用域

  * 函数上下文环境==>对应的函数使用域


### 作用域链


当在函数作用域操作一个变量时，它会先在自身作用域中寻找，如果有就直接使用（**就近原则**）。如果没有则向上一级作用域中寻找，直到找到全局作用域；如果全局作用域中依然没有找到，则会报错ReferenceError。


外部函数定义的变量可以被内部函数所使用，反之则不行。




```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
        //只要是函数就可以创造作用域
        //函数中又可以再创建函数
        //函数内部的作用域可以访问函数外部的作用域
        //如果有多个函数嵌套，那么就会构成一个链式访问结构，这就是作用域链

        //f1--->全局
        function f1(){
            //f2--->f1--->全局
            function f2(){
                //f3---->f2--->f1--->全局
                function f3(){
                }
                //f4--->f2--->f1---->全局
                function f4(){
                }
            }
            //f5--->f1---->全局
            function f5(){
            }
        }

    </script>
</head>
<body>

</body>
</html>
```

理解：

- 多个上下级关系的作用域形成的链, 它的方向是从下向上的(从内到外)

- 查找变量时就是沿着作用域链来查找的

查找一个变量的查找规则：

```javascript
    var a = 1

    function fn1() {
      var b = 2

      function fn2() {
        var c = 3
        console.log(c)
        console.log(b)
        console.log(a)
        console.log(d)
      }
      fn2()
    }
    fn1()
```


- 在当前作用域下的执行上下文中查找对应的属性, 如果有直接返回, 否则进入2

- 在上一级作用域的执行上下文中查找对应的属性, 如果有直接返回, 否则进入3

- 再次执行2的相同操作, 直到全局作用域, 如果还找不到就抛出找不到的异常


## 闭包

闭包就是能够读取其他函数内部数据（变量/函数）的函数。

只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成"定义在一个函数内部的函数"。

上面这两句话，是阮一峰的文章里的，你不一定能理解，来看下面的讲解和举例。

### 如何产生闭包

**当一个嵌套的内部(子)函数引用了嵌套的外部(父)函数的变量或函数时, 就产生了闭包。**

### 闭包到底是什么?


> 使用chrome调试查看


- 理解一: 闭包是嵌套的内部函数(绝大部分人)

- 理解二: 包含被引用变量 or 函数的对象(极少数人)

注意: 闭包存在于嵌套的内部函数中。


### 产生闭包的条件

- 1.函数嵌套

- 2.内部函数引用了外部函数的数据(变量/函数)。

来看看条件2：

```javascript
    function fn1() {
        function fn2() {

        }

        return fn2;
    }

    fn1();
```

上面的代码不会产生闭包，因为内部函数fn2并没有引用外部函数fn1的变量。


PS：还有一个条件是**外部函数被调用，内部函数被声明**。比如：

```javascript

    function fn1() {
        var a = 2
        var b = 'abc'

        function fn2() { //fn2内部函数被提前声明，就会产生闭包(不用调用内部函数)
            console.log(a)
        }

    }

    fn1();

    function fn3() {
        var a = 3
        var fun4 = function () {  //fun4采用的是“函数表达式”创建的函数，此时内部函数的声明并没有提前
            console.log(a)
        }
    }

    fn3();

```




## 常见的闭包

- 1. 将一个函数作为另一个函数的返回值

- 2. 将函数作为实参传递给另一个函数调用。

### 闭包1：将一个函数作为另一个函数的返回值

```javascript
    function fn1() {
      var a = 2

      function fn2() {
        a++
        console.log(a)
      }
      return fn2
    }

    var f = fn1();   //执行外部函数fn1，返回的是内部函数fn2
    f() // 3       //执行fn2
    f() // 4       //再次执行fn2

```


当f()第二次执行的时候，a加1了，也就说明了：闭包里的数据没有消失，而是保存在了内存中。如果没有闭包，代码执行完倒数第三行后，变量a就消失了。

上面的代码中，虽然调用了内部函数两次，但是，闭包对象只创建了一个。

也就是说，要看闭包对象创建了一个，就看：**外部函数执行了几次**（与内部函数执行几次无关）。


### 闭包2. 将函数作为实参传递给另一个函数调用


```javascript
    function showDelay(msg, time) {
      setTimeout(function() {  //这个function是闭包，因为是嵌套的子函数，而且引用了外部函数的变量msg
        alert(msg)
      }, time)
    }
    showDelay('atguigu', 2000)
```

上面的代码中，闭包是里面的function，因为它是嵌套的子函数，而且引用了外部函数的变量msg。


## 闭包的作用

- 作用1. 使用函数内部的变量在函数执行完后, 仍然存活在内存中(延长了局部变量的生命周期)

- 作用2. 让函数外部可以操作(读写)到函数内部的数据(变量/函数)

我们让然拿这段代码来分析：

```javascript
    function fn1() {
      var a = 2

      function fn2() {
        a++
        console.log(a)
      }
      return fn2;
    }

    var f = fn1();   //执行外部函数fn1，返回的是内部函数fn2
    f() // 3       //执行fn2
    f() // 4       //再次执行fn2

```

**作用1分析**：

上方代码中，外部函数fn1执行完毕后，变量a并没有立即消失，而是保存在内存当中。


**作用2分析：**

函数fn1中的变量a，是在fn1这个函数作用域内，因此外部无法访问。但是通过闭包，外部就可以操作到变量a。

达到的效果是：**外界看不到变量a，但可以操作a**。

比如上面达到的效果是：我看不到变量a，但是每次执行函数后，让a加1。当然，如果我真想看到a，我可以在fn2中将a返回即可。



回答几个问题：

- 问题1. 函数执行完后, 函数内部声明的局部变量是否还存在?

答案：一般是不存在, 存在于闭包中的变量才可能存在。

闭包能够一直存在的根本原因是`f`，因为`f`接收了`fn1()`，这个是闭包，闭包里有a。注意，此时，fn2并不存在了，但是里面的对象（即闭包）依然存在，因为用`f`接收了。


- 问题2. 在函数外部能直接访问函数内部的局部变量吗?

不能，但我们可以通过闭包让外部操作它。


## 闭包的生命周期

1. 产生: 嵌套内部函数fn2被声明时就产生了(不是在调用)

2. 死亡: 嵌套的内部函数成为垃圾对象时。（比如f = null，就可以让f成为垃圾对象。意思是，此时f不再引用闭包这个对象了）



## 闭包的应用：定义具有特定功能的js模块

- 将所有的数据和功能都封装在一个函数内部(私有的)，只向外暴露一个包含n个方法的对象或函数。

- 模块的使用者, 只需要通过模块暴露的对象调用方法来实现对应的功能。

### 方式一

（1）myModule.js：（定义一个模块，向外暴露多个函数，供外界调用）

```javascript
function myModule() {
    //私有数据
    var msg = 'Smyhvae Haha'

    //操作私有数据的函数
    function doSomething() {
        console.log('doSomething() ' + msg.toUpperCase()); //字符串大写
    }

    function doOtherthing() {
        console.log('doOtherthing() ' + msg.toLowerCase()) //字符串小写
    }

    //通过【对象字面量】的形式进行包裹，向外暴露多个函数
    return {
        doSomething1: doSomething,
        doOtherthing2: doOtherthing
    }
}
```


上方代码中，外界可以通过doSomething1和doOtherthing2来操作里面的数据，但不让外界看到。

（2）index.html:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>05_闭包的应用_自定义JS模块</title>
</head>
<body>
<!--
闭包的应用 : 定义JS模块
  * 具有特定功能的js文件
  * 将所有的数据和功能都封装在一个函数内部(私有的)
  * 【重要】只向外暴露一个包含n个方法的对象或函数
  * 模块的使用者, 只需要通过模块暴露的对象调用方法来实现对应的功能
-->
<script type="text/javascript" src="myModule.js"></script>
<script type="text/javascript">
    var module = myModule();
    module.doSomething1();
    module.doOtherthing2();
</script>
</body>
</html>
```


### 方式二

同样是实现方式一种的功能，这里我们采取另外一种方式。

（1）myModule2.js：（是一个立即执行的匿名函数）

```javascript
(function () {
    //私有数据
    var msg = 'Smyhvae Haha'

    //操作私有数据的函数
    function doSomething() {
        console.log('doSomething() ' + msg.toUpperCase())
    }

    function doOtherthing() {
        console.log('doOtherthing() ' + msg.toLowerCase())
    }

    //外部函数是即使运行的匿名函数，我们可以把两个方法直接传给window对象
    window.myModule = {
        doSomething1: doSomething,
        doOtherthing2: doOtherthing
    }
})()
```


（2）index.html：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>05_闭包的应用_自定义JS模块2</title>
</head>
<body>
<!--
闭包的应用2 : 定义JS模块
  * 具有特定功能的js文件
  * 将所有的数据和功能都封装在一个函数内部(私有的)
  * 只向外暴露一个包信n个方法的对象或函数
  * 模块的使用者, 只需要通过模块暴露的对象调用方法来实现对应的功能
-->

<!--引入myModule文件-->
<script type="text/javascript" src="myModule2.js"></script>
<script type="text/javascript">
    myModule.doSomething1()
    myModule.doOtherthing2()
</script>
</body>
</html>

```

上方两个文件中，我们在`myModule2.js`里直接把两个方法直接传递给window对象了。于是，在index.html中引入这个js文件后，会立即执行里面的匿名函数。在index.html中把myModule直接拿来用即可。

**总结：**

当然，方式一和方式二对比后，我们更建议采用方式二，因为很方便。

但无论如何，两种方式都采用了闭包。


## 闭包的缺点及解决

缺点：函数执行完后, 函数内的局部变量没有释放，占用内存时间会变长，容易造成内存泄露。


解决：能不用闭包就不用，及时释放。比如：

```javascript
    f = null;  // 让内部函数成为垃圾对象 -->回收闭包
```

总而言之，你需要它，就是优点；你不需要它，就成了缺点。


## 内存溢出和内存泄露

### 内存溢出

**内存溢出**：一种程序运行出现的错误。当程序运行**需要的内存**超过了剩余的内存时, 就出抛出内存溢出的错误。

代码举例：

```javascript
    var obj = {};
    for (var i = 0; i < 10000; i++) {
    obj[i] = new Array(10000000);  //把所有的数组内容都放到obj里保存，导致obj占用了很大的内存空间
    console.log("-----");
    }
```

### 内存泄漏

**内存泄漏**：**占用的内存**没有及时释放。

注意，内存泄露的次数积累多了，就容易导致内存溢出。

**常见的内存泄露**：

- 1.意外的全局变量

- 2.没有及时清理的计时器或回调函数

- 3.闭包


情况1举例：

```javascript
    // 意外的全局变量
    function fn() {
        a = new Array(10000000);
        console.log(a);
    }

    fn();
```

情况2举例：

```javascript
    // 没有及时清理的计时器或回调函数
    var intervalId = setInterval(function () { //启动循环定时器后不清理
        console.log('----')
    }, 1000)

    // clearInterval(intervalId);  //清理定时器
```

情况3举例：

```html
<script type="text/javascript">
  function fn1() {
    var a = 4;
    function fn2() {
      console.log(++a)
    }
    return fn2
  }
  var f = fn1()
  f()

  // f = null //让内部函数成为垃圾对象-->回收闭包
</script>
```











---
publish: false
---


### `callback && callback()`的含义

```javascript
callback && callback()
```


含义是：如果callback存在，则执行callback()函数。

这个 callback 通常作为函数的参数使用。举例：


```javascript
function foo(callback) {
    {
        // do something
    }
    callback && callback() // 不传 callback 参数，则不会执行 callback() 函数
}

foo(); // 只执行do something中的代码
foo(callback);//callback是另一个函数，将此函数传入 foo，将会执行callback()
```



---
title: 03-创建对象和继承
publish: true
---

<ArticleTopAd></ArticleTopAd>





## 创建对象的几种方式

### 通过Object

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>01_Object构造函数模式</title>
</head>
<body>
<!--
方式一: Object构造函数模式
  * 套路: 先创建空Object对象, 再动态添加属性/方法
  * 适用场景: 起始时不确定对象内部数据
  * 问题: 语句太多
-->
<script type="text/javascript">
    /*
    一个人: name:"Tom", age: 12
     */
    // 先创建空Object对象
    var p = new Object()
    p = {} //此时内部数据是不确定的
    // 再动态添加属性/方法
    p.name = 'Tom'
    p.age = 12
    p.setName = function (name) {
        this.name = name
    }

    //测试
    console.log(p.name, p.age)
    p.setName('Bob')
    console.log(p.name, p.age)


</script>
</body>
</html>

```


### 方式二：对象字面量

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>02_对象字面量</title>
</head>
<body>
<!--
方式二: 对象字面量模式
  * 套路: 使用{}创建对象, 同时指定属性/方法
  * 适用场景: 起始时对象内部数据是确定的
  * 问题: 如果创建多个对象, 有重复代码
-->
<script type="text/javascript">
    var p = {
        name: 'Tom',
        age: 12,
        setName: function (name) {
            this.name = name
        }
    }

    //测试
    console.log(p.name, p.age)
    p.setName('JACK')
    console.log(p.name, p.age)

    var p2 = {  //如果创建多个对象代码很重复
        name: 'Bob',
        age: 13,
        setName: function (name) {
            this.name = name
        }
    }

</script>
</body>
</html>
```



### 方式三：工厂模式

- 方式：通过工厂函数动态创建对象并返回。

返回一个对象的函数，就是**工厂函数**。

- 适用场景: 需要创建多个对象。

- 问题: 对象没有一个具体的类型，都是Object类型。

由于这个问题的存在，工厂模式用得不多。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>03_工厂模式</title>
</head>
<body>
<!--
方式三: 工厂模式
  * 套路: 通过工厂函数动态创建对象并返回
  * 适用场景: 需要创建多个对象
  * 问题: 对象没有一个具体的类型, 都是Object类型
-->
<script type="text/javascript">
    function createPerson(name, age) { //返回一个对象的函数===>工厂函数
        var obj = {
            name: name,
            age: age,
            setName: function (name) {
                this.name = name
            }
        }

        return obj
    }

    // 创建2个人
    var p1 = createPerson('Tom', 12)
    var p2 = createPerson('Bob', 13)

    // p1/p2是Object类型

    function createStudent(name, price) {
        var obj = {
            name: name,
            price: price
        }
        return obj
    }

    var s = createStudent('张三', 12000)
    // s也是Object


</script>
</body>
</html>

```



### 方式四：自定义构造函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>04_自定义构造函数模式</title>
</head>

<body>
<!--
方式四: 自定义构造函数模式
  * 套路: 自定义构造函数, 通过new创建对象
  * 适用场景: 需要创建多个类型确定的对象
  * 问题: 每个对象都有相同的数据, 浪费内存
-->
<script type="text/javascript">
    //定义类型
    function Person(name, age) {
        this.name = name
        this.age = age
        this.setName = function (name) {
            this.name = name
        }
    }

    var p1 = new Person('Tom', 12)
    p1.setName('Jack')
    console.log(p1.name, p1.age)
    console.log(p1 instanceof Person)

    function Student(name, price) {
        this.name = name
        this.price = price
    }

    var s = new Student('Bob', 13000)
    console.log(s instanceof Student)

    var p2 = new Person('JACK', 23)
    console.log(p1, p2)


</script>
</body>
</html>

```


方式四引入了继承。

## 继承的几种方式


### 通过构造函数继承

在子类型构造函数中通用call()调用父类型构造函数


### 原型链继承

子类型的原型为父类型的一个实例对象



### 组合继承



---
title: 05-call、apply、bind的区别
publish: true
---

<ArticleTopAd></ArticleTopAd>



## call()和apply()

### 介绍

这两个方法都是函数对象的方法，需要通过函数对象来调用。

当函数调用call()和apply()时，函数都会立即**执行**。

- 都可以用来改变函数的this对象的指向。

- 第一个参数都是this要指向的对象（函数执行时，this将指向这个对象），后续参数用来传实参。

### 显式绑定this

JS提供的绝大多数函数以及我们自己创建的所有函数，都可以使用call 和apply方法。

它们的第一个参数是一个对象。因为你可以直接指定 this 绑定的对象，因此我们称之为显式绑定。

例1：

```javascript
    function foo() {
        console.log(this.a);
    }

    var obj = {
        a: 2
    };

    // 将 this 指向 obj
    foo.apply(obj); //打印结果：2
```

### 第一个参数的传递

1、thisObj不传或者为null、undefined时，函数中的this会指向window对象（非严格模式）。

2、传递一个别的函数名时，函数中的this将指向这个**函数的引用**。

3、传递的值为数字、布尔值、字符串时，this会指向这些基本类型的包装对象Number、Boolean、String。

4、传递一个对象时，函数中的this则指向传递的这个对象。


### call()和apply()的区别

call()和apply()方法都可以将实参在对象之后依次传递，但是apply()方法需要将实参封装到一个**数组**中统一传递（即使只有实参只有一个，也要放到数组中）。

比如针对下面这样的代码：

```javascript
    var persion1 = {
        name: "小王",
        gender: "男",
        age: 24,
        say: function (school, grade) {
            alert(this.name + " , " + this.gender + " ,今年" + this.age + " ,在" + school + "上" + grade);
        }
    }
    var person2 = {
        name: "小红",
        gender: "女",
        age: 18
    }
```

如果是通过call的参数进行传参，是这样的：

```javascript
	persion1.say.call(persion2, "实验小学", "六年级");
```

如果是通过apply的参数进行传参，是这样的：

```javascript
	persion1.say.apply(persion2, ["实验小学", "六年级"]);
```

看到区别了吗，call后面的实参与say方法中是一一对应的，而apply传实参时，要封装成一个数组，数组中的元素是和say方法中一一对应的，这就是两者最大的区别。

### call()和apply()的作用

- 改变this的指向

- 实现继承。Father.call(this)

## bind()

- 都能改变this的指向

- call()/apply()是**立即调用函数**

- bind()是将函数返回，因此后面还需要加`()`才能调用。

bind()传参的方式与call()相同。

参考链接：

- <https://www.jianshu.com/p/56a9c2d11adc>

- <https://github.com/lin-xin/blog/issues/7>

- <https://segmentfault.com/a/1190000007402815>

- [JS中改变this指向的方法](http://www.xiaoxiaohan.com/js/38.html)





---
title: 06-Promise的一些题目
publish: true
---

<ArticleTopAd></ArticleTopAd>


## Promise 的执行顺序

### 题目 1

代码举例：

```js
const p = new Promise((resolve, reject) => {
    console.log(1);
});

console.log(2);
```

打印结果：

```
1
2
```

我们需要注意的是：Promise 里的代码整体，其实是同步任务，会立即执行。

补充：上面的代码中，如果继续写`p.then()`，那么 `then()`里面是不会执行的。因为在定义 promise 的时候需要写 resolve，调用 promise 的时候才会执行 `then()`。

基于此，我们再来看下面这段代码：

```js
const p = new Promise((resolve, reject) => {
    console.log(1);
    resolve();
});

console.log(2);

p.then((res) => {
    console.log(3);
});
```

打印结果：

```
1
2
3
```

### 题目 2

代码举例：

```js
// 封装 ajax 请求：传入回调函数 success 和 fail
function ajax(url, success, fail) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            success(xmlhttp.responseText);
        } else {
            fail(new Error('接口请求失败'));
        }
    };
}

new Promise((resolve, reject) => {
    ajax('a.json', (res) => {
        console.log('a接口返回的内容：' + res);
        resolve();
    });
})
    .then((res) => {
        console.log('a成功');
        new Promise((resolve, reject) => {
            ajax('b.json', (res) => {
                console.log('b接口返回的内容：' + res);
                resolve();
            });
        });
    })
    .then((res) => {
        // 因为上面在b接口的时候，并没有 return，也就是没有返回值。那么，这里的链式操作then，其实是针对一个空的 promise 对象进行then操作
        console.log('b成功');
    });
```

打印结果：

```
a接口返回的内容
a成功
b成功
b接口返回的内容
```

### 题目 3

举例1：

```js
new Promise((resolve, reject) => {
    resolove();
    console.log('promise1');  // 代码1
}).then(res => {
    console.log('promise  then)';  // 代码2：微任务
})

console.log('千古壹号');  // 代码3
```

打印结果：

```
promise1
千古壹号
promise  then
```

代码解释：代码1是同步代码，所以最先执行。代码2是**微任务**里面的代码，所以要先等同步任务（代码3）先执行完。

当写完`resolove();`之后，就会立刻把 `.then()`里面的代码加入到微任务队列当中。

---
title: 01-ES5和ES6的介绍
---

<ArticleTopAd></ArticleTopAd>

## 前言

### ECMAScript 简介

ES 的全称是 ECMAScript，它是由 ECMA 国际标准化组织 制定的一套**脚本语言的标准化规范**。

详细来说，ES 是由 ECMA 的第 39 号技术专家委员会（Technical Committee 39，简称 TC39）负责制订 ECMAScript 标准，成员包括 Microsoft、Mozilla、Google 等公司。

简单来说，ECMAScript 是 JS 的语言标准。当然，ECMAScript 还包括其他脚本语言的语言标准。


### ECMAScript 版本发布记录

-   1995 年：ECMAScript 诞生。

-   1997 年：ECMAScript 标准确立。ECMA 发布 ECMA-262 标准，推出浏览器标准语言 ECMAScript 1.0。

-   1999 年：发布 ES3；与此同时，IE5 风靡一时。

-   **2009 年**：发布 ECMAScript 5.0（简称 **ES5**）。例如 foreach、Object.keys、Object.create 和 json 标准。

-   2011 年：发布 ECMAScript5.1，成为 ISO **国际标准**，从而推动所有浏览器都支持。

-   **2015** 年 6 月：发布 ECMAScript 6（简称 **ES6**），即 ECMAScript 2015。（注意，**前者是按版本号区分，后者是按年份区分**。ES 的后续版本，请尽量用**年份**来命名。）

-   2016 年 6 月：发布 ECMAScript 7，即 ECMAScript 2016。

-   2017 年 6 月：发布 ECMAScript 8，即 ECMAScript 2017。

-   2018 年 6 月：发布 ECMAScript 9，即 ECMAScript 2018。

-   2019 年 6 月：发布 ECMAScript 10，即 ECMAScript 2019。

-   2020 年 6 月：发布 ECMAScript 11，即 ECMAScript 2020。

-   ......

*   此后，每年更新一版。

### ECMAScript5.1简介

ECMAScript 5.1是ECMAScript标准的最新修正版本，所以这个版本非常重要。与ECMAScript 5.0 相比，ECMAScript 5.1的改进如下：

- 对于此前不合理的地方进行了修正。
- 新增了一些新的方法。
- 新增了**严格模式**的语法。（我们将在下一篇文章讲严格模式）



推荐阅读链接：

- [ECMAScript5.1规范中文版.pdf](https://yanhaijing.com/es5)
- [张鑫旭翻译：ECMAScript 5.1简介](https://www.zhangxinxu.com/wordpress/2012/01/introducing-ecmascript-5-1/)

### ES6 简介

从上面的 ES 的版本记录可以看出：2015 年 6 月，ES6 正式发布。如果用年份来命名版本号，也可以称之为 ES2015。

ES6 是新的 JS 语法标准。**ES6 实际上是一个泛指，泛指 ES 2015 及后续的版本**。

很多人在做业务选型的时候，会倾向于选 jQuery。其实 jQuery 的语法是偏向于 ES3 的。而现在主流的框架 Vue.js 和 React.js 的默认语法，都是用的 ES6。

ES6 的改进如下：

-   ES6 之前的变量提升，会导致程序在运行时有一些不可预测性。而 ES6 中通过 let、const 变量优化了这一点。

-   ES6 增加了很多功能，比如：**常量、作用域、对象代理、异步处理、类、继承**等。这些在 ES5 中想实现，比较复杂，但是 ES6 对它们进行了封装。

-   ES6 之前的语法过于松散，实现相同的功能，不同的人可能会写出不同的代码。

ES6 的目标是：让 JS 语言可以编写复杂的大型应用程序，成为企业级开发语言。

推荐阅读链接：

- 阮一峰 | ES6 入门教程：https://es6.ruanyifeng.com/

### ES各个版本的浏览器兼容性情况

关于 ECMAScript各个版本的浏览器兼容性情况，可以看看 Juriy Zaytsev 统计的兼容性表格：https://kangax.github.io/compat-table/es5/

这个网站很实用，而且还列出了每个版本里新增的主要API有哪些。

比如说，ES5的兼容性是比较好的：

![20211028_2115](https://img.smyhvae.com/20211028_2115.png)

ES6在IE 11浏览器里就不兼容：

![20211028_2117](http://img.smyhvae.com/20211028_2117.png)

另外，如果我们想在ES5环境中支持ES6的API，可以通过 [ES5-shim](https://github.com/es-shims/es5-shim) 这样的工具来实现。



## 将ES6的语法转为ES5（为了兼容 ES5）

> 掌握 ES6 之后，如果你的业务需要考虑 ES5 的兼容性，则可以这样做：写 ES6 语法的 js 代码，然后通过 `Babel`将 ES6 转换为 ES5。如果没有这样的需要，那么下面的内容，了解即可。

babel 的作用是将 ES6 语法转为 ES5 语法，支持低端浏览器。

但是，在这之前，我们需要配置一下相关的环境。

### 建立工程目录

（1）先建立一个空的工程目录 `ES6Demo`，并在目录下建立两个文件夹 `src`和 `dist`：

-   `src`：书写 ES6 代码，我们写的 js 程序都放在这里。

-   `dist`：利用 Babel 编译生成的 ES5 代码。**我们在 HTML 页面需要引入 dist 里的 js 文件**。

（2）在 src 里新建文件 `index.html`：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
        <!-- 我们引入 ES5 中的 js 文件，而不是引入 ES6 中的 js 文件。 -->
        <script src="./dist/index.js"></script>
    </head>
    <body></body>
</html>
```

**注意**，上方代码中，我们引入的是`dist`目录下的 js 文件。

然后我们新建文件 `src/index.js`：

```javascript
let a = 'smyhvae';
const b = 'qianguyihao';

console.log(a);
console.log(b);
```

这个文件是一个 ES6 语法 的 js 文件，稍后，我们尝试把这个 ES6 语法的 js 文件转化为 ES5 的 js 文件。

PS：我们在写代码时，能用单引号尽量用单引号，而不是双引号，前者在压缩之后，程序执行会更快。

### 全局安装 Babel-cli

（1）初始化项目：

在安装 Babel 之前，需要先用 npm init 先初始化我们的项目。打开终端或者通过 cmd 打开命令行工具，进入项目目录，输入如下命令：

```bash
	npm init -y
```

上方代码中，`-y` 代表全部默认同意，就不用一次次按回车了（稍后再根据需要，在文件中手动修改）。命令执行完成后，会在项目的根目录下生成 package.json 文件：

```json
{
    "name": "es6demo",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "smyhvae",
    "license": "ISC"
}
```

PS：VS Code 里打开终端的快捷键是：`Contol + ~`。

（2）全局安装 Babel-cli：

在终端中输入以下命令：

```bash
	npm install -g babel-cli
```

![](http://img.smyhvae.com/20180304_1305.png)

如果安装比较慢的话，Mac 下可以使用`cnpm`进行安装 ，windows 下可以使用`nrm`切换到 taobao 的镜像。

（3）本地安装 babel-preset-es2015 和 babel-cli：

```bash
	npm install --save-dev babel-preset-es2015 babel-cli
```

![](http://img.smyhvae.com/20180304_1307.png)

安装完成后，会发现`package.json`文件，已经多了 devDependencies 选项：

![](https://img.smyhvae.com/20180304_1308.png)

（4）新建.babelrc：

在根目录下新建文件`.babelrc`，输入如下内容：

```
{
    "presets":[
        "es2015"
    ],
    "plugins":[]
}
```

（5）开始转换：

现在，我们应该可以将 ES6 的文件转化为 ES5 的文件了，命令如下：（此命令略显复杂）

```
	babel src/index.js -o dist/index.js
```

我们可以将上面这个命令进行简化一下。操作如下：

在文件 `package.json` 中修改键 `scripts`中的内容：

```json
  "scripts": {
    "build": "babel src/index.js -o dist/index.js"
  },
```

修改后的效果如下：

![](https://img.smyhvae.com/20180304_1315.png)

目前为止，环境配置好了。以后，我们执行如下命令，即可将`src/index.js`这个 ES6 文件转化为 `dist/index.js`这个 ES5 文件：

```bash
	npm run build
```

我们执行上面的命令之后，会发现， dist 目录下会生成 ES5 的 js 文件：

index.js：

```javascript
'use strict';

var a = 'smyhvae';
var b = 'qianguyihao';

console.log(a);
console.log(b);
```

当我们打开网页后，就可以在浏览器的控制台，看到代码的输出结果。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 03-ES5中的一些扩展
---

<ArticleTopAd></ArticleTopAd>



## JSON 对象

1、js对象(数组) --> json对象(数组)：

```javascript
	JSON.stringify(obj/arr)
```

2、json对象(数组) --> js对象(数组)：


```javascript
	JSON.parse(json)
```


上面这两个方法是ES5中提供的。

我们要记住，我们通常说的“json字符串”，只有两种：**json对象、json数组**。

`typeof json字符串`的返回结果是string。

## Object的扩展

ES5给Object扩展了一些静态方法，常用的有2个，我们接下来讲解。


### 方法一

```javascript
	Object.create(prototype, [descriptors])
```

作用: 以指定对象为原型，创建新的对象。同时，第二个参数可以为为新的对象添加新的属性，并对此属性进行描述。

**举例1**：（没有第二个参数时）

```javascript
    var obj1 = {username: 'smyhvae', age: 26};
    var obj2 = {address:'shenzhen'};

    obj2 = Object.create(obj1);
    console.log(obj2);
```

打印结果：

![](http://img.smyhvae.com/20180401_2150.png)

我们发现，obj1成为了obj2的原型。

**举例2**：（有第二个参数时）

第二个参数可以给新的对象添加新的属性。我们修改上面的代码，尝试给obj2添加新属性`sex`：

```javascript
    var obj1 = {username: 'smyhvae', age: 26};
    var obj2 = {address: 'shenzhen'};

    obj2 = Object.create(obj1, {
        sex: {//给obj2添加新的属性`sex`。注意，这一行的冒号不要漏掉
            value: '男',  //通过value关键字设置sex的属性值
            writable: false,
            configurable: true,
            enumerable: true
        }
    });

    console.log(obj2);

```

上方代码中，我们通过第5行的sex给obj2设置了一个新的属性`sex`，但是要通过`value`来设置属性值（第6行）。

设置完属性值后，这个属性值默认是不可修改的，要通过`writable`来设置。总而言之，这几个关键字的解释如下：

- `value`：设置属性值。

- `writable`：标识当前属性值是否可修改。如果不写的话，默认为false，不可修改。

- `configurable`：标识当前属性是否可以被删除。默认为false，不可删除。

- `enumerable`：标识当前属性是否能用 for in 枚举。 默认为false，不可。

### 方法二

> 这个方法有点难理解。


```javascript
	Object.defineProperties(object, descriptors)
```

**作用**：为指定对象定义扩展多个属性。

代码举例：


```javascript
    var obj2 = {
        firstName : 'smyh',
        lastName : 'vae'
    };
    Object.defineProperties(obj2, {
        fullName : {
            get : function () {
                return this.firstName + '-' + this.lastName
            },
            set : function (data) {  //监听扩展属性，当扩展属性发生变化的时候自动调用，自动调用后将变化的值作为实参注入到set函数
                var names = data.split('-');
                this.firstName = names[0];
                this.lastName = names[1];
            }
        }
    });
    console.log(obj2.fullName);
    obj2.firstName = 'tim';
    obj2.lastName = 'duncan';
    console.log(obj2.fullName);
    obj2.fullName = 'kobe-bryant';
    console.log(obj2.fullName);
```

- get ：用来获取当前属性值的回调函数

- set ：修改当前属性值得触发的回调函数，并且实参即为修改后的值

存取器属性：setter,getter一个用来存值，一个用来取值。

## Object的扩展（二）

obj对象本身就自带了两个方法。格式如下：


```javascript
get 属性名(){} 用来得到当前属性值的回调函数

set 属性名(){} 用来监视当前属性值变化的回调函数

```

举例如下：



```javascript
    var obj = {
        firstName : 'kobe',
        lastName : 'bryant',
        get fullName(){
            return this.firstName + ' ' + this.lastName
        },
        set fullName(data){
            var names = data.split(' ');
            this.firstName = names[0];
            this.lastName = names[1];
        }
    };
    console.log(obj.fullName);
    obj.fullName = 'curry stephen';
    console.log(obj.fullName);
```


## 数组的扩展

> 下面讲的这几个方法，都是给数组的实例用的。

> 下面提到的数组的这五个方法，更详细的内容，可以看《03-JavaScript基础/15-数组的常见方法.md》

**方法1**：


```javascript
	Array.prototype.indexOf(value)
```

作用：获取 value 在数组中的第一个下标。

**方法2**：


```javascript
	Array.prototype.lastIndexOf(value)
```

作用：获取 value 在数组中的最后一个下标。

**方法3**：遍历数组


```javascript
	Array.prototype.forEach(function(item, index){})
```


**方法4**：

```javascript
	Array.prototype.map(function(item, index){})
```

作用：遍历数组返回一个新的数组，返回的是**加工之后**的新数组。


**方法5**：

```javascript
	Array.prototype.filter(function(item, index){})
```

作用：遍历过滤出一个新的子数组，返回条件为true的值。

## 函数function的扩展：bind()

> ES5中新增了`bind()`函数来改变this的指向。


```javascript
	Function.prototype.bind(obj)
```

作用：将函数内的this绑定为obj, 并将函数返回。

**面试题**: call()、apply()和bind()的区别：

- 都能改变this的指向

- call()/apply()是**立即调用函数**

- bind()：绑定完this后，不会立即调用当前函数，而是**将函数返回**，因此后面还需要再加`()`才能调用。

PS：bind()传参的方式和call()一样。

**分析**：

为什么ES5中要加入bind()方法来改变this的指向呢？因为bind()不会立即调用当前函数。

bind()通常使用在回调函数中，因为回调函数并不会立即调用。如果你希望在回调函数中改变this，不妨使用bind()。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 02-ES5中的严格模式
---

<ArticleTopAd></ArticleTopAd>



> 为什么在讲ES6之前，我们需要先了解ES5？因为很多人就是在学习ES6的过程中，才接触到es5这个概念。




## ES的几个重要版本

- ES 5 : 09年发布。

- ES 6(ES2015) : 2015年发布，也称为ECMA2015。

- ES 7(ES2016) : 2016年发布，也称为ECMA2016  (变化不大)。

## 严格模式的理解

我们知道，JS的语法是非常灵活的，比如说，我们随便写一个变量`x`，这个变量其实是挂在 windows下面的。这种灵活性在有些情况下，反而是一种缺点，造成了全局污染。因此，ES5还引入了一种严格的运行模式："严格模式"（strict mode）。

### 概念

顾名思义，严格模式使得 Javascript 在更严格的语法条件下运行。限制性更强，也更安全。

**目的**：

- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为。

- 消除代码运行的一些不安全之处，为代码的安全运行保驾护航。

- 为未来新版本的Javascript做好铺垫

### 使用

- 针对整个文件：将`use strict`放在文件的第一行，则整个文件将以严格模式运行。

- 针对单个函数：将`use strict`放在函数体的第一行，则整个函数以严格模式运行。

PS：如果浏览器不支持，则这句话只会被解析为一条简单的语句，没有任何副作用。

脚本文件的变通写法：因为第一种调用方法不利于文件合并，所以更好的做法是，借用第二种方法，将整个脚本文件放在一个立即执行的匿名函数之中。

### 语法和行为改变

- 必须用var声明变量

- 禁止自定义的函数中的this指向window

- 创建eval作用域

- 对象不能有重名的属性


## 严格模式和普通模式的区别

> 下面列举几条严格模式的内容。

### 全局变量显式声明

在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，全局变量必须显式声明。


### 禁止this关键字指向全局对象：

```javascript
        var foo = function () {
            console.log(this);
        }

        foo();
```
上方代码中，普通模式打印的是window。严格模式下打印的是undefined。

### 创设eval作用域



### 禁止使用with语句

因为with语句无法在编译时就确定，属性到底归属哪个对象。


### 构造函数必须通过new实例化对象

构造函数必须通过new实例化对象，否则报错。因为this为undefined，此时无法设置属性。

比如说：


```
        var Cat = function (name) {
            this.name = name;
        }

        Cat('haha');
```

上方代码中，如果在严格模式下，则会报错。


### 为了让代码更安全，禁止函数内部遍历调用栈

### 严格模式下无法删除变量

### 属性相关

普通模式下，对一个对象的只读属性进行赋值，不会报错，只会默默地失败。严格模式下，将报错。

严格模式下，对禁止扩展的对象添加新属性，会报错。

普通模式下，如果对象有多个重名属性，最后赋值的那个属性会覆盖前面的值。严格模式下，这属于语法错误。


普通模式下，如果函数有多个重名的参数，可以用arguments[i]读取。严格模式下，多个重名的参数属于语法错误。


比如下面这样的代码：

```javascript
	var obj = {
		username: 'smyh';
		username: 'vae'
	}
```

上面的代码，在严格模式下属于语法错误，因为有重名的属性。

### 函数必须声明在顶层


将来Javascript的新版本会引入"块级作用域"。为了与新版本接轨，严格模式只允许在全局作用域或函数作用域的顶层声明函数。也就是说，不允许在非函数的代码块内声明函数。

### 新增关键字

为了向将来Javascript的新版本过渡，严格模式新增了一些保留字：implements, interface, let, package, private, protected, public, static, yield。

## 总结

至少要能答出四五条。


参考链接：

- [阮一峰 | Javascript 严格模式详解](http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html)

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 04-ES6：变量 let、const 和块级作用域
publish: true
---

<ArticleTopAd></ArticleTopAd>

## ES6 的变量声明

ES5 中，使用 `var` 定义变量（ var 是 variable 的简写）。

ES6 中，新增了 let 和 const 来定义变量：

-   `let`：定义**变量**，替代 var。

-   `const`：定义**常量**（定义后，不可修改）。

### var：定义变量（ES5 知识回顾）

看下面的代码：

```javascript
{
    var a = 1;
}

console.log(a); //这里的 a，指的是 区块 里的 a
```

上方代码是可以输出结果的，输出结果为 1。因为 var 是全局声明的，所以，即使是在区块里声明，但仍然在全局起作用。

也就是说：**使用 var 声明的变量不具备块级作用域特性**。

再来看下面这段代码：

```javascript
var a = 1;
{
    var a = 2;
}

console.log(a); //这里的 a，指的是 区块 里的 a
```

上方代码的输出结果为 2 ，因为 var 是全局声明的。

**总结：**

ES5语法中，用 var 定义的变量，容易造成全局污染（污染整个 js 的作用域）。如果不考虑浏览器的兼容性，我们在今后的实战中，**尽量避免**使用 var 定义变量，尽量用接下来要讲的ES6语法。

### 1、let：定义变量

举例 1：

```js
{
    let a = 'hello';
}
console.log(a); // 打印结果报错：Uncaught ReferenceError: a is not defined
```

上方代码，打印报错。

举例 2：

```javascript
var a = 2;
{
    let a = 3;
}

console.log(a); // 打印结果：2
```

通过上面两个例子可以看出，**用块级作用域内， 用let 声明的变量，只在局部起作用**。

**经典面试题**：

let 可以防止数据污染，我们来看下面这个 **for 循环**的经典面试题。

1、用 var 声明变量：

```javascript
for (var i = 0; i < 10; i++) {
    console.log('循环体中:' + i);
}

console.log('循环体外:' + i);
```

上方代码的最后一行可以正常打印结果，且最后一行的打印结果是 10。说明**循环体外**定义的变量 i，是**全局作用域**下的 i。

2、用 let 声明变量：

```javascript
for (let i = 0; i < 10; i++) {
    console.log('循环体中:' + i); // // 每循环一次，就会在 { } 所在的块级作用域中，重新定义一个新的变量 i
}

console.log('循环体外:' + i);
```

上方代码的关键在于：**每次循环都会产生一个块级作用域，每个块级作用域中会重新定义一个新的变量 i**。

另外，上方代码的最后一行，打印会报错。因为用 let 定义的变量 i，只在`{ }`这个**块级作用域**里生效。

**总结：**我们要习惯用 let 声明，减少 var 声明带来的**污染全局空间**。

为了进一步强调 let 不会带来污染，需要说明的是：当我们定义了`let a = 1`时，如果我们在同一个作用域内继续定义`let a = 2`，是会报错的。

### 2、const：定义常量

在程序开发中，有些变量是希望声明后，在业务层就不再发生变化，此时可以用 const 来定义**常量**。常量就是值（内存地址）不能变化的量。

举例：

```javascript
const name = 'smyhvae'; //定义常量
```

用 const 声明的常量，只在局部（块级作用域内）起作用；而且，用 const 声明常量时，必须赋值，否则报错。

### let 和 const 的特点【重要】

-   不属于顶层对象 Window

-   不允许重复声明

-   不存在变量提升

-   暂时性死区

-   支持块级作用域

相反， 用`var`声明的变量：存在变量提升、可以重复声明、**没有块级作用域**。

### var/let/const 的共同点

-   全局作用域中定义的变量，可以在函数中使用。

-   函数中声明的变量，只能在函数及其子函数中使用，外部无法使用。

### 总结

关于 let、const、var 更详细的介绍和区别，可以看本项目的另一篇文章《JavaScript 进阶/var、let、const 的区别》。

## for 循环举例（经典案例）

**代码 1**、我们先来看看如下代码：（用 var 定义变量 i）

```html
<!DOCTYPE html>
<html lang="">
    <head>
        <meta />
        <meta />
        <meta />
        <title>Document</title>
    </head>
    <body>
        <input type="button" value="aa" />
        <input type="button" value="bb" />
        <input type="button" value="cc" />
        <input type="button" value="dd" />

        <script>
            var myBtn = document.getElementsByTagName('input');

            for (var i = 0; i < myBtn.length; i++) {
                myBtn[i].onclick = function () {
                    alert(i);
                };
            }
        </script>
    </body>
</html>
```

上方代码中的运行效果如下：

![](http://img.smyhvae.com/20190904_1030.gif)

你可能会感到诧异，为何点击任何一个按钮，弹出的内容都是 4 呢？这是因为，我们用 var 定义的变量 i，是在全局作用域声明的。整个代码中，自始至终只有一个变量。

for 循环是同步代码，而 onclick 点击事件是异步代码。当我们还没点击按钮之前，同步代码已经执行完了，变量 i 已经循环到 4 了。

也就是说，上面的 for 循环，相当于如下代码：

```javascript
var i = 0;
myBtn[0].onclick = function () {
    alert(i);
};
i++;

myBtn[1].onclick = function () {
    alert(i);
};
i++;

myBtn[2].onclick = function () {
    alert(i);
};
i++;

myBtn[3].onclick = function () {
    alert(i);
};
i++; // 到这里，i 的值已经是4了。因此，当我们点击按钮时，i的值一直都是4
```

**代码 2**、上面的代码中，如果我们改为用 let 定义变量 i：

```html
<!DOCTYPE html>
<html lang="">
    <head>
        <meta />
        <meta />
        <meta />
        <title>Document</title>
    </head>
    <body>
        <input type="button" value="aa" />
        <input type="button" value="bb" />
        <input type="button" value="cc" />
        <input type="button" value="dd" />

        <script>
            var myBtn = document.getElementsByTagName('input');

            for (let i = 0; i < myBtn.length; i++) {
                myBtn[i].onclick = function () {
                    alert(i);
                };
            }
        </script>
    </body>
</html>
```

上方代码中的运行效果如下：

![](http://img.smyhvae.com/20190904_1040.gif)

上面这个运行结果，才是我们预期的效果。我们用 let 定义变量 i，在循环的过程中，每执行一次循环体，就会诞生一个新的 i。循环体执行 4 次，就会有四个 i。

## 补充知识

### 暂时性死区 DTC

ES6 规定：使用 let/const 声明的变量，会使区块形成封闭的作用域。若在声明之前使用变量，就会报错。

也就是说，在使用 let/const 声明变量时，**变量需要先声明，再使用**（声明语句必须放在使用之前）。这在语法上，称为 “暂时性死区”（ temporal dead zone，简称 TDZ）。

DTC 其实是一种保护机制，可以让我们养成良好的编程习惯。

代码举例：

```js
const name = 'qianguyihao';

function foo() {
    console.log(name);
    const name = 'hello';
}

foo(); // 执行函数后，控制台报错：Uncaught ReferenceError: Cannot access 'name' before initialization
```

### ES5 中如何定义常量

ES5中有`Object.defineProperty`这样一个api，可以定义常量。这个API中接收三个参数。

代码举例：

```js
// 定义常量 PI
Object.defineProperty(window, 'PI', {
    value: 3.14,
    writable: false,
});

console.log(PI); // 打印结果：3.14
PI = 6; //尝试修改常量
console.log(PI); //打印结果：3.14，说明修改失败
```




## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 08-JavaScript开发积累
publish: true
---

<ArticleTopAd></ArticleTopAd>



### 方法的注释

方法写完之后（注意，一定要先写完整），我们在方法的前面输入`/**`，然后回车，会发现，注释的格式会自动补齐。

比如：


```javascript
/**
 * 功能：给定元素查找他的第一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstNode(ele){
    var node = ele.firstElementChild || ele.firstChild;
    return node;
}
```

### 断点调试

（1）先让程序运行一遍。

（2）f12，弹出代码调试工具

（3）打断点：

![](http://img.smyhvae.com/20180124_2035.png)

然后刷新页面。

（4）一步步调试，每点击一次，执行一步：

![](http://img.smyhvae.com/20180124_2036.png)

（5）监视变量：

当然，也可以添加变量或者表达式到监视窗口。操作如下：

![](http://img.smyhvae.com/20180124_2037.png)

上图中，选择变量或表达式，然后右键add to watch.

然后监视窗口：

![](http://img.smyhvae.com/20180124_2038.png)


### 2019-05-20-给数组、对象赋值

**数组赋值的正确写法**：

```javascript
this.todayList.splice(0, 0, ...dataList);
```

**对象赋值的正确写法**：

```javascript
Object.assign(obj2, obj1);
```

上方代码中，是将`obj1` 的值追加到`obj2`中。如果对象里的属性名相同，会被覆盖。


### 2019-11-25-在新的窗口中打开url

在原来的窗体中跳转到新页面：

```javascript
window.location.href="要跳转的新页面";
```

在新窗体中打开新页面：

```javascript
window.open('你所要跳转的新页面');
```


### 2019-12-10-JavaScript 新特性：Optional Chaining（可选链式调用）语法

以往写代码，我们一般都这么写：

```javascript
if (result && result.user && result.user.name && result.user.name.length) {
    console.log('qianguyihao');
}
```

有了 Optinal Chain 语法之后，就简洁很多了，可以这么写：


```javascript
if (result?.user?.name?.length) {
    console.log('qianguyihao');
}
```



参考链接：

- 了解 JavaScript 新特性：Optional Chaining：<https://www.infoq.cn/article/2JDORgXrU6VmZ7jlyuFD>

- 原文链接： https://v8.dev/features/optional-chaining



### 2020-04-28-判断字符串的包含关系

```js
var str = 'qiangu2';
if (str == ('qiangu1' || 'qiangu2')) {
    console.log('qianguyihao');
}
```

注意，上面的代码，根本就不会走 console.log 语句，因为if里面的内容是false。

如果我们要判断变量 `str` 是否在 `qiangu1、qiangu2`的合集里，我们应该这样写：

```js
var str = 'qiangu2';
if (str == 'qiangu1' || str == 'qiangu2') {
    console.log('qianguyihao');
}
```



---
title: 07-this
publish: true
---

<ArticleTopAd></ArticleTopAd>



## this

### this的作用

- this可以帮我们简化很多代码。比如`xiaoming.name`、`xiaoming.age`可以直接写成`this.name`、`this.age`。

- 特别是当我们不知道一个对象是什么，或者这个对象没有名字但又很想调用它的时候，就会使用到this对象。

**举例：**

- 遍历DOM对象，绑定click事件，调用当前点击的对象的id，而不是所有对象的id。

代码：

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
    <title>Document</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: green;
            margin: 10px;
        }

    </style>
</head>
<body>
<script>
    window.onload = function () {
        var myDiv = document.getElementsByTagName('div');
        for (var i = 0; i < myDiv.length; i++) {
            myDiv[i].onclick = function () {
                console.log(i);
                console.log(this.id);
            }
        }

    }

</script>
<section>
    <div id="div0"> div0</div>
    <div id="div1"> div1</div>
    <div id="div2"> div2</div>
    <div id="div3"> div3</div>
    <div id="div4"> div4</div>
</section>


</body>
</html>

```


点击其中的任何一个元素后，`i`的打印结果是5。你可能会觉得很惊讶。我们来解释一下：

当代码执行完毕后，i已经等于5了。因为一旦运行程序，for循环已经执行完了，此时i等于5。

现在，我们尝试在 myDiv[i].onclick事件中写代码，如果打印：

```
	console.log(i);  //打印结果为5
```


如果打印：

```
	console.log(myDiv[i].id);
```

上方这行代码，打印会报错，因为i=5；如果想打印每个div的id，应该这样写：

```
	console.log(this.id);
```

你看，this的作用，就体现出来了。

PS：顺便提醒一下，上面的代码中，如果把`var i`改成`let i`，效果又完全不同了。参考链接：[let和var在for循环中的表现](http://blog.csdn.net/stopllL/article/details/64130664)

### 全局作用域中的this

当一段代码在浏览器中执行时，所有的全局变量和对象都是在window对象上定义的。换而言之，所有的全局变量和对象都属于window对象。


## this的定律

this关键字永远指向函数（方法）运行时的**所有者**。

### 函数赋值给变量时，this指向window


比如：

```
var foo1 = args.getInfo;
foo1();

var foo2 = function(){};
foo2();
```


this都是指向window。

### 以函数形式调用时，this永远都是window


### 以方法的形式调用时，this是调用方法的对象


## 解决闭包中的this指向问题


内部函数是可以访问到外部函数的变量的。

方式一：直接通过父函数的名字访问

方式二：如果不知道父函数的名字，在父函数里加一句`_this = this`，此时`_this`相当于父函数的名字。

### 当this遇到一些特殊的函数时











---
title: 05-ES6：变量的解构赋值
publish: true
---

<ArticleTopAd></ArticleTopAd>

## 解构赋值的概念

**解构赋值**：ES6 允许我们，按照一一对应的方式，从数组或者对象中**提取值**，再将提取出来的值赋值给变量。

解构：分解数据结构；赋值：给变量赋值。

解构赋值在实际开发中可以大量减少我们的代码量，并且让程序结构更清晰。

## 数组的解构赋值

数组的结构赋值：将数组中的值按照**位置**提取出来，然后赋值给变量。

### 语法

在 ES6 之前，当我们在为一组变量赋值时，一般是这样写：

```javascript
var a = 1;
var b = 2;
var c = 3;
```

或者是这样写：

```js
var arr = [1, 2, 3];

var a = arr[0];
var b = arr[1];
var c = arr[2];
```

现在有了 ES6 之后，我们可以通过数组解构的方式进行赋值：（根据**位置**进行一一对应）

```javascript
let [a, b, c] = [1, 2, 3];
```

二者的效果是一样的，但明显后者的代码更简洁优雅。

### 未匹配到的情况

数据的结构赋值，是根据位置进行一一对应来赋值的。可如果左边的数量大于右边的数量时（也就是变量的数量大于值的数量时），多余的变量要怎么处理呢？

答案是：如果变量在一一对应时，没有找到对应的值，那么，**多余的变量会被赋值为 undefined**。

### 解构时，左边允许有默认值

在解构赋值时，是允许使用默认值的。举例如下：

```javascript
{
    //一个变量时
    let [foo = true] = [];
    console.log(foo); //输出结果：true
}

{
    //两个变量时
    let [a, b] = ['千古壹号']; //a 赋值为：千古壹号。b没有赋值
    console.log(a + ',' + b); //输出结果：千古壹号,undefined
}

{
    //两个变量时
    let [a, b = 'qianguyihao'] = ['千古壹号']; //a 赋值为：千古壹号。b 采用默认值 qianguyihao
    console.log(a + ',' + b); //输出结果：千古壹号,qianguyihao
}
```

### 将右边的 `undefined`和`null`赋值给变量

如果我们在赋值时，采用的是 `undefined`或者`null`，那会有什么区别呢？

```javascript
{
    let [a, b = 'qianguyihao'] = ['千古壹号', undefined]; //b 虽然被赋值为 undefined，但是 b 会采用默认值
    console.log(a + ',' + b); //输出结果：千古壹号,qianguyihao
}

{
    let [a, b = 'qianguyihao'] = ['千古壹号', null]; //b 被赋值为 null
    console.log(a + ',' + b); //输出结果：千古壹号,null
}
```

上方代码分析：

-   undefined：相当于什么都没有，此时 b 采用默认值。

-   null：相当于有值，但值为 null。

## 对象的解构赋值

对象的结构赋值：将对象中的值按照**属性匹配的方式**提取出来，然后赋值给变量。

### 语法

在 ES6 之前，我们从接口拿到 json 数据后，一般这么赋值：

```javascript
var name = json.name;

var age = json.age;

var sex = json.sex;
```

上面这种写法，过于麻烦了。

现在，有了 ES6 之后，我们可以使用对象解构的方式进行赋值。举例如下：

```js
const person = { name: 'qianguyihao', age: 28, sex: '男' };
let { name, age, sex } = person; // 对象的结构赋值

console.log(name); // 打印结果：qianguyihao
console.log(age); // 打印结果：28
console.log(sex); // 打印结果：男
```

上方代码可以看出，对象的解构与数组的结构，有一个重要的区别：**数组**的元素是按次序排列的，变量的取值由它的**位置**决定；而**对象的属性没有次序**，是**根据键来取值**的。


### 未匹配到的情况

对象的结构赋值，是根据属性名进行一一对应来赋值的。可如果左边的数量大于右边的数量时（也就是变量的数量大于值的数量时），多余的变量要怎么处理呢？

答案是：如果变量在一一对应时，没有找到对应的值，那么，**多余的变量会被赋值为 undefined**。


### 给左边的变量自定义命名

对象的结构赋值里，左边的变量名一定要跟右边的属性名保持一致么？答案是不一定。我们可以单独给左边的变量自定义命名。

举例如下：

```js
const person = { name: 'qianguyihao', age: 28 };
let { name: myName, age: myAge } = person; // 对象的结构赋值

console.log(myName); // 打印结果：qianguyihao
console.log(myAge); // 打印结果：28

console.log(name); // 打印报错：Uncaught ReferenceError: name is not defined
console.log(age); // 打印报错：Uncaught ReferenceError: age is not defined
```

上方的第 2 行代码中：（请牢记）

-   等号左边的属性名 name、age 是对应等号右边的属性名。

-   等号左边的 myName、myAge 是左边自定义的变量名。

或者，我们也可以理解为：将右边 name 的值赋值给左边的 myName 变量，将右边 age 的值赋值给左边的 myAge 变量。现在，你应该一目了然了吧？



### 圆括号的使用

如果变量 foo 在解构之前就已经定义了，此时你再去解构，就会出现问题。下面是错误的代码，编译会报错：

```javascript
	let foo = 'haha';
	{ foo } = { foo: 'smyhvae' };
	console.log(foo);

```

要解决报错，只要在解构的语句外边，加一个圆括号即可：

```javascript
let foo = 'haha';
({ foo } = { foo: 'smyhvae' });
console.log(foo); //输出结果：smyhvae
```

## 字符串解构

字符串也可以解构，这是因为，此时字符串被转换成了一个类似数组的对象。举例如下：

```javascript
const [a, b, c, d] = 'hello';
console.log(a);
console.log(b);
console.log(c);

console.log(typeof a); //输出结果：string
```

打印结果：

```
h
e
l
string
```



## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)

---
title: 06-ES6：箭头函数
publish: true
---

<ArticleTopAd></ArticleTopAd>

## 前言

ES6 在**函数扩展**方面，新增了很多特性。例如：

-   箭头函数

-   参数默认值

-   参数结构赋值

-   剩余参数

- 扩展运算符

-   this 绑定

-   尾调用

今天这篇文章，我们讲一下箭头函数。

## 箭头函数

### 定义箭头函数的语法

语法：

```js
(参数1, 参数2 ...) => { 函数体 }
```

解释：

-   如果有且仅有 1 个形参，则`()`可以省略

-   如果函数体内有且仅有 1 条语句，则`{}`可以省略，但前提是，这条语句必须是 return 语句。

需要强调的是，箭头函数是没有函数名的，既然如此，那要怎么调用箭头函数呢？你可以将箭头函数赋值给一个变量，通过变量名调用函数；也可以直接使用箭头函数。我们来看看下面的例子。

### 举例

写法 1、定义和调用函数：（传统写法）

```javascript
function fn1(a, b) {
    console.log('haha');
    return a + b;
}

console.log(fn1(1, 2)); //输出结果：3
```

写法 2、定义和调用函数：（ES6 中的写法）

```javascript
const fn2 = (a, b) => {
    console.log('haha');
    return a + b;
};

console.log(fn2(1, 2)); //输出结果：3
```

上面的两种写法，效果是一样的。

从上面的箭头函数中，我们可以很清晰地看到变量名、参数名、函数体。

另外，箭头函数的写法还可以精简一下，继续往下看。

在箭头函数中，如果方法体内只有一句话，且这句话是 return 语句，那就可以把 `{}`省略。写法如下：

```javascript
const fn2 = (a, b) => a + b;

console.log(fn2(1, 2)); //输出结果：3
```

在箭头函数中，如果形参只有一个参数，则可以把`()`省略。写法如下：

```js
const fn2 = (a) => {
    console.log('haha');
    return a + 1;
};

console.log(fn2(1)); //输出结果：2
```

## 箭头函数的 this 的指向

> 箭头函数只是为了让函数写起来更简洁优雅吗？当然不只是这个原因，还有一个很大的作用是与 this 的指向有关。

ES6 之前的普通函数中：this 指向的是函数被调用的对象（也就是说，谁调用了函数，this 就指向谁）。

而 ES6 的箭头函数中：**箭头函数本身不绑定 this**，this 指向的是**箭头函数定义位置的 this**（也就是说，箭头函数在哪个位置定义的，this 就跟这个位置的 this 指向相同）。

代码举例：

```js
const obj = { name: '千古壹号' };

function fn1() {
    console.log(this); // 第一个 this
    return () => {
        console.log(this); // 第二个 this
    };
}

const fn2 = fn1.call(obj);
fn2();
```

打印结果：

```
obj
obj
```

代码解释：（一定要好好理解下面这句话）

上面的代码中，箭头函数是在 fn1()函数里面定义的，所以第二个 this 跟 第一个 this 指向的是**同一个位置**。又因为，在执行 `fn1.call(obj)`之后，第一个 this 就指向了 obj，所以第二个 this 也是指向 了 obj。

### 面试题：箭头函数的 this 指向

代码举例：

```js
var name = '许嵩';
var obj = {
    name: '千古壹号',
    sayHello: () => {
        console.log(this.name);
    },
};

obj.sayHello();
```

上方代码的打印结果是什么？你可能很难想到。

正确答案的打印结果是`许嵩`。因为 `obj` 这个对象并不产生作用域， `sayHello()` 这个箭头函数实际仍然是定义在 window 当中的，所以 这里的 this 指向是 window。

## 参数默认值

**传统写法**：

```javascript
function fn(param) {
    let p = param || 'hello';
    console.log(p);
}
```

上方代码中，函数体内的写法是：如果 param 不存在，就用 `hello`字符串做兜底。这样写比较啰嗦。

**ES6 写法**：（参数默认值的写法，很简洁）

```javascript
function fn(param = 'hello') {
    console.log(param);
}
```

在 ES6 中定义方法时，我们可以给方法里的参数加一个**默认值**（缺省值）：

-   方法被调用时，如果没有给参数赋值，那就是用默认值；

-   方法被调用时，如果给参数赋值了新的值，那就用新的值。

如下：

```javascript
var fn2 = (a, b = 5) => {
    console.log('haha');
    return a + b;
};
console.log(fn2(1)); //第二个参数使用默认值 5。输出结果：6

console.log(fn2(1, 8)); //输出结果：9
```

**提醒 1**：默认值的后面，不能再有**没有默认值的变量**。比如`(a,b,c)`这三个参数，如果我给 b 设置了默认值，那么就一定要给 c 设置默认值。

**提醒 2**：

我们来看下面这段代码：

```javascript
let x = 'smyh';
function fn(x, y = x) {
    console.log(x, y);
}
fn('vae');
```

注意第二行代码，我们给 y 赋值为`x`，这里的`x`是括号里的第一个参数，并不是第一行代码里定义的`x`。打印结果：`vae vae`。

如果我把第一个参数改一下，改成：

```javascript
let x = 'smyh';
function fn(z, y = x) {
    console.log(z, y);
}
fn('vae');
```

此时打印结果是：`vae smyh`。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)---
title: 08-字符串、数组、对象的扩展
publish: true
---

<ArticleTopAd></ArticleTopAd>

## 字符串的扩展

> 下面提到的字符串的几个方法，更详细的内容，可以看《04-JavaScript 基础/内置对象 String：字符串的常见方法.md》。

ES6 中的字符串扩展如下：

-   `includes(str)`：判断是否包含指定的字符串

-   `startsWith(str)`：判断是否以指定字符串开头

-   `endsWith(str)`：判断是否以指定字符串结尾

-   `repeat(count)`：重复指定次数

举例如下：

```javascript
let str = 'abcdefg';

console.log(str.includes('a')); //true
console.log(str.includes('h')); //false

//startsWith(str) : 判断是否以指定字符串开头
console.log(str.startsWith('a')); //true
console.log(str.startsWith('d')); //false

//endsWith(str) : 判断是否以指定字符串结尾
console.log(str.endsWith('g')); //true
console.log(str.endsWith('d')); //false

//repeat(count) : 重复指定次数a
console.log(str.repeat(5));
```

打印结果：

![](http://img.smyhvae.com/20180402_1050.png)

## Number 的扩展

-   二进制与八进制数值表示法: 二进制用`0b`, 八进制用`0o`。

举例：

```javascript
console.log(0b1010); //10
console.log(0o56); //46
```

-   `Number.isFinite(i)`：判断是否为有限大的数。比如`Infinity`这种无穷大的数，返回的就是 false。

-   `Number.isNaN(i)`：判断是否为 NaN。

-   `Number.isInteger(i)`：判断是否为整数。

-   `Number.parseInt(str)`：将字符串转换为对应的数值。

-   `Math.trunc(i)`：去除小数部分。

举例：

```javascript
//Number.isFinite(i) : 判断是否是有限大的数
console.log(Number.isFinite(NaN)); //false
console.log(Number.isFinite(5)); //true
console.log(Number.isFinite(Infinity)); //false

//Number.isNaN(i) : 判断是否是NaN
console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN(5)); //falsse

//Number.isInteger(i) : 判断是否是整数
console.log(Number.isInteger(5.23)); //false
console.log(Number.isInteger(5.0)); //true
console.log(Number.isInteger(5)); //true

//Number.parseInt(str) : 将字符串转换为对应的数值
console.log(Number.parseInt('123abc')); //123
console.log(Number.parseInt('a123abc')); //NaN

// Math.trunc(i) : 直接去除小数部分
console.log(Math.trunc(13.123)); //13
```

## 数组的扩展

> 下面提到的数组的几个方法，更详细的内容，可以看《04-JavaScript 基础/数组的常见方法.md》。

-   Array.from()

-   find()

-   findIndex()

## 对象的扩展

### 扩展 1

```javascript
Object.is(v1, v2);
```

**作用：**判断两个数据是否完全相等。底层是通过**字符串**来判断的。

我们先来看下面这两行代码的打印结果：

```javascript
console.log(0 == -0);
console.log(NaN == NaN);
```

打印结果：

```
	true
	false
```

上方代码中，第一行代码的打印结果为 true，这个很好理解。第二行代码的打印结果为 false，因为 NaN 和任何值都不相等。

但是，如果换成下面这种方式来比较：

```javascript
console.log(Object.is(0, -0));
console.log(Object.is(NaN, NaN));
```

打印结果却是：

```bash
	false
	true
```

代码解释：还是刚刚说的那样，`Object.is(v1, v2)`比较的是字符串是否相等。

### Object.assign()

Object.assign() 在实战开发中，使用到的频率非常高，一定要重视。关于它的内容，详见《04-JavaScript 基础/浅拷贝和深拷贝.md》。

### 扩展 3：`__proto__`属性

举例：

```javascript
let obj1 = { name: 'smyhvae' };
let obj2 = {};

obj2.__proto__ = obj1;

console.log(obj1);
console.log(obj2);
console.log(obj2.name);
```

打印结果：

![](http://img.smyhvae.com/20180404_2251.png)

上方代码中，obj2 本身是没有属性的，但是通过`__proto__`属性和 obj1 产生关联，于是就可以获得 obj1 里的属性。


## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)---
title: 07-剩余参数和扩展运算符
publish: true
---

<ArticleTopAd></ArticleTopAd>

## 剩余参数

**剩余参数**允许我们将不确定数量的**剩余的元素**放到一个**数组**中。

比如说，当函数的实参个数大于形参个数时，我们可以将剩余的实参放到一个数组中。

**传统写法**：

ES5 中，在定义方法时，参数要确定个数，如下：（程序会报错）

```javascript
function fn(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

fn(1, 2, 3);
```

上方代码中，因为方法的参数是三个，但使用时是用到了四个参数，所以会报错：

![](http://img.smyhvae.com/20180304_1638.png)

**ES6 写法**：

ES6 中，我们有了剩余参数，就不用担心报错的问题了。代码可以这样写：

```javascript
const fn = (...args) => {
    //当不确定方法的参数时，可以使用剩余参数
    console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);
    console.log(args[3]);
};

fn(1, 2);
fn(1, 2, 3); //方法的定义中了四个参数，但调用函数时只使用了三个参数，ES6 中并不会报错。
```

打印结果：

```bash
1
2
undefined
undefined


1
2
3
undefined
```

上方代码中注意，args 参数之后，不能再加别的参数，否则编译报错。

下面这段代码，也是利用到了剩余参数：

```js
function fn1(first, ...args) {
    console.log(first); // 10
    console.log(args); // 数组：[20, 30]
}

fn1(10, 20, 30);
```

### 剩余参数的举例：参数求和

代码举例：

```js
const sum = (...args) => {
    let total = 0;
    args.forEach(item => total += item); // 注意 forEach里面的代码，写得 很精简
    return total;
};
console.log(sum(10, 20, 30));
```

打印结果：60

### 剩余参数和解构赋值配合使用

代码举例：

```js
const students = ['张三', '李四', '王五'];
let [s1, ...s2] = students;

console.log(s1); // '张三'
console.log(s2); // ['李四', '王五']
```

## 扩展运算符（展开语法）

扩展运算符和剩余参数是相反的。

剩余参数是将剩余的元素放到一个数组中；而扩展运算符是将数组或者对象拆分成逗号分隔的参数序列。

代码举例：

```js
const arr = [10, 20, 30];
...arr // 10, 20, 30      注意，这一行是伪代码，这里用到了扩展运算符
console.log(...arr); // 10 20 30

console.log(10, 20, 30); // 10 20 30
```

上面的代码要仔细看：

`arr`是一个数组，而`...arr`则表示`10, 20, 30`这样的序列。

我们把`...arr` 打印出来，发现打印结果竟然是 `10 20 30`，为啥逗号不见了呢？因为逗号被当作了 console.log 的参数分隔符。如果你不信，可以直接打印 `console.log(10, 20, 30)` 看看。

接下来，我们看一下扩展运算符的应用。

### 举例1：数组赋值

数组赋值的代码举例：

```js
let arr2 = [...arr1]; // 将 arr1 赋值给 arr2
```

为了理解上面这行代码，我们先来分析一段代码：（将数组 arr1 赋值给 arr2）

```javascript
let arr1 = ['www', 'smyhvae', 'com'];
let arr2 = arr1; // 将 arr1 赋值给 arr2，其实是让 arr2 指向 arr1 的内存地址
console.log('arr1:' + arr1);
console.log('arr2:' + arr2);
console.log('---------------------');

arr2.push('你懂得'); //往 arr2 里添加一部分内容
console.log('arr1:' + arr1);
console.log('arr2:' + arr2);
```

运行结果：

![](http://img.smyhvae.com/20180304_1950.png)

上方代码中，我们往往 arr2 里添加了`你懂的`，却发现，arr1 里也有这个内容。原因是：`let arr2 = arr1;`其实是让 arr2 指向 arr1 的地址。也就是说，二者指向的是同一个内存地址。

如果不想让 arr1 和 arr2 指向同一个内存地址，我们可以借助**扩展运算符**来做：

```javascript
let arr1 = ['www', 'smyhvae', 'com'];
let arr2 = [...arr1]; //【重要代码】arr2 会重新开辟内存地址
console.log('arr1:' + arr1);
console.log('arr2:' + arr2);
console.log('---------------------');

arr2.push('你懂得'); //往arr2 里添加一部分内容
console.log('arr1:' + arr1);
console.log('arr2:' + arr2);
```

运行结果：

```bash
arr1:www,smyhvae,com
arr2:www,smyhvae,com
---------------------
arr1:www,smyhvae,com
arr2:www,smyhvae,com,你懂得
```

我们明白了这个例子，就可以避免开发中的很多业务逻辑上的 bug。

### 举例2：合并数组

代码举例：

```js
let arr1 = ['王一', '王二', '王三'];
let arr2 = ['王四', '王五', '王六'];
// ...arr1  // '王一','王二','王三'
// ...arr2  // '王四','王五','王六'

// 方法1
let arr3 = [...arr1, ...arr2];
console.log(arr3); // ["王一", "王二", "王三", "王四", "王五", "王六"]

// 方法2
arr1.push(...arr2);
console.log(arr1); // ["王一", "王二", "王三", "王四", "王五", "王六"]
```

### 举例3：将伪数组或者可遍历对象转换为真正的数组

代码举例：

```js
const myDivs = document.getElementsByClassName('div');
const divArr = [...myDivs]; // 利用扩展运算符，将伪数组转为真正的数组
```

**补充**：

我们在《JavaScript基础/数组的常见方法》中也学过，还有一种方式，可以将伪数组（或者可遍历对象）转换为真正的数组。语法格式如下：

```js
let arr2 = Array.from(arrayLike);
```


## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 09-内置对象扩展：Set数据结构
publish: true
---

<ArticleTopAd></ArticleTopAd>

## Set 数据结构

### Set 数据结构的介绍

ES6 提供了 新的数据结构 Set。Set 类似于**数组**，但成员的值都是**唯一**的，没有重复的值。

Set 的应用有很多。比如，在 H5 页面的搜索功能里，用户可能会多次搜索重复的关键字；但是在数据存储上，不需要存储重复的关键字。此时，我们就可以用 Set 来存储用户的搜索记录，Set 内部会自动判断值是否重复，如果重复，则不会进行存储，十分方便。

### 生成 Set 数据结构

Set 本身就是一个构造函数，可通过 `new Set()` 生成一个 Set 的实例。

举例 1：

```js
const set1 = new Set();
console.log(set1.size); // 打印结果：0
```

**举例 2**、可以接收一个**数组**作为参数，实现**数组去重**：

```js
const set2 = new Set(['张三', '李四', '王五', '张三']); // 注意，这个数组里有重复的值

// 注意，这里的 set2 并不是数组，而是一个单纯的 Set 数据结构
console.log(set2); // {"张三", "李四", "王五"}

// 通过扩展运算符，拿到 set 中的元素（用逗号分隔的序列）
// ...set2 //  "张三", "李四", "王五"

// 注意，到这一步，才获取到了真正的数组
console.log([...set2]); // ["张三", "李四", "王五"]
```

注意上方的第一行代码，虽然参数里传递的是数组结构，但拿到的 `set2` 不是数组结构，而是 Set 结构，而且里面元素是去重了的。通过 `[...set2]`就可以拿到`set2`对应的数组。


## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
publish: false
---



## Symbol

### 概述

背景：ES5中对象的属性名都是字符串，容易造成重名，污染环境。

**概念**：ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。


**特点：**

- Symbol属性对应的值是唯一的，解决**命名冲突问题**

- Symbol值不能与其他数据进行计算，包括同字符串拼串

- for in、for of 遍历时不会遍历Symbol属性。


### 创建Symbol属性值

Symbol是函数，但并不是构造函数。创建一个Symbol数据类型：

```javascript
    let mySymbol = Symbol();

    console.log(typeof mySymbol);  //打印结果：symbol
    console.log(mySymbol);         //打印结果：Symbol()
```

打印结果：

![](http://img.smyhvae.com/20180317_1134.png)

下面来讲一下Symbol的使用。

### 1、将Symbol作为对象的属性值

```javascript
    let mySymbol = Symbol();

    let obj = {
        name: 'smyhvae',
        age: 26
    };

    //obj.mySymbol = 'male'; //错误：不能用 . 这个符号给对象添加 Symbol 属性。
    obj[mySymbol] = 'hello';    //正确：通过**属性选择器**给对象添加 Symbol 属性。后面的属性值随便写。

    console.log(obj);
```

上面的代码中，我们尝试给obj添加一个Symbol类型的属性值，但是添加的时候，不能采用`.`这个符号，而是应该用`属性选择器`的方式。打印结果：

![](http://img.smyhvae.com/20180317_1134.png)

现在我们用for in尝试对上面的obj进行遍历：

```javascript
    let mySymbol = Symbol();

    let obj = {
        name: 'smyhvae',
        age: 26
    };

    obj[mySymbol] = 'hello';

    console.log(obj);

    //遍历obj
    for (let i in obj) {
        console.log(i);
    }
```

打印结果：

![](http://img.smyhvae.com/20180317_1134.png)

从打印结果中可以看到：for in、for of 遍历时不会遍历Symbol属性。

### 创建Symbol属性值时，传参作为标识

如果我通过 Symbol()函数创建了两个值，这两个值是不一样的：

```javascript
    let mySymbol1 = Symbol();
    let mySymbol2 = Symbol();

    console.log(mySymbol1 == mySymbol2); //打印结果：false
    console.log(mySymbol1);         //打印结果：Symbol()
    console.log(mySymbol2);         //打印结果：Symbol()
```

![](http://img.smyhvae.com/20180317_1134.png)

上面代码中，倒数第三行的打印结果也就表明了，二者的值确实是不相等的。

最后两行的打印结果却发现，二者的打印输出，肉眼看到的却相同。那该怎么区分它们呢？

既然Symbol()是函数，函数就可以传入参数，我们可以通过参数的不同来作为**标识**。比如：


```javascript
    //在括号里加入参数，来标识不同的Symbol
    let mySymbol1 = Symbol('one');
    let mySymbol2 = Symbol('two');

    console.log(mySymbol1 == mySymbol2); //打印结果：false
    console.log(mySymbol1);         //打印结果：Symbol(one)
    console.log(mySymbol2);         //打印结果：Symbol(two)。颜色为红色。
    console.log(mySymbol2.toString());//打印结果：Symbol(two)。颜色为黑色。
```

打印结果：

![](http://img.smyhvae.com/20180317_1134.png)

### 定义常量

Symbol 可以用来定义常量：


```javascript
    const MY_NAME = Symbol('my_name');
```


### 内置的 Symbol 值

除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法。

- `Symbol.iterator`属性

对象的`Symbol.iterator`属性，指向该对象的默认遍历器方法。
---
title: 00-服务器分类及PHP入门
publish: true
---

<ArticleTopAd></ArticleTopAd>




## C/S架构和B/S架构

### C/S架构

是Client/Server这两个单词的首字母，指的是客户端，服务器。

优点:

- 性能较高：可以将一部分的计算工作放在客户端上,这样服务器只需要处理数据即可。

- 界面酷炫:客户端可以使用更多系统提供的效果,做出更为炫目的效果。

缺点:

- 更新软件：如果有新的功能，就要推出新的版本。

- 不同设备访问：如果使用其他的电脑，没有安装客户端的话就无法登陆软件。






### B/S架构

是Browser/Server的这两个单词的首字母。指的是浏览器、服务器，是WEB兴起之后的一种架构。

现在所有的网站都是B/S架构，较为常见的例子有百度、知乎、网易云音乐Web等等，只需要通过浏览器即可使用.

优点：

- 更新简洁：如果需要更新内容了,对开发人员而言需要更改服务器的内容，对用户而言只需要刷新浏览器即可。

- 多设备同步：所有数据都在网上,只要能够使用浏览器即可登录使用。

缺点:

- 性能较低：相比于客户端应用性能较低,但是随着硬件性能的提升,这个差距在缩小。

- 浏览器兼容：处理低版本的浏览器显示问题一直是前端开发人员头痛的问题之一。移动设备兼容性较好，ie6已经越来越少人用了。


## 服务器分类

项目开发时，有三套环境：

- Development 开发环境

- Test 测试环境

- Production 生产环境

程序员平时干活儿用开发环境；开发完成后，部署到测试环境；测试完成后，产品上线，部署到生产环境。

三套环境意味着三个服务器。

### 服务器类型



按类型分：

- 文件服务器

- 数据库服务器

- 邮件服务器

- Web 服务器等


按软件分：

- Apache 服务器

- Nginx 服务器

- IIS 服务器

- Tomcat 服务器

- Node 服务器等


按操作系统分：

- Linux服务器

- Windows服务器等


### 服务器软件

提供了某种服务的计算器，我们称之为服务器。那么这些赋予计算器各种服务功能的软件主要有哪一些呢？

常见的服务器软件有：

- 文件服务器：Server-U、FileZilla、VsFTP等；

- 数据库服务器：Oracle、MySQL、PostgreSQL、MSSQL等；

- 邮件服务器：Postfix、Sendmail等；

- HTTP 服务器：Apache（免费、开源）、Nginx、IIS（微软的.net服务器）、Tomcat（java编程的服务器）、NodeJS 等。


## 使用 WampServer 搭建 HTTP服务

### 集成环境的分类

- AMP：Apache + Mysql + PHP。

- WAMP：windows + Apache + Mysql + PHP。

- XAMPP：WAMP 是针对windows的，而 XAMPP 可以安装在Linux、Windows、MacOS、Solaris这些操作系统上面。

在windows平台下，如果想要一步到位安装好这些软件，可是使用软件 **WampServer**。

### WampServer 的安装

去 WampServer 的[官网](http://www.wampserver.com/en/)下载软件。

![](http://img.smyhvae.com/20180227_1936.png)


安装完成后进行安装。

### 测试访问

打开浏览器输入 `127.0.0.1` 查看显示的内容，如果是第一次安装，默认显示的应该是如下图片：


![](http://img.smyhvae.com/20180227_2203.png)

127.0.0.1 是回送地址，指本地机，一般用来测试使用，如果想要让其他电脑也能够访问，需要进行如下配置：

（1）关闭防火墙：


![](http://img.smyhvae.com/20180227_2207.gif)

（2）修改httpd.conf文件：

因为 Apache 的配置默认不允许外部访问，我们需要修改配置。

打开文件`c:\wamp\bin\apache\Apache2.2.21\conf\httpd.conf`，通过搜索功能找到`onlineoffline tag - don't remove`这句话，在第234行的 `Allow from 127.0.0.1`的下面，加一行：`Allow from all`。

然后将第192行的`Deny from all`改为`Allow from all`。


保存，然后重启 wamp 即可。


### 配置网站根目录

网站的根目录默认是在`D:\wamp\www`。如果想修改这个根目录，可以这样改：

打开 Apache的配置文件 `D:\wamp\bin\apache\Apache2.2.21\conf\http.conf`，如果是初次安装，找到178行的`DocumentRoot "d:/wamp/www/"`，以及205行的`<Directory "d:/wamp/www/">`，改这两个位置的路径即可。我们可以通过搜索关键字`documentRoot`来定位。



## 静态网站和动态网站

静态网站：

- 访问的是实实在在保存在服务器上的文件。静态资源包括：html页面、css文件、js文件、图片等。

- 当内容、图片、界面需要更新时，直接修改.html文件。

动态网站：

- 当用户访问网站时，根据`某些逻辑`,动态生成对应的`HTML、CSS、JS`代码给用户（这也就是web服务器开发的本质）。

- 通过某种手段，当有新的消息时，**自动**的完成网站的更新。

总结：

由于静态网站在维护的局限性，所以产生了动态网站。

实现动态网站的技术：php/jsp/.net/python等。

动态网站的原理：浏览器请求动态网站的页面（比如*.php），php拼接数据并动态生成html页面，然后将新生成的页面返回给浏览器

php 之所以被称为最好的语言，是因为：基本上，我们能够想到的功能，它都帮助我们封装成了方法。十分方便。


## PHP的常见语法

**PHP代码执行方式**：

- 在服务器端执行，然后返回给用户结果。如果直接使用浏览器打开，就会解析为文本。

- 意思是说，需要浏览器通过 http请求，才能够执行php页面。

这里只列举常用的PHP语法，更为详细的语法教程可以查阅 [api 文档](http://www.w3school.com.cn/php/index.asp)。

### 第一段 php 代码

将 WampServer 跑起来，在D:\wamp\www下新建一个`1.php`文件，代码如下：

1.php：

```
<?php
	echo "hello smyhvae";
?>
```


在浏览器中输入`http://127.0.0.1/2018-02-28/1.php`，效果如下：

![](http://img.smyhvae.com/20180228_0910.png)


**代码的编写位置**：

上方代码中，注意php语言的格式，第一行和第三行的格式中，没有空格。代码的编写位置在`<?php 代码写在这里?>`。

### 注释

php 注释的写法跟 js 一致。

```
<?php
	//这是单行注释
	/*
		这是多行注释
	*/
?>
```


### 变量

- 变量以`$`符号开头，其后是变量的名称。大小写敏感。

- 变量名称必须以字母或下划线开头。

举例：

```
	$a1;
	$_abc;
```

### 数据类型

PHP支持的数据类型包括：

- 字符串

- 整数

- 浮点数

- 布尔

- 数组

- 对象

- NULLL


定义字符串时需要注意：

- 单引号`` ：内部的内容只是作为字符串。

- 双引号"" ：如果内部是PHP的变量,那么会将该变量的值解析。如果内部是html代码，也会解析成html。


说白了，单引号里的内容，一定是字符串。双引号里的内容，可能会进行解析。

```
	echo "<input type=`button` value=`smyhvae`>";
```

上面这个语句，就被会解析成按钮。


```
	// 字符串
	$str = '123';

	// 字符串拼接
	$str2 = '123'.'哈哈哈';


	// 整数
	$numA = 1; //正数
	$numB = -2;//负数

	// 浮点数
	$x = 1.1;

	// 布尔
	$a = true;
	$b = false;

	// 普通数组：数组中可以放 数字、字符串、布尔值等，不限制类型。
	$arr1 = array('123', 123);
	echo $arr1[0];

	// 关系型数组：类似于json格式
	$arr2 = $array(`name`=>`smyhvae`, `age`=>`26`);
	echo $arr2[`name`];  //获取时，通过  key 来获取

```

上方代码中注意，php 中字符串拼接的方式是 `.`。要注意哦。


### 运算符

PHP 中的运算符跟 JavaScript 中的基本一致，用法也基本一致。

- 算数运算符：`+`、`-`、`/`、`*`、`%`

- 赋值运算符：`x = y`、`x += y`,`x -= y`等。

举例：

```php
<?php
	$x = 10;
	$y = 6;

	echo ($x + $y); // 输出 16
	echo ($x - $y); // 输出 4
	echo ($x * $y); // 输出 60
	echo ($x / $y); // 输出 1.6666666666667
	echo ($x % $y); // 输出 4
?>
```

### 函数的定义

语法格式：

```php

	function functionName() {
	  //这里写代码
	}
```

（1）有参数、无返回值的函数：

```php
	function sayName($name){
	    echo $name.'你好哦';
	}
	// 调用
	sayName('smyhvae');
```

（2）有参数、参数有默认值的函数：

```php
	function sayFood($food='西兰花'){
	    echo $food.'好吃';
	}
	// 调用
	sayFood('西葫芦');// 如果传入参数,就使用传入的参数
	sayFood();// 如果不传入参数,直接使用默认值
```

（3）有参数、有返回值的函数：

```php
	function sum($a,$b){
		return $a+$b
	}
	sum(1,2);// 返回值为1+2 = 3
```

### 类和对象

PHP中允许使用对象这种**自定义**的数据类型。必须先声明，实例化之后才能够使用。

定义最基础的类：

```php
	class Fox{

	        public $name = 'itcast';
	        public $age = 10;
	}

	$fox = new $fox;
	// 对象属性取值
	$name = $fox->name;
	// 对象属性赋值
	$fox->name = '小狐狸';
```


带构造函数的类：

```php
	class fox{
	    // 私有属性,外部无法访问
	    var $name = '小狐狸';
	    // 定义方法 用来获取属性
	    function Name(){
	    return $this->name;
	    }
	    // 构造函数,可以传入参数
	    function fox($name){
	    $this->name = $name
	    }
	}

    // 定义了构造函数 需要使用构造函数初始化对象
    $fox = new fox('小狐狸');
    // 调用对象方法,获取对象名
    $foxName = $fox->Name();
```



### 内容输出

- `echo`：输出字符串。

- `print_r()`：输出复杂数据类型。比如数组、对象。

- `var_dump()`：输出详细信息。






```php
	$arr =array(1,2,'123');

	echo'123';
	//结果：123


	print_r($arr);
	//结果：Array ( [0] => 1 [1] => 2 [2] => 123 )

	var_dump($arr);
	/* 结果：
	array
	  0 => int 1
	  1 => int 2
	  2 => string '123' (length=3)
	*/

```

### 循环语句

这里只列举了`foreach`、`for`循环。

for 循环：

```php
	for ($x=0; $x<=10; $x++) {
	  echo "数字是：$x <br>";
	}

```


foreach 循环：

```php
	$colors = array("red","green","blue","yellow");

	foreach ($colors as $value) {
	  echo "$value <br>";
	}
```

上方代码中，参数一：循环的对象。参数二：将对象的值挨个取出，直到最后。

如果循环的是对象，输出的是对象的属性的值。

输出结果：


```bash
	red
	green
	blue
	yellow
```


## php中的header()函数

浏览器访问http服务器，接收到响应时，会根据响应**报文头**的内容进行一些具体的操作。在php中，我们可以根据 **header** 来设置这些内容。


**header()函数的作用**：用来向客户端(浏览器)发送报头。直接写在php代码的第一行就行。

下面列举几个常见的 header函数。

（1）设置编码格式：

```php
	header('content-type:text/html; charset= utf-8');
```

例如：

```php
<?php
	header('content-type:text/html; charset= utf-8');
	echo "我的第一段 PHP 脚本";
?>
```

（2）设置页面跳转：

```php
	header('location:http://www.baidu.com');
```


设置页面刷新的间隔：


```php
	header('refresh:3; url=http://www.xiaomi.com');
```


## php中的 get 请求和 post 请求

### get 请求

可以通过`$_GET`对象来获取。

**举例**：下面是一个简单的表单代码，通过 get 请求将数据提交到01.php。


（1）index.html:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!-- 通过 get 请求，将表单提交到 php 页面中 -->
<form action="01.php" method="get">
    <label for="">姓名：
        <input type="text" name="userName"></label>
    <br/>
    <label for="">邮箱：
        <input type="text" name="userEmail"></label>
    <br/>
    <input type="submit" name="">
</form>

</body>
</html>
```

（2）01.php：


```php
<?php
	header('content-type:text/html; charset= utf-8');
    echo "<h1>php 的get 请求演示</h1>";
    echo '用户名：'.$_GET['userName'];
    echo '<br/>';
    echo '邮箱：'.$_GET['userEmail'];
 ?>
```

上方代码可以看出，`$_GET`是关系型数组，可以通过 **$_GET[`key`]**获取值。这里的 key 是 form 标签中表单元素的 name 属性的值。

效果：

![](http://img.smyhvae.com/20180228_1140.gif)

### post 请求

可以通过`$_POST`对象来获取。

**举例**：下面是一个简单的表单代码，通过 post 请求将数据提交到02.php。

（1）index.html：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!-- 通过 post 请求，将表单提交到 php 页面中 -->
<form action="02.php" method="post" >
  <label for="">姓名：
      <input type="text" name= "userName"></label>
      <br/>
  <label for="">邮箱：
      <input type="text" name= "userEmail"></label>
      <br/>
      <input type="submit" name="">
</form>

</body>
</html>
```

（2）02.php：

```php
<?php
	header('content-type:text/html; charset= utf-8');
    echo "<h1>php 的 post 请求演示</h1>";
    echo '用户名：'.$_POST['userName'];
    echo '<br/>';
    echo '邮箱：'.$_POST['userEmail'];
 ?>
```

上方代码可以看出，`$_POST`是关系型数组，可以通过 **$_POST[`key`]**获取值。这里的 key 是 form 标签中表单元素的 name 属性的值。

效果演示：

![](http://img.smyhvae.com/20180228_1145.gif)

实际开发中，可能不会单独写一个php文件，常见的做法是：在 html 文件中嵌入 php 的代码。

比如说，原本 html 中有个 li 标签是存放用户名的：

```html
	<li>smyhvae</li>
```

嵌入 php后，用户名就变成了动态获取的：

```php
	<li><?php
		echo $_POST[`userName`]
		?></li>
```

## php 中文件相关的操作

### 文件上传 `$_FILES`

上传文件时，需要在html代码中进行如下设置：

（1）在html表单中，设置`enctype="multipart/form-data"`。该值是必须的。

（2）只能用 post 方式获取。

代码如下：

（1）index.html:

```html
  <form action="03-fileUpdate.php" method="post" enctype="multipart/form-data">
	  <label for="">照片:
	      <input type="file" name = "picture" multiple=""></label>
	  <br/>
	  <input type="submit" name="">
  </form>

```

（2）在 php 文件中打印 file 的具体内容：

```php
<?php
  sleep(5);// 让服务器休息一会
  print_r($_FILES);  //打印 file 的具体内容
?>
```

演示效果：

![](http://img.smyhvae.com/20180228_php_post_file.gif)

上方现象可以看出：

- 点击提交后，服务器没有立即出现反应,而是休息了一会`sleep(5)`。

- 在`wamp/tmp`目录下面出现了一个`.tmp`文件。

- .tmp文件一会就被自动删除了。

- 服务器返回的内容中有文件的名字`[name] => computer.png`，以及上传文件保存的位置`D:\wamp\tmp\php3D70.tmp`。服务器返回的内容如下：

```bash
	Array ( [upFile] => Array ( [name] => yangyang.jpg [type] => image/jpeg [tmp_name] => D:\wamp\tmp\phpCC56.tmp [error] => 0 [size] => 18145 ) )
```

### 文件保存

我们尝试一下，把上面的例子中的`临时目录`下面的文件保存起来。这里需要用到 php 里的 `move_uploaded_file()`函数。[#](http://www.w3school.com.cn/php/func_filesystem_move_uploaded_file.asp)

格式如下：

```php
	move_uploaded_file($_FILES['photo']['tmp_name'], './images/test.jpg');
```

参数解释：参数一：移动的文件。参数二：目标路径。

（1）index.html：（这部分的代码保持不变）

```php
	<form action="03.fileUpdate.php" method="post" enctype="multipart/form-data">
      <label for="">照片:
          <input type="file" name = "picture" multiple=""></label>
      <br/>
      <input type="submit" name="">
  	</form>
```


（2）PHP代码：

暂略。


### WampServer 中修改上传文件的大小

（1）打开 WampServer的文件`php.ini`：

![](http://img.smyhvae.com/20180228_1454.png)


（2）修改`php.ini`中的如下内容：

设置文件最大上传限制：（值的大小可以根据需求修改）

```php
	file_uploads = On;         是否允许上传文件 On/Off 默认是On
	upload_max_filesize = 32M; 设置 上传文件的最大限制
	post_max_size = 32M;       设置 通过Post提交的最多数据
```


考虑网络传输快慢：这里修改一些参数：


```php
	max_execution_time = 30000      ; 脚本最长的执行时间 单位为秒
	max_input_time = 600            ; 接收提交的数据的时间限制 单位为秒
	memory_limit = 1024M            ; 最大的内存消耗
```

## HTTP 协议

### 请求

客户端发出的请求，主要由三个组成部分：请求行、请求头、请求主体。如下图所示：

![](https://img.smyhvae.com/20180228_1505.jpg)

**1、请求行：**

- 请求方法：GET or POST

- 请求URL

- HTTP协议版本


**2、请求头：**

常见的请求头如下：

```bash
User-Agent：浏览器的具体类型　　如：User-Agent：Mozilla/5.0 (Windows NT 6.1; rv:17.0) Gecko/20100101 Firefox/17.0

Accept：浏览器支持哪些数据类型　　如：Accept: text/html,application/xhtml+xml,application/xml;q=0.9;

Accept-Charset：浏览器采用的是哪种编码　　如：Accept-Charset: ISO-8859-1

Accept-Encoding：浏览器支持解码的数据压缩格式　　如：Accept-Encoding: gzip, deflate

Accept-Language：浏览器的语言环境　　如：Accept-Language zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3

Host：请求的主机名，允许多个域名同处一个IP地址，即虚拟主机。Host:www.baidu.com

Connection：表示是否需要持久连接。
属性值可以是Keep-Alive/close，HTTP1.1默认是持久连接，它可以利用持久连接的优点，当页面包含多个元素时（例如Applet，图片），显著地减少下载所需要的时间。
要实现这一点，Servlet需要在应答中发送一个Content-Length头，最简单的实现方法是：先把内容写入ByteArrayOutputStream，然后在正式写出内容之前计算它的大小。如：Connection: Keep-Alive

Content-Length：表示请求消息正文的长度。对于POST请求来说Content-Length必须出现。

Content-Type：WEB服务器告诉浏览器自己响应的对象的类型和字符集。例如：Content-Type: text/html; charset='gb2312'

Content-Encoding：WEB服务器表明自己使用了什么压缩方法（gzip，deflate）压缩响应中的对象。例如：Content-Encoding：gzip

Content-Language：WEB服务器告诉浏览器自己响应的对象的语言。

Cookie：最常用的请求头，浏览器每次都会将cookie发送到服务器上，允许服务器在客户端存储少量数据。

Referer：包含一个URL，用户从该URL代表的页面出发访问当前请求的页面。服务器能知道你是从哪个页面过来的。Referer: http://www.baidu.com/

```

**3、请求体：**

指的是提交给服务器的数据。

需要注意的是，如果是往服务器提交数据，需要在请求头中设置`Content-Type: application/x-www-form-urlencoded`(在ajax中需要手动设置)。

### 响应

响应报文是服务器返回给客户端的。组成部分有响应行、响应头、响应主体。

![](http://img.smyhvae.com/20180228_1510.jpg)


**1、状态行：**

HTTP响应行：主要是设置响应状态等信息。



**2、响应头：**

Cookie、缓存等信息就是在响应头的属性中设置的。

常见的响应头如下：



```bash
Cache-Control

响应输出到客户端后，服务端通过该报文头属告诉客户端如何控制响应内容的缓存。

下面，的设置让客户端对响应内容缓存3600秒，也即在3600秒内，如果客户再次访问该资源，直接从客户端的缓存中返回内容给客户，不要再从服务端获取（当然，这个功能是靠客户端实现的，服务端只是通过这个属性提示客户端“应该这么做”，做不做，还是决定于客户端，如果是自己宣称支持HTTP的客户端，则就应该这样实现）。

Cache-Control: max-age=3600

ETag

一个代表响应服务端资源（如页面）版本的报文头属性，如果某个服务端资源发生变化了，这个ETag就会相应发生变化。它是Cache-Control的有益补充，可以让客户端“更智能”地处理什么时候要从服务端取资源，什么时候可以直接从缓存中返回响应。

ETag: "737060cd8c284d8af7ad3082f209582d"

Location

我们在Asp.net中让页面Redirect到一个某个A页面中，其实是让客户端再发一个请求到A页面，这个需要Redirect到的A页面的URL，其实就是通过响应报文头的Location属性告知客户端的，如下的报文头属性，将使客户端redirect到iteye的首页中：

Location: http://www.google.com.hk

Set-Cookie

服务端可以设置客户端的Cookie，其原理就是通过这个响应报文头属性实现的。

Set-Cookie: UserID=JohnDoe; Max-Age=3600; Version=1


```


**3、HTTP响应体：**

如果请求的是HTML页面，那么返回的就是HTML代码。如果是JS就是JS代码。

### 抓包工具

常见的抓包工具有：whistle、Fiddler、Charles。---
title: 02-Ajax入门和发送http请求
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 同步和异步回顾

### 同步和异步的简单理解

-   同步：必须等待前面的任务完成，才能继续后面的任务。

-   异步：不受当前任务的影响。

拿排队举例：

-   同步：在银行排队时，只有等到你了，才能够去处理业务。

-   异步：在排队的时候，可以玩手机。

### 异步更新网站

我们在访问一个普通的网站时，当浏览器加载完`HTML、CSS、JS`以后，网站的内容就固定了。如果想让网站内容发生更改，就必须**刷新**页面才能够看到更新的内容。

可如果用到**异步更新**，情况就大为改观了。比如，我们在访问新浪微博时，看到一大半了，点击底部的**加载更多**，会自动帮我们加载更多的微博，同时页面并不会整体刷新。

试想一下，如果没有异步刷新的话，每次点击“加载更多”，网页都要重新刷新，体验就太糟糕了。

web 前端里的异步更新，就要用到 Ajax。很多人说，如果没有 Ajax，就没有互联网的今天。

关于同步和异步的更详细介绍，可以参考本项目的另外一篇文章：《05-JavaScript 基础：异步编程和 Ajax/01-单线程和异步》

## Ajax

### Ajax 的概念

在浏览器中，我们可以在不刷新页面的情况下，通过 Ajax 的方式去获取一些新的内容。

Ajax：Asynchronous Javascript And XML（异步 JavaScript 和 XML）。它并不是凭空出现的新技术，而是对于现有技术的结合。Ajax 的核心是 js 对象：**XMLHttpRequest**。

### Ajax 原理（发送 Ajax 请求的五个步骤）

> 其实也就是 使用 XMLHttpRequest 对象的五个步骤。

我们先回忆一下，一个完整的 HTTP 请求需要的是：

-   请求的网址、请求方法 get/post。

-   提交请求的内容数据、请求主体等。

-   接收响应回来的内容。

发送 Ajax 请求的五个步骤：

（1）创建异步对象，即 XMLHttpRequest 对象。

（2）使用 open 方法设置请求参数。`open(method, url, async)`。参数解释：请求的方法、请求的 url、是否异步。第三个参数如果不写，则默认为 true。

（3）发送请求：`send()`。

（4）注册事件：注册 onreadystatechange 事件，状态改变时就会调用。

如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。

（5）服务端响应，获取返回的数据。

## XMLHttpRequest 对象详解

我们在上一段讲解了使用 XMLHttpRequest 对象的五个步骤。本段，我们讲一下注意事项。

### 发送请求

发送请求的方法：

```javascript
open(method, url, async);
```

参数解释：

-   method：请求的类型；GET 或 POST

-   url：文件在服务器上的位置

-   async：true（异步）或 false（同步）

另外还有个方法：（仅用于 POST 请求）

```javascript
send(string);
```

### POST 请求时注意

如果想让 像 form 表单提交数据那样使用 POST 请求，就需要使用 XMLHttpRequest 对象的 setRequestHeader()方法 来添加 HTTP 头。然后在 send() 方法中添加想要发送的数据：

```javascript
xmlhttp.open('POST', 'ajax_test.php', true);

xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

xmlhttp.send('name=smyhvae&age=27');
```

### onreadystatechange 事件

注册 onreadystatechange 事件后，每当 readyState 属性改变时，就会调用 onreadystatechange 函数。

readyState：（存有 XMLHttpRequest 的状态。从 0 到 4 发生变化）

-   0: 请求未初始化

-   1: 服务器连接已建立

-   2: 请求已接收

-   3: 请求处理中

-   4: 请求已完成，且响应已就绪

status：

-   200: "OK"。

-   404: 未找到页面。

在 onreadystatechange 事件中，**当 readyState 等于 4，且状态码为 200 时，表示响应已就绪**。

### 服务器响应的内容

-   responseText：获得字符串形式的响应数据。

-   responseXML：获得 XML 形式的响应数据。

如果响应的是普通字符串，就使用 responseText；如果响应的是 XML，使用 responseXML。

## 手写 Ajax

### 手写第一个 Ajax 请求

get 请求：

```js
//【发送ajax请求需要五步】
//（1）创建XMLHttpRequest对象
var xmlhttp = new XMLHttpRequest();

//（2）设置请求的参数。包括：请求的方法、请求的url。
xmlhttp.open('get', '02-ajax.php');

//（3）发送请求
xmlhttp.send();

//（4）注册事件。 onreadystatechange事件，状态改变时就会调用。
//如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。
xmlhttp.onreadystatechange = function () {
    // 为了保证 数据 完整返回，我们一般会判断 两个值
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        //（5）服务端相应：如果能够进入这个判断，说明数据请求成功了
        console.log('数据返回成功：' + JSON.stringify(xmlhttp.responseText));

        // 伪代码：按业务需要，将接口返回的内容显示在页面上
        // document.querySelector('h1').innerHTML = xmlhttp.responseText;
    }
};
```

post 请求：

```js
//（1）异步对象
var xmlhttp = new XMLHttpRequest();

//（2）设置请求参数。包括：请求的方法、请求的url。
xmlhttp.open('post', '02.post.php');

// 如果想要使用post提交数据,必须添加此行
xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

//（3）发送请求
xmlhttp.send('name=fox&age=18');

//（4）注册事件
xmlhttp.onreadystatechange = function () {
    //（5）服务端相应
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        alert(xmlhttp.responseText);
    }
};
```

### 封装 Ajax 请求（重要）

上面的代码，执行顺序很好理解，但在实战开发中，是不会这么写的。假如你的页面中，需要调十次接口，那岂不是要手写十遍 Ajax 请求？这样会导致大量的重复代码。

所以，我们需要把重复代码封装成一个公共函数，然后通过**回调函数**处理成功和失败的逻辑。

封装 Ajax 请求的代码如下：(get 请求为例)

```js
// 封装 Ajax为公共函数：传入回调函数 success 和 fail
function myAjax(url, success, fail) {
    // 1、创建XMLHttpRequest对象
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        // 兼容IE5、IE6浏览器。不写也没关系
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    // 2、发送请求
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
    // 3、服务端响应
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var obj = JSON.parse(xmlhttp.responseText);
            console.log('数据返回成功：' + obj);
            success && success(xmlhttp.responseText);
        } else {
            // 这里的 && 符号，意思是：如果传了 fail 参数，就调用后面的 fail()；如果没传 fail 参数，就不调用后面的内容。因为 fail 参数不一定会传。
            fail && fail(new Error('接口请求失败'));
        }
    };
}

// 单次调用 ajax
myAjax('a.json', (res) => {
    console.log(res);
});

// 多次调用 ajax。接口请求顺序：a --> b --> c
myAjax('a.json', (res) => {
    console.log(res);
    myAjax('b.json', (res) => {
        console.log(res);
        myAjax('c.json', (res) => {
            console.log(res);
        });
    });
});
```

学会了封装 get 请求之后，封装 post请求也是类似的写法。

### Ajax 请求：get 请求举例

（1）index.html：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
    </head>
    <body>
        <h1>Ajax 发送 get 请求</h1>
        <input type="button" value="发送get_ajax请求" id="btnAjax" />

        <script type="text/javascript">
            // 绑定点击事件
            document.querySelector('#btnAjax').onclick = function () {
                // 这里直接使用上面封装的 myAjax() 方法即可
                myAjax('02-ajax.php', (res) => {
                    console.log(res);
                    console.log('数据返回成功');
                    // 显示在页面上
                    document.querySelector('h1').innerHTML = res;
                    // alert(xhr.responseText);
                });
            };
        </script>
    </body>
</html>
```

（2）02-ajax.php：

```php
<?php
	echo 'smyhvae';
 ?>
```

效果如下：

![](http://img.smyhvae.com/20180228_1605.gif)

### Ajax 多个接口的嵌套请求

我们在做异步任务的时候，经常会涉及到多个接口的嵌套请求。比如说，接口 1 请求完成后，需要根据接口 1 的数据请求接口 2；接口 2 请求完成后，需要根据接口 3 的数据请求接口 3，以此类推。

需求描述：

-   请求接口 1，根据用户名获取用户 id

-   请求接口 2，根据用户 id 获取用户的年龄、性别等信息。

代码实现思路：

```js
myAjax('http://localhost:8888/php/user.php?name=千古', (userInfo) => {
    // 根据第一个接口返回的 userInfo.id，继续请求第二个接口
    myAjax(`http://localhost:8888/php/info.php?id=${userInfo['id']}`, (res) => {
        console.log(response);
    });
});
```

我们在实战开发中，经常会涉及到接口请求之间的**依赖**：需要上一个接口请求返回的数据，来发送本次请求。这种场景经常遇到，需要记住。

但这种层层嵌套的代码，会导致**回调地域**的问题，也不利于维护。我们在后续的 ES6 章节中，会讲解 Promise，它是一种更优雅的异步任务解决方案。

## jQuery 中的 Ajax

JQuery 作为最受欢迎的 js 框架之一，常见的 Ajax 已经帮助我们封装好了，只需要调用即可。更为详细的 api 文档可以查阅：[w3cSchool_JQueryAjax](http://www.w3school.com.cn/jquery/jquery_ref_ajax.asp)

格式举例：

```javascript
$.ajax({
    url: 'https://xxx.com/getUserInfo.php', // 接口的请求地址
    data: 'name=fox&age=18', // 请求参数
    type: 'GET', //请求的方式
    success: function (argument) {
        // 接口请求成功时调用
        console.log('接口请求成功');
    },
    beforeSend: function (argument) {}, // 在发送请求之前调用,可以做一些验证之类的处理
    error: function (argument) {
        // 接口请求失败时调用
        console.log('接口请求失败');
    },
});
```

代码举例：

（1）index.html

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>jquery-ajax</title>
    </head>
    <body>
        <input type="button" value="点击" id="btn" />
        <div id="showInfo"></div>
        <script type="text/javascript" src="jquery-1.11.2.js"></script>
        <script type="text/javascript">
            $(function () {
                $('#btn').click(function () {
                    $.ajax({
                        url: 'https://xxx.com/getUserInfo.php', // 接口的请求地址
                        dataType: 'text',
                        data: 'name=fox&age=18', // 请求参数
                        type: 'get',
                        success: function (data) {
                            console.log('接口请求成功');
                            alert(data);
                            // $("#showInfo").html(data);
                        },
                        error: function (err) {
                            console.log('接口请求失败：' + err);
                        },
                    });
                });
            });
        </script>
    </body>
</html>
```

（2）data.php：

```php
<?php

$text = 'hello world';

echo $text;

 ?>

```

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)

```

```
---
title: 04-同源和跨域
publish: true
---

<ArticleTopAd></ArticleTopAd>



## 同源和跨域

## 同源

同源策略是浏览器的一种安全策略，所谓同源是指，域名，协议，端口完全相同。



## 跨域问题的解决方案

从我自己的网站访问别人网站的内容，就叫跨域。

![](http://img.smyhvae.com/20180228_2231.png)

出于安全性考虑，浏览器不允许ajax跨域获取数据。


- iframe：处于安全性考虑，浏览器的开发厂商已经禁止了这种方式。

- JSONP：script 标签的 src 属性传递数据。

## JSONP

JSONP(JSON with Padding)：带补丁的 json，本质是利用了 `<script src=""></script>`标签具有可跨域的特性，由服务端返回一个预先定义好的JS函数的调用，并且将服务器数据以该函数参数的形式传递过来。此方法需要前后端配合完成。

我们知道， html标签的 src 属性是支持跨域的：

```html
	<img src="http://img.smyhvae.com/2016040101.jpg" alt="">
```

jsonp 就是利用这个特性实现的跨域，但用的是 script 标签。如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

<!-- jsonp 就是 利用 src，实现的跨域 用的是 script标签 -->
<script type="text/javascript"  src='http://192.168.141.137/2018-02-28/myData.php'></script>
</body>
</html>

```

上方那一行的代码，意思是：刷新A服务器上的index页面后，会去请求 B 服务器上的 `myData.php` 这个页面。而且请求的方式是 get 请求。

但是 B 服务器上的页面不是你想请求就可以请求的，大家一起配合才可以。


**具体实现步骤：**

需要首先声明的是，jsonp 只能通过 GET 方式进行请求。

（1）A客户端的代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

</body>
</html>
<script type="text/javascript">

	// 定义 eatFood()方法
	function fn(data) {
		console.log('我被调用了哦');
		console.log(data);
	}
</script>

<!-- 使用 script标签 发送了 get请求 去到了一个 php页面 -->
<script type="text/javascript" src='http://192.168.141.137/01.php?callback1=fn'></script>
```


我们来分析上方代码中的最后一行的那个url：A 客户端请求的是 B服务器上的 `01.php`页面。url里有个`callback1=fn`，意思是：callback1是A和B 之间的约定，约定后，将执行方法 fn。

其实，fn方法已经在最后一行代码中执行了。只不过，fn方法里的data数据，是从 B 服务器中获取的。

（2）B服务器端的代码：

```php
<?php
    $mycallBack = $_GET['callback1'];

	$arr = array("zhangsan","lisi","zhaoliu");

    echo $mycallBack."(".json_encode($arr).")";    //字符串拼接
?>
```

代码解释：

第一行的`callback1` 是A和B之间的约定，二者必须一致。

echo语句中输出的内容，即要返回给A客户端的内容，此内容会保存在 A 客户端的fn方法的data里。 data[0]指的是 zhangsan。


`json_encode`指的是，将php对象转化为 json。


刷新A页面，输出结果为：

```
	mycallBack(["zhangsan","lisi","zhaoliu"])
```


## jQuery 中的 JSONP

我们知道，jQuery 中发送 Ajax 请求，格式是：

```javascript
		$("#btn").click(function(){
			$.ajax({
				url:"./data.php?callback1=fn",
				dataType:"jsonp",
				type:"get",
				//jsonp:"callback1",   //传递给B服务器的回调函数的名字（默认为 callback）
				//jsonCallBack:"fn"    //自定义的函数名称。默认为 jQuery 自动生成的随机函数名
				success:function(data){
					alert(data);
					//$("#showInfo").html(data);
				},
				error:function(e){
					console.log(e);
				}
			});
		});
```


那如果数据是 JSONP，上方代码则改为：


```javascript
		$("#btn").click(function(){
			$.ajax({
				url:"./data.php?fn",
				dataType:"text",
				type:"get",
				success:function(data){
					alert(data);
					//$("#showInfo").html(data);
				},
				error:function(e){
					console.log(e);
				}
			});
		});
```



## 参考链接

参考链接：https://www.cnblogs.com/2050/p/3191744.html

---
title: 01-单线程和异步
publish: true
---

<ArticleTopAd></ArticleTopAd>


## 单线程

JavaScript 语言和执行环境是**单线程**。即同一时间，只能处理一个任务。

具体来说，所谓单线程，是指 JS 引擎中负责解释和执行 JavaScript 代码的线程只有一个，也就是一次只能完成一项任务，这个任务执行完后才能执行下一个。所有的任务都**需要排队**。

**JS 为何要被设计为单线程呢**？原因如下：

-   首先是历史原因，在最初设计 JS 这门语言时，多进程、多线程的架构并不流行，硬件支持并不好。

-   其次是因为多线程的复杂性，多线程操作需要加锁，编码的复杂性会增高。

-   而且，如果多个线程同时操作同一个 DOM，在多线程不加锁的情况下，会产生冲突，最终会导致 DOM 渲染的结果不符预期。

所以，为了避免这些复杂问题的出现，JS 被设计成了单线程语言。

## 同步任务和异步任务

### 定义

如果当前正在执行的任务执行完成前，它就会**阻塞**其他正在排队的任务。为了解决这个问题，JS 在设计之初，将任务分成了两类：同步任务、异步任务。

-   同步任务：在**主线程**上排队执行的任务。只有前一个任务执行完毕，才能执行下一个任务。

-   异步任务：不进入主线程、而是进入**任务队列**（Event Queue）的任务，该任务不会阻塞后面的任务执行。只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。

代码举例：

```js
console.log('同步任务1');

setTimeout(() => {
    console.log('异步任务');
}, 1000);

console.log('同步任务2');
```

打印结果是：

```
同步任务1
同步任务2
异步任务
```

代码解释：第一行代码是同步任务，会**立即执行**；定时器里的回调函数是异步任务，需要等 1 秒后才会执行。假如定时器里的代码是同步任务，那需要等待1秒后，才能执行最后一行代码`console.log('同步任务2')`，也就是造成了主线程里的同步任务阻塞，这不是我们希望看到的。

比如说，网络图片的请求，就是一个异步任务。前端如果同时请求多张网络网络图片，谁先请求完成就让谁先显示出来。假如网络图片的请求做成同步任务，那就会出大问题，所有图片都得排队加载，如果第一张图片未加载完成，就得卡在那里，造成阻塞，导致其他图片都加载不出来。页面看上去也会很卡顿，这肯定是不能接受的。

### 前端使用异步编程的场景

什么时候需要**等待**，就什么时候用异步。常见的异步场景如下：

-   1、事件监听（比如说，按钮绑定点击事件之后，用户爱点不点。我们不可能卡在按钮那里，什么都不做。所以，应该用异步）
-   2、回调函数：
    -   2.1、定时器：setTimeout（定时炸弹）、setInterval（循环执行）
    -   2.2、ajax请求。
    -   2.3、Node.js 中的一些方法回调。
-   3、ES6 中的 Promise、Generator、async/await

现在的大部分软件项目，都是前后端分离的。后端生成接口，前端请求接口。前端发送 ajax 请求，向后端请求数据，然后**等待一段时间**后，才能拿到数据。这个请求过程就是异步任务。

### 接口调用的方式

js 中常见的接口调用方式，有以下几种：

-   原生 ajax、基于 jQuery 的 ajax
-   Promise
-   Fetch
-   axios

下一篇文章，我们重点讲一下接口调用里的 Ajax，然后在 ES6 语法中学习 **Promise**。在这之前，我们需要先了解同步任务、异步任务的事件循环机制。


### 事件循环机制（重要）

![](http://img.smyhvae.com/20210517_1431.png)

执行顺序如下：

-   同步任务：进入主线程后，立即执行。

-   异步任务：会先进入 Event Table；等时间到了之后，再进入 Event Queue，然后排队（为什么要排队？因为同一时间，JS 只能执行一个任务）。比如说，`setTimeout(()=> {}, 1000)`这种定时器任务，需要等一秒之后再进入 Event Queue。

-   当主线程的任务执行完毕之后，此时主线程处于空闲状态，于是会去读取 Event Queue 中的任务队列，如果有任务，则进入到主线程去执行。


### 多次异步调用的顺序

-   多次异步调用的结果，顺序可能不同步。

-   异步调用的结果如果**存在依赖**，则需要通过回调函数进行嵌套。


## 定时器：代码示例

掌握了上面的事件循环原理之后，我们来看几个例子。

### 举例 1

```js
console.log(1);

setTimeout(() => {
    console.log(2);
}, 1000);
console.log(3);
console.log(4);
```

打印结果：

```
1
3
4
2
```

解释：先等同步任务执行完成后，再执行异步任务。

### 举例 2（重要）

如果我把上面的等待时间，从 1 秒改成 0 秒，你看看打印结果会是什么。

```js
console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);
console.log(3);
console.log(4);
```

打印结果：

```
1
3
4
2
```

可以看到，打印结果没有任何变化，这个题目在面试中经常出现，考的就是 `setTimeout(()=> {}, 0)`会在什么时候执行。这就需要我们了解同步任务、异步任务的执行顺序，即前面讲到的**事件循环机制**。

解释：先等同步任务执行完成后，再执行异步任务。

同理，我们再来看看下面这段伪代码：

```js
setTimeout(() => {
    console.log('异步任务');
}, 2000);

// 伪代码
sleep(5000); //表示很耗时的同步任务
```

上面的代码中，异步任务不是 2 秒之后执行，而是等耗时的同步任务执行完毕之后，才执行。那这个异步任务，是在 5 秒后执行？还是在 7 秒后执行？这个作业，留给读者你来思考~

### 举例 3（较真系列）

```js
setTimeout(() => {
    console.log('异步任务');
}, 1000);
```

上面的代码中，等到 1 秒之后，真的会执行异步任务吗？其实不是。

在浏览器中， setTimeout()/ setInterval() 的每调用一次定时器的最小时间间隔是**4毫秒**，这通常是由于函数嵌套导致（嵌套层级达到一定深度），或者是由于已经执行的 setInterval 的回调函数阻塞导致的。

上面的案例中，异步任务需要等待 1004 毫秒之后，才会从 Event Table 进入到 Event Queue。这在面试中也经常被问到。

## 异步任务举例

### 例 1：加载图片

```js
// 加载图片的异步任务
function loadImage(file, success, fail) {
    const img = new Image();
    img.src = file;
    img.onload = () => {
        // 图片加载成功
        success(img);
    };
    img.onerror = () => {
        // 图片加载失败
        fail(new Error('img load fail'));
    };
}

loadImage(
    'images/qia nguyihao.png',
    (img) => {
        console.log('图片加载成功');
        document.body.appendChild(img);
        img.style.border = 'solid 2px red';
    },
    (error) => {
        console.log('图片加载失败');
        console.log(error);
    }
);
```

### 例 2：定时器计时，移动 DOM 元素

```js
// 函数封装：定义一个定时器，每间隔 delay 毫秒之后，执行 callback 函数
function myInterval(callback, delay = 100) {
    let timeId = setInterval(() => callback(timeId), delay);
}

myInterval((timeId) => {
    // 每间隔 500毫秒之后，向右移动 .box 元素
    const myBox = document.getElementsByClassName('box')[0];
    const left = parseInt(window.getComputedStyle(myBox).left);
    myBox.style.left = left + 20 + 'px';
    if (left > 300) {
        clearInterval(timeId);

        // 每间隔 10 毫秒之后，将 .box 元素的宽度逐渐缩小，直到消失
        myInterval((timeId2) => {
            const width = parseInt(window.getComputedStyle(myBox).width);
            myBox.style.width = width - 1 + 'px';
            if (width <= 0) clearInterval(timeId2);
        }, 10);
    }
}, 200);
```



## 参考链接

-   [JS-同步任务，异步任务，微任务，和宏任务](https://github.com/PleaseStartYourPerformance/javaScript/issues/34)
-   [JS 同步异步宏任务微任务](https://juejin.cn/post/6875605533127081992)、[JavaScript 中事件循环的理解](https://zhuanlan.zhihu.com/p/364475433)、[javascript 事件循环机制](https://github.com/reng99/blogs/issues/34)
-   [如何实现比 setTimeout 快 80 倍的定时器？](https://mp.weixin.qq.com/s/NqzWkeOhqAU85XPkJu_wCA)
## 使用 Promise 封装 SetTimeout 定时器

代码举例：

```js
// 方法：XX秒后执行指定的代码。这个方法，就是在宏任务（定时器）的执行过程中，创建了一个微任务（resolve）
function delaySeconds(delay = 1000) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}

delaySeconds(2000)
    .then(() => {
        console.log('qiangu');
        return delaySeconds(3000);
    })
    .then(() => {
        console.log('yihao');
    });
```

打印结果：

```js
// 2秒后打印：
qiangu

// 再等3秒后打印：
yihao
```
---
title: 03-Ajax传输json和XML
publish: true
---

<ArticleTopAd></ArticleTopAd>




## Ajax 传输 JSON

### JSON 的语法

JSON(JavaScript Object Notation)：是 ECMAScript 的子集。作用是进行数据的交换。语法更为简洁，网络传输、机器解析都更为迅速。

语法规则：

-   数据在键值对中

-   数据由逗号分隔

-   花括号保存对象

-   方括号保存数组

数据类型：

-   数字（整数或浮点数）

-   字符串（在双引号中）

-   逻辑值（true 或 false）

-   数组（在方括号中）

-   对象（在花括号中）

-   null

示例：

```json
// 对象
{
  "name":"fox",
  "age":"18",
  "sex":"true",
  "car":null
}

// 数组
[
  {
      "name":"小小胡",
      "age":"1"
  },
  {
      "name":"小二胡",
      "age":"2"
  }
]
```

### JavaScript 中：json 字符串 <--> js 对象

基本上，所有的语言都有**将 json 字符串转化为该语言对象**的语法。

比如在 js 中：

-   JSON.parse()：将 JSON 字符串转化为 js 对象。例如：

```javascript
// 将 JSON 字符串格式化为 js 对象
var jsObj = JSON.parse(ajax.responseText);
```

-   JSON.stringify()：将 JS 对象转化为 JSON 字符串。例如：

```javascript
var Obj = {
    name: 'fox',
    age: 18,
    skill: '撩妹',
};

console.log(Obj);

// 将 js 对象格式化为 JSON 字符串
var jsonStr = JSON.stringify(Obj);
```

### PHP 中：json 字符串 <--> js 对象

-   **json_decode()**方法：将`json`字符串转化为变量。

-   **json_encode()**方法：将变量转化为`json`字符串。

代码举例：

```php
<?php
    header("Content-Type:text/html;charset=utf-8");
    // json字符串
    $jsonStr = '{"name":"itcast","age":54,"skill":"歌神"}';
    // 字符串转化为 php对象
      print_r(json_decode($jsonStr));

      echo "<br>";
      // php数组
      $arrayName = array('name' =>'littleFox' ,'age' => 13 );
      // php对象 转化为 json字符串
      print_r(json_encode($arrayName));
 ?>
```

输出结果：

```bash
	stdClass Object ( [name] => itcast [age] => 54 [skill] => 歌神 )
	{"name":"littleFox","age":13}

```

### ajax 请求解析 json（举例）

（1）Person.json:

```json
{
    "name": "小强",
    "skill": "砍树",
    "friend": "老板"
}
```

（2）myJson.php：

```php
<?php

	// 读取json文件 并返回即可
	echo  file_get_contents('info/Person.json');

 ?>
```

（3）getJson.html：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
    </head>
    <body>
        <h1>获取 json 数据</h1>
        <input type="button" value="获取json" id="btnJson" />
    </body>
</html>
<script type="text/javascript">
    // 获取的是一个 如果要获取多个
    // document.querySelectorAll(selector)
    document.querySelector('#btnJson').onclick = function () {
        var ajax = new XMLHttpRequest();

        ajax.open('get', 'myJson.php');

        ajax.send();

        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                // json 字符串 是字符串 所以我们可以 通过  responseText获取
                console.log(ajax.responseText);

                // 转化为 js对象
                var jsObj = JSON.parse(ajax.responseText);

                console.log(jsObj);

                // 拼接ul s
                var str = '';

                str += '<ul>';
                str += '<li>' + jsObj.name + '</li>';
                str += '<li>' + jsObj.skill + '</li>';
                str += '<li>' + jsObj.friend + '</li>';
                str += '</ul>';

                // 设置到界面上

                document.body.innerHTML = str;
            }
        };
    };
</script>
```

演示效果：

![](http://img.smyhvae.com/20180228_1740.gif)


## Ajax 传输 XML

### XML 语法

XML（Extensible Markup Language）：可扩展标记语言。详细语法可以查看：[#](http://www.w3school.com.cn/xml/index.asp)。

**1、XML 声明：**

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

第一行的声明，指定了 XML 版本(1.0)以及使用的编码。

**2、自定义标签：**

XML 中没有默认的标签，所有的标签都是我们自己已定义的。例如：

```xml
<fox></fox>
<name></name>
```

XML 中没有单标签，都是双标签。

**3、根节点：**

XML 中必须要有一个根节点，所有的子节点都放置在根节点下。例如：

```xml
<root1>
  <name></name>
</root1>
```

### XML 解析

因为 XML 就是标签，所以我们可以直接用**解析 Dom 元素**的方法解析 XML。

**解析过程：**

（1）html 部分：（包含 xml ）

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
    </head>
    <body>
        <person id="personXML">
            <name>fox</name>
            <age>18</age>
            <skill>小花花</skill>
        </person>
    </body>
</html>
```

（2）解析 xml：

```html
<script type="text/javascript">
    var xmlObj = document.getElementById('personXML');
    var name = xmlObj.getElementsByTagName('name')[0].innerHTML;

    console.log(name);
</script>
```

### ajax 请求解析 xml（举例）

（1）get_xml.php：（里面包含了 xml 文件）

```php
<?php
	// 设置 返回的为 xml
	header('content-type:text/xml; charset= utf-8');

	// 读取xml文件 并返回
	echo file_get_contents('info/star.xml');

 ?>
```

上方代码解释：

-   php 自带了 读取 xml 文件的方法。

-   在 php 中，如果要使用 xml 传输数据，则需要使用 header()设置返回的内容为 xml。

（2）get_xml.html：（Ajax 请求，获取并解析 xml）

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
    </head>
    <body>
        <input type="button" value="获取XMl数据" id="getXML" />
    </body>
</html>
<script type="text/javascript">
    document.querySelector('#getXML').onclick = function () {
        var ajax = new XMLHttpRequest();

        ajax.open('get', 'get_XMl.php');

        ajax.send();

        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                // 如果 返回的是 xml文件
                console.log(ajax.responseText);

                // 异步 对象中 有另外一个属性 用来专门获取 xml
                // xml对象 在浏览器段 就是一个 document对象
                // 解析时 可以直接使用 querySelector 或者 getElementById等等 document对象 有的语法
                console.log(ajax.responseXML);
                console.log(ajax.responseXML.querySelector('kuzi').innerHTML);
                // 下面这个 页面文档对象 如果要获取某个标签
                console.log(window.document);
            }
        };
    };
</script>
```
---
title: 09-宏任务和微任务
publish: true
---

<ArticleTopAd></ArticleTopAd>



## 准备知识

- 在执行一个 Promise 对象的时候，当走完`resolve();`之后，就会立刻把 `.then()`里面的代码加入到**微任务队列**当中。

- 任务的一般执行顺序：**同步任务 --> 微任务 --> 宏任务**。

## 代码举例

### 举例 1：宏任务和微任务的执行顺序

```js
setTimeout(() => {
    // 宏任务
    console.log('setTimeout');
}, 0);

new Promise((resolve, reject) => {
    resolve();
    console.log('promise1'); // 同步任务
}).then((res) => {
    // 微任务
    console.log('promise then');
});

console.log('qianguyihao'); // 同步任务
```

打印结果：

```
promise1
qianguyihao
promise then
setTimeout
```

上方代码执行的顺序依次是：**同步任务 --> 微任务 --> 宏任务**。

### 举例 2：宏任务和微任务的嵌套

```js
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
        console.log('setTimeout'); // 宏任务
    }, 0);
    console.log('promise1');
}).then((res) => {
    // 微任务
    console.log('promise then');
});

console.log('qianguyihao');
```

打印结果：

```
promise1
qianguyihao
setTimeout
promise then
```

上方代码解释：在执行宏任务的**过程中**，创建了一个微任务。但是需要**先把当前这个宏任务执行完**，再去**创建并执行**微任务。
---
title: 07-Promise的静态方法
publish: true
---

<ArticleTopAd></ArticleTopAd>

## Promise 的常用 API 分类

### Promise 的实例方法

**实例方法**：我们需要先 new 一个 promise 实例对象，然后通过 promise 对象去调用 `then`、`catch`、`finally`方法。这几个方法就是 Promise 的实例方法。

Promise 的自带 API 提供了如下实例方法：

-   promise.then()：获取异步任务的正常结果。

-   promise.catch()：获取异步任务的异常结果。

-   promise.finaly()：异步任务无论成功与否，都会执行。

### Promise 的静态方法

前面的几篇文章，讲的都是 Promise 的**实例方法**；今天这篇文章，我们来详细讲一下 Promise 的**静态方法**。

**静态方法**：可以直接通过大写的`Promise.xxx`调用的方法。这里的`xxx`就称之为静态方法。

Promise 的自带 API 提供了如下静态方法：

-   `Promise.resolve()`

-   `Promise.reject()`

-   `Promsie.all()`：并发处理多个异步任务，所有任务都执行成功，才算成功（走到 resolve）；只要有一个失败，就会马上走到 reject，整体都算失败。

-   `Promise.race()`：并发处理多个异步任务，返回的是第一个执行完成的 promise，且状态和第一个完成的任务状态保持一致。

-   `Promise.allSettled()`：并发处理多个异步任务，返回所有任务的执行结果（包括成功、失败）。当你有多个彼此不依赖的异步任务执行完成时，或者你想知道每个 promise 的结果时，通常使用它。

-   `Promise.all()`

-   `Promise.any()`

## Promise.resolve() 和 Promise.reject()

当我们在定义一个 promise 的过程中，如果涉及到异步操作，那就需要通过`new Promise`的方式创建一个 Promise 实例。

但有些场景下，我们并没有异步操作，但**仍然想调用 promise.then**，此时，我们可以用 `Promise.resolve()` 将其包装成成功的状态。同理，`Promise.reject()`可以包装成失败的状态。

比如说，有的时候，promise 里面并不涉及异步操作，我只是**单纯地想通过 promise 对象返回一个字符串**（有的业务就是有这样的需求），那就可以通过 `Promise.reslove('字符串')` `Promise.reject('字符串')` 、这种**简写**的方式返回。

这两种情况，我们来对比看看。

例 1：

```js
function foo(flag) {
    if (flag) {
        return new Promise((resolve) => {
            // 这里可以做异步操作
            resolve('success');
        });

        // return Promise.resolve('success2');
    } else {
        return new Promise((reslove, reject) => {
            // 这里可以做异步操作
            reject('fail');
        });
    }
}

// 执行 reslove 的逻辑
foo(true).then((res) => {
    console.log(res);
});

// 执行 reject 的逻辑
foo(false).catch((err) => {
    console.log(err);
});
```

例 2：（见证奇迹的时刻）

```js
function foo(flag) {
    if (flag) {
        // Promise的静态方法：直接返回字符串
        return Promise.resolve('success');
    } else {
        // Promise的静态方法：直接返回字符串
        return Promise.reject('fail');
    }
}

// 执行 reslove 的逻辑
foo(true).then((res) => {
    console.log(res);
});

// 执行 reject 的逻辑
foo(false).catch((err) => {
    console.log(err);
});
```

例 1 和例 2 的打印结果是一样的。这两段代码的区别在于：例 1 里面可以封装异步任务；例 2 只能单纯的返回一个字符串等变量，不能封装异步任务。

## Promise.all()

`Promsie.all([p1, p2, p3])`：并发处理多个异步任务，所有任务都执行成功，才算成功（才会走到 then）；只要有一个任务失败，就会马上走到 catch，整体都算失败。参数里传的是 多个 promise 实例组成的数组。

### 语法举例

**1、异步任务都执行成功时**：

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise1');
        resolve('promise 1 成功');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise2');
        resolve('promise 2 成功');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise3');
        resolve('promise 3 成功');
    }, 3000);
});

Promise.all([promise1, promise2, promise3])
    .then((res) => {
        // 三个异步任务都执行成功，才会走到这里
        // 这里拿到的 res，是三个成功的返回结果组成的数组
        console.log(JSON.stringify(res));
    })
    .catch((err) => {
        // 只要有一个异步任务执行失败，就会马上走到这里
        console.log(err);
    });
```

打印结果：

```js
// 1秒后
执行 promise1

// 2秒后
执行 promise2

// 3秒后
执行 promise3
["promise 1 成功","promise 2 成功","promise 3 成功"]
```

**2、异步任务有至少一个执行失败时**：

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise1');
        resolve('promise 1 成功');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise2');
        // 这里通过 reject() 的方式，表示任务执行失败
        reject('promise 2 失败');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise3');
        resolve('promise 3 成功');
    }, 3000);
});

Promise.all([promise1, promise2, promise3])
    .then((res) => {
        // 三个异步任务都执行成功，才会走到这里
        console.log('走到 then:' + JSON.stringify(res));
    })
    .catch((err) => {
        // 只要有一个异步任务执行失败，就会马上走到这里
        console.log('走到 catch:' + err);
    });
```

打印结果：

```js
// 1秒后
执行 promise1

// 2秒后
执行 promise2
走到 catch:promise 2 失败

// 3秒后
执行 promise3
```

可以看到，当 promise2 执行失败之后，马上就走到了 catch，而且 promise3 里的 resolve 并没有执行。

### Promise.all()举例：多张图片上传

比如说，现在有一个**图片上传**的接口，每次请求接口时只能上传一张图片。需求是：当用户连续上传完九张图片（正好凑齐九宫格）之后，给用户一个“上传成功”的提示。这个时候，我们就可以使用`Promsie.all()`。

代码举例如下：

```js
const imgArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
const promiseArr = [];
imgArr.forEach((item) => {
    const p = new Promise((resolve, reject) => {
        // 在这里做图片上传的异步任务。图片上传成功后，接口会返回图片的 url 地址
        //  upload img ==> return imgUrl
        if (imgUrl) {
            // 单张图片上传完成
            resolve(imgUrl);
        } else {
            reject('单张图片上传失败');
        }
    });
    promiseArr.push(p);
});
Promise.all(promiseArr)
    .then((res) => {
        console.log('图片全部上传完成');
        console.log('九张图片的url地址，组成的数组：' + res);
    })
    .catch((res) => {
        console.log('部分图片上传失败');
    });
```

上方代码解释：

1、只有九张图片都上传成功，才会走到 then。

2、按时间顺序来看，假设第一张图片上传成功，第二张图片上传失败，那么，最终的表现是：

-   对于前端来说，九张图都会走到 reject；整体会走到 catch，不会走到 then。

-   对于后端来说，第一张图片会上传成功（因为写入 DB 是不可逆的），第二张图上传失败，剩下的七张图，会正常请求 upload img 接口。

3、**特别说明**：

-   第一张图会成功调 upload 接口，并返回 imgUrl，但不会走到 resolve，因为要等其他八张图的执行结果，再决定是一起走 resolove 还是一起走 reject。

-   当执行 Promise.all() / Promise.race() / Promise.any() 的时候，**其实九张图的 upload img 请求都已经发出去了**。对于后端来说，是没有区别的（而且读写 DB 的操作不可逆），只是在前端的交互表现不同、走到 resolve / reject / then / catch 的时机不同而已。

上面这个例子，在实际的项目开发中，经常遇到，属于高频需求，需要记住并理解。

4、**思维拓展**：

-   拓展 1：如果你希望九张图同时上传，并且想知道哪些图上传成功、哪些图上传失败，则可以这样做：**无论 upload img 接口请求成功与否，全都执行 reslove**。这样的话，最终一定会走到 then，然后再根据接口返回的结果判断九张图片的上传成功与否。

-   拓展 2：实战开发中，在做多张图片上传时，可能是一张一张地单独上传，各自的上传操作相互独立。此时 `Promise.all`便不再适用，这就得具体需求具体分析了。

## Promise.race()

`Promise.race([p1, p2, p3])`：并发处理多个异步任务，返回的是第一个执行完成的 promise，且状态和第一个完成的任务状态保持一致。参数里传的是多个 promise 实例组成的数组。

上面这句话，第一次读时，可能很绕口。我说的再通俗一点：在多个同时执行的异步任务中，先找出哪个异步任务**最先执行完成**（无论是走到 resolve，还是走到 reject，都算执行完成），整体的状态就跟这个任务保持一致。如果这个任务执行成功，那整体就算成功（走到 then）；如果这个任务执行失败，那整体就算失败（走到 catch）。

`race`的中文翻译，可以理解为“竞赛”。意思是，谁先抢到名额，就认定谁了。无论这个人最终的结局是成功或者失败，整体的结局，都以这个人的结局为准。

我刚开始学 Promise.race()的时候，误以为它的含义是“只要有一个异步**执行成功**，整体就算成功（走到 then）；所有任务都执行失败，整体才算失败（走到 catch）”。现在想来，真是大错特错，过于懵懂。

现在我顿悟了，准确来说，Promise.race()强调的是：只要有一个异步任务**执行完成**，整体就是**完成**的。

Promise.race()的**应用场景**：在众多 Promise 实例中，最终结果只取一个 Promise，**谁返回得最快就用谁的 Promise**。

我们来看看各种场景的打印结果，便能擦干泪水，继续前行。

### 语法举例

**场景 1、所有任务都执行成功时**：

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise1');
        resolve('promise 1 成功');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise2');
        resolve('promise 2 成功');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise3');
        resolve('promise 3 成功');
    }, 3000);
});

Promise.race([promise1, promise2, promise3])
    .then((res) => {
        // 第一个完成的任务，如果执行成功，就会走到这里
        // 这里拿到的 res，是第一个成功的 promise 返回的结果，不是数组
        console.log(JSON.stringify(res));
    })
    .catch((err) => {
        // 第一个完成的任务，如果执行失败，就会走到这里
        console.log(err);
    });
```

打印结果：

```js
// 1秒后
执行 promise1
"promise 1 成功"

// 2秒后
执行 promise2

// 3秒后
执行 promise3
```

**场景 2、第一个任务成功、第二个任务失败时**：

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise1');
        resolve('promise 1 成功');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise2');
        // 第二个任务执行失败时
        reject('promise 2 失败');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise3');
        resolve('promise 3 成功');
    }, 3000);
});

Promise.race([promise1, promise2, promise3])
    .then((res) => {
        // 第一个完成的任务，如果执行成功，就会走到这里
        console.log('走到then:' + res);
    })
    .catch((err) => {
        // 第一个完成的任务，如果执行失败，就会走到这里
        console.log('走到catch:' + err);
    });
```

打印结果：

```js
// 1秒后
执行 promise1
走到then:promise 1 成功

// 2秒后
执行 promise2

// 3秒后
执行 promise3
```

可以看出，场景 2 的打印结果和场景 1 的打印结果，是一样的。因为最新执行完成的任务，是成功的，所以整体会马上走到 then，且整体就算成功。

**场景 3、第一个任务失败、第二个任务成功时**：

```js
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise1');
        // 第一个任务执行失败时
        reject('promise 1 失败');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise2');
        resolve('promise 2 成功');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行 promise3');
        resolve('promise 3 成功');
    }, 3000);
});

Promise.race([promise1, promise2, promise3])
    .then((res) => {
        // 第一个完成的任务，如果执行成功，就会走到这里
        console.log('走到then:' + res);
    })
    .catch((err) => {
        // 第一个完成的任务，如果执行失败，就会走到这里
        console.log('走到catch:' + err);
    });
```

打印结果：

```js
// 1秒后
执行 promise1
走到catch：promise 1 失败

// 2秒后
执行 promise2

// 3秒后
执行 promise3
```

看清楚了没？场景 3 的最终打印结果，是走到了 catch；任务 2 和任务 3 里的 resolve，并没有继续执行。

场景 3 的代码，一定好好好理解。

### Promise.race()举例：图片加载超时

现在有个需求是这样的：前端需要加载并显示一张图片。如果图片在三秒内加载成功，那就显示图片；如果三秒内没有加载成功，那就按异常处理，前端提示“加载超时”或者“请求超时”。

代码实现：

```js
// 图片请求的Promise
function getImg() {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = function () {
            // 图片的加载，是异步任务
            resolve(img);
        };
        img.src = 'https://img.smyhvae.com/20200102.png';
    });
}

// 加载超时的 Promise
function timeout() {
    return new Promise((resolve, reject) => {
        // 采用 Promise.race()之后，如果 timeout() 的 promise 比 getImg() 的 promise先执行，说明定时器时间到了，那就算超时。整体的最终结果按失败处理。
        setTimeout(() => {
            reject('图片加载超时');
        }, 3000);
    });
}

Promise.race([getImg(), timeout()])
    .then((res) => {
        // 图片加载成功
        console.log(res);
    })
    .catch((err) => {
        // 图片加载超时
        console.log(err);
    });
```

如代码注释所述：采用 Promise.race() 之后，如果 timeout() 的 promise 比 getImg() 的 promise 先执行，说明定时器时间到了，那就算超时。整体的最终结果按失败处理。

这个思路很巧妙。用同样的思路，我们还可以处理网络请求超时的问题。如果接口请求时长超过 3 秒，就按超时处理，也就是下面我们要举的例子。

### Promise.race()举例：网络请求超时

现在有这种需求：如果接口请求时长超过 3 秒，就按超时处理。

基于这种需求，我们可以用 Promise.race() 来实现：一个 Promise 用于 请求接口，另一个 Promise 用于执行 setTimeout()。把这两个 Promise 用 Promise.race()组装在一起，谁先执行，那么最终的结果就以谁的为准。

代码举例：

```js
function query(url, delay = 4000) {
    let promiseArr = [
        myAajax(url),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('网络请求超时');
            }, delay);
        }),
    ];
    return Promise.race(promiseArr);
}

query('http://localhost:8899/xxx_url', 3000)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    });
```


## 总结

Promise 不仅能解决嵌套异步任务的**回调地域**问题，也可做多个异步任务的**并发请求**，还可以进行舒适简洁的状态管理。

Promise 本身不是异步的，但是它可以封装异步任务，并对异步操作进行良好的状态管理，这便是 Promise 的魅力所在。

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 05-Promise入门详解
publish: true
---

<ArticleTopAd></ArticleTopAd>

## 为什么需要 Promise？

我们在前面的文章《JavaScript 基础：异步编程和 Ajax/单线程和异步》中讲过，Javascript 是⼀⻔单线程语⾔。早期我们解决异步场景时，⼤部分情况都是通过回调函数来进⾏。

（如果你还不了解单线程和异步的概念，可以先去回顾上一篇文章。）

### 回调的定义

把函数 A 传给另一个函数 B 调用，那么函数 A 就是回调函数。

例如在浏览器中发送 ajax 请求，就是常⻅的⼀个异步场景，发送请求后，需要等待一段时间，等服务端响应之后我们才能拿到结果。如果我们希望在异步结束之后执⾏某个操作，就只能通过**回调函数**这样的⽅式进⾏操作。

```js
var dynamicFunc = function (callback) {
    setTimeout(function () {
        callback();
    }, 1000);
};

dynamicFunc(function () {
    console.log('qian gu');
});
```

例如上⾯这个例⼦，dynamicFunc 就是⼀个异步函数，⾥⾯ setTimeout 会在 1s 之后调⽤传⼊的 callback 函数。按照上⾯的调⽤⽅式，最终 1s 之后，会打印 qian gu 这个结果。

为了能使回调函数以更优雅的⽅式进⾏调⽤，在 ES6 语法中，新增了⼀个名为 Promise 的新规范。

### 回调的缺点

回调的写法比较直观，不需要 return，层层嵌套即可。但也存在两个问题：

-   1. 如果嵌套过深，则会出现**回调地狱**的问题。

-   2. 不同的函数，回调的参数，在写法上可能不一致，导致不规范、且需要**单独记忆**。

我们来具体看看这两个问题。

**1、回调地狱的问题**：

如果多个异步函数存在依赖关系（比如，需要等第一个异步函数执行完成后，才能执行第二个异步函数；等第二个异步函数执行完毕后，才能执行第三个异步函数），就需要多个异步函数进⾏层层嵌套，⾮常不利于后续的维护，而且会导致**回调地狱**的问题。

关于回调地狱，我们来举一个形象的例子：

> 假设买菜、做饭、洗碗、倒厨余垃圾都是异步的。

> 但真实的场景中，实际的操作流程是：买菜成功之后，才能开始做饭。做饭成功后，才能开始洗碗。洗碗完成后， 再倒厨余垃圾。这里的一系列动作就涉及到了多层嵌套调用，也就是回调地狱。

关于回调地狱，我们来看看几段代码举例。

1.1、定时器的代码举例：（回调地狱）

```js
setTimeout(function () {
    console.log('qiangu1');
    setTimeout(function () {
        console.log('qiangu2');
        setTimeout(function () {
            console.log('qiangu3');
        }, 3000);
    }, 2000);
}, 1000);
```

1.2、Node.js 读取文件的代码举例：（回调地狱）

```js
fs.readFile(A, 'utf-8', function (err, data) {
    fs.readFile(B, 'utf-8', function (err, data) {
        fs.readFile(C, 'utf-8', function (err, data) {
            fs.readFile(D, 'utf-8', function (err, data) {
                console.log('qianguyihao:' + data);
            });
        });
    });
});
```

上面代码的逻辑为：先读取 A 文本内容，再根据 A 文本内容读取 B，然后再根据 B 的内容读取 C。为了实现这个业务逻辑，上面的代码就很容易形成回调地狱。

1.3、ajax 请求的代码举例：（回调地狱）

```js
// 伪代码
ajax('a.json', (res1) => {
    console.log(res1);
    ajax('b.json', (res2) => {
        console.log(res2);
        ajax('c.json', (res3) => {
            console.log(res3);
        });
    });
});
```

**2、回调的写法不一致问题**：

```js
// Node.js 读取文件时，成功回调和失败回调，是通过 error参数来区分
readFile('d:\\readme.text', function (err, data) {
    if (error) {
        console.log('文件读取失败');
    } else {
        console.log('文件读取成功');
    }
});

// jQuery的 ajax 写法中，成功回调和失败回调，是通过两个回调函数来区分
$.ajax({
    url: '/ajax.json',
    success: function (response) {
        console.log('文件读取成功');
    },
    error: function (err) {
        console.log('文件读取失败');
    },
});
```

我们可以看到，上面的代码中，成功回调和失败回调，写法不统一，需要单独记忆，容易出错。

**小结**：

在 ES5 中，当进行多层嵌套回调时，会导致代码层次过多，很难进行后续维护和二次开发；而且会导致**回调地狱**的问题。ES6 中的 Promise 就可以解决这些问题。

当然， Promise 的强大功能，不止于此。我们来一探究竟。

### Promise 的介绍和优点

ES6 中的 Promise 是异步编程的一种方案。从语法上讲，Promise 是一个对象，它可以获取异步操作的消息。

Promise 对象, 可以**用同步的表现形式来书写异步代码**（也就是说，代码看起来是同步的，但本质上的运行过程是异步的）。使用 Promise 主要有以下好处：

-   1、可以很好地解决**回调地狱**的问题（避免了层层嵌套的回调函数）。
-   2、语法简洁、可读性强，便于后期维护。
-   3、Promise 对象提供了简洁的 API，使得管理异步操作更加容易。比如**多任务等待合并**。

Promise 的伪代码结构，大概是这样的：

```js
// 伪代码1
myPromise()
    .then(
        function () {},
        function () {}
    )
    .then(
        function () {},
        function () {}
    )
    .then(
        function () {},
        function () {}
    );

// 伪代码2
是时候展现真正的厨艺了().然后(买菜).然后(做饭).然后(洗碗);
```

上面的伪代码可以看出，即便在业务逻辑上是层层嵌套，但是代码写法上，却十分优雅，也没有过多的嵌套。

## Promise 对象的用法和状态

### 使用 Promise 的基本步骤

（1）通过 `new Promise()` 构造出一个 Promise 实例。Promise 的构造函数中传入一个参数，这个参数是一个函数，该函数用于处理异步任务。

（2）函数中传入两个参数：resolve 和 reject，分别表示异步执行成功后的回调函数和异步执行失败后的回调函数。代表着我们需要改变当前实例的状态到**已完成**或是**已拒绝**。

（3）通过 promise.then() 和 promise.catch() 处理返回结果（这里的 `promise` 指的是 Promise 实例）。

看到这里，你估计还是不知道 Promise 怎么使用。我们不妨来看一下 Promise 有哪些状态，便一目了然。要知道，Promise 的精髓在于**对异步操作的状态管理**。

### promise 对象的 3 个状态

-   初始化（等待中）：pending

-   成功：fulfilled

-   失败：rejected

**步骤 1**：

当 new Promise()执行之后，promise 对象的状态会被初始化为`pending`，这个状态是初始化状态。`new Promise()`这行代码，括号里的内容是同步执行的。括号里可以再定义一个 异步任务的 function，function 有两个参数：resolve 和 reject。如下：

-   如果请求成功了，则执行 resolve()，此时，promise 的状态会被自动修改为 fulfilled。

-   如果请求失败了，则执行 reject()，此时，promise 的状态会被自动修改为 rejected

（2）promise.then()方法：**只有 promise 的状态被改变之后，才会走到 then 或者 catch**。也就是说，在 new Promise()的时候，如果没有写 resolve()，则 promise.then() 不执行；如果没有写 reject()，则 promise.catch() 不执行。

`then()`括号里面有两个参数，分别代表两个函数 function1 和 function2：

-   如果 promise 的状态为 fulfilled（意思是：如果请求成功），则执行 function1 里的内容

-   如果 promise 的状态为 rejected（意思是，如果请求失败），则执行 function2 里的内容

另外，resolve()和 reject()这两个方法，是可以给 promise.then()传递参数的。

关于 promise 的状态改变，以及如何处理状态改变，伪代码及注释如下：

```javascript
// 创建 promise 实例
let promise = new Promise((resolve, reject) => {
    //进来之后，状态为pending
    console.log('同步代码'); //这行代码是同步的
    //开始执行异步操作（这里开始，写异步的代码，比如ajax请求 or 开启定时器）
    if (异步的ajax请求成功) {
        console.log('333');
        resolve('请求成功，并传参'); //如果请求成功了，请写resolve()，此时，promise的状态会被自动修改为fulfilled（成功状态）
    } else {
        reject('请求失败，并传参'); //如果请求失败了，请写reject()，此时，promise的状态会被自动修改为rejected（失败状态）
    }
});
console.log('222');

//调用promise的then()：开始处理成功和失败
promise.then(
    (successMsg) => {
        // 处理 promise 的成功状态：如果promise的状态为fulfilled，则执行这里的代码
        console.log(successMsg, '成功了'); // 这里的 successMsg 是前面的 resolve('请求成功，并传参')  传过来的参数
    },
    (errorMsg) => {
        //处理 promise 的失败状态：如果promise的状态为rejected，则执行这里的代码
        console.log(errorMsg, '失败了'); // 这里的 errorMsg 是前面的 reject('请求失败，并传参') 传过来的参数
    }
);
```

上面的注释要多看几遍。

## 几点补充

### new Promise() 是同步代码

`new Promise()`这行代码本身是同步的。promise 如果没有使用 resolve 或 reject 更改状态时，状态为 pending。

**举例 1**：

```js
const promiseA = new Promise((resolve, reject) => {});
console.log(promiseA); // 此时 promise 的状态为 pending（准备阶段）
```

上面的代码中，我既没有写 reslove()，也没有写 reject()。也就是说，这个 promise 一直处于准备阶段。

当完成异步任务之后，状态分为成功或失败，此时我们就可以用 reslove() 和 reject() 来修改 promise 的状态。

**举例 2**：

```js
new Promise((resolve, reject) => {
    console.log('promise1'); // 这行代码是同步代码，会立即执行
}).then((res) => {
    console.log('promise then:' + res); // 这行代码不会执行，因为前面没有写 resolve()，所以走不到 .then
});
```

打印结果：

```
promise1
```

上方代码，仔细看注释：如果前面没有写 `resolve()`，那么后面的 `.then`是不会执行的。

**举例 3**：

```js
new Promise((resolve, reject) => {
    resolve();
    console.log('promise1'); // 代码1：同步任务，会立即执行
}).then(res => {
    console.log('promise  then'); // 代码2：异步任务中的微任务
});

console.log('千古壹号'); // 代码3：同步任务
```

打印结果：

```
promise1
千古壹号
promise  then
```

代码解释：代码 1 是同步代码，所以最先执行。代码 2 是**微任务**里面的代码，所以要先等同步任务（代码 3）先执行完。当写完`resolve();`之后，就会立刻把 `.then()`里面的代码加入到微任务队列当中。

补充知识：异步任务分为“宏任务”、“微任务”两种。我们到后续的章节中再详细讲。

### Promise 的状态一旦改变，就不能再变

代码举例：

```js
const p = new Promise((resolve, reject) => {
    resolve(1); // 代码执行到这里时， promise状态是 fulfilled
    reject(2); // 尝试修改状态为 rejected，是不行的。因为状态执行到上一行时，已经被改变了。
});

p.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
```

上方代码的打印结果是 1，而不是 2，详见注释。

### Promise 的状态改变，是不可逆的

### 小结

1、promise 有三种状态：等待中、成功、失败。等待中状态可以更改为成功或失败，已经更改过状态后⽆法继续更改（例如从失败改为成功）。

2、promise 实例中需要传⼊⼀个函数，这个函数接收两个参数，执⾏第⼀个参数之后就会改变当前 promise 为「成功」状态，执⾏第⼆个参数之后就会变为「失败」状态。

3、通过 .then ⽅法，即可在上⼀个 promise 达到成功时继续执⾏下⼀个函数或 promise。同时通过 resolve 或 reject 时传⼊参数，即可给下⼀个函数或 promise 传⼊初始值。

4、失败的 promise，后续可以通过 promise 自带的 .catch ⽅法或是 .then ⽅法的第⼆个参数进⾏捕获。

### Promise 规范

Promise 是⼀个拥有 then ⽅法的对象或函数。任何符合 promise 规范的对象或函数都可以成为 Promise。

关于 promise 规范的详细解读，可以看下面这个链接：

-   Promises/A+ 规范：<https://promisesaplus.com/>

了解这些常见概念之后，接下来，我们来具体看看 promise 的代码是怎么写的。

## Promise 封装定时器

### 传统写法

写法 1：

```js
// 定义一个异步的延迟函数：异步函数结束1秒之后，再执行cb回调函数
function fun1(cb) {
    setTimeout(function () {
        console.log('即将执行cb回调函数');
        cb();
    }, 1000);
}

// 先执行异步函数 fun1，再执行回调函数 myCallback
fun1(myCallback);

// 定义回调函数
function myCallback() {
    console.log('我是延迟执行的cb回调函数');
}
```

写法 2：（精简版，更常见）

```js
// 定义一个异步的延迟函数：异步函数结束1秒之后，再执行cb回调函数
function fun1(cb) {
    setTimeout(cb, 1000);
}

// 先执行异步函数fun1，再执行回调函数
fun1(function () {
    console.log('我是延迟执行的cb回调函数');
});
```

上⾯的例⼦就是最传统的写法，在异步结束后通过传入回调函数的方式执⾏函数。

学习 Promise 之后，我们可以将这个异步函数封装为 Promise，如下。

### Promise 写法

```js
function myPromise() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
}

/* 【重要】上面的 myPromise 也可以写成：
function myPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
*/

// 先执行异步函数 myPromise，再执行回调函数
myPromise().then(() => {
    console.log('我是延迟执行的回调函数');
});
```

## Promise 封装 Ajax 请求

### 传统写法

```js
// 封装 ajax 请求：传入回调函数 success 和 fail
function ajax(url, success, fail) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            success && success(xmlhttp.responseText);
        } else {
            // 这里的 && 符号，意思是：如果传了 fail 参数，就调用后面的 fail()；如果没传 fail 参数，就不调用后面的内容。因为 fail 参数不一定会传。
            fail && fail(new Error('接口请求失败'));
        }
    };
}

// 执行 ajax 请求
ajax(
    '/a.json',
    (res) => {
        console.log('qianguyihao 第一个接口请求成功:' + JSON.stringify(res));
    },
    (err) => {
        console.log('qianguyihao 请求失败:' + JSON.stringify(err));
    }
);
```

上面的传统写法里，定义和执行 ajax 时需要传⼊ success 和 fail 这两个回调函数，进而执行回调函数。

注意看注释，`callback && callback()`这种格式的写法，很常见。

### Promise 写法

有了 Promise 之后，我们不需要传入回调函数，而是：

-   先将 promise 实例化；

-   然后在原来执行回调函数的地方，改为执行对应的改变 promise 状态的函数；

-   并通过 then ... catch 或者 then ...then 等写法，实现链式调用，提高代码可读性。

和传统写法相比，promise 在写法上的大致区别是：定义异步函数的时候，将 callback 改为 resolve 和 reject，待状态改变之后，我们在外面控制具体执行哪些函数。

写法 1：

```js
// 封装 ajax 请求：传入回调函数 success 和 fail
function ajax(url, success, fail) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            success && success(xmlhttp.responseText);
        } else {
            // 这里的 && 符号，意思是：如果传了 fail 参数，就调用后面的 fail()；如果没传 fail 参数，就不调用后面的内容。因为 fail 参数不一定会传。
            fail && fail(new Error('接口请求失败'));
        }
    };
}

// 第一步：model层的接口封装
function promiseA() {
    return new Promise((resolve, reject) => {
        ajax('xxx_a.json', (res) => {
            // 这里的 res 是接口的返回结果。返回码 retCode 是动态数据。
            if (res.retCode == 0) {
                // 接口请求成功时调用
                resolve('request success' + res);
            } else {
                // 接口请求失败时调用
                reject({ retCode: -1, msg: 'network error' });
            }
        });
    });
}

// 第二步：业务层的接口调用。这里的 data 就是 从 resolve 和 reject 传过来的，也就是从接口拿到的数据
promiseA()
    .then((res) => {
        // 从 resolve 获取正常结果：接口请求成功后，打印接口的返回结果
        console.log(res);
    })
    .catch((err) => {
        // 从 reject 获取异常结果
        console.log(err);
    });
```

上方代码中，当从接口返回的数据`data.retCode`的值（接口返回码）不同时，可能会走 resolve，也可能会走 reject，这个由你自己的业务决定。

接口返回的数据，一般是`{ retCode: 0, msg: 'qianguyihao' }` 这种 json 格式， retCode 为 0 代表请求接口成功，所以前端对应会写`if (res.retCode == 0) `这样的逻辑。

另外，上面的写法中，是将 promise 实例定义成了一个**函数** `promiseA`。我们也可以将 promise 实例定义成一个**变量** `promiseB`，达到的效果和上面的代码是一模一样的。写法如下：（写法上略有区别）

写法 2：

```js
// 第一步：model层的接口封装
const promiseB = new Promise((resolve, reject) => {
    ajax('xxx_a.json', (res) => {
        // 这里的 res 是接口的返回结果。返回码 retCode 是动态数据。
        if (res.retCode == 0) {
            // 接口请求成功时调用
            resolve('request success' + res);
        } else {
            // 接口请求失败时调用
            reject({ retCode: -1, msg: 'network error' });
        }
    });
});

// 第二步：业务层的接口调用。这里的 data 就是 从 resolve 和 reject 传过来的，也就是从接口拿到的数据
promiseB
    .then((res) => {
        // 从 resolve 获取正常结果
        console.log(res);
    })
    .catch((err) => {
        // 从 reject 获取异常结果
        console.log(err);
    });
```

注意，如果你用的是写法 1（将 promise 实例定义为函数），则调用 promise 的时候是`promiseA().then()`，如果你用的是写法 2（将 promise 实例定位为函数），则调用的时候用的是`promiseB.then()`。写法 1 多了个括号，不要搞混了。

## 处理 reject 失败状态的两种写法

我们有两种写法可以捕获并处理 reject 异常状态：

-   写法 1：通过 catch 方法捕获 状态变为已 reject 时的 promise

-   写法 2：then 可以传两个参数，第⼀个参数为 resolve 后执⾏，第⼆个参数为 reject 后执⾏。

### 代码格式

这两种写法的**代码格式**如下：

```js
// 第一步：model层的接口封装
function promiseA() {
    return new Promise((resolve, reject) => {
        // 这里做异步任务（比如 ajax 请求接口，或者定时器）
				...
        ...
    });
}

const onResolve = function (res) {
    console.log(res);
};

const onReject = function (err) {
    console.log(err);
};

// 写法1：通过 catch 方法捕获 状态变为已拒绝时的 promise
promiseA().then(onResolve).catch(onReject);

// 写法2：then 可以传两个参数，第⼀个参数为 resolve 后执⾏，第⼆个参数为 reject 后执⾏
promiseA().then(onResolve, onReject);

// 【错误写法】写法3：通过 try catch 捕获 状态变为已拒绝时的 promise
// 这种写法是错误的，因为 try catch只能捕获同步代码里的异常，而  promise.reject() 是异步代码。
try {
    promiseA().then(onResolve);
} catch (e) {
    // 语法上，catch必须要传入一个参数，否则报错
    onReject(e);
}
```

如注释所述：前面的段落里，我们捕获 reject 异常用的就是写法 1。如果你写法 2 也是可以的。

需要注意的是，上面的写法 3 是错误的。运行之后，控制台会报如下错误：

![](http://img.smyhvae.com/20210430_1553.png)

[解释如下](https://blog.csdn.net/xiaoluodecai/article/details/107297404)：

try-catch 主要用于捕获异常，注意，这里的异常是指**同步**函数的异常。如果 try 里面的异步方法出现了异常，此时 catch 是无法捕获到异常的。

原因是：当异步函数抛出异常时，对于宏任务而言，执行函数时已经将该函数推入栈，此时并不在 try-catch 所在的栈，所以 try-catch 并不能捕获到错误。对于微任务而言（比如 promise）promise 的构造函数的异常只能被自带的 reject 也就是.catch 函数捕获到。

（2）写法 1 中，`promiseA().then().catch()`和`promiseA().catch().then()`区别在于：前者可以捕获到 `then` 里面的异常，后者不可以。

### 代码举例

这两种写法的**代码举例**如下：

```js
function promiseA() {
    return new Promise((resolve, reject) => {
        // 这里做异步任务（比如 ajax 请求接口，或者定时器）
            ...
            ...
    });
}

// 写法1
promiseB()
    .then((res) => {
        // 从 resolve 获取正常结果
        console.log('接口请求成功时，走这里');
        console.log(res);
    })
    .catch((err) => {
        // 从 reject 获取异常结果
        console.log('接口请求失败时，走这里');
        console.log(err);
    })
    .finally(() => {
        console.log('无论接口请求成功与否，都会走这里');
    });


// 写法 2：（和写法 1 等价）
promiseB()
    .then(
        (res) => {
            // 从 resolve 获取正常结果
            console.log('接口请求成功时，走这里');
            console.log(res);
        },
        (err) => {
            // 从 reject 获取异常结果
            console.log('接口请求失败时，走这里');
            console.log(err);
        }
    )
    .finally(() => {
        console.log('无论接口请求成功与否，都会走这里');
    });
```

**代码解释**：写法 1 和写法 2 的作用是完全等价的。只不过，写法 2 是把 catch 里面的代码作为 then 里面的第二个参数而已。

## 总结

了解这些内容之后， 你已经对 Promise 有了基本了解。下一篇文章，我们来讲一讲 Promise 在实战开发的常见用法。

## 参考链接

-   [当面试官问你 Promise 的时候，他究竟想听到什么？](https://zhuanlan.zhihu.com/p/29235579)

-   [手写一个 Promise/A+,完美通过官方 872 个测试用例](https://www.cnblogs.com/dennisj/p/12660388.html)

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 08-Async Await函数详解
---

<ArticleTopAd></ArticleTopAd>


## async/await （异步函数）概述

async/await 是在 ES8(即ES 2017）中引入的新语法，是另外一种异步编程解决方案。

本质： 是 Generator 的语法糖。

- async 的返回值是 Promise 实例对象。

- await 可以得到异步结果。

我们在普通的函数前面加上 async 关键字，就成了 async 函数。

什么是语法糖呢？语法糖就是让语法变得更加简洁、更加舒服，有一种甜甜的感觉。

## async/await 的基本用法

async 后面可以跟一个 Promise 实例对象。代码举例如下：

```javascript
    const request1 = function() {
        const promise = new Promise(resolve => {
            request('https://www.baidu.com/xxx_url', function(response) {
                if (response.retCode == 200) {
                    // 这里的 response 是接口1的返回结果
                    resolve('request1 success'+ response);
                } else {
                    reject('接口请求失败');
                }
            });
        });

        return promise;
    };

    async function queryData() {
        const response = await request1();
        });
        return response;
    }
    queryData().then(data => {
        console.log(data);
    });

```


## 基于 async/await 处理多次 Ajax 请求【重要】

实际开发中，现在有三个网络请求，请求2必须依赖请求1的结果，请求3必须依赖请求2的结果，如果按照往常的写法，会有三层回调，会陷入“回调地狱”。

这种场景其实就是接口的多层嵌套调用。之前学过 Promise，它可以把原本的**多层嵌套调用**改进为**链式调用**。

而今天要学习的 async/await ，可以把原本的“多层嵌套调用”改成类似于同步的写法，非常优雅。

代码举例：

暂略。


### Promise、async...await、Generator的对比

我们在使用 Promise、async...await、Generator 的时候，返回的都是 Promise 的实例。

如果直接使用 Promise，则需要通过 then 来进行链式调用；如果使用 async...await、Generator，写起来更像同步的代码。

## 参考链接

- [js async await 终极异步解决方案](https://www.cnblogs.com/CandyManPing/p/9384104.html)

- [理解 JavaScript 的 async/await](https://segmentfault.com/a/1190000007535316)

---
title: 01-Bootstrap入门
publish: true
---

<ArticleTopAd></ArticleTopAd>





## Bootstrap 介绍

Bootstrap 是非常流行的前端框架。特点是：灵活简洁、代码优雅、美观大方。它是由Twitter的两名工程师 Mark Otto 和 Jacob Thornton 在2011年开发的。

简单来说，Bootstrap 让 Web 开发**更简单、更快捷**。使用 Bootstrap 框架并不代表我们再开发时不用自己写 CSS 样式，而是不用写绝大多数常见的样式。

PS：[Amaze UI](http://amazeui.org/) 这个框架其实跟 Bootstrap 很像。

### 官网网站

- 官方网站：<https://getbootstrap.com/>

- 中文网站：<http://www.bootcss.com/>

V3版本：

![](http://img.smyhvae.com/20180225_1033.png)

V4版本：

![](http://img.smyhvae.com/20180225_1043.png)

列举几个用 Bootstrap 做的网站：

- [Bootstrap 优站精选](http://www.youzhan.org/)

- <https://mobirise.com/>

- <http://snappa.io/>

### Bootstrap 版本

目前市面上使用的最多的是 3.x.x 版本。各个版本的介绍：

2.3.2版本：

- 2013年之后，停止维护；

- 支持更广泛的浏览器

- 代码不够简洁， 功能不够多。

3.x.x 版本：

- 目前最新的稳定版本。

- 不支持 IE7 和早期的 Firefox

- 支持 IE8，单效果不好。


2015年8月发布 4.0.0-alpha 的内部测试版。

**版本号的普及：**

- alpha 版：内部测试版。α 是希腊字母的第一个，表示最早的版本，bug很多。主要是给开发和测试人员找 bug 用的。

- beta 版：公开测试版。 主要是给“部落”用户和忠实用户测试用的。bug依然很多，但比 Alpha 版要稳定。这个阶段的版本还会不断增加新功能，如果你是发烧友，可以下载这个版本。

- rc 版：候选版本（Release Candidate）。该版本不再增加新的功能。类似于最终发行版之前的预览版（发行的候选版本）。此版本的发布，预示着最终发行版即将到来。作为普通用户，如果很着急，也可以下载 rc 版。

- stable 版：稳定版。在开源软件中，都有 stable版本，这个是开源软件的最终发行版，用户可以放心大胆地使用。

### Bootstrap 库的下载

> 这里我们以  Bootstrap V3.3.7 为例。

进入[中文官网](https://v3.bootcss.com/)，下载 `用于生产环境的 Bootstrap`，如下图所示：

![](http://img.smyhvae.com/20180225_1052.png)

下载之后，解压 `bootstrap-3.3.7-dist` ，有三个文件夹：

![](http://img.smyhvae.com/20180225_1053.png)

将其拷贝到工程文件的lib文件夹下即可。

PS：`dist`表示编译之后的文件，这在库文件中是很常见的。

因为 bootstrap.js依赖jQuery，所以要先引用jquery.js 然后引用bootstrap.js。


### Bootstrap 基础模板的介绍

[Bootstrap](https://v3.bootcss.com/getting-started/)官网提供了基本模板，如下图所示：

![](http://img.smyhvae.com/20180225_1119.png)

其完整版代码 copy 如下：

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>我的网站</title>

    <!-- Bootstrap -->
	<link rel="stylesheet" href="lib/bootstrap/css/bootstrap.css">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>你好，世界！</h1>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```

我们需要对上面的代码进行解释。

**（1）Compatible**：

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

解释：设置浏览器的兼容模式版本。表示如果在IE浏览器下则使用最新的标准，渲染当前文档。

**（2）viewport 视口**：


```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```

解释：声明当前网页在移动端浏览器中展示的相关设置。我们在做移动 web 开发时，就用上面这行代码设置 viewport。

视口的作用：在移动浏览器中，当页面宽度超出设备，浏览器内部虚拟的一个页面容器，将页面容器缩放到设备这么大，然后展示。


需要注意的是：

- 目前大多数手机浏览器的视口（承载页面的容器）宽度都是980；
- 此属性为移动端页面视口设置，上方代码设置的值，表示在移动端页面的宽度为设备的宽度，并且不缩放（缩放级别为1）。

属性解释：

- width:设置viewport的宽度。
- initial-scale：初始化缩放比例。
- minimum-scale:最小缩放比例。
- maximum-scale:最大缩放比例。
- user-scalable:是否允许用户手动缩放（值可以写成yes/no，也可以写成1/0）


PS：如果设置了不允许用户缩放，那么最小缩放和最大缩放就没有意义了。二者是矛盾的。



**（3）条件注释**：

```html
    <!--[if lt IE 9]>
      <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
```

条件注释的作用：当判断条件满足时，就会执行注释中的HTML代码，不满足时会当做注释忽略掉。

上方代码的条件注释中，引入了两个脚本：

- [html5shiv](https://github.com/aFarkas/html5shiv)：让浏览器可以识别 HTML5 的新标签。如header、footer、section等。
- [respond.js](https://github.com/scottjehl/Respond)：让低版本浏览器可以使用 CSS3 的媒体查询。

另外，我们还需要引入下面这个库：

- [jQuery](https://github.com/jquery/jquery)：Bootstrap框架中的所有 JS 组件都依赖于 jQuery 实现。

我们可以把上面这三个库文件拷贝到 lib 文件夹中（注意引用的路径要写正确）。

## 使用 Bootstrap 搭建项目

### 1、工程文件的目录结构

```
├─ Demo ·························· 项目所在目录
└─┬─ /css/ ······················· 我们自己的CSS文件
  ├─ /font/ ······················ 使用到的字体文件
  ├─ /img/ ······················· 使用到的图片文件
  ├─ /js/ ························ 自己写的JS脚步
  ├─ /lib/ ······················· 从第三方下载回来的库【只用不改】
  ├─ /favicon.ico ················ 站点图标
  └─ /index.html ················· 入口文件
```

### 2、下载并引入 Bootstrap 库文件

见上一段的讲解。引入之后，另外还需要引入 html5shiv、respond、jQuery 这三个库文件。

### 3、字符集、Viewport设置、浏览器兼容模式

我们将 Bootstrap 的基础模板代码 copy到项目的index.html中，这其中就包括最前面的三个meta标签：

```html
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
```

### 4、favicon（站点图标）

```html
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
```

### 5、引入相应的第三方文件

```html
    <!-- 引入 Bootstrap 的核心样式文件（必须） -->
    <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.css">
    <!-- 引入我们自己写的 css 样式文件-->
    <link rel="stylesheet" href="css/my.css">

	...

	<script src="lib/jquery/jquery.js"></script>
	<script src="lib/bootstrap/js/bootstrap.js"></script>
	<script src="js/my.js"></script>
```

注意，先引入第三方的文件，再引入我们自己写的文件。


### 6、默认字体

在我们默认的样式表中将默认字体设置为：

```css
body{
  font-family: "Helvetica Neue",
                Helvetica,
                Microsoft Yahei,
                Hiragino Sans GB,
                WenQuanYi Micro Hei,
                sans-serif;
}
```

### 7、完成页面空结构

> 先划分好页面中的大容器，然后在具体看每一个容器中单独的情况。

完整代码如下：

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title>我的网站</title>
    <!--建议：第三方引用的css库放在上面，我们自己写的文件，都放在下面-->

    <!-- 引入 Bootstrap 的核心样式文件（必须） -->
    <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.css">
    <!-- 引入我们自己写的 css 样式文件-->
    <link rel="stylesheet" href="css/main.css">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    <!--[if lt IE 9]>
    <script src="lib/html5shiv/html5shiv.min.js"></script>
    <script src="lib/respond/respond.min.js"></script>
    <![endif]-->
</head>

<body>
<!-- 头部区域 -->
<header id="header">
</header>
<!-- /头部区域 -->

<!-- 广告轮播 -->
<section id="main_ad"></section>
<!-- /广告轮播 -->

<!-- 特色介绍 -->
<section></section>
<!-- /特色介绍 -->

<!-- 立即预约 -->
<section></section>
<!-- /立即预约 -->

<!-- 产品推荐 -->
<section></section>
<!-- /产品推荐 -->

<!-- 新闻列表 -->
<section></section>
<!-- /新闻列表 -->

<!-- 合作伙伴 -->
<section></section>
<!-- /合作伙伴 -->

<!-- 脚注区域 -->
<footer></footer>
<!-- /脚注区域 -->

<script src="lib/jquery/jquery.js"></script>
<script src="lib/bootstrap/js/bootstrap.js"></script>
<script src="js/main.js"></script>
</body>

</html>

```




## CSS 样式

全局 CSS 样式在[官网](https://v3.bootcss.com/css/)有介绍：

![](http://img.smyhvae.com/20180225_1710.png)

**如果需要哪个样式，直接根据文档的指引，在相应的元素里加指定的类名即可。**

我们选部分重要的来讲一下。

### 布局容器：container 类

截图如下：

![](http://img.smyhvae.com/20180225_1720.png)

**作用**：用于定义一个固定宽度且居中的版心。只不过，这个版心的宽度具有**响应式**的效果。

也就是说，在 Bootstrap 中，我们一般用 .container 类来表示版心。

格式举例：

```html
<div class="topbar">
  <div class="container">
    <!--
      此处的代码会显示在一个固定宽度且居中的容器中
      该容器的宽度会跟随屏幕的变化而变化
    -->
  </div>
</div>
```

这个 container 类我们自己其实也可以写，通过媒体查询即可实现。

### 栅格参数

栅格系统最主要的操作是：利用 css 的响应式去做一套行列布局的预置样式。

栅格参数如下：

![](http://img.smyhvae.com/20180225_1732.png)

我们尤其要记住各个屏幕的尺寸和**类前缀**。

## 组件

一个按钮称之为样式；两个按钮在一起，就可以称之为组件。

组件在[官网](https://v3.bootcss.com/components/)有介绍：

![](http://img.smyhvae.com/20180225_1738.png)

我们现在需要关注的不是组件怎么用，而是里面有哪些组件，避免**重复造轮子**：别人已经做得很好了，不需要我们再重复。

## JS 组件

JS 组件在[官网](https://v3.bootcss.com/javascript/)有介绍：

![](http://img.smyhvae.com/20180225_1750.png)

这里面包含了很多带交互的组件。比如轮播图：

![](http://img.smyhvae.com/20180225_1841.png)

## 博主提供的下载链接

空结构的工程文件的下载地址：(lib文件夹里包含了Bootstrap相关的各种库和中文文档)

- [2018-02-25-BootstrapDemo及文档.rar](https://github.com/qianguyihao/web-resource/blob/main/project/2018-02-25-BootstrapDemo%E5%8F%8A%E6%96%87%E6%A1%A3.rar)

还是那句话：**如果需要哪个样式，直接根据文档的指引，在相应的元素里加指定的类名即可。**

## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)
---
title: 01-数据库的基础知识
publish: true
---

<ArticleTopAd></ArticleTopAd>






## 数据库的概念

**数据库**：database（DB），是一种存储数据的仓库。具有如下特性：

- 数据库是根据数据结构组织、存储和管理数据。
- 数据库能够长期、高效的管理和存储数据。
- 数据库的目的就是能够存储（写）和提供（读）数据。

## 数据库分类

数据库分为两类：

- **关系型数据库**：把复杂的数据结构归结为简单的二元关系，即二维表格形式（二维表）。注重数据存储的持久性。

- **非关系型数据库**：没有具体模型的数据结构。英文简称 NoSQL（Not Only SQL )，意为"不仅仅是SQL"。注重数据读取的效率。

我们具体来看看。

### 1、关系型数据库

**关系型数据库**：把复杂的数据结构归结为简单的二元关系，即二维表格形式（二维表）。

关系型数据库有四层结构：

- 数据库管理系统（DBMS）：DataBase Management System。

- 数据库（DB）：数据存储的管理者。

- 数据表（Table）：数据关系管理者。

- 数据字段（Field）：实际数据存储者。

常见的关系型数据库产品：

- 大型：Oracle

- 中型：MySQL、SQL Server

- 小型：Sybase、Access


### 2、非关系型数据库

**非关系型数据库**：没有具体模型的数据结构。英文简称 NoSQL（Not Only SQL )，意为"不仅仅是SQL"。

常见的非关系型数据库产品：MongoDB、Redis、Memcached。



## SQL 的介绍

**SQL**：全称 **Structured Query Language**，译为**结构化查询语言**。

**SQL**：是一种针对关系型数据库的标准化编程语言，能够实现用户数据库的查询和程序设计。

通俗来讲，**SQL 是关系型数据库的操作指令**。

根据操作类型不同，SQL 可分为几类：


* DQL：Data Query Language，数据查询语言，用于查询和检索数据
* DML：Data Manipulation Language，数据操作语言，用于数据的写操作（增删改）
* DDL：Data Definition Language，数据定义语言，用于创建数据结构
* DCL：Data Control Language，数据控制语言，用于用户权限管理
* TPL：Transaction Process Language，事务处理语言，辅助DML进行事务操作（因此也归属于DML）


补充：

- SQL 虽然是编程语言，但通常只用来进行数据管理，逻辑部分交给其他编程语言。

- SQL 是针对关系型数据库的**通用语言**，所有关系型数据库都是基于SQL进行数据操作；而不同的数据库产品，在 SQL 操作指令上略有差异。



## MySQL 的介绍

### MySQL 数据库介绍

MySQL 是很有名的 关系型数据库产品，由瑞典MySQL AB 公司开发，现在属于 Oracle 旗下产品。

MySQL 在 2008 年被 Sun 公司以10亿美金所收购，而 Sun 公司在2009年被 Oracle 甲骨文公司收购。

MySQL 开源免费。

### MySQL 访问原理

MySQL是一种C/S结构的软件，因此我们需要安装 MySQL 的客户端来访问远程的服务端。也就是说，数据是存放在服务器上的，客户端通过执行 sql 指令来操作服务端的数据。

具体步骤是：

（1）客户端通过 主机（host） + 端口号（port） 服务端。

（2）输入 username 和 password 验证身份。

（3）客户端和服务端连接成功，通过 sql 指令开始操作数据库。








---
title: 06-Promise的链式调用
publish: true
---

<ArticleTopAd></ArticleTopAd>

## Promise 的链式调用：处理多次 Ajax 请求【重要】

实际开发中，我们经常需要同时请求多个接口。比如说：在请求完`接口1`的数据`data1`之后，需要根据`data1`的数据，继续请求接口 2，获取`data2`；然后根据`data2`的数据，继续请求接口 3。

换而言之，现在有三个网络请求，请求 2 必须依赖请求 1 的结果，请求 3 必须依赖请求 2 的结果，如果按照往常的写法，会有三层回调，会陷入“回调地狱”。

这种场景其实就是接口的多层嵌套调用。有了 Promise 之后，我们可以把多层嵌套调用按照**线性**的方式进行书写，非常优雅。也就是说：Promise 可以把原本的**多层嵌套写法**改进为**链式写法**。

### ES5 中的传统写法

```js
// 封装 ajax 请求：传入回调函数 success 和 fail
function ajax(url, success, fail) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            success && success(xmlhttp.responseText);
        } else {
            fail && fail(new Error('接口请求失败'));
        }
    };
}

// 执行 ajax 请求
ajax(
    '/a.json',
    (res) => {
        console.log('qianguyihao 第一个接口请求成功:' + JSON.stringify(res));
        // ajax嵌套调用
        ajax('b.json', (res) => {
            console.log('qianguyihao 第二个接口请求成功:' + JSON.stringify(res));
            // ajax嵌套调用
            ajax('c.json', (res) => {
                console.log('qianguyihao 第三个接口请求成功:' + JSON.stringify(res));
            });
        });
    },
    (err) => {
        console.log('qianguyihao 请求失败:' + JSON.stringify(err));
    }
);
```

上面的代码层层嵌套，可读性很差，而且出现了我们常说的回调地狱问题。

### Promise 链式调用（初步写法，方便理解）

如果我们不对 Promise 的链式调用进行封装，那么，它的简单写法是下面这样的：

```js
// 封装 ajax 请求：传入回调函数 success 和 fail
function ajax(url, success, fail) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            success && success(xmlhttp.responseText);
        } else {
            fail && fail(new Error('接口请求失败'));
        }
    };
}

new Promise((resolve, reject) => {
    ajax('a.json', (res) => {
        console.log(res);
        resolve();
    });
})
    .then((res) => {
        console.log('a成功');
        return new Promise((resolve, reject) => {
            ajax('b.json', (res) => {
                console.log(res);
                resolve();
            });
        });
    })
    .then((res) => {
        console.log('b成功');
        return new Promise((resolve, reject) => {
            ajax('c.json', (res) => {
                console.log(res);
                resolve();
            });
        });
    })
    .then((res) => {
        cnosole.log('c成功');
    });
```

上面代码中，then 是可以链式调用的，一旦 return 一个新的 promise 实例之后，后面的 then 就可以拿到前面 resolve 出来的数据。这种**扁平化**的写法，更方便维护；并且可以更好的**管理**请求成功和失败的状态。

但是，你可能会奇怪，上面的代码，怎么这么多？而且有不少重复。因为这里只是采用了一种笨拙的方式来写，为的是方便大家理解 promise 的执行过程。我们其实可以对 promise 的链式调用进行封装。

怎么个封装法呢？上面的代码中，每次在 return 一个 promise 的时候，只是 url 地址不一样，其他的代码是一样的。所以我们可以把重复的代码封装成函数。写法如下。

### Promise 链式调用（封装一个接口）

针对同一个接口的多次嵌套调用，采用 promise 封装后的写法如下：

```js
// 定义 ajax 请求：传入回调函数 success 和 fail
function ajax(url, success, fail) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            success && success(xmlhttp.responseText);
        } else {
            fail && fail(new Error('接口请求失败'));
        }
    };
}

// 第一步：model层，接口封装
function getPromise(url) {
    return new Promise((resolve, reject) => {
        ajax(url, (res) => {
            // 这里的 res 是接口的返回结果。返回码 retCode 是动态数据。
            if (res.retCode == 0) {
                // 接口请求成功时调用
                resolve('request success' + res);
            } else {
                // 接口请求异常时调用
                reject({ retCode: -1, msg: 'network error' });
            }
        });
    });
}

// 第二步：业务层的接口调用。这里的 data 就是 从 resolve 和 reject 传过来的，也就是从接口拿到的数据
getPromise('a.json')
    .then((res) => {
        // a 请求成功。从 resolve 获取正常结果：接口请求成功后，打印a接口的返回结果
        console.log(res);
        return getPromise('b.json'); // 继续请求 b
    })
    .then((res) => {
        // b 请求成功
        console.log(res);
        return getPromise('c.json'); // 继续请求 c
    })
    .then((res) => {
        // c 请求成功
        console.log(res);
    })
    .catch((e) => {
        // 从 reject中获取异常结果
        console.log(e);
    });
```

怎么样？上面代码是不是非常简洁？而且可读性很强。

代码写到这里，我们还可以再继续优化一下。细心的你可以发现，我们在做三次嵌套请求的时候，针对 resolve 和 reject 的处理时机是一样的。如果你的业务是针对**同一个接口**连续做了三次调用，只是请求**传参不同**，那么，按上面这样写是没有问题的。

但是，真正在实战中，我们往往需要嵌套请求**多个不同的接口**，要处理的 resolve 和 reject 的时机和逻辑往往是不同的，所以需要分开封装不同的 Promise 实例，这在实战开发中更为常见。代码应该是像下面这样写。

### Promise 链式调用（封装多个接口）

针对多个不同接口的嵌套调用，采用 promise 封装后的写法如下：

```js
// 封装 ajax 请求：传入回调函数 success 和 fail
function ajax(url, success, fail) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            success && success(xmlhttp.responseText);
        } else {
            fail && fail(new Error('接口请求失败'));
        }
    };
}

// Promise 封装接口1
function request1() {
    return new Promise((resolve, reject) => {
        ajax('https://www.baidu.com', (res) => {
            if (res.retCode == 201) {
                // 接口请求成功时调用：这里的 res 是接口1的返回结果
                resolve('request1 success' + res);
            } else {
                // 接口请求异常时调用异常
                reject('接口1请求失败');
            }
        });
    });
}

// Promise 封装接口2
function request2() {
    return new Promise((resolve, reject) => {
        ajax('https://www.jd.com', (res) => {
            if (res.retCode == 202) {
                // 这里的 res 是接口2的返回结果
                resolve('request2 success' + res);
            } else {
                reject('接口2请求失败');
            }
        });
    });
}

// Promise 封装接口3
function request3() {
    return new Promise((resolve, reject) => {
        ajax('https://www.taobao.com', (res) => {
            if (res.retCode == 203) {
                // 这里的 res 是接口3的返回结果
                resolve('request3 success' + res);
            } else {
                reject('接口3请求失败');
            }
        });
    });
}

// 先发起request1，等resolve后再发起request2；紧接着，等 request2有了 resolve之后，再发起 request3
request1()
    .then((res1) => {
        // 接口1请求成功
        console.log(res1);
        return request2();
    })
    .then((res2) => {
        // 接口2请求成功
        console.log(res2);
        return request3();
    })
    .then((res3) => {
        // 接口3请求成功
        console.log(res3);
    })
    .catch((err) => {
        // 从 reject中获取异常结果
        console.log(err);
    });
```

这段代码很经典，你一定要多看几遍，多默写几遍。倒背如流也不过分。

## Promise 链式调用：封装 Node.js 的回调方法

### 传统写法

```js
fs.readFile(A, 'utf-8', function (err, data) {
    fs.readFile(B, 'utf-8', function (err, data) {
        fs.readFile(C, 'utf-8', function (err, data) {
            fs.readFile(D, 'utf-8', function (err, data) {
                console.log('qianguyihao:' + data);
            });
        });
    });
});
```

上方代码多层嵌套，存在回调地狱的问题。

### Promise 写法

```js
function read(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

read(A)
    .then((data) => {
        return read(B);
    })
    .then((data) => {
        return read(C);
    })
    .then((data) => {
        return read(D);
    })
    .then((data) => {
        console.log('qianguyihao:' + data);
    })
    .catch((err) => {
        console.log(err);
    });
```

这一段代码可以看出，Promise 很好的处理了回调地狱的问题。下一篇文章，我们会更详细的介绍 Promise 的链式调用。

## 链式调用，如何处理 reject 失败状态

### 例 1：不处理 reject

```js
getPromise('a.json')
    .then(
        (res) => {
            console.log(res);
            return getPromise('b.json'); // 继续请求 b
        },
        (err) => {
            // a 请求失败
            console.log('a: err');
        }
    )
    .then((res) => {
        // b 请求成功
        console.log(res);
        return getPromise('c.json'); // 继续请求 c
    })
    .then((res) => {
        // c 请求成功
        console.log('c：success');
    });
```

上面的代码中，假设 a 请求失败，那么，后面的代码会怎么走呢？

打印结果：

```
a: err
undefined
c：success
```

我们可以看到，虽然 a 请求失败，但后续的请求依然会继续执行。

为何打印结果的第二行是 undefined？这是因为，当 a 请求走到 reject 之后，我们并没有做任何处理。这就导致，代码走到第二个 `then`的时候，**其实是在执行一个空的 promise**。

### 例 2：单独处理 reject

```js
getPromise('a.json')
    .then(
        (res) => {
            console.log(res);
            return getPromise('b.json'); // 继续请求 b
        },
        (err) => {
            // a 请求失败
            console.log('a: err');
            // 【重要】即使 a 请求失败，也依然继续执行 b请求
            return getPromise('b.json');
        }
    )
    .then((res) => {
        // b 请求成功
        console.log(res);
        return getPromise('c.json'); // 继续请求 c
    })
    .then((res) => {
        // c 请求成功
        console.log('c：success');
    });
```

跟例 1 相比，例 2 在 reject 中增加了一行`return getPromise('b.json')`，意味着，即使 a 请求失败，也要继续执行 b。

这段代码，我们是单独处理了 a 请求失败的情况。

### 统一处理 reject

针对 a、b、c 这三个请求，不管哪个请求失败，我都希望做统一处理。这种代码要怎么写呢?我们可以在最后面写一个 catch。

代码举例如下：

```js
getPromise('a.json')
    .then((res) => {
        console.log(res);
        return getPromise('b.json'); // 继续请求 b
    })
    .then((res) => {
        // b 请求成功
        console.log(res);
        return getPromise('c.json'); // 继续请求 c
    })
    .then((res) => {
        // c 请求成功
        console.log('c：success');
    })
    .catch((err) => {
        // 统一处理请求失败
        console.log(err);
    });
```

上面的代码中，由于是统一处理多个请求的异常，所以**只要有一个请求失败了，就会马上走到 catch**，剩下的请求就不会继续执行了。比如说：

-   a 请求失败：然后会走到 catch，不执行 b 和 c

-   a 请求成功，b 请求失败：然后会走到 catch，不执行 c。

## return 的返回值

return 后面的返回值，有两种情况：

-   情况 1：返回 Promise 实例对象。返回的该实例对象会调用下一个 then。

-   情况 2：返回普通值。返回的普通值会直接传递给下一个 then，通过 then 参数中函数的参数接收该值。

我们针对上面这两种情况，详细解释一下。

### 情况 1：返回 Promise 实例对象

举例如下：

```js
getPromise('a.json')
    .then((res) => {
        // a 请求成功。从 resolve 获取正常结果：接口请求成功后，打印a接口的返回结果
        console.log(res);
        // 这里的 return，返回的是 Promise 实例对象
        return new Promise((resolve, reject) => {
            resolve('qianguyihao');
        });
    })
    .then((res) => {
        console.log(res);
    });
```

### 情况 2：返回 普通值

```js
getPromise('a.json')
    .then((res) => {
        // a 请求成功。从 resolve 获取正常结果：接口请求成功后，打印a接口的返回结果
        console.log(res);
        // 返回普通值
        return 'qianguyihao';
    })
    /*
        既然上方代码并没有返回 promise，那么，这里的 then 是谁来调用呢？
        答案是：这里会产生一个新的 默认的 promise实例，来调用这里的then，确保可以继续进行链式操作。
    */
    .then((res2) => {
        // 这里的 res2 接收的是 普通值 'qianguyihao'
        console.log(res2);
    });
```

## 我的公众号

想学习**更多技能**？不妨关注我的微信公众号：**千古壹号**。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](https://img.smyhvae.com/20200102.png)
---
title: 04-MySQL字段的数据类型
publish: true
---

<ArticleTopAd></ArticleTopAd>




## 前言

MySQL 中的字段，主要有四种数据类型：

- 整型（整数）

- 小数

- 字符串类型

- 时间日期类型

下面来详细讲一讲。

## 整数类型

### 整数类型的分类

MySQL中，整型有五种：

* 迷你整型：tinyint，使用**1个字节**存储整数，最多存储256个整数（-128~127）。

* 短整型：smallint，使用**2个字节**存储整数。

* 中整型：mediumint，使用**3个字节**存储整数。

* 标准整型：int，使用**4个字节**存储整数。

* 大整型：bigint，使用**8个字节**存储。

**强调**：

（1）如果你不知道用哪一种，或者懒得计算，那就用标准整型 `int`吧，这个用的最多。

（2）整型在 MySQL 中默认是有符号的，即有正负；无符号需要使用 `unsigned` 修饰整型，代表正整数。

**举例**：

在指定的表中新增 age 字段，要求 age 是正整数：

```sql
alter table table_qiangu1 add age int unsigned;
```

### 设计思路

如果需要新建整型的字段，设计思路如下：

（1）确定需要存储的数据是整数。

（2）预估整数的范围，选择合适的整数类型。

（3）确定这个整数是否需要包含负数。

### 整数类型的取值范围

todo。参考链接：<https://blog.csdn.net/slyjit/article/details/54290486>


### 整数类型的显示宽度、零填充

> 我们在很多设计表中，可能会看到比如 `int(11)`这种数据类型，这里面的 `11`代表的就是`显示宽度`。

所谓的**显示宽度**，其实就是显示的时候，看到的最少数字个数。

比如 int(2) ，表示不管你的数值是多少，最少可以看到两个数字。假如你存的数值是9，没有满两位，就会在前面补零，显示为`09`；假如你的数值是120，超过了显示宽度，则直接显示原始值，不会做**零填充**。

**显示宽度的注意事项**：

- 显示宽度只适用于 MySQL 的整数类型。

- 显示宽度只是指明 MySQL 整数类型最少显示的数字个数（可以通过desc查看表字段显示）。

- **显示宽度只是在显示的时候改变数值的样式，不会对原本的值进行更改**。

- 显示宽度和数值类型的取值范围无关。例如int(10) 他的取值范围依然是(-2 147 483 648，2 147 483 647)。

**零填充的注意事项**：

- 要想让显示宽度自动进行**零填充**，必须要配合 `ZEROFILL`这个关键字一起使用。

- **零填充只能针对正整数**，也就是说，`ZEROFILL` 要求整型为无符号型。



**举例**：

1、新建一张表，然后在这张表中新增 num1 字段，要求 num1 显示3位，不够3位的自动进行零填充：

```sql
# 新建一张表
CREATE TABLE table_qiangu1 (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY
);

# 显示宽度有效（正确写法）
alter table table_qiangu1 add num1 int(3) zerofill;

# 对比：普通写法，显示宽度无效
alter table table_qiangu1 add num2 int(3);

# 对比：普通写法
alter table table_qiangu1 add num3 int;
```

上述命令中，如果把 `zerofill` 这个关键字去掉，是达不到显示宽度的效果的。执行完上述命令后，我们执行 `desc table_qiangu1` 命令，对比一下 num1、num2、num3 的字段结构就知道了：

![](https://img.smyhvae.com/20200423_1050.png)

上方截图可以看到，只有 num1 才有显示宽度，它可以进行零填充，num2、num3不行。我们往表中插入整数 `6`，然后看看显示结果，就一目了然：

![](https://img.smyhvae.com/20200423_1055.png)


参考链接：[MySql数据库 数值类型的显示宽度](https://juejin.im/post/5b24a2c251882574d73c6f82)


## 小数

MySQL 中的小数分为两大类：


浮点型的数据分为两种：

- 单精度：float，使用4个字节存储，精度范围为6-7位有效数字。

- 双精度：double，使用8个字节存储，精度范围为14-15位有效数字。

注意：

- 浮点数超过精度范围会自动进行四舍五入。

- 精度可以指定整数和小数部分。比如







---
title: 01-Bootstrap入门
publish: false
---

<ArticleTopAd></ArticleTopAd>




## 前言

范式即规范。MySQL 范式的作用是：

- 让我们建的表更佳简洁和高效。

- 让功能独立化，避免耦合。

## MySQL 设计三大范式

### 第一范式（1NF）：原子性

表的每一列具有原子性，不可再分。

### 第二范式：唯一性

第二范式是建立在第一范式基础上的；外要求所有非主键字段必须完全依赖主键，而不是部分依赖。


### 第三范式

第三范式是建立在第二范式基础上的；且要求没有传递依赖。


## 参考链接

- [MySql--数据库设计三范式](https://www.jianshu.com/p/3e97c2a1687b)










---
title: 02-Bootstrap使用
publish: false
---

<ArticleTopAd></ArticleTopAd>






---
title: 03-Less详解
publish: true
---

<ArticleTopAd></ArticleTopAd>





## CSS 预处理器

### 为什么要有 CSS 预处理器

**CSS基本上是设计师的工具，不是程序员的工具**。在程序员的眼里，CSS是很头痛的事情，它并不像其它程序语言，比如说PHP、Javascript等等，有自己的变量、常量、条件语句以及一些编程语法，只是一行行单纯的属性描述，写起来相当的费事，而且代码难以组织和维护。

很自然的，有人就开始在想，能不能给CSS像其他程序语言一样，加入一些编程元素，让CSS能像其他程序语言一样可以做一些预定的处理。这样一来，就有了“**CSS预处器**（CSS Preprocessor）”。

### 什么是 CSS 预处理器

- 是 CSS 语言的**超集**，比CSS更丰满。

CSS 预处理器定义了一种新的语言，其基本思想是：**用一种专门的编程语言，为CSS增加了一些编程的特性**，将CSS作为目标生成文件，然后开发者就只要使用这种语言进行编码工作。

通俗的说，**CSS预处理器用一种专门的编程语言，进行Web页面样式设计，然后再编译成正常的CSS文件**，以供项目使用。CSS预处理器为CSS增加一些编程的特性，无需考虑浏览器的兼容性问题，例如你可以在CSS中使用变量、简单的逻辑程序、函数等等在编程语言中的一些基本特性，可以让你的CSS更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处。

CSS预处理器技术已经非常成熟，而且也涌现出了很多种不同的CSS预处理器语言，比如说：**Sass（SCSS）、LESS**、Stylus、Turbine、Swithch CSS、CSS Cacheer、DT CSS等。如此之多的CSS预处理器，那么“我应该选择哪种CSS预处理器？”也相应成了最近网上的一大热门话题，在Linkedin、Twitter、CSS-Trick、知乎以及各大技术论坛上，很多人为此争论不休。相比过去我们对是否应该使用CSS预处理器的话题而言，这已经是很大的进步了。

到目前为止，在众多优秀的CSS预处理器语言中就属**Sass、LESS和Stylus最优秀**，讨论的也多，对比的也多。本文将分别从他们产生的背景、安装、使用语法、异同等几个对比之处向你介绍这三款CSS预处理器语言。相信前端开发工程师会做出自己的选择——我要选择哪款CSS预处理器。


## less 的介绍

less 是一款比较流行的**预处理 CSS**，支持变量、混合、函数、嵌套、循环等特点。


- [官网](http://lesscss.org/)

-  [中文网（less 文档）](http://lesscss.cn/)

- [Bootstrap网站的 less 文档](https://less.bootcss.com/)

-  推荐文章：<http://www.w3cplus.com/css/less>

## less 的语法

### 注释

less 的注释可以有两种。


第一种注释：模板注释

```
  // 模板注释 这里的注释转换成CSS后将会删除
```

因为 less 要转换为 css才能在浏览器中使用。转换成 css 之后，这种注释会被删除（毕竟 css 不识别这种注释）。

第二种注释：CSS 注释语法

```less

/* CSS 注释语法 转换为CSS后让然保留 */
```

总结：如果在less中写注释，我们推荐写第一种注释。除非是类似于版权等内容，就采用第二种注释。


### 定义变量

我们可以把**重复使用或经常修改的值**定义为变量，在需要使用的地方引用这个变量即可。这样可以避免很多重复的工作量。

（1）在less文件中，定义一个变量的格式：

```less
@变量名: 变量值;        //格式

@bgColor: #f5f5f5;      //格式举例
```

（2）同时，在 less 文件中引用这个变量。

最终，less文件的完整版代码如下：

main.less：

```less
// 定义变量
@bgColor: #f5f5f5;

// 引用变量
body{
    background-color: @bgColor;
}
```


我们将上面的less文件编译为 css 文件后（下一段讲less文件的编译），自动生成的代码如下：

main.css：

```css
body{
    background-color: #f5f5f5;
}
```


### 使用嵌套

在 css 中经常会用到子代选择器，效果可能是这样的：


```css
.container {
  width: 1024px;
}

.container > .row {
  height: 100%;
}

.container > .row a {
  color: #f40;
}

.container > .row a:hover {
  color: #f50;
}
```

上面的代码嵌套了很多层，写起来很繁琐。可如果用 less 的嵌套语法来写这段代码，就比较简洁。

嵌套的举例如下：

main.less:

```less
.container {
  width: @containerWidth;

  > .row {
    height: 100%;
    a {
      color: #f40;

      &:hover {
        color: #f50;
      }

    }
  }

  div {
    width: 100px;

    .hello {
      background-color: #00f;
    }

  }
}
```

将上面的less文件编译为 css 文件后，自动生成的代码如下：

main.css

```css
.container {
    width: 1024px;
}

.container > .row {
    height: 100%;
}

.container > .row a {
    color: #f40;
}

.container > .row a:hover {
    color: #f50;
}

.container div {
    width: 100px;
}

.container div .hello {
    background-color: #00f;
}
```



### Mixin

Mixin 的作用是把**重复的代码**放到一个类当中，每次只要引用类名，就可以引用到里面的代码了，非常方便。

（1）在 less 文件中定义一个类：（将重复的代码放到自定义的类中）

```less
/* 定义一个类 */
.roundedCorners(@radius: 5px) {
  -moz-border-radius: @radius;
  -webkit-border-radius: @radius;
  border-radius: @radius;
}
```

上方代码中，第一行里面，括号里的内容是参数：这个参数是**缺省值**。

（2）在 less 文件中引用上面这个类：

```less
#header {
  .roundedCorners;
}
#footer {
  .roundedCorners(10px);
}
```



上方代码中，header 中的引用没有带参数，表示参数为缺省值； footer 中的引用带了参数，那就用这个参数。



### Import

在开发阶段，我们可以将不同的样式放到多个文件中，最后通过@import 的方式合并。意思就是，当出现多个 less 文件时，怎么引用它们。

这个很好理解， css 文件可以有很多个，less文件也可以有很多个。

（1）定义一个被引用的less文件，名为`_button1.less`：

`_button1.less:`

```less
.btn{
  line-height: 100px;
  color: @btnColor;
}
```

PS1：被引用的less文件，我们习惯在前面加**下划线**，表示它是**部分文件**。

PS2：`_button1.less`里可以引用`main.css`里的自定义变量。

（2）在 `main.css` 中引用上面的 `_button1.less`：（代码的第二行）

main.css：

```less
@btnColor: red;

@import url(`_button1.less:');    //这里的路径写的是相对路径

body{
  width: 1024px;
}
```

将 上面的main.less 编译为 main.css之后，自动生成的代码如下：

```css
.btn {
    line-height: 100px;
    color: red;
}

body {
    width: 1024px;
}
```

### 内置函数

less 里有一些内置的函数，这里讲一下 lighten 和 darken 这两个内置函数。


main.less:

```less
body {
  background-color: lighten(#000, 10%);   // 让黑色变亮 10%
  color: darken(#fff, 10%);               // 让白色变暗 10%
}

```


将 上面的 main.less 编译为 main.css 之后，自动生成的代码如下：


main.css：


```css
body {
  background-color: #1a1a1a;
  color: #e6e6e6;
}

```


如果还有什么不懂的，可以看 api 文档，在上面的第二段附上了链接。

## 在 index.html中直接引用 less.js

- 做法一：写完 less文件后，将其编译为 css 文件，然后在代码中引用css文件。

- 做法二：在代码中直接用引用 less 文件。

产品上线后，当然是使用做法一，因为做法二会多出编译的时间。

平时开发或演示demo的时候可以用做法二。


这一段，我们讲一下做法二，其实是浏览器在本地在线地把 less 文件转换为 css 文件。

（1）在 less 官网下载 less.js 文件：

![](http://img.smyhvae.com/20180226_2131.png)

把下载好的文件放在工程文件的lib文件夹里：

![](http://img.smyhvae.com/20180226_2143.png)

（2）在 index.html 中引入 less.js 和我们自己写的  main.less。位置如下：

![](http://img.smyhvae.com/20180226_2145.png)

copy 红框那部分的代码如下：

```html
    <link rel="stylesheet/less" href="../main.less">
```

我们可以在打开的网页中，通过控制台看到效果：

![](http://img.smyhvae.com/20180226_2150.png)

注意，我们要在服务器中打开 html 文件，否则，看不到效果。

这里也告诉了我们：

> 不提倡将 less 引入页面，因为 less 需要编译，因此你就需要再引入一个less.js, 多了一个HTTP 请求，同时当浏览器禁用了 js 你的样式就不起作用了，less 编译应该在服务端或使用 grunt 自动编译。


工程文件：（我引用的less.js版本是 2.5.3）

- [2018-02-27-LessDemo.rar](https://github.com/qianguyihao/web-resource/blob/main/project/2018-02-27-LessDemo.rar)


参考链接：

- [知乎 | less文件如何引入页面](https://www.zhihu.com/question/26075208)



## less 的编译

less 的编译指的是将写好的 less 文件 生成为 css 文件。

less 的编译，依赖于 NodeJS 环境。因此，我们需要先安装 NodeJS。


### 1、安装 Node.js

去 [Node.js](https://nodejs.org/zh-cn/)的官网下载安装包：

![](http://img.smyhvae.com/20180226_2153.png)

一路 next 进行安装。

安装完成后，配置环境变量：

在 path 变量中追加安装路径：`;C:\Program Files\nodejs`。重启资源管理器，即可生效。

PS：我发现，我安装的 node.js v8.9.4 版本，已经自动添加了环境变量。

在 cmd 命令行，输入`node.exe -v`，可以查看 node.js 的版本。

### 2、安装 less 的编译环境

将 [npm.zip](http://download.csdn.net/download/smyhvae/10260414) 解压，将解压后的文件拷贝到路径`C:\Users\smyhvae\AppData\Roaming\npm`下：

![](http://img.smyhvae.com/20180226_2212.png)

然后重启资源管理器（或者重启电脑）。在 cmd 中输入 `lessc`，如果能看到下面的效果，说明 less编译环境安装成功：

![](http://img.smyhvae.com/20180226_2217.png)

如果你用的是 linux 系统，可以输入下面的命令安装：

```bash
    npm install -g less
```

### 3、将 less 文件编译为 css 文件

在 less 所在的路径下，输入 `lessc xxx.less`，即可编译成功。或者，如果输入 `lessc xxx.less > ..\xx.css`，表示输出到指定路径。


## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)
---
title: 05-MySQL数据库的常用命令
publish: true
---

<ArticleTopAd></ArticleTopAd>



## MySQL 的一些简单命令

我们可以在 Navicat Premium 软件中，创建数据库和表，然后输入查询命令来查询数据。选择菜单栏「查询->新建查询->输入 sql 命令->运行」即可，效果如下：

![](https://github.com/qianguyihao/Web/blob/master/img/20200417_1750.png)

我们还可以直接在终端输入命令行来操作。

注意，在 Mac 终端执行 sql 命令时，命令的末尾必须加上`;`（英文格式的分号）。效果如下：

![](https://github.com/qianguyihao/Web/blob/master/img/20200417_1700.png)

MySQL 命令行的一些简单命令如下。

**以 root 身份进入命令行**：

```
mysql -u root -p
```

**查看有哪些数据库**：

```sql
show databases;
```

**选择进入指定的数据库**：

```sql
use xxx_database;

# 举例
use qianguyihao_database;
```

**在当前数据库中，查看有哪些表**：

```sql
show tables;
```

**在当前数据库中，查询指定表的全部数据**：

```sql
SELECT * FROM xxx_table;

# 举例
SELECT * FROM qianguyihao_student_table
```

**删除指定的表**：

```sql
drop table xxx;

# 举例
drop table qianguyihao_student_table;
```

**删除指定的数据库**：

```sql
drop database qianguyihao_student_table;
```

**创建一个数据库**：

```sql
create database qianguyihao_database2;
```

## where 条件查询

使用 `where` 子句可以对表中的数据进行筛选，结果为 true 的行会出现在查询结果中。

语法格式如下：

```sql
SELECT * FROM 表名 where 条件;
```

上面的语法格式中，`条件` 具体要怎么写呢？这个可能有很多种情况。我们继续往下看。

### 比较运算符

- `=` 等于
- `>` 大于
- `>=` 大于等于
- `<` 小于
- `<=` 小于等于
- `!=`：不等于
- `age > 20`：查询 age 大于 30 的数据

**举例**：

```sql
# 查询 age 大于 20 的数据
SELECT * FROM qianguyihao_table WHERE age > 20;
```

### 逻辑运算符

- AND

- OR

- NOT

**举例**：

```sql
# 查询 age 在20至30之间的数据
SELECT * FROM qianguyihao_table WHERE age BETWEEN 20 AND 30;

```

### 范围查询

- `in` 表示在一个非连续的范围内。

- `between ... and ...` 表示在一个连续的范围内

举例：

```sql
# 查询 name 为 千古壹号 或者 许嵩的数据
SELECT * FROM qianguyihao_table WHERE name IN ['千古壹号', '许嵩'];

SELECT * FROM qianguyihao_table WHERE age BETWEEN 20 AND 30;
```

### 模糊查询

- `like`
  - `%` 表示任意多个任意字符
  - `_` 表示一个任意字符

`%` 符号举例：

```sql
# 查询标题中包含“前端”这两个字的数据（“前端”这两个字的前后可能都有内容）
select * from qianguyihao_table where `title` like "%前端%";

# 查询标题以“前端”开头的数据
select * from qianguyihao_table where `title` like "前端%";

```

`_`符号举例：

```sql
# 查询标题，查询条件是：标题中至少有五个字符，而且，这五个字符中，前两个字符一定是“千古”开头的。
SELECT * FROM qianguyihao_table WHERE `title` LIKE "千古___";
```

### NULL 的判断

- `is null` 判断为空

- `is not null` 判断为非空

注意，`is null` 和**空字符串**`""` 是有区别的。学过 js 基础之后，你应该知道：空字符串并非 null，只不过是里面的值为空而已；空字符串也是会占有内存空间的。

举例：

```sql
select * from qianguyihao_table where name is not NULL;

```

## join 联表查询

### 联表查询命令

- `tableA inner join tableB`：表 A 与表 B 匹配的行会出现在结果中。

- `tableA left join tableB`：表 A 与表 B 匹配的行会出现在结果中。表 A 中独有的数据，对应表 B 中用 null 填充。

- `tableA right join tableB`：表 A 与表 B 匹配的行会出现在结果中。表 B 中独有的数据，对应表 A 中用 null 填充。

光是这样看，不好理解，我们来举个例子。

### 举例

现在有下面这两张表：作者表 author、图书表 book。

**表 1**、作者表 author：

| id  | authorId | authorName |
| :-- | :------- | :--------- |
| 1   | 11       | 王小波     |
| 2   | 12       | 吴军       |
| 3   | 88       | 千古壹号   |

**表 2**、图书表 book：

| id  | bookId | bookName   | authorId |
| :-- | :----- | :--------- | -------- |
| 1   | 201    | 黄金时代   | 11       |
| 2   | 202    | 白银时代   | 11       |
| 3   | 203    | 青铜时代   | 11       |
| 4   | 204    | 浪潮之巅   | 12       |
| 5   | 205    | 硅谷之谜   | 12       |
| 6   | 206    | 数学之美   | 12       |
| 7   | 777    | 设计心理学 | 99       |

注意，表2中的每本图书都有对应的 authorId，这个 authorId 就是对应表1中的 authorId。**通过 authorId 把两张表关联起来**。

通过联表查询上面的两张表，我们来对比一下查询结果。

**情况 0**：（inner join）

```sql
SELECT * FROM author INNER JOIN book;
```

查询结果：


![](https://github.com/qianguyihao/Web/blob/master/img/20200418_2300.png)


上面这种查询，没有意义，因为没有加任何查询条件。

**情况 1**：（inner join）

```sql
SELECT * FROM author INNER JOIN book ON author.authorId = book.authorId;
```

查询结果：

![](https://github.com/qianguyihao/Web/blob/master/img/20200418_2305.png)


上面这行命令，跟下面这行命令等价：

```sql
SELECT * FROM author, book WHERE author.authorId = book.authorId;
```

**情况 2**：（left join）

```sql
SELECT * FROM author LEFT JOIN book ON author.authorId = book.authorId;
```

查询结果：

![](https://github.com/qianguyihao/Web/blob/master/img/20200418_2310.png)

**情况 3**：（right join）

```sql
SELECT * FROM author RIGHT JOIN book ON author.authorId = book.authorId;
```

查询结果：

![](https://github.com/qianguyihao/Web/blob/master/img/20200418_2315.png)

### 参考链接

- [Mysql 联表查询](https://blog.csdn.net/qmhball/article/details/8000003)


## 自关联查询

涉及到层级关系时可以用自关联查询。


## 子查询

当一个查询结果是另一个查询的条件时，这个查询称之为子查询。






---
title: 02-MySQL的安装和Navicat软件使用
publish: true
---

<ArticleTopAd></ArticleTopAd>



## MySQL 安装

### MySQL（Mac版）

### 步骤1、下载安装包并安装：

MySQL 下载地址：https://dev.mysql.com/downloads/mysql/

![](http://img.smyhvae.com/20200415_1707.png)


![](http://img.smyhvae.com/20200415_1708.png)


#### 步骤2、配置环境变量

打开 `~/.bash_profile` 文件，在文件的末尾，添加如下内容，即可配置环境变量：

```bash
# mysql
export PATH=${PATH}:/usr/local/mysql/bin
#快速启动、结束MySQL服务, 可以使用alias命令
alias mysqlstart='sudo /usr/local/mysql/support-files/mysql.server start'
alias mysqlstop='sudo /usr/local/mysql/support-files/mysql.server stop'
```

配置好环境变量后，在终端输入 `source ~/.bash_profile` 命令，让配置生效。

在终端的任何位置，输入如下命令，即可进入 mysql 命令的执行窗口：

```sql
mysql -u root -p
```

参考链接：

- [MySQL安装（Mac版）](https://juejin.im/post/5cc2a52ce51d456e7079f27f)

### 步骤3、继续配置环境变量

在 `~/.bash_profile` 中配置好环境变量后，发现每次重启终端后，配置都会失效，需要重新执行 `source ~/.bash_profile` 命令。

原因是，zsh加载的是 `~/.zshrc`文件，而 `.zshrc` 文件中并没有定义任务环境变量。

解决办法：打开 `~/.zshrc` 文件，在文件的末尾，添加如下内容即可：

```bash
source ~/.bash_profile
```

参考链接：<https://blog.csdn.net/science_Lee/article/details/79214127>

## Navicat Premium 软件初体验

Navicat Premium 软件是一种数据库管理的GUI软件，采用可视化的方式来查看和操作数据库，非常方便。支持的数据库有： MySQL、MongoDB、SQL Server、SQLite、Oracle 及 PostgreSQL等。

安装好 Navicat Premium 软件之后，我们来看看这个软件是怎么用的。

### 新建表和数据

1、新建连接：

打开 Navicat Premium 软件，选择菜单栏「文件-新建连接-mysql」，然后选择如下配置，即可在本地新建一个数据库连接：

![](http://img.smyhvae.com/20200416_1157.png)


2、选中连接后，右键新建数据库：

![](http://img.smyhvae.com/20200416_1159.png)

![](http://img.smyhvae.com/20200416_1127.png)


3、选中数据库之后，新建表 `qiangu_student_table`：

![](http://img.smyhvae.com/20200416_1138.png)


4、在表中添加字段：

![](http://img.smyhvae.com/20200416_1202.png)



5、字段建好后，开始在表中插入数据：

![](http://img.smyhvae.com/20200416_1259.png)


### 导入外部 sql 文件

在 Navicat中，选中当前 database 之后，右键选择“运行sql文件”，即可导入外部sql文件。



---
title: 03-MySQL的基本操作
publish: true
---

<ArticleTopAd></ArticleTopAd>




## SQL 的一些简单语法规则

### 结束符

SQL 指令需要语句结束符，默认是英文分号`;`。

当然，还有另外两个结束符：

- `\g` 与英文分号`;`等效。

- `\G`：将查到的结构旋转90度变成纵向。


### 反引号``

SQL语句中如果用到了关键字或者保留字，需要使用反引号``（Tab键上面的符号）来包裹，让系统忽略。

## MySQL 数据库的操作分类

根据数据库的对象层级，可以将**SQL的基础操作分为四类**：

- 数据库（DB）操作。

- 数据表（Table）操作。

- 数据字段（Field）操作。

- 数据操作。

下面来详细讲一讲。

## 一、数据库（DB）的基本操作

在终端的任何位置，输入如下命令，即可进入 mysql 命令的执行窗口：

```sql
mysql -u root -p
```

### 1、创建数据库

**语法格式**：

```mysql
create database 数据库名称 [数据库选项];
```

**数据库名称的命名规范**：

- 由数字、字母和下划线组成。
- 不区分大小写。
- 不能以数字开头。
- 建议使用下划线法创建复杂的数据库名字。比如 `db_qianguyihao`。

**举例**：

创建一个名为 db_qianguyihao1 的数据库：

```mysql
create database db_qianguyihao1;
```


创建一个指定字符集的数据库：

```mysql
create database db_qianguyihao2 charset utf8MB4;
```

创建一个指定校对集的数据库：

```mysql
create database db_qianguyihao3 charset utf8MB4 collate utf8mb4_general_ci
```


### 2、查看数据库

查看有哪些数据库：(显示所有的数据库列表)

```mysql
show databases;
```

查看 `db_qianguyihao1` 这个数据库的具体创建指令是怎样的：

```mysql
show create database db_qianguyihao1;
```

备注：由于系统会加工，所以看到的结果不一定是真实的创建指令。


### 3、使用指定的数据库

使用指定的数据库：（也可以理解成：进入指定的数据库）

```mysql
# 语法格式
use database_xxx;

# 举例
use db_qianguyihao;
```

假设当前服务器连接中有很多个数据库（db_qianguyihao1、db_qianguyihao2），此时，我输入 `use db_qianguyihao2`则代表我想使用 `db_qianguyihao2` 这个数据库。


### 4、修改数据库的参数

我们一般很少修改数据库的名称，一般是去修改数据库的一些选项，比如：

- 修改字符集

- 修改校对集

**语法格式**：

```mysql
alter database 数据库名称 [库选项]
```

举例1、修改数据库的字符集为gbk：

```mysql
alter database db_qianguyihao1 charset gbk;
```

举例2、修改数据库的校对集：

```sql
alter database db_qianguyihao2 charset gbk collate gbk_chinese_ci;
```

备注：因为校对集是和字符集有关的，所以上方指令是在修改字符集的同时，修改校对集。



### 5、删除指定的数据库

**语法格式**：

```mysql
drop database 数据库名称;
```

备注：删除数据库时，会清空当前数据库里的所有数据表，所以删除数据库的操作一定要谨慎。


## 二、数据表（Table）的基本操作

注意，我们最好先通过 `use xxx_database` 命令进入指定的数据库（DB），然后在当前数据库下，进行数据表（Table）的操作。

### 1、创建数据表

**语法格式**：

```sql
create table [数据库名].[表名] (
	字段名1 字段类型,
	...
    ...
    字段名2 字段类型
) 表选项;
```

**举例**：

1、在当前数据库中创建数据表 `table_qiangu1`，并新增**主键** id 字段：

```sql
CREATE TABLE table_qiangu1 (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY
);
```

2、在当前数据库中创建数据表 `t_student1`，并新增 name、age这连个字段：

```sql
create table t_student1(
    name varchar(255),
    age int
);


```

3、在指定的数据库 `db_2` 中创建数据表 `t_student2`：


```sql
create table db_2.t_student2(
    name varchar(255),
    age int
);
```

4、在当前数据库中创建数据表 `t_student3`（含表选项）：

```sql
create table t_student3(
    name varchar(255),
    age int
)engine Innodb charset utf8MB4;
```

举例4中的代码涉及到存储引擎，这里解释一下：

**存储引擎**是指数据存储和管理的方式，MySQL中提供了多种存储引擎，一般使用默认存储引擎 InnoDB。

- InnoDB：默认存储引擎；支持事务处理和外键；数据统一管理。

- MyIsam：不支持事务和外键；数据、表结构、索引独立管理；MySQL5.6以后不再维护。

6、扩展：如果想创建一个与已有表一样的数据表，MySQL提供了一种便捷的复制模式

### 2、复制数据表

如果想创建一个与已有表一样的数据表，MySQL提供了一种便捷的**复制**模式。

**语法格式**：（复制现有的表 `table_xx1` 到 `table_xx2`）

```sql
create table table_xx1 like 数据库名.table_xx2;
```

注意，这种复制模式，`table_xx2` 只会复制表 `table_xx1` 中的字段，不会复制表`table_xx1`中的数据。

**举例**：


```sql
# 在当前数据库下，复制现有的表`t_qianguyihao1` 到表 `t_qianguyihao2`
create table t_qianguyihao1 like t_qianguyihao2;

# 复制现有的表`t_qianguyihao1` 到表 `t_qianguyihao2`，是复制到 `db2`这个数据库中
create table t_qianguyihao1 like db2.t_qianguyihao2;
```


### 3、显示数据表的名称

在当前数据库下，显示所有的数据表：

```sql
show tables;
```

在指定的数据库中，显示所有的数据表：

```sql
show tables from db_qianguyihao1;
```

显示数据表的创建指令：(查看 `t_qianguyihao1` 这个数据表的具体创建指令是怎样的)

```mysql
show create table t_qianguyihao1; # 备注：由于系统会加工，所以看到的结果不一定是真实的创建指令。
```



### 4、查询（查找）数据表的名称

> 根据 表名称 查询数据表，也可以理解成：按条件显示部分数据表。

根据数据表的**表名称**查找数据表时，需要用到关键词`like`，而且还要涉及到两个符号：

- `%` 表示匹配任意**多个字符**。

- `_` 表示匹配任意**一个字符**（固定位置）。

上面这两个模糊查询的符号，大家要牢记。我们来看看具体的例子。

语法举例：

```mysql
show tables like '%like_';	# _表示匹配一个字符（固定位置），%表示匹配N个字符
```

**`%` 符号举例**：

```sql
# 查询表名称中，包含 “qiangu” 这个关键字的表（“qiangu”这个关键字的前后可能都有内容）
show tables like '%qiangu%';

# 查询表名称以“qiangu”开头的表（这个命令应该很实用）
show tables like 'qiangu%';
```

**`_`符号举例**：

```sql
# 根据 表名称 来查询表，查询条件是：表名称以“qiangu”开头，而且要确保 qiangu 的后面有三个字符（因为我在 qiangu 的后面写了三个下划线）。
show tables like 'qiangu___';
```


### 5、desc：查看数据表的表结构

查看数据表的表结构，就是**查看这张表中定义了哪些字段**，以及这些字段是如何定义的。通过这种方式，我们可以清晰地了解数据的存储形式。

项目开发中，领导在检查我们的工作时，首先看的就是我们的表中定义了哪些字段。所以说，这种方式，还是很实用的。

**语法格式**：

```sql
# 方式1
desc 表名称;

# 方式2
describe 表名称;

# 方式3
show columns from 表名称;
```

上面的三种方式，效果都一样，三选一即可。


### 6、修改数据表的表名称和表选项

**修改数据表的表名称**：

在当前数据库下，修改数据表的表名称：

```sql
rename table 原表名 to 新表名;
```

指定某个数据库，然后修改数据表的表名称：


```sql
rename table 数据库名.原表名 to 数据库名.新表名;
```

**修改数据表的表名称**：

```sql
alter table table1 charset gbk;
```

### 7、删除数据表

语法格式：

```sql
drop table 数据表名称;

```


## 三、字段（Field）的基本操作

数据表 table 创建好了之后，我们就可以开始在这张表中新增字段了。

### 1、新增字段

**语法格式**：

```sql
alter table 表名 add [column] 字段名 字段类型 [字段属性] [字段位置];
```

注意事项：

- 新增字段时，必须制指定字段类型。

- [column]、 [字段属性]、[字段位置] 这几个都是选填，其他是必填。

- 追加字段时，这个字段的顺序默认排在最后。

**举例**：

新增字段 `name`:

```sql
alter table table_qiangu1 add name varchar(255);

```

新增字段 `age`：

```sql
alter table table_qiangu1 add age int;
```


### 2、新增字段时，设置字段的位置（顺序）

在新增字段时，它的顺序是默认放在最后面的，当然，我们也可以人工指定它的顺序。

在修改字段的位置时，我们可以用到下面这两个关键字：

- `first` 放到最前面

- `after` 放到某个字段的后面

**语法格式**：

```sql
alter table 表名 add 新字段名 字段类型 字段位置;
```


**举例1**：

在 `name`字段的后面，新增一个 `sex` 字段：

```sql
alter table t_qiangu1 add sex varchar(255) default null comment '性别' after name;
```

注意，上方举例中，如果是新建 varchar 类型的字段，一定要指定 varchar 的长度（比如255），否则报错。

**举例2**：


新增一个 `id` 字段，放到最前面：

```sql
alter table t_qiangu1 add id int first;
```




### 3、change：修改现有字段的字段名

> 修改现有字段的字段名，是通过 change 关键字，不是通过 modify 关键字（后者会报错，执行失败）。

**语法格式**：

```sql
# 格式1（精简版）
alter table 表名 change 原字段名 新字段名 字段类型;

# 格式2（完整版）
alter table 表名 change 原字段名 新字段名 字段类型 [字段属性] [位置];
```

注意：

- 修改字段名时，一定要设置新字段的字段类型。

- 虽然 change 关键字也可以修改现有字段的字段属性、字段位置，但我们一般是通过 modify 关键字来做（下面会讲）。


**举例**：

修改字段名 `sex` 为 `sexy`：

```sql
alter table t_qiangu2 change sex sexy varchar(255);
```

### 4、modify：修改现有字段的的字段类型、字段位置、字段属性

**语法格式**：

```sql
alter table 表名 modify 现有字段的字段名 现有字段的字段类型 [字段属性] [位置]；
```

**举例1**、针对现有的字段 `name` 和 `age`，更换这两个字段的顺序：

```sql
# 注意，这里的 age 后面一定要跟上它的字段类型，否则执行失败
alter table t_qiangu1 modify age int after name;
```

### 修改字段的默认值

```sql
# 若本身存在默认值，则先删除
alter table 表名 alter column 字段名 drop default;

# 若本身不存在则可以直接设定
alter table 表名 alter column 字段名 set default 默认值;
```
### 5、删除字段

>  删除字段的同时，会删除字段对应的数据。删除字段的操作不可逆，请谨慎操作。

语法格式：

```sql
alter table 表名 drop 字段名;
```

举例：（删除 t_qiangu1 表中的 age 这个字段）

```sql
alter table t_qiangu1 drop age;
```


## 四、数据的基本操作

### 1、新增数据

**方式1、全字段插入**：

语法格式：

```sql
insert into 表名 values(值1, 值2, ... 最后一个值);
```

解释：

- 值的顺序必须与所有字段的顺序一致。
- 值的数据类型也必须与字段定义的数据类型一致。

举例（给 t_qiangu1 这个表中插入一条完整的数据）：

```sql
insert into t_qiangu1 values(3, 'qianguyihao', 28);
```

**方式1、部分字段插入**：

语法格式：

```sql
insert into 表名 (字段1, 字段2, 字段3) values(值1, 值2, 值3);
```

解释：

-字段的顺序可以随意，但值的顺序必须要与前面的字段顺序**一一对应**，数据类型也要一致。

举例（给 t_qiangu1 这个表中的指定字段插入数据）：

```sql
insert into t_qiangu1 (id, name) values(4, 'xusong');
```

### 2、查询数据

> 查询数据的操作，占sql日常操作的95%以上。

**语法格式**：

```sql
select xxx from 表名;
```

**举例**：

查询表中的所有数据：

```sql
select * from t_qiangu1;
```

查询表中 name、age 这两个字段的数据：

```sql
select name, age from t_qiangu2;
```

查询表中 id=2 的数据：

```sql
select * from t_qiangu3 where id = 2;
```

### 3、修改数据


**语法格式**：

```sql
update 表名 set (字段1 = 新值1, 字段2 = 新值2) [where 条件筛选];
```

**解释**：

- 我们通常是结合 where 条件语句来修改数据。

- **修改数据之前，要先保证表里面有数据**。如果这张表是空表，那么，执行这个命令后，等于没执行。


**举例**：

将表中，name 这个字段的值全部修改为`千古壹号`：

```sql
update t_qiangu1 set name = '千古壹号';
```

id = 3 的这条记录中，修改 name 和 age 这两个字段的值：

```sql
update t_qiangu1 set name = '许嵩', age = '34' where id = 3;
```

### 4、删除数据

> 删除字段的操作不可逆，请谨慎操作。

**语法格式**：

```sql
delete from 表名 [where 条件];
```

**解释**：

- 执行删除操作之后，匹配到的**整条记录**，都会删除。

- **删除数据之前，要先保证表里面有数据**。如果这张表是空表，那么，执行这个命令后，等于没执行。

**举例**：

删除表中`id = 2`的记录：

```sql
delete from t_qiangu1 where id = 2;
```
---
title: 01-Bootstrap入门
publish: false
---

<ArticleTopAd></ArticleTopAd>




## 事务语句

- 开启：begin

- 提交：commit

- 回滚：rollback



---
title: 01-CSS基础练习：JD首页的制作（顶部和底部）
publish: true
---

<ArticleTopAd></ArticleTopAd>





## 前言

京东是典型的电商类网站，学习这个网站的制作比较有价值。我们准备用WebStorm进行开发。

京东首页的截图为：<http://img.smyhvae.com/20180119_1653.jpg>

### 页面规划：新建一个空的工程

我们首先新建一个空的工程：

![](http://img.smyhvae.com/20180118_1733.png)


### CSS初始化（基本样式）


京东网站有一些基本样式，在各个页面中都要用到：（将这些基本样式copy到css.base里面去）

base.css中的公共的部分：

```css
@charset "UTF-8";
/*css 初始化 */
html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img { margin:0; padding:0; }
fieldset, img,input,button { border:none; padding:0;margin:0;outline-style:none; }  /*去掉边框、去掉轮廓（比如输入框外面的蓝边框）*/

/*去掉列表前面的圆点*/
ul, ol {
    list-style: none;
}
input { padding-top:0; padding-bottom:0; font-family: "SimSun","宋体";}  /*字体一般是指定这两个*/
select, input { vertical-align:middle;}
select, input, textarea { font-size:12px; margin:0; }
textarea { resize:none; } /*禁止文本输入框在右下角拖拽（因为拖动后会调整输入框大小）*/
img {border:0;	vertical-align:middle; }  /* 去掉图片底侧默认的3像素空白缝隙*/
table { border-collapse:collapse; }
body {
    font:12px/150% Arial,Verdana,"\5b8b\4f53";  /*\5b8b\4f53指的是宋体*/
    color:#666;
    background:#fff
}

/*start:清除浮动【推荐此方式进行清除浮动】。左浮动和右浮动都清除了，盒子刚好达到闭合的状态*/
.clearfix:before, .clearfix:after {
    content: "";
    display: table;
}

.clearfix:after {
    clear: both;
}

.clearfix {
    *zoom: 1; /*IE/7/6*/
}
/*end：清除浮动*/

a {color:#666; text-decoration:none; }  /*去掉超链接的下划线*/
a:hover{color:#C81623;} /*鼠标悬停时的颜色*/
h1,h2,h3,h4,h5,h6 {text-decoration:none;font-weight:normal;font-size:100%;} /*font-size:100% 的意思是：让它们和父亲一样大，避免在不同的浏览器中显示大小不一致*/
s,i,em{font-style:normal;text-decoration:none;}  /*去掉i标签和em的斜体，取消s标签的删除线*/
.col-red{color: #C81623!important;}

/*公共类*/
.w { /*版心（可视区）。需要专门提取出来 */
    width: 1210px;
    margin: 0 auto;
}

.fl {
    float: left
}

.fr {
    float: right
}

.al {
    text-align: left
}

.ac {
    text-align: center
}

.ar {
    text-align: right
}

.hide {
    display: none
}
```


上方代码解释：

（1）**清除浮动**的方式：

```css
.clearfix:before, .clearfix:after {
    content: "";
    display: table;
}

.clearfix:after {
    clear: both;
}

.clearfix {
    *zoom: 1; /*IE/7/6*/
}
```

这是如今比较流行的清除浮动的方式。比如小米官网就是采用的这种。

（2）其他属性：

我们给`fieldset, img,input,button`等标签设置了`outline-style:none`，意思去掉轮廓（比如去掉输入框外面的蓝边框，去掉之后，蓝色没有了，但是黑色依然存在）。去掉的原因是：首先，轮廓不好看；其次，在google浏览器和在火狐浏览器上，渲染的效果不同。

img标签中，我们通过`vertical-align:middle`属性**去掉图片底侧默认的3像素空白缝隙**，还有一种方法可以达到效果，那就是`display: block`。


给`h1,h2,h3,h4,h5,h6`设置**`font-size:100%`**是因为：h标签在每个浏览器中显示的大小不一致，设置此属性则表示，**让它们都和父亲一样大**。

（3）一些小标记

`s`是删除线，`i`和`em`是斜体。我们经常用它们做一些小装饰、小图标。

### 引入css文件

base.css初始化之后，我们需要在html文件中引入它。引入外部样式表的方式如下：（`stylesheet`指样式表）

```html
    <link rel="stylesheet" href="css/base.css">
```

效果如下：

![](http://img.smyhvae.com/20180118_2002.png)


注意，**base.css和index.css的书写顺序不能颠倒**，因为是按照书写顺序，从上往下进行加载的。


### Favicon 小图标

Favicon 图标指的是箭头处这个小图标：

![](http://img.smyhvae.com/20180118_2013.png)

官网链接<https://www.jx.com/favicon.ico>可以下载这个小图标。

我们把`favicon.ico`图片放到工程文件的根目录，通过下面这种方式进行加载：

```html
    <link rel="shortcut icon" href="favicon.ico">
```

注意，`shortcut icon`是Favicon的专有名词，不能改成别的单词。

代码位置：

![](http://img.smyhvae.com/20180118_2020.png)


## 顶部导航的制作

我们先制作下面这个部分，它位于网站的最顶部：

![](http://img.smyhvae.com/20180118_2040.png)

顶部导航栏的html结构如下：（直接放在body标签下）

```html
    <!--顶部导航start-->
    <div class="shortcut">
        <!--版心-->
        <div class="w">
            <!--左浮动区域-->
            <div class="fl">
                <div class="dt"> 送至：北京
                    <i><s>◇</s></i>
                </div>
            </div>
            <!--右浮动区域-->
            <div class="fr">
                <ul>
                    <li>
                        <a href="#">你好，请登录</a> &nbsp;&nbsp;
                        <a href="#" class="col-red">免费注册</a>
                    </li>
                    <li class="line"></li>
                    <li>我的订单</li>
                    <li class="line"></li>
                    <li class="fore">我的京东
                        <i><s>◇</s></i>
                    </li>
                    <li class="line"></li>
                    <li>京东会员</li>
                    <li class="line"></li>
                    <li>企业采购</li>
                    <li class="line"></li>
                    <li class="fore tel-jd">
                        <em class="tel"></em>   <!--小手机图标-->
                        手机京东
                        <i><s>◇</s></i>
                    </li>
                    <li class="line"></li>
                    <li class="fore">
                        关注京东
                        <i><s>◇</s></i>
                    </li>
                    <li class="line"></li>
                    <li class="fore">
                        客户服务
                        <i><s>◇</s></i>
                    </li>
                    <li class="line"></li>
                    <li class="fore">
                        网站导航
                        <i><s>◇</s></i>
                    </li>
                </ul>
            </div>
        </div>

    </div>
    <!--顶部导航end-->

```

顶部导航栏需要加入的css样式如下：（放到base.css中）

```css
/*顶部导航start*/
.shortcut {
    height: 30px;
    line-height: 30px;
    background-color: #f1f1f1;
}

.dt,
.shortcut .fore {
    padding: 0 20px 0 10px;
    position: relative;
}

.dt i,
.fore i {
    font: 400 15px/15px "宋体";
    position: absolute;
    top: 13px;
    right: 3px;
    height: 7px;
    overflow: hidden;
    width: 15px;
}

.dt s,
.fore s {
    position: absolute;
    top: -8px;
    left: 0;
}

.fr li {
    float: left;
    padding: 0 10px;
}

.fr .line {
    width: 1px;
    height: 12px;
    background-color: #ddd;
    margin-top: 9px;
    padding: 0;
}

.shortcut .tel-jd {
    padding: 0 20px 0 25px;
}

.tel {
    position: absolute;
    width: 15px;
    height: 20px;
    background: url(../images/sprite.png) no-repeat;
    left: 5px;
    top: 5px;
}
/*顶部导航end*/

```

css代码解释：

（1）整个的顶部导航栏是一个shortcut：

```css
.shortcut {
    height: 30px;
    line-height: 30px;
    background-color: #f1f1f1;
}
```

然后将左侧的文字设置为左浮动，右侧的文字设置为右浮动。

（2）完成左侧部分的文字。

（3）右侧部分文字的结构：ul中放了九个li，用来存放文字。代码快捷键是`ul>li*9`（符号`>`是包含的关系）。

需要注意的是，“登录”和“注册”是同一个<li>里面的两个`<a>`。它们是一个整体，所以要放到同一个li里。


(4)文字中间的间隔线：

![](http://img.smyhvae.com/20180119_1503.png)

上图所示，我们发现，每个li之间都有`1像素宽、12像素高的间隔线`，这个也是用li做的。

（5）增加文字右侧的小三角。

（6）在`手机京东`这个li中增加手机小图标，这里用到了css精灵图。


京东顶部导航条的工程文件：[2018-01-19-前端基础练习-JD顶部导航.rar](https://github.com/qianguyihao/web-resource/blob/main/project/2018-01-19-%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80%E7%BB%83%E4%B9%A0-JD%E9%A1%B6%E9%83%A8%E5%AF%BC%E8%88%AA.rar)

## 顶部banner图

接下来我们只做顶部的banner图，效果如下：

![](http://img.smyhvae.com/20180122_1020.png)

也就是上图中“1元抢宝”的那个位置。

涉及到的html代码如下：


```html
<!--京东的topbanner部分-->
<div class="topbanner">
    <div class="w tb">
        <img src="images/topbanner.jpg" alt=""/>
        <a href="javascript:;" class="close-banner"></a>
    </div>
</div>
<!--京东的topbanner部分 end-->

```

在base.css中涉及到的css代码如下：

```css
/*topbanner start*/
.topbanner {
    background-color: #8A25C6;
}
.close-banner {
    position: absolute;
    right:0;
    top:5px;
    width: 19px;
    height: 19px;
    background: url(../images/close.png) no-repeat;
}
.close-banner:hover {
    background-position:bottom;
}
.tp{
    position: relative;
}
/*topbanner end*/

```

代码解释：

重点是`close-banner`这个class，也就是右上角的那个`X`。这里用到了子绝父相，注意，设置相对定位的父亲是`tb`这个class，因为要考虑到网页缩放的情况。

`.close-banner:hover`这个属性里，我们设置的背景图的定位是bottom，意思是，保证精灵图和父亲的底边贴齐，就不用使用像素的方式对精灵兔图进行定位了。


## 搜索框

搜索框的UI如下：


![](http://img.smyhvae.com/20180122_1301.png)

上图中，包含了四个部分：

- 左侧的logo

- 中间的搜索框

- 右侧的购物车

- 热搜文字（中间搜索框的下方）

我们在WebStorm中输入`.search-logo+.search-input+.search-car+.search-moreA`，然后按tab键，就可以补齐代码：

```html
        <div class="search-logo"></div>
        <div class="search-input"></div>
        <div class="search-car"></div>
        <div class="search-moreA"></div>
```

相关的html代码如下：

```html
    <!--search部分start-->
    <div class="serach">
        <div class="w clearfix">
            <div class="search-logo">
                <a href="http://www.jx.com" title="京西" target="_blank">京东官网</a>
            </div>
            <div class="search-input">
                <!--placeholder="运动相机"-->
                <input type="text" value="运动相机"/>
                <button>搜索</button>
            </div>
            <div class="search-car">
                <a href="#">我的购物车</a>
                <i class="icon1"></i>
                <i class="icon2">&gt;</i>
                <i class="icon3">8</i>
            </div>
            <div class="search-moreAlink">
                <a href="#" class="col-red">出境999</a>
                <a href="#">沸腾厨卫</a>
                <a href="#">249减100</a>
                <a href="#">手机节</a>
                <a href="#">每150减50</a>
                <a href="#">男靴</a>
                <a href="#">巧克力</a>
                <a href="#">cool1手机</a>
                <a href="#">男士卫衣</a>
            </div>
        </div>
    </div>
    <!--search部分end-->
```

相关的css代码如下：

```css
/*search部分start*/
.search-logo {
    float: left;
    width: 362px;
    height: 60px;
    padding: 20px 0;
}
.search-logo a {
    width: 270px;
    height: 60px;
    display: block;
    text-indent: -9999px;
    background: url(../images/logo.png) no-repeat;
}
.search-input {
    float: left;
    height: 36px;
    padding-top: 25px;
}
.search-input input {
    float: left;
    width: 450px;
    height: 32px;
    padding-left: 4px;
    font: 400 14px/32px "microsoft yahei";
    color: rgb(153, 153, 153);
    border: 2px solid #B61D1D;
    border-right: 0;
}
.search-input button {
    width: 82px;
    height: 36px;
    color: #fff;
    float: left;
    font: 400 16px/36px "微软雅黑";
    background-color: #B61D1D;
    cursor: pointer;
    /*cursor: pointer;          变成小手*/
    /*cursor: text;             变成光标*/
    /*cursor: move;             变成四角箭头*/
    /*cursor: default;          变成小白*/
}
.search-car {
    float: right;
    width: 96px;
    height: 34px;
    line-height: 34px;
    padding-left: 43px;
    position: relative;
    margin: 25px 65px 0 0;
    border: 1px solid #DFDFDF;
    background-color: #F9F9F9;
}
.icon1 {
    position: absolute;
    top: 9px;
    left: 18px;
    width: 18px;
    height: 16px;
    background: url(../images/tel.png) no-repeat 0 -58px;
}
.icon2 {
    position: absolute;
    right: 10px;
    color: #999;
    /*font-family: "SimSun";*/
    font: 13px/34px "SimSun";
}
.icon3 {
    position: absolute;
    top: -5px;
    /*left: 0;*/
    width: 16px;
    height: 14px;
    background-color: #C81623;
    line-height: 14px;
    text-align: center;
    color: #fff;
    border-radius: 7px 7px 7px 0;  /*画圆角矩形*/
}
.search-moreAlink {
    float: left;
    width: 530px;
    height: 28px;
    line-height: 28px;
}
.search-moreAlink a {
    margin-right: 8px;
}
/*search部分end*/
```

对于这四个部分，我们依次来讲解。

### 1、左侧的logo

为了便于SEO，需要给图片这个超链接加上文字，然后设置文字的缩进为`text-indent: -9999px;`。

### 2、搜索栏

“搜索”按钮：当我们把鼠标放在“搜索”上的时候， 发现鼠标变成了小手，这里是用到了`cursor`属性。

`cursor`有如下属性值：

```css
        cursor: pointer;          /*变成小手*/
        cursor: text;             /*变成光标*/
        cursor: move;             /*变成四角箭头*/
        cursor: default;          /*变成默认的箭头*/
```

### 3、购物车

购物车里包含了四个元素：一个文字，三个图标。

为了让文字“我的购物车”这个`<a>`上下方向居中，我们给`<a>`标签的行高line-height为父亲的高度。

另外，“我的购物车”这四个字并不是水平居中的，于是，我们可以给它一个左侧的padding，而不用给右侧padding。

另外三个小图标可以用绝对定位来做。

右上角的小图标（圆角矩形）：它的红色背景不是图片，而是用`border-radius`属性画的**圆角矩形**。

圆角矩形`border-radius`有下面几种画法：

```
    border-radius: 宽/高一半;
    border-radius: 50%;
    border-radius: 0.3em;
    border-radius: 左上角  右上角  右下角  左下角;
```

### 搜索框下方的热搜文字

热搜文字的功能性并不强，仅仅使用几个超链接`<a>`标签即可（每个 a 之间用margin隔开）。不需要像别的导航栏那样，在ul里放li，在li里放a。

注意，每个 a 之间是用margin隔开，不是用padding隔开；否则的话，鼠标点击中间的空白处也会出现跳转。

顶部导航条+顶部banner+搜索框的工程文件：[2018-01-21-前端基础练习-JD顶部导航.rar](https://github.com/qianguyihao/web-resource/blob/main/project/2018-01-21-%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80%E7%BB%83%E4%B9%A0-JD%E9%A1%B6%E9%83%A8%E5%AF%BC%E8%88%AA.rar)

## slogen：口号

要求实现的效果如下：

![](http://img.smyhvae.com/20180122_1630.gif)

上图可以看到，这里要实现的效果是：无论浏览器如何移动，要保证第二个slogen的左侧位于浏览器的正中间。这是可以用到绝对定位的知识。

html的代码如下：

```html
    <!--底部的口号 start-->
    <div class="slogen">
        <span class="item slogen1">
            <img src="images/slogen1.png" alt=""/>
        </span>
        <span class="item slogen2">
            <img src="images/slogen2.png" alt=""/>
        </span>
        <span class="item slogen3">
            <img src="images/slogen3.png" alt=""/>
        </span>
        <span class="item slogen4">
            <img src="images/slogen4.png" alt=""/>
        </span>
    </div>
    <!--底部的口号 end-->
```

`class=slogen`指的是整个slogen区域。item表示四个口号中相同的部分。

css的代码如下；

```css
/*底部的口号 start*/
.slogen {
    height: 54px;
    padding: 20px 0;
    background-color: #f5f5f5;
    position: relative;
    margin-bottom: 15px;
}

.item {
    width: 302px;
    position: absolute;
    top: 20px;
    left: 50%;
}

.slogen1 {
    margin-left: -608px;
}

.slogen2 {
    margin-left: -304px;
}

.slogen3 {
    margin-left: 2px;
}

.slogen4 {
    margin-left: 304px;
}

/*底部的口号 end*/
```

我们给item设置`left: 50%;`，确保每个item移到了父亲的正中间。然后每个item各自移动相应的距离即可实现。


## 最下方的购物指南&区域覆盖

需要实现的效果如下：

![](http://img.smyhvae.com/20180122_1726.png)


上图中，需要实现的内容包括两个部分：左侧的购物指南和右侧的区域覆盖（我把这两个部分用红线隔开了）。

### 购物指南

需要使用的布局如下：

![](http://img.smyhvae.com/20170704_1727.png)

这里的重点是要量出dt和dd的行高。

html代码如下：

```html

    <!--购物指南等 start-->
    <div class="w footer-shopping clearfix">
        <dl>
            <dt>购物指南</dt>
            <dd><a href="#">购物流程</a></dd>
            <dd><a href="#">会员介绍</a></dd>
            <dd><a href="#">生活旅行/团购</a></dd>
            <dd><a href="#">常见问题</a></dd>
            <dd><a href="#">大家电</a></dd>
            <dd><a href="#">联系客服</a></dd>
        </dl>
        <dl>
            <dt>配送方式</dt>
            <dd><a href="#">上门自提</a></dd>
            <dd><a href="#">211限时达</a></dd>
            <dd><a href="#">配送服务查询</a></dd>
            <dd><a href="#">配送费收取标准</a></dd>
            <dd><a href="#">海外配送</a></dd>
        </dl>
        <dl>
            <dt>购物指南</dt>
            <dd><a href="#">购物流程</a></dd>
            <dd><a href="#">会员介绍</a></dd>
            <dd><a href="#">生活旅行/团购</a></dd>
            <dd><a href="#">常见问题</a></dd>
            <dd><a href="#">大家电</a></dd>
            <dd><a href="#">联系客服</a></dd>
        </dl>
        <dl>
            <dt>购物指南</dt>
            <dd><a href="#">购物流程</a></dd>
            <dd><a href="#">会员介绍</a></dd>
            <dd><a href="#">生活旅行/团购</a></dd>
            <dd><a href="#">常见问题</a></dd>
            <dd><a href="#">大家电</a></dd>
            <dd><a href="#">联系客服</a></dd>
        </dl>
        <dl class="last-dl">
            <dt>购物指南</dt>
            <dd><a href="#">购物流程</a></dd>
            <dd><a href="#">会员介绍</a></dd>
            <dd><a href="#">生活旅行/团购</a></dd>
            <dd><a href="#">常见问题</a></dd>
            <dd><a href="#">大家电</a></dd>
            <dd><a href="#">联系客服</a></dd>
        </dl>
    </div>
    <!--购物指南等 end-->
```

因为这片区域是浮动的，我们要通过`clearfix`这个class清除浮动，防止其被覆盖。

css代码如下：

```css
/*购物指南等 start*/
.footer-shopping {
    margin-top: 16px;  /*和上方保持距离*/
}
.footer-shopping dl{
    float: left;
    width: 200px;
}
dl.last-dl {
    width: 100px;
}
.footer-shopping dt{
    height: 34px;
    font: 400 16px/34px "microsoft yahei";
}
.footer-shopping dd{
    line-height: 20px;
}
/*购物指南等 end*/
```

### 区域覆盖

html代码如下：

```html
                <div class="coverage">
                    <h3>京东自营覆盖区县</h3>
                    <p>京东已向全国2654个区县提供自营配送服务，支持货到付款、POS机刷卡和售后上门服务。</p>
                    <a href="#">查看详情 ></a>
                </div>
```

css代码如下：

```css
/*覆盖区域 start*/
.coverage {
    float: left;
    width: 186px;
    height: 169px;
    margin-right: 60px;
    padding-left: 17px;
    background: url(../images/china.png) no-repeat left bottom;
}

.coverage h3 {
    height: 34px;
    font: 400 16px/34px "microsoft yahei";
}

.coverage p {
    padding-top: 8px;
}
.coverage a {
    float: right;
}
/*覆盖区域 end*/
```

注意这里将精灵图设置为背景时，用到的定位属性是`left bottom`，意思是保证精灵图的左侧跟父亲左侧贴齐，下方和父亲下方贴齐。这样做的话，就不用通过像素来进行定位了。


## 最底部

最底部的效果如下：

![](http://img.smyhvae.com/20180122_1909.png)

如上图所示，它包含了三个部分。

涉及到的html代码如下：

```html

    <!--最底部 start-->
    <div class="w footer-bottom">

        <div class="footer-about">
            <a href="#">关于我们</a>|
            <a href="#">联系我们</a>|
            <a href="#">联系客服</a>|
            <a href="#">商家入驻</a>|
            <a href="#">营销中心</a>|
            <a href="#">手机京东</a>|
            <a href="#">友情链接</a>|
            <a href="#">销售联盟</a>|
            <a href="#">京东社区</a>|
            <a href="#">京东公益</a>|
            <a href="#">English Site</a>|
            <a href="#">Contact Us</a>
        </div>

        <div class="footer-copyright">
            <img src="images/guohui.png"/>京公网安备 11000002000088号  |  京ICP证070359号  |  互联网药品信息服务资格证编号(京)-经营性-2014-0008  |  新出发京零 字第大120007号<br>
            互联网出版许可证编号新出网证(京)字150号  |  出版物经营许可证  |  网络文化经营许可证京网文[2014]2148-348号  |  违法和不良信息举报电话：4006561155<br>
            Copyright © 2004 - 2016   JX.com 版权所有  |  消费者维权热线：4006067733<br>
            京东旗下网站：京东钱包
        </div>

        <div class="footer-bottom-img">
            <a href="#"><img src="images/img1.jpg"/></a>
            <a href="#"><img src="images/img1.jpg"/></a>
            <a href="#"><img src="images/img1.jpg"/></a>
            <a href="#"><img src="images/img1.jpg"/></a>
            <a href="#"><img src="images/img1.jpg"/></a>
            <a href="#"><img src="images/img1.jpg"/></a>
        </div>
    </div>
    <!--最底部 end-->

```

涉及到的css代码如下：

```css

/*最底部start*/
.footer-bottom {
    margin-top: 20px;
    text-align: center;  /*让文字在容器中水平方向居中*/
    padding: 20px 0 30px;
    border-top: 1px solid #E5E5E5;
}

.footer-bottom .footer-about a{
    margin: 0 10px;
}

.footer-copyright {
    padding: 10px 0;
}

.footer-bottom-img a {
    margin: 0 5px;
}
/*最底部end*/
```

你去京东官网看看，发现最最底部的文字竟然是图片：

![](http://img.smyhvae.com/20180122_1912.png)


## 总结

以上全部内容，最终实现的效果如下：

![](http://img.smyhvae.com/20180122_1920.png)

对应的工程文件：[2018-01-22-前端基础练习-JD顶部导航.rar](https://github.com/qianguyihao/web-resource/blob/main/project/2018-01-22-%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80%E7%BB%83%E4%B9%A0-JD%E9%A1%B6%E9%83%A8%E5%AF%BC%E8%88%AA.rar)

---
title: 05-DOM操作练习：访问关系的封装
publish: true
---

<ArticleTopAd></ArticleTopAd>





## 访问关系的函数封装

（1）函数封装

新建一个文件名叫`tools.js`，然后在里面封装访问关系。代码如下。



tools.js:

```javascript
/**
 * Created by smyhvae on 2018/01/28.
 */

function getEle(id){
    return document.getElementById(id);
}

/**
 * 功能：给定元素查找他的第一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstNode(ele){
    var node = ele.firstElementChild || ele.firstChild;
    return node;
}

/**
 * 功能：给定元素查找他的最后一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getLastNode(ele){
    return ele.lastElementChild || ele.lastChild;
}

/**
 * 功能：给定元素查找他的下一个元素兄弟节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getNextNode(ele){
    return ele.nextElementSibling || ele.nextSibling;
}

/**
 * 功能：给定元素查找他的上一个兄弟元素节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getPrevNode(ele){
    return ele.previousElementSibling || ele.previousSibling;
}

/**
 * 功能：给定元素和索引值查找指定索引值的兄弟元素节点，并返回
 * @param ele 元素节点
 * @param index 索引值
 * @returns {*|HTMLElement}
 */
function getEleOfIndex(ele,index){
    return ele.parentNode.children[index];
}

/**
 * 功能：给定元素查找他的所有兄弟元素，并返回数组
 * @param ele
 * @returns {Array}
 */
function getAllSiblings(ele){
    //定义一个新数组，装所有的兄弟元素，将来返回
    var newArr = [];
    var arr = ele.parentNode.children;
    for(var i=0;i<arr.length;i++){
        //判断：对同级的所有元素节点进行遍历，如果不是传递过来的元素自身，那就是兄弟元素，于是添加到新数组中。
        if(arr[i]!==ele){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

```


上方代码中，我们单独来重视一下最后一个方法：获取指定元素的兄弟元素：


```javascript
/**
 * 功能：给定元素查找他的所有兄弟元素，并返回数组
 * @param ele
 * @returns {Array}
 */
function getAllSiblings(ele){
    //定义一个新数组，装所有的兄弟元素，将来返回
    var newArr = [];
    var arr = ele.parentNode.children;
    for(var i=0;i<arr.length;i++){
        //判断：对同级的所有元素节点进行遍历，如果不是传递过来的元素自身，那就是兄弟元素，于是添加到新数组中。
        if(arr[i]!==ele){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

```

（2）函数的调用举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        li {
            width: 100px;
            height: 100px;
            background-color: pink;
            margin: 5px;
            list-style: none;
        }
    </style>
</head>
<body>

<ul>
    <li></li>
    <li></li>
    <li id="box"></li>
    <li></li>
    <li></li>
</ul>
<script src="tools.js"></script>
<script>

    //获取box改为red
    var box = getEle("box");
    box.style.backgroundColor = "red"

    //获取第一个和最后一个子节点
    var parent = box.parentNode;
    getFirstNode(parent).style.backgroundColor = "yellow";
    getLastNode(parent).style.backgroundColor = "yellow";

    //获取上一个和下一个兄弟节点
    getNextNode(box).style.backgroundColor = "blue";
    getPrevNode(box).style.backgroundColor = "blue";


    //指定兄弟节点
    getEleOfIndex(box,0).style.backgroundColor = "green";
    getEleOfIndex(box,1).style.backgroundColor = "green";

    //获取所有的兄弟节点（返回值是数组，所以用for循环操作）
    var arr = getAllSiblings(box);
    for(var i=0;i<arr.length;i++){
        arr[i].style.backgroundColor = "green";
    }

</script>
</body>
</html>

```

注意：上方代码中，我们引用到了`tools.js`这个工具类。





```


```








```


```




```


```


---
title: 03-DOM操作练习：基础练习
publish: true
---

<ArticleTopAd></ArticleTopAd>



## DOM操作练习

### 举例1：点击按钮时，显示和隐藏盒子。

代码实现：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        button {
            margin: 10px;
        }

        div {
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        .show {
            display: block;
        }

        .hide {
            display: none;
        }
    </style>

</head>
<body>
<button id="btn">隐藏</button>
<div>
    千古壹号
</div>

<script>
    //需求：点击button,隐藏盒子。改变文字，在点击按钮，显示出来。
    //步骤：
    //1.获取事件源和相关元素
    //2.绑定事件
    //3.书写事件驱动程序

    //1.获取事件源和相关元素
    var btn = document.getElementById("btn");
    var div1 = document.getElementsByTagName("div")[0];
    //2.绑定事件
    btn.onclick = function () {
        //3.书写事件驱动程序
        //判断btn的innerHTML属性值，如果为隐藏就隐藏盒子，并修改按钮内容为显示。
        //反之，则显示，并修改按钮内容为隐藏
        if (this.innerHTML === "隐藏") {
            div1.className = "hide";
            //修改按钮上的文字（innerHTML）
            btn.innerHTML = "显示";
        } else {
            div1.className = "show";
            //修改按钮上的文字（innerHTML）
            btn.innerHTML = "隐藏";
        }
    }

</script>

</body>
</html>

```

代码解释：

当盒子是显示状态时，就设置为隐藏；当盒子是隐藏状态时，就设置为显示。注意这里的逻辑判断。

另外，这里用到了`innerHTHL`属性，它可以修改按钮上显示的文字。

代码最终显示的效果如下：

20180127_1518.gif

### 举例2：美女相册

这里推荐一个网站：

- 占位图片生成的在线网站：<https://placeholder.com/>

好处是：素材做出来之前，先留出空位，方便以后换图。比如<http://via.placeholder.com/400x300>这个链接可以生成400*300的占位图片。

需求：

- （1）点击小图片，改变下面的大图片的src属性值，让其赋值为a链接中的href属性值。
- （2）让p标签的innnerHTML属性值，变成a标签的title属性值。


为了实现美女相册，代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        body {
            font-family: "Helvetica", "Arial", serif;
            color: #333;
            margin: 1em 10%;
        }

        h1 {
            color: #333;
            background-color: transparent;
        }

        a {
            color: #c60;
            background-color: transparent;
            font-weight: bold;
            text-decoration: none;
        }

        ul {
            padding: 0;
        }

        li {
            float: left;
            padding: 1em;
            list-style: none;
        }

        #imagegallery {

            list-style: none;
        }

        #imagegallery li {
            margin: 0px 20px 20px 0px;
            padding: 0px;
            display: inline;
        }

        #imagegallery li a img {
            border: 0;
        }
    </style>

</head>
<body>
<h2>
    美女画廊
</h2>
<a href="#">注册</a>
<ul id="imagegallery">
    <li>
        <a href="image/1.jpg" title="美女A">
            <img src="image/1-small.jpg" width="100" alt="美女1"/>
        </a>
    </li>
    <li>
        <a href="image/2.jpg" title="美女B">
            <img src="image/2-small.jpg" width="100" alt="美女2"/>
        </a>
    </li>
    <li>
        <a href="image/3.jpg" title="美女C">
            <img src="image/3-small.jpg" width="100" alt="美女3"/>
        </a>
    </li>
    <li>
        <a href="image/4.jpg" title="美女D">
            <img src="image/4-small.jpg" width="100" alt="美女4"/>
        </a>
    </li>
</ul>


<div style="clear:both"></div>

<img id="image" src="image/placeholder.png" width="450px"/>

<p id="des">选择一个图片</p>

<script>
    //需求：
    //（1）点击小图片，改变下面的大图片的src属性值，让其赋值为a链接中的href属性值。
    //（2）让p标签的innnerHTML属性值，变成a标签的title属性值。

    //1.获取事件源和相关元素
    //利用元素获取其下面的标签。
    var ul = document.getElementById("imagegallery");
    var aArr = ul.getElementsByTagName("a");     //获取ul中的超链接<a>

    //    console.log(aArr[0]);
    var img = document.getElementById("image");
    var des = document.getElementById("des");
    //2.绑定事件
    //以前是一个一个绑定，但是现在是一个数组。我们用for循环绑定
    for (var i = 0; i < aArr.length; i++) {
        aArr[i].onclick = function () {
            //3.【核心代码】书写事件驱动程序：修改属性值
            img.src = this.href;  //this指的是函数调用者，和i并无关系，所以不会出错。
//            img.src = aArr[i].href;   注意，上面这一行代码不要写成这样
            des.innerHTML = this.title;
            return false;    //return false表示：阻止继续执行下面的代码。
        }
    }

</script>
</body>
</html>
```

代码解释：

（1）获取事件源：我们通过`ul.getElementsByTagName("a")`来获取ul里面的a元素。

（2）绑定事件：因为要绑定一个数组，所以这里用for循环来绑定

（3）【重要】书写事件驱动程序：这里是用`img.src = this.href`，而不是用`img.src = aArr[i].href`。因为this指的是函数的调用者。如果写成后者，等i变成了4，就会一直是4。显然不能达到效果。

（4）代码的最后一行：`return false`表示：阻止继续执行下面的代码。

实现的效果如下：

20180127_1630.gif

工程文件：[2018-01-27-美女相册demo.rar](https://github.com/qianguyihao/web-resource/blob/main/project/2018-01-27-%E7%BE%8E%E5%A5%B3%E7%9B%B8%E5%86%8Cdemo.rar)

### 举例3：鼠标悬停时，显示二维码大图

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .code {
            width: 50px;
            height: 50px;
        }

        .code a {
            display: block;
            width: 50px;
            height: 50px;
            background: url(http://img.smyhvae.com/20180127_QRcode_small.png) no-repeat -159px -51px;
            position: relative;

        }

        .code-big {
            position: absolute;
            top: 10px;
            left: 80px;
        }

        .hide {
            display: none;
        }

        .show {
            display: block;
        }


    </style>

    <script>
        window.onload = function () {
            //需求：鼠标放到a链接上，显示二维码（添加show类名，去掉hide类名）
            //      鼠标移开a链接，隐藏二维码（添加hide类名，去掉show类名）


            //1.获取事件源和相关元素
            var a = document.getElementsByTagName("a")[0];
            var div = document.getElementsByClassName("code-big")[0];
            //2.绑定事件
            a.onmouseover = fn1;   //鼠标悬停时
            a.onmouseout = fn2;     //鼠标离开时

            //定义方法
            function fn1() {
                //3.书写事件驱动程序
                div.className = "code-big show";
                //div.className = div.className.replace("hide", "show");

            }

            function fn2() {
                div.className = "code-big hide";
                //了解,字符串操作，把字符串中的hide替换成show。
                // div.className = div.className.replace("show","hide");
            }
        }
    </script>
</head>
<body>

<div class="code">
    <a href="#"></a>
    <img src="http://img.smyhvae.com/2016040102.jpg" alt="" class="code-big hide"/>
</div>

</body>
</html>

```


实现效果：

20180127_1800.gif


## 表单元素的属性

表单元素的属性包括：type、value、checked、selected、disabled等。


### 举例1：禁用文本框/解禁文本框


```html
<body>

账号: <input type="text" value="千古壹号..."/><button>禁用</button><button>解禁</button><br><br>
密码: <input type="password" value="aaabbbccc"/>

<script>

    var inp = document.getElementsByTagName("input")[0];
    var btn1 = document.getElementsByTagName("button")[0];
    var btn2 = document.getElementsByTagName("button")[1];

    btn1.onclick = function () {
        inp.disabled = "no";   //禁用文本框。属性值里随便写什么字符串都行，但不能为空。
    }
    btn2.onclick = function () {
        inp.disabled = false;   //解禁文本框。让disabled属性消失即可。
//            inp.removeAttribute("disabled");
    }
</script>
</body>

```

当文本框被禁用之后，文本框只读，不能编辑，光标点不进去。


上方代码可以看到，**禁用文本框**的代码是：

```javascript
	inp.disabled = "no";   //让disabled属性出现，即可禁用
```

我们的目的时让`disabled`这个属性出现，即可禁用。所以，属性值里可以写数字，可以写任意一个字符串，但不能写0，不能写false，不能为空。一般我们写no。



**解禁文本框**的代码是：


```javascript
	inp.disabled = false;      // 方法1：让disabled属性消失，即可解禁。
	inp.removeAttribute("disabled");  //方法2：推荐

```


我们的目的是删除`disabled`属性，即可解禁。属性值可以是false，可以是0。但我们一般采用方式2进行解禁。

实现效果：





### 举例2：文本框获取焦点/失去焦点

细心的读者会发现，京东和淘宝的搜索框，获取焦点时，提示文字的体验是不同的。

京东：

20180127_2000.gif

淘宝：

20180127_2005.gif

其实，**淘宝的提示文字，是用一个绝对定位的单独的标签来做的**。

京东是判断输入框是否获取焦点；淘宝是判断输入框内是否有用户输入的文字。


我们现在来实现一下。代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        input {
            width: 300px;
            height: 36px;
            padding-left: 5px;
            color: #ccc;
        }

        label {
            position: absolute;
            top: 82px;
            left: 56px;
            font-size: 12px;
            color: #ccc;
            cursor: text;
        }

        .hide {
            display: none;
        }

        .show {
            display: block;
        }
    </style>
</head>
<body>
京东: <input id="inp1" type="text" value="微单相机"/><br><br>
淘宝: <label for="inp2">电动牙刷</label><input id="inp2" type="text"/><br><br>
placeholder: <input type="text" placeholder="我是placeholder"/>

<script>
    //需求：京东的input按钮获取焦点后，立刻删除内容。失去后光标显示文字。

    var inp1 = document.getElementById("inp1");

    inp1.onfocus = function () {
        //判断，如果input里面的内容是“微单相机”，那么把值赋值为“”；
        if (this.value === "微单相机") {
            inp1.value = "";
            inp1.style.color = "#000";

        }
    }
    //失去焦点事件
    inp1.onblur = function () {
        //判断：如果input内容为空，那么把内容赋值为微单相机。
        if (this.value === "") {
            inp1.value = "微单相机";
            inp1.style.color = "#ccc";

        }
    }


    //需求：在input中输入文字，label标签隐藏；当里面的文字变成空字符串，label显示。

    var inp2 = document.getElementById("inp2");
    var lab = document.getElementsByTagName("label")[0];

    //2.绑定事件(输入文字、和删除文字时，都会触动这个事件)
    inp2.oninput = function () {
        //判断input中的值是否为空，如果为空，那么label显示，否则隐藏。
        if (this.value === "") {
            lab.className = "show";
        } else {
            lab.className = "hide";
        }
    }
</script>
</body>
</html>
```


实现效果如下：

20180127_2010.gif

如上方所示，我们还可以用placeholder来做，但是IE678并不支持，所以不建议使用。


### 举例3：用户注册信息错误时，输入框失去焦点后，高亮显示。

代码实现：



```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .wrong {
            border: 2px solid red;
        }
        .right {
            border: 2px solid #91B81D;
        }
    </style>
</head>
<body>

账号：<input type="text" onblur="fn(this)"/><br><br>
密码：<input type="password" onblur="fn(this)"/>

<script>
    //需求：失去焦点的时候判断input按钮中的值，如果账号或密码在6-12个字符之间通过，否则报错。

    function fn(aaa){
        //html中的input标签行内调用function的时候,是先通过window调用的function，所以打印this等于打印window
//            console.log(this)
        //只有传递的this才指的是标签本身。
//            console.log(aaa)
//            console.log(this.value)
        if(aaa.value.length < 6 || aaa.value.length>12){
            aaa.className = "wrong";
        }else{
            aaa.className = "right";
        }
    }
</script>
</body>
</html>
```

代码解释：这次我们是在标签内调用function的，此时是先通过window调用的function。所以行内调用的时候要带this。


实现效果：

20180127_2035.gif


### 举例4：全选和反选


对应的代码如下：


```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        .my-table {
            width: 300px;
            margin: 100px auto 0;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
            border: 1px solid #c0c0c0;
            width: 300px;
        }

        th,
        td {
            border: 1px solid #d0d0d0;
            color: #404060;
            padding: 10px;
        }

        th {
            background-color: #09c;
            font: bold 16px "微软雅黑";
            color: #fff;
        }

        td {
            font: 14px "微软雅黑";
        }

        tbody tr {
            background-color: #f0f0f0;
        }

        tbody tr:hover {
            cursor: pointer;
            background-color: #fafafa;
        }
    </style>

    <script>

        window.onload = function () {
            //需求1：点击上面的的input，下面全选或者反选。
            //思路：获取了上面的input按钮，只需要判断，checked属性是true还是false，如果是true，下面的全部变成true；false同理。

            var topInp = document.getElementById("title");

            var tbody = document.getElementById("content");
            var botInpArr = tbody.getElementsByTagName("input");

            //绑定事件
            topInp.onclick = function () {
                //费劲版
//                for(var i=0;i<botInpArr.length;i++){
//                    if(topInp.checked === true){
//                        botInpArr[i].checked = true;
//                    }else{
//                        botInpArr[i].checked = false;
//                    }
//                }

                //优化版（被点击的input按钮的checked属性值，应该直接作为下面的所有的input按钮的checked属性值）
                for(var i=0;i<botInpArr.length;i++){
                    botInpArr[i].checked = this.checked;
                }
            }

            //需求2：点击下面的的input，如果下面的全部选定了，上面的全选，否则相反。
            //思路：为下面的每一个input绑定事件，每点击一次都判断所有的按钮
            // checked属性值是否全部都是true，如果有一个是false，
            // 那么上面的input的checked属性也是false;都是true，topInp的checked就是true；


            for(var i=0;i<botInpArr.length;i++){
                botInpArr[i].onclick = function () {  //每一个input都要绑定事件
                    //开闭原则（用开关来控制）
                    var bool = true;
                    //检测每一个input的checked属性值。
                    for(var j=0;j<botInpArr.length;j++){
                        if(botInpArr[j].checked === false){
                            bool = false;
                        }
                    }
                    topInp.checked = bool;
                }
            }
        }

    </script>

</head>
<body>
<div class="my-table">
    <table>
        <thead>
        <tr>
            <th>
                <input type="checkbox" id="title" />
            </th>
            <th>菜名</th>
            <th>饭店</th>
        </tr>
        </thead>
        <tbody id="content">
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>菜品1</td>
            <td>木屋烧烤</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>菜品2</td>
            <td>蒸菜馆</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>菜品3</td>
            <td>海底捞火锅</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>菜品4</td>
            <td>面点王</td>
        </tr>
        </tbody>
    </table>
</div>

</body>
</html>
```

注意代码中的注释，需求2是比较难的地方，这里用到了两次for循环。第一次for循环是因为，要给每个input都要进行绑定事件。

实现的效果如下：

20180127_2320.gif




```javascript

```
---
title: 07-DOM操作练习：innerHTML的方式创建元素
publish: true
---

<ArticleTopAd></ArticleTopAd>




## 动态创建DOM元素的三种方式

- `document.write();` 不常用，因为容易覆盖原来的页面。

- `innerHTML = ();` 用的比较多。绑定属性和内容比较方便。(节点套节点)

- `document.createElement();` 用得也比较多，指定数量的时候一般用它。


**1、方式一：**

```javascript
document.write();
```

这种方式的好处是：比较随意，想创建就创建，可以直接在`write`里写属性都行。但是会把原来的标签给覆盖掉。所以不建议。


举例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<ul>
    smyhvae
</ul>

<script>
    //第一种创建方式：document.write();
    document.write("<li class='hehe'>我是document.write创建的</li>");
</script>
</body>
</html>
```

效果如下：

![](http://img.smyhvae.com/20180129_1908.png)


**方式二：**innerHTML


举例如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<ul>
    smyhvae
</ul>

<script>
    var ul = document.getElementsByTagName("ul")[0];

    //第二种：直接利用元素的innerHTNL方法。（innerText方法不识别标签）
    ul.innerHTML += "<li id='li1'>我是innerHTML创建的</li>"  //注意，是用符号“+=”，不是“=”
</script>
</body>
</html>
```

注意，上方代码中，是用是用符号`+=`，不是`=`，前者是在原来的基础之上增加，后者是替换。


效果如下：

![](http://img.smyhvae.com/20180129_2017.png)



**3、方式三：**利用DOM的api创建

利用DOM的api创建节点，有很多种：

比如：

- createElement()

- appendChild()

- removeChild()

- insertBefore()

- replaceChild()


这个我们在上一篇文章的`DOM节点的操作`这一段中已经讲到了。

```html

```


## innerHTML举例：在线用户的获取

现在要做下面这样一个页面：


![](http://img.smyhvae.com/20180129_2151.png)


上图的意思是，每次刷新页面，都从服务器获取最新的在线人数的名单（我们先用本地的数组来模拟服务器上的数据）。

它的结构是：div > ul > li。每一个li就是一个头像。

如果在本地直接添加几个头像的话，代码是：

```html
    //往ul中添加li元素以及li元素中的内容
       ul.innerHTML += '<li>'+
                       '<a href="#" target="_blank"><img src="images/noavatar_small.gif" width="48" height="48" alt="千古壹号"></a>'+
                       '<p><a href="#" title="千古壹号" target="_blank">千古壹号</a></p>'+
                   '</li>';
       ul.innerHTML += '<li>'+
               '<a href="#" target="_blank"><img src="images/noavatar_small.gif" width="48" height="48" alt="千古壹号"></a>'+
               '<p><a href="#" title="千古壹号" target="_blank">千古壹号</a></p>'+
               '</li>';
       ul.innerHTML += '<li>'+
               '<a href="#" target="_blank"><img src="images/noavatar_small.gif" width="48" height="48" alt="千古壹号"></a>'+
               '<p><a href="#" title="千古壹号" target="_blank">千古壹号</a></p>'+
               '</li>';

```

上方代码有两点比较重要：

- 我们是通过`ul.innerHTML += 元素节点`的方式来不停地往ul里面加内容，比`createElement`的方式要方便。

- 元素的内容本身有双引号`"`，所以我们要用单引号`'`进行字符串的连接。

但是，当我们从服务器获取在线用户的时候，头像和用户的昵称是动态变化的，所以每个字符串要用变量进行表示：

```html
        ul.innerHTML += '<li>'+
                            '<a href="#" target="blank"><img src="'+users[i].icon+'" width="48" height="48" alt="'+users[i].name+'"></a>'+
                            '<p><a href="#" title="'+users[i].name+'" target="_blank">'+users[i].name+'</a></p>'+
                        '</li>';

```

这里我们暂时用本地的数组来代表服务器的数据，最终的完整版代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            word-wrap: break-word;
        }

        .wp {
            width: 730px;
            margin: 0px auto;
        }

        .mtn {
            margin-top: 5px !important;
        }

        #ct .frame {
            margin: 0;
            border: none;
        }

        .xfs_2 .frame-title, .xfs_2 .frametitle, .xfs_2 .tab-title {
            background-color: #A90000;
            background-position: 0 -99px;
        }

        .xfs .frame-title, .xfs .frametitle, .xfs .tab-title, .xfs .frame-title a, .xfs .frametitle a, .xfs .tab-title a {
            color: #FFF !important;
        }

        .xfs .frame-title, .xfs .frametitle, .xfs .tab-title {
            border: none;
            background: transparent url(images/mu.png) repeat-x 0 95;
        }

        .title {
            padding: 0 10px;
            height: 32px;
            font-size: 14px;
            font-weight: 700;
            line-height: 32px;
            overflow: hidden;
        }

        .block {
            margin: 10px 10px 0;
        }

        ul, menu, dir {
            display: block;
            list-style: none;
            -webkit-margin-before: 1em;
            -webkit-margin-after: 1em;
            -webkit-margin-start: 0px;
            -webkit-margin-end: 0px;
            -webkit-padding-start: 25px;
        }

        .mls li {
            padding: 0 0 5px;
            width: 66px;
            height: 85px;
        }

        .ml li {
            float: left;
            text-align: center;
            overflow: hidden;
        }

        a {
            color: #333;
            text-decoration: none;
            font: 12px/1.5 Tahoma, 'Microsoft Yahei', 'Simsun';
        }

        .mls p {
            margin-top: 5px;
        }

        .ml p, .ml span {
            display: block;
            width: 100%;
            height: 20px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .mls img {
            width: 48px;
            height: 48px;
        }

        .ml img {
            display: block;
            margin: 0 auto;
        }

        a img {
            border: none;
        }
    </style>
</head>
<body>

<div class="wp mtn">
    <div id="diy3" class="area">
        <div id="frameipq7f2" class="xfs xfs_2 frame move-span cl frame-1">
            <div
                    class="title frame-title"><span class="titletext">当前在线用户</span></div>
            <div id="frameipq7f2_left"
                 class="column frame-1-c">
                <div
                        id="frameipq7f2_left_temp" class="move-span temp"></div>
                <div id="portal_block_695"
                     class="block move-span">
                    <div
                            id="portal_block_695_content" class="dxb_bc">
                        <div class="module cl ml mls" id="users">
                            <ul>
                                <!--<li>-->
                                <!--<a href="#" target="_blank"><img src="images/noavatar_small.gif" width="48" height="48" alt="千古壹号"></a>-->
                                <!--<p><a href="#" title="千古壹号" target="_blank">千古壹号</a></p>-->
                                <!--</li>-->

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    //模拟从服务器获取数据
    var users = [
        {"name": "smyhvae", "icon": "images/noavatar_small.gif"},
        {"name": "smyh", "icon": "images/noavatar_small.gif"},
        {"name": "smyh02", "icon": "images/75_avatar_small.jpg"},
        {"name": "vae", "icon": "images/89_avatar_small.jpg"},
        {"name": "today", "icon": "images/noavatar_small.gif"},
        {"name": "enen", "icon": "images/noavatar_small.gif"},
        {"name": "oyey", "icon": "images/noavatar_small.gif"},
        {"name": "dongxiaojie", "icon": "images/noavatar_small.gif"},
        {"name": "qishi", "icon": "images/noavatar_small.gif"},
        {"name": "qqtang", "icon": "images/noavatar_small.gif"},
        {"name": "wawawa", "icon": "images/noavatar_small.gif"},
        {"name": "haha", "icon": "images/noavatar_small.gif"},
        {"name": "robot", "icon": "images/noavatar_small.gif"},
        {"name": "heheda", "icon": "images/noavatar_small.gif"},
        {"name": "smyhvae1", "icon": "images/noavatar_small.gif"},
        {"name": "lihaile", "icon": "images/noavatar_small.gif"}
    ];

    //需求：页面显示所有的在线用户。
    //思路：模拟服务器获取数据（数组中装着json）.获取ul，把ul的innerHTML属性获取到，然后不间断的往innerHTML属性中赋值。
    //赋值要求：li标签的内容。
    //步骤：(获取元素)
    var div = document.getElementById("users");
    var ul = div.firstElementChild || div.firstChild;
    //        var ul = div.children[0];

    //1.模拟服务器获取数据（定义数组），通过循环添加元素（定义for）
    //数组中有多少元素，我们就创建多少个li标签
    for (var i = 0; i < users.length; i++) {
        //2.模拟实验的操作方式。
        ul.innerHTML += '<li>' +
            '<a href="#" target="blank"><img src="' + users[i].icon + '" width="48" height="48" alt="' + users[i].name + '"></a>' +
            '<p><a href="#" title="' + users[i].name + '" target="_blank">' + users[i].name + '</a></p>' +
            '</li>';
    }
</script>
</body>
</html>
```

工程文件：[2018-02-01-获取在线用户列表demo.rar](https://github.com/qianguyihao/web-resource/blob/main/project/2018-02-01-%E8%8E%B7%E5%8F%96%E5%9C%A8%E7%BA%BF%E7%94%A8%E6%88%B7%E5%88%97%E8%A1%A8demo.rar)



## innerHTML举例2：模拟百度搜索的下方提示

要求实现的效果如下：

![](http://img.smyhvae.com/20180201_2030.gif)

在这之前，我们先实现这样一个例子：**判断字符串以某个字符串为开头**。

**判断字符串是否以某个字符串为开头：**


```javascript
    var str = "smyhvae";

    //判断str是否以sm为开头？（给定字符串，然后他的索引值为0）
    var num = str.indexOf("sm");
    //只有返回值为0，那么字符串才是以参数为开头
    //如果在任何位置都查询不到参数，则返回值为-1；

```


代码解释：我们可以通过`indexOf("参数")`来实现。如果返回的索引值为0，说明字符串就是以这个参数开头的。

为了实现上方gif图的搜索功能，完整版代码如下：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        .box {
            width: 500px;
            margin: 200px auto;
        }

        ul {
            width: 392px;
            padding: 5px;
            list-style: none;
            border: 1px solid red;
        }

        li:hover {
            background-color: red;
        }

        input {
            width: 400px;
        }

        button {
            width: 70px;
        }
    </style>
</head>
<body>
<div class="box">
    <input type="text"/>
    <button>搜索</button>
    <!--<ul>-->
    <!--<li>aaaa</li>-->
    <!--<li>bbb</li>-->
    <!--<li>ccc</li>-->
    <!--</ul>-->
</div>

<script>
    //需求：输入内容(输入事件，键盘弹起事件)，模拟服务器获取内容，创建ul，并在其中显示。

    //1.获取事件源
    //模拟服务器获取内容
    var arr = ["a", "ab", "abc", "abcd", "aa", "aaa"];
    var box = document.getElementsByTagName("div")[0];
    var inp = box.children[0];
    //        var inp = document.getElementsByTagName("input")[0];

    //2.绑定事件(输入内容(输入事件，键盘弹起事件))
    inp.onkeyup = function () {
        //创建一个字符串，里面添加满了li和对应的内容。
        var newArr = [];
        //遍历老数组arr，然后判断每一项，只要是以input的内容为开头的，就添加到新数组newArr中，然后转成字符串。
        for (var i = 0; i < arr.length; i++) {

            //获取输入内容input标签的value属性值。
            if (arr[i].indexOf(this.value) === 0) {  //【重要】判断老数组arr中的每一项，是否以input的内容为开头
                newArr.push("<li>" + arr[i] + "</li>");
            }
        }
        var str = newArr.join("");

        //Bug1：每次创建新的ul之前，如果有就的ul，就先删除旧的ul
        if (box.getElementsByTagName("ul")[0]) {
            //只要存在，那么就是object，object类型的数据，只要不是null,对应的boolean值都是true；
            box.removeChild(box.children[2]);
        }

        //Bug2.如果input的内容为空，那么就不能再生成ul了。
        //如果input为空，那就切断函数

        //Bug3.如果arr数组中找不到以input为开头的元素。那就切断函数
        //newArr的长度为0，就能证明以input内容为开头的元素，在arr中不存在
        if (this.value.length === 0 || newArr.length === 0) {  //fix bug2、fix bug3
            //切断函数，直接return
            return;
        }

        //3.书写事件驱动程序
        var ul = document.createElement("ul");
        //把创建好的内容添加到ul中。
        ul.innerHTML = str;
        box.appendChild(ul);
    }
</script>
</body>
</html>
```



## 动态操作表格


方式1：

```
  createElement()
```

方式2：

- rows                          (只读，table和textarea能用)

- insertRow()              (只有table能调用)

- deleteRow()           (只有table能调用)

- cells             (只读，table和textarea能用)

- insertCell()               (只有tr能调用)

- deleteCell()              (只有tr能调用)


PS：括号里可以带index。用的不多。





















---
title: 02-CSS基础练习：JD首页的制作（快捷导航部分）
publish: true
---

<ArticleTopAd></ArticleTopAd>




我们在上一篇文章中制作的网页最顶部的导航，是属于网页导航。

本文中，Banner图上方的导航，叫做**快捷导航**（shortcut）。

##快捷导航的骨架

我们先制作快捷导航的骨架。如下图所示：

![](http://img.smyhvae.com/20180123_1057.png)

上图中，`shortcut-nav-menu-all`和`shortcut-nav-menu-one`都是属于`shortcut-nav-menu`部分，只不过，后者是将父亲撑破了。

为了实现上图，对应的html代码如下：

```html
<!--shortcut-nav部分start-->
<div class="shortcut-nav">
    <div class="w">
        <div class="shortcut-nav-menu">
            <div class="shortcut-nav-menu-all">
                <a href="#">全部商品分类</a>
            </div>
            <div class="shortcut-nav-menu-one" style="color: #fff">
                下一段再讲
            </div>
        </div>
        <div class="shortcut-nav-items">
            <ul>
                <li><a href="#">服装城</a></li>
                <li><a href="#">美妆馆</a></li>
                <li><a href="#">京东超市</a></li>
                <li><a href="#">生鲜</a></li>
                <li><a href="#">全球购</a></li>
                <li><a href="#">闪购</a></li>
                <li><a href="#">团购</a></li>
                <li><a href="#">拍卖</a></li>
                <li><a href="#">金融</a></li>
            </ul>
        </div>
        <div class="shortcut-nav-img">
            <a href="#">
                <img src="images/img2.jpg"/>
            </a>
        </div>
    </div>
</div>
<!--shortcut-nav部分end-->
```

css代码如下：

```css
/*shortcut-nav部分start*/
.shortcut-nav {
    height: 44px;
    border-bottom: 2px solid #B1191A;
}
.shortcut-nav-menu {     /*撑开和撑破是两回事：撑开说明盒子变成那么大，撑破盒子还是那么大，子盒子很大。子盒子shortcut-nav-menu-one把父亲撑破了*/
    width: 210px;
    height: 44px;        /*浮动的盒子相互影响，不过是否在同一个盒子中*/
    float: left;
    position: relative;
    z-index: 1;       /*通过z-index属性将层级放到最高*/
}
.shortcut-nav-menu-all a {
    display: block;
    width: 190px;
    height: 44px;
    color: white;
    padding: 0 10px;
    background-color: #B1191A;
    font: 400 15px/44px "microsoft yahei";
}
.shortcut-nav-menu-one {
    height: 465px;
    margin-top: 2px;
    background-color: #C81623;
    border-left: 1px solid #B1191A;
    border-bottom: 1px solid #B1191A;
    /*border-left: 1px solid #000;*/
    /*border-bottom: 1px solid #000;*/
}
.shortcut-nav-items {
    width: 730px;
    height: 44px;
    float: left;
}
.shortcut-nav-items li {
    float: left;
}
.shortcut-nav-items a {
    display: inline-block;
    height: 44px;
    padding: 0 20px;
    color: #333;
    font: 400 16px/44px "microsoft yahei";
}
.shortcut-nav-items a:hover {
    color: #C81623;
}
.shortcut-nav-img {
    width: 200px;
    height: 44px;
    float: right;
    margin-top: -10px;
    margin-right: 50px;
    /*position: relative;*/
    /*left: -50px;*/
    /*top: -10px;*/
}
/*shortcut-nav部分end*/
```


## 具体的商品分类

商品的具体分类即`shortcut-nav-menu-one`部分，我们来实现这部分的代码。要求实现的效果如下：

![](http://img.smyhvae.com/20180123_1510.gif)

我们在上面的代码中已经给`shortcut-nav-menu-one`设置了一些属性（例如给左边和下边增加一个像素的红色边框），在此基础之上，需要新增的代码如下：

html代码：

```html
            <!--具体的商品分类start-->
            <div class="shortcut-nav-menu-one" style="color: #fff">
                <ul>
                    <li>
                        <a href="">家用电器</a>
                        <i>></i>
                    </li>
                    <li>
                        <a href="">手机</a>
                        <span>、</span>
                        <a href="">数码</a>
                        <i>></i>
                    </li>
                    <li>
                        <a href="">电脑</a>
                        <span>、</span>
                        <a href="">办公</a>
                        <i>></i>

                    </li>
                    <li>
                        <a href="">家居</a>
                        <span>、</span>
                        <a href="">家具</a>
                        <i>></i>
                    </li>
                    <li>
                        <a href="">男装</a>
                        <span>、</span>
                        <a href="">女装</a>
                        <i>></i>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <!--具体的商品分类end-->
```

css部分如下：

```css
/*具体的商品分类start*/
.shortcut-nav-menu-one ul {
    font: 400 14px/31px "microsoft yahei";   /*字体属性具有继承性，让儿子 a 具有此继承性*/
}
.shortcut-nav-menu-one li {
    padding-left: 10px;
    position: relative;
}

.shortcut-nav-menu-one a{
    color: #fff;
}

.shortcut-nav-menu-one i {
    right: 10px;
    position: absolute;
}

.shortcut-nav-menu-one li:hover {
    background-color: #fff;
}

.shortcut-nav-menu-one li:hover a,span,i{
    color: #C81623;
}
/*具体的商品分类end*/
```


## 轮播图slider + 京东快报

接下来，我们要实现下面这个部分：

![](http://img.smyhvae.com/20180123_1527.png)

组成部分包括：左侧的轮播图、右侧的京东快报 & 充话费 & 右下角的小海报。

结构如下：

```html
<!--main部分start-->
<div class="main">
    <div class="w">
        <div class="main-slider">

        </div>
        <div class="main-news">
            <div class="main-news-top">    <!--京东快报+充话费-->
                <div class="main-news-top-faster">   <!--京东快报-->

                </div>
                <div class="main-news-top-money">    <!--充话费-->

                </div>

            </div>
            <div class="main-news-bottom">

            </div>
        </div>
    </div>
</div>
<!--main部分end-->
```

我们依次来讲解。

### 1、轮播图：main-slider

首页的banner图是首页独有的，所以这部分的css代码要写在index.css里，不要写在base.css里。

html代码如下：

```html

<!--main部分start-->
<div class="main">
    <div class="w">
        <div class="main-slider">
            <a href="">
                <img src="images/slider.jpg" alt="">
            </a>

            <ul>            <!--指示点-->
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>
            <a href="javascript:;" class="arrow-left">&lt;</a>   <!--左边的箭头-->
            <a href="javascript:;" class="arrow-right">&gt;</a>  <!--右边的箭头-->
        </div>
    </div>
</div>
<!--main部分end-->

```

注意：超链接 a 标签中，`href="javascript:;`表示点击超链接时，什么都不做。

CSS代码如下：

```css
.main-slider {
    float: left;
    margin: 12px 0 0 220px;
    width: 730px;
    height: 454px;
    position: relative;
}

.main-slider ul {
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -66px;
}

.main-slider ul li {
    float: left;
    width: 18px;
    height: 18px;
    color: #fff;
    background-color: #3E3E3E;
    border-radius: 50%;   /*圆角矩形*/
    line-height: 18px;
    text-align: center;  /*让 li 里面的文本水平方向居中*/
    margin: 0 2px;
    cursor: pointer;   /*鼠标悬停时变成小手*/
}

.main-slider .arrow-left {  /* 轮播图左侧的箭头*/
    position: absolute;
    top: 50%;
    margin-top: -31px;
    left: 0px;
    width: 28px;
    height: 62px;
    background-color: rgba(0,0,0,0.3);
    color: #fff;
    font: 400 22px/62px "sumsun";
    text-align: center;
    border-radius: 10px 0 0 10px;
}

.main-slider .arrow-left:hover {
    background-color: rgba(0,0,0,0.7);
}

.main-slider .arrow-right {  /*轮播图右侧的箭头*/
    position: absolute;
    top: 50%;
    margin-top: -31px;
    right: 0px;
    width: 28px;
    height: 62px;
    background-color: pink;
    background-color: rgba(0,0,0,0.3);
    color: #fff;
    font: 400 22px/62px "sumsun";
    text-align: center;
    border-radius: 10px 0 0 10px;
}

.main-slider .arrow-right:hover {
    background-color: rgba(0,0,0,0.7);
}

```

代码解释如下；

（1）轮播图，我们采取的方式是：在超链接 a 里面放一个img标签。

（2）指示点：在一个ul中放多个li。然后通过绝对定位的方式，让ul放在轮播图的正中间（水平方向）。最后详细设置每个指示点li的属性（比如，`text-align: center`属性可以让li里面的文字水平居中）。

（3）左右两边的箭头：鼠标悬停时，颜色不同。我们通过`background-color: rgba(0,0,0,0.3)`设置背景的透明度。

最终实现的效果如下：

![](http://img.smyhvae.com/20180123_1951.png)

### 京东快报

html代码如下：

```html
                <div class="main-news-top-faster">   <!--京东快报-->
                    <div class="main-news-top-faster-title">
                        <h2>京东快报</h2>
                        <a href="#">更多 ></a>
                    </div>
                    <div class="main-news-top-faster-content">
                        <ul>
                            <li><span>[特惠]</span>新闻1</li>
                            <li><span>[公告]</span>新闻2</li>
                            <li><span>[特惠]</span>新闻3</li>
                            <li><span>[公告]</span>新闻4</li>
                            <li><span>[特惠]</span>新闻5</li>
                        </ul>

                    </div>
                </div>

```

css代码如下；

```css
.main-news-top-faster {
    height: 163px;
    border-bottom: 1px dashed #E4E4E4;    /*虚线*/
}


.main-news-top-faster-title {
    height: 32px;
    line-height: 32px;
    border-bottom: 1px dotted #E8E8E8;   /*点线*/
    padding: 0 15px;

}

.main-news-top-faster-title h2{
    float: left;
    font: 400 16px/32px "microsoft yahei";
}

.main-news-top-faster-title a {
    float: right;
}

.main-news-top-faster-content {
    padding: 5px 0 0 15px;

}

.main-news-top-faster-content li {
    line-height: 24px;
}

.main-news-top-faster-content span {
    font-weight: 700;
    margin-right: 5px;
    color: #666;
}

.main-news-top-money ul {
    width: 250px;
}

```


### 3、充话费部分：12个单元格（重要）

**（1）步骤一：**画表格

充话费这部分，我们不用table标签来做，一般table标签一般是用来放文字的。这里因为有图片，所以我们用ul标签来做，在ul里放12个浮动的li。

如果我们直接这样进行设置：

```css
.main-news-top-money ul {
    width: 250px;
}

.main-news-top-money li {
    width: 62px;
    height: 70px;
    border: 1px solid #E8E8E8;
    float: left;

}
```

会发现，效果不尽人意：

![](http://img.smyhvae.com/20180123_2202.png)

上图所示，我们发现，红框部分的12个li，并没有按照我们预期的那样进行排列。因为每个li有border。真实的li当中，它们的border是有重叠的。

解决办法：

> 父亲宽度不够时，为了让盒子浮动不掉下去，可以给子盒子之上父盒子之下再给一个盒子，让它的宽度略大于父亲的宽度即可。

比如这里，**本身这个区域整体的宽度是250，我们就设置ul的宽度是260px即可（**满足的条件是：li的宽度*4 < **ul的宽度** < li的宽度*5）。

ul的宽度设置为260px之后发现，最右边和最下面的部分会多出来：

![](http://img.smyhvae.com/20180123_2207.png)

我们可以给`main-news-top-money`设置`overflow: hidden`，将多余的部分切掉（这是没有办法的事情）。

于是乎，充话费这部分的代码如下：

html部分：

```html
                <div class="main-news-top-money">    <!--充话费-->
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                </div>
```

css部分：

```css
.main-news-top-money ul {
    width: 260px;   /*让宽度略大于整体的宽度250px*/
}

.main-news-top-money li {
    width: 62px;
    height: 70px;
    border: 1px solid #E8E8E8;
    float: left;
    border-top: 0;  /* 将每个单元格的上边框去掉，因为跟单元格的下边框重合了。*/
    margin-top: -1px;  /* 整体向上移动一个单位，因为边框重合了*/
    margin-left: -1px ;/* 整体向左移动一个单位，因为边框重合了*/
}
```

这样的话，表格就画好了：

![](http://img.smyhvae.com/20180123_2240.png)

**（2）步骤二：**往表格里填充内容

接下来，我们往表格里填充内容。最终，充话费部分的代码如下：

html部分：

```html
               <div class="main-news-top-money">    <!--充话费-->
                    <ul>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="main-news-top-money-icon2"></i>   <!--单元格里的图片-->
                                <span>机票</span>
                            </a>

                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>   <!--单元格里的图片-->
                                <span>话费</span>
                            </a>
                        </li>
                    </ul>
                </div>
```

index.css部分：

```css
/*充话费部分start*/
.main-news-top-money {
    overflow: hidden;   /*将多余的部分切掉*/
}

.main-news-top-money ul {
    width: 260px;   /*让宽度略大于整体的宽度250px*/
}

.main-news-top-money li {
    width: 62px;
    height: 70px;
    border: 1px solid #E8E8E8;
    float: left;
    border-top: 0;  /* 将每个单元格的上边框去掉，因为跟单元格的下边框重合了。*/
    margin-top: -1px;  /* 整体向上移动一个单位，因为边框重合了*/
    margin-left: -1px ;/* 整体向左移动一个单位，因为边框重合了*/
}

.main-news-top-money li a {
    display: block;
    width: 62px;
    height: 30px;
    padding-top: 40px;
    text-align: center;
    line-height: 30px;
    position: relative;
}

.main-news-top-money li a i {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 13px;
    left: 18px;
    background: url("../images/fly.png") right top;
}

.main-news-top-money .main-news-top-money-icon2 {
    background: url("../images/fly.png") right -25px;
}
/*充话费部分end*/
```

代码解释：

- 单元格里的文字：我们可以给单元格里的文字设置padding-top，保证文字位于单元格的底部。

- 单元格里的图片（精灵图）的位置：通过子绝父相的方式（子是图片`<i>`本身，相是每个单元格里的超链接文字`<a>`）。通过子绝父相的方式定位之后，发现精灵图都是一样的图标，目前的处理办法是：手动添加不同的class进行修改精灵图，以后等我们学习js了，就不用这么麻烦了。

画出的表格如下：

![](http://img.smyhvae.com/20180124_1121.png)


## 今日推荐

接下来，我们开始做下面这部分：

![](http://img.smyhvae.com/20180124_1434.png)

上图中的“今日推荐”，标签可以这样布局：ul > li > a > img

为了防止这部分的内容跑到上面去，我们可以给上面的`class-main`部分清除浮动。

“今日推荐”这部分的代码如下。

html代码如下：

```html
<!--今日推荐start-->
<div class="today">
    <div class="w clearfix">
        <div class="today-left fl">
            <a href=""></a>
        </div>

        <div class="today-right">
            <ul>
                <li><a href=""><img src="images/today1.jpg" alt=""></a></li>
                <li><a href=""><img src="images/today2.jpg" alt=""></a></li>
                <li><a href=""><img src="images/today3.jpg" alt=""></a></li>
                <li><a href=""><img src="images/today4.jpg" alt=""></a></li>
            </ul>
            <a href="javascript:;" class="arrow-left">&lt;</a>   <!--左边的箭头-->
            <a href="javascript:;" class="arrow-right">&gt;</a>  <!--右边的箭头-->

        </div>

    </div>
</div>
<!--今日推荐end-->
```

index.css中的代码如下；

```css
/*今日推荐start*/
.today {
    padding: 10px 0 20px;
}

.today-left a{
    display: block;
    width: 210px;
    height: 150px;
    background: url("../images/today.jpg");
}

.today-right {
    float: right;
    width: 1000px;
    overflow: hidden;  /*隐藏掉右侧超出的几个像素*/
    position: relative;
}

.today-right ul {
    width: 410%;   /*这一点很有技巧*/
}

.today-right li{
    float: left;
    margin-right: 1px;

}
/*今日推荐end*/
```


## banner两侧的广告

要实现的内容是下图中的箭头处：

![](http://img.smyhvae.com/20180124_1615.png)


注意这部分的div的位置，是放在`class="shortcut-nav"`和`class="main"`之间的。

两侧的广告其实是一个放在 a 标签里的超大背景图，而且这个大图的宽度超过了版心。所以，超链接的宽度给`width: 100%`更合适。a 的高度设置为图片的高度即可。

代码实现如下：

html:

```html
<!--网页两侧的广告start-->
<div class="banner-ad">
    <a href="http://www.baidu.com"></a>
</div>
<!--网页两侧的广告end-->
```

index.css:

```css
/*banner两侧的广告start*/
.banner-ad {
    position: relative;
}

.banner-ad a {
    width: 100%;
    height: 644px;
    background: url("../images/ad.png") no-repeat center top;
    position: absolute;
}
/*banner两侧的广告end*/
```

上方代码中，我们不用给图片的父亲`banner-ad`设置高度。

超链接a ：我们不知道超链接的宽度是多少，所以直接设置为`width: 100%`。注意它的背景图的摆放位置，`center`确保了背景图位于水平方向的正中间，`top`确保了背景图和父亲定边对齐。




注意，上图中，两侧的广告实现之后发现，蓝框部分的两个位置(`main-news-top-faster`和`today-left`)点击时，发现跳转的是两侧广告的链接，因为它们的层级不够高。解决办法：给蓝框这两个部分加一个`position: relative`属性即可提高层级。

## 总结

上一篇文章和这一篇文章，加起来，最终实现的效果如下：

![](http://img.smyhvae.com/20180124_1607.png)

工程文件：[2018-01-23-前端基础练习-JD顶部导航.rar](https://github.com/qianguyihao/web-resource/blob/main/project/2018-01-23-%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80%E7%BB%83%E4%B9%A0-JD%E9%A1%B6%E9%83%A8%E5%AF%BC%E8%88%AA.rar)


---
title: 04-DOM操作练习：Tab栏切换（通过className设置样式）
publish: true
---

<ArticleTopAd></ArticleTopAd>





京东网页上，可以看到下面这种tab栏的切换：

![](http://img.smyhvae.com/20180128_1750.gif)

我们把模型抽象出来，实现一下。

## 举例引入：鼠标悬停时，current元素的背景变色

> 本段我们先举一个例子，因为这里用到了**排他思想**（先干掉 all，然后保留我一个）。对于理解tab切换，很有帮助。

完整的代码实现：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        button {
            margin: 10px;
            width: 100px;
            height: 40px;
            cursor: pointer;
        }
        .current {
            background-color: red;
        }
    </style>
</head>
<body>
<button>按钮1</button>
<button>按钮2</button>
<button>按钮3</button>
<button>按钮4</button>
<button>按钮5</button>

<script>
    //需求：鼠标放到哪个button上，改button变成黄色背景（添加类）


    var btnArr = document.getElementsByTagName("button");
    //绑定事件
    for(var i=0;i<btnArr.length;i++){   //要为每一个按钮绑定事件，所以用到了for循环
        btnArr[i].onmouseover = function () {
            //【重要】排他思想：先把所有按钮的className设置为空，然后把我（this）这个按钮的className设置为current
            //排他思想和for循环连用
            for(var j=0;j<btnArr.length;j++){
                btnArr[j].className = "";
            }
            this.className = "current";  //【重要】核心代码
        }
    }

    //鼠标离开current时，还原背景色
    for(var i=0;i<btnArr.length;i++){   //要为每一个按钮绑定事件，所以用到了for循环
        btnArr[i].onmouseout = function () { //鼠标离开任何一个按钮时，就把按钮的背景色还原
            this.className = "";
        }
    }

</script>

</body>
</html>
```

代码解释：

鼠标悬停时，current栏变色，这里用到了排他思想：先把所有按钮的className设置为空，然后把我(this)这个按钮的className设置为current，就可以达到变色的效果。核心代码是：


```javascript
            //排他思想：先把所有按钮的className设置为空，然后把我（this）这个按钮的className设置为current
            //排他思想和for循环连用
            for(var j=0;j<btnArr.length;j++){
                btnArr[j].className = "";
            }
            this.className = "current";
```

实现的效果如下：


![](http://img.smyhvae.com/20180128_1740.gif)

## tab切换：初步的代码

代码如下：


```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        .box {
            width: 500px;
            height: 200px;
            border: 1px solid #ccc;
            margin: 50px auto;
            overflow: hidden;
        }
        ul {
            width: 600px;
            height: 40px;
            margin-left: -1px;
            list-style: none;
        }
        li {
            float: left;
            width: 101px;
            height: 40px;
            text-align: center;
            font: 600 18px/40px "simsun";
            background-color: pink;
            cursor: pointer;
        }
        span {
            display: none;
            width: 500px;
            height: 160px;
            background-color: yellow;
            text-align: center;
            font: 700 100px/160px "simsun";
        }
        .show {
            display: block;
        }
        .current {
            background-color: yellow;
        }
    </style>

    <script>
        window.onload = function () {
            //需求：鼠标放到上面的li上，li本身变色(添加类)，对应的span也显示出来(添加类);
            //思路：1.点亮上面的盒子。   2.利用索引值显示下面的盒子。

            var liArr = document.getElementsByTagName("li");
            var spanArr = document.getElementsByTagName("span");

            for(var i=0;i<liArr.length;i++){
                //绑定索引值（新增一个自定义属性：index属性）
                liArr[i].index = i;
                liArr[i].onmouseover = function () {

                    //1.点亮上面的盒子。   2.利用索引值显示下面的盒子。(排他思想)
                    for(var j=0;j<liArr.length;j++){
                        liArr[j].className = "";
                        spanArr[j].className = "";
                    }
                    this.className = "current";
                    spanArr[this.index].className = "show"; //【重要代码】
                }
            }
        }
    </script>
</head>
<body>

<div class="box">
    <ul>
        <li class="current">鞋子</li>
        <li>袜子</li>
        <li>帽子</li>
        <li>裤子</li>
        <li>裙子</li>
    </ul>
    <span class="show">鞋子</span>
    <span>袜子</span>
    <span>帽子</span>
    <span>裤子</span>
    <span>裙子</span>
</div>

</body>
</html>
```

实现效果如下：

![](http://img.smyhvae.com/20180128_1610.gif)

上方代码的核心部分是：

```javascript
            for(var i=0;i<liArr.length;i++){
                //绑定索引值（新增一个自定义属性：index属性）
                liArr[i].index = i;
                liArr[i].onmouseover = function () {

                    //1.点亮上面的盒子。   2.利用索引值显示下面的盒子。(排他思想)
                    for(var j=0;j<liArr.length;j++){
                        liArr[j].className = "";
                        spanArr[j].className = "";
                    }
                    this.className = "current";
                    spanArr[this.index].className = "show"; //【重要代码】
                }
            }

```

这段代码中，我们是通过给 `liArr[i]`一个index属性：` liArr[i].index = i`，然后让下方的span对应的index也随之对应显示：`spanArr[this.index].className = "show"`。

这样做比较难理解，其实还有一种容易理解的方法是：**给liArr[i]增加index属性时，通过attribute的方式**，因为这种方式增加的属性是可以显示在标签上的。也就有了下面这样的代码：

```javascript
            for(var i=0;i<liArr.length;i++){
                //绑定索引值(自定义属性)，通过Attribute的方式【重要】
                liArr[i].setAttribute("index",i);
                liArr[i].onmouseover = function () {
                    //3.书写事件驱动程序（排他思想）
                    //1.点亮盒子。   2.利用索引值显示盒子。(排他思想)
                    for(var j=0;j<liArr.length;j++){
                        liArr[j].removeAttribute("class");
                        spanArr[j].removeAttribute("class");
                    }
                    this.setAttribute("class","current");
                    spanArr[this.getAttribute("index")].setAttribute("class","show");
                }
            }

```

显示的效果是一样的，不同的地方在于，我们审查元素发现，li标签中确实新增了自定义的index属性：

![](http://img.smyhvae.com/20180128_1625.gif)

本段中，我们的目的已经达到了，不足的地方在于，**本段中的代码是通过document获取的的标签**，如果网页中有很多个这种tab选项卡，必然互相影响。

为了多个tab栏彼此独立，我们就需要通过**封装函数**的方式把他们抽取出来，于是就有了下面的改进版代码。

## tab切换：改进版代码（函数封装）

### 方式一：给current标签设置index值【推荐的代码】

完整版代码实现：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        .box {
            width: 500px;
            height: 200px;
            border: 1px solid #ccc;
            margin: 50px auto;
            overflow: hidden;
        }

        ul {
            width: 600px;
            height: 40px;
            margin-left: -1px;
            list-style: none;
        }

        li {
            float: left;
            width: 101px;
            height: 40px;
            text-align: center;
            font: 600 18px/40px "simsun";
            background-color: pink;
            cursor: pointer;
        }

        span {
            display: none;
            width: 500px;
            height: 160px;
            background-color: yellow;
            text-align: center;
            font: 700 100px/160px "simsun";
        }

        .show {
            display: block;
        }

        .current {
            background-color: yellow;
        }
    </style>

    <script>
        window.onload = function () {
            //需求：鼠标放到上面的li上，li本身变色(添加类)，下方对应的span也显示出来(添加类);
            //思路：1.点亮上面的盒子。   2.利用索引值显示下面的对应的盒子。

            //1、获取所有的box
            var boxArr = document.getElementsByClassName("box");

            //让每一个box都调用函数
            for (var i = 0; i < boxArr.length; i++) {
                fn(boxArr[i]);
            }

            function fn(element) {
                var liArr = element.getElementsByTagName("li");   //注意，是element获取事件源，不是document获取事件源
                var spanArr = element.getElementsByTagName("span");
                //2.绑定事件（循环绑定）
                for (var i = 0; i < liArr.length; i++) {
                    //绑定索引值（新增一个自定义属性：index属性）
                    liArr[i].index = i;
                    liArr[i].onmouseover = function () {
                        //3.书写事件驱动程序（排他思想）
                        //1.点亮上面的盒子。   2.利用索引值显示下面的盒子。(排他思想)
                        for (var j = 0; j < liArr.length; j++) {
                            liArr[j].className = "";
                            spanArr[j].className = "";
                        }
                        this.className = "current";
                        spanArr[this.index].className = "show"; //【重要】核心代码
                    }
                }
            }
        }
    </script>
</head>
<body>

<div class="box">
    <ul>
        <li class="current">鞋子</li>
        <li>袜子</li>
        <li>帽子</li>
        <li>裤子</li>
        <li>裙子</li>
    </ul>
    <span class="show">鞋子</span>
    <span>袜子</span>
    <span>帽子</span>
    <span>裤子</span>
    <span>裙子</span>
</div>

<div class="box">
    <ul>
        <li class="current">鞋子</li>
        <li>袜子</li>
        <li>帽子</li>
        <li>裤子</li>
        <li>裙子</li>
    </ul>
    <span class="show">鞋子</span>
    <span>袜子</span>
    <span>帽子</span>
    <span>裤子</span>
    <span>裙子</span>
</div>

<div class="box">
    <ul>
        <li class="current">鞋子</li>
        <li>袜子</li>
        <li>帽子</li>
        <li>裤子</li>
        <li>裙子</li>
    </ul>
    <span class="show">鞋子</span>
    <span>袜子</span>
    <span>帽子</span>
    <span>裤子</span>
    <span>裙子</span>
</div>

</body>
</html>
```

注意，通过函数fn的封装之后，我们是通过参数element获取元素，而不再是document了。这样可以达到“抽象性”的作用，各个tab栏之间相互独立。

上方代码中，我们是通过给 liArr[i]一个index属性：` liArr[i].index = i`，然后让下方的span对应的index也随之对应显示：`spanArr[this.index].className = "show"`。

这样做比较难理解，根据上一段的规律，当然还有一种容易理解的方法是：**给liArr[i]增加index属性时，通过attribute的方式**，因为这种方式增加的属性是可以显示在标签上的。也就有了下面的方式二。

### 方式二：通过attribute设置index的值

基于上面方式一中的代码，我们修改一下js部分的代码，其他部分的代码保持不变。js部分的代码如下：

```html
    <script>
        window.onload = function () {
            //需求：鼠标放到上面的li上，li本身变色(添加类)，下方对应的span也显示出来(添加类);
            //思路：1.点亮上面的盒子。   2.利用索引值显示下面的对应的盒子。

            //1、获取所有的box
            var boxArr = document.getElementsByClassName("box");

            //让每一个box都调用函数
            for (var i = 0; i < boxArr.length; i++) {
                fn(boxArr[i]);
            }

            function fn(element) {
                var liArr = element.getElementsByTagName("li");   //注意，是element获取事件源，不是document获取事件源
                var spanArr = element.getElementsByTagName("span");
                //2.绑定事件（循环绑定）
                for (var i = 0; i < liArr.length; i++) {
                    //绑定索引值(自定义属性)
                    liArr[i].setAttribute("index", i);
                    liArr[i].onmouseover = function () {
                        //3.书写事件驱动程序（排他思想）
                        //1.点亮盒子。   2.利用索引值显示盒子。(排他思想)
                        for (var j = 0; j < liArr.length; j++) {
                            liArr[j].removeAttribute("class");    //注意，这里是class，不是className
                            spanArr[j].removeAttribute("class");
                        }
                        this.setAttribute("class", "current");
                        spanArr[this.getAttribute("index")].setAttribute("class", "show");
                    }
                }
            }
        }
    </script>
```

不过，方式一的写法应该比方式二更常见。

**总结**：通过函数封装的形式，可以保证各个tab栏之间的切换互不打扰。最终实现效果如下：

![](http://img.smyhvae.com/20180128_1651.gif)

## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/2016040102.jpg)

---
title: 01-Vue的介绍和vue-cli
publish: true
---

<ArticleTopAd></ArticleTopAd>





## MVVM模式

![](http://img.smyhvae.com/20180420_2150.png)

- Model：负责数据存储

- View：负责页面展示

- View Model：负责业务逻辑处理（比如Ajax请求等），对数据进行加工后交给视图展示

## 关于框架

### 为什么要学习流行框架

**1、企业为了提高开发效率**：在企业中，时间就是效率，效率就是金钱；企业中，使用框架，能够提高开发的效率。

**提高开发效率的发展历程**：

原生JS -> Jquery之类的类库 -> 前端模板引擎 -> Angular.js / Vue.js（能够帮助我们减少不必要的DOM操作；提高渲染效率；双向数据绑定的概念）

2、在Vue中，一个核心的概念就是：数据驱动，避免手动操作DOM元素。这样的话，可以让前端程序员可以更多的时间去关注数据的业务逻辑，而不是关心 DOM 是如何渲染的了。

### 框架和库的区别

**框架**：

框架是一套完整的解决方案。

对项目的**侵入性**较大，项目如果需要更换框架，则需要重新架构整个项目。但是优点也很明显：功能完善、提供了一整套的解决方案。

**库（插件）**：

只是提供某一个小功能。

对项目的侵入性较小，如果某个库无法完成某些需求，可以很容易切换到其它库实现需求。

举例：

- 从Jquery 切换到 Zepto

- 从 EJS 切换到 art-template

## 前端的各种框架


### Vue 和 React 的相同点

- 利用虚拟DOM实现快速渲染

- 轻量级

- 响应式组件

- 支持服务器端渲染

- 易于集成路由工具、打包工具以及状态管理工具

PS：Vue 在国内很受欢迎；React 在国内和国外都很受欢迎，适合做大型网站。

### 什么是虚拟 DOM

传统的web开发，是利用 jQuery操作DOM，这是非常耗资源的。

我们可以在 JS 的内存里构建类似于DOM的对象，去拼装数据，拼装完整后，把数据整体解析，一次性插入到html里去。这就形成了虚拟 DOM。

Vue1.0没有虚拟DOM，Vue2.0改成了基于虚拟DOM。

### 前端框架回顾

![](http://img.smyhvae.com/20180302_1645.png)

![](http://img.smyhvae.com/20180302_1651.png)

![](http://img.smyhvae.com/20180302_1652.png)

Vue框架中，没有控制器。

## Vue 框架

### 发展历史

- 2013年底作为尤雨溪个人实验项目开始开发

- 2014年2月公开发布。

- 2014年11月发布0.11版本

- 2016年10月发布2.0版本。

### 相关网址

- [中文官网](https://cn.vuejs.org/)

- [vuejs官方论坛](https://forum.vuejs.org/)

- GitHub地址：<https://github.com/vuejs/vue>


- Vue1.0 在线文档：<http://v1-cn.vuejs.org/guide/>

- Vue2.x 在线文档：<https://cn.vuejs.org/v2/guide/>

- Vue1下载地址：<http://v1-cn.vuejs.org/js/vue.js>

- Vue2下载地址：<https://cdn.jsdelivr.net/npm/vue/>

![](http://img.smyhvae.com/20180302_1658.png)

上方截图的时间：2018-03-02。

### 介绍

 Vue 本身并不是一个框架，Vue结合周边生态构成一个灵活的、渐进式的框架。

 Vue 以及大型 Vue 项目所需的周边技术，构成了生态。

渐进式框架图：

![](http://img.smyhvae.com/20180302_1701.png)

### Vue框架的特点

- 模板渲染：基于 html 的模板语法，学习成本低。

- 响应式的更新机制：数据改变之后，视图会自动刷新。【重要】

- 渐进式框架

- 组件化/模块化

- 轻量：开启 gzip压缩后，可以达到 20kb 大小。（React 达到 35kb，AngularJS 达到60kb）。

## Vue 的环境搭建

> 我们首先要安装好 NVM、Node.js环境，然后再来做下面的操作。

### 常见的插件

- Webpack：代码模块化构建打包工具。

- Gulp：基于流的自动化构建工具。

- Babel：使用最新的 规范来编写 js。

- Vue：构建数据驱动的Web界面的渐进式框架

- Express：基于 Node.js 平台，快速、开放、极简的 Web 开发框架。

以上这些包，都可以通过 NPM 这个包管理工具来安装。

### 引用 Vue.js 文件

1、**方式一**：（CDN的方式进行引用）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
</head>
<body>


</body>
</html>
```

2、方式二：（下载 vue.js 文件）

去网站 <https://cdn.jsdelivr.net/npm/vue/> 下载 vue.js 文件，直接放到工程文件里，然后引用。

3、方式三：（NPM的方式安装vue）

```bash
# 最新稳定版
$ npm install vue
```

如果网络不稳定，可以采用下面的方式安装：

```
$ cnpm i vue --save
```

然后在代码中通过下面这种方式进行引用：

```javascript
  import Vue from 'vue'
```

## 利用 vue-cli 新建一个空的项目

Vue 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具为现代化的前端开发工作流提供了开箱即用的构建配置。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。

### 官方代码参考

```
  npm install -g @vue/cli

  vue create my-app

  cd my-app

  npm run serve
```

我们根据上方的参考代码，来看看“利用 vue-cli 新建一个空的项目”的步骤。

### 安装 vue-cli（命令行工具）

安装命令如下：

```bash
# 全局安装 vue-cli
$ npm install -g @vue/cli
```

### 初始化一个 simple 项目

（1）首先执行：

```
  vue create my-app
```

输入上方命令后，会弹出一个选项：

![](http://img.smyhvae.com/20190624_163626.png)

如果是初学者，直接选`default`就行。之后会自动生成一个空的初始化项目，包含了项目目录、以及项目依赖的脚本。

这个空项目的工程文件如下：（请务必仔细研究这个项目的写法和目录结构）

- [2019-06-21-vue-my-app.zip](https://github.com/qianguyihao/web-resource/blob/main/project/2019-06-21-vue-my-app.zip)

我们可以看到这个项目的结构：

![](http://img.smyhvae.com/20190624_160726.png)

- src：项目源码

- .babelrc：ES6编译插件的配置

- index.html：单页面的入口

上方截图中，`npm install `指的是下载各种依赖包，`npm run dev`指的是打开发包，`npm run build`指的是打生产包。

（2）本地运行项目：

```
  cd my-app

  npm run serve
```

浏览器输入`http://localhost:8080/`，就可以让这个空的项目在本地跑起来：

![](http://img.smyhvae.com/20190624_160229.png)

备注：我们在 GitHub上下载的任何Vue有关的项目，第一步都是要首先执行 npm install，安装依赖的 mode_modules，然后再运行。我们发给同事的工程文件，建议不要包含 `node_modules`。

### 构建一个 非 simple 项目

构建一个空的项目，首先执行：

```
$ vue create vuedemo2
```

![](http://img.smyhvae.com/20190624_163726.png)

上图中，选择 `Manually select features`，然后根据提示依次输入：

![](http://img.smyhvae.com/20190624_164305.png)

-  project name：**要求小写**。

- description：默认即可。

- vue-router：需要。

- ESlint：语法检查，初学者可以暂时不需要。

- 单元测试：暂时也不需要。

- e2e test：不需要。

选择 eslint 的配置：

![](http://img.smyhvae.com/20190624_165001.png)

然后让这个空的项目就可以在浏览器上跑起来。

## vue 项目结构分析

![](http://img.smyhvae.com/20180501_2100.png)

- buid：打包配置的文件夹

- config：webpack对应的配置

- src：开发项目的源码
	- App.vue：入口组件。`.vue`文件都是组件。
	- main.js：项目入口文件。

- static：存放静态资源

- `.babelrc`：解析ES6的配置文件

- `.editorcofnig`：编辑器的配置

- `.postcssrc.js`：html添加前缀的配置

- `index.html`：单页面的入口。通过 webpack打包后，会把 src 源码进行编译，插入到这个 html 里面来。

- `package.json`：项目的基础配置，包含版本号、脚本命令、项目依赖库、开发依赖库、引擎等。

### 图片的base64编码

默认是10k以下，建议都通过 base64编码。在配置文件`webpack.base.conf.js`中进行修改：

```
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
```


## 我的公众号

想学习<font color=#0000ff>**更多技能**</font>？不妨关注我的微信公众号：**千古壹号**（id：`qianguyihao`）。

扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：

![](http://img.smyhvae.com/20160401_01.jpg)


---
title: 03-v-on的事件修饰符
publish: true
---

<ArticleTopAd></ArticleTopAd>





## 前言

本文主要内容：

- v-model

- v-for

- v-if

- v-show

## v-model：双向数据绑定


> 重点：**双向数据绑定，只能用于表单元素，或者用于自定义组件**。

之前的文章里，我们通过v-bind，给`<input>`标签绑定了`data`对象里的`name`属性。当`data`里的`name`的值发生改变时，`<input>`标签里的内容会自动更新。

可我现在要做的是：我在`<input>`标签里修改内容，要求`data`里的`name`的值自动更新。从而实现双向数据绑定。该怎么做呢？这就可以利用`v-model`这个属性。

**区别**：

- v-bind：只能实现数据的**单向**绑定，从 M 自动绑定到 V。

- v-model：只有`v-model`才能实现**双向**数据绑定。注意，v-model 后面不需要跟冒号，

**注意**：v-model 只能运用在**表单元素**中，或者用于自定义组件。常见的表单元素包括：input(radio, text, address, email....) 、select、checkbox 、textarea。

代码举例如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="vue.js"></script>
</head>
<body>
<div id="app">

    <form action="#">
    	<!-- 将 input 标签中的value值双向绑定到 Vue实例中的data。注意，v-model 后面不需要跟冒号 -->
        <input type="text" id="username" v-model="myAccount.username">
        <input type="password" id="pwd" v-model="myAccount.userpwd">

        <input type="submit" v-on:click="submit1" value="注册">

    </form>
</div>
</body>

<script>
    var vm = new Vue({
        el: '#app',
        //上面的标签中采用v-model进行双向数据绑定，数据会自动更新到data里面来
        data: {
            name: 'qianguyihao',
            myAccount: {username: '', userpwd: ''}
        },
        //在methods里绑定各种方法，根据业务需要进行操作
        methods: {
            submit1: function () {
                alert(this.myAccount.username + "  pwd=" + this.myAccount.userpwd);
            }
        }
    });
</script>

</html>
```

此时，便可实现我们刚刚要求的双向数据绑定的效果。

## v-model举例：实现简易计算器

题目：现在两个输入框，用来做加减乘除，将运算的结果放在第三个输入框。

实现代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="vue2.5.16.js"></script>
</head>

<body>
    <div id="app">
        <input type="text" v-model="n1">

        <select v-model="opt">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>

        <input type="text" v-model="n2">

        <input type="button" value="=" @click="calc">

        <input type="text" v-model="result">
    </div>

    <script>
        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {
                n1: 0,
                n2: 0,
                result: 0,
                opt: '+'
            },
            methods: {
                calc() { // 计算器算数的方法
                    // 逻辑判断：
                    switch (this.opt) {
                        case '+':
                            this.result = parseInt(this.n1) + parseInt(this.n2)
                            break;
                        case '-':
                            this.result = parseInt(this.n1) - parseInt(this.n2)
                            break;
                        case '*':
                            this.result = parseInt(this.n1) * parseInt(this.n2)
                            break;
                        case '/':
                            this.result = parseInt(this.n1) / parseInt(this.n2)
                            break;
                    }

                    //上面的逻辑判断，可能有点啰嗦，我们还可以采取下面的这种方式进行逻辑判断
                    // 注意：这是投机取巧的方式，正式开发中，尽量少用
                    // var codeStr = 'parseInt(this.n1) ' + this.opt + ' parseInt(this.n2)'
                    // this.result = eval(codeStr)
                }
            }
        });
    </script>
</body>

</html>
```

注意上方代码中的注释，可以了解下`eval()`的用法。

## Vue中通过属性绑定为元素设置class 类样式

注意，是**类样式**。

### 引入

我们先来看下面这段代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .my-red {
            color: red;
        }

        .my-thin {
            /* 设置字体的粗细 */
            font-weight: 200;
        }

        .my-italic {
            font-style: italic;
        }

        .my-active {
            /* 设置字符之间的间距 */
            letter-spacing: 0.5em;
        }
    </style>
</head>

<body>
    <h1 class="my-red my-thin">我是千古壹号，qianguyihao</h1>
</body>

</html>
```

上面的代码中，我们直接通过正常的方式，给`<h1>`标签设置了两个 class 类的样式。代码抽取如下：

```html
    <h1 class="my-red my-thin">我是千古壹号，qianguyihao</h1>
```

上面的效果，我们还可以用Vue来写。这就引入了本段要讲的方式。

### 方式一：数组

**方式一**：直接传递一个数组。注意：这里的 class 需要使用  v-bind 做数据绑定。

代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="vue2.5.16.js"></script>
    <style>
        .my-red {
            color: red;
        }

        .my-thin {
            /* 设置字体的粗细 */
            font-weight: 200;
        }

        .my-italic {
            font-style: italic;
        }

        .my-active {
            /* 设置字符之间的间距 */
            letter-spacing: 0.5em;
        }
    </style>
</head>

<body>
    <div id="app">

        <!-- 普通写法 -->
        <h1 class="my-red my-thin">我是千古壹号，qianguyihao</h1>

        <!-- vue的写法1：数组的形式 -->
        <h1 :class="['my-red', 'my-thin']">我是qianguyihao，千古壹号</h1>

    </div>

    <script>

        var vm = new Vue({
            el: '#app'
        });

    </script>
</body>

</html>
```

代码抽取如下：

```html
        <!-- vue的写法1：数组的形式 -->
        <h1 :class="['my-red', 'my-thin']">我是qianguyihao，千古壹号</h1>
```

上方代码中，注意，数组里写的是字符串；如果不加单引号，就不是字符串了，而是变量。

演示效果如下：

![](http://img.smyhvae.com/20180509_1058.png)

### 写法二：在数组中使用三元表达式

```html
<body>
    <div id="app">
        <!-- vue的写法2：在数组中使用三元表达式。注意格式不要写错-->
        <!-- 通过data中布尔值 flag 来判断：如果 flag 为 true，就给 h1 标签添加`my-active`样式；否则，就不设置样式。 -->
        <h1 :class="[flag?'my-active':'']">我是qianguyihao，千古壹号</h1>
    </div>

    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                flag:true
            }
        });
    </script>
</body>
```

上方代码的意思是，通过data中布尔值 flag 来判断：如果 flag 为 true，就给 h1 标签添加`my-active`样式；否则，就不设置样式。

注意，三元表达式的格式不要写错了。


### 写法三：在数组中使用 对象 来代替 三元表达式（提高代码的可读性）

上面的写法二，可读性较差。于是有了写法三。

**写法三**：在数组中使用**对象**来代替**三元表达式**。

代码如下：

```html
<body>
    <div id="app">
        <!-- vue的写法3：在数组中使用对象来代替三元表达式。-->
        <h1 :class="[ {'my-active':flag} ]">我是qianguyihao，千古壹号</h1>
    </div>

    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                flag: true
            }
        });
    </script>
</body>
```

### 写法四：直接使用对象

写法四：直接使用对象。代码如下：

```html
        <!-- vue的写法4：直接使用对象-->
        <!-- 在为 class 使用 v-bind 绑定 对象的时候，对象的属性是类名。由于 对象的属性名可带引号，也可不带引号，所以 这里我没写引号；  属性的值 是一个标识符 -->
        <h1 :class="{style1:true, style2:false}">我是qianguyihao，千古壹号</h1>
```

上方代码的意思是，给`<h1>`标签使用样式`style1`，不使用样式`style2`。注意：

1、既然class样式名是放在对象中的，这个样式名不能有中划线，比如说，写成`:class="{my-red:true, my-active:false}`，是会报错的。

2、我们也可以对象通过存放在 data 的变量中。也就是说，上方代码可以写成：

```html
<body>
    <div id="app">
        <!-- vue的写法4：直接使用对象-->
        <!-- 在为 class 使用 v-bind 绑定 对象的时候，对象的属性是类名。由于 对象的属性名可带引号，也可不带引号，所以 这里我没写引号；  属性的值 是一个标识符 -->
        <h1 :class="classObj">我是qianguyihao，千古壹号</h1>
    </div>

    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                classObj:{style1:true, style2:false}
            }
        });
    </script>
</body>
```

## Vue中通过属性绑定为元素设置 style 行内样式

注意，是行内样式（即内联样式）。

### 写法一

**写法一**：直接在元素上通过 `:style` 的形式，书写样式对象。

例如：

```html
        <h1 :style="{color: 'red', 'font-size': '20px'}">我是千古壹号，qianguyihao</h1>
```

### 写法二

**写法二**：将样式对象，定义到 `data` 中，并直接引用到 `:style` 中。

也就是说，把写法一的代码改进一下。代码如下：

```html
<body>
    <div id="app">
        <h1 :style="styleObj">我是千古壹号，qianguyihao</h1>
    </div>

    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                styleObj: { color: 'red', 'font-size': '20px' }
            }
        });
    </script>
</body>
```

### 写法三

写法二只用到了一组样式。如果想定义**多组**样式，可以用写法三。

**写法三**：在 `:style` 中通过数组，引用多个 `data` 上的样式对象。

代码如下：

```html
<body>
    <div id="app">
        <h1 :style="[ styleObj1, styleObj2 ]">我是千古壹号，qianguyihao</h1>
    </div>

    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                styleObj1: { color: 'red', 'font-size': '20px' },
                styleObj2: { 'font-style': 'italic' }
            }
        });
    </script>
</body>
```


## v-for：for循环的四种使用方式

**作用**：根据数组中的元素遍历指定模板内容生成内容。

### 引入

比如说，如果我想给一个`ul`中的多个`li`分别赋值1、2、3...。如果不用循环，就要挨个赋值：

```html
<body>
  <div id="app">
    <ul>
      <li>{{list[0]}}</li>
      <li>{{list[1]}}</li>
      <li>{{list[2]}}</li>
    </ul>
  </div>
</body>

<script>
  var vm = new Vue({
    el: '#app',
    data: {
      list: [1, 2, 3]
    }

  });
</script>
```

效果：

![](http://img.smyhvae.com/20180329_1713.png)

为了实现上面的效果，如果我用`v-for`进行赋值，代码就简洁很多了：

```html
<body>
  <div id="app">
    <ul>
      <!-- 使用v-for对多个li进行遍历赋值 -->
      <li v-for="item in list">{{item}}</li>
    </ul>
  </div>
</body>

<script>
  var vm = new Vue({
    el: '#app',
    data: {
      list: [1, 2, 3]
    }

  });
</script>
```

接下来，我们详细讲一下`v-for`的用法。需要声明的是，Vue 1.0的写法和Vue 2.0的写法是不一样的。本文全部采用Vue 2.0的写法。

### 方式一：普通数组的遍历

针对下面这样的数组：

```html
<script>
  new Vue({
    el: '#app',
    data: {
      arr1: [2, 5, 3, 1, 1],
    }
  });
</script>
```

将数组中的**值**赋给li：

```html
      <li v-for="item in arr1">{{item}}</li>
```

将数组中的**值和index**赋给li：


```html
      <!-- 括号里如果写两个参数：第一个参数代表值，第二个参数代表index 索引 -->
      <li v-for="(item,index) in arr1">值：{{item}} --- 索引：{{index}}</li>
```

效果如下：

![](http://img.smyhvae.com/20180329_1856.png)

### 方式二：对象数组的遍历

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="vue2.5.16.js"></script>
    <style>
    </style>
</head>

<body>
    <div id="app">
        <ul>
            <!-- 对象数组的遍历。括号里如果写两个参数：第一个参数代表数组的单个item，第二个参数代表 index 索引-->
            <li v-for="(item, index) in dataList">姓名：{{item.name}} --- 年龄：{{item.age}} --- 索引：{{index}}</li>

        </ul>
    </div>

    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                //对象数组
                dataList: [
                    { name: 'smyh', age: '26' },
                    { name: 'vae', age: '32' },
                    { name: 'xiaoming', age: '20' }
                ]
            }
        });
    </script>
</body>

</html>

```

效果如下：

![](http://img.smyhvae.com/20180509_1500.png)

### 方式三：对象的遍历

针对下面这样的对象：

```html
<script>
  new Vue({
    el: '#app',
    data: {
      obj1: {
        name: 'qianguyihao',
        age: '26',
        gender: '男'
      }
    }
  });
</script>
```

将上面的`obj1`对象的数据赋值给li，写法如下：

```html
<body>
  <div id="app">
    <ul>
      <!-- 括号里如果写两个参数：则第一个参数代表value，第二个参数代表key -->
      <li v-for="(value,key) in obj1">值：{{value}} --- 键：{{key}} </li>

      <h3>---分隔线---</h3>

      <!-- 括号里如果写三个参数：则第一个参数代表value，第二个参数代表key，第三个参数代表index -->
      <li v-for="(value,key,index) in obj1">值：{{value}} --- 键：{{key}} --- index：{{index}} </li>
    </ul>
  </div>
</body>

```

效果如下：

![](http://img.smyhvae.com/20180329_1850.png)

### 方式四：遍历数字

`in`后面还可以直接放数字。举例如下：

```html
        <ul>
            <!-- 对象数组的遍历 -->
            <!-- 注意：如果使用 v-for 遍历数字的话，前面的 myCount 值从 1 开始算起 -->
            <li v-for="myCount in 10">这是第 {{myCount}}次循环</li>
        </ul>
```

效果如下：

![](http://img.smyhvae.com/20180509_1505.png)

### v-for中key的使用注意事项

**注意**：在 Vue 2.2.0+ 版本里，当在**组件中**使用 v-for 时，key 属性是必须要加上的。

这样做是因为：每次 for 循环的时候，通过指定 key 来标示当前循环这一项的**唯一身份**。

> 当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用 “**就地复用**” 策略。如果数据项的顺序被改变，Vue将**不是移动 DOM 元素来匹配数据项的顺序**， 而是**简单复用此处每个元素**，并且确保它在特定索引下显示已被渲染过的每个元素。

> 为了给 Vue 一个提示，**以便它能跟踪每个节点的身份，从而重用和重新排序现有元素**，你需要为每项提供一个唯一 key 属性。

key的类型只能是：string/number，而且要通过 v-bind 来指定。

代码举例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="vue2.5.16.js"></script>
</head>

<body>
    <div id="app">

        <div>
            <label>Id:
                <input type="text" v-model="id">
            </label>

            <label>Name:
                <input type="text" v-model="name">
            </label>

            <input type="button" value="添加" @click="add">
        </div>

        </p>
    </div>


