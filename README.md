# youtube-thumbnails [![npm](https://img.shields.io/npm/dt/youtube-thumbnails.svg?style=flat-square)](https://www.npmjs.com/package/youtube-thumbnails)
Get a youtube thumbnails
## Instalation
```sh
$ npm install youtube-thumbnails
```
#Methods
---
call the module
```javascript
const youthumb = require('youtube-thumbnails');
```
### youthumb.all(id, callback)
Get all the available youtube thumbnails for a given id.
#### id
The id from the youtube video you want a thumbnail from.
>like "dlte2Mfg614" from https://www.youtube.com/watch?v=dlte2Mfg614

#### callback(thumbnails)
return an object, thumbnails, with all the links.
#### Example
```javascript
youthumb.all('dlte2Mfg614', (thumbnails) => {
    console.log(thumbnails);
});
```
##### Result:
```
{
  default: 'https://i.ytimg.com/vi/dlte2Mfg614/default.jpg',
  medium: 'https://i.ytimg.com/vi/dlte2Mfg614/mqdefault.jpg',
  high: 'https://i.ytimg.com/vi/dlte2Mfg614/hqdefault.jpg',
  standard: 'https://i.ytimg.com/vi/dlte2Mfg614/sddefault.jpg',
  maxres: 'https://i.ytimg.com/vi/dlte2Mfg614/maxresdefault.jpg'
 }
```
#### youthumb.get(id, quality, callback)
Get a single youtube thumbnail link in the quality you specify.
#### id
The id from the youtube video you want a thumbnail from.
>like "la9C0n7jSsI" from https://www.youtube.com/watch?v=la9C0n7jSsI

#### quality
The quality on the youtube picture.

#### callback(error, thumbnail)
return an error if there was an error else it return a thumbnail link.

#### Example
```javascript
youthumb.get('la9C0n7jSsI', 'maxres', (err, thumbnail) => {
    if (err)
        console.log(err);
    else {
        console.log(thumbnail);
    }
});
```
##### Result:
```
https://i.ytimg.com/vi/la9C0n7jSsI/maxresdefault.jpg
```
### Version
1.1.0
License
----

MIT
