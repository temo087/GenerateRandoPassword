

type LowerCaseProps = {
    HaveLowerCase : boolean
    SetHaveLowerCase: (include:boolean) => void
  }
  
  const HaveLowerCase = ({HaveLowerCase,SetHaveLowerCase}:LowerCaseProps) => {
    function handleIncludeLowercaseChange(){
        SetHaveLowerCase(!HaveLowerCase)
    }
  return (
    <div className="mb-2 xl:pt-[12px]">
        <input 
        type="checkbox"
        id='includeLowercase' 
        checked={HaveLowerCase}
        className="mr-2"
        onChange={handleIncludeLowercaseChange}
        />
        <label className="xl:text-[25px] font-fontFamily" htmlFor="HaveLowerCase">
            Include Lowercase Letters
        </label>
    </div>
  )
  }
  
  export default HaveLowerCase