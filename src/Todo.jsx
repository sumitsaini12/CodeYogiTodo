import React, { useState } from 'react'
import Header from './Header'
import H1 from './conponent/H1'
import H3 from './conponent/H3'
import Container from './conponent/Container'
import Button from './conponent/Button'
import CheckBox from './conponent/CheckBox'
import TodoForm from './conponent/TodoForm'


function Todo() {

    const [todoFormVisible, updateTodoFormVisible] = useState(false)

    const [todoList, setTodoList] = useState([]);

    const [doneList, setDoneList] = useState([]);

    const showTodoCard = () => {
        updateTodoFormVisible(true);
        console.log('showTodoCard')

    }

    const hiddenTodoCard = () => updateTodoFormVisible(false);


    const addTodoList = (todo) => {
        setTodoList([...todoList, todo])
    }

    const markAsDone = (todo) => {
        const newTodoList = todoList.filter(t => t !== todo);
        setTodoList(newTodoList);

        setDoneList([...doneList, todo])
    };

    const markAsNotDone = (todo) => {
        const newdoneList = doneList.filter(t => t !== todo);
        setDoneList(newdoneList);

        setTodoList([...todoList, todo]);
    }


    const deleteTodoRow =(todo) =>{

        const newTodoList = todoList.filter(t => t !== todo);
        setTodoList(newTodoList);

        const newDoneList = doneList.filter(t => t !== todo);
        setDoneList(newDoneList);

    }

    return (
        <>
            <Header />
            <Container>
                <div className="pb-12">
                    <H1>Thing to get done</H1>
                </div>
                <div className="pb-5">
                    <H3>Things to do</H3>
                </div>


                {!todoList.length && <span>No todo here !</span>}

                {todoList.map(t => <CheckBox onDelete={deleteTodoRow} done={false} key={t} text={t} onStatusChange={markAsDone}>{t}</CheckBox>)}




                <div className="py-8">

                    {!todoFormVisible && <Button theme="highlight" onClick={showTodoCard} icons="+"> Add to Card</Button>}

                    {
                        todoFormVisible && <TodoForm onClose={hiddenTodoCard} onCreate={addTodoList} />

                    }
                </div>
                <H3>Things done</H3>
                <div className="space-y-2 py-2">

                    {!doneList.length && <span>No Done here !</span>}

                    {doneList.map(t => <CheckBox onDelete={deleteTodoRow} done={true} key={t} onStatusChange={markAsNotDone}>{t}</CheckBox>)}

                </div>


            </Container>

        </>
    )
}

export default Todo;