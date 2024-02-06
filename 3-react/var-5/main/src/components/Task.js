function Task (props) {
  let { item, onSelect } = props
  return (
    <>
      {item.description} {item.priority}
      {/* TODO */}
    </>
  )

}

export default Task
