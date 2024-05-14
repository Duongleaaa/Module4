import React, { useState } from "react";
import JobItem from "./JobItem";
import { v4 as uuidv4 } from "uuid";
///khai báo kiểu dữ liệu
type Job = {
  id: string;
  name: string;
  status: boolean;
};

export default function TodoList() {
  //state lưu trữ giá trị trong input
  let [inputValue, setInputValue] = useState<string>("");
  //state kiểm tra trạng thái ẩn hiện.
  let [showError, setShowError] = useState<boolean>(false);
  // state đẩy lên local
  let [jobLocal, setJobLocal] = useState<Job[]>(
    // truyền vào callback
    () => {
      // b1:lấy dữ liệu trên local
      let listJobLocal = localStorage.getItem("jobs");

      //kiểm tra có datta ko, nếu có ép kiểu, ko thì mảng rỗng.
      let listJob = listJobLocal ? JSON.parse(listJobLocal) : [];
      return listJob;
      //==> trả về mảng và gán mảng đó cho state.
    }
  );

  //state fake để render lại
  let [stateFake,setStateFake] = useState<number>(0);
  //lấy giá trị trong input
  let handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //cập nhật lại giá trị của state
    setInputValue(event.target.value);

    //validate dữ liệu đầu vào
    if (!event.target.value) {
      console.log("chưa có value");
      setShowError(true);
    } else {
      setShowError(false);
      console.log(`value hiện tại:${event.target.value}`);
    }
  };

  //hàm thêm mới công việc
  let handleCreateTask = () => {
    //kiểm tra điều kiện input đã có dữ liệu chưa
    if (inputValue) {
      //tạo đối tượng job
      let job: Job = {
        id: uuidv4(),
        name: inputValue,
        status: false,
      };
      console.log(job);

      //đẩy dữ liệu lên local, bảo lưu cái cũ và đẩy cái mới
      jobLocal.push(job);
      localStorage.setItem("jobs", JSON.stringify(jobLocal));

      //reset lại giá trị trong input
      setInputValue("");
    }
  };

  //hàm xử lí thay đổi trạng thái công việc
  let handleChangeStatus = (id:string)=>{
    console.log(id);
    //tìm kiếm vị trí công việc cần cập nhật
    let findIndexJob = jobLocal.findIndex((job:Job)=>job.id === id);

    //thay đổi trạng thái công việc
    if(findIndexJob === -1){
      alert('Khong tim thay');
    }
    else{
      //thay đổi trạng thanis công việc
      jobLocal[findIndexJob].status = !jobLocal[findIndexJob].status;

      //cập nhật lại state của cpn.
      setJobLocal(jobLocal);
      setStateFake(Math.random());

      //lưu lên local
      localStorage.setItem("jobs", JSON.stringify(jobLocal));
    }
  }


  return (
    <>
      <div className="todo-container">
        <h2>ToDo List</h2>
        <div className="input-container">
          <input
            onChange={handleChange}
            type="text"
            id="taskInput"
            placeholder="Add new task..."
            value={inputValue}
          />
          <button onClick={handleCreateTask} className="button">
            Add Task
          </button>
        </div>
        {
          //kiểm tra trả về eror
          showError && <span className="error">Task's name is empty!</span>
        }

        <ul id="taskList">
          {/* render danh sách cv ra ngoài giao diện */}
          {jobLocal.map((job: Job) => (
            <JobItem job={job} handleChangeStatus = {handleChangeStatus}></JobItem>
          ))}
        </ul>
        <p>
          Tasks completed: <span id="completedTasks">0</span>
        </p>
      </div>
    </>
  );
}
