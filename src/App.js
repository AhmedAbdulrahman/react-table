import React, { Component } from 'react'
import { render } from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";

//Helpers
import { fetchData } from './Helper';

class App extends Component {
	constructor(){
		super();
		this.state = {
			len: 500,
			data: [],
			loading: false,
		};
	}
	componentDidMount() {
		this.handelData(this.state.len);
	}
	handelData(len) {
		this.setState({loading: true})
		fetchData(len)
		.then((response) => {
		  this.setState(() => {
			return {
				data: response.results,
				loading: false
			};
		  });
		})
		.catch((error) => {
		  console.log(error);
		});
	}
	render () {
		const { data } = this.state;
		console.log(this.state.data);
		return (
			<div>
				 <ReactTable
          data={data}
          columns={[
            {
              columns: [
                {
                  Header: "First Name",
				  id: "first",
                  accessor: d => d.name.first
                },
                {
                  Header: "Last Name",
                  id: "last",
                  accessor: d => d.name.last
                },
				{
                  Header: "Gender",
				  id: "genger",
                  accessor: d => d.gender
                },
				{
					Header: "Birthday",
					id: "dob",
					accessor: d => d.dob
				},
                {
                  Header: "Email",
				  id: "email",
                  accessor: d => d.email
                },
              	{
                  Header: "City",
				  id: "city",
                  accessor: d => d.location.city
                },
				{
                  Header: "Phone",
				  id: "phone",
                  accessor: d => d.phone
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
		  loading={this.state.loading}
        />
			</div>
		)
	}
}

render(<App />, document.querySelector("#app"));
