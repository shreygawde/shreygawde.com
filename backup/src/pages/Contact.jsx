import Socialink from '../assets/components/Socialink.jsx';
export default function Contact()

{ return(
   
     <div
  className="
    w-full h-full min-h-screen
    bg-[url('/concrete-texture.jpg')]
    bg-cover bg-center bg-no-repeat
  "
>
   
  
   <ul className="text-[20px] flex flex-col items-center w-full">
   <li>
   <Socialink
  icon="/gitt.png"
  text="GitHub"
  url="https://github.com/shreygawde"/>
  </li>
    <li>
   <Socialink
  icon="/insta.png"
  text="Instagram"
  url="https://www.instagram.com/shreygawde/"
  reverse={true}
  className='gap-1'
  />
  </li>
  <li>
   <Socialink
  icon="/reddit.png"
  text="Reddit"
  url="https://www.reddit.com/user/Shreyaldo07/"/>
  </li>
  <li>
   <Socialink
  icon="/spotif.png"
  text="Spotify"
  url="https://open.spotify.com/user/bau6zfllyr7r7wefix042ix3x"
  reverse={true}/>
  </li>
  <li>
   <Socialink
  icon="/gitt.png"
  text="GitHub"
  url="https://github.com/shreygawde"/>
  </li>
    
  </ul>
 </div>
)
}