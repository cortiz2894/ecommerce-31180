const SnackBar = ({text, children}) => {
    return(
        <div className="snackbar-custom">
            Alerta!
            {children}
        </div>
    )
}

export default SnackBar