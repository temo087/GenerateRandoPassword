type includeUpperCaseProps = {
    HaveUppercase : boolean
    setHaveUppercase: (include:boolean) => void
  }

const HaveUppercases = ({HaveUppercase,setHaveUppercase}:includeUpperCaseProps) => {
    function handleIncludeUppercaseChange (){
        setHaveUppercase(!HaveUppercase)
    }
  return (
    <div className="mb-2">
        <input type="checkbox" id='includeUppercase' 
        checked={HaveUppercase}
        className="mr-2"
        onChange={handleIncludeUppercaseChange}
        />
        <label className="xl:text-[25px] font-fontFamily" htmlFor="HaveUppercase">
            Include Uppercase Letters
        </label>
    </div>
  )
}

export default HaveUppercases