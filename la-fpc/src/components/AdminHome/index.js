import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'


import DataForm from '../DataForm'

class AdminHome extends Component{

   addData = async (data) => {
    console.log("add data hitting")
    try {
      const addDataResponse = await fetch(`http://localhost:3030/admin/add-data`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await addDataResponse.json()

      this.setState({
        user: parsedResponse.data,
        laoding: false
      })

    } catch(err) {
      console.log(err, 'this is error from add data')
    }
  }
  render(){
    const { addData } = this.addData
    return(
      <div>
        <h1>AD AdminHome</h1>

        <DataForm  addData={addData}/>
      </div>
    )
  }
}

export default AdminHome;