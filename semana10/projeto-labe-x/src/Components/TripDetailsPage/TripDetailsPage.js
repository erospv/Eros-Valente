import React, { useEffect } from 'react';
import axios from 'axios'
import NavBar from '../NavBar/NavBar'
import { WrappAll, Background } from './styles'
import useToken from '../../hooks/useToken'
import useRequestData from '../../hooks/useRequestData'
import { useHistory, useParams } from 'react-router-dom';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/eros-mello"

function TripDetailsPage() {
    const pathParams = useParams()
    const token = useToken()
    const axiosConfig = {
        headers: {
            auth: token
        }
    }

    const trip = useRequestData(`${baseUrl}/trip/${pathParams.id}`, axiosConfig, {}).trip

    const approveApplication = async (approved, candidateId) => {
        const body = {
            approve: approved
        }
        try {
            const response = await axios.put(`${baseUrl}/trips/${pathParams.id}/candidates/${candidateId}/decide`, body, axiosConfig)
            console.log(response.data)
        } catch (error) {
            console.log(error.response)
        }
        

    }

  return ( 
    <div>
        <Background></Background>
        <NavBar />
        {trip && (
        <WrappAll>
            <h1>DETALHES DA VIAGEM</h1>
            <h2>{trip.name}</h2>
            <h2>{trip.planet}</h2>
            <div>
                <ul>
                    {trip.candidates.map(candidate => {
                        return (
                            <div>
                                <li>{candidate.name}</li>
                                <button onClick={() => approveApplication(true, candidate.id)}>aprovar</button>
                                <button onClick={() => approveApplication(false, candidate.id)}>rejeitar</button>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </WrappAll>)}
    </div>
  );
}

export default TripDetailsPage;