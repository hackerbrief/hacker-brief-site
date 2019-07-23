# HACKER BRIEF :: STORE

* This directory contains your Vuex Store files.
* Vuex Store option is implemented in the Nuxt.js framework.
* Creating a file in this directory automatically activates the option in the framework.
* [Nuxt.js | Vuex Store](https://nuxtjs.org/guide/vuex-store)

Getters
```javascript
// INFO
$store.getters.title // => ""
$store.getters.url // => ""
$store.getters.image // => ""
$store.getters.description // => ""
$store.getters.keywords // => ""  

// SOCIALS
$store.getters.username // => ""
$store.getters.facebook // => ""
$store.getters.twitter // => ""
$store.getters.instagram // => ""
$store.getters.youtube // => ""
$store.getters.github // => ""

// LANGUAGES
$store.getters.languages // => [{}, {}, ...]

// BLOG
$store.getters.blogTitle // => ""
$store.getters.blogUrl // => ""
$store.getters.blogDescription // => ""
$store.getters.blogImage // => ""
$store.getters.blogTags // => ["", "", ...]

// DIRECTORY
$store.getters.directoryTitle // => ""
$store.getters.directoryUrl // => ""
$store.getters.directoryDescription // => ""
$store.getters.directoryImage // => ""
$store.getters.directoryTags // => ["", "", ...]

// POSTS
$store.getters.posts // => [{}, {}, ...]
$store.getters.indexPosts // => [{}, {}, ...]
$store.getters.postBySlug(slug) // => {}

// TOOLS
$store.getters.tools // => [{}, {}, ...]
$store.getters.indexTools // => [{}, {}, ...]
```
