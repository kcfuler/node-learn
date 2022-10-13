class A {
  // 使用属性之前需要声明
  a: number;
  protected constructor(a:number){
    this.a = a;
  }
}

class B extends A{
  constructor(){
    super(123);
  }
}

let b = new B();

console.log(b);