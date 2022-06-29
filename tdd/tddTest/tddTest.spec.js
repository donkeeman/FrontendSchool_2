// describe: 테스트 유닛 모음

describe("jasmine test", () => {
    // it: 함수 테스트 유닛
    it("sum function", () => {
        let num = 30;
        
        // expect: 실행할 함수의 기댓갑을 인수로 전달
        // toBe: 나의 예상과 일치하는지 검사
        expect(plusOne(num)).toBe(31);
    })
});