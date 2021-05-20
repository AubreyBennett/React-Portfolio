import React from 'react';
import Project from '../components/Project/project';

import passAuxImg from '../Assets/passme.jpg';
import passwordImg from '../Assets/password.jpg';
import workdayImg from '../Assets/workday.jpg';


function Portfolio() {
    return (
        <div>
            <Project
                title = "Pass Me The Aux"
                img = {passAuxImg}
                description = {`Music App that allows you to lookup an artist and a song by
                that artist and then provides you with the lyrics to that song and similar songs produced by the artist.`}
                githublink="https://github.com/jpecheverryp/pass-me-the-aux" 
                applink = "https://jpecheverryp.github.io/pass-me-the-aux/"
             />
            
            <Project 
                title = "Workday Scheduler"
                img = {workdayImg}
                description = {`Daily planner that will help you manage your time
                effectively.`}
                githublink="https://github.com/AubreyBennett/Workday-scheduler"  
                applink = "https://aubreybennett.github.io/Workday-scheduler/" 
            />

            <Project
                title = "Password Generator"
                img = {passwordImg}
                description = {`Generates random passwords with the characters you
                desire.`}
                githublink="https://github.com/AubreyBennett/Password-Generator"  
                applink = "https://aubreybennett.github.io/Password-Generator/" 
            />
        </div>
    );
}

export default Portfolio;