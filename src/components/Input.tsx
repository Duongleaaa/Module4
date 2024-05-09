import React, { useState } from 'react';

export default function Input() {
    //lấy từ local
    let getLocal = localStorage.getItem('taskList');
    let getLocalReal = getLocal? JSON.parse(getLocal) : [];
    console.log(getLocalReal);
  //validate 
  let [inputValue, setInputValue] = useState<string>('');
  let [errorEmpty,setErrorEmpty] = useState<boolean>(false);
  let [errorDup,seterrorDup] = useState<boolean>(false)
  let [taskList,setTaskList] = useState<string[]>(getLocalReal);

  //click thêm
  let handleClick = () => {
    if(inputValue === ''){
      console.log('empty');
      setErrorEmpty(true);
    }
    else{
      console.log(inputValue);
      setErrorEmpty(false);
      //đẩy vào mảng và lưu lên local
      validateDup(taskList,inputValue);
      if(errorDup === true){
        console.log('không lưu do trùng');

      }
      else if(errorDup === false){
        console.log(errorDup);
        console.log('lưu thành công');
        taskList.push(inputValue);
        console.log(taskList);
        localStorage.setItem('taskList',JSON.stringify(taskList));
      }

    }
  };
  //thay đổi input
  let handleInputChange = (e:any) => {
    setInputValue(e.target.value);
  };

  // validate dữ liệu có trùng không
  let validateDup = (taskGet:string[],inputValue:string)=>{
    taskGet.map((e)=>{
      if(e===inputValue){
        console.log('Trùng');
        seterrorDup(true);
      }
      else{
        seterrorDup(false);
      }
    })
  }




  return (
    <>
      <div>
        <input
          style={{ width: '88%', height: '28px', padding: '10px' }}
          type="text"
          placeholder="Add some task..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button style={{ marginLeft: '10px', height: '28px' }} onClick={handleClick}>
          Add
        </button>
      </div>
      <br />
      <p style={{ display: errorEmpty? 'block':'none', color: 'red' }} >Tên công việc không được để trống!</p>
      <p style={{ display: errorDup?'block':'none', color: 'red' }}>Tên công việc không được trùng lặp!</p>
    </>
  );
}