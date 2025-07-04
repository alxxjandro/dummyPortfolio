import miles1024 from './assets/miles-1024.jpg' 
import miles768 from './assets/miles-768.jpg' 
import miles480 from './assets/miles-480.jpg' 

function Header() {
  return (
    <div className="header">
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
        <h1>Hi</h1>
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
