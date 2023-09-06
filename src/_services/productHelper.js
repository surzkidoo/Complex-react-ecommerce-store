export const FindOneAny = (arrays, id, key) => {
  let tempIndex;
  return arrays.map((obj, index) => {
    if (obj[key] === id) {
      tempIndex = index;
      return obj;
    }
  })[tempIndex];
};

export const FindOneAnyAsync = (arrays,id) => {
  return new Promise((resolve, reject) => {
    let data = arrays.find((ele) => ele.product_id === id);
    console.log('dd')
    if (data) {
      resolve(data);
    } else {
      reject("error");
    }
  });
};

var  handlerecursive=(cat,id,tag)=>{
  if(cat.category_id == id){
    console.log("heesd")

    return tag = [...tag,cat.category_name]
  }
  else{

  if(cat.subcategory.length > 0){
    tag = [...tag,cat.category_name]
 
   let  Rtag = handlerecursive(cat.subcategory,id,tag)
    return [...tag,...Rtag]
    
  }else{
    
    return []
  }
}
}
export const handleTag = (cats,id,tag) => {
  return new Promise((resolve, reject) => {
    cats.forEach((cat)=>{
      let Rtag = handlerecursive(cat,id,tag)
      console.log(Rtag)
    })
    if (tag) {
      resolve(tag);
    } else {
      reject("error");
    }
  });
};
