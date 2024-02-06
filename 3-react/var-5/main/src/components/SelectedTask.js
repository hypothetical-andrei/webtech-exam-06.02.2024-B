function SelectedTask (props) {
  const { item, onDeselect } = props
  return (
    <div>
      <h1>Details</h1>
      {item.description} {item.priority}
      {/* TODO */}
    </div>
  )
}

export default SelectedTask