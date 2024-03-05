import './index.css'

const HistoryItem = props => {
  const {historyItems, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItems

  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="content-container">
        <p className="time-text">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="app-logo" />
        <p className="app-title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="delete-button"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default HistoryItem
