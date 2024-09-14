import loader from './loading.gif'

const Loading = () => {
  return (
    <div className="loading">
      <img src={loader} alt="Loading" />
      <h1>Fetching Data</h1>
    </div>
  )
}

export default Loading
