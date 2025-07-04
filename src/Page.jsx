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
        <div className='footer'>
            <div className='footerInfo'>
                <div className='contactInfo'>
                    <h1>Contact me</h1>
                    <p>Please get in touch if you think our work could be mutually beneficial!</p>
                    <p>1234 Random Road<br/>Random Town, California, 12345</p>
                </div>
                <div className='phoneAndMail'>
                    <div className='footerIcon'>
                        <svg className='aboutMeIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
                        <p>555-555-5555</p>
                    </div>
                    <div className='footerIcon'>
                        <svg className='aboutMeIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title><path d="M5,5H18C19.66,5 21,6.34 21,8V17C21,18.66 19.66,20 18,20H5C3.34,20 2,18.66 2,17V8C2,6.34 3.34,5 5,5M5,6C4.5,6 4.06,6.17 3.72,6.47L11.5,11.5L19.28,6.47C18.94,6.17 18.5,6 18,6H5M11.5,12.71L3.13,7.28C3.05,7.5 3,7.75 3,8V17C3,18.1 3.9,19 5,19H18C19.1,19 20,18.1 20,17V8C20,7.75 19.95,7.5 19.87,7.28L11.5,12.71Z" /></svg>
                        <p>miles.morales@fakemail.com</p>
                    </div>
                </div>
                <div className='footerSocials'>
                    <img className='aboutMeIcon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                    <img className='aboutMeIcon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" />
                    <img className='aboutMeIcon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" />
                </div>
            </div>
            <img
            className='footerImg'
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
