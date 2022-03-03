var string1 = '안녕하세요';
var string2 = '반갑습니다.';
var greeting = string1 + ' ' + `${string2}`;  // `${변수}` => 템플릿 문자열 : '\n'를 사용하지 않아도 줄바꿈이 허용. (코드에서 줄이 다르면 출력도 달라짐)
var product = {name: '도서', price: '4200원'};
var message = '제품' + product.name + '의 가격은 ' + product.price + '입니다.';
var multiLine = '문자열1\n문자열2';     // 줄바꿈은 '\n'를 문자열에 포함시키면 적용 가능
var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = '곱셈은 ' + (value1 * value2) + '입니다.';
var operator2 = '논리값은 ' + (boolValue? '참' : '거짓') + '입니다.';


/* 템플릿 문자열 예시 */
var cart = {name: '장비', price: 1500};
var getTotal = function(cart) {
    return cart.price + '원';
};
var myCart = '장바구니에 '+cart.name+'가 있습니다. 총 금액은 '+getTotal(cart) + '입니다.';

var getTotal2 = function(cart) {
    return `${cart.price}원`;
}
var myCart2 = `장바구니에 ${cart.name}가 있습니다. 총 금액은 ${getTotal(cart)}입니다.`;
