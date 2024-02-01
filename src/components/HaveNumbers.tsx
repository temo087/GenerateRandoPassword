type PasswordNumberProps = {
    HaveNumbers : boolean
    SetHaveNumbers: (length:boolean) => void
  }
  
  const HaveNumbers = ({HaveNumbers,SetHaveNumbers}:PasswordNumberProps) => {
    function handleHaveNumberChange(){
      SetHaveNumbers(!HaveNumbers)
    }
  return (
    <div className="mb-2 xl:pt-[12px]">
        <input 
        type="checkbox"
        id='includeNumbers' 
        checked={HaveNumbers}
        className="mr-2"
        onChange={handleHaveNumberChange}
        />
        <label className="xl:text-[25px] font-fontFamily" htmlFor="HaveNumbers">
            Include Number Letters
        </label>
    </div>
  )
  }
  
  export default HaveNumbers