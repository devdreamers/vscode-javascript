// async & await
// clear style of using promise :)
// syntatical sugar (syntatical sugar 또 다른 예 - class : prototype-based inheritance )

// 1. async
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         // do network request in 10 secs...
//         resolve('ellie');
//     });
// }

// const user = fetchUser();
// user.then(console.log);
// console.log(user);

async function fetchUser() {  // Promise를 직접 사용하지 않아도 async를 사용하면 Promise로 바로 만들 수 있음
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
// async가 붙은 함수 안에서만 사용 가능 
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

// function pickFruits() { // 과도한 체이닝 -> async 활용
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }
// pickFruits().then(console.log); 

// async function pickFruits() {   // apple과 banana의 경우 관계가 없는데 순차적으로 기다렸다가 실행 되게 됨
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
// }
// pickFruits().then(console.log);

async function pickFruits() {   // 해당 코드도 깔끔하지 않음 -> Primise all 사용
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 3. userful Promise API
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => 
        fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);