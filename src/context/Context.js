import { useState, useEffect, useReducer, useContext } from 'react'
import {createContext} from 'react'
import {dataReducer, userReducer} from './Reducers'

const usersData = createContext();

const Context = ({children}) => {
    const [data, setData] = useState([]);


    const getData = () => {
        fetch('heliverse_mock_data.json')
            .then(function (response) {
                return response.json();
            }).then(function (myJson) {
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])
    
    const [state, dispatch] = useReducer(dataReducer, {
        data : data,
        user : []
    })

    const [userState, userDispatch] = useReducer(userReducer, {
        available : null,
        gender : null,
        domain : ''
    })

    console.log("data");
    return <usersData.Provider value={{ state, dispatch, userState, userDispatch }}>{children}</usersData.Provider>
}

export const ContextState = () => {
    return useContext(usersData);
  };

export default Context;

