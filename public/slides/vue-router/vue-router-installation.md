### Installation de Vue Router

<div class="r-stack">

<div class="fragment fade-out" data-fragment-index="1">

* Étant donné un projet Vue existant
* Dans le répertoire qui contient `package.json`
  * `npm i vue-router`

</div>

<div class="fragment fade-in" data-fragment-index="1">

* Création de router dans un module apart.

<div data-external-example="https://play.vuejs.org/#eNq1V1tv2zYU/iucNsByYUvbWvRBdYKsQYB0aLai68OAuEAUiY7ZSKRAUo4NT/99Hy+6OXbQh82AY+nw8Fy+75xDZh+UKePRNxUkASsrITXZk0zSVNPfqoo0ZCVFSSabmk7eLbnXkKLWVPqlKHavg3Wzs11Mqyryu5e8MxziO11yQqJa0dAZcO+lqLkOJz9i32T6LpgF3gDiW2haVgUMnBtNQhY52/hHvDgj84LxR6LF2TKIl8H5tSjpwgdol87JP8dU10xpIXdmh3sab/L+4t7hUd8bRp9IfKC9iLuwkY3TPIr3DS3h2PufeeFnB7XnYRkAibmzsQxGgJtMW6Uo9gID3KGesz9WdbJOG0QJrjzPipyRW5fSnlSpXidkEk8Qn4BNTrlOOvfN7FDP4/pc3Udhdnw99CjhcZh9uHdmvbHkGF7h1Pt2MeOlmVq7dGszz+kqrYvWAYhwiMzLtAIZgoMO62XpF9QySIj3O0Y9wfta60olcVzz6vEhQmpxr3HxJnod/QzylR5II6rK+b0UT8qyvwx8uMvgAkpxTjdaiELN04qdcvFM8eJt9Db6JS7YfQzrMeM53VrbxnQDBJCmVgB2xR4OkjRssILKPyvNAPwo2bQoxNPvVqZlTbtAszXNHo/Iv6mtC/mTpMhugxrq1nQqH6h2y1d//UG3eO4WS5HXBbRfWPxMlShqE6NTe1/zHGEP9Gy0HyxnjD98UVdbTblqkzKBWjSsviXy8oXU+3BfR28GKA7aycwhlUlWaaKorivb7b69MMsuC5Y9Xgohc8ZRo6rvsyOLttm63XDyvtZa8FFvOtGgNc0O1ywYHANHDbrmiI/QtMEidiGbcfTiEMWwnd9bj62IkM18JSSGZO+MMD507QrOfZKBVvJId6N9EQQYsX8vzKng/ZyelkvukO8R+M+xP46lhRIDg3H6SYpKhbeTfnHy1c2VfqPEHNrQxP9+QPwvcoE66zYrvSuomXY9RFZk1fxEtFahE07J2fnASdhvOqD4kOSFQ5okzt1FZsKCI1GBHWfQsdIxMmIBr24jRklFc0+Yt9n2jvlUQjHTUwlJ723bujxsFyE8Y6MjdXDk/K+s+jPje7vjGXTrX/sbAZ6tTBRt0Raszf54k3TXilO90G5PsiJVaqQASsL9sCyjLWmaGRnLkFkzXeAMcKHFNrbvoC9yvOdD/jQm8DynmZCpoxF3HzrXa5xgD+sTVB7B9OByI+lqhj9pLnhhrjUYv6iMfHSlMbRJhIqvBYL05hAgpMa1pVTWGRANtzOym/ZLNnqADYjOyNbaGol3EO+ei1sMzsgqLRSq1Ss0bTDmBQeC61M04MihRLFKjgwLusKt5u6nvQuhqbZ3M9wrq162MzLSnHaAYjhhvjc764zdjQ111lzRFyg6pATcw1szrLqF4WlhZo4jInSDxeyKNmlR02jFCnPryoz4h6xFaTo01baVceOYDY0Bp2K+q5pnpohImufhnhi+gIk9XkkzyJStSOjFDIZTnlGxItdfbj5e67K4KmiJK+MBMoNQq1qtQ45bd18wrjZcJGOIuphcRsMBOqyyrrf68jDXCGuwgzoXWW1Ci5Df1QYPHxEU5YBtYscrbrxY6fGIX72yHl6Rm5SnD5Tg/xxFidVVJOU5KpIy2QGL4ZEabBEwpv9Tuovc9tj8HNxpu7yODrg+ta5gB4Uwaz2aHrUnjatSm2jQ/AuTjNXB"></div>

```javascript not-runnable
import { createMemoryHistory, createRouter } from "vue-router";
import AppHome from "./AppHome.vue";
import AppHistory from "./AppHistory.vue";
const routes = [
    { path: '/', component: AppHome },
    { path: '/history', component: AppHistory },
];
const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
export default router
```
</div>

</div>
