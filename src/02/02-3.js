var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
const combined = [...array1, ...array2];    // ['one', 'two', 'three', 'four']
const [first, second, three='empty', ...others] = array1;   // first:'one', second:'two', three:'empty',  others:[]

var objectOne = {one: 1, two: 2, other: 0};
var objectTwo = {three: 3, four: 4, other: -1};
var combined2 = {
    one: objectOne.one,
    two: objectOne.two,
    three: objectTwo.three,
    four: objectTwo.four
};
var combined3 = Object.assign({}, objectOne, objectTwo);
    // 병합 내장함수 assign => {}객체에 One, Two 병합. 겹치는 원소는 나중에 들어온 원소로 덮음(other: 0 -> -1)
var others = Oobject.assign({}, combined3);
    // 1, 2, 3, 4, -1
var combined4 = {
    ...objectOne,
    ...objectTwo,
};  // 내장함수 없이 병합. 중복된 원소의 결과도 동일.

// const 고정. 초기 선언 이후 값 변경 불가.
// let 가변. 값 변경 가능.