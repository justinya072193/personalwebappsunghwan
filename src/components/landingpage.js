import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style = {{width: '100%', margin: 'auto'}}> 
                <Grid className = "landing-grid">
                    <Cell col={12}>
                        <img
                            src = "https://media.licdn.com/dms/image/C5603AQG4euEhFoJTpw/profile-displayphoto-shrink_200_200/0?e=1568851200&v=beta&t=gW7B_QWUo8hisHr49Tvye0Ew8stPYTSR22JyylHDSmw"
                            alt = "avatar"
                            className = "avatar-img"
                        />
                        <div className = "banner-text">
                            <h1>Software/Full-Stack Developer</h1>
                            <hr/>
                            <p>Python | Java | SQL | Django | Machine Learning | Azure | AWS | API | Data Structure | Docker | NoSQL | R | Agile | HTML | CSS | JavaScript | React-App | UX | UI | d3 | Node.js</p>
                            <div className = "social-links">
                                <a href = "https://www.linkedin.com/in/justin-park-b4a68814a/" rel = "noopener noreferrer" target = "_blank">
                                    <i className = "fa fa-linkedin-square" aria-hidden = "true"/>
                                </a>
                                <a href = "https://github.com/justinya072193?tab=repositories" rel = "noopener noreferrer" target = "_blank">
                                    <i className = "fa fa-github-square" aria-hidden = "true"/>
                                </a>
                                <a href = "https://www.facebook.com/justin.park.9889?ref=bookmarks" rel = "noopener noreferrer" target = "_blank">
                                    <i className = "fa fa-facebook-square" aria-hidden = "true"/>
                                </a>

                            </div>
                        </div>
                            
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Landing;