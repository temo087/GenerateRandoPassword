import { useState } from "react";
import { GenerateRandomPassword } from "./Password";
import "./App.css";
import PasswordLength from "./components/PasswordLength";
import HaveUppercases from "./components/HaveUppersCases";
import HaveLowerCase from "./components/HaveLowerCases";
import HaveNumbers from "./components/HaveNumbers";
import HaveSymbols from "./components/HaveSymbols";
import { AiOutlineCopy } from 'react-icons/ai';

function App() {
  const [password, setPassword] = useState<string | null>(null);
  const [passwordLength, setPasswordLength] = useState<number>(4);
  const [haveSymbols, setHaveSymbols] = useState<boolean>(false);
  const [haveLowerCase, setHaveLowerCase] = useState<boolean>(true);
  const [haveNumbers, setHaveNumbers] = useState<boolean>(true);
  const [haveUpperCase, setHaveUpperCase] = useState<boolean>(true);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [passwordStrength, setPasswordStrength] = useState<string | null>("Generated Password");

  function evaluatePasswordStrength(password:string) {
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasLowerCase && !hasUpperCase) {
      return "Bad Password";
    } else if (hasLowerCase && hasUpperCase && !hasNumber) {
      return "Not Bad";
    } else if (hasLowerCase && hasUpperCase && hasNumber && !hasSymbols) {
      return "Good Password";
    } else if (hasLowerCase && hasUpperCase && hasNumber && hasSymbols) {
      return "Best Password";
    } else {
      return "Nice Password";
    }
  }

  function handleGeneratePassword() {
    const newPassword = GenerateRandomPassword({
      length: passwordLength,
      includeLowerCase: haveLowerCase,
      includeUpperCase: haveUpperCase,
      includeNumbers: haveNumbers,
      includeSymbols: haveSymbols,
    });
    setPassword(newPassword);

    // Evaluate password strength
    const strength = evaluatePasswordStrength(newPassword);
    setPasswordStrength(strength);
  }

  function handleCopy() {
    if (password) {
      navigator.clipboard.writeText(password);
    }
  }

  return (
    <>
      <div
        onPointerMove={(e) => {
          setPosition({ x: e.clientX, y: e.clientY });
        }}
        className='kaxa'
        style={{ position: 'relative' }} 
      >
        <div
          className="
            font-fontfamily
            items-center
            flex
            flex-col
            justify-center
            min-h-screen
            gap-4
            bg-black 
            text-white"
        >
          <h1 className="xl:text-[40px] font-fontFamily" id="passwordStrengthTitle">{passwordStrength}</h1>
          {password && 
            <div 
              className="
                bg-[#18171F]
                text-white
                px-4 py-2
                break-all
                flex
                justify-between
                items-center
                w-[320px]
                mb-4
                xl:w-[600px]
                xl:h-[50px]"
            >
              <div className="text-xl">{password}</div>
              <button className="text-xl" onClick={handleCopy}><AiOutlineCopy/></button>
            </div>
          }
          <div
            className="
              bg-black
              w-[320px]
              
              dark:bg-#A4FFAF]
              p-4
              gap-2 
              xl:w-[600px]
              xl:h-[410px]"
          >
            <PasswordLength 
              passwordLength={passwordLength}
              setPasswordLength={setPasswordLength}
            />
            <HaveUppercases
              HaveUppercase={haveUpperCase}
              setHaveUppercase={setHaveUpperCase}
            />
            <HaveLowerCase
              HaveLowerCase={haveLowerCase}
              SetHaveLowerCase={setHaveLowerCase}
            />

            <HaveNumbers
              HaveNumbers={haveNumbers}
              SetHaveNumbers={setHaveNumbers}
            />

            <HaveSymbols
              HaveSymbols={haveSymbols}
              SetHaveSymbols={setHaveSymbols}
            />

            <button onClick={handleGeneratePassword} className="
              px-4 py-4 bg-[#A4FFAF] rounded-md shadow-md w-full
              border text-black border-solid hover:border-#A4FFAF
              hover:text-[#A4FFAF] hover:bg-[#18171F] transition-all duration-300 uppercase font-fontFamily xl:mt-[25px]"
            >
              Generate
            </button>
          </div>
        </div>
        <div
          style={{
            position: 'fixed',
            width: "10px",
            height: "10px",
            borderRadius: '50%',
            background: 'transparent', 
            border: '2px solid #A4FFAF',
            transform: 'translate(-50%, -50%)',
            left: `${position.x}px`,
            top: `${position.y}px`,
            pointerEvents: 'none', 
            zIndex: 9999, 
            transition: '0.1s'
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
