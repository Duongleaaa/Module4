function sumNum(a: number | string, b: number | string): number | string {
    if (typeof a === 'string') {
      a = parseFloat(a);
      if (isNaN(a)) {
        return 'Giá trị không hợp lệ';
      }
    }
  
    if (typeof b === 'string') {
      b = parseFloat(b);
      if (isNaN(b)) {
        return 'Giá trị không hợp lệ';
      }
    }
  
    return a + b;
  }
    console.log(sumNum(5, 3)); 
    console.log(sumNum("5", "3")); 
    console.log(sumNum("5", "abc")); 
    
  
  function subNum(a: number | string, b: number | string): number | string {
    if (typeof a === 'string') {
      a = parseFloat(a);
      if (isNaN(a)) {
        return 'Giá trị không hợp lệ';
      }
    }
  
    if (typeof b === 'string') {
      b = parseFloat(b);
      if (isNaN(b)) {
        return 'Giá trị không hợp lệ';
      }
    }
  
    return a - b;
  }
  console.log(subNum(5, 3)); 
  console.log(subNum("5", "3")); 
  console.log(subNum("5", "abc")); 
  
  function multiNum(a: number | string, b: number | string): number | string {
    if (typeof a === 'string') {
      a = parseFloat(a);
      if (isNaN(a)) {
        return 'Giá trị không hợp lệ';
      }
    }
  
    if (typeof b === 'string') {
      b = parseFloat(b);
      if (isNaN(b)) {
        return 'Giá trị không hợp lệ';
      }
    }
  
    return a * b;
  }
  console.log(multiNum(5, 3)); 
  console.log(multiNum("5", "3"));
  console.log(multiNum("5", "abc")); 

  function divNum(a: number | string, b: number | string): number | string {
    if (typeof a === 'string') {
      a = parseFloat(a);
      if (isNaN(a)) {
        return 'Giá trị không hợp lệ';
      }
    }
  
    if (typeof b === 'string') {
      b = parseFloat(b);
      if (isNaN(b)) {
        return 'Giá trị không hợp lệ';
      }
    }
  
    return a / b;
  }
  console.log(divNum(6, 3)); 
  console.log(divNum("6", "3")); 
  console.log(divNum("6", "abc")); 
  


  

  