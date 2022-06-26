let words = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
let queries = ["fro??", "????o", "fr???", "fro???", "pro?"];

// let q = queries[3].replaceAll("?", ".");
// const pattern = new RegExp(q, "g");
// for(let word of words){
//     console.log(pattern.test(word));
// }

// length 체크 필요

// 코딩 테스트 환경에 따라서, replaceAll이나 for-of문이 안 될 수도 있다
// for(let rawQueries of queries){
    // let q = rawQueries.replaceAll("?", ".");
function solution1(words, queries){
    let answer = [];
    for(let i = 0; i<queries.length; i++){
        let rawQueries = queries[i];
        let q = rawQueries.replace(/\?/g, ".");
        const pattern = new RegExp(q, "g");
        let matchCount = 0;
        for(let word of words){
            let isMatch = pattern.test(word);
            if(isMatch && word.length === rawQueries.length){
                matchCount++;
            }
        }
        answer.push(matchCount);
    }
    return answer;
}


// 링크드 리스트 이용한 방법도 있음 (효율성 테스트 통과 위해서)

// [{'f':2}, {'r':2}, {'o':2}, {'d':1, 'n':1}, {'o':1, 't':1}]
// [[{}], [{},{}], [{},{},{}], [{},{},{},{}], [{},{},{},{},{}]...

// let 트라이 = []
// for (let i = 0; i < 10; i++) {
//     let insertArray = []
//     for (let j = 0; j < i + 1; j++) {
//         insertArray.push({})
//     }
//     트라이.push(insertArray)
// }

// /// - ///

// function solution (words){
//     let 트라이 = []
//     for (let i = 0; i < 10; i++) {
//         let insertArray = []
//         for (let j = 0; j < i + 1; j++) {
//             insertArray.push({})
//         }
//         트라이.push(insertArray)
//     }
//     return answer
// }

// solution(['frodo', 'front'])

// function solution(words){
//     let trie = [];
//     for (let i = 0; i < 10; i++) {
//         // let insertArray = []
//         //         for (let j = 0; j < i + 1; j++) {
//         //             insertArray.push({})
//         //         }
//         //         트라이.push(insertArray)
//         for(let word of words){
//             for(let index in word){
//                 let char = word[i];
//                 if(char in trie[word.length - 1][index][char]){
//                     trie[word.length - 1][index]++;
//                 }
//                 else{
//                     trie[word.length - 1][index] = 1;
//                 }
//             }
//         }
//     }
//     return trie;
// }

// solution(["frodo", "front"]);

// 더 효율적으로 풀기

class Node{
    constructor(){
        this.children = {};
        this.count = 0;
    }
}

class Trie{
    constructor(){
        this.root = new Node();
    }

    insertData(word){
        let current = this.root;
        current.count += 1;
        for (const char of word) {
            let child = current.children[char];
            if(!child){
                child = new Node();
                current.children[char] = child;
            }
            child.count += 1;
            current = child;
        }
    }

    search(query){
        let current = this.root;
        for(const q of query){
            if(q === "?"){
                return current.count;
            }
            else if(!current.children[q]){
                return 0;
            }

            current = current.children[q];
        }
    }
}

function solution(words, queries){
    let answer = [];
    const trieArr = Array(10001);
    const trieReverseArr = Array(10001);

    for (const word of words) {
        const length = word.length;
        const trie = trieArr[length] ? trieArr[length] : new Trie();
        const trieReverse = trieReverseArr[length] ? trieReverseArr[length] : new Trie();

        trie.insertData(word);
        trieReverse.insertData([...word].reverse().join(""));

        trieArr[length] = trie;
        trieReverseArr[length] = trieReverse;
    }

    for (const query of queries) {
        if(!trieArr[query.length]){
            answer.push(0);
            continue;
        }

        let count;

        if(query[0] !== "?"){
            count = trieArr[query.length].search(query);
        }
        else{
            count = trieReverseArr[query.length].search([...query].reverse().join(""));
        }
        answer.push(count);
    }
    return answer;
}

solution(words, queries);