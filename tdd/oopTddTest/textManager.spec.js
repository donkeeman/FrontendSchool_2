describe("텍스트 관리자", () => {
    let textManager;

    // it 함수 직전에 실행
    beforeEach(() => {
        textManager = new TextManager();
    });

    it("텍스트 값을 전달합니다.", () => {
        const initValue = textManager.getValue();
        expect(textManager.getValue()).toBe(initValue);
    });

    it("텍스트 값을 수정합니다.", () => {
        const newValue = { data: "Hello Zebras" };
        textManager.setValue(newValue);
        expect(textManager.getValue()).toBe(newValue.data);
    });
});
