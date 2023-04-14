import React from 'react';
import { useParams } from 'react-router-dom';

const SingleProject = () =>{
    const {id} = useParams()
    return (
        <SingleProject>
            Project {id}
        </SingleProject>
    )
}
export default SingleProject