import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Mail from '@mui/icons-material/Mail';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import Clockwise from'./clockwise.png';
import Asana from'./asana.png';
import Disney from'./disney.png';
import ServiceTitan from './servicetitan.png';
import BlossomVR from './blossomvr.png';
import Profile from './profile.jpeg';
import BearPairs from './bearpairs2.jpg';
import Sheroes from './sheroes.png';
import VR from './vr.jpg';

function App() {
  return (
    <div className="bg-ivory">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar className="flex bg-dark-blue font-sans h-24">
            <h2 className="flex grow justify-start text-4xl text-ivory mx-3"><a href="#">rishma murugan</a></h2>
            <h2 className="text-ivory text-3xl mx-3"><a href="#about">about</a></h2>
            <h2 className="text-ivory text-3xl mx-3"><a href="#experience">experience</a></h2>
            <h2 className="text-ivory text-3xl mx-3"><a href="#projects">projects</a></h2>
            <h2 className="text-ivory text-3xl mx-3"><a href="#hello">say hi</a></h2>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
      <div className="min-h-screen flex justify-center">
        <div className="text-center items-center flex text-dark-blue">
          <div>
            <p className="font-sans text-7xl italic font-bold py-7">hey!</p>
            <p className="font-sans text-7xl font-bold py-7">I'm Rishma</p>
            <p className="font-sans text-5xl font-bold py-4">
              I love building 
              <span className=""> impactful </span> 
              and 
              <span className=""> creative </span> 
              products.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-fit pb-10 flex flex-start text-ivory bg-dark-blue/75">
        <div>
          <p id="about" className="font-sans scroll-mt-20 text-5xl font-bold px-20 pt-20 leading-10">
            <a href="#about">a little about me:</a>
            </p>
          <p className="font-sans text-3xl px-20 pt-5 leading-10">
            I graduated from U.C. Berkeley in Dec. 2021 with degrees in Electrical Engineering and Computer Science & Business Administration.
          </p>
          <p className="font-sans text-3xl px-20 pt-5 leading-10">
            I thrive when I'm wearing multiple hats, working on complex problems, and pursuing meaningful projects.
          </p>
          <p className="font-sans text-3xl px-20 pt-5 leading-10">
            Outside of tech, I enjoy film photography, running, and experimenting with new recipes!
          </p>
        </div>
        <div className="max-w-[400px] max-h-[400px] mr-20 my-10">
          <img className="invisible md:visible rounded-full" src={Profile}/>
        </div>
      </div>
      <div className="min-h-fit pb-20 justify-center flex flex-col text-dark-blue bg-blue/25">
        <div className="justify-start px-20 pb-10">
          <p id="experience" className="font-sans scroll-mt-20 text-5xl font-bold pt-20 leading-10">
            experience:
          </p>
          <p className="font-sans text-3xl pt-5 leading-10">
            In the past, I've worked at a variety of startups & larger companies, focusing on web, VR, and mobile development.
          </p>
          <p className="font-sans text-3xl pt-5 leading-10">
            For more info, check out my {" "}
            <a className="underline" href="https://drive.google.com/file/d/17tYEsQNgsoVeTFt9fVbVAj6VxDxGr3mY/view?usp=sharing" target="_blank">resume</a> 
            {" "}or {" "}
            <a className="underline" href="https://www.linkedin.com/in/rishma-murugan/" target="_blank">LinkedIn</a> 
            !
          </p>
        </div>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent 
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
            >
              <p className="mx-5 text-2xl font-sans font-bold font-sans">May 2022 - Present</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector style={{ background: '#f4eae6' }} />
              <TimelineDot style={{ background: '#f4eae6' }}
                className="w-20 h-20">
                <a href="https://www.getclockwise.com/" target="_blank">
                  <img src={Clockwise}/>
                </a>
              </TimelineDot>
              <TimelineConnector style={{ background: '#f4eae6' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <p className="text-4xl mx-5 font-bold font-sans">Clockwise</p>
              <p className="text-2xl mx-5 font-sans italic">Software Engineer</p>
              <p className="text-xl mx-5 font-sans">Frontend web development</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent 
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
            >
              <p className="text-2xl mx-5 font-sans font-bold font-sans">Dec. 2020 - Feb. 2022</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector style={{ background: '#f4eae6' }} />
              <TimelineDot style={{ background: '#f4eae6' }}
                className="w-20 h-20 align-middle justify-center items-center">
                <a href="https://www.blossomvr.com/" target="_blank">
                  <img className="max-h-[63px]" src={BlossomVR}/>
                </a>
              </TimelineDot>
              <TimelineConnector  style={{ background: '#f4eae6' }}  />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <p className="text-4xl mx-5 font-bold font-sans">BlossomVR</p>
              <p className="text-2xl mx-5  font-sans italic">Cofounder, VR Engineer</p>
              <p className="text-xl mx-5  font-sans">VR development</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent 
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
            >
              <p className="text-2xl mx-5 font-sans font-bold font-sans">May 2021 - Aug. 2021</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector style={{ background: '#f4eae6' }}  />
              <TimelineDot style={{ background: '#f4eae6' }}
                className="w-20 h-20 align-middle justify-center items-center">
                <a href="https://asana.com/" target="_blank">
                  <img className="max-w-[60px] max-h-[60px] pb-[5px]" src={Asana}/>
                </a>
              </TimelineDot>
              <TimelineConnector style={{ background: '#f4eae6' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <p className="text-4xl mx-5 font-bold font-sans">Asana</p>
              <p className="text-2xl mx-5 font-sans italic">Software Engineering Intern</p>
              <p className="text-xl mx-5 font-sans">Full-stack web development</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent 
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
            >
              <p className="text-2xl mx-5 font-sans font-bold font-sans">June 2020 - Aug. 2020</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector style={{ background: '#f4eae6' }} />
              <TimelineDot style={{ background: '#f4eae6' }}
                className="w-20 h-20 align-middle justify-center items-center">
                <a href="https://thewaltdisneycompany.com/" target="_blank">
                  <img className="max-w-[75px] max-h-[50px] pb-[5px]"  src={Disney}/>
                </a>
              </TimelineDot>
              <TimelineConnector style={{ background: '#f4eae6' }}  />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <p className="text-4xl mx-5 font-bold font-sans">Disney</p>
              <p className="text-2xl mx-5 font-sans italic">Software Engineering Intern</p>
              <p className="text-xl mx-5 font-sans">Full-stack mobile development</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineOppositeContent 
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
            >
              <p className="text-2xl mx-5 font-sans font-bold font-sans">May 2019 - Aug. 2019</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector style={{ background: '#f4eae6' }} />
              <TimelineDot style={{ background: '#f4eae6' }}
                className="w-20 h-20 align-middle justify-center items-center">
                <a href="https://www.servicetitan.com/" target="_blank">
                  <img className="max-w-[60px] max-h-[60px]" src={ServiceTitan}/>
                </a>
              </TimelineDot>
              <TimelineConnector style={{ background: '#f4eae6' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <p className="text-4xl mx-5 font-bold font-sans">ServiceTitan</p>
              <p className="text-2xl mx-5 font-sans italic">Software Engineering Intern</p>
              <p className="text-xl mx-5 font-sans">Full-stack web development</p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className="min-h-fit pb-10 flex flex-col justify-start px-20 text-dark-blue">
        <p id="projects" className="font-sans text-5xl scroll-mt-20 font-bold pt-20 leading-10">
          projects:
        </p>
        <div className="flex flex-row align-middle">
          <div className="my-10 bg-white max-w-[200px] max-h-[200px]">
            <img className="border-8 bg-white p-4 bg-white border-white border-dotted invisible md:visible rounded-full" src={BearPairs}/>
          </div>
          <div className="flex-col">
            <p className="font-sans text-4xl font-bold px-20 pt-5 mt-10 leading-10">BearPairs</p>
            <p className="font-sans text-2xl italic px-20 pt-2">Matchmaking platform for Berkeley students</p>
            <p className="font-sans text-2xl px-20 pt-2">
              Developed the algorithm to pair participants and built the full-stack web application using React, Firebase, and Google Cloud Services.
              Had over <b>1,200 student participants</b> and obtained <b>multiple sponsors</b> for advertising and student discounts.
            </p>
          </div>
        </div>
        <div className="flex flex-row align-middle">
          <div className="flex-col">
            <p className="font-sans text-4xl font-bold pt-5 leading-10">Virtual Reality Research</p>
            <p className="font-sans text-2xl italic pt-2">Research project to reduce cybersickness in virtual reality</p>
            <p className="font-sans text-2xl mr-10 pt-2">
              Created a prototype belt that mimicked motions in virtual reality through haptic feedback.
              Designed and built a VR environment in Unity that induced cybersickness for test subjects.
              Conducted study to test prototype belt and determined that the <b>belt successfully reduced VR cybersickness</b>.
            </p>
          </div>
          <div className="mb-10 max-w-[200px] max-h-[200px]">
            <img className="border-8 bg-white p-4 bg-white border-white border-dotted invisible md:visible rounded-full" src={VR}/>
          </div>
        </div>
        <div className="flex flex-row align-middle">
          <div className="mb-10 max-w-[200px] max-h-[200px]">
            <img className="border-8 bg-white p-4 bg-white border-white border-dotted invisible md:visible rounded-full" src={Sheroes}/>
          </div>
          <div className="flex-col">
            <p className="font-sans text-4xl font-bold px-20 leading-10">Sheroes</p>
            <p className="font-sans text-2xl italic px-20 pt-2">Alexa App to Bring Superheroes to Life</p>
            <p className="font-sans text-2xl px-20 pt-2">
              Created an interactive Alexa application to empower young children and help them relate to their superhero role models.
              Utilized the Marvel API to access information about each superhero.
              <b> Winner of the 2020 Disney Intern Hackathon.</b>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-fit flex bg-dark-blue/75 justify-start text-ivory">
        <div className="justify-start px-20 pb-10">
          <p id="hello" className="font-sans text-5xl scroll-mt-20 font-bold pt-20 leading-10">
            say hello!
          </p>
          <div className="flex flex-row my-5 items-center">
            <Mail sx={{ width: 40, height: 40 }}/>
            <p className="font-sans text-3xl mx-5 leading-10">
              <a className="underline" href="mailto:rishma.murugan@berkeley.edu" target="_blank">rishma.murugan@berkeley.edu</a> 
            </p>
          </div>
          <div className="flex flex-row my-5 items-center">
            <LinkedIn sx={{ width: 40, height: 40 }}/>
            <p className="font-sans text-3xl mx-5 leading-10">
              <a className="underline" href="https://www.linkedin.com/in/rishma-murugan/" target="_blank">@rishma-murugan</a> 
            </p>
          </div>
          <div className="flex flex-row my-5 items-center">
            <Twitter sx={{ width: 40, height: 40 }}/>
            <p className="font-sans text-3xl mx-5 leading-10">
              <a className="underline" href="https://twitter.com/itsrishma/" target="_blank">@ItsRishma</a> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
