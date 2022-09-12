interface HamburgerTypes {
   style: {
      btn?: string
      span?: string
   }
   click: boolean
   setClick: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Hamburger({ style, click, setClick }: HamburgerTypes) {
   return (
      <button
         className={`hamburger-btn w-6 h-6  transition-all ${style?.btn} ${click && 'open'}`}
         onClick={() => setClick(prev => !prev)}
      >
         <span className={`hamburger-top ${style?.span ?? 'bg-black'}`}></span>
         <span className={`hamburger-middle ${style?.span ?? 'bg-black'}`}></span>
         <span className={`hamburger-bottom ${style?.span ?? 'bg-black'}`}></span>
      </button>
   )
}
