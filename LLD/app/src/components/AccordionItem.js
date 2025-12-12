const AccordionItem=({title,body,isOpen,setIsOpen})=>{
    return (
        <div>
            <div className="font-bold p-2 bg-slate-200 flex justify-between" onClick={()=>setIsOpen()}>
                <span>{title}</span>
                <span>⬇️</span>
            </div>
            <div>{isOpen && body}</div>
        </div>
    )
}

export default AccordionItem;
