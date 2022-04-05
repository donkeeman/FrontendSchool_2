## HTML Living standard
* HTML Living Standard (html.spec.whatwg.org) Multipage Version

## HTML 요소
* 시맨틱한 마크업으로 코딩한다?
    * 유지보수 측면 : 다른 사람이 해당 코드를 보고 유지보수를 쉽게 할 수 있도록
    * 검색 엔진: 검색 엔진이 해당 마크업을 읽고 태그를 파악하여 페이지에 노출할 수 있도록
* h1 ~ h6는 익명 영역(anonymous section) 을 생성
* meta에 "og:title"
    * Open Graph Protocol (Facebook)
    * https://ogp.me/
        ```html
        <head>
        <title>The Rock (1996)</title>
        <meta property="og:title" content="The Rock" />
        <meta property="og:type" content="video.movie" />
        <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
        <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
        ...
        </head>
        ```
* meta에 "twitter:descirption" (twitter)
    * https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
* Entity Code
    * https://entitycode.com/
* Table : div만으로도 table을 만들 수도 있으나 요즘은 사용하지 않습니다.
    * https://urliveblogger.blogspot.com/2021/01/css-display-table.html


