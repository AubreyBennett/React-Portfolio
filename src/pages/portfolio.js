import React from 'react';
import Project from '../components/Project/project';

import passAuxImg from '../Assets/passme.jpg';
import passwordImg from '../Assets/password.jpg';
import workdayImg from '../Assets/workday.jpg';
import puppyPlayImg from '../Assets/puppyplay.jpg';
import noteTakerImg from '../Assets/notetaker.jpg';


function Portfolio() {
    return (
        <div>
            <Project
                title = "Puppy Play"
                img = {puppyPlayImg}
                description = {`An online application where a user can go in and set up puppy play dates.`}
                githublink="https://github.com/dassoumik/project-2" 
                applink = "https://app-puppy-play.herokuapp.com/"
             />

            <Project
                title = "Pass Me The Aux"
                img = {passAuxImg}
                description = {`Music App that allows you to lookup an artist and a song by
                that artist and then provides you with the lyrics to that song and similar songs produced by the artist.`}
                githublink="https://github.com/jpecheverryp/pass-me-the-aux" 
                applink = "https://jpecheverryp.github.io/pass-me-the-aux/"
             />

            <Project
                title = "Note Taker"
                img = {noteTakerImg}
                description = {`Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.`}
                githublink="https://github.com/AubreyBennett/Note-Taker" 
                applink = "https://gentle-tundra-38917.herokuapp.com/"
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