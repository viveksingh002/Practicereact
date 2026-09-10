function Onlick(){
    function handelevent(){
        console.log("Hello vivek");
        document.body.style.backgroundColor='green';
    }
    return(
        <div>
            <button onClick={handelevent}>
                button
            </button>
        </div>
    )
}
export default Onlick
