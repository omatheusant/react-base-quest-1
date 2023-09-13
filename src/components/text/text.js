const Text = ({children}) => {
    return(
        <div 
        style={{
            color: 'blue', 
            textTransform: "uppercase"}
        }>{children}</div>
    )
}

export default Text