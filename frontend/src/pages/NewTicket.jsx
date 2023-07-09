import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createTicket } from '../features/tickets/ticketSlice'
import BackButton from '../components/BackButton'

function NewTicket() {
  const { user } = useSelector((state) => state.auth)

  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState('Administration')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createTicket({ product, description }))
      .unwrap()
      .then(() => {
        // We got a good response so navigate the user
        navigate('/tickets')
        toast.success('New ticket created!')
      })
      .catch(toast.error)
  }

  return (
    <>
      <BackButton />
      <section className='heading'>
        <h1 style={{color: "#0CAFFF"}}>Create New Ticket</h1>
        <p style={{color:"#8DA399"}}>Please fill out the form below</p>
      </section>

      <section className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Patient Name</label>
          <input type='text' className='form-control' value={name} disabled />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Patient Email</label>
          <input type='text' className='form-control' value={email} disabled />
        </div>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='product'>Department</label>
            <select
              name='product'
              id='product'
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value='Administration'>Administration</option>
              <option value='Cardiology'>Cardiology</option>
              <option value='Dentistry'>Dentistry</option>
              <option value='Dermatology'>Dermatology</option>
              <option value='ENT'>ENT</option>
              <option value='General Surgery'>General Surgery</option>
              <option value='Gastroenterology'>Gastroenterology</option>
              <option value='Laboratory'>Laboratory</option>
              <option value='Nursing'>Nursing</option>
              <option value='Oncology'>Oncology</option>
              <option value='Physiotherapy'>Physiotherapy</option>
              <option value='Pathology'>Pathology</option>
              <option value='Pharmacy'>Pharmacy</option>
              <option value='Radiology'>Radiology</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description of the issue</label>
            <textarea
              name='description'
              id='description'
              className='form-control'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className='form-group' style={{marginBottom:"10px"}}>
            <button style={{backgroundColor:"#8DA399"}} className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default NewTicket
