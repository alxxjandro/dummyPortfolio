import miles1024 from './assets/miles-1024.jpg';
import miles768 from './assets/miles-768.jpg';
import miles480 from './assets/miles-480.jpg';
import footer1024 from './assets/footer1024.jpg'
import footer768 from './assets/footer768.jpg'
import footer480 from './assets/footer480.jpg'
import './Page.css';

function Header() {
  return (
    <div className="header">
        <div className='imageContainer'>
            <img
            srcSet={`
                ${miles480} 480w,
                ${miles768} 768w,
                ${miles1024} 1024w
            `}
            sizes="
                (max-width: 600px) 100vw,
                (max-width: 1024px) 90vw,
                1024px
            "
            src={miles1024}
            alt="Miles morales portrait photo"
            />
            <h1 className='name'>Miles Morales</h1>
        </div>
        <div className='aboutMe'>
            <h1>About me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sunt ducimus dicta commodi officia illum similique doloremque incidunt nobis.
                Magni necessitatibus incidunt aperiam! Provident fugiat fuga esse sequi culpa, 
                tempora quo.
            </p>
            <div className='aboutMeBtns'>
                <img className='aboutMeIcon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                <img className='aboutMeIcon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" />
                <img className='aboutMeIcon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" />
            </div>
        </div>
    </div>
  );
}

function Content(){
    return(
        <div className='contentDiv'>
            <h1 className='workTitle'>My work</h1>
            <div className='projects'>
                <Project/>  
                <Project/>  
                <Project/>  
                <Project/>  
                <Project/>  
                <Project/>  
            </div>
        </div>
    )
}

function Footer(){
    return(
        <div>
            <img
            srcSet={`
                ${footer480} 480w,
                ${footer768} 768w,
                ${footer1024} 1024w
            `}
            sizes="
                (max-width: 600px) 100vw,
                (max-width: 1024px) 90vw,
                1024px
            "
            src={footer1024}
            alt="Miles morales throwing a web"
            />
            FOOTER
        </div>
    )
}

function Project({name = 'Project Name', desc = 'Short description of the project. Just a couple sentences will do.' }){
    let color = pickRandomColor();
    return(
        <div className='project'>
            <div className='projectImg' style={{ backgroundColor: color }}>screenshot <br/>of project</div>
            <div className='projectName'>
                <h4>{name}</h4> 
                <div>        
                    <img className='projectIcon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                    <svg className='projectIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>open-in-new</title><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg>
                </div>
            </div>
            <div className='projectDesc'>
                <p>{desc}</p>
            </div>
        </div>
    )
}

function pickRandomColor(){
    const colors = [
    '#C0392B', 
    '#8E44AD', 
    '#27AE60', 
    '#D2527F', 
    '#D35400', 
    '#2980B9', 
    '#F39C12', 
    '#16A085', 
    '#2C3E50', 
    '#7D3C98'  
    ];

    return colors[Math.floor(Math.random() * colors.length)];
}

function Page() {
  return (
    <div>
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
}
export default Page;
