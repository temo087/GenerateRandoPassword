type SymbolProps = {
    HaveSymbols : boolean
    SetHaveSymbols: (length:boolean) => void
  }
  
  const HaveSymbols = ({HaveSymbols,SetHaveSymbols}:SymbolProps) => {
    function handleHaveSymbolChange(){
      SetHaveSymbols(!HaveSymbols)
    }
  return (
    <div className="mb-2 xl:pt-[12px]">
        <input 
        type="checkbox"
        id='includeSymbols' 
        checked={HaveSymbols}
        className="mr-2"
        onChange={handleHaveSymbolChange}
        />
        <label className="xl:text-[25px] font-fontFamily" htmlFor="HaveSymbols">
            Include Symbol Letters
        </label>
    </div>
  )
  }
  export default HaveSymbols