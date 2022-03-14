import React, { memo, useState } from 'react'
import { TextInput, Button } from 'evergreen-ui'
import styles from '../../styles/todo.module.css'

const AddNewAction = ({ onAddNew }) => {
  console.log('RENDER add new')
  const [content, setContent] = useState(null)
  const handleChange = (e) => {
    setContent(e.target.value)
  }
  const handleAddNew = () => {
    onAddNew(content)
  }
  return (
    <div className={styles.add_new_action}>
      <TextInput placeholder="Please say honestly!" onChange={handleChange} />
      <Button appearance="primary" onClick={handleAddNew}>
        New action
      </Button>
    </div>
  )
}

export default memo(AddNewAction)
