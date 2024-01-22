import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { getTodos, reset } from '../features/todo/todoSlice'
import Todo from '../components/Todo'


import TodoForm from '../components/TodoForm';

const Dashboard = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth)
  const { todos, isLoading, isError, isSuccess, message } = useSelector((state) => state.todos)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }

    if (isError) {
      console.log(message)
    }

    dispatch(getTodos())

    return () => {
      if (user) {
        dispatch(reset())
      }
    }
  }, [user, navigate, isError, message, dispatch]
  )

  if (isLoading) {
    return <Spinner />
  }


  return (
    <div>
      <TodoForm />
      <section className='content'>
        {todos.length>0 ? (
          <div className='todos'>
            {todos.map((todo)=>(
              <Todo key={todo.id} t={todo} />
            ))}
          </div>
        ) : (
          <h3>Henüz Yapılacak Eklemediniz</h3>
        )}
      </section>
    </div>
  )
}

export default Dashboard
