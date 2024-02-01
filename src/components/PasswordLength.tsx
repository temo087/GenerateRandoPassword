import { ChangeEvent } from 'react'
type PasswordProps = {
  passwordLength : number
  setPasswordLength: (length:number) => void
}
const PasswordLength = ({passwordLength,setPasswordLength}:PasswordProps) => {
  function handlePasswordLengthChange(e:ChangeEvent<HTMLInputElement>){
    setPasswordLength(parseInt(e.target.value,10))
  }
  return (
    <div className='mb-2'>
      <div className='
        flex items-center 
        justify-between 
        font-medium'>

        <div
         className='
         font-fontFamily'
         >Password length</div>
        <div className='
          text-2xl
        text-[#A5FFaF]'
         >{passwordLength}</div>
      </div>
      <input type="range" 
      id='passwordLength'
      min={4}
      max={20}
      value={passwordLength}
      className='
      w-full
      appearance-none
      h-1'
      onChange={handlePasswordLengthChange}
      />
    </div>
  )
}

export default PasswordLength