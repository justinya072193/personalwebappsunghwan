import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education.js'
import Experience from './experience.js'
import Leadership from './leadership'

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col ={4}>
                        <div style = {{textAlign:'center'}}>
                            <img src = 'https://media.licdn.com/dms/image/C5603AQG4euEhFoJTpw/profile-displayphoto-shrink_200_200/0?e=1568851200&v=beta&t=gW7B_QWUo8hisHr49Tvye0Ew8stPYTSR22JyylHDSmw'
                                alt = "selfie"
                                style = {{height:'200px'}}
                            />
                        </div>

                        <h2 style = {{paddingTop:'2em'}}>Justin Park</h2>
                        <h2 style = {{color:'grey'}}>Programmer</h2>
                        <hr style = {{borderTop: '3px solid #833fb2', width:'50%'}}/>
                        <p>Calm and focused in stressful situations offering perspectives to solve problems with UX/UI and programming knowledges.</p>
                        <hr style = {{borderTop: '3px solid #833fb2', width:'50%'}}/>
                        <h5>Address</h5>
                        <p>4060 9th Ave NE Seattle, 98105</p>
                        <h5>Phone</h5>
                        <p>425-647-5665</p>
                        <h5>e-mail</h5>
                        <p>justinya07@gmail.com</p>
                        <h5>LinkedIn</h5>
                        <p>https://www.linkedin.com/in/justin-park-b4a68814a/</p>
                        <hr style = {{borderTop: '3px solid #833fb2', width:'50%'}}/>
                    </Cell>
                    <Cell className = "resume-right-col" col = {8}>
                        <h2>Education</h2>
                        <Education
                            startYear = "September, 2015"
                            endYear = "March, 2020"
                            schoolName = "University of Washington"
                            schoolDescription = "Information School: Specialized in Data Science and Information Architect"
                        />
                        <Education
                            startYear = "September, 2011"
                            endYear = "June, 2015"
                            schoolName = "Skyline High School"
                            schoolDescription = "Located in Sammamish, WA"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience 
                            startYear = "June, 2019"
                            endYear = "September, 2019"
                            jobName = "Software Developer Intern at Liberty Mutual Insurance"
                            jobDescription = "Designed and developed a website that can modify and insert database using Django, Python, HTML, CSS and JavaScript. 
                            Query SQL database to get results needed or modify errors."
                        />
                        <Experience 
                            startYear = "January, 2019"
                            endYear = "June, 2019"
                            jobName = "Full-Stack Developer Intern at HaitiCoffee"
                            jobDescription = "Designed the website with UX Research and UX Design with the team.Programmed the Frontend website using React, HTML, CSS and JavaScript and backend using database knowledge"
                        />
                        <Experience
                            startYear = "October, 2018"
                            endYear = "December, 2018"
                            jobName = "Starbucks International Dataflow Researcher"
                            jobDescription = "Manipulated and Analyzed data of Starbucks stores in Europe. Designed a data flow diagram of Starbucks stores. Collaborated with multiple directors of Starbucks to get data and produce an accurate data structure"
                        />
                        <Experience
                            startYear = "June, 2018"
                            endYear = "September, 2018"
                            jobName = "UX Research Assistant at Digital Youth Lab (University of Washington)"
                            jobDescription = "Research to find existing problems and goods of contemporary technologies for kids. Assisted the professor on researching on future technologies. Published SIGCHI research paper with collaborators at Digital Youth Lab"
                        />
                        <Experience
                            startYear = "January, 2018"
                            endYear = "June 2018"
                            jobName = "UX Research Assistant at KidsTeam (University of Washington)"
                            jobDescription = "Co-design new technologies and learn activities for children. Analyzed children’s behavior on various technologies for kids. Collaborated analyzing kids' interaction with technology, science and cooking in an after-school program"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Leadership</h2>
                        <Leadership
                            startYear = "September, 2012"
                            endYear = "Current"
                            jobName = "KORAFF (Korean Adoptee Family Foundation) Founder"
                            jobDescription = "Operated and maintained equipment vital to the success of the organization. Organized and administered events and website Provided cultural education to more than 80 kids"
                        />
                        <Leadership
                            startYear = "June, 2017"
                            endYear = "June 2019"
                            jobName = "University of Washington Korean Student Union Marketing Manager"
                            jobDescription = "Advertised using various media and succeeded to gathered about 500 people. Received sponsors from local industries."
                        />
                        <Leadership
                            startYear = "September, 2017"
                            endYear = "December, 2017"
                            jobName = "YMCA Service Learning Programming Tutor"
                            jobDescription = "YMCA Lake City Tutor for low income family. Mentored programming language and built relationships with 10 children in low income family"
                        />
                    
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;