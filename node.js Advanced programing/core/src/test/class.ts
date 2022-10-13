class set {
  has(value:number):boolean{
    return true;
  }
  add(value:number):this{
    return this;
  }
}

class multipleSet extends set{
  has(value:number):boolean{
    return false;
  }
}

let mSet = new multipleSet();
console.log(mSet.add(111))