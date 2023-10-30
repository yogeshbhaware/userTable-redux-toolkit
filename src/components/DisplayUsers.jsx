import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components";
import  {MdDeleteForever} from "react-icons/md"
import { removeUser } from '../store/slices/UserSlice';

const DisplayUsers = () => {
    const data = useSelector((state) => {
       return state.users ;
    })

    const dispatch = useDispatch();

    const deleteUser = (payload) => {
        dispatch(removeUser(payload))
    }

  return (
    <Wrapper>
        {
            data.map((user, id)=> {
                return(
                    <LI key={id}>{user}
                    <button onClick={()=> deleteUser(id)} className='btn-delete'><MdDeleteForever className="delete-icon"/></button></LI>
                )
            })
        }
    </Wrapper>
  )
}

const Wrapper = styled.section`
`

const LI = styled.li`
    display : flex;
    justify-content: space-between;
    margin: 3px;
`
export default DisplayUsers