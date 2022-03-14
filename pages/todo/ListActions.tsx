import React, { memo, useState } from 'react'
import { Checkbox } from 'evergreen-ui'
import styles from '../../styles/todo.module.css'

const ListActions = ({ listActions, onToggle }) => {
  return (
    <div className={styles.list_action}>
      {listActions.map((item) => (
        <div className={styles.list_action_item} key={item.id}>
          <div className="name">{item.name}</div>
          <div className="checkbox">
            <Checkbox
              onChange={onToggle}
              value={`${item.id}`}
              checked={item.checked}
              label="Is good habit?"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default memo(ListActions)
