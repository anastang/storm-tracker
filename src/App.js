import { useState, useEffect } from 'react'
import Map from './components/map'
import Loading from './components/Loading'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState([])
  
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)

    }
  
    fetchEvents()
  }, [])
  
  console.log(eventData)
  
  return (
    <div>
      { !loading ? <Map eventData={eventData} /> :  <Loading />}
    </div>
  );
}

export default App;
