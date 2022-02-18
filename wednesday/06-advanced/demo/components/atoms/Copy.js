
// const CopyText = (props) => {
const CopyText = ({
    // We can set defaults
    color = "#000",
    children
}) => {
    return (
        <>
            <p className="copy">{children}</p>
            <style jsx>{`
                .copy {
                    color: ${color};
                    font-size: 22px;
                    text-align: center;
                }
            `}</style>
        </>

    )
}

export default CopyText;
