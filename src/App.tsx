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

        <div>
          <h1  id="passwordStrengthTitle">{passwordStrength}</h1>
          {password && 
            <div 
 
            >
              <div className="text-xl">{password}</div>
              <button className="text-xl" onClick={handleCopy}><AiOutlineCopy/></button>
            </div>
          }
          <div
          
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

            <button onClick={handleGeneratePassword}>
              Generate
            </button>
          </div>
        </div>
        <div
        ></div>
      
    </>
  );
}

export default App;
