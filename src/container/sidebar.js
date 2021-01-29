import React, {useState, useContext, useEffect} from 'react'
import {JobContext} from '../context/jobContext'
import { Sidebar }from '../components'

export default function SidebarContainer() {
    const { state, dispatch } = useContext(JobContext)
    const { fulltime } = state
    const [selectedCity, setSelectedCity] = useState(null)
    const [location, setLocation] = useState("");

    const addFilter = (filter) => {
        switch (filter.type) {
            case "LOCATION":
                dispatch(filter.value);
                break;
            case "FULLTIME":
                dispatch(filter.value);
                break;
            case "DESCRIPTION":
                dispatch(filter.value);
                break;
        }
    };

    const handleCity = (location) => {
        if (selectedCity && location.id === selectedCity.id) {
            setSelectedCity(null);
            addFilter({ type: "LOCATION", value: "" });
        } else {
            setSelectedCity(location);
            addFilter({ type: "LOCATION", value: location.name });
        }
    };

    const handleLocation = (e) => {
        if (e.key === "Enter") {
            setSelectedCity(null);
            addFilter({ type: "LOCATION", value: location });
        }
    };

    const handleClick = () => {
        dispatch(!fulltime);
        addFilter({ type: "FULLTIME", value: false });
    };
    useEffect(() => {
        setSelectedCity(locations[0]);
        addFilter({ type: "CITY", value: locations });
    }, []);

    const locations = [
        { id: 1, name: "London" },
        { id: 2, name: "Amsterdam" },
        { id: 3, name: "New York" },
        { id: 4, name: "Berlin" }
    ]


    return (
        <Sidebar>
            <Sidebar.Label>
                <Sidebar.Input
                type="checkbox"
                id="fulltime"
                checked={fulltime}
                onChange={handleClick}
                />                
                Full Time
            </Sidebar.Label>

            <Sidebar.Label>Location</Sidebar.Label>
                <Sidebar.Input
                 type="text"
                 id="city"
                 value={location}
                 onChange={(e) => setLocation(e.target.value)}
                 onKeyDown={handleLocation}
                 placeholder="City, state, zip code or country"
                />
            
            <Sidebar.Cities>
            {locations.map((location) => (
                    <Sidebar.CitiInner className="checkbox" key={location.id}>
                        <Sidebar.Input
                            type="checkbox"
                            checked={selectedCity ? location.id === selectedCity.id : false}
                            id={location.id}
                            onChange={() => handleCity(location)}
                        />
                        <Sidebar.Label htmlFor={location.id}>{location.name}</Sidebar.Label>
                    </Sidebar.CitiInner>
                ))}
            </Sidebar.Cities>


        </Sidebar>
    )
}