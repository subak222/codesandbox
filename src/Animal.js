export class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }
  makeNoise(sound = "Loud Noise") {
    console.log(sound);
  }
  get metaData() {
    return `Type: ${this.type}, legs: ${this.legs}`;
  }
  static return10() {
    return 10;
  }
}

export class Cat extends Animal {
  makeNoise(sound = "meow") {
    console.log(sound);
  }
}

//challenge index.js에서 두 클래스 불러와서 사용해보기
//promise, fetch, async, await, set 추가로 블로그 정리
//통일성, 그림 잇으면, 설명 충분하면, 제목을 잘 짜야, 코드를 복붙하기 쉽게
