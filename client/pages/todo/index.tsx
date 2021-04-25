import React, { useCallback, useReducer, useState } from 'react'
import { dummy } from './dummy-data'
import styles from '../../styles/todo.module.css'
import AddNewAction from './AddNewAction'
import ListAction from './ListActions'

const TOGGLE = 'TOGGLE'
const ADD_NEW = 'ADD_NEW'

const reducer = (state, action) => {
  if (action.type === ADD_NEW) {
    return [
      {
        id: Math.random(),
        name: action.payload,
        time: new Date(),
        checked: false,
      },
      ...state,
    ]
  }
  if (action.type === TOGGLE) {
    console.log('sss', state, action)
    return state.map((item) => {
      if (item.id !== parseFloat(action.payload)) return item
      return {
        ...item,
        checked: !item.checked,
      }
    })
  }
  return state
}

const initialState = dummy

const Todo = () => {
  const [actions, dispatch] = useReducer(reducer, initialState)

  const onAddNew = useCallback(
    (newItem) => {
      if (!newItem) return
      dispatch({
        type: 'ADD_NEW',
        payload: newItem,
      })
    },
    [dispatch]
  )

  const onToggle = useCallback(
    (e) => {
      dispatch({
        type: TOGGLE,
        payload: e.target.value,
      })
    },
    [dispatch]
  )

  return (
    <div className={styles.todo}>
      <div className={styles.fact}>
        Fact: Instead of handling action in normal way. Using useReducer to
        separate state into small part can help maintain and optimize re-render
        effectively
      </div>
      <AddNewAction onAddNew={onAddNew} />
      <ListAction listActions={actions} onToggle={onToggle} />
    </div>
  )
}

export default Todo
