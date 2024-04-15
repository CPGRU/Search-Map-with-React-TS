import type { Place } from"./api/Place";
import { useState } from "react";
import LocationSearch from "./components/LocationSearch";
import Map from "./components/Map";

function App() {
  const [ place, setPlace ] = useState<Place | null>(null);  //useState === generic func

  return (
  <div className="h-screen w-screen grid grid-cols-12">
    <div className="col-span-3 p">
      <LocationSearch onPlaceClick={(place)=>setPlace(place)}/>
    </div>
    <div className="col-span-4">
      <Map place={place}/>
    </div>
  </div>
  )
}

export default App
