import miles1024 from './assets/miles-1024.jpg';
import miles768 from './assets/miles-768.jpg';
import miles480 from './assets/miles-480.jpg';
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
            alt="Descripción de la imagen"
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

function Page() {
  return (
    <div>
        <Header/>
    </div>
  );
}
export default Page;
