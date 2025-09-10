import React from 'react'

export const TodoSummary = ({todos}) => {
    console.log(todos);
    
    const countOfDone = todos.filter(obj=>obj.done)
    const countOfDoneLength = countOfDone.length
    const countOfLength = todos.length
    console.log(countOfLength);
    console.log(countOfDoneLength);
    
    
  return (
    <div>
      <p>{`${countOfLength}/${countOfDoneLength} kész.`}</p>
    </div>
  )
}
