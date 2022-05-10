import React from "react";
import "./../Global.css";

export function Header(){
  
    
    const createTask = (e)=>{
        console.log('opa');
        console.log(e);
    };


    return (
        <header>
        <nav>
            <ul>
                <li className="blob">
                    <div className="mobileTitle">My tasks</div>
                </li>

                <li className="addNewTaskInput">
                    <form  action="">
                        <input className="taskName" type="text" placeholder="Add new task" onChange={createTask}/>
                        <button onSubmit={createTask} className="submitNewTask" type="submit">
                            <img src="https://img.icons8.com/ios-filled/344/chevron-right.png" className="icon8icons"
                                alt=""/>
                        </button>
                    </form>
                </li>

                <li className="burguerMenu">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </li>
            </ul>
        </nav>

        </header>
    )
}