import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
class Contact extends Component{
    render(){
        return(
            <div className = "contact-body">
                <Grid className = "contact-grid">
                    <Cell col = {6}>
                        <h2>Justin Park</h2>
                        <img
                            src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/52766734_2104155156289150_8408591756978814976_n.jpg?_nc_cat=107&_nc_oc=AQlwOfkWPhajeueQ0tRLJwoO5vqyhr_rkZUTdYhowQ8xCyU47tXnjSZy70w7tGEiyic&_nc_ht=scontent-sea1-1.xx&oh=a9d0253673e5ff01cf60c94e8fe0907d&oe=5DBC1D88"
                            alt="avatar"
                            style={{height:"250px"}}
                        />
                        <p style={{ width:"75%", margin:"auto", paddingTop:"1em"}}>University of Washington, Bachelor of Science in Informatics</p>
                        <p style={{ width:"75%", margin:"auto", paddingTop:"1em"}}> Data Science and Information Architect Track in Informatics Major</p>
                    </Cell> 
                    <Cell col = {6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className ="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize:'30px', fontFamily:"Anton"}}>
                                        <i className = "fa fa-phone-square" aria-hidden = 'true'/>
                                        425-647-5665
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize:'30px', fontFamily:"Anton"}}>
                                        <i className = "fa fa-envelope" aria-hidden = 'true'/>
                                        justinya07@gmail.com
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>

                    </Cell> 
                </Grid>
            </div>
        )
    }
}

export default Contact;