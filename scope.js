/*

Scope determines the accessibilty of variables in different parts of the code

There are two types of scope in javascript
1. Global Scope
2. Local Scope

*/

const pataNhi = "kya hi bolega"

function kyuLikhtaHai() {
    const whyWHy = "koi idea nhi hai"
    console.log(whyWHy)
    console.log(pataNhi)
}

kyuLikhtaHai()